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
		$(objType[index])
						.show('fast', function() {
							$menu
								.addClass('menu-hide')
								.removeClass('menu-show');

							setTimeout(function(e){
								$menuBtn.fadeIn("fast");
							},500);

						}).siblings().hide();
	});
	//侧边栏手风琴效果实现
	var objType = {
					"0":"#home",
					"1":"#about-brand",
					"2":"#brand-project",
					"3":"#store-image",
					"4":"#join-information",
					"5":"#join-us",
					"6":"#message-consultation"
	}
	$('.header .header-left').on('click',function(e){
		var flag = $menu.hasClass('menu-show');
		$('#home').show("fast",function(e){
			if(flag){
				$menu
					.addClass('menu-hide')
					.removeClass('menu-show');
				setTimeout(function(e){
					$menuBtn.fadeIn("fast");
				},500);
			}

		}).siblings().hide();
	});

	$level_1.on('click',function(e){
		var index = $(this).parent().index();
		$(objType[index])
						.show('fast', function() {
							$menu
								.addClass('menu-hide')
								.removeClass('menu-show');

							setTimeout(function(e){
								$menuBtn.fadeIn("fast");
							},500);

						}).siblings().hide();
		$(this)
			.siblings('.menu-level2').slideToggle("fast")
			.parent()
			.siblings()
			.find('.menu-level2').slideUp("fast");
		if(index != 6){
			$magReturn.show();
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
	// refreshNew();
	function refreshNew(){
		var i = 0;
		switch(window.location.hash){
			case "#home":{
				i = 0;
				showContent(i);
				break;
			}
			case "#about-brand":
			case "#company-introduce":
			case "#brand-introduce":
			case "#partner":{
				i = 1;
				showContent(i);
				break;
			}
			case "#brand-project":
			case "#chain-stores":
			case "#one-space":
			case "#training-college":
			case "#coffee-bus":
			case "#online-platform":{
				i = 2;
				showContent(i);
				break;
			}
			case "#store-image":
			case "#flagship-store":
			case "#mini-store":
			case "#standard-store":{
				i = 3;
				showContent(i);
				break;
			}
			case "#join-information":
			case "#join-process":
			case "#assist-service":
			case "#join-cost":
			case "#online-reservations":{
				i = 4;
				showContent(i);
				break;
			}
			case "#join-us":{
				i = 5;
				showContent(i);
				break;
			}
			case "#message-consultation":{
				i = 6;
				showContent(i);
				break;
			}
			default:{

			}
		}
	}

	function showContent(i){
		$(objType2[i])
					.show()
					.siblings().hide();
		
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


	//了解详情按钮的实现
	/////////
	//关于品牌 //
	/////////
	$brandBtn.on('click',function(e){
		$('#about-brand')
						.show()
						.siblings()
						.hide()
						.parents('body')
						.scrollTop(0);
	});

	//////////
	// 品牌项目 //
	//////////
	$projectBtn.on('click',function(e){
		$('#brand-project')
						.show()
						.siblings()
						.hide()
						.parents('body')
						.scrollTop(0);
	});

	//////////
	// 门店形像 旗舰店//
	//////////
	$flagship.on('click',function(e){
		$('#store-image')
						.show()
						.siblings()
						.hide()
						.parents('body')
						.scrollTop(0);
	});
	//////////
	// 门店形像 迷你店//
	//////////
	$mini.on('click',function(e){
		$('#store-image')
						.show()
						.siblings()
						.hide()
						.parents('body')
						.scrollTop(0);
	});
	//////////
	// 门店形像 标准店//
	//////////
	$standardBtn.on('click',function(e){
		$('#store-image')
						.show()
						.siblings()
						.hide()
						.parents('body')
						.scrollTop(0);
	});

	//////////
	// 加盟资讯 //
	//////////
	$inforBtn.on('click',function(e){
		$('#join-information')
							.show()
							.siblings()
							.hide()
							.parents('body')
							.scrollTop(0);
	});

	//////////
	// 人才招聘 //
	//////////
	$recruBtn.on('click',function(e){
		$('#join-us')
						.show()
						.siblings()
						.hide()
						.parents('body')
						.scrollTop(0);
	});


	//定义定时器，使其轮播自动播放
	var i = 0;
	// var timing = setInterval(autoPlay,2000);  

	function autoPlay(){
		i++;
		var itemsWidth = $home.width();  //home的宽度
		if(i == size){
			$home
				.find('.rotation-big')
				.css({
					left: "0"
				});
			i = 1;
		}
		if(i == size - 1){
			$home.find('.rotation-small >li').eq(0).addClass('on').siblings().removeClass('on');
		}else{
			$home.find('.rotation-small >li').eq(i).addClass('on').siblings().removeClass('on');
		}
		$home
			.find('.rotation-big')
			.stop().animate({
				left: -i * itemsWidth
			},1000);
	}

	////////////////////
	// 移动端手指滑动实现图片的轮播、首页 //
	////////////////////
	var m_iNow = 0, m_index = 1, m_startX = 0;
	var rotation = document.getElementById('rotation');
	var rotationBig = $('#rotation').find('.rotation-big');

	// 监听touchstart事件
	rotation.addEventListener('touchstart',function(e){
		e.preventDefault();
		m_startX = e.targetTouches[0].pageX;
	},false);

	// 监听touchend事件
	rotation.addEventListener('touchend',function(e){
		e.preventDefault();
		var m_width = $('.rotation').width();   //获取可视化区域的宽度
		var _l = m_width + $('.rotation-big').position().left%m_width,
			_w = m_width / 2,
			_m = $('.rotation .rotation-big-list').length - 1;
		var m_left = $('.rotation-big').position().left;   //重新获取left的值
		// 中点判断
		if(_l <= _w){
			m_left = m_left - _l;
		}else{
			m_left = m_left + (m_width - _l);
		}
		if(m_left >= 0){
			m_left = 0;
		}else if(m_left < -m_width * _m){
			m_left = -m_width * _m;
		}
		
		$('.rotation-big').animate({
			left: m_left
		},200);
		var _now = parseInt(-m_left/m_width);
		$('.rotation').find('.rotation-small >li').eq(_now).addClass('on').siblings('li').removeClass('on');
		
	},false);

	rotation.addEventListener('touchmove',function(e){
		e.preventDefault();
		var touch = e.targetTouches[0];
		var _l = $('.rotation-big').position().left + touch.pageX - m_startX;
		m_startX = touch.pageX;
		$('.rotation-big').css({
			left: _l
		});
	},false);


	//门店形象模块效果实现
	var $image = $('.store-image');  //store-image对象
	var copy_image1 = $image.find('.image-groups .image-list').first().clone();  //复制image中图片的第一张
	// $image.find('.image-groups').append(copy_image1);  //将复制的第一张图片粘贴到image-groups中
	var copy_image2 = $image.find('.image-content-groups .images-content-list').first().clone();   //复制文字说明的第一部分
	// $image.find('.image-content-groups').append(copy_image2);  //将复制的第一部分文字粘贴到image-content-groups中
	var size_ = $image.find('.image-groups .image-list').length;  //获取图片的张数

   //设置一个定时器实现图片和文字的自动播放
   // var timing_ = setInterval(imagePlay,3000);
   var j = 0;
   function imagePlay(){
   		j++;
		var itemsWidth = $image.find('.image-pics').width();  //home的宽度
		if(j == size_){
			$image
				.find('.image-groups')
				.css({
					left: "0"
				})
				.parent()
				.siblings('.image-content')
				.find('.image-content-groups')
				.css({
					left: "0"
				});
			j = 1;
		}
		if(j == size_ - 1){
			$image
				.find('.image-circle >li')
				.eq(0).addClass('on')
				.siblings().removeClass('on');
		}else{
			$image
				.find('.image-circle >li')
				.eq(j).addClass('on')
				.siblings().removeClass('on');
		}
		$image
			.find('.image-groups')
			.stop().animate({
				left: -j * itemsWidth
			},1000)
			.parent()
			.siblings('.image-content')
			.find('.image-content-groups')
			.stop().animate({
				left: -j * itemsWidth
			},1000);

   }

   ////////////////////
	// 移动端手指滑动实现图片的轮播、门店形象 //
	////////////////////
	var i_iNow = 0, i_index = 1, i_startX = 0;
	var image = document.getElementById('image-pics');

	// 监听touchstart事件
	image.addEventListener('touchstart',function(e){
		e.preventDefault();
		m_startX = e.targetTouches[0].pageX;
	},false);

	// 监听touchend事件
	image.addEventListener('touchend',function(e){
		e.preventDefault();
		var m_width = $('.image-pics').width();   //获取可视化区域的宽度
		var _l = m_width + $('.image-groups').position().left%m_width,
			_w = m_width / 2,
			_m = $('.image-pics .image-list').length - 1;
		var m_left = $('.image-groups').position().left;   //重新获取left的值
		// 中点判断
		if(_l <= _w){
			m_left = m_left - _l;
		}else{
			m_left = m_left + (m_width - _l);
		}
		if(m_left >= 0){
			m_left = 0;
		}else if(m_left < -m_width * _m){
			m_left = -m_width * _m;
		}
		
		$('.image-groups').animate({
			left: m_left
		},200);
		$('.image-content-groups').animate({
			left: m_left
		},200);
		var _now = parseInt(-m_left/m_width);
		$('.image-pics').find('.image-circle >li').eq(_now).addClass('on').siblings('li').removeClass('on');
		
	},false);

	image.addEventListener('touchmove',function(e){
		e.preventDefault();
		var touch = e.targetTouches[0];
		var _l = $('.image-groups').position().left + touch.pageX - m_startX;
		m_startX = touch.pageX;
		$('.image-groups').css({
			left: _l
		});
	},false);

   //////////////
   // 留言资讯数据传输 //
   //////////////
   var $msg = $('#message-consultation');  //获取message-consultation对象
   var $msgBtn = $msg.find('.message-btn');  //获取message-btn对象

   /////////////////
   // 点击按钮提交数据的实现 //
   /////////////////
   $msgBtn.on('click',function(){
   		// if(dataJudgment()){
   		// 	console.log("测试通过");
   		// 	$.ajax({
   		// 		url: "",
   		// 		type: "post",
   		// 		data: $('#message-content').serialize(),
   		// 		success: function(data){

   		// 		},
   		// 		error:function(data) {
   					
   		// 		}
   		// 	})
   		// }
   });


   //////////////
   // 输入框的判断实现 //
   //////////////
   function dataJudgment(){
   		var userName = $msg.find('input[name=userName]');
   		var eMail = $msg.find('input[name=userEmail]');
   		var str_userName = "IP地址";
   		if(isIP(userName,str_userName)){
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
   $magBtn.on('click',function(e){
   		$magReturn.hide();
   		$('#message-consultation')
   								.show()
   								.siblings().hide();
   });
   //return-icon点击时，页面返回顶部
   $returnBtn.on('click',function(e){
   		$('body').scrollTop(0);
   })
})(jQuery);