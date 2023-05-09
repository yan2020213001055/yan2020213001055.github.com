/*变字体颜色为红色*/
let p1=document.getElementById('p1');
p1.onclick=function(){					
	p1.style.color = "#FF0000";
	console.log(this);
	alert(0);
}

/*变成日期*/
let p2=document.getElementById('p2');
let h1=document.getElementById('h1');
p2.onclick=function(){
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var date = now.getDate();
	h1.innerHTML=year+"-"+month+"-"+date;
	alert(1);
}

/*addClass()*/
function addClass(element, value) {		
    if (!element.className || element.className == "") {
        element.className = value;
        return;
    }
    var cls = ' ' + value + ' ';
    if (cls.indexOf(' ' + element.className + ' ') <= -1) {
        var newClass = element.className;
        newClass += ' ';
        newClass += value;
        element.className = newClass;
    }
}

/*增加fn-active类*/
let p3=document.getElementById('p3');
p3.onclick=function(){						
	addClass(p3,"fn-active");
	alert(2);
}

/*删除p8*/
let p4=document.getElementById('p4');
let p8=document.getElementById('p8');
p4.onclick=function(){					
	p8.remove();
	alert(3);
}

/*开淘宝主页*/
let p5=document.getElementById('p5');
p5.onclick=function(){				
	window.open("https://www.taobao.com/");
	alert(4);
}

/*添加p9*/
let p6=document.getElementById('p6');
p6.onclick=function(){					
	ul.append("p9");
	alert(5);
}

/*将m-box设置到屏幕宽度*/
let p7=document.getElementById('p7');
let div1 = document.getElementById('div1');
p7.onclick=function(){					
	div1.className="box";
	alert(6);
}



