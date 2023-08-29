minikube mount /root/DevOps_Sample_Case/keycloak:/home/docker &

kubectl set image deployments/frontend-deployment frontend-deployment=172.30.1.224:5050/devops-sample:latest 

kubectl port-forward --address=0.0.0.0 services/frontend-load 3001 &
kubectl port-forward --address=0.0.0.0 services/keycloak-service 8080 &
