"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exploreWorlds\": function() { return /* binding */ exploreWorlds; },\n/* harmony export */   \"insights\": function() { return /* binding */ insights; },\n/* harmony export */   \"newFeatures\": function() { return /* binding */ newFeatures; },\n/* harmony export */   \"socials\": function() { return /* binding */ socials; },\n/* harmony export */   \"startingFeatures\": function() { return /* binding */ startingFeatures; }\n/* harmony export */ });\nconst exploreWorlds = [\n    {\n        id: \"world-1\",\n        imgUrl: \"/card 1.jpg\",\n        title: \"Thinkr\"\n    },\n    {\n        id: \"world-2\",\n        imgUrl: \"/card 2.jpg\",\n        title: \"Biowear\"\n    },\n    {\n        id: \"world-3\",\n        imgUrl: \"/card 3.jpg\",\n        title: \"Helio Guard\"\n    },\n    {\n        id: \"world-4\",\n        imgUrl: \"/card 4.jpg\",\n        title: \"STM \"\n    },\n    {\n        id: \"world-5\",\n        imgUrl: \"/card 5.jpg\",\n        title: \"Hawkins Labs\"\n    }\n];\nconst startingFeatures = [\n    \"OpenHearts core values and its dedication to pushing the boundaries of blockchain and deep learning technologies.\",\n    \"OpenHearts commitment to impactful research and sustainable practices.\",\n    \"sustainability by minimizing resource wastage through decentralized and efficient data sharing.\"\n];\nconst newFeatures = [\n    {\n        imgUrl: \"/vrpano.svg\",\n        title: \"Our Vision\",\n        subtitle: \"Bridging the gap between research, technology, and healthcare for a better world.\"\n    },\n    {\n        imgUrl: \"/headset.svg\",\n        title: \" its journey\",\n        subtitle: \"In Revolutionizing Research and Medical Diagnosis with Blockchain and Deep Learning\"\n    }\n];\nconst insights = [\n    {\n        imgUrl: \"/card 1.jpg\",\n        title: \"Thinkr: Decentralized research platform\",\n        subtitle: \"Thinkr as a revolutionary platform connecting researchers globally, researchers from different corners of the world collaborating and connecting seamlessly.\"\n    },\n    {\n        imgUrl: \"/card 2.jpg\",\n        title: \"Bio wear\",\n        subtitle: \"An advanced medical diagnosis system driven by AI and deep learning. Explain its role in aiding healthcare professionals for accurate and efficient diagnoses.\"\n    },\n    {\n        imgUrl: \"/nature 2.jpg\",\n        title: \"Helio Guard\",\n        subtitle: \"The energy grid plays a crucial role in providing reliable and uninterrupted power supply to society. However, unforeseen faults and anomalies in the grids infrastructure can lead to disruptions and failures, causing significant economic and social consequences. This project proposes the development of a Predictive Maintenance System using machine learning to enhance grid resilience by proactively detecting potential faults and anomalies, thereby mitigating risks and improving grid stability.\"\n    }\n];\nconst socials = [\n    {\n        name: \"twitter\",\n        url: \"/twitter.svg\"\n    },\n    {\n        name: \"linkedin\",\n        url: \"/linkedin.svg\"\n    },\n    {\n        name: \"instagram\",\n        url: \"/instagram.svg\"\n    },\n    {\n        name: \"facebook\",\n        url: \"/facebook.svg\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxNQUFNQSxnQkFBZ0I7SUFDM0I7UUFDRUMsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7Q0FDRCxDQUFDO0FBRUssTUFBTUMsbUJBQW1CO0lBQzlCO0lBQ0E7SUFDQTtDQUNELENBQUM7QUFFSyxNQUFNQyxjQUFjO0lBQ3pCO1FBQ0VILFFBQVE7UUFDUkMsT0FBTztRQUNQRyxVQUNJO0lBQ047SUFDQTtRQUNFSixRQUFRO1FBQ1JDLE9BQU87UUFDUEcsVUFDSTtJQUNOO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLFdBQVc7SUFDdEI7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7SUFDTjtJQUNBO1FBQ0VKLFFBQVE7UUFDUkMsT0FBTztRQUNQRyxVQUNJO0lBQ047SUFDQTtRQUNFSixRQUFRO1FBQ1JDLE9BQU87UUFDUEcsVUFDSTtJQUNOO0NBQ0QsQ0FBQztBQUVLLE1BQU1FLFVBQVU7SUFDckI7UUFDRUMsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLEtBQUs7SUFDUDtJQUNBO1FBQ0VELE1BQU07UUFDTkMsS0FBSztJQUVQO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7Q0FDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnN0YW50cy9pbmRleC5qcz8zNzM3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBleHBsb3JlV29ybGRzID0gW1xuICB7XG4gICAgaWQ6ICd3b3JsZC0xJyxcbiAgICBpbWdVcmw6ICcvY2FyZCAxLmpwZycsXG4gICAgdGl0bGU6ICdUaGlua3InLFxuICB9LFxuICB7XG4gICAgaWQ6ICd3b3JsZC0yJyxcbiAgICBpbWdVcmw6ICcvY2FyZCAyLmpwZycsXG4gICAgdGl0bGU6ICdCaW93ZWFyJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnd29ybGQtMycsXG4gICAgaW1nVXJsOiAnL2NhcmQgMy5qcGcnLFxuICAgIHRpdGxlOiAnSGVsaW8gR3VhcmQnLFxuICB9LFxuICB7XG4gICAgaWQ6ICd3b3JsZC00JyxcbiAgICBpbWdVcmw6ICcvY2FyZCA0LmpwZycsXG4gICAgdGl0bGU6ICdTVE0gJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnd29ybGQtNScsXG4gICAgaW1nVXJsOiAnL2NhcmQgNS5qcGcnLFxuICAgIHRpdGxlOiAnSGF3a2lucyBMYWJzJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzdGFydGluZ0ZlYXR1cmVzID0gW1xuICAnT3BlbkhlYXJ0cyBjb3JlIHZhbHVlcyBhbmQgaXRzIGRlZGljYXRpb24gdG8gcHVzaGluZyB0aGUgYm91bmRhcmllcyBvZiBibG9ja2NoYWluIGFuZCBkZWVwIGxlYXJuaW5nIHRlY2hub2xvZ2llcy4nLFxuICAnT3BlbkhlYXJ0cyBjb21taXRtZW50IHRvIGltcGFjdGZ1bCByZXNlYXJjaCBhbmQgc3VzdGFpbmFibGUgcHJhY3RpY2VzLicsXG4gICdzdXN0YWluYWJpbGl0eSBieSBtaW5pbWl6aW5nIHJlc291cmNlIHdhc3RhZ2UgdGhyb3VnaCBkZWNlbnRyYWxpemVkIGFuZCBlZmZpY2llbnQgZGF0YSBzaGFyaW5nLicsXG5dO1xuXG5leHBvcnQgY29uc3QgbmV3RmVhdHVyZXMgPSBbXG4gIHtcbiAgICBpbWdVcmw6ICcvdnJwYW5vLnN2ZycsXG4gICAgdGl0bGU6ICdPdXIgVmlzaW9uJyxcbiAgICBzdWJ0aXRsZTpcbiAgICAgICAgJ0JyaWRnaW5nIHRoZSBnYXAgYmV0d2VlbiByZXNlYXJjaCwgdGVjaG5vbG9neSwgYW5kIGhlYWx0aGNhcmUgZm9yIGEgYmV0dGVyIHdvcmxkLicsXG4gIH0sXG4gIHtcbiAgICBpbWdVcmw6ICcvaGVhZHNldC5zdmcnLFxuICAgIHRpdGxlOiAnIGl0cyBqb3VybmV5JyxcbiAgICBzdWJ0aXRsZTpcbiAgICAgICAgJ0luIFJldm9sdXRpb25pemluZyBSZXNlYXJjaCBhbmQgTWVkaWNhbCBEaWFnbm9zaXMgd2l0aCBCbG9ja2NoYWluIGFuZCBEZWVwIExlYXJuaW5nJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBpbnNpZ2h0cyA9IFtcbiAge1xuICAgIGltZ1VybDogJy9jYXJkIDEuanBnJyxcbiAgICB0aXRsZTogJ1RoaW5rcjogRGVjZW50cmFsaXplZCByZXNlYXJjaCBwbGF0Zm9ybScsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICdUaGlua3IgYXMgYSByZXZvbHV0aW9uYXJ5IHBsYXRmb3JtIGNvbm5lY3RpbmcgcmVzZWFyY2hlcnMgZ2xvYmFsbHksIHJlc2VhcmNoZXJzIGZyb20gZGlmZmVyZW50IGNvcm5lcnMgb2YgdGhlIHdvcmxkIGNvbGxhYm9yYXRpbmcgYW5kIGNvbm5lY3Rpbmcgc2VhbWxlc3NseS4nLFxuICB9LFxuICB7XG4gICAgaW1nVXJsOiAnL2NhcmQgMi5qcGcnLFxuICAgIHRpdGxlOiAnQmlvIHdlYXInLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICAnQW4gYWR2YW5jZWQgbWVkaWNhbCBkaWFnbm9zaXMgc3lzdGVtIGRyaXZlbiBieSBBSSBhbmQgZGVlcCBsZWFybmluZy4gRXhwbGFpbiBpdHMgcm9sZSBpbiBhaWRpbmcgaGVhbHRoY2FyZSBwcm9mZXNzaW9uYWxzIGZvciBhY2N1cmF0ZSBhbmQgZWZmaWNpZW50IGRpYWdub3Nlcy4nLFxuICB9LFxuICB7XG4gICAgaW1nVXJsOiAnL25hdHVyZSAyLmpwZycsXG4gICAgdGl0bGU6ICdIZWxpbyBHdWFyZCcsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICdUaGUgZW5lcmd5IGdyaWQgcGxheXMgYSBjcnVjaWFsIHJvbGUgaW4gcHJvdmlkaW5nIHJlbGlhYmxlIGFuZCB1bmludGVycnVwdGVkIHBvd2VyIHN1cHBseSB0byBzb2NpZXR5LiBIb3dldmVyLCB1bmZvcmVzZWVuIGZhdWx0cyBhbmQgYW5vbWFsaWVzIGluIHRoZSBncmlkcyBpbmZyYXN0cnVjdHVyZSBjYW4gbGVhZCB0byBkaXNydXB0aW9ucyBhbmQgZmFpbHVyZXMsIGNhdXNpbmcgc2lnbmlmaWNhbnQgZWNvbm9taWMgYW5kIHNvY2lhbCBjb25zZXF1ZW5jZXMuIFRoaXMgcHJvamVjdCBwcm9wb3NlcyB0aGUgZGV2ZWxvcG1lbnQgb2YgYSBQcmVkaWN0aXZlIE1haW50ZW5hbmNlIFN5c3RlbSB1c2luZyBtYWNoaW5lIGxlYXJuaW5nIHRvIGVuaGFuY2UgZ3JpZCByZXNpbGllbmNlIGJ5IHByb2FjdGl2ZWx5IGRldGVjdGluZyBwb3RlbnRpYWwgZmF1bHRzIGFuZCBhbm9tYWxpZXMsIHRoZXJlYnkgbWl0aWdhdGluZyByaXNrcyBhbmQgaW1wcm92aW5nIGdyaWQgc3RhYmlsaXR5LicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc29jaWFscyA9IFtcbiAge1xuICAgIG5hbWU6ICd0d2l0dGVyJyxcbiAgICB1cmw6ICcvdHdpdHRlci5zdmcnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2xpbmtlZGluJyxcbiAgICB1cmw6ICcvbGlua2VkaW4uc3ZnJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdpbnN0YWdyYW0nLFxuICAgIHVybDogJy9pbnN0YWdyYW0uc3ZnJyxcbiAgICBcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdmYWNlYm9vaycsXG4gICAgdXJsOiAnL2ZhY2Vib29rLnN2ZycsXG4gIH0sXG5dO1xuIl0sIm5hbWVzIjpbImV4cGxvcmVXb3JsZHMiLCJpZCIsImltZ1VybCIsInRpdGxlIiwic3RhcnRpbmdGZWF0dXJlcyIsIm5ld0ZlYXR1cmVzIiwic3VidGl0bGUiLCJpbnNpZ2h0cyIsInNvY2lhbHMiLCJuYW1lIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/index.js\n"));

/***/ })

});