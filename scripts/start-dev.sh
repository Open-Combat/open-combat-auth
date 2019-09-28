# Starts authentication service in dev environment
docker-compose -f dockerfiles/docker-compose.dev.yml down --volumes
docker-compose -f dockerfiles/docker-compose.dev.yml up --build --abort-on-container-exit