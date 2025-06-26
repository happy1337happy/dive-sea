
<script setup>
import DsCardMini from '@/components/DsCardMini.vue';
import MyButton from '@/components/MyButton.vue';
import { NEW_ARRAY, removeCardFromNewArray } from '@/store/variables';
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const card = ref(null);
const selectedCards = ref([...NEW_ARRAY]);

const backdropStyle = computed(() => ({
  zIndex: 5,
}));

const modalCardsStyle = computed(() => {
  const cardCount = selectedCards.value.length;
  if (cardCount <= 1) {
    return {
      overflowY: 'hidden',
      maxHeight: 'none',
      height: 'auto',
    };
  }
  return {
    overflowY: 'auto',
    maxHeight: 'calc(100% - 140px)',
  };
});

onMounted(() => {
  const foundCard = NEW_ARRAY.find((c) => c.id == route.params.id);
  card.value = foundCard || null;
  selectedCards.value = [...NEW_ARRAY];
});

const handleRemoveCard = (cardId) => {
  removeCardFromNewArray(cardId);
  selectedCards.value = [...NEW_ARRAY];
};
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div class="wrapp-modal">
        <div class="modal-content">
          <div class="modal-top">
            <h3>History of Bid</h3>
            <p>Oct 14, 2022</p>
          </div>
          <div class="modal-cards" :style="modalCardsStyle">
            <DsCardMini
              v-for="card in selectedCards"
              :key="card.id"
              :image="card?.image"
              :title="card?.title"
              :endIn="card?.endIn"
              :price="card?.price"
              :id="card?.id"
              @remove="handleRemoveCard"
            />
          </div>
          <div class="modal-bot">
            <p>Your Bid</p>
            <div class="modal-bot-btn">
              <MyButton
                text="Submit"
                size="modal"
                fontSize="modaltext"
                icon="vallet-2.svg"
                :isUppercase="false"
                radius="modalradius"
                gap="gap-11px"
              />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss">
.wrapp-modal {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  .modal-content {
    pointer-events: auto;
    width: 440px;
    background-color: #fff;
    border: 2.12px solid #000000;
    border-radius: 21.2px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 300px;
    padding: 0;
    overflow: auto;
    max-height: 80vh;

    .modal-top {
      padding: 44.5px 28px 0;
      h3 {
        font-weight: 600;
        font-size: 20.26px;
        line-height: 29.26px;
        margin-bottom: 3px;
        color: #000000;
      }
      p {
        font-weight: 400;
        font-size: 14.63px;
        line-height: 18.01px;
        margin-bottom: 18.3px;
        color: #888888;
      }
    }

    .modal-cards {
      flex: 1;
      margin-bottom: 45px;
      display: flex;
      flex-direction: column;
      gap: 17.5px;
      min-height: 100px;
      padding: 10px 15px 30px;
    }

    .modal-bot {
      padding: 0 21px 40px;
      p {
        font-size: 20.26px;
        line-height: 29.26px;
        font-weight: 600;
        color: #000000;
        margin-bottom: 12px;
      }

      .modal-bot-btn {
        display: flex;
        justify-content: center;
      }
    }
  }
}

@media (max-width: 1024px) {
  .wrapp-modal {
    .modal-content {
      width: 312px;
      border: 1.51px solid #000000;
      border-radius: 15.08px;
      padding: 0;

      .modal-top {
        padding: 31px 20px 0;
        h3 {
          font-size: 14.41px;
          line-height: 20.81px;
        }
        p {
          font-size: 10.4px;
          line-height: 12.81px;
          margin-bottom: 13px;
        }
      }

      .modal-cards {
        margin-bottom: 32px;
        gap: 12.5px;
        max-height: calc(100% - 100px);
        flex: 1 1 auto;
        overflow-y: auto;
      }

      .modal-bot {
        padding: 0 17.7px 28.8px;
        p {
          font-size: 14.41px;
          line-height: 20.81px;
        }
      }
    }
  }
}
</style>