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

# 添加icon
npm i iconify-icon
https://github.com/iconify/iconify
https://iconify.design/
## 参考使用方法

https://icon-sets.iconify.design/bi/alipay/
https://iconify.design/docs/icon-components/react/ 对服务器渲染支持比较麻烦，直接引用html即可
```agsl
第一步：安装 iconify-icon 依赖

npm i iconify-icon
第二步： 在文件中引入

import 'iconify-icon';
第三步： 在vue模板文件中使用

<iconify-icon icon="ant-design:file-markdown-twotone"></iconify-icon>
就可以在页面上看到这个图标了。

```



