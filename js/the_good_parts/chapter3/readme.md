# 语言精粹 读书笔记之对象

1. {}对象字面量

2. js中简单类型包括数字，字符串，布尔值（true,false），null值,undefined

3. 每个属性都有名字和值，属性的值可以是除undefined值之外的任何值

4. 一个对象字面量就是包括在一对花括号中的零个或多个“名/值”对，可出现在任何允许表达式出现的地方，
    逗号用来分隔多个名值对

5. 检索对象中包含的值可以采用在[]后缀中括住一个字符串表达式的方式

6. ||可以用来填充默认值

7. 对象中的值可以通过赋值来更新，如果对象之前没有该属性名，则将该属性扩充到对象中

8. 对象通过引用来传递，而不会被拷贝

9. 每个对象都连接到一个原型对象，可以从中继承属性，通过对象字面量创建的对象都连接到object.prototype这个JavaScript中的标准对象