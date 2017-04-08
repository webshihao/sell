<template>
	<div class="header">
		<div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" width="64" height="64" alt="">
            </div>  
            <div class="content">
                <div class="title">
                    <span class="brand"></span>  
                    <span class="name">{{seller.name}}</span> 
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
                <div class="supports" v-if="seller.supports">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div class="support-count" v-if="seller.supports" @click="showDetail">
                <span class="count">{{seller.supports.length}}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bulletin-wrapper">
            <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="background">
            <img :src="seller.avatar" width="100%" height="100%">
        </div>
        <div class="detail" v-show="detailShow" transition="fade">
            <div class="detail_wrapper clearfix">
                <div class="detail-main">
                    <h1 class="name">{{seller.name}}</h1>
                    <div class="star-wrapper">
                        <star :size="48" :score="4.5"></star>
                    </div>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">优惠信息</div>
                        <div class="line"></div>
                    </div>
                    <ul class="supports" v-if="seller.supports">
                        <li class="support-item" v-for="support in seller.supports">
                            <span class="icon" :class="classMap[support.type]"></span>
                            <span class="text">{{support.description}}</span>
                        </li>
                    </ul>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">商家公告</div>
                        <div class="line"></div>
                    </div>
                    <div class="bulletin">
                        <p class="content">{{seller.bulletin}}</p>
                    </div>

                </div>
            </div>
            <div class="detail-close" @click="hideDetail">
                <i class="icon-close"></i>
            </div>
        </div>
	</div>
</template>

<script>
    import star from "components/star/star.vue";
	export default {
		props: {
            seller: {

            }
        },
        data() {
            return {
                detailShow: false
            }
        },
        methods: {
            showDetail() {
                this.detailShow = true;
            },
            hideDetail() {
                this.detailShow = false;
            }
        },
        created() {
            this.classMap= ['decrease','discount','guarantee','invoice','special']
        },
        components: {
            star
        }
	}
</script>

<style lang="scss">
    @import "../../common/css/mixin.scss";
	.header {
        color: #fff;
        position: relative;
        overflow: hidden;
        background-color: rgba(7,17,27,.5);
        .content-wrapper {
            padding: 24px 12px 18px 24px;
            font-size: 0;
            position: relative;
            .avatar {
                display: inline-block;
                img {
                    border-radius: 2px;
                }
            }
            .content {
                display: inline-block;
                margin-left: 16px;
                font-size: 14px;
                vertical-align: top;
                .title {
                    margin: 2px 0 8px 0;
                    .brand {
                        width: 30px;
                        height: 18px;
                        display: inline-block;
                        @include bg-image('brand');
                        background-size: 100%;
                        background-repeat: no-repeat;
                        vertical-align: top;
                    }
                    .name {
                        margin-left: 6px;
                        font-size: 16px;
                        font-weight: bold;
                    }
                }
                .description {
                    margin-bottom: 10px;
                    line-height: 12px;
                    font-size: 12px; 
                }
                .supports {
                    .icon {
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        margin-right: 4px;
                        background-size: 100%;
                        background-repeat: no-repeat;
                        &.decrease {
                            @include bg-image('decrease_1');
                        }
                        &.discount {
                            @include bg-image('discount_1');
                        }
                        &.guarantee {
                            @include bg-image('guarantee_1');
                        }
                        &.invoice {
                            @include bg-image('invoice_1');
                        }
                        &.special {
                            @include bg-image('special_1');
                        }
                    }
                    .text {
                        line-height: 12px;
                        font-size: 10px;
                        vertical-align: top;
                    }
                }
            }
            .support-count {
                position: absolute;
                height: 24px;
                line-height: 24px;
                right: 12px;
                bottom: 14px;
                padding: 0 8px;
                background: rgba(0,0,0,.2);
                text-align: center;
                border-radius: 14px;
                .count {
                    vertical-align: top;
                    font-size: 10px;
                }
                .icon-keyboard_arrow_right {
                    margin-left: 2px;
                    font-size: 10px;
                    line-height: 24px;
                }
            }
        }
        .bulletin-wrapper {
            height: 28px;
            line-height: 28px;
            padding: 0 22px 0 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            position: relative;
            background: rgba(7,17,27,.2);
            .bulletin-title {
                width: 22px;
                height: 12px;
                display: inline-block;
                margin-top: 8px;
                @include bg-image('bulletin');
                background-size: 22px 12px;
                background-repeat: no-repeat
            }
            .bulletin-text {
                font-size: 10px;
                line-height: 28px;
                vertical-align: top;
                margin:0 4px;
            }
            .icon-keyboard_arrow_right {
                margin-left: 2px;
                font-size: 10px;
                position: absolute;
                right: 12px;
                top: 8px;
            }
        }
        .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            filter: blur(10px);
        }
        .detail {
            position: fixed;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 100;
            overflow: auto;
            transition: all .8s;
            backdrop-filter: blur(10px);
            &.fade-transition {
                opacity: 1;
                background: rgba(7,17,27,0.8);
            }
            &.fade-enter,&.fade-leave {
                opacity: 0;
                background: rgba(7,17,27,0);
            }
            .detail_wrapper {
                width: 100%;
                min-height: 100%;
                .detail-main {
                    margin-top: 64px;
                    padding-bottom: 64px;
                    .name {
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 16px;
                        text-align: center;
                        color: rgb(255,255,255);
                    }
                    .star-wrapper {
                        margin-top: 18px;
                        padding: 2px 0;
                        text-align: center;
                    }
                    .title {
                        display: flex;
                        width: 80%;
                        margin: 28px auto 24px auto;
                        .line {
                            border-bottom: 1px solid rgba(255,255,255,0.2);
                            flex: 1;
                            position: relative;
                            top: -6px;
                        }
                        .text {
                            font-size: 14px;
                            font-weight: 700;
                            padding:0 12px;
                        }
                    }
                    .supports {
                        width: 80%;
                        margin: 0 auto;
                        .support-item {
                            padding: 0 12px;
                            margin-bottom: 12px;
                            .icon {
                                display: inline-block;
                                width: 16px;
                                height: 16px;
                                vertical-align: top;
                                margin-right: 6px; 
                                background-size: 100%;
                                background-repeat: no-repeat;
                                &.decrease {
                                    @include bg-image('decrease_1');
                                }
                                &.discount {
                                    @include bg-image('discount_1');
                                }
                                &.guarantee {
                                    @include bg-image('guarantee_1');
                                }
                                &.invoice {
                                    @include bg-image('invoice_1');
                                }
                                &.special {
                                    @include bg-image('special_1');
                                }
                            }
                            .text {
                                font-size: 12px;
                                line-height: 16px;
                            }
                        }
                        
                    }
                    .bulletin {
                        width: 80%;
                        margin: 0 auto;
                        .content {
                            padding: 0 12px;
                            font-size: 12px;
                            line-height: 24px;
                        }
                    }
                    .background {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                        filter: blur(10px);
                    }
                }

            }
            .detail-close {
                width: 32px;
                height: 32px;
                font-size: 32px;
                position: relative;
                margin: -64px auto 0 auto;
                clear: both;
            }
        }
    }
</style>