<template>
    <main-layout>
        <header-nav :header-title="pTitle" header-type="2"></header-nav>
        <div class="main-contain no-results" v-if="!hasData">
            <div class="result-text">
                0 result found
            </div>
            <div class="limit-width">
                <div class="text-center">
                    <img src="assets/images/no-results-img.png" alt="error-404">
                </div>
                <div class="top-pad">
                    <h6 class="topic text-pad">Sorry, we couldn’t find anything.</h6>
                    <p class="text">Suggestions:</p>
                    <ul class="text">
                        <li>1. Make sure all words are spelled correctly.</li>
                        <li>2. Try different keywords.</li>
                        <li>3. Try more general keywords.</li>
                        <li>4. Try fewer keywords.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="main-contain search-results"  v-if="hasData">
            <div class="result-text">
                <span>{{total}}</span> result found
            </div>
            <ul class="result-li">
                <li v-for="item in productList">
                    <span class="img-box">
                        <img :src="item.productImg" alt="">
                    </span>
                    <div class="title">
                        {{item.shortName}}
                        <span class="ellipses"></span>
                    </div>
                    <div class="row pro-link">
                        <router-link :to="{name: 'product_details',query:{'urlKey': item.urlKey}}" >Learn more <span class="song"> &gt;</span> </router-link>
                        <router-link :to="{name: 'support_details',query:{'urlKey': item.urlKey}}" v-if="item.downloadFlag"  class="is-right">Support <span class="song"> &gt;</span></router-link>
                    </div>
                </li>
            </ul>
            <div class="no-more-reslts text-center">
                <div class="img-box-no" v-if="loading">
                    <img src="assets/images/load-img.jpg" alt="">
                </div>
                <div v-if="!loading">No more results</div>
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
                pTitle: 'Search results for "'+ this.$route.query.searchTxt + '"',
                key: this.$route.query.searchTxt,
                productList: [],
                page: 1,
                pageSize: 5,
                total: 0,
                loading: true,
                hasData: true
            }
        },
        props: {},
        mounted: function () {
            var self = this;
            self.searchProduct();
        },
        events: {

        },
        methods: {
            searchProduct: function(){
                var self = this;
                Util.post2(this, {
                    api: '/products/search?q='+ self.key +'&pageNo='+self.page +'&pageSize=' + self.pageSize +'&brand='+ Config.BRAND + '&lang='+ Config.LANG +'&clientType=' + Config.CLIENT_TYPE,
                    data: {}
                }).then((res) => {
                    self.total = res.data.total;
                    if(self.total == 0){
                        self.hasData = false;
                    }
                    self.productList = self.productList.concat(res.data.rows);
                    if(self.pageSize * self.page < self.total){
                        self.page++;
                        setTimeout(function(){
                            self.searchProduct();
                        },200)
                    }else {
                        self.loading = false;
                    }
                });
            },
        },
        components: {
            MainLayout,
            HeaderNav,
        }
    }
</script>