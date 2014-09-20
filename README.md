crazy-dom
=========

A lib that will allow you to convert your html code like this 

````
<div class="parent-container">    
    <div class="inner-container">  
      <span> Hello there!! </span>
    </div>  
</div>
````

to an array of strings like this:

````
["ed.parent-container ed.inner-container es[Hello there!!]"]
````

now the above code generated will be send to the client on request with other JS files and will be re-converted to html. This will be more efficient in single page applications because of loading only small amount of html on each view page will be much faster.
 
 
