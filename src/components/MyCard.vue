<template>
    <div :class="['card-dude', {
        'card-dude--small': size === 'small',
        'card-dude--mobile-large': size === 'mobileLarge'
    }]">
        <div class="img-time">
            <img v-if="$props.image" :src="useImageLoader(`@/assets/img/${$props.image}`)" alt="img" class="card-img">
            <div v-if="$props.time" class="time">
                <p>{{ time }}</p>
            </div>
        </div>
        <div class="card-info">
            <div class="card-title">
                <h4 v-if="$props.title">{{ title }}</h4>
            </div>
            <div class="card-bottom">
                <div class="bottom-left">
                    <p v-if="$props.subtitle" class="card-subtitle">{{ subtitle }}</p>
                    <div class="price" v-if="$props.price || $props.priceIcon">
                        <img v-if="$props.priceIcon" :src="useImageLoader(`@/assets/img/${$props.priceIcon}`)" alt="price icon" class="price-icon">
                        <p v-if="$props.price" class="price-value">{{ price }}</p>
                    </div>
                </div>
                <div class="bottom-right"><slot></slot></div>
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
        time:{
            type: String,
            default: null
        },
        title:{
            type: String,
            default: null
        },
        subtitle:{
            type: String,
            default: 'Current bid'
        },
        price:{
            type: [String, Number],
            default: null
        },
        priceIcon:{
            type: String,
            default: 'ethereum.svg'
        },
        size:{
            type: String,
            default: 'large'
        },
    })

</script>

<style lang="scss" scoped>
.card-dude {
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    box-shadow: 39px 12px 59px 0px rgba(199, 199, 199, 0.6);
    border-radius: 23.48px;
    padding: 14.1px 14.1px 20.5px 14.1px;

    &--small {
        border-radius: 17.07px;
        padding: 10.25px;
    }
}

.img-time {
    position: relative;
    aspect-ratio: 1/1;
    border-radius: 23.48px;
    overflow: hidden;
    width: 100%;
    .card-dude--small & {
        width: 100%;
        // max-width: clamp(130px, 14vw, 184px);
        border-radius: 17.07px;
    }
}

.card-img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.time {
    position: absolute;
    top: 14.1px;
    right: 9.28px;
    // width: 116.58px;
    // height: 37.64px;
    border-radius: 9.41px;
    background-color: rgba(28, 29, 32, 0.35);
    padding: 8.32px 14.29px;
    .card-dude--small & {
        top: 10.26px;
        right: 6.75px;
        // max-width: 84.74px;
        // height: 27.36px;
        border-radius: 6.84px;
        padding: 6.18px 10.37px;
    }
}

.time p {
    font-weight: 500;
    font-size: 14.12px;
    line-height: 21.17px;
    color: white;
    .card-dude--small & {
        font-size: 10.26px;
        line-height: 150%; 
    }
}

.card-info {
    display: flex;
    flex-direction: column;
    margin-top: 18.82px;
    .card-dude--small & {
        margin-top: 13.6px;
    }
}

.card-title{
    h4 {
    font-weight: 600;
    font-size: 21.17px;
    line-height: 29.64px;
    color: #141416;
    margin-bottom: 14.16px;
        .card-dude--small & {
            font-size: 15.39px;
            line-height: 140%;
            margin-bottom: 10.2px;
        }
    }
}
.card-bottom{
    display: flex;
    justify-content: space-between;
    gap: 10px;

    .bottom-left{
        .card-subtitle{
            font-weight: 400;
            font-size: 14.12px;
            line-height: 21.17px;
            color: #94A3B8;
            margin-bottom: 4.71px;
            .card-dude--small & {
                font-size: 10.26px;
                line-height: 150%;
                margin-bottom: 3.4px;
             } 
        }
        .price{
            display: flex;
            align-items: center;
            gap: 7.42px;
            margin-left: 5px;
            .card-dude--small & {
                gap: 5.4px;
                margin-left: 3.6px;
            }
            .price-icon {
                display: block;
                width: 11px;
                height: 18px;
                .card-dude--small & {
                        width: 8px;
                        height: 13.1px;
                    }
            }
            .price-value {
                font-weight: 500;
                font-size: 16.52px;
                line-height: 150%;
                .card-dude--small & {
                    font-weight: 500;
                    font-size: 11.97px;
                    line-height: 150%;
                }
            }
        }
    }
    .bottom-right {
        display: flex;
        align-items: end;
        width: 100%;
        max-width: 121px;
        .card-dude--small & {
            justify-content: flex-end;
            width: clamp(62px, 6.25vw, 88px);
        }
    }
}
@media (max-width: 1024px){
    .card-dude {
        width: 100%;
        height: 100%;
        box-shadow: 27.61px 8.37px 41.83px 0px #C7C7C799;
        border-radius: 16.7px;
        padding: 10.4px 10.4px 15px 10.4px;

        &--small {
            border-radius: 12.14px;
            padding: 7.3px;
        }
    }

    .img-time {
        border-radius: 16.7px;
        .card-dude--small & {
            border-radius: 12.14px;
        }
    }
    .time {
        top: 10px;
        right: 6px;
        // width: 83px;
        // height: 26px;
        border-radius: 6.69px;
        padding: 6px 10px;
        .card-dude--small & {
            top: 7.3px;
            right: 4.8px;
            // max-width: 84.74px;
            // height: 27.36px;
            border-radius: 4.86px;
            padding: 4.2px 7.1px;
        }
    }

    .time p {
        font-size: 10.04px;
        line-height: 150%;
        .card-dude--small & {
            font-size: 8px;
        }
    }

    .card-info {
        margin-top: 13.4px;
        .card-dude--small & {
            margin-top: 9.7px;
        }
    }

    .card-title{
        h4 {
        font-size: 15.11px;
        line-height: 140%;
        margin-bottom: 10px;
            .card-dude--small & {
                font-size: 11px;
                margin-bottom: 7.3px;
            }
        }
    }
    .card-bottom{
        .bottom-left{
            .card-subtitle{
                font-size: 10.7px;
                line-height: 150%;
                margin-bottom: 3.3px;
                .card-dude--small & {
                    font-size: 7.3px;
                    margin-bottom: 2.4px;
                } 
            }
            .price{
                gap: 5.3px;
                margin-left: 3.6px;
                .card-dude--small & {
                    gap: 3.8px;
                    margin-left: 2.6px;
                }
                .price-icon {
                    width: 7.8px;
                    height: 12.9px;
                    .card-dude--small & {
                            width: 5.7px;
                            height: 9.3px;
                        }
                }
                .price-value {
                    font-weight: 500;
                    font-size: 11.75px;
                    line-height: 150%;
                    .card-dude--small & {
                        font-weight: 500;
                        font-size: 8.51px;
                        line-height: 150%;
                    }
                }
            }
        }
        .bottom-right {
            width: 100%;
            max-width: 86px;
        }
    }
}
@media (max-width: 376px) {
  .card-dude {
    width: 100%;
    max-width: 198px;
    height: 100%;
    box-shadow: 27.61px 8.37px 41.83px 0px #C7C7C799;
    border-radius: 16.7px;
    padding: 10.4px 10.4px 15px 10.4px;

    &--small {
      border-radius: 17.07px;
      padding: 10.25px;
    }

    &--mobile-large {
      max-width: 283px;
      border-radius: 23.67px;
      padding: 14.1px 14.1px 21px 14.1px;
    }
  }

  .img-time {
    border-radius: 16.7px;

    .card-dude--small & {
      border-radius: 17.07px;
    }

    .card-dude--mobile-large & {
        max-width: 255px;
        border-radius: 23.67px;
    }
  }

  .card-img {
    .card-dude--small & {
      border-radius: 17.07px;
    }

    .card-dude--mobile-large & {
      border-radius: 23.67px;
    }
  }

  .time {
    top: 10px;
    right: 6px;
    width: 83px;
    height: 26px;
    border-radius: 6.69px;
    padding: 6px 10px;

    .card-dude--small & {
      top: 10.26px;
      right: 6.75px;
      max-width: 62px;
      height: 20px;
      border-radius: 6.84px;
      padding: 4.3px 7.4px;
    }

    .card-dude--mobile-large & {
      top: 14.1px;
      right: 9.28px;
      width: 100%;
      max-width: 117px;
      height: 37.64px;
      border-radius: 9.41px;
      padding: 8.32px 14.29px;
    }
  }

  .time p {
    font-size: 10.04px;
    line-height: 150%;

    .card-dude--small & {
      font-size: 7.5px;
      line-height: 150%;
    }

    .card-dude--mobile-large & {
      font-size: 14.2px;
      line-height: 150%;
    }
  }

  .card-info {
    margin-top: 13.4px;

    .card-dude--small & {
      margin-top: 13.6px;
    }

    .card-dude--mobile-large & {
      margin-top: 18.82px;
    }
  }

  .card-title {
    h4 {
      font-weight: 600;
      font-size: 15.11px;
      line-height: 140%;
      margin-bottom: 10px;

      .card-dude--small & {
        font-size: 15.39px;
        line-height: 140%;
        margin-bottom: 10.2px;
      }

      .card-dude--mobile-large & {
        font-size: 21.17px;
        line-height: 140%;
        margin-bottom: 14.16px;
      }
    }
  }

  .card-bottom {
    .bottom-left {
      .card-subtitle {
        font-size: 10.7px;
        line-height: 150%;
        margin-bottom: 3.3px;

        .card-dude--small & {
          font-size: 9.26px;
          line-height: 150%;
          margin-bottom: 3.4px;
        }

        .card-dude--mobile-large & {
          font-size: 14.12px;
          line-height: 150%;
          margin-bottom: 4.71px;
        }
      }

      .price {
        gap: 5.3px;
        margin-left: 3.6px;

        .card-dude--small & {
          gap: 5.4px;
          margin-left: 3.6px;
        }

        .card-dude--mobile-large & {
          gap: 7.42px;
          margin-left: 5px;
        }

        .price-icon {
          width: 7.8px;
          height: 12.9px;

          .card-dude--small & {
            width: 8px;
            height: 13.1px;
          }

          .card-dude--mobile-large & {
            width: 11px;
            height: 18px;
          }
        }

        .price-value {
          font-weight: 500;
          font-size: 11.75px;
          line-height: 150%;

          .card-dude--small & {
            font-size: 11.97px;
          }

          .card-dude--mobile-large & {
            font-size: 16.52px;
          }
        }
      }
    }

    .bottom-right {
      width: 100%;
      max-width: 62px;

      .card-dude--small & {
        max-width: 62px;
      }

      .card-dude--mobile-large & {
        max-width: 121px;
      }
    }
  }
}
</style>