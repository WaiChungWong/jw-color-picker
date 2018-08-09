import React, { Component } from "react";
import { render } from "react-dom";
import Mouse from "jw-mouse";

import ColorPicker from "./module";

import "./style.css";

class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: 50,
      left: 50,
      color: { r: 125, g: 125, b: 125, a: 1 }
    };

    this.dragHandler = this.dragHandler.bind(this);
    this.downHandler = this.downHandler.bind(this);
    this.upHandler = this.upHandler.bind(this);
  }

  dragHandler(event) {
    if (this.dragging) {
      const { x: left, y: top } = event.mouse.position;
      this.setState({ top, left });

      this.picker.updateDialogPosition();
    }
  }

  downHandler(event) {
    if (event.target === this.picker.colorPalette) {
      this.dragging = true;
    }
  }

  upHandler() {
    this.dragging = false;
  }

  componentDidMount() {
    const { wrapper } = this;

    wrapper.mouse = new Mouse(wrapper);
    wrapper.mouse.onDown(this.downHandler);
    wrapper.mouse.onUp(this.upHandler);
    wrapper.mouse.onDrag(this.dragHandler);
  }

  componentWillUnmount() {
    this.wrapper.mouse.detach();
  }

  render() {
    const { top, left, color } = this.state;
    const { r, g, b, a } = color;

    return (
      <div id="demo">
        <span>Hello!</span>
        <div
          id="background"
          style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})` }}
        >
          <span>Drag me</span>
        </div>

        <div ref={w => (this.wrapper = w)}>
          <ColorPicker
            ref={p => (this.picker = p)}
            id="color-picker"
            style={{ top: `${top - 10}px`, left: `${left - 10}px` }}
            color={color}
            onChange={value => this.setState({ color: value })}
          />
        </div>
      </div>
    );
  }
}

render(<Demo />, document.getElementById("root"));
