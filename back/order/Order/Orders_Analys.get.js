api = "https://example.com/api/b1/Orders_Analys";
query = "?"+["&[key in args]=[args[key]]"];
/* 
    "EX_url": [
        api+"?search=N",
        api+"?search=N&page=2&sortKey=code&sortVal=1",
    ],
*/
methods = "GET";
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
};
formData = null;

args = {
	Shops: {required: false, type: Array[ObjectId], description: "根据店铺筛选订单"},
	Clients: {required: false, type: Array[ObjectId], description: "根据客户筛选订单"},
	Users: {required: false, type: Array[ObjectId], description: "根据公司成员筛选订单"},
	excludes: {required: false, type: Array[ObjectID], default: null, description: "查找出去此数组中所有IDs之外的订单", },
	includes: {required: false, type: Array[ObjectID], default: null, description: "查找包含所有此数组中所有IDs的订单", },

	type_Order: {required: false, type: Number, default: -1, description: "订单类型"}, //只有 [1, -1], 1 为采购订单 -1为销售订单
	status: {required: false, type: Array[Number], default: null, description: "查找包含所有此状态的订单", },
	gte_price: {required: false, type: Float, description: "给出一个价格值, 搜索大于等于此值的订单"},
	lte_price: {required: false, type: Float, description: "给出一个价格值, 搜索小于等于此值的订单"},

	crt_after: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之后创建的订单"},
	upd_after: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之后更新的订单"},
	crt_before: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之前创建的订单"},
	upd_before: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之前更新的订单"},

	sort_gte: {required: false, type: Number, description: "给出一个数字, 搜索此大于此数字排序的订单"},
	sort_lte: {required: false, type: Number, description: "给出一个数字, 搜索此小于此数字排序的订单"},

	field: {required: false, type: 'String', description: "给出分析字段"},
}

// 返回值
// status(200);