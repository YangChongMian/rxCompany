//依赖JQ执行，放到引入jq文件标签下面引入

//selectorLists:需要加入部分缓慢向上滚动动画的元素选择器
//selectorLists
//$('****')

//type:执行的动画类型
//type:1、windowScrollTransition，窗口滚动向上加载
//2、maiodianJump	窗口滚动对应锚点点亮

//selectorJump:需要执行点亮的元素选择器
//'.***' || '#***'

//activeClass:需要执行的active属性名:(就是添加动态效果的css样式选择器)

//topHeight:需要特定位置的时候减去上面不需要滚动的高度

//arr:需要加动画特效的div的选择器组成的数组，比如：#id  .class  div

function windowScroll(selectorLists,type,selectorJump='',activeClass='',arr=[]){
		let windowH = $(window).height();
		let scrolls = $(window).scrollTop();
		let windowHWithScrolls = windowH + scrolls;
		$(selectorLists).each((index,item)=>{
			let itemScroll = $(item).offset().top;
			if(type == 'windowScrollTransition'){
				if(windowHWithScrolls > itemScroll){
					$(item).css({
						"margin-top":"0",
						"transition":"all linear 1s"
					});
					arr.forEach((item2,index)=>{
						let actives = $(item).find(item2);
						// console.log($(item));
						// console.log(actives);
						$(actives).addClass('active');
					});
				}
			}
			if(type == 'maodianJump'){
				if(windowHWithScrolls > itemScroll){
					// console.log(index);
					let jumpNode = $(selectorJump+':nth-child('+ (index+1) +')');
					$(jumpNode).addClass(activeClass).siblings().removeClass(activeClass);
					// console.log(jumpNode);
				}
			}
		})
}


//点击锚点跳转到页面对应部分
