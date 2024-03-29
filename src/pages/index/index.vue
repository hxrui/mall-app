<template>
    <view>
        <!-- 顶部搜素 -->
        <home-search></home-search>
        <!-- 轮播图 -->
        <home-swiper></home-swiper>
        <!-- 宫格导航 -->
        <home-grid></home-grid>

        <image class="bar_box" src="http://www.liwanying.top/applate-icon/bar.png" mode="widthFix"></image>
    </view>
</template>

<script setup lang="ts">
import { useRequest } from 'alova';

import homeGrid from './components/home-grid.vue';
import homeSearch from './components/home-search.vue';
import homeSwiper from './components/home-swiper.vue';
</script>

<style lang="scss">
.bar_box {
    width: 100%;
    height: 140rpx;
}
</style>
