// index.html页js效果文件

// 中英文切换 & 主体块2文字滚动效果
!function(){
	// 获取切换按钮元素
	var sect_three_right = document.getElementsByClassName('sect_three_right')[0]
	// 获取主体2元素
	var sect_two = document.getElementById('sect_two')
	// 获取导航元素
	var head_as = document.getElementsByClassName('head_a')
	// 获取主体1元素
	var p2 = document.getElementsByClassName('p2')[0]
	// 获取主体2元素
	var sect_two_ps = document.getElementsByClassName('sect_two_p')
	var sect_two_a = document.getElementsByClassName('sect_two_a')[0]
	// 获取主体块2中字体div
	var sect_two_dv = document.getElementsByClassName('sect_two_dv')[0]

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
			// p1.innerHTML = 'web前端'
			p2.innerHTML = '欢迎访问句末的个人网站'
			sect_two_ps[0].innerHTML = '无限前端'
			sect_two_ps[1].innerHTML = '简单的前端？'
			sect_two_ps[2].innerHTML = 'JavaScript是世界上最有潜力的语言'
			sect_two_a.innerHTML = '走进前端<i class="iconfont icon-changjiantou-copy"></i>'
			index = 1
		}else{
			head_as[0].innerHTML = 'Homepage' + elements
			head_as[1].innerHTML = 'about me' + elements
			head_as[2].innerHTML = 'Project' + elements
			head_as[3].innerHTML = 'Resource' + elements
			head_as[4].innerHTML = 'OwnerBlog' + elements
			// p1.innerHTML = 'WEB FRONT-END'
			p2.innerHTML = 'Welcome to the personal website at the end of the sentence'
			sect_two_ps[0].innerHTML = 'Infinite front-end'
			sect_two_ps[1].innerHTML = 'Simple front end?'
			sect_two_ps[2].innerHTML = 'JavaScript is the most promising language in the world'
			sect_two_a.innerHTML = 'Going to the front-end<i class="iconfont icon-changjiantou-copy"></i>'
			index = 0
		}
	}

	// 滚动监听事件
	window.onscroll = function(){
		// 文字效果
		var isbool = sect_two_dv.offsetTop + sect_two.offsetTop - window.scrollY <= sect_two.offsetTop
		if(isbool){
			var mans = 0
			for(var i = 0;i < sect_two_ps.length;i++){
				sect_two_ps[i].style.transition = 'all ease-in .6s ' + mans + 's'
				mans += 0.5
				sect_two_ps[i].style.opacity = '1'
				sect_two_ps[i].style.transform = 'translateY(0)'
			}
			sect_two_a.style.opacity = '1'
			sect_two_a.style.transform = 'translateX(0)'
		}else{
			for(var i = 0;i < sect_two_ps.length;i++){
				sect_two_ps[i].style.transition = ''
				sect_two_ps[i].style.opacity = '0'
				sect_two_ps[i].style.transform = 'translateY(-200px)'
			}
			sect_two_a.style.opacity = '0'
			sect_two_a.style.transform = 'translateX(-150%)'
		}
	}
}()

!function(){
	var video1 = document.querySelector('.video_1')
	function fn(e){
		var mouseX = e.clientX	// 鼠标坐标
		var mouseY = e.clientY
		video1.style.top = mouseY + 'px'
		video1.style.left = mouseX + 'px'
	}
	video1.addEventListener("mousedown",function(){
		video1.style.transition = 'none'
		window.addEventListener('mousemove',fn)
	})
	window.addEventListener("mouseup",function(){
		video1.style.transition = 'all 1s ease-in-out'
		window.removeEventListener('mousemove',fn)
		video1.style.top = '50%'
		video1.style.left = '50%'
	})
	video1.addEventListener("mouseover",function(){this.style.cursor = 'move'})
	video1.addEventListener("mouseout",function(){this.style.cursor = 'var(--hoverCur),auto;'})
}()