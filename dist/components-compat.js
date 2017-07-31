;(function() {
"use strict";

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // identity function for calling harmony imports with the correct context
  /******/__webpack_require__.i = function (value) {
    return value;
  };
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 5);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__lib_templating__ = __webpack_require__(8);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__lib_matchesSelector__ = __webpack_require__(1);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__ = __webpack_require__(7);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__ = __webpack_require__(6);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
    return __WEBPACK_IMPORTED_MODULE_0__lib_templating__["a"];
  });
  /* unused harmony reexport matchesSelector */
  /* unused harmony reexport querySelectorSlot */
  /* unused harmony reexport createEvent */
  /**
   * Created by ThatJoeMoore on 2/14/17
   */

  /***/
},
/* 1 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = matchesSelector;
  /*
   *  @license
   *    Copyright 2017 Brigham Young University
   *
   *    Licensed under the Apache License, Version 2.0 (the "License");
   *    you may not use this file except in compliance with the License.
   *    You may obtain a copy of the License at
   *
   *        http://www.apache.org/licenses/LICENSE-2.0
   *
   *    Unless required by applicable law or agreed to in writing, software
   *    distributed under the License is distributed on an "AS IS" BASIS,
   *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   *    See the License for the specific language governing permissions and
   *    limitations under the License.
   */

  function matchesSelector(el, selector) {
    var proto = Element.prototype;
    var actual = proto.matches || proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector || function (s) {
      var doc = this.document || this.ownerDocument;
      return doc.querySelectorAll(s).indexOf(this) !== -1;
    };

    return actual.call(el, selector);
  }

  /***/
},
/* 2 */
/***/function (module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function () {
    var list = [];

    // return the list of modules as css string
    list.toString = function toString() {
      var result = [];
      for (var i = 0; i < this.length; i++) {
        var item = this[i];
        if (item[2]) {
          result.push("@media " + item[2] + "{" + item[1] + "}");
        } else {
          result.push(item[1]);
        }
      }
      return result.join("");
    };

    // import a list of modules into the list
    list.i = function (modules, mediaQuery) {
      if (typeof modules === "string") modules = [[null, modules, ""]];
      var alreadyImportedModules = {};
      for (var i = 0; i < this.length; i++) {
        var id = this[i][0];
        if (typeof id === "number") alreadyImportedModules[id] = true;
      }
      for (i = 0; i < modules.length; i++) {
        var item = modules[i];
        // skip already imported module
        // this implementation is not 100% perfect for weird media query combinations
        //  when a module is imported multiple times with different media queries.
        //  I hope this will never occur (Hey this way we have smaller bundles)
        if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
          if (mediaQuery && !item[2]) {
            item[2] = mediaQuery;
          } else if (mediaQuery) {
            item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
          }
          list.push(item);
        }
      }
    };
    return list;
  };

  /***/
},
/* 3 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__byu_faculty_listing_html__ = __webpack_require__(12);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_faculty_listing_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_faculty_listing_html__);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);
  /**
   *  @license
   *    Copyright 2017 Brigham Young University
   *
   *    Licensed under the Apache License, Version 2.0 (the "License");
   *    you may not use this file except in compliance with the License.
   *    You may obtain a copy of the License at
   *
   *        http://www.apache.org/licenses/LICENSE-2.0
   *
   *    Unless required by applicable law or agreed to in writing, software
   *    distributed under the License is distributed on an "AS IS" BASIS,
   *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   *    See the License for the specific language governing permissions and
   *    limitations under the License.
   **/

  var ATTR_API_KEY = 'api-key';
  var ATTR_NAME = 'name';
  var ATTR_TITLE = 'title';
  var ATTR_OFFICE = 'office';
  var ATTR_PHONE = 'phone';
  var ATTR_EMAIL = 'email';
  var ATTR_OFFICE_HOURS = 'office_hours';
  var ATTR_RESEARCH = 'research';
  var ATTR_BIOGRAPHY = 'biography';

  var DEFAULT_apiKey = 1;
  var DEFAULT_INFORMATION = "Unknown";

  var ByuFacultyListing = function (_HTMLElement) {
    _inherits(ByuFacultyListing, _HTMLElement);

    function ByuFacultyListing() {
      _classCallCheck(this, ByuFacultyListing);

      var _this = _possibleConstructorReturn(this, (ByuFacultyListing.__proto__ || Object.getPrototypeOf(ByuFacultyListing)).call(this));

      _this.attachShadow({ mode: 'open' });
      return _this;
    }

    _createClass(ByuFacultyListing, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        //This will stamp our template for us, then let us perform actions on the stamped DOM.
        __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-faculty-listing', __WEBPACK_IMPORTED_MODULE_0__byu_faculty_listing_html___default.a, function () {
          setupButtonListeners(_this2);
          applyApiKey(_this2);

          setupSlotListeners(_this2);
        });
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        teardownButtonListeners(this);
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        switch (attr) {
          case ATTR_NAME:
          case ATTR_TITLE:
          case ATTR_OFFICE:
          case ATTR_PHONE:
          case ATTR_EMAIL:
          case ATTR_OFFICE_HOURS:
          case ATTR_RESEARCH:
          case ATTR_BIOGRAPHY:
          case ATTR_API_KEY:
            applyApiKey(this);
            break;
        }
      }
    }, {
      key: 'apiKey',
      set: function set(value) {
        this.setAttribute(ATTR_API_KEY, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_API_KEY)) {
          return this.getAttribute(ATTR_API_KEY);
        }
        return DEFAULT_apiKey;
      }
    }, {
      key: 'name',
      set: function set(value) {
        this.setAttribute(ATTR_NAME, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_NAME)) {
          return this.getAttribute(ATTR_NAME);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'title',
      set: function set(value) {
        this.setAttribute(ATTR_TITLE, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_TITLE)) {
          return this.getAttribute(ATTR_TITLE);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'office',
      set: function set(value) {
        this.setAttribute(ATTR_OFFICE, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_OFFICE)) {
          return this.getAttribute(ATTR_OFFICE);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'phone',
      set: function set(value) {
        this.setAttribute(ATTR_PHONE, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_PHONE)) {
          return this.getAttribute(ATTR_PHONE);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'email',
      set: function set(value) {
        this.setAttribute(ATTR_EMAIL, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_EMAIL)) {
          return this.getAttribute(ATTR_EMAIL);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'office_hours',
      set: function set(value) {
        this.setAttribute(ATTR_OFFICE_HOURS, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_OFFICE_HOURS)) {
          return this.getAttribute(ATTR_OFFICE_HOURS);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'research',
      set: function set(value) {
        this.setAttribute(ATTR_RESEARCH, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_RESEARCH)) {
          return this.getAttribute(ATTR_RESEARCH);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'biography',
      set: function set(value) {
        this.setAttribute(ATTR_BIOGRAPHY, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_BIOGRAPHY)) {
          return this.getAttribute(ATTR_BIOGRAPHY);
        }
        return DEFAULT_INFORMATION;
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return [ATTR_API_KEY, ATTR_NAME, ATTR_TITLE, ATTR_OFFICE, ATTR_PHONE, ATTR_EMAIL, ATTR_OFFICE_HOURS, ATTR_RESEARCH, ATTR_BIOGRAPHY];
      }
    }]);

    return ByuFacultyListing;
  }(HTMLElement);

  window.customElements.define('byu-faculty-listing', ByuFacultyListing);
  window.ByuFacultyListing = ByuFacultyListing;

  // -------------------- Helper Functions --------------------

  function applyApiKey(component) {
    // let output = component.shadowRoot.querySelector('.output');

    // let count = component.apiKey;

    // //Remove all current children
    // while(output.firstChild) {
    //   output.removeChild(output.firstChild);
    // }

    // if (count === 0) return;

    // let slot = component.shadowRoot.querySelector('#apiKey-template');

    // let template = util.querySelectorSlot(slot, 'template');

    // if (!template) {
    //   throw new Error('No template was specified!');
    // }

    // for (let i = 0; i < count; i++) {
    //   let element = document.importNode(template.content, true);
    //   output.appendChild(element);
    // }
    var apiKey = component.apiKey;
    console.log(apiKey);
    console.log(component.apiKey);
    if (apiKey && apiKey != '') {
      // var xhr = new XMLHttpRequest();
      // xhr.onreadystatechange = function () {
      //   if (xhr.readyState == XMLHttpRequest.DONE) {
      //     if (xhr.status == 200) {
      //       console.log(xhr.responseText);
      //     }
      //     else if (xhr.status == 400) {
      //       alert('Bad Request');
      //     }
      //     else {
      //       alert('unspecified error');
      //       console.log(xhr);
      //     }
      //   }
      // };
      // xhr.open("GET", "https://ws.byu.edu/services/facultyProfile/faculty?applicationKey=" + apiKey, true);
      // xhr.send();

      jsonp('https://ws.byu.edu/services/facultyProfile/faculty?applicationKey=' + apiKey, function (data) {
        console.log(data);
      });
    }
  }

  function jsonp(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[callbackName] = function (data) {
      delete window[callbackName];
      document.body.removeChild(script);
      callback(data);
    };

    var script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
  }

  jsonp('http://www.helloword.com', function (data) {
    alert(data);
  });

  function setupButtonListeners(component) {}
  // let button = component.shadowRoot.querySelector('.apiKey-button');

  // let callback = component.__buttonListener = function(event) {
  //   component.apiKey = component.apiKey + 1;
  // };

  // button.addEventListener('click', callback, false);


  //We generally want to be good neighbors and clean up after ourselves when we're done with things.
  function teardownButtonListeners(component) {
    // let button = component.shadowRoot.querySelector('.apiKey-button');

    // button.removeEventListener('click', component.__buttonListener, false);
  }

  function setupSlotListeners(component) {}
  // let slot = component.shadowRoot.querySelector('#apiKey-template');

  // //this will listen to changes to the contents of our <slot>, so we can take appropriate action
  // slot.addEventListener('slotchange', () => {
  //   applyApiKey(component);
  // }, false);


  /***/
},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__byu_faculty_profile_html__ = __webpack_require__(13);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_faculty_profile_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_faculty_profile_html__);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);
  /**
   *  @license
   *    Copyright 2017 Brigham Young University
   *
   *    Licensed under the Apache License, Version 2.0 (the "License");
   *    you may not use this file except in compliance with the License.
   *    You may obtain a copy of the License at
   *
   *        http://www.apache.org/licenses/LICENSE-2.0
   *
   *    Unless required by applicable law or agreed to in writing, software
   *    distributed under the License is distributed on an "AS IS" BASIS,
   *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   *    See the License for the specific language governing permissions and
   *    limitations under the License.
   **/

  var ATTR_API_KEY = 'api-key';
  var ATTR_NAME = 'name';
  var ATTR_TITLE = 'title';
  var ATTR_OFFICE = 'office';
  var ATTR_PHONE = 'phone';
  var ATTR_EMAIL = 'email';
  var ATTR_OFFICE_HOURS = 'office_hours';
  var ATTR_RESEARCH = 'research';
  var ATTR_BIOGRAPHY = 'biography';

  var DEFAULT_apiKey = 1;
  var DEFAULT_INFORMATION = "Unknown";

  var ByuFacultyProfile = function (_HTMLElement2) {
    _inherits(ByuFacultyProfile, _HTMLElement2);

    function ByuFacultyProfile() {
      _classCallCheck(this, ByuFacultyProfile);

      var _this3 = _possibleConstructorReturn(this, (ByuFacultyProfile.__proto__ || Object.getPrototypeOf(ByuFacultyProfile)).call(this));

      _this3.attachShadow({ mode: 'open' });
      return _this3;
    }

    _createClass(ByuFacultyProfile, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this4 = this;

        //This will stamp our template for us, then let us perform actions on the stamped DOM.
        __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-faculty-profile', __WEBPACK_IMPORTED_MODULE_0__byu_faculty_profile_html___default.a, function () {
          setupButtonListeners(_this4);
          applyApiKey(_this4);

          setupSlotListeners(_this4);
        });
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        teardownButtonListeners(this);
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        switch (attr) {
          case ATTR_NAME:
          case ATTR_TITLE:
          case ATTR_OFFICE:
          case ATTR_PHONE:
          case ATTR_EMAIL:
          case ATTR_OFFICE_HOURS:
          case ATTR_RESEARCH:
          case ATTR_BIOGRAPHY:
          case ATTR_API_KEY:
            applyApiKey(this);
            break;
        }
      }
    }, {
      key: 'apiKey',
      set: function set(value) {
        this.setAttribute(ATTR_API_KEY, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_API_KEY)) {
          return this.getAttribute(ATTR_API_KEY);
        }
        return DEFAULT_apiKey;
      }
    }, {
      key: 'name',
      set: function set(value) {
        this.setAttribute(ATTR_NAME, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_NAME)) {
          return this.getAttribute(ATTR_NAME);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'title',
      set: function set(value) {
        this.setAttribute(ATTR_TITLE, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_TITLE)) {
          return this.getAttribute(ATTR_TITLE);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'office',
      set: function set(value) {
        this.setAttribute(ATTR_OFFICE, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_OFFICE)) {
          return this.getAttribute(ATTR_OFFICE);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'phone',
      set: function set(value) {
        this.setAttribute(ATTR_PHONE, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_PHONE)) {
          return this.getAttribute(ATTR_PHONE);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'email',
      set: function set(value) {
        this.setAttribute(ATTR_EMAIL, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_EMAIL)) {
          return this.getAttribute(ATTR_EMAIL);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'office_hours',
      set: function set(value) {
        this.setAttribute(ATTR_OFFICE_HOURS, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_OFFICE_HOURS)) {
          return this.getAttribute(ATTR_OFFICE_HOURS);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'research',
      set: function set(value) {
        this.setAttribute(ATTR_RESEARCH, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_RESEARCH)) {
          return this.getAttribute(ATTR_RESEARCH);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'biography',
      set: function set(value) {
        this.setAttribute(ATTR_BIOGRAPHY, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_BIOGRAPHY)) {
          return this.getAttribute(ATTR_BIOGRAPHY);
        }
        return DEFAULT_INFORMATION;
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return [ATTR_API_KEY, ATTR_NAME, ATTR_TITLE, ATTR_OFFICE, ATTR_PHONE, ATTR_EMAIL, ATTR_OFFICE_HOURS, ATTR_RESEARCH, ATTR_BIOGRAPHY];
      }
    }]);

    return ByuFacultyProfile;
  }(HTMLElement);

  window.customElements.define('byu-faculty-profile', ByuFacultyProfile);
  window.ByuFacultyProfile = ByuFacultyProfile;

  // -------------------- Helper Functions --------------------

  function applyApiKey(component) {
    // let output = component.shadowRoot.querySelector('.output');

    // let count = component.apiKey;

    // //Remove all current children
    // while(output.firstChild) {
    //   output.removeChild(output.firstChild);
    // }

    // if (count === 0) return;

    // let slot = component.shadowRoot.querySelector('#apiKey-template');

    // let template = util.querySelectorSlot(slot, 'template');

    // if (!template) {
    //   throw new Error('No template was specified!');
    // }

    // for (let i = 0; i < count; i++) {
    //   let element = document.importNode(template.content, true);
    //   output.appendChild(element);
    // }
    var apiKey = component.apiKey;
    console.log(apiKey);
    console.log(component.apiKey);
    if (apiKey && apiKey != '') {
      // var xhr = new XMLHttpRequest();
      // xhr.onreadystatechange = function () {
      //   if (xhr.readyState == XMLHttpRequest.DONE) {
      //     if (xhr.status == 200) {
      //       console.log(xhr.responseText);
      //     }
      //     else if (xhr.status == 400) {
      //       alert('Bad Request');
      //     }
      //     else {
      //       alert('unspecified error');
      //       console.log(xhr);
      //     }
      //   }
      // };
      // xhr.open("GET", "https://ws.byu.edu/services/facultyProfile/faculty?applicationKey=" + apiKey, true);
      // xhr.send();

      jsonp('https://ws.byu.edu/services/facultyProfile/faculty?applicationKey=' + apiKey, function (data) {
        console.log(data);
      });
    }
  }

  function jsonp(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[callbackName] = function (data) {
      delete window[callbackName];
      document.body.removeChild(script);
      callback(data);
    };

    var script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
  }

  jsonp('http://www.helloword.com', function (data) {
    alert(data);
  });

  function setupButtonListeners(component) {}
  // let button = component.shadowRoot.querySelector('.apiKey-button');

  // let callback = component.__buttonListener = function(event) {
  //   component.apiKey = component.apiKey + 1;
  // };

  // button.addEventListener('click', callback, false);


  //We generally want to be good neighbors and clean up after ourselves when we're done with things.
  function teardownButtonListeners(component) {
    // let button = component.shadowRoot.querySelector('.apiKey-button');

    // button.removeEventListener('click', component.__buttonListener, false);
  }

  function setupSlotListeners(component) {}
  // let slot = component.shadowRoot.querySelector('#apiKey-template');

  // //this will listen to changes to the contents of our <slot>, so we can take appropriate action
  // slot.addEventListener('slotchange', () => {
  //   applyApiKey(component);
  // }, false);


  /***/
},
/* 5 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_faculty_listing_byu_faculty_listing_js__ = __webpack_require__(3);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__byu_faculty_profile_byu_faculty_profile_js__ = __webpack_require__(4);
  /**
   *  @license
   *    Copyright 2017 Brigham Young University
   *
   *    Licensed under the Apache License, Version 2.0 (the "License");
   *    you may not use this file except in compliance with the License.
   *    You may obtain a copy of the License at
   *
   *        http://www.apache.org/licenses/LICENSE-2.0
   *
   *    Unless required by applicable law or agreed to in writing, software
   *    distributed under the License is distributed on an "AS IS" BASIS,
   *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   *    See the License for the specific language governing permissions and
   *    limitations under the License.
   **/

  /***/
},
/* 6 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* unused harmony export default */
  /*
   *  @license
   *    Copyright 2017 Brigham Young University
   *
   *    Licensed under the Apache License, Version 2.0 (the "License");
   *    you may not use this file except in compliance with the License.
   *    You may obtain a copy of the License at
   *
   *        http://www.apache.org/licenses/LICENSE-2.0
   *
   *    Unless required by applicable law or agreed to in writing, software
   *    distributed under the License is distributed on an "AS IS" BASIS,
   *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   *    See the License for the specific language governing permissions and
   *    limitations under the License.
   */

  function createEvent(name, detail) {
    if (typeof window.CustomEvent === 'function') {
      return new CustomEvent(name, { detail: detail, cancelable: true, bubbles: true });
    }
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, true, true, detail);
    return evt;
  }

  /***/
},
/* 7 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* unused harmony export default */
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__ = __webpack_require__(1);
  /*
   *  @license
   *    Copyright 2017 Brigham Young University
   *
   *    Licensed under the Apache License, Version 2.0 (the "License");
   *    you may not use this file except in compliance with the License.
   *    You may obtain a copy of the License at
   *
   *        http://www.apache.org/licenses/LICENSE-2.0
   *
   *    Unless required by applicable law or agreed to in writing, software
   *    distributed under the License is distributed on an "AS IS" BASIS,
   *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   *    See the License for the specific language governing permissions and
   *    limitations under the License.
   */

  function querySelectorSlot(slot, selector) {
    var roots = slot.assignedNodes({ flatten: true }).filter(function (n) {
      return n.nodeType === Node.ELEMENT_NODE;
    });

    for (var i = 0, len = roots.length; i < len; i++) {
      var each = roots[i];
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__["a" /* default */])(each, selector)) {
        return each;
      }
      var child = each.querySelector(selector);
      if (child) {
        return child;
      }
    }
    return null;
  }

  /***/
},
/* 8 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = applyTemplate;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_hash_sum__ = __webpack_require__(11);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_hash_sum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hash_sum__);
  /*
   *  @license
   *    Copyright 2017 Brigham Young University
   *
   *    Licensed under the Apache License, Version 2.0 (the "License");
   *    you may not use this file except in compliance with the License.
   *    You may obtain a copy of the License at
   *
   *        http://www.apache.org/licenses/LICENSE-2.0
   *
   *    Unless required by applicable law or agreed to in writing, software
   *    distributed under the License is distributed on an "AS IS" BASIS,
   *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   *    See the License for the specific language governing permissions and
   *    limitations under the License.
   */

  var TEMPLATE_RENDERED_CLASS = 'byu-component-rendered';

  function applyTemplate(element, elementName, template, callback) {
    var sum = __WEBPACK_IMPORTED_MODULE_0_hash_sum___default()(template);

    var elSettings = element.__byu_webCommunity_components = element.__byu_webCommunity_components || {};
    if (elSettings.templateHash === sum) {
      //Nothing has changed in the element.  Don't replace the DOM, don't fire the callback.
      return;
    }
    elSettings.templateHash = sum;

    if (window.ShadyCSS && !window.ShadyCSS.nativeShadow) {
      applyTemplateShady(element, elementName, template, callback, sum);
    } else {
      applyTemplateNative(element, template, callback);
    }
  }

  function applyTemplateShady(element, elementName, template, callback, sum) {
    var templateId = '__byu-custom-element-template_' + elementName + '_' + sum;
    var templateElement = document.head.querySelector('template#' + templateId);
    if (!templateElement) {
      templateElement = document.createElement('template');
      templateElement.id = templateId;
      templateElement.innerHTML = template;
      document.head.appendChild(templateElement);
      ShadyCSS.prepareTemplate(templateElement, elementName);
    }
    if (ShadyCSS.styleElement) {
      ShadyCSS.styleElement(element);
    } else if (ShadyCSS.applyStyle) {
      ShadyCSS.applyStyle(element);
    } else {
      throw new Error('ShadyCSS is not properly defined: no styleElement or applyStyle!');
    }
    var imported = document.importNode(templateElement.content, true);
    var shadow = element.shadowRoot;
    //It'd be nice if we could just diff the DOM and replace what changed between templates, but that might lead to
    // event listeners getting applied twice.  Easier to just clear out the shadow DOM and replace it.
    while (shadow.firstChild) {
      shadow.removeChild(shadow.firstChild);
    }
    shadow.appendChild(imported);
    setTimeout(function () {
      runAfterStamping(element, callback);
    });
  }

  function applyTemplateNative(element, template, callback) {
    element.shadowRoot.innerHTML = template;
    runAfterStamping(element, callback);
  }

  function runAfterStamping(element, callback) {
    element.classList.add(TEMPLATE_RENDERED_CLASS);
    if (callback) {
      callback();
    }
  }

  /***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.i, "/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */\n/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */", ""]);

  // exports


  /***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.i, "/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */\n/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */", ""]);

  // exports


  /***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  function pad(hash, len) {
    while (hash.length < len) {
      hash = '0' + hash;
    }
    return hash;
  }

  function fold(hash, text) {
    var i;
    var chr;
    var len;
    if (text.length === 0) {
      return hash;
    }
    for (i = 0, len = text.length; i < len; i++) {
      chr = text.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return hash < 0 ? hash * -2 : hash;
  }

  function foldObject(hash, o, seen) {
    return Object.keys(o).sort().reduce(foldKey, hash);
    function foldKey(hash, key) {
      return foldValue(hash, o[key], key, seen);
    }
  }

  function foldValue(input, value, key, seen) {
    var hash = fold(fold(fold(input, key), toString(value)), typeof value === 'undefined' ? 'undefined' : _typeof(value));
    if (value === null) {
      return fold(hash, 'null');
    }
    if (value === undefined) {
      return fold(hash, 'undefined');
    }
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      if (seen.indexOf(value) !== -1) {
        return fold(hash, '[Circular]' + key);
      }
      seen.push(value);
      return foldObject(hash, value, seen);
    }
    return fold(hash, value.toString());
  }

  function toString(o) {
    return Object.prototype.toString.call(o);
  }

  function sum(o) {
    return pad(foldValue(0, o, '', []).toString(16), 8);
  }

  module.exports = sum;

  /***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

  module.exports = "<style>" + __webpack_require__(9) + "</style> <div class=\"root\"> This is where the profiles will go. </div>";

  /***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

  module.exports = "<style>" + __webpack_require__(10) + "</style> <div class=\"root\"> This is where the profiles will go. </div>";

  /***/
}]
/******/);
}());

//# sourceMappingURL=components-compat.js.map
