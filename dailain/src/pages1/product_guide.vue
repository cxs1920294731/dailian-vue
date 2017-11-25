<template>
    <div>
        <header-nav header-title="Product Guide" header-type="3"></header-nav>
        <div class="main-contain faq-rules  warranty-info">
            <h5 class="topic is-red">Product Guide</h5>
            <p class="text padding">
                Here, you will find some general information related to certain category of TaoTronics products. All the guides
                are summaries of problems our customers encountered previously. We hope these guide will complement our user
                manual so you know how to fix some of the most common problems associated with TaoTronics products. If you have
                suggestions for our guide, please feel free to email us at <a class="is-link-color" href="mailto:Support@TaoTronics.com">Support@TaoTronics.com</a> .
            </p>
            <h5 class="topic is-red">Bluetooth Self-help Guide</h5>
            <p class="text padding">
                This guide provides a general overview of TaoTronics Bluetooth products. It contains detailed instructions on how
                to pair with your device and some common problem and fixes as follows.
            </p>
            <p class="padding">For full guide, please click the following link: </p>
            <p class="is-red">•Transmitters</p>
            <router-link :to="{name:'bluetooth_transmitter_help_guide'}" class="is-link-color" >{{webUrl+'bluetooth_transmitter_help_guide'}}</router-link>
            <p class="is-red"><br>•Speakers</p>
            <router-link :to="{name:'speakers'}"  class="is-link-color" >{{webUrl+'speakers'}}</router-link>
        </div>
    </div>
</template>

<script>

    import MainLayout from '../layouts/main.vue';
    import HeaderNav from '../components/headnav.vue';
    export default {
        data () {
            return {
                webUrl: Config.HOME_URL,
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