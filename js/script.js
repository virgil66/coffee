;(function($){
	
	/**
	 * header模块效果实现
	 */
	$header = $('.header');   //header对象
	$menuBtn = $header.find('.header-right'); //header-right对象


	/**
	 * [点击右侧菜单按钮，侧边菜单显示]
	 * @param  {[type]} e){		
	 *         $(this).fadeOut("fast");		
	 *         $menu			
	 *         		.addClass('menu-show')			
	 *         		.removeClass('menu-hide');	
	 *         } [description]
	 * @return {[type]}                                                                                                [description]
	 */
	$menuBtn.on('click',function(e){
		$(this).fadeOut("fast");
		$menu
			.addClass('menu-show')
			.removeClass('menu-hide');
	})

	/**
	 * menu模块效果实现
	 */
	var $menu = $('.menu');  //menu对象
	var $menuBtn2 = $menu.find('.menu-btn-groups');  //menu-btn-groups对象
	var $level_1 = $menu.find('.menu-level .menu-level-links');  //menu-level下的menu-level-links对象
	var $menuBtn3 = $menu.find('.menu-level2 .menu-level2-list');  //获取menu-level2下的menu-level2-list tail对象


	$menuBtn3.on('click',function(e){
		var index = $(this).parents('.menu-level-list').index();   //获取menu-level2-list的祖辈menu-level-list的序列号
		var index_ = $(this).index();
		$menu
			.addClass('menu-hide')
			.removeClass('menu-show');

		setTimeout(function(e){
			$menuBtn.fadeIn("fast");
		},300);
		$('.image-groups').animate({"left":-index_ * window.innerWidth},100);
		$('.image-circle >li').eq(index_).addClass('on').siblings('li').removeClass('on');
		$('.image-content-groups').animate({"left":-index_ * window.innerWidth},100);

	});
	
	/**
	 * [点击logo按钮，右侧菜单栏部分收起]
	 * @param  {[参数]} e){		
	 *         var flag  [boolean类型]
	 * @param  {[延时的时间]} 300);		}	} [description]
	 * @return {[无]}              [description]
	 */
	$('.header .header-left').on('click',function(e){
		var flag = $menu.hasClass('menu-show');
		if(flag){
			$menu
				.addClass('menu-hide')
				.removeClass('menu-show');
			setTimeout(function(e){
				$menuBtn.fadeIn("fast");
			},300);
		}
	});

	var menuLevel = document.getElementById('menu-level');
	var index_level = 0;
	var flag_n;
	$level_1.on('click',function(e){
		flag_n = $(this).parent().hasClass('has-child');
		var index = $(this).parent().index();
		index_level = $(this).parent().index();
		$(this)
			.siblings('.menu-level2').slideToggle("fast")
			.parent()
			.siblings()
			.find('.menu-level2').slideUp("fast");
		if(!flag_n){
			$menu
				.addClass('menu-hide')
				.removeClass('menu-show');

			setTimeout(function(e){
				$menuBtn.fadeIn("fast");
			},300);	
		}
		
	});

	/**
	 * 侧边菜单在显示的状态下再次隐藏
	 */
	$menuBtn2.on('click',function(e){
		$(this)
			.parents('.menu')
			.removeClass('menu-show')
			.addClass('menu-hide');

		setTimeout(function(e){
			$menuBtn.fadeIn("fast");

		},300);
	});

	/**
	 * 点击index页面中的home部分，侧边菜单隐藏
	 */
	$('.home').on('click',function(e){
		var flag = $(this).siblings('.menu').hasClass('menu-show');
		if(flag){
			$(this)
				.siblings('.menu')
				.removeClass('menu-show')
				.addClass('menu-hide');
			setTimeout(function(e){
				$menuBtn.fadeIn("fast");
			},300);
		}
	});

	/**
	 * 点击关于品牌页面中的about-brand部分，侧边菜单隐藏
	 */
	$('.about-brand').on('click',function(e){
		var flag = $(this).siblings('.menu').hasClass('menu-show');
		if(flag){
			$(this)
				.siblings('.menu')
				.removeClass('menu-show')
				.addClass('menu-hide');
			setTimeout(function(e){
				$menuBtn.fadeIn("fast");
			},300);
		}
	});

	/**
	 * 点击品牌项目页面中的brand-project部分，侧边菜单隐藏
	 */
	$('.brand-project').on('click',function(e){
		var flag = $(this).siblings('.menu').hasClass('menu-show');
		if(flag){
			$(this)
				.siblings('.menu')
				.removeClass('menu-show')
				.addClass('menu-hide');
			setTimeout(function(e){
				$menuBtn.fadeIn("fast");
			},300);
		}
	});

	/**
	 * 点击门店形象页面中的store-image部分，侧边菜单隐藏
	 */
	$('.store-image').on('click',function(e){
		var flag = $(this).siblings('.menu').hasClass('menu-show');
		if(flag){
			$(this)
				.siblings('.menu')
				.removeClass('menu-show')
				.addClass('menu-hide');
			setTimeout(function(e){
				$menuBtn.fadeIn("fast");
			},300);
		}
	});

	/**
	 * 点击加盟咨询页面中的join-information部分，侧边菜单隐藏
	 */
	$('.join-information').on('click',function(e){
		var flag = $(this).siblings('.menu').hasClass('menu-show');
		if(flag){
			$(this)
				.siblings('.menu')
				.removeClass('menu-show')
				.addClass('menu-hide');
			setTimeout(function(e){
				$menuBtn.fadeIn("fast");
			},300);
		}
	});

	/**
	 * 点击加入我们页面中的join-us部分，侧边菜单隐藏
	 */
	$('.join-us').on('click',function(e){
		var flag = $(this).siblings('.menu').hasClass('menu-show');
		if(flag){
			$(this)
				.siblings('.menu')
				.removeClass('menu-show')
				.addClass('menu-hide');
			setTimeout(function(e){
				$menuBtn.fadeIn("fast");
			},300);
		}
	});

	/**
	 * 点击留言咨询页面中的message-consultation部分，侧边菜单隐藏
	 */
	$('.message-consultation').on('click',function(e){
		var flag = $(this).siblings('.menu').hasClass('menu-show');
		if(flag){
			$(this)
				.siblings('.menu')
				.removeClass('menu-show')
				.addClass('menu-hide');
			setTimeout(function(e){
				$menuBtn.fadeIn("fast");
			},300);
		}
	});
	

	/**
	 * home模块
	 */
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


	/**
	 * 门店形象模块效果实现
	 */
	var $image = $('.store-image');  //store-image对象
	var copy_image1 = $image.find('.image-groups .image-list').first().clone();  //复制image中图片的第一张
	// $image.find('.image-groups').append(copy_image1);  //将复制的第一张图片粘贴到image-groups中
	var copy_image2 = $image.find('.image-content-groups .images-content-list').first().clone();   //复制文字说明的第一部分
	// $image.find('.image-content-groups').append(copy_image2);  //将复制的第一部分文字粘贴到image-content-groups中
	var size_ = $image.find('.image-groups .image-list').length;  //获取图片的张数

	/**
	 * 点击旗舰店，实现页面从首页跳转到门店形象页面的旗舰店
	 */
	$('.store-word-header .flagship-store-btn').click(function(e){
		window.location.href = "storeImage.html";
	});


	/**
	 * 点击迷你店，实现页面从首页跳转到门店形象页面的迷你店
	 */
	$('.store-word-tail .mini-store-btn').click(function(e){
		window.location.href = "storeImage.html#mini-store";
		
	});

	/**
	 * 点击标准店，实现页面从首页跳转到门店形象页面的标准店
	 */
	$('.store-word-tail .standard-store-btn').click(function(e){
		window.location.href = "storeImage.html#standard-store";
	});
   

	/**
	 * 留言资讯数据传输
	 */
   var $msg = $('#message-consultation');  //获取message-consultation对象
   var $msgBtn = $msg.find('.message-btn');  //获取message-btn对象
   var $confirm = $('.msg-bomb .bomb-btn');


   /**
    * 点击确定按钮，提示框消失
    */
   $confirm.on('click',function(e){
   		$(this)
   			.parents('.msg-bomb')
   			.hide();
   });


   /**
    * 点击按钮提交数据的实现
    */
   $msgBtn.on('click',function(){
   		if(dataJudgment()){
   			$.ajax({
   				url: "http://www.1bpcafe.cn/api/message",
   				type: "post",
   				data: $('#message-content').serialize(),
   				success: function(data){
   					alert("提交成功");
   				},
   				error:function(data) {
   					alert("请求失败，请稍后重试！");
   				}
   			})
   		}
   });


   /**
    *  输入框的判断实现 
    */
   function dataJudgment(){
   		var userName = $msg.find('input[name=name]');
   		var eMail = $msg.find('input[name=email]');
   		var phone = $msg.find('input[name=tel]');
   		var message = $msg.find('textarea[name=message]');
   		var str_userName = "姓名";
   		var str_eMail = "E-mail";
   		var str_phone = "手机号";
   		var str_tx = "留言";
   		if(isNotNull(userName,str_userName) && isMail(eMail,str_eMail) && isMobile(phone,str_phone) && textLength(message,str_tx)){
   			return true;
   		}else{
   			return false;
   		}
   }

   /**
    * 输入框内容为空
    */
   function isNull(obj){
   		if(trim(obj.val()).length == 0){
   			return true;
   		}else{
   			return false;
   		}
   }


   /**
    * 表单内容不能为空
    */
   function isNotNull(obj,str){
   		if(isNull(obj)){
   			alert(str+"不能为空！");
   			obj.focus();
   			return false;
   		}else{
   			return true;
   		}
   }

   function textLength(obj,str){
   		if(!isNotNull(obj,str)){
	    	return false;  
	    } 

   		if(!isNull(obj) && trim(obj.val()).length > 200){
   			alert(str+"的长度不能超过200！");
   			console.log(obj.val().length);
   			obj.focus();
   			return false;
   		}else{
   			return true;
   		}

   }

   /**
    * 判断邮件地址是否合法
    */
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

   /**
    * 判断手机号码的有效性
    */
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


   /**
    * trim函数，去除字符串两侧的空格
    */
   function trim(obj){
   		return $.trim(obj);
   }

   /**
    * 点击返回顶部按钮，页面返回顶部
    */
   var $magReturn = $('.message-return');  //获取message-return对象
   var $magBtn = $magReturn.find('.message-icon');  //获取message-icon对象
   var $returnBtn = $magReturn.find('.return-icon');  //获取return-icon对象

   //return-icon点击时，页面返回顶部
   $returnBtn.on('click',function(e){
   		$('html,body').animate({
   			scrollTop: $('body').offset().top
   		},500);
   })
})(jQuery);