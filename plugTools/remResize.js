function remResize(UIwidth){
	// let windowWidth = $('html').width();
	let windowWidth = window.innerWidth;
	// console.log(windowWidth);
	let remSize = windowWidth/UIwidth*100+'px';
	// $('html').css('font-size',remSize);
	let htmls = document.querySelector('html');
	htmls.style.fontSize = remSize;
}