#create image with sample database and user
docker build -t sqlserver2022 .
#create shared network
docker network create internal-container-network
#run container with port mapping, connected to internal network
docker container run -it -d --name sqlserver2022-node1 --publish 1435:1433 --network internal-container-network sqlserver2022
