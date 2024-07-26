### This repo contain how to create Protected Routes in React using React Router 
### Protected Routes are the routes that should be protected from unauthorized access.
### In this repo, I have created a simple example of how to create Protected Routes in React using React Router.

### To run this project, follow the below steps:
1. Clone the repo
2. Run `npm install`
3. Run `npm start`


### To create Protected Routes in React, follow the below steps:
1. Install React Router: `npm install react-router-dom`
2. Create a new component for Protected Route
3. Create a new component for Login
4. Create a new component for Home
5. Create a new component for profile
6. Create A Protected Component which will return outlet if the user is authenticated otherwise redirect to login page
7. create A Route without Path attribute in App.jsx and all the routes inside it wrapped with Protected Component
