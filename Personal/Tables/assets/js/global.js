jQuery(document).ready(function($) {

	$('table').bootstrapTable({
		striped: true,
		height: 395,
		fixedColumns: true,
		fixedNumber: 1,
		search: true,
		// showColumns: true,
		// sortable: true
	});

  // True Odds Calculator

	var calc    = $('.calc'),
			odds    = $('.drawOdds'),
			originalValues = getoriginalValues();

	function getoriginalValues(){
    var values = [];
    odds.each(function(index){
    	values[index] = $(this).text();
  	});
	  return values;
	}

	function setDrawOddValues(){
		var curVal = calc.val();
		$(document).find('.drawOdds').each(function(index){
      var oddsVal = (originalValues[index] / curVal).toFixed(2);
      var origVal = (originalValues[index] / 1);
      if(!calc.val() || calc.val() === "0" || calc.val() === "1") {
      	$(this).text(origVal);
      	// $('.draw').text(headVal);
      	$('.draw, .drawOdds').removeClass('highlight');
      } else {
      	$(this).text(oddsVal);
      	$('.drawOdds').addClass('highlight');
      	// $('.draw').text("True Draw Odds");
      	// $('.draw, .drawOdds').addClass('highlight');
      }
    });
	}

	$(document).on('keyup', '.calc', function(e){
    setDrawOddValues();
	});


});