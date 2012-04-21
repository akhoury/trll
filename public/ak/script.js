//unminified javascript for your convenience.
var light = true;
$(document).ready(function(){
  $('#leave')[0].onclick = soLong;
  $('#light-switch')[0].onclick = toggleLight;
});
function toggleLight(){
	var arr = $(".toggle");
	var arr_rep = $(".replace");
	if(light){
		$(document)[0].body.style.backgroundColor = "black";
		$(".header").css('cssText', gradientCSSText("#000000","#191919", true));
		hideThose(arr);
		$(".doors").css('cssText', "border: none; background-color: transparent;");
		replace(arr_rep);
		light = false;
	}
	else{
		$(document)[0].body.style.backgroundColor = "white";
		$(".header").css('cssText', gradientCSSText("#FFFFFF","#CFCFCF", false));
		showThose(arr);
		$("#door-outline").css('cssText', doorOutlineCSS());
		$("#door").css('cssText', doorCSS());
		replace(arr_rep);
		light = true;
	}
}
function replace(arr){
	var img = {org: "/ak/img/pencil.png", alt: "/ak/img/pencil-eyes-only.png" };
	$.each(arr, function(){
		if($(this).attr("src") === img.org){
			$(this).attr("src", img.alt);
		}
		else if ($(this).attr("src") === img.alt){
			$(this).attr("src", img.org);
		}
	});
}
function hideThose(arr){
	$.each(arr, function(){
		if($(this)){
			$(this).css("visibility", "hidden");
		}
	});
}
function showThose(arr){
	$.each(arr, function(){
		//$(this).show();
		if($(this)){
			$(this).css("visibility", "visible");
		}
	});
}
function soLong(){
	setTimeout(function(){
		window.open('', '_self', '');
		window.close();
	}, 10);
	// if I can't close this window, send them to google
	if (window){
		window.location = "http://www.google.com";
	}
}
function gradientCSSText(c1, c2, stars){
	var str = "filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='"+ c1 +"', endColorstr='"+ c2 +"');"
			+ "background-image: -ms-linear-gradient(top, "+ c1 +" 0%, "+ c2 +" 100%);"
			+ "background-image: -moz-linear-gradient(top, "+ c1 +" 0%, "+ c2 +" 100%);"
			+ "background-image: -o-linear-gradient(top, "+ c1 +" 0%, "+ c2 +" 100%);"
			+ "background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, "+ c1 +"), color-stop(1, "+ c2 +"));"
			+ "background-image: -webkit-linear-gradient(top, "+ c1 +" 0%, "+ c2 +" 100%);"
			+ "background-image: linear-gradient(top, "+ c1 +" 0%, "+ c2 +" 100%);";
	if(stars){
		str += str + "background-image: url('/ak/img/stars.png'); repeat;"
	}
	return str;
}
function doorCSS(){
		return " background-color: #CCCCCC;	height: 600px;	width: 300px;	border-width: 4px 2px 1px 4px;	border-style: solid; border-color: #666666;";
}
function doorOutlineCSS(){
	return "background-color: transparent;	*height: 600px; _height: 600px;	height: 600px;	width: 300px;"
			+ "float: left;	border-width: 22px 28px 0px 22px; margin-left: 200px; margin-top: 75px;	border-style: solid; border-color: #E6E6E6;";
}