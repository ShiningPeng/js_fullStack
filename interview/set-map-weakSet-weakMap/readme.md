## map
键值对的总和
key value

1. {} / Map 的区别
  1. {} 只能接受字符串和Symbol类型作为 key,
  在其他类型的时候 会发生 toString 作为一个属性，会发生覆盖 比如p1和p2节点
  Map 可以接收**任意值**作为 key
  2. {} 遍历的时候不能保证 按照 key 出现的顺序来遍历，Map 可以保证按照 set的顺序来遍历
2. Map 的作用
  1. 优化 if else
  2. 以空间换时间 优化代码

##  垃圾回收 - 引用计数
一个值赋值给一个变量
变量又赋给另外的一个变量
```js
// 0
var a = {};   //计数 + 1 
var wp = new WeakMap();
wp.set(a, '123');  // 弱引用 ，不会 + 1
var b = a;   // +1
b = null;     //  -1 
a = null;    // -1
// 0
```
垃圾回收器会把引用计数 为 0 的值回收掉

## Map 和 WeakMap 区别
1. weakMap 只接收对象作为 key (null 除外) 
2. weakMap 的 key 是弱引用 ，而 value 是正常的，不计入垃圾回收机制，
并不能确保引用的对象不会被垃圾回收机制回收掉

## Set 
无重复的数据集（key 的 集合）
```js
[...new Set([0, 1, 2, 3, 2, 0])]
// [...new Set([])] set接收一个数组
```
1. 返回一个无重复的set
2. set 是一个 可迭代对象（Iterator对象）
3. ...扩展运算符  ：展开 Iterator 对象
4. 使用 []  把展开的对象包裹，变成数组

## js 基础数据类型
- 基础数据类型
  - 基础数据类型 变量和值 都是保存在栈内存中
  - 发生复制的时候 复制的是值本身
- 复杂数据类型
  - 变量存在栈中，值是对 堆内存的一个引用，
  - 发生复制的时候 复制的是一个引用，两个变量指向堆内存中的同一个引用
  - heap (堆)
    - 大顶堆 根节点的值比子节点大
      小顶堆  根节点的值比子节点小

## Set 和 WeakSet 的区别
1. WeakSet 只能存放对象
2. WeakSet 不支持遍历，没有size
3. WeakSet 存放的对象不会计入到对象的引用计数，因此不会影响gc（js的垃圾回收机制）的回收
4. WeakSet 存放的对象如果在外界消失了，那么 WeakSet 里面也不会存在，也就是说没有对这个对象的引用了，value也会消失。