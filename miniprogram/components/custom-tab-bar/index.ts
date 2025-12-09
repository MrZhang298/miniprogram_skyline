Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/image/home.png",
      selectedIconPath: "/image/home_active.png",
      text: "首页"
    }, {
      pagePath: "/pages/person/index",
      iconPath: "/image/person.png",
      selectedIconPath: "/image/person_active.png",
      text: "我的"
    }]
  },
  attached() {
    this.updateSelectedTab()
  },
  methods: {
    updateSelectedTab() {
      const pages = getCurrentPages()
      const currentPage = pages[pages.length - 1]
      const currentPath = currentPage.route

      const list = this.data.list
      for (let i = 0; i < list.length; i++) {
        if (currentPath === list[i].pagePath.replace(/^\/pages\//, '')) {
          this.setData({
            selected: i
          })
          break
        }
      }
    },
    switchTab(e: any) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
    }
  }
})