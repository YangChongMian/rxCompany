//简单轮播实现
// let  Swiper_ycm = {
// 	//右下角记录数字的文本节点选择器
// 	thisNum : '',
// 	//联动小圆点所在的选择器,如：'.class>li'
// 	pointSelector:'',
// 	//需要轮播的ul
// 	swiperUl : '' ,
// 	//左边的按钮
// 	leftBtn : '' ,
// 	//右边的按钮
// 	rightBtn : '',
// 	//轮播的个数
// 	listNum : '',
// 	//每个小轮播的宽度
// 	liLen : '',
// 	//记录点击的次数
// 	clickNum  :  0,
// }


class Swiper_ycm {
	constructor({thisNum,pointSelector,swiperUl,leftBtn,rightBtn,listNum,liLen}) {
	    this.thisNum = thisNum;
		this.pointSelector = pointSelector;
		this.swiperUl = swiperUl;
		this.leftBtn = leftBtn;
		this.rightBtn = rightBtn;
		this.listNum = listNum;
		this.liLen = liLen;
		this.clickNum = 0;
	}
	//右侧点击函数
	clickRight(){
		this.clickNum ++;
		if(this.clickNum < this.listNum){
			//主体轮播
			$(this.swiperUl).css({
				'left':-this.liLen*this.clickNum,
				'transition':'all linear 0.5s'
			});
			//小圆点
			if(this.pointSelector != ''){
				$(this.pointSelector+':nth-child('+ (this.clickNum+1) +')').addClass('active').siblings().removeClass('active');
			}
			//记录的数字 01/04
			// $('.tab-1 .tab-swiper-slider .this-num .active:nth-child(2)').text(this.clickNum+1);
			$(this.thisNum).text(this.clickNum+1);
		}else{
			$(this.swiperUl).css({
				'left':0,
				'transition':'all linear 0.5s'
			});
			//小圆点
			if(this.pointSelector != ''){
				$(this.pointSelector+':nth-child('+ 1 +')').addClass('active').siblings().removeClass('active');
			}
			//记录的数字 01/04
			// $('.tab-1 .tab-swiper-slider .this-num .active:nth-child(2)').text(1);
			$(this.thisNum).text(1);
			this.clickNum = 0;
		}
	}
	clickLeft(){
		this.clickNum --;
		if(this.clickNum < 0){
			//主体轮播
			this.clickNum = this.listNum-1;
			$(this.swiperUl).css({
				'left':-this.liLen*this.clickNum,
				'transition':'all linear 0.5s'
			});
			//小圆点
			if(this.pointSelector != ''){
				$(this.pointSelector+':nth-child('+ this.listNum +')').addClass('active').siblings().removeClass('active');
			}
			//记录的数字 01/04
			// $('.tab-1 .tab-swiper-slider .this-num .active:nth-child(2)').text(this.clickNum+1);
			$(this.thisNum).text(this.clickNum+1);
		}else{
			//小圆点
			if(this.pointSelector != ''){
				$(this.pointSelector+':nth-child('+ (this.clickNum+1) +')').addClass('active').siblings().removeClass('active');
			}
			//记录的数字 01/04
			// $('.tab-1 .tab-swiper-slider .this-num .active:nth-child(2)').text(this.clickNum+1);
			$(this.thisNum).text(this.clickNum+1);
			$(this.swiperUl).css({
				'left':-this.liLen*this.clickNum,
				'transition':'all linear 0.5s'
			});
		}
	}
	
}



