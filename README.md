## Optus Front-end assessment

### Demo

A demo can be viewed [here](http://rawgithub.com/Yojimb0/OptusFrontendAssessment/master/demo/index.html)

### jQuery Plugin

I choosed to do a jquery plugin for this assessment, because I think it's the perfect usecase for the DOM manipulation that it offers.

I coded it in a plugin way, so that can be use easily on other projects, and it's easy to adapt it multiple times, even in the same page.

Basic workflow of the plugin :

* Caching DOM elements
* Binding action on the `<select>`
	* Select the progressbar we want to work on
* Binding actions on `<button>`s
	* Calcluate the new width, (actual + button value)
	* Limit it to 0 if negative
	* Adding / removing a class if it's over / under 100%
	* Applying changes to the DOM (Width, data-attribute and text)
* Process to the `$.each`
	* Creating the inner bar (the color filling)
	* Putting the text value in a span (This is because I wanted the bar to be simple as possible when the javascript is not loaded)
	* Cleaning the bar content, then adding inner-bar + span
	* Populating control_panel dropdown
	* Setting up the first currentBar

### Style
The width is animated with some CSS transitions.
The gradient is done with a little trick that I like, using a simple `box-shadow` inset. You'll find a little mixin in the sass file, to calculate shadow values depending on the height.

**Responsivity**  
Every value is in %, so every thing will react the same way on different screen sizes. No need to use media-queries here.

---
### Usage

**HTML**

```
	<div class="bar" id="bar1" data-width="X">X%</div>
	<div class="bar" id="bar1" data-width="Y">Y%</div>
	<div class="control_panel">
		<select name="" id=""></select>
		<button data-amount="-25">-25</button>
		<button data-amount="-10">-10</button>
		<button data-amount="+10">+10</button>
		<button data-amount="+25">+25</button>
	</div>
```

**Javascript initialisation**

```
	$(function() {
		$('.bar').progressify();
	});
```



---
### Project file structure

I used a `src` folder to host the developement version of the files (JS ans Sass).

The `build` folder is used for the minified JS, and the compiled/prefixed CSS.

The `demo` folder contains the index.html, and a copy of the built files (from `build`).

### Grunt

I used Grunt to manage some automations. I like to use Coffeescript for my gruntfile, because I find it more readable.

Here's my tasks list

* Linting (jshint)
* Clean (But not much used here because Uglify and Sass can override their destination files)
* Sass, set in compressed mode
* Autoprefixer
* Uglify, with an option set to remove all the `console.log` calls
* Copy, to copy `build` content in `demo`
* Connect, to set up a quick server for development
* Open, to automatically open a browser tab pointing to the server
* Watch, to automatically reload the tab (I use the livrereload browser extension) when files changes.



---
### Completion time

* Pre-thinking / Information gathering : 30min
* Development : 1:05
* Readme : 30min

---
### Software used

* Chrome (Version 33)
* Sublime Text 2
* Mou (Markdown editor)

