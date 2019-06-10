$(function(){	
	
	//国家
	$('#inp_box1').click(function(){
		//点击 出现 /隐藏   切换
		$('#inpbox1_down').toggle();
	})

	$('#btnnum').click(function(){
		//点击 出现 /隐藏   切换
		$('#inpbox2_down').toggle();
	})
	$('#num').blur(function(){
		var value = $('#num').val();
		var reg = /^1\d{10}$/;
		var result = reg.test(value);
		$('#danger').css('color','#fff');
		if(result==false){
			//p标签显示
			$('#danger').css('color','red');
		}
	})
	
	$('#carebtn').click(function(){
		var oc = $('#carebtn').attr('oc');
		if(oc==0){
			$('#carebtn').attr('oc','1');
			$('#carebtn').css({'background-color':'#FF6700','border': '2px solid #FF6700'});
		}
		if(oc==1){
			$('#carebtn').attr('oc','0');
			$('#carebtn').css({'background-color':'#fff','border': '2px solid #EEEEEE'});
		}
		
		
	})


})