# Quick setup

### Admins
1. [Create GitHub account](https://github.com/Uni-Systems-SMSA/DevOps_Sample_Case/tree/Front-end-features#github-account)
2. [Create Organization](https://github.com/Uni-Systems-SMSA/DevOps_Sample_Case/tree/Front-end-features#creating-an-organization-administrators-only)
3. [Invite members to Organization](https://github.com/Uni-Systems-SMSA/DevOps_Sample_Case/tree/Front-end-features#teams))
4. [Create Teams](https://github.com/Uni-Systems-SMSA/DevOps_Sample_Case/tree/Front-end-features#teams)
5. [Create repositories](https://github.com/Uni-Systems-SMSA/DevOps_Sample_Case/tree/Front-end-features#repositories)
6. [Add Branch protection Rules]()
7. [Add Teams to Repositories](https://github.com/Uni-Systems-SMSA/DevOps_Sample_Case/tree/Front-end-features#repositories)
8. [Create Projects](https://github.com/Uni-Systems-SMSA/DevOps_Sample_Case/tree/Front-end-features#projects)
9. [Create pipeline]()
    - Build
    - Test
    - Package
    - Deploy

### Members
1. [Create Github account](https://github.com/Uni-Systems-SMSA/DevOps_Sample_Case/tree/Front-end-features#github-account)
2. [Accept invitation to Organization](https://github.com/Uni-Systems-SMSA/DevOps_Sample_Case/tree/Front-end-features#teams)
3. [Download the necessary software](https://github.com/Uni-Systems-SMSA/DevOps_Sample_Case/tree/Front-end-features#software-installation)
4. [Read the guidelines](https://github.com/Uni-Systems-SMSA/DevOps_Sample_Case/tree/Front-end-features#pipeline)

# Getting started 
This repository is a guideline for creating repositories to use in projects and this is a guide on how to create it and use it. This quide explains step-by-step creating an GitHub account,creating an organization to group many projects together, downloading and installing the necessary software for each member and finally creating a CI/CD pipeline to use when creating a new piece of software and deploying it on a server. 

## GitHub Account
Each member of the project must have a GitHub account you can create one [here](https://github.com/) by entering your information and your preferences.The next step is to create an Organiztion in GitHub to organize your projects and you members in teams for easier control (this is for administrators). 

### Creating an Organization (Administrators only)
To create an Organization you can Sign In on your GitHub account and then going into Settings -> Organizations -> New Organization. In the new page that opens you can choose your plan. The Free plan has almost all the functionality we will use in this case except you cannot use Code Owners (more on that later). Once you choose your plan then you have to choose a name for you Organization and who owns this Organization and then your Organization is Created. The person that created the organization is the Organization Owner. Generally inside a GitHub Organization everyone has one role from the following   
- Owner
- Member
- Moderator
- Billing Manager
- Security Manager (Beta)
- Outside Collaborator
- GitHub App Manager


### Teams 
After an Organization is created you can invite people ot your organization by going to your Organization Home Page -> People -> Invite member and searching by their GitHub username. Once you choose one you can send the invitation and an email will be sent to them. 

Once you have invited everyone that you want to be part of you organization you can start creating Teams to divide people in groups depending on their role in a project. To create a team you can go to your Organization Home Page -> Teams -> New team and then choose the details for each Team. Once you create a Team you can go to your Teams page form your Organization Home Page and select the Team and Add a member you want to be part of the team. 

### Repositories
After you have create all the teams you need and added all the members you can start Creating new repositories by going to your Organization Home Page -> Repositories -> New Repository and filling out the details for the new repository. When you create a new repository you can find it in the Repositories page and by selecting you can see all the information about it. 

To select a team to work a repository you can go to the Teams Page and select a team. Then on the team's page you can go to Repositories and add a repository from those you have created. Additionally you can change the permissionsthat each team's members have on a repository by going to the team's Repository Pgae and choosing from the drop-down list one of the following: 
- **Read**: Recommended for non-code contributors who want to view or discuss your project
- **Triage**: Recommended for contributors who need to proactively manage issues, discussions, and pull requests without write access
- **Write**: Recommended for contributors who actively push to your project
- **Maintain**: Recommended for project managers who need to manage the repository without access to sensitive or destructive actions
- **Admin**: Recommended for people who need full access to the project, including sensitive and destructive actions like managing security or deleting a repositor

### Projects 
GitHub has a feature called Projects which is a way to manage tasks and has a direct connection with the repositories Issues. You can create a new Project by going to the Organization Home Page -> Porjects -> New Project and selecting the view you want the project to have. After creating a Project you can go to the projects Page select a project and then go to the settings from the three-dot man on the top right where you can manage who has access to this project and who can view it. 

## Software Installation
Once you have a GitHub account the next step is preping your computer. You will need two applications Git and TortoiseGit.

### Git
You can download the correct version for your computer of Git from [here](https://git-scm.com/downloads) and then run the installation Wizard you downloaded. Follow the steps in the Installation Wizard without changing anything (unless you know for sure what you are doing) and then press Install. You can use Git from the command line or by opening Git Bash but this is not necessary because everyone can use the application TortoiseGit that we will install below which is essentially a plugin for the Windows File Explorer. 

### Visual Studio Code
The developers of the project can download Visual Studio Code which has a very good integration with Git and is very easy to use with many extensions. If you dont want to use Visual Studio Code and the IDE of your choice does not have an integration with Git you can download TortoiseGit by following the guide below. You can download the correct version for your computer of Visual Studio Code from [here](https://tortoisegit.org/download/) and then run the installation Wizard you downloaded. Follow the steps in the Installation Wizard without changing anything (unless you know for sure what you are doing) and then press Install.

### TortoiseGit
If you don't want to use git or Visual Studio Code to make changes to the project, for example if you are not a developer, you can use TortoiseGit which is a plugin for Windows File Explorer and is really easy to install and use. You can download the correct version for your computer of TortoiseGit from [here](https://tortoisegit.org/download/) and then run the installation Wizard you downloaded. Follow the steps in the Installation Wizard without changing anything (unless you know for sure what you are doing) and then press Install. Once installed in File Explorer when you right click another optoin should appear called TortoiseGit and you can choose to clone a repository from GitHub by copying the URL of the repository and pasting in the dialog. Additionally you can check the box that says Branch and write the name of the branch that you want to download (in the Pipeline section of this guide you can see what branches are and how you can use them). Once you do that all the files from that branch will be downloaded and will appear in the folder.  

## Pipeline 
The pipeline is the procedure we follow to create new projects and change existing ones. The pipeline we use is made of four steps : Build -> Test -> Package -> Deploy.

### Build 
This is the step that we create new software, we make changes to old, we write the documentation and we generally work on our project. The building step in our pipeline is also managed with GitHub where we can make changes in a controlled enviroment without risking the functionality of older versions. In Github and other Version Control Systems we can separate our work in Branches. Each branch is a version of our project and we can work on one Branch without affecting the others. In our case and in most cases there is a main branch where we have the latest stable version of our project. The main branch is the one we see when we open our GitHub repository and we don't make any changes to it directly. When someone wants to make a change in our project (or many changes) the correct way is to create a new branch make changes there and when we are done we can create a pull request to merge the branch we have created with the main branch.

#### Making changes
To make a change in th Project everyone has to follow these steps :
1. Clone the repository by right-clicking on the folder you want to save it, choosing TortoiseGit -> Clone. In the window that appears just paste the link of the repository on GitHub and press OK.
2. When the downloading is complete you can see a new folder with the repository name and in it we can see all the files. NOTE: This is the main Branch
3. To change to a branch that we can make changes we can right-click again (while being in the repository folder) and choose TortoiseGit -> Switch/Checkout. On the window that appears either we choose a branch from the dropdown list and we deselect the Create New Branch box or if we want to create a new branch we select the branch from which we want to create the new branch, we select the Create New Branch box and we choose the name. Finally we press OK.
4. Now that we have a branch that it is okay to make changes we make whatever changes we want.
5. When we finish we have to save our work. To do that we right-click again in our folder whe choose TortoiseGit -> Commit... and in the window that appears we right a message to explain our changes and we press Commit. Now we can also push our changes to GitHub so that someone else can continue working on our Branch with the new changes we just made. To push we can right-click and select TortoiseGit -> Push. In the window that appears we choose the local branch we want to push and the remote branch we want to push to and we press OK. NOTE: if we try to push directly to main the process will fail.
6. Now our new changes are available for every one to see in GitHub.
7. To transfer hose changes to the main branch we can't just push are changes like we can to other branches. Instead we have to create a Pull Request. To do that we can go to GitHub where we can have a better view of what we are trying to do. To create th pull request we go to the Pull Request Page and press New Pull Request. In the next page we choose the branches and if we did the previous step correctly a green Able to merge badge we appear and we can press the Create pull request button.
8. From this point the pull request is open and the tests will run to see if those changes break something in our project. If the tests are successfull a senior will have to review the pull request and if it is approved the changes will pass to the main branch.

### Test 
The next step in the pipeline is testing and this primarly involves the developers. When the code changes we have to amke sure it works like it is supposed to before we continue to package and deploy it. For that reason every developer should create tests (unit, performance, etc) while writing the code and when it is finished the tests are run automatically with GitHub Actions and if something fails it can't be merged to main. It is very important to create tests that cover every aspect of the software to find as many bugs as we can.

### Package 
The packaging step is reffered to making our source code an executable (compile,containerize,...).This step is automatically triggered when a change is push to the main branch. The packaging can be done in multiple ways which are briefly explained below:
1. Docker Hub
    - easy to set up all you need is a docker hub account which is also a prerequisite for Docker Engine 
    - To actually build an image on Docker Hub you need a Docker Hub Pro account wich costs 5$ per month (more information [here](https://hub.docker.com/billing/plan/update)
    - You can easily store images on Docker Hub and with the free account you have unlimited public repositories to store Docker Images and one private repository
    - All public repositories are accessible by everyone and anyone can pull images but only the owner of the repository can push new docker images to the repository
2. GitHub
    - Free 2000 minutes per month for free (but this includes the building and testing steps of the pipeline)
    - Easy to set up the pipeline with the usual commands
    - Images can be stored as artifacts (500 MB max) but is not practical since the can not be accessed easily from anywhere
    - Overall not a practical way since everytime we have to rebuild every image and usually images are larger than 500 MB
3. AWS (and other Cloud Services)
    - Easy to set up and AWS Free Tier account gives us acces to 100 minutes per month for build Docker Images
    - The process is done with the CodeBuild service from AWS
    - We can make as many CodeBuild Projects as we want and they can run at the same time
    - After the Docker image is built AWS has the ECR service where we can store our images in private or public repositories
    - Overall the best choice to have everything in one place especially if our application is hosted on the cloud
4. On-premises
    - Full control af the process
    - Some things have to be done mannually
    - All you need is Docker Engine installed
    - Also you can host a private (or public) registry to save all you Docker Images with very easy setup (instructions [here](https://docs.docker.com/registry/deploying/)

### Deployment
The deployment step is the final step of the pipeline and there are numerous ways to implement. The easiest way is to deploy our application in AWS using a serverless architecture which means that our organizations doesn't need to maintain a server on-premises or worry about scaling. The most popular way of deployment is on a server on-premises which gives us total control of our architecture but also total responsibility of maintaining and updating the server which can result in unexpected costs. Deploying an application is easy when packaging is done correctly. For example if we have a docker image the only thing we need is to install the Docker Engine in our server and then create a new container from our image. Similarly if we have an executable file we just have to run it.

#### Kubernetes
TO implement our application using a microservices application is a very popular option nowadays and comes with many benefits. When we use a microservices architecture everu component is independent from the others and changes can be made to one without affecting the others. When we use a microservices architecture is very common to use Docker for our deployment where each component is represented by a docker image. To deploy and manage the containers that run our images most of the times Kubernetes is used which is a managing software that can be used to manage a cluster of nodes where each node runs pods (like containers) and everything seems to be a unique server when in reality there are many servers working closely with eachother. At least one node in every cluster is a Master Node which is used to manage the whole cluster and is the command center for the whole cluster. Kubernetes need at least two nodes (servers/VMs/computers) to be set up, a Master Node and a Worker node. Also there are tools like Minikube that create a virtual cluster with little hardware requirements so that developers and DevOps engineers can test their deployments before the deploy it on an actual cluster. 

## Sample Case : Intership Team 
This repository is a sample case for all af the above. The steps we took are as follow:

1. We have an Organisation called Uni-Systems-SMSA, the owner is @aliferisi
2. We created a team called internship
3. We invited 4 new members to the organisation to work on the repository
4. We added those four members and the organisation owner to our internship team   
5. We created this repository called DevOps_Sample_Case and we assigned the internship team to it with write permission while the owner had admin permissions 
6. We created a branch protection rule for our main branch so that anyone who wants to push something to the main branch can only do so with a pull request
7. We then created a GitHub project called Internship_Deliverable to assign tasks to each member in the form of GitHub issues
8. Then we started working on our tasks and everything was placed to the main branch when we finished
9. We created a docker registry on our private VM to store our docker images
10. We installed Minikube to test our deployments and the Kubernetes configuration files
11. We used the packging scripts below to clone the repository, build a docker image from our code and push the image to our private registry
12. And we used the deployment script to update the image we used in our frontend
      
   
## Pipeline code 
To implement the above pipeline we use the following code. We use three actions:
1. For the main branch to Build and Test :
```YAML
name: Deploy Main Branch
on:
  push: 
    branches: main
jobs:
 build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 20         
      - name: Install Dependencies
        run: npm ci
      - name: Build Application
        run: npm run build
 test:
    name: Test
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 20
      - name: Install Dependencies
        run: npm ci
      - name: Run Tests
        run: npm test
```
2. For all the other branches to build and test the changes :
```YAML
name: Build and Test 
on:
  push:
    branches-ignore:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup node
        uses: actions/setup-node@v2
        with:
          node-version: 20.x
      - name: Install packages and build 
        run: |
          npm ci
          npm run build --if-present
      - name: Test the build
        run: npm test
```
3. The script for packaging our new versions every time we want :
```shell
#!/bin/bash
git clone https://github.com/Uni-Systems-SMSA/DevOps_Sample_Case.git

cd /root/DevOps_Sample_Case
git checkout main
git pull

docker build -t 172.30.1.224:5050/devops-sample:$1 -t 172.30.1.224:5050/devops-sample:latest .

docker push 172.30.1.224:5050/devops-sample --all-tags
```
4.  The script for deploying our new versions every time we want :
```shell
kill $(lsof -t -i:3001)

kubectl set image deployments/frontend-deployment frontend=172.30.1.224:5050/devops-sample:$1
sleep 10

kubectl port-forward --address=0.0.0.0 services/frontend-load 3001:3001 &
kubectl port-forward --address=0.0.0.0 services/keycloak-service 8080 &
```





























