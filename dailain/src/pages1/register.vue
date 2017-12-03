<template>
    <main-layout>
        <header-nav header-title="TaoTronics Register" header-type="3"></header-nav>
        <div class="main-contain login-register register">
            <form id="register" @submit.prevent="register">
                <div class="row input-col col-fir">
                    <span class="inpur-name">Email</span>
                    <input v-model="userMail" @change="verifyEmail" id="email" class="email" type="text" placeholder="Email address" name="email">
                    <span class="icon-form-if"></span>
                </div>
                <div class="row input-col col-two">
                    <span class="inpur-name">Password</span>
                    <input v-model="userPwd" id="password" class="password" type="password" name="password" placeholder="6-15 characters in length">
                    <a v-if="showPass" class="icon-show-pass">
                        <span  class="icon-form-vis hidden"></span>
                    </a>
                </div>
                <div class="row input-col col-thr">
                    <span class="inpur-name">Country</span>
                    <input class="country" v-model="country" type="text" name="country" placeholder="United States" hidden>
                    <span @click="showCountry" class="input-contry placeholder">United States</span>
                    <a @click="showCountry" class="icon-arrow-box">
                        <span  class="icon-form-arrow"></span>
                    </a>
                </div>
                <div class="backgound-gray">
                    <div class="select-choice">
                        <h6 class="topic">Country</h6>
                        <ul>
                            <li v-for="(item,index) in showCountryList" @click="selectCountry($event,item)" :class="{'active' : index == 0 }">
                                {{item.countryName}}
                                <span class="checked"></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row agreement ad">
                    <label>
                        <input id="agreement" class="pad-left" type="checkbox" name="agreement" checked>
                        <p>Subscribe to the Sunvalleytek Newsletter on RAVPower, HooToo, TaoTronics, and Sable products.</p>
                    </label>
                </div>
                <div class="validation-code">
                    <div class="g-recaptcha" id="recaptcha"></div>
                </div>
                <input type="submit" class="btn bnt-black text-center" value="Create Account">
            </form>
            <div class="row bnt-follow">
                <span class="is-left"><span class="font-color">Already registered, </span><router-link :to="{name: 'login'}">Log in here</router-link></span>
            </div>
            <div class="other-login text-center">
                <h5>Other Login</h5>
                <div class="login-logo-box">
                    <span @click="fLogin" class="logo-facebook"></span>
                    <span id="customBtn" class="logo-google logo-center"></span>
                    <span @click="aLogin" class="logo-amazon"></span>
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
                courseList:[],
                showCountryList:[],
                country:'',
                userMail:'',
                userPwd:'',
                countryCode:'US',
                verifyCode:'',
                type: this.$route.query.type,
                showPass:false,
            }
        },
        props: {},
        mounted: function () {
            var self = this;
            self.getCountry();
            self.initReCaptcha();
            var data={};
            $('#register').validate({
                rules:{
                    email:{
                        required:true,
                        email:true,
                    },
                    password:{
                        required:true,
                        minlength:6,
                        maxlength:15
                    },
                    agreement:'required'
                },
                messages:{
                    email:{
                        required:"Email address must be entered",
                        email:"Invalid email address",
                    },
                    password:{
                        required:"Password must be entered",
                        minlength:"Password must contain 6 - 15 characters",
                        maxlength:"Password must contain 6 - 15 characters"
                    },
                    agreement:'Please accept our statement'
                },
                submitHandler:function(form){
                    if (self.verifyCode == ""){
                        return;
                    }
                    if (self.type == 1){
                        data={
                            'userMail':self.userMail,
                            'userPwd':self.userPwd,
                            'countryCode':self.countryCode,
                            'verifyCode':self.verifyCode,
                            'registerSource':2,
                            'amzPrime':1,
                            "orderNo":"113-8126026-3374628"
                        }
                    }else {
                        data={
                                    'userMail':self.userMail,
                                    'userPwd':self.userPwd,
                                    'countryCode':self.countryCode,
                                    'verifyCode':self.verifyCode,
                                    'registerSource':1,
                                    'amzPrime':1
                        }
                    }
                    Util.post(this, {
                        api:'/user/register?brand='+Config.BRAND+'&lang='+Config.LANG+'&accessToken='+Util.getAccessToken()+'&timeStamp='+Util.getTimeStamp()+'&clientType='+Config.CLIENT_TYPE,
                        data: data
                    }).then((res) => {
                        if (res.code == 200){
                            $.ajax({
                                type : "POST",
                                url : "http://customer.sunvalleytek.com/noaccount/login",
                                dataType : "jsonp",
                                jsonp:'callback',
                                data:{
                                    'email': self.userMail,
                                    'password':self.userPwd
                                },
                                success: function(data){
                                    if(self.type == 1){
                                        window.location.replace("http://customer.sunvalleytek.com/account/warranty");
                                    }else {
                                        window.location.replace("https://customer.sunvalleytek.com/account/welcome");
                                    }
                                },
                                beforeSend : function(XMLHttpRequest) {
                                },
                                complete : function(XMLHttpRequest, textStatus) {
                                }
                            });
                        } else{
                            layer.open({
                                content: res.msg
                                ,skin: 'msg'
                                ,time: 2
                            })
                        }
                    });
                }
            });
        },
        events: {
        },
        watch:{
            'userPwd':function (val) {
                var self = this;
                if (val == ''){
                    self.showPass=false;
                }else {
                    self.showPass=true;
                }
            }
        },
        methods: {
            initReCaptcha:function () {
                var self = this;
                setTimeout(function() {
                    if(typeof grecaptcha === 'undefined') {
                        self.initReCaptcha();
                    }
                    else {
                        grecaptcha.render('recaptcha', {
                            sitekey: '6LcZ5jQUAAAAAPo72pOpwU74spie20IDHqaSvLJN',
                            badge: 'inline',
                            callback: self.verCallback
                        });
                    }
                }, 100);
            },
            verCallback:function () {
                var self = this;
                if (self.type == 1){
                    self.verifyCode = 'test_reg';
                }else {
                    self.verifyCode = 'test';
                }
            },
            register:function () {
                var self = this;
            },
            verifyEmail: function () {
                var self=this;
                var Regex =  /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                var emial =$('#register .email').val();
                if (emial == ""||!Regex.test(emial)){
                    $('#register .icon-form-if').removeClass('true');
                    $('#register .icon-form-if').addClass('false');
                    self.isPost=false;
                }else {
                    $('#register .icon-form-if').removeClass('false');
                    $('#register .icon-form-if').addClass('true');
                    self.isPost=true;
                }
            },
            getCountry:function () {
                var self = this;
                Util.post(this, {
                    api:'/common/countries?accessToken=0&timeStamp='+Util.getTimeStamp()+'&clientType='+Config.CLIENT_TYPE+'&brand='+Config.BRAND+'&lang='+Config.LANG,
                    data: {}
                }).then((res) => {

                    self.courseList = res.data;
                    self.showCountryList =res.data;
                });
            },
            searchCountry:function () {
                var self = this;
                self.showCountryList = [];
                for(var i in self.courseList){
                    if(self.courseList[i].countryName.toLowerCase().indexOf(self.country.toLowerCase())==0){
                        self.showCountryList.push(self.courseList[i]);
                    }
                }
            },
            selectCountry:function (event,mes) {
                var self = this;
                self.countryCode = mes.countryCode;
                self.country = mes.countryName;
                $('.login-register .input-col .input-contry').removeClass('placeholder').text(mes.countryName);
                var html =  $('.login-register .backgound-gray');
                $(event.currentTarget).addClass('active').siblings().removeClass('active');
                html.removeClass('show');
            },
            showCountry:function () {
                var html =  $('.login-register .backgound-gray');
                if (!html.hasClass('show')){
                    html.addClass('show');

                }else {
                    html.removeClass('show');

                }
            },
            aLogin:function () {
                amazon.Login.authorize({ scope : 'profile' }, function (response) {
                    if (response.error){
                        alert('oauth error ' + response.error); return;
                    }
                    amazon.Login.retrieveProfile(response.access_token, function(response)
                    {
                        var profile = response.profile;
                        Util.post(this, {
                            api: '/user/signin?brand='+Config.BRAND +'&lang=en&accessToken='+Util.getAccessToken()+'&timeStamp='+Util.getTimeStamp()+'&clientType='+Config.CLIENT_TYPE,
                            data: {
                                'userMail': profile.PrimaryEmail,
                                'loginSource':"amazon"
                            }
                        }).then((res) => {

                            if (res.code == 200){

                            }else {

                                layer.open({
                                    content: res.msg
                                    ,skin: 'msg'
                                    ,time: 2
                                });
                            }
                        });
                    });
                });
                return false;
            },
            gLogin:function () {
                gapi.load('auth2', function() {
                    // Retrieve the singleton for the GoogleAuth library and set up the client.
                    gapi.auth2.init({
                        client_id: '970401339111-4v90ee138pvu1m3v3robtgt36sv56hcs.apps.googleusercontent.com',
                        cookiepolicy: 'single_host_origin',
                        // Request scopes in addition to 'profile' and 'email'
                        //scope: 'additional_scope'
                    }).attachClickHandler(document.getElementById('customBtn'), {},
                            function(googleUser) {
                                var profile = googleUser.getBasicProfile();
                                Util.post(this, {
                                    api: '/user/signin?brand='+Config.BRAND +'&lang=en&accessToken='+Util.getAccessToken()+'&timeStamp='+Util.getTimeStamp()+'&clientType='+Config.CLIENT_TYPE,
                                    data: {
                                        'userMail': profile.getEmail(),
                                        'loginSource':"google"
                                    }
                                }).then((res) => {

                                    if (res.code == 200){

                                    }else {

                                        layer.open({
                                            content: res.msg
                                            ,skin: 'msg'
                                            ,time: 2
                                        });
                                    }
                                });
                            }, function(error) {
                                alert(JSON.stringify(error, undefined, 2));
                            });
                });
            },
            fLogin:function () {
                FB.login(function(response) {
                    FB.getLoginStatus(function(response) {
                        if (response.status === 'connected') {
                            // Logged into your app and Facebook.
                            testAPI(response.authResponse.userID);
                            FB.api('/me', function(response1) {

                                document.getElementById('status').innerHTML =
                                        'Thanks for logging in, ' + response1.name + '!';
                            });
                            FB.api(response.authResponse.userID, function (response2) {
                                        if (response2 && !response2.error) {

                                        }
                                    }
                            );
                        } else {
                            // The person is not logged into your app or we are unable to tell.
                        }
                    });
                }, {scope: 'public_profile,email'});

                Util.post(this, {
                    api: '/user/signin?brand='+Config.BRAND +'&lang=en&accessToken='+Util.getAccessToken()+'&timeStamp='+Util.getTimeStamp()+'&clientType='+Config.CLIENT_TYPE,
                    data: {
//                        'userMail': self.userMail,
//                        'userPwd':self.userPwd
                    }
                }).then((res) => {
                    if (res.code == 200){

                    }else {

                        layer.open({
                            content: res.msg
                            ,skin: 'msg'
                            ,time: 2
                        });
                    }
                });
            }
        },
        components: {
            MainLayout,
            HeaderNav
        }
    }
</script>