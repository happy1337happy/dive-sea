<template>
    <div class="custom-select" :class="{'is-open' : isOpen}" ref="selectRef">
        <div class="select-selected" @click="toggleDropdown" :class="{'select-active' : isOpen}">
            <span class="selected-text">{{ selected.label || 'Royalty' }}</span>
            <img src="@/assets/img/seraya-strelka-niz.svg" alt="img" class="select-arrow" />
        </div>
        <div class="select-item-wrapper" v-show="isOpen">
            <div class="select-item" v-for="option in options" :key="option.value" @click="selectOption(option)">{{ option.label }}</div>
        </div>
    </div>
</template>

<script setup>
import{ref, onMounted, watch, onUnmounted,} from 'vue'


const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    modelValue:{
        type:[String, Number],
        default: ''
    },
})

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const selected = ref({ label: '', value: ''});
const selectRef = ref(null);

function selectOption(option) {
    selected.value = option;
    emit('update:modelValue', option.value);
    isOpen.value = false;
}
function toggleDropdown() {
    isOpen.value = !isOpen.value
};

watch(() => 
    props.modelValue, 
    (newValue) => {
    const foundOption = props.options.find(
        (option) => String(option.value) === String(newValue)
    );
    selected.value = foundOption || { label: '', value: ''};
},
    {immediate: true}
);

function handleClickOutside(event) {
    const selectElement = selectRef.value;
    if (selectElement && !selectElement.contains(event.target)) {
        isOpen.value = false;
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});


</script>

<style scoped lang="scss">
    .custom-select{
        position: relative;
        width: 146px;
        height: 63px;
        background-color: #EFEFEF;
        border-radius: 12.33px;
        font-weight: 400;
        font-size: 13.45px;
        line-height: 100%;
        color: #9596A6;
        cursor: pointer;
        .select-selected{
            padding: 21px 26px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            box-sizing: border-box;
            .select-arrow {
                transition: transform 0.3s ease;
            }
            &.select-active .select-arrow {
                transform: rotate(180deg);
            }
        }
        .select-item-wrapper{
            position: absolute;
            background-color: #EFEFEF;
            top: 100%;
            left: 0;
            right: 0;
            width: 100%;
            z-index: 99;
            border-radius: 12.33px;
            margin-top: 5px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            max-height: 200px;
            overflow-y: auto;
            .select-item{
                padding: 10px 26px;
                text-align: left;
                cursor: pointer;
                
                &:hover {
                    background-color: #E0E0E0;
                }
            }
        }
    }
@media (max-width:1024px){
    .custom-select{
        width: 104px;
        height: 45px;
        border-radius: 8.77px;
        font-size: 10px;
        .select-selected{
            padding: 15px 18.5px;
        }
        .select-item-wrapper{
            border-radius: 8.77px;
        }
    }
}
@media (max-width: 376px){
    .custom-select{
        width: 94px;
        height: 40px;
        border-radius: 7.95px;
        .select-selected{
            padding: 15px 18.5px;
        }
        .select-item-wrapper{
            border-radius: 7.95px;
        }
    }
}
</style>