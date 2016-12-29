;(function($){
	//header模块效果实现
	$header = $('.header');   //header对象
	$menuBtn = $header.find('.header-right'); //header-right对象

	$menuBtn.on('click',function(e){
		$(this).fadeOut("fast");
		$menu
			.addClass('menu-show')
			.removeClass('menu-hide');
	})

	//menu模块效果实现
	var $menu = $('.menu');  //menu对象
	var $menuBtn2 = $menu.find('.menu-btn-groups');  //menu-btn-groups对象
	var $level_1 = $menu.find('.menu-level .menu-level-links');  //menu-level下的menu-level-links对象
	var $menuBtn3 = $menu.find('.menu-level2 .menu-level2-list');  //获取menu-level2下的menu-level2-list tail对象


	$menuBtn3.on('click',function(e){
		var index = $(this).parents('.menu-level-list').index();   //获取menu-level2-list的祖辈menu-level-list的序列号
		$menu
			.addClass('menu-hide')
			.removeClass('menu-show');

		setTimeout(function(e){
			$menuBtn.fadeIn("fast");
		},500);

		if(index == 4){
			
		}
	});
	//侧边栏手风琴效果实现
	var objType = {
					"0":"index",
					"1":"aboutBrand",
					"2":"brandProject",
					"3":"storeImage",
					"4":"joinInformation",
					"5":"joinUs",
					"6":"message"
	}
	$('.header .header-left').on('click',function(e){
		var flag = $menu.hasClass('menu-show');
		if(flag){
			$menu
				.addClass('menu-hide')
				.removeClass('menu-show');
			setTimeout(function(e){
				$menuBtn.fadeIn("fast");
			},500);
		}
	});

	var menuLevel = document.getElementById('menu-level');
	var index_level = 0;
	var flag_n;
	$level_1.on('click',function(e){
		flag_n = $(this).parent().hasClass('has-child');
		var index = $(this).parent().index();
		index_level = $(this).parent().index();
		console.log(flag_n)
		$(this)
			.siblings('.menu-level2').slideToggle("fast")
			.parent()
			.siblings()
			.find('.menu-level2').slideUp("fast");
		if(flag_n){
			
		}else{
			$menu
				.addClass('menu-hide')
				.removeClass('menu-show');

			setTimeout(function(e){
				$menuBtn.fadeIn("fast");
			},500);	
		}
		
	});

	//刷新页面时，页面保留在当前页面
	var objType2 = {
					"0":"#home",
					"1":"#about-brand",
					"2":"#brand-project",
					"3":"#store-image",
					"4":"#join-information",
					"5":"#join-us",
					"6":"#message-consultation"
	}

	//侧边菜单在现实的状态下再次隐藏
	$menuBtn2.on('click',function(e){
		$(this)
			.parents('.menu')
			.removeClass('menu-hide')
			.addClass('menu-hide');

		setTimeout(function(e){
			$menuBtn.fadeIn("fast");

		},500);
	})
	


	//home模块
	var $home = $('.home');  //home对象
	var $homeBody = $home.find('.home-body');  //获取home-body
	var $brandBtn = $homeBody.find('.about-brand .brand-btn'); //获取about-brand 下的brand-btn
	var $projectBtn = $homeBody.find('.brand-project .project-btn'); //获取brand-project 下的brand-project
	var $flagship = $homeBody.find('.store-image .flagship-store');  ////获取store-image 下的flagship-store
	var $mini = $homeBody.find('.store-image .mini-store'); //获取store-image下的mini-store
	var $standardBtn = $homeBody.find('.store-image .standard-store');  //获取store-image下的standard-store
	var $inforBtn = $homeBody.find('.join-information .join-btn');  //获取join-information下的join-btn
	var $recruBtn = $homeBody.find('.recruitment .recruitment-btn');  //获取recruitment下的recruitment-btn
	var copy = $home.find('.rotation .rotation-big-list').first().clone();  //复制第一张图片
	// $home.find('.rotation .rotation-big').append(copy);  //将复制的图片粘贴到最后一张图片后面
	var size = $home.find('.rotation-big-list').length;   //获取总共图片的个数



	//门店形象模块效果实现
	var $image = $('.store-image');  //store-image对象
	var copy_image1 = $image.find('.image-groups .image-list').first().clone();  //复制image中图片的第一张
	// $image.find('.image-groups').append(copy_image1);  //将复制的第一张图片粘贴到image-groups中
	var copy_image2 = $image.find('.image-content-groups .images-content-list').first().clone();   //复制文字说明的第一部分
	// $image.find('.image-content-groups').append(copy_image2);  //将复制的第一部分文字粘贴到image-content-groups中
	var size_ = $image.find('.image-groups .image-list').length;  //获取图片的张数

	//旗舰店
	$('.store-word-header .flagship-store-btn').click(function(e){
		window.location.href = "storeImage.html";
	});

	//迷你店
	$('.store-word-tail .mini-store-btn').click(function(e){
		window.location.href = "storeImage.html";
	});

	//标准店
	$('.store-word-tail .standard-store-btn').click(function(e){
		window.location.href = "storeImage.html";
	});
   

   //////////////
   // 留言资讯数据传输 //
   //////////////
   var $msg = $('#message-consultation');  //获取message-consultation对象
   var $msgBtn = $msg.find('.message-btn');  //获取message-btn对象

   /////////////////
   // 点击按钮提交数据的实现 //
   /////////////////
   $msgBtn.on('click',function(){
   		if(dataJudgment()){
   			$.ajax({
   				url: "",
   				type: "post",
   				data: $('#message-content').serialize(),
   				success: function(data){

   				},
   				error:function(data) {
   					
   				}
   			})
   		}
   });


   //////////////
   // 输入框的判断实现 //
   //////////////
   function dataJudgment(){
   		var userName = $msg.find('input[name=userName]');
   		var eMail = $msg.find('input[name=userEmail]');
   		var phone = $msg.find('input[name=userPhone]');
   		var text = $msg.find('textarea[name=userMessage]');
   		var str_userName = "姓名";
   		var str_eMail = "E-mail";
   		var str_phone = "手机号";
   		var str_tx = "留言";
   		if(nameNotNull(userName,text,str_userName,str_tx) && isMail(eMail,str_eMail) && isMobile(phone,str_phone)){
   			return true;
   		}else{
   			return false;
   		}
   }

   /////////////
   // 输入框内容为空 //
   /////////////
   function isNull(obj){
   		if(trim(obj.val()).length == 0){
   			return true;
   		}else{
   			return false;
   		}
   }

   //////////////
   // 表单内容不能为空 //
   //////////////
   function isNotNull(obj,str){
   		if(isNull(obj)){
   			alert(str+"不能为空！");
   			obj.focus();
   			return false;
   		}else{
   			return true;
   		}
   }

   function nameNotNull(obj1,obj2,str1,str2){
   		if(isNull(obj1)){
   			alert(str1+"不能为空！");
   			obj1.focus();
   			return false;
   		}else if(isNull(obj2)){
   			alert(str2+"不能为空！");
   			obj2.focus();
   			return false;
   		}else{
   			return true;
   		}
   }

   ////////////////
   // 判断邮件地址是否合法 //
   ////////////////
   function isMail(obj,str){
   		var pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;  
	    if(!isNotNull(obj,str)){
	    	return false;  
	    } 
	    	
	    if(!(pattern.test(obj.val())) && !isNull(obj)){     
	        alert(str+" 不是合法电子邮件格式！");  
	        obj.focus();  
	        return false;  
	    }else{
	    	return true;
	    }
   }

   //////////////
   // 手机号码的有效性 //
   //////////////
   function isMobile(obj,str){
   		var pattern = /^1[34578]\d{9}$/;
   		if(!isNotNull(obj,str)){
   			return false;
   		} 
	    if(!(pattern.test(obj.val()))&&!isNull(obj)){     
	        alert(str+" 不是正确！");  
	        obj.focus();  
	        return false;  
	    }else{
	    	return true;
	    }
   }

   ///////////////////////
   // trim函数，去除字符串两侧的空格 //
   ///////////////////////
   function trim(obj){
   		return $.trim(obj);
   }
   //点击返回顶部按钮，页面返回顶部
   var $magReturn = $('.message-return');  //获取message-return对象
   var $magBtn = $magReturn.find('.message-icon');  //获取message-icon对象
   var $returnBtn = $magReturn.find('.return-icon');  //获取return-icon对象

   //点击message-icon按钮时，显示留言咨询页面
   // $magBtn.on('click',function(e){
   // 		$magReturn.hide();
   // 		$('#message-consultation')
   // 								.show()
   // 								.siblings().hide();
   // });
   //return-icon点击时，页面返回顶部
   $returnBtn.on('click',function(e){
   		$('body').scrollTop(0);
   })
})(jQuery);