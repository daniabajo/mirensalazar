/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_4___default()();\napp.get('/', (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default().readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_4___default()[\"static\"]('./build'));\napp.listen(PORT, () => {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack://annavehi/./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_Logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Logo.svg */ \"./src/images/Logo.svg\");\n/* harmony import */ var _images_Logo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_Logo_svg__WEBPACK_IMPORTED_MODULE_1__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/Navigationbar'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/Footer'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _pages_Sobremi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Sobremi */ \"./src/pages/Sobremi.js\");\n/* harmony import */ var _pages_Servicios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Servicios */ \"./src/pages/Servicios.js\");\n/* harmony import */ var _pages_Reserva__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Reserva */ \"./src/pages/Reserva.js\");\n/* harmony import */ var _pages_Contacto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Contacto */ \"./src/pages/Contacto.js\");\n/* harmony import */ var _pages_PoliticaPrivacidad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/PoliticaPrivacidad */ \"./src/pages/PoliticaPrivacidad.js\");\n/* harmony import */ var _pages_AvisoLegal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/AvisoLegal */ \"./src/pages/AvisoLegal.js\");\n/* harmony import */ var _pages_PoliticaCookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/PoliticaCookies */ \"./src/pages/PoliticaCookies.js\");\n/* harmony import */ var _pages_Descargas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/Descargas */ \"./src/pages/Descargas.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_floating_whatsapp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-floating-whatsapp */ \"react-floating-whatsapp\");\n/* harmony import */ var react_floating_whatsapp__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_floating_whatsapp__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-cookie-consent */ \"react-cookie-consent\");\n/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_cookie_consent__WEBPACK_IMPORTED_MODULE_13__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/ScrollToTop'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/Popup'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _pages_CondicionesContratracion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/CondicionesContratracion */ \"./src/pages/CondicionesContratracion.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction App() {\n  const [ButtonPopUp, SetButtonPopUp] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);\n  const [TimePopUp, SetTimePopUp] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(() => {\n    setTimeout(() => {\n      SetTimePopUp(true);\n    }, 3000);\n  }, []);\n  return  true ? /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"img\", {\n    src: (_images_Logo_svg__WEBPACK_IMPORTED_MODULE_1___default()),\n    className: \"LogoMain\",\n    alt: \"logo\"\n  }), /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/Popup'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {\n    Trigger: TimePopUp,\n    SetTrigger: SetTimePopUp\n  }), /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/Navigationbar'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null), /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/ScrollToTop'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {\n    path: \"/\",\n    element: /*#__PURE__*/React.createElement(_pages_Sobremi__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {\n    path: \"/sobremi\",\n    element: /*#__PURE__*/React.createElement(_pages_Sobremi__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {\n    path: \"/servicios\",\n    element: /*#__PURE__*/React.createElement(_pages_Servicios__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {\n    path: \"/contacto\",\n    element: /*#__PURE__*/React.createElement(_pages_Contacto__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {\n    path: \"/reservacita\",\n    element: /*#__PURE__*/React.createElement(_pages_Reserva__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {\n    path: \"/politicaprivacidad\",\n    element: /*#__PURE__*/React.createElement(_pages_PoliticaPrivacidad__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {\n    path: \"/avisolegal\",\n    element: /*#__PURE__*/React.createElement(_pages_AvisoLegal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {\n    path: \"/politicacookies\",\n    element: /*#__PURE__*/React.createElement(_pages_PoliticaCookies__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null)\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {\n    path: \"/condicionescontratacion\",\n    element: /*#__PURE__*/React.createElement(_pages_CondicionesContratracion__WEBPACK_IMPORTED_MODULE_15__[\"default\"], null)\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {\n    path: \"/descargas\",\n    element: /*#__PURE__*/React.createElement(_pages_Descargas__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null)\n  })), /*#__PURE__*/React.createElement(react_floating_whatsapp__WEBPACK_IMPORTED_MODULE_12__.FloatingWhatsApp, {\n    className: \"a\",\n    phoneNumber: \"+34623003020\",\n    accountName: \"Centre de nutrici\\xF3 Anna Veh\\xED\",\n    chatMessage: \"Hola, en qu\\xE9 podemos ayudarte?\",\n    statusMessage: \"Responde antes de 48h\",\n    avatar: \"https://annavehi.com/favicon.png\"\n  }), /*#__PURE__*/React.createElement((react_cookie_consent__WEBPACK_IMPORTED_MODULE_13___default()), {\n    buttonText: \"Permitir\",\n    style: {\n      background: \"#31464e\",\n      fontFamily: 'Josefin Sans'\n    },\n    buttonStyle: {\n      color: \"black\",\n      fontSize: \"13px\",\n      location: \"left\",\n      fontFamily: 'Josefin Sans'\n    }\n  }, \"This website uses \", /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {\n    className: \"TextoLinkConsentCookies\",\n    to: \"/politicacookies\"\n  }, \" cookies\"), \" to enhance the user experience.\"), /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/Footer'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)) : /*#__PURE__*/0;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://annavehi/./src/App.js?");

/***/ }),

/***/ "./src/pages/AvisoLegal.js":
/*!*********************************!*\
  !*** ./src/pages/AvisoLegal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AvisoLegal)\n/* harmony export */ });\nfunction AvisoLegal() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"LegalContainer\"\n  }, /*#__PURE__*/React.createElement(\"h\", {\n    className: \"LegalTitulo\"\n  }, \"  Aviso Legal\"), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"LegalTexto\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"\\xDAltima actualizaci\\xF3n: 16/12/2023\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \" 1. Informaci\\xF3n del titular del sitio web: \"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \" Nombre del titular: Centre de nutrici\\xF3 Anna Veh\\xED \"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Domicilio social: Carrer Aribau 114 Entl. 4 Barcelona \"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \" Correo electr\\xF3nico de contacto: info@annavehi.com \"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \" 2. T\\xE9rminos y Condiciones de Uso: \"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"El acceso y uso de este sitio web est\\xE1n sujetos a los siguientes t\\xE9rminos y condiciones. Al acceder y utilizar este sitio, aceptas estos t\\xE9rminos en su totalidad. Si no est\\xE1s de acuerdo con alguno de estos t\\xE9rminos, por favor, no utilices el sitio.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"3. Propiedad Intelectual: \"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Todos los derechos de propiedad intelectual del contenido de este sitio web y su dise\\xF1o gr\\xE1fico son propiedad exclusiva de Centre de nutrici\\xF3 Anna Veh\\xED. Queda prohibida su reproducci\\xF3n total o parcial, su distribuci\\xF3n o su transmisi\\xF3n por cualquier medio sin el consentimiento previo y por escrito del titular.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"4. Uso Permitido:\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"El usuario se compromete a utilizar este sitio web de manera l\\xEDcita, respetando estos t\\xE9rminos y condiciones, la legislaci\\xF3n aplicable y la moral y buenas costumbres generalmente aceptadas. Queda prohibido cualquier uso con fines il\\xEDcitos o que pueda causar perjuicio o impedir el normal funcionamiento del sitio.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"5. Enlaces a Terceros:\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Este sitio web puede incluir enlaces a sitios web de terceros. Centre de nutrici\\xF3 Anna Veh\\xED no tiene control sobre el contenido de estos sitios y no asume responsabilidad alguna por cualquier p\\xE9rdida o da\\xF1o que pueda surgir del uso de los mismos.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"6. Limitaci\\xF3n de Responsabilidad:\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"El titular de este sitio web no se hace responsable de los da\\xF1os o perjuicios que puedan derivarse del acceso, uso o mala utilizaci\\xF3n de los contenidos, as\\xED como de los errores u omisiones en la informaci\\xF3n contenida.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"7. Modificaciones:\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"El titular se reserva el derecho de realizar modificaciones en el sitio web, en los t\\xE9rminos y condiciones de uso, as\\xED como en cualquier otro aspecto sin previo aviso. Se recomienda revisar peri\\xF3dicamente estos t\\xE9rminos.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"8. Ley Aplicable:\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Este aviso legal se rige por la legislaci\\xF3n [especificar la legislaci\\xF3n aplicable] y cualquier controversia se someter\\xE1 a los tribunales de [especificar la jurisdicci\\xF3n].\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"Centre de Nutrici\\xF3 Anna Veh\\xED\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Aribau 114, Entl 4\\xBA, 08036 Barcelona\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"info@annavehi.com\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"+34 623003020\")));\n}\n\n//# sourceURL=webpack://annavehi/./src/pages/AvisoLegal.js?");

/***/ }),

/***/ "./src/pages/CondicionesContratracion.js":
/*!***********************************************!*\
  !*** ./src/pages/CondicionesContratracion.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CondicionesContratacion)\n/* harmony export */ });\nfunction CondicionesContratacion() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"LegalContainer\"\n  }, /*#__PURE__*/React.createElement(\"h\", {\n    className: \"LegalTitulo\"\n  }, \"  \", /*#__PURE__*/React.createElement(\"a\", null, \" Condiciones de Contrataci\\xF3n de Servicios\"), \" \"), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"LegalTexto\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"\\xDAltima actualizaci\\xF3n: 16/12/2023\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"1. Aceptaci\\xF3n de Condiciones\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Al contratar los servicios de Centre de Nutrici\\xF3 Anna Veh\\xED, el cliente acepta y se compromete a cumplir con las siguientes condiciones generales de contrataci\\xF3n. Estas condiciones rigen la relaci\\xF3n contractual entre el cliente y Centre de Nutrici\\xF3 Anna Veh\\xED.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"2. Servicios Ofrecidos\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Centre de Nutrici\\xF3 Anna Veh\\xED ofrece servicios de nutrici\\xF3n, asesoramiento diet\\xE9tico y otros servicios relacionados con la salud y el bienestar. Los detalles espec\\xEDficos de los servicios, incluyendo precios y duraci\\xF3n, se acordar\\xE1n de forma individual mediante un contrato espec\\xEDfico o acuerdo de servicios.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"3. Tarifas y Pagos\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Las tarifas por los servicios prestados se establecer\\xE1n de com\\xFAn acuerdo entre Centre de Nutrici\\xF3 Anna Veh\\xED y el cliente. Los pagos deben realizarse seg\\xFAn los t\\xE9rminos acordados y se pueden efectuar a trav\\xE9s de los m\\xE9todos de pago especificados por Centre de Nutrici\\xF3 Anna Veh\\xED. En caso de retraso en el pago, Centre de Nutrici\\xF3 Anna Veh\\xED se reserva el derecho de aplicar cargos por mora.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"4. Cancelaciones por Parte del Cliente\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"El cliente puede cancelar los servicios notificando a Centre de Nutrici\\xF3 Anna Veh\\xED con un aviso previo de al menos 48 horas antes de la fecha programada. Se pueden aplicar cargos por cancelaci\\xF3n seg\\xFAn las circunstancias.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"5. Cancelaciones por Parte de Centre de Nutrici\\xF3 Anna Veh\\xED\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Centre de Nutrici\\xF3 Anna Veh\\xED se reserva el derecho de cancelar o posponer los servicios en casos de fuerza mayor o circunstancias imprevistas. En tales casos, se ofrecer\\xE1 al cliente la opci\\xF3n de reprogramar los servicios o recibir un reembolso.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"6. Confidencialidad\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Toda la informaci\\xF3n proporcionada por el cliente ser\\xE1 tratada con la m\\xE1xima confidencialidad. Centre de Nutrici\\xF3 Anna Veh\\xED se compromete a no divulgar ni compartir informaci\\xF3n personal o m\\xE9dica del cliente sin su consentimiento expreso, a menos que sea requerido por ley.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"7. Responsabilidad\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Centre de Nutrici\\xF3 Anna Veh\\xED no asume responsabilidad por cualquier da\\xF1o o p\\xE9rdida causada por la informaci\\xF3n proporcionada durante la prestaci\\xF3n de servicios. Los servicios ofrecidos no reemplazan el asesoramiento m\\xE9dico y no deben considerarse como tal.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"8. Modificaci\\xF3n de Condiciones\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Centre de Nutrici\\xF3 Anna Veh\\xED se reserva el derecho de modificar estas condiciones generales en cualquier momento. Las modificaciones entrar\\xE1n en vigencia despu\\xE9s de ser publicadas en el sitio web de Centre de Nutrici\\xF3 Anna Veh\\xED.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"9. Ley Aplicable\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Estas condiciones generales se rigen por las leyes de Espa\\xF1a y cualquier disputa relacionada con los servicios prestados se resolver\\xE1 mediante negociaci\\xF3n de buena fe entre las partes.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"10. Contacto\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Para cualquier pregunta o aclaraci\\xF3n sobre estas condiciones generales, el cliente puede ponerse en contacto con Centre de Nutrici\\xF3 Anna Veh\\xED a trav\\xE9s de:\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"Centre de Nutrici\\xF3 Anna Veh\\xED\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Aribau 114, Entl 4\\xBA, 08036 Barcelona\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"info@annavehi.com\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"+34 623003020\")));\n}\n\n//# sourceURL=webpack://annavehi/./src/pages/CondicionesContratracion.js?");

/***/ }),

/***/ "./src/pages/Contacto.js":
/*!*******************************!*\
  !*** ./src/pages/Contacto.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contacto)\n/* harmony export */ });\n/* harmony import */ var _images_Consulta_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../images/Consulta.png */ \"./src/images/Consulta.png\");\n/* harmony import */ var _images_Consulta_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_Consulta_png__WEBPACK_IMPORTED_MODULE_0__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './../components/DondeEstamos'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../components/Formulario'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\nfunction Contacto() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"AppClassOscuro\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    src: (_images_Consulta_png__WEBPACK_IMPORTED_MODULE_0___default()),\n    className: \"ImageTransversal\",\n    alt: \"Consulta\"\n  }), /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './../components/DondeEstamos'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null), /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../components/Formulario'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null));\n}\n\n//# sourceURL=webpack://annavehi/./src/pages/Contacto.js?");

/***/ }),

/***/ "./src/pages/Descargas.js":
/*!********************************!*\
  !*** ./src/pages/Descargas.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Descargas)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './../descargables/ClavesDelExito'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\nfunction Descargas() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Descargas\"\n  }, /*#__PURE__*/React.createElement(\"h\", {\n    className: \"TituloDorado\"\n  }, \"  \", /*#__PURE__*/React.createElement(\"a\", null, \" Descargas \"), \" \"), /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './../descargables/ClavesDelExito'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null));\n}\n\n//# sourceURL=webpack://annavehi/./src/pages/Descargas.js?");

/***/ }),

/***/ "./src/pages/PoliticaCookies.js":
/*!**************************************!*\
  !*** ./src/pages/PoliticaCookies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PoliticaCookies)\n/* harmony export */ });\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction PoliticaCookies() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"LegalContainer\"\n  }, /*#__PURE__*/React.createElement(\"h\", {\n    className: \"LegalTitulo\"\n  }, \"  \", /*#__PURE__*/React.createElement(\"a\", null, \" Pol\\xEDtica de Cookies\"), \" \"), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"LegalTexto\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \" \\xDAltima actualizaci\\xF3n:  16/12/2023\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Bienvenido/a al sitio web del Centre de Nutrici\\xF3 Anna Veh\\xED. Esta p\\xE1gina explica nuestra pol\\xEDtica sobre el uso de cookies en nuestro sitio web.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"\\xBFQu\\xE9 son las cookies?\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Las cookies son peque\\xF1os archivos de texto que se almacenan en tu dispositivo (ordenador, tablet, tel\\xE9fono m\\xF3vil) cuando visitas nuestro sitio web. Las cookies nos permiten reconocerte y recordar tus preferencias.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"\\xBFC\\xF3mo utilizamos las cookies?\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Utilizamos cookies por diversas razones, incluyendo: \"), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"LegalInline\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"1- Funcionalidad del sitio: \"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Para proporcionar una experiencia de navegaci\\xF3n eficiente y personalizada.\")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"LegalInline\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"2- An\\xE1lisis y rendimiento: \"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Para entender c\\xF3mo interact\\xFAas con nuestro sitio, qu\\xE9 p\\xE1ginas visitas y c\\xF3mo podemos mejorar.\")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"LegalInline\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"3- Publicidad: \"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Para mostrarte anuncios relevantes basados en tus intereses y limitar la frecuencia con la que ves los mismos anuncios.\")), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"Tipos de cookies que utilizamos: \"), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"LegalInline\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"1- Cookies esenciales: \"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Necesarias para el funcionamiento b\\xE1sico del sitio web.\")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"LegalInline\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"2- Cookies de rendimiento:  \"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Nos ayudan a mejorar el rendimiento del sitio recopilando informaci\\xF3n sobre c\\xF3mo se utiliza.\")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"LegalInline\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"3- Cookies de funcionalidad:  \"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Permiten recordar tus preferencias y personalizar tu experiencia.\")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"LegalInline\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"4- Cookies de publicidad:  \"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Utilizadas para ofrecerte anuncios relevantes.\")), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"Control de cookies: \"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Puedes gestionar tus preferencias de cookies a trav\\xE9s de la configuraci\\xF3n de tu navegador. Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad de nuestro sitio.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"Cambios en nuestra pol\\xEDtica de cookies: \"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Nos reservamos el derecho de realizar cambios en esta pol\\xEDtica de cookies en cualquier momento. Te recomendamos que revises esta p\\xE1gina peri\\xF3dicamente para estar al tanto de las actualizaciones.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"Contacto: \"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Si tienes preguntas sobre nuestra pol\\xEDtica de cookies, por favor cont\\xE1ctanos en info@annavehi.com.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Al continuar utilizando nuestro sitio web, aceptas el uso de cookies de acuerdo con esta pol\\xEDtica.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"Centre de Nutrici\\xF3 Anna Veh\\xED\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Aribau 114, Entl 4\\xBA, 08036 Barcelona\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"info@annavehi.com\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"+34 623003020\")));\n}\n\n//# sourceURL=webpack://annavehi/./src/pages/PoliticaCookies.js?");

/***/ }),

/***/ "./src/pages/PoliticaPrivacidad.js":
/*!*****************************************!*\
  !*** ./src/pages/PoliticaPrivacidad.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PoliticaPrivacidad)\n/* harmony export */ });\nfunction PoliticaPrivacidad() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"LegalContainer\"\n  }, /*#__PURE__*/React.createElement(\"h\", {\n    className: \"LegalTitulo\"\n  }, \"  \", /*#__PURE__*/React.createElement(\"a\", null, \" Pol\\xEDtica de Privacidad\"), \" \"), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"LegalTexto\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"\\xDAltima actualizaci\\xF3n: 16/12/2023\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Bienvenido/a al sitio web del Centre de Nutrici\\xF3 Anna Veh\\xED. En esta pol\\xEDtica de privacidad, explicamos c\\xF3mo recopilamos, utilizamos y protegemos la informaci\\xF3n personal que obtenemos a trav\\xE9s de este sitio web.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"Informaci\\xF3n que recopilamos Personal\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Podemos recopilar informaci\\xF3n personal, como nombres, direcciones de correo electr\\xF3nico y n\\xFAmeros de tel\\xE9fono, cuando los visitantes interact\\xFAan con nuestro sitio web, por ejemplo, al suscribirse a boletines informativos, completar formularios de contacto o realizar compras en l\\xEDnea.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"Informaci\\xF3n que recopilamos No Personal\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Tambi\\xE9n recopilamos informaci\\xF3n no personal, como datos de navegaci\\xF3n y estad\\xEDsticas sobre la interacci\\xF3n con nuestro sitio web. Esto puede incluir la direcci\\xF3n IP, tipo de navegador, p\\xE1ginas visitadas y tiempo de permanencia en el sitio.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"Uso de la Informaci\\xF3n\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Utilizamos la informaci\\xF3n recopilada para:\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"1- Personalizar la experiencia del usuario en nuestro sitio web.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"2- Enviar correos electr\\xF3nicos informativos sobre nuestros productos y servicios.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"3- Procesar transacciones realizadas a trav\\xE9s de nuestro sitio web.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"4- Mejorar continuamente nuestro sitio web y servicios.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"Cookies y Tecnolog\\xEDas Similares\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Utilizamos cookies y otras tecnolog\\xEDas similares para mejorar la experiencia del usuario y recopilar informaci\\xF3n sobre el uso del sitio web. Puedes gestionar las preferencias de cookies a trav\\xE9s de la configuraci\\xF3n de tu navegador.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"Protecci\\xF3n de la Informaci\\xF3n\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Tomamos medidas para proteger la informaci\\xF3n personal que recopilamos, utilizando pr\\xE1cticas de seguridad est\\xE1ndar de la industria.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"Compartir Informaci\\xF3n\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"No compartimos informaci\\xF3n personal con terceros sin tu consentimiento, excepto cuando sea necesario para cumplir con obligaciones legales.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"Acceso y Control de la Informaci\\xF3n Personal\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Proporcionamos a los usuarios acceso a su informaci\\xF3n personal y la opci\\xF3n de corregirla o eliminarla. Para realizar cambios, ponte en contacto con nosotros a trav\\xE9s de los datos de contacto proporcionados al final de esta pol\\xEDtica.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"Cambios en la Pol\\xEDtica de Privacidad\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Nos reservamos el derecho de actualizar esta pol\\xEDtica de privacidad en cualquier momento. Te recomendamos revisar peri\\xF3dicamente los cambios. La fecha de la \\xFAltima actualizaci\\xF3n se indica al principio de la pol\\xEDtica.\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"Contacto\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Si tienes preguntas sobre esta pol\\xEDtica de privacidad o el manejo de tu informaci\\xF3n personal, por favor, ponte en contacto con nosotros a trav\\xE9s de:\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalNegrita\"\n  }, \"Centre de Nutrici\\xF3 Anna Veh\\xED\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"Aribau 114, Entl 4\\xBA, 08036 Barcelona\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"info@annavehi.com\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"LegalExplicacion\"\n  }, \"+34 623003020\")));\n}\n\n//# sourceURL=webpack://annavehi/./src/pages/PoliticaPrivacidad.js?");

/***/ }),

/***/ "./src/pages/Reserva.js":
/*!******************************!*\
  !*** ./src/pages/Reserva.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Reserva)\n/* harmony export */ });\n/* harmony import */ var react_calendly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-calendly */ \"react-calendly\");\n/* harmony import */ var react_calendly__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_calendly__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_Consulta_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../images/Consulta.png */ \"./src/images/Consulta.png\");\n/* harmony import */ var _images_Consulta_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_Consulta_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './../components/Tarifas'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\nfunction Reserva() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"AppClassOscuro\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    src: (_images_Consulta_png__WEBPACK_IMPORTED_MODULE_1___default()),\n    className: \"ImageTransversal\",\n    alt: \"Consulta\"\n  }), /*#__PURE__*/React.createElement(\"h\", {\n    className: \"TituloDorado\"\n  }, \" \", /*#__PURE__*/React.createElement(\"a\", null, \" Reserva tu cita\"), \" \"), /*#__PURE__*/React.createElement(react_calendly__WEBPACK_IMPORTED_MODULE_0__.InlineWidget, {\n    url: \"https://calendly.com/annavehi/primera_visita_presencial\",\n    styles: {\n      height: '1000px'\n    }\n  }), /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './../components/Tarifas'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null));\n}\n\n//# sourceURL=webpack://annavehi/./src/pages/Reserva.js?");

/***/ }),

/***/ "./src/pages/Servicios.js":
/*!********************************!*\
  !*** ./src/pages/Servicios.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Servicios)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../components/ServiciosPanel'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var react_calendly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-calendly */ \"react-calendly\");\n/* harmony import */ var react_calendly__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_calendly__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_Consulta_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../images/Consulta.png */ \"./src/images/Consulta.png\");\n/* harmony import */ var _images_Consulta_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_Consulta_png__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Servicios() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"AppClass\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    src: (_images_Consulta_png__WEBPACK_IMPORTED_MODULE_2___default()),\n    className: \"ImageTransversal\",\n    alt: \"Consulta\"\n  }), /*#__PURE__*/React.createElement(\"h\", {\n    className: \"TituloDorado\"\n  }, \"  \", /*#__PURE__*/React.createElement(\"a\", null, \" Servicios\"), \" \"), /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../components/ServiciosPanel'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null), /*#__PURE__*/React.createElement(react_calendly__WEBPACK_IMPORTED_MODULE_1__.PopupButton, {\n    className: \"ServiciosBotonReservar\",\n    url: \"https://calendly.com/annavehi/primera_visita_presencial\",\n    rootElement: document.getElementById(\"root\"),\n    text: \"RESERVA CITA\"\n  }));\n}\n\n//# sourceURL=webpack://annavehi/./src/pages/Servicios.js?");

/***/ }),

/***/ "./src/pages/Sobremi.js":
/*!******************************!*\
  !*** ./src/pages/Sobremi.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sobremi)\n/* harmony export */ });\n/* harmony import */ var _images_Consulta_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../images/Consulta.png */ \"./src/images/Consulta.png\");\n/* harmony import */ var _images_Consulta_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_Consulta_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_LeadMagnet_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../images/LeadMagnet.png */ \"./src/images/LeadMagnet.png\");\n/* harmony import */ var _images_LeadMagnet_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_LeadMagnet_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Sobremi_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sobremi.css */ \"./src/pages/Sobremi.css\");\n/* harmony import */ var _Sobremi_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Sobremi_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Sobremi() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Sobremi\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    src: (_images_Consulta_png__WEBPACK_IMPORTED_MODULE_0___default()),\n    className: \"ImageTransversal\",\n    alt: \"Consulta\"\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"SobremiBase\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"SobremiFilofia\"\n  }, /*#__PURE__*/React.createElement(\"h\", {\n    className: \"TituloDorado\"\n  }, \"  \", /*#__PURE__*/React.createElement(\"a\", null, \" Filosof\\xEDa\"), \" \"), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"SobremiFilofiaFila\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"SobremiFilofiaTexto\"\n  }, /*#__PURE__*/React.createElement(\"a\", null, \"En nuestro centro de nutrici\\xF3n, abrazamos una filosof\\xEDa centrada en el bienestar integral, reconociendo que la alimentaci\\xF3n no solo es un acto f\\xEDsico, sino tambi\\xE9n un componente esencial para la salud mental y emocional. Creemos en la individualidad de cada persona y en la importancia de dise\\xF1ar programas nutricionales personalizados, adaptados a sus necesidades y metas espec\\xEDficas. Nuestra filosof\\xEDa se fundamenta en el poder transformador de una alimentaci\\xF3n equilibrada y sostenible, promoviendo h\\xE1bitos saludables que perduren a lo largo del tiempo. \"), /*#__PURE__*/React.createElement(\"a\", null, \"Valoramos la educaci\\xF3n nutricional como una herramienta fundamental para capacitar a nuestros clientes, permiti\\xE9ndoles tomar decisiones informadas sobre su salud. Fomentamos la conexi\\xF3n con los alimentos, inspirando el disfrute consciente de cada comida. En nuestro centro, abogamos por la prevenci\\xF3n de enfermedades a trav\\xE9s de la nutrici\\xF3n y trabajamos en colaboraci\\xF3n con nuestros clientes para superar desaf\\xEDos, establecer objetivos realistas y lograr un cambio positivo y duradero en sus vidas. Nuestra filosof\\xEDa se basa en el respeto por la diversidad alimentaria, la inclusi\\xF3n y el apoyo continuo, creando un ambiente que nutre no solo el cuerpo, sino tambi\\xE9n el esp\\xEDritu de quienes conf\\xEDan en nosotros para guiarlos hacia una salud \\xF3ptima.\")), /*#__PURE__*/React.createElement(\"img\", {\n    className: \"SobremiFilosfiaFoto\",\n    src: (_images_LeadMagnet_png__WEBPACK_IMPORTED_MODULE_1___default()),\n    alt: \"LeadMagnet\"\n  }))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"SobremiHistoria\"\n  }, /*#__PURE__*/React.createElement(\"h\", {\n    className: \"TituloDorado\"\n  }, \"  \", /*#__PURE__*/React.createElement(\"a\", null, \" Mi historia\"), \" \"), /*#__PURE__*/React.createElement(\"p\", null, \"Anna, una joven apasionada por la salud y el bienestar, decidi\\xF3 seguir su sue\\xF1o de convertirse en nutricionista desde una edad temprana. Despu\\xE9s de completar su licenciatura en Nutrici\\xF3n y Diet\\xE9tica, Anna se sumergi\\xF3 en un programa de internado diet\\xE9tico, donde adquiri\\xF3 experiencia pr\\xE1ctica en entornos cl\\xEDnicos y comunitarios. Durante este per\\xEDodo, se especializ\\xF3 en nutrici\\xF3n deportiva, fascinada por la conexi\\xF3n entre la alimentaci\\xF3n y el rendimiento f\\xEDsico.\"), /*#__PURE__*/React.createElement(\"p\", null, \"Despu\\xE9s de obtener su certificaci\\xF3n como Nutricionista Registrada, Anna comenz\\xF3 a trabajar en un hospital, brindando asesoramiento nutricional a pacientes con diversas condiciones de salud. Su enfoque compasivo y su habilidad para comunicar conceptos nutricionales complejos la destacaron entre sus colegas. A medida que su carrera progresaba, Anna decidi\\xF3 abrir su propia consulta privada, donde combina su experiencia cl\\xEDnica con un enfoque personalizado, ayudando a sus clientes a alcanzar sus metas de salud y bienestar a trav\\xE9s de una alimentaci\\xF3n equilibrada. La historia de Anna refleja su dedicaci\\xF3n a la profesi\\xF3n y su deseo continuo de impactar positivamente en la vida de los dem\\xE1s a trav\\xE9s de la nutrici\\xF3n. \")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"SobremiTrayectoria\"\n  }, /*#__PURE__*/React.createElement(\"h\", {\n    className: \"TituloDorado\"\n  }, \"  \", /*#__PURE__*/React.createElement(\"a\", null, \" Trayectoria profesional\"), \" \"), /*#__PURE__*/React.createElement(\"ul\", null, /*#__PURE__*/React.createElement(\"li\", null, \"Obtener un t\\xEDtulo universitario en nutrici\\xF3n, diet\\xE9tica, ciencias de los alimentos o un campo relacionado. Muchos nutricionistas tienen al menos una licenciatura en nutrici\\xF3n.\"), /*#__PURE__*/React.createElement(\"li\", null, \"Realizar pasant\\xEDas o pr\\xE1cticas cl\\xEDnicas supervisadas para obtener experiencia pr\\xE1ctica en entornos de atenci\\xF3n m\\xE9dica.\"), /*#__PURE__*/React.createElement(\"li\", null, \"En algunos lugares, obtener una licencia o certificaci\\xF3n es necesario para ejercer como nutricionista. Aseg\\xFArate de cumplir con los requisitos locales y obtener las licencias necesarias.\"), /*#__PURE__*/React.createElement(\"li\", null, \"Algunos nutricionistas eligen especializarse en \\xE1reas espec\\xEDficas como nutrici\\xF3n deportiva, nutrici\\xF3n cl\\xEDnica, nutrici\\xF3n pedi\\xE1trica o nutrici\\xF3n comunitaria. Obtener certificaciones adicionales puede ser beneficioso.\"), /*#__PURE__*/React.createElement(\"li\", null, \"Algunos nutricionistas optan por obtener una maestr\\xEDa para avanzar en sus conocimientos y habilidades. La educaci\\xF3n continua a trav\\xE9s de conferencias, seminarios y cursos tambi\\xE9n es fundamental para mantenerse actualizado en el campo.\"), /*#__PURE__*/React.createElement(\"li\", null, \"Desarrollar habilidades de comunicaci\\xF3n efectiva y empat\\xEDa para trabajar de manera efectiva con los clientes y colegas de la industria de la salud.\"), /*#__PURE__*/React.createElement(\"li\", null, \"Obtener la certificaci\\xF3n como Nutricionista Registrado (Registered Dietitian, RD) en algunos pa\\xEDses, como en los Estados Unidos. Esto a menudo implica completar un programa de internado diet\\xE9tico y aprobar un examen.\"), /*#__PURE__*/React.createElement(\"li\", null, \"Ganar experiencia pr\\xE1ctica trabajando en entornos de atenci\\xF3n m\\xE9dica, hospitales, cl\\xEDnicas, consultorios privados o instituciones de investigaci\\xF3n.\"), /*#__PURE__*/React.createElement(\"li\", null, \"Construir una red profesional participando en conferencias, eventos de la industria y conect\\xE1ndose con otros profesionales de la salud.\"), /*#__PURE__*/React.createElement(\"li\", null, \"Unirse a asociaciones profesionales, como la Academia de Nutrici\\xF3n y Diet\\xE9tica, para mantenerse conectado con la comunidad de nutricionistas y acceder a recursos actualizados.\"), /*#__PURE__*/React.createElement(\"li\", null, \"Participar en programas de educaci\\xF3n continua para estar al tanto de las \\xFAltimas investigaciones y avances en nutrici\\xF3n y diet\\xE9tica.\"), /*#__PURE__*/React.createElement(\"li\", null, \"Algunos nutricionistas optan por establecer sus propias pr\\xE1cticas privadas, ofreciendo servicios de asesoramiento nutricional a clientes individuales o grupos.\")))));\n}\n\n//# sourceURL=webpack://annavehi/./src/pages/Sobremi.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .AppClass {\\n|   display: flex;\\n|   flex-direction: column;\");\n\n//# sourceURL=webpack://annavehi/./src/App.css?");

/***/ }),

/***/ "./src/images/Consulta.png":
/*!*********************************!*\
  !*** ./src/images/Consulta.png ***!
  \*********************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://annavehi/./src/images/Consulta.png?");

/***/ }),

/***/ "./src/images/LeadMagnet.png":
/*!***********************************!*\
  !*** ./src/images/LeadMagnet.png ***!
  \***********************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://annavehi/./src/images/LeadMagnet.png?");

/***/ }),

/***/ "./src/images/Logo.svg":
/*!*****************************!*\
  !*** ./src/images/Logo.svg ***!
  \*****************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\" standalone=\\\"no\\\"?>\\n| <!DOCTYPE svg PUBLIC \\\"-//W3C//DTD SVG 1.1//EN\\\" \\\"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\\\">\\n| <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" version=\\\"1.1\\\" viewBox=\\\"0.00 0.00 1800.00 768.00\\\">\");\n\n//# sourceURL=webpack://annavehi/./src/images/Logo.svg?");

/***/ }),

/***/ "./src/pages/Sobremi.css":
/*!*******************************!*\
  !*** ./src/pages/Sobremi.css ***!
  \*******************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .SobremiBase{\\n|     display:flex;\\n|     flex-direction: column;\");\n\n//# sourceURL=webpack://annavehi/./src/pages/Sobremi.css?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-calendly":
/*!*********************************!*\
  !*** external "react-calendly" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-calendly");

/***/ }),

/***/ "react-cookie-consent":
/*!***************************************!*\
  !*** external "react-cookie-consent" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie-consent");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-floating-whatsapp":
/*!******************************************!*\
  !*** external "react-floating-whatsapp" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-floating-whatsapp");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;