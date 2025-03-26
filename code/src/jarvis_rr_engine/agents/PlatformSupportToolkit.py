import re
import docker
from typing import List, Dict, Any, Optional
from langchain_core.tools import Tool

from code.src.jarvis_rr_engine.client.dockerclient import get_docker_client
from code.src.jarvis_rr_engine.client.supabase_client import get_supabase_dbclient
from code.src.jarvis_rr_engine.llm.embeddings import get_embedding_model


class PlatformSupportToolkit:
    """Toolkit containing tools for managing Docker services dynamically."""

    @staticmethod
    def list_running_containers(all: bool = False) -> List[Dict[str, str]]:
        """List all Docker containers.

        Args:
            all: If True, return all containers; if False, return only running containers

        Returns:
            List of dictionaries containing container name and status
        """
        try:
            containers = get_docker_client().containers.list(all=all)
            if not containers:
                return []

            container_list = [{c.name: c.status} for c in containers]
            return container_list
        except Exception as e:
            return [{"error": f"Error listing containers: {str(e)}"}]

    @staticmethod
    def check_service_health(service_name: str) -> Dict[str, str]:
        """Check the health status of a given Docker container.

        Args:
            service_name: Name of the Docker container to check

        Returns:
            Dictionary with container name and status
        """
        if not service_name:
            return {"error": "No service name provided"}

        try:
            container = get_docker_client().containers.get(service_name)
            status = container.status
            result = {"container": service_name, "status": status}

            # Store log in Supabase
            PlatformSupportToolkit.store_event_log("Health Check", service_name, result)
            return result
        except docker.errors.NotFound:
            return {"container": service_name, "status": "not_found"}
        except Exception as e:
            return {"container": service_name, "status": "failed", "error": str(e)}

    @staticmethod
    def restart_service(service_name: str) -> Dict[str, str]:
        """Restart a given Docker container.

        Args:
            service_name: Name of the Docker container to restart

        Returns:
            Dictionary with container name and restart status
        """
        if not service_name:
            return {"error": "No service name provided"}

        try:
            container = get_docker_client().containers.get(service_name)
            if container.status == 'exited':
                container.start()
                status = "started"
            else:
                container.restart()
                status = "restarted"

            result = {"container": service_name, "status": status}

            # Store log in Supabase
            PlatformSupportToolkit.store_event_log("Restart Service", service_name, result)
            return result
        except docker.errors.NotFound:
            return {"container": service_name, "status": "not_found"}
        except Exception as e:
            return {"container": service_name, "status": "restart_failed", "error": str(e)}

    @staticmethod
    def store_event_log(action: str, service_name: str, message: Dict[str, Any]) -> str:
        """Store event logs in Supabase vector database.

        Args:
            action: Type of action performed
            service_name: Name of the service involved
            message: Details of the action

        Returns:
            Status message
        """
        try:
            # Convert message to string if it's not already
            message_str = str(message)

            embeddings = get_embedding_model().embed_query(message_str)

            data = {
                "action": action,
                "service_name": service_name,
                "message": message_str,
                "embedding": embeddings
            }

            get_supabase_dbclient().table("system_logs").insert(data).execute()
            return "Log stored successfully."
        except Exception as e:
            print(f"Failed to store log: {str(e)}")
            return f"Failed to store log: {str(e)}"

    @staticmethod
    def search_logs(query: str) -> str:
        """Search past troubleshooting logs using vector similarity.

        Args:
            query: Search query text

        Returns:
            String with matching log entries
        """
        try:
            embeddings = get_embedding_model().embed_query(query)

            response = get_supabase_dbclient().rpc("match_system_logs", {
                "query_embedding": embeddings,
                "match_threshold": 0.75,
                "match_count": 5
            }).execute()

            if response.data:
                return "Past related logs:\n" + "\n".join([str(entry["message"]) for entry in response.data])
            else:
                return "No relevant past logs found."
        except Exception as e:
            return f"Error searching logs: {str(e)}"

    @staticmethod
    def extract_service_name(query: str) -> Optional[str]:
        """Extract service name from the user's query.

        Args:
            query: User's query text

        Returns:
            Extracted service name or None if not found
        """
        try:
            if not query:
                return None

            containers = [c.name for c in get_docker_client().containers.list(all=True)]
            for container in containers:
                if re.search(rf"\b{re.escape(container)}\b", query, re.IGNORECASE):
                    return container
            return None  # No match found
        except Exception as e:
            print(f"Error extracting service name: {str(e)}")
            return None

    def get_tools(self) -> List[Tool]:
        """Register available tools for LangChain.

        Returns:
            List of LangChain Tool objects
        """
        return [
            Tool(
                name="List Running Containers",
                func=lambda x: self.list_running_containers(all=True if x and x.lower() == "true" else False),
                description="Lists Docker containers. Pass 'true' to show all containers including stopped ones."
            ),
            Tool(
                name="Health Check",
                func=lambda query: self.check_service_health(self.extract_service_name(query) or query),
                description="Checks the health status of a Docker container. Input the container name or a query containing the name."
            ),
            Tool(
                name="Restart Service",
                func=lambda query: self.restart_service(self.extract_service_name(query) or query),
                description="Restarts a Docker container. Input the container name or a query containing the name."
            )
            # ,
            # Tool(
            #     name="Search Logs",
            #     func=self.search_logs,
            #     description="Searches past troubleshooting logs using semantic similarity."
            # )
        ]