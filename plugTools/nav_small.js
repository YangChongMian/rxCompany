//第二第三层大概率用到的小头部导航到首页
let pathName = $('#rx-small-nav').attr('data-part');
let htmlNav = '';
let src="https://3w.rxjy.com";
let telephone = '010-56134592';


//定义样式
let rxHeaderBox =  `width: 1200px;
					margin: 10px auto;
					height: 44px;`;
let fl = `display: inline;
		  float: left;`;
let rxHeaderLogo1 = `margin-top: 2px;
						display: block;`;
let fr = `display: inline;
		  float: right;`;
let rightImg = `width: 32px;
				height: 30px;`
let telFonts = `border-left: none;
				margin-left: 0px;
				font-size: 26px;`;					
		
			
	if(pathName == 'hzzx'){
		htmlNav = `<div class='rx-headerBox clearfix' style="${rxHeaderBox}">
				<a href="${ src }" id="logo-home" target="_blank" class="fl" style="${fl}">
					<img src="../images/common/rx_header_logo1.png" alt="" class="rx-header-logo1" style="${rxHeaderLogo1}">
				</a>
				<!-- <div class="fl rx-header-logo-text"> 22年专注做好装修一件事</div> -->
				<div class='rx-header-right fr'>
					<a href="javascript:;" class="fl">
						<img src="../images/kongjianchengpin/iphone.png" alt="" width="27" height="27" class="rx-header-logo1" style="${rightImg}">
					</a>
					<div class="fl rx-header-logo-text" style="${telFonts}">${ telephone }</div>
				</div>
			</div>`;
	}else if(pathName == 'guanyuwomen'){
		htmlNav = `<div class='rx-headerBox clearfix' style="${rxHeaderBox}">
				<a href="${ src }" id="logo-home" target="_blank" class="fl" style="${fl}">
					<img src="../images/common/rx_header_logo1.png" alt="" class="rx-header-logo1" style="${rxHeaderLogo1}">
				</a>
				<div class="fl rx-header-logo-text"> 22年专注做好装修一件事</div>
				<div class='rx-header-right fr'>
					<a href="javascript:;" class="fl">
						<img src="../images/kongjianchengpin/iphone.png" alt="" width="27" height="27" class="rx-header-logo1">
					</a>
					<div class="fl rx-header-logo-text" style="${telFonts}">${ telephone }</div>
				</div>
			</div>`;
	}else if(pathName == 'jiangren'){
		htmlNav = `<div class='rx-headerBox clearfix' style="${rxHeaderBox}">
				<a href="${ src }" id="logo-home" target="_blank" class="fl" style="${fl}">
					<img src="../images/common/rx_header_logo1.png" alt="" class="rx-header-logo1" style="${rxHeaderLogo1}">
				</a>
				<div class="fl rx-header-logo-text"> 22年专注做好装修一件事</div>
				<div class='rx-header-right fr'>
					<a href="javascript:;" class="fl">
						<img src="../images/dibanweixiugaizao/geduan-iphone.png" alt="" width="27" height="27" class="rx-header-logo1">
					</a>
					<div class="fl rx-header-logo-text" style="${telFonts}">${ telephone }</div>
				</div>
			</div>`;
	}else{
		htmlNav = `<div class='rx-headerBox clearfix' style="${rxHeaderBox}">
				<a href="${ src }" id="logo-home" target="_blank" class="fl" style="${fl}">
					<img src="../images/common/rx_header_logo1.png" alt="" class="rx-header-logo1" style="${rxHeaderLogo1}">
				</a>
				<!-- <div class="fl rx-header-logo-text"> 22年专注做好装修一件事</div> -->
				<div class='rx-header-right fr'>
					<a href="javascript:;" class="fl">
						<img src="../images/kongjianchengpin/iphone.png" alt="" width="27" height="27" class="rx-header-logo1">
					</a>
					<div class="fl rx-header-logo-text" style="${telFonts}">${ telephone }</div>
				</div>
			</div>`;
	}

$('#rx-small-nav').html(htmlNav);


//统一高度样式
let paddingTop = $('#rx-small-nav').parent().css('padding-top');
if(paddingTop == '0px'){
	$('#rx-small-nav').parent().css('padding-top','20px');
}