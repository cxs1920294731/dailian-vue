<template>
    <div class="hall">
        <slot></slot>
        <footer class="nav-footer">
            <ul class="row text-center">
                <li class="active"><a href="index.html">
                    <i class="icon icon-footer icon-home"></i>
                    <p>主页</p>
                </a></li>
                <li><a href="product-list.html">
                    <i class="icon icon-footer icon-list"></i>
                    <p>大厅</p>
                </a></li>
                <li><router-link :to="{name:'addOrder'}">
                    <i class="icon icon-footer icon-task"></i>
                    <p>发需求</p>
                </router-link></li>
                <li><a href="shop.html">
                    <i class="icon icon-footer icon-shop"></i>
                    <p>旺铺</p>
                </a></li>
                <li><a href="user.html">
                    <i class="icon icon-footer icon-user"></i>
                    <p>我的</p>
                </a></li>
            </ul>
        </footer>
    </div>

</template>

<script>

    export default {
        data () {
            return {
            }
        },
        mounted: function (){

        },
        props: [],
        methods: {

        },
        components: {}
    }
</script>