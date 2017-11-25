<template>
    <div>
        <header-nav header-title="Our Company" header-type="3"></header-nav>
        <div class="main-contain faq-rules about-us">
            <p class="text">TaoTronics is a leading consumer electronics brand operating around the globe.
                We specialize in small electronics and accessories. We pride ourselves on understanding what
                consumers need and how to fulfill their demand. Since 2008, TaoTronics has enjoyed years of
                continuous growth thanks to millions of satisfied customers around the world.</p>
            <p class="text">At TaoTronics, We look into the latest innovations and find products that can connect with our daily
                life; ideas that can make our routine tasks easier; technologies that truly enhance our activities.</p>


            <h5 class="topic"><span class="pad-right">Authorized Brand Manager/ Retailer :</span> ZBT International Trading GmbH</h5>
            <div class="row contact-style">
                <div class='col-left row'>
                    <i class="icon-iphone"></i>
                    <p class="is-left">Call Us：04101-8189266(DE)</p>
                    <p class="float-right">Mon To Fri 9AM-5PM(CEST)</p>
                </div>
                <div class="col-right">
                    <i class="icon-addess"></i>
                    <p class="is-relative about-text">
                        <span class="about-text-name">A D D</span>
                        ：ZBT International Trading GmbH Halstenbeker Weg 98C 25462 Rellingen
                    </p>
                </div>
            </div>
            <p class="sup-icn">
                <i class="pdf"></i>
                <a href="https://www.taotronics.com/media/downloads/Amazon Brand Registry -TaoTronics -DE-V2.0.pdf" target="blank">Amazon Brand Registry -TaoTronics -DE-V2.0.pdf <i class="glyphicon glyphicon-save"></i></a>
            </p>
            <p class="sup-icn">
                <i class="pdf"></i>
                <a href="https://www.taotronics.com/media/downloads/EU-010531044 TAOTRONICS.PDF" target="blank" >EU-010531044 TAOTRONICS.pdf <i class="glyphicon glyphicon-save"></i></a>
            </p>
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