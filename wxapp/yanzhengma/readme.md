- start 从页面到了组件？
页面是老板，组件是员工，页面是组件组成的，
start 老板也要知道状态，Page data里面添加
<countdown start="{{start}}" />

- 组件的数据 data(内部数据) + properties(外部数据)

- 从内向外触发事件
内：this.triggerEvent({
  "event_name",data
})
外：(绑定自定义事件)bind:event_name="真正执行接受消息的函数"

- 页面由组件组成，先去独立的开发组件，再拼起来
- 由外传入的properties需要思考设计,由内传出的事件
Page 和 Components 就成了不可分割的有机体
