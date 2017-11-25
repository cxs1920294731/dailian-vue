<template>
    <main-layout>
        <header-nav header-title="Taotronics Log In" header-type="3"></header-nav>
        <div class="main-contain login-register" id="login">
            <form action="" id="loginForm" @submit.prevent="login">
                <fieldset>
                    <div class="row input-col col-fir">
                        <span class="inpur-name">Email</span>
                        <input v-model="userMail" @change="verifyEmail" class="email" id="email" type="text" placeholder="Email address" name="email">
                        <span class="icon-form-if"></span>
                    </div>
                    <div class="row input-col col-two">
                        <span class="inpur-name">Password</span>
                        <input v-model="userPwd" class="password" id="password" type="password" name="password" placeholder="6-15 characters in length">
                        <a v-if="showPass" class="icon-show-pass">
                            <span  class="icon-form-vis hidden"></span>
                        </a>
                    </div>
                    <input class="btn bnt-black text-center" type="submit" value="Log In">
                </fieldset>
            </form>
            <div class="row bnt-follow">
                <span class="is-left"><router-link :to="{name: 'register'}">Register Now</router-link></span>
                <span class="is-right"><router-link :to="{name: 'forgetpwd'}">Can't access your account?</router-link></span>
            </div>
            <div class="other-login text-center ">
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
                userMail:'',
                userPwd:'',
                isPost:false,
                lastName:'lastName',
                firstName:'firstName',
                showPass:false
            }
        },
        props: {},
        mounted: function () {
            var self = this;
            self.gLogin();
            $('#loginForm').validate({
                rules:{
                    email:{
                        required:true,
                        email:true,
                    },
                    password:{
                        required:true,
                        minlength:6,
                        maxlength:15
                    }
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
                    }
                },
                submitHandler:function(form){
                    Util.post(this, {
                        api: '/user/signin?brand='+Config.BRAND +'&lang='+Config.LANG+'&accessToken='+Util.getAccessToken()+'&timeStamp='+Util.getTimeStamp()+'&clientType='+Config.CLIENT_TYPE,
                        data: {
                            'userMail': self.userMail,
                            'userPwd':self.userPwd
                        }
                    }).then((res) => {
                        if (res.code == 200){
                            Util.setStoreExp('accessToken',res.data.accessToken);
                            layer.open({
                                content: '<div class="layer-style"> <i class="img-box-success"></i> <span>Successfully registered</span> </div>'
                                ,time: 2,
                                skin:'login',
                                end:function () {
                                    self.goIndex(res.data.userMail);
                                }
                            });

                        }else {

                            layer.open({
                                content: '<div class="layer-style"> <i class="img-box-fail"></i> <span>'+res.msg+'</span> </div>'
                                ,time: 2,
                                skin:'login',
                                end:function () {
                                    self.goIndex(res.data.userMail);
                                }
                            });
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
            startApp:function () {
            },
            verifyEmail: function () {
                var self=this;
                var Regex =  /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                var emial =$('#login .email').val();
                if (emial == ""||!Regex.test(emial)){
                    $('#login .icon-form-if').removeClass('true');
                    $('#login .icon-form-if').addClass('false');
                    self.isPost=false;
                }else {
                    $('#login .icon-form-if').removeClass('false');
                    $('#login .icon-form-if').addClass('true');
                    self.isPost=true;
                }
            },
            login: function(){
                var self = this;
                self.verifyEmail();
            },
            goIndex:function (email) {
                Util.setSession('login',true);
                Util.setSession('email',email);
                this.$router.push({name:'index'})
                if(window.localStorage){
                    window.localStorage.hashedEmail = $.md5(this.userMail);
                }
            },
            aLogin:function () {
                var self=this;
                amazon.Login.authorize({ scope : 'profile' }, function (response) {
                    if (response.error){
                        alert('oauth error ' + response.error); return;
                    }
                    amazon.Login.retrieveProfile(response.access_token, function(response)
                    {
                        var profile = response.profile;
                        if (profile.Name){
                            self.lastName = profile.Name;
                        }
                        Util.post(this, {
                            api: '/user/signin?brand='+Config.BRAND +'&lang='+Config.LANG+'&accessToken='+Util.getAccessToken()+'&timeStamp='+Util.getTimeStamp()+'&clientType='+Config.CLIENT_TYPE,
                            data: {
                                'userMail': profile.PrimaryEmail,
                                'loginSource':"amazon",
                                'userFirstName':self.firstName,
                                'userLastName':self.lastName
                            }
                        }).then((res) => {
                            if (res.code == 200){
                                self.goIndex(profile.PrimaryEmail);
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
                var self=this;
                gapi.load('auth2', function() {
                    gapi.auth2.init({
                        client_id: '614317980690-ktopocq227l2tqbg9rjiq8jg249a8lac.apps.googleusercontent.com',
                        cookiepolicy: 'single_host_origin',
                    }).attachClickHandler(document.getElementById('customBtn'), {},
                            function(googleUser) {
                                var profile = googleUser.getBasicProfile();
                                if (profile.wea){
                                    self.firstName = profile.wea;
                                }
                                if (profile.ofa){
                                    self.lastName = profile.ofa;
                                }
                                Util.post(this, {
                                    api: '/user/signin?brand='+Config.BRAND +'&lang='+Config.LANG+'&accessToken='+Util.getAccessToken()+'&timeStamp='+Util.getTimeStamp()+'&clientType='+Config.CLIENT_TYPE,
                                    data: {
                                        'userMail': profile.getEmail(),
                                        'loginSource':"google",
                                        'userFirstName':self.firstName,
                                        'userLastName':self.lastName
                                    }
                                }).then((res) => {
                                    if (res.code == 200){
                                        self.goIndex(profile.getEmail());
                                    }else {
                                        layer.open({
                                            content: res.msg
                                            ,skin: 'msg'
                                            ,time: 2
                                        });
                                    }
                                });
                            }, function(error) {
                               // alert(JSON.stringify(error, undefined, 2));
                            });
                });
            },
            fLogin:function () {
                FB.login(function(response) {
                    FB.getLoginStatus(function(response) {
                        if (response.status === 'connected') {
                            FB.api('/me?fields=name,email,first_name,last_name', function(response1) {
                                if (response1.first_name){
                                    self.firstName = response1.first_name;
                                }
                                if (response1.last_name){
                                    self.lastName = response1.last_name;
                                }
                                Util.post(this, {
                                    api: '/user/signin?brand='+Config.BRAND +'&lang='+Config.LANG+'&accessToken='+Util.getAccessToken()+'&timeStamp='+Util.getTimeStamp()+'&clientType='+Config.CLIENT_TYPE,
                                    data: {
                                        'userMail': response1.email,
                                        'loginSource':"facebook",
                                        'userFirstName':self.firstName,
                                        'userLastName':self.lastName
                                    }
                                }).then((res) => {
                                    if (res.code == 200){
                                        self.goIndex(profile.getEmail());
                                    }else {
                                        layer.open({
                                            content: res.msg
                                            ,skin: 'msg'
                                            ,time: 2
                                        });
                                    }
                                });
                            });
                        } else {
                            // The person is not logged into your app or we are unable to tell.
                        }
                    });
                }, {scope: 'public_profile,email'});
            }
        },
        components: {
            MainLayout,
            HeaderNav
        }
    }
</script>