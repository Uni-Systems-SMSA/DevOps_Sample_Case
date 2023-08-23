#!/bin/bash
git clone https://github.com/Uni-Systems-SMSA/DevOps_Sample_Case.git

cd DevOps_Sample_Case
git checkout Front-end-features

git pull

docker build -t 172.30.1.224:5050/devops-sample:$1 -t 172.30.1.224:5050/devops-sample:latest .

docker push 172.30.1.224:5050/devops-sample --all-tags

