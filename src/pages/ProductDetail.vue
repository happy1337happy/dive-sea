<script setup>
    import {ref} from 'vue';
    import Detail from '@/components/DsDetail.vue';
    import { useRoute } from 'vue-router';
    // import DsModalCard from '@/components/DsModalCard.vue';
    import { NEW_ARRAY, addCardToNewArray, toggleModal } from '@/store/variables';


    const route = useRoute();
    const id = route.params.id;

    const cardClick =(e)=>{
        addCardToNewArray(e);
        toggleModal(true);
    }
</script>

<template>
    <Detail 
        :id="id"
        @cardClick="cardClick"
    ></Detail>
    <!-- <DsModalCard 
        v-if="isOpenModal"
        @close="isOpenModal=false"
    ></DsModalCard> -->
</template>