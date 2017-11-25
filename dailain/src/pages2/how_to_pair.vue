<template>
    <div>
        <header-nav header-title="HOW TO PAIR" header-type="3"></header-nav>
        <div class="main-contain static-page">
            <p class="img-box-pair"><img src="assets/images/BLUETOOTH-1.jpg" alt=""></p>
            <p class="pad-p">
                <b class="f14">Step 1:</b> Place Bluetooth headphones/speaker in "Pair Mode" and within 5 feet of the transmitter firstly.<br>
                <b class="f14">Step 2:</b> Press and hold the MFB(Power on Button) until the LED will flash Blue and Red alternately. Now the transmitter is in pairing mode.<br>
                <b class="f14">Step 3:</b> The two devices would connect with each other automatically, then the Blue LED flashes once 10 seconds.<br>
                <b class="f14">Step 4:</b> Connect the transmitter into the audio-output of non-Bluetooth devices, the audio would be transmitted to your stereo!
            </p>
            <h6 class="title-point">Please make sure that any other Bluetooth signals around are turned off when pairing.</h6>
            <p class="img-box-pair"><img src="assets/images/BLUETOOTH-2.jpg" alt=""></p>
            <p class="pad-p">
                <b class="f14">Step 1:</b> Place the Bluetooth headphones/speaker in "Pair Mode" and within 5 feet of the transmitter firstly.<br>
                <b class="f14">Step 2:</b> Press & hold the multi-function button of the transmitter until it flashes blue and green alternately.<br>
                <b class="f14">Step 3:</b> Then release the button and the two devices would connect with each other automatically, the Green light of the transmitterstays solid.
            </p>
            <h6 class="title-point">Please make sure that any other Bluetooth signals are turned off when pairing.</h6>
            <h5 class="title-pic">IN TX MODE</h5>
            <p class="img-box-pair"><img src="assets/images/BLUETOOTH-3.jpg" alt=""></p>
            <p class="pad-p">
                <b class="f14">Step 1:</b> Place Bluetooth headphone/speaker in "Pair Mode" and within 3 feet of the transmitter firstly.<br>
                <b class="f14">Step 2:</b> Press and hold the Power Button for 5 seconds (LED flashes blue slowly) and tap twice to enter pairing mode (LED flashes red and blue alternately).<br>
                <b class="f14">Step 3:</b> The two devices would connect with each other automatically, the Blue LED stays solid.<br>
                <b class="f14">Step 4:</b> Connect the transmitter into the audio output of non-Bluetooth devices like TV or iPod, the audio would be transmitted to your stereo!
            </p>
            <h6 class="title-point">Please make sure that any other Bluetooth signals around areturned off when pairing.</h6>
            <h5 class="title-pic">IN RX MODE</h5>
            <p class="img-box-pair2"><img src="assets/images/BLUETOOTH-4.jpg" alt=""></p>
            <p class="pad-p">
                <b class="f14">Step 1:</b> Press and hold the Power Button for 5 seconds (LED flashes blue slowly) and tap twice to enter pairing mode (LED flashes red and blue alternately).<br>
                <b class="f14">Step 2:</b> Activate the Bluetooth function on your phone and search for the nearby Bluetooth devices:<br>
                <b class="f14">• For iOS: Settings >Bluetooth:On> Scan for devices</b><br>
                <b class="f14">• For Android: Settings > Wireless & Networks > Bluetooth: On > Scan for devices</b><br>
                <b class="f14">Step 3:</b> Find "TaoTronics TT-BA07/TT-BA08/TT-BA09" in the search results and tap on it to connect. Once connected, the LED indicator will turn solid blue.<br>
                <b class="f14">Step 4:</b> Connect to the headphones jack of your non-Bluetooth devices such as the wired headphones/speaker, you will hear sound out from the stereo.
            </p>
            <p class="img-box-pair2"><img src="assets/images/BLUETOOTH-5.jpg" alt=""></p>
            <h4 class="f14">Can both Bluetooth Adapters can pair with each other?</h4>
            <p>Yes, two Bluetooth Adapters can pair with each other when one in TX mode and another in the RX mode.</p>
            <h4 class="f14">Here is how to do:</h4>
            <p>
                1. Place the first one in RX mode and another in TX mode within 3 feet of each other firstly.<br>
                2. Press and hold the Power Button for 5 seconds (LED flashes blue slowly) and tap twice to enter pairing mode (LED flashes red and blue alternately).<br>
                3. The two devices would connect with each other automatically, the Blue LED stays solid.<br>
                4. Connecting the first one (in TX mode) into your non-Bluetooth TV/Laptop, then connect another one (in RX mode) into the wired headphones/speaker, and you will hear audio from headphones/spe
                aker.
            </p>

            <h4 class="f14">Please make sure that any other Bluetooth signal around is turned off. </h4>
            <h4 class="f14"><br>FOR VIDEO GUIDE PLEASE VISIT :</h4>
            <dl class="dl-model">
                <dt>TT-BA07</dt>
                <dd><a class="is-link" href="https://www.amazon.com/dp/B01EHSX28M" target="_blank">https://www.amazon.com/dp/B01EHSX28M</a></dd>
                <dt>TT-BA08</dt>
                <dd><a class="is-link" href="https://www.amazon.com/dp/B01M6172N2?ref=dp_vse_rvc0" target="_blank">https://www.amazon.com/dp/B01M6172N2?ref=dp_vse_rvc0</a></dd>
            </dl>
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