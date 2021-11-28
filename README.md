# Dasboard admin

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Features

There are four different routes:
- /login (public): let users sign in to view the dashboard page
- /register (public): let users create a new account to have access to the dashboard page
- / (private): visible only after login. On page load, a random list of todos will be fetched by a public api and rendered on screen
- /photos (private): visible only after login. On page load, a random list of pictures will be fetched by a public api and rendered on screen

When route is not found (because it's not included in these four) an error page will be render.


## Technologies

- React v17.0.2
- Redux v7.2.6
- Typescript v4.1.2
- React Router v5.3.0
- Firebase v9.5.0
- Axios v0.24.0
- Material UI v5.1.1