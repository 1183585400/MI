$(function(){	
	//引用公共部分
	$('header').load("CommHtml/header.html");
 	$('footer').load("CommHtml/footer.html");
 	
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
		},
		
		{
			"src": "img/phone/pms_5.jpg",
			"name": "小米MIX 3 全网通版 6GB内存",
			"price": "2899元",
			"text": "1.2万人好评"
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