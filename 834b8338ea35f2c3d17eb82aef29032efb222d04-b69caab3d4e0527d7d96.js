(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+M/S":function(t,e,r){"use strict";var n=r("q1tI"),o=r("zCpp"),a=r("nTsD");function i(t){var e=Object(a.a)((function(e){return new e.mapLib.ScaleControl(t)}),{position:t.position});return e.options.unit===t.unit&&e.options.maxWidth===t.maxWidth||(e.options.maxWidth=t.maxWidth,e.setUnit(t.unit)),Object(n.useEffect)((function(){Object(o.a)(e._container,t.style)}),[t.style]),null}i.defaultProps={unit:"metric",maxWidth:100},e.a=n.memo(i)},"+t2D":function(t,e,r){"use strict";function n(t,e){var r=Array.isArray(t)?t[0]:t?t.x:0,n=Array.isArray(t)?t[1]:t?t.y:0,o=Array.isArray(e)?e[0]:e?e.x:0,a=Array.isArray(e)?e[1]:e?e.y:0;return r===o&&n===a}function o(t,e){if(t===e)return!0;if(!t||!e)return!1;if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!o(t[r],e[r]))return!1;return!0}if(Array.isArray(e))return!1;if("object"==typeof t&&"object"==typeof e){var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(var i=0,u=n;i<u.length;i++){var c=u[i];if(!e.hasOwnProperty(c))return!1;if(!o(t[c],e[c]))return!1}return!0}return!1}r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}))},"5gko":function(t,e,r){"use strict";var n=r("rePB"),o=r("q1tI"),a=r("tP6N"),i=r("so0g"),u=r("+t2D");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=0;e.a=function(t){var e=Object(o.useContext)(a.a).map,r=Object(o.useRef)(t),n=Object(o.useState)(0)[1],c=Object(o.useMemo)((function(){return t.id||"jsx-layer-"+l++}),[]);if(Object(o.useEffect)((function(){if(e){var t=function(){return n((function(t){return t+1}))};return e.on("styledata",t),t(),function(){e.off("styledata",t),e.style&&e.style._loaded&&e.removeLayer(c)}}}),[e]),e&&e.style&&e.getLayer(c))try{!function(t,e,r,n){if(Object(i.a)(r.id===n.id,"layer id changed"),Object(i.a)(r.type===n.type,"layer type changed"),"custom"!==r.type&&"custom"!==n.type){var o=r.layout,a=void 0===o?{}:o,c=r.paint,s=void 0===c?{}:c,l=r.filter,f=r.minzoom,p=r.maxzoom,d=r.beforeId;if(d!==n.beforeId&&t.moveLayer(e,d),a!==n.layout){var m=n.layout||{};for(var v in a)Object(u.b)(a[v],m[v])||t.setLayoutProperty(e,v,a[v]);for(var y in m)a.hasOwnProperty(y)||t.setLayoutProperty(e,y,void 0)}if(s!==n.paint){var b=n.paint||{};for(var g in s)Object(u.b)(s[g],b[g])||t.setPaintProperty(e,g,s[g]);for(var h in b)s.hasOwnProperty(h)||t.setPaintProperty(e,h,void 0)}Object(u.b)(l,n.filter)||t.setFilter(e,l),f===n.minzoom&&p===n.maxzoom||t.setLayerZoomRange(e,f,p)}}(e,c,t,r.current)}catch(f){console.warn(f)}else!function(t,e,r){if(t.style&&t.style._loaded){var n=s(s({},r),{},{id:e});delete n.beforeId,t.addLayer(n,r.beforeId)}}(e,c,t);return r.current=t,null}},"83gU":function(t,e,r){"use strict";var n=r("q1tI"),o=r("zCpp"),a=r("nTsD"),i=Object(n.forwardRef)((function(t,e){var r=Object(n.useRef)({props:t}),i=Object(a.a)((function(e){var n=new e.mapLib.GeolocateControl(t);return n.on("geolocate",(function(t){var e,n;null===(e=(n=r.current.props).onGeolocate)||void 0===e||e.call(n,t)})),n.on("error",(function(t){var e,n;null===(e=(n=r.current.props).onError)||void 0===e||e.call(n,t)})),n.on("outofmaxbounds",(function(t){var e,n;null===(e=(n=r.current.props).onOutOfMaxBounds)||void 0===e||e.call(n,t)})),n.on("trackuserlocationstart",(function(t){var e,n;null===(e=(n=r.current.props).onTrackUserLocationStart)||void 0===e||e.call(n,t)})),n.on("trackuserlocationend",(function(t){var e,n;null===(e=(n=r.current.props).onTrackUserLocationEnd)||void 0===e||e.call(n,t)})),n}),{position:t.position});return r.current.props=t,Object(n.useImperativeHandle)(e,(function(){return{trigger:function(){return i.trigger()}}}),[]),Object(n.useEffect)((function(){Object(o.a)(i._container,t.style)}),[t.style]),null}));i.displayName="GeolocateControl",e.a=n.memo(i)},AOuc:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("rePB");var n=r("q1tI");var o=n.createContext(null)},BB3P:function(t,e,r){"use strict";var n=r("rePB"),o=r("q1tI"),a=r("tP6N"),i=r("so0g"),u=r("+t2D");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var s=0;function l(t,e,r){if(t.style&&t.style._loaded){var o=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},r);return delete o.id,delete o.children,t.addSource(e,o),t.getSource(e)}return null}e.a=function(t){var e=Object(o.useContext)(a.a).map,r=Object(o.useRef)(t),n=Object(o.useState)(0)[1],c=Object(o.useMemo)((function(){return t.id||"jsx-source-"+s++}),[]);Object(o.useEffect)((function(){if(e){var t=function(){return n((function(t){return t+1}))};return e.on("styledata",t),t(),function(){e.off("styledata",t),setTimeout((function(){e.style&&e.style._loaded&&e.getSource(c)&&e.removeSource(c)}),0)}}}),[e]);var f=e&&e.style&&e.getSource(c);return f?function(t,e,r){Object(i.a)(e.id===r.id,"source id changed"),Object(i.a)(e.type===r.type,"source type changed");var n="",o=0;for(var a in e)"children"===a||"id"===a||Object(u.b)(r[a],e[a])||(n=a,o++);if(o){var c=e.type;if("geojson"===c)t.setData(e.data);else if("image"===c)t.updateImage({url:e.url,coordinates:e.coordinates});else if("canvas"!==c&&"video"!==c||1!==o||"coordinates"!==n)if("vector"===c&&"setUrl"in t)switch(n){case"url":t.setUrl(e.url);break;case"tiles":t.setTiles(e.tiles)}else console.warn("Unable to update <Source> prop: "+n);else t.setCoordinates(e.coordinates)}}(f,t,r.current):f=l(e,c,t),r.current=t,f&&o.Children.map(t.children,(function(t){return t&&Object(o.cloneElement)(t,{source:c})}))||null}},OSzm:function(t,e,r){"use strict";var n=r("q1tI"),o=r("zCpp"),a=r("nTsD");function i(t){var e=Object(a.a)((function(e){return new e.mapLib.NavigationControl(t)}),{position:t.position});return Object(n.useEffect)((function(){Object(o.a)(e._container,t.style)}),[t.style]),null}e.a=n.memo(i)},SA6Z:function(t,e,r){"use strict";var n=r("rePB"),o=r("q1tI"),a=r("i8i4"),i=r("zCpp"),u=r("tP6N"),c=r("+t2D");function s(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){return new Set(t?t.trim().split(/\s+/):[])}function d(t){var e=Object(o.useContext)(u.a),r=e.map,l=e.mapLib,d=Object(o.useMemo)((function(){return document.createElement("div")}),[]),m=Object(o.useMemo)((function(){var e=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t);return new l.Popup(e).setLngLat([t.longitude,t.latitude])}),[]),v=Object(o.useRef)({props:t});if(v.current.props=t,Object(o.useEffect)((function(){return m.on("open",(function(t){var e,r;null===(e=(r=v.current.props).onOpen)||void 0===e||e.call(r,t)})),m.on("close",(function(t){var e,r;null===(e=(r=v.current.props).onClose)||void 0===e||e.call(r,t)})),m.setDOMContent(d).addTo(r),function(){m.remove()}}),[]),Object(o.useEffect)((function(){Object(i.a)(m.getElement(),t.style)}),[t.style]),m.isOpen()&&(m.getLngLat().lng===t.longitude&&m.getLngLat().lat===t.latitude||m.setLngLat([t.longitude,t.latitude]),t.offset&&!Object(c.b)(m.options.offset,t.offset)&&m.setOffset(t.offset),m.options.anchor===t.anchor&&m.options.maxWidth===t.maxWidth||(m.options.anchor=t.anchor,m.setMaxWidth(t.maxWidth)),m.options.className!==t.className)){for(var y,b=p(m.options.className),g=p(t.className),h=s(b);!(y=h()).done;){var O=y.value;g.has(O)||m.removeClassName(O)}for(var j,P=s(g);!(j=P()).done;){var w=j.value;b.has(w)||m.addClassName(w)}m.options.className=t.className}return Object(a.createPortal)(t.children,d)}e.a=o.memo(d)},a1KU:function(t,e,r){"use strict";var n=r("q1tI"),o=r("zCpp"),a=r("nTsD");function i(t){var e=Object(a.a)((function(e){return new e.mapLib.FullscreenControl({container:t.containerId&&document.getElementById(t.containerId)})}),{position:t.position});return Object(n.useEffect)((function(){Object(o.a)(e._controlContainer,t.style)}),[t.style]),null}e.a=n.memo(i)},bzer:function(t,e,r){"use strict";var n=r("tP6N");r.d(e,"default",(function(){return n.b})),r.d(e,"Map",(function(){return n.b}));var o=r("jnJa");r.d(e,"Marker",(function(){return o.a}));var a=r("SA6Z");r.d(e,"Popup",(function(){return a.a}));r("zfLA");var i=r("a1KU");r.d(e,"FullscreenControl",(function(){return i.a}));var u=r("83gU");r.d(e,"GeolocateControl",(function(){return u.a}));var c=r("OSzm");r.d(e,"NavigationControl",(function(){return c.a}));var s=r("+M/S");r.d(e,"ScaleControl",(function(){return s.a}));var l=r("BB3P");r.d(e,"Source",(function(){return l.a}));var f=r("5gko");r.d(e,"Layer",(function(){return f.a}));var p=r("nTsD");r.d(e,"useControl",(function(){return p.a}));r("AOuc"),r("nFRI")},jnJa:function(t,e,r){"use strict";var n=r("rePB"),o=r("q1tI"),a=r("i8i4"),i=r("zCpp"),u=r("tP6N"),c=r("+t2D");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t){var e=Object(o.useContext)(u.a),r=e.map,n=e.mapLib,s=Object(o.useMemo)((function(){var e=!1;o.Children.forEach(t.children,(function(t){t&&(e=!0)}));var r=l(l({},t),{},{element:e?document.createElement("div"):null});return new n.Marker(r).setLngLat([t.longitude,t.latitude])}),[]),f=Object(o.useRef)({props:t});return f.current.props=t,Object(o.useEffect)((function(){return s.on("dragstart",(function(t){var e,r,n=t;n.lngLat=s.getLngLat(),null===(e=(r=f.current.props).onDragStart)||void 0===e||e.call(r,n)})),s.on("drag",(function(t){var e,r,n=t;n.lngLat=s.getLngLat(),null===(e=(r=f.current.props).onDrag)||void 0===e||e.call(r,n)})),s.on("dragend",(function(t){var e,r,n=t;n.lngLat=s.getLngLat(),null===(e=(r=f.current.props).onDragEnd)||void 0===e||e.call(r,n)})),s.addTo(r),function(){s.remove()}}),[]),Object(o.useEffect)((function(){Object(i.a)(s.getElement(),t.style)}),[t.style]),s.getLngLat().lng===t.longitude&&s.getLngLat().lat===t.latitude||s.setLngLat([t.longitude,t.latitude]),t.offset&&!Object(c.a)(s.getOffset(),t.offset)&&s.setOffset(t.offset),s.isDraggable()!==t.draggable&&s.setDraggable(t.draggable),s.getRotation()!==t.rotation&&s.setRotation(t.rotation),s.getRotationAlignment()!==t.rotationAlignment&&s.setRotationAlignment(t.rotationAlignment),s.getPitchAlignment()!==t.pitchAlignment&&s.setPitchAlignment(t.pitchAlignment),s.getPopup()!==t.popup&&s.setPopup(t.popup),Object(a.createPortal)(t.children,s.getElement())}f.defaultProps={draggable:!1,popup:null,rotation:0,rotationAlignment:"auto",pitchAlignment:"auto"},e.a=o.memo(f)},nFRI:function(t,e){},nTsD:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("q1tI"),o=r("tP6N");function a(t,e,r){var a=Object(n.useContext)(o.a),i=Object(n.useMemo)((function(){return t(a)}),[]);return Object(n.useEffect)((function(){var t,n=a.map;n.hasControl(i)||n.addControl(i,null===(t=r||e)||void 0===t?void 0:t.position);return function(){"function"==typeof e&&e(a),n.hasControl(i)&&n.removeControl(i)}}),[]),i}},so0g:function(t,e,r){"use strict";function n(t,e){if(!t)throw new Error(e)}r.d(e,"a",(function(){return n}))},tP6N:function(t,e,r){"use strict";r.d(e,"a",(function(){return R}));var n=r("rePB"),o=r("q1tI"),a=r("AOuc"),i=r("vuIU");function u(t){return{longitude:t.center.lng,latitude:t.center.lat,zoom:t.zoom,pitch:t.pitch,bearing:t.bearing,padding:t.padding}}function c(t,e){var r=e.viewState||e,n=!1;if("longitude"in r&&"latitude"in r){var o=t.center;t.center=new o.constructor(r.longitude,r.latitude),n=n||o!==t.center}if("zoom"in r){var a=t.zoom;t.zoom=r.zoom,n=n||a!==t.zoom}if("bearing"in r){var i=t.bearing;t.bearing=r.bearing,n=n||i!==t.bearing}if("pitch"in r){var u=t.pitch;t.pitch=r.pitch,n=n||u!==t.pitch}return r.padding&&!t.isPaddingEqual(r.padding)&&(n=!0,t.padding=r.padding),n}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function m(t){if(!t)return null;if("string"==typeof t)return t;if("toJS"in t&&(t=t.toJS()),!t.layers)return t;for(var e,r={},n=f(t.layers);!(e=n()).done;){var o=e.value;r[o.id]=o}var a=t.layers.map((function(t){var e=r[t.ref],n=null;if("interactive"in t&&delete(n=l({},t)).interactive,e){delete(n=n||l({},t)).ref;for(var o,a=f(d);!(o=a()).done;){var i=o.value;i in e&&(n[i]=e[i])}}return n||t}));return l(l({},t),{},{layers:a})}var v=r("+t2D");function y(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},j={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},P={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},w=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],S=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"],_=function(){function t(t,e){var r=this;this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=function(t){var e=r.props[P[t.type]];e&&e(t)},this._onPointerEvent=function(t){"mousemove"!==t.type&&"mouseout"!==t.type||r._updateHover(t);var e=r.props[O[t.type]];if(e){if(r.props.interactiveLayerIds&&"mouseover"!==t.type&&"mouseout"!==t.type){var n=r._hoveredFeatures||r._map.queryRenderedFeatures(t.point,{layers:r.props.interactiveLayerIds});if(!n.length)return;t.features=n}e(t),delete t.features}},this._onCameraEvent=function(t){if(!r._internalUpdate){var e=r.props[j[t.type]];e&&e(t)}t.type in r._deferredEvents&&(r._deferredEvents[t.type]=!1)},this._MapClass=t,this.props=e}var e=t.prototype;return e.setProps=function(t){var e=this.props;this.props=t;var r=this._updateSettings(t,e);r&&(this._renderTransform=this._map.transform.clone());var n=this._updateSize(t),o=this._updateViewState(t,!0);this._updateStyle(t,e),this._updateStyleComponents(t,e),this._updateHandlers(t,e),(r||n||o&&!this._map.isMoving())&&this.redraw()},e.initialize=function(t){var e=this,r=this.props,n=h(h(h({},r),r.initialViewState),{},{accessToken:r.mapboxAccessToken||E()||null,container:t,style:m(r.mapStyle)}),o=n.initialViewState||n.viewState||n;if(Object.assign(n,{center:[o.longitude||0,o.latitude||0],zoom:o.zoom||0,pitch:o.pitch||0,bearing:o.bearing||0}),r.gl){var a=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(){return HTMLCanvasElement.prototype.getContext=a,r.gl}}var i=new this._MapClass(n);o.padding&&i.setPadding(o.padding),this._renderTransform=i.transform.clone();var u=i._render;i._render=function(t){e._inRender=!0,u.call(i,t),e._inRender=!1};var c=i._renderTaskQueue.run;i._renderTaskQueue.run=function(t){c.call(i._renderTaskQueue,t),e._onBeforeRepaint()},i.on("render",(function(){return e._onAfterRepaint()}));var s=i.fire;for(var l in i.fire=this._fireEvent.bind(this,s),i.on("resize",(function(){e._renderTransform.resize(i.transform.width,i.transform.height)})),i.on("styledata",(function(){return e._updateStyleComponents(e.props,{})})),i.on("sourcedata",(function(){return e._updateStyleComponents(e.props,{})})),O)i.on(l,this._onPointerEvent);for(var f in j)i.on(f,this._onCameraEvent);for(var p in P)i.on(p,this._onEvent);this._map=i},e.destroy=function(){this._map.remove()},e.redraw=function(){var t=this._map;!this._inRender&&t.style&&(t._frame&&(t._frame.cancel(),t._frame=null),t._render())},e._updateSize=function(t){var e=t.viewState;if(e){var r=this._map;if(e.width!==r.transform.width||e.height!==r.transform.height)return r.resize(),!0}return!1},e._updateViewState=function(t,e){if(this._internalUpdate)return!1;var r=this._map,n=this._renderTransform,o=n.zoom,a=n.pitch,i=n.bearing,s=c(n,h(h({},u(r.transform)),t));if(s&&e){var l=this._deferredEvents;l.move=!0,l.zoom||(l.zoom=o!==n.zoom),l.rotate||(l.rotate=i!==n.bearing),l.pitch||(l.pitch=a!==n.pitch)}return r.isMoving()||c(r.transform,t),s},e._updateSettings=function(t,e){for(var r,n=this._map,o=!1,a=y(w);!(r=a()).done;){var i=r.value;i in t&&!Object(v.b)(t[i],e[i])&&(o=!0,n["set"+i[0].toUpperCase()+i.slice(1)](t[i]))}return o},e._updateStyle=function(t,e){if(t.cursor!==e.cursor&&(this._map.getCanvas().style.cursor=t.cursor),t.mapStyle!==e.mapStyle){var r={diff:t.styleDiffing};return"localIdeographFontFamily"in t&&(r.localIdeographFontFamily=t.localIdeographFontFamily),this._map.setStyle(m(t.mapStyle),r),!0}return!1},e._updateStyleComponents=function(t,e){var r=this._map,n=!1;return r.style.loaded()&&("light"in t&&!Object(v.b)(t.light,e.light)&&(n=!0,r.setLight(t.light)),"fog"in t&&!Object(v.b)(t.fog,e.fog)&&(n=!0,r.setFog(t.fog)),"terrain"in t&&!Object(v.b)(t.terrain,e.terrain)&&(t.terrain&&!r.getSource(t.terrain.source)||(n=!0,r.setTerrain(t.terrain)))),n},e._updateHandlers=function(t,e){for(var r,n=this._map,o=!1,a=y(S);!(r=a()).done;){var i=r.value,u=t[i];Object(v.b)(u,e[i])||(o=!0,u?n[i].enable(u):n[i].disable())}return o},e._updateHover=function(t){var e=this.props;if(e.interactiveLayerIds&&(e.onMouseMove||e.onMouseEnter||e.onMouseLeave)){var r,n,o=t.type,a=(null===(r=this._hoveredFeatures)||void 0===r?void 0:r.length)>0;if("mousemove"===o)try{n=this._map.queryRenderedFeatures(t.point,{layers:e.interactiveLayerIds})}catch(u){n=[]}else n=[];var i=n.length>0;!i&&a&&(t.type="mouseleave",this._onPointerEvent(t)),this._hoveredFeatures=n,i&&!a&&(t.type="mouseenter",this._onPointerEvent(t)),t.type=o}else this._hoveredFeatures=null},e._fireEvent=function(t,e,r){var n=this._map,o=n.transform,a="string"==typeof e?e:e.type;return"move"===a&&this._updateViewState(this.props,!1),a in j&&("object"==typeof e&&(e.viewState=u(o)),this._map.isMoving())?(n.transform=this._renderTransform,t.call(n,e,r),n.transform=o,n):(t.call(n,e,r),n)},e._onBeforeRepaint=function(){var t=this,e=this._map;for(var r in this._internalUpdate=!0,this._deferredEvents)this._deferredEvents[r]&&e.fire(r);this._internalUpdate=!1;var n=this._map.transform;this._map.transform=this._renderTransform,this._onAfterRepaint=function(){t._map.transform=n}},Object(i.a)(t,[{key:"map",get:function(){return this._map}},{key:"transform",get:function(){return this._renderTransform}}]),t}();function E(){var t=null;if("undefined"!=typeof location){var e=/access_token=([^&\/]*)/.exec(location.search);t=e&&e[1]}try{t=t||"pk.eyJ1IjoidWNmLW1hcGJveCIsImEiOiJja2tyNHQzdnIzYmNnMndwZGI3djNzdjVyIn0.xgCXV9mLZ47q7easx6WLCQ"}catch(r){}try{t=t||{}.REACT_APP_MAPBOX_ACCESS_TOKEN}catch(n){}return t}function C(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return L(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var x=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function A(t,e){if(!t)return null;for(var r,n=t.map,o={getMap:function(){return n},getCenter:function(){return t.transform.center},getZoom:function(){return t.transform.zoom},getBearing:function(){return t.transform.bearing},getPitch:function(){return t.transform.pitch},getPadding:function(){return t.transform.padding},getBounds:function(){return t.transform.getBounds()},project:function(r){return t.transform.locationPoint(e.LngLat.convert(r))},unproject:function(r){return t.transform.pointLocation(e.Point.convert(r))}},a=C(function(t){var e=new Set,r=t;for(;r;){for(var n,o=C(Object.getOwnPropertyNames(r));!(n=o()).done;){var a=n.value;"_"!==a[0]&&"function"==typeof t[a]&&"fire"!==a&&"setEventedParent"!==a&&e.add(a)}r=Object.getPrototypeOf(r)}return Array.from(e)}(n));!(r=a()).done;){var i=r.value;i in o||x.includes(i)||(o[i]=n[i].bind(n))}return o}var M="undefined"!=typeof document?o.useLayoutEffect:o.useEffect;function D(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return I(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var z=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var R=o.createContext(null),k={minZoom:0,maxZoom:22,minPitch:0,maxPitch:85,scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,touchPitch:!0,mapStyle:{version:8,sources:{},layers:[]},styleDiffing:!0,projection:"mercator",renderWorldCopies:!0,onError:function(t){return console.error(t.error)},RTLTextPlugin:"https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"},Z=Object(o.forwardRef)((function(t,e){var i=Object(o.useContext)(a.a),u=Object(o.useState)(null),c=u[0],s=u[1],l=Object(o.useRef)(),f=Object(o.useRef)({mapLib:null,map:null}).current;Object(o.useEffect)((function(){var e,n=t.mapLib,o=!0;return Promise.resolve(n||r.e(27).then(r.t.bind(null,"bhPm",7))).then((function(r){if(o){if(r.Map||(r=r.default),!r||!r.Map)throw new Error("Invalid mapLib");if(!r.supported(t))throw new Error("Map is not supported by this browser");!function(t,e){for(var r,n=D(z);!(r=n()).done;){var o=r.value;o in e&&(t[o]=e[o])}e.RTLTextPlugin&&t.getRTLTextPluginStatus&&"unavailable"===t.getRTLTextPluginStatus()&&t.setRTLTextPlugin(e.RTLTextPlugin,(function(t){t&&console.error(t)}),!1)}(r,t),(e=new _(r.Map,t)).initialize(l.current),f.map=e.map,f.mapLib=r,s(e),null==i||i.onMapMount(A(e,r),t.id)}})).catch((function(e){t.onError({type:"error",target:null,originalEvent:null,error:e})})),function(){o=!1,e&&(null==i||i.onMapUnmount(t.id),e.destroy())}}),[]),M((function(){c&&c.setProps(t)})),Object(o.useImperativeHandle)(e,(function(){return A(c,f.mapLib)}),[c]);var p=Object(o.useMemo)((function(){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({position:"relative",width:"100%",height:"100%"},t.style)}),[t.style]);return o.createElement("div",{id:t.id,ref:l,style:p},c&&o.createElement(R.Provider,{value:f},t.children))}));Z.displayName="Map",Z.defaultProps=k;e.b=Z},zCpp:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function o(t,e){if(t&&e){var r=t.style;for(var o in e){var a=e[o];Number.isFinite(a)&&!n.test(o)?r[o]=a+"px":r[o]=a}}}},zfLA:function(t,e,r){"use strict";r("q1tI"),r("zCpp"),r("nTsD")}}]);