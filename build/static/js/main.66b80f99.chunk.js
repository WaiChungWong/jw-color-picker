(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA4QDhAOGT2j1pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QoCCxQo5jsi4wAAADFJREFUOMtjfPjw4X8GIsDp02eJUcbAxEBlMGrgqIGDwUAWYnOAqanxaBiOGjhyDQQAl5MJLxfm+p0AAAAASUVORK5CYII="},21:function(e,t,a){e.exports=a.p+"static/media/gradient.c7a33805.png"},22:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAABCAYAAAA8YlcZAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAINJREFUKBWNUEEKhEAMi7iKq6Bf8P9f8hvuiIu72sDEQ0HtoXSSSUvSYuqHfZx/ANpcnfW3w/zzXBR3+KNBsg2sj9WS3xGsuae+lraUlmhfUSKY2uhMvZmYCehGKYTFeUxenJ/xOKHCdtqXteilFfuuM2q55ghPR6VtWbzSeo3h9H3hAFtoUf/CkDSeAAAAAElFTkSuQmCC"},24:function(e,t,a){e.exports=a(40)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(4),o=a(5),i=a(8),s=a(6),r=a(9),l=a(0),c=a(1),d=a.n(c),h=a(17),u=a(7),g=a.n(u),b=a(23),m=a(10),v=a.n(m),A=a(18),p=a.n(A),f=a(3),y=a(2),H=a.n(y),j=a(19),k=a.n(j),O=a(20),C=a.n(O),_=a(21),w=a.n(_),E=a(22),K=a.n(E),D=(a(38),!!k.a&&{passive:!0}),N=Math.random,I=Math.max,L=Math.min,M=function(e){function t(e){var a;Object(n.a)(this,t),a=Object(i.a)(this,Object(s.a)(t).call(this,e));var o=e.color,r=o.r,c=o.g,d=o.b,h=o.a,u=Object(f.rgb2hsv)(r,c,d),g=u.h,b=u.s,m=u.v;b/=100,m/=100;return a.state={showDialog:!1,h:g,s:b,v:m,a:h,positionClassName:"bottom right"},a._valueMouseHandler=a._valueMouseHandler.bind(Object(l.a)(Object(l.a)(a))),a._valueKeyHandler=a._valueKeyHandler.bind(Object(l.a)(Object(l.a)(a))),a._hueMouseHandler=a._hueMouseHandler.bind(Object(l.a)(Object(l.a)(a))),a._hueKeyHandler=a._hueKeyHandler.bind(Object(l.a)(Object(l.a)(a))),a._alphaMouseHandler=a._alphaMouseHandler.bind(Object(l.a)(Object(l.a)(a))),a._alphaKeyHandler=a._alphaKeyHandler.bind(Object(l.a)(Object(l.a)(a))),a._showDialog=a._showDialog.bind(Object(l.a)(Object(l.a)(a))),a._hideDialog=a._hideDialog.bind(Object(l.a)(Object(l.a)(a))),a._positionHandler=p()(function(){return a.updateDialogPosition()},!0),a}return Object(r.a)(t,e),Object(o.a)(t,[{key:"_isWithinComponent",value:function(e){for(var t=e;null!==t;){if(t===this.colorPicker)return!0;t=t.parentNode}return!1}},{key:"_addListeners",value:function(e,t,a){e.mouse=new g.a(e),e.keyboard=new H.a(e),e.mouse.onDrag(t),e.mouse.onDown(t),e.keyboard.onKeyDown(a)}},{key:"_removeListeners",value:function(e){e.mouse.detach(),e.keyboard.detach()}},{key:"_valueMouseHandler",value:function(e){var t=this.boardOverlay,a=this.state,n=a.h,o=a.a,i=e.mouse,s=i.isLeftButton,r=i.position;if(!0===s){var l=r.x,c=r.y,d=t.offsetWidth,h=t.offsetHeight,u=I(0,L(d,l))/d,g=1-I(0,L(h,c))/h;this._changeColor(n,u,g,o)}}},{key:"_valueKeyHandler",value:function(e){var t=this.state,a=t.h,n=t.s,o=t.v,i=t.a,s=e.keyboard;s.hasKeyPressed(y.Keys.UP)?o=I(0,L(1,o+.01)):s.hasKeyPressed(y.Keys.DOWN)&&(o=I(0,L(1,o-.01))),s.hasKeyPressed(y.Keys.LEFT)?n=I(0,L(1,n-.01)):s.hasKeyPressed(y.Keys.RIGHT)&&(n=I(0,L(1,n+.01))),this._changeColor(a,n,o,i)}},{key:"_hueMouseHandler",value:function(e){var t=this.hueBanner,a=this.state,n=a.s,o=a.v,i=a.a,s=e.mouse,r=s.isLeftButton,l=s.position;if(!0===r){var c=l.x,d=t.offsetWidth,h=360*(1-I(0,L(d,c))/d);this._changeColor(h,n,o,i)}}},{key:"_hueKeyHandler",value:function(e){var t=this.state,a=t.h,n=t.s,o=t.v,i=t.a,s=e.keyboard;s.hasKeyPressed(y.Keys.LEFT)?a=I(0,L(360,a+3.6)):s.hasKeyPressed(y.Keys.RIGHT)&&(a=I(0,L(360,a-3.6))),this._changeColor(a,n,o,i)}},{key:"_alphaMouseHandler",value:function(e){var t=this.alphaBanner,a=this.state,n=a.h,o=a.s,i=a.v,s=e.mouse,r=s.isLeftButton,l=s.position;if(!0===r){var c=l.x,d=t.offsetWidth,h=I(0,L(d,c))/d;this._changeColor(n,o,i,h)}}},{key:"_alphaKeyHandler",value:function(e){var t=this.state,a=t.h,n=t.s,o=t.v,i=t.a,s=e.keyboard;s.hasKeyPressed(y.Keys.LEFT)?i=I(0,L(1,i-.01)):s.hasKeyPressed(y.Keys.RIGHT)&&(i=I(0,L(1,i+.01))),this._changeColor(a,n,o,i)}},{key:"_showDialog",value:function(){this.updateDialogPosition(),this.setState({showDialog:!0}),document.addEventListener("mousedown",this._hideDialog,D),document.addEventListener("scroll",this._positionHandler,D),window.addEventListener("resize",this._positionHandler,D)}},{key:"_hideDialog",value:function(e){e&&this._isWithinComponent(e.target)||(this.setState({showDialog:!1}),document.removeEventListener("mousedown",this._hideDialog),document.removeEventListener("scroll",this._positionHandler),window.removeEventListener("resize",this._positionHandler))}},{key:"_changeColor",value:function(e,t,a,n){var o=this.props.onChange,i=Object(f.hsv2rgb)(e,100*t,100*a),s=i.r,r=i.g,l=i.b;this.setState({h:e,s:t,v:a,a:n}),o({r:s,b:l,g:r,a:n})}},{key:"setColor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=Object(f.rgb2hsv)(e,t,a),i=o.h,s=o.s,r=o.v;s/=100,r/=100,this.setState({h:i,s:s,v:r,a:n})}},{key:"updateDialogPosition",value:function(){var e=this.colorPalette,t=this.props,a=t.dialogWidth,n=t.dialogHeight,o=e.getBoundingClientRect(),i=o.bottom,s=o.left,r=document.documentElement,l=r.clientWidth,c=r.clientHeight,d=l-s>a?"right":"left",h="".concat(c-i>n?"bottom":"top"," ").concat(d);this.setState({positionClassName:h})}},{key:"componentDidMount",value:function(){var e=this.boardOverlay,t=this.hueBanner,a=this.alphaBanner,n=this._valueMouseHandler,o=this._valueKeyHandler,i=this._hueMouseHandler,s=this._hueKeyHandler,r=this._alphaMouseHandler,l=this._alphaKeyHandler;this._addListeners(e,n,o),this._addListeners(t,i,s),this._addListeners(a,r,l)}},{key:"componentWillUnmount",value:function(){var e=this.boardOverlay,t=this.hueBanner,a=this.alphaBanner;this._removeListeners(e),this._removeListeners(t),this._removeListeners(a)}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.paletteClassName,o=t.paletteStyle,i=t.dialogWidth,s=t.dialogHeight,r=Object(b.a)(t,["className","paletteClassName","paletteStyle","dialogWidth","dialogHeight"]),l=this.state,c=l.showDialog,h=l.h,u=l.s,g=l.v,m=l.a,A=l.positionClassName,p=Object(f.hsv2rgb)(h,100,100),y=p.r,H=p.g,j=p.b,k=Object(f.hsv2rgb)(h,100*u,100*g),O=k.r,_=k.g,E=k.b;return d.a.createElement("div",Object.assign({ref:function(t){return e.colorPicker=t},className:v()("color-picker",a)},r),d.a.createElement("button",{ref:function(t){return e.colorPalette=t},className:v()("color-palette",n),style:Object.assign({backgroundColor:"rgba(".concat(O,", ").concat(_,", ").concat(E,", ").concat(m,")")},o),onClick:function(){return c?e._hideDialog():e._showDialog()}}),d.a.createElement("div",{ref:function(t){return e.colorDialog=t},className:v()("color-picker-dialog",{show:c},A),style:c?{width:i,height:s}:{}},d.a.createElement("div",{className:"color-picker-panel"},d.a.createElement("div",{className:"color-board",style:{backgroundColor:"rgb(".concat(y,", ").concat(H,", ").concat(j,")")}},d.a.createElement("div",{className:"color-board-gradient",style:{backgroundImage:"url(".concat(w.a,")")}},d.a.createElement("div",{className:"color-board-pointer",style:{top:"".concat(100*(1-g),"%"),left:"".concat(100*u,"%")}})),d.a.createElement("button",{ref:function(t){return e.boardOverlay=t},className:"color-board-overlay"})),d.a.createElement("button",{ref:function(t){return e.hueBanner=t},className:"hue-banner",style:{backgroundImage:"url(".concat(K.a,")")}},d.a.createElement("div",{className:"thumb",style:{left:"".concat(100*(1-h/360),"%")}})),d.a.createElement("button",{ref:function(t){return e.alphaBanner=t},className:"alpha-banner",style:{backgroundImage:"url(".concat(C.a,")")}},d.a.createElement("div",{className:"alpha-banner-overlay",style:{background:"linear-gradient(to right, transparent, rgb(".concat(O,", ").concat(_,", ").concat(E,"))")}}),d.a.createElement("div",{className:"thumb",style:{left:"".concat(100*m,"%")}})))))}}]),t}(c.Component);M.defaultProps={className:"",paletteClassName:"",paletteStyle:{},dialogWidth:200,dialogHeight:190,color:{r:255*N(),g:255*N(),b:255*N(),a:1},onChange:function(){}};var G=M,P=(a(39),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={top:50,left:50,color:{r:90,g:220,b:100,a:1}},a.dragHandler=a.dragHandler.bind(Object(l.a)(Object(l.a)(a))),a.downHandler=a.downHandler.bind(Object(l.a)(Object(l.a)(a))),a.upHandler=a.upHandler.bind(Object(l.a)(Object(l.a)(a))),a}return Object(r.a)(t,e),Object(o.a)(t,[{key:"dragHandler",value:function(e){if(this.dragging){var t=e.mouse.position,a=t.x,n=t.y;this.setState({top:n,left:a}),this.picker.updateDialogPosition()}}},{key:"downHandler",value:function(e){e.target===this.picker.colorPalette&&(this.dragging=!0)}},{key:"upHandler",value:function(){this.dragging=!1}},{key:"componentDidMount",value:function(){var e=this.wrapper;e.mouse=new g.a(e),e.mouse.onDown(this.downHandler),e.mouse.onUp(this.upHandler),e.mouse.onDrag(this.dragHandler)}},{key:"componentWillUnmount",value:function(){this.wrapper.mouse.detach()}},{key:"render",value:function(){var e=this,t=this.state,a=t.top,n=t.left,o=t.color,i=o.r,s=o.g,r=o.b,l=o.a;return d.a.createElement("div",{id:"demo"},d.a.createElement("span",null,"Hello!"),d.a.createElement("div",{id:"background",style:{backgroundColor:"rgba(".concat(i,", ").concat(s,", ").concat(r,", ").concat(l,")")}},d.a.createElement("span",null,"Drag me")),d.a.createElement("div",{ref:function(t){return e.wrapper=t}},d.a.createElement(G,{ref:function(t){return e.picker=t},id:"color-picker",style:{top:"".concat(a-10,"px"),left:"".concat(n-10,"px")},color:o,onChange:function(t){return e.setState({color:t})}})))}}]),t}(c.Component));Object(h.render)(d.a.createElement(P,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.66b80f99.chunk.js.map