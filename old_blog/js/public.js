// 公用js效果文件

window.onload = function(){
	// 加载loading
	var iframe = document.querySelector('body>iframe')
	setTimeout(()=>{
		iframe.style.transform = 'translate(-50%, -50%) rotateZ(90deg)'
		document.querySelector('body>header').style.display = 'block'
		document.querySelector('body>section').style.display = 'block'
	},3000)
	setTimeout(()=>{
		iframe.style.display = 'none'
		document.querySelector('body>section>#sect_two').style.display = 'block'
	},4000)


	// 移动端PC端监听
	;(function(){
		if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
			console.log('移动端访问')
		} else {
			console.log('PC端访问')
		}
	})()


	// 导航栏效果
	;(function(){
		// 获取所需元素
		// 获取导航栏按钮
		var head_btn = document.getElementsByClassName('head_btn')[0]
		// 获取导航栏按钮图标
		var head_btn_i = head_btn.getElementsByTagName('i')[0]
		// 获取导航栏
		var head_ul_sm = document.getElementsByClassName('head_ul_sm')[0]
		// 单击按钮判断索引
		var hb_index = 0
		// 为按钮注册单击事件
		head_btn.onclick = function(){
			if(hb_index === 0){
				head_btn_i.className = 'iconfont icon-guanbi'
				head_ul_sm.className = 'head_ul head_ul_sm block'
				hb_index = 1
			}else{
				head_btn_i.className = 'iconfont icon-daohangpinlei'
				head_ul_sm.className = 'head_ul head_ul_sm'
				hb_index = 0
			}
		}
	})()

	// 点击变色效果
	;(function(){
		var arrs = [
			['white','#000','#999','rgba(255, 255, 255, .7)'],
			['pink','#000','#fff','rgba(255, 192, 203, .7)'],
			['aquamarine','#000','#fff','rgba(127, 255, 212, 1)'],
			['black','#fff','#999','rgba(0 ,0 ,0 , .7)']
		]
		/*
		* 获取数组中某个元素下标
		* arrays  : 传入的数组
		* obj     : 需要获取下标的元素
		* */
		function contains(arrays, obj) {
		    var i = arrays.length;
		    while (i--) {
		        if (arrays[i] === obj) {
		            return i;
		        }
		    }
		    return false;
		}
		var sect_tcs = document.querySelectorAll('.sect_three_color')
		for(var i = 0;i<sect_tcs.length;i++){
			sect_tcs[i].onclick = function(){
				var index = contains(sect_tcs,this)
				if(document.querySelector('.anim') != null)
					document.querySelector('.anim').className = 'sect_three_color'
				sect_tcs[index].className = 'sect_three_color anim' 
				document.body.style.setProperty('--colorbg', arrs[index][0])
				document.body.style.setProperty('--colorft', arrs[index][1])
				document.body.style.setProperty('--colorsd', arrs[index][2])
				document.body.style.setProperty('--coloropc', arrs[index][3])
			}
		}
	})()

	
}