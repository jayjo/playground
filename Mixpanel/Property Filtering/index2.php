<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>

	<title>Page Title</title>

	<link rel="stylesheet" href="style.css" type="text/css" media="screen" charset="utf-8" />
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

	<div id="pagewrap" class="twotime">
		<div class="widget">
			<header>
				<p>Customers match <span class="dropdown">All<span class="arrow"></span></span> of the following events or people properties:</p>
			</header>
			<div class="content">
				<div class="rows">
					<?php include "row.php"; ?>
				</div>
				<div class="add_row">+</div>
			</div>
		</div>
		<div class="row_template">
			<?php include "row_template.php"; ?>
		</div>
	</div>

</body>
</html>