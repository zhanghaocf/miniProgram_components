列表左滑出现分享删除操作按钮组件
属性：
needShare【默认为true】【bol】：是否显示或隐藏分享按钮
index【number】每个列表对应的索引值
skipHeight【number】列表高度
margBo【number】列表marginbottom值
selectIndex【number】给默认为-1，必填的属性，后期为了实现列表中只能有一个出现操作按钮功能
independenceFn【fn】自定义函数，用来与selectIndex一样的作用，函数的参数有个selectIndex值。（详情参照demo）
shareFn【fn】分享函数，参数有个列表索引index
delFn  【fn】删除函数，参数有个列表索引index