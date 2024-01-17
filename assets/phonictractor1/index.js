window.__require=function t(o,e,r){function i(c,l){if(!e[c]){if(!o[c]){var s=c.split("/");if(s=s[s.length-1],!o[s]){var a="function"==typeof __require&&__require;if(!l&&a)return a(s,!0);if(n)return n(s,!0);throw new Error("Cannot find module '"+c+"'")}c=s}var u=e[c]={exports:{}};o[c][0].call(u.exports,function(t){return i(o[c][1][t]||t)},u,u.exports,t,o,e,r)}return e[c].exports}for(var n="function"==typeof __require&&__require,c=0;c<r.length;c++)i(r[c]);return i}({phonictractor1_drag:[function(t,o,e){"use strict";cc._RF.push(o,"2ea5epBYh9DEafASe7zAmTu","phonictractor1_drag");var r,i=this&&this.__extends||(r=function(t,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),n=this&&this.__decorate||function(t,o,e,r){var i,n=arguments.length,c=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,o,e,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(c=(n<3?i(c):n>3?i(o,e,c):i(o,e))||c);return n>3&&c&&Object.defineProperty(o,e,c),c};Object.defineProperty(e,"__esModule",{value:!0});var c=t("../../../common/scripts/lib/error-handler"),l=t("../../../common/scripts/drag"),s=t("../../../common/scripts/util"),a=t("../../../common/scripts/lessonController"),u=t("../../../common/scripts/lib/config"),p=cc._decorator,d=p.ccclass,h=(p.property,function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o._soundClip=null,o}return i(o,t),o.prototype.onLoad=function(){var t=this;this.label.string=u.default.wide?" "+this.node.name+" ":this.node.name,console.log("Util.loadsLetter(this.node.name.toLowerCase(), (clip) => {"),s.Util.loadsLetter(this.node.name.toLowerCase(),function(o){null!=o&&(t._soundClip=o)})},o.prototype.onTouchStart=function(o){if(t.prototype.onTouchStart.call(this,o),null!=this._soundClip)try{a.default.getFriend().speak(this._soundClip)}catch(e){console.log("Failed playing sound")}},o.prototype.onTouchEnd=function(o){t.prototype.onTouchEnd.call(this,o),this.match?this.node.emit("phonicTractorMatch",this):this.node.emit("phonicTractorNoMatch")},n([c.catchError()],o.prototype,"onTouchEnd",null),n([d],o)}(l.default));e.default=h,cc._RF.pop()},{"../../../common/scripts/drag":void 0,"../../../common/scripts/lessonController":void 0,"../../../common/scripts/lib/config":void 0,"../../../common/scripts/lib/error-handler":void 0,"../../../common/scripts/util":void 0}],phonictractor1:[function(t,o,e){"use strict";cc._RF.push(o,"0a0cdyAJB1HNJ7POhfVADgJ","phonictractor1");var r,i=this&&this.__extends||(r=function(t,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),n=this&&this.__decorate||function(t,o,e,r){var i,n=arguments.length,c=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,o,e,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(c=(n<3?i(c):n>3?i(o,e,c):i(o,e))||c);return n>3&&c&&Object.defineProperty(o,e,c),c};Object.defineProperty(e,"__esModule",{value:!0});var c=t("../../../common/scripts/lib/config"),l=t("../../../common/scripts/util"),s=t("./phonictractor1_drag"),a=t("../../../common/scripts/lib/error-handler"),u=t("../../../common/scripts/game"),p=t("../../../common/scripts/drag"),d=cc._decorator,h=d.ccclass,f=d.property,y=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.truckNode=null,o.trolleyPrefab=null,o.boxPrefab=null,o.metalAudio=null,o.truckInAudio=null,o.truckOutAudio=null,o.trolley=[],o.box=null,o.count=1,o.totalPieces=0,o.finishTruckMoveTo=-2e3,o.firstDrag=null,o.firstDrop=null,o._isRTL=!1,o}return i(o,t),o.prototype.onLoad=function(){var t=this;p.default.letDrag=!1,cc.director.getCollisionManager().enabled=!0,this._isRTL=c.default.i.direction==c.Direction.RTL,this.totalPieces++,this.completed=[],this.wordAudio=new Map;var o,e,r,i,n,s,a,u=c.default.getInstance().data[0].toString().split(",");u[0],u[1],u[2],u[3],this.answer=u[4],this.temp=u[5],o=u[6],i=u[7],null==(e=u[8])&&(e=""),null==(n=u[9])&&(n=""),null==(r=u[10])&&(r=""),null==(s=u[11])&&(s=""),this.truckNode.x=cc.winSize.width/2,this.word=[o],""!=e&&this.word.push(e),""!=r&&this.word.push(r),this._isRTL&&(this.truckNode.x=-cc.winSize.width/2,this.finishTruckMoveTo=2e3),this.wordAudio.set(this.answer,this.temp),this.wordAudio.set(o,i),this.wordAudio.set(e,n),this.wordAudio.set(r,s),console.log("words"+this.word),this.onTouchAudio(this.wordAudio.get(this.answer)),this.instantiateTrolley(0),0!=e.length&&(this.count++,this.instantiateTrolley(1)),0!=r.length&&(this.count++,this.instantiateTrolley(2)),c.default.i.direction==c.Direction.RTL?(this.truckNode.scaleX=-1,a=100*(this.count-1)+310):a=100*-(this.count-1)-310,(new cc.Tween).target(this.truckNode).call(function(){l.Util.playSfx(t.truckInAudio)}).to(2.1,{x:a},{progress:null,easing:function(t){return t}}).call(function(){var o=0;t.trolley.forEach(function(e){o++,(new cc.Tween).target(e).call(function(){l.Util.playSfx(t.metalAudio)}).to(.5,{position:cc.v2(e.position.x+20*o,e.position.y)},{progress:null,easing:"elasticOut"}).start()}),t.showOptions()}).start(),this.node.getChildByName("board").getChildByName("answer_label").getComponent(cc.Label).string=c.default.wide?" "+this.answer+" ":this.answer},o.prototype.instantiateTrolley=function(t){this.trolley[t]=cc.instantiate(this.trolleyPrefab),this.trolley[t].parent=this.truckNode,this.trolley[t].position=cc.v3(this.trolley[t].position.x+260*t,-75,0),this.trolley[t].getChildByName("drop_area").name=this.word[t],0==t&&(this.firstDrop=this.trolley[t])},o.prototype.showOptions=function(){var t=this,o=this.word[0],e=this.word;Math.random()>.3&&(e=l.Util.shuffle(this.word));for(var r=0;r<this.count;r++){var i=cc.instantiate(this.boxPrefab),n=i.getComponent(s.default);null!=n&&(n.label.string=e[r]),e[r]==o&&(this.firstDrag=i),i.name=e[r];var c=new cc.Node;if(c.addChild(i),c.name=e[r],this.node.getChildByName("New Layout").addChild(c),i.on("phonicTractorMatch",this.onMatch.bind(this)),i.on("phonicTractorNoMatch",function(){return t.node.emit("wrong")}),this._isRTL){var a=new cc.Node;a.name="shouldFlip",i.addChild(a)}}l.Util.loadGameSound(this.wordAudio.get(this.answer),function(o){null!=o&&(t.friend.extraClip=o),l.Util.showHelp(t.firstDrag,t.firstDrop),p.default.letDrag=!0})},o.prototype.onTouchAudio=function(t){var o=this;l.Util.loadGameSound(t,function(t){null!=t&&o.friend.speak(t)})},o.prototype.onMatch=function(){var t=this;this.node.emit("correct"),0==--this.count&&(new cc.Tween).target(this.truckNode).delay(1).call(function(){t.friend.speakExtra()}).delay(1).call(function(){var o=0;l.Util.playSfx(t.metalAudio),t.trolley.forEach(function(t){o++,(new cc.Tween).target(t).to(.5,{position:cc.v2(t.position.x-20*o,t.position.y)},{progress:null,easing:"sineOut"}).start()})}).delay(1).call(function(){l.Util.playSfx(t.truckOutAudio)}).to(2,{x:this.finishTruckMoveTo},{progress:null,easing:function(t){return t}}).call(function(){return t.match()}).start()},o.prototype.match=function(){--this.totalPieces<=0&&this.node.emit("nextProblem")},o.prototype.onDestroy=function(){cc.audioEngine.stopAllEffects()},n([f(cc.Node)],o.prototype,"truckNode",void 0),n([f(cc.Prefab)],o.prototype,"trolleyPrefab",void 0),n([f(cc.Prefab)],o.prototype,"boxPrefab",void 0),n([f({type:cc.AudioClip})],o.prototype,"metalAudio",void 0),n([f({type:cc.AudioClip})],o.prototype,"truckInAudio",void 0),n([f({type:cc.AudioClip})],o.prototype,"truckOutAudio",void 0),n([a.catchError()],o.prototype,"onLoad",null),n([a.catchError()],o.prototype,"instantiateTrolley",null),n([a.catchError()],o.prototype,"showOptions",null),n([a.catchError()],o.prototype,"onTouchAudio",null),n([a.catchError()],o.prototype,"onMatch",null),n([a.catchError()],o.prototype,"match",null),n([a.catchError()],o.prototype,"onDestroy",null),n([h],o)}(u.default);e.default=y,cc._RF.pop()},{"../../../common/scripts/drag":void 0,"../../../common/scripts/game":void 0,"../../../common/scripts/lib/config":void 0,"../../../common/scripts/lib/error-handler":void 0,"../../../common/scripts/util":void 0,"./phonictractor1_drag":"phonictractor1_drag"}]},{},["phonictractor1","phonictractor1_drag"]);