class Box extends eui.Component implements eui.UIComponent {
	public info: eui.Image;
	public anImg: eui.Image;
	// public wdImg: eui.Image;
	public lv: number;
	public pts: Question;
	// public tmpx = 2;
	public winNum = -1;
	public oldwin = -1;
	public anum = 0;
	public num: eui.Label;
	public animationGroup0: eui.Group;
	public animationGroup1: eui.Group;
	public oldx;
	public oldy;
	public mx = 0;
	public my = 0;

	public vy = 15;
	public gravity = 0.6;
	public bounce = -0.2;
	public bounceG = -0.3;
	public numTime = 0;
	public timeNum = 0;
	// public click: egret.Sound = RES.getRes("click_mp3");
	// public click: egret.Sound = RES.getRes("click_mp3");

	// public isAnimate0: dragonBones.EgretArmatureDisplay;

	// public animateArray: Array<dragonBones.EgretArmatureDisplay> = [];

	public animateArrayObj: Array<any> = [{
		// take: "finger",			//接收返回值使用 可传可不传
		// dom: "animationGroup0",	//addChild的dom节点 不传默认 this.addChild
		armatureName: "yanwu",
		animateName: "yanwu",								//必传
		count: 1,						//坐标【x,y】
		position: [101, 60],
		isRemove: true,
	}];

	public constructor(x, y, lv, winNum, IndexSkin, info?) {
		super();
		this.x = x;
		this.y = y;
		this.oldx = x;
		this.oldy = y;
		this.lv = lv;
		this.skinName = "BoxSkin";
		this.winNum = winNum;
		// if (winNum < 0) {
		// 	this.x = x - info;
		// 	this.tmpx = -this.tmpx;
		// }
		// console.log("fffffffffff",lv);
		this.info.source = "bg_" + lv + "_png";
		// this.num.text = info;
		// this.info.width = lv;
		if (this.winNum > 0)
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeImg, this);
		this.pts = IndexSkin;
		// this.animateArrayObj[0].key = this.hashCode + this.animateArrayObj[0].armatureName;
		// this.animateArrayObj[0].slot = ["tianpinxiaoceshi_09", lv];
		// this.animateArray[0] = DragonFun.animationFun(this, this.animateArrayObj[0]);
		// this.imgMove();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected partRemoved(partName: string, instance: any): void {
		super.partRemoved(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
	}

	public changeImg(e: egret.Event) {
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
		}else{
			this.pts.isClick = false;
		}




	}

	public openImg() {
		// if (this.winNum > 0) {
		// 	return;
		// }
		this.winNum = -1;
		// this.info.source = "item_1_png";

	}

	public setBg(tmp) {
		// this.info.source = "item_" + tmp + "_png";
		this.anImg.visible = true;
		this.anImg.source = "an_" + tmp + "_png";
	}

	public setLab(lv) {
		this.num.text = lv;
		this.lv = lv;

	}

	public imgMove() {
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
	}

	public winAnimate() {
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
	}

	public loseAnimate() {
		egret.clearInterval(this.timeNum);
		// this.info.visible = false;
		// this.animateArray[0] = this.animationFun(this.animateArrayObj[0], this.pts.itemId + 1, () => {
		// 	this.playMusic("err");
		// 	// this.removeany();
		// 	this.info.visible = true;
		// 	this.pts.clearImg();
		// });
	}

	public setScale(num) {
		// this.x = this.x - Math.floor((this.width * num - this.width) / 2);
		// this.y = this.y - Math.floor((this.height * num - this.height) / 2);
		this.scaleX = num;
		this.scaleY = num;
	}


	public dispose() {
		// DragonFun.removeChild(this.animateArrayObj[0], true);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changeImg, this);

	}



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

	// public animationFun(dbObj, func?, isEvent?) {
	// 	//进来先移除动画在播放  避免动画叠加
	// 	let tid = this.animateArrayObj.indexOf(dbObj);
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
	// 	// armature.armature.getSlot("tianpinxiaoceshi_09").displayList[dbObj.slot].displayIndex =5;
	// 	// armature.armature.getSlot("tianpinxiaoceshi_09").displayList[dbObj.slot].visible = true;
	// 	armature.armature.getSlot("tianpinxiaoceshi_09").displayIndex = dbObj.slot;
	// 	//添加到舞台
	// 	dbObj.dom ? this[dbObj.dom].addChildAt(armature, 0) : this.addChild(armature);
	// 	armature.scaleX = dbObj.scaleX ? dbObj.scaleX : 1;
	// 	// armature.scaleY = dbObj.scale ? dbObj.scale : 1;
	// 	armature.x = (dbObj.position && dbObj.position[0]) ? dbObj.position[0] : 0;
	// 	armature.y = (dbObj.position && dbObj.position[1]) ? dbObj.position[1] : 0;
	// 	//播放动画
	// 	armature.animation.gotoAndPlayByFrame(dbObj.animateName, 1, dbObj.count).timeScale = dbObj.step ? dbObj.step : 1;
	// 	//监听帧
	// 	armature.addEventListener(dragonBones.EventObject.FRAME_EVENT, (e) => {
	// 		if (isEvent) {
	// 			armature.animation.stop();
	// 			if (armature.parent) {	// 播放完成移除动画
	// 				dbObj.dom ? this[dbObj.dom].removeChild(armature) : this.removeChild(armature);
	// 			}
	// 			if (func) {
	// 				func();
	// 			}
	// 		}
	// 	}, this)
	// 	//动画播放完成
	// 	armature.addEventListener(dragonBones.EventObject.COMPLETE, () => {
	// 		if (armature.parent) {	// 播放完成移除动画
	// 			dbObj.dom ? this[dbObj.dom].removeChild(armature) : this.removeChild(armature);
	// 		}
	// 		if (func) {
	// 			func();
	// 		}
	// 	}, this)

	// 	return armature;
	// }
	// public filterFun() {
	// 	// img.filters = null;
	// 	var color: number = 0xe40000;        /// 光晕的颜色，十六进制，不包含透明度
	// 	var alpha: number = 0.8;             /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
	// 	var blurX: number = 10;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
	// 	var blurY: number = 10;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
	// 	var strength: number = 4;            /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
	// 	var quality: number = egret.BitmapFilterQuality.HIGH;        /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
	// 	var inner: boolean = false;            /// 指定发光是否为内侧发光，暂未实现
	// 	var knockout: boolean = false;            /// 指定对象是否具有挖空效果，暂未实现
	// 	var glowFilter: egret.GlowFilter = new egret.GlowFilter(color, alpha, blurX, blurY,
	// 		strength, quality, inner, knockout);
	// 	return glowFilter;
	// }

	// public randomNum(minNum, maxNum) {
	// 	return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
	// }

	// public resetColor() {
	// 	this.info.filters = [];
	// }

	// public setColor(img, c) {
	// 	var color: number = c;        /// 光晕的颜色，十六进制，不包含透明度
	// 	var alpha: number = 1;             /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
	// 	var blurX: number = 30;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
	// 	var blurY: number = 30;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
	// 	var strength: number = 3;            /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
	// 	var quality: number = egret.BitmapFilterQuality.HIGH;        /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
	// 	var inner: boolean = false;            /// 指定发光是否为内侧发光，暂未实现
	// 	var knockout: boolean = false;            /// 指定对象是否具有挖空效果，暂未实现
	// 	var glowFilter: egret.GlowFilter = new egret.GlowFilter(color, alpha, blurX, blurY,
	// 		strength, quality, inner, knockout);
	// 	img.filters = [glowFilter]
	// }
}