@echo off
rm index.bak
ren index.html index.bak
ren coronoa-dashboard.html index.html
git add --all
git commit -m "data update"
git push origin master
pause