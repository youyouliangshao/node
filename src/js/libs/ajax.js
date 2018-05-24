//官网接口总结：
//http://order.limiketang.com/limi-math-phone/get-goods-list   //根据年级获取商品列表
//http://order.limiketang.com/limi-math-phone/get-goods        //获取商品详情
//http://api-sso.limixuexi.com/verifycode-login/send-login-verifycode   获取验证码
//http://api-sso.limixuexi.com/verifycode-login/login        登录
//http://order.limiketang.com/limi-math-phone/check-realname   //判断后台是否有姓名
//http://order.limiketang.com/limi-math-phone/add-realname     //增加姓名
//http://order.limiketang.com/limi-math-phone/scholarship-my   //获取奖学金
//http://order.limiketang.com/limi-math-phone/order-add        //生成订单号
//order.limiketang.com/limi-math-phone/pay-add    生成支付
//http://order.limiketang.com/limi-math-phone/pay-select     查询支付
//http://cc.limiketang.com/limi-math-app/api-add-appoint-info    预约课

function ajax(url, param, type) {
	// 利用了jquery延迟对象回调的方式对ajax封装，使用done()，fail()，always()等方法进行链式回调操作
	// 如果需要的参数更多，比如有跨域dataType需要设置为'jsonp'等等，可以考虑参数设置为对象
	return $.ajax({
		url: url,
		data: param || {},
		dataType: "jsonp",
		type: type || 'GET',
		headers: {
			"ua-limi": "livevideo-student"
		},
	});
}
//ajax("http://order.limiketang.com/limi-math-phone/get-goods-list", {
//	grade: "2"
//}, "GET").done(function(res) {
//	console.log(res)
//}).fail(function(err) {
//	console.log(err)
//});
function handleAjax(url, param, type) {
	return ajax(url, param, type).then(function(resp) {
		// 成功回调
		if(resp.result) {
			return resp.data; // 直接返回要处理的数据，作为默认参数传入之后done()方法的回调
		} else {
			return $.Deferred().reject(resp.msg); // 返回一个失败状态的deferred对象，把错误代码作为默认参数传入之后fail()方法的回调
		}
	}, function(err) {
		// 失败回调
		console.log(err.status); // 打印状态码
	});
}
//handleAjax("http://order.limiketang.com/limi-math-phone/get-goods-list", {
//	grade: "2"
//}, "GET").done(function(res) {
//	console.log(res)
//}).fail(function(err) {
//	console.log(err)
//});