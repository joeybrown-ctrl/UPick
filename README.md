# UPick

![license](https://img.shields.io/badge/License-MIT-blue.svg)

**version 1.0.0**

[For deployed version, click me](https://u-pick-app.herokuapp.com/)

![example-gif](https://raw.githubusercontent.com/joeybrown-ctrl/UPick/main/client/public/assets/readme/upickGif.gif)

<br>

  ## Table of Contents

  
* [Description](#description)
  
* [Built With](#builtwith) 
  
* [Contributors](#contributors) 
  
* [License](#license)
  
* [Questions](#questions)

  
<hr>

  ## Description 

UPick is an app designed to help indecisive users choose entertainment and dining options based on the location of the user. The user may also invite their partner and/or friends. Once the user is signed in, they are sent a verification email, a profile is created and the user can create a 'pick' by inviting friends and choosing entertainment and/or dining. 

Utilizing two different API calls run through an algorithm, UPick shows the user and whomever they have invited a series of entertainment/dining options, allowing both the user and the invitee to swipe right or left (yes and no respectively), showing the matching 'picks' to each person. If no matches occur, UPick reveals a 'pick' of its own to help the user and invitee decide on the course of their evening.

UPick is built using React, React-Bootstrap, and React Router on the Front End. The wireframe shows the steps UI was broken into as the process was visualized. Mobile-first and responsive design were prioritized in development.

 <br>

![image of wireframe](https://raw.githubusercontent.com/joeybrown-ctrl/UPick/main/client/public/assets/readme/upickWireframe.png)

<br>

The Back End is built with Node.js, Express routes, and MySQL/ORMs for data. The Zomato API and Rapid API (Unogsng) are used to retrieve restaurant and streaming services data. UPick was tested with Insomnia, linted using ES Lint, built on Visual Studio Code, and deployed to Heroku with a JawsDB database. 

<br>

![image of UPick](https://raw.githubusercontent.com/joeybrown-ctrl/UPick/main/client/public/assets/readme/UPick.png)

  <hr>

  ### User Story 

  ```
  AS an indecisive person,
  WHEN I enter my location, a friend's email and choose entertainment and/or dining options,
  THEN my friend and I are presented 'picks' that we can swipe right (yes) or swipe left (no) with the matching picks presented to each of us on our own devices.
  WHEN, in the case of there being no agreement between my friend and I, UPick chooses the 'pick' for us.
  ```

  ### Acceptance Criteria

  ```
  AS a person who struggles with choosing entertainment and dining options,
  GIVEN an app that helps with this process,
  WHEN I sign up, I am sent a verification email,
  THEN I am able to create a profile.
  WHEN I start a 'pick', I can invite my partner, friend or group of friends,
  THEN I can set my location and choose whether I want the app to help 'pick' entertainment or dining options.
  THEN, swiping right or swiping left, I am able to vote on the 'picks' from the app,
  and the invited person can do the same from their device.
  WHEN the invited person and I swipe right on the same entertainment or dining option, we are each shown the match.
  WHEN neither of us matches on any of the options, the app 'picks' the options for us.
  THEN, the 'picks' are displayed, and I can relax, knowing that the evening's entertainment and/or dining options are already decided.

  ```

  ### Installation

  Git clone to local repository and run 'npm install' within terminal to install dependencies.
  
  <br>

  ## Built With

* [React](https://reactjs.org/)
* [React Router](https://reactrouter.com/web/guides/quick-start)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [SendGrid](https://sendgrid.com)
* [MySQL](https://dev.mysql.com/doc/)
* [Sequelize](https://sequelize.org/master/index.html)
* [Node.js](https://nodejs.org/en/about/)
* [Express](https://expressjs.com/)
* [React Tinder Card](https://www.npmjs.com/package/react-tinder-card)
* [Zomato API](https://developers.zomato.com/api)
* [Rapid API](https://rapidapi.com/marketplace)
* [Axios](https://www.npmjs.com/package/axios)
* [Insomnia](https://insomnia.rest/)
* [MySQL Workbench](https://www.mysql.com/)
* [Heroku](https://heroku.com/)
* [jQuery](https://jquery.com/)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [HTML 5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [Markdown](https://guides.github.com/features/mastering-markdown/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [ES Lint](https://eslint.org/)

<br>

  ## Contributors 

  ![image of UPick's Devs](https://raw.githubusercontent.com/joeybrown-ctrl/UPick/main/client/public/assets/readme/UPickDev.png)

  <br>

* [Christina Flores](https://github.com/cdflori)
* [Joey Brown](https://github.com/joeybrown-ctrl)
* [Shoshanah Lo Greco](https://github.com/slogreco)

<br>

  ## Questions 
  
* [Send us an email](mailto:u.pick.project@gmail.com)
  
* [Reach out on Github](https://github.com/joeybrown-ctrl)

<hr>

  ## Licence 
MIT License

Copyright (c) 2020 github.com/joeybrown-ctrl

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

