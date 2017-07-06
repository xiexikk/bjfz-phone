
// JavaScript Document
$(function(){	
/*首页 index.html*/ 
/*公共部分*/
	var bl = true;
	/*左侧栏目*/
	$('.header .classify').on("click",function(){
        $('.header .classify-con').toggle();
		$('.header .login-con').hide();
    });
	
	$('.header .classify-con .classify-l .classsify-list li').click(function(e) {
		
		/*右侧小箭头*/
		$(this).children('a').removeClass('item');
		$(this).siblings().children('a').addClass('item');
		/*最后两个的右不显示*/
		$('.header .classify-con .classify-l .classsify-list li').eq(6).removeClass('list-item');
		$('.header .classify-con .classify-l .classsify-list li').eq(7).removeClass('list-item');	
		/*最右的外小三角*/ 
		$(this).children('i').toggle().parent().siblings().children('i').hide();

		/*显示右边*/ 
		$('.header .classify-con .classify-r').show();
		var index = $(this).index();	
		$('.header .classify-con .classify-r ul').eq(index).toggle().siblings('ul').hide();
		
		/*最后两个的不显示*/
		$('.header .classify-con .classify-r ul').eq(6).hide();
		$('.header .classify-con .classify-r ul').eq(7).hide();
    });
	

	
	/*右侧栏目上下选择*/
	$('.header .classify-con .classify-r .classify-detail h3 i').removeClass('arrow-x');
	$('.header .classify-con .classify-r .classify-detail h3').click(function(e) {
		$(this).parent().siblings().children('h3').children().removeClass('arrow-s');
		$(this).parent().siblings().children('h3').siblings('ol').hide();
		$(this).children().toggleClass('arrow-s');
		$(this).siblings('ol').toggle();
	});
		
	
	/*注册登录*/
	$('.header .login').on("click",function() {
        $('.header .login-con').toggle();
		$('.header .classify-con').hide();
    });
	
	
/*账户 li_account*/
	/*acc-log.html*/
	/*记住密码*/
	$('.login-main .login-links label').eq(0).on("click",function(){
		if(bl==true){
			$(this).children('a').addClass('check');
			bl=!true;
		}else{
			$(this).children('a').removeClass('check');
			bl=true;
		}
	})
	/*acc-reg.html*/
	/*阅读条款*/
	$('.set-account p.read-clasue i').on("click",function(){
        if($(this).hasClass('check')){
			$(this).removeClass('check');
		}else{
			$(this).addClass('check');
		}
    });
	$('.set-account p.read-clasue span').on("click",function(){
        if($(this).parent().children('i').hasClass('check')){
			$(this).parent().children('i').removeClass('check');
		}else{
			$(this).parent().children('i').addClass('check');
		}
    });

	
	/*acc-shopcart.html*/

	
	/*acc-rec_address.html*/
	/*收货地址切换*/
	$('.rec-address>div').on("click",function(){
		$(this).addClass('selected').siblings().removeClass('selected');
	})
	/*设置默认地址*/
	$('.setting .setting-l span').eq(0).on("click",function(){
		if(bl==true){
			$(this).children('i').addClass('checked');
			bl=!true;
		}else{
			$(this).children('i').removeClass('checked');
			bl=true;
		}	
	});

	/*acc-problem.html*/
	var bb = true;	
	$('.problem .con h4').on("click",function(){
		if(bl==true){
			$(this).children().addClass('arr-s');
			$(this).siblings().slideDown();
			bl=!true;
		}else{
			$(this).children().removeClass('arr-s');
			$(this).siblings().slideUp();
			bl=true;
		}	
	});
	
	/*acc-personal_information.html*/
	$('.online .title .title-con span').on("click",function(){
		$(this).children('i').addClass('checked').parent().siblings().children('i').removeClass('checked');
		/*if(bl==true){
			$(this).children('i').addClass('checked');
			bl=!true;
		}else{
			$(this).children('i').removeClass('checked');
			bl=true;
		}*/
	});
	

/*其它*/
	/*oth.address.html*/
	/*地区选择*/
	$('#oth-country,#oth-city,#oth-street').click(function(e) {
        $(this).children('ul').toggle()
    });	
	function sel(yourID){			
		$(yourID+' ul li a').click(function(e) {
			var myCon = $(this).html()
			var myT = $(yourID+' a em')
			myT.html(myCon)
		});
	}
	sel('#oth-country');
	sel('#oth-city');
	sel('#oth-street');	
	/*空白处*/
	$('.com-address .sel form').click(function(event) {
		event.stopPropagation();
		$(this).siblings().find('ul').hide();		
    });
	$(document).click(function(event) {
     	$('.com-address .sel form').find('ul').hide();	
    });
	
	
/*产品*/
	/*详情页*/
	/*pro-details.html*/
	$('.details .pro-show .infor-in .com>p').last().css('border-bottom','1px solid #d1d2d2');
	$('.details .pro-show .quantity>div').last().css('border-top','none');
	var chT1 = $('.details .pro-show .infor-in .tit .love img').attr('src');
	var chT2 = $('.details .pro-show .infor-in .tit .love img').attr('rel');
	$('.details .pro-show .infor-in .tit .love').on('click', function(){
		var temp = '';
		temp = chT1;
		chT1 = chT2;
		chT2 = temp;
		$(this).children('img').attr('src', chT1);
		$(this).children('img').attr('rel', chT2);
	});
	/*产品信息*/
	$('.details .pro-show .share .share-con .con-r span').on('click',function(){
		$('.details .pro-show .pro-infor').toggle();
	});
	/*加入购物车*/
	$('.details .add-page .add-in .add').on('click',function(){
		$('.details .pro-show .quantity').fadeToggle(200);
	});
	/*购物数量*/
	var maxNum = 99;
	$('.details .pro-show .quantity .qua-con .qua-num a.qua-l').click(function(e) {
		var num = parseInt($(this).siblings('input').val());		
		num--;
		if(num < 0){
			num = 0;	
		}
		$(this).siblings('input').val(num);	
		var num1= $('.details .pro-show .qua-con input.card-num').val();
		$('.details .pro-show .added .text input.card-num').val(num1);
		var num2= $('.details .pro-show .qua-con input.sample-num').val();
		$('.details .pro-show .added .text input.sample-num').val(num2);
	});
	$('.details .pro-show .quantity .qua-con .qua-num a.qua-r').click(function(e) {
		var num = parseInt($(this).siblings('input').val());
		num++;
		if(num > maxNum){
			num = maxNum;	
		}
		$(this).siblings('input').val(num);			
		var num4= $('.details .pro-show .qua-con input.card-num').val();
		$('.details .pro-show .added .text input.card-num').val(num4);
		var num4= $('.details .pro-show .qua-con input.sample-num').val();
		$('.details .pro-show .added .text input.sample-num').val(num4);
	});

	
	/*判断input里面的数据为整数和小于100   ？*/
	var num_hd = $('.details .pro-show .quantity .qua-con .qua-num a.qua-l').siblings('input');	
	var add_num = parseInt($('.details .pro-show .quantity .qua-con .qua-num a.qua-l').siblings('input').val());
	
	num_hd.focus(function(e) {
        if($(this).val()!=''){
			$(this).val('');
		}
    });
	num_hd.blur(function(e) {
       if($(this).val()==''){
			$(this).val('0');
		} 
    });
	
	/*添加*/		
	$('.details .pro-show .quantity .qua-con .qua-add').on('click',function(){
		$('.details .pro-show .added').fadeIn(500);
		var timer = null;
		var num= 2;			
		clearInterval(timer);
		timer = setInterval(function(){
			num--;
			if(num==0){
				
				$('.details .pro-show .added').fadeOut(500);
			}
		},1000);
	});

	/*product.html*/
		
	/*attr.html*/
	$('.main_attr .pros ul .pro').last().css('padding-bottom', '0');
	
	/*atli.html*/
	$('.main_atli .pros ul .pro').eq(0).addClass('noPt');	
	$('.main_atli .pros ul .pro').eq(1).addClass('noPt');	
	
	/*at-xxx common part main_at_comm*/
	$('.main_at_comm .detail .show .aLi').eq(1).children('.hd').hide();
	$('.main_at_comm .detail .show .aLi').last().addClass('noMb');
	
	
	/*底部导航*/
	$('.search-pop i.close').on("click",function(){
		$('.search-pop').fadeOut(400);	/*搜索*/
		$('.footer .nav ul li.search').find('span').toggleClass('blue');
		var chP1 = $('.footer .nav ul li.search').find('img').attr('src');
		var chP2 = $('.footer .nav ul li.search').find('img').attr('rel');
		//console.log(chP1);
		//console.log(chP2);
		var temp = '';
		temp = chP1;
		chP1 = chP2;
		chP2 = temp;
		$('.footer .nav ul li.search').find('img').attr('src', chP1);
		$('.footer .nav ul li.search').find('img').attr('rel', chP2);
	});
	var liL = $('.footer .nav ul li').size();
	for(var i = 0; i < liL; i++){
		if($('.footer .nav ul li').eq(i).hasClass('current')){
			$('.footer .nav ul li').eq(i).find('span').addClass('blue');
			var chP1 = $('.footer .nav ul li').eq(i).find('img').attr('src');
			var chP2 = $('.footer .nav ul li').eq(i).find('img').attr('rel');
			//console.log(chP1);
			//console.log(chP2);
			var temp = '';
			temp = chP1;
			chP1 = chP2;
			chP2 = temp;
			$('.footer .nav ul li').eq(i).find('img').attr('src', chP1);
			$('.footer .nav ul li').eq(i).find('img').attr('rel', chP2);
		}
	}
	$('.footer .nav ul li.search').on('click',function(){
		$('.search-pop').fadeToggle(400);	/*搜索*/
		$(this).find('span').toggleClass('blue');
		var chP1 = $(this).find('img').attr('src');
		var chP2 = $(this).find('img').attr('rel');
		var temp = '';
		temp = chP1;
		chP1 = chP2;
		chP2 = temp;
		$(this).find('img').attr('src', chP1);
		$(this).find('img').attr('rel', chP2);
	});
	
	/*ch 9.9*/
	$('.header').click(function(event) {
        event.stopPropagation();
    });
	$(document).click(function(e) {
		$('.header .classify-con').hide(); 
       	$('.header .login-con').hide(); 
    });
	
	/*ch 9.19*/
	//全选
	function toggleSelectAll(classA, classCon){
		$(classA).click(function(e) {
			if( $(this).prop('checked') ){
				$(classCon).prop('checked',true);
			}else{
				$(classCon).prop('checked',false);
			}
   		 });		 
		var chksum = $(classCon).size();
		function allchk(){
			var chk = 0;
			for(var i = 0; i < chksum; i++){				
				if($(classCon).eq(i).prop("checked")){
					chk++;
				}  
			}
			if(chksum == chk){        
				$(classA).prop("checked",true);
			}else{
				$(classA).prop("checked",false);
			} 
		}
		$(classCon).click(function(){ allchk() });
	}
	toggleSelectAll('.result .result-in input', '.shopcart ul li .pro-check input');

	/*ch 9.21*/	
	if($('.details .describe p span').size() == 1){
		$('.details .describe p').css({"text-align":"center"});
	}
	
	
	/*ch 9.23*/
	/*右侧栏目修改*/
	var OldHig= $('.header .classify-con').height();
	/*console.log(OldHig);*/
	$('.header .classify-con .classify-r').height(OldHig);
	//$('.header .classify-con .classify-r').css({"height":OldHig});
	
	/*ch 9.25*/	
	/*详情页点击放大*/
/*	$('.details .pro-show .show-in').on('click',function(){
		$(this).siblings().hide();
		$(this).parent().siblings().hide();
		$(this).find('img').addClass('chbig');
	});*/
	
	
	/*去掉底部了解资讯模块*/
	$('.infor').remove();
	
	/*加入购物车的字*/
	$('.favorite .shop-bag').click(function(e) {	
        $(this).addClass('change');
		var timer = null;
		var num= 1;			
		clearInterval(timer);
		timer = setInterval(function(){
			num--;
			if(num==0){
				$('.favorite .shop-bag').removeClass('change');
			}
		},1000);			
	});
	
	
	/*首页banner图文小圆点位置*/
	var banHig = $('.banner .slideBox .bd li a').height();
	//console.log(banHig);
	$('.banner .slideBox .hd2').css({"top":banHig});
	
	/*详情页查看图片*/
	var BLL = true;
	$('.banner .slideBox .bd li').click(function(e) {
		if(BLL==true){
			$('.banner .slideBox .bd li img').addClass('chbig');
			$('.pro-show').siblings().hide();
			$('.details .pro-show .share').hide();
			$('.details .pro-show .show-in').addClass('pdt0');
			BLL = !true;
		}else{
			$('.banner .slideBox .bd li img').removeClass('chbig');
			$('.pro-show').siblings().show();
			$('.details .pro-show .share').show();
			BLL=true;
		}	
	});

   	var imgWid00 = $('.details .pro-show .infor-in .sign>a:eq(0) img').width()/200+'rem';
  	$('.details .pro-show .infor-in .sign>a:eq(0) img').width(imgWid00)
   	var imgWid01 = $('.details .pro-show .infor-in .sign>a:eq(1) img').width()/200+'rem';
	$('.details .pro-show .infor-in .sign>a:eq(1) img').width(imgWid01);
	var imgWid02 = $('.details .pro-show .infor-in .sign>a:eq(2) img').width()/200+'rem';
	$('.details .pro-show .infor-in .sign>a:eq(2) img').width(imgWid02);
	var imgWid03 = $('.details .pro-show .infor-in .sign>a:eq(3) img').width()/200+'rem';
	$('.details .pro-show .infor-in .sign>a:eq(2) img').width(imgWid03);
})

	
