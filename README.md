jQuery Dragster
===============

## Usage

Include jquery.dragster.js in page.

Works in IE.

```javascript
$('.element').dragster({
	enter: function () {
		$(this).addClass('hover');
	},
	leave: function () {
		$(this).removeClass('hover');
	}
});
```