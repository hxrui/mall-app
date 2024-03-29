<template>
    <nut-category :category="data.category" @change="change">
        <nut-category-pane :categoryChild="data.categoryChild" @onChange="onChange"> </nut-category-pane>
    </nut-category>
</template>
<script setup lang="ts">
import { reactive, toRefs, onMounted } from 'vue';
const data = reactive({
    categoryInfo: {},
    category: [{}],
    categoryChild: [{}],
});

onMounted(() => {
    setTimeout(() => {
        getData();
    }, 500);
});

const getData = () => {
    fetch('//storage.360buyimg.com/nutui/3x/categoryData.js')
        .then((response) => response.json())
        .then((res) => {
            const { categoryInfo, categoryChild } = res;
            data.categoryInfo = categoryInfo;
            data.category = categoryInfo.category;
            data.categoryChild = categoryChild;
        })
        .catch((err) => console.log('Oh, error', err));
};

const change = (index) => {
    data.categoryChild = [].concat(data.categoryInfo.category[index + 1].children);
};
const onChange = () => {
    console.log('当前分类数据');
};
</script>

<style scoped lang="scss"></style>
