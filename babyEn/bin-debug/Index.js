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
var Index = (function (_super) {
    __extends(Index, _super);
    function Index() {
        var _this = _super.call(this) || this;
        _this.isFirst = true;
        _this.animateArray = [];
        _this.animateArrayObj = [{
                // take: "finger",			//接收返回值使用 可传可不传
                dom: "chuansong",
                armatureName: "title",
                animateName: "d_in",
                count: 1,
                stop: 0
            }, {
                // take: "finger",			//接收返回值使用 可传可不传
                dom: "guGp",
                armatureName: "beijing",
                animateName: "beijing",
                count: -1,
                stop: 0
            }, {
                // take: "finger",			//接收返回值使用 可传可不传
                dom: "guGp1",
                armatureName: "jiqiren",
                animateName: "jiqiren",
                count: -1,
                stop: 0
            }];
        _this.skinName = "IndexSkin";
        egret.Tween.get(_this.start_btn, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1 }, 800).to({ scaleX: 1, scaleY: 1 }, 800);
        return _this;
    }
    Index.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Index.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.startAnm();
        // 开始按钮 等游戏实现后 解开注释使用
        this.start_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.removeAnm();
            _this.start();
        }, this);
    };
    // 开始游戏
    Index.prototype.start = function () {
        // 气球   飞艇   木马
        console.log("开始游戏");
        XDFSoundManager.play("click_mp3");
        this.addChild(new GameSkin(this));
    };
    Index.prototype.startAnm = function () {
        // this.clickStart.visible = false;
        var _this = this;
        var _loop_1 = function (i) {
            if (i == 0) {
                this_1.animateArray[i] = DragonFun.animationFun(this_1, this_1.animateArrayObj[i], function () {
                    _this.animateArrayObj[i].animateName = "d_motion";
                    _this.animateArrayObj[i].count = -1;
                    _this.animateArray[i] = DragonFun.animationFun(_this, _this.animateArrayObj[i]);
                });
            }
            else {
                this_1.animateArray[i] = DragonFun.animationFun(this_1, this_1.animateArrayObj[i]);
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.animateArrayObj.length; i++) {
            _loop_1(i);
        }
    };
    Index.prototype.removeAnm = function () {
        for (var i = 0; i < this.animateArray.length; i++) {
            if (this.animateArray[i]) {
                if (this.animateArray[i].parent) {
                    this.animateArray[i].parent.removeChild(this.animateArray[i]);
                    this.animateArray[i] = null;
                }
            }
        }
        egret.Tween.removeTweens(this.start_btn);
    };
    return Index;
}(eui.Component));
__reflect(Index.prototype, "Index", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Index.js.map