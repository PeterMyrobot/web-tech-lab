#!/usr/bin/env sh

# 發生錯誤時執行終止指令
set -e

# 打包編譯
yarn run build

# 移動到打包資料夾下，若你有調整的話打包後的資料夾請務必調整
cd dist

# 部署到自定義網域
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/PeterMyrobot/web-tech-lab.git master:gh-pages

cd -