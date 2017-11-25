<template>
    <main-layout>
        <header-nav header-title="Forgot Your Password" header-type="3"></header-nav>
        <div class="main-contain forget-password">
            <p class="intro">
                Please enter your email address below. You will receive
                a link to reset your password.
            </p>
            <label class="enter-email">
                <input v-model="email"  class="fordget-email" type="text" placeholder="Email address">
                <!--<span class="icon-form-if"></span>-->
                <div class="intro-faile">Please enter a valid mailbox</div>
            </label>
            <div @click="submit" class="btn-submit text-center">Submit</div>
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
                useType:'2',
                isPost:false,
            }
        },
        props: {},
        mounted: function () {
            var self = this;
            if(Util.getSession('login')){
                self.useType = 1;
            }
        },
        events: {

        },
        methods: {
            verifyEmail: function () {
                var self=this;
                var Regex =  /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                var emial =$('.fordget-email').val();
                if (emial == ""||!Regex.test(emial)){
                    $('.forget-password .icon-form-if').removeClass('true');
                    $('.forget-password .icon-form-if').addClass('false');
                    self.isPost=false;
                }else {
                    $('.forget-password .icon-form-if').removeClass('false');
                    $('.forget-password .icon-form-if').addClass('true');
                    self.isPost=true;
                }
            },
            goPrev:function () {
                this.$router.go(-1);
            },
            submit:function () {
                var self = this;
                var Regex =  /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                if (self.email == ""||!Regex.test(self.email)){
                    $('.forget-password .intro-faile').fadeIn();
                } else {

                    $('.forget-password .intro-faile').fadeOut();
                    Util.post(this, {
                        api: '/user/pwd/verifycode?brand='+Config.BRAND +'&lang='+Config.LANG+'&accessToken='+Util.getAccessToken()+'&timeStamp='+Util.getTimeStamp()+'&clientType='+Config.CLIENT_TYPE,
                        data: {
                            'userMail': self.email,
                            'useType':self.useType
                        }
                    }).then((res) => {
                        if (res.code == 200){
                            self.$router.push({name:'setNewPwd',query: {'email': self.email}});
                        }else {
                            layer.open({
                                content: res.msg
                                ,skin: 'msg'
                                ,time: 2
                                ,className:'fgp-layer'
                            });
                        }
                    });
                }
            },
        },
        components: {
            MainLayout,
            HeaderNav
        }
    }
</script>