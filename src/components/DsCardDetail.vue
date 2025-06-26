<template>
    <div class="card-detail">
        <div class="det-info-wrapper">
            <div class="det-info-left"><img v-if="$props.image" :src="useImageLoader(`@/assets/img/${$props.image}`)"   alt="img"></div>
            <div class="det-info-right">
                <h2 v-if="$props.title" class="det-info-title">{{ $props.title }}</h2>
                <p v-if="$props.description" class="det-info-discription">{{ $props.description }}</p>
                <div class="det-info-dudes">
                    <div class="det-creator">
                        <img v-if="$props.createByImg" :src="useImageLoader(`@/assets/img/${$props.createByImg}`)" alt="img">
                        <div class="det-supreme-left">
                            <div>Created by</div>
                            <div v-if="$props.createByName" class="good-only">{{ $props.createByName }}</div>
                        </div>
                    </div>
                    <div class="det-ovner">
                        <img v-if="$props.ovnerByImg" :src="useImageLoader(`@/assets/img/${$props.ovnerByImg}`)"  alt="img">
                        <div class="det-supreme-left">
                            <div>Owned by</div>
                            <div v-if="$props.ovnerByName" class="good-only">{{ $props.ovnerByName }}</div>
                        </div>
                    </div>
                </div>
                <div class="det-info-numbers">
                    <div class="det-info-bid">
                        <div>Current Bid</div>
                        <div class="det-info-price">
                            <img  v-if="$props.priceIcon" :src="useImageLoader(`@/assets/img/${$props.priceIcon}`)" alt="img">
                            <div v-if="$props.price" class="price">{{ $props.price }}</div>
                        </div>
                    </div>
                    <div class="det-info-end">
                        <div class="end-in-wrapp">End in</div>
                        <div v-if="$props.endIn" class="det-info-data">{{ $props.endIn }}</div>
                    </div>
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useImageLoader } from '@/assets/composables/useImageLoader';

    const props = defineProps({
        image: String,
        title: String,
        description: String,
        endIn: [String, Number],
        createByName: String,
        ovnerByName: String,
        createByImg: String,
        ovnerByImg: String,
        price: [String, Number],
        priceIcon: {
            type: String,
            default: 'ethereum.svg'
        }
    });

</script>

<style lang="scss">
.card-detail{
    display: block;
    background-color: #FAFAFA;
    border-radius: 24.42px;
    padding: 37px;
    box-shadow: 0px 19px 60px 0px rgba(70, 70, 26, 0.2);
    width: 100%;

    .det-info-wrapper{
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 135px;

        .det-info-left{
            border-radius: 23.97px;
            aspect-ratio: 1/1;
            overflow: hidden;
            // max-width: 560px;
            width: 100%;
            // max-width: 39vw;
            height: 100%;

            img{
                display: block;
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }
        .det-info-right{
            display: flex;
            flex-direction: column;
            // width: 40.3%;
            flex: 0 0 40.3%;

            .det-info-title{
                font-weight: 600;
                font-size: 51.04px;
                line-height: 31.82px;
                color: #292B39;
                margin-bottom: 29.57px;
            }
            .det-info-discription{
                font-weight: 400;
                font-size: 19px;
                line-height: 29.14px;
                color: rgba(136, 136, 136, 0.7);
                margin-bottom: 70.94px;
                width: 86%;
            }
            .det-info-dudes{
                display: flex;
                justify-content: space-between;
                margin-bottom: 63.38px;

                .det-creator,
                .det-ovner{
                    display: flex;
                    gap: 17.2px;
                    justify-content: center;
                    align-items: center;

                    img{
                        width: 100%;
                        max-width: 65.64px;
                        border-radius: 50%;
                    }
                    .det-supreme-left{
                        font-size: 17.68px;
                        line-height: 100%;
                        font-weight: 400;
                        color: #8D8D8D;
                        margin-top: 8px;

                        .good-only{
                            font-size: 25.57px;
                            line-height: 39.2px;
                            font-weight: 500;
                            color: #000000;
                        }
                    }
                }
            }
            .det-info-numbers{
                font-size: 17.86px;
                line-height: 21.98px;
                font-weight: 400;
                color: #8C8C8C;
                display: flex;
                justify-content: space-between;
                margin-bottom: 55px;

                .det-info-bid{
                    display: flex;
                    flex-direction: column;
                    gap: 6.49px;

                    .det-info-price{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 9.36px;

                        img{
                            width: 21.2px;
                        }
                        .price{
                            font-weight: 600;
                            font-size: 32.99px;
                            line-height: 100%;
                            color: #292B39;
                        }
                    }
                }
                .det-info-end{
                    display: flex;
                    flex-direction: column;
                    gap: 16.99px;

                    .end-in-wrapp{
                        display: flex;
                        justify-content: end;
                    }
                    .det-info-data{
                        color: #000000;
                        font-size: 19.23px;
                        line-height: 30.23px;
                        font-weight: 400;
                    }
                } 
            }
        }
    }
}
@media (max-width: 1200px) {
    .card-detail {
        padding: 31px;
        box-shadow: 0px 17.37px 54px 0px rgba(70, 70, 26, 0.2);
        .det-info-wrapper {
            gap: 115px;
            .det-info-left {
                border-radius: 20.51px;
            }
            .det-info-right {
                .det-info-title {
                    font-size: 43.67px;
                    line-height: 27.22px;
                    margin-bottom: 25.07px;
                }
                .det-info-discription {
                    font-size: 16.25px;
                    line-height: 24.93px;
                    margin-bottom: 60.67px;
                    width: 74.5%;
                }
                .det-info-dudes {
                    margin-bottom: 54.49px;
                    .det-creator,
                    .det-ovner {
                        gap: 14.7px;
                        img {
                            max-width: 56.12px;
                        }
                        .det-supreme-left {
                            margin-top: 6.1px;
                            font-size: 15.12px;
                            .good-only {
                                font-size: 21.87px;
                                line-height: 33.54px;
                            }
                        }
                    }
                }
                .det-info-numbers {
                    font-size: 15.28px;
                    line-height: 18.8px;
                    margin-bottom: 48.5px;
                    .det-info-bid {
                        gap: 5.34px;
                        .det-info-price {
                            gap: 8.18px;
                            img {
                                width: 18.1px;
                            }
                            .price {
                                font-size: 28.22px;
                            }
                        }
                    }
                    .det-info-end {
                        gap: 14.34px;
                        .det-info-data {
                            font-size: 16.45px;
                            line-height: 25.86px;
                        }
                    }
                }
            }
        }
    }
}
@media(max-width: 1024px){
    .card-detail{
        padding: 26px;
        box-sizing: 17.37px;
        .det-info-wrapper{
            gap: 96px;
            .det-info-left{
                border-radius: 17.05px;
            }
            .det-info-right{
                .det-info-title{
                    font-size: 36.3px;
                    line-height: 22.63px;
                    margin-bottom: 20.57px;
                }
                .det-info-discription{
                    font-size: 13.51px;
                    line-height: 20.72px;
                    margin-bottom: 50.4px;
                    width: 63%;
                }
                .det-info-dudes{
                    margin-bottom: 45.6px;
                    .det-creator,
                    .det-ovner{
                        gap: 12.2px;
                        img{
                            max-width: 46.6px;
                        }
                        .det-supreme-left{
                            margin-top: 4.2px;
                            font-size: 12.57px;
                            .good-only{
                                font-size: 18.18px;
                                line-height: 27.88px;
                            }
                        }
                    }
                }
                .det-info-numbers{
                    font-size: 12.7px;
                    line-height: 15.63px;
                    margin-bottom: 42px;
                    .det-info-bid{
                        gap: 4.2px;
                        .det-info-price{
                            gap: 7px;
                            img{
                                width: 15px;
                            }
                            .price{
                                font-size: 23.46px;
                            }
                        }
                    }
                    .det-info-end{
                        gap: 11.7px;
                        .det-info-data{
                            font-size: 13.68px;
                            line-height: 21.5px;
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 900px) {
    .card-detail {
        padding: 22px;
        box-shadow: 0px 15.74px 48px 0px rgba(70, 70, 26, 0.2);
        .det-info-wrapper {
            gap: 80px;
            .det-info-left {
                border-radius: 15.29px;
            }
            .det-info-right {
                .det-info-title {
                    font-size: 32.93px;
                    line-height: 20.53px;
                    margin-bottom: 18.87px;
                }
                .det-info-discription {
                    font-size: 12.26px;
                    line-height: 18.79px;
                    margin-bottom: 45.73px;
                    width: 58%;
                }
                .det-info-dudes {
                    margin-bottom: 41.04px;
                    .det-creator,
                    .det-ovner {
                        gap: 10.7px;
                        img {
                            max-width: 42.28px;
                        }
                        .det-supreme-left {
                            margin-top: 3.7px;
                            font-size: 11.39px;
                            .good-only {
                                font-size: 16.48px;
                                line-height: 25.28px;
                            }
                        }
                    }
                }
                .det-info-numbers {
                    font-size: 11.52px;
                    line-height: 14.17px;
                    margin-bottom: 36.5px;
                    .det-info-bid {
                        gap: 3.83px;
                        .det-info-price {
                            gap: 6.17px;
                            img {
                                width: 13.6px;
                            }
                            .price {
                                font-size: 21.27px;
                            }
                        }
                    }
                    .det-info-end {
                        gap: 10.84px;
                        .det-info-data {
                            font-size: 12.39px;
                            line-height: 19.49px;
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 768px) {
    .card-detail {
        padding: 24px 24px 40px 24px;
        box-shadow: 0px 22px 66px 0px rgba(70, 70, 26, 0.2);

        .det-info-wrapper {
            flex-direction: column;
            gap: 40px;

            .det-info-left {
                border-radius: 20px;
            }

            .det-info-right {
                .det-info-title {
                    font-size: 24px;
                    line-height: 34px;
                    margin-bottom: 9px;
                }

                .det-info-discription {
                    font-size: 20px;
                    line-height: 30px;
                    margin-bottom: 80px;
                    width: 100%;
                }

                .det-info-dudes {
                    margin-bottom: 65px;
                    justify-content: start;
                    gap: 65px;

                    .det-creator,
                    .det-ovner {
                        gap: 14px;

                        img {
                            max-width: 50px;
                        }

                        .det-supreme-left {
                            margin-top: 5px;
                            font-size: 14px;

                            .good-only {
                                font-size: 20px;
                                line-height: 30px;
                            }
                        }
                    }
                }

                .det-info-numbers {
                    font-size: 16px;
                    line-height: 20px;
                    margin-bottom: 70px;

                    .det-info-bid {
                        gap: 6px;

                        .det-info-price {
                            gap: 10px;

                            img {
                                width: 18px;
                            }

                            .price {
                                font-size: 28px;
                            }
                        }
                    }

                    .det-info-end {
                        gap: 16px;

                        .det-info-data {
                            font-size: 17px;
                            line-height: 25px;
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 500px) {
    .card-detail {
        padding: 18px 18px 30px 18px;
        box-shadow: 0px 16.5px 50px 0px rgba(70, 70, 26, 0.2);
        .det-info-wrapper {
            gap: 30px;
            .det-info-left {
                border-radius: 15.29px;
            }
            .det-info-right {
                .det-info-title {
                    font-size: 18.78px;
                    line-height: 27.11px;
                    margin-bottom: 6.72px;
                }
                .det-info-discription {
                    font-size: 15.64px;
                    line-height: 23.98px;
                    margin-bottom: 69.6px;
                    width: 100%;
                }
                .det-info-dudes {
                    margin-bottom: 51.6px;
                    gap: 55px;
                    .det-creator,
                    .det-ovner {
                        gap: 10.44px;
                        img {
                            max-width: 40.08px;
                        }
                        .det-supreme-left {
                            margin-top: 3.6px;
                            font-size: 10.8px;
                            .good-only {
                                font-size: 15.6px;
                                line-height: 24px;
                            }
                        }
                    }
                }
                .det-info-numbers {
                    font-size: 12.66px;
                    line-height: 15.58px;
                    margin-bottom: 60px;
                    .det-info-bid {
                        gap: 4.6px;
                        .det-info-price {
                            gap: 7.2px;
                            img {
                                width: 15px;
                            }
                            .price {
                                font-size: 23.4px;
                            }
                        }
                    }
                    .det-info-end {
                        gap: 12px;
                        .det-info-data {
                            font-size: 13.56px;
                            line-height: 21.36px;
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 376px){
    .card-detail {
        padding: 15px 15px 27px 15px;
        .det-info-wrapper {
            gap: 25px;
            .det-info-left {
                border-radius: 15.29px;
            }
            .det-info-right {
                .det-info-title {
                    font-size: 15.64px;
                    line-height: 22.59px;
                    margin-bottom: 5.6px;
                }
                .det-info-discription {
                    font-size: 13.03px;
                    line-height: 19.98px;
                    margin-bottom: 58px;
                    width: 100%;
                }
                .det-info-dudes {
                    margin-bottom: 43px;
                    gap: 40px;
                    .det-creator,
                    .det-ovner {
                        gap: 8.7px;
                        img {
                            max-width: 33.4px;
                        }
                        .det-supreme-left {
                            margin-top: 3px;
                            font-size: 9px;
                            .good-only {
                                font-size: 13px;
                                line-height: 20px;
                            }
                        }
                    }
                }
                .det-info-numbers {
                    font-size: 10.55px;
                    line-height: 12.98px;
                    margin-bottom: 50px;
                    .det-info-bid {
                        gap: 3.83px;
                        .det-info-price {
                            gap: 6px;
                            img {
                                width: 12.5px;
                            }
                            .price {
                                font-size: 19.5px;
                            }
                        }
                    }
                    .det-info-end {
                        gap: 10px;
                        .det-info-data {
                            font-size: 11.3px;
                            line-height: 17.8px;
                        }
                    }
                }
            }
        }
    }
}
</style>