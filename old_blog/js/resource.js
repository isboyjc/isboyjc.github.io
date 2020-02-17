// pesource.html页效果

// 气球特效
!function(){
	var sect2 = document.getElementById('sect_two')
	var imgs = document.querySelectorAll('.sect_onedv>.sect_oneimg')
	var dvs = document.querySelectorAll('.sect_onedv')
	var btns = document.querySelectorAll('.sect_onebtn')
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
	// 气球拖动效果
	var canMove = false,offsetX,offsetY
	for(var i=0;i<imgs.length;i++){
		btns[i].onmouseover = function(){
			var a = contains(btns,this)
			btns[a].style.animation = 'none'
		}
		btns[i].onmouseout = function(){
			var a = contains(btns,this)
			btns[a].style.animation = 'aaa 1s ease-in-out 1'
		}
		imgs[i].onmousedown = function(e){
			canMove = true;offsetX = e.offsetX;offsetY = e.offsetY
			window.a = contains(imgs,this)
		}

		window.onmouseup = function(){canMove = false}
		window.addEventListener('mousemove',function(e){
			if(canMove){
				var top = e.clientY - offsetY
				var left = e.clientX - offsetX
				dvs[window.a].style.transition = 'none'
				dvs[window.a].style.top = top + 'px'
				dvs[window.a].style.left = left + 'px'
			}
		})
	}
	// 气球初始化漂浮
	function fnInit(){
		var topArr = ['45%','20%','60%','35%','55%','25%']
		var leftArr = ['10%','21%','30%','41%','51%','62%']
		for(var i=0;i<topArr.length;i++){
			dvs[i].style.top = topArr[i]
			dvs[i].style.left = leftArr[i]
		}
	}
	setTimeout(fnInit,4000)

	// 气球漂浮函数
	var arr = [
		['-30%','-30%','-30%','-30%','-30%','-30%'],
		['20%','31%','10%','61%','71%','42%'],
		['45%','20%','60%','35%','55%','25%'],
		['10%','21%','30%','41%','51%','62%']
	]
	function fnQ(arr1,arr2){
		for(var i=0;i<arr1.length;i++){
			dvs[i].style.transition = 'all 6s ease'
			dvs[i].style.top = arr1[i]
			dvs[i].style.left = arr2[i]
		}
	}

	// 滚动监听
	window.onscroll = function(){
		console.log(sect2.offsetTop-window.scrollY)
		if(sect2.offsetTop-window.scrollY<600){
			fnQ(arr[0],arr[1])
		}else{
			fnQ(arr[2],arr[3])
		}
	}
	for (var i =0;i<dvs.length;i++) {
		btns[i].onclick = function() {
			
		}
	}
}()	
