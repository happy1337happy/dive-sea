<script setup>
import GreatCard from '@/components/GreatCard.vue';

</script>

<template>
    <div class="great-wrapper">
        <div class="container">
            <div class="great-wrapp">
                <h1>Meet Our Great Creators</h1>
                <div class="great-catrd-wrapper">
                    <GreatCard @click="$router.push('/author')" image="nft-img-2.jpeg" circleIcon="nft-img-2.jpeg" title="Harry K." firstNumbers="5.8K" secondNumbers="17.9K" firstPrice="17.5" secondPrice="22.4" otherNft1="nft-img-3.jpeg" otherNft2="nft-img-4.jpeg" otherNft3="nft-img-5.jpeg" otherWorksCount="+55"></GreatCard>
                    <GreatCard @click="$router.push('/author')" image="nft-img-3.jpeg" circleIcon="nft-img-3.jpeg" title="Zeno Ka." firstNumbers="5.8K" secondNumbers="17.9K" firstPrice="17.5" secondPrice="22.4" otherNft1="nft-img-6.jpeg" otherNft2="nft-img-7.jpeg" otherNft3="nft-img-8.jpeg" otherWorksCount="+55"></GreatCard>
                    <GreatCard @click="$router.push('/author')" image="nft-img-4.jpeg" circleIcon="nft-img-4.jpeg" title="Leon Zn." firstNumbers="5.8K" secondNumbers="17.9K" firstPrice="17.5" secondPrice="22.4" otherNft1="nft-img-9.jpeg" otherNft2="nft-img-2.jpeg" otherNft3="nft-img-3.jpeg" otherWorksCount="+55"></GreatCard>
                    <GreatCard @click="$router.push('/author')" image="nft-img-5.jpeg" circleIcon="nft-img-5.jpeg" title="Alex Ca." firstNumbers="5.8K" secondNumbers="17.9K" firstPrice="17.5" secondPrice="22.4" otherNft1="nft-img-4.jpeg" otherNft2="nft-img-5.jpeg" otherNft3="nft-img-6.jpeg" otherWorksCount="+55"></GreatCard>
                    <GreatCard @click="$router.push('/author')" image="nft-img-6.jpeg" circleIcon="nft-img-6.jpeg" title="Zeno Ka." firstNumbers="5.8K" secondNumbers="17.9K" firstPrice="17.5" secondPrice="22.4" otherNft1="nft-img-7.jpeg" otherNft2="nft-img-8.jpeg" otherNft3="nft-img-9.jpeg" otherWorksCount="+55"></GreatCard>
                    <GreatCard @click="$router.push('/author')" image="nft-img-7.jpeg" circleIcon="nft-img-7.jpeg" title="Leon Zn." firstNumbers="5.8K" secondNumbers="17.9K" firstPrice="17.5" secondPrice="22.4" otherNft1="nft-img-2.jpeg" otherNft2="nft-img-3.jpeg" otherNft3="nft-img-4.jpeg" otherWorksCount="+55"></GreatCard>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .great-wrapper{
        margin-top: 155px;
        margin-bottom: 380px;
    }
    .great-wrapp{
        display: flex;
        flex-direction: column;
        align-items: center;
    } 
    .great-wrapp h1{
        font-size: 45px;
        line-height: 120%;
        font-weight: 600;
        margin-bottom: 129px;
        color: #141416;
    }
    .great-catrd-wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 84px 60px;
        width: 100%;
    }
@media (max-width: 1024px){
    .great-wrapper{
        margin-top: 110px;
        margin-bottom: 270px;
    }
    .great-wrapp h1{
        font-size: 32px;
        margin-bottom: 91px;
        text-align: center;
    }
    .great-catrd-wrapper{
        gap: 59px 42px;
    }
}
@media (max-width: 376px){
    .great-wrapper{
        margin-top: 75px;
        margin-bottom: 70px;
    }
    .great-wrapp h1{
        font-size: 30px;
        margin-bottom: 70px;
        width: 73%;
    }
    .great-catrd-wrapper{
        gap: 40px;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
}
</style>