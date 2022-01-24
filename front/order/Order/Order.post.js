api = "https://example.com/api/v1/Order";
method = "POST";

formData = {
	"Order": {required: false, type: ObjectId, description: "如果有, 可能是重新下单 或再来一单, 传递给后端生成新的订单后 可以删除原来取消或失败的订单"},
	"obj": {
		Shop: {required: true, type: ObjectId, description: "订单所属商店"},
		OrderProds: [{
			Prod: {required: true, type: ObjectId, description: "订单中的商品"},
			quantity: {required: false, type: Number, description: "采购数量"},	// 如果是单品
			OrderSkus: [{														// 如果是多规格
				Sku: {required: true, type: ObjectId, description: "订单中 商品 下的 Sku"},
				quantity: {required: true, type: Number, description: "采购数量"},
			}]
		}],
		is_payAfter: {required: false,  default: false, type: Boolean, description: "是否货到付款"},
		type_ship: {required: true, type: Number, description: "配送方式"},
		ship_info: {
			Cita_code: {required: true, type: ObjectId, description: "运送城市的 code"},

			Client_nome: String,
			company: String,
			address: String,
			city: String,
			state: String,
			postcode: String,
			country: String,
			email: String,
			phone: String
		}
	}
}

headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
}



// 返回值
// status(200);