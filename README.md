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
Dynapagin is licensed under the MIT License.
