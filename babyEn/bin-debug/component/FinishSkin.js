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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var FinishSkin = (function (_super) {
    __extends(FinishSkin, _super);
    function FinishSkin(game, parameter, type, detailed) {
        if (parameter === void 0) { parameter = { startNum: 5, subNum: 0, subErr: 0, timer: 0 }; }
        if (type === void 0) { type = "once"; }
        if (detailed === void 0) { detailed = true; }
        var _this = _super.call(this) || this;
        _this.resetGroupArr = ["FinishReset", "startGroup", "subjectTimerGroup", "subjectDetailedGroup", "userNameGroup", "rankingListGroup"];
        // public succ: egret.Sound
        // public finish: egret.Sound
        _this.dataXJ = window.platform.getGameInfo().name;
        _this.finishAnimate = {
            take: "gameOver",
            dom: "overGroup",
            armatureName: "finish",
            animateName: "finish",
            slot: ["text_0", 0],
            count: 1 //必传
        };
        _this.skinName = "FinishSkinSkin";
        _this.GameSkin = game;
        _this.type = type;
        _this.parameter = parameter;
        _this.detailed = detailed;
        return _this;
    }
    FinishSkin.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    FinishSkin.prototype.childrenCreated = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _super.prototype.childrenCreated.call(this);
                this.FinishOk.addEventListener(egret.TouchEvent.TOUCH_TAP, this.finishOkFun, this);
                this.FinishReset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.finishResetFun, this);
                // this.succ = RES.getRes("succ_mp3");
                // this.finish = RES.getRes("finish_mp3");
                this.start();
                return [2 /*return*/];
            });
        });
    };
    FinishSkin.prototype.start = function () {
        if (this.type == "once") {
            this.init(); //初始化
            this.onceFun();
        }
        else {
            this.echoFun();
        }
        this.gameOver = DragonFun.animationFun(this, this.finishAnimate);
        // this.GameSkin.playMusic("finish")
        XDFSoundManager.play("finish_mp3");
        XDFSoundManager.play("succ_mp3");
    };
    //初始化
    FinishSkin.prototype.init = function () {
        var _this = this;
        //隐藏所有group
        this.resetGroupArr.map(function (item) {
            _this[item].visible = false;
        });
        //初始化星星
        this.startGroup.$children.map(function (item) {
            item.source = "finishStartD_png";
        });
    };
    //一次性
    FinishSkin.prototype.onceFun = function () {
        this.FinishReset.visible = true; //重玩按钮
        this.startGroup.visible = true; //星星
        if (this.detailed) {
            this.subjectDetailedGroup.visible = true; //详细信息
            this.finishSubjectNum.text = this.parameter.subNum; //答题数
            this.subjectErrorNum.text = this.parameter.subErr; //错误数
            this.accuracyText.text =
                (parseFloat(((this.parameter.subNum - this.parameter.subErr) / this.parameter.subNum).toFixed(2)) * 100).toFixed(0) + "%"; //百分比
        }
        else {
            this.subjectDetailedGroup.visible = false;
        }
        var start = this.startGroup.$children;
        for (var i = 0; i < this.parameter.startNum; i++) {
            start[i].source = "finishStartH_png";
        }
    };
    //循环性
    FinishSkin.prototype.echoFun = function () {
        // console.log("循环")
        this.allGp.scaleX = 0;
        this.allGp.scaleY = 0;
        egret.Tween.get(this.allGp).to({ scaleX: 1, scaleY: 1 }, 480).to({ scaleX: 0.8, scaleY: 0.8 }, 230).to({ scaleX: 1, scaleY: 1 }, 250);
        this.subjectTimerGroup.visible = true; //时间
        if (window.__math2_res_config__) {
            this.FinishReset.visible = true; //重玩按钮
        }
        else {
            this.userNameGroup.visible = true; //输入姓名
        }
        this.subjectTimerText.text = this.parameter.timer + "秒"; //设置时间
        // console.log(this.parameter,this.detailed)
        if (this.detailed) {
            this.subjectDetailedGroup.visible = true; //详细信息
            this.finishSubjectNum.text = this.parameter.subNum; //答题数
            this.subjectErrorNum.text = this.parameter.subErr; //错误数
            this.accuracyText.text =
                (parseFloat(((this.parameter.subNum - this.parameter.subErr) / this.parameter.subNum).toFixed(2)) * 100).toFixed(0) + "%"; //百分比
        }
        else {
            this.subjectDetailedGroup.visible = false; //详细信息
        }
        this.setStorage(); //存储数据
    };
    //存储数据
    FinishSkin.prototype.setStorage = function () {
        var OBJ = { timer: this.parameter.timer, subNum: this.parameter.subNum, subErr: this.parameter.subErr, userName: "" };
        if (sessionStorage.getItem(this.dataXJ) == null) {
            OBJ.userName = "学生1";
            var dataXJ = [OBJ];
            sessionStorage.setItem(this.dataXJ, JSON.stringify(dataXJ));
            this.userNameText.text = "学生1";
        }
        else {
            var dataXJ = JSON.parse(sessionStorage.getItem(this.dataXJ));
            OBJ.userName = "学生" + parseInt(dataXJ.length + 1);
            dataXJ.push(OBJ);
            this.userNameText.text = "学生" + dataXJ.length;
            sessionStorage.setItem(this.dataXJ, JSON.stringify(dataXJ));
        }
    };
    //获取数据
    FinishSkin.prototype.getStorage = function () {
        var dataXJ = JSON.parse(sessionStorage.getItem(this.dataXJ));
        dataXJ = dataXJ.sort(function (item1, item2) {
            return item1.timer - item2.timer;
        });
        var name = this.rankingListName.$children;
        var score = this.rankingListScore.$children;
        // console.log(dataXJ)
        dataXJ.map(function (item, index) {
            if (index < 5) {
                name[index].text = item.userName;
                score[index].text = item.timer + "秒";
            }
        });
    };
    //确定
    FinishSkin.prototype.finishOkFun = function () {
        this.userNameGroup.visible = false; //名字按钮
        this.FinishReset.visible = true; //重玩按钮
        this.subjectDetailedGroup.visible = false;
        this.subjectTimerGroup.visible = false;
        this.allGp.scaleX = 0;
        this.allGp.scaleY = 0;
        egret.Tween.get(this.allGp).to({ scaleX: 1, scaleY: 1 }, 480).to({ scaleX: 0.8, scaleY: 0.8 }, 230).to({ scaleX: 1, scaleY: 1 }, 250);
        this.rankingListGroup.visible = true; //排行榜 
        this.getStorage();
        this.finishAnimate.slot = ["text_0", 1];
        this.gameOver = DragonFun.animationFun(this, this.finishAnimate);
        XDFSoundManager.play("rank_mp3");
    };
    //重玩
    FinishSkin.prototype.finishResetFun = function () {
        this.GameSkin.removeChild(this);
        this.GameSkin.gameReset();
    };
    return FinishSkin;
}(eui.Component));
__reflect(FinishSkin.prototype, "FinishSkin", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=FinishSkin.js.map