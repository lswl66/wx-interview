// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl:'',
      nickName:''
    },
    islogin: 0
  },

  tolanguage: function(a){
    wx.navigateTo({
      url: '/pages/language/language',
    })
  },
  toMyQuestion: function (a){
    console.log(a);
    wx.navigateTo({
      url: '/pages/myquestion/myquestion',
    })
  },
  toRecord: function (a){
    console.log(a);
    wx.navigateTo({
      url: '/pages/record/record',
    })
  },
  toAboutWe: function (a){
    console.log(a);
    wx.navigateTo({
      url: '/pages/aboutwe/aboutwe',
    })
  },
  toLogin: function (a){
    wx.navigateTo({
      url: '/pages/login/login',
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
      key: 'islogin',
      success: (res) => {
        console.log(typeof(res.data))
        if(res.data == 1){
          this.setData({
            islogin: 1
          })
          wx.getUserInfo({
            success: r => {
              console.log(r.userInfo)
              this.setData({
                userInfo: r.userInfo
              })
            }
          })
        }
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