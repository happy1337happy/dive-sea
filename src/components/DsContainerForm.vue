<template>
    <div class="form-wrapp">
        <p v-if="$props.labelText" class="label-text">{{ $props.labelText }}</p>
        <slot></slot>
    </div>
</template>

<script setup>
    const props= defineProps({
        labelText:{
            type: String,
            default: '',
        },
    })

</script>

<style scoped lang="scss">
    .form-wrapp{
        display: flex;
        flex-direction: column;
        gap: 20px;
        .label-text{
            font-weight: 500;
            font-size: 20px;
            line-height: 125%;
            color: #000000;
        }
    }
@media (max-width:1024px){
    .form-wrapp{
        gap: 14px;
        .label-text{
            font-size: 14.22px;
        }
    }
}
@media (max-width:376px){
    .form-wrapp{
        gap: 13px;
        .label-text{
            font-size: 12.89px;
        }
    }
}
</style>