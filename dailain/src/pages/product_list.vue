<template>
    <main-layout>
        <div class="hall">
            <header class="nav-header order-list">
                <ul class="order-seach-select">
                    <li class="order-option">
                        <span class="name">游戏类型</span>
                        <span class="right-border">&nbsp;</span>
                        <i class="arrow"></i>
                        <div class="order-select-layer">
                            <ul class="game-list-select">
                                <li class="game-li">游戏不限</li>
                                <li class="game-li">英雄联盟</li>
                                <li class="game-li">王者荣耀</li>
                                <li class="game-li">绝地求生</li>
                                <li class="game-li">守望先锋</li>
                            </ul>
                        </div>
                    </li>
                    <li class="order-option">
                        <span class="name">时间不限</span>
                        <span class="right-border">&nbsp;</span>
                        <i class="arrow"></i>
                        <div class="order-select-layer">
                            <ul class="game-list-select">
                                <li class="game-li active">时间不限</li>
                                <li class="game-li">最新发布</li>
                                <li class="game-li">时间最短</li>
                            </ul>
                        </div>
                    </li>
                    <li class="order-option">
                        <span class="name">价格不限</span>
                        <span class="right-border">&nbsp;</span>
                        <i class="arrow"></i>
                        <div class="order-select-layer">
                            <ul class="game-list-select">
                                <li class="game-li active">价格不限</li>
                                <li class="game-li">价格最高</li>
                                <li class="game-li">价格最低</li>
                            </ul>
                        </div>
                    </li>
                    <li class="order-option">
                        <span class="name">高级筛选</span>
                        <span class="right-border">&nbsp;</span>
                        <i class="arrow"></i>
                        <div class="order-select-layer">
                            <div class="high-select">
                                <div class="radio-select">
                                    <h6 class="title">代练价格</h6>
                                    <ul class="select-box">
                                        <li class="select-li">
                                            <label>
                                                <input class="hidden" type="radio" name="price" hidden checked>
                                                <span class="text">不限</span>
                                            </label>
                                        </li>
                                        <li class="select-li">
                                            <label>
                                                <input class="hidden" type="radio" name="price" hidden >
                                                <span class="text">1~100</span>
                                            </label>
                                        </li>
                                        <li class="select-li">
                                            <label>
                                                <input class="hidden" type="radio" name="price" hidden >
                                                <span class="text">100~200</span>
                                            </label>
                                        </li>
                                        <li class="select-li">
                                            <label>
                                                <input class="hidden" type="radio" name="price" hidden >
                                                <span class="text">200~300</span>
                                            </label>
                                        </li>
                                        <li class="select-li">
                                            <label>
                                                <input class="hidden" type="radio" name="price" hidden >
                                                <span class="text">300以上</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="row bottom-btn">
                                    <a class="btn btn-clear">清空</a>
                                    <a class="btn btn-ok">确认</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </header>
            <div class="index-main">
                <div class="margin-bottom-10 index-card">
                    <ul>
                        <li v-for="order in orderList">
                            <router-link :to="{name:'order_details',query:{'orderId':order.order_id}}" class="is-relative order-box">
                                <i class="icon-order-index"></i>
                                <h6 class="title">{{order.order_name}}</h6>
                                <div class="is-relative">
                                    <span class="price">¥{{order.order_price}}</span>
                                    <p class="order-intro">
                                        <span>所在区服：</span>
                                        <span>{{order.game_name}}<span>/{{order.area_name}}</span><span >/{{order.server_name}}</span> </span>
                                    </p>
                                    <p class="order-intro">
                                        <span>发布者</span>
                                        <span>{{order.order_name}}</span>
                                    </p>
                                    <div class="order-text">
                                        <span>保证金：{{order.security_price}}元</span>
                                        <span>时长：{{order.order_name}}小时</span>
                                    </div>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                    <div>
                        <a class="read-more" href="product-list.html">查看更多</a>
                    </div>
                </div>
            </div>
        </div>
    </main-layout>
</template>
<script>
    import MainLayout from '../layouts/main.vue'
    export default {
        data () {
            return {
                orderList:{},
                test:{},
                is_areaName:true,
            }
        },
        props: {},
        mounted: function () {
            var self=this;
            self.initPage();
        },
        events: {

        },
        methods: {
            initPage:function () {
                var self = this;
                Util.post(this, {
                    api:'/index.php?m=Home&c=order&a=show_order_list',
                    data: {}
                }).then(function (res) {
                    if(res){
                        console.log(res);
                       self.orderList=res;
                    }
                });
            }
        },
        components: {
            MainLayout,
        }
    }
</script>