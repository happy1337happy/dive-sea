<script setup >
import MyButton from '@/components/MyButton.vue';

</script>

<template>
    <section class="collction-wrapper">
        <div class="container">
            <div class="collection-wrapp">
                <h2>Top Collection</h2>
                <div class="collection-tabl">
                    <div class="collection-header">
                        <div class="coll-sigma">Collection</div>
                        <div class="header-item-dude">
                            <div>Volume</div>
                            <div class="header-item">24h %</div>
                            <div class="header-item">Floor Price</div>
                            <div class="header-item">Owners</div>
                            <div class="header-item">Items</div>
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
                            <div class="collection-data-2">+27.78%</div>
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
                </div>
                <div class="explore-wrapper">
                    <MyButton class="collection-btn" @click="$router.push('/stats')" text="Explore All" fontSize="lg" :isUppercase="false" fontWeight="500" icon="grey-arrow.svg" iconPosition="right" variant="transparent"></MyButton>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.collction-wrapper{
    margin-bottom: 100px;
}
.collction-wrapper .collection-wrapp{
    margin-top: 236.4px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.collction-wrapper .collection-wrapp h2{
    font-weight: 600;
    font-size: 45.04px;
    line-height: 44.75px;
}
.collction-wrapper .collection-wrapp .collection-tabl{
    margin-top: 90.6px;
    margin-bottom: 43px;
    width: 100%;
}
.collction-wrapper .collection-wrapp .collection-tabl .coll-sigma{
    flex: 1.18;
} 
.collction-wrapper .collection-wrapp .collection-tabl .collection-header{
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 22px;
    line-height: 28.6px;
    color: #93989A;
    margin-bottom: 46px;
}
.collction-wrapper .collection-wrapp .collection-tabl .collection-header .header-item-dude{
    display: flex;
    gap: 9.5%;
    justify-content: flex-end;
    flex: 4;
}
.collction-wrapper .collection-wrapp .collection-tabl .collection-item{
    display: flex;
    align-items: center;
    border-bottom: 1.69px solid #EBE9E9;
    padding-bottom: 26px;
    margin-bottom: 41px;
    justify-content: space-between;
}
.collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft{
    display: flex;
    align-items: center;
    gap: 25.4px;
    flex: 1.18;
}
.collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft img{
    object-fit: cover;
    width: 80.5px;
    border-radius: 50%;
    display: block;
    aspect-ratio: 1/1;
}
.collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft .nft-name{
    display: flex;
    flex-direction: column;
    gap: 1.75px;
    font-weight: 500;
    font-size: 28px;
    line-height: 39.20px;
    color: #141416;
}
.collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft .nft-name .author{
    font-weight: 400;
    font-size: 22.76px;
    line-height: 34.14px;
    color: #64748B;
}
.collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-info{
    display: flex;
    flex: 4;
    justify-content: flex-end;
    align-items: center;

}
.collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-data-1{
    display: flex;
    gap: 11px;
    font-weight: 600;
    font-size: 24.5px;
    line-height: 34.3px;
    color: #141416;
    margin-right: 9%;
}
.collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-data-2{
    font-weight: 500;
    font-size: 24.5px;
    line-height: 31.8px;
    color: #10C352;
    margin-right: 9%;
}
.collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-data-3{
    display: flex;
    gap: 11px;
    font-weight: 600;
    font-size: 24.5px;
    line-height: 34.3px;
    color: #141416;
    margin-right: 14%;
}
.collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-data-4{
    font-weight: 500;
    font-size: 23.65px;
    line-height: 30.75px;
    color: #010101;
    margin-right: 13%;
}
.collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-data-5{
    font-weight: 500;
    font-size: 23.65px;
    line-height: 30.75px;
    color: #010101;
}

.collction-wrapper .collection-wrapp .collection-tabl .collection-item .ethereum-2{
    width: 16.4px;
    height: 26.9px;
}
.collction-wrapper .collection-wrapp .explore-wrapper{
    width: 100%;
    display: flex;
    justify-content: end;
}
@media (max-width: 1024px){
    .collction-wrapper .collection-wrapp{
        margin-top: 168px;
    }
    .collction-wrapper .collection-wrapp h2 {
        font-weight: 600;
        font-size: 32.03px;
        line-height: 31.83px;
    }
    .collction-wrapper .collection-wrapp .collection-tabl {
        margin-top: 64px;
        margin-bottom: 11px;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-header {
        font-size: 15.65px;
        line-height: 130%;
        margin-bottom: 33px;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item {
        padding-bottom: 18.4px;
        margin-bottom: 29.1px;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft {
        gap: 18px;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft img {
        width: 59.7px;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft .nft-name {
        gap: 1.25px;
        font-size: 19.92px;
        line-height: 140%;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft .nft-name .author {
        font-size: 16.19px;
        line-height: 150%;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-data-1 {
        gap: 7.8px;
        font-size: 17.43px;
        line-height: 140%;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-data-2 {
        font-size: 17.43px;
        line-height: 130%;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-data-3 {
        gap: 7.8px;
        font-size: 17.43px;
        line-height: 140%;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-data-4 {
        font-size: 16.82px;
        line-height: 130%;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .ethereum-2 {
        width: 11.6px;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-data-5 {
        font-size: 16.82px;
        line-height: 130%;
    }
    .collction-wrapper .collection-wrapp .explore-wrapper .collection-btn{
        font-size: 12.57px;
        line-height: 28.39px;
    }
    .btn-dude.icon-right .btn-icon {
        width: 19px;
    }
}
@media (max-width: 768px) {
    .collction-wrapper .collection-wrapp {
        margin-top: 158px; 
    }
    .collction-wrapper .collection-wrapp h2 {
        font-weight: 600;
        font-size: 45px; 
        line-height: 91.74px; 
    }
    .collction-wrapper .collection-wrapp .collection-tabl {
        margin-top: 82px;
        margin-bottom: 22.55px; 
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-header {
        font-size: 28.7px; 
        line-height: 130%;
        margin-bottom: 51.25px; 
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-header .header-item-dude {
        gap: 30px;
        margin-right: 20px;
        justify-content: flex-end;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-header .header-item-dude .header-item {
        display: none; 
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item {
        padding-bottom: 29.73px; 
        margin-bottom: 31.78px; 
        gap: clamp(20px, 5vw, 40px);
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft {
        gap: 25px; 
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft img {
        width: 90.2px;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft .nft-name {
        gap: 14.35px;
        font-size: 28px;
        line-height: 140%;
        width: max-content; 
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft .nft-name .author {
        font-size: 21px; 
        line-height: 150%;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-info {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: end;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-info .mob-none {
        display: none;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-data-1 {
        gap: 12.3px;
        font-size: 31.59px; 
        line-height: 140%;
        align-items: center; 
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .ethereum-2 {
        width: 18.45px; 
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-data-2 {
        font-size: 27.65px;
        line-height: 150%;
    }
    .collction-wrapper .collection-wrapp .explore-wrapper {
        justify-content: center;
    }
} 
@media (max-width: 500px) {
    .collction-wrapper .collection-wrapp {
        margin-top: 100px; 
    }
    .collction-wrapper .collection-wrapp h2 {
        font-size: 35px; 
        line-height: 150%; 
    }
    .collction-wrapper .collection-wrapp .collection-tabl {
        margin-top: 55px;
        margin-bottom: 22.55px; 
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-header {
        font-size: 25px; 
        line-height: 130%;
        margin-bottom: 45px; 
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-header .header-item-dude {
        gap: 25px;
        margin-right: 15px;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item {
        padding-bottom: 29.73px; 
        margin-bottom: 31.78px; 
        gap: clamp(20px, 5vw, 40px);
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft {
        gap: 25px; 
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft img {
        width: 60px;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft .nft-name {
        gap: 14.35px;
        font-size: 24px;
        line-height: 140%;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft .nft-name .author {
        font-size: 16px; 
        line-height: 150%;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-info {
        gap: 20px;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-data-1 {
        gap: 12.3px;
        font-size: 25px; 
        line-height: 140%;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .ethereum-2 {
        width: 15px; 
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-data-2 {
        font-size: 20px;
        line-height: 150%;
    }
}
@media (max-width: 376px){
    .collction-wrapper .collection-wrapp{
        margin-top: 77px;
    }
    .collction-wrapper .collection-wrapp h2 {
        font-weight: 600;
        font-size: 30px;
        line-height: 44.75px;
    }
    .collction-wrapper .collection-wrapp .collection-tabl {
        margin-top: 40px;
        margin-bottom: 11px;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-header {
        font-size: 14px;
        line-height: 130%;
        margin-bottom: 25px;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-header .header-item-dude .header-item{
        display: none;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item {
        padding-bottom: 14.5px;
        margin-bottom: 15.5px;
        gap: 41%;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft {
        gap: 22px;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft img {
        width: 44px;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft .nft-name {
        gap: 7px;
        font-size: 15.41px;
        line-height: 140%;
        width: max-content;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-nft .nft-name .author {
        font-size: 12.52px;
        line-height: 150%;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-info{
        display: flex;
        flex-direction: column;
        gap: 7px;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-info .mob-none{
        display: none;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-data-1 {
        gap: 6px;
        font-size: 15.41px;
        line-height: 140%;
        align-items: center;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .ethereum-2 {
        width: 9px;
    }
    .collction-wrapper .collection-wrapp .collection-tabl .collection-item .collection-data-2 {
        font-size: 13.49px;
        line-height: 150%;
    }
    .collction-wrapper .collection-wrapp .explore-wrapper {
        justify-content: center;
    }
}
</style>