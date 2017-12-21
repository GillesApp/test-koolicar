// move elements on small screen
if( jQuery(window).width() < 768 ) {
	jQuery(".amount-val").appendTo(".amount");
	jQuery(".promo-val").appendTo(".promo");
}

// activate datepicker
jQuery('.start-date').datepicker({
	// set current date as start date
	startDate: '0',
	// set date string format
	format: 'dd/mm'

}).on("changeDate", function() {
    	// get start date in input
    	var startDate = $('.start-date').datepicker("getDate");
    	// get end date in input
    	var endDate = $('.end-date').datepicker("getDate");
 		// if end date is anterior to start date
    	if(Date.parse(endDate) < Date.parse(startDate)) {
    		// set value of .end-date input to... 
	    	$('.end-date').val(
	    		// ... for date in .start-date input
		        $('.start-date').datepicker('getFormattedDate')
		    );
    	}
 });

jQuery('.end-date').datepicker({
	// set current date as start date
	startDate: '0',
	// set date string format
	format: 'dd/mm'

}).on("changeDate", function() {
    	// get start date in input
    	var startDate = $('.start-date').datepicker("getDate");
    	// get end date in input
    	var endDate = $('.end-date').datepicker("getDate");
 		// if end date is anterior to start date
    	if(Date.parse(endDate) < Date.parse(startDate)) {
    		// set value of start-date input to... 
	    	$('.start-date').val(
	    		// ... for date in .end-date input
		        $('.end-date').datepicker('getFormattedDate')
		    );
    	}
 });