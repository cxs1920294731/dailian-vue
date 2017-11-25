<template>
    <div>
        <header-nav header-title="Samsung" header-type="3"></header-nav>
        <div class="main-contain static-page">
            <h5 class="padding-title-up tc">Pair & Connect Your TaoTronics Speaker with Your SamsungSmartphone</h5>
            <div class="pad-p">
                <p><b class="f14">Step 1:</b> Drag down the notification bar from the top of your screen. Next. tap the Settings icon (located on the top right of the notification bar). This will take you to the Settings page.</p>
            </div>
            <p><img class="padding-top" src="assets/images/Samsung-1.jpg" alt=""><br><br></p>

            <div class="pad-p">
                <p><b class="f14">Step 2:</b> On the Settings page. tap Bluetooth.</p>
            </div>
            <p><img class="padding-top" src="assets/images/Samsung-2.jpg" alt=""><br><br></p>

            <div class="pad-p">
                <p><b class="f14">Step 3:</b> Check that the Bluetooth on your device is turned on. If not. slide the Bluetooth switch from Off to On (located on the top right of the Bluetooth page).</p>
            </div>
            <p><img class="padding-top" src="assets/images/Samsung-3.jpg" alt=""><br><br></p>

            <div class="pad-p">
                <p><b class="f14">Step 4:</b> Now. turn on your TaoTronics Speaker. Take TaoTronics TT-SK06 as an example. The Bluetooth LED Light will flash blue quickly to indicate that the speaker is in pairing mode. If solid blue. your speaker is already paired to a source device; you will need to press and hold the multi-functional button (or Bluetooth Button) on your TaoTronics Speaker for 1 seconds until your speaker is in pairing mode, ready to pair and connect.Next .  hit Scan on your device (located on the bottom of the Bluetooth page).</p>
            </div>
            <p><img class="padding-top" src="assets/images/Samsung-4.jpg" alt=""><br><br></p>

            <div class="pad-p">
                <p><b class="f14">Step 5:</b> TYour TaoTronics Speaker should now appear under AVAILABLE DEVICES. Next. tap on your TaoTronics Speaker. Please wait patiently as your phone pairs and connects with your speaker.</p>
            </div>
            <p><img class="padding-top" src="assets/images/Samsung-5.jpg" alt=""><br><br></p>

            <div class="pad-p">
                <p><b class="f14">Step 6:</b> Once paired. you will see the phrase "Connected to phone and media audio" under the listing of your TaoTronics Speaker. You can now play audio wirelessly to your TaoTronics Speaker.</p>
            </div>
            <p><img class="padding-top" src="assets/images/Samsung-6.jpg" alt=""><br><br></p>

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