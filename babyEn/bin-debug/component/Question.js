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
var Question = (function (_super) {
    __extends(Question, _super);
    function Question(x, y, newtmpar, seeNum, IndexSkin) {
        var _this = _super.call(this) || this;
        // public racTipMusic: egret.SoundChannel;
        // public qiehuan: egret.Sound = RES.getRes("qiehuan_mp3");
        // public effect: egret.Sound = RES.getRes("effect_mp3");
        _this.tmpx = 5;
        // public click: egret.Sound = RES.getRes("click_mp3");
        // public cut: egret.Sound = RES.getRes("cut_mp3");
        // public click: egret.Sound = RES.getRes("click_mp3");
        _this.isShowAnim = false;
        // public lineGp: eui.Group;
        // public green: eui.Group;
        // public blue: eui.Group;
        // public infogp: eui.Group;
        // public greenlab: eui.Label;
        // public bluelab: eui.Label;
        // public cbtn: eui.Group;
        // public line1: eui.Group;
        // public line2: eui.Group;
        // public line3: eui.Group;
        // public info0: eui.Label;
        // public info: eui.Label;
        // public info1: eui.Label;
        // public info2: eui.Label;
        // public caidao: eui.Image;
        // public greenimg: eui.Image;
        // public whimg: eui.Group;
        _this.hitArray = [];
        _this.pointArray1 = [{ x: 175, y: 86 }, { x: 0, y: 0 }, { x: 0, y: 178 }, { x: 350, y: 0 }, { x: 350, y: 178 }];
        _this.pointArray2 = [{ x: 175, y: 0 }, { x: 175, y: 178 }, { x: -28, y: 0 }, { x: -28, y: 178 }, { x: 380, y: 0 }, { x: 380, y: 178 }];
        // public hitArray1: Array<any> = [1, -1, -1, -1, -1];
        // public hitArray2: Array<any> = [1, -1, -1, -1, -1];
        // public hitArray3: Array<any> = [1, 1, -1, -1, -1, -1];
        // public hitArray4: Array<any> = [-1, -1, -1, -1, -1];
        // public hitArray5: Array<any> = [-1, -1, -1, -1, -1, -1];
        _this.oldArray = [];
        _this.btnInfoArray = [];
        _this.tmpwidth = 74;
        _this.tmpheight = 78;
        _this.seeNum = 0;
        _this.resultNum = -1;
        _this.timeNum = 0;
        _this.tmptime = 0;
        // public info: eui.Label;
        _this.randomlist = [0, 1, 2];
        _this.isClick = false;
        _this.resultList = [];
        _this.animateArray = [];
        _this.animateArrayObj = [{
                // take: "finger",			//接收返回值使用 可传可不传
                // dom: "animationGroup0",	//addChild的dom节点 不传默认 this.addChild
                armatureName: "yanwu",
                animateName: "yanwu",
                count: 1,
                position: [101, 60],
                isRemove: true,
            }];
        // public animationFun(dbObj, func?) {
        // 	//进来先移除动画在播放  避免动画叠加
        // 	const tid = 0;
        // 	if (this.animateArray[tid]) {
        // 		if (this.animateArray[tid].parent) {
        // 			dbObj.dom ? this[dbObj.dom].removeChild(this.animateArray[tid]) : this.removeChild(this.animateArray[tid]);
        // 			this.animateArray[tid] = null;
        // 		}
        // 	}
        // 	//添加文件
        // 	let dragonbonesData = RES.getRes(dbObj.dragonbonesData);
        // 	let textureData = RES.getRes(dbObj.textureData1);
        // 	let texture = RES.getRes(dbObj.texture1);
        // 	// 创建动画工厂
        // 	let egretFactoryA = new dragonBones.EgretFactory();
        // 	egretFactoryA.parseDragonBonesData(dragonbonesData);
        // 	egretFactoryA.parseTextureAtlasData(textureData, texture);
        // 	//创建动画
        // 	let armature: dragonBones.EgretArmatureDisplay = egretFactoryA.buildArmatureDisplay(dbObj.name);
        // 	// if (dbObj.slot)
        // 	// 	armature.armature.getSlot("彩带").visible = false;
        // 	armature.armature.getSlot("tianpinxiaoceshi_09").displayIndex = dbObj.slot;
        // 	//添加到舞台
        // 	dbObj.dom ? this[dbObj.dom].addChildAt(armature, 0) : this.addChild(armature);
        // 	armature.scaleX = dbObj.scale ? dbObj.scale : 1;
        // 	armature.scaleY = dbObj.scale ? dbObj.scale : 1;
        // 	armature.x = (dbObj.position && dbObj.position[0]) ? dbObj.position[0] : 0;
        // 	armature.y = (dbObj.position && dbObj.position[1]) ? dbObj.position[1] : 0;
        // 	//播放动画
        // 	armature.animation.gotoAndPlayByFrame(dbObj.animateName, 1, dbObj.count).timeScale = dbObj.step ? dbObj.step : 1;
        // 	dbObj.stop ? armature.animation.gotoAndStopByFrame(dbObj.animateName ? dbObj.animateName : dbObj.name, 0) : "";
        // 	//监听帧
        // 	// armature.addEventListener(dragonBones.EventObject.FRAME_EVENT, (e) => {
        // 	// 	// console.log(e.frameLabel)
        // 	// }, this)
        // 	//动画播放完成
        // 	armature.addEventListener(dragonBones.EventObject.COMPLETE, () => {
        // 		// if (armature.parent) {	// 播放完成移除动画
        // 		// 	dbObj.dom ? this[dbObj.dom].removeChild(armature) : this.removeChild(armature);
        // 		// }
        // 		if (func) {
        // 			func();
        // 		}
        // 	}, this)
        // 	return armature;
        // }
        _this._distance = new egret.Point();
        _this._touchStatus = false;
        _this.x = x;
        _this.y = y;
        _this.skinName = "QuestionSkin";
        _this.seeNum = seeNum;
        // this.cbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changResult, this);
        _this.pts = IndexSkin;
        // this.tmpx = this.animationGroup.x;
        // this.tmpy = this.animationGroup.y;
        // this.info.text = "香肠切一刀需要" + this.pts.nowobj.sec + "秒";
        // let tmp = this.pts.nowobj.que.split("分米");
        // let tmp1 = "分米";
        // if (tmp.length < 2) {
        // 	tmp = this.pts.nowobj.que.split("厘米");
        // 	tmp1 = "厘米";
        // }
        // this.blue.getChildAt(0).width = (Number(this.pts.nowobj.blue) >= 8 ? Number(this.pts.nowobj.blue) / 2 : Number(this.pts.nowobj.blue)) * 100;
        // this.green.getChildAt(0).width = (Number(this.pts.nowobj.green) >= 8 ? Number(this.pts.nowobj.green) / 2 : Number(this.pts.nowobj.green)) * 100;
        // this.bluelab.text = this.pts.nowobj.blue + tmp1;
        // this.greenlab.text = this.pts.nowobj.green + tmp1;
        // let anum = tmp[0];
        // if (anum >= 8) {
        // 	anum = anum / 2;
        // }
        // this.team.x = 398 + (10 - anum) * 50;
        // let addx = 0;
        // for (let i = 0; i <= anum; i++) {
        // 	let aa = 0;
        // 	let bb = 0;
        // 	if (i == 0) {
        // 		aa = 1;
        // 		bb = 0;
        // 	}
        // 	if (i == anum) {
        // 		aa = 1;
        // 		bb = tmp[0];
        // 	}
        // 	let img = new Itembk1(addx + i * 100, 0, aa, bb + tmp1, this);
        // 	this.team.addChild(img);
        // }
        // if (tmp[0] % 2 == 1) {
        // 	let img = new Itembk1(addx + anum * 100, 0, 1, tmp[0] + tmp1, this);
        // 	this.team.addChild(img);
        // }
        // this.blue.x = this.team.x + 58 + anum * 100 - this.blue.getChildAt(0).width;
        // this.green.x = this.team.x + 58;
        // this.greenimg.x = this.green.x + this.green.getChildAt(0).width;
        // this.blueimg.x = this.blue.x;
        // this.whimg.x = this.blueimg.x + (this.greenimg.x - this.blueimg.x) / 2 - 38;
        // let ccc = this.whimg.getChildAt(1) as eui.Label;
        // ccc.text = newtmpar[0];
        // this.boxGp1.addChild(new Box(0, 0, 5, -1, this))
        // this.addImg(newtmpar);
        _this.moveItem();
        _this.addteam();
        _this.resetTime();
        return _this;
    }
    Question.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Question.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Question.prototype.addBattle = function () {
        this.battle = new Battle(0, 0, this);
        this.addChild(this.battle);
    };
    Question.prototype.addImg = function (tmp) {
        if (this.resultList.indexOf(tmp) > -1) {
            XDFSoundManager.play("error1_mp3");
            return false;
        }
        this.resultList.push(tmp);
        this.addBattle();
        return true;
    };
    Question.prototype.reset = function () {
        this.isClick = false;
        this.battle.parent.removeChild(this.battle);
    };
    // public addImg(list: Array<any>) {
    // 	this.randomFunc();
    // 	// let addx = -150;
    // 	list = this.pts.nowObjList;
    // 	list.sort((a, b) => {
    // 		return a - b;
    // 	})
    // 	let tmp = this.randomNum(0, 2);
    // 	// this.iconImg.source = "icon_bg" + tmp + "_png";
    // 	// this.info1.text = this.pts.nowobj.que1 + "倍";
    // 	// this.info.text = this.pts.nowobj.que + "倍";
    // 	// this.info2.text = this.pts.nowobj.sec + "元";
    // 	for (let i = 0; i < list.length; i++) {
    // 		let img = new Itembk(i * 210, 0, list[this.randomlist[i]], this.randomlist[i], this, tmp);
    // 		// tmp.setInfo(list[this.randomlist[i]], this.randomlist[i], this, i);
    // 		// let tmp = this.ptgp.getChildAt(i) as Itembk;
    // 		this.ptgp.addChildAt(img, 0);
    // 	}
    // 	this.isClick = false;
    // 	// this.animateArray[0] = this.animationFun(this.animateArrayObj[0]);
    // }
    Question.prototype.resetTime = function () {
        var _this = this;
        this.timeNum = egret.setInterval(function () {
            for (var i = 0; i < _this.team.numChildren; i++) {
                var tmp = _this.team.getChildAt(i);
                tmp.x = tmp.x + _this.tmpx;
                if (tmp.x > 1920) {
                    tmp.parent.removeChild(tmp);
                    tmp.dispose();
                }
                // if (tmp.winNum < 0) {
                // 	if (tmp.x > 200 && tmp.x < 1780) {
                // 		this.pts.isClick = false;
                // 	} else {
                // 		this.pts.isClick = true;
                // 	}
                if (!_this.isClick && tmp.x >= 642 && _this.pts.subNum.value == 1) {
                    _this.stopAnt();
                }
                // }
            }
            for (var i = 0; i < _this.team1.numChildren; i++) {
                var tmp = _this.team1.getChildAt(i);
                tmp.x = tmp.x + _this.tmpx;
                if (tmp.x >= 1920) {
                    tmp.x = -1920;
                }
            }
            _this.tmptime += _this.tmpx;
            if (_this.tmptime > 300) {
                _this.addteam();
                _this.tmptime = 0;
            }
        }, this, 20);
    };
    Question.prototype.addteam = function () {
        var tmp = this.pts.nowList[this.pts.nowNum];
        // let num = this.pts.getId(tmp);
        var winNum = 1;
        if (this.pts.listNum > 0 && this.pts.listNum % 2 == 0 && this.pts.nowNum == this.pts.nowobj.result - 1) {
            this.pts.listNum = -1;
            winNum = -1;
        }
        this.team.addChild(new Box(-203, 0, tmp, winNum, this));
        this.pts.nowNum++;
        if (this.pts.nowNum >= this.pts.nowList.length) {
            this.pts.nowNum = 0;
            this.pts.listNum++;
        }
    };
    Question.prototype.stopAnt = function () {
        egret.clearInterval(this.timeNum);
        this.pts.guide.isGuide(0);
    };
    Question.prototype.stopAll = function () {
        egret.clearInterval(this.timeNum);
        // this.pts.guide.isGuide(0);
    };
    // public resetBg(num) {
    // 	let oldNum = this.resultNum
    // 	this.resultNum = num;
    // }
    // public moveImg(x, y) {
    // 	if (this.resultNum < 0) {
    // 		return;
    // 	}
    // 	let tmpimg = this.ptgp.getChildAt(this.resultNum) as Itembk;
    // 	let tw = egret.Tween.get(tmpimg);
    // 	tw.to({ x: x - this.x, y: y - this.ptgp.y - this.y, scaleX: 0.3, scaleY: 0.3 }, 100).call(() => {
    // 		tmpimg.visible = false;
    // 	})
    // 	this.pts.showResult(tmpimg.winNum);
    // }
    // public resetImg() {
    // 	if (this.resultNum < 0) {
    // 		return;
    // 	}
    // 	let tmpimg = this.ptgp.getChildAt(this.resultNum) as Itembk;
    // 	tmpimg.visible = true;
    // 	let tw = egret.Tween.get(tmpimg);
    // 	tw.to({ x: tmpimg.oldx, y: tmpimg.oldy, scaleX: 1, scaleY: 1 }, 100).call(() => {
    // 	})
    // 	this.pts.isClick = false;
    // 	// this.pts.resetBox();
    // }
    Question.prototype.setBg = function () {
        // this.bg.visible = false;
    };
    Question.prototype.resetan = function () {
        // this.animateArray[0] = this.animationFun(this.animateArrayObj[0]);
    };
    // public winAnimate1() {
    // 	// this.whimg.getChildAt(0).visible = false;
    // 	// this.whimg.getChildAt(1).visible = true;
    // 	// this.animateArrayObj[2].slot = false;
    // 	// this.animateArray[0] = this.animationFun(this.animateArrayObj[2]);
    // }
    Question.prototype.winAnimate = function () {
        var _this = this;
        console.log("成功");
        // this.playMusic("effect");
        this.battle.visible = false;
        var tmp = this.tuopan.getChildAt(this.resultList.length);
        this.animateArrayObj[0].position = [tmp.x + tmp.parent.x + tmp.width / 2, tmp.y + tmp.parent.y + tmp.height / 2];
        this.animateArray[0] = DragonFun.animationFun(this, this.animateArrayObj[0], function () {
            tmp.visible = true;
            tmp.source = _this.resultList[_this.resultList.length - 1];
            for (var i = 1; i < _this.chuchuang.numChildren; i++) {
                var aaa = _this.chuchuang.getChildAt(i);
                if (aaa.source == tmp.source) {
                    _this.chuchuang1.getChildAt(Number(aaa.name)).visible = true;
                    break;
                }
            }
        });
        // this.itemGp.visible = false;
        // if (this.pts.subNum.value > 1) {
        // 	let img = this.chuchuang.getChildAt(this.pts.subNum.value - 1) as eui.Image;
        // 	img.source = "bg_" + tmp.lv + "_png";
        // 	// img.visible = true;
        // 	this.animateArrayObj[0].slot = tmp.lv;
        // 	this.animateArray[0] = DragonFun.animationFun(this, this.animateArrayObj[0], () => {
        // 		img.visible = true;
        // 	});
        // 	this.pts.resultList.push(tmp.lv);
        // } else {
        // 	this.animateArrayObj[0].slot = tmp.lv;
        // 	this.animateArray[0] = DragonFun.animationFun(this, this.animateArrayObj[0]);
        // }
        // this.animateArray[0] = this.animationFun(this.animateArrayObj[2], () => {
        //this.animateArray[0] = this.animationFun(this.animateArrayObj[0]);
        // });
        // this.animateArrayObj[2].slot = true;
        // this.animateArray[0] = this.animationFun(this.animateArrayObj[2], () => {
        // 	this.animateArray[0] = this.animationFun(this.animateArrayObj[0]);
        // this.ptgp.visible = true;
        // this.infogp.visible = true;
        // this.info.text = "重合的部分是多长呢";
        // });
        // this.caidao.visible = false;
        // for (let i = 0; i < this.pts.nowobj.que; i++) {
        // 	let tmp = new eui.Image("line_bg_png");
        // 		this.lineGp.addChild(tmp); 
        // 		egret.setTimeout(() => {
        // 		this.playMusic("cut")
        // 	}, this, i * 200);
        // }
    };
    Question.prototype.loseAnimate = function () {
        console.log("错误");
        // this.animateArray[0] = this.animationFun(this.animateArrayObj[1], () => {
        // 	this.animateArray[0] = this.animationFun(this.animateArrayObj[0]);
        // });
    };
    // public playMusic(name, count = 1) {
    // 	if (this.racTipMusic) {
    // 		this.racTipMusic.stop()
    // 	}
    // 	this.racTipMusic = this[name].play(0, count);
    // 	return this.racTipMusic;
    // }
    Question.prototype.moveItem = function () {
    };
    Question.prototype.moveItemNew = function () {
        // egret.Tween.get(this.cbtn).to({ x: 1814 }, 500);
    };
    // private mouseDown(e: egret.TouchEvent) {
    // 	if (e.target.name == "bg") return;
    // 	if (this.pts.ffnum > 0) return;
    // 	this._touchStatus = true;
    // 	this._tmp = e.target.parent;
    // 	// this._tmp.setScale(1.5);
    // 	this._distance.x = e.stageX - this._tmp.x;
    // 	this._distance.y = e.stageY - this._tmp.y;
    // 	this.cbtn.setChildIndex(this._tmp, this.cbtn.numChildren - 1);
    // 	this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    // }
    // private mouseMove(e: egret.TouchEvent) {
    // 	if (this._touchStatus) {
    // 		// console.log("moving now ! Mouse: [X:" + e.stageX + ",Y:" + e.stageY + "]");
    // 		this._tmp.x = e.stageX - this._distance.x;
    // 		this._tmp.y = e.stageY - this._distance.y;
    // 	}
    // }
    // private mouseUp(e: egret.TouchEvent) {
    // 	if (e.target.name == "bg") return;
    // 	if (this.pts.ffnum > 0) return;
    // 	this._tmp = e.target.parent;
    // 	this._touchStatus = false;
    // 	this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    // 	// this._tmp.setScale(1);
    // 	this.hitTest(this._tmp);
    // }
    Question.prototype.hitTest = function (e) {
        if (e.target.name == "bg")
            return;
        XDFSoundManager.play("click_mp3");
        var tmp = e.target.parent.parent;
        if (this.resultNum < 0) {
            return;
        }
        // tmp.parent.removeChild(tmp);
        // let points = this.cbtn.localToGlobal(tmp.x, tmp.y);
        // let hittmp;
        // for (let i = 0; i < this.ptgp.numChildren; i++) {
        // 	if (i == this.resultNum) {
        // 		hittmp = this.ptgp.getChildAt(i);
        // 	}
        // }
        // if (hittmp.infogp.visible) {
        // 	return;
        // }
        // tmp.parent.removeChild(tmp);
        // let tmpimg = new Itembk(tmp.x + this.cbtn.x, tmp.y + this.cbtn.y, tmp.lv, 1, this);
        // this.addChild(tmpimg);
        // // this.imgMove(img, -1, point.x, point.y);
        // this.resultNum = -1;
        // let tw = egret.Tween.get(tmpimg);
        // tw.to({ x: hittmp.x + this.ptgp.x, y: hittmp.y + this.ptgp.y }, 100).call(() => {
        // 	tmpimg.parent.removeChild(tmpimg);
        // 	hittmp.setLab(tmp.lv);
        // });
    };
    // private imgMove(tmp: any, num, x, y) {
    // 	// this.resultNum = this.resultNum.substring(0, num) + tmp.lv + this.resultNum.substring(num + 1);
    // 	tmp.imgMove(num, x, y);
    // }
    // private resetMove(lv, tmp: Itembk) {
    // 	for (let i = 0; i < this.cbtn.numChildren; i++) {
    // 		let item = this.cbtn.getChildAt(i) as Itembk;
    // 		if (item.winNum == lv) {
    // 			if (tmp) {
    // 				this.imgMove(item, tmp.winNum, tmp.winx, tmp.winy);
    // 			} else {
    // 				this.imgMove(item, -1, item.tmpx, item.tmpy);
    // 			}
    // 		}
    // 	}
    // }
    // public setColor(img, c) {
    // 	var color: number = c ? 0xff0000 : 0x79ff56;        /// 光晕的颜色，十六进制，不包含透明度
    // 	var alpha: number = 1;             /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
    // 	var blurX: number = 15;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
    // 	var blurY: number = 15;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
    // 	var strength: number = 3;            /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
    // 	var quality: number = egret.BitmapFilterQuality.HIGH;        /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
    // 	var inner: boolean = false;            /// 指定发光是否为内侧发光，暂未实现
    // 	var knockout: boolean = false;            /// 指定对象是否具有挖空效果，暂未实现
    // 	var glowFilter: egret.GlowFilter = new egret.GlowFilter(color, alpha, blurX, blurY,
    // 		strength, quality, inner, knockout);
    // 	img.filters = [glowFilter]
    // }
    Question.prototype.randomFunc = function () {
        this.randomlist.sort(function (a, b) {
            return Math.random() > 0.5 ? 1 : -1;
        });
    };
    Question.prototype.randomNum = function (minNum, maxNum) {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    };
    return Question;
}(eui.Component));
__reflect(Question.prototype, "Question", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Question.js.map