<template>
    <main-layout>
        <header-nav header-title="Giveaway" header-type="2"></header-nav>
        <div v-if="step == 1">
            <div class="main-contain giweaway-step1">
                <h6 class="text-center topic-up">{{campaignDesc}}</h6>
                <div class="is-relative bg-img-step1 text-center">
                    <a :href="productList.productLink">
                        <i class="img-box">
                            <img :src="productList.productImg" :alt="productList.productName" alt="">
                        </i>
                        <span class="end-time">End On <span class="num">{{timeLeft}}</span> Days</span>
                        <span class="price">{{unit}}{{productList.newPrice}}</span>
                    </a>
                </div>
                <div class="topic-intro" v-html="productList.description">
                </div>
                <h5 class="step-name is-color">Step 1</h5>
                <div class="btn-box row">
                    <router-link class="btn" :to="{name: 'login'}">Log In</router-link>
                    <router-link class="btn" :to="{name: 'register'}">Register</router-link>
                </div>
                <div class="provious-winer">
                    <p class="left">
                        Previous Winners of the TaoTronics <span>***</span>product:
                    </p>
                    <ul class="right">
                        <li>****@gmail.com</li>
                        <li>****@gmail.com</li>
                    </ul>
                </div>
                <div class="faq-link is-color">
                    <router-link :to="{name: 'faqrules'}">TaoTronics Giveaway FAQ & Rules</router-link>
                </div>
            </div>
        </div>
        <div v-if="step == 2">
            <div class="main-contain giweaway-step1">
                <h6 class="text-center topic-up">{{campaignDesc}}</h6>
                <div class="is-relative bg-img-step1 text-center">
                    <a :href="productList.productLink">
                        <i class="img-box">
                            <img :src="productList.productImg" :alt="productList.productName" alt="">
                        </i>
                        <span class="end-time">End On <span class="num">{{timeLeft}}</span> Days</span>
                        <span class="price">{{unit}}{{productList.newPrice}}</span>
                    </a>
                </div>
                <div class="topic-intro" v-html="productList.description">
                </div>
                <h5 class="step-name step-name-t2 is-color">Step 2</h5>
                <p class="email-info text-center">{{email}}</p>
                <div class="btn-box row">
                    <span class="btn btn-step-2" @click="next">Next</span>
                </div>
                <div class="provious-winer">
                    <p class="left">
                        Previous Winners of the TaoTronics <span>***</span>product:
                    </p>
                    <ul class="right">
                        <li>****@gmail.com</li>
                        <li>****@gmail.com</li>
                    </ul>
                </div>
                <div class="faq-link is-color">
                    <router-link :to="{name: 'faqrules'}">TaoTronics Giveaway FAQ & Rules</router-link>
                </div>
                <!--<ul class="row text-center share">-->
                    <!--<li class="facebook link">-->
                        <!--<a  target="_blank"  onclick="javascript:window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(location.href)+'&t='+encodeURIComponent(document.title), 'newWindow', 'width=800, height=400','center');void(0);" class="f"></a>-->
                    <!--</li>-->
                    <!--<li class="twitter center link">-->
                        <!--<a href="javascript: void(window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(document.title)) .concat(' ') .concat(encodeURIComponent(location.href))));" class="t"></a>-->
                    <!--</li>-->
                    <!--<li class="google link">-->
                        <!--<a target="_blank" href="javascript: void(window.open('http://www.google.com/bookmarks/mark?op=add&bkmk='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title)))"  class="g"></a>-->
                    <!--</li>-->
                <!--</ul>-->
            </div>
        </div>
        <div v-if="step == 3">
            <div class="main-contain giweaway-step1">
                <h6 class="text-center topic-up">{{campaignDesc}}</h6>
                <div class="is-relative bg-img-step1 text-center">
                    <a :href="productList.productLink">
                        <i class="img-box">
                            <img :src="productList.productImg" :alt="productList.productName" alt="">
                        </i>
                        <span class="end-time">End On <span class="num">{{timeLeft}}</span> Days</span>
                        <span class="price">{{unit}}{{productList.newPrice}}</span>
                    </a>
                </div>
                <div class="topic-intro" v-html="productList.description">
                </div>
                <h5 class="step-name step-name-t3 is-color">Success!</h5>
                <p class="email-info text-center">{{email}}</p>
                <div class="provious-winer">
                    <p class="left">
                        Previous Winners of the TaoTronics <span>***</span>product:
                    </p>
                    <ul class="right">
                        <li>****@gmail.com</li>
                        <li>****@gmail.com</li>
                    </ul>
                </div>
                <div class="faq-link is-color">
                    <router-link :to="{name: 'faqrules'}">TaoTronics Giveaway FAQ & Rules</router-link>
                </div>
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
                unit:'$',
                campaignDesc:'',
                productList:[],
                step:1,
                timeLeft:'',
                email:'',
                campaignId:'',
                dealId:''
            }
        },
        props: {},
        mounted: function () {
            var self = this;
            self.getGiveAway();
            if (Util.getSession('login')){
                self.step = 2;
            }
            self.email = Util.getSession('email');
        },
        events: {

        },
        methods: {
            next:function () {
                this.step = 3;
                this.getinGive();
            },
            getinGive:function () {
                var self = this;
                Util.post2(this, {
                    api: '/campaign/giveaway/participate?brand='+ Config.BRAND + '&lang='+ Config.LANG +'&accessToken='+Util.getAccessToken2()+'&timeStamp='+Util.getTimeStamp()+'&clientType=' + Config.CLIENT_TYPE,
                    data: {
                        "campaignId": self.campaignId,
                        "dealId":self.productList.campaignProductId,
                        "userMail": self.email,
                    }
                }).then((res) => {
                });
            },
            getGiveAway:function () {
                var self = this;
                Util.post2(this, {
                    api: '/campaign/giveaway?brand='+ Config.BRAND + '&lang='+ Config.LANG +'&clientType=' + Config.CLIENT_TYPE,
                    data: {}
                }).then((res) => {
                    if (res.campaignId){
                        self.campaignId = res.campaignId;
                    }
                    self.unit = res.data.unit;
                    self.campaignDesc = res.data.campaignDesc;
                    self.productList = res.data.campaignProductList[0];
                    var endTime = new Date(Date.parse(res.data.endDate.replace(/-/g,   "/"))).getTime();
                    var currentTime = new Date();
                    var startTime = Date.parse(currentTime);
                    var dates =Math.floor(Math.abs((startTime - endTime))/(1000*60*60*24)+1);
                    self.timeLeft = dates;
                });
            },
        },
        components: {
            MainLayout,
            HeaderNav
        }
    }
</script>