给定一个数组，它的第i个元素是一支给定股票第i天的价格
[7,1,5,3,6,4]

只允许一次交易（一次买进，一次卖出），设计一个算法来计算你能获得的最大利润
简单，运算逻辑复杂

要注意什么地方吗？
先买，再卖
卖的价格低了，

动态规划
状态  买入 卖出
只要考虑在当天和之前买哪个收益更高，
当天卖和之前卖哪个收益更高