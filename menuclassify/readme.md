# 左右菜单栏滑动组件
***
| 属性名        | 类型          | 默认值  |说明                                     |
| ------------- |:-------------:|:-------:|:--------------------------------------- |
| wrapheight    | Number        |   0px   |控制组件整体高度                         |
| activemenu    | Number        |    -1   |选中右侧菜单索引需要与activemenu2同时设置|
| activemenu2   | Number        |    -1   |选中右侧菜单索引需要与activemenu同时设置 |
| list          | Array         |    []   |显示组件内容                             |
| handlecontent | event         |         |用来处理点击右侧菜单的行为               |
***
> list数组中对象的属性（注内容需要调整的只能在组件里面自己去手动修改）
|属性名         |描述                              |
|:-------------:|:---------------------------------|
|id             |每个分类的id                      |
|type           |每个分类的名字及左侧显示的文字    |
|children       |分类对应的商品列表                |
***
> children数组对象的属性
|属性名         |描述                              |
|:-------------:|:---------------------------------|
|id             |每个商品的id                      |
|name           |每个商品的名字及右侧显示的文字    |
|img            |商品对应的图片显示                |