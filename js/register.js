$(function(){	
	
	//国家
	$('#inp_box1').click(function(){
		$('#inpbox1_down').toggle();
	})

	$('#btnnum').click(function(){
		$('#inpbox2_down').toggle();
	})
	$('#num').blur(function(){
		var value = $('#num').val();
		var reg = /^1\d{10}$/;
		var result = reg.test(value);
		$('#notxt').css('display','none');
		$('#err').css('display','none');
		if(value==''){
			$('#no').css('display','none');
			$('#notxt').css('display','block');
		}
		else if(result==false){
			$('#no').css('display','none');
			$('#err').css('display','block');
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