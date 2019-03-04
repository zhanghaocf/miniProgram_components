# 上拉获取数据的组件
|属性名|类型|默认值|说明|
|:----:|:--:|:----:|:---|
|scrollViewHeight|Number|0px|指定该组件的高度|
|showLoading|Boolean|false|是否显示底部loading|
|lowerThreshold|Number|10|该属性设置scrollview上拉距离底部多少距离触发函数|
|isFinish|Boolean|false|该属性值显示列表信息是不是已经全部加载完毕|
|loadingType|String|'Loading0'|这个属性值是决定底部loading的样子|
|getList|event|null|就是控制页面滑动到底部触发的函数，一般用来接收其他的数据，接受完了所有数据需要改变isFinish为true|
***
> loadingType有的属性值
* Loading0(默认)
* Loading1
* Loading2
* Loading3
* Loading4