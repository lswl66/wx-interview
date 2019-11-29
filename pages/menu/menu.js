// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '前端',
    image: '/image/js1.png',
    id: 1
  },

  toquestion: function(){
    let url = '/pages/question/question?id=' +this.data.id 
    wx.navigateTo({
      url: url,
    })
  },
  tolodding: function() {
    wx.navigateTo({
      url: '/pages/lodding/lodding',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'mylanguage',
      success:(res) => {
        console.log(JSON.parse(res.data)[options.index])
        this.setData({
          image: JSON.parse(res.data)[options.index].image1,
          name: JSON.parse(res.data)[options.index].name,
          id: JSON.parse(res.data)[options.index].id,
        })
      },
    })
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