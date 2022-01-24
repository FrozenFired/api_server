code: String,								// 唯一编号 [ CNY EUR ]
nome: String,
img_url: String,

is_default: Boolean,						// 是否为默认币种, 每个公司有且只有一个默认币种
rate: Float,								// 汇率

Firm: {type: ObjectId, ref: 'Firm'},		// [只读 绝对]