!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{"Blue marker":"Blue marker","Green marker":"Green marker","Green pen":"Green pen",Highlight:"Highlight","Pink marker":"Pink marker","Red pen":"Red pen","Remove highlight":"Remove highlight","Text highlight toolbar":"Text highlight toolbar","Yellow marker":"Yellow marker"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={458:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var r=i(609),n=i.n(r)()((function(e){return e[1]}));n.push([e.id,":root{--ck-highlight-marker-yellow:#fdfd77;--ck-highlight-marker-green:#62f962;--ck-highlight-marker-pink:#fc7899;--ck-highlight-marker-blue:#72ccfd;--ck-highlight-pen-red:#e71313;--ck-highlight-pen-green:#128a00}.ck-content .marker-yellow{background-color:var(--ck-highlight-marker-yellow)}.ck-content .marker-green{background-color:var(--ck-highlight-marker-green)}.ck-content .marker-pink{background-color:var(--ck-highlight-marker-pink)}.ck-content .marker-blue{background-color:var(--ck-highlight-marker-blue)}.ck-content .pen-red{background-color:transparent;color:var(--ck-highlight-pen-red)}.ck-content .pen-green{background-color:transparent;color:var(--ck-highlight-pen-green)}",""]);const o=n},609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,r){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(r)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(n[l]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&n[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),t.push(c))}},t}},62:(e,t,i)=>{"use strict";var r,n=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),l=[];function a(e){for(var t=-1,i=0;i<l.length;i++)if(l[i].identifier===e){t=i;break}return t}function c(e,t){for(var i={},r=[],n=0;n<e.length;n++){var o=e[n],c=t.base?o[0]+t.base:o[0],s=i[c]||0,h="".concat(c," ").concat(s);i[c]=s+1;var g=a(h),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==g?(l[g].references++,l[g].updater(d)):l.push({identifier:h,updater:v(d,t),references:1}),r.push(h)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var n=i.nc;n&&(r.nonce=n)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var l=o(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var h,g=(h=[],function(e,t){return h[e]=t,h.filter(Boolean).join("\n")});function d(e,t,i,r){var n=i?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,n);else{var o=document.createTextNode(n),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(o,l[t]):e.appendChild(o)}}function u(e,t,i){var r=i.css,n=i.media,o=i.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,p=0;function v(e,t){var i,r,n;if(t.singleton){var o=p++;i=m||(m=s(t)),r=d.bind(null,i,o,!1),n=d.bind(null,i,o,!0)}else i=s(t),r=u.bind(null,i,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var i=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<i.length;r++){var n=a(i[r]);l[n].references--}for(var o=c(e,t),s=0;s<i.length;s++){var h=a(i[s]);0===l[h].references&&(l[h].updater(),l.splice(h,1))}i=o}}}},704:(e,t,i)=>{e.exports=i(79)("./src/core.js")},273:(e,t,i)=>{e.exports=i(79)("./src/ui.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,i),o.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nc=void 0;var r={};(()=>{"use strict";i.r(r),i.d(r,{Highlight:()=>d,HighlightEditing:()=>n,HighlightUI:()=>h});var e=i(704);class t extends e.Command{refresh(){const e=this.editor.model,t=e.document;this.value=t.selection.getAttribute("highlight"),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,"highlight")}execute(e={}){const t=this.editor.model,i=t.document.selection,r=e.value;t.change((e=>{if(i.isCollapsed){const t=i.getFirstPosition();if(i.hasAttribute("highlight")){const i=e=>e.item.hasAttribute("highlight")&&e.item.getAttribute("highlight")===this.value,n=t.getLastMatchingPosition(i,{direction:"backward"}),o=t.getLastMatchingPosition(i),l=e.createRange(n,o);r&&this.value!==r?(t.isEqual(o)||e.setAttribute("highlight",r,l),e.setSelectionAttribute("highlight",r)):(t.isEqual(o)||e.removeAttribute("highlight",l),e.removeSelectionAttribute("highlight"))}else r&&e.setSelectionAttribute("highlight",r)}else{const n=t.schema.getValidRanges(i.getRanges(),"highlight");for(const t of n)r?e.setAttribute("highlight",r,t):e.removeAttribute("highlight",t)}}))}}class n extends e.Plugin{static get pluginName(){return"HighlightEditing"}constructor(e){super(e),e.config.define("highlight",{options:[{model:"yellowMarker",class:"marker-yellow",title:"Yellow marker",color:"var(--ck-highlight-marker-yellow)",type:"marker"},{model:"greenMarker",class:"marker-green",title:"Green marker",color:"var(--ck-highlight-marker-green)",type:"marker"},{model:"pinkMarker",class:"marker-pink",title:"Pink marker",color:"var(--ck-highlight-marker-pink)",type:"marker"},{model:"blueMarker",class:"marker-blue",title:"Blue marker",color:"var(--ck-highlight-marker-blue)",type:"marker"},{model:"redPen",class:"pen-red",title:"Red pen",color:"var(--ck-highlight-pen-red)",type:"pen"},{model:"greenPen",class:"pen-green",title:"Green pen",color:"var(--ck-highlight-pen-green)",type:"pen"}]})}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:"highlight"});const i=e.config.get("highlight.options");e.conversion.attributeToElement(function(e){const t={model:{key:"highlight",values:[]},view:{}};for(const i of e)t.model.values.push(i.model),t.view[i.model]={name:"mark",classes:i.class};return t}(i)),e.commands.add("highlight",new t(e))}}var o=i(273);var l=i(62),a=i.n(l),c=i(458),s={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};a()(c.Z,s);c.Z.locals;class h extends e.Plugin{get localizedOptionTitles(){const e=this.editor.t;return{"Yellow marker":e("Yellow marker"),"Green marker":e("Green marker"),"Pink marker":e("Pink marker"),"Blue marker":e("Blue marker"),"Red pen":e("Red pen"),"Green pen":e("Green pen")}}static get pluginName(){return"HighlightUI"}init(){const e=this.editor.config.get("highlight.options");for(const t of e)this._addHighlighterButton(t);this._addRemoveHighlightButton(),this._addDropdown(e)}_addRemoveHighlightButton(){const t=this.editor.t,i=this.editor.commands.get("highlight");this._addButton("removeHighlight",t("Remove highlight"),e.icons.eraser,null,(e=>{e.bind("isEnabled").to(i,"isEnabled")}))}_addHighlighterButton(e){const t=this.editor.commands.get("highlight");this._addButton("highlight:"+e.model,e.title,g(e.type),e.model,(function(i){i.bind("isEnabled").to(t,"isEnabled"),i.bind("isOn").to(t,"value",(t=>t===e.model)),i.iconView.fillColor=e.color,i.isToggleable=!0}))}_addButton(e,t,i,r,n){const l=this.editor;l.ui.componentFactory.add(e,(e=>{const a=new o.ButtonView(e),c=this.localizedOptionTitles[t]?this.localizedOptionTitles[t]:t;return a.set({label:c,icon:i,tooltip:!0}),a.on("execute",(()=>{l.execute("highlight",{value:r}),l.editing.view.focus()})),n(a),a}))}_addDropdown(e){const t=this.editor,i=t.t,r=t.ui.componentFactory,n=e[0],l=e.reduce(((e,t)=>(e[t.model]=t,e)),{});r.add("highlight",(a=>{const c=t.commands.get("highlight"),s=(0,o.createDropdown)(a,o.SplitButtonView),h=s.buttonView;h.set({label:i("Highlight"),tooltip:!0,lastExecuted:n.model,commandValue:n.model,isToggleable:!0}),h.bind("icon").to(c,"value",(e=>g(d(e,"type")))),h.bind("color").to(c,"value",(e=>d(e,"color"))),h.bind("commandValue").to(c,"value",(e=>d(e,"model"))),h.bind("isOn").to(c,"value",(e=>!!e)),h.delegate("execute").to(s);function d(e,t){const i=e&&e!==h.lastExecuted?e:h.lastExecuted;return l[i][t]}return s.bind("isEnabled").to(c,"isEnabled"),(0,o.addToolbarToDropdown)(s,(()=>{const t=e.map((e=>{const t=r.create("highlight:"+e.model);return this.listenTo(t,"execute",(()=>{s.buttonView.set({lastExecuted:e.model})})),t}));return t.push(new o.ToolbarSeparatorView),t.push(r.create("removeHighlight")),t}),{enableActiveItemFocusOnDropdownOpen:!0,ariaLabel:i("Text highlight toolbar")}),function(e){const t=e.buttonView.actionView;t.iconView.bind("fillColor").to(e.buttonView,"color")}(s),h.on("execute",(()=>{t.execute("highlight",{value:h.commandValue})})),this.listenTo(s,"execute",(()=>{t.editing.view.focus()})),s}))}}function g(e){return"marker"===e?'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path class="ck-icon__fill" d="M10.798 1.59 3.002 12.875l1.895 1.852 2.521 1.402 6.997-12.194z"/><path d="m2.556 16.727.234-.348c-.297-.151-.462-.293-.498-.426-.036-.137.002-.416.115-.837.094-.25.15-.449.169-.595a4.495 4.495 0 0 0 0-.725c-.209-.621-.303-1.041-.284-1.26.02-.218.178-.506.475-.862l6.77-9.414c.539-.91 1.605-.85 3.199.18 1.594 1.032 2.188 1.928 1.784 2.686l-5.877 10.36c-.158.412-.333.673-.526.782-.193.108-.604.179-1.232.21-.362.131-.608.237-.738.318-.13.081-.305.238-.526.47-.293.265-.504.397-.632.397-.096 0-.27-.075-.524-.226l-.31.41-1.6-1.12zm-.279.415 1.575 1.103-.392.515H1.19l1.087-1.618zm8.1-13.656-4.953 6.9L8.75 12.57l4.247-7.574c.175-.25-.188-.647-1.092-1.192-.903-.546-1.412-.652-1.528-.32zM8.244 18.5 9.59 17h9.406v1.5H8.245z"/></svg>':'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path class="ck-icon__fill" d="M10.126 2.268 2.002 13.874l1.895 1.852 2.521 1.402L14.47 5.481l-1.543-2.568-2.801-.645z"/><path d="m4.5 18.088-2.645-1.852-.04-2.95-.006-.005.006-.008v-.025l.011.008L8.73 2.97c.165-.233.356-.417.567-.557l-1.212.308L4.604 7.9l-.83-.558 3.694-5.495 2.708-.69 1.65 1.145.046.018.85-1.216 2.16 1.512-.856 1.222c.828.967 1.144 2.141.432 3.158L7.55 17.286l.006.005-3.055.797H4.5zm-.634.166-1.976.516-.026-1.918 2.002 1.402zM9.968 3.817l-.006-.004-6.123 9.184 3.277 2.294 6.108-9.162.005.003c.317-.452-.16-1.332-1.064-1.966-.891-.624-1.865-.776-2.197-.349zM8.245 18.5 9.59 17h9.406v1.5H8.245z"/></svg>'}class d extends e.Plugin{static get requires(){return[n,h]}static get pluginName(){return"Highlight"}}})(),(window.CKEditor5=window.CKEditor5||{}).highlight=r})();