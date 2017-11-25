<template>
    <div>
        <header-nav header-title="Windows 10" header-type="3"></header-nav>
        <div class="main-contain static-page">
            <h5 class="padding-title-up tc">Pair & Connect Your TaoTronics Speaker with Your Windows 10 Computer</h5>
            <div class="pad-p">
                <p><b>Important: Make sure to disconnect your audio cable from both your speaker and computer before attempting to pair via Bluetooth</b><br>
                    Please Note: Windows 10 has been found to negatively impact some device drivers. You may need to update your computer's Bluetooth driver before attempting to pair and connect to your TaoTronics Speaker. Your TaoTronics Speaker will not require any drivers as there are no drivers for it. Bluetooth drivers must come from the specific manufacturer for your exact computer model. Download and install the appropriate Bluetooth driver from your computer vendor's website and then restart your system before attempting to pair and connect to your TaoTronics Speaker.
                </p>
                <p><br><b>Click on the Windows Icon (located on the far left of the desktop toolbar) and the Start Menu will display. Then, click "Settings"</b></p>
            </div>
            <p><img class="padding-top" src="assets/images/Windows10-1.jpg" alt=""></p>

            <div class="pad-p">
                <p>Click on "Devices" in the Settings window:</p>
            </div>
            <p><img class="padding-top" src="assets/images/Windows10-2.jpg" alt=""></p>

            <div class="pad-p">
                <p>Click the "Bluetooth" tab on the left side of the Devices window.<br><br>
                    Under "Manage Bluetooth devices".  make sure Bluetooth is turned on. If not, slide the Bluetooth switch from left to right and the Bluetooth on your computer will turn on:</p>
            </div>
            <p><img class="padding-top" src="assets/images/Windows10-3.jpg" alt=""></p>

            <div class="pad-p">
                <p>Now, turn on your TaoTronics Speaker.Take TaoTronics TT-SK06 as an example. The Bluetooth LED Light will flash blue quickly to indicate that the speaker is in pairing mode. If solid blue. your speaker is already paired to a source device; you will need to press and hold the Bluetooth Button on your TaoTronics Speaker for 1 seconds until your speaker is in pairing mode, ready to pair and connect. Click "Ready to pair" under your speaker in the list of devices:</p>
            </div>
            <p><img class="padding-top" src="assets/images/Windows10-4.jpg" alt=""></p>

            <div class="pad-p">
                <p>Then, click the "Pair" button to begin the pairing process:</p>
            </div>
            <p><img class="padding-top" src="assets/images/Windows10-5.jpg" alt=""></p>

            <div class="pad-p">
                <p>Once the pairing process begins. please wait and stay patient while Windows installs your TaoTronics Speaker – a small progress bar will appear under your speaker:</p>
            </div>
            <p><img class="padding-top" src="assets/images/Windows10-6.jpg" alt=""></p>

            <div class="pad-p">
                <p>You have now paired and connected your TaoTronics Speaker to your computer.</p>
                <p><br>The next step is to select the TaoTronics Speaker as your audio playback device. By doing this, you will switch from your internal or default speakers (your built in laptop speakers. for example) and be able to use your TaoTronics Speaker to play audio. instead.</p>
                <p><br>Right click the Sound Icon </p>
            </div>
            <p><img class="padding-top" src="assets/images/Windows10-7.jpg" alt=""></p>

            <div class="pad-p">
                <p>(located on the right side of the desktop toolbar) and click "Playback Devices" from the drop down menu:</p>
            </div>
            <p><img class="padding-top" src="assets/images/Windows10-8.jpg" alt=""></p>

            <div class="pad-p">
                <p>The Sound pop up window will now appear. If your TaoTronics Speaker is currently connected to your computer, it will appear in this window.</p>
                <p><br>You will see two listings for your TaoTronics speaker: one as "Headset" and the other as "Headphones". Click on the "Headphones" listing on the list of devices. Then. click "Set Default" on the bottom right of the Sound pop up window.</p>
                <p><br>Please note: In order to play audio. ensure that the "Headphones" listing for your TaoTronics Speaker is set as your default playback device. You will not be able to play audio if the "Headset" listing is selected.</p>
                <p><br>Your TaoTronics Speaker will now be able to play audio via Bluetooth from your device. Click the "OK" button at the bottom of the Sound pop up window and you're ready to go:</p>
            </div>
            <p><img class="padding-top" src="assets/images/Windows10-9.jpg" alt=""></p>

            <div class="pad-p">
                <p>TPlease note: If you are experiencing difficulty with connecting to your TaoTronics Speaker. you may need to unpair the speaker from your device and restart the connection process.</p>
                <p><br>To do so. return to the "Manage Bluetooth devices" window under "Settings" and click on your TaoTronics Speaker. Select "Remove device" and then confirm that you want to disconnect. Your TaoTronics Speaker will then unpair from your device.</p>
            </div>
            <p><img class="padding-top" src="assets/images/Windows10-10.jpg" alt=""></p>

            <div class="pad-p">
                <p>After doing this. please repeat the steps for pairing and connecting your TaoTronics Speaker to your device.</p>
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