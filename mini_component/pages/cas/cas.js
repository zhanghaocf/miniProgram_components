const app = getApp()

Page({
  data: {
    
  },
  onLoad() {
    console.log(123)
    const ctx = wx.createCanvasContext('casid')
    this.drawfont(ctx,'你好111111122222','white',100,100,60,160,2)
    ctx.draw()
  },
  drawfont(ctx,cot,color,x,y,size,maxwidth,maxline){
    ctx.setFillStyle('white')
    ctx.setTextBaseline('top')
    ctx.setFontSize(size)
    let chr =cot.split("")
    let temp = ""
    let row = []
    for (var a = 0; a < chr.length; a++) {
      if (ctx.measureText(temp).width < maxwidth) {
        temp += chr[a];
      }
      else {
        a--; //这里添加了a-- 是为了防止字符丢失，效果图中有对比
        row.push(temp);
        temp = "";
      }
    }
    row.push(temp);
    maxline = maxline || 2
    const linlen = row.length
    if (linlen>maxline) {
      row.length = maxline
      let lastlinecot = row[maxline-1]
      row[maxline-1]=lastlinecot.slice(0, -1)+'...'
    }
    for (var b = 0; b < row.length; b++) {
      ctx.fillText(row[b], x, y+size*(b+1));
    }
  }
})