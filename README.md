dynapagin
=========

A jQuery plugin for managing client-side pagination. Includes Stylesheet for
basic styling, and is completely compatible with Boostrap 3's
pagination component.

## Usage

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Dynapagin Complete Example</title>
    <link href="css/style.css" rel="stylesheet" />
  </head>
  <body>
    <div id="dynapagin-example-content"></div>
    <div id="dynapagin-example"></div>
    
    <script type="application/javascript" src="jquery.min.js"></script>
    <script type="application/javascript" src="js/dynapagin.min.js"></script>
    <script type="application/javascript">
      $(function () { 
        $('#dynapagin-example').dynapagin({
          total: 10
        }, function (page) {
          $('#dynapagin-example-content').html('<em>Page '+page+'</em>!');
        }).on('page', function (event, page) {
          console.log('another way to provide content to page '+page+'.');
        });
      });
    </script>
  </body>
</html>
```
### Prereqs
The Only hard requirement of dynapagin is jQuery. However, you might also want
to include some CSS to make the pagination selector presentable.

### style.css and style.less
The provided style.css was generated using [LESS][1]. The less file has been
included in the project for convenience.

### Using Bootstrap
Dynapagin is completely compatible with Twitter's [Boostrap][2]. If you're using
Boostrap dynapagin's selector will inherit the `.pagination` and `.pager`
styles, including those of their child elements.

[1]: http://lesscss.org/ "LESS CSS"
[2]: http://getbootstrap.com/ "Boostrap"

### Options
+ **total**: (*REQUIRED*) The number of pages that will be in the pagination.
+ **pager**: Boolean flag to tell the plugin wether to provide a selection of
    pages or just previous and next buttons. Defaults to `false`.
+ **page**: The starting page to display. Defaults to first page.
+ **previous**: Text to use for previous button. Defaults to "&laquo;"
+ **next**: Text to use for next button. Defaults to "&raquo;"

### Content
Dynapagin provides for an optional callback that will be called on load and when
a page change occurs. It recieves as a parameter the number of the page that is
expected to be loaded.

Dynapagin also fires off `page` events that occur when a page change occurs.
Just like the callback method the number of the new page passed as a parameter.
You can attach an event handler to the dynapagin element for an additional level
of control.

## License
Dynapagin is licensed under the MIT License. Full text of the license can be
read [here](https://raw.github.com/crcovar/dynapagin/master/LICENSE)
