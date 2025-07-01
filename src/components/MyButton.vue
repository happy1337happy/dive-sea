
<template>
    <button class="btn-dude" :class="className">
        <slot>
            <img v-if="$props.icon" :src="useImageLoader(`@/assets/img/${$props.icon}`)"  alt="img" class="btn-icon">
        </slot>
        <span v-if="$props.text">{{ $props.text }}</span>
    </button>
</template>
<script setup>
import { computed } from 'vue';
import { useImageLoader } from '@/assets/composables/useImageLoader';


    const props= defineProps ({
        icon:{
            type:String,
            default:null
        },
        text:{
            type:String,
            default:null
        },
        variant:{
            type:String,
            default:'black',
            validator:(prop) => ['black','white','white-outline','transparent'].includes(prop)
        },
        isUppercase:{
            type:Boolean,
            default:true,
        },
        size:{
            type:String,
            default:'md',
            validator:(prop) => ['xsm','sm','md','lg','xlg','ban','modal','upload','full','sigma','omega','height'].includes(prop)
        },
        font: { 
            type: String,
            default: 'poppins',
            validator: (prop) => ['poppins', 'inter', 'manrope','outfit',].includes(prop)
        },
        fontWeight: {
            type: String,
            default: '600',
            validator: (prop) => ['500', '600', '700'].includes(prop)
        },
        fontSize: {
            type: String,
            default: 'md',
            validator: (prop) => ['xsm','sm', 'md','lg','xlg','modaltext','card','rem','rem2'].includes(prop)
        },
        iconPosition: { 
            type: String,
            default: 'left',
            validator: (prop) => ['left', 'right'].includes(prop)
         },
        radius: {
            type: String,
            default: 'md',
            validator: (prop) => ['sm','md','lg','xlg','modalradius', 'card'].includes(prop)
        },
        gap: {
            type: String,
            default: 'gap-16px',
            validator: (prop) => ['gap-11px','gap-14px','gap-16px'].includes(prop)
        },

    })

    const className = computed(()=>{
        return [
            'border-radius-'+ props.radius,
            props.variant,
            'size-'+ props.size,
            'font-'+ props.font,
            'font-weight-'+ props.fontWeight,
            'font-size-'+ props.fontSize ,
            props.gap,
            {
                'is-uppercase':props.isUppercase,
                'icon-right': props.iconPosition === 'right',
            }
        ]
    })
</script>
<style lang="scss">
    .btn-dude{
        text-transform: capitalize;
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        height: max-content;

        &.gap-11px {
            gap: 11px;
        }
        &.gap-14px {
            gap: 14px;
        }
        &.gap-16px {
            gap: 16px;
        }

        &.is-uppercase{
            text-transform: uppercase;
        }
        &.black{
            background-color: #141416;
            color: white;
        }
        &.white{
            border: 2.3px solid;
            background-color: #F9F9F9;
        }
        &.white-outline{
            border: 2.3px solid #FFFFFF;
            background-color: #141416;
            color: #FFFFFF;
        }
        &.transparent{
            background-color: transparent;
            border: none;
            color: #ACADB9;
        }
        &.size-xsm{
            padding: 12px 19px;
        }
        &.size-sm{
            padding: 16px 25px;
        }
        &.size-md{
            padding: 19px 25px;
        }
        &.size-lg{
            padding: 19px 30px;
        }
        &.size-xlg{
            padding: 25px 174px;
        }
        &.size-ban{
            padding: 17.4px 28.4px;
        }
        &.size-modal{
            width: 100%;
            padding: 23.4px 20px;
        }
        &.size-upload{
            padding: 19px 135px;
        }
        &.size-full {
            width: 100%;
            padding: 24px 20px;
        }
        &.size-sigma {
            width: 100%;
            padding: clamp(11px, 1.2vw, 15px) clamp(17px, 2.5vw, 24px);
        }
        &.size-omega {
            width: 100%;
            padding: clamp(0.4rem, 1.5vw, 0.7rem) clamp(0.6rem, 2vw, 0.9rem);
        }
        &.size-height {
            width: 100%;
            height: 56px;
            padding: 16px 25px;
        }
        
        &.font-inter {
        font-family: "Inter", sans-serif;
        }
        &.font-manrope {
        font-family: "Manrope", sans-serif;
        }
        &.font-outfit{
        font-family: "Outfit", sans-serif;
        }
        &.font-weight-500 { 
            font-weight: 500; 
        }
        &.font-weight-600 { 
            font-weight: 600;
        }
        &.font-weight-700 {
             font-weight: 700; 
        }
        &.font-size-xsm {
             font-size: 10px; 
             line-height: 15px;
        }
        &.font-size-sm {
             font-size: 14px; 
             line-height: 20px;
        }
        &.font-size-md {
             font-size: 16px; 
             line-height: 24px; 
        }
        &.font-size-lg {
             font-size: 18px; 
             line-height: 28px; 
        }
        &.font-size-xlg {
             font-size: 21px; 
             line-height: 28px; 
        }
        &.font-size-madaltext{
            font-size: 16.88px; 
            line-height: 25.88px;
        }
        &.font-size-card {
            font-size: 18.39px;
            line-height: 28.21px;
        }
        &.font-size-rem {
            font-size: clamp(10px, 1.5vw, 14px);
            line-height: 100%;
        }
        &.font-size-rem2 {
            font-size: clamp(0.45625rem, 1.3vw, 0.5rem);
            line-height: 100%;
        }
        &.icon-right {
            .btn-icon {
            order: 1; 
            }
            span {
            order: 0; 
            }
        }
        span {
            white-space: nowrap;
        }
        &.border-radius-sm{
            border-radius: 9px;
        }
        &.border-radius-md{
            border-radius: 12px;
        }
        &.border-radius-lg{
            border-radius: 16px;
        }
        &.border-radius-xlg{
            border-radius: 19px;
        }
        &.border-radius-modalradius{
            border-radius: 18px;
        }
        &.border-radius-card {
            border-radius: 19.62px;
        }



        @media(max-width: 1280px){
            &.size-xsm{
                padding: 12px 19px;
            }
            &.size-sm{
                padding: 14px 22px;
            }
            &.size-md{
                padding: 19px 25px;
            }
            &.size-lg{
                padding: 16px 27px;
            }
            &.size-xlg{
                padding: 25px 174px;
            }
            &.size-ban{
                padding: 14.4px 27px;
            }
            &.font-size-xsm {
                font-size: 10px; 
                line-height: 15px;
            }
            &.font-size-sm {
                font-size: 14px; 
                line-height: 20px;
            }
            &.font-size-md {
                font-size: 14px; 
                line-height: 22px; 
            }
            &.font-size-lg {
                font-size: 18px; 
                line-height: 28px; 
            }
            &.font-size-xlg {
                font-size: 21px;
                line-height: 28px; 
            }
            &.border-radius-sm {
                border-radius: 8px;
            }
            &.border-radius-md {
                border-radius: 11px;
            }
            &.border-radius-lg {
                border-radius: 12px;
            }
            &.border-radius-xlg {
                border-radius: 17px;
            }
        }
        @media(max-width: 1024px){
            &.size-xsm{
                padding: 12px 19px;
            }
            &.size-sm{
                padding: 11.5px 20px;
            }
            &.size-md{
                padding: 12px 20px;
            }
            &.size-lg{
                padding: 16px 27px;
            }
            &.size-xlg{
                padding: 25px 174px;
            }
            &.size-ban{
                padding: 14.4px 27px;
            }
            &.size-modal{
                padding: 15.4px 20px;
                
            }
            &.size-height {
                width: 100%;
                height: 40px;
                padding: 16px 18px;
            }
            &.font-size-xsm {
                font-size: 10px; 
                line-height: 15px;
            }
            &.font-size-sm {
                font-size: 14px; 
                line-height: 20px;
            }
            &.font-size-md {
                font-size: 12px; 
                line-height: 150%; 
            }
            &.font-size-lg {
                font-size: 18px; 
                line-height: 28px; 
            }
            &.font-size-xlg {
                font-size: 21px;
                line-height: 28px; 
            }
            &.font-size-madal-text{
                font-size: 12px; 
                line-height: 18px;
            }
            &.border-radius-sm {
                border-radius: 8px;
            }
            &.border-radius-md {
                border-radius: 11px;
            }
            &.border-radius-lg {
                border-radius: 10.5px;
            }
            &.border-radius-xlg {
                border-radius: 13px;
            }
            &.border-radius-modalradius{
                border-radius: 12px;
            }
        }
        @media(max-width: 768px){
            &.size-xsm{
                padding: 12px 19px;
            }
            &.size-sm{
                padding: 9px 15px;
            }
            &.size-md{
                padding: 19px 25px;
            }
            &.size-lg{
                padding: 16px 27px;
            }
            &.size-xlg{
                padding: 25px 174px;
            }
            &.size-ban{
                padding: 14.4px 27px;
            }
            &.font-size-xsm {
                font-size: 10px; 
                line-height: 15px;
            }
            &.font-size-sm {
                font-size: 14px; 
                line-height: 20px;
            }
            &.font-size-md {
                font-size: 10px; 
                line-height: 150%; 
            }
            &.font-size-lg {
                font-size: 18px; 
                line-height: 28px; 
            }
            &.font-size-xlg {
                font-size: 21px;
                line-height: 28px; 
            }
            &.font-size-madaltext{
                font-size: 12px; 
                line-height: 18px;
            }
            &.border-radius-sm {
                border-radius: 8px;
            }
            &.border-radius-md {
                border-radius: 11px;
            }
            &.border-radius-lg {
                border-radius: 9px;
            }
            &.border-radius-xlg {
                border-radius: 17px;
            }
            &.border-radius-modalradius{
                border-radius: 12px;
            }
        }

        @media(max-width: 576px) {
            .btn-icon{
                width: 23px;
                height: 23px;
            }
            &.gap-16px {
                gap: 9px;
            }
            &.size-xsm {
                padding: 6px 10px;
            }
            &.size-sm {
                padding: 10px 17px;
            }
            &.size-md {
                padding: 11px 14px;
            }
            &.size-lg {
                padding: 15px 20px;
            }
            &.size-xlg {
                padding: 14px 90px;
            }
            &.size-ban{
                padding: 13.4px 20px;
            }
            &.size-height {
                width: 100%;
                height: 36px;
                padding: 16px 10px;
            }
            &.font-size-xsm {
                font-size: 8px;
                line-height: 13px;
            }
            &.font-size-sm {
                font-size: 11px;
                line-height: 17px;
            }
            &.font-size-md {
                font-size: 11.57px;
                line-height: 160%;
            }
            &.font-size-lg {
                font-size: 13px;
                line-height: 20px;
            }
            &.font-size-xlg {
                font-size: 15px;
                line-height: 23px;
            }
            &.font-size-madaltext{
                font-size: 12px; 
                line-height: 18px;
            }
            &.border-radius-sm {
                border-radius: 6.6px;
            }
            &.border-radius-md {
                border-radius: 8.83px;
            }
            &.border-radius-lg {
                border-radius: 11px;
            }
            &.border-radius-xlg {
                border-radius: 14px;
            }
            &.border-radius-modalradius{
                border-radius: 12px;
            }
        }
        @media(max-width: 376px) {
            .btn-icon{
                width: 20px;
                height: 20px;
            }
            &.gap-16px {
                gap: 7.2px;
            }
            &.size-xsm {
                padding: 6px 10px;
            }
            &.size-sm {
                padding: 10px 17px;
            }
            &.size-md {
                padding: 11px 14px;
            }
            &.size-lg {
                padding: 12px 20px;
            }
            &.size-xlg {
                padding: 14px 90px;
            }
            &.size-ban{
                padding: 10.4px 28.4px;
            }
            &.size-modal{
                padding: 15.4px 107px;
            }
            &.size-height {
                width: 100%;
                height: 36px;
                padding: 16px 10px;
            }
            &.size-sigma {
                height: 100%;
            }
            // &.white {
            //     padding: 10.4px 18.4px;
            // }
            &.font-size-xsm {
                font-size: 7px;
                line-height: 12px;
            }
            &.font-size-sm {
                font-size: 10px;
                line-height: 16px;
            }
            &.font-size-md {
                font-size: 11.57px;
                line-height: 160%;
            }
            &.font-size-lg {
                font-size: 12px;
                line-height: 19px;
            }
            &.font-size-xlg {
                font-size: 14px;
                line-height: 22px;
            }
            &.font-size-madaltext{
                font-size: 12px; 
                line-height: 18px;
            }
            &.border-radius-sm {
                border-radius: 6.6px;
            }
            &.border-radius-md {
                border-radius: 8.83px;
            }
            &.border-radius-lg {
                border-radius: 11.8px;
            }
            &.border-radius-xlg {
                border-radius: 14px;
            }
            &.border-radius-modalradius{
                border-radius: 12px;
            }
        }

    }
@media(max-width: 330px){
    .btn-dude{
        &.font-size-rem {
            font-size:8px;
            line-height: 100%;
        }
        &.size-sigma {
            height: auto;
        }
    }
}
</style>