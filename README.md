# Individual Project - Henry Videogames App

This application was created to pass the HENRY bootcamp individual project. At the end of the readme I will leave the following updates that I want to make to the project.

## About this project:

The purpose of this app is to provide users with information about videogames (fetched from the external API [rawg](https://rawg.io/apidocs), as well as allow them to:

- Search for videogames
- filter and sort them using different criteria
- create fictitious videogames with their respective genres and platforms.

These are the technologies and languages I used to make this app come to life:

### Frontend:

- React
- Redux
- CSS Modules

### Backend:

- JavaScript
- NodeJS
- Express

### DB and ORM:

- PostgreSQL
- Sequelize

**IMPORTANT:** In order to run this project locally, you'll need the latest stable version of Node and NPM. Please make sure you do before installing the dependencies.

By the time I finished it, I was using these versions:

- **Node**: 12.18.3
- **NPM**: 6.14.16

To check your current version run these commands:

> node -v
>
> npm -v

## Getting started

1. Fork the repository
2. Clone the repository on your computer

3. You will need create a .env file inside the /api folder with your own enviroment variables for your database with the following names and your own API KEY:

> DB_USER
>
> DB_PASSWORD
>
> DB_HOST
>
> API_KEY

4. cd into the /api directory and run the following commands:

> npm install
>
> npm start

This will start the server on your localhost:3001

5. cd back into the root directory.
6. cd into the /client directory and run the following commands:

> npm install
>
> npm start

This will run your app on your localhost:3000

## TODO

1. Migrate to TypeScript
2. Authentication
3. LocalStorage
4. Redo CSS
5. Testing
