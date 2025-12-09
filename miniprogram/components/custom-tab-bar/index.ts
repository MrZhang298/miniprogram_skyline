Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/index/index",
      iconPath: "/image/home.png",
      selectedIconPath: "/image/home_active.png",
      text: "首页"
    }, {
      pagePath: "/index/index2",
      iconPath: "/image/person.png",
      selectedIconPath: "/image/person_active.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e: any) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})