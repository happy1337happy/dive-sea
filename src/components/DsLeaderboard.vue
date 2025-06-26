<script setup>
import MyButton from '@/components/MyButton.vue';

</script>

<template>
        <section class="leader-wrapper">
       <div class="container">
        <div class="leader-wrapp">
            <h1>Leaderboard NFTs</h1>
            <div class="navigation-wrapp">
                <MyButton text="Category" size="height" variant="white" font="manrope" :isUppercase="false" icon="category.svg"></MyButton>
                <MyButton text="Collection" size="height" variant="white" font="manrope" :isUppercase="false" icon="colection.svg"></MyButton>
                <MyButton text="Price " size="height" variant="white" font="manrope" :isUppercase="false" icon="price.svg"></MyButton>
            </div>
            <div class="collection-tabl">
                <div class="collection-header">
                    <div class="coll-sigma">Collection</div>
                    <div class="header-item-dude">
                        <div>Volume</div>
                        <div class="header-item">24h % </div>
                        <div class="header-item">Floor Price </div>
                        <div class="header-item">Owners </div>
                        <div class="header-item">Items </div>
                    </div>
                </div>
                <div class="collection-item">
                    <div class="collection-nft">
                        <img src="@/assets/img/nft-img-2.jpeg" alt="nft-img">
                        <span class="nft-name">Alex Ca. <span class="author">By Alex</span></span>
                    </div>
                    <div class="collection-info">
                        <div class="collection-data-1"><img src="@/assets/img/ethereum.svg" alt="img" class="ethereum-2">8,456</div>
                        <div class="collection-data-2">+27.78%</div>
                        <div class="collection-data-3 mob-none"><img src="@/assets/img/ethereum.svg" alt="img" class="ethereum-2">3.5</div>
                        <div class="collection-data-4 mob-none">2.2K</div>
                        <div class="collection-data-5 mob-none">500</div>
                    </div>
                </div>
                <div class="collection-item">
                    <div class="collection-nft">
                        <img src="@/assets/img/nft-img-3.jpeg" alt="nft-img">
                        <span class="nft-name">Alex Ca. <span class="author">By Alex</span></span>
                    </div>
                    <div class="collection-info">
                        <div class="collection-data-1"><img src="@/assets/img/ethereum.svg" alt="img" class="ethereum-2">8,456</div>
                        <div class="collection-data-2 ">+27.78%</div>
                        <div class="collection-data-3 mob-none"><img src="@/assets/img/ethereum.svg" alt="img" class="ethereum-2">3.5</div>
                        <div class="collection-data-4 mob-none">2.2K</div>
                        <div class="collection-data-5 mob-none">500</div>
                    </div>
                </div>
                <div class="collection-item">
                    <div class="collection-nft">
                        <img src="@/assets/img/nft-img-4.jpeg" alt="nft-img">
                        <span class="nft-name">Alex Ca. <span class="author">By Alex</span></span>
                    </div>
                    <div class="collection-info">
                        <div class="collection-data-1"><img src="@/assets/img/ethereum.svg" alt="img" class="ethereum-2">8,456</div>
                        <div class="collection-data-2">+27.78%</div>
                        <div class="collection-data-3 mob-none"><img src="@/assets/img/ethereum.svg" alt="img" class="ethereum-2">3.5</div>
                        <div class="collection-data-4 mob-none">2.2K</div>
                        <div class="collection-data-5 mob-none">500</div>
                    </div>
                </div>
                <div class="collection-item">
                    <div class="collection-nft">
                        <img src="@/assets/img/nft-img-5.jpeg" alt="nft-img">
                        <span class="nft-name">Alex Ca. <span class="author">By Alex</span></span>
                    </div>
                    <div class="collection-info">
                        <div class="collection-data-1"><img src="@/assets/img/ethereum.svg" alt="img" class="ethereum-2">8,456</div>
                        <div class="collection-data-2">+27.78%</div>
                        <div class="collection-data-3 mob-none"><img src="@/assets/img/ethereum.svg" alt="img" class="ethereum-2">3.5</div>
                        <div class="collection-data-4 mob-none">2.2K</div>
                        <div class="collection-data-5 mob-none">500</div>
                    </div>
                </div>
                <div class="collection-item">
                    <div class="collection-nft">
                        <img src="@/assets/img/nft-img-6.jpeg" alt="nft-img">
                        <span class="nft-name">Alex Ca. <span class="author">By Alex</span></span>
                    </div>
                    <div class="collection-info">
                        <div class="collection-data-1"><img src="@/assets/img/ethereum.svg" alt="img" class="ethereum-2">8,456</div>
                        <div class="collection-data-2">+27.78%</div>
                        <div class="collection-data-3 mob-none"><img src="@/assets/img/ethereum.svg" alt="img" class="ethereum-2">3.5</div>
                        <div class="collection-data-4 mob-none">2.2K</div>
                        <div class="collection-data-5 mob-none">500</div>
                    </div>
                </div>
                <div class="collection-item">
                    <div class="collection-nft">
                        <img src="@/assets/img/nft-img-7.jpeg" alt="nft-img">
                        <span class="nft-name">Alex Ca. <span class="author">By Alex</span></span>
                    </div>
                    <div class="collection-info">
                        <div class="collection-data-1"><img src="@/assets/img/ethereum.svg" alt="img" class="ethereum-2">8,456</div>
                        <div class="collection-data-2">+27.78%</div>
                        <div class="collection-data-3 mob-none"><img src="@/assets/img/ethereum.svg" alt="img" class="ethereum-2">3.5</div>
                        <div class="collection-data-4 mob-none">2.2K</div>
                        <div class="collection-data-5 mob-none">500</div>
                    </div>
                </div>
                <div class="collection-item">
                    <div class="collection-nft">
                        <img src="@/assets/img/nft-img-8.jpeg" alt="nft-img">
                        <span class="nft-name">Alex Ca. <span class="author">By Alex</span></span>
                    </div>
                    <div class="collection-info">
                        <div class="collection-data-1"><img src="@/assets/img/ethereum.svg" alt="img" class="ethereum-2">8,456</div>
                        <div class="collection-data-2">+27.78%</div>
                        <div class="collection-data-3 mob-none"><img src="@/assets/img/ethereum.svg" alt="img" class="ethereum-2">3.5</div>
                        <div class="collection-data-4 mob-none">2.2K</div>
                        <div class="collection-data-5 mob-none">500</div>
                    </div>
                </div>
                <div class="collection-item">
                    <div class="collection-nft">
                        <img src="@/assets/img/nft-img-9.jpeg" alt="nft-img">
                        <span class="nft-name">Alex Ca. <span class="author">By Alex</span></span>
                    </div>
                    <div class="collection-info">
                        <div class="collection-data-1"><img src="@/assets/img/ethereum.svg" alt="img" class="ethereum-2">8,456</div>
                        <div class="collection-data-2">+27.78%</div>
                        <div class="collection-data-3 mob-none"><img src="@/assets/img/ethereum.svg" alt="img" class="ethereum-2">3.5</div>
                        <div class="collection-data-4 mob-none">2.2K</div>
                        <div class="collection-data-5 mob-none">500</div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </section>
</template>
    

<style>
    .leader-wrapper{
        margin-top: 155px;
        margin-bottom: 200px;
    }
    .leader-wrapper .leader-wrapp{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .leader-wrapper .leader-wrapp h1{
        font-size: 45px;
        line-height: 125%;
        font-weight: 600;
        margin-bottom: 45px;
        text-align: center;
    }
    .leader-wrapper .leader-wrapp .navigation-wrapp{
        display: flex;
        gap: 31px;
        margin-bottom: 98px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl{
        width: 100%;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .coll-sigma{
        flex: 1.18;
    } 
    .leader-wrapper .leader-wrapp .collection-tabl .collection-header{
        display: flex;
        justify-content: space-between;
        font-weight: 500;
        font-size: 22px;
        line-height: 28.6px;
        color: #141416;
        margin-bottom: 46px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-header .header-item-dude{
        display: flex;
        gap: 9.5%;
        justify-content: flex-end;
        flex: 4;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item{
        display: flex;
        align-items: center;
        border-bottom: 1.69px solid #EBE9E9;
        padding-bottom: 26px;
        margin-bottom: 41px;
        justify-content: space-between;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft{
        display: flex;
        align-items: center;
        gap: 25.4px;
        flex: 1.18;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft img{
        object-fit: cover;
        width: 80.5px;
        height: auto;
        border-radius: 50%;
        display: block;
        aspect-ratio: 1/1;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft .nft-name{
        display: flex;
        flex-direction: column;
        gap: 1.75px;
        font-weight: 500;
        font-size: 28px;
        line-height: 39.20px;
        color: #141416;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft .nft-name .author{
        font-weight: 400;
        font-size: 22.76px;
        line-height: 34.14px;
        color: #64748B;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-info{
        display: flex;
        flex: 4;
        justify-content: flex-end;
        align-items: center;

    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-data-1{
        display: flex;
        gap: 11px;
        font-weight: 600;
        font-size: 24.5px;
        line-height: 34.3px;
        color: #141416;
        margin-right: 9%;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-data-2{
        font-weight: 500;
        font-size: 24.5px;
        line-height: 31.8px;
        color: #10C352;
        margin-right: 9%;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-data-3{
        display: flex;
        gap: 11px;
        font-weight: 600;
        font-size: 24.5px;
        line-height: 34.3px;
        color: #141416;
        margin-right: 14%;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-data-4{
        font-weight: 500;
        font-size: 23.65px;
        line-height: 30.75px;
        color: #010101;
        margin-right: 13%;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-data-5{
        font-weight: 500;
        font-size: 23.65px;
        line-height: 30.75px;
        color: #010101;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .ethereum-2{
        width: 16.4px;
        height: 26.9px;
    }
@media (max-width: 1024px){
    .leader-wrapper{
        margin-top: 110px;
        margin-bottom: 150px;
    }
    .leader-wrapper .leader-wrapp h1{
        font-size: 32px;
        margin-bottom: 31px;
    }
    .leader-wrapper .leader-wrapp .navigation-wrapp{
        gap: 14px;
        margin-bottom: 75px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-header{
        font-size: 15.65px;
        line-height: 130%;
        margin-bottom: 33px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item{
        padding-bottom: 18.4px;
        margin-bottom: 29.1px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft{
        gap: 18px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft img{
        width: 59.7px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft .nft-name{
        gap: 1.25px;
        font-size: 19.92px;
        line-height: 140%;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft .nft-name .author{
        font-size: 16.19px;
        line-height: 150%;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-data-1{
        gap: 7.8px;
        font-size: 17.43px;
        line-height: 140%;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-data-2{
        font-size: 17.43px;
        line-height: 130%;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-data-3{
        gap: 7.8px;
        font-size: 17.43px;
        line-height: 140%;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-data-4{
        font-size: 16.82px;
        line-height: 130%;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-data-5{
        font-size: 16.82px;
        line-height: 130%;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .ethereum-2{
        width: 11.6px;
    }
}
@media (max-width: 768px){
    .leader-wrapper{
        margin-top: 75px;
        margin-bottom: 100px;
    }
    .leader-wrapper .leader-wrapp h1{
        font-size: 40px;
        margin-bottom: 30px;
    }
    .leader-wrapper .leader-wrapp .navigation-wrapp{
        gap: 25px;
        margin-bottom: 95px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-header{
        font-size: 28.7px; 
        line-height: 130%;
        margin-bottom: 51.25px; 
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-header .header-item-dude{
        gap: 30px;
        /* margin-right: 20px; */
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-header .header-item-dude .header-item {
        display: none; 
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item{
        padding-bottom: 29.73px; 
        margin-bottom: 31.78px; 
        gap: clamp(20px, 5vw, 40px);
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft{
        gap: 25px; 
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft img{
        width: 90.2px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft .nft-name{
        gap: 14.35px;
        font-size: 28px;
        line-height: 140%;
        width: max-content; 
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft .nft-name .author{
        font-size: 21px; 
        line-height: 150%;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-info{
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: end;

    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-info .mob-none {
        display: none;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-data-1{
        gap: 12.3px;
        font-size: 31.59px; 
        line-height: 140%;
        align-items: center;
        margin-right: 0;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-data-2{
        margin-right: 0;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .ethereum-2{
        width: 18.45px;
    }
}
@media (max-width: 500px) {
    .leader-wrapper .leader-wrapp h1 {
        font-size: 35px; 
        line-height: 150%; 
    }
    .leader-wrapper .leader-wrapp .navigation-wrapp{
        gap: 20px;
        margin-bottom: 85px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl {
        margin-top: 55px;
        margin-bottom: 22.55px; 
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-header {
        font-size: 25px; 
        line-height: 130%;
        margin-bottom: 45px; 
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-header .header-item-dude {
        gap: 25px;
        /* margin-right: 15px; */
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item {
        padding-bottom: 29.73px; 
        margin-bottom: 31.78px; 
        gap: clamp(20px, 5vw, 40px);
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft {
        gap: 25px; 
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft img {
        width: 60px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft .nft-name {
        gap: 14.35px;
        font-size: 24px;
        line-height: 140%;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft .nft-name .author {
        font-size: 16px; 
        line-height: 150%;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-info {
        gap: 20px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-data-1 {
        gap: 12.3px;
        font-size: 25px; 
        line-height: 140%;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .ethereum-2 {
        width: 15px; 
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-data-2 {
        font-size: 20px;
        line-height: 150%;
    }
}
@media (max-width: 376px){
    .leader-wrapper .leader-wrapp h1 {
        font-weight: 600;
        font-size: 30px;
        line-height: 44.75px;
        width: 87%;
    }
    .leader-wrapper .leader-wrapp .navigation-wrapp{
        gap: 10px;
        margin-bottom: 75px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl {
        margin-top: 40px;
        margin-bottom: 11px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-header {
        font-size: 14px;
        line-height: 130%;
        margin-bottom: 25px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-header .header-item-dude .header-item{
        display: none;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item {
        padding-bottom: 14.5px;
        margin-bottom: 15.5px;
        gap: 41%;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft {
        gap: 22px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft img {
        width: 44px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft .nft-name {
        gap: 7px;
        font-size: 15.41px;
        line-height: 140%;
        width: max-content;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-nft .nft-name .author {
        font-size: 12.52px;
        line-height: 150%;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-info{
        display: flex;
        flex-direction: column;
        gap: 7px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-info .mob-none{
        display: none;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-data-1 {
        gap: 6px;
        font-size: 15.41px;
        line-height: 140%;
        align-items: center;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .ethereum-2 {
        width: 9px;
    }
    .leader-wrapper .leader-wrapp .collection-tabl .collection-item .collection-data-2 {
        font-size: 13.49px;
        line-height: 150%;
    }
    .leader-wrapper .leader-wrapp .explore-wrapper {
        justify-content: center;
    }
}
</style>