<template>
    <div>
        <header-nav header-title="ALWAYS ON" header-type="3"></header-nav>
        <div class="main-contain static-page">
            <h5 class="text-center padding-title-up">ALWAYS ON</h5>
            <p class="pad-p">
                Bluetooth Transmitter (including TT-BA01,TT-BA07/TT-BA08/TT-BA09 in TX mode) support stay on when it is charged. When you keep the transmitter charged by a 5V external charger such as Android power charger (instead of the USB jack of TV) via Micro USB Power Cord, then you turn on the last paired Bluetooth headphones or speakers, they would automatically pair with Bluetooth transmitters!
            </p>
            <p><img class="padding-top" src="assets/images/img-DELAY.jpg" alt=""><br><br></p>
            <h5 class="padding-top is-red">NOTE:</h5>
            <ul>
                <li>1. TT-BA06 can't support stay on while keep charging.</li>
                <li>2. Bluetooth Receiver (including TT-BA07/TT-BA08/TT-BA09 in RX mode) does not support stay on or re-connect feature, it will auto power-off while there is no any paired device.</li>
            </ul>
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