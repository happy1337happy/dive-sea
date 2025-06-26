<script setup>
import Header from '@/components/DsHeader.vue'
import Footer from '@/components/DsFooter.vue'
import DsModalCard from '@/components/DsModalCard.vue';
import { computed, onMounted, ref, nextTick } from 'vue';
import { IS_OPEN_MODAL, toggleModal} from '@/store/variables';

const headerRef=ref(null);
const footerRef=ref(null);
const isOpenModal=computed(() => IS_OPEN_MODAL.value)

const headerEl=ref(0);
const footerEl=ref(0);

const headerHeight = ref(0);
const footerHeight = ref(0);

onMounted(async () => {
  await nextTick();
  headerHeight.value = headerRef.value?.$el?.clientHeight || 0;
  footerHeight.value = footerRef.value?.$el?.clientHeight || 0;
});
</script>


<template>
  <Header ref="headerRef"></Header>
  <router-view />
  <DsModalCard 
     v-if="isOpenModal && headerHeight && footerHeight"
  />
  <div
    v-if="isOpenModal && headerHeight && footerHeight"
    class="bg-modal"
    @click="() => toggleModal(false)"
    :style="{
      '--margin-top': headerHeight + 'px',
      '--margin-bottom': footerHeight + 'px'
    }"
  ></div>
  <Footer ref="footerRef"></Footer>
</template>

<style lang="scss">
  .bg-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    background-color: rgba(239, 239, 239, 0.25);
    z-index: 5;
    pointer-events: auto;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      background-color: transparent;
      backdrop-filter: none;
      pointer-events: none;
      z-index: 6;
    }

    &::before {
      top: 0;
      height: var(--margin-top);
    }

    &::after {
      bottom: 0;
      height: var(--margin-bottom);
    }
  }
</style>

