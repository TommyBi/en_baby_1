var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Box = (function (_super) {
    __extends(Box, _super);
    function Box(x, y, lv, winNum, IndexSkin, info) {
        var _this = _super.call(this) || this;
        // public tmpx = 2;
        _this.winNum = -1;
        _this.oldwin = -1;
        _this.anum = 0;
        _this.mx = 0;
        _this.my = 0;
        _this.vy = 15;
        _this.gravity = 0.6;
        _this.bounce = -0.2;
        _this.bounceG = -0.3;
        _this.numTime = 0;
        _this.timeNum = 0;
        // public click: egret.Sound = RES.getRes("click_mp3");
        // public click: egret.Sound = RES.getRes("click_mp3");
        // public isAnimate0: dragonBones.EgretArmatureDisplay;
        // public animateArray: Array<dragonBones.EgretArmatureDisplay> = [];
        _this.animateArrayObj = [{
                // take: "finger",			//接收返回值使用 可传可不传
                // dom: "animationGroup0",	//addChild的dom节点 不传默认 this.addChild
                armatureName: "yanwu",
                animateName: "yanwu",
                count: 1,
                position: [101, 60],
                isRemove: true,
            }];
        _this.x = x;
        _this.y = y;
        _this.oldx = x;
        _this.oldy = y;
        _this.lv = lv;
        _this.skinName = "BoxSkin";
        _this.winNum = winNum;
        // if (winNum < 0) {
        // 	this.x = x - info;
        // 	this.tmpx = -this.tmpx;
        // }
        // console.log("fffffffffff",lv);
        _this.info.source = "bg_" + lv + "_png";
        // this.num.text = info;
        // this.info.width = lv;
        if (_this.winNum > 0)
            _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.changeImg, _this);
        _this.pts = IndexSkin;
        return _this;
        // this.animateArrayObj[0].key = this.hashCode + this.animateArrayObj[0].armatureName;
        // this.animateArrayObj[0].slot = ["tianpinxiaoceshi_09", lv];
        // this.animateArray[0] = DragonFun.animationFun(this, this.animateArrayObj[0]);
        // this.imgMove();
    }
    Box.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Box.prototype.partRemoved = function (partName, instance) {
        _super.prototype.partRemoved.call(this, partName, instance);
    };
    Box.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Box.prototype.changeImg = function (e) {
        // this.winAnimate();
        if (this.pts.isClick) {
            return;
        }
        this.pts.isClick = true;
        XDFSoundManager.play("click_mp3");
        // let ppp = this.pts.tuopan.globalToLocal(this.localToGlobal().x, this.localToGlobal().y);
        // this.x = ppp.x;
        // this.y = ppp.y;
        // console.log(this.pts.tuopan.globalToLocal(this.localToGlobal().x,this.localToGlobal().y));
        if (this.pts.addImg(this.info.source)) {
            this.pts.pts.guide.isGuide(2);
            this.imgMove();
        }
        else {
            this.pts.isClick = false;
        }
    };
    Box.prototype.openImg = function () {
        // if (this.winNum > 0) {
        // 	return;
        // }
        this.winNum = -1;
        // this.info.source = "item_1_png";
    };
    Box.prototype.setBg = function (tmp) {
        // this.info.source = "item_" + tmp + "_png";
        this.anImg.visible = true;
        this.anImg.source = "an_" + tmp + "_png";
    };
    Box.prototype.setLab = function (lv) {
        this.num.text = lv;
        this.lv = lv;
    };
    Box.prototype.imgMove = function () {
        // this.tmpx = this.infogp.x;
        // this.tmpy = this.infogp.y;
        // if (this.winNum >= 0) {
        // 	this.info.source = "bg_1_png";
        // 	this.num.textColor = 0x347b50;
        // }else{
        // 	this.info.source = "bg_0_png";
        // 	this.num.textColor = 0x663489;
        // }
        // this.timeNum = egret.setInterval(() => {
        // 	this.x = this.x + this.tmpx;
        // 	if (this.x < this.oldx - 200 || this.x > this.oldx + 200) {
        // 		this.tmpx = -this.tmpx;
        // 	}
        // 	if (this.winNum > 0) {
        // 		if (this.pts.pts.isFirst) {
        // 			if (this.x > this.oldx - 2 && this.x < this.oldx + 2) {
        // 				this.pts.setBg(1);
        // 			} else {
        // 				this.pts.setBg(0);
        // 			}
        // 		} else {
        // 			if (this.x > this.oldx - 30 && this.x < this.oldx + 30) {
        // 				this.pts.setBg(1);
        // 			} else {
        // 				this.pts.setBg(0);
        // 			}
        // 		}
        // 	}
        // }, this, 10);
        // egret.Tween.get(this).to({ x: 288, y: -6 }, 500);
        this.info.visible = false;
        DragonFun.animationFun(this, this.animateArrayObj[0]);
    };
    Box.prototype.winAnimate = function () {
        this.parent.removeChild(this);
        // egret.clearInterval(this.timeNum);
        // this.animationGroup0.scaleX = -1;
        // this.animationGroup1.scaleX = -1;
        // egret.Tween.get(this.animationGroup0).to({ x: -(this.x + 150), y: -500 }, 1000);
        // egret.Tween.get(this.animationGroup1).to({ x: (1920 - this.x + 150), y: -500 }, 1000);
        // egret.Tween.get(this.info).to({ y: 200 - (this.winNum > 0 ? 0 : 100) }, 1000).call(() => {
        // 	this.visible = false;
        // });
        // console.log(num);
        // this.info.visible = false;
        // this.animateArray[0] = this.animationFun(this.animateArrayObj[0], this.pts.itemId + 1, () => {
        // 	this.playMusic("succ");
        // 	// this.removeany();
        // 	this.info.visible = true;
        // 	this.pts.moveItembk();
        // 	this.pts.clearImg();
        // }, true);
    };
    Box.prototype.loseAnimate = function () {
        egret.clearInterval(this.timeNum);
        // this.info.visible = false;
        // this.animateArray[0] = this.animationFun(this.animateArrayObj[0], this.pts.itemId + 1, () => {
        // 	this.playMusic("err");
        // 	// this.removeany();
        // 	this.info.visible = true;
        // 	this.pts.clearImg();
        // });
    };
    Box.prototype.setScale = function (num) {
        // this.x = this.x - Math.floor((this.width * num - this.width) / 2);
        // this.y = this.y - Math.floor((this.height * num - this.height) / 2);
        this.scaleX = num;
        this.scaleY = num;
    };
    Box.prototype.dispose = function () {
        // DragonFun.removeChild(this.animateArrayObj[0], true);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changeImg, this);
    };
    return Box;
}(eui.Component));
__reflect(Box.prototype, "Box", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Box.js.map