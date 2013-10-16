dynapagin
=========

A jQuery plugin for managing client-side pagination. Works with Twitter
Bootstrap 3, for styling purposes.

## To Use

```javascript
$('#dynapagin-example').dynapagin({
    total: 10
}, function (page) {
    $('#dynapagin-example-content').html('This is <em>Page '+page+'</em>!');
}).on('page', function (event, page) {
    console.log('another way to provide content to page '+page+'.');
});
```
### Options
+ *pager*: Boolean flag to tell the plugin wether to provide a selection of
    pages or just previous and next buttons
+ *total*: The number of pages that will be in the pagination
+ *page*: The starting page to display
+ *previous*: Text to use for previous button
+ *next*: Text to use for next button

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
