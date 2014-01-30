(function( $ ) {

	// Plugin declaration
	$.fn.progressify = function( options ) {

		// Caching DOM needed elements
		var $controlPanel = $('.control_panel', this.parent()),
			$select = $('select', $controlPanel),
			$buttons = $('button', $controlPanel);
		
		// Declaring the currently selected bar
		var currentBar;

		// Binding change action on the <select>
		$select.on('change', function(){
			var $this = $(this);

			// We change currentBar value to the one selected
			currentBar = $this.find(":selected").val();
		});


		// Binding click action on <button>
		$buttons.on('click', function(){
			var $this = $(this),
				$currentBar = $('#'+currentBar),
				newWidth;

			// Calculating the new width
			newWidth = Number($currentBar.data('width')) + Number($this.data('amount'));
			
			// Limit it to 0 if negative
			if(newWidth < 0){
				newWidth = 0;
			}

			// Adding / removing a class if it's over / under 100%
			if(newWidth > 100){
				$currentBar.find('div').addClass('over100');
			}else{
				$currentBar.find('div').removeClass('over100');
			}
			
			// Applying changes to the DOM (Width, data-attribute and text)
			$currentBar.data('width', newWidth).find('span').text(newWidth+'%');
			$('div', $currentBar).width(newWidth+'%');

		});


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