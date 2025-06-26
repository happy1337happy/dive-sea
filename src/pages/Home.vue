<script setup >
import { RouterLink } from 'vue-router';
import Banner from '@/components/DsBanner.vue'
import Weekly from '@/components/DsWeekly.vue'
import Collection from '@/components/DsCollection.vue'
import Marketplace from '@/components/DsMarketplace.vue'
import Collector from '@/components/DsCollector.vue'
import Community from '@/components/DsCommunity.vue'
import Faq from '@/components/DsFaq.vue'
import Create from '@/components/DSCreate.vue'
</script>

<template>
    <Banner></Banner>
    <Weekly></Weekly>
    <Collection></Collection>
    <Marketplace></Marketplace>
    <Collector></Collector>
    <Community></Community>
    <Faq></Faq>
    <Create></Create>
    <!-- <RouterLink to="/about">go to about</RouterLink> -->
</template>