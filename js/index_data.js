
$(function(){	
//头部二级菜单
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
		var	siteStr = `<li class="site_content"><a href="${data.href}">
					<img src="${data.src}"/>
					<span id="site_name">${data.name}</span><a>
				</li>`;
		$('#sec_site').append(siteStr);
	})
	
	
	//小米闪购
   	var flash_srr = [{
				"src": "img/flash_purchase/flash_shops1.jpg",
				"name": "米家互联网空调（一级能效）",
				"text": "1.5匹 全直流变频",
				"price": "2499",
				"oldprice": "2599元"
			},
			{
				"src": "img/flash_purchase/flash_shops2.png",
				"name": "最生活浴巾·Air 4条量贩装",
				"text": "方便清洗 易晾干",
				"price": "99",
				"oldprice": "280元"
			},
	   		{
				"src": "img/flash_purchase/flash_shop3.jpg",
				"name": "小米手环3腕带 深空蓝",
				"text": "顺滑柔软 触感舒适",
				"price": "1",
				"oldprice": "19.9元"
			},
	   		{
				"src": "img/flash_purchase/flash_shops10.png",
				"name": "米家电水壶 白色",
				"text": "一杯水，是一家人的安心",
				"price": "89",
				"oldprice": "99元"
			},
	   		{
				"src": "img/flash_purchase/flash_shops3.png",
				"name": "米兔儿童电话手表2C 蓝色",
				"text": "轻盈机身 高清通话",
				"price": "178",
				"oldprice": "199元"
			},
			{
				"src": "img/flash_purchase/flash_shops10.png",
				"name": "米家电水壶 白色",
				"text": "一杯水，是一家人的安心",
				"price": "89",
				"oldprice": "99元"
			},
	   		{
				"src": "img/flash_purchase/flash_shops5.png",
				"name": "小黄鸡米兔 黄色",
				"text": "Q萌造型 让心融化",
				"price": "1",
				"oldprice": "49元"
			},
	   		{
				"src": "img/flash_purchase/flash_shops1.jpg",
				"name": "米家互联网空调（一级能效）",
				"text": "1.5匹 全直流变频",
				"price": "1",
				"oldprice": "49元"
			},
			{
				"src": "img/flash_purchase/flash_shops2.png",
				"name": "最生活浴巾·Air 4条量贩装",
				"text": "方便清洗 易晾干",
				"price": "99",
				"oldprice": "280元"
			},
			{
				"src": "img/flash_purchase/flash_shops3.png",
				"name": "米兔儿童电话手表2C 蓝色",
				"text": "轻盈机身 高清通话",
				"price": "178",
				"oldprice": "199元"
			}
   	]
	$.each(flash_srr,function(index,data){
		var	flashStr = `<li class="shop_list">
								<div class="bg"></div>
								<div id="shop_content">
									<img src="${data.src}"/>
									<p class="list_name">${data.name}</p>
									<p class="list_text">${data.text}</p>
									<p class="list_price">${data.price}&nbsp;元&nbsp;<span>${data.oldprice}</span></p>
								</div>
							</li>`;
		$('#flash_list').append(flashStr);
	})
	
	//手机
   	var phone_srr = [{
   				"lable":"新品",
				"src": "img/phone/pms_1.jpg",
				"name": "小米8 青春版 4GB+64GB",
				"text": "潮流镜面渐变色，2400万自拍旗舰",
				"price": "1399",
				"oldprice": ""
			},
			{
				"lable":"新品",
				"src": "img/phone/pms_2.png",
				"name": "小米Play",
				"text": "内置每月10GB高速流量，高颜值流光渐变色",
				"price": "1099",
				"oldprice": ""
			},
	   		{
				"lable":"减 300 元",
				"src": "img/phone/pms_3.jpg",
				"name": "小米8 SE 6GB+64GB",
				"text": "AI 超感光双摄，三星 AMOLED 屏幕",
				"price": "1699",
				"oldprice": "1999元"
			},
			{
				"lable":"减 600 元",
				"src": "img/phone/pms_4.jpg",
				"name": "小米MIX 2S 8GB+256GB",
				"text": "骁龙845 年度旗舰处理器，艺术品般陶瓷机身",
				"price": "3399",
				"oldprice": "3999"
			},
			{
				"lable":"享8折",
				"src": "img/phone/pms_5.jpg",
				"name": "小米6X 6GB+128GB",
				"text": "轻薄美观的拍照手机",
				"price": "1499",
				"oldprice": "1999元"
			},
			{
				"lable":"减 100 元",
				"src": "img/phone/pms_6.jpg",
				"name": "小米Max 3 4GB+64GB",
				"text": "",
				"price": "1599",
				"oldprice": "1699元"
			},
			{
				"lable":"减 250 元",
				"src": "img/phone/pms_7.jpg",
				"name": "红米6 Pro",
				"text": "高颜值大电量 红米旗舰",
				"price": "1049",
				"oldprice": "1299元"
			},
			{
				"lable":"减 30 元",
				"src": "img/phone/pms_8.jpg",
				"name": "红米6A 2GB+16GB",
				"text": "",
				"price": "569",
				"oldprice": "599元"
			}
   	]
	$.each(phone_srr,function(index,data){
		var	phoneStr = `<li class="phone_list">
								<div id="phone_content">
									<span id="lab" class="new_lable">${data.lable}</span>
									<img src="${data.src}"/>
									<p class="list_name">${data.name}</p>
									<p class="list_text">${data.text}</p>
									<p class="list_price">${data.price}&nbsp;元&nbsp;<span>${data.oldprice}</span></p>
								</div>
							</li>`;
		$('#phone_ul').append(phoneStr);
		var flag = $('.new_lable').text()=='新品';
		console.log(flag);
		if(flag==true){
			$('.new_lable').removeClass('new_lable').addClass('sale_lable');
		}
	
	})

	//家电
   	var household_srr = [{
   				"lable":"新品",
				"src": "img/phone/pms_1.jpg",
				"name": "小米8 青春版 4GB+64GB",
				"text": "潮流镜面渐变色，2400万自拍旗舰",
				"price": "1399",
				"oldprice": ""
			},
			{
				"lable":"新品",
				"src": "img/phone/pms_2.png",
				"name": "小米Play",
				"text": "内置每月10GB高速流量，高颜值流光渐变色",
				"price": "1099",
				"oldprice": ""
			},
	   		{
				"lable":"减 300 元",
				"src": "img/phone/pms_3.jpg",
				"name": "小米8 SE 6GB+64GB",
				"text": "AI 超感光双摄，三星 AMOLED 屏幕",
				"price": "1699",
				"oldprice": "1999元"
			},
			{
				"lable":"减 600 元",
				"src": "img/phone/pms_4.jpg",
				"name": "小米MIX 2S 8GB+256GB",
				"text": "骁龙845 年度旗舰处理器，艺术品般陶瓷机身",
				"price": "3399",
				"oldprice": "3999"
			},
			{
				"lable":"享8折",
				"src": "img/phone/pms_5.jpg",
				"name": "小米6X 6GB+128GB",
				"text": "轻薄美观的拍照手机",
				"price": "1499",
				"oldprice": "1999元"
			},
			{
				"lable":"减 100 元",
				"src": "img/phone/pms_6.jpg",
				"name": "小米Max 3 4GB+64GB",
				"text": "",
				"price": "1599",
				"oldprice": "1699元"
			},
			{
				"lable":"减 250 元",
				"src": "img/phone/pms_7.jpg",
				"name": "红米6 Pro",
				"text": "高颜值大电量 红米旗舰",
				"price": "1049",
				"oldprice": "1299元"
			}
   	]
   	
   	 	
   	var ai_srr = [
			{
   				"lable":"减50元",
				"src": "img/AI/pms_A1.jpg",
				"name": "小米米家电动滑板车",
				"text": "极简几何设计，1 分钟轻松上手",
				"price": "1949",
				"oldprice": "1999元"
			},
			{
   				"lable":"减100元",
				"src": "img/AI/pms_A2.jpg",
				"name": "电助力折叠自行车",
				"text": "力矩传感电助力，折叠便携设计",
				"price": "2999",
				"oldprice": "1999元"
			},
			{
   				"lable":"享9折",
				"src": "img/AI/pms_A3.jpg",
				"name": "米兔遥控小飞机",
				"text": "米兔遥控小飞机",
				"price": "389",
				"oldprice": "399元"
			},
			{
   				"lable":"新品",
				"src": "img/AI/pms_A4.jpg",
				"name": "米家车载空气净化器（USB车充版） 灰色",
				"text": "双风机循环气流，高效净化车内空气",
				"price": "449",
				"oldprice": ""
			},
			{
   				"lable":"减50元",
				"src": "img/AI/xmad_A5.jpg",
				"name": "Amazfit 运动手表",
				"text": "蓝牙听歌，运动心率，智能通知提醒",
				"price": "749",
				"oldprice": "799元"
			},
			{
   				"lable":"新品",
				"src": "img/AI/xmad_A6.jpg",
				"name": "小蚁微单相机M1双镜头套机",
				"text": "2016 万有效像素，4K视频录制",
				"price": "2999",
				"oldprice": ""
			},
			{
   				"lable":"减少300",
				"src": "img/AI/xmad_A7.jpg",
				"name": "米家全景相机套装",
				"text": "2388万有效像素 / 3.5K视频录制 ",
				"price": "1699",
				"oldprice": "1999元"
			}
   	]
   	
	//家电最后两个小li
	var last_srr = [{
				"lastsrc": "img/phone/pms_1.jpg",
				"lastname": "小米8 青春版 4GB+64GB",
				"lastprice": "13元",
				"lastnext": "电视影音"
			}
	
   	]
	
   	var lastai_srr = [{
				"lastsrc": "img/AI/xmad_A8.jpg",
				"lastname": "小米插线板（含3口USB 2A快充） 白色",
				"lastprice": "49元",
				"lastnext": "热门"
			}
	
   	]
	function Last(last_srr,z){
		$.each(last_srr,function(index,data){
			var	lastStr = `<li class="point_list last2">
										<div id="point_content1">
											<img src="${data.lastsrc}"/>
											<p class="list_name last_name">${data.lastname}</p>
											<p class="list_price last_price">${data.lastprice}</p>
										</div>
									</li>
									<li class="point_list last2">
										<div id="point_content1">
											<span class="iconfont last_icon">&#xe619;</span>
											<p class="last_more">浏览更多</p>
											<p class="list_text last_next">${data.lastnext}</p>
										</div>
									</li>
								</ul>
							</div>`;
			z.append(lastStr);
		})
	}
	function moreLs(srrs,y){
		$.each(srrs,function(index,data){
			var	anchorStr = `<li class="point_list">
									<div id="point_content">
										<img src="${data.src}"/>
										<p class="list_name">${data.name}</p>
										<p class="list_text">${data.text}</p>
										<p class="list_price">${data.price}元&nbsp;<span>${data.oldprice}</span></p>
									</div>
									<div id="wrap_down">
										<a href="#">
											<span class="review">买的第四台了，Pro客厅使用正好，提前备好迎接雾霾！</span>
											<span class="author"> 来自于 过往云烟 的评价 <span class="date" data-date="1508919547"></span> </span>
										</a>
									</div>
								</li>`;
			y.append(anchorStr);
			
//			<span class="lable1">${data.lable}</span>
//			var flag = $('.lable1').text()=='新品';
//			console.log(flag);
//			if(flag==true){
//				$('.lable1').removeClass('lable1').addClass('lable2');
//			}
		
		})
	}
	
	moreLs(household_srr,$('.r_point').eq(0));
	Last(last_srr,$('.lasttwo').eq(0));
	moreLs(ai_srr,$('.r_point').eq(1));
	Last(lastai_srr,$('.lasttwo').eq(1));
	
	
	//为你推荐
	var you_srr = [
			{
				"src": "img/foryou/pms_1.jpg",
				"name": "黑鲨游戏手机 Helo 双滑轨保护壳",
				"price": "49",
				"text": "极简几何设计，1 分钟轻松上手"
			},
			{
   				"src": "img/foryou/pms_2.jpg",
				"name": "小米米家电动滑板车",
				"price": "1949",
				"text": "极简几何设计，1 分钟轻松上手"
			},
			{
   				"src": "img/foryou/pms_6.jpg",
				"name": "小米米家电动滑板车",
				"price": "1949",
				"text": "极简几何设计，1 分钟轻松上手"
			},
			{
   				"src": "img/foryou/pms_4.jpg",
				"name": "小米米家电动滑板车",
				"price": "1949",
				"text": "极简几何设计，1 分钟轻松上手"
			},
			{
   				"src": "img/AI/pms_A1.jpg",
				"name": "小米米家电动滑板车",
				"price": "1949",
				"text": "极简几何设计，1 分钟轻松上手"
			},
			{
   				"src": "img/AI/pms_A3.jpg",
				"name": "小米米家电动滑板车",
				"price": "1949",
				"text": "极简几何设计，1 分钟轻松上手"
			},
			{
   				"src": "img/AI/pms_A3.jpg",
				"name": "小米米家电动滑板车",
				"price": "1949",
				"text": "极简几何设计，1 分钟轻松上手"
			},
			{
   				"src": "img/AI/pms_A4.jpg",
				"name": "小米米家电动滑板车",
				"price": "1949",
				"text": "极简几何设计，1 分钟轻松上手"
			},
			{
   				"src": "img/AI/pms_A1.jpg",
				"name": "小米米家电动滑板车",
				"price": "1949",
				"text": "极简几何设计，1 分钟轻松上手"
			},
			{
   				"src": "img/AI/pms_A3.jpg",
				"name": "小米米家电动滑板车",
				"price": "1949",
				"text": "极简几何设计，1 分钟轻松上手"
			},
			{
   				"src": "img/AI/pms_A2.jpg",
				"name": "小米米家电动滑板车",
				"price": "1949",
				"text": "极简几何设计，1 分钟轻松上手"
			},
			{
   				"src": "img/AI/pms_A2.jpg",
				"name": "小米米家电动滑板车",
				"price": "1949",
				"text": "极简几何设计，1 分钟轻松上手"
			},
			{
   				"src": "img/AI/pms_A2.jpg",
				"name": "小米米家电动滑板车",
				"price": "1949",
				"text": "极简几何设计，1 分钟轻松上手"
			},
			{
   				"src": "img/AI/pms_A2.jpg",
				"name": "小米米家电动滑板车",
				"price": "1949",
				"text": "极简几何设计，1 分钟轻松上手"
			}
   	]
	
	$.each(you_srr,function(index,data){
			var	youStr = `<li class="yours" style="margin: 0 14px 0 0">
								<div id="point_content">
									<img src="${data.src}"/>
									<p class="list_name">${data.name}</p>
									<p class="list_price">${data.price}元</p>
									<p class="list_text" style="padding-top: 12px;">${data.text}</p>
								</div>
							</li>`;
			$('#you_list').append(youStr);
			
		})
	
	//热评产品
	var hot_srr = [
			{
				"src": "img/hots/hots1.jpg",
				"says": "非常可爱，一拿到小宝宝还没享受，一帮大宝宝先high了一把，同事也想买，希望早点大卖",
				"user": "来自于 秘密 的评价",
				"name": "米兔智能故事机",
				"price": "189元"
			},
			{
				"src": "img/hots/hots2.jpg",
				"says": "非常可爱，一拿到小宝宝还没享受，一帮大宝宝先high了一把，同事也想买，希望早点大卖",
				"user": "来自于 秘密 的评价",
				"name": "米兔智能故事机",
				"price": "189元"
			},
			{
				"src": "img/hots/hots3.jpg",
				"says": "非常可爱，一拿到小宝宝还没享受，一帮大宝宝先high了一把，同事也想买，希望早点大卖",
				"user": "来自于 秘密 的评价",
				"name": "米兔智能故事机",
				"price": "189元"
			},
			{
				"src": "img/hots/hots4.jpg",
				"says": "非常可爱，一拿到小宝宝还没享受，一帮大宝宝先high了一把，同事也想买，希望早点大卖",
				"user": "来自于 秘密 的评价",
				"name": "米兔智能故事机",
				"price": "189元"
			}
   	]
	
	$.each(hot_srr,function(index,data){
			var	hotStr = `<li class="hots" style="margin: 0 14px 0 0">
								<div id="hot_content">
									<img src="${data.src}"/>
									<p id="hot_name">${data.says}</p>
									<p class="list_text" style="padding-top: 12px;">${data.user} </p>
									<p id="hot_name">${data.name} 
										<span style="color: #E0E0E0;">&nbsp;|&nbsp;</span>
										<span class="list_price">${data.price}</span>
									</p>
								</div>
							</li>`;
			$('#hot_list').append(hotStr);
		})

	//视频推荐
	var videos_srr = [
			{
				"src": "img/videos/xmad_vd1.jpg",
				"name": "一团火",
				"text": "小米创业8年内部纪录片（手机篇）"
			},
			{
				"src": "img/videos/xmad_vd2.jpg",
				"name": "小米8，一部与众不同的手机",
				"text": "透明探索版，将科技与美学完美结合"
			},
			{
				"src": "img/videos/xmad_vd3.jpg",
				"name": "小米MIX 2S，一面科技 一面艺术",
				"text": "艺术品般陶瓷机身，惊艳、璀璨"
			},
			{
				"src": "img/videos/xmad_vd4.jpg",
				"name": "生活中无所不在的小爱同学",
				"text": "一句话搞定手机复杂操作"
			}
   	]
	
	$.each(videos_srr,function(index,data){
			var	videosStr = `<li class="videos" style="margin: 0 14px 0 0">
								<div id="videos_content">
									<img src="${data.src}"/>
									<p id="vdio_name">${data.name}</p>
									<p class="list_text">${data.text}</p>
								</div>
							</li>`;
			$('#videos_list').append(videosStr);
		})

})