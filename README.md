# simple-express-server
This is a simple NodeJS Express server to test new HTTP environments. This server have just one endpoint on `/` that returns all environment variables that the server have access using the `process.env` environment variables map.

# ⚠️ CAUTIONS
This server only removes variables that contains `AWS` keyword. ALL OTHER VARIABLES WILL BE SHOWN TO THE USER WITHOUT ANY MASKING. DON'T RUN THIS ON A PUBLICLY ACCESSIBLE SERVER. You have been warned.

## How to use?
Just clone this repo, install the dependencies and run the server:
```bash
git clone https://github.com/cSaller/simple-express-server.git
cd simple-express-server
yarn
yarn start
```
Alternatively, you can use the already built Docker image:
```docker
docker run --rm -p 3000:3000 ghcr.io/csaller/simple-express-server
```
