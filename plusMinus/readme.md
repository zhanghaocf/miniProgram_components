# 加减的组件(购物车用到的比较多)
|属性名|类型|默认值|说明|
|:----:|:--:|:----:|:---|
|myCount|Number|0|初始化值为0的加减操作器|
|operaType|String|'operaCount'|指定加减操作器的样子(原型的或是方形的)|
|operation|event|e.detail.opreation('minus'(减)或'plus'(加)或'change'(键盘输入)),当为change时会有e.detail.count指定当前数值|用来在调用该组件的页面中写上加按钮减按钮和键盘输入的事件|
***
> operaType包含的选项
* operaCount(圆形)
* square(方形)