
/*************************** [bundle] ****************************/
// Original file:./src/pages/api/basic.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['36']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('39');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('40');


    script.render=function(createElement){

        return createElement('div',{"class":"doc-view","quickpaper":"","data-quickpaper-297a8048":""},[createElement('header',{"id":"fixed-top","data-quickpaper-297a8048":""},["如何使用"]),createElement('h2',{"id":"fixed-config","data-quickpaper-297a8048":""},["添加配置文件"]),createElement('p',{"data-quickpaper-297a8048":""},["首先，你需要在项目中新建一个js文件（比如",createElement('span',{"class":"important","data-quickpaper-297a8048":""},["'pack.config.js'"]),"），并写入下面内容："]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["module.exports = {↵    // 在此处添加具体的配置条目↵};"]),createElement('p',{"data-quickpaper-297a8048":""},["然后，根据实际情况，写入需要的具体配置条目即可。"]),createElement('h3',{"id":"fixed-config-items","data-quickpaper-297a8048":""},["可配置条目"]),createElement('h4',{"id":"fixed-config-items-entry","data-quickpaper-297a8048":""},["entry"]),createElement('p',{"data-quickpaper-297a8048":""},["必输，打包入口文件。"]),createElement('h4',{"id":"fixed-config-items-output","data-quickpaper-297a8048":""},["output"]),createElement('p',{"data-quickpaper-297a8048":""},["必输，打包后的代码存放的位置。"]),createElement('h4',{"id":"fixed-config-items-redirect","data-quickpaper-297a8048":""},["redirect"]),createElement('p',{"data-quickpaper-297a8048":""},["可选，对导入node_modules中的包进行重定向。"]),createElement('p',{"data-quickpaper-297a8048":""},["例如："]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["redirect: {↵    'nefbl': \"./src/lib/nefbl.js\"↵}"]),createElement('h4',{"id":"fixed-config-items-loader","data-quickpaper-297a8048":""},["loader"]),createElement('p',{"data-quickpaper-297a8048":""},["可选，对于各种文件如何解析的配置（一般而言，除了js、json等文件，都需要配置对应的解析方法，如果你想作为模块导入的话）。"]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["loader: [{↵    test: /\\.(js|ts)$/,↵    handler:Array<Function|String>↵},...]"]),createElement('p',{"data-quickpaper-297a8048":""},["handler的值是一个数组，成员可以是函数或字符串（处理顺序从右往左依次进行），如果是函数，格式如下："]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["function(source) {↵    // 进行处理↵    // 当前上下文this中包含了一些有用的信息↵}"]),createElement('p',{"data-quickpaper-297a8048":""},["如果是字符串，会引入字符串对应的包进行处理，包应该导出一个函数，格式和上面函数一样。"]),createElement('h4',{"id":"fixed-config-items-task","data-quickpaper-297a8048":""},["task"]),createElement('p',{"data-quickpaper-297a8048":""},["可选，类似生命周期，在特定时期触发。可选的钩子如下："]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["task:{↵↵}"]),createElement('h4',{"id":"fixed-config-items-mode","data-quickpaper-297a8048":""},["mode"]),createElement('p',{"data-quickpaper-297a8048":""},["必输，当前环境，应该是一个字符串，只有两个值可选："]),createElement('ul',{"data-quickpaper-297a8048":""},[createElement('li',{"data-quickpaper-297a8048":""},["【1】",createElement('span',{"class":"important","data-quickpaper-297a8048":""},["development"]),"：开发模式，配合命令'pack_dev'使用。"]),createElement('li',{"data-quickpaper-297a8048":""},["【2】",createElement('span',{"class":"important","data-quickpaper-297a8048":""},["production"]),"：打包模式，配合命令'pack_build'使用。"])]),createElement('h4',{"id":"fixed-config-items-devServer","data-quickpaper-297a8048":""},["devServer"]),createElement('p',{"data-quickpaper-297a8048":""},["对于开发模式是必输，表示用于辅助开发的本地服务器。"]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["devServer: {↵    contentBase: \"./\",↵    port: 20000↵}"]),createElement('h4',{"id":"fixed-config-items-min","data-quickpaper-297a8048":""},["min"]),createElement('p',{"data-quickpaper-297a8048":""},["可选，只在打包模式有效，布尔值类型，默认true，表示打包后进行代码压缩。"]),createElement('h4',{"id":"fixed-config-items-suffix","data-quickpaper-297a8048":""},["suffix"]),createElement('p',{"data-quickpaper-297a8048":""},["可选，表示缺省后缀，数组类型，默认['.js', '.ts', '.json']。"]),createElement('h2',{"id":"fixed-terminal","data-quickpaper-297a8048":""},["命令"]),createElement('p',{"data-quickpaper-297a8048":""},["配置文件准备好了以后，根据实际情况，配置不同的启动命令即可："]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["scripts:{↵    'dev':'pack_dev --config pack.config.js'↵}"]),createElement('p',{"data-quickpaper-297a8048":""},["上面是开发的时候使用的命令，会启动一个服务器，编辑后立刻可以看到效果。如果是开发完毕，需要进行最终打包："]),createElement('pre',{"q-code":"","data-quickpaper-297a8048":""},["scripts:{↵    'build':'pack_pkg --config pack.config.js'↵}"]),createElement('p',{"data-quickpaper-297a8048":""},["上面的配置是在",createElement('span',{"class":"important","data-quickpaper-297a8048":""},["package.json"]),"中进行添加。"])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/basic.paper?QuickPaper&type=script&lang=js&hash=297a8048
/*****************************************************************/
window.__etcpack__bundleSrc__['39']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/basic.paper?QuickPaper&type=style&lang=css&hash=297a8048
/*****************************************************************/
window.__etcpack__bundleSrc__['40']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
