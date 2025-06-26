<template>
    <div class="brakpoint-display">
        текущий брекпоинт: {{ currentBreakpoint }}
        активный брекпоинт {{ isActiveBreakpoint }}
    </div>
</template>

<script setup>
    import { currentBreakpoint,isActiveBreakpoint } from '@/utils/breakpoints'
</script>

<style lang="scss">
    .brakpoint-display{
        padding: 20px;
        font-size: 20px;
        align-items: center;
    }
</style>