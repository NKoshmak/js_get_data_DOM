function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}var r,e=function(r){if(Array.isArray(r))return t(r)}(r=document.getElementsByClassName("population"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=0;e.forEach(function(t){n+=+t.textContent.replace(/,/g,"")});var o=n/e.length;document.querySelector(".average-population").innerText=o.toLocaleString("en-US"),document.querySelector(".total-population").innerText=n.toLocaleString("en-US");
//# sourceMappingURL=index.9c962d5b.js.map
