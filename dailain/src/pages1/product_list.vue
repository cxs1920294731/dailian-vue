<template>
    <main-layout>
        <header-nav :header-title="categoryName" header-type="2"></header-nav>
        <div class="main-contain product-list-two">
            <ul class="product-list row">
                <li v-for="item in productList">
                    <router-link :to="{name: 'product_details',query:{'urlKey': item.urlKey}}" >
                        <div class="text-center">
                            <i class="img-box">
                                <img :src="item.productImg" alt="">
                            </i>
                        </div>
                        <p class="product-name">
                            {{item.shortName}}
                        </p>
                        <div class="product-color">
                            <span class="color" v-for="titem in item.productColors" :style="{backgroundColor: titem.colorValue}"></span>
                        </div>
                        <div class="product-sp">
                            <span class="star"></span>
                            <!--<span class="price">{{item.unit}}{{item.price}}</span>-->
                        </div>
                    </router-link>
                </li>
            </ul>
            <div class="no-more-reslts text-center">
                <div class="img-box-no" v-if="loading">
                    <img src="assets/images/load-img.jpg" alt="">
                </div>
                <div v-if="!loading">No more results</div>
            </div>
        </div>
    </main-layout>
</template>

<script>

    import MainLayout from '../layouts/main.vue';
    import HeaderNav from '../components/headnav.vue';
    export default {
        data () {
            return {
                productList: [],
                categoryId: this.$route.query.cid,
                categoryName: this.$route.query.cname,
                loading: true,
            }
        },
        props: {},
        mounted: function () {
            var self = this;
            self.getProduct();
        },
        events: {

        },
        methods: {
            getAdvertising:function (sku) {
                $.getScript("//static.criteo.net/js/ld/ld.js", function () {
                    window.criteo_q = window.criteo_q || [];
                    window.criteo_q.push(
                            { event: "setAccount", account: 44967 },
                            { event: "setSiteType", type: "m" },
                            { event: "viewList", item: sku}
                    );
                    if(window.localStorage && window.localStorage.hashedEmail){
                        window.criteo_q.push(
                                { event: "setHashedEmail", email: window.localStorage.hashedEmail }
                        );
                    }
                });
            },
            getProduct: function(){
                var self = this;
                Util.post2(this, {
                    api: '/categorys/'+ self.categoryId +'/products?brand='+ Config.BRAND + '&lang='+ Config.LANG +'&clientType=' + Config.CLIENT_TYPE,
                    data: {}
                }).then((res) => {
                    this.$set(this, 'productList', res.data.products);
                    self.getStar();
                    self.loading = false;
                    var sku=[];
                    for (var i = 0,j=res.data.products.length;(i<j)&&(i<3); i++){
                        sku.push(res.data.products[i].sku);
                    }
                    self.getAdvertising(sku);
                });
            },
            getStar:function () {
                var self = this;
                setTimeout(function () {
                    for(var i = 0 ;i < self.productList.length; i++){
                        $('.product-list-two .product-list .star').eq(i).raty({
                            score:self.productList[i].star,
                            readOnly: true,
                        });
                    }
                },0)

            }
        },
        components: {
            MainLayout,
            HeaderNav,
        }
    }
</script>