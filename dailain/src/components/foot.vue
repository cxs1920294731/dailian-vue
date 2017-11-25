<template>
    <div class="footer-set">
        <div class="text-center ad-title">
            <h5 class="main-topic">NEWS LETTER</h5>
            <h6 class="two-topic">Get our latest deal notification by email</h6>
        </div>
        <div class="email-submit">
            <input type="text" class="footer-search" placeholder="Enter Your E-mail" v-model="email">
            <span class="btn-submit" @click="subscribe">SUBMIT</span>
            <p class="email-validation" v-if="!isEmailValid">
                <span class="arrow-red"></span>
                <span>Please enter a valid mailbox</span>
            </p>
        </div>
        <div class="artice-box">
            <div class="bot-pad">LIKE US</div>
            <div>
                <a href="http://www.facebook.com/taotronics"><span class="logo-footer-1 logo"></span></a>
                <a href="https://twitter.com/TaoTronics"><span class="logo-footer-2 logo"></span></a>
                <a href="https://www.youtube.com/channel/UCOACOUc8D0VA_J7yzu0xx4g"><span
                        class="logo-footer-3 logo"></span></a>
                <!--<a href="#"> <span class="logo-footer-4 logo"></span></a>-->
            </div>
        </div>
        <div class="artice-box">
            <ul class="foot-nav text-center row">
                <li>
                    <router-link :to="{name: 'privacy_policy'}">
                        Privacy Policy
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'app_privacy_policy'}">
                        App Privacy Policy
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'terms_conditions'}">
                        Terms And Condtions
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'about_us'}">
                        Our Company
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="artice-box text-center is-relative">
            <div class="country-choice">
                <ul class="country-choice-li">
                    <li v-for="item in langsList">
                        <span class="icon-contry">
                            <img class="img" :src="item.nationalFlag" alt="">
                        </span>
                        <span class="country-name">{{item.langName}}</span>
                    </li>
                </ul>
                <span class="arrow-white"></span>
            </div>
            <div class="select-contry">
               <span @click="showContry" class="icon-contry">
                   <img src="/assets/images/icon-us.png" alt="">
               </span>
                <span @click="showContry" class="conutry-name">United States</span>
            </div>
        </div>
        <div class="foot-bottom text-center">
            <span class="scale">&copy;SUNVALLEYTEK INTERNATIONAL. INC</span>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                email: '',
                isEmailValid: true,
                langsList: []
            }
        },
        props: [],
        mounted: function () {
            var self = this;
            self.getLangs();
        },
        methods: {
            subscribe: function () {
                var self = this;
                if(!self.checkMail()){
                    layer.open({
                        content: 'Please enter a valid mailbox'
                        ,skin: 'msg'
                        ,time: 2
                    });
                    return false;
                }
                Util.post2(this, {
                    api: '/user/subscribe?brand='+ Config.BRAND + '&lang=' + Config.LANG + '&accessToken='+Util.getAccessToken2()+'&timeStamp='+Util.getTimeStamp()+'&clientType=' + Config.CLIENT_TYPE,
                    data: {"userMail": self.email}
                }).then((res) => {
                    if(res.code == 200){
                        layer.open({
                            content: 'Subscribe success'
                            ,skin: 'msg'
                            ,time: 2
                        });
                        setTimeout(function(){
                            self.email = '';
                        },2000)
                    }else {
                        layer.open({
                            content: res.msg
                            ,skin: 'msg'
                            ,time: 2
                        });
                    }
                });
            },
            checkMail: function(){
                var self = this;
                var reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                if(reg.test(self.email)){
                    return true;
                }else {
                    return false;
                }
            },
            getLangs: function(){
                var self = this;
                Util.post2(this, {
                    api: '/langs?brand='+ Config.BRAND + '&lang='+ Config.LANG +'&clientType=' + Config.CLIENT_TYPE,
                    data: {}
                }).then((res) => {
                    this.$set(this, 'langsList', res.data);
                    self.initLangs();
                });
            },
            initLangs: function(){
                setTimeout(function(){
                    var img_country = $('.footer-set .select-contry img');
                    var name_country = $('.footer-set .select-contry .conutry-name');
                    var choice_box = $('.footer-set .country-choice');
                    $('body').on('click','.footer-set .country-choice li', function () {
                        var img_src = $(this).find('.icon-contry .img')[0].src;
                        var text = $(this).children('.country-name').text();
                        img_country.attr('src',img_src);
                        name_country.text(text);
                        choice_box.removeClass('show');
                    })
                },0)
            },
            showContry:function () {
                var img_country = $('.footer-set .select-contry img');
                var name_country = $('.footer-set .select-contry .conutry-name');
                var choice_box = $('.footer-set .country-choice');
                if (choice_box.hasClass('show')){
                    choice_box.removeClass('show');
                }else {
                    choice_box.addClass('show');
                }
            },
        },
        components: {}
    }
</script>

