$(function(){	
	$('#saoma').click(function(){
		$('#all').css('display','none');
		$('#code').css('display','block');
		$('#saoma').css('color','#FF6700');
		$('#zhanghao').css('color','#333')
	})
	
	$('#zhanghao').click(function(){
		$('#code').css('display','none');
		$('#all').css('display','block');
		$('#saoma').css('color','#333');
		$('#zhanghao').css('color','#FF6700')
	})
	$('#login').click(function(){
		$('#id').css('borderColor','#e0e0e0');
		$('#pwd').css('borderColor','#e0e0e0');
		$('#danger1').css('display','none');
		$('#danger2').css('display','none');
		$('#danger3').css('display','none');
		var idval = $('#id').val();
		var pwdval = $('#pwd').val();
		//只能输入5-10个以字母开头且带数字、“_”、“.”的字串
		regName = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,9}$/;
		var result = regName.test(idval);
		if(idval==''){
			$('#id').css('borderColor','#FF6700');
			$('#danger1').css('display','block');
			console.log('请输入用户名');
		}else if(result==false){
			$('#id').css('borderColor','#FF6700');
			$('#danger2').css('display','block');
			console.log('用户名输入错误！');
		}else if(pwdval==''){
			$('#pwd').css('borderColor','#FF6700');
			$('#danger3').css('display','block');
			console.log('请输入密码');
		}		
	})
})