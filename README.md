find travis and coveralls badges on new repo <a href = 'https://github.com/claudwatari/tw-new'>here</a>

# TW
Teamwork is an internal social network for employees of an organization. The goal of this application is to facilitate more interaction between colleagues and promote team bonding.

### New repo below
Check new repo at <a href = 'https://github.com/claudwatari/tw-new'>new claud account</a>

## About teamwork app
This app is written using <a href = 'https://nodejs.org'>nodejs</a>/express and is expected to be written in <a href = 'https://reactjs.org
'>Reactjs</a> for front end component rendering. The database used is <a href = 'https://www.postgresql.org'>Postgresql</a>.
The testing framework used is <a href = 'https://mochajs.org'>MochaJs</a>
The linting framework used is <a href = 'https://eslint.org'>eslint</a> with <a href = 'https://github.com/airbnb/javascript'>airbnb</a> style guide.

## Getting started
Clone the app by running 
```
git clone https://github.com/ClaudWatari95/tw.git
```
You can also include a .env file to include your environment variables.

Install dependencies by running
```
$ npm install
```

Start the server by running 
```
$ npm start
```
To run mocha tests, run 
```
$ npm test
```
To run linting, run 
```
$ npm run lint
```

## API Endpoints

| URL                    | HTTP Method | Description                 |
| -------------------------------- | ------- | --------------------------- |
| /api/v1/auth/create-user                   | POST    | Create an account           |
| /api/v1/auth/signin                   | POST    | Log In to account           |
| /api/v1/gifs                   | POST    | Post Gifs          |
| /api/v1/articles                   | POST    | Post Articles          |
| /api/v1/articles/:articleId                   | PATCH    | Edit Articles          |
| /api/v1/articles/:articleId                   | DELETE    | Delete Articles          |
| /api/v1/gifs/:gifId                   | DELETE    | Delete Gifs          |
| /api/v1/gifs/:gifId/comments                   | POST    | Post gif comments         |
| /api/v1/articles/:articleId/comments                   | POST    | Post articles comments          |
| /api/v1/feed                   | GET    | view gifs and articles          |
| /api/v1/gifs/:gifId                   | GET    | view specific gif          |


### Screenshots

Postgresql database and tables have been created through the command line as seen below

<img src = 'https://github.com/ClaudWatari95/tw/blob/develop/screenshots/psql-create-table.png' alt = 'create_psql_table'>

Due to the owner's pc's inability to install postman's <a href = 'https://www.microsoft.com/en-us/download/details.aspx?id=30653'>ms .net framework 4.5</a>, HTTP commands have been tested via <a href = 'https://curl.haxx.se'>curl</a> on the command line.

#### sign up
<img src = 'https://github.com/ClaudWatari95/tw/blob/develop/screenshots/curl-signup.png' alt = 'sign_up_screenshot'>

#### table after adding a user

<img src = 'https://github.com/ClaudWatari95/tw/blob/develop/screenshots/psql-users-table.png' alt = 'users_table_with_row'>

#### log in
<img src = 'https://github.com/ClaudWatari95/tw/blob/develop/screenshots/curl-login.png' alt = 'login_screenshot'>

#### post gifs

Gif images are hosted on <a href = 'https://cloudinary.com'>cloudinary</a>
After running curl post command and inserting the Gif url to the gif table for the teamwork database, the gif image is seen below uploaded to cloudinary.

<img src = 'https://github.com/ClaudWatari95/tw/blob/develop/screenshots/cloudinaryGif.png' alt = 'cloudinary_gif_thumbnail'>
