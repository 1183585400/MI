$(function(){	
 	//头部搜索
 	$("#search").focus(function(){
		$('#search').css('border','1px solid #ff6700');
		$('.search-btn').css('border','1px solid #ff6700');
		$('#lable').fadeOut("normal");
		$('#search_menu').css('display','block');
		
 	});
 	$("#search").blur(function(){
		$('#search').css('border','1px solid #e0e0e0');
		$('.search-btn').css('border','1px solid #e0e0e0');
		$('#lable').css('display','block');
		$('#search_menu').css('display','none');
		
 	});
 	
   	$('#miphone').mouseover(function(){
   		$('#down_menu').css({'height':'229px'}); 
   	})
   	$('#miphone').mouseout(function(){	
   		$('#down_menu').css({'height':'0'}); 
   	})
   	$('#down_menu').mouseover(function(){
   		$('#down_menu').css({'height':'229px'}); 
   	})
   	$('#down_menu').mouseout(function(){	
   		$('#down_menu').css({'height':'0'}); 
   	})

//轮播
 	//调用定时器
	inter();
	
	var iNow = 0;
	var timer;
	for(var i = 0;i<$('.picBtn').length;i++){
//		console.log(i);
		bind(i);
	}
	
	//定时器
    function inter(){
		timer =setInterval(function(){
	    	iNow++;
//	    	console.log(iNow);
	    	if(iNow>=$('.sPic').length){
				iNow=0;
			}
	    	changePic(iNow);
	    	nextBtn(iNow);
	    },3000)
   }
	function changePic(index){
		//遍历素组，将图片透明度全部设为0
		for(var j = 0;j<$('.sPic').length;j++){
			$('.sPic').eq(j).css('opacity','0');
			//根据索引值，将相对应的图片透明度设置为1
			if(j==index){
				$('.sPic').eq(j).css('opacity','1');
			}
		}
	}
	//封装点击函数
	function bind (index){
		//点击按钮事件
		$('.picBtn').eq(index).click(function(){
			//点击事件时候先把定时器清除掉
			clearInterval(timer);
			iNow = index;
//			console.log('pncli'+index);
			changePic(index);
			clickBtn(index);
			//显示完图片后再调用定时器
			inter();
		})
	}
	//上一张
	$('#before').click(function(){
		//点击事件时候先把定时器清除掉
		clearInterval(timer);
		iNow--;
		if(iNow<0){
			iNow = $('.sPic').length-1;
		}
//		console.log('前'+iNow);
		changePic(iNow);
		lastBtn(iNow);
		inter();
	})
	//下一张
	$('#next').click(function(){
		//点击事件时候先把定时器清除掉
		clearInterval(timer);
		iNow++;
		if(iNow>$('.sPic').length-1){
			iNow = 0;
		}
//		console.log('后'+iNow);
		changePic(iNow);
		nextBtn(iNow);
		inter();
	})
	
	//点击下一页时按钮的变化函数
	function nextBtn(index){
		$('.picBtn').eq(index).css('background-color','rgba(255,255,255,0.4)');
		if(index>($('.sPic').length-1)){
			index = 0;
			$('.picBtn').eq(index).css('background-color','rgba(255,255,255,0.4)');
		}
		if(index>0){
			$('.picBtn').eq(index-1).css('background-color','rgba(0,0,0,0.4)');
		}else{
			$('.picBtn').eq($('.sPic').length-1).css('background-color','rgba(0,0,0,0.4)');
		}
	}
	//点击上一页时按钮的变化函数
	function lastBtn(index){
		$('.picBtn').eq(index).css('background-color','rgba(255,255,255,0.4)');
		if(index>($('.sPic').length-1)){
			index = 0;
			$('.picBtn').eq(index).css('background-color','rgba(255,255,255,0.4)');
		}
		if(index<$('.sPic').length-1){
			$('.picBtn').eq(index+1).css('background-color','rgba(0,0,0,0.4)');
		}else{
			$('.picBtn').eq(0).css('background-color','rgba(0,0,0,0.4)');
		}
	}
	//点击事件的按钮变化
	function clickBtn(index){
		for(var k = 0;k<$('.picBtn').length;k++){
			if(k==index){
				$('.picBtn').eq(k).css('background-color','rgba(255,255,255,0.4)');
			}else{
				$('.picBtn').eq(k).css('background-color','rgba(0,0,0,0.4)');
			}
		}
	}
	
	
	//倒计时
	
	var clock = setInterval(function(){
		console.log(1)
		getTime();	
	},1000)
	var star =  new Date("2019/07/03 11:30:00");
	function getTime(){
		var now = new Date();
		var time = star - now;
		var h = parseInt(time / 1000 / 60 / 60 % 24);
	    var m = parseInt(time / 1000 / 60 % 60);
	    var s = parseInt(time / 1000 % 60);
		if(s>=0){
			change(h,m,s);
		}else if(s==0){
			h = parseInt(00);
			m = parseInt(00);
			s = parseInt(00);
		}else{
		}
//		console.log(h,m,s);	
//		console.log(now);
	}
	function change(h,m,s){
		if(h<10){
			h = '0' + h;
		}
		if(m<10){
			m = '0' + m;
		}
		if(s<10){
			s = '0' + s;
		}
		$('#hh').html(h);
		$('#mm').html(m);
		$('#ss').html(s);
	}
	
	//小米闪购
$('#flash_list').ready(function(){
	
	//上边框样式
	for(var k = 0;k<$('.shop_list').length;k++){
		if(k%2==0){
			$('.shop_list').eq(k).css('border-color','orange');
		}else if(k%3==0){
			$('.shop_list').eq(k).css('border-color','blue');
		}else{
			$('.shop_list').eq(k).css('border-color','yellow');
		}
	}
	
	var ulNow = 0;
	var num  = Math.floor( $('.shop_list').length/4 );
	var num02 = Math.floor( $('.shop_list').length%4 );
	$('#flash_before').click(function(){
		console.log('beforefirst:'+ulNow);
		if(ulNow>=-1){
			ulNow = 0;
		}
		if(ulNow<=-num){
			ulNow = -1;
		}
		var shop_left = $('.shop_list').width()*4+56;
		$('#flash_list').css('left',shop_left*ulNow);
		$('#flash_list').css('transition','left 0.3s')
		ulNow ++;
		console.log('beforelast:'+ulNow);
	})
	$('#flash_next').click(function(){
		var shop_left;
		console.log('nextfirst:'+ulNow);
		if(ulNow>0){
			ulNow = 0;
		}
		ulNow--;
		console.log('--:'+ulNow);
		if(ulNow<-num){
//			ulNow = -num+1
		}
		if(ulNow>-num){
			shop_left = $('.shop_list').width()*4+56;
			$('#flash_list').css('left',shop_left*ulNow);
			$('#flash_list').css('transition','left 0.3s')
			$('#flash_list').animate({'left':shop_left*ulNow},'fast','linear', '0.1s')
		}
		if(ulNow==-num){
			shop_left = -($('.shop_list').width()*4+56) - ($('.shop_list').width()+14)*num02;
			$('#flash_list').css('left',shop_left);
			$('#flash_list').css('transition','left 0.3s')
			$('#flash_list').animate({'left':shop_left},'fast','linear', '0.1s')
//			ulNow = -num+1;
			console.log('==:'+ulNow);
		}
		console.log('nextlast:'+ulNow,shop_left);
	})
	
	//为你推荐
	var yulNow = 0;
	var ynum  = Math.floor( $('.yours').length/5 );
	var ynum02 = Math.floor( $('.yours').length%5 );
	console.log('ynum:'+ynum,ynum02);
	$('#you_before').click(function(){
		console.log('beforefirst:'+yulNow);
		if(yulNow>=-1){
			yulNow = 0;
		}
		if(yulNow<=-ynum){
			yulNow = -1;
		}
		var yshop_left = $('.yours').width()*5+56;
		$('#you_list').css('left',yshop_left*yulNow);
		$('#you_list').css('transition','left 0.3s')
		yulNow ++;
		console.log('beforelast:'+yulNow);
	})
	$('#you_next').click(function(){
		var yshop_left;
		console.log('nextfirst:'+yulNow);
		if(yulNow>0){
			yulNow = 0;
		}
		yulNow--;
		console.log('--:'+yulNow);
		if(yulNow<-ynum){
//			ulNow = -ynum+1
		}
		if(yulNow>-ynum){
			yshop_left = $('.yours').width()*5+56;
			$('#you_list').css('left',yshop_left*yulNow);
			$('#you_list').css('transition','left 0.3s')
			$('#you_list').animate({'left':yshop_left*yulNow},'fast','linear', '0.1s')
		}
		if(yulNow==-ynum){
			yshop_left = -($('.yours').width()*5+56) - ($('.yours').width()+14)*ynum02;
			$('#you_list').css('left',yshop_left);
			$('#you_list').css('transition','left 0.3s')
			$('#you_list').animate({'left':yshop_left},'fast','linear', '0.1s')
//			ulNow = -num+1;
			console.log('==:'+yulNow);
		}
		console.log('nextlast:'+yulNow,yshop_left);
	})

	
});


	//回到顶部
	$('#totop').click(function(){
		$('html ,body').animate({scrollTop: 0}, 300);
	})
	
	$(document).scroll( function() { 
		if($(document).scrollTop()>1000){
			$('#totop').css('display','block');
		}
		if($(document).scrollTop()== 0){
			$('#totop').css('display','none');
		}
		
	} )
	
})

