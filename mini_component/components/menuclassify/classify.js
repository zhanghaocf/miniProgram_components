Component({
  properties:{
    wrapheight:{
      type: Number, //该属性设置scrollview组件高度
      value: 0, // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    activemenu: {//选中右侧菜单索引
      type: Number,
      value: -1
    },
    activemenu2: {//左侧菜单索引与activeIndex一致由于某些问题不能让他们处于同一个名字
      type: Number,
      value: -1
    },
    list:{
      type:Array,
      value:[]
    },
  },
  data:{
    activeIndex:0,
    topArr:[],
    slideHeight:0,
    clickbol: false//为了解决左侧点击最后一个右侧滑动因滑动的距离达不到最后一个要求的距离而选中了他上一个或是上上个等问题(手滑动会一直触发scrollmenu，但点击造成的滑动只会触发一次scrollmenu))
  },
  lifetimes:{
    ready(){
      this.handleHeight();
    }
  },
  ready() {
    this.handleHeight()
  },
  methods:{
    handleHeight(){
      let ths = this;
      //封装到组件中写在生命周期ready中,获取指定节点的top值作为高度
      ths.createSelectorQuery().selectAll('.title').boundingClientRect(function (rects) {
        rects.forEach(function (rect) {
          ths.data.topArr.push(rect.top);
        })
        ths.selectLeft();
      }).exec();
    },
    selectLeft(e) {
      let index = !!e ? e.currentTarget.dataset.index : this.data.activemenu2;
      let topArr = this.data.topArr;
      this.data.clickbol = true;
      this.setData({
        activeIndex: index,
        slideHeight: topArr[index],
      })
    },
    scrollmenu(e) {
      const data = this.data;
      let clickBol = data.clickbol;
      if (clickBol) {
        this.data.clickbol = false;
        return;
      }
      let activeIndex = data.activeIndex;
      let topArr = data.topArr;
      let scrollTop = e.detail.scrollTop;
      let slideHeight = data.slideHeight;
      for (let i = 0, len = topArr.length; i < len; i++) {
        if (scrollTop >= topArr[i]) {
          activeIndex = i;
        } else {
          break;
        }
      }
      if (data.activeIndex != activeIndex) {
        this.setData({
          activeIndex
        })
      }
    },
    selectdetail(e) {
      let arr = e.currentTarget.dataset.index.split('-');
      const data = this.data;
      let activemenu = data.activemenu;
      let activemenu2 = data.activemenu2;
      arr[1] = Number(arr[1]);
      arr[0] = Number(arr[0]);
      if (activemenu === arr[1] && activemenu2 === arr[0]) {
        return;
      }
      this.data.activemenu2 = arr[0];
      this.selectLeft();
      this.setData({
        activemenu: arr[1],
        activemenu2: arr[0]
      })
      this.handlerightmenu(arr[1], arr[0])
    },
    handlerightmenu(rmenuIndex,lmenuIndex){
      const myEventDetail = {
        rmenuIndex,
        lmenuIndex
      } // detail对象，提供给事件监听函数
      const myEventOption = {} // 触发事件的选项
      this.triggerEvent('handlecontent', myEventDetail, myEventOption)
    }
  }
})