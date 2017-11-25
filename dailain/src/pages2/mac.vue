<template>
    <div>
        <header-nav header-title="MAC" header-type="3"></header-nav>
        <div class="main-contain static-page">
            <h5 class="padding-title-up tc">Pair & Connect Your TaoTronics Speaker with Your Mac</h5>
            <div class="pad-p">
                <p><b class="f14">Step 1:</b> On your Mac, click on "System Preferences" (located in the toolbar on the bottom right of your screen). The "System Preferences" window will then appear.</p>
            </div>
            <p><img class="padding-top" src="assets/images/Mac-1.jpg" alt=""><br><br></p>

            <div class="pad-p">
                <p><b class="f14">Step 2:</b> Click on "Bluetooth" in the "System Preferences" window. This will take you to your Mac's Bluetooth settings. Please make sure that Bluetooth is turned on. If not, click "Turn Bluetooth On" on the far left of the window.</p>
            </div>
            <p><img class="padding-top" src="assets/images/Mac-2.jpg" alt=""><br><br></p>

            <div class="pad-p">
                <p><b class="f14">Step 3:</b> Now, turn on your TaoTronics Speaker. Take TaoTronics TT-SK06 as an example. The Bluetooth LED Light will flash blue quickly to indicate that the speaker is in pairing mode. If solid blue. your speaker is already paired to a source device; you will need to press and hold the multi-functionalbutton (or Bluetooth Button) on your TaoTronics Speaker for 1seconds until your speaker is in pairing mode, ready to pair and connect. You will then see a listing of your speaker under "Devices" in the "Bluetooth" window.</p>
            </div>
            <p><img class="padding-top" src="assets/images/Mac-3.jpg" alt=""><br><br></p>

            <div class="pad-p">
                <p><b class="f14">Step 4:</b> Then, click "Pair" on the listing of your TaoTronics Speaker to begin the pairing process. Please wait and stay patient while your Mac connects to your TaoTronics Speaker.</p>
            </div>
            <p><img class="padding-top" src="assets/images/Mac-4.jpg" alt=""><br><br></p>

            <div class="pad-p">
                <p><b class="f14">Step 5:</b> The listing of your TaoTronics Speaker will then show that it is "Connected". You have now successfully paired and connected your speaker to your Mac. Your TaoTronics Speaker will now be able to play audio via Bluetooth from your Mac.</p>
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