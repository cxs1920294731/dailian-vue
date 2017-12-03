<template>
    <header>
        <div class="header-nav">
            <a @click="goPrev" class="header-arrow-ad">
                <span  class="icon-arrow "></span>
            </a>
            <div class="title-header">
                {{headerTitle}}
            </div>
            <div class="search-wrapper">
                <div class="search-cancel"  @click="hide()">Cancel</div>
                <div class="search-box">
                    <input type="text" @keyup.13="search" name="serch" placeholder="Please enter Product name" v-model="searchInput" maxlength="500">
                    <a @click="search()" class="icon-search-box">
                        <span class="icon-search-red"></span>
                    </a>
                </div>
            </div>

            <p  class="search-validation">
                <span class="arrow-red"></span>
                <span>Please enter Product name</span>
            </p>
            <div class="icon-box header-box-ad" v-if="headerType == 1">
                <a @click="showSeach($event)" class="icon-mar-r btn-search">
                    <span class="icon-search "></span>
                </a>
                <a @click="showMenu()" class="icon-mar-r menu-nav">
                    <span class="iocn-menu"></span>
                </a>
            </div>
            <div class="icon-box header-box-ad" v-if="headerType == 2">
                <a @click="showSeach($event)" class="icon-mar-r btn-search">
                    <span class="icon-search "></span>
                </a>
            </div>
            <div class="header-menu row">
                <span class="arrow-black"></span>
                <ul>
                    <li>
                        <router-link :to="{name: 'index'}">
                            <div class="icon-header icon-header-home">
                            </div>
                            <div>
                                Home
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'product'}">
                            <div class="icon-header icon-header-product">
                            </div>
                            <div>
                                Products
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link v-if="!isLogin" :to="{name:'login'}">
                            <div class="icon-header icon-header-account">
                            </div>
                            <div>
                                My Account
                            </div>
                        </router-link>
                        <a v-if="isLogin" href="https://customer.sunvalleytek.com/account/welcome">
                            <div class="icon-header icon-header-account">
                            </div>
                            <div>
                                My Account
                            </div>
                        </a>
                    </li>
                    <li>
                        <a  href="http://blog.taotronics.com/">
                            <div class="icon-header icon-header-blog">
                            </div>
                            <div>
                                Blog
                            </div>
                        </a>
                    </li>
                    <li>
                        <router-link :to="{name:'support'}">
                            <div class="icon-header icon-header-Support">
                            </div>
                            <div>
                                Support
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        data () {
            return {
                searchInput: '',

                isLogin:Util.getSession('login')
            }
        },
        props: ['headerTitle','headerType'],
        methods:{

        },
        components: {}
    }
</script>

