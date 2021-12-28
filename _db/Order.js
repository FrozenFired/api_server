Shop: {type: ObjectId, ref: 'Shop'},
Client: {type: ObjectId, ref: 'Client'},			// [只读 权限 Client只读]

status: Number,										// enum: ConfOrder;
is_hide_client: {type: Boolean, default: false}, 	// 客户是否可见, 客户删除状态下， 商家可删除

type_Order: Number, 								// [post写(Client[-1]) put只读] enum: [1, -1] 采购 销售

note_Client: String,

User_Oder: {type: ObjectId, ref: "User"},			// 订单管理员(接单)
note_Oder: String,

User_Pker: {type: ObjectId, ref: "User"},			// 订单配货员(分拣)
note_Pker: String,

User_Dver: {type: ObjectId, ref: "User"},			// 订单分发员(配送)
note_Dver: String,

code: String,										// 只读 产品名称
// path_crt: Number,								// enum: [1: 'online', 2: 'shop']

type_paid: Number, // enum: ConfOrder,
paid_info: {
	firstname: String,
	lastname: String,
	company: String,
	address: String,
	city: String,
	state: String,
	postcode: String,
	country: String,
	email: String,
	phone: String
},
paypal_orderId: String,

type_ship: Number, // enum: ConfOrder,
ship_info: {
	Cita: {type: ObjectId, ref: "Cita"},

	firstname: String,
	lastname: String,
	company: String,
	address: String,
	city: String,
	state: String,
	postcode: String,
	country: String,
	email: String,
	phone: String
},
is_ship: {type:Boolean, default: false},

log_info: {				// 第三方物流公司的信息, 如果物流出现问题 方便联系
	company: String,
	principal: String,
	phone: String,
},

goods_quantity: {type:Number, default: 0},			// [只读 相对 OrderProds] 	采购本条目总数
goods_regular: {type: Float, default: 0},			// [只读 相对 OrderProds]		货物原价
goods_sale: {type: Float, default: 0},				// [只读 相对 OrderProds]		货物费用
goods_discount: {type: Float, default: 0},			// [只读 绝对]	货物折扣价格

percent_minus: {type: Float, default: 0},			// [只读 相对 Client.VIP] 	根据VIP折扣 0 <= percent_minus < 1
// Cupon: {type: ObjectId, ref: 'Cupon'},			
// Cupon_price: {type: Float, default: 0},			// [只读 相对 Cupon] 	活动


order_sale: {type: Float, default: 0},				// [只读 绝对]	货物减价后 再订单折扣 (goods_sale - cupon) * （ 1 - percent_minus);

ship_regular: {type: Float, default: 0},			// [只读 相对 Shop.ship_price]
ship_sale: {type: Float, default: 0},				// [只读 绝对] 	运费 ship_regular - ship_discount (满减 一部分运费)

order_regular: {type: Float, default: 0},			// [只读 绝对]	未减价之前的金额

order_price: {type: Float, default: 0},				// [只读 绝对]	订单金额 = order_sale + ship_sale

price_imp: {type: Float, default: 0},				//	客户应付金额
price_paid: {type: Float, default: 0},				//	客户已付金额
price_noPay: {type: Float, default: 0},				// [只读 绝对] 	客户未付金额

is_paid: {type:Boolean, default: false},			// [只读 绝对] 	如果客户已付金额与应付金额相同 则为 true
is_identical: Boolean,								// [只读 绝对] 	如果客户应付金额与订单总额相同 则为 true

OrderProds: [{type: ObjectId, ref: 'OrderProd'}],

Firm: {type: ObjectId, ref: 'Firm'},		// [只读 绝对]
at_crt: Date,								// [只读 绝对]
at_upd: Date,								// [只读 绝对]
at_schedule: Date,							// [只读 绝对]	计划收货时间
at_confirm: Date,							// [只读 绝对]	确认订单时间
at_paid: Date,								// [只读 绝对]	付款时间
at_shipping: Date,							// [只读 绝对]	开始配送时间
at_completed: Date,							// [只读 绝对]	完成订单时间