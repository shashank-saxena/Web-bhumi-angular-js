function generateGridView() {
	function generateCartHtml(urlImg, title, subTitle) {
		var htm = "";
		var div1 = document.createElement('div');
		div1.className = "col-lg-3";
		var image = document.createElement('img');
		image.src = urlImg;
		image.alt = title;
		div1.appendChild(image);
		var heading = document.createElement("h3");
		heading.innerHTML = title;
		div1.appendChild(heading);
		var subHeading = document.createElement("h4");
		subHeading.innerHTML = subTitle;
		div1.appendChild(subHeading);
		return div1;
	}
	var j = {};
	j.generateCart = function() {
		var xmlhttp;
		var cart_htm = [];
		// compatible with IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function(){
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
				var obj = JSON.parse(xmlhttp.responseText);
				if(obj.Error == 0) {
					for (var i = 0; i < obj.Books.length; i++) {
						var arr_obj = obj.Books[i];
						var cart_htm_tmp = generateCartHtml(arr_obj.Image, arr_obj.Title, arr_obj.Description);
						cart_htm.push(cart_htm_tmp.outerHTML);
						//
					}
					document.getElementById("cart").innerHTML = cart_htm.join("");
				}
			}
		}
		var url = "http://it-ebooks-api.info/v1/search/php%20mysql/page/3";
		xmlhttp.open("GET", url, true);
		xmlhttp.send();	
		//return cart_htm;
	};
	return j;
}
var obj = new generateGridView();
obj.generateCart();
//var objArr = obj.generateCart();
//alert(objArr);