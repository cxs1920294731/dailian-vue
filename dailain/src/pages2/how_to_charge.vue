<template>
    <div>
        <header-nav header-title="HOW TO CHARGE" header-type="3"></header-nav>
        <div class="main-contain static-page">
            <h5 class="padding-title-up topic-how">CHARGE YOUR BLUETOOTH ADAPTER</h5>
            <p class="pad-p">
                Please keep the Bluetooth transmitter charged by an 5V external charger such as Android power charger (instead of the USB jack ofTV) via Micro USB Power Cord for 2~3 hours. We recommend charging for 4 hours before using for the first time.
            </p>
            <table width="100%" class="top-10">
                <tr>
                    <th>Model</th>
                    <th>Working Time Per Full Charge</th>
                </tr>
                <tr>
                    <td>TT-BA01</td>
                    <td>Approximately 7 hours</td>
                </tr>
                <tr>
                    <td>TT-BA06</td>
                    <td>Approximately 10 hours</td>
                </tr>
                <tr>
                    <td>TT-BA07</td>
                    <td>Approximately 10hours</td>
                </tr>
                <tr>
                    <td>TT-BA08</td>
                    <td>Approximately 20 hours</td>
                </tr>
                <tr>
                    <td>TT-BA09</td>
                    <td>15 hours (AUX mode) / 12 hours (SPDIF mode) </td>
                </tr>
            </table>
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