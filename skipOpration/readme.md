# 列表左滑出现分享删除操作按钮组件

|属性名|类型|默认值|说明|
|:----:|:--:|:----:|:---|
|needShare|Boolean|true|是否显示或隐藏分享按钮|
|index|Number|0|这个组件一般都是以多个出现的，index存储是他的索引值|
|skipHeight|Number|300rpx|设置改组件的高度|
|margBo|Number|15rpx|组件marginbottom值|
|selectIndex|Number|-1|为了实现列表中只能有一个出现操作按钮功能|
|independenceFn|event|传过去的值e.detail.selectIndex|用来确认再调用该组件的页面中所有这个组件只有一个可以出现操作选项，具体参照demo|
|shareFn|event|e.detail.index|保证在同一个页面中的所有该组件分享的指定索引|
|delFn|event|e.detail.index|保证在同一个页面中的所有该组件删除的指定索引|
***

< 【BUG】

* 修改了样式使得ios布局混乱的问题，由于最外围盒子设置了flex布局的缘故宽度比手机屏幕还要大时在ios中给page设置overflowhidden无效就会出现横向滚动条

< 【优化】

* 考虑到setdata会使视图层和逻辑层通信交互数据尤其是在mousemove中不停地调用setdata会耗性能，为了减少setdata的调用，采用了wxs来优化。
* 提供了版本比较的方法