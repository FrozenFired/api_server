api = "https://example.com/api/b1/analys";
method = "POST";

obj: {
	key: {required: false, default: i, type: String, description: "分析的名称"},
	dbName: {required: false, default: "Order", type: String, description: "所要分析的数据库名称"},
	is_native: {required: false, type: Boolean, description: "前端数据是否为原生"},
	// aggregates: required: is_native, type: Array, description: "原生 mongodb aggregate",
	aggregates: [{}],

	// pipeline: required: !is_native, type: Object, description: "使用后端封装",
	pipeline: {
		field: {required: false, type: String, default: null, description: '用来分组的字段'},
		// match: required: false, type: Object, description: "前端数据是否为原生"
		matchObj: {
			Shops: {required: false, type: Array[ObjectId], description: "根据店铺筛选订单"},
			status: {required: false, type: Array[Number], default: null, description: "查找包含所有此状态的订单", },
			
			crt_after: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之后创建的订单"},
			crt_before: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之前创建的订单"},

		},
		is_interval: {required: false, type: Boolean, default: false, description: "是否为区间分组"},
		// bucketObj: required: is_interval
		bucketObj: {
			span: {required: false, type: Number, description: "平均分割"},
			boundaries: [{required: false, type: Number, description: ""}],
			df: {required: false, type: String, default: 'Other', description: "其他区间数据"},
			outputs: {required: false, type: Array, description: "输出字段"},
		},
		// groupObj: required: !is_interval
		groupObj: {
			is_join: {type: false, type: Boolean, default: false, description: "是否要populate"},
			lookup_as: {type: false, type: Object, description: "映射"},
			group_fields: {type: false, type: Array, description: "分组后的结果集"}
		},
		sortObj: {required: false, type: Object(key:排序字段, val: 1/-1), description: "排序"}
	}

}
formData = {
	"objs": [obj]
}

headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
}



// 返回值
// status(200);