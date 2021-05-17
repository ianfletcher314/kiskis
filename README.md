# KISKIS
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Table of Contents
 1. [Description](#Description)
 2. [Usage](#Usage)
 3. [Credits](#Credits)
 4. [Application](#Application)
 5. [License](#License)
## Description
This application was designed to be a vault for any sensitive information you wish to keep safe. The information is saved as a "secret" that is encrpyted through cryptr and stored in a MySQL database. To learn more about our application please see our [Walkthrough Video](https://drive.google.com/file/d/16MVKKv06JtErOb1wx_g1021cbYiUrjod/view)

Technologies Used: 
* Java Script 
* CSS 
* Sequelize ORM
* Express.js
* Handlebars.js 
* Materialize CSS
* NPM Cryptr
* NPM Express  
* NPM Dotenv

## Usage 
When visiting our application a user is prompted to login or to create a new account. If they choose to create a new account they are taken to a new page where they will enter an email, username, and password which will be saved in the KISKIS database. Once the user is created or the user logs in they are taken to their Dashboard which contains a list of their secrets (if they have already created secrets) as well as buttons to create a new secret, and to logout. 

When a user clicks the "new secret" button they are navigated to a form where they can enter the secret's title and body text. Once submitted the secret is encrypted using cryptr and saved in the KISKIS database as a secure hashed string. This prevents those with access to the databse from accessing sensitive information. 

To view existing secrets the user simply clicks on the name of the secret on their Dashboard. This will retrieve the saved information from the KISKIS database and unencrypt the data so it can be easily viewed, edited, and deleted. Once a user has retrieved or saved the information they wish to keep safe they can logout and their secrets are secure. 


## Credits
* [Riheel Hamoande](github.com/riheelhs)
* [Brandon Maxwell](github.com/brandon-maxwell)
* [Matt Goad](github.com/mattewxgoad)
* [Ian Fletcher](github.com/ianfletcher314)

## Application
Check out our deployed application at : 

https://lit-escarpment-01189.herokuapp.com/


## License
This application is protected under the MIT license.
  
