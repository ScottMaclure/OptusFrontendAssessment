(function( $ ) {

	// Plugin declaration
	$.fn.progressify = function( options ) {

		// Caching DOM needed elements
		var $controlPanel = $('.control_panel', this.parent()),
			$select = $('select', $controlPanel),
			$buttons = $('button', $controlPanel);
		
		// Declaring the currently selected bar
		var currentBar;


		// Each to loop on matching element + Return to maintain chainability
		return this.each(function() {
			var $this = $(this);

			// Creating the fill-bar
			$barInner = $('<div>').width($this.data('width')+'%');

			// Putting the text value in a span
			$barValue = $('<span>').text($this.data('width')+'%');

			// Cleaning the bar content, then adding fill-bar + span
			$this.empty().append($barInner, $barValue);

			// Populating control_panel dropdown
			$option = $('<option></option>').val(this.id).text(this.id);
			$select.append($option);

			// Setting up the first currentBar
			if(!currentBar) currentBar = this.id;
			
		});

	};

}( jQuery ));