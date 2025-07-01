<template>
    <div class="great-card">
            <img v-if="image" :src="useImageLoader(`@/assets/img/${$props.image}`)" alt="img" class="great-img">
        <div class="great-bot">
            <div class="great-icon-wrapp">
                <img v-if="circleIcon" :src="useImageLoader(`@/assets/img/${$props.circleIcon}`)" alt="img" class="great-icon">
            </div>
            <div class="great-author">
                <h2 v-if="title" class="author-name">{{ title }}</h2>
                <img v-if="verification" :src="useImageLoader(`@/assets/img/${$props.verification}`)" alt="img" class="verification">
            </div>
            <div class="great-numbers">
                <div class="items">
                    <div v-if="firstNumbers" class="item-top">{{ firstNumbers }}</div>
                    <div v-if="firstSubtitle" class="item-bot">{{ firstSubtitle }}</div>
                </div>
                <div class="items">
                    <div v-if="secondNumbers"  class="item-top">{{ secondNumbers }}</div>
                    <div v-if="firstSubtitle" class="item-bot">{{ firstSubtitle }}</div>
                </div>
                <div class="items">
                    <div class="item-sigma">
                        <img v-if="priceIcon" :src="useImageLoader(`@/assets/img/${$props.priceIcon}`)" alt="img" class="priceIcon">
                        <div v-if="firstPrice" class="item-top">{{ firstPrice }}</div>
                    </div>
                    <div v-if="secondSubtitle" class="item-bot">{{ secondSubtitle }}</div>
                </div>
                <div class="items">
                    <div class="item-sigma">
                        <img v-if="priceIcon" :src="useImageLoader(`@/assets/img/${$props.priceIcon}`)" alt="img" class="priceIcon">
                        <div v-if="secondPrice" class="item-top">{{ secondPrice }}</div>
                    </div>
                    <div v-if="thirdSubtitle" class="item-bot">{{ thirdSubtitle }}</div>
                </div>
            </div>
            <div class="others">
                <div class="other-img-wrapp"><img v-if="otherNft1" :src="useImageLoader(`@/assets/img/${$props.otherNft1}`)" alt="img" class="other-nft"></div>
                <div class="other-img-wrapp"><img v-if="otherNft2" :src="useImageLoader(`@/assets/img/${$props.otherNft2}`)" alt="img" class="other-nft"></div>
                <div v-if="otherNft3" :href="nftLibraryLink" class="other-img-wrapp nft-link">
                    <img :src="useImageLoader(`@/assets/img/${$props.otherNft3}`)" alt="img" class="other-nft sigma-nft">
                    <span class="nft-count">{{ otherWorksCount }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useImageLoader } from '@/assets/composables/useImageLoader';

    const props = defineProps({
        image:{
            type: String,
            default: null
        },
        title:{
            type: String,
            default: null
        },
        firstSubtitle:{
            type: String,
            default: 'items'
        },
        secondSubtitle:{
            type: String,
            default: 'floor price'
        },
        thirdSubtitle:{
            type: String,
            default: 'traded'
        },
        firstPrice:{
            type: [String, Number],
            default: null
        },
        secondPrice:{
            type: [String, Number],
            default: null
        },
        firstNumbers:{
            type: [String, Number],
            default: null
        },
        secondNumbers:{
            type: [String, Number],
            default: null
        },
        priceIcon:{
            type: String,
            default: 'ethereum.svg'
        },
        circleIcon:{
            type: String,
            default: null
        },
        verification:{
            type: String,
            default: 'smal-galka.svg'
        },
        otherNft1:{
            type: String,
            default: null
        },
        otherNft2:{
            type: String,
            default: null
        },
        otherNft3:{
            type: String,
            default: null
        },
        nftLibraryLink:{
            type: String,
            default: '#' 
        },
        otherWorksCount:{
            type: [String, Number],
            default: null
        }

    })

</script>

<style lang="scss" scoped>
    .great-card{
        border-radius: 25px;
        box-shadow: 30px 15px 80px 0 rgba(191, 191, 191, 0.6);
        display: flex;
        flex-direction: column;
        text-transform: capitalize;
        width: 100%;
        background-color: #F2F2F2;
        overflow: hidden;
    }
    .great-img{
        display: block;
        object-fit: cover;
        width: 100%;
        // max-width: 370.6px;
        height: auto; 
        max-height: 215.3px; 
    }
    .great-bot{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 69px 27px 37px 27px;
        position: relative;
    }
    .great-icon-wrapp{
        position: absolute;
        top: -55px;
        left: 50%;
        transform: translateX(-50%);
    }
    .great-icon{
        display: block;
        object-fit: cover;
        width: 100%;
        max-width: 110.9px;
        height: 100%;
        border-radius: 50%;
        border: solid 6.92px white;
        aspect-ratio: 1/1;
    }
    .great-author{
        display: flex;
        gap: 15px;
        align-items: center;
        margin-bottom: 23.5px;
    }
    .author-name{
        font-size: 23.72px;
        line-height: 33.61px;
        font-weight: 600;
        color: #000000;
    }
    .verification{
        display: block;
        object-fit: cover;
        width: 100%;
        max-width: 23px;
        height: 100%;
        max-height: 23px;
    }
    .great-numbers{
        display: flex;
        justify-content: space-between;
        gap: 38px;
    }
    .items{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .item-top{
        font-size: 17.79px;
        line-height: 25.7px;
        font-weight: 500;
        color: #141416;
    }
    .item-bot{
        font-size: 12.85px;
        line-height: 15.82px;
        font-weight: 400;
        color: #828282;
    }
    .item-sigma{
        display: flex;
        justify-content: center;
        gap: 5px;
        align-items: center;
    }
    .priceIcon{
        display: block;
        width: 100%;
        height: 100%;
        width: 12.2px; 
        height: 17.7px;
    }
    .others{
        display: flex;
        justify-content: center;
        margin-top: 33px;
        gap: 3%;
        width: 100%;
        .other-img-wrapp{
            flex: 1;
            aspect-ratio: 1/1;
            border-radius: 9.93px;
            overflow: hidden;
        }
    }
    .other-nft{
        display: block;
        object-fit: cover;
        width: 100%;
        object-position: center;
        height: 100%;
    }
    .nft-link{
        position: relative;

    }
    .sigma-nft{
        filter: brightness(50%);
    }
    .nft-count {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 19.86px;
    line-height: 21.85px;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    }
    @media (max-width: 376px){
        .great-card{
            border-radius: 15px;
            box-shadow: 30px 15px 80px 0 rgba(191, 191, 191, 0.6);
        }
        .great-bot{
            padding: 58px 22px 31px 22px;
        }
        .great-icon{
            max-width: 102px;
            border: solid 5.7px white;
            aspect-ratio: 1/1;
        }
        .great-author{
            gap: 14.5px;
            margin-bottom: 19.7px;
        }
        .author-name{
            font-size: 19.82px;
            line-height: 28.07px;
        }
        .verification{
            max-width: 16.7px;
            max-height: 16.7px;
        }
        .great-numbers{
            gap: 25px;
        }
        .item-top{
            font-size: 14.86px;
            line-height: 21.4px;
        }
        .item-bot{
            font-size: 10.7px;
            line-height: 13.2px;
        }
        .item-sigma{
            gap: 4px;
        }
        .priceIcon{
            width: 10.2px; 
            height: 14.7px;
        }
        .others{
            margin-top: 26px;
            .other-img-wrapp{
                border-radius: 8.3px;
            }
        }
        .nft-count {
            font-size: 16.6px;
            line-height: 18.25px;
        }
    }
</style>