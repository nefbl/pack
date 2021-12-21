
/*************************** [bundle] ****************************/
// Original file:./src/pages/api/index.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['25']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('33');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('38');


    script.render=function(createElement){

        return createElement('div',{"class":"nav-view","quickpaper":"","data-quickpaper-aa5c6c28":""},[createElement('div',{"class":"menu","data-quickpaper-aa5c6c28":""},[createElement('ul',{":active":"pagename==\"basic\"?\"yes\":\"no\"","data-quickpaper-aa5c6c28":""},[createElement('li',{"data-quickpaper-aa5c6c28":""},[createElement('h3',{"@click":"openPage(\"basic\",\"top\",\"no\")","data-quickpaper-aa5c6c28":""},["如何使用"]),createElement('ul',{"data-quickpaper-aa5c6c28":""},[createElement('li',{"data-quickpaper-aa5c6c28":""},[createElement('h4',{"@click":"doScroll(\"config\")","data-quickpaper-aa5c6c28":""},["添加配置文件"]),createElement('ul',{"data-quickpaper-aa5c6c28":""},[createElement('li',{"data-quickpaper-aa5c6c28":""},[createElement('h5',{"@click":"doScroll(\"config-items\")","data-quickpaper-aa5c6c28":""},["可配置条目"]),createElement('ul',{"data-quickpaper-aa5c6c28":""},[createElement('li',{"data-quickpaper-aa5c6c28":""},[createElement('h6',{"@click":"doScroll(\"config-items-entry\")","data-quickpaper-aa5c6c28":""},["entry"])]),createElement('li',{"data-quickpaper-aa5c6c28":""},[createElement('h6',{"@click":"doScroll(\"config-items-output\")","data-quickpaper-aa5c6c28":""},["output"])]),createElement('li',{"data-quickpaper-aa5c6c28":""},[createElement('h6',{"@click":"doScroll(\"config-items-redirect\")","data-quickpaper-aa5c6c28":""},["redirect"])]),createElement('li',{"data-quickpaper-aa5c6c28":""},[createElement('h6',{"@click":"doScroll(\"config-items-loader\")","data-quickpaper-aa5c6c28":""},["loader"])]),createElement('li',{"data-quickpaper-aa5c6c28":""},[createElement('h6',{"@click":"doScroll(\"config-items-task\")","data-quickpaper-aa5c6c28":""},["task"])]),createElement('li',{"data-quickpaper-aa5c6c28":""},[createElement('h6',{"@click":"doScroll(\"config-items-mode\")","data-quickpaper-aa5c6c28":""},["mode"])]),createElement('li',{"data-quickpaper-aa5c6c28":""},[createElement('h6',{"@click":"doScroll(\"config-items-devServer\")","data-quickpaper-aa5c6c28":""},["devServer"])]),createElement('li',{"data-quickpaper-aa5c6c28":""},[createElement('h6',{"@click":"doScroll(\"config-items-min\")","data-quickpaper-aa5c6c28":""},["min"])]),createElement('li',{"data-quickpaper-aa5c6c28":""},[createElement('h6',{"@click":"doScroll(\"config-items-suffix\")","data-quickpaper-aa5c6c28":""},["suffix"])])])])])]),createElement('li',{"data-quickpaper-aa5c6c28":""},[createElement('h4',{"@click":"doScroll(\"terminal\")","data-quickpaper-aa5c6c28":""},["命令"])])])])]),createElement('ul',{":active":"pagename==\"api\"?\"yes\":\"no\"","data-quickpaper-aa5c6c28":""},[createElement('li',{"data-quickpaper-aa5c6c28":""},[createElement('h3',{"@click":"openPage(\"api\",\"top\",\"no\")","data-quickpaper-aa5c6c28":""},["接口"]),createElement('ul',{"data-quickpaper-aa5c6c28":""},[createElement('li',{"data-quickpaper-aa5c6c28":""},[createElement('h4',{"@click":"doScroll(\"merge\")","data-quickpaper-aa5c6c28":""},["merge"])])])])])]),createElement('div',{"id":"root-view","class":"view","data-quickpaper-aa5c6c28":""},[createElement('div',{"data-quickpaper-aa5c6c28":""},[createElement('component',{":is":"page","data-quickpaper-aa5c6c28":""},[])])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/index.paper?QuickPaper&type=script&lang=js&hash=aa5c6c28
/*****************************************************************/
window.__etcpack__bundleSrc__['33']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('34');
var fixedScroll =__etcpack__scope_args__.default;


    let pages = {
        basic: () => window.__etcpack__getLazyBundle('./build/main@v0.2.0-bundle3.js','36'),
        api: () => window.__etcpack__getLazyBundle('./build/main@v0.2.0-bundle4.js','37')
    };

    __etcpack__scope_bundle__.default= {
        data() {
            return {
                page: null,
                pagename: ""
            };
        },
        mounted() {
            let urlJson = this.urlFormat(window.location.href);
            this.openPage(urlJson.router[1] in pages ? urlJson.router[1] : "basic", urlJson.params.fixed || "top");
        },
        methods: {
            openPage(pagename, fixedName, flag) {
                pages[pagename]().then(data => {
                    this.page = data.default;
                    this.pagename = pagename;
                    if (flag == 'no') window.location.href = "#/api/" + pagename + "?fixed=" + fixedName;
                    fixedScroll(fixedName);
                });
            },
            doScroll(fixedName) {
                window.location.href = "#/api/" + this.pagename + "?fixed=" + fixedName;
                fixedScroll(fixedName);
            }
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/Service/fixedScroll.js
/*****************************************************************/
window.__etcpack__bundleSrc__['34']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('35');
var animation =__etcpack__scope_args__.default;

__etcpack__scope_bundle__.default= function (fixed, overValue) {
  overValue = overValue || 60;
  var element = document.getElementById('root-view');

  if (fixed) {
    // 获取滚动调整结点
    var fixedDom = document.getElementById('fixed-' + fixed);

    if (fixedDom) {
      var offsetTop = fixedDom.offsetTop - overValue;
      var currentScrollTop = element.scrollTop || 0;
      animation(function (deep) {
        element.scrollTop = (offsetTop - currentScrollTop) * deep + currentScrollTop;
      }, 500, function () {
        element.scrollTop = offsetTop;
      });
    }
  } else {
    element.scrollTop = 0;
  }
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/animation.js
/*****************************************************************/
window.__etcpack__bundleSrc__['35']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    //当前正在运动的动画的tick函数堆栈
var $timers = [];
//唯一定时器的定时间隔
var $interval = 13;
//指定了动画时长duration默认值
var $speeds = 400;
//定时器ID
var $timerId = null;

/*!
 * 💡 - 动画轮播
 * https://github.com/hai2007/tool.js/blob/master/animation.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

/**
 * @param {function} doback 轮询函数，有一个形参deep，0-1，表示执行进度
 * @param {number} duration 动画时长，可选
 * @param {function} callback 动画结束回调，可选，有一个形参deep，0-1，表示执行进度
 *
 * @returns {function} 返回一个函数，调用该函数，可以提前结束动画
 */
__etcpack__scope_bundle__.default= function (doback, duration, callback) {

    // 如果没有传递时间，使用内置默认值
    if (arguments.length < 2) duration = $speeds;

    var clock = {
        //把tick函数推入堆栈
        "timer": function (tick, duration, callback) {
            if (!tick) {
                throw new Error('Tick is required!');
            }
            var id = new Date().valueOf() + "_" + (Math.random() * 1000).toFixed(0);
            $timers.push({
                "id": id,
                "createTime": new Date(),
                "tick": tick,
                "duration": duration,
                "callback": callback
            });
            clock.start();
            return id;
        },

        //开启唯一的定时器timerId
        "start": function () {
            if (!$timerId) {
                $timerId = setInterval(clock.tick, $interval);
            }
        },

        //被定时器调用，遍历timers堆栈
        "tick": function () {
            var createTime, flag, tick, callback, timer, duration, passTime, needStop,
                timers = $timers;
            $timers = [];
            $timers.length = 0;
            for (flag = 0; flag < timers.length; flag++) {
                //初始化数据
                timer = timers[flag];
                createTime = timer.createTime;
                tick = timer.tick;
                duration = timer.duration;
                callback = timer.callback;
                needStop = false;

                //执行
                passTime = (+new Date() - createTime) / duration;
                if (passTime >= 1) {
                    needStop = true;
                }
                passTime = passTime > 1 ? 1 : passTime;
                tick(passTime);
                if (passTime < 1 && timer.id) {
                    //动画没有结束再添加
                    $timers.push(timer);
                } else if (callback) {
                    callback(passTime);
                }
            }
            if ($timers.length <= 0) {
                clock.stop();
            }
        },

        //停止定时器，重置timerId=null
        "stop": function () {
            if ($timerId) {
                clearInterval($timerId);
                $timerId = null;
            }
        }
    };

    var id = clock.timer(function (deep) {
        //其中deep为0-1，表示改变的程度
        doback(deep);
    }, duration, callback);

    // 返回一个函数
    // 用于在动画结束前结束动画
    return function () {
        var i;
        for (i in $timers) {
            if ($timers[i].id == id) {
                $timers[i].id = undefined;
                return;
            }
        }
    };

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/index.paper?QuickPaper&type=style&lang=css&hash=aa5c6c28
/*****************************************************************/
window.__etcpack__bundleSrc__['38']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
