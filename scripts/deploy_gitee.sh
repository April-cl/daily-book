#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git push -f git@gitee.com:april-cl/daily-book-website.git master:main

cd -