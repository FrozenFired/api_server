Order: {type: ObjectId, ref: "Order"},				// [只读 绝对]
OrderProd: {type: ObjectId, ref: "OrderProd"},		// [只读 绝对]
type_Order: Number, 								// [post写(Client[-1]) put只读] enum: [1, -1] 采购 销售
// 基本信息
Sku: {type: ObjectId, ref: "Sku"},					// [post写, put只读]
attrs: String,										// [只读 相对 Sku]
price_regular: Float,								// [只读 相对 Sku] 加入购物车时的原价 客户confirm时的原价
price_sale: Float,									// [只读 权限 Client相对 Sku] 加入购物车时的交易价格 客户confirm时的交易价格
price: Float, 										// 前台给的
quantity: Number, 									// 采购本条目总数

is_picked: {type:Boolean, default: false},			// [只读 权限 Client只读]是否配货完成 辅助配货员用的

// 标识信息
Pd: {type: ObjectId, ref: "Pd"},					// [只读 绝对]
Prod: {type: ObjectId, ref: "Prod"},				// [只读 绝对]
Client: {type: ObjectId, ref: 'Client'},			// [只读 绝对]
Shop: {type: ObjectId, ref: 'Shop'},				// [只读 绝对]
Firm: {type: ObjectId, ref: 'Firm'},				// [只读 绝对]
at_crt: Date,										// [只读 绝对]
at_upd: Date,										// [只读 绝对]