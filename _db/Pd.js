/* 强制 完全相同 */
code: String, 								// 条形号码
nome: String,								// 产品名称
img_urls: [String], 						// imgs
Brand: {type: ObjectId, ref: 'Brand'},
Nation: {type: ObjectId, ref: 'Nation'},
Categ: {type: ObjectId, ref: 'Categ'},

/* 同步 可修改 */
desp: String,
unit: String,								// 单位
langs: [{
	Lang: {type: ObjectId, ref: 'Lang'},	// 如果为空 则为默认值
	nome: String,
	desp: String, 							// 描述
	unit: String,							// 单位
}],
// Tags: [{type: ObjectId, ref: 'Tag'}],
sort: Number,
price_cost: Float,								// 采购价
price_regular: Float,							// 默认标价 默认Sku 一般同步此价格
price_sale: Float,								// 建议售价 默认Sku 一般同步此价格
is_fixPrice: { type: Boolean, default: false },	// 价格是否固定 如果是否则分店是可以更改价格

is_usable: { type: Boolean, default: true },	// 只是不能被同步, 已经被同步的商品 不受此字段影响

/* 只读 */
Prods: [{type: ObjectId, ref: "Prod"}],
num_likes: {type: Number, default: 0},		// [只读 相对 Prods] 为之后分析公司产品预留
num_unlikes: {type: Number, default: 0},	// [只读 相对 Prods] 为之后分析公司产品预留

/* 自动生成 */
Firm: {type: ObjectId, ref: 'Firm'},		// [只读 绝对]
User_crt: {type: ObjectId, ref: 'User'},	// [只读 绝对]
User_upd: {type: ObjectId, ref: 'User'},	// [只读 绝对]
at_crt: Date,								// [只读 绝对]
at_upd: Date,								// [只读 绝对]