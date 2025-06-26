<template>
    <div class="ds-tabs">
        <div class="tabs-header">
            <div
                class="tabs-header-item"
                :class="{active: activeTab === tab}"
                v-for="(tab,index) in $props.tabs"
                :key="index"
                @click="switchTab(tab)"
            >
                <slot :name="tabHeadSlotName(tab)">{{ tab }}</slot>
            </div>
        </div>
        <div class="tabs-content">
            <slot :name="tabPanelSlotName"></slot>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';

const props = defineProps({
    initialTab:{
        type:[String,Number],
        default: 0
    },
    tabs:[Array,Object]
})

const emit = defineEmits(['changeTab'])

const activeTab = ref(props.initialTab)

onMounted (() => {
    activeTab.value = props.initialTab
});

watch (
    () => props.initialTab,
    (newValue) => {
        activeTab.value = newValue
    }
)

const tabPanelSlotName = computed(() => {
    return `tab-panel-${activeTab.value}`
})

const tabHeadSlotName = (tabName) => {
    return `tab-head-${tabName}`
}

const switchTab = (tabName) => {
    activeTab.value = tabName;
    emit('changeTab', tabName)
}
</script>

<style lang="scss">
    .ds-tabs{
        .tabs-header{
            display: flex;
            margin-bottom: 124px;
        }
        .tabs-header-item{
            display: flex;
            justify-content: center;
            cursor: pointer;
            position: relative;
            color: #D2D2D2;
            transition: color .3s;
            width: 50%;

            svg path {
                fill: #D2D2D2;
                transition: fill .3s;
            }
            &.active {
                color: #141416;

                svg path {
                    fill: #141416;
                }
                &::before{
                    position: absolute;
                    content: '';
                    bottom: 0;
                    left: 0;
                    background-color: #141416;
                    width: 100%;
                    height: 3.25px;
                }
            }
        }
    }
@media (max-width: 1024px){
    .ds-tabs{
        .tabs-header{
            margin-bottom: 88px;
        }
        .tabs-header-item{
            &.active {
                &::before{
                    height: 2.3px;
                }
            }
        }
    }
}
@media (max-width: 1024px){
    .ds-tabs{
        .tabs-header{
            margin-bottom: 55px;
        }
        .tabs-header-item{
            &.active {
                &::before{
                    height: 2.3px;
                }
            }
        }
    }
}
</style>