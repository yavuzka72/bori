(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5559],{2076:function(e,a,t){"use strict";var s=t(7294),i=t(1163),l=t(8335),r=s.createElement;function c(e){var a=(0,i.useRouter)(),t=e.prev,s=e.next,c=e.current,o=e.fullWidth;return r("nav",{className:"breadcrumb-nav border-0 mb-0"},r("div",{className:"d-flex align-items-center "+(void 0!==o&&o?"container-fluid":"container")},r("ol",{className:"breadcrumb"},r("li",{className:"breadcrumb-item"},r(l.Z,{href:"/"},"Home")),r("li",{className:"breadcrumb-item"},r(l.Z,{href:"/product/default/dark-yellow-lace-cut-out-swing-dress"},"Product")),r("li",{className:"breadcrumb-item active"},c)),r("nav",{className:"product-pager ml-auto"},t?r(l.Z,{href:{pathname:a.pathname,query:{slug:t.slug}},className:"product-pager-link product-pager-prev ".concat(s?"":"prev-only")},r("i",{className:"icon-angle-left"}),r("span",null,"Prev"),r("div",{className:"product-detail"},r("figure",null,r("img",{src:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+t.sm_pictures[0].url,alt:"product",width:t.sm_pictures[0].width,height:t.sm_pictures[0].height})),r("h3",{className:"product-name mb-0"},t.name))):"",s?r(l.Z,{href:{pathname:a.pathname,query:{slug:s.slug}},className:"product-pager-link product-pager-next"},r("span",null,"Next"),r("i",{className:"icon-angle-right"}),r("div",{className:"product-detail"},r("figure",null,r("img",{src:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+s.sm_pictures[0].url,alt:"product",width:s.sm_pictures[0].width,height:s.sm_pictures[0].height})),r("h3",{className:"product-name mb-0"},s.name))):"")))}a.Z=s.memo(c)},478:function(e,a,t){"use strict";var s=t(4047),i=t(7294),l=t(2879),r=i.createElement;function c(e){var a=e.product,t=e.adClass,c=void 0===t?"product-gallery-vertical":t,o=(0,i.useState)(!1),n=o[0],u=o[1],m=(0,i.useState)(0),d=m[0],p=m[1];return console.log(a),(0,i.useEffect)((function(){a[0]&&(u(!1),p(0))}),[a]),a?r(i.Fragment,null,r("div",{className:"product-gallery ".concat(c)},r("div",{className:"row m-0"},r("figure",{className:"product-main-image",index:"0"},a.new?r("span",{className:"product-label label-new"},"New"):"",a.sale_price?r("span",{className:"product-label label-sale"},"Sale"):"",a.top?r("span",{className:"product-label label-top"},"Top"):"",a.stock&&0!=a.stock?"":r("span",{className:"product-label label-out"},"Out of Stock"),r(s.lb,{imageSrc:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+a[0].pictures[0].url,imageAlt:"product",largeImageSrc:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+a[0].pictures[0].url,dragToMove:!1,mouseActivation:"hover",cursorStyleActive:"crosshair",id:"product-zoom",className:"zoom-image position-relative overflow-hidden",width:a[0].pictures[0].width,height:a[0].pictures[0].height,style:{paddingTop:"".concat(a[0].pictures[0].height/a[0].pictures[0].width*100,"%")}}),r("button",{id:"btn-product-gallery",className:"btn-product-gallery",onClick:function(){var e=parseInt(document.querySelector(".product-main-image").getAttribute("index"));e||(e=0),u(!0),p(e)}},r("i",{className:"icon-arrows"}))),r("div",{id:"product-zoom-gallery",className:"product-image-gallery"},a[0].pictures.map((function(e,t){return r("button",{className:"product-gallery-item ".concat(0===t?"active":""),key:a[0].id+"-"+t,onClick:function(a){return function(e,a,t){for(var s=document.querySelectorAll(".product-main-image img"),i=0;i<s.length;i++)s[i].src=a;document.querySelector(".product-image-gallery .active").classList.remove("active"),document.querySelector(".product-main-image").setAttribute("index",t),e.currentTarget.classList.add("active")}(a,"".concat("https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+e.url),t)}},r("div",{className:"img-wrapper h-100"},r("img",{src:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+a[0].pictures[t].url,alt:"product back"})))}))))),n?r(l.Z,{mainSrc:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+a[0].pictures[d].url,nextSrc:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+a[0].pictures[(d+1)%a[0].pictures.length].url,prevSrc:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+a[0].pictures[(d+a[0].pictures.length-1)%a[0].pictures.length].url,onCloseRequest:function(){u(!1)},onMovePrevRequest:function(){p((d+1)%a[0].pictures.length)},onMoveNextRequest:function(){p((d+a[0].pictures.length-1)%a[0].pictures.length)},reactModalStyle:{overlay:{zIndex:1041}}}):""):r("div",null)}a.Z=i.memo(c)},439:function(e,a,t){"use strict";var s=t(7294),i=t(340),l=t(8335),r=s.createElement;function c(e){var a=e.product,t=function(e){e.preventDefault(),e.currentTarget.parentNode.querySelector(".active")&&e.currentTarget.parentNode.querySelector(".active").classList.remove("active"),e.currentTarget.classList.add("active")};return a?r(i.mQ,{selectedTabClassName:"show",selectedTabPanelClassName:"active show"},r("div",{className:"product-details-tab"},r(i.td,{className:"nav nav-pills justify-content-center"},r(i.OK,{className:"nav-item"},r("span",{className:"nav-link"}," Description")),r(i.OK,{className:"nav-item"},r("span",{className:"nav-link"}," Additional information")),r(i.OK,{className:"nav-item"},r("span",{className:"nav-link"},"Shipping & Returns")),r(i.OK,{className:"nav-item"},r("span",{className:"nav-link"},"Reviews (",a.review,")"))),r("div",{className:"tab-content"},r(i.x4,{className:"tab-pane"},r("div",{className:"product-desc-content"},r("h3",null,"Product Information"),r("p",{className:"pb-1"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. "),r("ul",null,r("li",null,"Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. "),r("li",null,"Vivamus finibus vel mauris ut vehicula."),r("li",null,"Nullam a magna porttitor, dictum risus nec, faucibus sapien.")),r("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. "))),r(i.x4,{className:"tab-pane"},r("div",{className:"product-desc-content"},r("h3",null,"Information"),r("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. "),r("h3",{className:"pt-2"},"Fabric & care"),r("ul",null,r("li",null,"Faux suede fabric"),r("li",null,"Gold tone metal hoop handles."),r("li",null,"RI branding"),r("li",null,"Snake print trim interior "),r("li",null,"Adjustable cross body strap"),r("li",null," Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm")),r("h3",null,"Size"),r("p",null,"one size"))),r(i.x4,{className:"tab-pane"},r("div",{className:"product-desc-content"},r("h3",null,"Delivery & returns"),r("p",null,"We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our ",r(l.Z,{href:"#"},"Delivery information"),r("br",null),"We hope you\u2019ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our ",r(l.Z,{href:"#"},"Returns information")))),r(i.x4,{className:"tab-pane"},r("div",{className:"reviews"},r("h3",null,"Reviews (2)"),r("div",{className:"review"},r("div",{className:"row no-gutters"},r("div",{className:"col-auto"},r("h4",null,r(l.Z,{href:"#"},"Samanta J.")),r("div",{className:"ratings-container"},r("div",{className:"ratings"},r("div",{className:"ratings-val",style:{width:20*a.ratings+"%"}}),r("span",{className:"tooltip-text"},a[0].ratings.toFixed(2)))),r("span",{className:"review-date mb-1"},"6 days ago")),r("div",{className:"col"},r("h4",null,"Good, perfect size"),r("div",{className:"review-content"},r("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!")),r("div",{className:"review-action"},r(l.Z,{href:"#"},r("i",{className:"icon-thumbs-up"}),"Helpful (2)"),r(l.Z,{href:"#"},r("i",{className:"icon-thumbs-down"}),"Unhelpful (0)"))))),r("div",{className:"review"},r("div",{className:"row no-gutters"},r("div",{className:"col-auto"},r("h4",null,r(l.Z,{href:"#"},"John Doe")),r("div",{className:"ratings-container"},r("div",{className:"ratings"},r("div",{className:"ratings-val",style:{width:20*a.ratings+"%"}}),r("span",{className:"tooltip-text"},a[0].ratings.toFixed(2)))),r("span",{className:"review-date mb-1"},"5 days ago")),r("div",{className:"col"},r("h4",null,"Very good"),r("div",{className:"review-content"},r("p",null,"Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!")),r("div",{className:"review-action"},r(l.Z,{href:"#"},r("i",{className:"icon-thumbs-up"}),"Helpful (0)"),r(l.Z,{href:"#"},r("i",{className:"icon-thumbs-down"}),"Unhelpful (0)")))))),r("div",{className:"reply"},r("div",{className:"title-wrapper text-left"},r("h3",{className:"title title-simple text-left text-normal"},"Add a Review"),r("p",null,"Your email address will not be published. Required fields are marked *")),r("div",{className:"rating-form"},r("label",{htmlFor:"rating",className:"text-dark"},"Your rating * "),r("span",{className:"rating-stars selected"},[1,2,3,4,5].map((function(e,a){return r("a",{className:"star-".concat(e),href:"#",onClick:t,key:"star-"+a},e)}))),r("select",{name:"rating",id:"rating",required:"",style:{display:"none"}},r("option",{value:""},"Rate\u2026"),r("option",{value:"5"},"Perfect"),r("option",{value:"4"},"Good"),r("option",{value:"3"},"Average"),r("option",{value:"2"},"Not that bad"),r("option",{value:"1"},"Very poor"))),r("form",{action:"#"},r("textarea",{id:"reply-message",cols:"30",rows:"6",className:"form-control mb-2",placeholder:"Comment *",required:!0}),r("div",{className:"row"},r("div",{className:"col-md-6"},r("input",{type:"text",className:"form-control",id:"reply-name",name:"reply-name",placeholder:"Name *",required:!0})),r("div",{className:"col-md-6"},r("input",{type:"email",className:"form-control",id:"reply-email",name:"reply-email",placeholder:"Email *",required:!0}))),r("div",{className:"form-checkbox d-flex align-items-start mb-2"},r("input",{type:"checkbox",className:"custom-checkbox",id:"signin-remember",name:"signin-remember"}),r("label",{className:"form-control-label ml-3",htmlFor:"signin-remember"},"Save my name, email, and website in this browser for the next time I comment.")),r("button",{type:"submit",className:"btn btn-primary"},"Submit"))))))):r("div",null)}a.Z=s.memo(c)},378:function(e,a,t){"use strict";var s=t(7294),i=t(6359),l=t(4138),r=t(8289),c=s.createElement;function o(e){var a=e.products;return console.log(a),c(s.Fragment,null,c("h2",{className:"title text-center mb-4"},"You May Also Like"),e.loading?c(l.Z,{adClass:"owl-simple carousel-equal-height carousel-with-shadow cols-xl-5 cols-lg-4 cols-md-3 cols-2",isTheme:!1,options:r.jc},[1,2,3,4].map((function(e,a){return c("div",{className:"skel-pro",key:a})}))):c(l.Z,{adClass:"owl-simple carousel-equal-height carousel-with-shadow cols-lg-4 cols-md-3 cols-xs-2 cols-1",isTheme:!1,options:r.jc},a.map((function(e,a){return c(i.Z,{product:e,key:a})}))))}a.Z=s.memo(o)},7484:function(e,a,t){"use strict";t.d(a,{Z:function(){return N}});var s=t(7294),i=t(2679),l=t(8335),r=t(4138),c=s.createElement;function o(e){var a=e.product,t=(0,s.useState)(0),i=t[0],r=t[1],o=(0,s.useState)(99999),n=o[0],u=o[1];return(0,s.useEffect)((function(){var e=n,t=i;a.variants.map((function(a){e>a.price&&(e=a.price),t<a.price&&(t=a.price)}),[]),0==a.variants.length&&(e=a.sale_price?a.sale_price:a.price,t=a.price),u(e),r(t)}),[]),c("div",{className:"product product-sm"},c("figure",{className:"product-media"},c(l.Z,{href:"/product/default/".concat(a.slug)},c("img",{src:"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/"+a.sm_pictures[0].url,alt:"Product",className:"product-image"}))),c("div",{className:"product-body"},c("h5",{className:"product-title"},c(l.Z,{href:"/product/default/".concat(a.slug)},a.name)),a.stock&&0!=a.stock?n==i?c("div",{className:"product-price"},"$",n.toFixed(2)):0==a.variants.length?c("div",{className:"product-price"},c("span",{className:"new-price"},"$",n.toFixed(2)),c("span",{className:"old-price"},"$",i.toFixed(2))):c("div",{className:"product-price"},"$",n.toFixed(2),"\u2013$",i.toFixed(2)):c("div",{className:"product-price"},c("span",{className:"out-price"},"$",a.price.toFixed(2)))))}var n=s.memo(o),u=s.createElement;function m(e){var a=e.products;return a?u(r.Z,{adClass:"owl-simple"},u("div",null,a.map((function(e,a){return u(n,{product:e,key:a})})))):u("div",null)}var d=s.memo(m),p=s.createElement;function v(e){var a=(0,s.useState)(0),t=a[0],r=a[1],c=e.products,o=e.loading,n=void 0!==o&&o;function u(){document.querySelector("body").offsetWidth<992?r(!0):r(!1)}return(0,s.useEffect)((function(){return u(),window.addEventListener("resize",u),function(){window.removeEventListener("resize",u)}}),[]),c?p(s.Fragment,null,n?"":p(s.Fragment,null,p("div",{className:"".concat(t?"sidebar-filter right":"sidebar"," sidebar-product")},p("div",{className:t?"sidebar-filter-wrapper product-sidebar-wrapper":""},p("button",{onClick:function(){document.querySelector("body").classList.contains("sidebar-filter-active")&&document.querySelector("body").classList.remove("sidebar-filter-active")},className:"btn-product btn-close",style:{marginLeft:"auto",marginRight:"5px"}},p("i",{className:"icon-close"})),p("div",{className:"widget widget-products"},p("h4",{className:"widget-title mb-1"},"Related Product"),p("div",{className:"products"},p(d,{products:c.slice(0,4)})),p(l.Z,{href:"/shop/sidebar/list",className:"btn btn-outline-dark-3 text-truncate"},p("span",null,"View More Products"),p("i",{className:"icon-long-arrow-right"}))),p("div",{className:"widget widget-banner-sidebar pb-2"},p("div",{className:"banner-sidebar-title"},"ad box 280 x 280"),p("div",{className:"banner-sidebar text-left banner-overlay ml-0"},p(l.Z,{href:"#",className:"w-100"},p("div",{className:"lazy-overlay"}),p(i.LazyLoadImage,{alt:"banner",src:"images/blog/sidebar/banner.jpg",threshold:500,height:277,width:280,effect:"opacity"})),p("div",{className:"banner-content text-left pt-0"},p("p",{className:"mb-1"},"online & in-store"),p("h3",{className:"banner-subtitle text-uppercase"},"Spring Sale"),p("h2",{className:"banner-title"},"Up to 60% off",p("br",null),"from $55"),p(l.Z,{href:"/shop/sidebar/3cols",className:"btn btn-outline btn-md btn-outline-white text-uppercase m-0"},"Shop Now")))))),t?p("button",{className:"sidebar-fixed-toggler right",onClick:function(){document.querySelector("body").classList.contains("sidebar-filter-active")?document.querySelector("body").classList.remove("sidebar-filter-active"):document.querySelector("body").classList.add("sidebar-filter-active")}},p("i",{className:"icon-cog"})):"",p("div",{className:"sidebar-filter-overlay",onClick:function(){document.querySelector("body").classList.contains("sidebar-filter-active")&&document.querySelector("body").classList.remove("sidebar-filter-active")}}))):p("div",null)}var N=s.memo(v)},5282:function(e,a,t){"use strict";t.r(a);var s=t(7294),i=t(1163),l=t(3266),r=t(1243),c=t(7906),o=t(9638),n=t(2076),u=t(478),m=t(1547),d=t(439),p=t(7484),v=t(378),N=s.createElement;a.default=(0,c.Z)({ssr:!1})((function(){var e=(0,i.useRouter)().query.slug;if(!e)return N("div",null);var a=(0,l.a)(o.N4,{variables:{slug:e,onlyData:!1}}),t=a.data,s=a.loading,c=a.error,g=t&&t.product,b=t&&t.product,h=t&&t.product.prev,f=t&&t.product.next;return c?N("div",null):N("div",{className:"main"},N(n.Z,{prev:h,next:f,current:"Sidebar"}),N("div",{className:"page-content"},N("div",{className:"container skeleton-body horizontal"},N("div",{className:"row"},N("div",{className:"col-lg-9"},N("div",{className:"product-details-top"},N("div",{className:"row skel-pro-single ".concat(s?"":"loaded")},N("div",{className:"col-md-6"},N("div",{className:"skel-product-gallery"}),s?"":N(u.Z,{product:g,adClass:""})),N("div",{className:"col-md-6"},N("div",{className:"entry-summary row"},N("div",{className:"col-md-12"},N("div",{className:"entry-summary1 mt-2 mt-md-0"})),N("div",{className:"col-md-12"},N("div",{className:"entry-summary2"}))),s?"":N(m.Z,{product:g})))),s?N("div",{className:"skel-pro-tabs"}):N(d.Z,{product:g}),N("div",{className:"nav-none"},N(v.Z,{products:b,loading:s}))),N("div",{className:"col-lg-3 skeleton-body"},N(r.Z,{className:"sticky-content skel-pro-single ".concat(s?"":"loaded"),offsetTop:70},N("div",{className:"skel-widget"}),N("div",{className:"skel-widget"}),N(p.Z,{products:b,loading:s})))))))}))},9927:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/sidebar/[slug]",function(){return t(5282)}])}},function(e){e.O(0,[917,1243,2879,3671,9774,2888,179],(function(){return a=9927,e(e.s=a);var a}));var a=e.O();_N_E=a}]);