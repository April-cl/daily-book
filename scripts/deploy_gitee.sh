#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@gitee.com:april-cl/daily-book-website.git &&
git push -u origin master -f
cd -