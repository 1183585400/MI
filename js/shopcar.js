$(function(){	
	$('footer').load("CommHtml/footer.html");
	//回到首页的效果
   	$('.header_logo').on('mouseover',function(){
   		$('#logo1').css({'opacity':'0'}); 
   		$('#logo2').css({'opacity':'1'}); 
   	})
   	$('.header_logo').on('mouseout',function(){
   		$('#logo1').css({'opacity':'1'}); 
   		$('#logo2').css({'opacity':'0'}); 
   	})
   	
   	//选择按钮的效果
   	//全选
   	$('#allbtn').click(function(){
   		var oc = $('#allbtn').attr('oc');
   		if(oc==0){
   			$('#allbtn').attr('oc','1');
   			$('#allbtn').css({'background-color': '#FF6700','border-color': '#FF6700'});
   			$('#btn1').css({'background-color': '#FF6700','border-color': '#FF6700'});
   			$('#btn2').css({'background-color': '#FF6700','border-color': '#FF6700'});
   		}
   		if(oc==1){
   			$('#allbtn').attr('oc','0');
   			$('#allbtn').css({'background-color': '#fff','border-color': '#b0b0b0'});
   			$('#btn1').css({'background-color': '#fff','border-color': '#b0b0b0'});
   			$('#btn2').css({'background-color': '#fff','border-color': '#b0b0b0'});
   		}
   	})
   	
   	//选中一个
   	//已经选择的个数
   	var selected = 0;
   	//结算总计
   	var allpay = 0;
   	$('#btn1').click(function(){
   		var oc = $('#btn1').attr('oc');
   		if(oc==0){
   			$('#btn1').attr('oc','1');
   			$('#btn1').css({'background-color': '#FF6700','border-color': '#FF6700'});
   			$('#another').css('display','block');
   			selected = parseInt($('#selected').text())+1
   			allpay = parseInt($('#all_pay').text()) + parseInt($('#xiaoji1').text())
   		}
   		if(oc==1){
   			$('#btn1').attr('oc','0');
   			$('#btn1').css({'background-color': '#fff','border-color': '#b0b0b0'});
   			$('#another').css('display','none');
   			selected = parseInt($('#selected').text())-1
   			if(selected<0){
				selected = 0;   				
   			}
   			allpay = parseInt($('#all_pay').text()) - parseInt($('#xiaoji1').text());
   			if(allpay<0){
   				allpay = 0;
   			}
   		}
   		$('#selected').html(selected);
   		$('#all_pay').html(allpay);
// 		console.log(selected);
   	})
   		//选中一个
   	$('#btn2').click(function(){
   		var oc = $('#btn2').attr('oc');
   		if(oc==0){
   			$('#btn2').attr('oc','1');
   			$('#btn2').css({'background-color': '#FF6700','border-color': '#FF6700'});
   			$('#another2').css('display','block');
   			selected = parseInt($('#selected').text())+1;
   			allpay = parseInt($('#all_pay').text()) + parseInt($('#xiaoji2').text());
   		}
   		if(oc==1){
   			$('#btn2').attr('oc','0');
   			$('#btn2').css({'background-color': '#fff','border-color': '#b0b0b0'});
   			$('#another2').css('display','none');
   			selected = parseInt($('#selected').text())-1
   			if(selected<0){
				selected = 0;   				
   			}
   			allpay = parseInt($('#all_pay').text()) - parseInt($('#xiaoji2').text());
			if(allpay<0){
				allpay = 0;
			}
   		}
   		$('#selected').html(selected);
   		$('#all_pay').html(allpay);
   		
   	})
   	
   	
   	//删除 X 商品
   	$('#del1').click(function(){
		$('#shoplist1').css('display','none');
   		allpay = parseInt($('#all_pay').text()) - parseInt($('#xiaoji1').text());
		if(allpay<0){
			allpay = 0;
		}
   		$('#all_pay').html(allpay);
		
   	})
   	$('#del2').click(function(){
		$('#shoplist2').css('display','none');
		allpay = parseInt($('#all_pay').text()) - parseInt($('#xiaoji2').text());
		if(allpay<0){
			allpay = 0;
		}
   		$('#all_pay').html(allpay);
		
   	})
   	//删除 X 赠品
   	$('#g_del').click(function(){
		$('#gift21').css('display','none');
   	})
   	
   	//数量变化
   	$('.num').each(function(index) {
   		var inow = $('.num').index(this);
   		var count = parseInt($('.nownum').eq(inow).text());
   		console.log(inow,count);
   		$('.less').eq(inow).click(function(){
   			count=count-1;
   			if(count<=1){
				count = 1;
			}
   			$('.nownum').eq(inow).html(count);
   			counts(count,inow);
   		})
   		$('.more').eq(inow).click(function(){
   			count=count+1;
   			$('.nownum').eq(inow).html(count);
   			counts(count,inow);
   		})
   		
   	})
    //计算价钱
    var onepay = 0;
    function counts(count,inum){
			onepay = parseInt($('.danjia').eq(inum).text()) * count;
			console.log(onepay)
		   	$('.xiaoji').eq(inum).html(onepay);
	}
    
    function pay(onepay){
    	allpay = parseInt($('#all_pay').text())+onepay;
	   	$('#all_pay').html(allpay);
	   	console.log(allpay);
    }
	   	
  
   	
   	
	//吸底效果
   	//购物车盒子高度 > 可视区域高度$(window).height() - header高度   〉〉position:fixed
   	//srollTop >= header高度+盒子高度-可视区域高度  〉〉position:relative
//		var forfix = $(window).height()-$('#topbar').height();
//	   	var forrel = $('#topbar').height()+$('#shopcar').height()-$(window).height();
//	   	console.log(forfix,forrel)
	function fixedown(){
		if($('#shopcar').height() > $(window).height()-$('#topbar').height()){
			console.log('fixed啦')
			$('#big_stat').css({'position':'fixed','bottom':'0'})
		}
		if($(window).scrollTop() >= $('#topbar').height()+$('#shopcar').height()-$(window).height()){
			console.log('rel啦')
			$('#big_stat').css({'position':'relative'})
		}
	}
	fixedown();	
		
   	
	//购物车推荐动态创建
   	var foryou_srr = [
		{
			"src": "img/phone/pms_1.jpg",
			"name": "小米8 标准钢化玻璃膜",
			"price": "29元",
			"text": "1.7万人好评"
		},
		{
			"src": "img/phone/pms_2.png",
			"name": "小米MIX 3 全网通版 6GB内存",
			"price": "3999元",
			"text": "5673人好评"
		},
		{
			"src": "img/phone/pms_3.jpg",
			"name": "小米8 标准钢化玻璃膜",
			"price": "29元",
			"text": "2345人好评"
		},
		{
			"src": "img/phone/pms_4.jpg",
			"name": "小米8 标准钢化玻璃膜",
			"price": "29元",
			"text": "8794人好评"
		},
		{
			"src": "img/phone/pms_5.jpg",
			"name": "小米MIX 3 全网通版 6GB内存",
			"price": "2899元",
			"text": "1.2万人好评"
		},
		{
			"src": "img/phone/pms_6.jpg",
			"name": "小米Play 全网通版 4GB内存",
			"price": "2999元",
			"text": "1.3万人好评"
		},
		{
			"src": "img/phone/pms_7.jpg",
			"name": "小米8 标准钢化玻璃膜",
			"price": "27元",
			"text": "8934万人好评"
		},
		{
			"src": "img/phone/pms_8.jpg",
			"name": "小米MIX 3 标准高透膜",
			"price": "39元",
			"text": "2万人好评"
		},
		{
			"src": "img/phone/pms_5.jpg",
			"name": "小米6X 全网通版 6GB内存",
			"price": "1599元",
			"text": "8965人好评"
		}
	]
	
	$.each(foryou_srr,function(index,data){
			var	foryouStr = `<li class="foryou_lis">
								<div id="point_content">
									<img src="${data.src}">
									<p class="list_name">${data.name}</p>
									<p class="list_price">${data.price}</p>
									<p class="list_text" id="good" style="padding-top: 12px;">${data.text}</p>
								</div>
							</li>`;
		$('#foryou_ul').append(foryouStr);
	})
   	
   	
   	
})