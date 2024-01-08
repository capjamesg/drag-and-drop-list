# Drag and Drop List

A web component that lets you drag and drop items in a list to reorder items.

## Use the Component

First, copy the `draggable-list.js` file from this repository onto your website.

Reference the file in your website `<head>` tag:

```html
<script src="draggable-list.js"></script>
```

To create a list whose items you can drag and drop, wrap the list in `<draggable-list></draggable-list>`.

Here is an example:

```html
<draggable-list>
    <ol>
        <li>Midnights</li>
        <li>Taylor Swift</li>
        <li>Evermore</li>
        <li>Folklore</li>
    </ol>
</draggable-list>
```

You can use the component with both `<ul>` (unordered) and `<ol>` (ordered) lists.

To specify custom styles, add the following code before your web component is referenced:

```html
<template id="draggable-list">
    <style>
        add your styles here
    </style>
</template>
```

## Validate List Order Feature

This web component could be used in a quiz or learning material in which a participant is asked to order items. If you want to validate that the list is ordered in a certain way, you can do so with this web component.

First, define a list called `correctOrder` and list items in their correct order. Each item must exactly match the text in the `ul` or `ol` in which the component will be used.

```html
<script>
    var correctOrder = [
        "Evermore",
        "Folklore",
        "Midnights",
        "Red",
        "Taylor Swift",
        "1989"
];
</script>
```

Next, create a button that calls the `checkForCorrectOrder()` function in your `<draggable-list>` web component:

```html
<button onclick="document.querySelector('draggable-list').checkForCorrectOrder(this)">Check</button>
```

By default, this button will create an alert box that says "Correct!" or "Incorrect!". You can override this behaviour by defining a function on your web page called `checkForOrder` that accepts one argument: a boolean that says whether the list is in the correct order. If the list is ordered correctly, the value will be `true`. Otherwise, the value will be `false`.

## License

This project is licensed under an [MIT license](LICENSE).
