# jw-color-picker

A react component for basic color selection.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/jw-color-picker.svg
[npm-url]: http://npmjs.org/package/jw-color-picker
[travis-image]: https://img.shields.io/travis/WaiChungWong/jw-color-picker.svg
[travis-url]: https://travis-ci.org/WaiChungWong/jw-color-picker
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/jw-color-picker.svg
[download-url]: https://npmjs.org/package/jw-color-picker

[Demo](http://waichungwong.github.io/jw-color-picker/build)

## Install

[![NPM](https://nodei.co/npm/jw-color-picker.png)](https://nodei.co/npm/jw-color-picker)

## Methods

| Method                 | Parameters                                                                                                           | Description                                                     |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `setColor`             | `r`: integer. Default: `0`<br>`g`: integer. Default: `0`<br>`b`: integer. Default: `0`<br>`a`: integer. Default: `1` | set the color to be selected.                                   |
| `updateDialogPosition` |                                                                                                                      | re-position the color dialog to be within the view as possible. |

## Props

| Prop                         | Description                                             |
| ---------------------------- | ------------------------------------------------------- |
| `paletteClassName`(optional) | the class name for the color palette. Default: ``       |
| `paletteStyle`(optional)     | the inline style for the color palette. Default: `{}`   |
| `dialogWidth`(optional)      | the width of the picker dialog. Default: `200`          |
| `dialogHeight`(optional)     | the height of the picker dialog. Default: `190`         |
| `color`(optional)            | the initial color to be selected. Default: random color |
| `onChange`(optional)         | the behavior on color change. Default: `() => {}`       |

## Usage

```javascript
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Canvas from "jw-color-picker";

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: { r: 125, g: 125, b: 125, a: 1 }
    };
  }

  render() {
    const { color } = this.state;
    const { r, g, b, a } = color;

    return (
      <ColorPicker
        id="color-picker"
        color={color}
        onChange={value => this.setState({ color: value })}
      />
    );
  }
}

render(<Demo />, document.getElementById("root"));
```
