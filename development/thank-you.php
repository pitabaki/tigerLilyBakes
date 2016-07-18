<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="description" content="1Ingress Website">
	<title>TigerLily Bakes</title>
	<link rel="shortcut icon" type="image/x-icon" href="img/favicon.png" sizes="16x16" />
	<link rel="icon" type="image/x-icon" href="img/favicon.png" sizes="16x16" />
	<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400italic,600,700' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">

	<!-- build:css -->
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/materialize.css">
	<link rel="stylesheet" href="css/style.css">
	<!-- endbuild -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
	<script src="https://use.fontawesome.com/b86bedf405.js"></script>

</head>
<body style="overflow: hidden; width: 1200px;">

<!-- Header/NAV 

remains the same through all HTML files 

-->
	<header>
		<nav>
			<div class="nav-wrapper container">
				<a href="http://www.tigerlilybakes.com" class="brand-logo nav-trigger"><img src="img/tigerlily_buffalo_logo.png" alt=""></a>
				<a class="btn btn-primary button-collapse" data-activates="mobile-demo" href="#navigation-main">
					<i class="fa fa-bars" aria-hidden="true" title="Skip to main navigation"></i>
					<span class="sr-only">Skip to main navigation</span>
				</a>
				<!--<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>-->
				<ul class="right hide-on-med-and-down">
					<li><a class="nav-trigger" href="#home">Home</a></li>
					<li><a class="nav-trigger" href="#mission">Mission</a></li>
					<li><a class="nav-trigger" href="#menu">Menu</a></li>
					<li><a class="nav-trigger" href="#contact">Contact</a></li>
					<li><a href="https://www.facebook.com/tigerlilybakesofsd/"><i class="fa fa-facebook"></i></a></li>
					<li><a href="https://twitter.com/TigerLilyBaked"><i class="fa fa-twitter"></i></a></li>
					<li><a class="checkout" href="#checkout"><i class="fa fa-shopping-basket"></i><span id="cart-contents" class="quantity">4</span></a></li>
				</ul>
				<ul class="side-nav" id="mobile-demo">
					<li><a class="nav-trigger" href="#home">Home</a></li>
					<li><a class="nav-trigger" href="#mission">Mission</a></li>
					<li><a class="nav-trigger" href="#menu">Menu</a></li>
					<li><a class="nav-trigger" href="#contact">Contact</a></li>
					<li><a href="https://www.facebook.com/tigerlilybakesofsd/"><i class="fa fa-facebook"></i></a></li>
					<li><a href="https://twitter.com/TigerLilyBaked"><i class="fa fa-twitter"></i></a></li>
					<li><a class="checkout" href="#checkout"><i class="fa fa-shopping-basket"></i></a></li>
				</ul>
			</div>
		</nav>
		<div id="home" class="header-img">
			<div class="head-foreground">
				<img src="img/tigerlilybakes-text-logo.png" alt="TigerLily Bakes Logo">
			</div>
			<div class="head-background">
				<img src="img/header-img.jpg" alt="Table in a Bakery">
			</div>
		</div>
	</header>
	<nav id="menu-select-nav" class="row">
		<div class="col s12 m12 l12 center menu-drop">
			<div class="row">
				<div class="col s12 m6 l6 right-button">
					<button class="active" data-path="current">Choose From Our Menu</button>
				</div>
				<div class="col s12 m6 l6 left-button">
					<button class="inactive" data-path="custom">Custom Bakes Coming Soon</button>
				</div>
			</div>
		</div>
	</nav>
	<ul class="hide">
		<li><a class="thanks" href="#thanks"><i class="fa fa-shopping-basket"></i></a></li>
	</ul>
	<section id="mission" class="row">
		<div class="col s12 m12 l12">
			<h1>Mission Statement</h1>
			<div class="row">
				<div class="col s12 m8 l6 center">
					<p class="top-border">TigerLily Bakes is made up of a team of perfectionists &mdash; each person involved has put in countless hours of work towards perfecting our product. We hope to see our company grow and blossom, all the while fulfilling the needs of as many medicinal marijuana users as possible.</p>
				</div>
			</div>
		</div>
	</section>

	<section id="menu" class="row">
		<div class="col s12 m12 l6 l6-left menu-button">
			<div class="path-selection right">
				<a data-path="current" href="#!">
					<img src="img/product-trigger.jpg">
				</a>
			</div>
			<div class="btn-placement">
				<div class="btn keymaster">
					<a data-path="current" href="#!">Choose from our menu</a>
				</div>
			</div>
		</div>
		<div class="col s12 m12 l6 l6-right menu-button">
			<div class="path-selection left">
				<a data-path="custom" href="#!">
					<img src="img/custom-trigger-disabled.jpg">
				</a>
			</div>
			<div class="btn-placement">
				<div class="btn keymaster inactive">
					<a data-path="custom" href="#!"><!--Create your own bakes-->Custom Bakes Coming Soon</a>
				</div>
			</div>
		</div>
	</section>

	<section data-activate="menu" class="row menu">
		<!--
		<div class="col s12 m12 l12 reset-padding">


			<div class="col s12 m6 l6">
				<div class="path-selection right">
					<img src="img/menu-hero.jpg">
				</div>
			</div>


			<div id="current-selection" class="col s12 m6 l6 menu-list">
				<div class="menu-item">
					<div class="left">
						<h2>Red Velvet Cupcakes</h2>
						<p>Classic southern style cupcakes. The BEST red velvet cupcakes &mdash; a gorgeous red color, moist and fluffy, and topped with luscious cream cheese frosting.</p>
						<h6><em>$4.99 each &mdash; 40mg/thc</em></h6>
					</div>
					<div class="right">
						<form onsubmit="return mySubmitFunction()">
							<fieldset>
								<label>Quantity</label><input type="number" value="number" id="red" name="red">
								<input id="send" type="submit" value="Submit" class="btn">
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>-->

		<!--
		<div class="col s12 m12 l12 reset-padding">

			<div class="col s12 m4 l4 menu-button">
				<div class="btn-placement-l4">
					<div class="btn keymaster">
						<a data-path="cupcakes" href="#current-selection">cupcakes</a>
					</div>
				</div>
				<div class="path-selection right">
					<a data-path="cupcakes" href="#current-selection">
						<img src="img/cupcake-trigger.jpg">
					</a>
				</div>
			</div>
			<div class="col s12 m4 l4 menu-button">
				<div class="btn-placement-l4">
					<div class="btn keymaster">
						<a data-path="chocolate" href="#current-selection">chocolate</a>
					</div>
				</div>
				<div class="path-selection right">
					<a data-path="chocolate" href="#current-selection">
						<img src="img/chocolate-trigger.jpg">
					</a>
				</div>
			</div>
			<div class="col s12 m4 l4 menu-button">
				<div class="btn-placement-l4">
					<div class="btn keymaster">
						<a data-path="cookies" href="#!">cookies</a>
					</div>
				</div>
				<div class="path-selection left">
					<a data-path="cookies" href="#!">
						<img src="img/cookie-trigger.jpg">
					</a>
				</div>
			</div>
			<div class="col s12 m12 l12">
						<form action="" class="custom-menu">
							<fieldset>
								<label>Chocolate<input type="checkbox" name="chocolate-cupcake"></label>
								<label>Red Velvet<input type="checkbox" name="red-velvet-cupcake"></label>
								<label>Butter<input type="checkbox" name="butter-cupcake"></label>
								<button class="btn">Add to Cart</button>
							</fieldset>
						</form>
				</div>
				
			</div> -->

<!--
			<div class="col s12 m6 l6">
				<div class="path-selection right">
					<img src="img/menu-hero.jpg">
				</div>
			</div>


			<div id="current-selection" class="col s12 m6 l6 menu-list">
				<div class="menu-item">
					<div class="left">
						<h2>Red Velvet Cupcakes</h2>
						<p>Classic southern style cupcakes. The BEST red velvet cupcakes &mdash; a gorgeous red color, moist and fluffy, and topped with luscious cream cheese frosting.</p>
						<h6><em>$4.99 each &mdash; 40mg/thc</em></h6>
					</div>
					<div class="right">
						<form action="">
							<fieldset>
								<label>Quantity</label><input type="number" value="number" name="red-quantity">
								<button class="btn">Add to Cart</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>-->

	</section>

	<section id="thank-you">
		<div id="thanks" class="modal open" style="z-index: 1003; display: block; opacity: 1; transform: scaleX(1); top: 10%;">
			<div class="modal-content final-order">
				<h1>Order Received!</h1>
				<p>Thank you for placing an order with TigerLily Bakes! Our bakers will contact you shortly to schedule a delivery time.<br><br><em>Page redirecting...</em></p>
			</div>
		</div>
	</section>

<!-- end Header/NAV -->

	<footer id="site-map" class="row">
		<div class="container">
			<div class="col s12 m12 l12">
				<h6>Designed, developed, and published with love by <a href="https://github.com/pitabaki" target="_blank">KumaDev</a><br>TigerLilyBakes &copy; <? 
						date_default_timezone_set('America/Los_Angeles');
						$current_year = date("Y");
						echo $current_year; 
				?></h6>
			</div>
		</div>
	</footer>

	<div class="lean-overlay" id="materialize-lean-overlay-4" style="z-index: 1002; display: block; opacity: 0.5;"></div>
	<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
	<script type="text/javascript" src="js/scripty-min.js"></script>

<!-- End Footer -->

</body>
</html>