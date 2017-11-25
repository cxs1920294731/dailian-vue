<template>
    <main-layout>
        <header-nav header-title="Support" header-type="2"></header-nav>
        <div class="main-contain support-list">
            <div class="product-col product-rod">
                <div class="swiper-container swiper-list nav">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide col" v-for="(item,index) in categoryList" :class="{'active':index == 0}">
                            <span>{{item.categoryName}}</span>
                        </li>
                    </ul>
                </div>
                <div class="swiper-container swiper-product-rod">
                    <ul class="swiper-wrapper">
                        <li  class="swiper-slide " v-for="item in categoryList">
                            <ul class="list row">
                                <li v-for="citem in item.subCategorys">
                                    <router-link :to="{name: 'support_list',query:{'cid': citem.categoryId,'cname':citem.categoryName}}">
                                        <i class="img-box">
                                            <img :src="citem.imgUrl" alt="">
                                        </i>
                                        <p class="name">{{citem.categoryName}}</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-link-product row text-center">
                <router-link :to="{name: 'warranty_info'}" class="is-left">Warranty information</router-link>
                <router-link :to="{name: 'product_guide'}" >Product guide</router-link>
                <router-link :to="{name: 'contact'}" class="is-right" >Contact US</router-link>
            </div>
            <foot-set></foot-set>
        </div>
    </main-layout>
</template>

<script>

    import MainLayout from '../layouts/main.vue';
    import HeaderNav from '../components/headnav.vue';
    import FootSet from '../components/foot.vue'
    export default {
        data () {
            return {
                categoryList: [],
                curIndex: 0,
            }
        },
        props: {},
        mounted: function () {
            var self = this;
            self.getCategory();
        },
        events: {

        },
        methods: {
            getCategory: function(){
                var self = this;
                Util.post2(this, {
                    api: '/categorys?brand='+ Config.BRAND + '&lang='+ Config.LANG +'&clientType=' + Config.CLIENT_TYPE,
                    data: {}
                }).then((res) => {
                    this.$set(this, 'categoryList', res.data);
                    self.initSwiper();
                });
            },
            initSwiper: function(){
                setTimeout(function(){
                    var swiperList = new Swiper('.swiper-list',{
                        slidesPerView: 'auto',
                        spaceBetween: 0
                    });
                    var myswiper2 = new Swiper('.swiper-product-rod',{
                        autoHeight:true,
                        onSlideChangeEnd:function (swiper) {
                            var array_html=$(' .product-rod .nav .col');
                            var index= swiper.activeIndex;
                            array_html.removeClass('active');
                            array_html[index].classList.add("active");
                        }
                    });
                    myswiper2.params.control = swiperList;
                    $('.product-rod .nav .col').click(function () {
                        $(this).addClass('active').siblings().removeClass('active');
                        var index= $('.product-rod .nav .col').index($(this));
                        myswiper2.slideTo(index, 1000, false);
                    })
                },0)
            },
        },
        components: {
            MainLayout,
            HeaderNav,
            FootSet
        }
    }
</script>