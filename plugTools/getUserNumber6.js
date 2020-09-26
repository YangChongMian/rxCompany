//获取用户验证码的时候节流防抖，时间倒计时


// let userTel = $('#user-tel');
//用户的手机号的选择器

// let timeTextAll = $('.slovewrapright form b');
//时间倒计时整个标签的标签选择器（包括汉字部分）

// let time60 = $('#time60');
// let timeout = 60;



//节流
function jieLiu(userTel,timeTextAll,time60,timeout){
	// console.log(timeout);
	let timer = null;
	return function(){
		if(timer){
			clearTimeout(timer);
		}else{
			timer = setTimeout(getTelNum(userTel,timeTextAll,time60),timeout);
		}
	}
}



function getTelNum(userTel,timeTextAll,time60){
	clearInterval(timer);
	let userTels = $(userTel).val();
	if(userTels != '' && userTels != undefined && userTels != null ){
		$(timeTextAll).css('opacity','1');
		let a = 60;
		var timer = setInterval(()=>{
			a--;
			$(time60).text('请'+a+'S后重新获取验证码');
			if(a == 0){
				clearInterval(timer);
			}
		},1000)
	}else{
		layer.msg("请输入手机号获取验证码");
	}
}