
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/member/member","pages/mine/mine","pages/order/order","pages/index/search/search","pages/index/dessertDrink/dessertDrink","pages/mine/personal-information/index","pages/storeDetail/index"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom"},"tabBar":{"color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"black","backgroundColor":"#F8F8F8","fontSize":"12px","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/images/icon-index.png","selectedIconPath":"static/images/icon-index-selected.png"},{"pagePath":"pages/member/member","text":"会员","iconPath":"static/images/icon-member.png","selectedIconPath":"static/images/icon-member-selected.png"},{"pagePath":"pages/order/order","text":"订单","iconPath":"static/images/icon-order.png","selectedIconPath":"static/images/icon-order-selected.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"static/images/icon-mine.png","selectedIconPath":"static/images/icon-mine-selected.png"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"imitate-meituan-waimai","compilerVersion":"2.6.9","entryPagePath":"pages/index/dessertDrink/dessertDrink","entryPageQuery":"","realEntryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/member/member","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/order/order","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/index/search/search","meta":{},"window":{}},{"path":"/pages/index/dessertDrink/dessertDrink","meta":{},"window":{"backgroundColor":"#007AFF"}},{"path":"/pages/mine/personal-information/index","meta":{},"window":{}},{"path":"/pages/storeDetail/index","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0,global:void 0}}}});
