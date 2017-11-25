<template>
    <div>
        <header-nav header-title="BLUETOOTH TRANSMITTER  RECEIVER" header-type="3"></header-nav>
        <div class="main-contain static-page">
            <h5 class="padding-title-up ">BLUETOOTH TRANSMITTER</h5>
            <div class="pad-p">
                <p>You can use Bluetooth Transmitter to connect to the audio output of your non-Bluetooth devices such as TV, iPod, PC, then pair it with your Bluetooth stereo like headphones or speakers, then the audio would be transmitted to your stereo.</p>
            </div>
            <h5 class="pad-p">BLUETOOTH   RECEIVER</h5>
            <p class="pad-p">
                You can connect Bluetooth Receiver to traditional device like wired headphones or speakers, then pair with your phone or tablet, so you will enjoy great music with Bluetooth wireless connection.
            </p>
            <h5 class="pad-p">RANGE</h5>
            <div class="pad-p">
                <p>It is normally around 30 feet in open space but this will be shorted at around 15 feet due to barriers like walls or floors.<br>
                    As the working environment of Bluetooth technology, it depends upon a lot of factor - bluetooth transmitter/receiver (Bluetooth headphone/speaker), electrical / wifi interferences, living environment(brick walls are enemies to any magnetic waves) etc.</p>
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