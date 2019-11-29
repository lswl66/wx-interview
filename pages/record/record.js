// pages/record/record.js


const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'',
    recordList: [],
    icon: '/image/toright.png',
    dialogShow: false,
    buttons: [{ text: '确定' }],
    iswrong: 0,
    answersTitle:
    {
      0: 'A',
      1: 'B',
      2: 'C',
      3: 'D',
    }
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
    wx.request({
      url: 'https://www.shuipingguo.com/interview/get_qrecord',
      method: 'GET',
      data: {
        month: e.detail.value,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'cookie': 'oid=oO_UR0ZNNuoD-11Mk1QWcvkO5X7g'
      }, 
      dataType: 'json',
      responseType: 'text',
      success: (res) =>{
        console.log(res.data.data)
        this.setData({
          recordList: res.data.data
        })
      },
      fail: (res) =>{
        console.log(res)
      },
    })
  },

  tapDialogButton(e) {
    this.setData({
      dialogShow: false,
    })
  },

  toshow: function(res){
    console.log(typeof(res.currentTarget.dataset.index))
    let question = this.data.recordList[res.currentTarget.dataset.index]
    if (question.my_answer != question.right_answer){
      this.setData({
        iswrong: 1
      })
    }
    this.setData({
      dialogShow: true,
      currentQuestion: question
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      duration: 1000
    })
    let date = util.formatTime(new Date()).substring(0, 7).replace('/', '-')
    console.log(date)
    this.setData({
      date: date
    })
    wx.request({
      url: 'https://www.shuipingguo.com/interview/get_qrecord',
      method: 'GET',
      data: {
        month: date,
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
          recordList: res.data.data
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