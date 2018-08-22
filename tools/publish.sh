#!/usr/bin/env bash

git config --global  user.email "renaudin.yann@gmail.com"
git config --global  user.name "Yann Renaudin from CircleCI"

echo  "$NPM_TOKEN"

cd .. && cat ./.npmrc