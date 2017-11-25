<template>
    <div>
        <header-nav header-title="Contact-us" header-type="3"></header-nav>
        <div class="main-contain faq-rules  warranty-info">
            <div class="first-col">
                <p class="text">If you have any questions regarding our products or services,</p>
                <p class="text">please feel free to drop us an email anytime or call us during working hours.</p>
            </div>
            <div class="padding">
                <h5 class="is-link-color">By Email: support@taotronics.com</h5>
                <h5 class="is-link-color">wholesale@taotronics.com</h5>
            </div>
            <div class="padding">
                <p>Please include your order number or the name of the product that you are interested in the email.</p>
                <p>Please include as much information about your intention, your device setup, and any observation you have made during your usage.</p>
                <p>This will allow us to identify the problem/issue and provide assistance as quick as possible.</p>
            </div>
            <p class="padding"><span>For media inquiries, please contact</span> <a class="is-link-color" href="mailto:marketing@taotronics.com"> marketing@taotronics.com</a></p>
            <ul class="padding">
                <li >We can also answer your PR, and wholesale enquiries. Just let us know how we can help.</li>
                <li>By Phone:</li>
                <li>(United States) 1-888-456-8468 (PST) 9am - 5pm, Mon to Fri</li>
                <li class="padding">(Germany) 49-04101-8189266 (CEST) 9am - 5pm, Mon to Fri</li>
                <li>If you really need our physical address, here it is:</li>
                <li>(United States) 46724 Lakeview Blvd，Fremont, CA 94538</li>
                <li>(Germany) ZBT International Trading GmbH, Halstenbeker Weg 98C, 25462 Rellingen</li>
            </ul>
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