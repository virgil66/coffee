;(function($){
	/**
	 * 书写留言和返回顶部按钮
	 */
	var msgTop = $("<div class='message-return'>"
						+"<a href='message.html' class='message-icon'>"
							+"<img src='images/message_01.png' alt='留言' />"
						+"</a>"
						+"<a href='javascript:;' class='return-icon'>"
							+"<img src='images/return_top.png' alt='返回顶部' />"
						+"</a>"
					+"</div>");
	$('body').append(msgTop);
})(jQuery);