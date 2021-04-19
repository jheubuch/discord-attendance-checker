# Discord Attendance Checker Bot

## Requirements
Make sure, you have Node.JS installed before trying to run.

## How to run
1. Install dependencies via `npm install`
2. Copy the `example.env` file to a `.env` file and fill it's contents (see below)
3. Run the bot via `npm start`
4. Add to your server

## How to use
Simply call `<PREFIX> <VOICE_CHANNEL_NAME>` and the bot will check the attendants.
For example: `!attendance MEETING-1`

## Environment variables
The environment is managed via a `.env` file within the project root. Within this
file the following parameters can be specified:

- `BOT_TOKEN`: This token can be claimed via the Discord Developer Portal.
- `ROLE`: Specifies which role a user should have to execute the attendance commands
- `PREFIX`: Specifies the command prefix for use (e.g. `!attendance`)