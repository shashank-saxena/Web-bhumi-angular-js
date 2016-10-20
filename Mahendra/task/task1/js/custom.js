function generateGridView() {
	function create_html(urlImg, title, subTitle) {
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
		var subHeading = document.createElement("p");
		subHeading.innerHTML = subTitle;
		div1.appendChild(subHeading);
		return div1;
	}
	var j = {};
	j.generateCart = function() {
		var xmlhttp;
		var html = [];
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function(){
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
				var obj = JSON.parse(xmlhttp.responseText);
				if(obj.Error == 0) {
					for (var i = 0; i < obj.Books.length; i++) {
						var arr_obj = obj.Books[i];
						var cart_htm_tmp = create_html(arr_obj.Image, arr_obj.Title, arr_obj.Description);
						html.push(cart_htm_tmp.outerHTML);
					}
					document.getElementById("cart").innerHTML = html.join("");
				}
			}
		}
		var url = "http://it-ebooks-api.info/v1/search/php%20mysql/page/3";
		xmlhttp.open("GET", url, true);
		xmlhttp.send();	
	};
	return j;
}
var obj = new generateGridView();
obj.generateCart();