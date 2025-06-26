<script setup >
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
    <section class="discover-wrapper">
        <div class="container">
            <div class="discover-wrapp">
                <h1>Discover NFTs</h1>
                <div class="discover-menu">
                    <MyButton text="Category" size="height" variant="white" font="manrope" :isUppercase="false" icon="category.svg"></MyButton>
                    <MyButton text="Collection" size="height" variant="white" font="manrope" :isUppercase="false" icon="colection.svg"></MyButton>
                    <MyButton text="Price " size="height" variant="white" font="manrope" :isUppercase="false" icon="price.svg"></MyButton>
                </div>
                <div class="discover-cards">
                    <MyCard
                        v-for="(card,index) in NFT_CARDS_LIST.slice(0,12)"
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
            </div>
        </div>
    </section> 
</template>

<style>
.discover-wrapper{
    margin-top: 155px;
    margin-bottom: 155px;
}
.discover-wrapper .discover-wrapp{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.discover-wrapper .discover-wrapp h1{
    font-weight: 600;
    font-size: 45px;
    line-height: 30px;
    margin-bottom: 44.7px;
    color: #141416;
}
.discover-wrapper .discover-wrapp .discover-menu{
    display: flex;
    gap: 31px;
    margin-bottom: 100px;
}
.discover-wrapper .discover-wrapp .discover-cards{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 39px;
}
@media (max-width: 1024px){
    .discover-wrapper{
        margin-top: 110px;
        margin-bottom: 110px;
    }
    .discover-wrapper .discover-wrapp h1{
        font-size: 32px;
        line-height: 21.34px;
        margin-bottom: 31px;
    }
    .discover-wrapper .discover-wrapp .discover-menu{
        gap: 23px;
        margin-bottom: 71px;
    }
    .discover-wrapper .discover-wrapp .discover-cards{
        gap: 28px;
    }
}
@media (max-width: 900px){
    .discover-wrapper .discover-wrapp .discover-cards{
        grid-template-columns: repeat(3, 1fr);
    }
}
@media (max-width: 768px){
    .discover-wrapper {
        margin-top: 100px;
        margin-bottom: 100px;
    }
    .discover-wrapper .discover-wrapp .discover-menu {
        gap: 18px;
        margin-bottom: 80px;
    }
    .discover-wrapper .discover-wrapp .discover-cards {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }
}
@media (max-width: 500px){
    .discover-wrapper .discover-wrapp .discover-cards{
        grid-template-columns: repeat(1, 1fr);
    }
}
@media (max-width: 376px){
    .discover-wrapper{
        margin-top: 75px;
        margin-bottom: 75px;
    }
    .discover-wrapper .discover-wrapp h1{
        font-size: 30px;
        line-height: 125%;
        margin-bottom: 30px;
    }
    .discover-wrapper .discover-wrapp .discover-menu{
        gap: 14px;
        margin-bottom: 75px;
    }
    .discover-wrapper .discover-wrapp .discover-cards{
        gap: 35px;
    }
}
</style>