@echo off
del index.bak
ren index.html index.bak
ren corona-dashboard.html index.html
git add --all
git commit -m "data update"
git push origin master
pause