/* 同步时给出的信息 不可修改 */
Shop: {type: ObjectId, ref: 'Shop'},			// [post写, put只读] 不可修改 商品所属店铺 
Pd: {type: ObjectId, ref: 'Pd'},				// [post写, put只读] 不可修改 商品所属产品

/* 如果 Pd 不为空则 只读*/
code: String, 									// [if(Pd !== null)只读] 产品条形码
nome: String,									// [if(Pd !== null)只读] 产品名称
unit: String,									// [if(Pd !== null)只读] 产品名称
img_urls: [String], 							// [if(Pd !== null)只读] 产品图片
Brand: {type: ObjectId, ref: 'Brand'},			// [if(Pd !== null)只读] 产品品牌
Nation: {type: ObjectId, ref: 'Nation'},		// [if(Pd !== null)只读] 产品国家 比如 中国货 意大利货 日本货 韩国货
Categ: {type: ObjectId, ref: 'Categ'},			// [if(Pd !== null)只读] 

Map_sps: [{type: ObjectId, ref: 'Map_sp'}],

fixed_Prods: [{
	Prod: {type: ObjectId, ref: 'Prod'},
	quantity: Number,
}],
flow_Prods: [{
	Prod: {type: ObjectId, ref: 'Prod'},
	quantity: Number,
}],

price_cost: Float,								// 采购价

price_regular: Float,							// 
price_sale: Float,								//

/* 同步 可修改 */
desp: String,
langs: [{
	Lang: {type: ObjectId, ref: 'Lang'},	// 如果为空 则为默认值
	nome: String,
	desp: String, 							// 描述
	unit: String,							// 单位
}],
// Tags: [{type: ObjectId, ref: 'Tag'}],
sort: Number,


is_usable: { type: Boolean, default: false },

Attrs: [{type: ObjectId, ref: "Attr"}],			// [只读 相对 Attr] 公司层面是否可用

/* 只读 根据 Skus 的price_sale 或 price_regular*/
Skus: [{type: ObjectId, ref: 'Sku'}],			// [只读 相对 Skus] 公司层面是否可用
is_simple: Boolean,								// [只读 绝对] 如果 Skus.length > 0 is_simple=false;

/* 如果 is_simple 为 true */
purchase_note: String,
limit_quantity: {type: Number, default: 0},
Batchs: [{
	quantity: Number,	// 采购数量
	at_pur: Date,		// 采购时间
	at_exp: Date,		// 过期时间
}],
is_controlStock: {type: Boolean, default: true},
quantity: {type:Number, default: 0},
quantity_alert: {type: Number, default: 0},
allow_backorder: {type: Boolean, default: true},

/* 如果 is_simple 为 false 则[只读 相对 Sku] 如果 为true[只读 绝对] */
price_unit: Float,								// [只读] 产品价格统一
price_min: Float,								// [只读] 产品最低价
price_max: Float,								// [只读] 产品最高价
is_discount: Boolean, 							// [只读] [if 任意Sku true 控制 Prod]
is_sell: Boolean,								// [只读] [if 任意Sku true 控制 Prod]
is_alert: Boolean, 								// [只读] [if 任意Sku true 控制 Prod]

/* 只读 客户给予 */
num_likes: {type: Number, default: 0},					// [只读 绝对]
Client_likes: [{type: ObjectId, ref: "Client"}],		// [只读 每个客户只能贡献一次]
num_unlikes: {type: Number, default: 0},				// [只读 绝对]
Client_unlikes: [{type: ObjectId, ref: "Client"}],		// [只读 每个客户只能贡献一次]

/* 自动生成 */
Firm: {type: ObjectId, ref: 'Firm'},			// [只读 绝对]
User_crt: {type: ObjectId, ref: 'User'},		// [只读 绝对]
User_upd: {type: ObjectId, ref: 'User'},		// [只读 绝对]
at_crt: Date,									// [只读 绝对]
at_upd: Date,									// [只读 绝对]