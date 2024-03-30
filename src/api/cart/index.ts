import { request } from '@/utils/http';
import { CartItem } from './types';

const CART_API_PREFIX = '/mall-oms/app-api/v1/carts';

// 查询购物车
export function getCart() {
    return request.Get<CartItem>(CART_API_PREFIX);
}

/**
 * 全选/全不选购物车中的商品
 * @param {Object} params
 */
export function checkAllItems(params) {
    return request.Patch(`${CART_API_PREFIX}/items/check-all`, params);
}

// 清空购物车
export function clearCart() {
    return request.Delete(CART_API_PREFIX);
}

// 添加单个商品到购物车
export function addItemToCart(skuId) {
    return request.Post(`${CART_API_PREFIX}/items`, { skuId });
}

// 更新购物车中的单个商品
export function updateCartItem(skuId, data) {
    return request.Put(`${CART_API_PREFIX}/items/${skuId}`, data);
}

// 从购物车中移除单个商品
export function removeItemFromCart(skuId) {
    return request.Delete(`${CART_API_PREFIX}/items/${skuId}`);
}
