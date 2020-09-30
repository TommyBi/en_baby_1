class Guide extends eui.Component implements eui.UIComponent {
	// public btn: eui.Image;
	// public wdImg: eui.Image;
	public lv: number;
	// public racTipMusic: egret.SoundChannel;
	// public click: egret.Sound = RES.getRes("click_mp3");
	// public succ: egret.Sound = RES.getRes("right_mp3");
	// public err: egret.Sound = RES.getRes("error_mp3");
	// public tishi: egret.Sound = RES.getRes("tishi_mp3");
	public tmpx: number; tmpy: number; winx; winy;
	public winNum = -1;
	public oldwin = -1;
	public anum = 0;
	public num: eui.Label;
	public infogp: eui.Group;
	public rect_bg: eui.Group;
	public oldx;
	public oldy;
	public mx = 0;
	public my = 0;
	public vy = 15;
	public gravity = 0.6;
	public bounce = -0.2;
	public bounceG = -0.3;
	public box;
	public box1;
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
		count: -1,
		stop: 0,									//必传
		// scale: 0.4,								//	放大倍数 
		position: [750, 500]						//坐标【x,y】
	}];

	public constructor(IndexSkin, info?) {
		super();
		this.lv = 0;
		this.skinName = "GuideSkin";
		// this.btn.source = "guide_btn" + this.lv + "_png"
		// this.num.text = info;
		// this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeImg, this);
		this.touchEnabled = false;

		// let tmp = this.randomNum(10, 30);
		// this.box1 = new Box(this.pts.questionItem.blue.x, 500, (this.pts.nowobj.blue >= 8 ? this.pts.nowobj.blue / 2 : this.pts.nowobj.blue) * 100, -1, this, tmp);
		// this.addChild(this.box1);

		// this.box = new Box(this.pts.questionItem.green.x, 400, (this.pts.nowobj.green >= 8 ? this.pts.nowobj.green / 2 : this.pts.nowobj.green) * 100, 1, this, tmp);
		// this.addChild(this.box);
		// this.playMusic("tishi");
		this.changeImg();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
	}

	public changeImg() {
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
	}

	public openImg() {
		// if (this.winNum > 0) {
		// 	return;
		// }
		this.winNum = -1;
		// this.info.source = "item_1_png";

	}

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

	public imgMove() {
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

	}

	public winAnimate() {
		XDFSoundManager.play("right_mp3");
		this.box.winAnimate();
		this.box1.winAnimate();
		this.rect_bg.visible = false;
		// this.btn.visible = false;
		// this.isFirstFun();
	}

	public loseAnimate() {
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


	public filterFun() {
		// img.filters = null;
		var color: number = 0xe40000;        /// 光晕的颜色，十六进制，不包含透明度
		var alpha: number = 0.8;             /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
		var blurX: number = 10;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
		var blurY: number = 10;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
		var strength: number = 4;            /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
		var quality: number = egret.BitmapFilterQuality.HIGH;        /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
		var inner: boolean = false;            /// 指定发光是否为内侧发光，暂未实现
		var knockout: boolean = false;            /// 指定对象是否具有挖空效果，暂未实现
		var glowFilter: egret.GlowFilter = new egret.GlowFilter(color, alpha, blurX, blurY,
			strength, quality, inner, knockout);
		return glowFilter;
	}

	public randomNum(minNum, maxNum) {
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
	}

	public resetColor() {
		// this.info.filters = [];
	}

	public setColor(img, c) {
		var color: number = c;        /// 光晕的颜色，十六进制，不包含透明度
		var alpha: number = 1;             /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
		var blurX: number = 30;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
		var blurY: number = 30;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
		var strength: number = 3;            /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
		var quality: number = egret.BitmapFilterQuality.HIGH;        /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
		var inner: boolean = false;            /// 指定发光是否为内侧发光，暂未实现
		var knockout: boolean = false;            /// 指定对象是否具有挖空效果，暂未实现
		var glowFilter: egret.GlowFilter = new egret.GlowFilter(color, alpha, blurX, blurY,
			strength, quality, inner, knockout);
		img.filters = [glowFilter]
	}


	public isGuide(tmp) {
		let isok = true;
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
	}

	// public drawReverse(x, y, w: number, h: number): void {
	// 	let dp: egret.Shape = new egret.Shape();
	// 	dp.graphics.beginFill(0xff0000);
	// 	dp.graphics.drawRect(x, y, w, h);
	// 	dp.graphics.endFill();

	// 	let container = new egret.DisplayObjectContainer();
	// 	let bg: egret.Shape = new egret.Shape();
	// 	bg.graphics.beginFill(0x000000, 0.5);
	// 	bg.graphics.drawRect(0, 0, 1920, 1080);
	// 	bg.graphics.endFill();

	// 	container.addChild(bg);
	// 	container.addChild(dp);
	// 	dp.blendMode = egret.BlendMode.ERASE;
	// 	let renderTexture: egret.RenderTexture = new egret.RenderTexture();
	// 	renderTexture.drawToTexture(container);

	// 	let bitmap: egret.Bitmap = new egret.Bitmap(renderTexture);
	// 	this.addChildAt(bitmap, 0);
	// 	bitmap.touchEnabled = true;  //允许点击
	// 	bitmap.pixelHitTest = true;  //镂空区域不响应点击，这样可以穿透点击到下面的背景
	// }


	// public isFirstFun() {

	// 	if (this.pts.isFirst && this.animateArray[0]) {
	// 		this.rect_bg.visible = false;
	// 		this.removeChild(this.animateArray[0]);
	// 		this.pts.isFirst = false;
	// 	}

	// 	if (this.pts.isFirst) {
	// 		this.box.loseAnimate();
	// 		this.box1.loseAnimate();
	// 		this.rect_bg.visible = true;
	// 		this.animateArray[0] = this.animationFun(this.animateArrayObj[0]);
	// 		this.playMusic("tishi");
	// 	}
	// }
}