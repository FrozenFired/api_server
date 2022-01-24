api = "https://example.com/api/v1/Order";
method = "PUT";


general = {
	note_Client: {required: false, type: ObjectId, description: "客户备注"},
	Paidtype: {required: false, type: ObjectId, description: "支付方式"},
	is_payAfter: {required: false,  type: Boolean, description: "是否货到付款"},
}
paid_info = {
	Cita: {required: true, type: ObjectId, description: "送达城市"},
	
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
}


formData = { general };
formData = { paid_info };

headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
};

// 返回值;
// status(200);
res = {
    "status": 200,
    "message": "[server] 创建成功",
    "data": {
        "object": {

        },
    }
}