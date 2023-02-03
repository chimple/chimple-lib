window.__require=function t(o,e,r){function n(c,a){if(!e[c]){if(!o[c]){var l=c.split("/");if(l=l[l.length-1],!o[l]){var s="function"==typeof __require&&__require;if(!a&&s)return s(l,!0);if(i)return i(l,!0);throw new Error("Cannot find module '"+c+"'")}c=l}var p=e[c]={exports:{}};o[c][0].call(p.exports,function(t){return n(o[c][1][t]||t)},p,p.exports,t,o,e,r)}return e[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<r.length;c++)n(r[c]);return n}({monsterDrag:[function(t,o,e){"use strict";cc._RF.push(o,"d506abujG1KdoTaPvO7SSJ0","monsterDrag");var r,n=this&&this.__extends||(r=function(t,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),i=this&&this.__decorate||function(t,o,e,r){var n,i=arguments.length,c=i<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,o,e,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(o,e,c):n(o,e))||c);return i>3&&c&&Object.defineProperty(o,e,c),c};Object.defineProperty(e,"__esModule",{value:!0});var c=t("../../../common/scripts/drag"),a=cc._decorator,l=a.ccclass,s=a.property,p=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.mirror=1,o}return n(o,t),o.prototype.onLoad=function(){this.mirror=this.node.parent.convertToWorldSpaceAR(this.node.position).x>cc.winSize.width/2?-1:1,this.node.scaleX=this.mirror},o.prototype.matchPos=function(t){return this.node.parent.convertToNodeSpaceAR(t)},o.prototype.onMatchOver=function(){this.isDragging=!1,c.default.letDrag=!0,this.enableTouch(),this.allowDrag=!0;var t=this.matchingNode;this.node.position=t.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.Vec2.ZERO)),this.node.removeFromParent(),t.addChild(this.node);var o=this.node.parent;if(o){var e=o.parent;if(e){var r=e.parent;r&&r.emit("monsterMatch")}}var n=this.node.getComponent(cc.Animation);null!=n&&(n.play(),this.schedule(function(){n.play()},4))},o.prototype.onReturnBackOnNoMatch=function(){c.default.letDrag=!0,this.node.removeFromParent()},o.prototype.onTouchMove=function(o){t.prototype.onTouchMove.call(this,o),this.allowDrag&&this.isDragging&&(this.mirror=o.getLocationX()>cc.winSize.width/2?-1:1,this.node.scaleX=1.1*this.mirror)},o.prototype.touchStartAnimation=function(){(new cc.Tween).target(this.node).to(.25,{scaleX:1.1*this.mirror,scaleY:1.1},{progress:null,easing:"elasticOut"}).start()},o.prototype.touchEndAnimation=function(){(new cc.Tween).target(this.node).to(.25,{scaleX:1*this.mirror,scaleY:1},{progress:null,easing:"elasticOut"}).start()},o.prototype.collisionEnterCondition=function(t,o){return"a"===o.node.name},i([s],o.prototype,"mirror",void 0),i([l],o)}(c.default);e.default=p,cc._RF.pop()},{"../../../common/scripts/drag":void 0}],monster:[function(t,o,e){"use strict";cc._RF.push(o,"af1ffJncFNMgKxb8LLUocsy","monster");var r,n=this&&this.__extends||(r=function(t,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),i=this&&this.__decorate||function(t,o,e,r){var n,i=arguments.length,c=i<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,o,e,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(o,e,c):n(o,e))||c);return i>3&&c&&Object.defineProperty(o,e,c),c};Object.defineProperty(e,"__esModule",{value:!0});var c=t("../../../common/scripts/drag"),a=t("../../../common/scripts/lib/config"),l=t("../../../common/scripts/game"),s=cc._decorator,p=s.ccclass,u=s.property,h=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.background=null,o.label=null,o.mask=null,o.wallpaper=null,o.graphics=null,o.board=null,o.bottomPaint=null,o.bottomMouth=null,o.bottomHat=null,o.bottomEye=null,o.bottomMark=null,o.bottomHair=null,o.bottomNose=null,o.bottomWallpaper=null,o.wallpaper1=null,o.wallpaper2=null,o.wallpaper3=null,o.wallpaper4=null,o.wallpaper5=null,o.wallpaper6=null,o.wallpaper7=null,o.cameraButton=null,o.cameraAnim=null,o.currentTool=null,o.numHeightAdjust=0,o.numYAdjust=0,o.numStickers=0,o}return n(o,t),o.prototype.onLoad=function(){var t=this;cc.director.getCollisionManager().enabled=!0,this.node.on("touchstart",function(){}),this.node.on("touchmove",this.onTouchMove,this),this.node.on("monsterMatch",function(){++t.numStickers>=5&&(t.cameraButton.interactable=!0),t.node.emit("correct")}),this.cameraButton.interactable=!1;var o=a.default.getInstance().data[0],e=(o[0],o[1],o[2],o[3]),r=o[4],n=o[5];this.numHeightAdjust=Number(r),this.numYAdjust=Number(n);var i=this.label.getComponent(cc.Label);null!=i&&(i.string=e)},o.prototype.start=function(){var t=this.label._renderComponent._frame._texture;this.mask.spriteFrame=new cc.SpriteFrame(t),this.mask.node.width=this.label.width,this.mask.node.height=this.label.height,this.background.width=this.label.width,this.background.height=this.label.height+this.numHeightAdjust,this.background.y+=this.numHeightAdjust/2,this.board.size.width=this.label.width,this.board.size.height=this.label.height+Number(this.numHeightAdjust),this.board.offset.y+=this.numHeightAdjust/2,this.label.y+=Number(this.numYAdjust),this.mask.node.y+=Number(this.numYAdjust)},o.prototype.onTouchMove=function(t){if(this.currentTool==this.bottomPaint){var o=this.label.convertToNodeSpaceAR(t.getPreviousLocation()),e=this.label.convertToNodeSpaceAR(t.getLocation());this.graphics.moveTo(o.x,o.y),this.graphics.lineTo(e.x,e.y),this.graphics.stroke()}},o.prototype.onToolClick=function(t,o){var e=this[o];if(null!=e){null!=this.currentTool&&(this.currentTool.active=!1),this.currentTool=e,e.active=!0;var r=e.y;(new cc.Tween).target(e).set({y:-cc.winSize.height/2}).to(.25,{y:r},{progress:null,easing:"elasticOut"}).start(),e==this.bottomPaint?c.default.letDrag=!1:c.default.letDrag=!0}},o.prototype.onPaintClick=function(t,o){this.graphics.strokeColor=(new cc.Color).fromHEX(o)},o.prototype.onCameraClick=function(){var t=this;this.cameraAnim.play(),this.scheduleOnce(function(){t.node.emit("nextProblem")},1)},o.prototype.onWallpaperClick=function(t,o){if(this[o]){var e=cc.instantiate(this[o]);this.wallpaper.removeAllChildren(),this.wallpaper.addChild(e)}},i([u(cc.Node)],o.prototype,"background",void 0),i([u(cc.Node)],o.prototype,"label",void 0),i([u(cc.Mask)],o.prototype,"mask",void 0),i([u(cc.Node)],o.prototype,"wallpaper",void 0),i([u(cc.Graphics)],o.prototype,"graphics",void 0),i([u(cc.BoxCollider)],o.prototype,"board",void 0),i([u(cc.Node)],o.prototype,"bottomPaint",void 0),i([u(cc.Node)],o.prototype,"bottomMouth",void 0),i([u(cc.Node)],o.prototype,"bottomHat",void 0),i([u(cc.Node)],o.prototype,"bottomEye",void 0),i([u(cc.Node)],o.prototype,"bottomMark",void 0),i([u(cc.Node)],o.prototype,"bottomHair",void 0),i([u(cc.Node)],o.prototype,"bottomNose",void 0),i([u(cc.Node)],o.prototype,"bottomWallpaper",void 0),i([u(cc.Prefab)],o.prototype,"wallpaper1",void 0),i([u(cc.Prefab)],o.prototype,"wallpaper2",void 0),i([u(cc.Prefab)],o.prototype,"wallpaper3",void 0),i([u(cc.Prefab)],o.prototype,"wallpaper4",void 0),i([u(cc.Prefab)],o.prototype,"wallpaper5",void 0),i([u(cc.Prefab)],o.prototype,"wallpaper6",void 0),i([u(cc.Prefab)],o.prototype,"wallpaper7",void 0),i([u(cc.Button)],o.prototype,"cameraButton",void 0),i([u(cc.Animation)],o.prototype,"cameraAnim",void 0),i([p],o)}(l.default);e.default=h,cc._RF.pop()},{"../../../common/scripts/drag":void 0,"../../../common/scripts/game":void 0,"../../../common/scripts/lib/config":void 0}]},{},["monster","monsterDrag"]);