import docker

# Initialize Docker client
docker_client = docker.from_env()

def get_docker_client():
    return docker_client