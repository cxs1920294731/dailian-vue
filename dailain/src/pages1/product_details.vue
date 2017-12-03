<template>
    <div>
        <header-nav :header-title="productInfo.shortName" header-type="1"></header-nav>
        <span class="btn-to-top" @click="toTop"></span>
        <div class="main-contain product-detail">
            <div class="swiper-box">
                <div class="swiper-container swiper-product-detial">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide text-center" v-for="item in productInfo.productImages">
                            <a :href="item.VideoUrl" v-if="item.videoFlag" class="a">
                                <div class="img-box">
                                    <img :src="item.smallImgUrl" alt="">
                                </div>
                            </a>
                            <a href="javascript:" v-if="!item.videoFlag" class="a">
                                <div class="img-box">
                                    <img :src="item.smallImgUrl" alt="">
                                </div>
                            </a>
                        </li>
                    </ul>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="product-col product-buy">
                <div class="pad-btn-p">
                    {{productInfo.productName}}
                </div>
                <div class="pad-btn-p">
                    <div class="product-star-box">
                        <span class="pad-lr text-bottom font-0 star" id="star-sum"></span>
                        <span class="text-bottom num" v-if="productInfo.amzReviews > 0"> (<span>{{productInfo.amzReviews}}</span> Reviews)</span>
                    </div>
                    <div v-if="productInfo.productPlatforms && productInfo.productPlatforms.length > 0">
                        <div class="price pad-left" v-for="item in productInfo.productPlatforms[platFormIndex].platList">Price&nbsp;:
                            <span class="how-price"> {{item.unit}}{{item.price}}</span>
                        </div>
                    </div>
                </div>
                <!--<div class="pad-btn-p" v-for="item in productInfo.productPlatforms[platFormIndex].platList">-->
                    <!--<a :href="item.platformUrl + '/dp/'+ item.asin" class="btn btn-to-amazon">-->
                        <!--<span  class="z-index">{{item.platformBuy}}</span>-->
                        <!--<span class="four-side"></span>-->
                    <!--</a>-->
                    <!--<span class="price pad-left">Price:-->
                        <!--<span class="how-price"> {{item.unit}}{{item.price}}</span>-->
                    <!--</span>-->
                <!--</div>-->
                <p class="topic-pad" v-if="productInfo.productColors">Color</p>
                <div class="pad-btn-p row select-color">
                    <router-link :to="{name: 'product_details',query:{'urlKey': item.urlKey}}" replace  v-for="(item,index) in productInfo.productColors">
                        <label>
                            <input type="radio" name="color" :value="item.colorName" :checked="item.checked" hidden>
                            <span class="color-box">
                                <span class="color" :style="{'backgroundColor': item.colorValue}"></span>
                            </span>
                        </label>
                    </router-link>
                </div>
                <div v-if="productInfo.productPlatforms && productInfo.productPlatforms.length > 0">
                    <p class="topic-pad">Choose your country</p>
                    <div class="pad-btn-p select-contry-buy">
                        <label v-for="(item,index) in productInfo.productPlatforms">
                            <input type="radio" name="country" value="item.countryName" :checked="index == platFormIndex" hidden @change="changePlatFormIndex(index)">
                            <span class="choice" :class="{'pad-left': index > 0}">{{item.countryName}}</span>
                        </label>
                    </div>
                </div>
                <div v-if="productInfo.productPlatforms && productInfo.productPlatforms.length > 0">
                    <div class="pad-btn-p" v-for="item in productInfo.productPlatforms[platFormIndex].platList">
                        <a :href="item.platformUrl + '/dp/'+ item.asin+'?tag='+item.platformTag" class="btn btn-to-amazon"  target="_blank" @click="getAdvertising">
                            <span  class="z-index">{{item.platformBuy}}</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="product-col product-intro" v-if="productInfo.amzBulletPoints && productInfo.amzBulletPoints.length > 0">
                <ul class="style">
                    <li v-for="item in productInfo.amzBulletPoints">
                        {{item}}
                    </li>
                </ul>
            </div>
            <div class="product-col product-rod">
                <div class="nav row">
                    <span class="col review" v-if="productInfo.productReviews && productInfo.productReviews.total > 0">Review</span>
                    <span class="col overvoew"> Overview</span>
                    <span class="col download" v-if="productInfo.productDownloads">Download</span>
                </div>
                <div class="swiper-container swiper-product-rod">
                    <ul class="swiper-wrapper">
                        <li  class="swiper-slide review-text" v-if="productInfo.productReviews && productInfo.productReviews.total > 0">
                            <div class="topic">
                                <span class="topic-h ">Review</span>
                                <span class="pad-lr text-bottom font-0" id="star-1"></span>
                                <span class="text-bottom">(<span>{{productInfo.star}}</span> score)</span>
                            </div>
                            <ul class="message">
                                <li v-for="(item,index) in productInfo.productReviews.rows" v-if="index < 5">
                                    <div class="col-one">
                                        <span>{{item.reviewTitle}}</span>
                                        <span class="font-0 start-message-1"></span>
                                        <span>(<span>{{item.star}}</span> score)</span>
                                    </div>
                                    <div class="col-two">by
                                        <span class="pad-r color-39">{{item.reviewUser}}</span>
                                        on<span> {{item.reviewDate == ''? item.formatDate : item.reviewDate}}</span>
                                    </div>
                                    <div class="artice">
                                        {{item.reviewContent}}
                                        <span class="arrow"></span>
                                    </div>
                                </li>
                            </ul>
                            <div v-if="productInfo.productPlatforms && productInfo.productPlatforms.length > 0" class="color-39 more">
                                <a :href="'https://www.amazon.cn/product-reviews/'+ productInfo.productPlatforms[0].asin">More Reviws >></a>
                            </div>
                        </li>
                        <li class="swiper-slide overivew-text">
                            <h5 class="topic-pad">Specifications</h5>
                            <ul class="Specifications">
                                <li class="row" v-for="item in productInfo.productSpecs">
                                    <span class="is-left">{{item.specsName}}</span>
                                    <span class="is-right">{{item.specsValue}}</span>
                                </li>
                            </ul>
                            <h5 class="topic-pad">Overview</h5>
                            <div class="description" v-html="productInfo.description"></div>
                        </li>
                        <li class="swiper-slide download-text"  v-if="productInfo.productDownloads">
                            <ul>
                                <li v-for="(item,index) in productInfo.productDownloads">
                                    <div class="download-top">
                                        <span class="icon-down icon-one" :class="{'icon-one': (item.fileType == 'rar' || item.fileType == 'zip'), 'icon-two': item.fileType == 'pdf'}"></span>
                                        <a :href="item.filePath">{{item.fileName}}</a>
                                    </div>
                                    <div class="download-bott">
                                        <input type="text" name="email" placeholder="Enter Your E-mail">
                                        <span class="btn-submit" @click="downloadFile(item.id,index)"> Send to Email</span>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div v-if="productInfo.productPlatforms && productInfo.productPlatforms.length > 0">
                    <div class="pad-btn-p buy-more" v-for="item in productInfo.productPlatforms[platFormIndex].platList">
                        <a :href="item.platformUrl + '/dp/'+ item.asin+'?tag='+item.platformTag" class="btn btn-to-amazon"  target="_blank" @click="getAdvertising">
                            <span  class="z-index">{{item.platformBuy}}</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="product-col product-recommend" v-if="productInfo.productRelated && productInfo.productRelated.length > 0">
                <h5>You may also like</h5>
                <div class="swiper-container swiper-product-recommend">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide text-center" v-for="item in productInfo.productRelated">
                            <a :href="item.platformUrl">
                                <div class="img-box">
                                    <img :src="item.imgUrl" alt="">
                                </div>
                                <p class="text">
                                    {{item.productName}}
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <foot-set></foot-set>
        </div>
    </div>
</template>
<script>

    import MainLayout from '../layouts/main.vue';
    import HeaderNav from '../components/headnav.vue';
    import FootSet from '../components/foot.vue';
    export default {
        data () {
            return {
                urlKey: this.$route.query.urlKey,
                productInfo: {},
                platFormIndex: 0,
                sku:''
            }
        },
        props: {},
        watch: {
            '$route': 'getProduct'
        },
        mounted: function () {
            var self = this;
            self.getProduct();
        },
        events: {
        },
        methods: {
            toTop:function () {
                $('html,body').animate({
                    scrollTop:'0px'
                })
            },
            getAdvertising:function () {
                // bing
                var self =this;
                var price='';
                console.log(self.productInfo.productPlatforms);
                if (self.productInfo.productPlatforms){
                    price=self.productInfo.productPlatforms[self.platFormIndex].platList[0].price;
                }
                window.uetq = window.uetq || [];
                window.uetq.push ({ 'ec':'Amazon Shopping', 'ea':'Click', 'el':'Buy at Amazon', 'ev':'5' });
                window.dotq = window.dotq || []; window.dotq.push({'projectId': '10000','properties': {'pixelId': '10028788','qstrings': {'et': 'custom','ec': 'Amazon Shopping','ea':'Click','el':'Buy at Amazon','ev':'1','gv':'1'}}});
                window.criteo_q.push(
                        { event: "trackTransaction" , id: getTimeAndRandom(), item: [{ id: self.sku, price: price, quantity: 1 }]}
                );
            },
            getProduct: function(){
                var self = this;
                self.urlKey = self.$route.query.urlKey;
                Util.post2(this, {
                    api: '/products/'+ self.urlKey +'?brand='+ Config.BRAND + '&lang='+ Config.LANG +'&clientType=' + Config.CLIENT_TYPE,
                    data: {}
                }).then((res) => {
                    this.$set(this, 'productInfo', res.data)
                    self.sku = res.data.sku;
                    console.log(res.data);
                    $.getScript("//static.criteo.net/js/ld/ld.js",function () {
                        window.criteo_q = window.criteo_q || [];
                        window.criteo_q.push(
                                { event: "setAccount", account: 44967 },
                                { event: "setSiteType", type: "m" },
                                { event: "viewItem", item: self.sku  }
                        );
                        if(window.localStorage && window.localStorage.hashedEmail){
                            window.criteo_q.push(
                                    { event: "setHashedEmail", email: window.localStorage.hashedEmail }
                            );
                        }
                    });
                    self.initSwiper();
                });
            },
            initSwiper: function(){
                var self = this;
                setTimeout(function(){
                    var mySwiper = new Swiper('.swiper-product-detial',{
                        pagination: '.swiper-pagination',
                    });
                    var mySwiper1 = new Swiper('.swiper-product-recommend',{
                        slidesPerView:3
                    });
                    var myswiper2 = new Swiper('.swiper-product-rod',{
                        autoHeight:true,
                        onInit:function (swiper) {
                        },
                        onSlideChangeEnd:function (swiper) {
                            var array_html=$('.product-detail .product-rod .nav .col');
                            var index= swiper.activeIndex;
                            array_html.removeClass('active');
                            array_html[index].classList.add("active");
                        }
                    });
                    myswiper2.slideTo(1,1);
                    setTimeout(function () {
                        myswiper2.slideTo(0,1);
                    },10);
                    $('.product-detail .product-rod .nav .col').eq(0).addClass('active');
                    $('.product-detail .product-rod .nav .col').click(function () {
                        $(this).addClass('active').siblings().removeClass('active');
                        var index= $('.product-detail .product-rod .nav .col').index($(this));
                        myswiper2.slideTo(index, 1000, false);
                    });
                    $('#star-1').raty({
                        score: self.productInfo.star,
                        readOnly: true,
                    });
                    $('#star-sum').raty({
                        score: self.productInfo.star,
                        readOnly: true,
                    })
                    for(var i = 0 ;i < self.productInfo.productReviews.rows.length; i++){
                        $('.message .start-message-1').eq(i).raty({
                            score:self.productInfo.productReviews.rows[i].star,
                            readOnly: true,
                        });
                    }
                    function init() {
                        var array_Html = $('.message .artice');
                        var arrow = $('.product-detail .message .arrow');
                        for (var i=0;i<array_Html.length;i++){
                            var dwmc=array_Html[i].scrollHeight;
                            if(dwmc>40){
                                array_Html.eq(i).find('.arrow').addClass('under');
                            }
                        }
                    }
                    init();
                    var target_top=20;
                    $('.message .arrow').click(function () {
                        var par = $(this).parent('.artice');
                        if ($(this).hasClass('under')){
                            target_top =  $(document).scrollTop();
                            par.css({
                                height:'auto',
                                overflow:'inherit'
                            });
                            myswiper2.onResize();
                            $(this).removeClass('under');
                            $(this).addClass('up')
                            return;
                        }
                        if($(this).hasClass('up')){
                            par.css({
                                height:'40px',
                                overflow:'hidden'
                            });
                            $(document).scrollTop(target_top)
                            myswiper2.onResize();
                            $(this).removeClass('up');
                            $(this).addClass('under');
                            return;
                        }

                    })
                },0)
            },
            changePlatFormIndex: function(index){
                var self = this;
                self.platFormIndex = index;
            },
            downloadFile: function(fileId,index){
                var self = this;
                var emailEl = $('.download-text li').eq(index).find('input[name=email]');
                var input = emailEl.val();
                if(input == ''){
                    layer.open({
                        content: 'Please enter your email'
                        ,skin: 'msg'
                        ,time: 2
                    });
                    return false;
                }
                var reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                if(!reg.test(input)){
                    layer.open({
                        content: 'Invalid email address'
                        ,skin: 'msg'
                        ,time: 2
                    });
                    return false;
                }
                Util.post2(this, {
                    api: '/products/downloads/sendmail?&brand='+ Config.BRAND + '&lang='+ Config.LANG + '&accessToken=' + Util.getAccessToken2() + '&timeStamp=' + Util.getTimeStamp() + '&clientType=' + Config.CLIENT_TYPE,
                    data: {"downloadId": fileId,"userMail": input}
                }).then((res) => {
                    if(res.code == 200){
                        layer.open({
                            content: 'Send Success!'
                            ,skin: 'msg'
                            ,time: 2
                        });
                        setTimeout(function(){
                            emailEl.val('');
                        },2000)
                    }
                });
            }
        },
        components: {
            MainLayout,
            HeaderNav,
            FootSet
        }
    }
</script>