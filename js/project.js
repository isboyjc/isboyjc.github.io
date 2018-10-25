// project.html页js效果文件

// 中/英切换效果
!function(){
	// 获取切换按钮元素
	var sect_three_right = document.getElementsByClassName('sect_three_right')[0]
	// 获取导航元素
	var head_as = document.getElementsByClassName('head_a')
	// 获取正方体6元素
	var cubes = document.querySelectorAll('.cube>div')
	var arr = [
		['Website(Self-written)','Website(imitation)','Special effects','Small Game','Package','Full stack'],
		['网站(自写)','网站(模仿)','特效','小游戏','封装','全栈']
	]
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
			for(var i = 0;i < cubes.length;i++){
				cubes[i].innerHTML = arr[1][i]
			}
			index = 1
		}else{
			head_as[0].innerHTML = 'Homepage' + elements
			head_as[1].innerHTML = 'about me' + elements
			head_as[2].innerHTML = 'Project' + elements
			head_as[3].innerHTML = 'Resource' + elements
			head_as[4].innerHTML = 'OwnerBlog' + elements
			for(var i=0;i < cubes.length;i++){
				cubes[i].innerHTML = arr[0][i]
			}
			index = 0
		}
	}
}()	

// 移动端PC端监听
!function(){
	if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
		setTimeout(function () {
			var cube = document.querySelector(".cube"),
				downX, downY, moveX=0, moveY=0, tempX, tempY, degX = 0, degY = 0

			window.ontouchstart = function (e) {
				e = e.touches[0]
				downX = e.clientX			//获取触屏坐标
				downY = e.clientY

				window.ontouchmove = function (e) {
					e = e.touches[0]
					moveX = e.clientX - downX			//算出触屏移动的距离
					moveY = e.clientY - downY
					//根据一定比例将变化反应在盒子上，改变比例5可以调节拖动的速度
					tempX = degX + moveX / 5			
					tempY = degY - moveY / 5
					cube.style.transform = "rotatex(" + tempY + "deg) rotatey(" + tempX + "deg)"
				}
			}

			window.ontouchend = function (e) {
				e = e.touches[0]
				degX += moveX / 5			//触屏离开时将拖动期间改变的最终结果保存
				degY += - moveY / 5
				window.onmousemove = null 	//取消监听
			}

			// 景深视差效果
			!function () {
				var n = 1000
				var wraper = document.querySelector('.wraper')
				wraper.style.perspective = n + 'px'
				window.onmousewheel = function (e) {
					e = e || event
					if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
						if (e.wheelDelta > 0) { //当滑轮向上滚动时减小景深
							wraper.style.perspective = n - 50 + 'px'
							if (n > 350) {
								n = n - 50
							}
						}
						if (e.wheelDelta < 0) { //当滑轮向下滚动时增加景深
							wraper.style.perspective = n + 50 + 'px'
							n += 50
						}
					} else if (e.detail) {  //Firefox滑轮事件
						if (e.detail > 0) {
							wraper.style.perspective = n - 50 + 'px'
							if (n > 350) {
								n = n - 50
							}
						}
						if (e.detail < 0) {
							wraper.style.perspective = n + 50 + 'px'
							n += 50
						}
					}
				}
			}()
		}, 5000)
	} else {
		setTimeout(function () {
			var cube = document.querySelector(".cube"),
				downX, downY, moveX, moveY, tempX, tempY, degX = 0, degY = 0

			window.onmousedown = function (e) {
				e = e || event
				downX = e.clientX			//获取鼠标点下去时的坐标
				downY = e.clientY

				window.onmousemove = function (e) {
					e = e || event
					moveX = e.clientX - downX			//算出鼠标移动的距离
					moveY = e.clientY - downY
					//根据一定比例将变化反应在盒子上，改变比例5可以调节拖动的速度
					tempX = degX + moveX / 5			
					tempY = degY - moveY / 5
					cube.style.transform = "rotatex(" + tempY + "deg) rotatey(" + tempX + "deg)"
				}
			}

			window.onmouseup = function (e) {
				e = e || event
				degX += moveX / 5			//鼠标松开时将拖动期间改变的最终结果保存
				degY += - moveY / 5
				window.onmousemove = null			//取消监听
			}

			// 景深视差效果
			!function () {
				var n = 1000
				var wraper = document.querySelector('.wraper')
				wraper.style.perspective = n + 'px'
				window.onmousewheel = function (e) {
					e = e || event
					if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
						if (e.wheelDelta > 0) { //当滑轮向上滚动时减小景深
							wraper.style.perspective = n - 50 + 'px'
							if (n > 150) {
								n = n - 50
								console.log(n)
							}
						}
						if (e.wheelDelta < 0) { //当滑轮向下滚动时增加景深
							wraper.style.perspective = n + 50 + 'px'
							n += 50
							console.log(n)
						}
					} else if (e.detail) {  //Firefox滑轮事件
						if (e.detail > 0) {
							wraper.style.perspective = n - 50 + 'px'
							if (n > 150) {
								n = n - 50
							}
						}
						if (e.detail < 0) {
							wraper.style.perspective = n + 50 + 'px'
							n += 50
						}
					}
				}
			}()
		}, 5000)
	}
}()

// 鼠标点击块元素效果
!function(){
	// 获取正方体6元素
	var cubes = document.querySelectorAll('.cube>div')
	// 获取正方体
	var wraper = document.querySelector('.wraper')
	for(var i=0;i<cubes.length;i++){
		cubes[i].addEventListener("click",function(){
			this.innerHTML = 'sorry,No page!'
		})
	}
}()