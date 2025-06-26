<script setup>
import MyButton from '@/components/MyButton.vue';
import { NFT_CARDS_LIST } from '@/store/variables';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import DsCardDetail from '@/components/DsCardDetail.vue';
const route = useRoute();
const card = ref(null);

defineEmits(['cardClick']);

onMounted(() => {

  const foundCard = NFT_CARDS_LIST.find((c) => c.id == route.params.id);
  card.value = foundCard || null;
});
</script>

<template>
    <section class="detail-wrapper">
        <div class="container">
            <div class="detail-wrapp">
                <div class="det-top">
                    <button @click="$router.back()" class="det-top-btn"><img src="@/assets/img/strelka-levo.svg" alt="img"></button>
                    <h1>Product Detail</h1>
                </div>
                <DsCardDetail 
                    :image="card?.image"
                    :title="card?.title"
                    :description="card?.description"
                    :createByName="card?.createByName"
                    :ovnerByName="card?.ovnerByName"
                    :ovnerByImg="card?.ovnerByImg"
                    :createByImg="card?.createByImg"
                    :price="card?.price"
                    :endIn="card?.endIn"
                >
                    <MyButton  
                        text="Place Bid" 
                        size="full" 
                        fontSize="card" 
                        icon="vallet-1.svg" 
                        :isUppercase="false" 
                        fontWeight="700" 
                        radius="card"
                        @click="$emit('cardClick',card)"
                    ></MyButton>
                </DsCardDetail>
            </div>
        </div>
    </section>
</template>

<style>
.detail-wrapper{
    margin-bottom: 132px;
}
.detail-wrapper .detail-wrapp{
    padding-top: 149px;
    width: 100%;
}
.detail-wrapper .detail-wrapp .det-top{
    display: flex;
    gap: 34.5px;
    align-items: center;
    margin-bottom: 55.22px;
    
}
.detail-wrapper .detail-wrapp .det-top .det-top-btn{
    outline: none;
    border: none;
    width: 36px;
    height: 36px;
    background-color: #E6E8EC;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.detail-wrapper .detail-wrapp .det-top h1{
    font-weight: 600;
    font-size: 31.06px;
    line-height: 27.61px;
    color: #23262F;
}
@media (max-width: 1024px){
    .detail-wrapper{
        margin-bottom: 94px;
    }
    .detail-wrapper .detail-wrapp{
        padding-top: 106px;
    }
    .detail-wrapper .detail-wrapp .det-top{
        gap: 24.5px;
        margin-bottom: 42px;
        
    }
    .detail-wrapper .detail-wrapp .det-top .det-top-btn{
        width: 26.2px;
        height: 26.2px;
    }
    .detail-wrapper .detail-wrapp .det-top .det-top-btn img{
        width: 6px;
    }
    .detail-wrapper .detail-wrapp .det-top h1{
        font-size: 22.09px;
        line-height: 19.64px;
    }
}
</style>