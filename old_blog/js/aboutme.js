// aboutme.html页js效果文件

!function(){
	// 滚动监听事件
	window.onscroll = function(){
		// 文字效果
		var div = document.querySelector('.sect_twome')
		var ps = document.querySelectorAll('.sect_twome p')
		var isbool = div.offsetTop + sect_two.offsetTop - window.scrollY <= sect_two.offsetTop
		if(isbool){
			var mans = 0
			for(var i = 0;i < ps.length;i++){
				ps[i].style.transition = 'all ease-in .6s ' + mans + 's'
				mans += 0.4
				ps[i].style.opacity = '1'
				ps[i].style.transform = 'translateY(0)'
			}
		}else{
			for(var i = 0;i < ps.length;i++){
				ps[i].style.transition = ''
				ps[i].style.opacity = '0'
				ps[i].style.transform = 'translateY(-200px)'
			}
		}
	}
}()

!function(){
	// 获取切换按钮元素
	var sect_three_right = document.getElementsByClassName('sect_three_right')[0]
	// 获取导航元素
	var head_as = document.getElementsByClassName('head_a')
	// 获取主体1元素
	var figcaption = document.querySelector('figcaption')
	// 获取主体2元素
	var ps = document.querySelectorAll('.sect_twome P')

	// 为切换按钮注册点击事件
	var index = 0
	var elements = '<span class="sp_1 sp_1_sm"></span><span class="sp_2 sp_2_sm"></span>'
	sect_three_right.onclick = function(){
		if(index === 0){
			head_as[0].innerHTML = '个人主页' + elements
			head_as[1].innerHTML = '关于我阿' + elements
			head_as[2].innerHTML = '项目展示' + elements
			head_as[3].innerHTML = '资源分享' + elements
			head_as[4].innerHTML = '站主博客' + elements
			figcaption.innerHTML = '一个年轻的前端攻城狮'
			ps[0].innerHTML = '没错这就是我'
			ps[1].innerHTML = '来自中国河南,一个年轻的前端工程师,一个追求极致的WEB开发者'
			ps[2].innerHTML = '投诉建议请联系我,不喜勿喷,谢谢'
			index = 1
		}else{
			head_as[0].innerHTML = 'Homepage' + elements
			head_as[1].innerHTML = 'about me' + elements
			head_as[2].innerHTML = 'Project' + elements
			head_as[3].innerHTML = 'Resource' + elements
			head_as[4].innerHTML = 'OwnerBlog' + elements
			figcaption.innerHTML = 'A young front-end engineer'
			ps[0].innerHTML = "Yeah, that's me"
			ps[1].innerHTML = 'From Henan, China, a young front end engineer, a WEB developer who seeks perfection.'
			ps[2].innerHTML = 'For complaints, please contact me.Do not want to spray . Thank you.'
			index = 0
		}
	}
}()