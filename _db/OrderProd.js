Order: {type: ObjectId, ref: "Order"},				// [只读 绝对]

// 基本信息
Prod: {type: ObjectId, ref: "Prod"},				// [只读 绝对]
is_simple: Boolean,									// [只读 绝对]

nome: String,										// [只读 绝对]
unit: String,										// [只读 绝对]

OrderSkus: [{type: ObjectId, ref: "OrderSku"}],		//
/* 如果 is_simple 为 true */
price_regular: Float,								// [只读 相对]
price_sale: Float,									// [只读 权限 Client只读]
quantity: {type:Number, default: 0},				// 采购本条目总数
is_picked: {type:Boolean, default: false},			// 是否配货完成 辅助配货员用的

/* 如果 is_simple 为 false */
// 由 Sku决定的信息
prod_quantity: {type:Number, default: 0},			// [只读 相对] 本条目总量
prod_sale: {type:Float, default: 0},				// [只读 相对] 本条目总价
prod_regular: {type:Float, default: 0},				// [只读 相对] 总原价

// 额外信息
Pd: {type: ObjectId, ref: "Pd"},					// [只读 绝对] 所属产品
Client: {type: ObjectId, ref: 'Client'},			// [只读 绝对]
Shop: {type: ObjectId, ref: 'Shop'},				// [只读 绝对]
Firm: {type: ObjectId, ref: 'Firm'},				// [只读 绝对]
at_crt: Date,										// [只读 绝对]
at_upd: Date,										// [只读 绝对]