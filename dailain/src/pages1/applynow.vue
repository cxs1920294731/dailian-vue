<template>
    <div>
        <header-nav header-title="Influencer Apply" header-type="3"></header-nav>
        <div class="main-contain apply-now">
            <form action="" id="apply-now">
                <h6 class="text-center channels-title">Please choose one of the channels</h6>
                <div class="text-center">
                    <ul class="row slect-channels">
                        <li class="">
                            <label>
                                <input type="radio" name="channels" value="0" v-model="channels" checked hidden>
                                <span class="logo logo-youtube-apply"></span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="channels" value="1" v-model="channels" hidden>
                                <span class="logo logo-facebook-apply"></span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="channels" value="2" v-model="channels" hidden>
                                <span class="logo logo-blog-apply"></span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="channels" value="3" v-model="channels" hidden>
                                <span class="logo logo-apply-4"></span>
                            </label>
                        </li>
                    </ul>
                </div>
                <ul class="enter-info">
                    <li>
                        <span class="inpur-name">First Name</span>
                        <input v-model="firstname" class="firstName" type="text" name="firstName" placeholder="First Name">
                    </li>
                    <li>
                        <span class="inpur-name">Last Name</span>
                        <input v-model="lastname" class="lastName" type="text" name="lastName" placeholder="Last Name">
                    </li>
                    <li>
                        <span class="inpur-name">Email address</span>
                        <input v-model="email" class="email" type="text" name="email" placeholder="Email address">
                    </li>
                    <li class="is-relative">
                        <div>
                            <span class="inpur-name">Country</span>
                            <input class="country" v-model="country"  type="text" name="country" placeholder="Country"  hidden>
                            <span @click="showCountry" class="input-contry placeholder">Country</span>
                            <a @click="showCountry" class="icon-arrow-box">
                                <span class="arrow-black"></span>
                            </a>
                        </div>
                    </li>
                    <li class="enter-http">
                        <h6>Please enter {{linkName[channels]}} Link <span class="is-red">*</span></h6>
                        <input v-model="facebooklink" class="link" type="text" name="link" placeholder="http://">
                    </li>
                </ul>
                <div class="backgound-gray">
                    <div class="select-choice">
                        <h6 class="topic">Country</h6>
                        <ul >
                            <li v-for="(item,index) in showCountryList" @click="selectCountry($event,item)" :class="{'active' : index == 0 }">
                                {{item.countryName}}
                                <span class="checked"></span>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="choice-title">
                    <p >What's your interested topics and what can can do to help? <span class="is-red">*</span>（multiple choice）</p>
                </div>
                <ul class="select-topic row">
                    <li v-for="item in interestList">
                        <label>
                            <input type="checkbox" name="topic" :value="item.parameterValue" v-model="interestId">
                            <span>{{item.parameterValueDesc}}</span>
                        </label>
                    </li>
                </ul>
                <div class="validation-code">
                    <div class="g-recaptcha" id="recaptcha"></div>
                </div>
                <div class="apply-intro">
                    <p>Taotronics values and respects your privacy.</p>
                    <p>Please read the <router-link :to="{name: 'privacy_policy'}">Privacy Policy</router-link>for more information.</p>
                </div>
                <input type="submit" class="btn-black text-center" value="Apply Now">
            </form>
        </div>
    </div>
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
                email:'',
                countryCode:'',
                verifyCode:'',
                firstname:'',
                lastname:'',
                facebooklink:'',
                interestId:[],
                linkName:['Youtube channel','Facebook','Blog','Forum Profile'],
                interestList:['youtubeChannelLink','facebookProfileLink','blogLink','forumProfileLink'],
                channels:'0',
            }
        },
        props: {},
        mounted: function () {
            var self = this;
            self.getCountry();
            self.getInterests();
            self.initReCaptcha();
            $('#apply-now').validate({
                rules:{
                    firstName:{
                        required:true
                    },
                    lastName:{
                        required:true
                    },
                    country:{
                        required:true,
                    },
                    email:{
                        required:true,
                        email:true,
                    },
                    link:{
                        required:true,
                        url:true
                    },
                    topic:'required'
                },
                messages:{
                    firstName:{
                        required:'First name must be entered'
                    },
                    lastName:{
                        required:'Last name must be entered'
                    },
                    country:{
                        required:'Country must be entered'
                    },
                    email:{
                        required:"Email address must be entered",
                        email:"Invalid email address",
                    },
                    link:{
                        required:'Link must be entered',
                        url:'Invalid link address'
                    },
                    topic:'Please select at least one'
                },
                submitHandler:function(form){
                    if(self.verifyCode ==""){
                        return;
                    }
                    if (self.channels == 0){
                        Util.post(this, {
                            api:'/user/register?brand='+Config.BRAND+'&lang='+Config.LANG+'&accessToken='+Util.getAccessToken()+'&timeStamp='+Util.getTimeStamp()+'&clientType='+Config.CLIENT_TYPE,
                            data: {
                                'userFirstName':self.firstname,
                                'userLastName':self.lastname,
                                'userMail':self.email,
                                'youtubeChannelLink':self.facebooklink,
                                'interestId':self.interestId.join(','),
                                'countryCode':self.countryCode,
                                'verifyCode':self.verifyCode,
                                'registerSource':'3'
                            }
                        }).then((res) => {
                            if (res.code == 200){
                                self.$router.push({name:'applyresult'});
                            }else {
                                layer.open({
                                    content: res.msg
                                    ,skin: 'msg'
                                    ,time: 2
                                })
                            }
                        });
                    }
                    else if(self.channels == 1){
                        Util.post(this, {
                            api:'/user/register?brand='+Config.BRAND+'&lang='+Config.LANG+'&accessToken='+Util.getAccessToken()+'&timeStamp='+Util.getTimeStamp()+'&clientType='+Config.CLIENT_TYPE,
                            data: {
                                'userFirstName':self.firstname,
                                'userLastName':self.lastname,
                                'userMail':self.email,
                                'facebookProfileLink':self.facebooklink,
                                'interestId':self.interestId.join(','),
                                'countryCode':self.countryCode,
                                'verifyCode':self.verifyCode,
                                'registerSource':'3'
                            }
                        }).then((res) => {
                            if (res.code == 200){
                                self.$router.push({name:'applyresult'});
                            }else {
                                layer.open({
                                    content: res.msg
                                    ,skin: 'msg'
                                    ,time: 2
                                })
                            }
                        });
                    }
                    else if(self.channels == 2){
                        Util.post(this, {
                            api:'/user/register?brand='+Config.BRAND+'&lang='+Config.LANG+'&accessToken='+Util.getAccessToken()+'&timeStamp='+Util.getTimeStamp()+'&clientType='+Config.CLIENT_TYPE,
                            data: {
                                'userFirstName':self.firstname,
                                'userLastName':self.lastname,
                                'userMail':self.email,
                                'blogLink':self.facebooklink,
                                'interestId':self.interestId.join(','),
                                'countryCode':self.countryCode,
                                'verifyCode':self.verifyCode,
                                'registerSource':'3'
                            }
                        }).then((res) => {
                            if (res.code == 200){
                                self.$router.push({name:'applyresult'});
                            }else {
                                layer.open({
                                    content: res.msg
                                    ,skin: 'msg'
                                    ,time: 2
                                })
                            }
                        });
                    }
                    else if (self.channels == 3){
                        Util.post(this, {
                            api:'/user/register?brand='+Config.BRAND+'&lang='+Config.LANG+'&accessToken='+Util.getAccessToken()+'&timeStamp='+Util.getTimeStamp()+'&clientType='+Config.CLIENT_TYPE,
                            data: {
                                'userFirstName':self.firstname,
                                'userLastName':self.lastname,
                                'userMail':self.email,
                                'forumProfileLink':self.facebooklink,
                                'interestId':self.interestId.join(','),
                                'countryCode':self.countryCode,
                                'verifyCode':self.verifyCode,
                                'registerSource':'3'
                            }
                        }).then((res) => {
                            if (res.code == 200){
                                self.$router.push({name:'applyresult'});
                            }else {
                                layer.open({
                                    content: res.msg
                                    ,skin: 'msg'
                                    ,time: 2
                                })
                            }
                        });
                    }
                }
            });
        },
        events: {
        },
        methods: {
            register:function () {
                var self = this;
            },
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
                self.verifyCode = 'influencer_code';
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
            showCountry:function () {
                var html =  $('.apply-now .backgound-gray');
                if (!html.hasClass('show')){
                    html.addClass('show');
                }else {
                    html.removeClass('show');
                }
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
                $('.apply-now .enter-info .input-contry').removeClass('placeholder').text(mes.countryName);
                var html =  $('.apply-now .backgound-gray');
                $(event.currentTarget).addClass('active').siblings().removeClass('active');
                html.removeClass('show');
            },
            getInterests:function () {
                var self = this;
                Util.post(this, {
                    api:'/common/interests?accessToken=0&timeStamp='+Util.getTimeStamp()+'&clientType='+Config.CLIENT_TYPE+'&brand='+Config.BRAND+'&lang='+Config.LANG,
                    data: {}
                }).then((res) => {
                    self.interestList = res.data;
                });
            },
        },
        components: {
            MainLayout,
            HeaderNav
        }
    }
</script>