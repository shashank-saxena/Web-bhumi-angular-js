function checkIt(){
	function callthisfun(title,bookimg,desc){
		var htm = "";
		
		var rootdiv = document.createElement('div');
		rootdiv.className = 'col-lg-3';
		var im = document.createElement('img');
		im.src = bookimg;
		im.alt = title;
		
		var heading = document.createElement('h3');
		heading.innerHTML = title;
		var p11 = document.createElement('p');
		p11.innerHTML = desc;
		rootdiv.appendChild(heading);
		rootdiv.appendChild(im);
		rootdiv.appendChild(p11);		
		return rootdiv;
	}
	
	var pub = {};
	pub.pubFunction = function(){
		console.log('call now');
		var html = [];
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var ob = JSON.parse(this.responseText);
					var htm= "";
					for(j=0;j<ob.Books.length;j++){
						console.log(ob.Books[j].Title);
						console.log('/n');
						var cart_htm_tmp = callthisfun(ob.Books[j].Title,ob.Books[j].Image,ob.Books[j].Description);
						console.log(cart_htm_tmp);
						console.log(cart_htm_tmp.innerHTMLHTML);
						html.push(cart_htm_tmp.outerHTML);
						
					}
					document.getElementById('demo').innerHTML = html.join("") ;
					
					
			   }
			};
			var url = "http://it-ebooks-api.info/v1/search/php%20mysql/page/3";
			xhttp.open("GET", url, true);
			xhttp.send(); 
		//console.log(obj);
	}
	return pub;
	
} 