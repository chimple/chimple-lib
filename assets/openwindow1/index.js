window.__require=function t(o,e,n){function r(c,a){if(!e[c]){if(!o[c]){var l=c.split("/");if(l=l[l.length-1],!o[l]){var d="function"==typeof __require&&__require;if(!a&&d)return d(l,!0);if(i)return i(l,!0);throw new Error("Cannot find module '"+c+"'")}c=l}var p=e[c]={exports:{}};o[c][0].call(p.exports,function(t){return r(o[c][1][t]||t)},p,p.exports,t,o,e,n)}return e[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<n.length;c++)r(n[c]);return r}({"choice-card1":[function(t,o,e){"use strict";cc._RF.push(o,"4ba37CTpElLPLefPnzkfHQT","choice-card1");var n,r=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),i=this&&this.__decorate||function(t,o,e,n){var r,i=arguments.length,c=i<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,o,e,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(o,e,c):r(o,e))||c);return i>3&&c&&Object.defineProperty(o,e,c),c};Object.defineProperty(e,"__esModule",{value:!0});var c=cc._decorator.ccclass,a=t("./openwindow1"),l=t("../../../common/scripts/lib/error-handler"),d=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.text=null,o.touchEnabled=!1,o.parentNode=null,o}return r(o,t),o.prototype.onLoad=function(){this.node.on("touchstart",this.onTouchStart,this),this.node.on("touchend",this.onTouchEnd,this)},o.prototype.onTouchStart=function(){},o.prototype.onTouchEnd=function(){if(this.touchEnabled){var t=new cc.Event.EventCustom(a.CHOICE_CLICKED,!0);t.setUserData({text:this.text,parentNode:this.parentNode,node:this.node}),this.node.dispatchEvent(t)}},i([l.default()],o.prototype,"onLoad",null),i([c],o)}(cc.Component);e.default=d,cc._RF.pop()},{"../../../common/scripts/lib/error-handler":void 0,"./openwindow1":"openwindow1"}],"openwindow1-choice-card":[function(t,o,e){"use strict";cc._RF.push(o,"87703p2lihOI5qCmTq2dGj+","openwindow1-choice-card");var n,r=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),i=this&&this.__decorate||function(t,o,e,n){var r,i=arguments.length,c=i<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,o,e,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(o,e,c):r(o,e))||c);return i>3&&c&&Object.defineProperty(o,e,c),c};Object.defineProperty(e,"__esModule",{value:!0});var c=cc._decorator.ccclass,a=t("./openwindow1"),l=t("../../../common/scripts/lib/error-handler"),d=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.text=null,o.touchEnabled=!1,o.parentNode=null,o}return r(o,t),o.prototype.onLoad=function(){this.node.on("touchstart",this.onTouchStart,this),this.node.on("touchend",this.onTouchEnd,this)},o.prototype.onTouchStart=function(){},o.prototype.onTouchEnd=function(){if(this.touchEnabled){var t=new cc.Event.EventCustom(a.CHOICE_CLICKED,!0);t.setUserData({text:this.text,parentNode:this.parentNode,node:this.node}),this.node.dispatchEvent(t)}},i([l.default()],o.prototype,"onLoad",null),i([c],o)}(cc.Component);e.default=d,cc._RF.pop()},{"../../../common/scripts/lib/error-handler":void 0,"./openwindow1":"openwindow1"}],openwindow1:[function(t,o,e){"use strict";cc._RF.push(o,"ecfd1GuENlAqqHEUcwUFtTG","openwindow1");var n,r=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),i=this&&this.__decorate||function(t,o,e,n){var r,i=arguments.length,c=i<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,o,e,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(o,e,c):r(o,e))||c);return i>3&&c&&Object.defineProperty(o,e,c),c};Object.defineProperty(e,"__esModule",{value:!0}),e.CHOICE_CLICKED=e.SCROLL_ENDED=e.SCROLL_BEGAN=e.START_SCROLL_CLICK=void 0;var c=cc._decorator.ccclass,a=cc._decorator.property,l=t("../../../common/scripts/lib/config"),d=t("../../../common/scripts/util"),p=t("./openwindow1-choice-card"),s=t("../../../common/scripts/lib/error-handler"),u=t("../../../common/scripts/game");e.START_SCROLL_CLICK="START_SCROLL_CLICK",e.SCROLL_BEGAN="SCROLL_BEGAN",e.SCROLL_ENDED="SCROLL_ENDED",e.CHOICE_CLICKED="CHOICE_CLICKED";var h=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o._currentConfig=null,o.slotWindowPrefab=null,o.scrollClip=null,o.correctClip=null,o.wrongClip=null,o._frameHeight=0,o._choiceCard1=null,o._choiceCard2=null,o._helpDragNode=null,o._isRTL=!1,o}return r(o,t),o.prototype.onLoad=function(){var t=this;this._isRTL=l.default.i.direction==l.Direction.RTL,this._currentConfig=this.processConfiguration(l.default.getInstance().data[0]),this.buildUI(),this.node.on(e.START_SCROLL_CLICK,function(o){o.stopPropagation(),t.renderUI()})},o.prototype.startAutoScroll=function(){var t=new cc.Event.EventCustom(e.START_SCROLL_CLICK,!0);this.node.dispatchEvent(t)},o.prototype.buildUI=function(){var t=this;this.buildWord(),this.buildChoices(),this.renderUI(),this.node.on(e.CHOICE_CLICKED,function(o){o.stopPropagation();var e=o.getUserData(),n=-1!==t._currentConfig.goodimage.indexOf("/")?t._currentConfig.goodimage.substr(t._currentConfig.goodimage.lastIndexOf("/")+1).replace(".png",""):t._currentConfig.goodimage;if(e&&e.text===n){t._choiceCard1.parent.getComponent(p.default).touchEnabled=!1,t._choiceCard2.parent.getComponent(p.default).touchEnabled=!1,t.node.emit("correct");var r=e.parentNode.getComponent(cc.Animation);r.on("finished",function(){t.scheduleOnce(function(){t.node.emit("nextProblem")},1)}),r.play("door_open")}else t.node.emit("wrong")})},o.prototype.buildWord=function(){var t=-1!==this._currentConfig.word.indexOf(",")?this._currentConfig.word.split(","):this._currentConfig.word.split(""),o=cc.instantiate(this.slotWindowPrefab);o.setPosition(new cc.Vec2(0,cc.winSize.height/4-50));var e=o.getChildByName("slotLayout"),n=e.getComponent(cc.Layout);t.length>5?(o.scale=1.1,n.resizeMode=cc.Layout.ResizeMode.CONTAINER):(o.scale=1.25,n.resizeMode=cc.Layout.ResizeMode.CONTAINER),l.default.wide&&(n.spacingX=45),e.getChildByName("label").getComponent(cc.Label).string=this._currentConfig.word,this.node.addChild(o)},o.prototype.renderUI=function(){var t=this;d.Util.loadGameSound(this._currentConfig.sound,function(o){o&&(t.friend.extraClip=o),t.scheduleOnce(function(){t._choiceCard1.parent.getComponent(p.default).touchEnabled=!0,t._choiceCard2.parent.getComponent(p.default).touchEnabled=!0,t._choiceCard1.opacity=255,t._choiceCard2.opacity=255,t.scheduleOnce(function(){d.Util.showHelp(t._helpDragNode,t._helpDragNode)},.5)},1)})},o.prototype.autoScrollToWord=function(t,o){var e=this,n=this.getSlotItems(),r=t.getComponent(cc.ScrollView),i=n.indexOf(o),c=r.getScrollOffset();Math.floor(c.y)!==Math.floor(i*this._frameHeight)&&(r.scrollToBottom(.5),this.scheduleOnce(function(){r.scrollToOffset(new cc.Vec2(0,i*e._frameHeight),.5)},.5))},o.prototype.getSlotItems=function(){var t=-1!==this._currentConfig.slots.indexOf(",")?this._currentConfig.slots.split(","):this._currentConfig.slots.split(""),o=-1!==this._currentConfig.word.indexOf(",")?this._currentConfig.word.split(","):this._currentConfig.word.split("");return t=t.concat(o),Array.from(new Set(t))},o.prototype.buildChoices=function(){var t=Math.random()>=.5;this._choiceCard1=this.node.getChildByName("left_Button").getChildByName("image"),this.loadTextureAndShowImage(this._choiceCard1,t?this._currentConfig.goodimage:this._currentConfig.badimage),this._choiceCard2=this.node.getChildByName("right_Button").getChildByName("image"),this.loadTextureAndShowImage(this._choiceCard2,t?this._currentConfig.badimage:this._currentConfig.goodimage),this._helpDragNode=t?this._choiceCard1:this._choiceCard2},o.prototype.loadTextureAndShowImage=function(t,o){var e=this;t.opacity=0;var n=t.parent.getComponent(p.default);n.parentNode=this.node.getChildByName("door_node"),n.text=-1!==o.indexOf("/")?o.substr(o.lastIndexOf("/")+1).replace(".png",""):o,n.touchEnabled=!1,d.Util.loadTexture(o,function(o){e.showImage(t,o)})},o.prototype.showImage=function(t,o){var e=t.getComponent(cc.Sprite);e.spriteFrame=new cc.SpriteFrame(o),d.Util.resizeSprite(e,272,201)},o.prototype.processConfiguration=function(t){void 0===t&&(t=[]);var o=[].concat.apply([],t);return{level:o[0],worksheet:o[1],problem:o[2],type:o[3],word:o[4],goodimage:o[5],badimage:o[6],sound:o[7],slots:o[8]}},i([a(cc.Prefab)],o.prototype,"slotWindowPrefab",void 0),i([a(cc.AudioClip)],o.prototype,"scrollClip",void 0),i([a(cc.AudioClip)],o.prototype,"correctClip",void 0),i([a(cc.AudioClip)],o.prototype,"wrongClip",void 0),i([s.default()],o.prototype,"onLoad",null),i([s.default()],o.prototype,"startAutoScroll",null),i([s.default()],o.prototype,"buildUI",null),i([s.default()],o.prototype,"buildWord",null),i([s.default()],o.prototype,"renderUI",null),i([s.default()],o.prototype,"autoScrollToWord",null),i([s.default()],o.prototype,"getSlotItems",null),i([s.default()],o.prototype,"buildChoices",null),i([s.default()],o.prototype,"loadTextureAndShowImage",null),i([s.default()],o.prototype,"showImage",null),i([c],o)}(u.default);e.default=h,cc._RF.pop()},{"../../../common/scripts/game":void 0,"../../../common/scripts/lib/config":void 0,"../../../common/scripts/lib/error-handler":void 0,"../../../common/scripts/util":void 0,"./openwindow1-choice-card":"openwindow1-choice-card"}]},{},["choice-card1","openwindow1-choice-card","openwindow1"]);