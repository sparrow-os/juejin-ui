# next.config.js 
所有配置选项都可以直接在ctrl+单击查看配置说明文档
该文档将重要的常用的配置加以说明

# 严格模式(Strict Mode)
StrictMode 是一个用以标记出应用中潜在问题的工具。就像 Fragment ，StrictMode 不会渲染任何真实的UI。它为其后代元素触发额外的检查和警告。

注意: 严格模式检查只在开发模式下运行，不会与生产模式冲突。

你可以在应用的任何地方启用严格模式。例如：
```
import React from 'react';

function ExampleApplication() {
  return (
    <div>
      <Header />
      <React.StrictMode>
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </React.StrictMode>
      <Footer />
    </div>
  );
}
```
在上面的例子中，不会对组件 Header、Footer 进行 strict mode 检查。然而 ComponentOne、ComponentTwo以及它们所有的后代将被检查。

StrictMode目前有助于：

- 识别具有不安全生命周期的组件
- 有关旧式字符串ref用法的警告
- 检测意外的副作用
- 检测遗留 context API

将来的React版本将添加其他功能。

# next js 14默认支持严格模式

https://nextjs.org/docs/pages/api-reference/next-config-js/reactStrictMode
```
module.exports = {
  reactStrictMode: true,
}
```


# Remote Patterns
https://nextjs.org/docs/pages/api-reference/components/image-legacy#domains

To protect your application from malicious users, configuration is required in order to use external images. This ensures that only external images from your account can be served from the Next.js Image Optimization API. These external images can be configured with the remotePatterns property in your next.config.js file, as shown below:

```
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
}
```
除配置的域名之外的图片全部显示404
Good to know: The example above will ensure the src property of next/legacy/image must start with https://example.com/account123/. Any other protocol, hostname, port, or unmatched path will respond with 400 Bad Request.

Below is another example of the remotePatterns property in the next.config.js file:

```
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
        port: '',
      },
    ],
  },
}
```
Good to know: The example above will ensure the src property of next/legacy/image must start with https://img1.example.com or https://me.avatar.example.com or any number of subdomains. Any other protocol, port, or unmatched hostname will respond with 400 Bad Request.

Wildcard patterns can be used for both pathname and hostname and have the following syntax:

* match a single path segment or subdomain
** match any number of path segments at the end or subdomains at the beginning
The ** syntax does not work in the middle of the pattern.

Good to know: When omitting protocol, port or pathname, then the wildcard ** is implied. This is not recommended because it may allow malicious actors to optimize urls you did not intend.

## Domains
Warning: Deprecated since Next.js 14 in favor of strict remotePatterns in order to protect your application from malicious users. Only use domains if you own all the content served from the domain.

Similar to remotePatterns, the domains configuration can be used to provide a list of allowed hostnames for external images.

However, the domains configuration does not support wildcard pattern matching and it cannot restrict protocol, port, or pathname.

Below is an example of the domains property in the next.config.js file:

```
next.config.js

module.exports = {
  images: {
    domains: ['assets.acme.com'],
  },
}
```

# appDir
Good to know: This option is no longer needed as of Next.js 13.4. The App Router is now stable.

```
 experimental: {
        appDir: true,
    }
```

# assetPrefix
```
/**
     * To set up a CDN, you can set up an asset prefix and configure your CDN's origin to resolve to the domain that Next.js is hosted on.
     *
     * @see [CDN Support with Asset Prefix](https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix)
     */
    assetPrefix?: string;
```

# basePath
编译文件的输出目录
Destination directory (defaults to `.next`)

```
    distDir: "dist/pc",
```
# basePath
```
 /**
     * Deploy a Next.js application under a sub-path of a domain
     *
     * @see [Base path configuration](https://nextjs.org/docs/api-reference/next.config.js/basepath)
     */
```
```

    basePath?: string;
```

# webpack 支持md 解析
https://nextjs.org/docs/app/api-reference/next-config-js/webpack

```
 webpack: (config, options) => {
        config.module.rules.push(
            {
                test: /\.md$/,
                use: 'raw-loader'
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            }
        )
        return config
    },
```