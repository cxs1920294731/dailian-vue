<template>
    <main-layout>
        <div class="hall">
            <header class="nav-header-order set-user-info-header text-center">
                <a class="go-back" id="go-back">
                    <i class="icon-arrow-left"></i>
                </a>
                <p>关于</p>
            </header>
            <div class="head-contain about-us">
                <i class="img-box">
                </i>
                <h5 class="text-center topic">代练宝</h5>
                <p class="text">在代练市场混乱,低效,信任危机严重,我们想尽心做好带来你平台,为好的打手提供更编辑便捷,优质的服务,精心筛选好的商人提供价格更具有吸引力的订单,我们一直在努力,也感谢你的一路陪伴.</p>
            </div>
            <ul>
                <li >Hello</li>
                <li>Hello</li>
                <li>Hello</li>
            </ul>
            <div class="attr ni"></div>
            <div class="attr"></div>
            <div class="attr ni"></div>
            <div class="attr"></div>
            <button id="onclick">点击</button>
        </div>
    </main-layout>
</template>
<script>
    import MainLayout from '../layouts/main.vue'
    export default {
        data () {
            return {
                arra:[],
            }
        },
        props: {},
        mounted: function () {
            var self= this;
            self.getIndex();
        },
        events: {

        },
        methods: {
            getIndex:function () {
                this;
                $('.idnex').click(function () {

                });
                $('body').on('click','.idnex',function () {
                    
                });
                var self = this;
                self.aarra;
            },
        },
        components: {
            MainLayout,
        }
    }
</script>