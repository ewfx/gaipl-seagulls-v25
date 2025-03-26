from pydantic import BaseModel


class ListContainersInput(BaseModel):
    all: bool = False  # Whether to include stopped containers

class HealthCheckInput(BaseModel):
    service_name: str  # The name of the container to check
# Pydantic Model for Restarting a Service
class RestartServiceInput(BaseModel):
    service_name: str  # The name of the container to restart

