# 这是一个酷炫banner自定义组价
***
| 属性名        | 类型          | 默认值  |说明                                     |
| ------------- |:-------------:|:-------:|:--------------------------------------- |
| swiperHeight  | Number        | 1000rpx |控制组件整体高度                         |
| dotshow       | Boolean       |   true  |是否显示轮播指示点                       |
| circle        | Boolean       |   true  |轮播图是否循环播放                       |
| autoplay      | Boolean       |   true  |轮播图是否自动播                         |
| bannerList    | Array(object) |   []    |组件渲染需要的数据                       |

***
< bannerList对象的属性

| 属性名        | 类型          | 说明               |
|:-------------:|:-------------:|:-------------------|
|id             |Number         |轮播图id            |
|src            |String         |轮播图图片地址      |
|title(选填)    |String         |轮播图显示的标题，不填就不显示|
|url(选填)      |String         |轮播图点击跳转的地址|