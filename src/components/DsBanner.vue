<script setup >
import MyButton from '@/components/MyButton.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { NFT_CARDS_LIST } from '@/store/variables';
import { useImageLoader } from '@/assets/composables/useImageLoader';

</script>

<template>
        <section class="banner-wrapper">
        <div class="container">
            <div class="banner-wrapp">
                <div class="banner-left">
                    <div class="mob-dude">OVER 1M CREATORS</div>
                    <h1>Discover And Create NFTs</h1>
                    <p class="discription-p">Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a <span class="diablo">$20 bonus</span>.</p>
                    <div class="btn-wrapp-1">
                        <MyButton class="ban-btn" text="Explore More" size="lg" fontWeight="500"></MyButton>
                        <MyButton class="ban-btn" text="create NFT" size="ban" variant="white" fontWeight="500"></MyButton>
                    </div>
                    <ul class="banner-ul">
                        <li>
                            <h3>430K+</h3>
                            <p>Art Works</p>
                        </li>
                        <li>
                            <h3>159K+</h3>
                            <p>Creators</p>
                        </li>
                        <li>
                            <h3>87K+</h3>
                            <p>Collections</p>
                        </li>
                    </ul>
                    <div class="mob-sigma">
                        <div class="mob-trust">
                            <img src="@/assets/img/trustpilot.svg" alt="img">
                        </div>
                        <div class="mob-stars">
                            <img src="@/assets/img/star.svg" alt="img">
                            <img src="@/assets/img/star.svg" alt="img">
                            <img src="@/assets/img/star.svg" alt="img">
                            <img src="@/assets/img/star.svg" alt="img">
                            <img src="@/assets/img/star.svg" alt="img">
                        </div>
                        <span class="mob-numbers">4900+</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider">
            <div class="dude-wrapp">
                <swiper 
                    :slides-per-view="1"
                    :space-between="30"
                    :loop="true"
                    :modules="[Navigation]"
                    :navigation="{
                        nextEl: '.swiper-btn-next',
                        prevEl: '.swiper-btn-prev'
                    }"
                    :observer="true"
                    :observe-parents="true"
                    class="swiper mySwiper"
                >
                    <swiper-slide v-for="card in NFT_CARDS_LIST" :key="card.id">
                        <img :src="useImageLoader(`@/assets/img/${card.image}`)" alt="img" >
                    </swiper-slide>
                </swiper>
                <div class="slider-btn-wrapp">
                    <div class="swiper-btn-prev">  
                        <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.23973 0.390365C5.80229 -0.0134313 5.12034 0.013843 4.71654 0.451284L1.23402 4.22397C0.852869 4.63688 0.852865 5.27332 1.23401 5.68623L4.71653 9.459C5.12032 9.89645 5.80228 9.92373 6.23973 9.51994C6.67717 9.11615 6.70445 8.43419 6.30066 7.99675L4.48802 6.03303L14.9611 6.03303C15.5565 6.03303 16.0391 5.55043 16.0391 4.95511C16.0391 4.35979 15.5565 3.87718 14.9611 3.87718L4.48805 3.87718L6.30065 1.91356C6.70445 1.47612 6.67717 0.794161 6.23973 0.390365Z" fill="#929292"/>
                        </svg>
                    </div>
                    <div class="swiper-btn-next">
                        <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7603 0.390365C11.1977 -0.0134313 11.8797 0.013843 12.2835 0.451284L15.766 4.22397C16.1471 4.63688 16.1471 5.27332 15.766 5.68623L12.2835 9.459C11.8797 9.89645 11.1977 9.92373 10.7603 9.51994C10.3228 9.11615 10.2955 8.43419 10.6993 7.99675L12.512 6.03303L2.03886 6.03303C1.44354 6.03303 0.960937 5.55043 0.960937 4.95511C0.960937 4.35979 1.44354 3.87718 2.03886 3.87718L12.5119 3.87718L10.6993 1.91356C10.2956 1.47612 10.3228 0.794161 10.7603 0.390365Z" fill="#929292"/>
                        </svg>
                    </div>  
                </div>
            </div>
            <div class="img-absolute">
                <img src="@/assets/img/arrow-1.svg" alt="img" class="img-2"> 
                <img src="@/assets/img/dots-1.svg" alt="img" class="img-3">
                <img src="@/assets/img/nft-img-2.jpeg" alt="img" class="img-4">
            </div>
        </div>
    </section>
</template>

<style>
.banner-wrapper{
    margin-top: 111px;
    position: relative;
    overflow: hidden;
    padding-bottom: 165px;
}
.banner-wrapper .banner-wrapp{
    display: flex;
    gap: 48px;
    position: relative;
    
}
.banner-wrapper .banner-wrapp::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 16%;
    height: 1px; 
    background: rgba(32, 31, 31, .2);
}
.banner-wrapper .banner-wrapp .banner-left{
    width: 100%;
    max-width: 568px;
}
.banner-wrapper .banner-wrapp .banner-left .discription-p{
    margin-bottom: 45px;
}
.banner-wrapper .banner-wrapp .banner-left .mob-dude{
    display: none;
    color: #93989A;
    font-size: 10px;
    line-height: 120%;
    font-weight: 600;
}
.banner-wrapper .banner-wrapp .banner-left h1{
    font-weight: 600;
    font-size: 75px;
    line-height: 90px;
    margin-top: 10px;
    margin-bottom: 16px;
}
.banner-wrapper .banner-wrapp .banner-left p{
    font-family: "Inter", serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #676767;
    width: 85%;
}
.banner-wrapper .banner-wrapp .banner-left .diablo{
    font-family: "Inter", serif;
    font-weight: 600;
    color: #141416;
}
.banner-wrapper .banner-wrapp .banner-left .btn-wrapp-1{
    display: flex;
    gap: 23px;
    margin-bottom: 82px;
}
.banner-wrapper .banner-wrapp .banner-left .mob-sigma{
    display: none;
}
.banner-wrapper .banner-wrapp .banner-left .mob-sigma .mob-stars{
    display: flex;
    gap: 3px;
}
.banner-wrapper .banner-wrapp .banner-left .mob-sigma .mob-numbers{
    margin-top: 2px;
}
.banner-wrapper .banner-wrapp .banner-left .banner-ul{
    list-style: none;
    display: flex;
    gap: 62px;
}
.banner-wrapper .banner-wrapp .banner-left .banner-ul li h3{
    font-family: "Public Sans", serif;
    font-weight: 600;
    font-size: 36.7px;
    line-height: 46px;
    margin-bottom: 5.9px;
}
.banner-wrapper .banner-wrapp .banner-left .banner-ul li p{
    font-weight: 500;
    font-size: 12.26px;
    line-height: 18.39px;
    color: #848586;
}
.banner-wrapper .banner-wrapp .banner-right{
    position: relative;
}
.banner-wrapper .img-absolute {
    width: 47%;
    position: relative;
}
.banner-wrapper .img-absolute .img-2 {
    width: 100%;
    max-width: 136px;
    height: auto;
    position: absolute;
    top: 42px;
    right: 182px;
}
.banner-wrapper .img-absolute .img-3{
    width: 100%;
    max-width: 173px;
    height: 192px;
    position: absolute;
    right: -24px;
    top: 0;
}
.banner-wrapper .img-absolute .img-4{
    width: 100%;
    height: auto;
    position: absolute;
    object-fit: cover;
    right: -18.4px;
    top: 180px;
    border-radius: 24px;
    aspect-ratio: 1/1;
}
.banner-wrapper .slider{
    position: absolute;
    width: 50%;
    left: 50%;
    top: 7px;
    display: flex;
    gap: 20px;
}
.banner-wrapper .slider .swiper{
    width: 100%;
    border-radius: 25px;
    margin-left: 0;
    margin-right: 0;
}
.banner-wrapper .slider .swiper .swiper-slide{
    overflow: hidden;
}
.banner-wrapper .slider .swiper .swiper-slide img{
    width: 100%;
    max-width: 391px;
    max-height: 391px;
    border-radius: 25px;
    height: 100%;
    display: block;
    object-fit: cover;
    aspect-ratio: 1/1;
}
.banner-wrapper .slider .dude-wrapp{
    display: flex;
    flex-direction: column;
    width: 58%;
    
}
.banner-wrapper .slider .slider-btn-wrapp {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 50px; 
    background: #FCFCFD;
    box-shadow: 0px 43px 34px 10.10px rgba(15, 15, 15, 0.12);
    border-radius: 17.2px;
    width: 166px;
    height: 69px;
    padding: 15.3px;
    margin-left: 112px;
    margin-top: 71px;
    z-index: 10;
}
.banner-wrapper .slider .slider-btn-wrapp::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50%;
    width: 2.16px;
    height: 50%; 
    background: #E6E8EC;
}
.banner-wrapper .slider .slider-btn-wrapp .swiper-btn-next,
.banner-wrapper .slider .slider-btn-wrapp .swiper-btn-prev {
    width: 40px;
    height: 40px; 
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
    padding: 11px;
}
.banner-wrapper .slider .slider-btn-wrapp .swiper-btn-prev:hover path,
.banner-wrapper .slider .slider-btn-wrapp .swiper-btn-next:hover path {
    fill: #23262F;
}
@media (max-width: 1300px) {
    .banner-wrapper {
        margin-top: 95px;
    }
    .banner-wrapper .banner-wrapp .banner-left h1 {
        font-size: 64px;
        line-height: 120%;
        margin-top: 8px;
        margin-bottom: 13px;
        width: 82%;
    }
    .banner-wrapper .banner-wrapp .banner-left p {
        font-size: 15px;
        line-height: 23px;
        width: 70%;
        margin-bottom: 38px;
    }
    .banner-wrapper .banner-wrapp .banner-left .btn-wrapp-1 {
        margin-bottom: 65px;
        gap: 19px;
    }
    .banner-wrapper .banner-wrapp .banner-left .banner-ul {
        gap: 54px;
    }
    .banner-wrapper .banner-wrapp .banner-left .banner-ul li h3 {
        font-size: 31px;
        line-height: 39px;
        margin-bottom: 4.5px;
    }
    .banner-wrapper .banner-wrapp .banner-left .banner-ul li p {
        font-size: 10.5px;
        line-height: 15.5px;
    }
    .banner-wrapper .img-absolute .img-2 {
        max-width: 90px;
        right: 130px;
        top: 56px;
    }
    .banner-wrapper .img-absolute .img-3 {
        max-width: 148px;
        height: 238px;
    }
    .banner-wrapper .img-absolute .img-4 {
        max-width: 277px;
        border-radius: 19px;
    }
    .banner-wrapper .slider .swiper .swiper-slide img {
        max-width: 335px;
        max-height: 335px;
        border-radius: 21px;
    }
}
@media (max-width: 1024px){
    .banner-wrapper{
        margin-top:79px;
    }
    .banner-wrapper .banner-wrapp .banner-left h1{
        font-size: 53.34px;
        line-height: 120%;
        margin-top: 7px;
        margin-bottom: 11.3px;
        width: 80%;
    }
    .banner-wrapper .banner-wrapp .banner-left p{
        font-size: 12.8px;
        line-height: 19.91px;
        width: 60%;
        margin-bottom: 31px;
    }
    .banner-wrapper .banner-wrapp .banner-left .btn-wrapp-1{
        margin-bottom: 51px;
        gap: 16px;
    }
    .banner-wrapper .banner-wrapp .banner-left .banner-ul{
        gap: 46px;
    }
    .banner-wrapper .banner-wrapp .banner-left .banner-ul li h3{
        font-size: 26.15px;
        line-height: 32.69px;
        margin-bottom: 3.9px;
    }
    .banner-wrapper .banner-wrapp .banner-left .banner-ul li p{
        font-size: 8.72px;
        line-height: 13.08px;
    }
    .banner-wrapper .img-absolute .img-2 {
        max-width: 88px;
        right: 105px;
        top: 70px;
    }
    .banner-wrapper .img-absolute .img-3 {
        max-width: 123px;
        height: 284px;
    }
    .banner-wrapper .img-absolute .img-4{
        max-width: 226.9px;
        border-radius: 15.89px;
    }
    .banner-wrapper .slider .swiper .swiper-slide img{
        max-width: 278px;
        max-height: 278px;
        border-radius: 17.78px;
    }
    .banner-wrapper .slider .slider-btn-wrapp{
        margin-left: 60px;
    }
}
@media (max-width: 900px) {
    .banner-wrapper {
        margin-top: 70px;
    }
    .banner-wrapper .banner-wrapp .banner-left h1 {
        font-size: 48px;
        line-height: 120%;
        margin-top: 6px;
        margin-bottom: 10px;
        width: 80%;
    }
    .banner-wrapper .banner-wrapp .banner-left p {
        font-size: 11.5px;
        line-height: 18px;
        width: 60%;
        margin-bottom: 28px;
    }
    .banner-wrapper .banner-wrapp .banner-left .btn-wrapp-1 {
        margin-bottom: 46px;
        gap: 14px;
    }
    .banner-wrapper .banner-wrapp .banner-left .banner-ul {
        gap: 42px;
    }
    .banner-wrapper .banner-wrapp .banner-left .banner-ul li h3 {
        font-size: 23.5px;
        line-height: 29px;
        margin-bottom: 3.5px;
    }
    .banner-wrapper .banner-wrapp .banner-left .banner-ul li p {
        font-size: 7.8px;
        line-height: 11.7px;
    }
    .banner-wrapper .img-absolute .img-2 {
        max-width: 70px;
        right: 90px;
        top: 65px;
    }
    .banner-wrapper .img-absolute .img-3 {
        max-width: 110px;
        height: 255px;
    }
    .banner-wrapper .img-absolute .img-4 {
        max-width: 204px;
        border-radius: 14.3px;
    }
    .banner-wrapper .slider .swiper .swiper-slide img {
        max-width: 250px;
        max-height: 250px;
        border-radius: 16px;
    }
    .banner-wrapper .slider .slider-btn-wrapp {
        margin-left: 45px;
    }
}
@media (max-width: 768px) {
    .banner-wrapper {
        margin-top: 40px;
    }
    .banner-wrapper .banner-wrapp{
        justify-content: center;
    }
    .banner-wrapper .banner-wrapp::before {
        width: 100%;
    }
    .banner-wrapper .banner-wrapp .banner-left .mob-dude {
        position: relative;
        display: flex;
        justify-content: center;
        margin-top: 100px;
    }
    .banner-wrapper .banner-wrapp .banner-left h1 {
        font-size: 63px;
        margin-bottom: 13px;
        width: 100%;
        text-align: center;
    }
    .banner-wrapper .banner-wrapp .banner-left p {
        font-size: 15.3px;
        line-height: 23.8px;
        width: 100%;
        margin-bottom: 56px;
        text-align: center;
    }
    .banner-wrapper .banner-wrapp .banner-left .btn-wrapp-1 {
        justify-content: center;
        margin-bottom: 25px;
    }
    .banner-wrapper .banner-wrapp .banner-left .mob-sigma {
        display: flex;
        justify-content: center;
        gap: 3%;
        align-items: center;
        margin-bottom: 630px;
    }
    .banner-wrapper .banner-wrapp .banner-left .banner-ul {
        display: none;
    }
    .banner-wrapper .slider {
        position: absolute;
        width: 98%;
        left: 30px;
        top: 540px; 
        gap: 20px;
    }
    .banner-wrapper .img-absolute .img-2 {
        max-width: 80px;
        right: 165px;
        top: 70px;
    }
    .banner-wrapper .img-absolute .img-3 {
        max-width: 124px;
        height: 287px;
        right: -24px;
        top: -60px;
    }
    .banner-wrapper .img-absolute .img-4 {
        max-width: 300px;
        border-radius: 16px;
    }
    .banner-wrapper .slider .swiper .swiper-slide img {
        max-width: 350px;
        max-height: 350px;
        border-radius: 18px;
    }
    .banner-wrapper .slider .dude-wrapp{
        width: 100%;
        max-width: 350px;
    }
    .banner-wrapper .slider .slider-btn-wrapp {
        margin-left: 95px;
    }
}
@media (max-width: 600px) {
    .banner-wrapper {
        margin-top: 35px;
    }
    .banner-wrapper .banner-wrapp::before {
        width: 100%;
    }
    .banner-wrapper .banner-wrapp .banner-left .mob-dude {
        margin-top: 85px;
    }
    .banner-wrapper .banner-wrapp .banner-left h1 {
        font-size: 54px;
        margin-bottom: 11px;
        width: 100%;
    }
    .banner-wrapper .banner-wrapp .banner-left p {
        font-size: 13px;
        line-height: 20px;
        width: 100%;
        margin-bottom: 48px;
    }
    .banner-wrapper .banner-wrapp .banner-left .btn-wrapp-1 {
        margin-bottom: 22px;
    }
    .banner-wrapper .banner-wrapp .banner-left .mob-sigma {
        gap: 3%;
        margin-bottom: 540px;
    }
    .banner-wrapper .slider {
        width: 99%;
        top: 525px;
        gap: 10px;
    }
    .banner-wrapper .img-absolute {
        width: 80%;
    }
    .banner-wrapper .img-absolute .img-2 {
        max-width: 60px;
        right: 120px;
        top: 45px;
    }
    .banner-wrapper .img-absolute .img-3 {
        max-width: 105px;
        height: 245px;
        right: -10px;
        top: -50px;
    }
    .banner-wrapper .img-absolute .img-4 {
        max-width: 220px;
        border-radius: 14px;
        top: 120px;
    }
    .banner-wrapper .slider .swiper {
        border-radius: 15px;
    }
    .banner-wrapper .slider .swiper .swiper-slide img {
        max-width: 250px;
        max-height: 250px;
        border-radius: 15px;
    }
    .banner-wrapper .slider .dude-wrapp {
        width: 100%;
        max-width: 250px;
    }
    .banner-wrapper .slider .slider-btn-wrapp {
        margin-left: 70px;
        margin-top: 50px;
        width: 120px;
        height: 50px;
        border-radius: 12px;
        gap: 40px;
    }
    .banner-wrapper .slider .slider-btn-wrapp .swiper-btn-next,
    .banner-wrapper .slider .slider-btn-wrapp .swiper-btn-prev {
        width: 20px;
        height: 100%;
        padding: 5px;
    }
}
@media (max-width: 400px){
    .banner-wrapper{
        margin-top:30px;
    }
    .banner-wrapper .banner-wrapp::before{
        width: 100%;
    }
    .banner-wrapper .banner-wrapp .banner-left .mob-dude{
        margin-top: 74px;
    }
    .banner-wrapper .banner-wrapp .banner-left h1 {
        font-size: 47.4px;
        margin-bottom: 10px;
        width: 100%;
    }
    .banner-wrapper .banner-wrapp .banner-left p{
        font-size: 11.38px;
        line-height: 17.7px;
        width: 100%;
        margin-bottom: 42px;
    }
    .banner-wrapper .banner-wrapp .banner-left .btn-wrapp-1{
        margin-bottom: 19px;
    }
    .banner-wrapper .banner-wrapp .banner-left .mob-sigma{
        gap: 3%;
        margin-bottom: 470px;
    }
    .banner-wrapper .slider{
        top: 510px;
        width: 100%;
        gap: 0;
    }
    .banner-wrapper .img-absolute {
        width: 100%;
    }
    .banner-wrapper .img-absolute .img-2 {
        max-width: 58.7px;
        right: 102px;
        top: 32px;
    }
    .banner-wrapper .img-absolute .img-3 {
        max-width: 92.2px;
        height: 213.1px;
        right: 0px;
        top: -45px;
    }
    .banner-wrapper .img-absolute .img-4{
        max-width: 170px;
        border-radius: 11.92px;
        top: 90px;
    }
    .banner-wrapper .slider .swiper{
        border-radius: 13px;
    }
    .banner-wrapper .slider .swiper .swiper-slide img{
        max-width: 208px;
        max-height: 208px;
        border-radius: 13px;
    }
    .banner-wrapper .slider .dude-wrapp{
        max-width: 208px;
    }
    .banner-wrapper .slider .slider-btn-wrapp {
        margin-top: 38px;
        margin-left: 64px;
        width: 88px;
        height: 36px;
        border-radius: 9px;
        gap: 35px;
    }
    .banner-wrapper .slider .slider-btn-wrapp .swiper-btn-next,
    .banner-wrapper .slider .slider-btn-wrapp .swiper-btn-prev {
        width: 12px;
        height: 100%; 
        padding: 0px;
    }
}
@media (max-width: 330px){
    .banner-wrapper .banner-wrapp .banner-left h1 {
        font-size: 44.4px;
    }
    .banner-wrapper .slider .swiper .swiper-slide img{
        max-width: 170px;
        max-height: 170px;
        border-radius: 13px;
    }
    .banner-wrapper .img-absolute .img-2 {
        max-width: 45.7px;
        right: 105px;
    }
    .banner-wrapper .slider .slider-btn-wrapp {
        margin-top: 28px;
        margin-left: 39px;
    }
    .banner-wrapper .img-absolute .img-3 {
        max-width: 68.2px;
        height: 212.1px;
        right: 13px;
        top: -62px;
    }
    .banner-wrapper .slider .dude-wrapp {
        max-width: 170px;
    }
    .banner-wrapper .img-absolute .img-4 {
        top: 75px;
    }
}
</style>