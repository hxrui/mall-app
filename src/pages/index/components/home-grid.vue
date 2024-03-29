<template>
    <view>
        <nut-grid :column-num="4" :border="false">
            <nut-grid-item :text="item.text" v-for="item in gridList">
                <nut-avatar> <image mode="aspectFill" class="swiper-item-img" :src="item.icon"> </image> </nut-avatar
            ></nut-grid-item>
        </nut-grid>
    </view>
</template>

<script setup lang="ts">
// grid 的数据列表
const gridList = [
    {
        icon: 'http://www.liwanying.top/applate-icon/meizhuang2x.png',
        text: '美装个护',
    },
    {
        icon: 'http://www.liwanying.top/applate-icon/muying2x.png',
        text: '母婴',
    },
    {
        icon: 'http://www.liwanying.top/applate-icon/neiyi2x.png',
        text: '内衣',
    },
    {
        icon: 'http://www.liwanying.top/applate-icon/nvzhuang2x.png',
        text: '女装',
    },
];
</script>

<style lang="scss" scoped></style>
