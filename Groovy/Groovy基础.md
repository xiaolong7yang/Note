## 安装

下载SDK包（apache-groovy-sdk-2.5.8.zip）

## 语法基础

| as     | assert  | break      | case       |
| ------ | :------ | ---------- | ---------- |
| catch  | class   | const      | continue   |
| def    | default | do         | else       |
| enum   | extends | FALSE      | Finally    |
| for    | goto    | if         | implements |
| import | in      | instanceof | interface  |
| new    | pull    | package    | return     |
| super  | switch  | this       | throw      |
| throws | trait   | TRUE       | try        |
| while  |         |            |            |

## 数据类型

### 内置数据类型

- **byte** -这是用来表示字节值。例如2。
- **short** -这是用来表示一个短整型。例如10。
- **int** -这是用来表示整数。例如1234。
- **long** -这是用来表示一个长整型。例如10000090。
- **float** -这是用来表示32位浮点数。例如12.34。
- **double** -这是用来表示64位浮点数，这些数字是有时可能需要的更长的十进制数表示。例如12.3456565。
- **char** -这定义了单个字符文字。例如“A”。
- **Boolean** -这表示一个布尔值，可以是true或false。
- **String** -这些是以字符串的形式表示的文本。例如，“Hello World”的。

### 数字类

类型除了基本类型，还允许以下对象类型（有时称为包装器类型）-

- java.lang.Byte
- java.lang.Short
- java.lang.Integer
- java.lang.Long
- java.lang.Float
- java.lang.Double

此外，以下类可用于支持高精度计算 -

| 名称                 | 描述                             | 例如  |
| -------------------- | -------------------------------- | ----- |
| java.math.BigInteger | 不可变的任意精度的有符号整数数字 | 30克  |
| java.math.BigDecimal | 不可变的任意精度的有符号十进制数 | 3.5克 |

## 变量

大小写敏感，除了上面的数据类型，还可以使用def定义

## 运算符

Groovy中有以下类型的运算符 -

- 算术运算符
- 关系运算符
- 逻辑运算符
- 位运算符
- 赋值运算符

### 算术运算符

Groovy语言支持正常的算术运算符任何语言。以下是在Groovy中可用的算术运算符 -

| **运算符** | **描述**                      | **例子**                   |
| ---------- | ----------------------------- | -------------------------- |
| +          | 两个操作数的加法              | 1 + 2 将得到 3             |
| -          | 第一第二操作数相减            | 2 - 1 将得到 1             |
| *          | 两个操作数的乘法              | 2 * 2 将得到4              |
| /          | 两个操作数的除法              | 3/2 将得到 1.5             |
| ％         | 取模运算                      | 3％2 将得到 1              |
| ++         | 自增运算，在自身值的基础上加1 | INT X = 5;X ++;X 将得到 6  |
| --         | 自减运算,在自身值的基础上减1  | INT X = 5;X - -;X 将得到 4 |



### 关系运算符

关系运算符允许对象的比较。以下是在Groovy中可用的关系运算符 -

| 运算符 | 描述                                   | 例子               |
| ------ | -------------------------------------- | ------------------ |
| ==     | 测试两个对象之间是否相等               | 2 == 2 将得到 true |
| !=     | 测试两个对象之间是否不等               | 3 != 2 将得到 true |
| <      | 检查是否左边的对象是小于右边的对象。   | 2 < 3 将得到 true  |
| <=     | 检查是否向左对象是小于或等于右边的对象 | 2 <= 3 将得到 true |
| >      | 检查是否左边的对象比右边的对象大。     | 3 > 2 将得到 true  |
| >=     | 检查是否向左对象大于或等于右边的对象。 | 3>= 2 将得到 true  |

### 逻辑运算符

逻辑运算符用于计算布尔表达式。以下是在Groovy中提供的逻辑运算符 -

[显示示例](https://www.w3cschool.cn/groovy/groovy_logical_operators.html)

| 运算符 | 描述             | 例子                     |
| ------ | ---------------- | ------------------------ |
| &&     | 这是逻辑“与”运算 | true && true 得到 true   |
| \|\|   | 这是逻辑“或”运算 | true \|\| true 得到 true |
| ！     | 这是逻辑“非”运算 | !true 得到 false         |

### 位运算符

Groovy中提供了四个位运算符。以下是在Groovy中可用的位运算符 -

| 运算符 |            描述            |
| :----: | :------------------------: |
|   ＆   |       这是位“与”运算       |
|   \|   |      这是按位“或”运算      |
|   ^    | 这是按位“异或”或异或运算符 |
|   〜   |      这是按位反运算符      |

这里是显示这些运算符的真值表。

|  p   |  q   | p＆Q | p \| q | p ^ Q |
| :--: | :--: | :--: | :----: | :---: |
|  0   |  0   |  0   |   0    |   0   |
|  0   |  1   |  0   |   1    |   1   |
|  1   |  1   |  1   |   1    |   0   |
|  1   |  0   |  0   |   1    |   1   |

### 赋值运算符

Groovy语言也提供了赋值操作符。以下是在Groovy提供的赋值运算符 -

| 运算符 | 描述                      | 例子                      |
| ------ | ------------------------- | ------------------------- |
| +=     | A += B 等价于 A = A+B     | DEF A = 5A += 3输出将是8  |
| -=     | A -= B 等价于 A = A-B     | DEF A = 5A -= 3输出将是2  |
| *=     | A *= B 等价于 A= A*B      | DEF A = 5A *= 3输出将是15 |
| /=     | A /= B 等价于 A = A/B     | DEF A = 6A /= 3输出将是2  |
| (%)=   | A (%)= B 等价于 A = A % B | DEF A = 5A %= 3输出将是2  |

### 范围运算符

Groovy支持范围的概念，并在..符号的帮助下提供范围运算符的符号。下面给出了范围运算符的一个简单示例。

```
def range = 0..5 
```

这只是定义了一个简单的整数范围，存储到一个局部变量称为范围内的下限为0和上限为5。

以下代码段显示了如何使用各种运算符。

```groovy
class Example { 
   static void main(String[] args) { 
      def range = 5..10; 
      println(range); 
      println(range.get(2)); 
   } 
}
```

当我们运行上面的程序，我们会得到以下结果 -

从println语句中，可以看到显示在range语句中定义的整个数字范围。

get语句用于从定义的范围中获取一个对象，它将索引值作为参数。

```
[5, 6, 7, 8, 9, 10] 
7
```

### 运算符优先级

下表按优先级顺序列出了所有groovy运算符

| 运算符                                               | 名称                    |
| ---------------------------------------------------- | ----------------------- |
| ++ - + -                                             | 预增/减，一元加，一元减 |
| * / ％                                               | 乘法，除法，取模        |
| + -                                                  | 加法，减法              |
| ==！= <=>                                            | 等于，不等于，比较      |
| ＆                                                   | 二进制/位运算符与       |
| ^                                                    | 二进制/位异或           |
| \|                                                   | 二进制/按位或           |
| &&                                                   | 逻辑和                  |
| \|\|                                                 | 逻辑或                  |
| = ** = * = / =％= + = - = << = >> = >>> = = ^ = \| = | 各种赋值运算符          |

## 循环

while for 与Java一致

### for-in

**for-in** 语句用于遍历一组值。**for-in** 语句通常以以下方式使用。

```groovy
for(variable in range) { 
   statement #1 
   statement #2 
   … 
}
```

下图显示了此循环的图解说明。

![For In Loop](F:\Note\Groovy\Groovy基础.assets\201612291413343358.jpg)

以下是for-in语句的示例 -

```groovy
class Example { 
   static void main(String[] args) { 
      int[] array = [0,1,2,3]; 
		
      for(int i in array) { 
         println(i); 
      } 
   } 
}
```

在上面的例子中，我们首先初始化一个具有0,1,2和3的4个值的整数数组。然后我们使用for循环语句首先定义一个变量i，然后遍历数组中的所有整数 并相应地打印值。上面的代码的输出将是 -

```
0 
1 
2 
3
```

**for-in** 语句也可用于循环范围。以下示例说明如何完成此操作。

```groovy
class Example {
   static void main(String[] args) {
	
      for(int i in 1..5) {
         println(i);
      }
		
   } 
} 
```

在上面的例子中，我们实际上循环了从1到5定义的范围，并打印该范围中的每个值。上面的代码的输出将是 -

```
1 
2 
3 
4 
5 
```

**for-in** 语句也可用于循环访问Map。以下示例说明如何完成此操作。

```groovy
class Example {
   static void main(String[] args) {
      def employee = ["Ken" : 21, "John" : 25, "Sally" : 22];
		
      for(emp in employee) {
         println(emp);
      }
   }
}
```

在上面的例子中，我们实际上循环通过一个映射，它有一组定义的键值条目。上面的代码的输出将是 -

```
Ken = 21 
John = 25 
Sally = 22 
```

### 循环控制语句

break 与 continue 用法与Java一致

## 条件语句

|                          语句和描述                          |
| :----------------------------------------------------------: |
| [if语句](https://www.w3cschool.cn/groovy/groovy_if_statement.html)这个语句的一般工作是首先在if语句中计算一个条件。如果条件为真，它然后执行语句。 |
| [if / else语句](https://www.w3cschool.cn/groovy/groovy_if_else_statement.html)这个语句的一般工作是首先在if语句中计算一个条件。如果条件为真，则其后执行语句，并在else条件之前停止并退出循环。如果条件为假，则执行else语句块中的语句，然后退出循环。 |
| [嵌套if语句](https://www.w3cschool.cn/groovy/groovy_nested_if_statement.html)i有时需要有多个if语句嵌入在彼此内部。 |
| [Switch语句](https://www.w3cschool.cn/groovy/groovy_switch_statement.html)有时，嵌套的if-else语句是如此常见，并且经常使用，因此设计了一个更容易的语句，称为switch语句。 |
| [嵌套switch语句](https://www.w3cschool.cn/groovy/groovy_nested_switch_statement.html)switch也可以多层嵌套。 |

语法结构与Java一致

## 方法

与Java相比没有default级别的方法，不写默认public

```groovy
def methodName(){
    
}
```

参数

```groovy
def MehodName(p1,p2,p3){

}
```

默认参数

```groovy
def MethodName(p1,p2=0,p3=0){
	//不指定的时候给予默认值，传参没有默认的必传，有默认值的随意
}
```

返回值与Java一致

本地和外部参数与Java一致

方法属性，可以使用this,来访问它的实例成员

## I/O

```groovy
class IOTest {
    static void main(String[] args) {
        new File("D:\\Code\\GroovyTest\\src\\Example.txt").eachLine {
            line -> println "line:$line"
        }
        File file = new File("D:\\Code\\GroovyTest\\src\\Example.txt")
        println file.text;
        new File("D:\\Code\\GroovyTest\\src\\", "Example.txt").withWriter('UTF-8') {
            writer -> writer.writeLine 'Hello World'
        }
        // 写入文件
        File writerFile = new File("D:\\Code\\GroovyTest\\src\\Example.txt")
        println writerFile.text;

        // 文件长度
        println "The File ${writerFile.absolutePath} has ${file.length()} bytes ";

        // 测试文件是否是目录
        println "File? ${file.isFile()}"
        println "Directory? ${file.isDirectory()}"

        // 创建目录
        def srcDirectory = new File('D:\\Code\\GroovyTest\\srcDirectory')
        srcDirectory.mkdir()
        srcDirectory.deleteOnExit()
        // 复制文件
        def dst = new File("D:\\Code\\GroovyTest\\src\\Example2.txt")
        dst << file.text
        // 获取目录内容
        def rootFiles = new File("src").listRoots();
        rootFiles.each {
            rootFile ->println rootFile.absolutePath
        }
       // showDirectorFiles(".")
        showDirectorAndFile(".")
    }
    // 显示文件夹里的文件
    static void showDirectorFiles(def path){
        new  File(path).eachFile (){
            file->println( file.getAbsoluteFile())
        }
    }
    // 递归显示所有
    static void showDirectorAndFile(def path){
        new File(path).eachFileRecurse (){
            file -> println(file.getAbsolutePath())
        }
    }
}
```

## 数字方法

由于Groovy中的Numbers表示为类，以下是可用的方法列表。

| 序号 | 方法和描述                                                   |
| ---- | :----------------------------------------------------------- |
| 1    | [xxxValue（）](https://www.w3cschool.cn/groovy/groovy_xxxvalue.html)此方法接受Number作为参数，并基于调用的方法返回基本类型。 |
| 2    | [compareTo()](https://www.w3cschool.cn/groovy/groovy_compareto.html)compareTo方法是使用比较一个数字与另一个数字。如果要比较数字的值，这是有用的。 |
| 3    | [equals()](https://www.w3cschool.cn/groovy/groovy_equals.html)该方法确定调用方法的Number对象是否等于作为参数传递的对象。 |
| 4    | [valueOf()](https://www.w3cschool.cn/groovy/groovy_valueof.html)valueOf方法返回保存所传递的参数的值的相关Number对象。 |
| 5    | [toString()](https://www.w3cschool.cn/groovy/groovy_tostring.html)该方法用于获取表示Number对象的值的String对象。 |
| 6    | [parseInt()](https://www.w3cschool.cn/groovy/groovy_parseint.html)此方法用于获取某个String的原始数据类型。 parseXxx（）是一个静态方法，可以有一个参数或两个参数。 |
| 7    | [abs()](https://www.w3cschool.cn/groovy/groovy_abs.html)该方法给出了参数的绝对值。参数可以是int，float，long，double，short，byte。 |
| 8    | [ceil()](https://www.w3cschool.cn/groovy/groovy_ceil.html)方法ceil给出大于或等于参数的最小整数。 |
| 9    | [floor()](https://www.w3cschool.cn/groovy/groovy_floor.html)方法floor给出小于或等于参数的最大整数。 |
| 10   | [rint()](https://www.w3cschool.cn/groovy/groovy_rint.html)方法rint返回值最接近参数的整数。 |
| 11   | [round()](https://www.w3cschool.cn/groovy/groovy_round.html)方法round返回最接近的long或int，由方法返回类型给出。 |
| 12   | [min()](https://www.w3cschool.cn/groovy/groovy_min.html)该方法给出两个参数中较小的一个。参数可以是int，float，long，double。 |
| 13   | [max()](https://www.w3cschool.cn/groovy/groovy_max.html)该方法给出了两个参数的最大值。参数可以是int，float，long，double。 |
| 14   | [exp()](https://www.w3cschool.cn/groovy/groovy_exp.html)该方法返回自然对数e的底数为参数的幂。 |
| 15   | [log()](https://www.w3cschool.cn/groovy/groovy_log.html)该方法返回参数的自然对数。 |
| 16   | [pow()](https://www.w3cschool.cn/groovy/groovy_pow.html)该方法返回第一个参数的值增加到第二个参数的幂。 |
| 17   | [sqrt()](https://www.w3cschool.cn/groovy/groovy_sqrt.html)该方法返回参数的平方根。 |
| 18   | [sin()](https://www.w3cschool.cn/groovy/groovy_sin.html)该方法返回指定double值的正弦值。 |
| 19   | [cos()](https://www.w3cschool.cn/groovy/groovy_cos.html)该方法返回指定double值的余弦值。 |
| 20   | [tan()](https://www.w3cschool.cn/groovy/groovy_tan.html)该方法返回指定double值的正切值。 |
| 21   | [asin()](https://www.w3cschool.cn/groovy/groovy_asin.html)该方法返回指定double值的反正弦值。 |
| 22   | [acos()](https://www.w3cschool.cn/groovy/groovy_acos.html)该方法返回指定double值的反余弦值。 |
| 23   | [atan()](https://www.w3cschool.cn/groovy/groovy_atan.html)该方法返回指定double值的反正切。 |
| 24   | [atan2()](https://www.w3cschool.cn/groovy/groovy_atan2.html)该方法将直角坐标（x，y）转换为极坐标（r，theta），并返回theta。 |
| 25   | [parseInt（）](https://www.w3cschool.cn/groovy/groovy_numbers_parseint.html)该方法将参数值转换为度。 |
| 26   | [radian()](https://www.w3cschool.cn/groovy/groovy_radian.html)该方法将参数值转换为弧度。 |
| 27   | [random()](https://www.w3cschool.cn/groovy/groovy_random.html)该方法用于生成介于0.0和1.0之间的随机数。范围是：0.0 = <Math.random <1.0。通过使用算术可以实现不同的范围。 |

## 字符串

Groovy提供了多种表示String字面量的方法。 Groovy中的字符串可以用单引号（'），双引号（“）或三引号（”“”）括起来。此外，由三重引号括起来的Groovy字符串可以跨越多行。

### 字符串索引

Groovy中的字符串是字符的有序序列。字符串中的单个字符可以通过其位置访问。这由索引位置给出。

字符串索引从零开始，以小于字符串长度的一个结束。 Groovy还允许负索引从字符串的末尾开始计数。

以下是Groovy中字符串索引的使用示例 -

```groovy
class Example { 
   static void main(String[] args) { 
      String sample = "Hello world"; 
      println(sample[4]); // Print the 5 character in the string
		
      //Print the 1st character in the string starting from the back 
      println(sample[-1]); 
      println(sample[1..2]);//Prints a string starting from Index 1 to 2 
      println(sample[4..2]);//Prints a string starting from Index 4 back to 2 
      
   } 
}
```

当我们运行上面的程序，我们将得到以下结果 -

```
o 
d 
el 
oll 
```

### 基本字符串操作

首先让我们学习groovy中的基本字符串操作。它们在下面给出。

| 序号 | 字符串操作和描述                                             |
| ---- | :----------------------------------------------------------- |
| 1    | [Concatenation of two strings](https://www.w3cschool.cn/groovy/groovy_concatenation_of_two_strings.html)字符串的串联可以通过简单的'+'运算符来完成。 |
| 2    | [String Repetition](https://www.w3cschool.cn/groovy/groovy_string_repetition.html)字符串的重复可以通过简单的'*'运算符完成。 |
| 3    | [String Length](https://www.w3cschool.cn/groovy/groovy_string_length.html)由字符串的length（）方法确定的字符串的长度。 |

### 字符串方法

这里是String类支持的方法列表。

| 序号 | 方法和描述                                                   |
| ---- | :----------------------------------------------------------- |
| 1    | [center()](https://www.w3cschool.cn/groovy/groovy_center.html)返回一个新的长度为numberOfChars的字符串，该字符串由左侧和右侧用空格字符填充的收件人组成。 |
| 2    | [compareToIgnoreCase()](https://www.w3cschool.cn/groovy/groovy_comparetoignorecase.html)按字母顺序比较两个字符串，忽略大小写差异。 |
| 3    | [concat()](https://www.w3cschool.cn/groovy/groovy_concat.html)将指定的String连接到此String的结尾。 |
| 4    | [eachMatch()](https://www.w3cschool.cn/groovy/groovy_eachmatch.html)处理每个正则表达式组（参见下一节）匹配的给定String的子字符串。 |
| 5    | [endsWith()](https://www.w3cschool.cn/groovy/groovy_endswith.html)测试此字符串是否以指定的后缀结尾。 |
| 6    | [equalsIgnoreCase()](https://www.w3cschool.cn/groovy/groovy_equalsignorecase.html)将此字符串与另一个字符串进行比较，忽略大小写注意事项。 |
| 7    | [getAt()](https://www.w3cschool.cn/groovy/groovy_getat.html)它在索引位置返回字符串值 |
| 8    | [indexOf()](https://www.w3cschool.cn/groovy/groovy_indexof.html)返回此字符串中指定子字符串第一次出现的索引。 |
| 9    | [matches()](https://www.w3cschool.cn/groovy/groovy_matches.html)它输出字符串是否匹配给定的正则表达式。 |
| 10   | [minus()](https://www.w3cschool.cn/groovy/groovy_minus.html)删除字符串的值部分。 |
| 11   | [next()](https://www.w3cschool.cn/groovy/groovy_next.html)此方法由++运算符为String类调用。它增加给定字符串中的最后一个字符。 |
| 12   | [padLeft（）](https://www.w3cschool.cn/groovy/groovy_padleft.html)填充字符串，并在左边附加空格。 |
| 13   | [padRight()](https://www.w3cschool.cn/groovy/groovy_padright.html)填充字符串，并在右边附加空格。 |
| 14   | [plus()](https://www.w3cschool.cn/groovy/groovy_plus.html)追加字符串 |
| 15   | [previous()](https://www.w3cschool.cn/groovy/groovy_previous.html)此方法由CharSequence的 - 运算符调用。 |
| 16   | [replaceAll（）](https://www.w3cschool.cn/groovy/groovy_replaceall.html)通过对该文本的关闭结果替换捕获的组的所有出现。 |
| 17   | [center()](https://www.w3cschool.cn/groovy/groovy_strings_center.html)创建一个与此String相反的新字符串。 |
| 18   | [split()](https://www.w3cschool.cn/groovy/groovy_split.html)将此String拆分为给定正则表达式的匹配项。 |
| 19   | [subString()](https://www.w3cschool.cn/groovy/groovy_substring.html)返回一个新的String，它是此String的子字符串。 |
| 20   | [toUpperCase()](https://www.w3cschool.cn/groovy/groovy_touppercase.html)将此字符串中的所有字符转换为大写。 |
| 21   | [toLowerCase()](https://www.w3cschool.cn/groovy/groovy_tolowercase.html)将此字符串中的所有字符转换为小写。 |

## 范围

范围是指定值序列的速记。范围由序列中的第一个和最后一个值表示，Range可以是包含或排除。包含范围包括从第一个到最后一个的所有值，而独占范围包括除最后一个之外的所有值。这里有一些范例文字的例子 -

- 1..10 - 包含范围的示例
- 1 .. <10 - 独占范围的示例
- 'a'..'x' - 范围也可以由字符组成
- 10..1 - 范围也可以按降序排列
- 'x'..'a' - 范围也可以由字符组成并按降序排列。

以下是可用于范围的各种方法。

| 序号 | 方法和描述                                                   |
| ---- | :----------------------------------------------------------- |
| 1    | [contains()](https://www.w3cschool.cn/groovy/groovy_contains.html)检查范围是否包含特定值 |
| 2    | [get()](https://www.w3cschool.cn/groovy/groovy_get.html)返回此范围中指定位置处的元素。 |
| 3    | [getFrom()](https://www.w3cschool.cn/groovy/groovy_getfrom.html)获得此范围的下限值。 |
| 4    | [getTo()](https://www.w3cschool.cn/groovy/groovy_getto.html)获得此范围的上限值。 |
| 5    | [isReverse()](https://www.w3cschool.cn/groovy/groovy_isreverse.html)这是一个反向的范围，反向迭代 |
| 6    | [size()](https://www.w3cschool.cn/groovy/groovy_size.html)返回此范围的元素数。 |
| 7    | [subList()](https://www.w3cschool.cn/groovy/groovy_sublist.html)返回此指定的fromIndex（包括）和toIndex（排除）之间的此范围部分的视图 |

## 列表

列表是用于存储数据项集合的结构。在Groovy中，List保存了一系列对象引用。List中的对象引用占据序列中的位置，并通过整数索引来区分。列表文字表示为一系列用逗号分隔并用方括号括起来的对象。

要处理列表中的数据，我们必须能够访问各个元素。 Groovy列表使用索引操作符[]索引。列表索引从零开始，这指的是第一个元素。

以下是一些列表的示例 -

- [11，12，13，14] - 整数值列表
- ['Angular'，'Groovy'，'Java'] - 字符串列表
- [1，2，[3，4]，5] - 嵌套列表
- ['Groovy'，21，2.11] - 异构的对象引用列表
- [] - 一个空列表

在本章中，我们将讨论Groovy中可用的列表方法。

| 序号 | 方法和描述                                                   |
| ---- | :----------------------------------------------------------- |
| 1    | [add()](https://www.w3cschool.cn/groovy/groovy_add.html)将新值附加到此列表的末尾。 |
| 2    | [contains()](https://www.w3cschool.cn/groovy/groovy_lists_contains.html)如果此列表包含指定的值，则返回true。 |
| 3    | [get()](https://www.w3cschool.cn/groovy/groovy_lists_get.html)返回此列表中指定位置的元素。 |
| 4    | [isEmpty()](https://www.w3cschool.cn/groovy/groovy_isempty.html)如果此列表不包含元素，则返回true |
| 5    | [minus()](https://www.w3cschool.cn/groovy/groovy_lists_minus.html)创建一个由原始元素组成的新列表，而不是集合中指定的元素。 |
| 6    | [plus()](https://www.w3cschool.cn/groovy/groovy_lists_plus.html)创建由原始元素和集合中指定的元素组成的新列表。 |
| 7    | [pop()](https://www.w3cschool.cn/groovy/groovy_pop.html)从此列表中删除最后一个项目 |
| 8    | [remove()](https://www.w3cschool.cn/groovy/groovy_remove.html)删除此列表中指定位置的元素。 |
| 9    | [reverse()](https://www.w3cschool.cn/groovy/groovy_reverse.html)创建与原始列表的元素相反的新列表 |
| 10   | [size()](https://www.w3cschool.cn/groovy/groovy_lists_size.html)获取此列表中的元素数。 |
| 11   | [sort()](https://www.w3cschool.cn/groovy/groovy_sort.html)返回原始列表的排序副本。 |

## 映射

映射（也称为关联数组，字典，表和散列）是对象引用的无序集合。Map集合中的元素由键值访问。 Map中使用的键可以是任何类。当我们插入到Map集合中时，需要两个值：键和值。

以下是一些映射的例子 -

- ['TopicName'：'Lists'，'TopicName'：'Maps'] - 具有TopicName作为键的键值对的集合及其相应的值。
- [：] - 空映射。

在本章中，我们将讨论Groovy中可用的映射方法。

| 序号 | 方法和描述                                                   |
| ---- | :----------------------------------------------------------- |
| 1    | [containsKey()](https://www.w3cschool.cn/groovy/groovy_containskey.html)此映射是否包含此键？ |
| 2    | [get()](https://www.w3cschool.cn/groovy/groovy_maps_get.html)查找此Map中的键并返回相应的值。如果此映射中没有键的条目，则返回null。 |
| 3    | [keySet()](https://www.w3cschool.cn/groovy/groovy_keyset.html)获取此映射中的一组键。 |
| 4    | [put()](https://www.w3cschool.cn/groovy/groovy_put.html)将指定的值与此映射中的指定键相关联。如果此映射先前包含此键的映射，则旧值将替换为指定的值。 |
| 5    | [size()](https://www.w3cschool.cn/groovy/groovy_maps_size.html)返回此地图中的键值映射的数量。 |
| 6    | [values()](https://www.w3cschool.cn/groovy/groovy_values.html)返回此地图中包含的值的集合视图。 |

## 日期和时间

类Date表示特定的时刻，具有毫秒精度。 Date类有两个构造函数，如下所示。

### Date()

### 句法

```
public Date()
```

**参数** -无。

**返回值**

分配一个Date对象并初始化它，以便它表示分配的时间，以最近的毫秒为单位。

### 例子

下面是一个使用这个方法的例子 -

```groovy
class Example { 
   static void main(String[] args) { 
      Date date = new Date(); 
      
      // display time and date using toString() 
      System.out.println(date.toString()); 
   } 
} 
```

当我们运行上面的程序，我们将得到以下结果。以下输出将为您提供当前日期和时间 -

```
Thu Dec 10 21:31:15 GST 2015
```

### Date (长毫秒)

### 句法

```
public Date(long millisec)
```

**参数**

毫秒 - millisecconds的数量，因为标准的基准时间指定。

**返回值** -分配一个Date对象并将其初始化以表示自标准基准时间（称为“该历元”，即1970年1月1日，00:00:00 GMT）起指定的毫秒数。

### 例子

下面是一个使用这个方法的例子 -

```groovy
class Example {
   static void main(String[] args) {
      Date date = new Date(100);
      
      // display time and date using toString()
      System.out.println(date.toString());
   } 
}
```

当我们运行上面的程序，我们将得到以下结果 -

```
Thu Jan 01 04:00:00 GST 1970
```

以下是Date类的给定方法。在接受或返回年，月，日，小时，分钟和秒值的类Date的所有方法中，使用以下表示形式 -

- 年y由整数y-1900表示。
- 一个月份由0到11的整数表示; 0是1月，1是2月，等等;因此11是12月。
- 日期（月中的日）以通常方式由1至31的整数表示。
- 一个小时由从0到23的整数表示。因此，从午夜到上午1点的小时是小时0，而从中午到下午1点的小时是小时12。
- 分钟由通常方式的0至59的整数表示。
- 第二个由0至61的整数表示。

| 序号 | 方法和描述                                                   |
| ---- | :----------------------------------------------------------- |
| 1    | [after()](https://www.w3cschool.cn/groovy/groovy_after.html)测试此日期是否在指定日期之后。 |
| 2    | [equals()](https://www.w3cschool.cn/groovy/groovy_dates_times_equals.html)比较两个日期的相等性。当且仅当参数不为null时，结果为true，并且是表示与该对象时间相同的时间点（毫秒）的Date对象。 |
| 3    | [compareTo()](https://www.w3cschool.cn/groovy/groovy_dates_times_compareto.html)比较两个日期的顺序。 |
| 4    | [toString()](https://www.w3cschool.cn/groovy/groovy_dates_times_tostring.html)将此Date对象转换为字符串 |
| 5    | [before()](https://www.w3cschool.cn/groovy/groovy_before.html)测试此日期是否在指定日期之前。 |
| 6    | [getTime()](https://www.w3cschool.cn/groovy/groovy_gettime.html)返回自此Date对象表示的1970年1月1日，00:00:00 GMT以来的毫秒数。 |
| 7    | [setTime()](https://www.w3cschool.cn/groovy/groovy_settime.html)设置此Date对象以表示一个时间点，即1970年1月1日00:00:00 GMT之后的时间毫秒。 |

## 正则表达式

正则表达式是用于在文本中查找子字符串的模式。 Groovy使用〜“regex”表达式本地支持正则表达式。引号中包含的文本表示用于比较的表达式。

例如，我们可以创建一个正则表达式对象，如下所示 -

```
def regex = ~'Groovy'
```

当Groovy运算符=〜在if和while语句（见第8章）中作为谓词（返回布尔值的表达式）出现时，左侧的String操作数与右侧的正则表达式操作数匹配。因此，以下每个都传递值true。

当定义正则表达式时，可以使用以下特殊字符

- 有两个特殊的位置字符用于表示一行的开始和结束：caret（∧）和美元符号（$）。
- 正则表达式也可以包括量词。加号（+）表示一次或多次，应用于表达式的前一个元素。星号（*）用于表示零个或多个出现。问号（？）表示零或一次。
- 元字符{和}用于匹配前一个字符的特定数量的实例。
- 在正则表达式中，句点符号（。）可以表示任何字符。这被描述为通配符。
- 正则表达式可以包括字符类。一组字符可以作为简单的字符序列，包含在元字符[和]中，如[aeiou]中。对于字母或数字范围，可以使用[a-z]或[a-mA-M]中的短划线分隔符。字符类的补码由方括号内的前导插入符号表示，如[∧a-z]中所示，并表示除指定的字符以外的所有字符。下面给出了正则表达式的一些示例。

```groovy
'Groovy' =~ 'Groovy' 
'Groovy' =~ 'oo' 
'Groovy' ==~ 'Groovy' 
'Groovy' ==~ 'oo' 
'Groovy' =~ '∧G' 
‘Groovy' =~ 'G$' 
‘Groovy' =~ 'Gro*vy' 'Groovy' =~ 'Gro{2}vy'
```

## 异常处理

与Java的异常处理语法相同，支持多catch ，finaly

以下是Groovy中提供的异常方法 -

public String getMessage（）

返回有关已发生异常的详细消息。此消息在Throwable构造函数中初始化。

public Throwable getCause()

返回由Throwable对象表示的异常原因。

public String toString()

返回与getMessage（）的结果连接的类的名称。

public void printStackTrace()

将toString（）的结果与堆栈跟踪一起打印到System.err，错误输出流。

public StackTraceElement [] getStackTrace()

返回包含堆栈跟踪上的每个元素的数组。索引0处的元素表示调用堆栈的顶部，数组中的最后一个元素表示调用堆栈底部的方法。

public Throwable fillInStackTrace()

使用当前堆栈跟踪填充此Throwable对象的堆栈跟踪，添加到堆栈跟踪中的任何以前的信息。

## 面向对象

普通类，内部类，抽象类，接口与Java基本相同

## 泛型

与Java基本相同

## 特征

特征是语言的结构构造，允许 -

- 行为的组成。
- 接口的运行时实现。
- 与静态类型检查/编译的兼容性

***它们可以被看作是承载默认实现和状态的接口。使用trait关键字定义trait。***

下面给出了一个特征的例子：

```
trait Marks {
   void DisplayMarks() {
      println("Display Marks");
   } 
}
```

然后可以使用implement关键字以类似于接口的方式实现trait。

```
class Example {
   static void main(String[] args) {
      Student st = new Student();
      st.StudentID = 1;
      st.Marks1 = 10; 
      println(st.DisplayMarks());
   } 
} 

trait Marks { 
   void DisplayMarks() {
      println("Display Marks");
   } 
} 

class Student implements Marks { 
   int StudentID
   int Marks1;
}
```

### 实现接口

Traits可以实现接口，在这种情况下，使用implements关键字声明接口。

下面给出了实现接口的特征的示例。在以下示例中，可以注意以下要点。

- 接口Total使用方法DisplayTotal定义。
- 特征Marks实现了Total接口，因此需要为DisplayTotal方法提供一个实现。

```
class Example {
   static void main(String[] args) {
      Student st = new Student();
      st.StudentID = 1;
      st.Marks1 = 10;
		
      println(st.DisplayMarks());
      println(st.DisplayTotal());
   } 
} 

interface Total {
   void DisplayTotal() 
} 

trait Marks implements Total {
   void DisplayMarks() {
      println("Display Marks");
   }
	
   void DisplayTotal() {
      println("Display Total"); 
   } 
} 

class Student implements Marks { 
   int StudentID
   int Marks1;  
} 
```

上述程序的输出将是 -

```
Display Marks 
Display Total
```

### 属性

特征可以定义属性。下面给出了具有属性的trait的示例。

在以下示例中，integer类型的Marks1是一个属性。

```
class Example {
   static void main(String[] args) {
      Student st = new Student();
      st.StudentID = 1;
		
      println(st.DisplayMarks());
      println(st.DisplayTotal());
   } 
	
   interface Total {
      void DisplayTotal() 
   } 
	
   trait Marks implements Total {
      int Marks1;
		
      void DisplayMarks() {
         this.Marks1 = 10;
         println(this.Marks1);
      }
		
      void DisplayTotal() {
         println("Display Total");
      } 
   } 
	
   class Student implements Marks {
      int StudentID 
   }
} 
```

上述程序的输出将是 -

```
10 
Display Total
```

### 行为的构成

特征可以用于以受控的方式实现多重继承，避免钻石问题。在下面的代码示例中，我们定义了两个特征 - Marks和Total。我们的Student类实现了两个特征。由于学生类扩展了这两个特征，它能够访问这两种方法 - DisplayMarks和DisplayTotal。

```
class Example {
   static void main(String[] args) {
      Student st = new Student();
      st.StudentID = 1;
		
      println(st.DisplayMarks());
      println(st.DisplayTotal()); 
   } 
} 

trait Marks {
   void DisplayMarks() {
      println("Marks1");
   } 
} 

trait Total {
   void DisplayTotal() { 
      println("Total");
   } 
}  

class Student implements Marks,Total {
   int StudentID 
}   
```

上述程序的输出将是 -

```
Total 
Marks1
```

### 扩展特征

特征可能扩展另一个特征，在这种情况下，必须使用extends关键字。在下面的代码示例中，我们使用Marks trait扩展了Total trait。

```
class Example {
   static void main(String[] args) {
      Student st = new Student();
      st.StudentID = 1;
      println(st.DisplayMarks());
   } 
} 

trait Marks {
   void DisplayMarks() {
      println("Marks1");
   } 
} 

trait Total extends Marks {
   void DisplayMarks() {
      println("Total");
   } 
}  

class Student implements Total {
   int StudentID 
}
```

上述程序的输出将是 -

```
Total
```

## 闭包

闭包是一个短的匿名代码块。它通常跨越几行代码。一个方法甚至可以将代码块作为参数。它们是匿名的。

下面是一个简单闭包的例子，它是什么样子。

```
class Example {
   static void main(String[] args) {
      def clos = {println "Hello World"};
      clos.call();
   } 
}
```

在上面的例子中，代码行 - {println“Hello World”}被称为闭包。此标识符引用的代码块可以使用call语句执行。

当我们运行上面的程序，我们将得到以下结果 -

```
Hello World
```

### 闭包中的形式参数

闭包也可以包含形式参数，以使它们更有用，就像Groovy中的方法一样。

```
class Example {
   static void main(String[] args) {
      def clos = {param->println "Hello ${param}"};
      clos.call("World");
   } 
}
```

在上面的代码示例中，注意使用$ {param}，这导致closure接受一个参数。当通过clos.call语句调用闭包时，我们现在可以选择将一个参数传递给闭包。

当我们运行上面的程序，我们将得到以下结果 -

```
Hello World
```

下一个图重复了前面的例子并产生相同的结果，但显示可以使用被称为它的隐式单个参数。这里的'it'是Groovy中的关键字。

```
class Example {
   static void main(String[] args) {
      def clos = {println "Hello ${it}"};
      clos.call("World");
   } 
}
```

当我们运行上面的程序，我们将得到以下结果 -

```
Hello World
```

### 闭包和变量

更正式地，闭包可以在定义闭包时引用变量。以下是如何实现这一点的示例。

```
class Example {     
   static void main(String[] args) {
      def str1 = "Hello";
      def clos = {param -> println "${str1} ${param}"}
      clos.call("World");
		
      // We are now changing the value of the String str1 which is referenced in the closure
      str1 = "Welcome";
      clos.call("World");
   } 
}
```

在上面的例子中，除了向闭包传递参数之外，我们还定义了一个名为str1的变量。闭包也接受变量和参数。

当我们运行上面的程序，我们将得到以下结果 -

```
Hello World 
Welcome World
```

### 在方法中使用闭包

闭包也可以用作方法的参数。在Groovy中，很多用于数据类型（例如列表和集合）的内置方法都有闭包作为参数类型。

以下示例显示如何将闭包作为参数发送到方法。

```
class Example { 
   def static Display(clo) {
      // This time the $param parameter gets replaced by the string "Inner"         
      clo.call("Inner");
   } 
	
   static void main(String[] args) {
      def str1 = "Hello";
      def clos = { param -> println "${str1} ${param}" }
      clos.call("World");
		
      // We are now changing the value of the String str1 which is referenced in the closure
      str1 = "Welcome";
      clos.call("World");
		
      // Passing our closure to a method
      Example.Display(clos);
   } 
}
```

在上述示例中，

- 我们定义一个名为Display的静态方法，它将闭包作为参数。
- 然后我们在我们的main方法中定义一个闭包，并将它作为一个参数传递给我们的Display方法。

当我们运行上面的程序，我们将得到以下结果 -

```
Hello World 
Welcome World 
Welcome Inner
```

### 集合和字符串中的闭包

几个List，Map和String方法接受一个闭包作为参数。让我们看看在这些数据类型中如何使用闭包的例子。

### 使用闭包和列表

以下示例显示如何使用闭包与列表。在下面的例子中，我们首先定义一个简单的值列表。列表集合类型然后定义一个名为.each的函数。此函数将闭包作为参数，并将闭包应用于列表的每个元素

```
class Example {
   static void main(String[] args) {
      def lst = [11, 12, 13, 14];
      lst.each {println it}
   } 
}
```

当我们运行上面的程序，我们将得到以下结果 -

```
11 
12 
13 
14
```

### 使用映射闭包

以下示例显示了如何使用闭包。在下面的例子中，我们首先定义一个简单的关键值项Map。然后，映射集合类型定义一个名为.each的函数。此函数将闭包作为参数，并将闭包应用于映射的每个键值对。

```
class Example {
   static void main(String[] args) {
      def mp = ["TopicName" : "Maps", "TopicDescription" : "Methods in Maps"]             
      mp.each {println it}
      mp.each {println "${it.key} maps to: ${it.value}"}
   } 
}
```

当我们运行上面的程序，我们会得到以下结果 -

```
TopicName = Maps 
TopicDescription = Methods in Maps 
TopicName maps to: Maps 
TopicDescription maps to: Methods in Maps
```

通常，我们可能希望遍历集合的成员，并且仅当元素满足一些标准时应用一些逻辑。这很容易用闭包中的条件语句来处理。

```
class Example {
   static void main(String[] args) {
      def lst = [1,2,3,4];
      lst.each {println it}
      println("The list will only display those numbers which are divisible by 2")
      lst.each{num -> if(num % 2 == 0) println num}
   } 
}
```

上面的例子显示了在闭包中使用的条件if（num％2 == 0）表达式，用于检查列表中的每个项目是否可被2整除。

当我们运行上面的程序，我们会得到以下结果 -

```
1 
2 
3 
4 
The list will only display those numbers which are divisible by 2.
2 
4 
```

### 闭包使用的方法

闭包本身提供了一些方法。

| 序号 | 方法和描述                                                   |
| ---- | :----------------------------------------------------------- |
| 1    | [find()](https://www.w3cschool.cn/groovy/groovy_find.html)find方法查找集合中与某个条件匹配的第一个值。 |
| 2    | [findAll（）](https://www.w3cschool.cn/groovy/groovy_findall.html)它找到接收对象中与闭合条件匹配的所有值。 |
| 3    | [any() & every()](https://www.w3cschool.cn/groovy/groovy_any_every.html)方法any迭代集合的每个元素，检查布尔谓词是否对至少一个元素有效。 |
| 4    | [collect()](https://www.w3cschool.cn/groovy/groovy_collect.html)该方法通过集合收集迭代，使用闭包作为变换器将每个元素转换为新值。 |