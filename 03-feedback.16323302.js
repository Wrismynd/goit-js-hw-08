!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var o,i,u,f,a,c,l=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError(r);function j(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function O(e){return l=e,a=setTimeout(h,t),s?j(e):f}function S(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function h(){var e=p();if(S(e))return T(e);a=setTimeout(h,function(e){var n=t-(e-c);return d?m(n,u-(e-l)):n}(e))}function T(e){return a=void 0,b&&o?j(e):(o=i=void 0,f)}function w(){var e=p(),n=S(e);if(o=arguments,i=this,c=e,n){if(void 0===a)return O(c);if(d)return a=setTimeout(h,t),j(c)}return void 0===a&&(a=setTimeout(h,t)),f}return t=y(t)||0,g(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(y(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},w.flush=function(){return void 0===a?f:T(p())},w}function g(e){var r=void 0===e?"undefined":t(n)(e);return!!e&&("object"==r||"function"==r)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=g(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var c=u.test(e);return c||f.test(e)?a(e.slice(2),c?2:8):i.test(e)?NaN:+e}var j={form:document.querySelector(".feedback-form")},O="feedback-form-state",S=JSON.parse(localStorage.getItem(O))||{};j.form.addEventListener("input",(function(e){S[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(S))})),j.form.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(O),e.target.reset(),S={}})),function(){var e=JSON.parse(localStorage.getItem(O));if(e){var t=j.form.elements,n=t.email,r=t.message;n.value=e.email||"",r.value=e.message||""}}()}();
//# sourceMappingURL=03-feedback.16323302.js.map
