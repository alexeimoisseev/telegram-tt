"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[6470],{26470:e=>{function r(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function t(e,r){for(var t,n="",i=0,l=-1,o=0,a=0;a<=e.length;++a){if(a<e.length)t=e.charCodeAt(a);else{if(47===t)break;t=47}if(47===t){if(l===a-1||1===o);else if(l!==a-1&&2===o){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var h=n.lastIndexOf("/");if(h!==n.length-1){-1===h?(n="",i=0):i=(n=n.slice(0,h)).length-1-n.lastIndexOf("/"),l=a,o=0;continue}}else if(2===n.length||1===n.length){n="",i=0,l=a,o=0;continue}r&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(l+1,a):n=e.slice(l+1,a),i=a-l-1;l=a,o=0}else 46===t&&-1!==o?++o:o=-1}return n}var n={resolve:function(){for(var e,n="",i=!1,l=arguments.length-1;l>=-1&&!i;l--){var o;l>=0?o=arguments[l]:(void 0===e&&(e=process.cwd()),o=e),r(o),0!==o.length&&(n=o+"/"+n,i=47===o.charCodeAt(0))}return n=t(n,!i),i?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(r(e),0===e.length)return".";var n=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=t(e,!n)).length||n||(e="."),e.length>0&&i&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return r(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var i=arguments[t];r(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":n.normalize(e)},relative:function(e,t){if(r(e),r(t),e===t)return"";if((e=n.resolve(e))===(t=n.resolve(t)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var l=e.length,o=l-i,a=1;a<t.length&&47===t.charCodeAt(a);++a);for(var h=t.length-a,f=o<h?o:h,c=-1,s=0;s<=f;++s){if(s===f){if(h>f){if(47===t.charCodeAt(a+s))return t.slice(a+s+1);if(0===s)return t.slice(a+s)}else o>f&&(47===e.charCodeAt(i+s)?c=s:0===s&&(c=0));break}var g=e.charCodeAt(i+s);if(g!==t.charCodeAt(a+s))break;47===g&&(c=s)}var u="";for(s=i+c+1;s<=l;++s)s!==l&&47!==e.charCodeAt(s)||(0===u.length?u+="..":u+="/..");return u.length>0?u+t.slice(a+c):(a+=c,47===t.charCodeAt(a)&&++a,t.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(r(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,l=!0,o=e.length-1;o>=1;--o)if(47===(t=e.charCodeAt(o))){if(!l){i=o;break}}else l=!1;return-1===i?n?"/":".":n&&1===i?"//":e.slice(0,i)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');r(e);var n,i=0,l=-1,o=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var a=t.length-1,h=-1;for(n=e.length-1;n>=0;--n){var f=e.charCodeAt(n);if(47===f){if(!o){i=n+1;break}}else-1===h&&(o=!1,h=n+1),a>=0&&(f===t.charCodeAt(a)?-1==--a&&(l=n):(a=-1,l=h))}return i===l?l=h:-1===l&&(l=e.length),e.slice(i,l)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!o){i=n+1;break}}else-1===l&&(o=!1,l=n+1);return-1===l?"":e.slice(i,l)},extname:function(e){r(e);for(var t=-1,n=0,i=-1,l=!0,o=0,a=e.length-1;a>=0;--a){var h=e.charCodeAt(a);if(47!==h)-1===i&&(l=!1,i=a+1),46===h?-1===t?t=a:1!==o&&(o=1):-1!==t&&(o=-1);else if(!l){n=a+1;break}}return-1===t||-1===i||0===o||1===o&&t===i-1&&t===n+1?"":e.slice(t,i)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,r){var t=r.dir||r.root,n=r.base||(r.name||"")+(r.ext||"");return t?t===r.root?t+n:t+"/"+n:n}(0,e)},parse:function(e){r(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var n,i=e.charCodeAt(0),l=47===i;l?(t.root="/",n=1):n=0;for(var o=-1,a=0,h=-1,f=!0,c=e.length-1,s=0;c>=n;--c)if(47!==(i=e.charCodeAt(c)))-1===h&&(f=!1,h=c+1),46===i?-1===o?o=c:1!==s&&(s=1):-1!==o&&(s=-1);else if(!f){a=c+1;break}return-1===o||-1===h||0===s||1===s&&o===h-1&&o===a+1?-1!==h&&(t.base=t.name=0===a&&l?e.slice(1,h):e.slice(a,h)):(0===a&&l?(t.name=e.slice(1,o),t.base=e.slice(1,h)):(t.name=e.slice(a,o),t.base=e.slice(a,h)),t.ext=e.slice(o,h)),a>0?t.dir=e.slice(0,a-1):l&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n}}]);
//# sourceMappingURL=6470.128808b02bc435a0b784.js.map