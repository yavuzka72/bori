(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{7158:function(e,t,n){var i,r;"undefined"!=typeof window&&window,void 0===(r="function"===typeof(i=function(){"use strict";function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var n=this._events=this._events||{},i=n[e]=n[e]||[];return-1==i.indexOf(t)&&i.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var n=this._onceEvents=this._onceEvents||{};return(n[e]=n[e]||{})[t]=!0,this}},t.off=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var i=n.indexOf(t);return-1!=i&&n.splice(i,1),this}},t.emitEvent=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){n=n.slice(0),t=t||[];for(var i=this._onceEvents&&this._onceEvents[e],r=0;r<n.length;r++){var s=n[r];i&&i[s]&&(this.off(e,s),delete i[s]),s.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e})?i.call(t,n,t,e):i)||(e.exports=r)},7564:function(e,t,n){var i,r;!function(s,o){"use strict";i=[n(7158)],void 0===(r=function(e){return function(e,t){var n=e.jQuery,i=e.console;function r(e,t){for(var n in t)e[n]=t[n];return e}var s=Array.prototype.slice;function o(e){return Array.isArray(e)?e:"object"==typeof e&&"number"==typeof e.length?s.call(e):[e]}function a(e,t,s){if(!(this instanceof a))return new a(e,t,s);var c=e;"string"==typeof e&&(c=document.querySelectorAll(e)),c?(this.elements=o(c),this.options=r({},this.options),"function"==typeof t?s=t:r(this.options,t),s&&this.on("always",s),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):i.error("Bad element for imagesLoaded "+(c||e))}a.prototype=Object.create(t.prototype),a.prototype.options={},a.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},a.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&c[t]){for(var n=e.querySelectorAll("img"),i=0;i<n.length;i++){var r=n[i];this.addImage(r)}if("string"==typeof this.options.background){var s=e.querySelectorAll(this.options.background);for(i=0;i<s.length;i++){var o=s[i];this.addElementBackgroundImages(o)}}}};var c={1:!0,9:!0,11:!0};function l(e){this.img=e}function u(e,t){this.url=e,this.element=t,this.img=new Image}return a.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var n=/url\((['"])?(.*?)\1\)/gi,i=n.exec(t.backgroundImage);null!==i;){var r=i&&i[2];r&&this.addBackground(r,e),i=n.exec(t.backgroundImage)}},a.prototype.addImage=function(e){var t=new l(e);this.images.push(t)},a.prototype.addBackground=function(e,t){var n=new u(e,t);this.images.push(n)},a.prototype.check=function(){var e=this;function t(t,n,i){setTimeout((function(){e.progress(t,n,i)}))}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach((function(e){e.once("progress",t),e.check()})):this.complete()},a.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&i&&i.log("progress: "+n,e,t)},a.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},l.prototype=Object.create(t.prototype),l.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},l.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},l.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},l.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},l.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},l.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},l.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},u.prototype=Object.create(l.prototype),u.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},u.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},u.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},a.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((n=t).fn.imagesLoaded=function(e,t){return new a(this,e,t).jqDeferred.promise(n(this))})},a.makeJQueryPlugin(),a}(s,e)}.apply(t,i))||(e.exports=r)}("undefined"!==typeof window?window:this)},7882:function(e,t,n){"use strict";var i=n(7294),r=i.createElement;function s(e){var t=e.title,n=e.subTitle;return r("div",{className:"page-header text-center",style:{backgroundImage:"url(images/page-header-bg.jpg)"}},r("div",{className:"container"},r("h1",{className:"page-title"},t,r("span",null,n))))}t.Z=i.memo(s)},4590:function(e,t,n){"use strict";var i=n(6265),r=n(7294),s=n(8216),o=n(2679),a=n(8335),c=n(4138),l=n(2870),u=r.createElement;function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}t.Z=(0,s.$j)(null,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l.Nw))((function(e){var t=e.post,n=e.adClass,i=void 0===n?"":n,s=e.isContent,l=void 0===s||s,h=e.isAuthor,m=void 0===h||h,d=new Date(t.date);return u("article",{className:"entry ".concat(i)},t.image.length<=1?u("figure",{className:"entry-media ".concat("video"==t.type?"entry-video":""),style:{paddingTop:"".concat(t.image[0].height/t.image[0].width*100,"%")}},"video"!==t.type?u(a.Z,{href:"/blog/single/default/".concat(t.slug)},u("div",{className:"lazy-overlay"}),u(o.LazyLoadImage,{alt:"Post",src:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+t.image[0].url,threshold:500,effect:"blur",height:"auto"})):u(r.Fragment,null,u(a.Z,{href:"/blog/single/default/".concat(t.slug)},u("div",{className:"lazy-overlay"}),u(o.LazyLoadImage,{alt:"Post",src:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+t.image[0].url,threshold:500,effect:"blur",height:"auto"})),u("a",{href:"https://www.youtube.com/watch?v=vBPgmASQ1A0",onClick:function(t){t.preventDefault(),e.showVideo()},className:"btn-video btn-iframe"},u("i",{className:"icon-play"})))):u("figure",{className:"entry-media",style:{paddingTop:"".concat(t.image[0].height/t.image[0].width*100,"%")}},u(c.Z,{adClass:"owl-simple owl-light owl-nav-inside cols-1",options:{dots:!1,nav:!0,responsive:{992:{nav:!0}}}},t.image.map((function(e,n){return u(a.Z,{href:"/blog/single/default/".concat(t.slug),key:n},u("div",{className:"lazy-overlay"}),u(o.LazyLoadImage,{alt:"Post",src:"".concat("https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+e.url),threshold:500,effect:"blur"}))})))),u("div",{className:"entry-body"},u("div",{className:"entry-meta"},m?u(r.Fragment,null,u("span",{className:"entry-author"},"by ",u(a.Z,{href:"/blog/single/default/".concat(t.slug)},t.author)),u("span",{className:"meta-separator"},"|")):"",u(a.Z,{href:"/blog/single/default/".concat(t.slug)},d.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"})),u("span",{className:"meta-separator"},"|"),u(a.Z,{href:"/blog/single/default/".concat(t.slug)},t.comments," Comments")),u("h2",{className:"entry-title"},u(a.Z,{href:"/blog/single/default/".concat(t.slug)},t.title)),u("div",{className:"entry-cats"},"in\xa0",t.blog_categories.map((function(e,n){return u("span",{key:n},u(a.Z,{href:{pathname:"/blog/classic",query:{category:e.slug}}},e.name),n<t.blog_categories.length-1?", ":"")}))),l?u("div",{className:"entry-content"},u("p",null,t.content),u(a.Z,{href:"/blog/single/default/".concat(t.slug),className:"read-more"},"Continue Reading")):""))}))},8227:function(e,t,n){"use strict";n.r(t);var i=n(809),r=n.n(i),s=n(2447),o=n(7294),a=n(3266),c=n(7564),l=n.n(c),u=n(8335),h=n(7882),m=n(4590),d=n(7906),g=n(9638),p=o.createElement;t.default=(0,d.Z)({ssr:!1})((function(){var e,t=(0,a.a)(g.AU,{variables:{page:"masonry-2"}}),i=t.data,c=t.loading,d=t.error,f=(0,o.useRef)(),v=i&&i.postsByPage.data;function y(e){return e.blog_categories.reduce((function(e,t){return e+" "+t.slug}),"")}function b(t,n){t.preventDefault(),t.currentTarget.closest(".menu-cat").querySelector(".active").classList.remove("active"),t.currentTarget.parentElement.classList.add("active"),e.arrange({filter:function(e,t){return""==n||t.classList.contains(n)}})}return(0,o.useEffect)((function(){v&&v.length>0&&l()(".page-content").on("done",(0,s.Z)(r().mark((function t(){var i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(3391).then(n.t.bind(n,3391,23));case 2:i=t.sent.default,e=new i(f.current,{itemSelector:".grid-item"});case 4:case"end":return t.stop()}}),t)}))))}),[v]),d?p("div",null):p("div",{className:"main"},p(h.Z,{title:"Blog Masonry 2 Columns",subTitle:"Blog"}),p("nav",{className:"breadcrumb-nav"},p("div",{className:"container"},p("ol",{className:"breadcrumb"},p("li",{className:"breadcrumb-item"},p(u.Z,{href:"/"},"Home")),p("li",{className:"breadcrumb-item"},p(u.Z,{href:"/blog/classic"},"Blog")),p("li",{className:"breadcrumb-item active"},"Masonry 2 Columns")))),p("div",{className:"page-content"},p("div",{className:"container skeleton-body ".concat(c?"":"loaded")},c||!v?p("div",{className:"row"},[1,2,3,4,5,6].map((function(e){return p("div",{className:"col-sm-6",key:e},p("div",{className:"skel-grid-post"}))}))):p(o.Fragment,null,p("nav",{className:"blog-nav"},p("ul",{className:"menu-cat entry-filter justify-content-center"},p("li",{className:"active"},p("a",{href:"#",onClick:function(e){return b(e,"")}},"All Blog Posts",p("span",null,"6"))),p("li",null,p("a",{href:"#",onClick:function(e){return b(e,"lifestyle")}},"Lifestyle",p("span",null,"3"))),p("li",null,p("a",{href:"#",onClick:function(e){return b(e,"shopping")}},"Shopping",p("span",null,"1"))),p("li",null,p("a",{href:"#",onClick:function(e){return b(e,"travel")}},"Travel",p("span",null,"2"))),p("li",null,p("a",{href:"#",onClick:function(e){return b(e,"hobbies")}},"Hobbies",p("span",null,"2"))),p("li",null,p("a",{href:"#",onClick:function(e){return b(e,"fashion")}},"Fashion",p("span",null,"1"))))),0==v.length?p("div",{className:"row"},p("p",{className:"blogs-info"},"No posts were found matching your selection.")):p("div",{className:"row",ref:f},v.map((function(e,t){return p("div",{className:"col-sm-6 grid-item".concat(y(e)),key:t},p(m.Z,{post:e,adClass:"text-center"}))})))))))}))},9901:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/masonry/2cols",function(){return n(8227)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=9901,e(e.s=t);var t}));var t=e.O();_N_E=t}]);