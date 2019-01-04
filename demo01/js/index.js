// 微信H5禁止下拉
var overscroll = function(el) {
    el.addEventListener('touchstart', function() {
        var top = el.scrollTop,
            totalScroll = el.scrollHeight,
            currentScroll = top + el.offsetHeight
        if (top === 0) {
            el.scrollTop = 1
        } else if (currentScroll === totalScroll) {
            el.scrollTop = top - 1
        }
    })
    el.addEventListener('touchmove', function(evt) {
        if (el.offsetHeight < el.scrollHeight)
            evt._isScroller = true
    })
}
overscroll(document.querySelector('.scroll'));
document.body.addEventListener('touchmove', function(evt) {
    if (!evt._isScroller) {
        evt.preventDefault()
    }
})


var maxTop;// 最大top值
function Touch(ele) {// 创建触屏移动构造函数
    var that = this;
    this.ele = ele;
    this.endTop = {
        y: 0
    };
    this.events = {
        handleEvent: function(event) {
            console.log(1)
            switch (event.type) {
                case 'touchstart':
                    that.start(event);
                    break;
                case 'touchmove':
                    that.move(event);
                    break;
                case 'touchend':
                    that.end(event);
                    break;
            }
        }
    }
}
        
Touch.prototype = {// 添加原型对象
    start: function(ev) {// 移动开始
        var touches = ev.targetTouches[0],that = this;
        this.disP = {
            y: touches.pageY - this.endTop.y,
            id: touches.identifier
        };
        console.log('aaa');
        document.addEventListener('touchmove', that.events, false);
        document.addEventListener('touchend', that.events, false);

        if(isbool){ affair() }
    },
    move: function(ev) {// 移动中
        var touches = ev.targetTouches[0];
        if (touches.identifier == this.disP.id) {
            console.log('move');
            this.endTop = {
                y: touches.pageY - this.disP.y
            };
            if(this.endTop.y>=0){this.endTop.y=0}
            if(this.endTop.y<-maxTop){this.endTop.y=-maxTop}
            this.ele.style.top = this.endTop.y + 'px';
        }

        if(isbool){ affair() }
    },
    end: function(ev) {// 移动结束
        ev = ev || window.event;
        var that = this;
        if (ev.changedTouches[0].identify == this.disP.id) {
            document.removeEventListener('touchmove', that.events, false);
            document.removeEventListener('touchend', that.events, false);
        }

        if(isbool){ affair() }
    },
    init: function() {// 初始化方法
        var that = this;
        window.addEventListener('touchstart', that.events, false);
    }
};


/*
* 获取数组中某个元素下标
* arrays  : 传入的数组
* obj     : 需要获取下标的元素
* */
function contains(arrays, obj) {
    var i = arrays.length;
    while (i--) {
        if (arrays[i] === obj) {
            return i;
        }
    }
    return false;
}

// 火车头定位
var isbool = false
function affair(){
    var top = Math.abs(String(cantainer.style.top).match(/\+?\-?\d+/g)[0])
    console.log(top)
    var train = document.querySelector('.train')
    if(top>=486){
        if(train.style.position=='fixed'){ return }
        train.style.position = 'fixed'
        train.style.top = '0px'
    }else{
        if(train.style.position=='absolute'){ return }
        train.style.position = 'absolute'
        train.style.top = '127.6vw'
    }
}

// 获取元素
var cantainer = document.querySelector('.cantainer')
var touch = new Touch(cantainer);// 实例化Touch对象

window.onload = function(){
    console.log('加载完成')
    isbool = true

    maxTop = cantainer.offsetHeight-window.screen.height// 获取最大top值
    touch.init();// 初始化触屏方法

    // 站牌弹窗
    var boards = document.querySelectorAll('.board>div>img:first-child')
    var alerts = document.querySelectorAll('.alert>img')
    for(var i=0;i<boards.length;i++){
        boards[i].addEventListener('click', handleClick, false)
    }
    function handleClick(){
        var that = this
        var i = contains(boards,that)
        document.querySelector('.alert').classList.toggle('alert-active')
        if(document.querySelector('.img-alert')){
            document.querySelector('.img-alert').classList.remove('img-alert')
        }
        alerts[i].classList.add('img-alert')
    }
    document.querySelector('.alert').onclick = function(){
        this.classList.toggle('alert-active')
    }

    // 音频
    var audio = document.getElementById("audio");
    var audioBtn = document.querySelector('.audio')
    audioBtn.onclick = function(){
        if(audio.paused){
            audioBtn.classList.remove('audio-pause')
            audio.play()
            audioBtn.style.webkitAnimationPlayState = "running";
            console.log('播放')
        }else{
            audio.pause()
            audioBtn.style.webkitAnimationPlayState = "paused";
            audioBtn.classList.add('audio-pause')
            console.log('暂停')
        }
    }

    // 关闭并删除加载页面
    var load = document.querySelector('.loading')
    load.parentNode.removeChild(load)
    // 火车驶出
    document.querySelector('.train').classList.add('train-active')
}