/**
 * @file Dynamic transfer of elements from one place to another at breakpoints.
 * @copyright SineYlo, 2024
 * @version 1.0.7
 * @license MIT
 */

class TransferElements{constructor(...e){if(0===e.length)throw TypeError("at least one object with parameters must be specified for the constructor");const o=[];e=e.map(t=>{if("[object Object]"!==this.#getObjectType(t))throw TypeError("the arguments specified for the constructor must be objects of type 'Object'");["sourceElement","breakpoints"].forEach(e=>{if(!Object.hasOwn(t,e))throw TypeError(`the '${e}' parameter is not specified for the main object`)});var{sourceElement:e,breakpoints:r}=t;if(!(e instanceof Element))throw TypeError("the value specified for the 'sourceElement' parameter must be an object of type 'Element'");if(o.includes(e))throw TypeError(`there can only be one object in the constructor with such a 'sourceElement': '${e.cloneNode().outerHTML}'`);return o.push(e),t.breakpoints=this.#assembleBreakpoints(r,e),t});const r=[...e.reduce((t,{breakpoints:e})=>(Object.keys(e).forEach(e=>{Number(e)&&t.add(e)}),t),new Set).add("default")].sort((e,t)=>e-t),n=r.reduce((e,t)=>(e.set(t,[]),e),new Map);e.forEach(({sourceElement:o,breakpoints:e})=>{Object.entries(e).forEach(([e,{targetElement:t,targetPosition:r}])=>{n.get(e).push({sourceElement:o,targetElement:t,targetPosition:r})})}),n.forEach(t=>{this.#sortBreakpointObjects(t),this.#removeSourceElements(t),this.#insertSourceElements(t,!0),t.length=0,o.forEach(e=>{t.push(this.#generateBreakpointObject(e,!0))}),this.#sortBreakpointObjects(t)});let a="default";new ResizeObserver(([{borderBoxSize:[{inlineSize:e}],target:t}])=>{var e=e+this.#getScrollbarWidth(t),t=this.#getBreakpointTrigger(r,e);a!==t&&(e=n.get(t),this.#removeSourceElements(e),this.#insertSourceElements(e,!1),a=t)}).observe(document.documentElement)}#assembleBreakpoints(e,n){if("[object Object]"!==this.#getObjectType(e))throw TypeError("the value specified for the 'breakpoints' parameter must be an object of type 'Object'");e=Object.entries(e);if(0===e.length)throw TypeError("at least one breakpoint must be specified for the 'breakpoints' object");e=Object.fromEntries(e.map(([e,t])=>{e=Number(e);if(!e||e<=0||e>Number.MAX_SAFE_INTEGER)throw RangeError("the breakpoint trigger must be a safe (integer or fractional) number greater than zero");if("[object Object]"!==this.#getObjectType(t))throw TypeError("the breakpoint object must be of type 'Object'");if(!Object.hasOwn(t,"targetElement"))throw TypeError("the 'targetElement' parameter is not specified for the breakpoint object");var{targetElement:r,targetPosition:o}=t;if(!(r instanceof Element))throw TypeError("the value specified for the 'targetElement' parameter must be an object of type 'Element'");if(n===r)throw TypeError("the value specified for the 'targetElement' parameter must be different from the value specified for the 'sourceElement' parameter");if(this.#isTargetElementDescendantOfSourceElement(r,n))throw TypeError("the element that is specified as the value for the 'targetElement' parameter must not be a descendant of the element specified as the value for the 'sourceElement' parameter");if(this.#isTagOfTargetElementSelfClosing(r))throw TypeError("the element specified as the value for the 'targetElement' parameter must be a paired tag");if(Object.hasOwn(t,"targetPosition")){if("number"!=typeof o)throw TypeError("the value specified for the 'targetPosition' parameter must be of type 'number'");if(o<0||!Number.isSafeInteger(o))throw RangeError("the number specified as the value for the 'targetPosition' parameter must be a non-negative safe integer")}return[e,{targetPosition:o??0,...t}]}));return e.default=this.#generateBreakpointObject(n,!1),e}#getChildElementsOfTargetElement(e){return e.children}#getBreakpointTrigger(e,t){let r=0,o=e.length-2,n;for(;r<=o;){var a=Math.floor((r+o)/2),i=e[a];if(i==t)return i;t<i?o=a-1:r=a+1,0<i-t&&(n=i)}return n??"default"}#getScrollbarWidth(e){var t=window.innerWidth,e=Math.min(e.clientWidth,e.offsetWidth);let r=0;return e!==t&&(r+=t-e),r}#getObjectType(e){return Object.prototype.toString.call(e)}#isTargetElementDescendantOfSourceElement(e,t){for(;e=e.parentElement;)if(e===t)return!0;return!1}#isTagOfTargetElementSelfClosing(e){return!new RegExp(/<\/[a-zA-Z]+>$/).test(e.outerHTML)}#sortBreakpointObjects(e){1<e.length&&e.sort((e,t)=>e.targetPosition-t.targetPosition)}#removeSourceElements(e){e.forEach(({sourceElement:e})=>{e.remove()})}#insertSourceElements(e,n){e.forEach(({sourceElement:e,targetElement:t,targetPosition:r})=>{var o=this.#getChildElementsOfTargetElement(t),o=(n&&this.#throwExceptionIfMaximumTargetPositionIsExceeded(o,r),o[r]);o?o.before(e):t.append(e)})}#throwExceptionIfMaximumTargetPositionIsExceeded(e,t){e=e.length;if(e<t)throw RangeError(`the number specified as the value for the 'targetPosition' parameter exceeds the maximum allowed value of '${e}'`)}#generateBreakpointObject(t,e){var r=t.parentElement,r={targetElement:r,targetPosition:[...r.children].findIndex(e=>e===t)};return e&&(r.sourceElement=t),r}}
//# sourceMappingURL=transfer-elements.min.js.map