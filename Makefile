install:
     npm ci

gendiff:
     node bin/gendiff.js

publish:
     pm publish --dry-run

lint:
     npx eslintls

brain-games:
     node bin/brain-games.js