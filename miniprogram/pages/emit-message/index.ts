// index.ts
// 获取应用实例
// const app = getApp<IAppOption>()

import type { EmitMessageData } from './type'

Page({
  onLoad: function () {
    const eventChannel = this.getOpenerEventChannel()
    if (eventChannel) {
      this.setData({ eventChannel: eventChannel })
      // 监听 acceptDataFromOpenerPage 事件，获取上一页面通过 eventChannel 传送到当前页面的数据
      eventChannel.on('acceptDataFromOpenerPage', (data: any) => {
        console.log(data)
        this.setData({
          emitMessage: data.data
        })
      })
    }
  },
  data: {
    eventChannel: null,
    emitMessage: '',
  } as EmitMessageData,

  sendMessage() {
    if (this.data.eventChannel) {
      this.data.eventChannel.emit('acceptDataFromOpenedPage', { data: 'acceptDataFromOpenedPage' })
    }
  }
})
