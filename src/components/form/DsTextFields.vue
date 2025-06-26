<template>
    <div class="text-field-wrapp">
        <component
            :is="$props.tagName"
            :type="$props.type"
            :placeholder="$props.placeholder"
            v-model="modelValue"
            class="text-fields"
            :class="{'has-icon' : icon }"
        ></component>
        <span v-if="icon" class="text-field-icon">
            <img :src="useImageLoader(`@/assets/img/${$props.icon}`)" alt="icon">
        </span>
    </div>
</template>

<script setup>
import { defineProps, defineModel,} from 'vue';
import { useImageLoader } from '@/assets/composables/useImageLoader';


const props = defineProps({
        type:{
            type:String,
            default: 'text',
        },
        placeholder:{
            type: String,
            default: null,
        },
        tagName:{
            type: String,
            default: 'input',
            validator: (value) => ['input', 'textarea'].includes(value),
        },
        icon:{
            type:String,
            default:null
        },
    })

    const modelValue = defineModel();

</script>

<style lang="scss">
    .text-field-wrapp{
        width: 100%;
        position: relative;
        .text-fields{
            width: 100%;
            background-color: #EFEFEF;
            padding: 23px 26.5px;
            border-radius: 11.5px;
            font-weight: 400;
            font-size: 13.45px;
            line-height: 125%;
            margin-bottom: 35px;
            border: none;
            outline: none;
            
            &[type="number"]{
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: textfield;
            }
            &[type="number"]::-webkit-inner-spin-button,
            &[type="number"]::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        }
        textarea.text-fields {
            resize: none;
            min-height: 165px;
        }
        .text-field-icon{
            position: absolute;
            right: 20px;
            top: 20px;
        }
    }
@media (max-width:1024px){
    .text-field-wrapp{
        .text-fields{
            padding: 16px 19px;
            border-radius: 8.2px;
            font-size: 9.56px;
            margin-bottom: 25px;
        }
        textarea.text-fields {
            min-height: 117px;
        }
        .text-field-icon{
            right: 12px;
            top: 12px;
        }
    }
}
@media (max-width:376px){
    .text-field-wrapp{
        .text-fields{
            padding: 14.5px;
            border-radius: 7.43px;
            font-size: 9px;
            margin-bottom: 23px;
        }
        textarea.text-fields {
            min-height: 106px;
        }
        .text-field-icon{
            right: 10px;
            top: 10px;
        }
    }
}
</style>