// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        label: {
            type: cc.Label,
            default: null
        },
        percentage: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var timer = null;
        const FullWidth = 603;
        timer = setInterval(() => {
            this.percentage += 20;
            if (this.percentage >= 100) {
                this.percentage = 100;
                clearInterval(timer);
                cc.director.loadScene('Home');
            }
            this.node.width = this.percentage / 100 * FullWidth;
            this.label.string = this.percentage;
        }, 1000)
    },

    start () {

    },

    // update (dt) {},
});
