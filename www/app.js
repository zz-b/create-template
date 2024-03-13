// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app'
    }
});
var requireCb = function(obj){
    console.log('模块加载完毕',obj);
    console.log('执行模块方法:')
    obj.require_print('你好世界！！')
}

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main'], requireCb);
