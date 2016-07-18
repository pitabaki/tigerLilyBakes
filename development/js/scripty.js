/*
*********

Scripts for TigerLilyBakes.com
Developed by: Peter Berki
Twitter: PeterBerki
GitHub: Pitabaki
Website Applied to: www.tigerlilybakes.com

*********
*/


function init() {
	console.log("/*\n*********\n\nScripts for TigerLilyBakes.com\nDeveloped by: Peter Berki\nTwitter: PeterBerki\nGitHub: Pitabaki\nWebsite Applied to: www.tigerlilybakes.com\n\n*********\n*/");

	var checkURL = window.location.href;

/*
*********

Processes current Menu JSON

*********
*/

	function addCalc(num,quantity) {
		// total set to 0 to ensure there's no pass total variable
		var total = 0;

		console.log("Quantity passed: " + quantity + "\nNum passed: " + num);
		total += num * quantity;

		//return total to orderTotal total variable
        return total;
	}

	function addOnCalc(quantity,group,price) {
		var count = 0;
		if (quantity%group > 0) {
			count = quantity/group;
			count = Math.floor(count);
			count = count * price;
			price += count;
		} else {
			count = quantity/group;
			price = price * count;
		}
		return price;
	}

	function orderTotal(order) { //passing orderArray as order
		var total = 0,
			traveler = 0,
			delivery = 10,
			tax = 0.08,
			quantityTotal = 0,
			openIndex;

		for(var y = 0; y < order.length; y++) {
			total += addCalc(order[y].price, order[y].quantity);
			quantityTotal += order[y].quantity;
			console.log(order[y].status);
			if (order[y].status === 'open') {
				openIndex = y;
			}
		}
		
		if (openIndex !== 'undefined') {
			for (var n = 0; n < addOnArray.length; n++) {
				//console.log("quantityTotal is: " + typeof quantityTotal + "\nGroup is: " + typeof addOnArray[n].group + "\nPrice is: " + typeof addOnArray[n].price + "\nTotal is: " + typeof total);
				total += addOnCalc(quantityTotal, addOnArray[n].group, addOnArray[n].price);
			}
		}

		// tax calculated prior to delivery charge
		traveler = total * tax;



		// if orders are under a given amount
		if (total < 50) {
			total += delivery;
		}

        total += traveler;

		total = +(total.toFixed(2));
		$('#grandTotal').html(total);
		shoppingCartTotal(quantityTotal);
	}

	function overlayPos(width, handle, pos) {
		if (pos === "top") {
			if (width >= 992) {
				$(handle).css({'top': '120px'});
				setTimeout(function() {
					$(handle).css({'top': '0'});
					setTimeout(function() {
						$(handle).css({'display': 'none'});
					},	500);
				}, 5000);
			} else if (width >= 600) {
				$(handle).css({'top': '130px'});
				setTimeout(function() {
					$(handle).css({'top': '0'});
					setTimeout(function() {
						$(handle).css({'display': 'none'});
					},	500);
				}, 5000);
			} else {
				$(handle).css({'top' : '190px'});
				setTimeout(function() {
					$(handle).css({'top': '0'});
					setTimeout(function() {
						$(handle).css({'display': 'none'});
					},	500);
				}, 5000);
			}
		} else if (pos === "bottom") {
			$(handle).css({'top': '83%'});
		} else {
			console.log("Incorrect value passed as pos for function overlayPos");
		}
	}

/*
*********

Pastry object for imported items

*********
*/

	function pastry(name,desc,type,min,price,id) {
		this.name = name;
		this.desc = desc;
		this.type = type;
		if (min !== "undefined") {
			this.min = min;
		}
		if (price !== "undefined") {
			this.price = price;
		}
		if (id !== "undefined") {
			this.id = id;
		}
	}

/*
*********

Price/THC guide

*********
*/

	function priceGuide(price,thc) {
		this.price = price;
		this.thc = thc;
	}

/*
*********

Order Object

*********
*/

	function order(name, id, quantity, price, desc, thc, type, status, group) {
		this.name = name;
		this.id = id;
		this.quantity = quantity;
		this.price = price;
		this.desc = desc;
		this.thc = thc;
		if (type !== "undefined") {
			this.type = type;
		}
		if (status !== "undefined") {
			this.status = status;
		}
		if (group !== "undefined") { //custom cupcakes, chocolate, and cookies are grouped by their minimum amount
			this.group = group;
		}
	}

/*
*********

Add-on Object

*********
*/

	function addOns(name,price,tier, group) {
		this.name = name;
		this.price = price;
		this.tier = tier;
		this.group = group;
	}

/*
*********

Creates message per item ordered

*********
*/
	
	function orderPush(order) {
		var message = [];
		message.push("\nItem name: " + order.name + "\nQuantity: " + order.quantity + "\nTHC: " + order.thc + "\n\n");
		concat = message.join("");
		return concat;
	}

/*
*********

Function adds quantity to shopping cart

*********
*/

	function shoppingCartTotal(amount) {
		var opac = $('.quantity').css('opacity');
		if ((opac === '0') && (amount !== 0)) {
			$('.quantity').css({'opacity':'1'});
		} else if (amount === 0) {
			$('.quantity').css({'opacity':'0'});
		}
		$('.cart-amount').html(amount);
	}

	var pastryArray = [],
		customArray = [],
		priceArray = [],
		orderArray = [],
		addOnArray = [];

/*
*********

Function for processing Menu information

*********
*/

    function menuJSON(jsonURL) {


	        if (jsonURL === "ajax/menu.json") {// Processes Current Menu

	    		var leftImg = "<div class='col s12 m12 l6'><div class='path-selection right'><img src='img/menu-hero.jpg'></div></div>",
	    			startRight = "<div id='current-selection' class='col s12 m12 l6 menu-list'>",
	    			startMenu = "<div class='menu-item'><div class='left'>",
	    			startForm = "<div class='right form-set'><form class='current-menu-item' id='",
	    			startField ="<fieldset>",
	    			quantitySelect = "<span class='quantity-selection'><label>Quantity</label><input type='number' value='0' min='0' name='quantity'",
	    			quantityFinish = " id='",
	    			startButton = "<input class='btn order' type='submit' value='Add to Cart' id='send",
	    			finishForm = "'></span></fieldset></form></div></div>";

		        var menuInfo = [leftImg, startRight];
	        	var muffinPrice = [],
	        		cookiePrice = [];

	        	//Fetch Muffin JSON
	        	$.getJSON('ajax/priceList.json', function ( data ) {
	        		$.each(data, function(key, val) {
	        			if (key[0] === "M") {
	        				priceArray.push(key = new priceGuide(val.price, val.thc));
	        				muffinPrice.push("<input type='radio' name='price' id='" + val.price + "' value='" + val.price + "' /><label>$" + val.price + " per cupcake &mdash; " + val.thc + "</label><br>");
	        			} else if (key[0] === "C") {
	        				cookiePrice.push("<input type='radio' name='price' id='" + val.price + "' value='" + val.price + "' /><label>$" + val.price + " per 2 &mdash; " + val.thc + "</label><br>");
	        			}
	        		});
	        	});

	        	//Fetch Cookie JSON
	        	/*
	        	$.getJSON('ajax/cookiePrice.json', function ( data ) {
	        		$.each(data, function(key, val) {
	        			cookiePrice.push("<input type='radio' name='price' id='" + val.price + "' value='" + val.price + "' /><label>$" + val.price + " per 2 &mdash; " + val.thc + "</label><br>");
	        		});
	        	});*/

		        $.getJSON(jsonURL, function ( data ) {
		            var def,
		            	count = 0;
		            $.each(data, function(key, val) {
		            	count++;
		            	menuInfo.push(startMenu + "<h2>" + val.name + "</h2><p>" + val.description + "</p></div>" + startForm + val.name + "'>" + startField + "<span class='price-list'>");
		            	if (val.type === "muffin") {
			            	for(var i = 0; i < muffinPrice.length; i++) {
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
		            setTimeout(function() {
		            	$('.menu').css({'max-height':'20000px'});
		            }, 100);
		        });
			} else if (jsonURL === "ajax/customMenu.json") {

				var startL4Row = "<div class='col s12 m12 l12 center custom-row'><div class='center full-width'>",
					startL4Column = "<div class='col s12 m4 l4 menu-button center' id='",
					startPath = "'><div class='path-selection'><a data-click='true' data-path='",
					startImg = "' href='#!'><img src='",
					finishImg = "'></a></div><div class='btn-placement-l4'><div class='btn keymaster'><a data-click='true' data-path='",
					finishTextData = "' href='#!'>",
					startPrice = "<br><h6>",
					finishColumn = "</h6></a></div></div></div>",
					currentMenu = [startL4Row];


	        	$.getJSON(jsonURL, function ( data ) {
	        		$.each(data, function(key, val) {
	        			customArray.push(new pastry(val.name, '', val.path, val.min, val.price));
	        			currentMenu.push(startL4Column + val.path + startPath + val.path + startImg + val.img + finishImg + val.path + finishTextData + val.name + startPrice + "$" + val.price + " each &mdash; " + "min " + val.min + finishColumn);
	        		});
			        currentMenu.push("</div></div>");
			        var conc = currentMenu.join("");
			        $( "<div/>", {
			            "class": "col s12 m12 l12 reset-padding",
			            "id": "custom-menu",
			            html: conc
			        }).appendTo( '*[data-activate="menu"]' );
			        setTimeout(function() {
			            $('.menu').css({'max-height':'20000px'});
			        }, 100);
	        	});

				//console.log("success");

			}
    }

/*
*********

Custom Tiers

*********
*/

	function tierBuilding(jsonURL) {
		$.getJSON(jsonURL, function ( data ) {
			var startForm = "<form id='",
				startForm02 = "' action='' class='custom-menu tiers'><fieldset>",
				startTitle = "<span class='type-desc'><h2 class='title'>",
				endDesc = "</p></span>",
				startLabel = "<label class='inactive'>",
				startLabel02 = "<input type='checkbox' name='",
				finishLabel = "'></label>",
				addButton = "<span class='tier-btn'><button class='btn next-btn'>Next <span class='fa fa-arrow-right'></span></button></span>",
				submitButton = "<span class='tier-btn'><button class='btn checkout'>Checkout</button></span>",
				finishForm = "</fieldset></form></div>",
				tierName,
				tierType,
				items = [startForm];

	        $.each(data, function(key, val) {
	        	if ((key === 'tier2') || (key === 'tier3') || (key === 'tier4')) {
	        		tierName = key;
	        		tierType = val.name;
	        		tier = val.name;
	        		items.push(key + startForm02 + startTitle + val.name + "</h2><p>" + val.desc + endDesc);
	        	} else if ((typeof val.price !== "undefined") && (val.tier === "3")) {
	        		items.push(startLabel + val.name + " +$" + val.price + startLabel02 + val.name + "' value='" + val.price + finishLabel);
	        	} else if ((typeof val.price !== "undefined") && (val.tier === "4")) {
	        		items.push(startLabel + val.name + " +$" + val.price + startLabel02 + val.name + "' value='" + val.price + finishLabel);
	        	} else {
	        		items.push(startLabel + val.name + startLabel02 + val.name + "' value='Base:" + val.name + finishLabel);
	        	}
	        });
	        if (tierName === 'tier3') {
	        	items.push(addButton + finishForm);
	        } else if (tierName === 'tier4') {
				items.push(submitButton + finishForm);
	        } else {
	        	items.push(finishForm);
	        }
	        var conc = items.join(""),
	        	idName = tierName + '-' + tierType;
	        	
			$( "<div/>", {
				"class": "col s12 m12 l12 center custom-row",
				"id": idName,
				html: conc
			}).appendTo( '#custom-menu' );
	    });
	}

/*
*********

Inject JSON data when current-menu is selected

PERFORMS NAV ANIMATIONS

*********
*/

	$(window).resize(function() {
		var windowSize = window.innerWidth;
		overlayPos(windowSize, '#discount', 'top');
		overlayPos(windowSize, '#mobile-cart', 'bottom');
	});

   	$('*[data-path="current"]').click(function() {
   		var checkYo = $("#current-menu").length; //To prevent this button from triggering the build of the same menu, make sure it's '0'
   		if (checkYo === 0) {
   			$('#menu').css({
   				'overflow':'hidden',
   				'max-height':'0px'
   			});
		   	setTimeout(function() {
		   		$('#menu-select-nav').css({'top':'60px'});
		   		setTimeout(function() {
		   			$('#discount').css({'display':'block'});
		   			$('#mobile-cart').css({'display':'block'});
		   			setTimeout(function() {
		   				var windowSize = window.innerWidth;
						overlayPos(windowSize, '#discount', 'top');
						overlayPos(windowSize, '#mobile-cart', 'bottom');
		   			}, 50);
		   		}, 500);
		   	}, 1000);
		   	$('#menu-select-nav').find('[data-path="current"]').addClass('active');
	   		setTimeout(function() {
		   		menuJSON('ajax/menu.json');
	   		}, 500);
	   	} else {
	   		return false;
	   	}
   		return false;
   	});

/*
*********

Inject JSON data when custom is selected

*********
*/

   	$('*[data-path="custom"]').click(function() {
   		var checkYo = $("#custom-menu").length; //To prevent this button from triggering the build of the same menu, make sure it's '0'
   		if (checkYo === 0) {
   			$('#menu').css({
   				'overflow':'hidden',
   				'max-height':'0px'
   			});
		   	setTimeout(function() {
		   		$('#menu-select-nav').css({'top':'60px'});
		   		setTimeout(function() {
		   			$('#discount').css({'display':'block'});
		   			$('#mobile-cart').css({'display':'block'});
		   			setTimeout(function() {
		   				var windowSize = window.innerWidth;
						overlayPos(windowSize, '#discount', 'top');
						overlayPos(windowSize, '#mobile-cart', 'bottom');
		   			}, 50);
		   		}, 500);
		   	}, 1000);
		   	$('#menu-select-nav').find('[data-path="custom"]').addClass('active');
	   		setTimeout(function() {
		   		menuJSON('ajax/customMenu.json');
	   		}, 500);
	   	} else {
	   		return false;
	   	}
   		return false;
   	});

/*
*********

When Custom Pastry's base is selected, perform the following

*********
*/

	$(document).on('click', '*[data-click="true"]', function() {
		var path = $(this).data('path'),
			iden = Math.random();

		iden = Math.round(iden * 1000000000);

		var vett = [];
		for(var key in customArray) {
			vett.push(customArray[key].type);
			if (path === customArray[key].type) {
				var price = parseFloat(customArray[key].price),
					min = parseFloat(customArray[key].min);

				orderArray.push(new order(customArray[key].name, iden, min, price, customArray[key].type, '', 'custom', 'open', min));
				orderTotal(orderArray);
				//console.log(orderArray);
			}
		}
		for(var b = 0; b < vett.length; b++) {
			if (vett[b] !== path) {
				var trans = $('#' + vett[b]);
				trans.children('.btn-placement-l4').addClass('btn-disappear');
				trans.css({'width':'0','height':'0'});
				trans.children('.path-selection').css({'padding':'0'});
			}
		}

		var passedURL = 'ajax/' + path + '.json';

		tierBuilding(passedURL);
		setTimeout(function() {
			$('.tiers').css({'max-height':'4000px'});
		}, 500);

		$('.btn-disappear').css({'height':'0'});
		$('#' + path).css({'width':'100%'});
		//console.log(orderArray);
		return false;
	});

/*
*********

Tier selection is made

*********
*/

	$(document).on('change', 'input[type="checkbox"]', function() {
		if ($(this).val()[0] === "B") { //When tier2 button is clicked
			var passedURL = 'ajax/tier3.json';

			//remove inactive class on this button then add active (background color won't replace otherwise)
			$(this).parent().removeClass('inactive');
			$(this).parent().addClass('active');

			//cycle through order array
			for(var i = 0; i < orderArray.length; i++) {

				//if there's a custom order (there will be) and if it's open (it should be)
				if ((orderArray[i].type === 'custom') && (orderArray[i].status === 'open')) {
					var addDesc = "\n base:",
						orgDesc = "type:";
					orgDesc += orderArray[i].desc;
					addDesc += $(this).val();
					orderArray[i].desc = orgDesc + addDesc;
				}
			}
			//run tierbuilding function with new tier
			tierBuilding(passedURL);
		} else {

			var price = parseFloat($(this).val()),
				name = $(this).attr('name'),
				tierSelection = $(this).closest('form').attr('id');// Tier comes across as 'tier' + number

			//Make button active/inactive
			if ($(this).parent().hasClass('inactive') === true) {
				$(this).parent().removeClass('inactive');
				$(this).parent().addClass('active');

				
				//cycle through order array
				for(var i = 0; i < orderArray.length; i++) {

					//if there's a custom order (there will be) and if it's open (it should be)
					if ((orderArray[i].type === 'custom') && (orderArray[i].status === 'open')) {
						
						//Add add-ons with a name, price, which tier it belongs to, and min-quantity group
						addOnArray.push(new addOns(name,price,tierSelection,orderArray[i].group));
						console.log(addOnArray);
					}
				}

			} else {
				$(this).parent().removeClass('active');
				$(this).parent().addClass('inactive');
				for (var i = 0; i < addOnArray.length; i++) {
					if (addOnArray[i].name === name) {
						addOnArray.splice(i,1);
						console.log(addOnArray);
					}
				}

			}
			orderTotal(orderArray);
			console.log(orderArray);

		}
		setTimeout(function() {
			$('.tiers').css({'max-height':'4000px'});
		}, 500);
	});

/*
*********

When user clicks on "Next"

*********
*/

	$(document).on('click', '.next-btn', function(event){
		event.preventDefault();
		location.href = "#tier2-Base";
		setTimeout(function(){
			$('#tier3').css({'max-height':'0px','opacity':'0'});
			setTimeout(function(){
				$('#tier3-Filling').empty();
				setTimeout(function(){
					tierBuilding(passedURL);//run tierbuilding function with new tier
					setTimeout(function() {
						$('.tiers').css({'max-height':'4000px'});
						return false;
					}, 500);
				}, 200);
			}, 200);
		}, 200);
		var passedURL = 'ajax/tier4.json';//Var hoisted
	});

/*
*********

Process "Add to Cart"

*********
*/

	$(document).on('submit', '.current-menu-item', function(event) {
		event.preventDefault();
		var priceSelect = $(this).find('input:radio[name=price]:checked').val(),
			priceSelectName = $(this).find('input:radio[name=price]:checked'),
			quantitySelect = $(this).find('input[name=quantity]').val(),
			quantitySelectName = $(this).find('input[name=quantity]'),
			orderItem = $(this).attr('id'),
			quantityTotal = 0,
			ord,
			thc;

		var	quantityID = quantitySelectName.attr('id');

		var orderID = quantityID + priceSelect;

		if ((typeof priceSelect === 'undefined') && (quantitySelect === '') || (typeof priceSelect === 'undefined') || (quantitySelect === '') || (quantitySelect === '0')) {
			alert("Sorry, but your input was not valid. Make sure both a quantity has been entered and a price has been selected.");
		} else {
			var quantityNumber = parseFloat(quantitySelect),
				priceNumber = parseFloat(priceSelect);
				quantityTotal += quantityNumber;
				shoppingCartTotal(quantityTotal);

			setTimeout(function() {
				quantitySelect = 0;
			}, 100);
				
			quantitySelect = 0;

				
				for(var k = 0; k < priceArray.length; k++) {
					if (priceSelect === priceArray[k].price) {
						thc = priceArray[k].thc;
					}
				}

				if (orderArray.length > 0) {
					for (var g = 0; g < orderArray.length; g++) {
						if ((orderArray[g].price === priceNumber) && (orderArray[g].name === orderItem)) {
							orderArray[g].quantity += quantityNumber;
							orderTotal(orderArray);
							return false;
						}
					}
				}
				for (var c = 0; c < pastryArray.length; c++) {
					if (orderItem === pastryArray[c].name) {
						orderArray.push(ord = new order(orderItem, orderID, quantityNumber, priceNumber, pastryArray[c].desc, thc));
						orderTotal(orderArray);

						return false;
					}
				}
		}
		return false;
	});

/*
*********

Change Order in Order Modal

*********
*/

	$(document).on('change', 'input[name=checkout-quantity]', function() {
		var item = $(this).data("order"),
			quantityUpdate = $(this).val();

		quantityUpdate = parseInt(quantityUpdate);

		//console.log("The total is before: " + total);

		for (var i = 0; i < orderArray.length; i++) {
			if (orderArray[i].id === item) {
				orderArray[i].quantity = quantityUpdate;
				orderTotal(orderArray);
			}
		}
	});

/*
*********

Process Order on Checkout click

*********
*/

	var orderGreeting = "<h4>Today's Order</h4><p>Review the following order to ensure it's correct.<br><em>Note: drivers check rec cards upon delivery.</em></p>",
		thankYouOrder = "<h4>Order Received!</h4><p>Thank you for placing an order with TigerLily Bakes! Our bakers will contact you shortly to schedule a delivery time.</p>",
		thankYouContact = "<h4>Message Received!</h4><p>Thank you for contacting us today! Someone will contact you shortly.</p>";

	$(document).on('click','.checkout', function() {
		var orderHTML = [],
			spanCheck = $('.final-order').children();

		$('#mobile-cart').css({'top':'100%'});

		setTimeout(function() {
			$('#mobile-cart').css({'display':'none'});
		}, 500);

		if (spanCheck.length > 0) {
			$('.final-order').empty();
		}
		
		$('.final-order').html(orderGreeting);
		var spanOpen = "<span id='",
			classOpen = "class='person-order'>",
			formOpen = "<form><fieldset><input type='number' value='",
			formMid = "' min='0' name='checkout-quantity' data-order='",
			formClose = "' /></fieldset></form></span>",
			totalSpan = "<span class='order-total'><h6>Delivery fee: $10 for orders under $50 (before tax)<br>California Tax: 8%</h6><h2>$ <span id='grandTotal'>",
			totalSpanClose = "</span></h2></span>";

		if (orderArray.length > 0) {
			for (var i = 0; i < orderArray.length; i++) {
				orderHTML.push(spanOpen + orderArray[i].id + "' " + classOpen + "<h6>" + orderArray[i].name + " </h6><h6><em>" + orderArray[i].thc + "</em></h6>" + formOpen + orderArray[i].quantity + formMid + orderArray[i].id + formClose);
			}
			orderHTML.push(totalSpan + totalSpanClose);
			var output = orderHTML.join("");
			
			$( "<div/>", {
				"id": "person-order",
				html: output
			}).appendTo( '.final-order' );
		}
		orderTotal(orderArray);
	});

/*
*********

Submit Order

*********
*/
	$(document).on('submit', '#person-info', function() {
		var form = $('#person-info'),
			name = $('#person-info input[name=name]').val(),
			address = $('#person-info input[name=address]').val(),
			phone = $('#person-info input[name=phone]').val(),
			email = $('#person-info input[name=email]').val(),
			messageForm = $('#person-info input[name=email]'),
			message = [],
			output = "<input type='hidden' name='message' id='place-order-message' value='";

		for(var i = 0; i < orderArray.length; i++) {
			message.push(orderPush(orderArray[i]));
		}
		message = message.join("");
		messageForm.value = message;
		output += message;
		output += "' />";
		$( "<span/>", {
			html: output
		}).appendTo( '.order-form' );
		return true;
	});
	$(document).on('submit', '#contact-message', function() {
		return true;
	});

/*
*********

Animated movement click function called below

*********
*/

    $('.nav-trigger').click(function() {
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


/*
*********

Thanks click event

*********
*/

		$('.thanks').click(function() {
			var orderHTML = [],
				spanCheck = $('.final-order').children();

			if (spanCheck.length > 0) {
				$('.final-order').empty();
			}
			$('.final-order').html(thankYouOrder);
		});

/*
*********

Check URL

*********
*/
	
	if ((checkURL === "http://www.tigerlilybakes.com/thank-you.php") || (checkURL === "http://www.tigerlilybakes.com/thanks.php")) {
		setTimeout(function() {
			window.location.href = "http://www.tigerlilybakes.com";
		}, 5000);
	}

/*
*********

Remove Load Screen

*********
*/

	$(document).ready(function() {
		$('.loading').css({'opacity':'0'});
		setTimeout(function() {
			$('.loading').css({'display':'none'});
		}, 2000);
	});


}
window.onload = init;
