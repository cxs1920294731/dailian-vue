<template>
    <main-layout>
        <header-nav header-title="404" header-type="3"></header-nav>
        <div class="main-contain error-404">
            <div class="text-center">
                <img src="assets/images/error-404.png" alt="error-404">
            </div>
            <div class="text-center top-pad">
                <h6 class="topic">404 Page Not Found</h6>
                <h6 class="topic">We couldn't find what you're looking for</h6>
                <p class="text text-pad">Suggestions:</p>
                <p class="text">If you typed in a specific URL, check for errors and resubmit.
                    Type what you're looking for into our search bar.</p>
            </div>
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