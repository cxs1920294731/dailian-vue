exports.map = function (config) {
    var map = [
        {
            path: 'index',
            name: 'index',
            component: function(resolve){
                require(['../pages/index.vue'], resolve);
            }
        },
    ];
    map.forEach((v, k) => {
        v.path = config.WEB_URI + '/' + v.path;
    });
    return map;
}