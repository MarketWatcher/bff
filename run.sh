#!/bin/sh

npm build
node stub/api.js & npm run start
