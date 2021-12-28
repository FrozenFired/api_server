api = "https://example.com/api/b1/Order";
method = "POST";

formData = {
	"Order": {required: false, type: ObjectId, description: "如果有, 可能是重新下单 或再来一单, 传递给后端生成新的订单后 可以删除原来取消或失败的订单"},
	"obj": {
		OrderProds: [{
			Prod: {required: true, type: ObjectId, description: "订单中的商品"},
			quantity: {required: false, type: Number, description: "采购数量"},	// 如果是单品
			OrderSkus: [{														// 如果是多规格
				Sku: {required: true, type: ObjectId, description: "订单中 商品 下的 Sku"},
				quantity: {required: true, type: Number, description: "采购数量"},
			}]
		}],
		Client: {required: false, type: ObjectId, description: "客户" },
		type_paid: {required: false, type: Number, description: "配送方式"},
		price_paid: {required: false, type: Float, description: "客户付款金额"},
	}
}

headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
}



// 返回值
// status(200);