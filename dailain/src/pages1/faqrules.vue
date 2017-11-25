<template>
    <main-layout>
        <header-nav header-title="FAQ & RULES" header-type="3"></header-nav>
        <div class="main-contain faq-rules">
            <h5 class="topic">1. Do I need an Amazon account to enter the giveaway?</h5>
            <p class="text">Yes. You may create a new Amazon account or use an existing one
                to enter the giveaway. In addition, you will also need tohave, or cre
                ate at least one of the following social media accounts to particip
                ate: Facebook, Twitter, Google+, or Pinterest.</p>
            <h5 class="topic">2. How do I enter the giveaway?</h5>
            <p class="text">Choose one of our giveaway prizes and follow the instructions on t
                he contest page. You may be required to share a post on Facebook
                Twitter, Google+, or Pinterest. Only one entry allowed per person.</p>
            <h5 class="topic">3. Does it cost me anything to enter?</h5>
            <p class="text">No. The contest is entirely free and no purchase is necessaryto ent
                er or win.</p>
            <h5 class="topic">4. How can I increase my chances of winning?</h5>
            <p class="text">When sharing this activity, add the tag ‘#TaoTronicsGiveaway’ and
                like our Official TaoTronics Facebook page.</p>
            <h5 class="topic">5. How do I know if there are prizes still available?</h5>
            <p class="text">If you are able to enter a giveaway, then prizes are still available. N
                ew entrants will not be accepted once all prizes have been claimed
                and a ‘No More Prizes Available’ message will bedisplayed.</p>
            <h5 class="topic">6. How do I know what the prize is?</h5>
            <p class="text">The prizes are displayed on all landing and entry pages. Simply cho
                ose the prize you want and enter to win!</p>
        </div>
    </main-layout>
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