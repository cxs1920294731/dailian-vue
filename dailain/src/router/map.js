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
            path: 'index1',
            name: 'index1',
            component: function(resolve){
                require(['../pages/index1.vue'], resolve);
            }
        },
        {
            path: '/',
            redirect: { name: 'index'}
            //component: function(resolve){
            //    require(['../pages/index.vue'], resolve);
            //},
            //alias: 'index'
        },
        {
            path: 'product',
            name: 'product',
            component: function(resolve){
                require(['../pages/product.vue'], resolve);
            },
            redirect: { name: 'product_index'},
            children:[
                {
                    path: 'product_index',
                    name: 'product_index',
                    component: function(resolve){
                        require(['../pages/product_index.vue'], resolve);
                    }
                },
                {
                    path: 'product_list',
                    name: 'product_list',
                    component: function(resolve){
                        require(['../pages/product_list.vue'], resolve);
                    }
                },
                {
                    path: 'product_details',
                    name: 'product_details',
                    component: function(resolve){
                        require(['../pages/product_details.vue'], resolve);
                    }
                }
            ]
        },
        {
            path: 'support',
            name: 'support',
            component: function(resolve){
                require(['../pages/support.vue'], resolve);
            },
            redirect: { name: 'support_index'},
            children:[
                {
                    path: 'support_list',
                    name: 'support_list',
                    component: function(resolve){
                        require(['../pages/support_list.vue'], resolve);
                    }
                },
                {
                    path: 'support_details',
                    name: 'support_details',
                    component: function(resolve){
                        require(['../pages/support_details.vue'], resolve);
                    }
                },
                {
                    path: 'warranty_info',
                    name: 'warranty_info',
                    component: function(resolve){
                        require(['../pages/warranty_info.vue'], resolve);
                    }
                },
                {
                    path: 'contact',
                    name: 'contact',
                    component: function(resolve){
                        require(['../pages/contact.vue'], resolve);
                    }
                },
                {
                    path: 'support_index',
                    name: 'support_index',
                    component: function(resolve){
                        require(['../pages/support_index.vue'], resolve);
                    },
                },
            ]
        },
        {
            path: 'user',
            name: 'user',
            component: function(resolve){
                require(['../pages/support.vue'], resolve);
            },
            redirect: { name: 'login'},
            children:[
                {
                    path: 'register',
                    name: 'register',
                    component: function(resolve){
                        require(['../pages/register.vue'], resolve);
                    }
                },
                {
                    path: 'forgetpwd',
                    name: 'forgetpwd',
                    component: function(resolve){
                        require(['../pages/forgetpwd.vue'], resolve);
                    }
                },
                {
                    path: 'setNewPwd',
                    name: 'setNewPwd',
                    component: function(resolve){
                        require(['../pages/setnewpwd.vue'], resolve);
                    }
                },
                {
                    path: 'login',
                    name: 'login',
                    component: function(resolve){
                        require(['../pages/login.vue'], resolve);
                    }
                },
            ]
        },
        {
            path: 'product_guide',
            name: 'product_guide',
            component: function(resolve){
                require(['../pages/product_guide.vue'], resolve);
            }
        },

        {
            path: 'applynow',
            name: 'applynow',
            component: function(resolve){
                require(['../pages/applynow.vue'], resolve);
            }
        },
        {
            path: 'influence',
            name: 'influence',
            component: function(resolve){
                require(['../pages/influence.vue'], resolve);
            }
        },
        {
            path: 'applyresult',
            name: 'applyresult',
            component: function(resolve){
                require(['../pages/applyresult.vue'], resolve);
            }
        },
        {
            path: 'giveaway',
            name: 'giveaway',
            component: function(resolve){
                require(['../pages/giveaway.vue'], resolve);
            }
        },
        {
            path: 'faqrules',
            name: 'faqrules',
            component: function(resolve){
                require(['../pages/faqrules.vue'], resolve);
            }
        },
        {
            path: 'privacy_policy',
            name: 'privacy_policy',
            component: function(resolve){
                require(['../pages/privacy_policy.vue'], resolve);
            }
        },
        {
            path: 'app_privacy_policy',
            name: 'app_privacy_policy',
            component: function(resolve){
                require(['../pages/app_privacy_policy.vue'], resolve);
            }
        },
        {
            path: 'terms_conditions',
            name: 'terms_conditions',
            component: function(resolve){
                require(['../pages/terms_conditions.vue'], resolve);
            }
        },
        {
            path: 'about_us',
            name: 'about_us',
            component: function(resolve){
                require(['../pages/about_us.vue'], resolve);
            }
        },
        {
            path: 'search',
            name: 'search',
            component: function(resolve){
                require(['../pages/search.vue'], resolve);
            }
        },

        //静态
        {
            path: 'always_on',
            name: 'always_on',
            component: function(resolve){
                require(['../pages2/always_on.vue'], resolve);
            }
        },
        {
            path: 'amazon_echo_dot',
            name: 'amazon_echo_dot',
            component: function(resolve){
                require(['../pages2/amazon_echo_dot.vue'], resolve);
            }
        },
        {
            path: 'bluetooth_transmitter_receiver',
            name: 'bluetooth_transmitter_receiver',
            component: function(resolve){
                require(['../pages2/bluetooth_transmitter_receiver.vue'], resolve);
            }
        },
        {
            path: 'bluetooth_transmitter_help_guide',
            name: 'bluetooth_transmitter_help_guide',
            component: function(resolve){
                require(['../pages2/bluetooth_transmitter_help_guide.vue'], resolve);
            }
        },
        {
            path: 'delay',
            name: 'delay',
            component: function(resolve){
                require(['../pages2/delay.vue'], resolve);
            }
        },
        {
            path: 'digital',
            name: 'digital',
            component: function(resolve){
                require(['../pages2/digital.vue'], resolve);
            }
        },
        {
            path: 'how_to_charge',
            name: 'how_to_charge',
            component: function(resolve){
                require(['../pages2/how_to_charge.vue'], resolve);
            }
        },
        {
            path: 'how_to_reset',
            name: 'how_to_reset',
            component: function(resolve){
                require(['../pages2/how_to_reset.vue'], resolve);
            }
        },
        {
            path: 'how_to_pair',
            name: 'how_to_pair',
            component: function(resolve){
                require(['../pages2/how_to_pair.vue'], resolve);
            }
        },
        {
            path: 'ipad',
            name: 'ipad',
            component: function(resolve){
                require(['../pages2/ipad.vue'], resolve);
            }
        },
        {
            path: 'iphone',
            name: 'iphone',
            component: function(resolve){
                require(['../pages2/iphone.vue'], resolve);
            }
        },
        {
            path: 'mac',
            name: 'mac',
            component: function(resolve){
                require(['../pages2/mac.vue'], resolve);
            }
        },
        {
            path: 'samsung',
            name: 'samsung',
            component: function(resolve){
                require(['../pages2/samsung.vue'], resolve);
            }
        },
        {
            path: 'speakers',
            name: 'speakers',
            component: function(resolve){
                require(['../pages2/speakers.vue'], resolve);
            }
        },
        {
            path: 'setreos',
            name: 'setreos',
            component: function(resolve){
                require(['../pages2/stereos.vue'], resolve);
            }
        },
        {
            path: 'win7',
            name: 'win7',
            component: function(resolve){
                require(['../pages2/win7.vue'], resolve);
            }
        },
        {
            path: 'win8',
            name: 'win8',
            component: function(resolve){
                require(['../pages2/win8.vue'], resolve);
            }
        },
        {
            path: 'win10',
            name: 'win10',
            component: function(resolve){
                require(['../pages2/win10.vue'], resolve);
            }
        },
        {
            path: 'rca_conn',
            name: 'rca_conn',
            component: function(resolve){
                require(['../pages2/rca_conn.vue'], resolve);
            }
        },

        {
            path: '*',
            name: '404',
            component: function(resolve){
                require(['../pages/404.vue'], resolve);
            }
        }
    ];

    map.forEach((v, k) => {
        v.path = config.WEB_URI + '/' + v.path;
    });

    return map;
}