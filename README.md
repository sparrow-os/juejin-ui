# juejin-ui

## admin
https://arco.design/docs/pro/start
```
arco-init  项目初始化失败！
Error: spawnSync yarn ENOENT
```
解决办法:
```agsl
cd juejin-admin
sudo chown -R 501:20 "/Users/zhanglizhi/.npm"
npm install
```


