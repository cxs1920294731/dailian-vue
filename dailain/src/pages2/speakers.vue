<template>
    <div>
        <header-nav header-title="Speakers" header-type="3"></header-nav>
        <div class="main-contain static-page">
            <h5 class="padding-title-up">Pairing & Connecting</h5>
            <div class="pad-p">
                <p>	Pairing Your Device with Your TaoTronics<br>
                    Select your device below for pairing instructions
                </p>
            </div>
            <p class="pad-p f14 is-link">
                <router-link class="is-link" :to="{name: 'mac'}" title="Mac">Mac</router-link> | <router-link class="is-link" :to="{name: 'iphone'}" title="iPhone">iPhone</router-link> | <router-link :to="{name: 'ipad'}" title="iPad">iPad</router-link> | <router-link class="is-link" :to="{name: 'samsung'}" title="Samsung">Samsung</router-link> | <router-link class="is-link" :to="{name: 'win7'}" title="Windows 7">Windows 7</router-link> | <router-link class="is-link" :to="{name: 'win8'}" title="Windows 8">Windows 8</router-link> | <router-link class="is-link" :to="{name: 'win10'}" title="Windows 10">Windows 10</router-link> | <router-link class="is-link" :to="{name: 'amazon_echo_dot'}" title="Amazon Echo Dot">Amazon Echo Dot</router-link>
            </p>
        </div>
    </div>
</template>

<script>

    import MainLayout from '../layouts/main.vue';
    import HeaderNav from '../components/headnav.vue';
    export default {
        data () {
            return {

            }
        },
        props: {},
        mounted: function () {
            var self = this;
            $(window).scrollTop(0);
        },
        events: {

        },
        methods: {

        },
        components: {
            MainLayout,
            HeaderNav
        }
    }
</script>