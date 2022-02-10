code: String,								// 唯一编号 [ CNY EUR ]
nome: String,
img_url: String,

symbol: String,
rate: Float,								// 汇率
is_defCoin: Boolean,						// 是否为默认币种
sort: {type: Number, default: 0},

Firm: {type: ObjectId, ref: 'Firm'},		// [只读 绝对]