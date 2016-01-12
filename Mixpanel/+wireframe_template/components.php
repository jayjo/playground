<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>

	<title>Components</title>

	<link rel="stylesheet" href="assets/css/global.css" type="text/css" media="screen" charset="utf-8" />

	<script type="text/javascript" src="http://www.google.com/jsapi"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

	<script type="text/javascript" src="assets/js/jquery.easing.1.3.js"></script>
	<script type="text/javascript" src="assets/js/jquery.cycle.all.js"></script>

	<script type="text/javascript" src="assets/js/global.js"></script>

</head>
<body>

</head>
<body>

	<div class="wrapper">

		<section class="text">
			<section class="component">
				<header>
					<p>Text</p>
				</header>
				<div class="body">
					<p>I'm a paragraph</p>
					<p><b>I'm a bolded paragraph</b></p>
					<p><i>I'm an italicized paragraph</i></p>
					<h1>I'm a H1</h1>
					<h2>I'm a H2</h2>
					<h3>I'm a H3</h3>
					<h4>I'm a H4</h4>
					<h5>I'm a H5</h5>
					<h6>I'm a H6</h6>
					<p>This is some text <a href="#">with a link</a></p>
					<code>I'm a code chunk: Lorem ipsum dolor sit amet, <span>consectetur adipisicing elit. Possimus quod sed tempore</span> consectetur dolorum culpa ullam saepe voluptatibus cupiditate placeat?</code>
				</div>
			</section>
		</section>

		<section class="drops">
			<section class="component">
				<header>
					<p>Drops</p>
				</header>
				<div class="body">
					<div class="drop dark">
						<div class="droptext">Dark drop down</div>
						<div class="list">
							<a href="#">Lorem ipsum dolor.</a>
							<a href="#">Unde, veritatis magni.</a>
							<a href="#">Possimus, molestias, quo.</a>
							<a href="#">Accusantium, perspiciatis molestias.</a>
						</div>
					</div>

					<div class="drop light">
						<div class="droptext">Light drop down</div>
						<div class="list">
							<a href="#">Lorem ipsum dolor.</a>
							<a href="#">Unde, veritatis magni.</a>
							<a href="#">Possimus, molestias, quo.</a>
							<a href="#">Accusantium, perspiciatis molestias.</a>
						</div>
					</div>

					<div class="drop nobounds dark">
						<div class="droptext">Dark drop down no bounds</div>
						<div class="list">
							<a href="#">Lorem ipsum dolor.</a>
							<a href="#">Unde, veritatis magni.</a>
							<a href="#">Possimus, molestias, quo.</a>
							<a href="#">Accusantium, perspiciatis molestias.</a>
						</div>
					</div>

					<div class="drop nobounds light">
						<div class="droptext">Light drop down no bounds</div>
						<div class="list">
							<a href="#">Lorem ipsum dolor.</a>
							<a href="#">Unde, veritatis magni.</a>
							<a href="#">Possimus, molestias, quo.</a>
							<a href="#">Accusantium, perspiciatis molestias.</a>
						</div>
					</div>
				</div>
			</section>
		</section>

		<section class="buttons">
			<section class="component">
				<header>
					<p>Buttons and Inputs</p>
				</header>
				<div class="body">
					<button class="primary">Primary Button</button>
					<button class="primary icon before">Primary Button Icon Before</button>
					<button class="primary icon after">Primary Button Icon After</button>
					<button class="secondary">Secondary Button</button>
					<button class="secondary icon before">Secondary Button Before</button>
					<button class="secondary icon after">Secondary Button After</button>
				</div>
			</section>
		</section>

		<section class="tipsandmodals">
			<section class="component">
				<header>
					<p>Tool Tips and Modals</p>
				</header>
				<div class="body">
					<div class="tip">
						<h2>This is a tip headline</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aspernatur possimus voluptate recusandae beatae maiores?</p>
					</div>
					<div class="modal onebutton center">
						<h2>I'm a sweet modal</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, minima eius laudantium nemo totam voluptas nesciunt dolores impedit rem praesentium.</p>
						<button class="primary">Button</button>
						<a href="#" class="skip">Skip</a>
					</div>
					<div class="modal twobutton center">
						<h2>I'm a sweet modal with a skip to close</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, minima eius laudantium nemo totam voluptas nesciunt dolores impedit rem praesentium.</p>
						<div class="buttongroup">
							<button class="secondary">Button One</button>
							<button class="primary">Button Two</button>
						</div>
						<a href="#" class="skip">Skip</a>
					</div>
					<div class="modal twobutton center x">
						<h2>I'm a sweet modal with an X to close</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, minima eius laudantium nemo totam voluptas nesciunt dolores impedit rem praesentium.</p>
						<div class="buttongroup">
							<button class="secondary">Button One</button>
							<button class="primary">Button Two</button>
						</div>
						<a href="#" class="x"></a>
					</div>
					<div class="overlay" style="width: 200px; height: 200px;"></div>
				</div>
			</section>
		</section>

	</div>

</body>
</html>