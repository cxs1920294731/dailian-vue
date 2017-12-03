<template>
    <main-layout>
        <div v-if="!is_detail">
            <div class="hall">
                <header class="nav-header-order text-center">
                    <a class="go-back" id="go-back">
                        <span class="btn-cancel">取消</span>
                    </a>
                    <p>发布订单</p>
                </header>
                <div class="head-contain add-order">
                    <h6 class="order-select-game">请选择您要发布的游戏</h6>
                    <ul class="game-all">
                        <li v-for="game in gameList" class="game-li">
                            <label>
                                <input type="radio" name="game" :value="game.game_id" v-model="gameId" checked class="hidden">
                                <i class="circle-1">
                                    <span class="circle-2">&nbsp;</span>
                                </i>
                                <span>{{game.game_name}}</span>
                            </label>
                        </li>
                    </ul>
                    <span @click="getDetail" class="btn-ok">立刻发布</span>
                </div>
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
                        <li><a href="add-order.html">
                            <i class="icon icon-footer icon-task"></i>
                            <p>发需求</p>
                        </a></li>
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
        </div>
        <div v-if="is_detail">
            <div class="hall">
                <header class="nav-header-order text-center">
                    <a @click="goOrder" class="go-back">
                        <i class="icon-arrow-left"></i>
                    </a>
                    <p>{{gameName}}</p>
                </header>
                <div class="order-detail">
                    <form>
                        <div class="margin-bottom-10 index-card">
                            <div class="title no-border">
                                <i class="icon-order-title "></i>
                                <span class="name">发单信息</span>
                            </div>
                            <ul class="order-content">
                                <li class="add-order-li">
                                    <span class="name">订单标题:</span>
                                    <input v-model="order_name" class="input-text" type="text" name="title" placeholder="请在25个字内填写您的个性标题(必填)"></textarea>
                                </li>
                                <li class="add-order-li">
                                    <span class="name">所在区服:</span>
                                    <input  class="input-text" name="game-server" type="text" placeholder="请选择您所在的区服(必填)">
                                    <a class="select-game-serve">
                                        <i class="arrow-right"></i>
                                    </a>
                                </li>
                                <li class="add-order-li">
                                    <span class="name">游戏账号:</span>
                                    <input v-model="game_account" class="input-text" name="game-account" type="text" placeholder="请输入您的游戏账号(必填项)">
                                </li>
                                <li class="add-order-li">
                                    <span class="name">游戏密码:</span>
                                    <input v-model="game_password" class="input-text" name="game-password" type="password" placeholder="请输入您的游戏密码">
                                </li>
                                <li class="add-order-li">
                                    <span class="name">订单价格:</span>
                                    <input v-model="order_price" class="input-text" name="order-price" type="number" placeholder="请输入金额(必填项)">
                                    <i class="address-right">元</i>
                                </li>
                                <li class="add-order-li">
                                    <span class="name">安全保证金:</span>
                                    <input v-model="security_price" class="input-text" name="security deposit" type="number" placeholder="请输入金额(必填项)">
                                    <i class="address-right">元</i>
                                </li>
                                <li class="add-order-li">
                                    <span class="name">要求时间:</span>
                                    <input v-model="require_time" class="input-text" name="time" type="number" placeholder="要求时间(必填项)">
                                    <i class="address-right">小时</i>
                                </li>
                                <li class="add-order-li">
                                    <span class="name">号主手机:</span>
                                    <input v-model="phone" class="input-text" name="phone" type="text" placeholder="请输入您的游戏角色名称(必填项)">
                                </li>
                                <li class="add-order-li">
                                    <span class="name textarea">游戏说明:</span>
                                    <textarea v-model="order_desc" class="input-textarea" name="game-intro" placeholder="输入游戏说明(可不填，100字内)"></textarea>
                                </li>
                            </ul>
                        </div>
                        <div class="margin-bottom-10 index-card">
                            <div class="ask-title">
                                <i class="icon-order-title icon-1"></i>
                                <span class="name">代练要求</span>
                            </div>
                            <div class="order-content-more">
                                <textarea class="text-order" placeholder="请输入代练的具体要求"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <footer class="nav-footer order-detail-footer">
                    <a @click="addOrder" class="btn-ok">确认发布</a>
                </footer>
            </div>
        </div>
    </main-layout>
</template>
<script>
    export default {
        data () {
            return {
                gameList:{},
                gameName:'',
                selesct_game:'',
                is_detail:false,
                //传回后台的数据
                gameId:0,
                order_name:'',
                area_id:1,
                server_id:1,
                game_account:'',
                game_password:'',
                order_price:'',
                security_price:'',
                require_time:'',
                phone:'',
                order_desc:'',
                game_level:'1',
                game_role:'1c',
            }
        },
        props: {},
        mounted: function () {
            var self=this;
            self.initPage();
        },
        events: {

        },
        methods: {
            initPage:function () {
                var self = this;
                Util.post(this, {
                    api:'/index.php?m=Home&c=order&a=get_game_info',
                    data: {}
                }).then(function (res) {
                    if(res){
                        console.log(res);
                        self.gameList=res;
                    }
                });
            },
            getDetail:function () {
                var self = this;
                var gameList=self.gameList;
                for (var i = 0,k =gameList.length;i<k;i++){
                    console.log('cao');
                    if(self.gameId==gameList[i].game_id){
                        console.log(gameList[i].game_name);
                        self.gameName=gameList[i].game_name;
                    }
                }
                self.is_detail= true;
            },
            goOrder:function () {
                this.is_detail=false;
            },
            addOrder:function () {
                var self=this;
                Util.post(this, {
                    api:'/index.php?m=Home&c=Order&a=save_order_data',
                    data: {
                        order_name:self.order_name,
                        game_id:parseInt(self.gameId) ,
                        area_id:parseInt(self.area_id),
                        server_id:parseInt(self.server_id),
                        game_account:self.game_account,
                        game_password:self.game_password,
                        order_price:self.order_price,
                        security_price:self.security_price,
                        require_time:self.require_time,
                        phone:self.phone,
                        order_desc:self.order_desc,
                        game_level:self.game_level,
                        game_role:self.game_role,
                    }
                }).then(function (res) {
                    if(res){
                        console.log(res);
                    }
                });
            }
        },
        components: {

        }
    }
</script>