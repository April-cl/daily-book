#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git push -f git@github.com:April-cl/daily-book-website.git
cd -