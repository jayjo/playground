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

	<script type="text/javascript" src="assets/js/global2.js"></script>

</head>
<body>

</head>
<body>

	<div class="wrapper">
		<header id="main">
			<div class="drop dark nobounds account">
				<div class="droptext">Jeffrey Jorgensen</div>
				<div class="list">
					<a href="#">Sign Out</a>
				</div>
			</div>
			<nav class="helpers">
				<a href="#">Account</a>
				<a href="#">Help Center</a>
				<a href="#">Email Support</a>
			</nav>
			<div class="drop dark project fwidth">
				<div class="droptext">Mixpanel</div>
				<div class="list">
					<a href="#">Mixpanel</a>
					<a href="#">Segmentation</a>
					<a href="#">Funnels</a>
					<a href="#">Retention</a>
					<a href="#">Marco Polo</a>
				</div>
			</div>
		</header>
		<div class="content">
			<div class="pane left sidebar">
				<h4>Engagement</h4>
				<ul>
					<li><a href="#">Segmentation</a></li>
					<li><a href="#">Funnels</a></li>
					<li><a href="#">Retention</a></li>
					<li><a href="#">Formulas</a></li>
					<li><a href="#">Live view</a></li>
					<li><a href="#">Bookmarks</a></li>
					<li><a href="#">A/B Testing</a></li>
				</ul>
				<h4>People</h4>
				<ul>
					<li><a href="#">Explore</a></li>
					<li><a href="#">Insight</a></li>
					<li><a href="#">Notifications</a></li>
					<li><a href="#">Surveys</a></li>
					<li><a href="#">Revenue</a></li>
				</ul>
				<a href="#" class="apps">
					Applications
				</a>
			</div>
			<div class="pane right reportarea">
				<div class="component consolearea">
					<header>
						<div class="drop light examples fwidth">
							<div class="droptext">Examples</div>
							<div class="list">
								<a href="#">Getting started</a>
								<a href="#">Segmentation</a>
								<a href="#">Simple groupBy</a>
								<a href="#">Top email performers</a>
								<a href="#">Max pixels</a>
								<a href="#">Exception in transformation</a>
								<a href="#">Flow</a>
								<a href="#">Your top events</a>
							</div>
						</div>
						<button class="primary docs">Docs</button>
						<button class="primary new">+ New</button>
						<h2>Untitled Query 1 <span>(click to edit)</span></h2>
					</header>
					<div class="body">
						<div class="queryconsole">
							<div class="linenumbers">
								<code>
									<ul>
										<li>1</li>
										<li>2</li>
										<li>3</li>
										<li>4</li>
										<li>5</li>
										<li>6</li>
										<li>7</li>
										<li>8</li>
										<li>9</li>
										<li>10</li>
									</ul>
								</code>
							</div>
							<div class="console" contenteditable="true">
								<code>
									<highlight class="one">function main() {</highlight>
										<tab></tab><span>// Take all events in the given date range.</span>
										<tab></tab><highlight class="two">return Events({</highlight><br />
  									<tab></tab><tab></tab><highlight class="two">from_date: “2015-11-12”</highlight>,<br />
  									<tab></tab><tab></tab><highlight class="two">to_date: “2015-12-11”</highlight>,<br />
										<tab></tab><highlight class="two">})</highlight><br/>
										<transform class="filterfunction"><tab></tab><highlight class="four">.filter</highlight>(<added>function(e) { return e.name == "<highlight class="four edit">YourEvent</highlight>" }</added>)</transform>
										<transform class="groupbyfunction"><tab></tab><highlight class="five">.groupBy</highlight>(<added>["properties.<highlight class="five">$referrer</highlight>"], mixpanel.reducer.count()</added>)</transform>
										<transform class="reducefunction"><tab></tab><highlight class="six">.reduce</highlight>(<added>mixpanel.reducer.top(<highlight class="six">2</highlight></added>))</transform>
									<highlight class="one">}</highlight>
  							</code>
							</div>
							<div class="pulse one"></div>
							<div class="tip one fixed">
								<h2>Custom queries must satisfy two requirements:</h2>
								<p>1. They must define a <code>main()</code> function.</p>
							</div>
							<div class="pulse two"></div>
							<div class="tip two fixed">
								<p>2. The  <code>main() </code>function must call the <code>Events() </code>function which must contain a <code>from_date</code> and <code>to_date</code>.</p>
								<p><b>This gives you the events collection, the basis for all queries.</b></p>
							</div>
							<div class="pulse four"></div>
							<div class="tip three v2 fixed">
								<h2>The base query</h2>
								<p>Running the query above will return all events in the given date range, the simplest query you can run. <br/><br/>Try it, run the query!</p>
							</div>
							<div class="pulse five"></div>
							<div class="tip four fixed">
								<h2>The filter() function</h2>
								<p>Filter the collection by calling the provided function on each of its elements. If the function evaluates to true, keep the element. Otherwise, discard it. <br/><br/>Enter an event and run the query.</p>
							</div>
							<div class="pulse six"></div>
							<div class="tip five fixed">
								<h2>The groupBy() function</h2>
								<p>Group the collection according to the provided list of keys, then apply the provided function to each group.<br/><br/>In this case, group the event by referring URL.</p>
							</div>
							<div class="pulse seven"></div>
							<div class="tip six fixed">
								<h2>The reduce() function</h2>
								<p>Run a reduce step against the collection, to reduce the collection to a single value.<br/><br/>Here we're getting the top two events. Go ahead, run the query.</p>
							</div>
						</div>
					</div>
					<footer class="flexy">
						<div class="leftbtn inactive">Run Query</div>
						<div class="rightbtn inactive">Save & Run Query</div>
					</footer>
					<div class="buttongroup options">
						<button class="secondary another">Try another transform</button>
						<button class="secondary myown">Build your own query</button>
					</div>
				</div>
				<div class="component tablearea">
					<div class="loader line"></div>
					<header>
						<button class="primary export">Export <span>CSV</span></button>
						<nav class="pills">
							<a href="#" class="table current">Table</a>
							<a href="#" class="json">Raw (JSON)</a>
						</nav>
					</header>
					<div class="body padded">
						<p class="error">You haven't run any queries yet.</p>
						<table cellpadding="0" cellspacing="0" class="one">
							<thead>
								<tr>
									<th>Event</th>
									<th>Date</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Viewed Report</td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td>Clicked a Button</td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td>Chased a Cat</td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td>Viewed Report</td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td>Talked to God</td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td>Viewed Report</td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td>Spent a fortune</td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td>Walked to the mall</td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td>Viewed Report</td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td>Chased a Cat</td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td>Viewed Report</td>
									<td>01-14-16</td>
								</tr>
							</tbody>
						</table>
						<table cellpadding="0" cellspacing="0" class="two">
							<thead>
								<tr>
									<th>Event</th>
									<th>Date</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td></td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td></td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td></td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td></td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td></td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td></td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td></td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td></td>
									<td>01-14-16</td>
								</tr>
							</tbody>
						</table>
						<table cellpadding="0" cellspacing="0" class="three">
							<thead>
								<tr>
									<th>key.0</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>null</td>
									<td>2</td>
								</tr>
								<tr>
									<td>http://sachagreif.com/analytics-showdown-kissmetrics-vs-mixpanel/</td>
									<td>1</td>
								</tr>
								<tr>
									<td>https://mixpanel.com/people/</td>
									<td>3</td>
								</tr>
								<tr>
									<td>https://www.google.ru/</td>
									<td>1</td>
								</tr>
							</tbody>
						</table>
						<table cellpadding="0" cellspacing="0" class="four">
							<thead>
								<tr>
									<th>key.0</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>https://mixpanel.com/people/</td>
									<td>3</td>
								</tr>
								<tr>
									<td>null</td>
									<td>2</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div class="overlay open"></div>
		<div class="modal onebutton center fixed introduction open">
			<h2>Welcome to the Custom Query Console.</h2>
			<p>Custom query is a query language written in JavaScript. It allows you to write complex questions to analyze your data in ways the traditional Mixpanel API won’t let you.<br><br>Let's build a query showing us an event by referrer.</p>
			<button class="primary">Get Started</button>
			<a href="#" class="skip">Skip</a>
		</div>
		<div class="modal onebutton center fixed success">
			<h2>Nice! Now try a transformation!</h2>
			<p>Transformations are Custom Query's true power. They take one collection as input and output another. Let's add a <code>filter();</code> transformation to our query.</p>
			<button class="primary">Add filter()</button>
			<a href="#" class="skip">Skip</a>
		</div>
		<div class="modal onebutton center fixed final">
			<h2>You just built your first complex query!</h2>
			<p>You're free to keep poking around, view the docs, or example queries in the top right. When you're ready to write your own, simply click the "New" button in the top left.</p>
			<button class="primary">Got it!</button>
		</div>
	</div>

	<div class="templatefooter">
		<a href="components.php" class="library">Component Library</a>
	</div>

</body>
</html>