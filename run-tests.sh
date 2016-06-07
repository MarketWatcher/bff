#!/bin/sh

npm install
npm build
npm run lint
node ./stub/api.js stub-server & npm run test
pkill -f stub-server
