window.loadCSS = function( href ){
  var link = window.document.createElement( "link" ),
    ref = window.document.getElementsByTagName( "script" )[ 0 ];
  link.rel = "stylesheet";
  link.href = href;
  ref.parentNode.insertBefore( link, ref );
};
