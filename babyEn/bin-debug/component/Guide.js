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
var Guide = (function (_super) {
    __extends(Guide, _super);
    function Guide(IndexSkin, info) {
        var _this = _super.call(this) || this;
        _this.winNum = -1;
        _this.oldwin = -1;
        _this.anum = 0;
        _this.mx = 0;
        _this.my = 0;
        _this.vy = 15;
        _this.gravity = 0.6;
        _this.bounce = -0.2;
        _this.bounceG = -0.3;
        // public click: egret.Sound = RES.getRes("click_mp3");
        // public isAnimate0: dragonBones.EgretArmatureDisplay;
        _this.animateArray = [];
        _this.animateArrayObj = [{
                // take: "finger",			//接收返回值使用 可传可不传
                // dom: "animationGroup",	//addChild的dom节点 不传默认 this.addChild
                dragonbonesData: "finger_ske_json",
                textureData1: "finger_tex_json",
                texture1: "finger_tex_png",
                armatureName: "finger",
                animateName: "finger",
                count: -1,
                stop: 0,
                // scale: 0.4,								//	放大倍数 
                position: [750, 500] //坐标【x,y】
            }];
        _this.lv = 0;
        _this.skinName = "GuideSkin";
        // this.btn.source = "guide_btn" + this.lv + "_png"
        // this.num.text = info;
        // this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeImg, this);
        _this.touchEnabled = false;
        // let tmp = this.randomNum(10, 30);
        // this.box1 = new Box(this.pts.questionItem.blue.x, 500, (this.pts.nowobj.blue >= 8 ? this.pts.nowobj.blue / 2 : this.pts.nowobj.blue) * 100, -1, this, tmp);
        // this.addChild(this.box1);
        // this.box = new Box(this.pts.questionItem.green.x, 400, (this.pts.nowobj.green >= 8 ? this.pts.nowobj.green / 2 : this.pts.nowobj.green) * 100, 1, this, tmp);
        // this.addChild(this.box);
        // this.playMusic("tishi");
        _this.changeImg();
        return _this;
    }
    Guide.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Guide.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Guide.prototype.changeImg = function () {
        // if (this.winNum > 0) {
        // 	return;
        // }
        // if (this.pts.isClick) {
        // 	return;
        // }
        // if (this.winNum < 0) {
        // 	return;
        // }
        this.rect_bg.visible = false;
        // this.isGuide(0);
        // XDFSoundManager.play("click_mp3");
        // if (this.lv == 1) {
        // 	this.winAnimate();
        // } else if (this.lv == 0) {
        // 	this.loseAnimate();
        // } else {
        // 	this.imgMove();
        // }
        // this.pts.stopBox();
        // this.pts.chickImg();
    };
    Guide.prototype.openImg = function () {
        // if (this.winNum > 0) {
        // 	return;
        // }
        this.winNum = -1;
        // this.info.source = "item_1_png";
    };
    // public setBg(tmp) {
    // 	if (this.lv != tmp) {
    // 		this.lv = tmp;
    // 		// this.btn.source = "guide_btn" + this.lv + "_png";
    // 		if (tmp == 1) {
    // 			this.isFirstFun();
    // 		}
    // 	}
    // 	// this.info.source = "item_" + tmp + "_png";
    // }
    // public setLab(lv) {
    // 	this.num.text = lv;
    // 	this.lv = lv;
    // 	this.infogp.visible = true;
    // }
    Guide.prototype.imgMove = function () {
        // this.tmpx = this.infogp.x;
        // this.tmpy = this.infogp.y;
        this.box.imgMove();
        this.box1.imgMove();
        // if (this.winNum >= 0) {
        // 	this.info.source = "bg_1_png";
        // 	this.num.textColor = 0x347b50;
        // }else{
        // 	this.info.source = "bg_0_png";
        // 	this.num.textColor = 0x663489;
        // }
    };
    Guide.prototype.winAnimate = function () {
        XDFSoundManager.play("right_mp3");
        this.box.winAnimate();
        this.box1.winAnimate();
        this.rect_bg.visible = false;
        // this.btn.visible = false;
        // this.isFirstFun();
    };
    Guide.prototype.loseAnimate = function () {
        XDFSoundManager.play("error_mp3");
        this.box.loseAnimate();
        this.box1.loseAnimate();
        // this.setBg(2);
        // this.info.visible = false;
        // this.animateArray[0] = this.animationFun(this.animateArrayObj[0], this.pts.itemId + 1, () => {
        // 	this.playMusic("err");
        // 	// this.removeany();
        // 	this.info.visible = true;
        // 	this.pts.clearImg();
        // });
    };
    Guide.prototype.setScale = function (num) {
        // this.x = this.x - Math.floor((this.width * num - this.width) / 2);
        // this.y = this.y - Math.floor((this.height * num - this.height) / 2);
        this.scaleX = num;
        this.scaleY = num;
    };
    // public playMusic(name, count = 1) {
    // 	if (this.racTipMusic) {
    // 		this.racTipMusic.stop()
    // 	}
    // 	this.racTipMusic = this[name].play(0, count);
    // 	return this.racTipMusic;
    // }
    // public removeany() {
    // 	if (this.animateArray[0]) {
    // 		this.animateArray[0].parent.removeChild(this.animateArray[0]);
    // 		this.animateArray[0] = null;
    // 		this.info.visible = true;
    // 		// this.wdImg.visible = false;
    // 		// this.wdImg.x = 28;
    // 		// this.wdImg.y = -48;
    // 	}
    // }
    Guide.prototype.filterFun = function () {
        // img.filters = null;
        var color = 0xe40000; /// 光晕的颜色，十六进制，不包含透明度
        var alpha = 0.8; /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
        var blurX = 10; /// 水平模糊量。有效值为 0 到 255.0（浮点）
        var blurY = 10; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
        var strength = 4; /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
        var quality = 3 /* HIGH */; /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
        var inner = false; /// 指定发光是否为内侧发光，暂未实现
        var knockout = false; /// 指定对象是否具有挖空效果，暂未实现
        var glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality, inner, knockout);
        return glowFilter;
    };
    Guide.prototype.randomNum = function (minNum, maxNum) {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    };
    Guide.prototype.resetColor = function () {
        // this.info.filters = [];
    };
    Guide.prototype.setColor = function (img, c) {
        var color = c; /// 光晕的颜色，十六进制，不包含透明度
        var alpha = 1; /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
        var blurX = 30; /// 水平模糊量。有效值为 0 到 255.0（浮点）
        var blurY = 30; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
        var strength = 3; /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
        var quality = 3 /* HIGH */; /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
        var inner = false; /// 指定发光是否为内侧发光，暂未实现
        var knockout = false; /// 指定对象是否具有挖空效果，暂未实现
        var glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality, inner, knockout);
        img.filters = [glowFilter];
    };
    Guide.prototype.isGuide = function (tmp) {
        var isok = true;
        switch (this.anum) {
            case 0:
                if (tmp == 0) {
                    isok = false;
                    this.animateArray[0] = DragonFun.animationFun(this, this.animateArrayObj[0]);
                }
                break;
            case 1:
                if (tmp == 2) {
                    isok = false;
                    this.animateArray[0].parent.removeChild(this.animateArray[0]);
                }
                break;
            default:
                isok = false;
                break;
        }
        if (!isok)
            this.anum++;
        return isok;
    };
    return Guide;
}(eui.Component));
__reflect(Guide.prototype, "Guide", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Guide.js.map