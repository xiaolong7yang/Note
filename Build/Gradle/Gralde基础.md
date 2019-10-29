# Gradle 基础资料

## 概述

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

# Java构建入门

## Java 插件

如你所见，Gradle 是一个通用工具。它可以通过脚本构建任何你想要实现的东西，真正实现开箱即用。但前提是你需要在脚本中编写好代码才行。

大部分 Java 项目基本流程都是相似的：编译源文件，进行单元测试，创建 jar 包。使用 Gradle 做这些工作不必为每个工程都编写代码。Gradle 已经提供了完美的插件来解决这些问题。插件就是 Gradle 的扩展，简而言之就是为你添加一些非常有用的默认配置。Gradle 自带了很多插件，并且你也可以很容易的编写和分享自己的插件。Java plugin 作为其中之一，为你提供了诸如编译，测试，打包等一些功能。

Java 插件为工程定义了许多默认值，如Java源文件位置。如果你遵循这些默认规则，那么你无需在你的脚本文件中书写太多代码。当然，Gradle 也允许你自定义项目中的一些规则，实际上，由于对 Java 工程的构建是基于插件的，那么你也可以完全不用插件自己编写代码来进行构建。

后面的章节我们通过许多深入的例子介绍了如何使用 Java 插件来进行以来管理和多项目构建等。但在这个章节我们需要先了解 Java 插件的基本用法。

## 一个基本 Java 项目

来看一下下面这个小例子，想用 Java 插件，只需增加如下代码到你的脚本里。

### 采用 Java 插件

```
build.gradle
apply plugin: 'java'
```

备注:示例代码可以在 Gralde 发行包中的 samples/java/quickstart 下找到。

定义一个 Java 项目只需如此而已。这将会为你添加 Java 插件及其一些内置任务。

> 添加了哪些任务?
>
> 你可以运行 gradle tasks 列出任务列表。这样便可以看到 Java 插件为你添加了哪些任务。

标准目录结构如下:

```
project  
    +build  
    +src/main/java  
    +src/main/resources  
    +src/test/java  
    +src/test/resources  
```

Gradle 默认会从 `src/main/java` 搜寻打包源码，在 `src/test/java` 下搜寻测试源码。并且 `src/main/resources` 下的所有文件按都会被打包，所有 `src/test/resources` 下的文件 都会被添加到类路径用以执行测试。所有文件都输出到 build 下，打包的文件输出到 build/libs 下。

### 构建项目

Java 插件为你添加了众多任务。但是它们只是在你需要构建项目的时候才能发挥作用。最常用的就是 build 任务,这会构建整个项目。当你执行 gradle build 时，Gralde 会编译并执行单元测试，并且将 `src/main/*` 下面 class 和资源文件打包。

### 构建 Java 项目

运行 gradle build 的输出结果

```
Output of gradle build
> gradle build
:compileJava
:processResources
:classes
:jar
:assemble
:compileTestJava
:processTestResources
:testClasses
:test
:check
:build
BUILD SUCCESSFUL
Total time: 1 secs
```

其余一些较常用的任务有如下几个:

#### clean

删除 build 目录以及所有构建完成的文件。

#### assemble

编译并打包 jar 文件，但不会执行单元测试。一些其他插件可能会增强这个任务的功能。例如，如果采用了 War 插件，这个任务便会为你的项目打出 War 包。

#### check

编译并测试代码。一些其他插件也可能会增强这个任务的功能。例如，如果采用了 Code-quality 插件，这个任务会额外执行 Checkstyle。

### 外部依赖

通常，一个 Java 项目拥有许多外部依赖。你需要告诉 Gradle 如何找到并引用这些外部文件。在 Gradle 中通常 Jar 包都存在于仓库中。仓库可以用来搜寻依赖或发布项目产物。下面是一个采用 Maven 仓库的例子。

### 添加 Maven 仓库

```
build.gradle
repositories {
    mavenCentral()
}
```

添加依赖。这里声明了编译期所需依赖 commons-collections 和测试期所需依赖 junit。

### 添加依赖

```
build.gradle
dependencies {
    compile group: 'commons-collections', name: 'commons-collections', version: '3.2'
    testCompile group: 'junit', name: 'junit', version: '4.+'
}
```

了解更多可参阅[依赖管理基础](https://www.w3cschool.cn/gradle/sh8k1htf.html)

### 自定义项目

Java 插件为你的项目添加了众多默认配置。这些默认值通常对于一个普通项目来说已经足够了。但如果你觉得不适用修改起来也很简单。看下面的例子，我们为 Java 项目指定了版本号以及所用的 JDK 版本，并且添加一些属性到 mainfest 中。

### 自定义 MANIFEST.MF

```
build.gradle
sourceCompatibility = 1.5
version = '1.0'
jar {
    manifest {
        attributes 'Implementation-Title': 'Gradle Quickstart', 'Implementation-Version': version
    }
}
```

> 都有哪些可用属性?
>
> 可以执行 gradle propertie s来得到项目的属性列表。用这条命令可以看到插件添加的属性以及默认值。

Java 插件添加的都是一些普通任务，如同他们写在 Build 文件中一样。这意味着前面章节展示的机制都可以用来修改这些任务的行为。例如，可以设置任务的属性，添加任务行为，更改任务依赖，甚至是重写覆盖整个任务。在下面的例子中，我们将修改 test 任务，这是一个 Test 类型任务。让我们来在它执行时为它添加一些系统属性。

### 为 test 添加系统属性

```
build.gradle
test {
    systemProperties 'property': 'value'
}
```

### 发布 jar 包

如何发布 jar 包?你需要告诉 Gradle 发布到到哪。在 Gradle 中 jar 包通常被发布到某个仓库中。在下面的例子中，我们会将 jar 包发布到本地目录。当然你也可以发布到远程仓库或多个远程仓库中。

### 发布 jar 包

```
build.gradle
uploadArchives {
    repositories {
       flatDir {
           dirs 'repos'
       }
    }
}
```

执行 gradle uploadArchives 以发布 jar 包。

### 创建 Eclipse 文件

若要把项目导入 Eclipse 中，你需要添加另外一个插件到你的脚本文件中。

### Eclipse plugin

```
build.gradle
apply plugin: 'eclipse'
```

执行 gradle eclipse 来生成 Eclipse 项目文件。

### 示例汇总

这是示例代码汇总得到的一个完整脚本：

### Java 示例 - 一个完整构建脚本

```
build.gradle
apply plugin: 'java'
apply plugin: 'eclipse'
sourceCompatibility = 1.5
version = '1.0'
jar {
    manifest {
        attributes 'Implementation-Title': 'Gradle Quickstart', 'Implementation-Version': version
    }
}
repositories {
    mavenCentral()
}
dependencies {
    compile group: 'commons-collections', name: 'commons-collections', version: '3.2'
    testCompile group: 'junit', name: 'junit', version: '4.+'
}
test {
    systemProperties 'property': 'value'
}
uploadArchives {
    repositories {
       flatDir {
           dirs 'repos'
       }
    }
}
```

## 多项目构建

现在来看一个典型的多项目构建的例子。项目结构如下：

### 多项目构建-项目结构

```
Build layout
multiproject/
  api/
  services/webservice/
  shared/
备注: 本示例代码可在 Gradle 发行包的 samples/java/multiproject 位置找到
```

此处有三个工程。api 工程用来生成给客户端用的 jar 文件，这个 jar 文件可以为 XML webservice 提供 Java 客户端。webservice 是一个 web 应用，生成 XML。shared 工程包含的是前述两个工程共用的代码。

### 多项目构建定义

定义一个多项目构建工程需要在根目录(本例中与 multiproject 同级)创建一个*setting* 配置文件来指明构建包含哪些项目。并且这个文件必需叫 settings.gradle 本例的配置文件如下:

### 多项目构建中的 settings.gradle

```
settings.gradle
include "shared", "api", "services:webservice", "services:shared"
```

### 公共配置

对多项目构建而言，总有一些共同的配置.在本例中，我们会在根项目上采用配置注入的方式定义一些公共配置。根项目就像一个容器，子项目会迭代访问它的配置并注入到自己的配置中。这样我们就可以简单的为所有工程定义主配置单了：

### 多项目构建-公共配置

```
build.gradle
subprojects {
    apply plugin: 'java'
    apply plugin: 'eclipse-wtp'
    repositories {
       mavenCentral()
    }
    dependencies {
        testCompile 'junit:junit:4.11'
    }
    version = '1.0'
    jar {
        manifest.attributes provider: 'gradle'
    }
}
```

值得注意的是我们为每个子项目都应用了 Java 插件。这意味着我们在前面章节学习的内容在子项目中也都是可用的。所以你可以在根项目目录进行编译，测试，打包等所有操作。

### 工程依赖

同一个构建中可以建立工程依赖，一个工程的 jar 包可以提供给另外一个工程使用。例如我们可以让 api 工程以依赖于 shared 工程的 jar 包。这样 Gradle 在构建 api 之前总是会先构建 shared 工程。

### 多项目构建-工程依赖

```
api/build.gradle
dependencies {
    compile project(':shared')
}
```

### 打包发布

如何发布，请看下文:

### 多项目构建-发布

```
api/build.gradle
task dist(type: Zip) {
    dependsOn spiJar
    from 'src/dist'
    into('libs') {
        from spiJar.archivePath
        from configurations.runtime
    }
}
artifacts {
   archives dist
}
```

# Gradle 依赖管理基础

## 依赖管理基础

本章节介绍如何使用 Gradle 进行基本的依赖管理.

## 什么是依赖管理?

通俗来讲，依赖管理由如下两部分组成。首先，Gradle 需要知道项目构建或运行所需要的一些文件，以便于找到这些需要的文件。我们称这些输入的文件为项目的依赖。其次，你可能需要构建完成后自动上传到某个地方。我们称这些输出为发布。下面来仔细介绍一下这两部分：

大部分工程都不太可能完全自给自足，一般你都会用到其他工程的文件。比如我工程需要 Hibernate 就得把它的类库加进来，比如测试的时候可能需要某些额外 jar 包，例如 JDBC 驱动或 Ehcache 之类的 Jar 包。

这些文件就是工程的依赖。Gradle 需要你告诉它工程的依赖是什么，它们在哪，然后帮你加入构建中。依赖可能需要去远程库下载，比如 Maven 或者 Ivy 库。也可以是本地库，甚至可能是另一个工程。我们称这个过程叫*依赖解决*。

通常，依赖的自身也有依赖。例如，Hibernate 核心类库就依赖于一些其他的类库。所以，当 Gradle 构建你的工程时，会去找到这些依赖。我们称之为*依赖传递*。

大部分工程构建的主要目的是脱离工程使用。例如，生成 jar 包，包括源代码、文档等，然后发布出去。

这些输出的文件构成了项目的发布内容。Gralde 也会为你分担这些工作。你声明了发布到到哪，Gradle 就会发布到哪。“发布”的意思就是你想做什么。比如，复制到某个目录，上传到 Maven 或 Ivy 仓库。或者在其它项目里使用，这些都可以称之为*发行*。

## 依赖声明

来看一下这个脚本里声明依赖的部分：

### 声明依赖

build.gradle

```
apply plugin: 'java'
repositories {
    mavenCentral()
}
dependencies {
    compile group: 'org.hibernate', name: 'hibernate-core', version: '3.6.7.Final'
    testCompile group: 'junit', name: 'junit', version: '4.+'
}
```

这是什么意思呢？这段脚本是这么个意思。首先，Hibernate-core.3.6.7.final.jar 这货是编译期必需的依赖。并且这货相关的依赖也会一并被加载进来，该段脚本同时还声明项目测试阶段需要 4.0 版本以上的 Junit。同时告诉 Gradle 可以去 Maven 中央仓库去找这些依赖。下面的章节会进行更详细的描述。

## 依赖配置

Gradle 中依赖以组的形式来划分不同的*配置*。每个配置都只是一组指定的依赖。我们称之为*依赖配置* 。你也可以借由此声明外部依赖。后面我们会了解到，这也可用用来声明项目的发布。

Java 插件定义了许多标准配置项。这些配置项形成了插件本身的 classpath。比如下面罗列的这一些，并且你可以从 [“Java 插件 - 依赖配置”](https://www.w3cschool.cn/gradle/5vdr1hug.html#tab:configurations)了解到更多详细内容.。

### compile

编译范围依赖在所有的 classpath 中可用，同时它们也会被打包

### runtime

runtime 依赖在运行和测试系统的时候需要，但在编译的时候不需要。比如，你可能在编译的时候只需要 JDBC API JAR，而只有在运行的时候才需要 JDBC 驱动实现

### testCompile

测试期编译需要的附加依赖

### testRuntime

测试运行期需要

不同的插件提供了不同的标准配置，你甚至也可以定义属于自己的配置项。

## 外部依赖

依赖的类型有很多种，其中有一种类型称之为*外部依赖*。这种依赖由外部构建或者在不同的仓库中，例如 Maven 中央仓库或 Ivy 仓库中抑或是本地文件系统的某个目录中。

定义外部依赖需要像下面这样进行依赖配置

### 定义外部依赖

build.gradle

```
dependencies {
    compile group: 'org.hibernate', name: 'hibernate-core', version: '3.6.7.Final'
}
```

外部依赖包含 group，name 和 version 几个属性。根据选取仓库的不同，group 和 version 也可能是可选的。

当然，也有一种更加简洁的方式来声明外部依赖。采用：将三个属性拼接在一起即可。"group:name:version"

### 快速定义外部依赖

build.gradle

```
dependencies {
    compile 'org.hibernate:hibernate-core:3.6.7.Final'
}
```

## 仓库

Gradle 是在一个被称之为*仓库*的地方找寻所需的外部依赖。仓库即是一个按 group，name 和 version 规则进行存储的一些文件。Gradle 可以支持不同的仓库存储格式，如 Maven 和 Ivy，并且还提供多种与仓库进行通信的方式，如通过本地文件系统或 HTTP。

默认情况下，Gradle 没有定义任何仓库，你需要在使用外部依赖之前至少定义一个仓库，例如 Maven 中央仓库。

### 使用 Maven 中央仓库

build.gradle

```
repositories {
    mavenCentral()
}
```

或者其它远程 Maven 仓库：

### 使用 Maven 远程仓库

build.gradle

```
repositories {
    maven {
        url "http://repo.mycompany.com/maven2"
    }
}
```

或者采用 Ivy 远程仓库

### 采用 Ivy 远程仓库

build.gradle

```
repositories {
    ivy {
        url "http://repo.mycompany.com/repo"
    }
}
```

或者在指定本地文件系统构建的库。

### 采用本地 Ivy 目录

build.gradle

```
repositories {
    ivy {
        // URL can refer to a local directory
        url "../local-repo"
    }
}
```

一个项目可以采用多个库。Gradle 会按照顺序从各个库里寻找所需的依赖文件，并且一旦找到第一个便停止搜索。

了解更多库相关的信息请参阅章节 50.6，“仓库”。

## 打包发布

依赖配置也被用于发布文件[[3\]](https://www.w3cschool.cn/gradle/sh8k1htf.html#footname)我们称之为*打包发布*或*发布*。

插件对于打包提供了完美的支持，所以通常而言无需特别告诉 Gradle 需要做什么。但是你需要告诉 Gradle 发布到哪里。这就需要在 uploadArchives 任务中添加一个仓库。下面的例子是如何发布到远程 Ivy 仓库的：

### 发布到 Ivy 仓库

build.gradle

```
uploadArchives {
    repositories {
        ivy {
            credentials {
                username "username"
                password "pw"
            }
            url "http://repo.mycompany.com"
        }
    }
}
```

执行 **gradle uploadArchives**，Gradle 便会构建并上传你的 jar 包，同时会生成一个 ivy.xml 一起上传到目标仓库。

当然你也可以发布到 Maven 仓库中。语法只需稍微一换就可以了。[[4\]](https://www.w3cschool.cn/gradle/sh8k1htf.html#footname)

发布到 Maven 仓库你需要 Maven 插件的支持，当然，Gradle 也会同时产生 pom.xml 一起上传到目标仓库。

### 发布到 Maven 仓库

build.gradle

```
apply plugin: 'maven'
uploadArchives {
    repositories {
        mavenDeployer {
            repository(url: "file://localhost/tmp/myRepo/")
        }
    }
}
```

## 下一步目标

若对 DSL 感兴趣，请看 [Project.configurations{}](http://gradledoc.qiniudn.com/1.12/dsl/org.gradle.api.Project.html#org.gradle.api.Project:configurations(groovy.lang.Closure))，[Project.repositories{}](http://gradledoc.qiniudn.com/1.12/dsl/org.gradle.api.Project.html#org.gradle.api.Project:repositories(groovy.lang.Closure)) 和 [Project.dependencies{}](http://gradledoc.qiniudn.com/1.12/dsl/org.gradle.api.Project.html#org.gradle.api.Project:dependencies(groovy.lang.Closure))。

另外，继续顺着手册学习其它章节内容吧。~

[3] 这让人感觉有点囧，我们正在尝试逐步分离两种概念。

[4] 我们也在努力改进语法让发布到 Maven 仓库不那么费劲。