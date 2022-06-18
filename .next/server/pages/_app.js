(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4852:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Footer_container__iN3aW",
	"title": "Footer_title__ZStl1",
	"links": "Footer_links__BOCwF",
	"linkT": "Footer_linkT__xcesm",
	"cardB": "Footer_cardB__MJsCg",
	"cardS": "Footer_cardS__Uj5yX",
	"cardItem": "Footer_cardItem__6m8dQ"
};


/***/ }),

/***/ 5392:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Navbar_container__rxFeS",
	"listItem": "Navbar_listItem__twU0F",
	"logo": "Navbar_logo__E_Sw_",
	"hamburger": "Navbar_hamburger__i8zx1",
	"line": "Navbar_line__rzmvw",
	"menu": "Navbar_menu__66zmq"
};


/***/ }),

/***/ 41:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(4852);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer.jsx




const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Footer_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).cardB,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (Footer_module_default()).title,
                        children: "OPEN SOURCE LEARNERS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (Footer_module_default()).links,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "//",
                            passHref: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (Footer_module_default()).linkT,
                                    children: "work with us"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/src/img/link.png",
                                    width: "40px",
                                    height: "40px",
                                    alt: "logo"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).cardS,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_module_default()).cardItem,
                        children: [
                            "open Source Learners ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " Nigeria"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_module_default()).cardItem,
                        children: [
                            "Contact@opls.gmail.com",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " +234 185 653 08"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).cardS,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_module_default()).cardItem,
                        children: [
                            "FOLLOW US: ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " _FB _IN _LN _TW _UT"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_module_default()).cardItem,
                        children: [
                            "@ 2022 open source Learners",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " ALL RIGHTS RESERVED"
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./styles/Navbar.module.css
var Navbar_module = __webpack_require__(5392);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./public/src/img/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.26320f44.png","height":3767,"width":3767,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/klEQVR42iWPvU7CUBxH+zr3URxNnPQFXIyDxt3dBB2VEGY/QjQBHGTgakI1FkOVW3tp0/BRKi31gmK092/iT8EzneRMx5izWthiQdTj7YGka3lHYRzx5aMNtogr+U0WT8ZKJgGK1ilyjSKG0xFGKlFrhW1myNDnRIQzs6yXznfAjtdRd0yNH8Dpd7ihZlPSmUbt8goX9SpOKiU8SYE56dsrGWEa0fvHDA/Cht8PIAMPTccGfROG6QsZNfuGm44Fs23pR99Gy7PR+HPRlTCfLW7slvaZ6LoqVmN8Zl/ItEYySWEHQuUq+f+Tg2qB3bpNLnouuQOP7jstvlc+XMRf8wrCmFXiHxgAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/Navbar.jsx







const Navbar = ()=>{
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Navbar_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: logo,
                    alt: "logo",
                    className: (Navbar_module_default()).logo,
                    width: 35,
                    height: 35
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).listItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/Marketing",
                            children: "About us"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).listItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/Design",
                            children: "Teams"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).listItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/Mobile",
                            children: "Comminity"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).listItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/Maintenance",
                            children: "Courses"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).listItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/consultant",
                            children: "Blogs"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).listItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/Database",
                            children: "Contact"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Navbar_module_default()).hamburger,
                onClick: ()=>setOpen(!open)
                ,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navbar_module_default()).line
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navbar_module_default()).line
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navbar_module_default()).line
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                onClick: ()=>setOpen(false)
                ,
                className: (Navbar_module_default()).menu,
                style: {
                    right: open ? "0px" : "-50vw"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).menuItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "HOME"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).menuItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/Marketing",
                            children: "Marketing"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).menuItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/Design",
                            children: "Teams"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).menuItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/Mobile",
                            children: "services"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).menuItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/Maintenance",
                            children: "Comminity"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).menuItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/consultant",
                            children: "Courses"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Navbar_module_default()).menuItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products/Database",
                            children: "Blogs"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Layout.jsx



/**
 * global componect for each pages
 * 
 */ const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



/**
 * making it universally accessible by all component
 *  
 */ function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61], () => (__webpack_exec__(41)));
module.exports = __webpack_exports__;

})();