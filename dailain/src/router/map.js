exports.map = function (config) {
    var map = [
        {
            path: 'index',
            name: 'index',
            component: function(resolve){
                require(['../pages/index.vue'], resolve);
            }
        },
        {
            path: 'productList',
            name: 'productList',
            component: function(resolve){
                require(['../pages/product_list.vue'], resolve);
            }
        },
        {
            path: 'addOrder',
            name: 'addOrder',
            component: function(resolve){
                require(['../pages/add_order.vue'], resolve);
            }
        },
        {
            path: 'aboutUs',
            name: 'aboutUs',
            component: function(resolve){
                require(['../pages/about_us.vue'], resolve);
            }
        },
    ];
    map.forEach((v, k) => {
        v.path = config.WEB_URI + '/' + v.path;
    });
    return map;
}