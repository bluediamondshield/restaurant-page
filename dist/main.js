(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");c.length&&(t=c[c.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"d34da7567823e45216e2.jpeg",n=document.querySelector("div#content");!function(){const e=document.createElement("div");e.classList.add("top-bar");const c=document.createElement("a");c.classList.add("about-link"),c.href="",c.innerHTML="About",e.appendChild(c);const r=document.createElement("a");r.classList.add("menu-link"),r.href="",r.innerHTML="Menu",e.appendChild(r);const i=document.createElement("a");i.classList.add("contact-link"),i.href="",i.innerHTML="Contact Us",e.appendChild(i),n.appendChild(e);const a=document.createElement("div");a.classList.add("main");const s=new Image;s.src=t,a.appendChild(s);const o=document.createElement("div");o.innerHTML="This is the best restaurant in the world. Please visit today!",a.appendChild(o),n.appendChild(a)}()})();