api = "https://example.com/api/b1/Coin/[:id]";
methods = "DELETE";
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
};
formData = null;

// 返回值
// status(205);
res = {
	status: 200,
	message: "删除成功",
}