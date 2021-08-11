



<br />
<p align="center">
  <h1>Todolist</h1>

</p>

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
   git clone https://github.com/your_username_/Project-Name.git
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

[!alt text](https://raw.githubusercontent.com/pawan43563/Images/main/addnewtask.png)
	

**GET** 
Request on /tasks will give all the tasks

```
/tasks
```



[!alt text](https://raw.githubusercontent.com/pawan43563/Images/main/getalltasks.png)




**GET** 
Request on /tasks with id will return the specified task details.

```
/tasks/:id
```
[!alt text](https://raw.githubusercontent.com/pawan43563/Images/main/getbyid.png)

**POST** 
Request on /tasks/:id with valid request body will create new task.

```
/tasks/:id
```


#### Request Body

```json
{
	"content": "Task content",
	"createdAt": "Time at which task was created"
}
```


[!alt text](https://raw.githubusercontent.com/pawan43563/Images/main/addnewtask.png)

**PATCH** 
Request on /tasks with specified id  and valid request body  will update specified task.

```
/tasks/:id
```


```json
{
	"content": "Will update Todo",
	"createdAt": "Time at which task was created",
	"updatedAt":"Time at which task was updated last time",
	"isComplete:true/false
}
```

[!alt text](https://raw.githubusercontent.com/pawan43563/Images/main/updatebyid.png)


**DELETE** 
Request with specified id will delete the task from our file.

```
/tasks/:id
```
[!alt text](https://raw.githubusercontent.com/pawan43563/Images/main/deletetaskbyid.png)

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










<!-- CONTACT -->
## Contact

Pawan Sharma - pawan.ps43563@gmail.com



