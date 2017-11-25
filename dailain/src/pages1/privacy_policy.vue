<template>
    <div>
        <header-nav header-title="Privacy Policy" header-type="3"></header-nav>
        <div class="main-contain faq-rules static-page">
            <h5 class="topic is-red">TaoTronics Privacy Policy</h5>
            <p class="text">At TaoTronics, our goal is to provide you with a positive experience on our websites and when using
                our products and services. Our privacy practices are described below, as well as in separate notices given when a
                product or service is purchased or downloaded. The privacy policy here covers all TaoTronics products and services.
                By visiting TaoTronics websites, using TaoTronics Products or providing us with your Personal Information you are
                accepting and consenting to the practices, terms and conditions described in this Privacy Policy.</p>
            <h5 class="topic">Order Number:</h5>
            <p class="text">TaoTronics website does not store any order information regarding any purchase of TaoTronics products
                or services from anywhere. Order numbers are used to verify customer purchase only.</p>
            <h5 class="topic">Personal Information:</h5>
            <p class="text">TaoTronics websites do not sell, trade, or otherwise transfer to outside parties your personally
                identifiable information. This does not include trusted third parties who assist us in operating our website,
                conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
            <h5 class="topic">Contact us</h5>
            <p class="text ">Should you have any privacy-related questions or comments related to this Privacy Policy,
                please contact us at <a class="is-red" href="mailto:Support@TaoTronics.com">Support@TaoTronics.com</a> </p>
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