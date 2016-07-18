<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="description" content="TigerLily Bakes provides edibles for a growing population of Medical Marijuana users. With our ability to make custom edibles, every medical marijuana patient can enjoy a treat specifically baked for them in mind. Baked goods are our product; helping others is our passion. Our bakery can support an excessive influx of orders, so rest assured all orders will be fulfilled in a timely manner.">
	<meta name="robots" content="index/follow">
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
<body>

<!-- Header/NAV 

remains the same through all HTML files 

-->
	<section class="loading">
		<div class="progress">
			<div class="indeterminate"></div>
		</div>
	</section>
	<header>
		<nav id="top-nav">
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
					<li><a class="checkout" href="#checkout"><i class="fa fa-shopping-basket"></i><span class="quantity cart-amount">4</span></a></li>
				</ul>
				<ul class="side-nav" id="mobile-demo">
					<li><a class="nav-trigger" href="#home">Home</a></li>
					<li><a class="nav-trigger" href="#mission">Mission</a></li>
					<li><a class="nav-trigger" href="#menu">Menu</a></li>
					<li><a class="nav-trigger" href="#contact">Contact</a></li>
					<li><a href="https://www.facebook.com/tigerlilybakesofsd/"><i class="fa fa-facebook"></i></a></li>
					<li><a href="https://twitter.com/TigerLilyBaked"><i class="fa fa-twitter"></i></a></li>
					<li><a class="checkout" href="#checkout"><i class="fa fa-shopping-basket"></i><span class="quantity cart-amount">4</span></a></li>
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
					<button data-path="current">Choose From Our Menu</button>
				</div>
				<div class="col s12 m6 l6 left-button">
					<button data-path="custom">Create Your Own</button>
				</div>
			</div>
		</div>
	</nav>

	<nav id="discount" class="row discount">
		<div class="col s12 m12 l12 center"><h5>Orders of over $50 will receive free shipping!</h5></div>
	</nav>

	<section id="mission" class="row">
		<div class="col s12 m12 l12">
			<h1>Mission Statement</h1>
			<div class="row">
				<div class="col s12 m8 l6 center">
					<p class="top-border">TigerLily Bakes is made up of a team of perfectionists &mdash; each person involved has put in countless hours of work towards perfecting our edibles. We hope to see our company grow and blossom, all the while fulfilling the needs of as many medicinal marijuana users as possible.</p>
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
				<button class="btn keymaster" data-path="current">Choose from our menu</button>
			</div>
		</div>
		<div class="col s12 m12 l6 l6-right menu-button">
			<div class="path-selection left">
				<a data-path="custom" href="#!">
					<img src="img/custom-trigger.jpg">
				</a>
			</div>
			<div class="btn-placement">
				<button class="btn keymaster" data-path="custom">Create Your Own</button>
			</div>
		</div>
	</section>

	<section data-activate="menu" class="row menu">
	</section>

	<section id="shopping-cart">
		<div id="checkout" class="modal">
			<div class="modal-content final-order">
				<h4>Today's Order</h4>
				<p>Review the following order to ensure it's correct.<br><em>Note: drivers check rec cards upon delivery.</em></p>
				<span id="person-order">
					<span id="someProduct" class="person-order">
						<h6>Red Velvet Cupcake</h6>
						<h6><em>40mg</em></h6>
						<form>
							<fieldset>
								<input type="number" value="10" min="0" name="quantity" />
							</fieldset>
						</form>
					</span>
					<span id="someProduct" class="person-order">
						<h6>Red Velvet Cupcake</h6>
						<h6><em>40mg</em></h6>
						<form>
							<fieldset>
								<input type="number" value="10" min="0" name="quantity" />
							</fieldset>
						</form>
					</span>
				</span>
			</div>
			<div class="modal-content">
					<form id="person-info" action="order-to-email.php" method="post" class="person-info">
						<fieldset>
							<span class="person-order">
								<h5><em>Please fill out the following form to place your order:</em></h5>
								<span class="order-form">
									<input type='text' name='name' placeholder='Your name ex: Marty McFly' required />
									<input type='text' name='email' placeholder='Your email ex: dbrown@timetraveler.com' required />
									<input type='text' name='address' placeholder='Your delivery address ex: 7544 Girard Ave, La Jolla, CA 92037' required />
									<input type='text' name='phone' placeholder='Your phone number ex: 714 651-5528' required />
									<input type='hidden' name='message' id="place-order-message" value="message" />
								</span>
							</span>
								<input id="placeOrder" class="modal-action btn cart-checkout" type="submit" name="submit" value="submit" />
								<button class="modal-action modal-close btn cart-checkout btn-back" value="back">Back</button> 
						</fieldset>
					</form>
			</div> 
		</div>
	</section>

	<section id="contact" class="row">
		<div class="col s12 m8 l8 center contact-form-container">
			<h1>Contact Us!</h1>
			<div class="row">
				<div class="col s12 m8 l8 center">
					<p class="top-border">Questions? Concerns? Comments?<br>If you have the time, we'd love to hear from you!</p>
				</div>
			</div>
			<form id="contact-message" action="form-to-email.php" method="post" class="contact-form-form">
				<fieldset>
					<span class="contact-message">
						<h6><em>Please fill out the following form:</em></h6>
						<span class="contact-form-info">
							<input type='text' name='name' placeholder='Your name ex: Marty McFly' required />
							<input type='text' name='email' placeholder='Your email ex: dbrown@timetraveler.com' required />
							<textarea name='message' rows="10" cols="50" placeholder="Let us know what you think." required></textarea>
						</span>
					</span>
					<input id="placeOrder" class="modal-action btn cart-checkout" type="submit" name="submit" value="submit" />
				</fieldset>
			</form>
		</div>	
	</section>

	<section id="mobile-cart" class="row mobile-cart">
		<div class="col s12 m12 l12">
			<h6>Your order's total: $<span id="grandTotal">0</span></h6>
			<button class="btn"><a class="checkout" href="#checkout">Checkout</a></button>
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
	<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
	<script type="text/javascript" src="js/scripty-min.js"></script>

<!-- End Footer -->

</body>
</html>