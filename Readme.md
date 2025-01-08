### Docker info
```
docker info
```
### Docker Processing commands
```
# Process all
   docker ps -a

# Process is runing
   docker ps 
```
### Docker Remove and stop Contaier , Images
```
# stop container
   docker stop <container ID>

# Delete conatainer
   docker rm <conrainer ID>

# Delete Image
   docker rmi <Image ID>
```
### Docker Show List Image
```
   docker images
```
### INSTALLATION Package
```
npm init -y
npm i express
```
### Build Docker Image
```
docker build -t my-node-app:1.0 .
```
### Docker Run Image 
```
docker run -d -p 3111:3000 my-node-app:1.0
```
### Create Repository 
1. Open dockhub.com
2. manu Repository  > Click Create a Repository 
3. open Terminul
### Command
1. Login docker
```
docker login
```
2. Tag your path
   
   example : docker tag abc123 myusername/my-app:1.0
```
docker tag <IMAGE_ID> <USERNAME>/<REPOSITORY_NAME>:<TAG>
```
3. Run file Project
```
node <file.js>
```
3. Push to Docker Hub

   example : docker push myusername/my-app:1.0
```
 docker push <USERNAME>/<REPOSITORY_NAME>:<TAG>
```
4. Run file node
```
node <file.js>
```

