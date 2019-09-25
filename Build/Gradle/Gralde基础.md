## Gradle 概述

### 特性说明

1. 基于声明的构建和基于约定的构建
2. 为以依赖为基础的编程方式提供语言支持
3. 构建结构化
4. 深度 API
5. Gradle 的扩展
6. 多项目构建
7. 多种方式管理依赖
8. Gradle是第一个构建集成工具
9. 易于移植
10. Groovy
11. The Gradle wrapper

### 安装

[https://discuss.gradle.org](https://discuss.gradle.org/)

下载下来解压即可

###  构建基础

Projects 和 tasks

> 任何一个 Gradle 构建都是由一个或多个 projects 组成。每个 project 包括许多可构建组成部分。 这完全取决于你要构建些什么。举个例子，每个 project 或许是一个 jar 包或者一个 web 应用，它也可以是一个由许多其他项目中产生的 jar 构成的 zip 压缩包。一个 project 不必描述它只能进行构建操作。它也可以部署你的应用或搭建你的环境。不要担心它像听上去的那样庞大。 Gradle 的 build-by-convention 可以让您来具体定义一个 project 到底该做什么。
>
> 每个 project 都由多个 tasks 组成。每个 task 都代表了构建执行过程中的一个原子性操作。如编译，打包，生成 JavaDoc，发布到某个仓库等操作。
>
> 到目前为止，可以发现我们可以在一个 project 中定义一些简单任务，后续章节将会阐述多项目构建和多项目多任务的内容。

