<template>
    <div>
        <header-nav header-title="3.5mm & RCA CONNECTION" header-type="3"></header-nav>
        <div class="main-contain static-page">
            <h5 class="text-center padding-title-up">3.5mm & RCA CONNECT</h5>
            <p class="pad-p">Connect the 3.5mm audio Cable or Red/White RCA Cable to conn
                ect the Bluetooth transmitter in the TV:</p>
            <p class="pad-p">Place Bluetooth Transmitter in pairing mode--> Pair the transmitte
                r with your Bluetooth headphones/Speaker --> Connect the trans
                mitter into the Audio output of TV with the 3.5mm or RCA Cable. N
                ote: Please make sure the TV connector is audio output, not audio
                input! If there is a cable box, please connect the transmitter to it. </p>
            <p class="pad-p">How to use the 3.5mm Cable/RCA Cable to connect the TT-BA09
                into your TV:</p>
            <p class="pad-p">
                Switch to the "AUX" before power the TT-BA09 --> Pair the TT-BA
                09 with your Bluetooth headphones/Speaker --> Connect the TV
                with the TT-BA09 with the Cable, plug into the "3.5mm Audio jack
                of the TT-BA09 --> Plug into the TV "3.5mm Audio Output/RCA O
                utput".
            </p>
            <img class="padding-top" src="assets/images/img-RCA.jpg"alt="">
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