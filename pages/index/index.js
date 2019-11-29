//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    islogin: 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    autoplay: true,
    interval: 4000,
    duration: 400,
    circular:true,
    itemList:[
      {
        image1:'/image/js1.png',
        image2:'/image/toright.png',
        name:'前端',
        abstract:'最贴近用户，最贴心产品',
        label:'基础前端，Vue，react，Node等',
        id: 1
      },
    ],
    swiperList:[
      "/image/timg.jpg",
      "/image/timg1.jpg",
      "/image/timg2.jpg"
    ]
  },
  tolanguage: function (a) {
    console.log(a);
    wx.navigateTo({
      url: '/pages/language/language',
    })
  },
  toMenu: function (a) {
    console.log(a);
    if(this.data.islogin == 1){
      let url = '/pages/menu/menu?index=' + a.currentTarget.dataset.index
      wx.navigateTo({
        url: url
      })
    }else{
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onShow: function () {
    wx.getStorage({
      key: 'mylanguage',
      success: (res) => {
        console.log(JSON.parse(res.data))
        this.setData({
          itemList: JSON.parse(res.data)
        })
      },
    }),
    wx.getStorage({
      key: 'islogin',
      success: (res) => {
        if(res.data == 1){
          this.setData({
            islogin: 1
          })
        }
      },
    })
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
