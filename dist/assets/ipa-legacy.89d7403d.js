!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,c=[],i=!0,a=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(u){a=!0,o=u}finally{try{i||null==t.return||t.return()}finally{if(a)throw o}}return c}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.6e232ed4.js","./useT-legacy.0abe3e4f.js","./File-legacy.2af0c9d1.js","./useUtil-legacy.b878f67a.js","./api-legacy.6f08ccd2.js","./icon-legacy.90cae876.js","./index-legacy.4eaba2e5.js"],(function(e){"use strict";var t,r,o,c,i,a,u,l,f;return{setters:[function(n){t=n.d,r=n.e,o=n.B,c=n.b8,i=n.cr,a=n.o,u=n.cq},function(n){l=n.u},function(n){f=n.F},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=l(),s=n(t(!1),2),y=s[0],d=s[1];return r(f,{get children(){return r(o,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(c,"/i/").concat(i(encodeURIComponent(a.raw_url)+"/"+u(encodeURIComponent(a.obj.name))),".plist")},onClick:function(){d(!0)},get children(){return e("home.preview.".concat(y()?"installing":"install"))}})}})}))}}}))}();