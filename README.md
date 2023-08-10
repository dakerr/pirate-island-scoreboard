Pirate Island - Scoreboard
===========
This is a simple scoreboard app that updates in real-time.

Currently, this only updates after a high score is sent from the [game](https://github.com/dakerr/pirate-island-pixijs) but it would be fairly easy to update the scores in-game!

## Features
This project uses:
- Firebase's Firestore database through their javascript libraries.
- written in React + Typescript
- uses TailwindCSS + @material-tailwind for styling
- builds with Vite

## Purpose
This is a test platform for experimenting with real-time streams from Firestore.

## How does it work?
- authenticate anonymously with Firestore. No user & password needed.  The database 
rules add some security.
- using a previously created `Document Reference` to the table, grabs a reference to score items.
- uses that reference to make a query
- uses the query to set a listener to receive `data-change` events - instead of calling a `get`
- presents the data in nice React-y table!

## Firestore APIs used
- initializeApp
- getFirestore
- getAuth
- signInAnonymously
- collection
- query
- onSnapshot

## Prerequisites
This project needs `Node.js` and `Yarn` installed on your system.

## Setup
```bash
# Clone the repository
git clone http://github.com/dakerr/pirate-island-scoreboard
cd ./pirate-island-scoreboard

# Install dependencies
yarn

# Start the project
yarn dev
```
## Demo (available on request)

## Known Issues
Until I setup a GitHub Action to [Create an .env file](https://github.com/marketplace/actions/create-env-file), you will need to setup a Firebase config yourself.  (Not going to commit secrets to GitHub!)  A Firebase API key is required to access the Firestore.  

## License
[MIT License](https://opensource.org/licenses/MIT)


