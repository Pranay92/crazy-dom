(exports & (window = exports));

/*
  @theory this library is created with an intention of converting html to some 
  very small data like an array of strings and then transfer them to wire when the 
  client makes a request. 

  Thefore a piece of html like this

  <div class="container">
    <span> Hello there! </span>
  </div>

  will be converted to something like this:

  ["d.container s[Hello there!]"]

  which is not very impressive when the html is too small to be converted. But considering
  that the html files can be upto hunderds of lines of code, it becomes convenient 
  to use this as the file becomes very light weighted.

  Alternatives??

  So far we have JADE files that allow us to write minimal amount of code to 
  generate html, but that still lacks the point that we still are uploading lots of
  html code whenever the browser requests them, which is hence the same amount of 
  data uploaded and same amount of time required.

  Disadvandantages of using crazydom

  I don't know them yet. If the conversion of bulk amount of html turns out to be fast 
  enough, then I'll be loving to add more features to it. As of now, it will just convert
  html to crazydom code and vice versa.

*/

(function(global){

  var CZ = CZ || {};
  //converts simple html to crazydom data
  //as of now this is being passed a string of html data
  // this should be passed an html file instead??
  function Crazy(data) {

  }

  //converts crazydom data to simple html
  function Original() {

  }

  //accepts a html file as it's source
  function CrazyFile() {

  }

  CZ.Crazy = Crazy;
  CZ.Original = Original;
  CZ.CrazyFile = CrazyFile;
  global.CZ = CZ;

})(window);