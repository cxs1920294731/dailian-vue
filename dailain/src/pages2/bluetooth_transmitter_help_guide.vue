<template>
    <div>
        <header-nav header-title="bluetooth-transmitter-help-guide" header-type="3"></header-nav>
        <div class="main-contain support-transmitter">
            <p class="text">
                Bluetooth adapters allow to stream audio wirelessly by turning your old stereo, wired headphones, TV, or other wired devices into Bluetooth-enabled receivers or transmitters.
            </p>
            <p class="text">
                Learn how to use your TaoTronics Bluetooth Adapter by clicking on the sections below :
            </p>
            <ul class="link-li">
                <li><router-link :to="{name: 'bluetooth_transmitter_receiver'}">
                    BLUETOOTH TRANSMITTER / RECEIVER
                </router-link></li>
                <li><router-link :to="{name: 'how_to_pair'}">
                    HOW TO PAIR
                </router-link></li>
                <li><router-link :to="{name: 'how_to_charge'}">
                    HOW TO CHARGE
                </router-link></li>
                <li><router-link :to="{name: 'digital'}">
                    DIGTAL OPTICAL CONNECTION
                </router-link></li>
                <li><router-link :to="{name: 'stereos'}">
                    PAIR WITH TWO BLUETOOTH STEREOS
                </router-link></li>
                <li><router-link :to="{name: 'how_to_reset'}">
                    HOW TO RESET
                </router-link></li>
                <li><router-link :to="{name: 'always_on'}">
                    ALWAYS ON
                </router-link></li>
                <li><router-link :to="{name: 'delay'}">
                    DELAY
                </router-link></li>
                <li><router :to="{name: 'rca_conn'}">
                    3.5mm & RCA CONNECTION
                </router></li>
            </ul>
            <div class="intro">
                Do you need help? Write us at <a class="red" href="mailto:support@taotronics.com">support@taotronics.com</a> and
                provide us with the details of your Amazon Order.
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