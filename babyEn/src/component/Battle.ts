class Battle extends eui.Component implements eui.UIComponent {
	public lv: number;
	public pts: Question;
	public racTipMusic: egret.SoundChannel;
	public tmpx: number; tmpy: number; winx; winy;
	public winNum = -1;
	public lastNum = -1;
	public bgRc: eui.Rect;
	public infoGP: eui.Group;
	public cbtn: eui.Group;
	public anGP: eui.Group;
	public info: eui.Image;
	// public clockNum;
	public timeOutNum = -1;
	// public moneyNum = 0;
	public isClick = false;


	public animateArray: Array<dragonBones.EgretArmatureDisplay> = [];

	public animateArrayObj: Array<any> = [{
		dom: "anGP",			//接收返回值使用 可传可不传
		dragonbonesData: "jibifei_ske_json",	//必传
		textureData1: "jibifei_tex_json",		//必传
		texture1: "jibifei_tex_png",			//必传
		name: "jinbifei",
		animateName: "jinbifei",								//必传
		count: 1,										//	放大倍数 
		stop: 0,
		isRemove: true,								//	放大倍数 
		position: [0, 0]						//坐标【x,y】
	}];

	public constructor(x, y, IndexSkin) {
		super();
		this.x = x;
		this.y = y;
		this.tmpx = x;
		this.tmpy = y;
		// this.lv = lv;
		this.skinName = "BattleSkin";
		this.cbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changImg, this);
		this.pts = IndexSkin;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		// this.addTime();
		this.updateInfo();
		XDFSoundManager.play("tip1_mp3");
	}

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

	public updateInfo() {
		let num = 0;
		this.winNum = this.pts.pts.nowObjList[0];
		this.lastNum = this.winNum;
		// this.info.text = c + " ÷ " + b + " = ?";
		let aaa = this.pts.pts.nowObjList[1];
		let bbb = this.pts.pts.nowObjList[2];


		let tmp = [this.winNum, aaa, bbb];
		tmp.sort((a, b) => { return a - b });
		for (let i = 0; i < this.cbtn.numChildren; i++) {
			let ttt = this.cbtn.getChildAt(i) as eui.Button;
			ttt.labelDisplay.text = tmp[i] + "";
		}
		this.info.source = "icon_bg" + (this.pts.pts.subNum.value - 1) + "_png"
	}


	public changImg(e: egret.Event) {
		if (this.isClick) {
			return;
		}
		XDFSoundManager.play("click_mp3");
		this.isClick = true;
		let tmp = e.target as eui.Button;
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
		} else {
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
	}

	public setBg() {
		// this.bg.visible = false;
	}


	public imgMove(win, x, y) {
		this.x = x;
		this.y = y;
		this.winx = x;
		this.winy = y;
		this.winNum = win;
	}

	public winAnimate() {
		let tw = egret.Tween.get(this);
		tw.to({ y: this.tmpy - 100 }, 200).to({ y: this.tmpy }, 200);
	}

	// public loseAnimate() {
	// 	this.animateArray[0] = this.animationFun(this.animateArrayObj[0]);
	// }

	public playMusic(name, count = 1) {
		if (this.racTipMusic) {
			this.racTipMusic.stop()
		}
		this.racTipMusic = this[name].play(0, count);
		return this.racTipMusic;
	}


	public randomNum(minNum, maxNum) {
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
	}

	// public removeL() {
	// 	this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changImg, this);
	// }

	public win(tmp) {
		// XDFSoundManager.play("right_mp3");
		this.setColor(tmp, false);
		egret.setTimeout(() => {
			tmp.filters = [];
		}, this, 500);
	}
	public lose(tmp) {
		// XDFSoundManager.play("error_mp3");
		this.setColor(tmp, true);
		egret.setTimeout(() => {
			tmp.filters = [];
		}, this, 500);
	}

	public setColor(img, c) {
		var color: number = c ? 0xff0000 : 0x79ff56;        /// 光晕的颜色，十六进制，不包含透明度
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