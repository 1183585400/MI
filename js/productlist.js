$(function(){	
	//引用公共部分
	$('header').load("CommHtml/header.html");
 	$('footer').load("CommHtml/footer.html");
 	
	//手机 电话卡
   	var phone_srr = [
   			{
				"src": "img/site_sec/666666.png",
				"name": "小米6"
			},
			{
			"src": "img/site_sec/mix3-80.png",
			"name": "小米MIX 3"
			},
			{
				"src": "img/site_sec/qingchun-80.png",
				"name": "小米8 青春版"
			},
	   		{
				"src": "img/site_sec/pingmu-80.png",
				"name": "小米8 屏幕指纹版"
			},
	   		{
				"src": "img/site_sec/max3-80-80.png",
				"name": "小米MAX 3"
			},
	   		{
				"src": "img/site_sec/m8se-80.png",
				"name": "小米8 SE"
			},
	   		{
				"src": "img/site_sec/80808080808080.jpg",
				"name": "小米 6X"
			},
	   		{
				"src": "img/site_sec/note5-80-80.png",
				"name": "红米Note 5"
			},
	   		{
				"src": "img/site_sec/note780-80.png",
				"name": "红米Note 7"
			},
   			{
				"src": "img/site_sec/note5-80-80.png",
				"name": "红米Note 5"
			},
			{
				"src": "img/site_sec/qingchun-80.png",
				"name": "小米8 青春版"
			},
			{
				"src": "img/site_sec/note5-80-80.png",
				"name": "红米Note 5"
			},
			{
				"src": "img/site_sec/pingmu-80.png",
				"name": "小米8 屏幕指纹版"
			},
			{
				"src": "img/site_sec/max3-80-80.png",
				"name": "小米MAX 3"
			},
			{
				"src": "img/site_sec/80808080808080.jpg",
				"name": "小米 6X"
			},
			{
				"src": "img/site_sec/m8se-80.png",
				"name": "小米8 SE"
			},{
				"src": "img/site_sec/note5-80-80.png",
				"name": "红米Note 5"
			},
			{
				"src": "img/site_sec/qingchun-80.png",
				"name": "小米8 青春版"
			},
			{
				"src": "img/site_sec/note5-80-80.png",
				"name": "红米Note 5"
			},
			{
				"src": "img/site_sec/80808080808080.jpg",
				"name": "小米 6X"
			},
			{
				"src": "img/site_sec/m8se-80.png",
				"name": "小米8 SE"
			}
   	]
   	//电视盒子
   	var tv_srr = [
   			{
				"src": "img/site_sec/tv1.jpg",
				"name": "米家激光投影电视"
			},
			{
				"src": "img/site_sec/tv2.png",
				"name": "米家激光投影电视"
			},
			{
				"src": "img/site_sec/tv3.png",
				"name": "小米电视4A 32英寸"
			},
			{
				"src": "img/site_sec/tv4.png",
				"name": "小米电视4A 43英寸青春版"
			},
			{
				"src": "img/site_sec/tv2.png",
				"name": "米家激光投影电视"
			},
			{
				"src": "img/site_sec/tv5.png",
				"name": "小米电视4A 50英寸"
			},
			{
				"src": "img/site_sec/tv2.png",
				"name": "米家激光投影电视"
			},
			{
				"src": "img/site_sec/tv6.png",
				"name": "小米电视4A 55英寸"
			},
			{
				"src": "img/site_sec/tv4.png",
				"name": "小米电视4A 43英寸青春版"
			},
			{
				"src": "img/site_sec/tv7.png",
				"name": "小米电视4A 58英寸"
			},
			{
				"src": "img/site_sec/tv8.png",
				"name": "小米电视4A 65英寸"
			},
			{
				"src": "img/site_sec/tv2.png",
				"name": "米家激光投影电视"
			},
			{
				"src": "img/site_sec/tv9.jpg",
				"name": "小米电视4C 32英寸"
			},
			{
				"src": "img/site_sec/tv10.png",
				"name": "小米电视4C 40英寸"
			},
			{
				"src": "img/site_sec/tv6.png",
				"name": "小米电视4A 55英寸"
			},
			{
				"src": "img/site_sec/tv11.png",
				"name": "小米电视4C 43英寸"
			},
			{
				"src": "img/site_sec/tv4.png",
				"name": "小米电视4A 43英寸青春版"
			},
			{
				"src": "img/site_sec/tv2.png",
				"name": "米家激光投影电视"
			},
			{
				"src": "img/site_sec/tv12.png",
				"name": "小米电视4C 50英寸"
			},
			{
				"src": "img/site_sec/tv4.png",
				"name": "小米电视4A 43英寸青春版"
			},
			{
				"src": "img/site_sec/tv3.png",
				"name": "小米电视4A 32英寸"
			},
			{
				"src": "img/site_sec/tv7.png",
				"name": "小米电视4A 58英寸"
			},
			{
				"src": "img/site_sec/tv4.png",
				"name": "小米电视4A 43英寸青春版"
			}
   	]
   	
    //平板 笔记本
   	var ipad_srr = [
   			{
				"src": "img/site_sec/computer1.jpg",
				"name": "小米笔记本 15.6"
			},
			{
				"src": "img/site_sec/computer2.png",
				"name": "小米笔记本 13.3"
			},
			{
				"src": "img/site_sec/computer3.jpg",
				"name": "小米笔记本 12.5"
			},
			{
				"src": "img/site_sec/computer4.jpg",
				"name": "小米游戏本"
			},
			{
				"src": "img/site_sec/computer5.jpg",
				"name": "小米平板4"
			},
			{
				"src": "img/site_sec/computer6.jpg",
				"name": "键盘"
			},
			{
				"src": "img/site_sec/computer7.png",
				"name": "鼠标／鼠标垫"
			},
			{
				"src": "img/site_sec/computer8.jpg",
				"name": "转接器"
			},
			{
				"src": "img/site_sec/computer9.jpg",
				"name": "平板配件"
			},
			{
				"src": "img/site_sec/computer2.png",
				"name": "小米笔记本 13.3"
			},
			{
				"src": "img/site_sec/computer5.jpg",
				"name": "小米平板4"
			}
   	]
   	
   	 //穿戴 出行
   	var out_srr = [
   			{
				"src": "img/site_sec/out1.jpg",
				"name": "手环手表"
			},
			{
				"src": "img/site_sec/out1.jpg",
				"name": "VR"
			},
			{
				"src": "img/site_sec/out3.jpg",
				"name": "平衡车"
			},
			{
				"src": "img/site_sec/out4.jpg",
				"name": "滑板车"
			},
			{
				"src": "img/site_sec/out5.jpg",
				"name": "自行车"
			},
			{
				"src": "img/site_sec/out6.jpg",
				"name": "车载逆变器"
			},
			{
				"src": "img/site_sec/out8.jpg",
				"name": "平衡车配件"
			},
			{
				"src": "img/site_sec/out7.jpg",
				"name": "智能后视镜"
			},
			{
				"src": "img/site_sec/out9.jpg",
				"name": "车载空气净化器"
			}
   	]
   	
   	//智能 路由器
   	var ai_srr = [
   			{
				"src": "img/site_sec/ai1.jpg",
				"name": "路由器"
			},
			{
				"src": "img/site_sec/ai2.jpg",
				"name": "对讲机"
			},
			{
				"src": "img/site_sec/ai3.jpg",
				"name": "智能家庭"
			},
			{
				"src": "img/site_sec/ai4.jpg",
				"name": "无人机"
			},
			{
				"src": "img/site_sec/ai5.jpg",
				"name": "摄像机"
			},
			{
				"src": "img/site_sec/ai6.jpg",
				"name": "照相机"
			},
			{
				"src": "img/site_sec/ai7.jpg",
				"name": "智能门锁"
			},
			{
				"src": "img/site_sec/ai8.jpg",
				"name": "打印机"
			}
   	]
   	
//	$.each(phone_srr,function(index,data){
//		var	phoneStr = `<li class="lis">
//							<img src="${data.src}"/>
//							<p>${data.name}</p>
//						</li>`;
//		$('#phones_ul').append(phoneStr);
//	})

	//封装动态创建函数
	function moreprodust(srr,tree){
   		$.each(srr,function(index,data){
	   		var	strs = `<li class="lis">
								<img src="${data.src}"/>
								<p>${data.name}</p>
							</li>`;
	//		$('#phones_ul').append(phoneStr);
			tree.append(strs);
 	 	})
  	}
	//调用动态创建函数
	moreprodust(phone_srr,$('#phones_ul'));
	moreprodust(tv_srr,$('#tvs_ul'));
	moreprodust(ipad_srr,$('#ipads_ul'));
	moreprodust(out_srr,$('#outs_ul'));
	moreprodust(ai_srr,$('#ais_ul'));
	
	
		$('.h_title').each(function(index) {
			var inow = $('.h_title').index(this);
				$('.h_title').eq(inow).click(function(index){
				console.log(inow);
		 		var oc = $('.h_title').eq(inow).attr('oc');
		 		if(oc==0){
		 			$('.btn').eq(inow).css({'transform':'rotate(180deg)','color':'#FF6700','border-color':'#FF6700'})
		 			$('.h_title').eq(inow).attr('oc','1');
					$('.boxs').eq(inow).css('display','none');
		 			$('.class_title').eq(inow).css('border-color','#fff');
		 		}
		 		if(oc==1){
		 			$('.btn').eq(inow).css({'transform':'rotate(360deg)','color':'#b0b0b0','border-color':'#b0b0b0'})
	//	 			$('.btn').eq(inow).css('transform','rotate(360deg)')
		 			$('.h_title').eq(inow).attr('oc','0');
		 			$('.boxs').eq(inow).css('display','block');
					$('.class_title').eq(inow).css('border-color','#e0e0e0');
		 		}
	 	})
	})
		
	//侧边拦效果
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