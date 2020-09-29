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
var Battle = (function (_super) {
    __extends(Battle, _super);
    function Battle(x, y, IndexSkin) {
        var _this = _super.call(this) || this;
        _this.winNum = -1;
        _this.lastNum = -1;
        // public clockNum;
        _this.timeOutNum = -1;
        // public moneyNum = 0;
        _this.isClick = false;
        _this.animateArray = [];
        _this.animateArrayObj = [{
                dom: "anGP",
                dragonbonesData: "jibifei_ske_json",
                textureData1: "jibifei_tex_json",
                texture1: "jibifei_tex_png",
                name: "jinbifei",
                animateName: "jinbifei",
                count: 1,
                stop: 0,
                isRemove: true,
                position: [0, 0] //坐标【x,y】
            }];
        _this.x = x;
        _this.y = y;
        _this.tmpx = x;
        _this.tmpy = y;
        // this.lv = lv;
        _this.skinName = "BattleSkin";
        _this.cbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.changImg, _this);
        _this.pts = IndexSkin;
        return _this;
    }
    Battle.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Battle.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // this.addTime();
        this.updateInfo();
        XDFSoundManager.play("tip1_mp3");
    };
    // public addTime() {
    // 	this.clockNum = egret.setInterval(() => {
    // 		this.clock.text = Number(this.clock.text) - 1 + "";
    // 		if (Number(this.clock.text) <= 0) {
    // 			egret.clearInterval(this.clockNum);
    // 			this.showMoneyAn();
    // 		}
    // 	}, this, 1000);
    // }
    // public addMoney() {
    // 	this.timeOutNum = egret.setTimeout(() => {
    // 		let aaa = 1;
    // 		if (this.moneyNum > 100) {
    // 			aaa = 100;
    // 		} else if (this.moneyNum > 10) {
    // 			aaa = 10;
    // 		}
    // 		this.moneyNum = this.moneyNum - aaa;
    // 		this.num.text = Number(this.num.text) + aaa + "";
    // 		if (this.moneyNum > 0) {
    // 			this.addMoney();
    // 		} else {
    // 			this.timeOutNum = -1;
    // 		}
    // 	}, this, 100);
    // }
    // public showMoneyAn() {
    // 	this.anGP.visible = true;
    // 	XDFSoundManager.play("tanchu_mp3");
    // 	this.animateArray[0] = this.animationFun(this.animateArrayObj[0], () => {
    // 		egret.clearTimeout(this.timeOutNum);
    // 		this.num.text = Number(this.num.text) + this.moneyNum + "";
    // 		let zzz = this.anGP.getChildAt(1) as eui.Label;
    // 		zzz.visible = true;
    // 		zzz.text = "获得金币:" + this.num.text;
    // 	}, () => {
    // 		this.parent.removeChild(this);
    // 		this.pts.pts.subNum.value++;
    // 		if (this.pts.pts.subNum.value > 3 && this.pts.pts.subNum.value % 2 == 0) {
    // 			this.pts.bossNum = 1;
    // 		} else {
    // 			this.pts.bossNum = 0;
    // 		}
    // 		this.pts.updateImg();
    // 	});
    // }
    Battle.prototype.updateInfo = function () {
        var num = 0;
        this.winNum = this.pts.pts.nowObjList[0];
        this.lastNum = this.winNum;
        // this.info.text = c + " ÷ " + b + " = ?";
        var aaa = this.pts.pts.nowObjList[1];
        var bbb = this.pts.pts.nowObjList[2];
        var tmp = [this.winNum, aaa, bbb];
        tmp.sort(function (a, b) { return a - b; });
        for (var i = 0; i < this.cbtn.numChildren; i++) {
            var ttt = this.cbtn.getChildAt(i);
            ttt.labelDisplay.text = tmp[i] + "";
        }
        this.info.source = "icon_bg" + (this.pts.pts.subNum.value - 1) + "_png";
    };
    Battle.prototype.changImg = function (e) {
        if (this.isClick) {
            return;
        }
        XDFSoundManager.play("click_mp3");
        this.isClick = true;
        var tmp = e.target;
        if (tmp.labelDisplay.text == this.winNum + "") {
            // this.moneyNum = this.moneyNum + 5;
            // // 815 ,95
            // this.icon.visible = true;
            // this.icon.x = e.target.x + e.target.parent.x;
            // this.icon.y = e.target.y + e.target.parent.y;
            // egret.Tween.get(this.icon).to({ x: 815, y: 95 }, 300).call(() => {
            // 	this.icon.visible = false;
            // 	this.updateInfo();
            // 	if (this.timeOutNum < 0) {
            // 		this.addMoney();
            // 	}
            // 	this.isClick = false;
            // });
            this.pts.pts.showResult(true);
            this.win(tmp);
        }
        else {
            this.isClick = false;
            this.lose(tmp);
            this.pts.pts.showResult(false);
            // this.clock.text = Number(this.clock.text) - 5 + "";
            // if (Number(this.clock.text) <= 0) {
            // 	this.clock.text = "0";
            // 	egret.clearInterval(this.clockNum);
            // 	this.showMoneyAn();
            // }
            // this.errNum.visible = true;
            // egret.Tween.get(this.errNum).to({ y: 20 }, 500).call(() => {
            // 	this.errNum.visible = false;
            // 	this.errNum.y = 98;
            // });
        }
    };
    Battle.prototype.setBg = function () {
        // this.bg.visible = false;
    };
    Battle.prototype.imgMove = function (win, x, y) {
        this.x = x;
        this.y = y;
        this.winx = x;
        this.winy = y;
        this.winNum = win;
    };
    Battle.prototype.winAnimate = function () {
        var tw = egret.Tween.get(this);
        tw.to({ y: this.tmpy - 100 }, 200).to({ y: this.tmpy }, 200);
    };
    // public loseAnimate() {
    // 	this.animateArray[0] = this.animationFun(this.animateArrayObj[0]);
    // }
    Battle.prototype.playMusic = function (name, count) {
        if (count === void 0) { count = 1; }
        if (this.racTipMusic) {
            this.racTipMusic.stop();
        }
        this.racTipMusic = this[name].play(0, count);
        return this.racTipMusic;
    };
    Battle.prototype.randomNum = function (minNum, maxNum) {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    };
    // public removeL() {
    // 	this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changImg, this);
    // }
    Battle.prototype.win = function (tmp) {
        // XDFSoundManager.play("right_mp3");
        this.setColor(tmp, false);
        egret.setTimeout(function () {
            tmp.filters = [];
        }, this, 500);
    };
    Battle.prototype.lose = function (tmp) {
        // XDFSoundManager.play("error_mp3");
        this.setColor(tmp, true);
        egret.setTimeout(function () {
            tmp.filters = [];
        }, this, 500);
    };
    Battle.prototype.setColor = function (img, c) {
        var color = c ? 0xff0000 : 0x79ff56; /// 光晕的颜色，十六进制，不包含透明度
        var alpha = 1; /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
        var blurX = 15; /// 水平模糊量。有效值为 0 到 255.0（浮点）
        var blurY = 15; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
        var strength = 3; /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
        var quality = 3 /* HIGH */; /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
        var inner = false; /// 指定发光是否为内侧发光，暂未实现
        var knockout = false; /// 指定对象是否具有挖空效果，暂未实现
        var glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality, inner, knockout);
        img.filters = [glowFilter];
    };
    return Battle;
}(eui.Component));
__reflect(Battle.prototype, "Battle", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Battle.js.map