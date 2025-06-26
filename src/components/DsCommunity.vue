<script setup>
import MyButton from '@/components/MyButton.vue';

</script>

<template>
    <section class="community-wrapper">
        <div class="container">
            <div class="community-wrapp">
                <div class="circle-1">
                    <div class="circle-img-wrapp img-1">
                        <img class="circle-img" src="@/assets/img/nft-img-1.jpeg" alt="img">
                    </div>
                    <div class="circle-img-wrapp img-2">
                        <img class="circle-img" src="@/assets/img/nft-img-2.jpeg" alt="img">
                    </div>
                    <div class="circle-img-wrapp img-3">
                        <img class="circle-img" src="@/assets/img/nft-img-3.jpeg" alt="img">
                    </div>
                    <div class="circle-img-wrapp  img-4">
                        <img class="circle-img" src="@/assets/img/nft-img-4.jpeg" alt="img">
                    </div>
                    <div class="circle-img-wrapp  img-5">
                        <img class="circle-img" src="@/assets/img/nft-img-5.jpeg" alt="img">
                    </div>
                </div>
                <div class="circle-2">
                    <div class="circle-img-wrapp img-6">
                        <img class="circle-img" src="@/assets/img/nft-img-6.jpeg" alt="img">
                    </div>
                    <div class="circle-img-wrapp img-7">
                        <img class="circle-img" src="@/assets/img/nft-img-7.jpeg" alt="img">
                    </div>
                    <div class="circle-img-wrapp img-8">
                        <img class="circle-img" src="@/assets/img/nft-img-8.jpeg" alt="img">
                    </div>
                    <div class="circle-img-wrapp  img-9">
                        <img class="circle-img" src="@/assets/img/nft-img-9.jpeg" alt="img">
                    </div>
                </div>
                <h2>Join The
                    <br>
                    <span>Community</span>
                </h2>
                <p>Our vibrant community is full of collectors, artists, and enthusiasts who share a passion for one-of-a-kind digital.</p>
                 <MyButton text="join  our community" fontSize="sm" :isUppercase="false" fontWeight="500"></MyButton>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
// .community-wrapper {
//     margin-bottom: 237px;
//     overflow: hidden;
//     padding-top: 40px;
//     padding-bottom: 40px;

//     .community-wrapp {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         position: relative;
//         aspect-ratio: 1/1;

//         .circle-1,
//         .circle-2 {
//             border: 2px solid #D2D2D2;
//             border-radius: 50%;
//             position: absolute;
//             left: 50%;
//             top: 50%;
//             transform: translate(-50%, -50%) rotate(0deg);
//         }

//         .circle-1 {
//             width: clamp(300px, 74vw, 1060px);
//             height: clamp(300px, 74vw, 1060px);
//             animation: rotation 12s linear infinite;
//             position: absolute;
//             left: 50%;
//             top: 50%;
//             transform: translate(-50%, -50%);

//             .circle-img-wrapp {
//                 position: absolute;
//                 top: 50%;
//                 left: 50%;
//                 width: clamp(30px, 5vw, 60px);
//                 aspect-ratio: 1/1;
//                 border-radius: 50%;
//                 overflow: hidden;
//                 transform-origin: center center;

//                 img {
//                     width: 100%;
//                     height: 100%;
//                     object-fit: cover;
//                 }
//             }

//             .img-1 {
//                 transform: rotate(0deg) translateY(calc(-1 * clamp(150px, 38.9vw, 558px)));
//                 img { transform: rotate(0deg); }
//             }
//             .img-2 {
//                 transform: rotate(72deg) translateY(calc(-1 * clamp(140px, 35.3vw, 507px)));
//                 img { transform: rotate(-72deg); }
//             }
//             .img-3 {
//                 transform: rotate(144deg) translateY(calc(-1 * clamp(135px, 33.8vw, 488px)));
//                 img { transform: rotate(-144deg); }
//             }
//             .img-4 {
//                 transform: rotate(216deg) translateY(calc(-1 * clamp(142px, 36.1vw, 518px)));
//                 img { transform: rotate(-216deg); }
//             }
//             .img-5 {
//                 transform: rotate(288deg) translateY(calc(-1 * clamp(155px, 39.5vw, 567px)));
//                 img { transform: rotate(-288deg); }
//             }
//                 }

//         .circle-2 {
//             width: clamp(200px, 58vw, 830px);
//             height: clamp(200px, 58vw, 830px);
//             animation: rotation 10s linear infinite;
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             .circle-img-wrapp {
//                 position: absolute;
//                 top: 50%;
//                 left: 50%;
//                 width: clamp(25px, 4vw, 50px);
//                 aspect-ratio: 1/1;
//                 border-radius: 50%;
//                 overflow: hidden;
//                 transform-origin: center center;

//                 img {
//                     width: 100%;
//                     height: 100%;
//                     object-fit: cover;
//                 }
//             }
            
//             .img-6 {
//                 transform: rotate(0deg) translateY(calc(-1 * clamp(120px, 30.4vw, 437px)));
//                 img { transform: rotate(0deg); }
//             }
//             .img-7 {
//                 transform: rotate(72deg) translateY(calc(-1 * clamp(110px, 27.5vw, 396px)));
//                 img { transform: rotate(-72deg); }
//             }
//             .img-8 {
//                 transform: rotate(144deg) translateY(calc(-1 * clamp(105px, 26.3vw, 378px)));
//                 img { transform: rotate(-144deg); }
//             }
//             .img-9 {
//                 transform: rotate(216deg) translateY(calc(-1 * clamp(113px, 28.2vw, 405px)));
//                 img { transform: rotate(-216deg); }
//             }
//         }

//         h2 {
//             text-align: center;
//             font-size: 45px;
//             line-height: 54.4px;
//             font-weight: 700;
//             color: #18181B;
//             margin-bottom: 31px;

//             span {
//                 color: #D2D2D2;
//             }
//         }

//         p {
//             font-weight: 400;
//             font-size: 18px;
//             line-height: 32px;
//             color: #12141D;
//             margin-bottom: 49px;
//             width: 50%;
//             text-align: center;
//         }
//     }
// }
.community-wrapper {
    margin-bottom: 237px;
    overflow: hidden;
    padding-top: 40px;
    padding-bottom: 40px;

    .community-wrapp {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        aspect-ratio: 1/1;

        .circle-1,
        .circle-2 {
            border: 2px solid #D2D2D2;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) rotate(0deg);
        }

        .circle-1 {
            width: clamp(519px, 74vw, 1060px);
            height: clamp(519px, 74vw, 1060px);
            animation: rotation 12s linear infinite;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            .circle-img-wrapp {
                position: absolute;
                top: 50%;
                left: 50%;
                width: clamp(30px, 5vw, 60px);
                aspect-ratio: 1/1;
                border-radius: 50%;
                overflow: hidden;
                transform-origin: center center;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .img-1 {
                transform: rotate(0deg) translateY(calc(-1 * clamp(272px, 38.9vw, 558px)));
                img { transform: rotate(0deg); }
            }
            .img-2 {
                transform: rotate(72deg) translateY(calc(-1 * clamp(249px, 35.3vw, 507px)));
                img { transform: rotate(-72deg); }
            }
            .img-3 {
                transform: rotate(144deg) translateY(calc(-1 * clamp(239px, 33.8vw, 488px)));
                img { transform: rotate(-144deg); }
            }
            .img-4 {
                transform: rotate(216deg) translateY(calc(-1 * clamp(255px, 36.1vw, 518px)));
                img { transform: rotate(-216deg); }
            }
            .img-5 {
                transform: rotate(288deg) translateY(calc(-1 * clamp(276px, 39.5vw, 567px)));
                img { transform: rotate(-288deg); }
            }
                }

        .circle-2 {
            width: clamp(406.5px, 58vw, 830px);
            height: clamp(406.5px, 58vw, 830px);
            animation: rotation 10s linear infinite;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .circle-img-wrapp {
                position: absolute;
                top: 50%;
                left: 50%;
                width: clamp(25px, 4vw, 50px);
                aspect-ratio: 1/1;
                border-radius: 50%;
                overflow: hidden;
                transform-origin: center center;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            
            .img-6 {
                transform: rotate(0deg) translateY(calc(-1 * clamp(214px, 30.4vw, 437px)));
                img { transform: rotate(0deg); }
            }
            .img-7 {
                transform: rotate(72deg) translateY(calc(-1 * clamp(193px, 27.5vw, 396px)));
                img { transform: rotate(-72deg); }
            }
            .img-8 {
                transform: rotate(144deg) translateY(calc(-1 * clamp(184px, 26.3vw, 378px)));
                img { transform: rotate(-144deg); }
            }
            .img-9 {
                transform: rotate(216deg) translateY(calc(-1 * clamp(198px, 28.2vw, 405px)));
                img { transform: rotate(-216deg); }
            }
        }

        h2 {
            text-align: center;
            font-size: 45px;
            line-height: 54.4px;
            font-weight: 700;
            color: #18181B;
            margin-bottom: 31px;

            span {
                color: #D2D2D2;
            }
        }

        p {
            font-weight: 400;
            font-size: 18px;
            line-height: 32px;
            color: #12141D;
            margin-bottom: 49px;
            width: 50%;
            text-align: center;
        }
    }
}
@keyframes rotation {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
@media (max-width:1024px){
    .community-wrapper {
        .community-wrapp {
            h2 {
                font-size: 32px;
                line-height: 38px;
                margin-bottom: 22px;
            }

            p {
                font-size: 13px;
                line-height: 23px;
                width: 47%;
                margin-bottom: 35px;
            }
        }
    }
}
@media(max-width: 576px){
    .community-wrapper{
        padding-top: 126px;
        padding-bottom: 157px;
    }
}
@media (max-width: 376px) {
    .community-wrapper {
        .community-wrapp {
            h2 {
                font-size: 22px;
                line-height: 26px;
                margin-bottom: 15px;
            }

            p {
                font-size: 10px;
                line-height: 15.6px;
                width: 100%;
                margin-bottom: 26px;
            }
        }
    }
}
</style>