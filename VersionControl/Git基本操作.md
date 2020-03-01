# Git #

## 1、创建版本库 ##

```bash
首先配置全局信息
git config --global user.name "xiaolongyang"
git config --global user.email "807369223@qq.com"
# windows下中文不显示问题
git config --global core.quotepath false
# git log 不显示中文问题，如果第第一条能显示中文，配置第二条
git --no-pager log 
git config --global core.pager more 
# 等等
git config --global gui.encoding utf-8
git config --global i18n.commitencoding utf-8
git config --global i18n.logoutputencoding utf-8
# 如果系统设置了
export LANG=zh_CN.UTF-8
# 则日志输入编码设置为
git config --global i18n.logoutputencoding utf-8
# 在/etc/profile中添加
export LESSCHARSET=utf-8

# 以下为正文
git init 初始化
git add  添加
git status 查看当前状态
git commit -m "提交描述"
git config --global http.proxy socks5://127.0.0.1:1080
git config --global https.proxy socks5://127.0.0.1:1080
```
## 2、版本回退 ##
```bash
git diff 可以查看修改内容
git log 查看日志 用于查看提交了几次 每次提交描述

精简信息输出
git log --pretty=oneline 

git reset 版本回退
 --hard HEAD^ 回退一个版本
 --hard HEAD^^ 回退两个版本
 --hard ~100 回退100个版本

git reflog 查看操作的命令历史
根据显示出的commit id 来选择到哪个版本
git reset --hard 1094a
tips:1094a为commit id(版本号）
```
## 3、工作区和暂存区 ##
	工作区 add --> stage 缓存区 commit--> master 上
## 4、管理修改  ##
	git diff HEAD --readme.txt 查看工作区和暂存区里的区别
## 5、撤销修改 ##
	git checkout -- readme.txt可以丢弃工作区的修改
	
	这里有两种情况：
	一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态
	一种是readme.txt已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。
	总之，就是让这个文件回到最近一次git commit或git add时的状态。
	
	用命令git reset HEAD file可以把暂存区的修改撤销掉（unstage），重新放回工作区
	
	git reset HEAD readme.txt
	
	场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- file。
	
	场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，
		  分两步，第一步用命令git reset HEAD <file>，就回到了场景1，第二步按场景1操作。
	
	场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，
		  不过前提是没有推送到远程库。
## 6、删除文件 ##
	rm test.txt 删除本地文件
	git status 查看状态 发现版本库中有，而本地没有
	
	确定删除
	git rm test.txt
	
	误删除
	git checkout -- test.txt
## 7、远程仓库 ##
### (1)生成sshKey ###
	ssh-keygen -t rsa -C "youremail@example.com"
### (2)关联远程仓库 ###
	git remote add origin git@github.com:xiaolong7yang/learngit.git
	第一次拉取强制合并
	git pull origin master --allow-unrelated-histories
### (3)将本地内容推送到远程仓库 ###
	git push -u origin master
### (4)从远程仓库克隆 ###
	git clone git@github.com:xiaolong7yang/gitskills.git
##  8、分支管理  ##

	项目的原始状态
	
	git checkout -b dev
	git checkout命令加上-b参数表示创建并切换，相当于以下两条命令
	git branch dev
	git checkout dev 


	git merge dev 合并指定分支到当前分支


	git branch -d dev 删除指定分支


	git branch 查看当前分支
	git log --graph命令可以看到分支合并图。
	git log --graph --pretty=oneline --abbrev-commit 查看分支合并图

## 9、分支管理策略 ##
通常，合并分支时，如果可能，Git会用Fast forward模式，但这种模式下，删除分支后，会丢掉分支信息。

如果要强制禁用Fast forward模式，Git就会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息。
## 10、bug 分支 ##
幸好，Git还提供了一个stash功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作：
	
	git stash list
	
	$ git checkout master
	Switched to branch 'master'
	Your branch is ahead of 'origin/master' by 6 commits.
  	(use "git push" to publish your local commits)

	$ git checkout -b issue-101
	Switched to a new branch 'issue-101'
	// 恢复指定现场
	$ git stash apply stash@{0}

一是用git stash apply恢复，但是恢复后，stash内容并不删除，你需要用git stash drop来删除；

另一种方式是用git stash pop，恢复的同时把stash内容也删了：
	$ git stash apply stash@{0} 指定回复哪一个畅度

## 11、未来分支 ##
开发一个新feature，最好新建一个分支；

如果要丢弃一个没有被合并过的分支，可以通过git branch -D <name>强行删除。

## 12、多人协作 ##

查看远程库的信息，用git remote：

	git remote
	origin

或者，用git remote -v显示更详细的信息：

	$ git remote -v
	origin  git@github.com:xiaolong7yang/learngit.git (fetch)
	origin  git@github.com:xiaolong7yang/learngit.git (push)


### 推送分支 ###


	git push origin master
	git push origin dev





但是，并不是一定要把本地分支往远程推送，那么，哪些分支需要推送，哪些不需要呢？

- master分支是主分支，因此要时刻与远程同步；

- dev分支是开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步； bug分支只用于在本地

- 修复bug，就没必要推到远程了，除非老板要看看你每周到底修复了几个bug；

- feature分支是否推到远程，取决于你是否和你的小伙伴合作在上面开发。

总之，就是在Git中，分支完全可以在本地自己藏着玩，是否推送，视你的心情而定！

### 抓取分支 ###
	// 克隆分支，默认抓取master
	git clone git@github.com:xiaolong7yang/learngit.git
	// 查看分支
	git branch
	// 创建远程dev分支到本地
	git checkout -b dev origin/dev
	
	//可以在dev上继续修改，然后，时不时地把dev分支push到远程：
	$ git add env.txt
	
	$ git commit -m "add env"
	[dev 7a5e5dd] add env
	 1 file changed, 1 insertion(+)
	 create mode 100644 env.txt
	
	$ git push origin dev
	Counting objects: 3, done.
	Delta compression using up to 4 threads.
	Compressing objects: 100% (2/2), done.
	Writing objects: 100% (3/3), 308 bytes | 308.00 KiB/s, done.
	Total 3 (delta 0), reused 0 (delta 0)
	To github.com:xiaolong7yang/learngit.git
	   f52c633..7a5e5dd  dev -> dev



推送失败，因为你的小伙伴的最新提交和你试图推送的提交有冲突，解决办法也很简单，Git已经提示我们，先用git pull把最新的提交从origin/dev抓下来，然后，在本地合并，解决冲突，再推送

	$ git pull
	There is no tracking information for the current branch.
	Please specify which branch you want to merge with.
	See git-pull(1) for details.
	
	    git pull <remote> <branch>
	
	If you wish to set tracking information for this branch you can do so with:
	
	    git branch --set-upstream-to=origin/<branch> dev

git pull也失败了，原因是没有指定本地dev分支与远程origin/dev分支的链接，根据提示，设置dev和origin/dev的链接

	$ git branch --set-upstream-to=origin/dev dev
	Branch 'dev' set up to track remote branch 'dev' from 'origin'.

再pull：

	$ git pull
	Auto-merging env.txt
	CONFLICT (add/add): Merge conflict in env.txt
	Automatic merge failed; fix conflicts and then commit the result.

这回git pull成功，但是合并有冲突，需要手动解决，解决的方法和分支管理中的解决冲突完全一样。解决后，提交，再push：

	$ git commit -m "fix env conflict"
	[dev 57c53ab] fix env conflict
	
	$ git push origin dev
	Counting objects: 6, done.
	Delta compression using up to 4 threads.
	Compressing objects: 100% (4/4), done.
	Writing objects: 100% (6/6), 621 bytes | 621.00 KiB/s, done.
	Total 6 (delta 0), reused 0 (delta 0)
	To github.com:xiaolong7yang/learngit.git
	   7a5e5dd..57c53ab  dev -> dev

## 解决分支冲突 ##

人生不如意之事十之八九，合并分支往往也不是一帆风顺的。

准备新的feature1分支，继续我们的新分支开发：

	$ git checkout -b feature1
	Switched to a new branch 'feature1'
修改readme.txt最后一行，改为：

Creating a new branch is quick AND simple.
在feature1分支上提交：

	$ git add readme.txt
	
	$ git commit -m "AND simple"
	[feature1 14096d0] AND simple
	 1 file changed, 1 insertion(+), 1 deletion(-)
切换到master分支：

	$ git checkout master
	Switched to branch 'master'
	Your branch is ahead of 'origin/master' by 1 commit.
	  (use "git push" to publish your local commits)
Git还会自动提示我们当前master分支比远程的master分支要超前1个提交。

在master分支上把readme.txt文件的最后一行改为：

Creating a new branch is quick & simple.
提交：

	$ git add readme.txt 
	$ git commit -m "& simple"
	[master 5dc6824] & simple
	 1 file changed, 1 insertion(+), 1 deletion(-)
现在，master分支和feature1分支各自都分别有新的提交，变成了这样：
![](https://i.imgur.com/0cKdxOj.png)

这种情况下，Git无法执行“快速合并”，只能试图把各自的修改合并起来，但这种合并就可能会有冲突，我们试试看：

	$ git merge feature1
	Auto-merging readme.txt
	CONFLICT (content): Merge conflict in readme.txt
	Automatic merge failed; fix conflicts and then commit the result.
果然冲突了！Git告诉我们，readme.txt文件存在冲突，必须手动解决冲突后再提交。git status也可以告诉我们冲突的文件：

	$ git status
	On branch master
	Your branch is ahead of 'origin/master' by 2 commits.
	  (use "git push" to publish your local commits)
	
	You have unmerged paths.
	  (fix conflicts and run "git commit")
	  (use "git merge --abort" to abort the merge)
	
	Unmerged paths:
	  (use "git add <file>..." to mark resolution)
	
	both modified:   readme.txt
	
	no changes added to commit (use "git add" and/or "git commit -a")
我们可以直接查看readme.txt的内容：

	Git is a distributed version control system.
	Git is free software distributed under the GPL.
	Git has a mutable index called stage.
	Git tracks changes of files.
	<<<<<<< HEAD
	Creating a new branch is quick & simple.
	=======
	Creating a new branch is quick AND simple.
	>>>>>>> feature1

Git用<<<<<<<，=======，>>>>>>>标记出不同分支的内容，我们修改如下后保存：
	
	Creating a new branch is quick and simple.
再提交：

	$ git add readme.txt 
	$ git commit -m "conflict fixed"
	[master cf810e4] conflict fixed
现在，master分支和feature1分支变成了下图所示：
	
![](https://i.imgur.com/zo0xtDK.png)

用带参数的git log也可以看到分支的合并情况：

	$ git log --graph --pretty=oneline --abbrev-commit
	*   cf810e4 (HEAD -> master) conflict fixed
	|\  
	| * 14096d0 (feature1) AND simple
	* | 5dc6824 & simple
	|/  
	* b17d20e branch test
	* d46f35e (origin/master) remove test.txt
	* b84166e add test.txt
	* 519219b git tracks changes
	* e43a48b understand how stage works
	* 1094adb append GPL
	* e475afc add distributed
	* eaadf4e wrote a readme file
最后，删除feature1分支：

	$ git branch -d feature1
	Deleted branch feature1 (was 14096d0).

## 标签管理 ##
### 创建标签 ###
	$ git branch
	* dev
	  master
	$ git checkout master
	Switched to branch 'master'
	// 打一个新标签
	$ git tag v1.0
	// 查看所有标签
	$ git tag
	v1.0

默认标签是打在最新提交的commit上的。有时候，如果忘了打标签，比如，现在已经是周五了，但应该在周一打的标签没有打，怎么办？

方法是找到历史提交的commit id，然后打上就可以了：

	$ git log --pretty=oneline --abbrev-commit
	12a631b (HEAD -> master, tag: v1.0, origin/master) merged bug fix 101
	4c805e2 fix bug 101
	e1e9c68 merge with no-ff
	f52c633 add merge
	cf810e4 conflict fixed
	5dc6824 & simple
	14096d0 AND simple
	b17d20e branch test
	d46f35e remove test.txt
	b84166e add test.txt
	519219b git tracks changes
	e43a48b understand how stage works
	1094adb append GPL
	e475afc add distributed
	eaadf4e wrote a readme file


比方说要对add merge这次提交打标签，它对应的commit id是f52c633，敲入命令：

	$ git tag v0.9 f52c633

再用命令git tag查看标签：

	$ git tag
	v0.9
	v1.0
注意，标签不是按时间顺序列出，而是按字母排序的。可以用git show <tagname>查看标签信息：

	$ git show v0.9
	commit f52c63349bc3c1593499807e5c8e972b82c8f286 (tag: v0.9)
	Author: Michael Liao <askxuefeng@gmail.com>
	Date:   Fri May 18 21:56:54 2018 +0800
	
	add merge
	
	diff --git a/readme.txt b/readme.txt
	...
可以看到，v0.9确实打在add merge这次提交上。

还可以创建带有说明的标签，用-a指定标签名，-m指定说明文字：
	
	$ git tag -a v0.1 -m "version 0.1 released" 1094adb
	用命令git show <tagname>可以看到说明文字：
	
	$ git show v0.1
	tag v0.1
	Tagger: Michael Liao <askxuefeng@gmail.com>
	Date:   Fri May 18 22:48:43 2018 +0800
	
	version 0.1 released
	
	commit 1094adb7b9b3807259d8cb349e7df1d4d6477073 (tag: v0.1)
	Author: Michael Liao <askxuefeng@gmail.com>
	Date:   Fri May 18 21:06:15 2018 +0800
	
	    append GPL
	
	diff --git a/readme.txt b/readme.txt
	...

小结


- 命令`git tag <tagname>`用于新建一个标签，默认为HEAD，也可以指定一个commit id；

- 命令`git tag -a <tagname> -m "blablabla...`可以指定标签信息；

- 命令`git tag`可以查看所有标签。

### 操作标签 ###

如果标签打错了，也可以删除：

	$ git tag -d v0.1
	Deleted tag 'v0.1' (was f15b0dd)
因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除。

如果要推送某个标签到远程，使用命令git push origin <tagname>：

	$ git push origin v1.0
	Total 0 (delta 0), reused 0 (delta 0)
	To github.com:michaelliao/learngit.git
	 * [new tag]         v1.0 -> v1.0
或者，一次性推送全部尚未推送到远程的本地标签：

	$ git push origin --tags
	Total 0 (delta 0), reused 0 (delta 0)
	To github.com:michaelliao/learngit.git
	 * [new tag]         v0.9 -> v0.9
如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除：

	$ git tag -d v0.9
	Deleted tag 'v0.9' (was f52c633)
然后，从远程删除。删除命令也是push，但是格式如下：
	
	$ git push origin :refs/tags/v0.9
	To github.com:michaelliao/learngit.git
	 - [deleted]         v0.9
要看看是否真的从远程库删除了标签，可以登陆GitHub查看。

### 小结 ###


- 命令git push origin <tagname>可以推送一个本地标签；

- 命令git push origin --tags可以推送全部未推送过的本地标签；

- 命令git tag -d <tagname>可以删除一个本地标签；

- 命令git push origin :refs/tags/<tagname>可以删除一个远程标签
## rebase ##
rebase操作可以把本地未push的分叉提交历史整理成直线；

rebase的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。

**忽略某些文件时，需要编写.gitignore；**

**.gitignore文件本身要放到版本库里，并且可以对.gitignore做版本管理**

```
git fetch origin master
git log -p master..origin/master
git merge origin/master
```

# 后续补充操作

## 配置VPN端口

```bash
git config --global https.proxy http://127.0.0.1:1080
git config --global https.proxy https://127.0.0.1:1080
git config --global http.proxy 'socks5://127.0.0.1:1080' 
git config --global https.proxy 'socks5://127.0.0.1:1080'
# 取消
git config --global --unset http.proxy
git config --global --unset https.proxy

```

