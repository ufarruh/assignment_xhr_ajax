// complete (function) What arguments should this take?
// data (object)
// error (function) What arguments should this take?
// headers (object)
// method (string) Note: type is an alias for this
// success (function) What arguments should this take?
// url (string)
// async (boolean)


var root = 'https://jsonplaceholder.typicode.com';

$.ajax( {
  url: "user",
  data: { id: 123 },
  type: "GET",
  dataType : "json",
  success: function( json ) { ... },
  error: function( xhr, status, errorThrown ) { ... },
  complete: function( xhr, status ) { ... }
});


var xhr = new XMLHttpRequest();           // status 0
xhr.open( "GET", "http://www.foo.com/bar.txt", true );  // status 1
xhr.onload = function ( e ) {             // after status 4
  if ( xhr.readyState === 4 ) {
    if ( xhr.status === 200 ) {
      document.getElementById( "myDiv" ).innerHTML = xhr.responseText;
    } else {
      alert( xhr.statusText );
    }
  }
};
xhr.onerror = function (e) {              // after status 4
  console.error( xhr.statusText );
};
xhr.send( null );





var $ = {
  var xhr = new XMLHttpRequest();

  xhr.onload = 
};
