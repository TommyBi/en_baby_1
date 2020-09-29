class FinishSkin extends eui.Component implements eui.UIComponent {

	public GameSkin: any	//this
	public type: string	//类型	echo重复排行榜    once一次性
	public parameter: any //参数{startNum:星星数量，subNum:完成答题，subErr:完成错误,timer:用时}


	public FinishReset: eui.Image;
	public startGroup: eui.Group;
	public subjectTimerGroup: eui.Group;
	public subjectTimerText: eui.Label;		//时间
	public subjectDetailedGroup: eui.Group;
	public finishSubjectNum: eui.Label;	//完成题目
	public subjectErrorNum: eui.Label;	//错误题目
	public accuracyText: eui.Label;	//百分比
	public detailed: boolean	 //是否显示详情
	public userNameGroup: eui.Group;
	public FinishOk: eui.Image;
	public userNameText: eui.Label;		//姓名
	public rankingListGroup: eui.Group;
	public rankingListName: eui.Group;	//排行姓名Group
	public rankingListScore: eui.Group;	//分数group
	public allGp: eui.Group;	//分数group
	public resetGroupArr: Array<any> = ["FinishReset", "startGroup", "subjectTimerGroup", "subjectDetailedGroup", "userNameGroup", "rankingListGroup"]

	// public succ: egret.Sound
	// public finish: egret.Sound
	public dataXJ = window.platform.getGameInfo().name;

	public overGroup: eui.Group;
	public gameOver: dragonBones.EgretArmatureDisplay
	public finishAnimate = {
		take: "gameOver",			//接收返回值使用 可传可不传
		dom: "overGroup",	//addChild的dom节点 不传默认 this.addChild
		armatureName: "finish",						//必传
		animateName: "finish",						//必传
		slot: ["text_0", 0],					//可传可不传   0卡槽名  1显示图
		count: 1						//必传
	};
	public constructor(game: any, parameter: any = { startNum: 5, subNum: 0, subErr: 0, timer: 0 }, type: string = "once", detailed = true, ) {
		super();
		this.skinName = "FinishSkinSkin";
		this.GameSkin = game;
		this.type = type;
		this.parameter = parameter;
		this.detailed = detailed
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected async childrenCreated() {
		super.childrenCreated();
		this.FinishOk.addEventListener(egret.TouchEvent.TOUCH_TAP, this.finishOkFun, this)
		this.FinishReset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.finishResetFun, this)
		// this.succ = RES.getRes("succ_mp3");
		// this.finish = RES.getRes("finish_mp3");
		this.start()
	}

	public start() {
		if (this.type == "once") {
			this.init()	//初始化
			this.onceFun()

		} else {
			this.echoFun()
		}
		this.gameOver = DragonFun.animationFun(this, this.finishAnimate);
		// this.GameSkin.playMusic("finish")
		XDFSoundManager.play("finish_mp3");
		XDFSoundManager.play("succ_mp3");
	}
	//初始化
	public init() {
		//隐藏所有group
		this.resetGroupArr.map((item) => {
			this[item].visible = false;
		});
		//初始化星星
		this.startGroup.$children.map((item: any) => {
			item.source = "finishStartD_png";
		});
	}
	//一次性
	public onceFun() {
		this.FinishReset.visible = true;	//重玩按钮
		this.startGroup.visible = true;		//星星
		if (this.detailed) {

			this.subjectDetailedGroup.visible = true;	//详细信息

			this.finishSubjectNum.text = this.parameter.subNum;	//答题数
			this.subjectErrorNum.text = this.parameter.subErr;	//错误数
			this.accuracyText.text =
				(parseFloat(((this.parameter.subNum - this.parameter.subErr) / this.parameter.subNum).toFixed(2)) * 100).toFixed(0) + "%";	//百分比
		} else {
			this.subjectDetailedGroup.visible = false;
		}
		let start: any = this.startGroup.$children
		for (let i = 0; i < this.parameter.startNum; i++) {
			start[i].source = "finishStartH_png"
		}
	}
	//循环性
	public echoFun() {
		// console.log("循环")
		this.allGp.scaleX = 0;
		this.allGp.scaleY = 0;
		egret.Tween.get(this.allGp).to({ scaleX: 1, scaleY: 1 }, 480).to({ scaleX: 0.8, scaleY: 0.8 }, 230).to({ scaleX: 1, scaleY: 1 }, 250);

		this.subjectTimerGroup.visible = true;	//时间
		if (window.__math2_res_config__) {
			this.FinishReset.visible = true;	//重玩按钮
		} else {
			this.userNameGroup.visible = true;		//输入姓名
		}
		this.subjectTimerText.text = this.parameter.timer + "秒";	//设置时间
		// console.log(this.parameter,this.detailed)
		if (this.detailed) {
			this.subjectDetailedGroup.visible = true;	//详细信息
			this.finishSubjectNum.text = this.parameter.subNum;	//答题数
			this.subjectErrorNum.text = this.parameter.subErr;	//错误数
			this.accuracyText.text =
				(parseFloat(((this.parameter.subNum - this.parameter.subErr) / this.parameter.subNum).toFixed(2)) * 100).toFixed(0) + "%";	//百分比
		} else {
			this.subjectDetailedGroup.visible = false;	//详细信息
		}

		this.setStorage()	//存储数据
	}
	//存储数据
	public setStorage() {
		var OBJ = { timer: this.parameter.timer, subNum: this.parameter.subNum, subErr: this.parameter.subErr, userName: "" }
		if (sessionStorage.getItem(this.dataXJ) == null) {
			OBJ.userName = "学生1"

			let dataXJ = [OBJ];
			sessionStorage.setItem(this.dataXJ, JSON.stringify(dataXJ));
			this.userNameText.text = "学生1";
		} else {
			let dataXJ = JSON.parse(sessionStorage.getItem(this.dataXJ));
			OBJ.userName = "学生" + parseInt(dataXJ.length + 1);

			dataXJ.push(OBJ)
			this.userNameText.text = "学生" + dataXJ.length;
			sessionStorage.setItem(this.dataXJ, JSON.stringify(dataXJ))
		}
	}
	//获取数据
	public getStorage() {
		let dataXJ = JSON.parse(sessionStorage.getItem(this.dataXJ));
		dataXJ = dataXJ.sort((item1, item2) => {
			return item1.timer - item2.timer
		});
		let name: any = this.rankingListName.$children
		let score: any = this.rankingListScore.$children
		// console.log(dataXJ)
		dataXJ.map((item: any, index: number) => {
			if (index < 5) {
				name[index].text = item.userName;
				score[index].text = item.timer + "秒";
			}
		})
	}
	//确定
	public finishOkFun() {
		this.userNameGroup.visible = false;	//名字按钮
		this.FinishReset.visible = true;	//重玩按钮
		this.subjectDetailedGroup.visible = false;
		this.subjectTimerGroup.visible = false;

		this.allGp.scaleX = 0;
		this.allGp.scaleY = 0;
		egret.Tween.get(this.allGp).to({ scaleX: 1, scaleY: 1 }, 480).to({ scaleX: 0.8, scaleY: 0.8 }, 230).to({ scaleX: 1, scaleY: 1 }, 250);

		this.rankingListGroup.visible = true;	//排行榜 
		this.getStorage();

		this.finishAnimate.slot = ["text_0", 1]
		this.gameOver = DragonFun.animationFun(this, this.finishAnimate);
		XDFSoundManager.play("rank_mp3");
	}
	//重玩
	public finishResetFun() {
		this.GameSkin.removeChild(this);
		this.GameSkin.gameReset()
	}

}