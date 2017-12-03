<template>
    <div>
        <header-nav header-title="Apply Results" header-type="3"></header-nav>
        <div class="main-contain apply-resluts">
            <p class="text fir-p"> Thanks for signing up. We understand how much in
                fluencers mean to us in elevating our brand and enga
                ging customers. That’s why we’d like to work with you
                to build a better future for every one of us together.</p>
            <p class="text two-p"> We will check and evaluate all of your social media
                plat form. And will keep you update for our upcoming
                campaigns. Hope we both can achieve a win-win situ
                ation.</p>
            <div>
                <router-link class="btn bnt-black text-center" :to="{name: 'applynow'}"><span>OK</span></router-link>
            </div>
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