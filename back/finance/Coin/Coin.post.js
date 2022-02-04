// 只有总公司管理员以上级别可以创建
api = "https://example.com/api/b1/Coin";
method = "POST";
headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
}


obj = {
	code: {required: true, type: String, description: "店铺编号, 公司唯一"},
	nome: {required: true, type: String, description: "店铺名称, 公司唯一"},
	rate: {required: true, type: Float, description: "汇率"},

	is_default: {required: false, type: Boolean, default: false, description: "是否为默认币种"},
}


// 如果不添加本地图片 建议用这个
formData = { obj };

// 如果添加本地图片 只能用这个
// 建议不要使用 fetch 因为其对文件传输不太友好
formData = new formData();
formData.append("obj", JSON.stringify(obj));
[formData.append("file_"+i, image_File)];	// formData.append(["file0"], 'file路径0');




// 返回值
// status(200);