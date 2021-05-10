# MVC Tech Blog 

## Deployed to Heroku:
https://mvc-tech-blogs.herokuapp.com/

## Description
A project to practice separation of concerns (Model View Controller - MVC) as well as learn how to use the Handlebars.js templating engine.
This is an app for creating Blog posts. The application allows users to create an account and post their blogs. Users can also edit/delete their own posts and leave comment on other's post after logged in. Anyone view the Home Page which contains blog posts posted by other users. Anybody can view individual posts and its comments as well. To perform other actions, login is required. Data is stored in JAWSDB on heroku, and application is deployed on heroku.

## Built With:
Node.js (express-handlebars, mysql2, sequelize, nodemon, dotenv, bcrypt, express-session, connect-session-sequalize), JavaScript, ES6, Heroku, Git.

### Installation:
To download the application, first Clone Repo and install the necessary dependencies run ```npm install``` in your terminal. 

### Usage:
After installing all the dependencies, set up the .env file with the username, password database name and session_key. <br> Then, enter 
```npm start``` 
to check if the server is running without any error. <br> If it runs, then enter
```npm run seed``` 
to run the seed...

### Screenshots:
<img width="621" alt="Mobile_Devices" src="https://user-images.githubusercontent.com/77028806/117701701-68f6d500-b17c-11eb-9673-d8098b78ec3e.png">

<img width="1109" alt="large_devices" src="https://user-images.githubusercontent.com/77028806/117701733-7318d380-b17c-11eb-8f90-8323e960d528.png">
