(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9475:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "About_container__rRFE8",
	"title": "About_title__mGjZR",
	"subtitle": "About_subtitle__XnsOi",
	"services": "About_services__6QkqU",
	"media": "About_media__ok3Qg",
	"service": "About_service___oxV5",
	"cat": "About_cat__E2xYv",
	"desc": "About_desc__Uk8DV"
};


/***/ }),

/***/ 3995:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Intro_container__AnxTD",
	"card": "Intro_card__vqyI2",
	"circle": "Intro_circle___CeyB",
	"circle1": "Intro_circle1__ZB5uM",
	"circle2": "Intro_circle2__OpXI0",
	"title": "Intro_title__0waom",
	"brand": "Intro_brand__AO6yM",
	"desc": "Intro_desc__Kv6Dp",
	"button": "Intro_button__qYVWR"
};


/***/ }),

/***/ 3827:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Teams_container__yQQbJ",
	"title": "Teams_title__tfqEN",
	"post": "Teams_post__CbeGJ",
	"wrapper": "Teams_wrapper__RRkN8",
	"card": "Teams_card__4nrmB",
	"bio": "Teams_bio__tklvK",
	"name": "Teams_name__MqZi4",
	"img": "Teams_img__hDkcV",
	"info": "Teams_info__YicSg",
	"person": "Teams_person__JBf_A",
	"link": "Teams_link__S1F_X"
};


/***/ }),

/***/ 130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Circle = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "circle",
        style: {
            ...props
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Circle);


/***/ }),

/***/ 4850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/Intro.module.css
var Intro_module = __webpack_require__(3995);
var Intro_module_default = /*#__PURE__*/__webpack_require__.n(Intro_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/Circle.jsx
var Circle = __webpack_require__(130);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Intro.jsx






const Intro = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Intro_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Circle/* default */.Z, {
                backgroundColor: "#b0ff49",
                top: "-30vh",
                left: "-50vh"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Circle/* default */.Z, {
                backgroundColor: "#01c686",
                right: "-50vh",
                bottom: "-50vh"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Intro_module_default()).card,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: (Intro_module_default()).title,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Intro_module_default()).brand,
                                children: "open"
                            }),
                            "  source learners"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Intro_module_default()).desc,
                        children: "open source learners is a place where you dont just apply your skills but get to acquire a bunch of new one"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (Intro_module_default()).button,
                        children: "Discover"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Intro_module_default()).card,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/src/img/logo.png",
                    width: "50%",
                    height: "50%",
                    layout: "fill",
                    alt: "logo",
                    objectFit: "contain"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Intro = (Intro);

// EXTERNAL MODULE: ./styles/About.module.css
var About_module = __webpack_require__(9475);
var About_module_default = /*#__PURE__*/__webpack_require__.n(About_module);
;// CONCATENATED MODULE: ./components/About.jsx





const About = ({ services  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (About_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (About_module_default()).title,
                children: " What we Can Do ?"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (About_module_default()).subtitle,
                children: " Services we can help you With"
            })
        ]
    });
};
/* harmony default export */ const components_About = (About);

// EXTERNAL MODULE: ./styles/Teams.module.css
var Teams_module = __webpack_require__(3827);
var Teams_module_default = /*#__PURE__*/__webpack_require__.n(Teams_module);
// EXTERNAL MODULE: ./data.js
var data = __webpack_require__(7225);
;// CONCATENATED MODULE: ./components/Teams.jsx






const Teams = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Teams_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Circle/* default */.Z, {
                backgroundColor: "#01c686",
                top: "-75vh",
                left: "0",
                right: "0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (Teams_module_default()).title,
                children: "Founding Team"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Teams_module_default()).wrapper,
                children: data/* teams.map */.f.map((member)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Teams_module_default()).card,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Teams_module_default()).person,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: (Teams_module_default()).img,
                                    src: `/src/img/${member.photo}`,
                                    width: "45",
                                    height: "45",
                                    alt: "image"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Teams_module_default()).info,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (Teams_module_default()).name,
                                            children: member.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (Teams_module_default()).post,
                                            children: member.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (Teams_module_default()).bio,
                                            children: member.bio
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Teams_module_default()).link,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/src/img/google.png",
                                            width: "30",
                                            height: "30",
                                            alt: "image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/src/img/facebook.png",
                                            width: "30",
                                            height: "30",
                                            alt: "image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/src/img/google.png",
                                            width: "30",
                                            height: "30",
                                            alt: "image"
                                        })
                                    ]
                                })
                            ]
                        })
                    }, member.id)
                )
            })
        ]
    });
};
/* harmony default export */ const components_Teams = (Teams);

;// CONCATENATED MODULE: ./pages/index.js

/**
 * Head is from next js Features that make it a Good choose over react 
 * inter of search ranking
 */ 




function Home({ about  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Home | open source learners.."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "open source learners"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/src/favicon/apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/src/favicon/favicon-32x32.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/src/favicon/favicon-16x16.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Intro, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_About, {
                about: about
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Teams, {})
        ]
    });
};
/**
 * replecement of useEffect state in react 
 */ const getStaticProps = async ()=>{
    const about = data/* data */.a;
    return {
        props: {
            about
        }
    };
};


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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [505,61,225], () => (__webpack_exec__(4850)));
module.exports = __webpack_exports__;

})();