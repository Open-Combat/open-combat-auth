# Runs integration tests
docker-compose -f dockerfiles/docker-compose.it.yml down --volumes
docker-compose -f dockerfiles/docker-compose.it.yml up --build --abort-on-container-exit