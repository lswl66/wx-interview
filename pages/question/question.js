// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionList: [],
    answersTitle:
    {
      0: 'A',
      1: 'B',
      2: 'C',
      3: 'D',
    }
  },

  toanswer: function(res){
    console.log(res.currentTarget.dataset)
    let myanswer = res.currentTarget.dataset.myanswer
    let target = res.currentTarget.dataset.target
    let arr = this.data.questionList
    if (!arr[target].myanswer) {
      arr[target].show = 1
      arr[target].myanswer = myanswer
      this.setData({
        questionList: arr,
      })
      console.log(this.data.questionList[target])
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id) 
    let url = 'https://www.shuipingguo.com/interview/?lang_scope=' + options.id
    wx.request({
      url: url,
      method: 'GET',
      data: {
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'cookie': 'oid=oO_UR0ZNNuoD-11Mk1QWcvkO5X7g'
      },
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data.data)
        this.setData({
          questionList: res.data.data,
          num: res.data.data.length
        })
      },
      fail: (res) => {
        console.log(res)
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