#!/bin/bash
imageName=school-lms-image
containerName=school-lms-container

docker build -t $imageName -f Dockerfile  .

echo Delete old container...
docker rm -f $containerName

echo Run new container...
docker compose up
