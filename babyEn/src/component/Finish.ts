class Finish extends eui.Component implements eui.UIComponent {
	public GameSkin: any	//this
	public img: eui.Image;
	public title: eui.Label;
	public info: eui.Label;

	public overGp: eui.Group;
	public anGp: eui.Group;

	// public succ: egret.Sound;
	// public finish: egret.Sound;
	// public tishi: egret.Sound;
	public FinishReset: eui.Image;
	public aid = 0;
	public animateArray: Array<dragonBones.EgretArmatureDisplay> = [];


	public slist = [["细心", "你回答得非常准确，很细心哦！"], ["敏捷", "你答得真快！是个反应敏捷的小朋友。"], ["兴趣广泛", "你选择了所有种类的甜品，兴趣非常广泛哦！"], ["认真", "你用心答完了全部题目，你真棒哦！"]]


	public animateArrayObj: Array<any> = [{
		// take: "finger",			//接收返回值使用 可传可不传
		dom: "anGp",	//addChild的dom节点 不传默认 this.addChild
		dragonbonesData: "lazhu_xinfeng_ske_json",	//必传
		textureData1: "lazhu_xinfeng_tex_json",		//必传
		texture1: "lazhu_xinfeng_tex_png",			//必传
		name: "lazhu_xinfeng",
		animateName: "lazhu_xinfeng",								//必传
		count: 1,									//	放大倍数 
		stop: 1,						//	放大倍数 
		position: [0, 0]						//坐标【x,y】
	}];
	public constructor(game: any, timer, isError, list) {
		super();
		this.skinName = "FinishSkin1";
		this.GameSkin = game;
		let hash = {};
		for (let i in list) {
			if (hash[list[i]]) {
				this.aid = 2;
			}
			hash[list[i]] = true;
		}




		if (isError == 0) {
			this.aid = 0;
		} else if (timer <= 70) {
			this.aid = 1;
		} else if (this.aid == 2) {
			this.aid = 3;
		} else {
			this.aid = 2;
		}
		let tmp = this.slist[this.aid];
		this.img.source = "icon_bg" + this.aid + "_png";
		this.title.text = tmp[0];
		this.info.text = tmp[1];
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected async childrenCreated() {
		super.childrenCreated();

		this.anGp.once(egret.TouchEvent.TOUCH_TAP, () => {
			this.animateArrayObj[0].stop = 0;
			this.animateArray[0] = this.animationFun(this.animateArrayObj[0], () => {
				this.overGp.visible = true;
			});
			XDFSoundManager.play("tishi" + this.aid + "_mp3");
		}, this);
		this.FinishReset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.finishResetFun, this)
		this.start();
	}

	public start() {
		this.animateArray[0] = this.animationFun(this.animateArrayObj[0]);
		// this.GameSkin.playMusic("finish")
		XDFSoundManager.play("finish_mp3");
		XDFSoundManager.play("succ1_mp3");

	}

	//重玩
	public finishResetFun() {
		this.GameSkin.removeChild(this);
		this.GameSkin.gameReset()
	}

	// 动画
	public animationFun(dbObj, func?, ttid?) {
		//进来先移除动画在播放  避免动画叠加
		let tid = this.animateArrayObj.indexOf(dbObj);
		if (ttid) {
			tid = ttid;
		}
		if (this.animateArray[tid]) {
			if (this.animateArray[tid].parent) {
				dbObj.dom ? this[dbObj.dom].removeChild(this.animateArray[tid]) : this.removeChild(this.animateArray[tid]);
				this.animateArray[tid] = null;
			}
		}

		//添加文件
		let dragonbonesData = RES.getRes(dbObj.dragonbonesData);
		let textureData = RES.getRes(dbObj.textureData1);
		let texture = RES.getRes(dbObj.texture1);
		// 创建动画工厂
		let egretFactoryA = new dragonBones.EgretFactory();
		egretFactoryA.parseDragonBonesData(dragonbonesData);
		egretFactoryA.parseTextureAtlasData(textureData, texture);
		//创建动画
		let armature: dragonBones.EgretArmatureDisplay = egretFactoryA.buildArmatureDisplay(dbObj.name);
		if (dbObj.slot)
			armature.armature.getSlot(dbObj.slot[0]).displayIndex = dbObj.slot[1]
		//添加到舞台
		dbObj.dom ? this[dbObj.dom].addChildAt(armature, 0) : this.addChild(armature);
		armature.scaleX = dbObj.scale ? dbObj.scale : 1;
		armature.scaleY = dbObj.scale ? dbObj.scale : 1;
		armature.x = (dbObj.position && dbObj.position[0]) ? dbObj.position[0] : 0;
		armature.y = (dbObj.position && dbObj.position[1]) ? dbObj.position[1] : 0;
		//播放动画
		armature.animation.timeScale = dbObj.timeScale ? dbObj.timeScale : 1;
		armature.animation.gotoAndPlayByFrame(dbObj.animateName ? dbObj.animateName : dbObj.name, 1, dbObj.count).timeScale = dbObj.step ? dbObj.step : 1;
		dbObj.stop ? armature.animation.gotoAndStopByFrame(dbObj.animateName ? dbObj.animateName : dbObj.name, 0) : "";
		//监听帧
		armature.addEventListener(dragonBones.EventObject.FRAME_EVENT, (e) => {
			// console.log(e.frameLabel)
		}, this)
		//动画播放完成
		armature.addEventListener(dragonBones.EventObject.COMPLETE, () => {
			if (armature.parent && dbObj.isRemove) {	// 播放完成移除动画
				dbObj.dom ? this[dbObj.dom].removeChild(armature) : this.removeChild(armature);
			}
			if (func) {
				func();
			}
		}, this)

		return armature;
	}
}