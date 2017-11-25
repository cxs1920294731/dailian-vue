<template>
    <div>
        <header-nav :header-title="productInfo.shortName" header-type="1"></header-nav>
        <div class="main-contain product-detail support-download">
            <div class="product-col product-rod">
                <div class="text-center download-bg">
                    <router-link :to="{name: 'product_details',query:{'urlKey': productInfo.urlKey}}">
                        <i class="img-box">
                            <img :src="productInfo.productImg" alt="">
                        </i>
                    </router-link>
                </div>
                <ul>
                    <li class="overivew-text">
                        <h6 class="topic">Specifications</h6>
                        <ul class="Specifications">
                            <li class="row" v-for="item in productInfo.productSpecs">
                                <span class="is-left">{{item.specsName}}</span>
                                <span class="is-right">{{item.specsValue}}</span>
                            </li>
                        </ul>
                    </li>
                    <li class=" download-text">
                        <h6 class="topic">
                            Download
                        </h6>
                        <ul>
                            <li v-for="(item,index) in productInfo.productDownloads">
                                <div class="download-top">
                                    <span class="icon-down icon-one"
                                          :class="{'icon-one': (item.fileType == 'rar' || item.fileType == 'zip'), 'icon-two': item.fileType == 'pdf'}"></span>
                                    <a :href="item.filePath">{{item.fileName}}</a>
                                </div>
                                <div class="enter-download download-bott">
                                    <input type="text" name="email" placeholder="Enter Your E-mail">
                                    <span class="btn-submit" @click="downloadFile(item.id,index)"> Send to Email</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
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
            }
        },
        props: {},
        mounted: function () {
            var self = this;
            self.getProduct();
        },
        events: {},
        methods: {
            getProduct: function () {
                var self = this;
                Util.post2(this, {
                    api: '/products/' + self.urlKey + '/downloads?&brand=' + Config.BRAND + '&lang=' + Config.LANG + '&clientType=' + Config.CLIENT_TYPE,
                    data: {}
                }).then((res) => {
                    this.$set(this, 'productInfo', res.data);
                });
            },
            downloadFile: function (fileId, index) {
                var self = this;
                var emailEl = $('.download-text li').eq(index).find('input[name=email]');
                var input = emailEl.val();
                if (input == '') {
                    layer.open({
                        content: 'Please enter your email'
                        , skin: 'msg'
                        , time: 2
                    });
                    return false;
                }
                var reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                if (!reg.test(input)) {
                    layer.open({
                        content: 'Invalid email address'
                        , skin: 'msg'
                        , time: 2
                    });
                    return false;
                }
                Util.post2(this, {
                    api: '/products/downloads/sendmail?&brand=' + Config.BRAND + '&lang=' + Config.LANG + '&accessToken=' + Util.getAccessToken2() + '&timeStamp=' + Util.getTimeStamp() + '&clientType=' + Config.CLIENT_TYPE,
                    data: {"downloadId": fileId, "userMail": input}
                }).then((res) => {
                    if(res.code == 200){
                        layer.open({
                            content: 'Send Success!'
                            , skin: 'msg'
                            , time: 2
                        });
                        setTimeout(function () {
                            emailEl.val('');
                        }, 2000)
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