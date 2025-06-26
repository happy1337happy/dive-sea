<script setup>
import MyButton from '@/components/MyButton.vue';
import MyCard from '@/components/MyCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { NFT_CARDS_LIST } from '@/store/variables';
import { useRouter } from 'vue-router';

const router = useRouter();
const onClickCard = (card) => {
    router.push(`/product-detail/${card.id}`);
};

function onSwiper(swiper){
    console.log('Weekly swiper initialized:', swiper);
}

function onSlideChange(swiper){
    console.log('Weekly Slide changed to:', swiper.activeIndex);
}

</script>

<template>
        <section class="weekly-wrapper">
        <div class="weekly-wrapp">
            <h2>Weekly - Top NFT</h2>
            <div class="slider">
                <div class="dude-wrapp">
                    <swiper 
                        :slides-per-group="1"
                        :slides-per-view="5"
                        :space-between="30"
                        :centered-slides="true"
                        :loop="true"
                        :modules="[Navigation]"
                        :navigation="{
                            nextEl: '.swiper-btn-next-2',
                            prevEl: '.swiper-btn-prev-2'
                        }"
                        :observer="true"
                        :observe-parents="true"
                        :breakpoints="{
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 30
                            },
                            900: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                            525: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            375: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            200: {
                                slidesPerView: 2,
                                spaceBetween: 28
                            },
                        }"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                        class="swiper mySwiper"
                    >
                        <swiper-slide v-for="(card, index) in NFT_CARDS_LIST" :key="card.id">
                            <MyCard
                                :image="card.image"
                                :time="card.time"
                                :title="card.title"
                                :price="card.price"
                                @click="onClickCard(card)"
                            >
                                <MyButton text="place bid" size="sigma" fontSize="rem" />
                            </MyCard>
                        </swiper-slide>
                    </swiper>
                    <div class="slider-btn-wrapp">
                        <div class="swiper-btn-prev-2">
                            <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.23973 0.390365C5.80229 -0.0134313 5.12034 0.013843 4.71654 0.451284L1.23402 4.22397C0.852869 4.63688 0.852865 5.27332 1.23401 5.68623L4.71653 9.459C5.12032 9.89645 5.80228 9.92373 6.23973 9.51994C6.67717 9.11615 6.70445 8.43419 6.30066 7.99675L4.48802 6.03303L14.9611 6.03303C15.5565 6.03303 16.0391 5.55043 16.0391 4.95511C16.0391 4.35979 15.5565 3.87718 14.9611 3.87718L4.48805 3.87718L6.30065 1.91356C6.70445 1.47612 6.67717 0.794161 6.23973 0.390365Z" fill="#929292"/>
                            </svg>
                        </div>
                        <div class="swiper-btn-next-2">
                            <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7603 0.390365C11.1977 -0.0134313 11.8797 0.013843 12.2835 0.451284L15.766 4.22397C16.1471 4.63688 16.1471 5.27332 15.766 5.68623L12.2835 9.459C11.8797 9.89645 11.1977 9.92373 10.7603 9.51994C10.3228 9.11615 10.2955 8.43419 10.6993 7.99675L12.512 6.03303L2.03886 6.03303C1.44354 6.03303 0.960937 5.55043 0.960937 4.95511C0.960937 4.35979 1.44354 3.87718 2.03886 3.87718L12.5119 3.87718L10.6993 1.91356C10.2956 1.47612 10.3228 0.794161 10.7603 0.390365Z" fill="#929292"/>
                            </svg>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.weekly-wrapper{
    padding-top: 70px;
    background-color: #F1F1F1;
}
.weekly-wrapper .weekly-wrapp{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.weekly-wrapper .weekly-wrapp h2{
    font-weight: 600;
    font-size: 45px;
    line-height: 26.92px;
    color: #C5C5C5;
    margin-bottom: 100px;
}
.weekly-wrapper .slider {
    width: 100%;
    margin: 0 auto;
}

.weekly-wrapper .slider .dude-wrapp {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.weekly-wrapper .slider .swiper {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
}
.weekly-wrapper .weekly-wrapp .swiper-wrapper{
    padding: 60px 0;
}
.weekly-wrapper .slider .swiper-slide {
    height: auto;
    display: flex;
    justify-content: center; 
}
.weekly-wrapper .weekly-wrapp .slider .slider-btn-wrapp {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 50px; 
    background: #FCFCFD;
    box-shadow: 0px 43px 34px 10.10px rgba(15, 15, 15, 0.12);
    border-radius: 17.2px;
    margin-top: 114px;
    width: 166px;
    height: 69px;
    padding: 15.3px;
    margin-bottom: 90px;
}
.weekly-wrapper .weekly-wrapp .slider .slider-btn-wrapp::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50%;
    width: 2.16px;
    height: 50%; 
    background: #E6E8EC;
}
.weekly-wrapper .weekly-wrapp .slider .slider-btn-wrapp .swiper-btn-next-2,
.weekly-wrapper .weekly-wrapp .slider .slider-btn-wrapp .swiper-btn-prev-2 {
    width: 40px;
    height: 40px; 
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 11px;
}

.weekly-wrapper .weekly-wrapp .slider .slider-btn-wrapp .swiper-btn-prev-2:hover path,
.weekly-wrapper .weekly-wrapp .slider .slider-btn-wrapp .swiper-btn-next-2:hover path {
    fill: #23262F;
}
@media (max-width:1024px){
    .weekly-wrapper{
        padding-top: 50px;
    }
    .weekly-wrapper .weekly-wrapp h2{
        font-weight: 600;
        font-size: 32px;
        line-height: 19.14px;
        margin-bottom: 15px;
    }
    .weekly-wrapper .weekly-wrapp .swiper-wrapper{
        padding: 55px 0;
    }
    .weekly-wrapper .weekly-wrapp .slider .slider-btn-wrapp {
        gap: 50px; 
        box-shadow: 0px 30.66px 24.53px -18.4px #0F0F0F1F;
        border-radius: 17.2px;
        margin-top: 26px;
        width: 166px;
        height: 69px;
        padding: 15.3px;
        margin-bottom: 64px;
    }
    .weekly-wrapper .weekly-wrapp .slider .slider-btn-wrapp::before {
        width: 2.16px;
    }
    .weekly-wrapper .weekly-wrapp .slider .slider-btn-wrapp .swiper-btn-next-2,
    .weekly-wrapper .weekly-wrapp .slider .slider-btn-wrapp .swiper-btn-prev-2 {
        width: 40px;
        height: 40px; 
        padding: 11px;
    }
}
</style>