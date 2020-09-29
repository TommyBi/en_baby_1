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
var GameSkin = (function (_super) {
    __extends(GameSkin, _super);
    // public bj: egret.Sound = RES.getRes("bj_mp3");
    // public effect: egret.Sound = RES.getRes("cutscene_mp3");
    // public click: egret.Sound = RES.getRes("click_mp3");
    // // public qhcj: egret.Sound = RES.getRes("qhcj_mp3");//贝壳过场
    // public error: egret.Sound = RES.getRes("error_mp3");
    // public clickOk: egret.Sound = RES.getRes("right_mp3");	//正确
    // // public keyong: egret.Sound = RES.getRes("keyong_mp3");	//正确
    // // public shanyao: egret.Sound = RES.getRes("shanyao_mp3");	//正确
    // public tip: egret.Sound = RES.getRes("tip_mp3");	//提示
    // public tip1: egret.Sound = RES.getRes("tip1_mp3");	//提示
    // public startMp3: egret.Sound = RES.getRes("start_mp3");	//提示
    // // public zhizhen: egret.Sound = RES.getRes("zhizhen_mp3");	//提示
    function GameSkin(IndexSkin) {
        var _this = _super.call(this) || this;
        // public enter: eui.Button;
        _this.subNum = new Value(0); //定义可监听的数字
        _this.resultArr = [0, 1, 2, 3, 4];
        _this.resultArr1 = [0, 1, 2, 3, 4];
        _this.randomFirst = [];
        _this.pointlist = [];
        _this.isFirst = true;
        //判断是否答错
        _this.isError = false;
        _this.errorSubNum = 1;
        _this.isClick = true;
        _this.boxId = -1;
        _this.itemId = [];
        // public cbtn: eui.Group;
        // public line0: eui.Group;
        // public line1: eui.Group;
        // public line2: eui.Group;
        // public line3: eui.Group;
        //星星
        // public initStartH: number = 417;
        // public totleHight: number = 405;
        // public interval: number = 0;	//位移距离
        // public startNum: number = 0;	//点亮几颗
        // public scrollStar: eui.Rect;
        // public maskBlue: eui.Image;
        // public startGroup: eui.Group;
        _this.bklist = [];
        _this.rpoint = [{ x: 0, y: 700 }, { x: 500, y: 620 }, { x: 900, y: 550 }, { x: 1260, y: 450 }, { x: 1560, y: 370 }, { x: 1760, y: 280 }];
        _this.bpoint = [{ x: 190, y: 763, scale: 1 }, { x: 657, y: 635, scale: 0.9 }, { x: 1017, y: 550, scale: 0.8 }, { x: 1352, y: 451, scale: 0.7 }, { x: 1630, y: 330, scale: 0.6 }];
        _this.resultList = [];
        _this.lv1 = [3, 1, 4]; //红1黄2绿3蓝4
        _this.lv2 = [6, 4, 8]; //红1黄2绿3蓝4
        _this.lv3 = [7, 6, 8]; //红1黄2绿3蓝4
        _this.lv4 = [6, 4, 7]; //红1黄2绿3蓝4
        _this.lv5 = [4, 2, 6]; //红1黄2绿3蓝4
        _this.lv6 = [10, 8, 9]; //红1黄2绿3蓝4
        _this.winNum = 0;
        _this.tmpNowNum = "";
        _this.lastRandom = -1;
        _this.clockNum = -1;
        _this.num = 4;
        _this.ffnum = 0;
        _this.missionNum = 7;
        _this.scoreNum = 0;
        _this.timeNum = 0;
        // public xz: eui.Image;
        // public fishimg: eui.Image;
        // //奶茶
        // public containerGroup: eui.Group;
        // public sugarItemGroup: eui.Group;
        // public sugarBtnGroup: eui.Group;
        // public colorGroup: eui.Group;
        // public bottomGroup: eui.Group;
        // public waterGroup: eui.Group;
        // public judgeGroup: eui.Group;
        _this.nowList = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5];
        _this.nowNum = 0;
        _this.listNum = 0;
        _this.errNum = 0;
        //动画
        // public animateArray: Array<dragonBones.EgretArmatureDisplay> = [];
        _this.animateArrayObj = [{
                // take: "finger",			//接收返回值使用 可传可不传
                // dom: "team",	//addChild的dom节点 不传默认 this.addChild
                armatureName: "tongyong_jia15miao",
                animateName: "tongyong_jia15miao",
                count: 1,
                // scale: 0.4,								//	放大倍数 
                stop: 0,
                isRemove: true,
                position: [760, 400] //坐标【x,y】
            }, {
                // take: "finger",			//接收返回值使用 可传可不传
                // dom: "animationGroup",	//addChild的dom节点 不传默认 this.addChild
                armatureName: "armatureName",
                animateName: "zuodazhengque",
                count: 1,
                // scale: 0.4,								//	放大倍数 
                position: [730, 350] //坐标【x,y】
            }, {
                // take: "finger",			//接收返回值使用 可传可不传
                // dom: "animationGroup",	//addChild的dom节点 不传默认 this.addChild
                armatureName: "cutTo",
                animateName: "cutTo",
                count: 1,
                isRemove: true,
            }, {
                // take: "finger",			//接收返回值使用 可传可不传
                dom: "macb",
                armatureName: "beijing",
                animateName: "beijing",
                count: -1,
                stop: 0
            }, {
                // take: "finger",			//接收返回值使用 可传可不传
                dom: "animationGroup",
                armatureName: "jiqiren",
                animateName: "jiqiren",
                count: -1,
                stop: 0
            }];
        // // 音乐
        // public music_bj: egret.SoundChannel;
        // public music_effect: egret.SoundChannel;
        // public music_tip: egret.SoundChannel;
        // public racTipMusic: egret.SoundChannel;
        // public racTipMusic1: egret.SoundChannel;
        _this.isMusic = true;
        _this.skinName = "GameSkinSkin";
        _this.IndexSkin = IndexSkin;
        return _this;
        // this.scrollStar.mask = this.maskBlue;
    }
    GameSkin.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameSkin.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicFun, this);
        this.reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.resetFun, this);
        this.set_img.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            XDFSoundManager.play("click_mp3");
            _this.set_group.visible = !_this.set_group.visible;
        }, this);
        if (window.__math2_res_config__) {
            this.reset.visible = false; //重玩按钮
        }
        this.subNum.addEventListener(Data.DATA, this.changNumber, this); //当数字发生改变时调用
        // this.enter.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chickImg, this);
        // this.fblist.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeMission, this); //当数字发生改变时调用
        // this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (evt: egret.TouchEvent) => {
        // 	console.log("{x:" + evt.stageX + ",y:" + evt.stageY + "}");
        // }, this);
        // this.fdec.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        // 	this.ff--;
        // 	if (this.ff < 1) {
        // 		this.ff = 1;
        // 		return;
        // 	}
        // 	this.add();
        // }, this); //当数字发生改变时调用
        // this.fadd.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        // 	this.ff++;
        // 	if (this.ff > 9) {
        // 		this.ff = 9;
        // 		return;
        // 	}
        // 	this.add();
        // }, this); //当数字发生改变时调用
        // for (let tmp of this.$children) {
        // 	if (tmp.name && tmp.name.indexOf("_an") >= 0) {
        // 		const tid = Number(tmp.name.slice(-1));
        // 		tmp.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { console.log("dddddddd") }, this);
        // 	}
        // 	if (tmp.name && tmp.name.indexOf("_tn") >= 0) {
        // 		const tid = Number(tmp.name.slice(-1));
        // 		tmp.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { console.log("dddddddd") }, this);
        // 	}
        // }
        DragonFun.animationFun(this, this.animateArrayObj[3]);
        DragonFun.animationFun(this, this.animateArrayObj[4]);
        this.start();
    };
    // public moveItem() {
    // 	egret.Tween.get(this.cbtn).to({ x: 1196 }, 500);
    // }
    // public moveItemNew() {
    // 	egret.Tween.get(this.cbtn).to({ x: 1814 }, 500);
    // }
    // 开始游戏
    GameSkin.prototype.start = function () {
        this.subNum.value = 1; //初始化第一题
        // this.errorSubNum = 0; //答错题归零
        // this.scrollStar.y = this.initStartH;
        // this.music_effect = this.effect.play(0, -1);
        // XDFSoundManager.play("tip_mp3");
        XDFSoundManager.play("tip_mp3");
        // if (this.IndexSkin.isFirst) {
        // }
        // this.addTime();
        this.nowList.sort(function () {
            return Math.random() > 0.5 ? 1 : -1;
        });
        this.resetImg(0);
        this.questionItem = new Question(0, 0, [1, 2, 3], this.subNum.value, this);
        this.questionGp.addChild(this.questionItem);
        this.guide = new Guide(this);
        this.addChild(this.guide);
        // egret.setInterval(() => {
        // 	this.subNum.value++;
        // 	this.resetImg(0);
        // }, this, 2000);
        // this.resetBox();
    };
    GameSkin.prototype.addTime = function () {
        var _this = this;
        this.clockNum = egret.setInterval(function () {
            _this.clock.text = Number(_this.clock.text) + 1 + "";
        }, this, 1000);
        XDFSoundManager.play("bj_mp3", 0, -1, 0.2);
    };
    GameSkin.prototype.resetInfo = function () {
        // this.info.text = "两种甜品共几元呢?";
        XDFSoundManager.play("tip1_mp3");
    };
    // public chickImg() {
    // 	XDFSoundManager.play("click_mp3")
    // 	if (this.isClick) {
    // 		return;
    // 	}
    // 	if (this.macb.numChildren < 2) {
    // 		return;
    // 	}
    // 	// egret.Tween.removeTweens(this.macb);
    // 	let tmp = this.team.getChildAt(1) as Box;
    // 	// tmp.parent.removeChild(tmp);
    // 	// tmp.x = tmp.x + this.macb.x;
    // 	// this.team.addChild(tmp);
    // 	this.bklist.push(tmp);
    // 	this.timeNum = egret.setInterval(() => {
    // 		this.moveP(tmp, 750 - (this.bklist.length - 1) * 70, (result) => {
    // 			if (result) {
    // 				this.scoreNum = this.scoreNum + (this.bklist.length + 1) * 5;
    // 				this.score.text = this.scoreNum + "分";
    // 			} else {
    // 				this.scoreNum = this.scoreNum + 5;
    // 				this.score.text = this.scoreNum + "分";
    // 			}
    // 			this.isGameOver();
    // 		});
    // 	}, this, 1);
    // }
    // public stopBox() {
    // 	// egret.clearInterval(this.timeNum);
    // 	// this.questionItem.moveImg(x, this.boxitem.y + y);
    // 	for (let i = 0; i < this.boxitem.numChildren; i++) {
    // 		let box = this.boxitem.getChildAt(i) as Box;
    // 		box.resetColor();
    // 	}
    // }
    GameSkin.prototype.stopItembk = function () {
        for (var i = 0; i < this.team.numChildren; i++) {
            var item = this.team.getChildAt(i);
            item.resetColor();
        }
    };
    GameSkin.prototype.addItembk = function (lv) {
        if (this.itemId.indexOf(lv) > -1) {
            return;
        }
        this.itemId.push(lv);
        console.log(lv);
    };
    GameSkin.prototype.clearImg = function () {
        this.isClick = false;
        this.stopItembk();
        // this.stopBox();
        // this.boxId = -1;
        var tmpItem = this.team.getChildAt(this.itemId[0]);
        var tmpBox = this.team.getChildAt(this.itemId[1]);
        this.itemId = [];
    };
    GameSkin.prototype.replaceNum = function (tmp) {
        var list = tmp.result.split(",");
        var newtmpar = list;
        // this.winNum = aa + bb + cc + "";
        // this.winNum = (list[0] + list[2] + list[5]);
        // console.log(this.winNum)
        // this.info.text = "在圆圈内填上适当的数,使每条边上3个数的和都是" + this.winNum;
        // for (let i = 0; i < num; i++) {
        // 	tmp.push(list[i]);
        // }
        // tmp.sort((a, b) => { return b - a });
        // for (let aa of tmp) {
        // 	this.winNum = this.winNum + aa;
        // }
        // return tmp;
        return newtmpar;
    };
    // public downAnimate(obj, func) {
    // 	egret.Tween.get(obj).to({ y: 0 }, 1000, egret.Ease.circOut).call(func);
    // }
    GameSkin.prototype.resetImg = function (tx) {
        // this.xz.visible = false;
        XDFSoundManager.play("start_mp3");
        var tmplvl = this["lv" + this.subNum.value];
        this.isClick = false;
        // console.log(tmplvl);
        // Math.random() > 0.5 ? tmplv.reverse() : 0;
        this.nowobj = tmplvl;
        this.nowObjList = tmplvl;
        this.winNum = tmplvl[0];
        // this.info.text = "将香肠切成" + (Number(this.nowobj.que) + 1) + "段需要多少时间呢?"
        console.log(this.winNum);
        this.info.text = "点击你喜欢的甜品。";
    };
    // public isFirstFun() {
    // 	if (this.isFirst && this.animateArray[2]) {
    // 		this.removeChild(this.animateArray[2]);
    // 		this.isFirst = false;
    // 	}
    // 	if (this.isFirst) {
    // 		this.animateArray[2] = this.animationFun(this.animateArrayObj[2]);
    // 	}
    // }
    //判断是否答错
    GameSkin.prototype.isGameOver = function () {
        this.isClick = false;
        this.subNum.value++;
        if (this.subNum.value < this.missionNum) {
            this.resetImg();
            this.moveInfo();
        }
    };
    //监听数字函数
    GameSkin.prototype.changNumber = function (e) {
        if (this.subNum.value >= this.missionNum) {
            // this.animateArray[1] = this.animationFun(this.animateArrayObj[1]);
            // this.animateArray[2] = this.animationFun(this.animateArrayObj[2]);
            // this.moveInfo();
            egret.clearInterval(this.clockNum);
            window.platform.sendMessage(10002, "", 3); //完成
            this.addChild(new FinishSkin(this, { timer: this.clock.text }, "echo", false));
            // this.addChild(new FinishSkin(this, { timer: this.clock.text }, "echo", false));
            // this.questionItem.resultNum = -1;
            // this.stopBox();
        }
    };
    // public changId() {
    // this.tmpNowNum = "";
    // XDFSoundManager.play("click_mp3");
    // let tmp = false;
    // for (let i = 0; i < this.bklist.length; i++) {
    // 	let tc = this.bklist[i];
    // 	if (tc.lv == 0) {
    // 		tmp = true;
    // 	}
    // 	this.tmpNowNum += tc.lv;
    // }
    // if (!tmp) {
    // 	this.sure.visible = true;
    // 	this.playMusic("keyong");
    // }
    // }
    GameSkin.prototype.showResult = function (tmp, point) {
        var _this = this;
        // this.tmpNowNum = (this.ffnum) + "";
        if (tmp) {
            XDFSoundManager.play("right_mp3");
            this.isClick = true;
            console.log("回答正确");
            this.winAnimate();
            // this.moveInfo();
            egret.setTimeout(function () {
                _this.isGameOver();
            }, this, 2000);
            window.platform.sendMessage(10002, "", 1);
        }
        else {
            // this.questionItem.loseAnimate(tmp);
            window.platform.sendMessage(10002, "", 0);
            this.loseAnimate();
            XDFSoundManager.play("error_mp3");
            console.log("回答错误");
        }
    };
    GameSkin.prototype.winAnimate = function () {
        var _this = this;
        if (this.subNum.value == 1) {
            this.addTime();
        }
        // let tmp = new Box(point.x + this.questionItem.x, point.y + this.questionItem.y, this.subNum.value, 0, this) as Box;
        // tmp.scaleX = 0.5;
        // tmp.scaleY = 0.5;
        // this.team.addChild(tmp);
        //x: 810 + 143, y: 220 + 39
        // let addx = 60;
        // tmp.winAnimate({ x: this.subNum.value * 380 + addx, y: 220 });
        // let tmpp = this.rpoint[this.subNum.value];
        // this.animateArray[4] = this.animationFun(this.animateArrayObj[4], () => {
        // 	egret.Tween.get(tmp).to({ y: 800 });
        // });
        // this.scoreNum = this.scoreNum + 10 * this.errorSubNum;
        // this.score.text = this.scoreNum + "分";
        // this.animateArray[0] = this.animationFun(this.animateArrayObj[0], () => {
        // 	egret.Tween.get(this).to({ x: point.x, y: point.y, scaleX: 1, scaleY: 1 }, 500).call(() => {
        // 	});
        // });
        // this.moveAnimate(point);
        XDFSoundManager.play("cutscene_mp3");
        DragonFun.animationFun(this, this.animateArrayObj[2], function () {
            _this.questionItem.winAnimate();
        });
        // egret.setTimeout(() => {
        // 	this.playMusic1("effect");
        // 	this.animateArray[2] = this.animationFun(this.animateArrayObj[2]);
        // }, this, 1500);
    };
    GameSkin.prototype.loseAnimate = function () {
        // this.questionItem.loseAnimate();
        if (this.subNum.value == 1) {
            return;
        }
        DragonFun.animationFun(this, this.animateArrayObj[0]);
        this.clock.text = Number(this.clock.text) + 15 + "";
        this.questionItem.loseAnimate();
        this.errNum++;
    };
    GameSkin.prototype.moveAnimate = function (point) {
        var _this = this;
        this.questionItem.moveItemNew();
        var ant = this.animationGroup.getChildAt(5 - this.subNum.value);
        this.animationGroup.removeChildAt(5 - this.subNum.value);
        this.zhezhao.addChild(ant);
        ant.animation.play();
        var aaa = Math.abs(point.x - this.animationGroup.x);
        egret.Tween.get(ant).to({ x: point.x - this.animationGroup.x, y: point.y - this.animationGroup.y }, aaa / 2).call(function () {
            ant.visible = false;
            for (var i = 0; i < _this.animationGroup.numChildren; i++) {
                var ant_1 = _this.animationGroup.getChildAt(i);
                ant_1.animation.play();
                egret.Tween.get(ant_1).to({ x: ant_1.x + 180 }, 500);
            }
        });
        egret.setTimeout(function () {
            for (var i = 0; i < _this.animationGroup.numChildren; i++) {
                var ant_2 = _this.animationGroup.getChildAt(i);
                ant_2.animation.stop();
            }
            _this.isGameOver();
        }, this, 2000);
    };
    GameSkin.prototype.moveInfo = function () {
        this.questionItem.reset();
        if (this.guide.parent)
            this.guide.parent.removeChild(this.guide);
    };
    //开始 暂停 背景音乐
    GameSkin.prototype.musicFun = function () {
        XDFSoundManager.play("click_mp3");
        if (this.isMusic) {
            XDFSoundManager.stop("bj_mp3");
            this.isMusic = false;
            this.music.source = "music_close_png";
        }
        else {
            XDFSoundManager.play("bj_mp3", 0, -1, 0.2);
            this.isMusic = true;
            this.music.source = "music_png";
        }
    };
    //返回
    GameSkin.prototype.resetFun = function () {
        XDFSoundManager.play("click_mp3");
        // this.isFirstFun();	//判断是不是第一次
        // window.location.reload();
        // this.music_effect.stop()
        XDFSoundManager.stopAll();
        egret.clearInterval(this.timeNum);
        // egret.clearInterval(this.guide.box.timeNum);
        // egret.clearInterval(this.guide.box1.timeNum);
        egret.clearInterval(this.timeNum);
        this.IndexSkin.removeChild(this);
        this.IndexSkin.startAnm();
        egret.Tween.removeTweens(this.macb);
    };
    //重置
    GameSkin.prototype.gameReset = function () {
        XDFSoundManager.stopAll();
        this.IndexSkin.removeChild(this);
        this.IndexSkin.start();
    };
    GameSkin.prototype.randomNum = function (minNum, maxNum) {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    };
    GameSkin.prototype.setXY = function (i) {
        //随机取两个数 作为每一个子View的左上角坐标   最大为父控件的X Y 最小为0
        //random.nextInt(max) % (max - min + 1) + min;
        var x1 = this.randomNum(0, 1694 - 138);
        var y1 = this.randomNum(0, 756 - 152);
        var point1 = { x: x1, y: y1 };
        var createCircleTimes = 0;
        if (i > 0) {
            while (this.twototwo(point1)) {
                createCircleTimes++;
                var x2 = this.randomNum(0, 1694 - 138);
                var y2 = this.randomNum(0, 756 - 152);
                point1 = { x: x2, y: y2 };
                // if (createCircleTimes > 200) {
                // 	break;
                // }
                // console.log(point1.x, point1.y);
            }
            // console.log("==================================");
        }
        //把没有重合的点放到集合数据中去
        this.pointlist.push(point1);
        return point1;
    };
    GameSkin.prototype.twototwo = function (point) {
        for (var i = 0; i < this.pointlist.length; i++) {
            var poition = this.pointlist[i];
            var x1 = poition.x;
            var y1 = poition.y; //没有重合的部分
            var x2 = point.x; //新的
            var y2 = point.y;
            if (Math.abs(x2 - x1) <= 138 && Math.abs(y2 - y1) <= 152) {
                return true;
            }
        }
        return false;
    };
    // public compare(rawY, rawX) {
    // 	for (int i = 0; i < list.size(); i++) { //list为存放点的集合
    // 		Point point = list.get(i);
    // 		int y = point.y;
    // 		int x = point.x;
    // 		//判断条件
    // 		if (y <= rawY && rawY <= y + measuredHeight && x <= rawX && rawX <= x + measuredWidth) {
    // 			return i;
    // 		}
    // 	}
    // 	return -1;
    // }
    GameSkin.prototype.imgMove = function (tmp, scale, x, y) {
        var _this = this;
        // this.resultNum = this.resultNum.substring(0, num) + tmp.lv + this.resultNum.substring(num + 1);
        // tmp.imgMove(num, x, y);
        tmp.parent.removeChild(tmp);
        this.team.addChild(tmp);
        tmp.x = x;
        tmp.y = y;
        tmp.scaleX = scale;
        tmp.scaleY = scale;
        egret.Tween.get(tmp).to({ y: y + 140 }, 100).call(function () {
            _this.subNum.value++;
            _this.resetImg();
        });
    };
    GameSkin.prototype.moveP = function (tmp, top, func) {
        tmp.y += tmp.vy;
        var last = this.bklist[this.bklist.length - 2];
        if (last != null && (tmp.x > last.x + last.width || tmp.x + tmp.width < last.x)) {
            if (tmp.y > 1180) {
                egret.clearInterval(this.timeNum);
                this.bklist.splice(this.bklist.length - 1, 1);
                func();
            }
        }
        else if (tmp.y > top - tmp.height && last != null && tmp.x > last.x + last.width / 2) {
            tmp.rotation = tmp.rotation + 10;
            tmp.x = tmp.x + 10;
            if (tmp.rotation < 20) {
                tmp.y = top - tmp.height;
                tmp.vy += -10;
            }
            if (tmp.y > 1180) {
                egret.clearInterval(this.timeNum);
                this.bklist.splice(this.bklist.length - 1, 1);
                func();
            }
        }
        else if (tmp.y > top - tmp.height && last != null && tmp.x + tmp.width / 2 < last.x) {
            tmp.rotation = tmp.rotation - 10;
            tmp.x = tmp.x - 10;
            if (tmp.rotation > -20) {
                tmp.y = top - tmp.height;
                tmp.vy += -10;
            }
            if (tmp.y > 1180) {
                egret.clearInterval(this.timeNum);
                this.bklist.splice(this.bklist.length - 1, 1);
                func();
            }
        }
        else {
            if (tmp.y > top - tmp.height) {
                tmp.y = top - tmp.height;
                tmp.vy = tmp.vy * tmp.bounce;
                if (tmp.vy < 0.0001 && tmp.vy > -0.0001) {
                    tmp.vy = 0;
                }
            }
        }
        // console.log(Math.abs(tmp.vy), tmp.y, top - tmp.height)
        if (Math.floor(Math.abs(tmp.vy)) == 0 && tmp.y == top - tmp.height) {
            egret.clearInterval(this.timeNum);
            func(true);
        }
        tmp.vy += tmp.gravity;
        // let aaa = Math.floor(this.x) + "|" + Math.floor(this.mx);
        // this.tmppp++;
        // return aaa;
    };
    return GameSkin;
}(eui.Component));
__reflect(GameSkin.prototype, "GameSkin", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameSkin.js.map