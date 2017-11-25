<template>
    <div class="main">
        <slot></slot>
        <span class="btn-to-top" @click="toTop"></span>
        <footer>
            <ul class="foot-nav">
                <li>
                    <router-link :to="{name: 'index'}">
                        <i class="icon-foot icon-foot-home"></i>
                        <p>Home</p>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'product'}">
                        <i class="icon-foot icon-foot-products"></i>
                        <p>Products</p>
                    </router-link>
                </li>
                <li>
                    <a v-if="isShow&&isloginPage" class="people" href="https://customer.sunvalleytek.com/account/welcome">
                        <i class="img-box">
                            <img src="/assets/images/people-img.png" alt="">
                        </i>
                        <p>My Account</p>
                    </a>
                    <router-link v-if="!isShow"  :to="{name: 'user'}">
                        <i class="icon-foot icon-foot-myaccount"></i>
                        <p>My Account</p>
                    </router-link>
                    <a v-if="isShow&&!isloginPage" class="people-login" href="https://customer.sunvalleytek.com/account/welcome">
                        <i class="img-box">
                            <img src="/assets/images/people-img.png" alt="">
                        </i>
                        <p>My Account</p>
                    </a>
                </li>
                <li>
                    <a href="http://blog.taotronics.com/">
                        <i class="icon-foot icon-foot-blog"></i>
                        <p>Blog</p>
                    </a>
                </li>
                <li>
                    <router-link :to="{name: 'support'}">
                        <i class="icon-foot icon-foot-support"></i>
                        <p>Support</p>
                    </router-link>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                isShow:false,
                isloginPage:false
            }
        },
        mounted: function (){
            var self = this;
            if (Util.getSession('login') == 'true'){
                self.isShow = true;
            }
            if(self.$route.path =='/user'){
                self.isloginPage = true
            }
        },
        props: [],
        methods: {
            toTop: function(){
                $('html,body').animate({
                    scrollTop:'0px'
                })
            }
        },
        components: {}
    }
</script>

