



<br />

  <h1>Todolist</h1>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
      	<li><a href="#before-you-begin">Before You Begin</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
       <li><a href="#run">Run</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#future-scope">Future Scope</a></li>
    <li><a href="#postman">Run it on Postman</a></li>
    <li><a href="#deployment">Deployment</a></li>
   <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Todolist Backend using [Nodejs](https://nodejs.org/en/) with file system



<!-- GETTING STARTED -->
## Getting Started
## Before You Begin
Before you begin  read about the below topics .
* Express - The best way to understand express is through its [Official Website](http://expressjs.com/).
* Node.js - Read Documentation to get better understanding [Node.js Official Website](http://nodejs.org/).

### Prerequisites

Make sure you have installed all of the following prerequisites on your machine:

* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. 
* Postman - [Download & Install Postman](https://www.postman.com/downloads/) . 

### Installation


1. Clone the repo
   ```
   git clone https://github.com/pawan43563/TodolistBackend.git
   ```
2. Install NPM packages
   ```
   npm install
   ```
### Run the project
   ```
   node app.js
   ```
	
### Usage


	

**GET** 
Request on /tasks will give all the tasks

```
/tasks
```



![alt text][getalltasks]




**GET** 
Request on /tasks with id will return the specified task details.

```
/tasks/:id
```
![alt text][gettaskbyid]

**POST** 
Request on /tasks/:id with valid request body will create new task.

```
/tasks/:id
```


#### Request Body

```json
{
	"content": "Task content",
	"createdAt": "Time at which task was created ",
  "updatedAt":"Some date
}
```


![alt text][addtask]

**PATCH** 
Request on /tasks with specified id  and valid request body  will update specified task.

```
/tasks/:id
```


```json
{
	"content": "updated Content",
	"createdAt": "Time at which task was created",
	"updatedAt":"Time at which task was updated last time",
	"isComplete:true/false
}
```

![alt text][updatetaskbyid]


**DELETE** 
Request with specified id will delete the task from our file.

```
/tasks/:id
```

![alt text][deletetaskbyid]

### Project Structure

```
.
├── app.js
├── package.json
├── package-lock.json
├── README.md
├── controllers
│   └── taskController.js
├── data
│   └── tasks.json
├── models
│   └── taskModel.js
├── utils
│   └── sendResponse.js
└── routes
    └── taskRouter.js
```
### Features
1. When User is offline and server is online than he/she won't be able to make request to the backend and appropiate error will be shown.
    ![alt text][clienterror]

2. When User is online and server is offline than request made by user will not take place and appropiate error will be shown.
    ![alt text][servererror]


### Future Scope

1. Using Database.
2. Integrating backend with the frontend.


### Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/16992984-9757dc7d-a638-4ca4-8f22-24a29496df51?action=collection%2Ffork&collection-url=entityId%3D16992984-9757dc7d-a638-4ca4-8f22-24a29496df51%26entityType%3Dcollection%26workspaceId%3D1b975d69-3e2e-45a9-8866-1478a4c9b1fc)

### Deployment
Backend:
[Heroku](https://polar-woodland-07461.herokuapp.com/)

Frontend:
[Github Live Link](https://pawan43563.github.io/Todolist-Frontend-/)
[Netlify Live Link](https://naughty-minsky-ced17d.netlify.app/)

<!-- CONTACT -->
## Contact

Pawan Sharma - pawan.ps43563@gmail.com

[getalltasks]:https://raw.githubusercontent.com/pawan43563/Images/main/getalltasks.png
[gettaskbyid]:https://raw.githubusercontent.com/pawan43563/Images/main/getbyid.png
[addtask]:https://raw.githubusercontent.com/pawan43563/Images/main/addnewtask.png
[updatetaskbyid]:https://raw.githubusercontent.com/pawan43563/Images/main/updatebyid.png
[deletetaskbyid]:https://raw.githubusercontent.com/pawan43563/Images/main/deletebyid.png
[clienterror]:https://raw.githubusercontent.com/pawan43563/Images/main/client-error.png
[servererror]:https://raw.githubusercontent.com/pawan43563/Images/main/servererror.png

