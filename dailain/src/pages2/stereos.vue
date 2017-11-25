<template>
    <div>
        <header-nav header-title="PAIR WITH TWO BLUETOOTH STEREOS" header-type="3"></header-nav>
        <div class="main-contain static-page">
            <h5 class="padding-title-up tc">PAIR WITH TWO BLUETOOTH STEREOS AT THE SAME TIME TT-BA07/TT-BA08/TT-BA09</h5>
            <div class="pad-p">
                <p>	NOTICE:TT-BA01/TT-BA06 can NOT pair with two Bluetooth stereos at the same time.<br>
                    1. Follow the instructions in the "Pairing" section in user manual to pair the transmitter with your 1st Bluetooth stereo.<br>
                    2. Turn off the Bluetooth function on your 1st device, tap the Power Button twice to pair and connect to your 2nd stereo.<br>
                    3. Turn on the Bluetooth function on your 1st Bluetooth stereo. In approximately 30 seconds, the 2nd stereo will automatically connect in.<br>
                    4. Both Bluetooth stereos should receive audio successfully now.
                </p>
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