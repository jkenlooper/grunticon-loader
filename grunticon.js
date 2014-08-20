// depends on a global loadCSS( href ) function

window.grunticon = function( css, foo ){
	// expects a css array with 3 items representing CSS paths to datasvg, datapng, urlpng
	if( !css || css.length !== 3 ){
		return;
	}

	// Thanks Modernizr & Erik Dahlstrom
	var w = window,
		svg = !!w.document.createElementNS && !!w.document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect && !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1") && !(window.opera && navigator.userAgent.indexOf('Chrome') === -1),


		// Thanks Modernizr
		img = new w.Image();

		img.onerror = function(){
			loadCSS( css[ 2 ] );
		};

		img.onload = function(){
      var data = img.width === 1 && img.height === 1;
			loadCSS( css[ data && svg ? 0 : data ? 1 : 2 ] );
		};

		img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
};
// Call grunticon() here to load CSS:
