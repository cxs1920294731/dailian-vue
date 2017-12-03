var Vue = require("vue");
var VueRouter = require('vue-router');
window.Config = require('./common/config.js');
window.Util = require('util');
var routerMap = require('./router/map.js');
require('../assets/css/common.css');
require('../assets/js/jquery-3.1.1.min.js');
require('../assets/js/swiper-3.3.1.jquery.min.js');
require('../assets/js/layer.js');
Vue.use(VueRouter);

var router = new VueRouter({
    //mode: 'history',
    mode: 'hash',
    routes: routerMap.map(Config),
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});
router.beforeEach(function (to, from, next) {
    next();
});
const app = new Vue({
    router
}).$mount('#app');




