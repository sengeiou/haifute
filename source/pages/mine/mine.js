// pages/mine/mine.js
import {
  AppBase
} from "../../appbase";
import {
  ApiConfig
} from "../../apis/apiconfig";
import {
  InstApi
} from "../../apis/inst.api.js";
import {
  AboutApi
} from "../../apis/about.api.js";

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onMyShow() {
    var that = this;
    var about = new AboutApi();
    about.aboutinfo({}, (about) => {
      console.log(about)
      this.Base.setMyData({
        about
      });
    })
  }
  
  setPageTitle(instinfo) {
    wx.setNavigationBarTitle({
      title: '关于我们',
    })
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
Page(body)