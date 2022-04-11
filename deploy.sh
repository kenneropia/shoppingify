#!/usr/bin/env sh

set -e

cd client

vite build

cd ..

robocopy client/dist server/static -MIR

cd server

git add . 
git commit -m 'some minor code changes'
git push heroku master