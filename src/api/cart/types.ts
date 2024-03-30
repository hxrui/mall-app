/**
 * 登录响应
 */
export interface CartItem {
    skuId: number; // SKU 的唯一标识
    skuName: string; // SKU 的名称，包含一些详细配置信息
    skuSn: string; // SKU 的序列号或商品编号
    imageUrl: string; // SKU 图片的网址
    count: number; // 用户选购的该 SKU 商品的数量
    price: number; // SKU 商品的价格，单位为分
    stock: number; // 该 SKU 商品的库存量
    spuName: string; // SKU 所属的标准产品单位（SPU）名称
}
