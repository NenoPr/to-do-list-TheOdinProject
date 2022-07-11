(()=>{"use strict";var e={747:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(81),o=t.n(n),i=t(645),a=t.n(i)()(o());a.push([e.id,"\r\n\r\n\r\nhtml, body {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n* {\r\n    outline: 1px solid blue;\r\n}\r\n#container {\r\n    display: grid;\r\n    grid-template: 10vh 90vh / 15vw 85vw;\r\n    min-height: 100vh;\r\n}\r\n\r\n#header {\r\n    grid-area: 1 / 1 / 1 / 3;\r\n}\r\n\r\n#sidebar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-area: 2 / 1 / 2 / 1;\r\n    gap: 3rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n}\r\n\r\n#sidebar-contents {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    font-size: 2rem;\r\n}\r\n\r\n#inbox {\r\n    width: fit-content;\r\n}\r\n\r\n#sidebar-projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    font-size: 2rem;\r\n    height: 65vh;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#sidebar-projects::-webkit-scrollbar { \r\n    display: block;  /* Safari and Chrome */\r\n    width: 5px;\r\n}\r\n\r\n#sidebar-projects::-webkit-scrollbar-thumb {\r\n    background: #979797;\r\n    border-radius: 10px;\r\n  }\r\n\r\n#add-project {\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    border-radius: .5rem;\r\n}\r\n\r\n#add-project:hover {\r\n    background-color: rgb(215, 242, 250);\r\n}\r\n\r\n#projects-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    font-size: 1rem;\r\n    height: 65vh;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.project {\r\n    font-size: 1rem;\r\n    cursor: pointer;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template: 1fr 10fr / 1fr;\r\n    padding: 2rem;\r\n    gap: 2rem;\r\n    grid-area: 2 / 2 / 2 / 3;\r\n    background-color: rgb(215, 242, 250);\r\n}\r\n\r\n#add-task {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-self: center;\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    height: 100px;\r\n    width: 150px;\r\n    border-radius: .5rem;\r\n}\r\n\r\n#add-task:hover {\r\n    box-shadow: 0 0 .1rem .3rem black;\r\n}\r\n\r\n#tasks-list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding-top: 2rem;\r\n    padding-left: 2rem;\r\n    gap: 1rem;\r\n    width: 80vw;\r\n    justify-content: flex-start;\r\n    align-content: flex-start;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#tasks-list::-webkit-scrollbar { \r\n    display: block;  /* Safari and Chrome */\r\n    width: 5px;\r\n}\r\n\r\n#tasks-list::-webkit-scrollbar-thumb {\r\n    background: #979797;\r\n    border-radius: 10px;\r\n  }\r\n\r\n.task {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    height: 10rem;\r\n    width: 17rem;\r\n    border-radius: .5rem;\r\n}\r\n\r\n@media (min-width: 1280px) {\r\n    .task {\r\n        height: 10rem;\r\n        width: 19rem;\r\n    }\r\n}\r\n\r\n@media (min-width: 1920px) {\r\n    .task {\r\n        height: 10rem;\r\n        width: 18rem;\r\n    }\r\n}\r\n\r\n@media (min-width: 2560px) {\r\n    .task {\r\n        height: 10rem;\r\n        width: 17rem;\r\n    }\r\n}",""]);const s=a},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=n.base?c[0]+n.base:c[0],l=i[d]||0,m="".concat(d," ").concat(l);i[d]=l+1;var p=t(m),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var u=o(f,n);n.byIndex=s,r.splice(s,0,{identifier:m,updater:u,references:1})}a.push(m)}return a}function o(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);r[s].references--}for(var c=n(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=c}}},569:e=>{var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,o&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={id:n,exports:{}};return e[n](i,i.exports,t),i.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.nc=void 0,(()=>{var e=t(379),r=t.n(e),n=t(795),o=t.n(n),i=t(569),a=t.n(i),s=t(565),c=t.n(s),d=t(216),l=t.n(d),m=t(589),p=t.n(m),f=t(747),u={};u.styleTagTransform=p(),u.setAttributes=c(),u.insert=a().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=l(),r()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals;const h={allProjects:[],summary:function(){console.log(this.title,this.description,this.dueDate,this.priority,this.notes,this.checklist)}};function g(e){let r=Object.create(h);return r.name=e+Math.random(10),r.allItems=[],h.allProjects.push(r),r}function v(e,r,t,n,o,i){let a=Object.create(y);return a.id=e+Math.random(10),a.title=e,a.description=r,a.dueDate=t,a.priority=n,a.notes=o,a.checklist=i,y.allItems.push(a),a}console.log("-----------------------");const y=new g("Default_Project");let b=v("Title of item","description of item","date","high priority","notes for todo item","checked item");v("Title of item","description of item","date","high priority","notes for todo item","checked item"),v("Title of item","description of item","date","high priority","notes for todo item","checked item"),v("Title of item","description of item","date","high priority","notes for todo item","checked item"),v("Title of item","description of item","date","high priority","notes for todo item","checked item"),v("Title of item","description of item","date","high priority","notes for todo item","checked item"),v("Title of item","description of item","date","high priority","notes for todo item","checked item"),v("Title of item","description of item","date","high priority","notes for todo item","checked item"),b.summary(),console.log("defaultProject's items:",y.allItems),console.log("toDoParent's projects:",h.allProjects),null==document.getElementById("tasks-list").firstChild&&y.allItems.forEach((e=>{let r=document.createElement("div");r.classList.add("task"),r.textContent=e.id,document.getElementById("tasks-list").appendChild(r)}));let x=document.createElement("div");x.innerText=y.name,x.classList.add("project"),x.addEventListener("click",(()=>{j(x)})),document.getElementById("projects-list").appendChild(x);let k=document.getElementById("add-task");k.addEventListener("click",(()=>{let e=document.createElement("div");e.classList.add("task"),k.nextElementSibling.appendChild(e),console.log(v("Title","description of item","date","high priority","notes for todo item","checked item")),e.textContent=y.allItems[y.allItems.length-1].id,console.log(y)}));let w=document.getElementById("add-project");function j(e){console.log("entered renderProjectTasks ",e.textContent),h.allProjects.forEach((r=>{r.name===e.textContent&&(document.querySelectorAll(".task").forEach((e=>{e.remove()})),console.log("entering forEach ",r),r.allItems.forEach((r=>{console.log("entered forEach ",e.textContent);let t=document.createElement("div");t.classList.add("task"),t.textContent=r.id,console.log("Hello",r),document.getElementById("tasks-list").appendChild(t)})))}))}w.addEventListener("click",(()=>{let e=document.createElement("div");e.classList.add("project"),w.nextElementSibling.appendChild(e),console.log(g("Project")),e.textContent=h.allProjects[h.allProjects.length-1].name,console.log(h.allProjects),e.addEventListener("click",(()=>{j(e)}))}))})()})();