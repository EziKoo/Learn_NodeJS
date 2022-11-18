### yarn的使用

`npm install -g yarn`

```markdown
对比npm:
  速度超快：Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载，同时利用并行下载以最大化资源利用率，因此安装速度超快。

  超级安全：在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。

  开始新项目：
    yarn init
  
  添加依赖包：
    yarn add [package]
    yarn add [package] @[version]
    yarn add [package] --dev
  
  升级依赖包
    yarn upgrade [package]@[version]

  移除依赖包
    yarn remove [package]

  安装项目的全部依赖
    yarn insatll
```