# Voice connections bots

Your bot has been delivered! Here is the repository with the source code. As a reminder, here are the features of the bot:

* Voice connections for users tokens

## Installation

You can install and host this bot on your own server. Here are the main steps:

* Download and install [Node.js](https://nodejs.org) v16 or higher.
* Create a new database and a new role that has access to the database.
* Install the dependencies of the project by running `yarn install`.
* Run `yarn build` to get the JavaScript output of the project.
* Install PM2 or another process manager to keep your bot alive, or run `yarn start`.
* You are done!

## Configuration 
All configuration for this template can be made in the `.env` file found in the root directory. Below will be details about each setting.  
  
`CHANNEL_ID:` The ID of the channel the bots should connect to.  
`TOKENS:` The Discord Bots tokens which you can find [Here](https://discord.com/developers/applications). Separated by a comma.

## Bugs or questions

If you have any issue or bug with this bot, you can contact me using Discord, `Androz#2091`.
