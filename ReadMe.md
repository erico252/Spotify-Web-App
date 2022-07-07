# Spotify Web App
This repo will combine The knowledge of the spotify api as well as the use of [React-And-Express](https://github.com/erico252/React-And-Express)
to create a user friendly way to view new data that spotify hides fomr its general view
and is only accesible via the API

## React Frontend

The React Frontend will live in the `/client/` folder

The React Frontend will be written in JSX, this means we will need to use babel. Therefore for us to be able to use 
react we will need to install the following

-react
-@babel/preset-react 
-@babel/core 
-@babel/cli

Using the packages named above we are able to create React components in JSX and then convert the JSX into JS with React in mind
in order to transform the JSX to JS we can use the follwoing command
`npx babel WHERE_JSX_IS -o WHERE_JS_IS --presets=@babel/preset-react`

in  the /client folder we can find the follwoing folders
```
client/react/components
client/react/app.jsx
client/public/app.js
client/public/index.html
client/public/css.html
```
in the `react/` folder we find all the raw React files/components, in the `public/` folder we find what is to be
serverd to the client via the server

## Express Backend

The Express Backend will live in the `/server/` folder

We need the follwoing packages for our server to work

-express
-querystring

The Express server will provide a landing page, the landing page will prompt you to auth with spotify, then
it will deliver some cool spotify info

## MySQL Database

the realtionship between mySQL and Express/React has not yet been explored but is the next step
this document will get updated as more information presents itself