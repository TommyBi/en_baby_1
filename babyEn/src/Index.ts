class Index extends eui.Component implements eui.UIComponent {
	public start_btn: eui.Image;
	public isFirst: boolean = true;

	public animateArray: Array<dragonBones.EgretArmatureDisplay> = [];

	public animateArrayObj: Array<any> = [{
		// take: "finger",			//接收返回值使用 可传可不传
		dom: "chuansong",	//addChild的dom节点 不传默认 this.addChild
		armatureName: "title",
		animateName: "d_in",								//必传
		count: 1,							//	放大倍数 
		stop: 0
	}, {
		// take: "finger",			//接收返回值使用 可传可不传
		dom: "guGp",	//addChild的dom节点 不传默认 this.addChild
		armatureName: "beijing",
		animateName: "beijing",								//必传
		count: -1,									//必传
		stop: 0
	}, {
		// take: "finger",			//接收返回值使用 可传可不传
		dom: "guGp1",	//addChild的dom节点 不传默认 this.addChild
		armatureName: "jiqiren",
		animateName: "jiqiren",								//必传
		count: -1,									//必传
		stop: 0
	}];

	public constructor() {
		super();
		this.skinName = "IndexSkin";
		egret.Tween.get(this.start_btn, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1 }, 800).to({ scaleX: 1, scaleY: 1 }, 800);
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);

	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.startAnm();
		// 开始按钮 等游戏实现后 解开注释使用
		this.start_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.removeAnm();
			this.start();
		}, this);
	}
	// 开始游戏
	public start() {
		// 气球   飞艇   木马
		console.log("开始游戏")
		XDFSoundManager.play("click_mp3");
		this.addChild(new GameSkin(this))
	}
	public startAnm() {
		// this.clickStart.visible = false;

		for (let i = 0; i < this.animateArrayObj.length; i++) {
			if (i == 0) {
				this.animateArray[i] = DragonFun.animationFun(this, this.animateArrayObj[i], () => {
					this.animateArrayObj[i].animateName = "d_motion"
					this.animateArrayObj[i].count = -1;
					this.animateArray[i] = DragonFun.animationFun(this, this.animateArrayObj[i]);
				});
			} else {
				this.animateArray[i] = DragonFun.animationFun(this, this.animateArrayObj[i]);
			}
		}
	}


	public removeAnm() {
		for (let i = 0; i < this.animateArray.length; i++) {
			if (this.animateArray[i]) {
				if (this.animateArray[i].parent) {
					this.animateArray[i].parent.removeChild(this.animateArray[i]);
					this.animateArray[i] = null;
				}
			}
		}
		egret.Tween.removeTweens(this.start_btn);
	}

	// 动画
	// public animationFun(dbObj, func?, ttid?) {
	// 	//进来先移除动画在播放  避免动画叠加
	// 	let tid = this.animateArrayObj.indexOf(dbObj);
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
	// 	// if (position) {
	// 	// 	armature.x = position[0];
	// 	// 	armature.y = position[1];
	// 	// }
	// 	//播放动画

	// 	armature.scaleX = dbObj.scale ? dbObj.scale : 1;

	// 	armature.animation.timeScale = dbObj.timeScale ? dbObj.timeScale : 1;
	// 	armature.animation.gotoAndPlayByFrame(dbObj.animateName ? dbObj.animateName : dbObj.name, 1, dbObj.count).timeScale = dbObj.step ? dbObj.step : 1;
	// 	dbObj.stop ? armature.animation.gotoAndStopByFrame(dbObj.animateName ? dbObj.animateName : dbObj.name, 0) : "";
	// 	//监听帧
	// 	armature.addEventListener(dragonBones.EventObject.FRAME_EVENT, (e) => {
	// 		// console.log(e.frameLabel)
	// 	}, this)
	// 	//动画播放完成
	// 	armature.addEventListener(dragonBones.EventObject.COMPLETE, () => {
	// 		// if (dbObj.start && this.animateArray[tid]) {	// 播放完成移除动画
	// 		// 	dbObj.dom ? this[dbObj.dom].removeChild(armature) : this.removeChild(armature);
	// 		// 	// this.clickStart.visible = true;
	// 		// }
	// 		if (func) {
	// 			func();
	// 		}
	// 	}, this)

	// 	return armature;
	// }
}