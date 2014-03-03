Include [jquery.dragster.js](https://rawgithub.com/catmanjan/jquery-dragster/master/jquery.dragster.js) in page.

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