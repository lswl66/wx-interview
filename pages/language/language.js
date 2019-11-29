// pages/language/language.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myLanguage: [
      {
        image1: '/image/js1.png',
        image2: '/image/toright.png',
        name: '前端',
        abstract: '最贴近用户，最贴心产品',
        label: '基础前端，Vue，react，Node等',
        id: 1
      },
    ],
    otherLanguage: [
      {
        image1: '/image/python.png',
        image2: '/image/toright.png',
        name: 'Python',
        abstract: '人工智能，高考必备',
        label: '基础，Python web，爬虫，大数据，AI',
        id: 2
      },
      {
        image1: '/image/java.png',
        image2: '/image/toright.png',
        name: 'Java',
        abstract: '一次编译，到处运行，电子商务',
        label: '',
        id: 3
      },
      {
        image1: '/image/go.jpg',
        image2: '/image/toright.png',
        name: 'Golang',
        abstract: '新型支持高并发语言',
        label: '',
        id: 4
      },
      {
        image1: '/image/mysql.png',
        image2: '/image/toright.png',
        name: 'MySQL',
        abstract: '最流行关系型数据库',
        label: '',
        id: 5
      },
      {
        image1: '/image/bigdata.png',
        image2: '/image/toright.png',
        name: '大数据',
        abstract: '大数据价值',
        label: '',
        id: 6
      },
      {
        image1: '/image/android.png',
        image2: '/image/toright.png',
        name: 'Android',
        abstract: '最开放的操作系统',
        label: '',
        id: 7
      },
      {
        image1: '/image/ios.jpg',
        image2: '/image/toright.png',
        name: 'iOS',
        abstract: 'iphone的天下',
        label: '',
        id: 8
      }
    ]
  },

  todelete: function(res){
    console.log(res)
    let arr1 = this.data.myLanguage
    let arr2 = this.data.otherLanguage
    let target = res.currentTarget.dataset.index
    if(arr1.length == 1){
      wx.showToast({
        title: '至少关注一个编程语言',
        icon: 'none',
        duration: 1500
      })
    }else{
      arr2.push(arr1[target])
      arr1.splice(target,1)
      this.setData({
        myLanguage: arr1,
        otherLanguage: arr2
      })
      wx.setStorage({
        key: 'mylanguage',
        data: JSON.stringify(arr1),
      })
      wx.setStorage({
        key: 'otherlanguage',
        data: JSON.stringify(arr2),
    })
    }
  },

  toadd: function(res){
    console.log(res)
    let arr1 = this.data.myLanguage
    let arr2 = this.data.otherLanguage
    let target = res.currentTarget.dataset.index
    arr1.push(arr2[target])
    arr2.splice(target,1)
    this.setData({
      myLanguage: arr1,
      otherLanguage: arr2
    })
    wx.setStorage({
      key: 'mylanguage',
      data: JSON.stringify(arr1),
    })
    wx.setStorage({
      key: 'otherlanguage',
      data: JSON.stringify(arr2),
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.getStorage({
      key: 'mylanguage',
      success: (res) => {
        this.setData({
          myLanguage: JSON.parse(res.data)
        })
      },
    })
    wx.getStorage({
      key: 'otherlanguage',
      success: (res) => {
        this.setData({
          otherLanguage: JSON.parse(res.data)
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})