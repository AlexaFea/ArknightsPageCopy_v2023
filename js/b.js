// JavaScript Document
//鼠标圆型
//跟随
window.onload = function(){
	var pionter = document.querySelector('#pionter');
	window.onmousemove =function(e){					
		pionter['style']['left'] = e.pageX +'px';
		pionter['style']['top'] = e.pageY +'px';
	}; 
}; 
//超链接变色变形
//移上
var a=document.getElementsByTagName("a");
for (var i = 0; i < a.length; i++) {
    a[i].addEventListener('mouseenter',function () {
		pionter.style.width='24px'
		pionter.style.height='24px'
		pionter.style.background='rgba(255,255,255,0.5)'
	})
}
//移出
for (var i = 0; i < a.length; i++) {
    a[i].addEventListener('mouseleave',function () {
		pionter.style.width='36px'
		pionter.style.height='36px'
		pionter.style.background='rgba(0,0,0,0)'
	})
}

//滚轮控制元素高度
const scrollscreen=document.querySelector('.ll')
const lis=document.querySelectorAll('.rnavigal ul li')
const boxx=document.querySelector('.boxx')
const fot=document.querySelector('.fot')
var viewHeight=null;
var index =0;
var flag=true;
//窗口大小变化后适配
window.addEventListener('resize', function (){
	var hc=document.body.clientHeight;
	scrollscreen.style.top = -index * hc + 'px'
})
//滚轮
document.addEventListener('mousewheel',
	function(q){
		viewHeight=document.body.clientHeight;
		if(flag){
			flag = false//>0上滚
			if (q.wheelDelta > 0) {
				index--
				if (index < 0) {
					index = 0
				}
			}//<0 下滚
			else {
				index++;//this↓
				if (index > lis.length) {
					index = lis.length
				}
			}
			if(index<=lis.length-1){
				changeColor(index)
				changeNub(index)
				scrollscreen.style.top = -index * viewHeight + 'px'
				boxx.style.transform='translateY(0)'
				fot.style.transform='translateY(0)'
			}
			else{
				scrollscreen.style.top = -(index-1) * viewHeight + 'px'
				boxx.style.transform='translateY(-349.6px)'
				fot.style.transform='translateY(-349.6px)'
			}

			setTimeout(function () {
				flag = true
			},300)
		}
	})

//导航栏
//绑定点击事件
for (let i = 0; i < lis.length; i++) {
	lis[i].addEventListener('click',function () {
		viewHeight = document.body.clientHeight
		index = i
		changeColor(index)
		changeNub(index)
		scrollscreen.style.top = -index * viewHeight + 'px'
	})
}
//改变li颜色
function changeColor(index) {
	for (var j = 0; j < lis.length; j++) {
		lis[j].className = ''
	}
	lis[index].className = 'active'
}
// 改变底端数字
const nub=document.querySelector('.numbb')
function changeNub(index){
	switch (index){
		case 0:
			nub.innerHTML='/01'
			break;
		case 1:
			nub.innerHTML='//02'
			break;
		case 2:
			nub.innerHTML='///03'
			break;
		case 3:
			nub.innerHTML='////04'
			break;
		case 4:
			nub.innerHTML='/////05'
			break;
	}
}

//滚动轮播图
const Carousel=document.querySelector('.piclt ol')
const ltsquare=document.querySelectorAll('.ltsquare span')
var a=0
//启动轮播
autochange()
//计时器
function autochange(){
		stopcar=setInterval(Carouselchange,2500)
	console.log("开始计时")
}
//图片切换
function Carouselchange(){
	a++
	a=a%5
	var b=a*20
	Carousel.style.transform='translateX(-'+b+'%)'
	ltsquarechange(a)
}
//长条颜色改变
function ltsquarechange(index){
	for (var j = 0; j < ltsquare.length; j++) {
		ltsquare[j].className = ''
	}
	ltsquare[index].className = 'active'
}
//鼠标在图上停止倒计时
Carousel.addEventListener('mouseover',function (){
	clearInterval(stopcar)
	stopcar=null
	console.log("停止计时")
})
//鼠标移出开始计时
Carousel.addEventListener('mouseleave',function (){
	autochange()
})

//公告
const listltwo=document.querySelectorAll('.listltwo li')
const ltnews=document.querySelectorAll('.news li')
var newsdata={
	data:[
		{timeY:12,timeR:18,name:"活动",part:"[活动预告]SideStory 「照我以火」复刻即将开启"},
		{timeY:12,timeR:18,name:"活动",part:"[跨年欢庆寻访]【跨年欢庆·展望】限时寻访即将开启"},
		{timeY:12,timeR:13,name:"公告",part:"[明日方舟]12月13日封禁处理公示"},
		{timeY:12,timeR:12,name:"公告",part:"[明日方舟]12月12日16:00闪断更新公告"},
		{timeY:12,timeR:6,name:"公告",part:"[明日方舟]12月06日封禁处理公示"},
		{timeY:12,timeR:4,name:"公告",part:"[明日方舟]12月05日10:00版本更新停机维护公告"},
		{timeY:11,timeR:29,name:"活动",part:"SideStory 「银心湖列车」限时活动即将开启"},
		{timeY:11,timeR:27,name:"公告",part:"关于《明日方舟》新增《个人信息保护政策概要》公告"},
		{timeY:11,timeR:26,name:"新闻",part:"《明日方舟》制作组通讯#36期"},
		{timeY:11,timeR:9,name:"公告",part:"[明日方舟]11月29日封禁处理公示"},
		{timeY:10,timeR:22,name:"活动",part:"[活动预告]2023「感谢庆典」限时活动即将开启"},
		{timeY:10,timeR:22,name:"活动",part:"【宿愿】限时寻访即将开启"},
		{timeY:10,timeR:16,name:"新闻",part:"《明日方舟》制作组通讯#35期"},
		{timeY:10,timeR:15,name:"活动",part:"[活动预告]SideStory「叙拉古人」复刻即将开启"},
		{timeY:9,timeR:25,name:"新闻",part:"《明日方舟》制作组通讯#34期"},
		{timeY:8,timeR:27,name:"新闻",part:"《明日方舟》制作组通讯#33期"},
		{timeY:7,timeR:17,name:"新闻",part:"《明日方舟》制作组通讯#32期"},
		{timeY:6,timeR:22,name:"新闻",part:"《明日方舟》制作组通讯#31期"}
	]
}
changenews(0)
for (let i = 0; i < listltwo.length; i++) {
	listltwo[i].addEventListener('click',function () {
		for (var j = 0; j < listltwo.length; j++) {
			listltwo[j].className = ''
		}
		listltwo[i].className = 'active'
		changenews(i)
	})
}
//公告栏变化
function changenews(t){
	switch (t) {
		case 0:
			var i = 0
			for (var j = 0; j < ltnews.length; j++) {
				changezero(i,j)
				i++
			}
			break
		case 1:
			i = 0
			j = 0
			while(j!=ltnews.length){
				if(newsdata.data[i].name=="公告"){
					changezero(i,j)
					j++
				}
				i++
			}
			break
		case 2:
			i = 0
			j = 0
			while(j!=ltnews.length){
				if(newsdata.data[i].name=="活动"){
					changezero(i,j)
					j++
				}
				i++
			}
			break
		case 3:
			i = 0
			j = 0
			while(j!=ltnews.length){
				if(newsdata.data[i].name=="新闻"){
					changezero(i,j)
					j++
				}
				i++
			}
			break
	}
}
//如果月日小于10在前加0
function changezero(i,j){
	if (newsdata.data[i].timeY < 10) {
		var timeYc = '0' + newsdata.data[i].timeY
	} else {
		var timeYc = newsdata.data[i].timeY
	}

	if (newsdata.data[i].timeR < 10) {
		var timeRc = '0' + newsdata.data[i].timeR
	} else {
		var timeRc = newsdata.data[i].timeR
	}
	ltnews[j].innerHTML = '<a href="#">2023-' + timeYc + '-' + timeRc +
		'<div class="bluelt">' + newsdata.data[i].name + '</div>' +
		newsdata.data[i].part + '</a>'
}
// 角色图鉴
// 列表
const staffItem=document.querySelectorAll('.l3 .lre li')
const introducechange=document.querySelector('.inttextud')
const introducebg=document.querySelector('.intpic')
for (let i = 0; i < staffItem.length; i++) {
	staffItem[i].addEventListener('click',function () {
		for (var j = 0; j < staffItem.length; j++) {
			staffItem[j].className = 'staffItem'
		}
		staffItem[i].className = 'staffItem active'
		changeactor(i)
	})
}
//右侧对应图片和文字介绍
function changeactor(t){
	introducechange.innerHTML='<li id="up"><div id="cname">'+staffItem[t].dataset.name+'</div>'+'<div id="ename">'+staffItem[t].dataset.nameEn+'</div>'+'<div id="cvname">'+'CV:'+staffItem[t].dataset.cv+'</div>'+
	'<li id="down"><div id="itext">'+staffItem[t].dataset.intro
	introducebg.style.backgroundImage='url('+staffItem[t].dataset.displayUrl+')'
}
// 世界观介绍
// 列表
const storyItem=document.querySelectorAll('.l4 .introduce li')
const fochange=document.querySelector('.lfoinfo')
const itembg=document.querySelector('#lfopic')
for (let i = 0; i < storyItem.length; i++) {
	storyItem[i].addEventListener('click',function () {
		fochange.innerHTML='<li id="up2"><div id="stcname">'+storyItem[i].dataset.name+'</div>'+'<div id="stename">'+storyItem[i].dataset.nameEn+'</div>'+
			'<li id="down2"><div id="stintro">'+storyItem[i].dataset.intro
		itembg.style.backgroundImage='url('+storyItem[i].dataset.displayUrl+')'
	})
}
//右侧对应图片和文字介绍



