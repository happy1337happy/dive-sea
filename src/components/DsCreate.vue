<script setup >
import MyButton from '@/components/MyButton.vue';

</script>

<template>
    <section class="create-wrapper">
        <div class="container">
            <div class="create-wrapp">
                <div class="create-left">
                    <div class="cre-left-top">
                        <h2>Create and Sell NFTs</h2>
                        <p>World’s Largest NFT Place</p>
                    </div>
                    <div class="cre-left-bot">
                        <MyButton text="Explore More" fontSize="lg" :isUppercase="false" variant="white" font="outfit"></MyButton>
                        <MyButton text="Sell Artwork" fontSize="lg" :isUppercase="false" variant="white-outline"  font="outfit"></MyButton>
                    </div>
                </div>
                <div class="create-right">
                    <img src="@/assets/img/nft-img-1.jpeg" alt="img">
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.create-wrapper{
    margin-bottom: 160px;
}
.create-wrapper .create-wrapp{
    padding: 31px 31px 31px 66px;
    background-color: #141416;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
}
.create-wrapper .create-wrapp .create-left .cre-left-bot{
    display: flex;
    gap: 30px;
    margin-bottom: 20px;
} 
.create-wrapper .create-wrapp h2{
    font-size: 45px;
    line-height: 130%;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 12.48px;
}
.create-wrapper .create-wrapp p{
    font-size: 20.27px;
    line-height: 130%;
    font-weight: 500;
    color: #999999; 
    margin-bottom: 50.84px;
}
.create-wrapper .create-wrapp .create-right img{
    display: block;
    object-fit: cover;
    width: 100%;
    max-width: 369px;
    height: 100%;
    border-radius: 15.79px;
    position: relative;
    z-index: 1;
}
.create-wrapper .create-wrapp .create-right {
    position: relative;
}
.create-wrapper .create-wrapp .create-right::before {
    content: "";
    position: absolute;
    top: 20px; 
    right: -9px; 
    bottom: -15px; 
    left: -12px; 
    background-image: url('@/assets/img/nft-img-1.jpeg'); 
    background-position: center;
    filter: blur(52px); 
    z-index: 0; 
    border-radius: 7.55px; 
}
@media (max-width:1024px){
    .create-wrapper{
        margin-bottom: 113px;
    }
    .create-wrapper .create-wrapp{
        padding: 22px 22px 22px 46px;
        border-radius: 21.3px;
    }
    .create-wrapper .create-wrapp .create-left .cre-left-bot{
        gap: 21px;
        margin-bottom: 15px;
    } 
    .create-wrapper .create-wrapp h2{
        font-size: 32px;
        margin-bottom: 8.12px;
    }
    .create-wrapper .create-wrapp p{
        font-size: 14.41px;
        line-height: 130%;
        margin-bottom: 35.6px;
    }
    .create-wrapper .create-wrapp .create-right img{
        max-width: 262px;
        border-radius: 15.79px;
    }
    .create-wrapper .create-wrapp .create-right::before {
        top: 20px; 
        right: -9px; 
        bottom: -15px; 
        left: -12px; 
        filter: blur(52px); 
        border-radius: 7.55px; 
    }
}
@media (max-width: 768px) {
    .create-wrapper {
        margin-bottom: 200px;
    }

    .create-wrapper .create-wrapp {
        flex-direction: column;
        align-items: center;
        position: relative;
        padding: 32px 56px;
        border-radius: 24px;
        max-height: 350px;
    }

    .create-wrapper .create-wrapp .create-left {
        text-align: center;
    }

    .create-wrapper .create-wrapp .create-left .cre-left-bot {
        gap: 24px;
        margin-bottom: 24px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .create-wrapper .create-wrapp h2 {
        font-size: 34px;
        margin-bottom: 12px;
        text-align: center;
    }

    .create-wrapper .create-wrapp p {
        text-align: center;
        font-size: 16px;
        line-height: 130%;
        margin-bottom: 35px;
    }

    .create-wrapper .create-wrapp .create-right {
        bottom: -25px;
        margin-top: 20px;
    }

    .create-wrapper .create-wrapp .create-right img {
        max-width: 340px;
        border-radius: 14px;
    }
}
@media (max-width: 576px) {
    .create-wrapper {
        margin-bottom: 160px;
    }

    .create-wrapper .create-wrapp {
        padding: 28px 46px;
        border-radius: 20px;
        max-height: 280px;
    }

    .create-wrapper .create-wrapp .create-left .cre-left-bot {
        gap: 20px;
        margin-bottom: 20px;
    }

    .create-wrapper .create-wrapp h2 {
        font-size: 25px;
        margin-bottom: 10px;
    }

    .create-wrapper .create-wrapp p {
        font-size: 12px;
        line-height: 130%;
        margin-bottom: 30px;
    }

    .create-wrapper .create-wrapp .create-right {
        bottom: 0;
    }
    .create-wrapper .create-wrapp .create-right img {
        max-width: 300px;
        border-radius: 12px;
    }
}
@media (max-width: 386px){
    .create-wrapper{
        margin-bottom: 191px;
    }
    .create-wrapper .create-wrapp{
        padding: 22px 39px;
        border-radius: 14.87px;
        max-height: 211px;
    }
    .create-wrapper .create-wrapp .create-left .cre-left-bot{
        gap: 15px;
        margin-bottom: 15px;
    } 
    .create-wrapper .create-wrapp h2{
        font-size: 22.3px;
        margin-bottom: 6px;
    }
    .create-wrapper .create-wrapp p{
        font-size: 10.04px;
        line-height: 130%;
        margin-bottom: 25px;
    }
    .create-wrapper .create-wrapp .create-right img{
        max-width: 252px;
        border-radius: 9.2px;
    }
}

</style>