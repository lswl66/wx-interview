// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {},
  onGetUserInfo: function(res){
    console.log(res)
    wx.showLoading({
      title: '登陆中',
      duration: 1500
    })
    wx.getSetting({
      success: r => {
        console.log(r.authSetting['scope.userInfo'])
        if (r.authSetting['scope.userInfo']){
          this.login()
        }else{
          wx.showToast({
            title: '登陆失败',
            duration: 1000,
            icon: 'none'
          })
        }
      }
    })
  },
  login: function(){
    wx.setStorage({
      key: 'islogin',
      data: 1,
    })
    setTimeout(()=>{
      wx.navigateBack({
        delta: 1
      })
    },1500)
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