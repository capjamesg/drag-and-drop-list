# Drag and Drop List

A web component that lets you drag and drop items in a list to reorder items.

## Use the Component

First, copy the `drag-list.js` file from this repository onto your website.

Reference the file in your website `<head>` tag:

```html
<script src="drag-list.js"></script>
```

To create a list whose items you can drag and drop, wrap the list in `<draggable-list></draggable-list>`.

You can use the component with both `<ul>` (unordered) and `<ol>` (ordered) lists.

To specify custom styles, add the following code before your web component is referenced:

```
<template id="draggable-list">
    <style>
        add your styles here
    </style>
</template>
```

## License

This project is licensed under an [MIT license](LICENSE).
