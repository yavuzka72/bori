(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5518],{7185:function(e,a,t){"use strict";var r=t(7294),s=r.createElement;function l(e){var a=e.adClass,t=void 0===a?"":a,r=e.type,l=void 0===r?"normal":r;function i(e){(e.target.classList.contains("toggle-button")||e.target.querySelector(".toggle-button"))&&(e.target.classList.contains("collapsed")||e.target.querySelector(".toggle-button")&&e.target.querySelector(".toggle-button").classList.contains("collapsed")||e.target.classList.contains("collapsing")||e.target.querySelector(".toggle-button")&&e.target.querySelector(".toggle-button").classList.contains("collapsing"))&&(e.currentTarget.querySelector(".toggle-button.expanded")&&e.currentTarget.querySelector(".toggle-button.expanded").click(),e.currentTarget.querySelector(".toggle-button.expanding")&&e.currentTarget.querySelector(".toggle-button.expanding").click())}return"normal"===l?s("div",{className:"accordion  ".concat(t),onClick:i},e.children):"checkout"===l?s("div",{className:"accordion-summary",onClick:i},e.children):""}a.Z=r.memo(l)},2674:function(e,a,t){"use strict";var r=t(7294),s=t(2954),l=t(6442),i=r.createElement;function o(e){var a=e.title,t=e.expanded,r=e.adClass,o=void 0===r?"":r,c=e.type,n=void 0===c?"default":c;return i(s.Z,{collapsed:!t},"default"===n?function(t){var r=t.onToggle,s=t.setCollapsibleElement,c=t.toggleState;return i("div",{className:"card ".concat(o)},i("div",{className:"card-header",onClick:r},i("h2",{className:"card-title"},i("span",{className:"toggle-button ".concat(c.toLowerCase()),dangerouslySetInnerHTML:(0,l.rJ)(a),style:{height:"auto"}}))),i("div",{ref:s},i("div",{className:"card-body"},e.children)))}:function(t){var r=t.onToggle,s=t.setCollapsibleElement,c=t.toggleState;return i("div",{className:"acc-item ".concat(o)},i("h5",null,i("span",{className:"toggle-button ".concat(c.toLowerCase()),dangerouslySetInnerHTML:(0,l.rJ)(a),onClick:r,style:{height:"auto"}})),i("div",{ref:s},i("div",{className:"collapse-wrap"},e.children)))})}a.Z=r.memo(o)},2076:function(e,a,t){"use strict";var r=t(7294),s=t(1163),l=t(8335),i=r.createElement;function o(e){var a=(0,s.useRouter)(),t=e.prev,r=e.next,o=e.current,c=e.fullWidth;return i("nav",{className:"breadcrumb-nav border-0 mb-0"},i("div",{className:"d-flex align-items-center "+(void 0!==c&&c?"container-fluid":"container")},i("ol",{className:"breadcrumb"},i("li",{className:"breadcrumb-item"},i(l.Z,{href:"/"},"Home")),i("li",{className:"breadcrumb-item"},i(l.Z,{href:"/product/default/dark-yellow-lace-cut-out-swing-dress"},"Product")),i("li",{className:"breadcrumb-item active"},o)),i("nav",{className:"product-pager ml-auto"},t?i(l.Z,{href:{pathname:a.pathname,query:{slug:t.slug}},className:"product-pager-link product-pager-prev ".concat(r?"":"prev-only")},i("i",{className:"icon-angle-left"}),i("span",null,"Prev"),i("div",{className:"product-detail"},i("figure",null,i("img",{src:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+t.sm_pictures[0].url,alt:"product",width:t.sm_pictures[0].width,height:t.sm_pictures[0].height})),i("h3",{className:"product-name mb-0"},t.name))):"",r?i(l.Z,{href:{pathname:a.pathname,query:{slug:r.slug}},className:"product-pager-link product-pager-next"},i("span",null,"Next"),i("i",{className:"icon-angle-right"}),i("div",{className:"product-detail"},i("figure",null,i("img",{src:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+r.sm_pictures[0].url,alt:"product",width:r.sm_pictures[0].width,height:r.sm_pictures[0].height})),i("h3",{className:"product-name mb-0"},r.name))):"")))}a.Z=r.memo(o)},478:function(e,a,t){"use strict";var r=t(4047),s=t(7294),l=t(2879),i=s.createElement;function o(e){var a=e.product,t=e.adClass,o=void 0===t?"product-gallery-vertical":t,c=(0,s.useState)(!1),n=c[0],u=c[1],d=(0,s.useState)(0),m=d[0],p=d[1];return console.log(a),(0,s.useEffect)((function(){a[0]&&(u(!1),p(0))}),[a]),a?i(s.Fragment,null,i("div",{className:"product-gallery ".concat(o)},i("div",{className:"row m-0"},i("figure",{className:"product-main-image",index:"0"},a.new?i("span",{className:"product-label label-new"},"New"):"",a.sale_price?i("span",{className:"product-label label-sale"},"Sale"):"",a.top?i("span",{className:"product-label label-top"},"Top"):"",a.stock&&0!=a.stock?"":i("span",{className:"product-label label-out"},"Out of Stock"),i(r.lb,{imageSrc:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+a[0].pictures[0].url,imageAlt:"product",largeImageSrc:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+a[0].pictures[0].url,dragToMove:!1,mouseActivation:"hover",cursorStyleActive:"crosshair",id:"product-zoom",className:"zoom-image position-relative overflow-hidden",width:a[0].pictures[0].width,height:a[0].pictures[0].height,style:{paddingTop:"".concat(a[0].pictures[0].height/a[0].pictures[0].width*100,"%")}}),i("button",{id:"btn-product-gallery",className:"btn-product-gallery",onClick:function(){var e=parseInt(document.querySelector(".product-main-image").getAttribute("index"));e||(e=0),u(!0),p(e)}},i("i",{className:"icon-arrows"}))),i("div",{id:"product-zoom-gallery",className:"product-image-gallery"},a[0].pictures.map((function(e,t){return i("button",{className:"product-gallery-item ".concat(0===t?"active":""),key:a[0].id+"-"+t,onClick:function(a){return function(e,a,t){for(var r=document.querySelectorAll(".product-main-image img"),s=0;s<r.length;s++)r[s].src=a;document.querySelector(".product-image-gallery .active").classList.remove("active"),document.querySelector(".product-main-image").setAttribute("index",t),e.currentTarget.classList.add("active")}(a,"".concat("https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+e.url),t)}},i("div",{className:"img-wrapper h-100"},i("img",{src:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+a[0].pictures[t].url,alt:"product back"})))}))))),n?i(l.Z,{mainSrc:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+a[0].pictures[m].url,nextSrc:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+a[0].pictures[(m+1)%a[0].pictures.length].url,prevSrc:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+a[0].pictures[(m+a[0].pictures.length-1)%a[0].pictures.length].url,onCloseRequest:function(){u(!1)},onMovePrevRequest:function(){p((m+1)%a[0].pictures.length)},onMoveNextRequest:function(){p((m+a[0].pictures.length-1)%a[0].pictures.length)},reactModalStyle:{overlay:{zIndex:1041}}}):""):i("div",null)}a.Z=s.memo(o)},8062:function(e,a,t){"use strict";var r=t(7294),s=t(2674),l=t(7185),i=t(8335),o=r.createElement;function c(e){var a=e.product,t=function(e){e.preventDefault(),e.currentTarget.parentNode.querySelector(".active")&&e.currentTarget.parentNode.querySelector(".active").classList.remove("active"),e.currentTarget.classList.add("active")};return a?o(l.Z,{adClass:"accordion-plus product-details-accordion pb-2 mb-0"},o(s.Z,{title:"Description",adClass:"card-box card-sm"},o("div",{className:"product-desc-content"},o("p",{className:"pb-1"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci."),o("ul",null,o("li",null,"Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. "),o("li",null,"Vivamus finibus vel mauris ut vehicula."),o("li",null,"Nullam a magna porttitor, dictum risus nec, faucibus sapien.")),o("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede."))),o(s.Z,{title:"Additional information",adClass:"card-box card-sm"},o("div",{className:"product-desc-content"},o("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci."),o("h3",{className:"pt-2"},"Fabric & care"),o("ul",null,o("li",null,"100% Polyester"),o("li",null,"Do not iron"),o("li",null,"Do not wash"),o("li",null,"Do not bleach"),o("li",null,"Do not tumble dry"),o("li",null,"Professional dry clean only")),o("h3",null,"Size"),o("p",null,"S, M, L, XL"))),o(s.Z,{title:"Shipping & Returns",expanded:!0,adClass:"card-box card-sm"},o("div",{className:"product-desc-content"},o("p",null,"We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our ",o(i.Z,{href:"#"},"Delivery information"),o("br",null),"We hope you\u2019ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our ",o(i.Z,{href:"#"},"Returns information")))),o(s.Z,{title:"Reviews (".concat(a.review,")"),adClass:"card-box card-sm"},o("div",{className:"reviews"},o("div",{className:"review"},o("div",{className:"row no-gutters"},o("div",{className:"col-auto"},o("h4",null,o(i.Z,{href:"#"},"Samanta J.")),o("div",{className:"ratings-container"},o("div",{className:"ratings"},o("div",{className:"ratings-val",style:{width:20*a.ratings+"%"}}),o("span",{className:"tooltip-text"},a.ratings.toFixed(2)))),o("span",{className:"review-date mb-1"},"6 days ago")),o("div",{className:"col"},o("h4",null,"Good, perfect size"),o("div",{className:"review-content"},o("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!")),o("div",{className:"review-action"},o(i.Z,{href:"#"},o("i",{className:"icon-thumbs-up"}),"Helpful (2)"),o(i.Z,{href:"#"},o("i",{className:"icon-thumbs-down"}),"Unhelpful (0)"))))),o("div",{className:"review border-0"},o("div",{className:"row no-gutters"},o("div",{className:"col-auto"},o("h4",null,o(i.Z,{href:"#"},"John Doe")),o("div",{className:"ratings-container"},o("div",{className:"ratings"},o("div",{className:"ratings-val",style:{width:20*a.ratings+"%"}}),o("span",{className:"tooltip-text"},a.ratings.toFixed(2)))),o("span",{className:"review-date mb-1"},"5 days ago")),o("div",{className:"col"},o("h4",null,"Very good"),o("div",{className:"review-content"},o("p",null,"Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!")),o("div",{className:"review-action"},o(i.Z,{href:"#"},o("i",{className:"icon-thumbs-up"}),"Helpful (0)"),o(i.Z,{href:"#"},o("i",{className:"icon-thumbs-down"}),"Unhelpful (0)")))))),o("div",{className:"reply"},o("div",{className:"title-wrapper text-left"},o("h3",{className:"title title-simple text-left text-normal"},"Add a Review"),o("p",null,"Your email address will not be published. Required fields are marked *")),o("div",{className:"rating-form"},o("label",{htmlFor:"rating",className:"text-dark"},"Your rating * "),o("span",{className:"rating-stars selected"},[1,2,3,4,5].map((function(e,a){return o("a",{className:"star-".concat(e),href:"#",onClick:t,key:"star-"+a},e)}))),o("select",{name:"rating",id:"rating",required:"",style:{display:"none"}},o("option",{value:""},"Rate\u2026"),o("option",{value:"5"},"Perfect"),o("option",{value:"4"},"Good"),o("option",{value:"3"},"Average"),o("option",{value:"2"},"Not that bad"),o("option",{value:"1"},"Very poor"))),o("form",{action:"#"},o("textarea",{id:"reply-message",cols:"30",rows:"6",className:"form-control mb-2",placeholder:"Comment *",required:!0}),o("div",{className:"row"},o("div",{className:"col-md-6"},o("input",{type:"text",className:"form-control",id:"reply-name",name:"reply-name",placeholder:"Name *",required:!0})),o("div",{className:"col-md-6"},o("input",{type:"email",className:"form-control",id:"reply-email",name:"reply-email",placeholder:"Email *",required:!0}))),o("div",{className:"form-checkbox mb-2"},o("input",{type:"checkbox",className:"custom-checkbox",id:"signin-remember",name:"signin-remember"}),o("label",{className:"form-control-label ml-3",htmlFor:"signin-remember"},"Save my name, email, and website in this browser for the next time I comment.")),o("button",{type:"submit",className:"btn btn-primary"},"Submit"))))):o("div",null)}a.Z=r.memo(c)},7484:function(e,a,t){"use strict";t.d(a,{Z:function(){return g}});var r=t(7294),s=t(2679),l=t(8335),i=t(4138),o=r.createElement;function c(e){var a=e.product,t=(0,r.useState)(0),s=t[0],i=t[1],c=(0,r.useState)(99999),n=c[0],u=c[1];return(0,r.useEffect)((function(){var e=n,t=s;a.variants.map((function(a){e>a.price&&(e=a.price),t<a.price&&(t=a.price)}),[]),0==a.variants.length&&(e=a.sale_price?a.sale_price:a.price,t=a.price),u(e),i(t)}),[]),o("div",{className:"product product-sm"},o("figure",{className:"product-media"},o(l.Z,{href:"/product/default/".concat(a.slug)},o("img",{src:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+a.sm_pictures[0].url,alt:"Product",className:"product-image"}))),o("div",{className:"product-body"},o("h5",{className:"product-title"},o(l.Z,{href:"/product/default/".concat(a.slug)},a.name)),a.stock&&0!=a.stock?n==s?o("div",{className:"product-price"},"$",n.toFixed(2)):0==a.variants.length?o("div",{className:"product-price"},o("span",{className:"new-price"},"$",n.toFixed(2)),o("span",{className:"old-price"},"$",s.toFixed(2))):o("div",{className:"product-price"},"$",n.toFixed(2),"\u2013$",s.toFixed(2)):o("div",{className:"product-price"},o("span",{className:"out-price"},"$",a.price.toFixed(2)))))}var n=r.memo(c),u=r.createElement;function d(e){var a=e.products;return a?u(i.Z,{adClass:"owl-simple"},u("div",null,a.map((function(e,a){return u(n,{product:e,key:a})})))):u("div",null)}var m=r.memo(d),p=r.createElement;function v(e){var a=(0,r.useState)(0),t=a[0],i=a[1],o=e.products,c=e.loading,n=void 0!==c&&c;function u(){document.querySelector("body").offsetWidth<992?i(!0):i(!1)}return(0,r.useEffect)((function(){return u(),window.addEventListener("resize",u),function(){window.removeEventListener("resize",u)}}),[]),o?p(r.Fragment,null,n?"":p(r.Fragment,null,p("div",{className:"".concat(t?"sidebar-filter right":"sidebar"," sidebar-product")},p("div",{className:t?"sidebar-filter-wrapper product-sidebar-wrapper":""},p("button",{onClick:function(){document.querySelector("body").classList.contains("sidebar-filter-active")&&document.querySelector("body").classList.remove("sidebar-filter-active")},className:"btn-product btn-close",style:{marginLeft:"auto",marginRight:"5px"}},p("i",{className:"icon-close"})),p("div",{className:"widget widget-products"},p("h4",{className:"widget-title mb-1"},"Related Product"),p("div",{className:"products"},p(m,{products:o.slice(0,4)})),p(l.Z,{href:"/shop/sidebar/list",className:"btn btn-outline-dark-3 text-truncate"},p("span",null,"View More Products"),p("i",{className:"icon-long-arrow-right"}))),p("div",{className:"widget widget-banner-sidebar pb-2"},p("div",{className:"banner-sidebar-title"},"ad box 280 x 280"),p("div",{className:"banner-sidebar text-left banner-overlay ml-0"},p(l.Z,{href:"#",className:"w-100"},p("div",{className:"lazy-overlay"}),p(s.LazyLoadImage,{alt:"banner",src:"images/blog/sidebar/banner.jpg",threshold:500,height:277,width:280,effect:"opacity"})),p("div",{className:"banner-content text-left pt-0"},p("p",{className:"mb-1"},"online & in-store"),p("h3",{className:"banner-subtitle text-uppercase"},"Spring Sale"),p("h2",{className:"banner-title"},"Up to 60% off",p("br",null),"from $55"),p(l.Z,{href:"/shop/sidebar/3cols",className:"btn btn-outline btn-md btn-outline-white text-uppercase m-0"},"Shop Now")))))),t?p("button",{className:"sidebar-fixed-toggler right",onClick:function(){document.querySelector("body").classList.contains("sidebar-filter-active")?document.querySelector("body").classList.remove("sidebar-filter-active"):document.querySelector("body").classList.add("sidebar-filter-active")}},p("i",{className:"icon-cog"})):"",p("div",{className:"sidebar-filter-overlay",onClick:function(){document.querySelector("body").classList.contains("sidebar-filter-active")&&document.querySelector("body").classList.remove("sidebar-filter-active")}}))):p("div",null)}var g=r.memo(v)},3757:function(e,a,t){"use strict";t.r(a);var r=t(7294),s=t(1163),l=t(3266),i=t(1243),o=t(7906),c=t(9638),n=t(2076),u=t(478),d=t(1547),m=t(8062),p=t(7484),v=r.createElement;a.default=(0,o.Z)({ssr:!1})((function(){var e=(0,s.useRouter)().query.slug;if(!e)return v("div",null);var a=(0,l.a)(c.N4,{variables:{slug:e}}),t=a.data,r=a.loading,o=a.error,g=t&&t.product.single,b=t&&t.product.related,N=t&&t.product.prev,f=t&&t.product.next;return o?v("div",null):v("div",{className:"main"},v(n.Z,{prev:N,next:f,current:"Sidebar",fullWidth:!0}),v("div",{className:"page-content pb-3"},v("div",{className:"container-fluid skeleton-body horizontal"},v("div",{className:"row"},v("div",{className:"col-xxl-10 col-lg-9"},v("div",{className:"product-details-top mb-0"},v("div",{className:"row skel-pro-single fullwidth ".concat(r?"":"loaded")},v("div",{className:"col-md-6 col-lg-7"},v("div",{className:"skel-product-gallery"}),r?"":v(u.Z,{product:g,adClass:""})),v("div",{className:"col-md-6 col-lg-5"},v("div",{className:"entry-summary row"},v("div",{className:"col-md-12"},v("div",{className:"entry-summary1 mt-2 mt-md-0"})),v("div",{className:"col-md-12"},v("div",{className:"entry-summary2"}))),r?"":v(d.Z,{product:g}),v(m.Z,{product:g}))))),v("div",{className:"col-xxl-2 col-lg-3 skeleton-body"},v(i.Z,{className:"sticky-content skel-pro-single ".concat(r?"":"loaded"),offsetTop:70},v("div",{className:"skel-widget"}),v("div",{className:"skel-widget"}),v(p.Z,{products:b,loading:r})))))))}))},3404:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/fullwidth/[slug]",function(){return t(3757)}])}},function(e){e.O(0,[1243,2879,9774,2888,179],(function(){return a=3404,e(e.s=a);var a}));var a=e.O();_N_E=a}]);