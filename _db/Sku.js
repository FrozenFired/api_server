Pd: {type: ObjectId, ref: 'Pd'},		// [只读 绝对]
Prod: {type: ObjectId, ref: 'Prod'},	// [只读 绝对]

attrs: [{
	nome: String,
	option: String
}],

price_cost: Float,						// 采购价
price_regular: Float,
price_sale: Float,

// at_fromSale: Date,
// at_toSale: Date,

purchase_note: String,
limit_quantity: {type: Number, default: 0},

batchs: [{
	quantity: Number,
	at_pur: Date,
	at_exp: Date,
}],

is_controlStock: {type: Boolean, default: true},

quantity: Number,
quantity_alert: Number,
allow_backorder: {type: Boolean, default: true},

is_usable: {type: Boolean, default: true }, 

is_alert: Boolean, 							// [只读 绝对]
is_discount: Boolean, 						// [只读 绝对]
is_sell: Boolean, 							// [只读 绝对]

User_crt: {type: ObjectId, ref: 'User'},	// [只读 绝对]
User_upd: {type: ObjectId, ref: 'User'},	// [只读 绝对]
at_crt: Date,								// [只读 绝对]
at_upd: Date,								// [只读 绝对]

Firm: {type: ObjectId, ref: 'Firm'},		// [只读 绝对]
Shop: {type: ObjectId, ref: 'Shop'},		// [只读 绝对]