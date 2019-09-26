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

#### 定义任务

```groovy
task hello{
	doLast{
		println 'Hello world'
	}
}
// 快速
task hello{
		println 'Hello world'
}

// Upper
task upper {
 String someString = 'mY_nAmE'
 println "Original:" + someString
 println "Upper case:" + someString.toUpperCase()
}
// count
task count{
	4.times{print "$it"}
}
```

#### 任务依赖

```groovy
task hello  {
    println 'Hello world!'
}
task intro(dependsOn: hello)  {
    println "I'm Gradle"
}
```

#### 延迟依赖

``` groovy
task taskX(dependsOn: 'taskY')  {
    println 'taskX'
}
task taskY  {
    println 'taskY'
}
```

这里执行`taskY`  `taskX`也会被执行

#### 动态任务

```groovy
4.times { counter ->
    task "task$counter"  {
        println "I'm task number $counter"
    }
}
```

#### 任务操纵

一旦任务被创建后，任务之间可以通过 API 进行相互访问。这也是与 Ant 的不同之处。比如可以增加一些依赖。

```groovy
4.times { counter ->
    task "task$counter" {
        println "I'm task number $counter"
    }
}
task0.dependsOn task2,task3
// 以上不生效，不知原因
```

#### 增加任务行为

```groovy
task hello  {
    println 'Hello Earth'
}
hello.doFirst {
    println 'Hello Venus'
}
hello.doLast {
    println 'Hello Mars'
}
hello{
    println 'Hello Jupiter'
}
// 执行顺序
Hello Earth
Hello Jupiter
Hello Venus
Hello Mars
```

#### 以属性的方式访问任务

```groovy
task hello  {
    println 'Hello world!'
}
hello.doLast {
    println "Greetings from the $hello.name task."
}
```

#### 增加自定义属性

```groovy
task myTask{
	ext.myProperty = "myValue"
}

task printTaskProperties{
	println myTask.myProperty
}
```

#### 调用 Ant 任务

Ant 任务是 Gradle 中的一等公民。Gradle 借助 Groovy 对 Ant 任务进行了优秀的整合。Gradle 自带了一个 AntBuilder，在 Gradle 中调用 Ant 任务比在 build.xml 中调用更加的方便和强大。 通过下面的例子你可以学到如何调用一个 Ant 任务以及如何与 Ant 中的属性进行通信。

##### 利用AntBuilder 执行ant.loadfile

```groovy
task loadfile {
	def files = file('./antLoadfileResources').listFiles().sort()
	files.each{File file->
		if(file.isFile()){
			ant.loadfile(srcFile:file,property:file.name)
			println "***$file.name***"
			println "${ant.properties[file.name]}"
		}
	}
}
```

#### 方法抽取

##### 利用方法组织脚本逻辑

```groovy
task checksum  {
    file('./antLoadfileResources').listFiles().each {File file ->
        ant.checksum(file: file, property: "cs_$file.name")
        println "$file.name Checksum: ${ant.properties["cs_$file.name"]}"
    }
}
task loadfile  {
    file('./antLoadfileResources').listFiles().each {File file ->
        ant.loadfile(srcFile: file, property: file.name)
        println "I'm fond of $file.name"
    }
}
// 下面这个应该是无法执行的
File[] fileList(String dir) {
    file(dir).listFiles({file -> file.isFile() } as FileFilter).sort()
}
```

#### 定义默认任务

```groovy
// 以下脚本有问题，会都执行
defaultTasks 'clean', 'run'
task clean  {
    println 'Default Cleaning!'
}
task run  {
    println 'Default Running!'
}
task other  {
    println "I'm not a default task!"
}
```

#### Configure by DAG

稍后会对 Gradle 的配置阶段和运行阶段进行详细说明 配置阶段后，Gradle 会了解所有要执行的任务 Gradle 提供了一个钩子来捕获这些信息。一个例子就是可以检查已经执行的任务中有没有被释放。借由此，你可以为一些变量赋予不同的值。

在下面的例子中，为 distribution 和 release 任务赋予了不同的 version 值

##### 依赖任务的不同输出

```groovy
task distribution  {
    println "We build the zip with version=$version"
}
task release(dependsOn: 'distribution')  {
    println 'We release now'
}
gradle.taskGraph.whenReady {taskGraph ->
    if (taskGraph.hasTask(release)) {
        version = '1.0'
    } else {
        version = '1.0-SNAPSHOT'
    }
}
```

### Java构建入门

#### 采用 Java 插件

```groovy
apply plugin: 'java'
// 默认目录结构
project  
    +build  
    +src/main/java  
    +src/main/resources  
    +src/test/java  
    +src/test/resources  
```

​	