<template>
    <main-layout>
        <header-nav header-title="bluetooth-transmitter-help-guide" header-type="3"></header-nav>
        <div class="main-contain login-register set-pwd">
            <h4 class="user-email">Email Address: {{email}}</h4>
            <form action="post" id="setPwd">
                <div class="row input-col col-two">
                    <span class="inpur-name">New password</span>
                    <input v-model="userPwd" class="password" id="password" type="password" name="password" placeholder="6-15 character in length">
                    <a @click="showPwd($event)" v-if="showPass" class="icon-show-pass">
                        <span  class="icon-form-vis hidden"></span>
                    </a>
                </div>
                <div class="row input-col col-two ver-code">
                    <span class="inpur-name">Verification Code</span>
                    <input v-model="verifyCode"  class="verCode"  type="text" name="verCode" placeholder="123456">
                    <span v-if="!resend" class="box-num resend">{{time}}</span>
                    <span v-if="resend" @click="resendFun" class="box-num resend gray">resend</span>
                </div>
                <div class="row bnt-follow">
                    <span class="is-left">*Enter verification code from your email</span>
                </div>
                <input type="submit" class="btn bnt-black text-center" value="Save">
            </form>
        </div>
    </main-layout>
</template>
<script>
    import MainLayout from '../layouts/main.vue';
    import HeaderNav from '../components/headnav.vue';
    export default {
        data () {
            return {
                email:'',
                time:300,
                resend:false,
                verifyCode:'',
                userPwd:'',
                useType:'2',
                showPass:false
            }
        },
        props: {},
        mounted: function () {
            var self = this;
            self.setVertime();
            self.email = self.$route.query.email;

            if(Util.getSession('login')){
                self.useType = 1;
            }
            $('#setPwd').validate({
                rules:{
                    verCode:{
                        required:true,
                    },
                    password:{
                        required:true,
                        minlength:6,
                        maxlength:15
                    }
                },
                messages:{
                    verCode:{
                        required:"Verification Code must be entered",
                    },
                    password:{
                        required:"Password must be entered",
                        minlength:"Password must contain 6 - 15 characters",
                        maxlength:"Password must contain 6 - 15 characters"
                    }
                },
                submitHandler:function(form){
                    Util.post(this, {
                        api: '/user/pwd/modify?brand='+Config.BRAND +'&lang=en&accessToken='+Util.getAccessToken()+'&timeStamp='+Util.getTimeStamp()+'&clientType='+Config.CLIENT_TYPE,
                        data: {
                            'userMail': self.email,
                            'userPwd':self.userPwd,
                            'verifyCode':self.verifyCode,
                            "useType": 1
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
            setVertime:function () {
                var self=this;
                self.resend=false;
                var inter= setInterval(function () {
                    self.time--;
                    if(self.time<0){
                        clearInterval(inter);
                        self.resend=true;
                        self.time=300;
                    }
                },1000)
            },
            showPwd:function (e) {
                var self = this;
                var html= $('#setPwd .icon-form-vis');
                if (html.hasClass('show')){
                    html.removeClass('show');
                    html.addClass('hidden');
                    $('#setPwd .password').attr('type','password');
                    return;
                }
                if (html.hasClass('hidden')){
                    html.removeClass('hidden');
                    html.addClass('show');
                    $('#setPwd .password').attr('type','text');
                    return;
                }
            },
            resendFun:function () {
                var self =this;
                Util.post(this, {
                    api: '/user/pwd/verifycode?brand='+Config.BRAND +'&lang='+Config.LANG+'&accessToken='+Util.getAccessToken()+'&timeStamp='+Util.getTimeStamp()+'&clientType='+Config.CLIENT_TYPE,
                    data: {
                        'userMail': self.email,
                        'useType': self.useType
                    }
                }).then((res) => {
                    if (res.code == 200){
                        self.resend=false;
                        var inter= setInterval(function () {
                            self.time--;
                            if(self.time<0){
                                clearInterval(inter);
                                self.resend=true;
                                self.time=300;
                            }
                        },1000)
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