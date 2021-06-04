#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

git checkout ghpages
mv 2020 dist

# navigate into the build output directory
# cd dist

# if you are deploying to a custom domain
# echo 'www.ekko-realtime.com' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:wLotherington/wLotherington.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# cd -