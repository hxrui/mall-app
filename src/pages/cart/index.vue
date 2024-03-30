<template>
    <view class="container">
        <!-- 登录 -->
        <view v-if="isLogin">
            <nut-empty image="empty" description="空空如也">
                <div class="mt-2">
                    <nut-button type="info" @click="goToHome">随便逛逛</nut-button>
                </div>
            </nut-empty>
        </view>
        <!-- 未登录 -->
        <nut-empty v-else image="empty" description="空空如也">
            <div style="margin-top: 10px">
                <nut-button type="primary" @click="navToLogin">去登陆</nut-button>
            </div>
        </nut-empty>
    </view>
</template>

<script setup lang="ts">
import { getCart } from '@/api/cart';
import { useAuthStore } from '@/store';
import { useRequest } from 'alova';

const router = useRouter();
const authStore = useAuthStore();
const isLogin = authStore.isLogin;

const { data: cartItemList } = useRequest(getCart, {
    initialData: [],
});

const totalPrice = ref(0); // 总价格
const allChecked = ref(false); // 全选状态
const empty = ref(false); // 空白页
const cartItemList = ref<CartItem[]>([]); // 购物车列表
const coupon = ref(0);

// Methods
const loadData = async () => {
    const response = await getCart();
    cartItemList.value = response.data;
    changeCart(); // 计算总价
};

const handleChangeCount = async (data: { number: number }, skuId: number) => {
    // ...
};

const handleCheckItem = async (index: number, skuId: number) => {
    // ...
};

const handleCheckAll = async () => {
    // ...
};

// ...其他方法

// Computed properties
const computedTotalPrice = computed(() => {
    // ...计算逻辑
});

// Lifecycle hooks
onMounted(() => {
    console.log('onMounted');
    loadData();
});

// Watchers
watch(cartItemList, (newVal) => {
    empty.value = newVal.length === 0;
});

const goToHome = () => {
    uni.switchTab({
        url: '/pages/index/index',
    });
};

const navToLogin = () => {
    router.push('/pages/login/index');
};
</script>

<style lang="scss">
.container {
    padding-bottom: 150upx;
}

/* 购物车列表项 */
.cart-item {
    display: flex;
    position: relative;
    padding: 30upx 40upx;

    .image-wrapper {
        width: 230upx;
        height: 230upx;
        flex-shrink: 0;
        position: relative;

        image {
            border-radius: 8upx;
        }
    }

    .checkbox {
        position: absolute;
        left: -16upx;
        top: -16upx;
        z-index: 8;
        font-size: 44upx;
        line-height: 1;
        padding: 4upx;
        color: $font-color-disabled;
        background: #fff;
        border-radius: 50px;
    }

    .item-right {
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow: hidden;
        position: relative;
        padding-left: 30upx;

        .title,
        .price {
            font-size: $font-base + 2upx;
            color: $font-color-dark;
            height: 40upx;
            line-height: 40upx;
        }

        .attr {
            font-size: $font-sm + 2upx;
            color: $font-color-light;
            height: 50upx;
            line-height: 50upx;
        }

        .price {
            height: 50upx;
            line-height: 50upx;
        }
    }

    .del-btn {
        padding: 4upx 10upx;
        font-size: 34upx;
        height: 50upx;
        color: $font-color-light;
    }
}

/* 底部栏 */
.action-section {
    /* #ifdef H5 */
    margin-bottom: 100upx;
    /* #endif */
    position: fixed;
    left: 30upx;
    bottom: 30upx;
    z-index: 95;
    display: flex;
    align-items: center;
    width: 690upx;
    height: 100upx;
    padding: 0 30upx;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 20upx 0 rgba(0, 0, 0, 0.5);
    border-radius: 16upx;

    .checkbox {
        height: 52upx;
        position: relative;

        image {
            width: 52upx;
            height: 100%;
            position: relative;
            z-index: 5;
        }
    }

    .clear-btn {
        position: absolute;
        left: 26upx;
        top: 0;
        z-index: 4;
        width: 0;
        height: 52upx;
        line-height: 52upx;
        padding-left: 38upx;
        font-size: $font-base;
        color: #fff;
        background: $font-color-disabled;
        border-radius: 0 50px 50px 0;
        opacity: 0;
        transition: 0.2s;

        &.show {
            opacity: 1;
            width: 120upx;
        }
    }

    .total-box {
        flex: 1;
        display: flex;
        flex-direction: column;
        text-align: right;
        padding-right: 40upx;

        .price {
            font-size: $font-lg;
            color: $font-color-dark;
        }

        .coupon {
            font-size: $font-sm;
            color: $font-color-light;

            text {
                color: $font-color-dark;
            }
        }
    }

    .confirm-btn {
        padding: 0 38upx;
        margin: 0;
        border-radius: 100px;
        height: 76upx;
        line-height: 76upx;
        font-size: $font-base + 2upx;
        background: $uni-color-primary;
        box-shadow: 1px 2px 5px rgba(217, 60, 93, 0.72);
    }
}

/* 复选框选中状态 */
.action-section .checkbox.checked,
.cart-item .checkbox.checked {
    color: $uni-color-primary;
}
</style>
