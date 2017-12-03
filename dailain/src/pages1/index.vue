<template>
    <main-layout>
        <header>
            <div class="header-nav index-nav">
                <a href="javascript:" class="header-arrow-ad" @click="reload">
                    <span  class="logo-index "></span>
                </a>
                <div class="search-box">
                    <input type="text" @keyup.13="search" name="serch" placeholder="Please enter product name" v-model="searchInput" maxlength="500">
                    <a class="icon-search-box" @click="search">
                        <span class="icon-search-red"></span>
                    </a>
                    <p class="search-validation">
                        <span class="arrow-red"></span>
                        <span>Please enter a product name</span>
                    </p>
                </div>
                <div v-if="!login" class="index-right"><router-link :to="{name: 'login'}">Log In</router-link></div>
            </div>
        </header>
        <div class="main-contain index">
            <div class="ad-top">
                <div class="swiper-container swiper-index">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide" v-for="item in carouselList">
                            <a :href="item.bannerUrl" class="a">
                                <div class="bg-img-box">
                                    <img :src="item.smalImgUrl" :alt="item.bannerTitle">
                                </div>
                            </a>
                        </li>
                    </ul>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="product-box">
                <h5 class="topic">Best Sellers</h5>
                <ul class="row product-li">
                    <li v-for="item in productList">
                        <router-link :to="{name: 'product_details',query:{'urlKey': item.urlKey}}" >
                            <div class="text-center">
                                <div class="product-img">
                                    <img :src="item.productImg" :alt="item.productName">
                                </div>
                            </div>
                            <p class="product-intro">
                                {{item.shortName}}
                            </p>
                            <p class="price-box">
                                <span class="current-peice">{{item.unit}}{{item.price}}</span>
                                <span class="bedfor-pecie price-pad">{{item.unit}}{{item.listingPrice}}</span>
                            </p>
                        </router-link>
                    </li>
                </ul>
            </div>
            <a class="product-intro-box" :href="blogInfo.postLink">
                <div class="img-box">
                    <img :src="blogInfo.imgUrl" alt="">
                </div>
                <h5 class="topic">
                    {{blogInfo.postTitle}}
                </h5>
                <div class="text" v-html="blogInfo.postContent"></div>
                <div class="text-right index-link-green">
                    Read more
                </div>
            </a>
            <div class="card-box">
                <ul class="row">
                    <li>
                        <router-link :to="{name: 'giveaway'}">
                            <img src="assets/images/index-card-1.png" alt="card-1">
                            <div class="up-shodow">
                                Giveaway
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'register',query:{'type': 1}}">
                            <img src="assets/images/index-card-2.png" alt="card-2">
                            <div class="up-shodow">
                                Register Product
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'influence'}">
                            <img src="assets/images/index-card-3.png" alt="card-3">
                            <div class="up-shodow">
                                Influencer
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'support'}">
                            <img src="assets/images/index-card-4.png" alt="card-4">
                            <div class="up-shodow">
                                Download
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <foot-set></foot-set>
        </div>
    </main-layout>
</template>

<script>

    import MainLayout from '../layouts/main.vue'
    import FootSet from '../components/foot.vue'
    export default {
        data () {
            return {
                page: 1,
                limit: 1,
                carouselList:[],
                productList:[],
                blogInfo: {},
                searchInput: '',
                login:Util.getSession('login')
            }
        },
        props: {},
        mounted: function () {
            var self = this;
            self.getAdvertising();
            self.getCarousel();
            self.getBlog();
            if(self.login){
                $('.index-nav .search-box').addClass('login');
            }
//            $('footer .foot-nav li').eq(0).find('a').addClass('router-link-exact-active router-link-active');
        },
        events: {

        },
        methods: {
            getAdvertising:function () {
                $.getScript("//static.criteo.net/js/ld/ld.js",function(){
                    window.criteo_q = window.criteo_q || [];
                    window.criteo_q.push(
                            { event: "setAccount", account: 44967 },
                            { event: "setSiteType", type: "m" },
                            { event: "viewHome" }
                    );
                    if(window.localStorage && window.localStorage.hashedEmail){
                        window.criteo_q.push(
                                { event: "setHashedEmail", email: window.localStorage.hashedEmail }
                        );
                    }
                });
            },
            getCarousel: function(){
                var self = this;
                Util.post2(this, {
                    api: '/index?brand='+ Config.BRAND + '&lang='+ Config.LANG +'&clientType=' + Config.CLIENT_TYPE,
                    data: {}
                }).then((res) => {
                    this.$set(this, 'carouselList', res.data.banners);
                    this.$set(this, 'productList', res.data.products);
                    self.initSwiper();
                });
            },
            initSwiper: function(){
                setTimeout(function(){
                    new Swiper('.swiper-index',{
                        loop:true,
                        autoplay:3000,
                        pagination : '.swiper-pagination',
                    })
                },0)
            },
            getBlog: function(){
                var self = this;
                Util.post2(this, {
                    api: '/blog/posts/latest?brand='+ Config.BRAND + '&lang='+ Config.LANG +'&clientType=' + Config.CLIENT_TYPE,
                    data: {}
                }).then((res) => {
                    this.$set(this, 'blogInfo', res.data);
                });
            },
            search: function(){
                var self = this;
                if(self.searchInput == ''){
                    $('.header-nav .search-validation').fadeIn();
                    setTimeout(function () {
                        $('.header-nav .search-validation').fadeOut();
                    },2000)
                    return false;
                }
                self.$router.push({name:'search',query:{'searchTxt': self.searchInput}});
            },
            reload: function(){
                location.reload();
            }
        },
        components: {
            MainLayout,
            FootSet
        }
    }
</script>