/*
*********

Scripts for TigerLilyBakes.com
Developed by: Peter Berki
Twitter: PeterBerki
GitHub: Pitabaki
Website Applied to: www.tigerlilybakes.com

*********
*/


function init(){

/*
*********

Processes current Menu JSON

*********
*/
	var total = 0,
		quantityTotal = 0;

	function addCalc(num,quantity){
		total += num * quantity;
	}

	function subCalc(num,quantity){
		var figure = num * quantity;
		total -= figure;
	}

	function orderTotal(order){
		total = 0,
		quantityTotal = 0;
		for(var y = 0; y < order.length; y++){
			addCalc(order[y].price, order[y].quantity);
			quantityTotal += order[y].quantity;
		}
		shoppingCartTotal(quantityTotal);
	}

	function pastry(name,desc,type){
		this.name = name;
		this.desc = desc;
		this.type = type;
	}

	function priceGuide(price,thc){
		this.price = price;
		this.thc = thc;
	}

	function order(name, id, quantity, price, desc, thc){
		this.name = name;
		this.id = id;
		this.quantity = quantity;
		this.price = price;
		this.desc = desc;
		this.thc = thc;
	}

	function shoppingCartTotal(amount){
		var opac = $('.quantity').css('opacity');
		if((opac === '0') && (amount !== 0)){
			$('.quantity').css({'opacity':'1'});
		} else if (amount === 0) {
			$('.quantity').css({'opacity':'0'});
		}
		$('#cart-contents').html(amount);
	}

	var pastryArray = [],
		priceArray = [],
		orderArray = [];

    function menuJSON(jsonURL){
    		var leftImg = "<div class='col s12 m6 l6'><div class='path-selection right'><img src='img/menu-hero.jpg'></div></div>",
    			startRight = "<div id='current-selection' class='col s12 m6 l6 menu-list'>",
    			startMenu = "<div class='menu-item'><div class='left'>",
    			startForm = "<div class='right form-set'><form id='",
    			startField ="<fieldset>",
    			quantitySelect = "<span class='quantity-selection'><label>Quantity</label><input type='number' value='0' min='0' name='quantity'",
    			quantityFinish = " id='",
    			startButton = "<input class='btn order' type='submit' value='Add to Cart' id='send",
    			finishForm = "'></span></fieldset></form></div></div>";

	        var menuInfo = [leftImg, startRight];

	        if(jsonURL === "ajax/menu.json"){
	        	var muffinPrice = [],
	        		cookiePrice = [];

	        	$.getJSON('ajax/muffinPrice.json', function ( data ) {
	        		$.each(data, function(key, val){
	        			priceArray.push(key = new priceGuide(val.price, val.thc));
	        			muffinPrice.push("<input type='radio' name='price' id='" + val.price + "' value='" + val.price + "' /><label>$" + val.price + " per 4 &mdash; " + val.thc + "</label><br>");
	        		});
	        	});

	        	$.getJSON('ajax/cookiePrice.json', function ( data ) {
	        		$.each(data, function(key, val){
	        			cookiePrice.push("<input type='radio' name='price' id='" + val.price + "' value='" + val.price + "' /><label>$" + val.price + " per 8 &mdash; " + val.thc + "</label><br>");
	        		});
	        	});

		        $.getJSON(jsonURL, function ( data ) {
		            var def,
		            	count = 0;
		            $.each(data, function(key, val){
		            	count++;
		            	menuInfo.push(startMenu + "<h2>" + val.name + "</h2><p>" + val.description + "</p></div>" + startForm + val.name + "'>" + startField + "<span class='price-list'>");
		            	if(val.type === "muffin"){
			            	for(var i = 0; i < muffinPrice.length; i++){
			            		menuInfo.push(muffinPrice[i]);
			            	}
			            } else if (val.type === "cookie") {
			            	for (var v = 0; v < cookiePrice.length; v++) {
			            		menuInfo.push(cookiePrice[v]);
			            	}
			            }
		            	menuInfo.push("</span>" + quantitySelect + quantityFinish + val.quantityName + "'>" + startButton + finishForm);
		            	pastryArray.push(objName = new pastry(val.name,val.description,val.type));

		            });
		            menuInfo.push("</div>");
		            var args = menuInfo.join("");
		            $( "<div/>", {
		                "class": "col s12 m12 l12 reset-padding",
		                "id": "current-menu",
		                html: args
		            }).appendTo( '*[data-activate="menu"]' );
		            setTimeout(function(){
		            	$('#current-menu').css({'max-height':'580px'});
		            }, 50);
		        });
			}
    }

/*
    function menuJSON(jsonURL){
    		var leftImg = "<div class='col s12 m6 l6'><div class='path-selection right'><img src='img/menu-hero.jpg'></div></div>",
    			startRight = "<div id='current-selection' class='col s12 m6 l6 menu-list'>",
    			startMenu = "<div class='menu-item'><div class='left'>",
    			startForm = "<div class='right'><form action=''><fieldset><label>Quantity</label><input type='number' value='number' name='",
    			finishForm = "<button class='btn order'>Add to Cart</button></fieldset></form></div></div>";

	        var menuInfo = [leftImg, startRight]

	        if(jsonURL === "ajax/menu.json"){
		        $.getJSON(jsonURL, function ( data ) {
		            var def;
		            $.each(data, function(key, val){
		            	menuInfo.push(startMenu + "<h2>" + val.name + "</h2><p>" + val.description + "</p><h6><em>" + val.price + " each &mdash; " + val.thc);
		            	menuInfo.push("</em></h6></div>" + startForm + val.quantityName + "'>" + finishForm);
		            	console.log("EACH PUSH working");
		            });
		            menuInfo.push("</div>");
		            var args = menuInfo.join("");
		            $( "<div/>", {
		                "class": "col s12 m12 l12 reset-padding",
		                "id": "current-menu",
		                html: args
		            }).appendTo( '*[data-activate="menu"]' );
		            setTimeout(function(){
		            	$('#current-menu').css({'max-height':'580px'});
		            }, 50);
		        });
    }*/


/*
*********

Animated movement click function called below

*********
*/

    $('.nav-trigger').click(function(){
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top - 80
                }, 500);
            }
            return false;
        }
    });

/*
*********

Inject JSON data when current-menu is selected

*********
*/

   	$('*[data-path="current"]').click(function(){
   		menuJSON('ajax/menu.json');
   		setTimeout(function(){
	   		$('.menu-button').css({
	   			'opacity':'0',
	   			'max-height':'0px'
	   		});
   		}, 50);
   		return false;
   	});

/*
*********

Inject JSON data when custom is selected

*********
*/

   	$('*[data-path="custom"]').click(function(){
   		menuJSON('ajax/customMenu.json');
   		return false;
   	});


/*
*********

Process "Add to Cart"

*********
*/

	$(document).on('submit', 'form', function(event){
		event.preventDefault();
		var priceSelect = $(this).find('input:radio[name=price]:checked').val(),
			priceSelectName = $(this).find('input:radio[name=price]:checked'),
			quantitySelect = $(this).find('input[name=quantity]').val(),
			quantitySelectName = $(this).find('input[name=quantity]'),
			orderItem = $(this).attr('id'),
			ord,
			thc;

		var	quantityID = quantitySelectName.attr('id');

		var orderID = quantityID + priceSelect;

		if ((typeof priceSelect === 'undefined') && (quantitySelect === '') || (typeof priceSelect === 'undefined') || (quantitySelect === '') || (quantitySelect === '0')) {
			alert("Sorry, but your input was not valid. Make sure both a quantity has been entered and a price has been selected.");
		} else {
			var quantityNumber = parseInt(quantitySelect),
				priceNumber = parseInt(priceSelect);
				quantityTotal += quantityNumber;
				shoppingCartTotal(quantityTotal);

			quantitySelect = 0;

				
				for(var k = 0; k < priceArray.length; k++){
					if(priceSelect === priceArray[k].price){
						thc = priceArray[k].thc;
					}
				}

				if (orderArray.length > 0) {
					for (var g = 0; g < orderArray.length; g++) {
						if ((orderArray[g].price === priceNumber) && (orderArray[g].name === orderItem)) {
							orderArray[g].quantity += quantityNumber;
							addCalc(orderArray[g].price, quantityNumber);
							quantityNumber = 0;
							return false;
						}
					}
				}
				for (var c = 0; c < pastryArray.length; c++) {
					if (orderItem === pastryArray[c].name) {
						addCalc(priceNumber, quantityNumber);
						orderArray.push(ord = new order(orderItem, orderID, quantityNumber, priceNumber, pastryArray[c].desc, thc));
						quantityNumber = 0;
						return false;
					}
				}
		}
		return false;
	});

/*
*********

Process Order

*********
*/

/*

					<span id="someProduct" class="person-order">
						<h6>Red Velvet Cupcake</h6>
						<h6><em>40mg</em></h6>
						<form>
							<fieldset>
								<input type="number" value="10" min="0" name="quantity" />
							</fieldset>
						</form>
					</span>
*/

	$(document).on('change', 'input[name=checkout-quantity]', function(){
		var item = $(this).data("order"),
			incremental = 1,
			quantityUpdate = $(this).val();

		console.log("The total is before: " + total);

		for (var i = 0; i < orderArray.length; i++){
			if (orderArray[i].id === item){
				if(orderArray[i].quantity > quantityUpdate){
					console.log("quantity is less than the order's quantity");
					orderArray[i].quantity -= incremental;
					orderTotal(orderArray);
					console.log("The total is after (sub): " + total);
				} else if (orderArray[i].quantity < quantityUpdate){
					console.log("quantity is more than the order's quantity");
					orderArray[i].quantity += incremental;
					orderTotal(orderArray);
					console.log("The total is after (add): " + total);
				}
			}
		}
	});

	var orderGreeting = "<h4>Today's Order</h4><p>Review the following order to ensure it's correct.<br><em>Note: drivers check rec cards upon delivery.</em></p>";

	$('.checkout').click(function(){

		var orderHTML = [],
			spanCheck = $('.final-order').children();

		if(spanCheck.length > 0){
			$('.final-order').empty();
		}
		
		$('.final-order').html(orderGreeting);
		var spanOpen = "<span id='",
			classOpen = "class='person-order'>",
			formOpen = "<form><fieldset><input type='number' value='",
			formMid = "' min='0' name='checkout-quantity' data-order='",
			formClose = "' /></fieldset></form></span>";

		if (orderArray.length > 0) {
			for (var i = 0; i < orderArray.length; i++) {
				orderHTML.push(spanOpen + orderArray[i].id + "' " + classOpen + "<h6>" + orderArray[i].name + " </h6><h6><em>" + orderArray[i].thc + "</em></h6>" + formOpen + orderArray[i].quantity + formMid + orderArray[i].id + formClose);
			}
			var output = orderHTML.join("");
			
			$( "<div/>", {
				"id": "person-order",
				html: output
			}).appendTo( '.final-order' );
		}
	});

/*
*********

Activates side-nav

*********
*/

	$('.button-collapse').sideNav({
		closeOnClick: true
	});

/*
*********

Activates shopping cart

*********
*/

	$('.checkout').leanModal({
		dismissible: true, // Modal can be dismissed by clicking outside of the modal
		opacity: .5, // Opacity of modal background
		in_duration: 300, // Transition in duration
		out_duration: 200, // Transition out duration
	});
}
window.onload = init;
