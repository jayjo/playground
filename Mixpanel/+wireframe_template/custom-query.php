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
										<li>11</li>
										<li>12</li>
										<li>13</li>
										<li>14</li>
										<li>15</li>
										<li>16</li>
										<li>17</li>
										<li>18</li>
										<li>19</li>
										<li>20</li>
										<li>21</li>
										<li>22</li>
										<li>23</li>
										<li>24</li>
										<li>25</li>
										<li>26</li>
										<li>27</li>
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
										<tab></tab><highlight class="two">})</highlight>
										<div class="transformation"></div> <div class="comment"></div>
										<div class="drop nobounds light transform" contenteditable="false">
											<div class="droptext"><highlight class="three">try a transformation...</highlight></div>
											<div class="list">
												<a href="#" class="filter">
													.filter()
													<span class="explanation">
														Filter the collection by calling the provided function on each of its elements. If the function evaluates to true, keep the element. Otherwise, discard it.
													</span>
												</a>
												<a href="#" class="map">
													.map()
													<span class="explanation">
														Build a new collection by applying the provided function to each element of the input collection.
													</span>
												</a>
												<a href="#" class="reduce">
													.reduce()
													<span class="explanation">
														Run a reduce step against the collection, to reduce the collection to a single value.
													</span>
												</a>
												<a href="#" class="groupBy">
													.groupBy()
													<span class="explanation">
														Group the collection according to the provided list of keys, then apply the provided function to each group.
													</span>
												</a>
												<a href="#" class="groupByUser">
													.groupByUser()
													<span class="explanation">
														Group events by distinct_id and optionally other keys, then apply the provided function to each group.
													</span>
												</a>
											</div>
										</div>
										<br />
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
							<div class="pulse three"></div>
							<div class="tip three fixed">
								<h2>The base query</h2>
								<p>Running the query above will return all events in the given date range, the simplest query you can run. Try it, run the query!</p>
							</div>
						</div>
					</div>
					<footer class="flexy">
						<div class="leftbtn">Run Query</div>
						<div class="rightbtn">Save & Run Query</div>
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
						<table cellpadding="0" cellspacing="0">
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
									<td>Viewed Report</td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td>Viewed Report</td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td>Viewed Report</td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td>Viewed Report</td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td>Viewed Report</td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td>Viewed Report</td>
									<td>01-14-16</td>
								</tr>
								<tr>
									<td>Viewed Report</td>
									<td>01-14-16</td>
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
			<p>Custom query is a query language written in JavaScript. It allows you to write complex questions to analyze your raw data in ways the traditional Mixpanel API won’t let you.</p>
			<button class="primary">Get Started</button>
			<a href="#" class="skip">Skip</a>
		</div>
		<div class="modal onebutton center fixed success">
			<h2>Nice!</h2>
			<p>Your results are displayed in the table below. Now try a Transformation, Custom Query's true power.</p>
			<button class="primary">Try a Transformation</button>
			<a href="#" class="skip">Skip</a>
		</div>
	</div>

	<div class="templatefooter">
		<a href="components.php" class="library">Component Library</a>
	</div>

</body>
</html>