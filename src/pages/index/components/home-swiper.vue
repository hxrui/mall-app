<template>
    <swiper
        class="swiper"
        circular
        indicator-active-color="#fff"
        indicator-color="rgba(255,255,255,0.6)"
        :indicator-dots="true"
        :autoplay="true"
        :interval="3000"
        :duration="1000"
    >
        <swiper-item v-for="item in advertBannerList" class="swiper-item">
            <image mode="aspectFill" class="swiper-item-img" :src="item?.imageUrl"> </image>
        </swiper-item>
    </swiper>
</template>

<script setup lang="ts">
import { getAdvertBannerList } from '@/api/advert';
import { useRequest } from 'alova';
const { data: advertBannerList } = useRequest(getAdvertBannerList, {
    initialData: [],
});
</script>

<style lang="scss" scoped>
.swiper {
    height: 304rpx;
    .swiper-item {
        @apply flex-center;
        width: 100%;
        height: 100%;
    }
    .swiper-item-img {
        width: 686rpx;
        height: 100%;
    }
}
</style>
