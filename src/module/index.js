/*eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/

import React, { Component } from "react";
import ClassNames from "classnames";
import PropTypes from "prop-types";
import debounce from "debounce";
import { rgb2hsv, hsv2rgb } from "color-functions";
import Keyboard, { Keys } from "jw-keyboard";
import Mouse from "jw-mouse";
import supportsPassive from "supports-passive";

import Alpha from "./alpha.png";
import Gradient from "./gradient.png";
import Hue from "./hue.png";

import "./style.css";

const eventOptions = supportsPassive ? { passive: true } : false;
const { random, max, min } = Math;

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    const { color } = props;
    const { r, g, b, a } = color;
    let { h, s, v } = rgb2hsv(r, g, b);
    s /= 100;
    v /= 100;

    const positionClassName = "bottom right";

    this.state = { showDialog: false, h, s, v, a, positionClassName };

    /* Add bindings to all event methods to secure scoping. */
    this._valueMouseHandler = this._valueMouseHandler.bind(this);
    this._valueKeyHandler = this._valueKeyHandler.bind(this);
    this._hueMouseHandler = this._hueMouseHandler.bind(this);
    this._hueKeyHandler = this._hueKeyHandler.bind(this);
    this._alphaMouseHandler = this._alphaMouseHandler.bind(this);
    this._alphaKeyHandler = this._alphaKeyHandler.bind(this);
    this._showDialog = this._showDialog.bind(this);
    this._hideDialog = this._hideDialog.bind(this);

    this._positionHandler = debounce(() => this.updateDialogPosition(), true);
  }

  _isWithinComponent(element) {
    let node = element;

    while (node !== null) {
      if (node === this.colorPicker) {
        return true;
      }

      node = node.parentNode;
    }

    return false;
  }

  _addListeners(component, handler, keyHandler) {
    component.mouse = new Mouse(component);
    component.keyboard = new Keyboard(component);

    component.mouse.onDrag(handler);
    component.mouse.onDown(handler);
    component.keyboard.onKeyDown(keyHandler);
  }

  _removeListeners(component) {
    component.mouse.detach();
    component.keyboard.detach();
  }

  _valueMouseHandler(event) {
    const { boardOverlay, state } = this;
    const { h, a } = state;
    const { isLeftButton, position } = event.mouse;

    if (isLeftButton === true) {
      const { x, y } = position;
      const { offsetWidth: width, offsetHeight: height } = boardOverlay;

      const s = max(0, min(width, x)) / width;
      const v = 1 - max(0, min(height, y)) / height;

      this._changeColor(h, s, v, a);
    }
  }

  _valueKeyHandler(event) {
    let { h, s, v, a } = this.state;
    const { keyboard } = event;

    if (keyboard.hasKeyPressed(Keys.UP)) {
      v = max(0, min(1, v + 0.01));
    } else if (keyboard.hasKeyPressed(Keys.DOWN)) {
      v = max(0, min(1, v - 0.01));
    }
    if (keyboard.hasKeyPressed(Keys.LEFT)) {
      s = max(0, min(1, s - 0.01));
    } else if (keyboard.hasKeyPressed(Keys.RIGHT)) {
      s = max(0, min(1, s + 0.01));
    }

    this._changeColor(h, s, v, a);
  }

  _hueMouseHandler(event) {
    const { hueBanner, state } = this;
    const { s, v, a } = state;
    const { isLeftButton, position } = event.mouse;

    if (isLeftButton === true) {
      const { x } = position;
      const { offsetWidth: width } = hueBanner;

      const h = (1 - max(0, min(width, x)) / width) * 360;

      this._changeColor(h, s, v, a);
    }
  }

  _hueKeyHandler(event) {
    let { h, s, v, a } = this.state;
    const { keyboard } = event;

    if (keyboard.hasKeyPressed(Keys.LEFT)) {
      h = max(0, min(360, h + 3.6));
    } else if (keyboard.hasKeyPressed(Keys.RIGHT)) {
      h = max(0, min(360, h - 3.6));
    }

    this._changeColor(h, s, v, a);
  }

  _alphaMouseHandler(event) {
    const { alphaBanner, state } = this;
    const { h, s, v } = state;
    const { isLeftButton, position } = event.mouse;

    if (isLeftButton === true) {
      const { x } = position;
      const { offsetWidth: width } = alphaBanner;

      const a = max(0, min(width, x)) / width;

      this._changeColor(h, s, v, a);
    }
  }

  _alphaKeyHandler(event) {
    let { h, s, v, a } = this.state;
    const { keyboard } = event;

    if (keyboard.hasKeyPressed(Keys.LEFT)) {
      a = max(0, min(1, a - 0.01));
    } else if (keyboard.hasKeyPressed(Keys.RIGHT)) {
      a = max(0, min(1, a + 0.01));
    }

    this._changeColor(h, s, v, a);
  }

  _showDialog() {
    this.updateDialogPosition();
    this.setState({ showDialog: true });

    document.addEventListener("mousedown", this._hideDialog, eventOptions);
    document.addEventListener("scroll", this._positionHandler, eventOptions);
    window.addEventListener("resize", this._positionHandler, eventOptions);
  }

  _hideDialog(event) {
    if (!event || !this._isWithinComponent(event.target)) {
      this.setState({ showDialog: false });

      document.removeEventListener("mousedown", this._hideDialog);
      document.removeEventListener("scroll", this._positionHandler);
      window.removeEventListener("resize", this._positionHandler);
    }
  }

  _changeColor(h, s, v, a) {
    const { onChange } = this.props;
    let { r, g, b } = hsv2rgb(h, s * 100, v * 100);

    this.setState({ h, s, v, a });
    onChange({ r, b, g, a });
  }

  setColor(r = 0, g = 0, b = 0, a = 1) {
    let { h, s, v } = rgb2hsv(r, g, b);
    s /= 100;
    v /= 100;

    this.setState({ h, s, v, a });
  }

  updateDialogPosition() {
    const { colorPalette } = this;
    const { dialogWidth, dialogHeight } = this.props;
    const { bottom, left } = colorPalette.getBoundingClientRect();
    const { clientWidth, clientHeight } = document.documentElement;

    let vertical = clientHeight - bottom > dialogHeight ? "bottom" : "top";
    let horizontal = clientWidth - left > dialogWidth ? "right" : "left";
    let positionClassName = `${vertical} ${horizontal}`;

    this.setState({ positionClassName });
  }

  componentDidMount() {
    const {
      boardOverlay,
      hueBanner,
      alphaBanner,
      _valueMouseHandler,
      _valueKeyHandler,
      _hueMouseHandler,
      _hueKeyHandler,
      _alphaMouseHandler,
      _alphaKeyHandler
    } = this;

    this._addListeners(boardOverlay, _valueMouseHandler, _valueKeyHandler);
    this._addListeners(hueBanner, _hueMouseHandler, _hueKeyHandler);
    this._addListeners(alphaBanner, _alphaMouseHandler, _alphaKeyHandler);
  }

  componentWillUnmount() {
    const { boardOverlay, hueBanner, alphaBanner } = this;

    this._removeListeners(boardOverlay);
    this._removeListeners(hueBanner);
    this._removeListeners(alphaBanner);
  }

  render() {
    const {
      className,
      paletteClassName,
      paletteStyle,
      dialogWidth,
      dialogHeight,
      ...rest
    } = this.props;
    const { showDialog, h, s, v, a, positionClassName } = this.state;
    const { r: hR, g: hG, b: hB } = hsv2rgb(h, 100, 100);
    const { r, g, b } = hsv2rgb(h, s * 100, v * 100);

    return (
      <div
        ref={c => (this.colorPicker = c)}
        className={ClassNames("color-picker", className)}
        {...rest}
      >
        <button
          ref={c => (this.colorPalette = c)}
          className={ClassNames("color-palette", paletteClassName)}
          style={Object.assign(
            { backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})` },
            paletteStyle
          )}
          onClick={() => (showDialog ? this._hideDialog() : this._showDialog())}
        />
        <div
          ref={d => (this.colorDialog = d)}
          className={ClassNames(
            "color-picker-dialog",
            { show: showDialog },
            positionClassName
          )}
          style={showDialog ? { width: dialogWidth, height: dialogHeight } : {}}
        >
          <div className="color-picker-panel">
            <div
              className="color-board"
              style={{ backgroundColor: `rgb(${hR}, ${hG}, ${hB})` }}
            >
              <div
                className="color-board-gradient"
                style={{ backgroundImage: `url(${Gradient})` }}
              >
                <div
                  className="color-board-pointer"
                  style={{
                    top: `${(1 - v) * 100}%`,
                    left: `${s * 100}%`
                  }}
                />
              </div>
              <button
                ref={boardOverlay => (this.boardOverlay = boardOverlay)}
                className="color-board-overlay"
              />
            </div>
            <button
              ref={hueBanner => (this.hueBanner = hueBanner)}
              className="hue-banner"
              style={{ backgroundImage: `url(${Hue})` }}
            >
              <div
                className="thumb"
                style={{ left: `${(1 - h / 360) * 100}%` }}
              />
            </button>
            <button
              ref={alphaBanner => (this.alphaBanner = alphaBanner)}
              className="alpha-banner"
              style={{ backgroundImage: `url(${Alpha})` }}
            >
              <div
                className="alpha-banner-overlay"
                style={{
                  background: `linear-gradient(to right, transparent, rgb(${r}, ${g}, ${b}))`
                }}
              />
              <div className="thumb" style={{ left: `${a * 100}%` }} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ColorPicker.propTypes = {
  className: PropTypes.string,
  paletteClassName: PropTypes.string,
  paletteStyle: PropTypes.shape(),
  dialogWidth: PropTypes.number,
  dialogHeight: PropTypes.number,
  color: PropTypes.shape({
    r: PropTypes.number,
    g: PropTypes.number,
    b: PropTypes.number,
    a: PropTypes.number
  }),
  onChange: PropTypes.func
};

ColorPicker.defaultProps = {
  className: "",
  paletteClassName: "",
  paletteStyle: {},
  dialogWidth: 200,
  dialogHeight: 190,
  color: {
    r: random() * 255,
    g: random() * 255,
    b: random() * 255,
    a: 1
  },
  onChange: () => {}
};

export default ColorPicker;
