$(function(){	
 	//头部搜索
 	$("#search").on('focus',function(){
		$('#search').css('border','1px solid #ff6700');
		$('.search-btn').css('border','1px solid #ff6700');
		$('#lable').fadeOut("normal");
		$('#search_menu').css('display','block');
		
 	});
   	$("#search").on('blur',function(){
		$('#search').css('border','1px solid #e0e0e0');
		$('.search-btn').css('border','1px solid #e0e0e0');
		$('#lable').css('display','block');
		$('#search_menu').css('display','none');
		
   	});
   	
   	$('#miphone').on('mouseover',function(){
   		$('#down_menu').css({'height':'229px','borderColor': '#e0e0e0'}); 
   	})
   	$('#miphone').on('mouseout',function(){	
   		$('#down_menu').css({'height':'0','borderColor': '#fff'}); 
   	})
   	$('#down_menu').on('mouseover',function(){
   		$('#down_menu').css({'height':'229px','borderColor': '#e0e0e0'}); 
   	})
   	$('#down_menu').on('mouseout',function(){	
   		$('#down_menu').css({'height':'0','borderColor': '#fff'}); 
   	})
   	
   	//回到首页的效果
   	$('.header_logo').on('mouseover',function(){
   		$('#logo1').css({'opacity':'0'}); 
   		$('#logo2').css({'opacity':'1'}); 
   	})
   	$('.header_logo').on('mouseout',function(){
   		$('#logo1').css({'opacity':'1'}); 
   		$('#logo2').css({'opacity':'0'}); 
   	})
   	var srr = [{
			"new": "新品",
			"src": "img/downmenu/mix3-320.png",
			"name": "小米MIX",
			"price": "3299元起"
		},
		{
			"new": "热卖",
			"src": "img/downmenu/pc-320-220-mi8.png",
			"name": "小米8 青春版",
			"price": "1399元起"
		},
		{
			"new": "热卖",
			"src": "img/downmenu/pc-320-220-mi8se.png",
			"name": "小米8",
			"price": "2699元起"
		},
		{
			"new": "新品",
			"src": "img/downmenu/pc-320-miplay-1.png",
			"name": "小米Play",
			"price": "1099元起"
		},
		{
			"new": "新品",
			"src": "img/downmenu/qingchun-320.png",
			"name": "小米8 SE",
			"price": "1699元起"
		}]
	$.each(srr,function(index,data){
		var	str = `<li id="menu_list">
					<span id="new_text">${data.new}</span>
					<img src="${data.src}" id="down_img"/>
					<p id="name_p">${data.name} 3</p>
					<p id="price_p">${data.price}</p>
				</li>`;
		$('#menu_ul').append(str);
	})
	
//轮播上的二级菜单
   	var site_srr = [
   			{
				"src": "img/site_sec/666666.png",
				"href":"",
				"name": "小米6"
			},
   			{
				"src": "img/site_sec/mix3-80.png",
				"href":"",
				"name": "小米MIX 3"
			},
			{
				"src": "img/site_sec/qingchun-80.png",
				"href":"buy.html",
				"name": "小米8 青春版"
			},
	   		{
				"src": "img/site_sec/pingmu-80.png",
				"href":"",
				"name": "小米8 屏幕指纹版"
			},
	   		{
				"src": "img/site_sec/max3-80-80.png",
				"href":"",
				"name": "小米MAX 3"
			},
	   		{
				"src": "img/site_sec/m8se-80.png",
				"href":"",
				"name": "小米8 SE"
			},
	   		{
				"src": "img/site_sec/80808080808080.jpg",
				"href":"",
				"name": "小米 6X"
			},
	   		{
				"src": "img/site_sec/note5-80-80.png",
				"href":"",
				"name": "红米Note 5"
			},
	   		{
				"src": "img/site_sec/note780-80.png",
				"href":"",
				"name": "红米Note 7"
			},
   			{
				"src": "img/site_sec/note5-80-80.png",
				"href":"",
				"name": "红米Note 5"
			},
			{
				"src": "img/site_sec/qingchun-80.png",
				"href":"buy.html",
				"name": "小米8 青春版"
			},
			{
				"src": "img/site_sec/note5-80-80.png",
				"href":"",
				"name": "红米Note 5"
			},
			{
				"src": "img/site_sec/pingmu-80.png",
				"href":"",
				"name": "小米8 屏幕指纹版"
			},
			{
				"src": "img/site_sec/max3-80-80.png",
				"href":"",
				"name": "小米MAX 3"
			},
			{
				"src": "img/site_sec/80808080808080.jpg",
				"href":"",
				"name": "小米 6X"
			},
			{
				"src": "img/site_sec/m8se-80.png",
				"href":"",
				"name": "小米8 SE"
			}
   	]
	$.each(site_srr,function(index,data){
		var	siteStr = `<li class="site_content"><a id="a_h" href="${data.href}">
					<img src="${data.src}"/>
					<span id="site_name">${data.name}</span><a>
				</li>`;
		$('#sec_site').append(siteStr);
	})
	
   	
 	
})
