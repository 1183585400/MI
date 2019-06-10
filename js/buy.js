$(function(){	
	//引用公共部分
	$('header').load("CommHtml/header.html");
 	$('footer').load("CommHtml/footer.html");
 	
 	//删除未登录提示
 	$('#del').click(function(){
 		$('#login_tips').css('display','none')
 	})
 	
 	//吸顶效果
 	$(document).scroll( function() { 
		if($(document).scrollTop()>206){
			$('#nav_bar').slideDown();
			$('#nav_bar').css({'position':'fixed','top':'0'});
		}else{
			$('#nav_bar').css('position','relative');
		}
		
	} )
 	
 	
 	//商品图片切换以及放大镜
 	// 实现颜色类别切换
 	// 选择颜色按钮  原来选中的颜色按钮  tab切换按钮类 tab按钮里面的图片  原图  大图  图片路径前部分  路径后缀
	// colorBtn  oldcolorBtn tabBtn  tabPic  sImg bImg  firstSrc  lastSrc
	function choosecolor(colorBtn, oldcolorBtn, tabBtn, tabPic, sImg, bImg, firstSrc, lastSrc) {
		colorBtn.click(function() {
			colorBtn.css('borderColor','#ff6700');
			oldcolorBtn.css('borderColor','#e0e0e0');
			tabBtn.each(function(index, element) {
				var picNum = index+1;
				tabPic.eq(index).attr('src', firstSrc + picNum + lastSrc);	
				sImg.attr('src', firstSrc + '1' + lastSrc);		
				bImg.attr('src', firstSrc + '1' + lastSrc);		
			})	
			zoomToolSilder(tabBtn, sImg, bImg, firstSrc, lastSrc);
		})
	}
	
	// 实现tab切换图片
	// tab切换按钮类 原图  大图  图片路径前部分  路径后缀
	function tabchange(tabBtn, sImg, bImg, firstSrc, lastSrc){
		tabBtn.click(function() {
			var nowIndex = tabBtn.index(this);
			tabBtn.each(function(index, element) {
				if (index == nowIndex ) {
					$(element).css({'color':'#FF6700','border-color':'#FF6700'});
					var picNum = index+1;
					sImg.attr('src', firstSrc + picNum + lastSrc);
					bImg.attr('src', firstSrc + picNum + lastSrc);
				} else {
					$(element).css({'color':'#333','border-color':'#e0e0e0'});
				}
			})			
		})
	}

 	// 解决第一次tab切换
	tabchange($('.picBtn'), $('#s_img'), $('#b_img'), 'img/shopPics/pms_pic', '.jpg');
	// 选择颜色按钮  原来选中的颜色按钮  tab切换按钮类 tab按钮里面的图片  原图  大图  图片路径前部分  路径后缀
	// colorBtn  oldcolorBtn tabBtn  tabPic  sImg bImg  firstSrc  lastSrc
	choosecolor($('#blueone'), $('#blackone'), $('.picBtn'), $('.btnpic'),$('#s_img'), $('#b_img'), 'img/shopPics/pms_pic', '.jpg');
	choosecolor($('#blackone'), $('#blueone'), $('.picBtn'), $('.btnpic'),$('#s_img'), $('#b_img'), 'img/shopPics/pms_picblack', '.jpg');
 	
 	
// 	$('.picBtn').click(function(){
//		//弹出索引值
//		var ibtn = $('.picBtn').index(this);
//	 	$('.picBtn').each(function(index, element){		
////	 		console.log(element);
//	 		if(ibtn == index){
//	   			$(element).css('borderColor','#ff6700');
//	   		
//	 		}else{
//	   			$(element).css('borderColor','#e0e0e0');
//	 		}
//	 	})
//	 	++ibtn;
//		$('#s_img').attr("src",'img/shopPics/pms_pic'+ibtn+'.jpg');
//		$('#b_img').attr("src",'img/shopPics/pms_pic'+ibtn+'.jpg');
// 	})
//
// 	//选择颜色的点击事件
// 	$('.s2').click(function(i){
// 		var inow = $('.s2').index(this);
// 		$('.s2').eq(inow).css({'color':'#FF6700','border-color':'#FF6700'});
//	 	
// 		$('.s2').each(function(index) {
// 			if(index!=inow){
//		 		$('.s2').eq(index).css({'color':'#333','border-color':'#e0e0e0'});
//		 	}
// 		})
// 	})
 	
 	//选择版本的点击事件
 	$('.s1').click(function(i){
 		var inow = $('.s1').index(this);
 		$('.s1').eq(inow).css({'color':'#FF6700','border-color':'#FF6700'});
	 	
 		$('.s1').each(function(index) {
 			if(index!=inow){
		 		$('.s1').eq(index).css({'color':'#333','border-color':'#e0e0e0'});
		 	}
			
 		})
 	}) 	
   	//放大镜
   	$('#spic').mousemove(function(event){
		var nowleft = Math.floor(event.pageX - $('#spic').offset().left)-130;
		var nowtop = Math.floor(event.pageY - $('#spic').offset().top)-130;
//		console.log(nowleft,nowtop);
		$('#bigpic').css('display','block');
		$('#squre').css('display','block');
		if(nowleft<0){
			nowleft = 0;
		}
		if(nowleft>260){
			nowleft = 260;
		}
		if(nowtop<0){
			nowtop = 0;
		}
		if(nowtop>260){
			nowtop = 260;
		}
		$('#squre').css({
			'left':nowleft,
			'top':nowtop
		})
		$('#b_img').css({
			'left':-nowleft*2,
			'top':-nowtop*2
		})
	})
	$('#spic').mouseout(function(){
		$('#bigpic').css('display','none');
		$('#squre').css('display','none');
	})
   	
   	
	//商品轮播吸顶效果
 	$(document).scroll( function() { 
 		console.log($(document).scrollTop());
		if($(document).scrollTop()<=200){
			$('#shopbox').css({'position':'relative','top':'0'});
		}
		else if($(document).scrollTop()>200 & $(document).scrollTop()<1136){
			$('#shopbox').css({'position':'fixed','top':'66px'});
		}
		else{
			$('#shopbox').css({'position':'relative','top':'950px'});
		}
		
	} )
 	
 
 	//右边商品信息
 	//保险按钮
	$('#safe1').click(function(){
		var oc = $('#safe1').attr('oc');
		if(oc==0){
			$('#safe1').attr('oc','1');
			$('#safe1').css({'border-color':'#FF6700'})
			$('#yuan1').css({'background-color':'#FF6700','border-color':'#FF6700'})
 			$('#kuang1').css({'background-color':'#FF6700','border-color':'#FF6700'})
			$('#safetext1').css('display','block');
			$('#safe2').attr('oc','0');
			$('#safe2').css({'border-color':'#b0b0b0'})
			$('#yuan2').css({'background-color':'#fff','border-color':'#b0b0b0'})
 			$('#kuang2').css({'background-color':'#fff','border-color':'#b0b0b0'})
			$('#safetext2').css('display','none');
		}
		if(oc==1){
			$('#safe1').attr('oc','0');
			$('#safe1').css({'border-color':'#b0b0b0'})
			$('#yuan1').css({'background-color':'#fff','border-color':'#b0b0b0'})
 			$('#kuang1').css({'background-color':'#fff','border-color':'#b0b0b0'})
			$('#safetext1').css('display','none');
		}
 		
 	})
 	$('#safe2').click(function(){
 		var oc = $('#safe2').attr('oc');
		if(oc==0){
			$('#safe2').attr('oc','1');
			$('#safe2').css({'border-color':'#FF6700'})
			$('#yuan2').css({'background-color':'#FF6700','border-color':'#FF6700'})
 			$('#kuang2').css({'background-color':'#FF6700','border-color':'#FF6700'})
			$('#safetext2').css('display','block');
			$('#safe1').attr('oc','0');
			$('#safe1').css({'border-color':'#b0b0b0'})
			$('#yuan1').css({'background-color':'#fff','border-color':'#b0b0b0'})
 			$('#kuang1').css({'background-color':'#fff','border-color':'#b0b0b0'})
			$('#safetext1').css('display','none');
		}
		if(oc==1){
			$('#safe2').attr('oc','0');
			$('#safe2').css({'border-color':'#b0b0b0'})
			$('#yuan2').css({'background-color':'#fff','border-color':'#b0b0b0'})
 			$('#kuang2').css({'background-color':'#fff','border-color':'#b0b0b0'})
			$('#safetext2').css('display','none');
		}
 	})
 	$('#safe3').click(function(){
 		var oc = $('#safe3').attr('oc');
		if(oc==0){
			$('#safe3').attr('oc','1');
			$('#safe3').css({'border-color':'#FF6700'})
			$('#yuan3').css({'background-color':'#FF6700','border-color':'#FF6700'})
 			$('#kuang3').css({'background-color':'#FF6700','border-color':'#FF6700'})
			$('#safetext3').css('display','block');
		}
		if(oc==1){
			$('#safe3').attr('oc','0');
			$('#safe3').css({'border-color':'#b0b0b0'})
			$('#yuan3').css({'background-color':'#fff','border-color':'#b0b0b0'})
 			$('#kuang3').css({'background-color':'#fff','border-color':'#b0b0b0'})
			$('#safetext3').css('display','none');
		}
 	})
})
