class Itembk extends eui.Component implements eui.UIComponent {
	public info: eui.Image;
	// public infobg: eui.Image;
	public yy: eui.Image;
	public lv: number;
	public pts: Question;
	// public racTipMusic: egret.SoundChannel;
	// public click: egret.Sound = RES.getRes("click_mp3");
	// public effect: egret.Sound = RES.getRes("effect_mp3");
	public tmpx: number; tmpy: number; winx; winy;
	public winNum = -1;
	public oldwin = -1;
	public anum = 0;
	public num: eui.Label;
	public infogp: eui.Group;
	public oldx;
	public oldy;
	public timeNum;
	// public tpGp: eui.Group;
	// public click: egret.Sound = RES.getRes("click_mp3");
	// public click: egret.Sound = RES.getRes("click_mp3");

	// public isAnimate0: dragonBones.EgretArmatureDisplay;

	public animateArray: Array<dragonBones.EgretArmatureDisplay> = [];

	public animateArrayObj: Array<any> = [{
		// take: "finger",			//接收返回值使用 可传可不传
		// dom: "animationGroup",	//addChild的dom节点 不传默认 this.addChild
		dragonbonesData: "finger_ske_json",	//必传
		textureData1: "finger_tex_json",		//必传
		texture1: "finger_tex_png",			//必传
		armatureName: "finger",
		animateName: "finger",								//必传
		count: -1,									//必传
		// scale: 0.4,								//	放大倍数 
		position: [50, 0]						//坐标【x,y】
	}, {
		// take: "finger",			//接收返回值使用 可传可不传
		// dom: "animationGroup",	//addChild的dom节点 不传默认 this.addChild
		dragonbonesData: "yanwu_ske_json",	//必传
		textureData1: "yanwu_tex_json",		//必传
		texture1: "yanwu_tex_png",			//必传
		armatureName: "yanwu",
		animateName: "yanwu",								//必传
		count: 1,									//必传
		scale: 3,								//	放大倍数 
		position: [220, 50]						//坐标【x,y】
	}];

	public constructor(x, y, lv, winNum, IndexSkin, info?) {
		super();
		this.x = x;
		this.y = y;
		this.oldx = x;
		this.oldy = y;
		this.lv = lv;
		this.skinName = "ItembkSkin";
		// // this.oldwin = oldwinNum;
		// console.log(lv);
		// if (winNum > 0) {
		// 	this.info.source = "wg_" + lv + "_png";
		// } else {
		// 	this.info.source = "bg_" + lv + "_png";
		// }
		this.num.text = lv;
		this.winNum = winNum;
		// this.animateArray[0] = this.animationFun(this.animateArrayObj[this.winNum]);

		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeImg, this);
		// this.verticalCenter="0"
		// this.horizontalCenter="0"
		this.pts = IndexSkin;
		if (this.lv == this.pts.pts.winNum && this.pts.pts.subNum.value == 1) {
			this.animateArray[0] = DragonFun.animationFun(this, this.animateArrayObj[0]);
		}

		// for (let i = 0; i < this.pts.pts.nowobj.sec; i++) {
		// 	let tmp = this.tpGp.getChildAt(i) as eui.Image;
		// 	tmp.source = "bg_" + info + "_png";
		// 	tmp.visible = true;
		// }

	}

	public setInfo(lv, winNum, IndexSkin, info?) {
		this.lv = lv;
		this.num.text = lv;
		this.winNum = winNum;
		this.pts = IndexSkin;
		this.anum = info;
		// this.animateArray[0] = this.animationFun(this.animateArrayObj[info]);
	}


	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
	}

	public changeImg(e: egret.Event) {
		if (this.pts.pts.isClick) {
			return;
		}
		if (this.winNum < 0) {
			return;
		}
		if (this.animateArray[3] && this.animateArray[3].parent) {
			this.removeChild(this.animateArray[3]);
		}
		XDFSoundManager.play("click_mp3");
		if (this.lv == this.pts.pts.winNum) {
			this.pts.pts.showResult(true, { x: this.x + this.width / 4, y: this.y + this.height - 200, lv: this.lv });
			this.winAnimate();
		} else {
			this.pts.pts.showResult(false);
			this.loseAnimate();
		}
	}

	public stopAll() {
		egret.clearTimeout(this.timeNum);
		// this.animateArray[0].animation.stop();
	}

	public stopAnt() {
		// this.animateArray[0].animation.stop();
	}

	public setBg() {

	}

	public openImg() {
		// if (this.winNum > 0) {
		// 	return;
		// }
		this.winNum = -1;
		// this.info.source = "item_1_png";

	}

	public setLab(lv) {
		this.num.text = lv;
		this.lv = lv;
		this.infogp.visible = true;

	}

	public imgMove(x, y) {
		// this.tmpx = this.infogp.x;
		// this.tmpy = this.infogp.y;
		this.x = x;
		this.y = y;
		// if (this.winNum >= 0) {
		// 	this.info.source = "bg_1_png";
		// 	this.num.textColor = 0x347b50;
		// }else{
		// 	this.info.source = "bg_0_png";
		// 	this.num.textColor = 0x663489;
		// }

	}

	public winAnimate() {
		// this.setColor(this.info, 0x79ff56);
		// this.playMusic("effect")
		// this.animateArrayObj[this.winNum].stop = 0;
		// this.animateArray[0] = this.animationFun(this.animateArrayObj[this.winNum]);
		// if (this.animateArray[0]) {
		// 	this.removeChild(this.animateArray[0]);
		// }
		// egret.Tween.get(this).wait(1000).to({ x: 616, y: -134, scaleX: 0.5, scaleY: 0.5 }, 200);



	}

	public loseAnimate() {
		// egret.Tween.removeTweens(this.info);
		// let tw = egret.Tween.get(this.info, { loop: true }).to({ filters: [this.filterFun()] }, 200).to({ filters: [] }, 200).call(() => {
		// 	this.anum++;
		// 	if (this.anum == 3) {
		// 		this.anum = 0;
		// 		egret.Tween.removeTweens(this.info);
		// 	}
		// });
		// this.animateArray[1] = this.animationFun(this.animateArrayObj[1], () => {
		// }, 1);
		// this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changeImg, this);
		// this.tpGp.visible = false;

	}

	public setScale(num) {
		// this.x = this.x - Math.floor((this.width * num - this.width) / 2);
		// this.y = this.y - Math.floor((this.height * num - this.height) / 2);
		this.scaleX = num;
		this.scaleY = num;
	}


	// public playMusic(name, count = 1) {
	// 	if (this.racTipMusic) {
	// 		this.racTipMusic.stop()
	// 	}
	// 	this.racTipMusic = this[name].play(0, count);
	// 	return this.racTipMusic;
	// }

	// public removeL() {
	// 	this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changImg, this);
	// }

	// public animationFun(dbObj, func?, ttid?) {
	// 	//进来先移除动画在播放  避免动画叠加
	// 	let tid = 0;
	// 	if (ttid) {
	// 		tid = ttid;
	// 	}
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
	// 	if (dbObj.slot)
	// 		armature.armature.getSlot(dbObj.slot[0]).displayIndex = dbObj.slot[1]
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
	// 	armature.addEventListener(dragonBones.EventObject.FRAME_EVENT, (e) => {
	// 		// console.log(e.frameLabel)
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

	public resetColor() {
		this.info.filters = [];
	}
	public setColor(img, c) {
		var color: number = c;        /// 光晕的颜色，十六进制，不包含透明度
		var alpha: number = 1;             /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
		var blurX: number = 15;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
		var blurY: number = 15;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
		var strength: number = 3;            /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
		var quality: number = egret.BitmapFilterQuality.HIGH;        /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
		var inner: boolean = false;            /// 指定发光是否为内侧发光，暂未实现
		var knockout: boolean = false;            /// 指定对象是否具有挖空效果，暂未实现
		var glowFilter: egret.GlowFilter = new egret.GlowFilter(color, alpha, blurX, blurY,
			strength, quality, inner, knockout);
		img.filters = [glowFilter]
	}
}