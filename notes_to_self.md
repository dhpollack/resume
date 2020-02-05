## Useful rake commands
```
bundle exec rake generate
bundle exec rake preview
bundle exec rake deploy
```

run config for pdf creation.  but first rake preview.

pdfs in source/assets/pdfs

## Generate pdfs
```
export QT_QPA_PLATFORM=offscreen
phantomjs phantompdf.js

cp source/assets/pdfs/*.pdf public/assets/pdfs
```
