>02 全局安装 nrm
> NRM(npm registry manager)是npm的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在npm源之间来回切换

`手动切换的方法：npm config set registry https://registry.npm.taobao.org`

#### 安装nrm

在执行命令，npm install -g nrm，全局安装nrm

#### 使用nrm

执行命令 nrm ls 查看可选的源，其中，带*的是当前使用的源，上面的输出表明当前源是官方源。

#### 切换nrm

如果要切换到taobao源，执行命令 nrm use taobao