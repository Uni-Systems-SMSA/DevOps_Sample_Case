# Quick setup

### Admins
1. [Create GitHub account](https://github.com/iliasdodoros/reacthello#github-account)
2. [Create Organization](https://github.com/iliasdodoros/reacthello#creating-an-organization-administrators-only)
3. [Invite members to Organization](https://github.com/iliasdodoros/reacthello#teams)
4. [Create Teams](https://github.com/iliasdodoros/reacthello#teams)
5. [Create repositories](https://github.com/iliasdodoros/reacthello#repositories)
6. [Add Branch protection Rules]()
7. [Add Teams to Repositories](https://github.com/iliasdodoros/reacthello#repositories)
8. [Create Projects](https://github.com/iliasdodoros/reacthello#projects)
9. [Create pipeline]()
    - Build
    - Test
    - Package
    - Deploy

### Members
1. [Create Github account](https://github.com/iliasdodoros/reacthello#github-account)
2. [Accept invitation to Organization](https://github.com/iliasdodoros/reacthello#teams)
3. [Download the necessary software](https://github.com/iliasdodoros/reacthello#software-installation)
4. [Read the guidelines](https://github.com/iliasdodoros/reacthello#pipeline)

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

You can find additional information one the differences of these roles [here](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).

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





## GitHub Actions 
To implement the above pipeline we use GitHub Actions. We use three actions:
1. For the main branch to Build, Test, Package and Deploy
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
 package:
   name: Package
   runs-on: ubuntu-latest
   needs: [build,test]
   steps:
     - name: Checkout Repository
       uses: actions/checkout@v2
     - name: Build Server image
       run: docker build -t <USERNAME>/<IMAGE_NAME> .
     - name: Docker Image Artifact Upload
       uses: ishworkh/docker-image-artifact-upload@v2.1.0
       with:
         image: "<USERNAME>/<IMAGE_NAME>"
```
3. For all the other branches to build and test the changes :
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
5. For issues to be implement automatically to projects :
```YAML
name: Add bugs to bugs project
on:
  issues:
    types:
      - opened
jobs:
  add-to-project:
    name: Add issue to project
    runs-on: ubuntu-latest
    steps:
      - uses: actions/add-to-project@v0.5.0
        with:
          # You can target a project in a different organization
          # to the issue
          project-url: <GITHUB_PROJECT_URL>
          github-token: ${{ secrets.ADD_TO_PROJECT_PAT }}
```
































