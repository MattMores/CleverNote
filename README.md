# Welcome To CleverNote! 
<img width="643" alt="CleverNoteLogo" src="https://user-images.githubusercontent.com/79879179/139515223-e0d423e8-c2ef-4645-ada6-5bb223281915.png">

#### Table of Contents

* [Summary](#summary)
* [Primary Features](#primary-features)
* [Database & Technologies Used](#database-and-technologies-used)
* [Live Site](#live-site)

## Summary
CleverNote is a full-stack web application that is specifically designed for comedians. It is a clone of Evernote and allows users to create, post and update notes. It's a place to write ideas for scripts, take general notes, or plan your next standup routine. 

On the site, users can:

* Sign Up and log in / log out with their data persisting between visits
* Use the demo login to experience the site without creating an account
* Navigate to the /notes page to create, post, update, delete and view notes
* Navigate to the /notes:id page to view, update and delete and review notes already created
* Navigate to the /notebooks:id page to, update and delete notes from a specific notebook
* Use the search feature to display only notes/notebooks that are relevant to a keyword query

## Primary Features

### User Login and Sign Up

User can Login or Sign Up/Register using the same Login Form Modal powered by React

<img width="682" alt="CleverNoteLogin" src="https://user-images.githubusercontent.com/79879179/139515552-4849a049-47ee-444a-8b08-6e383fdeaf43.png">

### All Notes Page

After logging in, the user lands on their home page where they can view all the notebooks and notes they've created

<img width="1128" alt="AllNotes" src="https://user-images.githubusercontent.com/79879179/139515649-c5c78370-2812-4c5a-8366-17e845fbefea.png">

### Create A Note

Users can add a new note, select which Notebook to add it to, or create a new notebook - all displayed and executed without refreshing the page. 

<img width="1039" alt="CreateANote" src="https://user-images.githubusercontent.com/79879179/139515829-76e08cc5-cfe1-4033-8e7c-64d25b8ca8cd.png">

### View A Note

Users can click on an individual notebook and view only notes from that category. From there they can view and edit notes they've created. 

<img width="958" alt="ViewNotes" src="https://user-images.githubusercontent.com/79879179/139515723-44da9657-1ea6-4e5f-bb01-637c5d6ce6e9.png">

### Standup

Comedians can also visit the /standup page, where they can plan their next stand-up set with a list of jokes and reminders. 
<img width="1138" alt="Standup1" src="https://user-images.githubusercontent.com/79879179/139515946-81777ea1-46a1-4e6f-8044-4a56264a52d5.png">

<img width="1135" alt="Standup2" src="https://user-images.githubusercontent.com/79879179/139515952-fb73a507-3cbb-4bf8-a22b-4ff343b02b54.png">

## Database and Technologies Used

### Structure Overview

The backend was built using JavaScript and Express, and connects to a postgreSQL database via Sequelize. The RESTful convention was followed in all backend API routes. 

The frontend was built using React and Redux, powered by JavaScript, and designed with CSS.

### Additional Libraries and Technologies Used

Express Router, Postbird, Postman, Express Security Middlewares, BCRYPT Password Hashing, Cookie-Parser, CORS, CSURF protection, JSON Web Token, Morgan, API routes, Error Handling, Table Migration

## Live Site

##### NOTE: Site is currently inactive as hosting Dyno hours have expired.
