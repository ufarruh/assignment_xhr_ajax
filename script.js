var $ = {
  ajax: function ( options ) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function () {
      console.log( this.responseText );
    });

    xhr.open( options.type , options.url, options.async )

    xhr.setRequestHeader("Content-type", options.header );
    xhr.send(options.data);
  },


  get: function ( url ) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function () {
      console.log( this.responseText );
    });

    xhr.open("get", url )
    xhr.send();
  },

  post: function( url, data ) {
    var xhr = new XMLHttpRequest();
    xhr.open("post", url, true )
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.addEventListener("load", function () {
      console.log( this.responseText );
    });

    xhr.send(data);
  }
};

var root = 'https://jsonplaceholder.typicode.com/posts/';
$.post ( root, { title: "Awesome" } );
