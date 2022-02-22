(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{363:function(t,e,a){},364:function(t,e,a){"use strict";a(363)},365:function(t,e,a){"use strict";var s=a(502),i=a(505),n={name:"Sidebar",components:{SidebarLinks:s.default,NavLinks:i.a},props:["items"]},o=(a(364),a(45)),r=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.a=r.exports},501:function(t,e,a){},512:function(t,e,a){"use strict";a(501)},513:function(t,e,a){"use strict";var s={name:"Home",components:{NavLink:a(514).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(a(512),a(45)),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[a("header",{staticClass:"hero"},[t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?a("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e(),t._v(" "),null!==t.data.tagline?a("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e()]),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,(function(e,s){return a("div",{key:s,staticClass:"feature"},[a("a",{attrs:{href:e.link}},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])])})),0):t._e(),t._v(" "),a("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?a("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.a=n.exports},549:function(t,e,a){},585:function(t,e,a){"use strict";a(549)},976:function(t,e,a){"use strict";a.r(e);var s=a(513),i=a(506),n=a(504),o=a(365),r=a(362),c=a(508),l={name:"Layout",components:{Home:s.a,Page:n.a,Sidebar:o.a,Navbar:i.a,Comment:c.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(r.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},u=(a(585),a(45)),h=Object(u.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom"),t._v(" "),a("div",{staticClass:"back"},[a("a",{staticClass:"back-span",attrs:{href:"/wiki"}},[t._v("Back to list")])]),t._v(" "),a("div",{staticClass:"theme-default-content"},[a("Comment")],1)]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=h.exports}}]);