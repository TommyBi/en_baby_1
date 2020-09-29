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
var Finish = (function (_super) {
    __extends(Finish, _super);
    function Finish(game, timer, isError, list) {
        var _this = _super.call(this) || this;
        _this.aid = 0;
        _this.animateArray = [];
        _this.slist = [["细心", "你回答得非常准确，很细心哦！"], ["敏捷", "你答得真快！是个反应敏捷的小朋友。"], ["兴趣广泛", "你选择了所有种类的甜品，兴趣非常广泛哦！"], ["认真", "你用心答完了全部题目，你真棒哦！"]];
        _this.animateArrayObj = [{
                // take: "finger",			//接收返回值使用 可传可不传
                dom: "anGp",
                dragonbonesData: "lazhu_xinfeng_ske_json",
                textureData1: "lazhu_xinfeng_tex_json",
                texture1: "lazhu_xinfeng_tex_png",
                name: "lazhu_xinfeng",
                animateName: "lazhu_xinfeng",
                count: 1,
                stop: 1,
                position: [0, 0] //坐标【x,y】
            }];
        _this.skinName = "FinishSkin1";
        _this.GameSkin = game;
        var hash = {};
        for (var i in list) {
            if (hash[list[i]]) {
                _this.aid = 2;
            }
            hash[list[i]] = true;
        }
        if (isError == 0) {
            _this.aid = 0;
        }
        else if (timer <= 70) {
            _this.aid = 1;
        }
        else if (_this.aid == 2) {
            _this.aid = 3;
        }
        else {
            _this.aid = 2;
        }
        var tmp = _this.slist[_this.aid];
        _this.img.source = "icon_bg" + _this.aid + "_png";
        _this.title.text = tmp[0];
        _this.info.text = tmp[1];
        return _this;
    }
    Finish.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Finish.prototype.childrenCreated = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                _super.prototype.childrenCreated.call(this);
                this.anGp.once(egret.TouchEvent.TOUCH_TAP, function () {
                    _this.animateArrayObj[0].stop = 0;
                    _this.animateArray[0] = _this.animationFun(_this.animateArrayObj[0], function () {
                        _this.overGp.visible = true;
                    });
                    XDFSoundManager.play("tishi" + _this.aid + "_mp3");
                }, this);
                this.FinishReset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.finishResetFun, this);
                this.start();
                return [2 /*return*/];
            });
        });
    };
    Finish.prototype.start = function () {
        this.animateArray[0] = this.animationFun(this.animateArrayObj[0]);
        // this.GameSkin.playMusic("finish")
        XDFSoundManager.play("finish_mp3");
        XDFSoundManager.play("succ1_mp3");
    };
    //重玩
    Finish.prototype.finishResetFun = function () {
        this.GameSkin.removeChild(this);
        this.GameSkin.gameReset();
    };
    // 动画
    Finish.prototype.animationFun = function (dbObj, func, ttid) {
        var _this = this;
        //进来先移除动画在播放  避免动画叠加
        var tid = this.animateArrayObj.indexOf(dbObj);
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
        var dragonbonesData = RES.getRes(dbObj.dragonbonesData);
        var textureData = RES.getRes(dbObj.textureData1);
        var texture = RES.getRes(dbObj.texture1);
        // 创建动画工厂
        var egretFactoryA = new dragonBones.EgretFactory();
        egretFactoryA.parseDragonBonesData(dragonbonesData);
        egretFactoryA.parseTextureAtlasData(textureData, texture);
        //创建动画
        var armature = egretFactoryA.buildArmatureDisplay(dbObj.name);
        if (dbObj.slot)
            armature.armature.getSlot(dbObj.slot[0]).displayIndex = dbObj.slot[1];
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
        armature.addEventListener(dragonBones.EventObject.FRAME_EVENT, function (e) {
            // console.log(e.frameLabel)
        }, this);
        //动画播放完成
        armature.addEventListener(dragonBones.EventObject.COMPLETE, function () {
            if (armature.parent && dbObj.isRemove) {
                dbObj.dom ? _this[dbObj.dom].removeChild(armature) : _this.removeChild(armature);
            }
            if (func) {
                func();
            }
        }, this);
        return armature;
    };
    return Finish;
}(eui.Component));
__reflect(Finish.prototype, "Finish", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Finish.js.map