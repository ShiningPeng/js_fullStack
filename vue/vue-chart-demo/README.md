- vuex 大型化 由modules 来支持
this.$store.user.  来找到这个数据
- user 
  state   info 登录，注册，退出
  action 
  mutations//修改状态
  先设计，搭好结构，核心是围绕着我们的状态token（令牌环）
  this.$store.user.token
  跳转到登录页？
- 登录鉴权
  1. 延迟加载路由，性能优化
