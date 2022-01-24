// 必须要加一个query 参数为force值为true或1才可以删除。
// 因为删除支付方式必须谨慎 与订单挂钩，如果删除将不可用此支付方式筛选订单
api = "https://example.com/api/b1/Paidtype/[:id]?force=true";
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