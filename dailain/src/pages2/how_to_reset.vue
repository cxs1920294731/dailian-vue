<template>
    <div>
        <header-nav header-title="HOW TO RESET" header-type="3"></header-nav>
        <div class="main-contain static-page">
            <h5 class="padding-title-up tc">BLUETOOTH ADAPTER CAN'T PAIR WITH YOUR DEVICES? Reset Instructions</h5>
            <h5 class="padding-title-up top5">Reset TT-BA01</h5>
            <div class="pad-p">
                <p>Please clear the pairing history by pressing the Power Button twice when the transmitter are on until the LED indicator flashes red and blue alternately. Then restart the transmitter to pair again. You may need to try this a few times if it does not work on your first attempt. </p>
            </div>
            <h5 class="pad-p">Reset TT-BA06</h5>
            <div class="pad-p">
                <p>	1. Press & hold the MFB (Power on Button) for 10 seconds.<br>
                    2. You can just see the transmitter flashes blue and green at first, and then the 3 lights would flashes at the same time.<br>
                    3. Keep holding the MFB to turn off the transmitter.<br>
                    4. You can just pair the transmitter with your Bluetooth receiver just like after the factory.
                </p>
            </div>
            <h5 class="pad-p">Reset TT-BA07/TT-BA08/TT-BA09 in TX Mode:</h5>
            <div class="pad-p">
                <p>	Please switch the mode (switch to RX, then switch back to TX ) after it is turned off for 5 seconds and reset your headphones or speakers, then restart:<br>
                    1. Place Bluetooth headphone/speaker in "Pair Mode" and within 3feet of the transmitter firstly.<br>
                    2. Press and hold the Power Button for 5 seconds (LED flashes blueslowly) and tap twice to enter pairing mode (LED flashes red and blue alternately).<br>
                    3. The two devices would connect with each other automatically, the Blue LED stays solid.<br>
                    4. Connect the transmitter into your non-Bluetooth devices like TV or iPod, the audio would be transmitted to your stereo!<br>
                    ！Please make sure that any other Bluetooth signal around is turned off.
                </p>
            </div>
            <h5 class="pad-p">ResetTT-BA07/TT-BA08/TT-BA09 in RX Mode:</h5>
            <div class="pad-p">
                <p>	Please switch the mode (switch to TX, then switch back to RX ) after it is turned off for 5 seconds, then restart:<br>
                    1. Press and hold the Power Button for 5 seconds (LED flashes blueslowly) and tap twice to enter pairing mode (LED flashes red and blue alternately).<br>
                    2. Activate the Bluetooth function on your phone and search for the nearby Bluetooth devices:<br>
                    • For iOS: Settings > Bluetooth:On > Scan for devices<br>
                    • For Android: Settings > Wireless & Networks > Bluetooth: On > Scan for devices<br>
                    3. Find "TaoTronics TT-BA07/TT-BA08/TT-BA09" in the search results and tap on it to connect. Once connected, the LED indicator will turn solid blue.<br>
                    4. Connect to the headphones jack of your non-Bluetooth devicessuch as the wired headphones/speaker, you will hear sound out from the stereo.
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