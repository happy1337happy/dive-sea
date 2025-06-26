<template>
    <div class="switch-wrapp">
        <p v-if="$props.descriptionText" class="description-text">{{ $props.descriptionText }}</p>
        <label 
            class="switch-label"
            :class="{'is-checked' : modelValue === value }"
        >
            <input 
                type="radio"
                :name="name"
                :value="value"
                v-model="modelValue"
                hidden
            />
            <span class="switch-slider"></span>
        </label>
        
    </div>
</template>

<script setup>

import { computed } from 'vue';

const props = defineProps({
    value:{
        type:[ String, Number],
        required: true,        
    },
    name:{
        type: String,
        required: true,
    },
    modelValue:{
        type:[String, Number],
        default: '',
    },
    descriptionText:{
        type: String,
        default: '',
    }
});

const emit = defineEmits(['update:modelValue']);

const modelValue = computed({
    get() {
        return props.modelValue;
    },
    set(newValue) {
        emit('update:modelValue' , newValue);
    }
});

</script>

<style scoped lang="scss">
    .switch-wrapp{
        display:flex;
        justify-content: space-between;
        gap: 20px;

        .description-text{
            font-weight: 400;
            font-size: 13.45px;
            line-height: 125%;
            color: #9596A6;
        }

        .switch-label{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            position: relative;
            gap: 20px;
            cursor: pointer;

            input {
                opacity: 0;
                width: 0;
                height: 0;
            }

            .switch-slider{
                position: relative;
                display: inline-block;
                width: 55px;
                height: 30px;
                background-color: #E7E4E4;
                border-radius: 20px;
                transition: 0.4s;
                cursor: pointer;
                top: -25px;
            }

            .switch-slider::before{
                position: absolute;
                left: 5px;
                bottom: 5.5px;
                content: '';
                height: 20px;
                width: 20px;
                border-radius: 50%;
                background-color: #000000;
                transition: 0.4s;
            }

            &.is-checked{
                .switch-slider {
                    background-color: #000;
                }
                .switch-slider:before {
                    background-color: #E7E4E4;
                    transform: translateX(25px);
                }
            }
        }
    }
</style>