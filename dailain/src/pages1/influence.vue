<template>
    <div>
        <header-nav header-title="Influencer" header-type="3"></header-nav>
        <div class="main-contain influence">
            <div class="img-box">
                <img src="assets/images/infulence-bg.png" alt="bg-img">
            </div>
            <p class=" influence-intro">
                We understand how much influencers mean to us in elevatin
                g our brand and engaging customers. That’s why we’d like to
                work with you to builda better future for every one of us tog
                ether.
            </p>
            <div class="btn-black influence-pos text-center">
                <router-link :to="{name: 'applynow'}">Apply Now</router-link>
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