function init(){function t(t,e){s+=t*e}function e(e){s=0,c=0;for(var i=0;i<e.length;i++)console.log(e[i]),t(e[i].price,e[i].quantity),c+=e[i].quantity;setTimeout(function(){o(c)},500)}function i(t,e,i){this.name=t,this.desc=e,this.type=i}function n(t,e){this.price=t,this.thc=e}function a(t,e,i,n,a,o){this.name=t,this.id=e,this.quantity=i,this.price=n,this.desc=a,this.thc=o}function o(t){var e=$(".quantity").css("opacity");"0"===e&&0!==t?$(".quantity").css({opacity:"1"}):0===t&&$(".quantity").css({opacity:"0"}),$("#cart-contents").html(t)}function r(t){var e="<div class='col s12 m6 l6'><div class='path-selection right'><img src='img/menu-hero.jpg'></div></div>",a="<div id='current-selection' class='col s12 m6 l6 menu-list'>",o="<div class='menu-item'><div class='left'>",r="<div class='right form-set'><form id='",s="<fieldset>",c="<span class='quantity-selection'><label>Quantity</label><input type='number' value='0' min='0' name='quantity'",h=" id='",d="<input class='btn order' type='submit' value='Add to Cart' id='send",p="'></span></fieldset></form></div></div>",m=[e,a];if("ajax/menu.json"===t){var f=[],v=[];$.getJSON("ajax/muffinPrice.json",function(t){$.each(t,function(t,e){l.push(t=new n(e.price,e.thc)),f.push("<input type='radio' name='price' id='"+e.price+"' value='"+e.price+"' /><label>$"+e.price+" per 4 &mdash; "+e.thc+"</label><br>")})}),$.getJSON("ajax/cookiePrice.json",function(t){$.each(t,function(t,e){v.push("<input type='radio' name='price' id='"+e.price+"' value='"+e.price+"' /><label>$"+e.price+" per 8 &mdash; "+e.thc+"</label><br>")})}),$.getJSON(t,function(t){var e=0;$.each(t,function(t,n){if(e++,m.push(o+"<h2>"+n.name+"</h2><p>"+n.description+"</p></div>"+r+n.name+"'>"+s+"<span class='price-list'>"),"muffin"===n.type)for(var a=0;a<f.length;a++)m.push(f[a]);else if("cookie"===n.type)for(var l=0;l<v.length;l++)m.push(v[l]);m.push("</span>"+c+h+n.quantityName+"'>"+d+p),u.push(objName=new i(n.name,n.description,n.type))}),m.push("</div>");var n=m.join("");$("<div/>",{"class":"col s12 m12 l12 reset-padding",id:"current-menu",html:n}).appendTo('*[data-activate="menu"]'),setTimeout(function(){$("#current-menu").css({"max-height":"580px"})},50)})}}var s=0,c=0,u=[],l=[],h=[];$(".nav-trigger").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);return t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length&&$("html,body").animate({scrollTop:t.offset().top-80},500),!1}}),$('*[data-path="current"]').click(function(){return r("ajax/menu.json"),setTimeout(function(){$(".menu-button").css({opacity:"0","max-height":"0px"})},50),!1}),$('*[data-path="custom"]').click(function(){return r("ajax/customMenu.json"),!1}),$(document).on("submit","form",function(e){e.preventDefault();var i,n,r=$(this).find("input:radio[name=price]:checked").val(),s=($(this).find("input:radio[name=price]:checked"),$(this).find("input[name=quantity]").val()),d=$(this).find("input[name=quantity]"),p=$(this).attr("id"),m=d.attr("id"),f=m+r;if("undefined"==typeof r&&""===s||"undefined"==typeof r||""===s||"0"===s)alert("Sorry, but your input was not valid. Make sure both a quantity has been entered and a price has been selected.");else{var v=parseInt(s),y=parseInt(r);c+=v,o(c),s=0;for(var g=0;g<l.length;g++)r===l[g].price&&(n=l[g].thc);if(h.length>0)for(var b=0;b<h.length;b++)if(h[b].price===y&&h[b].name===p)return h[b].quantity+=v,t(h[b].price,v),v=0,!1;for(var q=0;q<u.length;q++)if(p===u[q].name)return t(y,v),h.push(i=new a(p,f,v,y,u[q].desc,n)),v=0,!1}return!1}),$(document).on("change","input[name=checkout-quantity]",function(){var t=$(this).data("order"),i=1,n=$(this).val();console.log("The total is before: "+s);for(var a=0;a<h.length;a++)h[a].id===t&&(h[a].quantity>n?(console.log("quantity is less than the order's quantity"),h[a].quantity-=i,e(h),console.log("The total is after (sub): "+s)):h[a].quantity<n&&(console.log("quantity is more than the order's quantity"),h[a].quantity+=i,e(h),console.log("The total is after (add): "+s)))});var d="<h4>Today's Order</h4><p>Review the following order to ensure it's correct.<br><em>Note: drivers check rec cards upon delivery.</em></p>";$(".checkout").click(function(){var t=[],e=$(".final-order").children();e.length>0&&$(".final-order").empty(),$(".final-order").html(d);var i="<span id='",n="class='person-order'>",a="<form><fieldset><input type='number' value='",o="' min='0' name='checkout-quantity' data-order='",r="' /></fieldset></form></span>";if(h.length>0){for(var s=0;s<h.length;s++)t.push(i+h[s].id+"' "+n+"<h6>"+h[s].name+" </h6><h6><em>"+h[s].thc+"</em></h6>"+a+h[s].quantity+o+h[s].id+r);var c=t.join("");$("<div/>",{id:"person-order",html:c}).appendTo(".final-order")}}),$(".button-collapse").sideNav({closeOnClick:!0}),$(".checkout").leanModal({dismissible:!0,opacity:.5,in_duration:300,out_duration:200})}window.onload=init;