<script setup>
import { NFT_CARDS_LIST } from '@/store/variables';
import MyButton from '@/components/MyButton.vue';
import MyCard from '@/components/MyCard.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const onClickCard = (card) => {
  router.push(`/product-detail/${card.id}`);
};

</script>

<template>
    <section class="marketplace-wrapper">
        <div class="container">
            <div class="marketplace-wrapp">
                <h2>Explore Marketplace</h2>
                <div class="marketplace-menu">
                    <MyButton class="none" text="All" size="height" variant="white" font="manrope" :isUppercase="false"></MyButton>
                    <MyButton text="Category" size="height" variant="white" font="manrope" :isUppercase="false" icon="category.svg"></MyButton>
                    <MyButton text="Collection" size="height" variant="white" font="manrope" :isUppercase="false" icon="colection.svg"></MyButton>
                    <MyButton text="Price" size="height" variant="white" font="manrope" :isUppercase="false" icon="price.svg"></MyButton>
                </div>
                <div class="marcetplace-cart">
                    <MyCard
                        v-for="(card,index) in NFT_CARDS_LIST.slice(0,8)"
                        :key="index"
                        :image="card.image"
                        :time="card.time"
                        :title="card.title"
                        :price="card.price"
                        size="mobileLarge"
                        @click="onClickCard(card)"
                    >
                        <MyButton text="place bid" size="sigma" fontSize="rem" />
                    </MyCard>
                </div>
                <div class="explore-wrapper">
                    <MyButton @click="$router.push('/discover')" text="Explore All" fontSize="lg" :isUppercase="false" fontWeight="500" icon="grey-arrow.svg" iconPosition="right" variant="transparent"></MyButton>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.marketplace-wrapper .marketplace-wrapp{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 103px;
}
.marketplace-wrapper .marketplace-wrapp h2{
    font-weight: 600;
    font-size: 45px;
    line-height: 27px;
    color: #141416;
    margin-bottom: 65px;
}
.marketplace-wrapper .marketplace-wrapp .marketplace-menu{
    display: flex;
    gap: 22px;
    margin-bottom: 100.8px;
}
.marketplace-wrapper .marketplace-wrapp .marcetplace-cart{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 39px;
    margin-bottom: 103.2px;
}
.marketplace-wrapper .marketplace-wrapp .explore-wrapper{
    width: 100%;
    display: flex;
    justify-content: end;
}
@media (max-width:1024px){
    .marketplace-wrapper .marketplace-wrapp{
        padding-bottom: 103px;
    }
    .marketplace-wrapper .marketplace-wrapp h2{
        font-size: 32px;
        line-height: 19.14px;
        margin-bottom: 45px;
    }
    .marketplace-wrapper .marketplace-wrapp .marketplace-menu{
        gap: 15px;
        margin-bottom: 71px;
    }
    .marketplace-wrapper .marketplace-wrapp .marcetplace-cart{
        grid-template-columns: repeat(4, 1fr);
        gap: 28px;
        margin-bottom: 72px;
    }
}
@media (max-width: 768px){
    .marketplace-wrapper .marketplace-wrapp{
        padding-bottom: 103px;
    }
    .marketplace-wrapper .marketplace-wrapp .marcetplace-cart{
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
}
@media(max-width: 576px){
    .marketplace-wrapper .marketplace-wrapp h2{
        font-size: 30px;
        line-height: 125%;
        margin-bottom: 30px;
        width: 98%;
        text-align: center;
    }
    .marketplace-wrapper .marketplace-wrapp .marketplace-menu{
        gap: 14px;
        margin-bottom: 75px;
    }
    .marketplace-wrapper .marketplace-wrapp .marketplace-menu .none{
        display: none;
    }
    .marketplace-wrapper .marketplace-wrapp .marcetplace-cart{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 35px;
        margin-bottom: 103.2px;
    }
}
@media (max-width:376px){
    .marketplace-wrapper .marketplace-wrapp h2{
        font-size: 30px;
        line-height: 125%;
        margin-bottom: 30px;
        width: 98%;
    }
    .marketplace-wrapper .marketplace-wrapp .marketplace-menu{
        gap: 14px;
        margin-bottom: 75px;
    }
    .marketplace-wrapper .marketplace-wrapp .marcetplace-cart{
        grid-template-columns: repeat(1, 1fr);
        margin-bottom: 50px;
    }
}
</style>