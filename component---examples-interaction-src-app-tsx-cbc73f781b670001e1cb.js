(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{AVzd:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h})),n.d(t,"renderToDom",(function(){return d}));var r=n("rePB"),a=n("q1tI"),c=n("i8i4"),o=n("bzer"),l=/(^|[A-Z])[a-z]*/g;function u(e){return e.match(l).join(" ")}function i(e){var t=e.name,n=e.value,r=e.onChange;return a.createElement("div",{className:"input"},a.createElement("label",null,u(t)),a.createElement("input",{type:"checkbox",checked:n,onChange:function(e){return r(t,e.target.checked)}}))}function m(e){var t=e.name,n=e.value,r=e.onChange;return a.createElement("div",{className:"input"},a.createElement("label",null,u(t)),a.createElement("input",{type:"number",value:n,onChange:function(e){return r(t,Number(e.target.value))}}))}function s(e){var t=e.settings,n=e.onChange;return a.createElement("div",{className:"control-panel"},a.createElement("h3",null,"Limit Map Interaction"),a.createElement("p",null,"Turn interactive features off/on."),a.createElement("div",{className:"source-link"},a.createElement("a",{href:"https://github.com/visgl/react-map-gl/tree/7.0-release/examples/interaction",target:"_new"},"View Code ↗")),a.createElement("hr",null),Object.keys(t).map((function(e){return function(e,t){switch(typeof t){case"boolean":return a.createElement(i,{key:e,name:e,value:t,onChange:n});case"number":return a.createElement(m,{key:e,name:e,value:t,onChange:n});default:return null}}(e,t[e])})),a.createElement("hr",null))}var b=a.memo(s);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={latitude:37.729,longitude:-122.36,zoom:11,bearing:0,pitch:50};function h(){var e=Object(a.useState)({scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,touchPitch:!0,minZoom:0,maxZoom:20,minPitch:0,maxPitch:85}),t=e[0],n=e[1],r=Object(a.useCallback)((function(e,t){return n((function(n){var r;return f(f({},n),{},((r={})[e]=t,r))}))}),[]);return a.createElement(a.Fragment,null,a.createElement(o.default,Object.assign({initialViewState:g},t,{mapStyle:"mapbox://styles/mapbox/dark-v9",mapboxAccessToken:""})),a.createElement(b,{settings:t,onChange:r}))}function d(e){Object(c.render)(a.createElement(h,null),e)}}}]);