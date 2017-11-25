<template>
    <div>
        <header-nav header-title="Warranty Information" header-type="3"></header-nav>
        <div class="main-contain faq-rules  warranty-info">
            <p class="text first-col">All TaoTronics products come with 12 month full warranty from the date of its original purchase.</p>
            <p class="text">We only cover TaoTronics products purchased from our authorized distributors (listed below).</p>
            <h5 class="topic">1.If you have purchased TaoTronics products from somewhere else,please contact seller for warranty cover.</h5>
            <p class="text">NIn addition, the following are excluded from TaoTronics warranty cover:</p>
            <ul>
                <li>• Products purchased as 2nd hand or used</li>
                <li>• Products purchased from unauthorized retailer and distributor</li>
                <li>• Damage resulted from misuse and abusive action</li>
                <li>• Damage resulted from chemical, fire, radioactive substance, poison, liquid</li>
                <li>• Damage resulted from natural disaster</li>
                <li>• Damage caused to any 3rd party / person / device and beyond</li>
            </ul>
            <p>In addition, the following are included from TaoTronics warranty cover:</p>
            <p>US, Canada: SunvalleyTek International Inc.</p>
            <h5 class="topic">2.How to make a return/exchange request</h5>
            <p>If your purchase is within our warranty cover, and you believe it is defective, you can contact us to launch your return request.</p>
            <p>Please include all accessories, manuals, and original undamaged packaging</p>
            <p>when returning your purchase back to us. We must receive all original products in order to process your return or exchange request.</p>

            <p>To return your TaoTronics product, please email us at support@taotronics.com with:</p>
            <ul>
                <li>• Name of product purchase</li>
                <li>• Your purchase order number</li>
                <li>• Reasons for return</li>
            </ul>
            <p>Once we have received your email, our customer support staff will assist you with the rest of the returning process.</p>
            <p>Please do not send us anything unless you are instructed to do so.</p>
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