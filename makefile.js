install:
     npm ci

gendiff:
     node bin/gendiff.js

publish:
     pm publish --dry-run

 lint:
     npx eslint .

brain-games:
     node bin/brain-games.js