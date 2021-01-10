# Project 3 Starter Kit - Client

The Project 3 Starter Kit is a highly opinionated, preconfigured MVC-style full-stack application intended to satisfy the stated requirements and additional requirements of Project 3. It comes with a prerolled authentication system, some cleanup from the project 2 starter, and eslint configuration.

## What this README explains.

This readme only explains the *client*. As it is the client readme! 

## Imported Notes from the CRA template:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Getting started

- npm install
- Configure the server correctly.
- Go!

For now, the application is a simple note taker with authentication.

## Opinions 

- ESlint hard mode. Will fail to compile if lint errors found.
- Nonessential CRA features removed. 
- git ignored .lock files, for ease of collaboration 
- git ignored vscode files, for ease of collaboration
- git ignored eslint cache, for ease of collaboration
- JWTs on the client side are stored with the use-persisted-state hook. Not ideal, IMO, but easier to handle and use.
- Routes are used following from the react-router-dom style for redirects.
- Rudimentary redirect system, on protected routes
- 0 styling. That's up to you!

## Available Scripts

In the project directory, you can run:

```
        "start": Start the react development server
        "build": Builds a production react app
        "test": Runs lint, no other test yet
        "lint": Lints the client
        "fix": ESlint fixes the client
```

Notes about these from create-react-app:

### `start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Client Structure

The structure of the client application, as produced, is replicated below, with folders marked with ```-``` and files marked with ```*```. Below this, please find the detailed description of each file and what it is doing. 

```
- public
    * favicon.ico
    * index.html
    * manifest.json
    * robots.txt
- src
    - components
        * Navbar.js
        * NoteForm.js
    - hooks
        * auth.js
    - pages
        * Home.js
        * Login.js
        * Notes.js
        * Signup.js
    * App.css
    * App.js
    * index.js
* .eslintignore 
* .eslintrc.json
* .gitignore
* package.json
* README.md
```
### Structure Explanation

- public: The public folder. Any static files you want to be served on the client side, i.e. images need to be in here.
    * favicon.ico: The favicon. Change it!
    * index.html: The only html we need! If you need to link a CSS over CDN, put it here!
    * manifest.json
    * robots.txt
- **src**: The code for our react app. Anything that's not in **App.js** should be in here.
    - **components**: All of our more specific components, i.e., not pages.
        * **Navbar.js**: A rudimentary navbar. Note how I use ```<Link>``` elements, *not* ```<a>``` tags! Use an ```<a>``` tag at your own peril.
        * **NoteForm.js**: A simple form for notes identical to our in class examples - only exception is the 'didSubmit', which lets us trigger a refresh nicely in NoteForm's parent. 
    - hooks: The folder for our custom hooks
        * **auth.js**: Our authentication handler! It's rudimentary, but it works. See the hook itself for more detailed documentation. Call it in a components, as you can see in the login/signup pages or App.js to use anything from it.
    - pages: All of our 'top-level' components for pages. Highly recommend you follow this pattern!
        * **Home.js**: Nothing really here, just a landing page.
        * **Login.js**: Very complex, and basically doesn't need to be touched, except for styling. Highly recommend you leave it intact.
            * First, we are using the history and location hooks from react-router-dom. This is very important, because we can now see *where* someone came from before they hit login/signup.
            * Notice the handleSubmit - after we submit, we can use history to change the current page with the ```history.replace``` call.
            * Next, before the return, we have our two redirects. If the user is already logged in, i.e., maybe a mistake refresh, or something else, this dumps them back to where they came from, or if they accidentally typed in the url or something.
        * **Notes.js**: Similar to any other page we've made for displaying X things, except we also have a simple state we pass down into our form, so we can refresh the page to see a submitted note.
        * **Signup.js**: See login.js notes.
    * App.css: Top level css. Left it blank for you to have fun!
    * App.js: Our application!
        * Has our private route wrapper set up down at bottom
        * Has all of our pages and routes, and you should probably keep them here.
        * Has some fun stuff for Axios at the top - 
            * Sets the auth token to the back end on load, if it exists
            * Adds a nice 'if token bad, logout' to all API calls.
    * index.js: Straight from CRA.
* .eslintignore: Ignoring various things that break lint.
* .eslintrc.json: Hardcore rules for hardcore coders!
* .gitignore: Ignoring common problem files. Before you finish, you should probably commit the lock.
* package.json: Our package.json. 
* README.md: This file.

## How to modify:

### I need to create a new page

* Create a new component to wrap the page in /pages
* Add stuff to it
* Add the ```<Route>``` in App.js

### I need to add a new library to the client

* ```npm install``` it in the *client*
* If you run the install at the root level, it adds to the server

### I want to create a new component

* Create the new components in /components
* Import it where you need it

### I need data about the current user

* use the ```useAuth``` hook.
* the getProfile method will return the current user.

### I need to make an API call

* Check out the Notes page, for the useEffect, or you can do it with classes
* Notice that include on my api call? Interesting!


## Deployment

Deploy the server. It deploys this!


## Built With

* [Create React App](https://create-react-app.dev/) - The CRA boilerplate that underpins this application.
* [React](https://reactjs.org/) - React
* [React Router Dom](https://www.npmjs.com/package/react-router-dom) - Our React Router w/DOM bindings.
* [Axios](https://www.npmjs.com/package/axios) -  Use for API calls. If I had my druthers, we would us fetch, but axios offers us way too nice a library for defaulting headers/response interceptors.
* [Use Persisted State](https://www.npmjs.com/package/use-persisted-state) - A hook for a local storage state. I'm too lazy to write this.

## Further Reading

* [React Router for Web](https://reactrouter.com/web/guides/quick-start) - The documentation for routing. Very important! Other cool things:
    * [Sidebar Example](https://reactrouter.com/web/example/sidebar)
    * [Guide](https://reactrouter.com/web/guides/primary-components)
* [useHooks useAuth](https://usehooks.com/useAuth/) - Primary source for how I wrote the useAuth for this App, based on the useAuth hook that was written here, and then used in the [React Router Authentication Redirect Example](https://reactrouter.com/web/example/auth-workflow)
* [Component Libaries](https://blog.bitsrc.io/13-top-react-component-libraries-for-2020-488cc810ca49) - Literally just the topic google result. But these are all good ideas. I personally prefer Material, but it's pretty complex. Semantic has been fun after Joseph gave it a whirl!

## License

This project is licensed under the MIT License.