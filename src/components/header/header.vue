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
            <div class="support-count" v-if="seller.supports">
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
        <div class="detail">
            <div class="detail_wrapper">
                <h2>{{seller.name}}</h2>
                <div class="star_arr">
                    <span class="star_item on"></span>
                    <span class="star_item on"></span>
                    <span class="star_item on"></span>
                    <span class="star_item on"></span>
                    <span class="star_item off"></span>
                </div>
                <div class="title">
                    <div class="line left"></div>
                    <div class="text">优惠信息</div>
                    <div class="line right"></div>
                </div>
                <ul class="supports" v-if="seller.supports">
                    <li v-for="support in seller.supports">
                        <span class="icon" :class="classMap[support.type]"></span>
                        <span class="text">{{support.description}}</span>
                    </li>
                </ul>
                <div class="title">
                    <div class="line left"></div>
                    <div class="text">商家公告</div>
                    <div class="line right"></div>
                </div>
                <div class="bulletin_desc">
                    {{seller.bulletin}}
                </div>
                <div class="background">
                    <!-- <img :src="seller.avatar" width="100%" height="100%"> -->
                </div>
            </div>
            <div class="close">X</div>
        </div>
	</div>
</template>

<script>
	export default {
		props: {
            seller: {

            }
        },
        created() {
            this.classMap= ['decrease','discount','guarantee','invoice','special']
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
            background: rgba(7,17,27,0.8);
            .detail_wrapper {
                padding: 64px 36px 32px 36px;
                height: 100%;
                display: inline-block;
                h2 {
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 16px;
                    text-align: center;
                    color: rgb(255,255,255);
                }
                .star_arr {
                    height: 48px;
                    margin-top: 16px;
                    margin-bottom: 28px;
                    text-align: center;
                    .star_item {
                        display: inline-block;
                        width: 24px;
                        height: 24px;
                        
                        background-size: 100%;
                        background-repeat: no-repeat;
                        &.on {
                            @include bg-image('./star48_on');
                        }
                        &.off {
                            @include bg-image('./star48_off');
                        }
                    }
                }
                .title {
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    position: relative;
                    .line {
                        border-top: 1px solid #f00;
                        width: 112px;
                        display: inline-block;
                        position: absolute;
                        top: 50%;
                        &.left {
                            left: 0;
                        }
                        &.right {
                            right: 0;
                        }
                    }
                    .text {
                        display: inline-block;
                        margin:0 12px;
                    }
                }
                .supports {
                    padding-top: 24px;
                    padding-bottom: 28px;
                    li {
                        margin-left: 12px;
                        margin-bottom: 12px;
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
                            font-size: 12px;
                            line-height: 12px;
                            vertical-align: top;
                        }
                    }
                    
                }
                .bulletin_desc {
                    padding: 24px 12px 0 12px;
                    font-size: 12px;
                    line-height: 24px;
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
            .close {
                font-size: 32px;
                position: absolute;
                left: 50%;
                bottom: 32px;
            }
        }
    }
</style>