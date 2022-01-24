code: String,								// 编号名称(唯一)
img_url: String,

is_cash: {type: Boolean, default: false}, 	// 是否为现金
Coin: {type: ObjectId, ref: 'Coin'},

Firm: {type: ObjectId, ref: 'Firm'},		// [只读 绝对]