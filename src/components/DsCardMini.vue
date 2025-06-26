<template>
    <div class="card-mini-wrapper">
        <div class="mini-img-wrapp">
            <img v-if="$props.image" :src="useImageLoader(`@/assets/img/${$props.image}`)" alt="img" class="mini-img">
        </div>
        <div class="mini-wrapp">
            <div class="mini-info">
                <h4 v-if="$props.title" class="mini-title">{{ $props.title }}</h4>
                <p v-if="$props.endIn" class="mini-end-in">{{ $props.endIn }}</p>
            </div>
            <div class="mini-price-wrapp">
                <img v-if="$props.priceIcon" :src="useImageLoader(`@/assets/img/${$props.priceIcon}`)" alt="img" class="mini-price-icon">
                <p v-if="$props.price" class="mini-price">{{ $props.price }}</p>
            </div>
            <button class="close-btn" @click="removeCard">
                <svg class="close-svg" width="25px" height="25px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="1.224"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#000CCCCCC" stroke-width="0.192"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#000"></path> </g></svg>
            </button>
        </div>
    </div>
</template>

<script setup>

    import { useImageLoader } from '@/assets/composables/useImageLoader';
    import { removeCardFromNewArray } from '@/store/variables';

    const props = defineProps({
        image: String,
        title: String,
        endIn: String,
        price: [String, Number],
        priceIcon: {
            type: String,
            default: 'ethereum.svg'
        },
        id: [String, Number]
    });

    const emit = defineEmits(['remove']);


    const removeCard = () => {
        emit('remove', props.id);
    };

</script>

<style lang="scss">
    .card-mini-wrapper{
        display: flex;
        padding: 18.3px 18px 18.3px 18px;
        background-color: #fff;
        box-shadow: -5.85px 11.7px 20.26px 0px #10101026;
        border-radius: 11.25px;
        width: 100%;
        gap: 15px;
        color: #000000;

        .mini-img-wrapp{
            border-radius: 50%;
            overflow: hidden;
            width: 100%;
            height: 100%;
            max-width: 63px;
            .mini-img{
                display: block;
                object-fit: cover;
                width: 100%;
                aspect-ratio: 1/1;
            }
        }
        .mini-wrapp{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 25px;
            .mini-info{
                display: flex;
                flex-direction: column;
                .mini-title{
                    font-weight: 500;
                    font-size: 16.88px;
                    line-height: 25.88px;
                }
                .mini-end-in{
                    font-weight: 400;
                    font-size: 14.63px;
                    line-height: 18.01px;
                    color: #9C9C9C;
                }
            }
            .mini-price-wrapp{
                display: flex;
                justify-content: space-between;
                align-items: end;
                gap: 5px;
                .mini-price-icon{
                    width: 13px;
                }
                .mini-price{
                    font-weight: 500;
                    font-size: 20.23px;
                    line-height: 100%;
                }
            }
            .close-btn{
                display: flex;
                align-items: center;
                cursor: pointer;
            }
        }
    }
    @media (max-width: 1024px){
        .card-mini-wrapper{
            padding: 13px 12px 13px 12px;
            border-radius: 8px;
            gap: 10.7px;
            .mini-img-wrapp{
                max-width: 45px;
                max-height: 45px;
            }
            .mini-wrapp{
                gap: 13px;
                .mini-info{
                    .mini-title{
                        font-size: 12.01px;
                        line-height: 18.41px;
                    }
                    .mini-end-in{
                        font-size: 10.4px;
                        line-height: 12.81px;
                    }
                }
                .mini-price-wrapp{
                    .mini-price-icon{
                        width: 9.2px;
                    }
                    .mini-price{
                        font-size: 14.39px;
                    }
                }
                .close-btn{
                    .close-svg{
                        width: 20px;
                    }
                }
            }
        }
    }

</style>