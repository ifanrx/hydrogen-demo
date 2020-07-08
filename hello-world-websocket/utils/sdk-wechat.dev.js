(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BaaS"] = factory();
	else
		root["BaaS"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/wechat/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../core/BaseQuery.js":
/*!****************************!*\
  !*** ../core/BaseQuery.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HError = __webpack_require__(/*! ./HError */ "../core/HError.js");

var Query = __webpack_require__(/*! ./Query */ "../core/Query.js");

var utils = __webpack_require__(/*! ./utils */ "../core/utils/index.js");

var constants = __webpack_require__(/*! ./constants */ "../core/constants.js");
/**
 * @memberof BaaS
 * @package
 */


var BaseQuery =
/*#__PURE__*/
function () {
  function BaseQuery() {
    _classCallCheck(this, BaseQuery);

    this._initQueryParams();
  }

  _createClass(BaseQuery, [{
    key: "_initQueryParams",
    value: function _initQueryParams() {
      this._queryObject = {};
      this._limit = null;
      this._offset = 0;
      this._orderBy = null;
      this._keys = null;
      this._expand = null;
    }
    /**
     * 设置查询条件
     * 
     * @param {BaaS.Query} Query 对象
     * @return {this}
     */

  }, {
    key: "setQuery",
    value: function setQuery(queryObject) {
      if (queryObject instanceof Query) {
        this._queryObject = utils.cloneDeep(queryObject.queryObject);
      } else {
        throw new HError(605);
      }

      return this;
    }
    /**
     * 选择只返回指定字段
     * 
     * @param {string[]|string} key 字段名称
     * @return {this}
     */

  }, {
    key: "select",
    value: function select(args) {
      if (args instanceof Array) {
        this._keys = args.join(',');
      } else {
        this._keys = args;
      }

      return this;
    }
    /**
     * 指定需要展开的 pointer 类型字段
     * 
     * @param {string[]|string} key 字段名称
     * @return {this}
     */

  }, {
    key: "expand",
    value: function expand(args) {
      if (args instanceof Array) {
        this._expand = args.join(',');
      } else {
        this._expand = args;
      }

      return this;
    }
    /**
     * 指定最多返回数量
     * 
     * @param {number} count 数量
     * @return {this}
     */

  }, {
    key: "limit",
    value: function limit(value) {
      if (!Number.isInteger(value)) {
        throw new HError(605);
      }

      this._limit = value;
      return this;
    }
    /**
     * 设置列表偏移量
     * 
     * @param {number} count 偏移量
     * @return {this}
     */

  }, {
    key: "offset",
    value: function offset(value) {
      if (!Number.isInteger(value)) {
        throw new HError(605);
      }

      this._offset = value;
      return this;
    }
    /**
     * 设置排序依据
     * 
     * @param {string[]|string} key 字段名称
     * @return {this}
     */

  }, {
    key: "orderBy",
    value: function orderBy(args) {
      if (args instanceof Array) {
        this._orderBy = args.join(',');
      } else {
        this._orderBy = args;
      }

      return this;
    }
  }, {
    key: "_handleAllQueryConditions",
    value: function _handleAllQueryConditions() {
      var conditions = {};
      conditions.limit = this._limit === null ? constants.QUERY_LIMITATION_DEFAULT : this._limit;
      conditions.offset = this._offset;

      if (this._orderBy) {
        conditions.order_by = this._orderBy;
      }

      if (this._keys) {
        conditions.keys = this._keys;
      }

      if (this._expand) {
        conditions.expand = this._expand;
      }

      conditions.where = JSON.stringify(this._queryObject);
      return conditions;
    }
  }]);

  return BaseQuery;
}();

module.exports = BaseQuery;

/***/ }),

/***/ "../core/BaseRecord.js":
/*!*****************************!*\
  !*** ../core/BaseRecord.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HError = __webpack_require__(/*! ./HError */ "../core/HError.js");

function _serializeValueFuncFactory() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['BaseRecord'];

  var GeoPoint = __webpack_require__(/*! ./GeoPoint */ "../core/GeoPoint.js");

  var GeoPolygon = __webpack_require__(/*! ./GeoPolygon */ "../core/GeoPolygon.js");

  return function (value) {
    if (config.includes('Geo') && (value instanceof GeoPoint || value instanceof GeoPolygon)) {
      return value.toGeoJSON();
    }

    if (config.includes('BaseRecord') && value instanceof BaseRecord) {
      return value._recordID == null ? '' : value._recordID.toString();
    } else {
      return value;
    }
  };
}
/**
 * @memberof BaaS
 * @package
 */


var BaseRecord =
/*#__PURE__*/
function () {
  function BaseRecord(recordID) {
    _classCallCheck(this, BaseRecord);

    this._recordID = recordID;

    this._recordValueInit();
  }

  _createClass(BaseRecord, [{
    key: "_recordValueInit",
    value: function _recordValueInit() {
      this._record = {
        $set: {},
        $unset: {}
      };
    }
    /**
     * 给字段赋值
     * @method
     * @param {string} key 字段名称
     * @param {string} value 值
     * @return {this}
     */

    /**
    * 批量给字段赋值
    * @method
    * @param {Object<string, any>} particialRecord 由字段名称与值组成的键值对对象
    * @return {this}
    */

  }, {
    key: "set",
    value: function set() {
      var _this = this;

      var serializeValue = _serializeValueFuncFactory(['BaseRecord', 'Geo']);

      var serializeArrayValue = _serializeValueFuncFactory(['Geo']);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length === 1) {
        if (_typeof(args[0]) === 'object') {
          var objectArg = args[0];
          var recordToSet = {};
          Object.keys(args[0]).forEach(function (key) {
            if (_this._record.$unset.hasOwnProperty(key)) {
              throw new HError(605);
            }

            var value = objectArg[key];

            if (Array.isArray(value)) {
              recordToSet[key] = value.map(function (item) {
                return serializeArrayValue(item);
              });
            } else {
              recordToSet[key] = serializeValue(value);
            }
          });
          this._record.$set = recordToSet;
        } else {
          throw new HError(605);
        }
      } else if (args.length === 2) {
        if (this._record.$unset.hasOwnProperty(args[0])) {
          throw new HError(605);
        }

        var value = args[1];

        if (Array.isArray(value)) {
          this._record.$set[args[0]] = value.map(function (item) {
            return serializeArrayValue(item);
          });
        } else {
          this._record.$set[args[0]] = serializeValue(value);
        }
      } else {
        throw new HError(605);
      }

      return this;
    }
    /**
     * 移除字段
     * @method
     * @param {string} key 字段名称
     * @return {this}
     */

    /**
    * 批量移除字段
    * @method
    * @param {Object<string, any>} particialRecord 由字段名称与值组成的键值对对象，
    *                              接口会忽略 Object 里所有的 value，参照所有的 key 来执行移除操作。
    * @return {this}
    */

  }, {
    key: "unset",
    value: function unset() {
      var _this2 = this;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (_typeof(args[0]) === 'object') {
        var recordToUnset = {};
        Object.keys(args[0]).forEach(function (key) {
          if (_this2._record.$set.hasOwnProperty(key)) {
            throw new HError(605);
          }

          recordToUnset[key] = '';
        });
        this._record.$unset = recordToUnset;
      } else if (typeof args[0] === 'string') {
        if (this._record.$set.hasOwnProperty(args[0])) {
          throw new HError(605);
        }

        this._record.$unset[args[0]] = '';
      } else {
        throw new HError(605);
      }

      return this;
    }
    /**
     * 自增（原子操作）。
     * @method
     * @param {string} key 字段名称
     * @param {number} value 值
     * @return {this}
     */

  }, {
    key: "incrementBy",
    value: function incrementBy(key, value) {
      this._record.$set[key] = {
        $incr_by: value
      };
      return this;
    }
    /**
     * 数组添加元素。
     * @method
     * @param {string} key 字段名称
     * @param {string} value 值
     * @return {this}
     */

  }, {
    key: "append",
    value: function append(key, value) {
      var serializeArrayValue = _serializeValueFuncFactory(['Geo']);

      if (!(value instanceof Array)) {
        value = [value];
      }

      value = value.map(function (item) {
        return serializeArrayValue(item);
      });
      this._record.$set[key] = {
        $append: value
      };
      return this;
    }
    /**
     * 数组添加元素（原子操作）。
     * @method
     * @param {string} key 字段名称
     * @param {string[]|string} value 值
     * @return {this}
     */

  }, {
    key: "uAppend",
    value: function uAppend(key, value) {
      var serializeArrayValue = _serializeValueFuncFactory(['Geo']);

      if (!(value instanceof Array)) {
        value = [value];
      }

      value = value.map(function (item) {
        return serializeArrayValue(item);
      });
      this._record.$set[key] = {
        $append_unique: value
      };
      return this;
    }
    /**
     * 数组移除元素。
     * @method
     * @param {string} key 字段名称
     * @param {string} value 值
     * @return {this}
     */

  }, {
    key: "remove",
    value: function remove(key, value) {
      var serializeArrayValue = _serializeValueFuncFactory(['Geo']);

      if (!(value instanceof Array)) {
        value = [value];
      }

      value = value.map(function (item) {
        return serializeArrayValue(item);
      });
      this._record.$set[key] = {
        $remove: value
      };
      return this;
    }
    /**
     * Object 类型字段修改。
     * @method
     * @param {string} key 字段名称
     * @param {object} value 值
     * @return {this}
     */

  }, {
    key: "patchObject",
    value: function patchObject(key, value) {
      if (Object.prototype.toString.call(value) !== '[object Object]') {
        throw new HError(605);
      }

      this._record.$set[key] = {
        $update: value
      };
      return this;
    }
  }]);

  return BaseRecord;
}();

BaseRecord._serializeValueFuncFactory = _serializeValueFuncFactory;
module.exports = BaseRecord;

/***/ }),

/***/ "../core/ContentGroup.js":
/*!*******************************!*\
  !*** ../core/ContentGroup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

var BaseQuery = __webpack_require__(/*! ./BaseQuery */ "../core/BaseQuery.js");

var Query = __webpack_require__(/*! ./Query */ "../core/Query.js");
/**
 * 内容库
 * @memberof BaaS
 * @extends BaaS.BaseQuery
 * @public
 */


var ContentGroup =
/*#__PURE__*/
function (_BaseQuery) {
  _inherits(ContentGroup, _BaseQuery);

  /**
   * @param {string} contentGroupID 内容库 ID
   */
  function ContentGroup(contentGroupID) {
    var _this;

    _classCallCheck(this, ContentGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContentGroup).call(this));
    _this._contentGroupID = contentGroupID;
    return _this;
  }
  /**
   * 获取内容库详情。
   * @param {string} id 内容库 ID
   * @return {Promise<BaaS.Response<any>>}
   */


  _createClass(ContentGroup, [{
    key: "getContent",

    /**
     * 获取内容。
     * @method
     * @param {string} richTextID 内容 ID
     * @return {Promise<BaaS.Response<any>>}
     */
    value: function getContent(richTextID) {
      var params = {
        richTextID: richTextID
      };

      if (this._expand) {
        params.expand = this._expand;
      }

      if (this._keys) {
        params.keys = this._keys;
      }

      this._initQueryParams();

      return BaaS.getContent(params);
    }
    /**
     * 查找内容。
     * @method
     * @param {BaaS.FindOptions} [options] 参数
     * @return {Promise<BaaS.Response<any>>}
     */

  }, {
    key: "find",
    value: function find() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$withCount = _ref.withCount,
          withCount = _ref$withCount === void 0 ? false : _ref$withCount;

      var condition = this._handleAllQueryConditions();

      condition.contentGroupID = this._contentGroupID;

      this._initQueryParams();

      return BaaS.getContentListV2(_extends({}, condition, {
        return_total_count: withCount ? 1 : 0
      }));
    }
    /**
     * 获取内容数量。
     * @method
     * @since v3.0.0
     * @return {Promise<number>}
     */

  }, {
    key: "count",
    value: function count() {
      return this.limit(1).find({
        withCount: true
      }).then(function (res) {
        var total_count = res.data.meta.total_count;
        return total_count;
      });
    }
    /**
     * 获取内容分类列表。
     * @method
     * @param {BaaS.FindOptions} [options] 参数
     * @return {Promise<BaaS.Response<any>>}
     */

  }, {
    key: "getCategoryList",
    value: function getCategoryList() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$withCount = _ref2.withCount,
          withCount = _ref2$withCount === void 0 ? false : _ref2$withCount;

      return BaaS.getContentCategoryList({
        contentGroupID: this._contentGroupID,
        limit: 100,
        return_total_count: withCount ? 1 : 0
      });
    }
    /**
     * 获取内容分类详情。
     * @method
     * @return {Promise<BaaS.Response<any>>}
     */

  }, {
    key: "getCategory",
    value: function getCategory(categoryID) {
      var query = new Query();
      query.compare('group_id', '=', this._contentGroupID);
      return BaaS.getContentCategory({
        categoryID: categoryID,
        where: JSON.stringify(query.queryObject)
      });
    }
  }], [{
    key: "get",
    value: function get(id) {
      return BaaS.getContentGroup({
        contentGroupID: id
      });
    }
    /**
     * 获取内容库列表。
     * @param {object} [options] 内容库 ID
     * @return {Promise<BaaS.Response<any>>}
     */

  }, {
    key: "find",
    value: function find() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$offset = _ref3.offset,
          offset = _ref3$offset === void 0 ? 0 : _ref3$offset,
          _ref3$limit = _ref3.limit,
          limit = _ref3$limit === void 0 ? 20 : _ref3$limit,
          _ref3$withCount = _ref3.withCount,
          withCount = _ref3$withCount === void 0 ? false : _ref3$withCount;

      return BaaS.getContentGroupList({
        offset: offset,
        limit: limit,
        return_total_count: withCount ? 1 : 0
      });
    }
  }]);

  return ContentGroup;
}(BaseQuery);

module.exports = ContentGroup;

/***/ }),

/***/ "../core/CurrentUser.js":
/*!******************************!*\
  !*** ../core/CurrentUser.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UserRecord = __webpack_require__(/*! ./UserRecord */ "../core/UserRecord.js");

var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

var HError = __webpack_require__(/*! ./HError */ "../core/HError.js");

var utils = __webpack_require__(/*! ./utils */ "../core/utils/index.js");

var constants = __webpack_require__(/*! ./constants */ "../core/constants.js");

var USER_PROFILE_BUILD_IN_FIELDS = constants.USER_PROFILE_BUILD_IN_FIELDS;
var API = BaaS._config.API;
/**
 * @memberof BaaS
 * @extends BaaS.UserRecord
 * @package
 */

var CurrentUser =
/*#__PURE__*/
function (_UserRecord) {
  _inherits(CurrentUser, _UserRecord);

  /**
   * @param {Object} attribute 用户信息
   */
  function CurrentUser(attribute) {
    var _this;

    _classCallCheck(this, CurrentUser);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CurrentUser).call(this));

    if (!utils.isObject(attribute)) {
      return _possibleConstructorReturn(_this, new HError(605));
    }

    _this.initAttribute(attribute);

    return _this;
  }

  _createClass(CurrentUser, [{
    key: "initAttribute",
    value: function initAttribute(attribute) {
      var _this2 = this;

      this._attribute = _extends({}, attribute);
      Object.keys(attribute).forEach(function (key) {
        // 以下划线开头或者是原有内置字段将直接添加在该对象上
        if (key[0] === '_' || USER_PROFILE_BUILD_IN_FIELDS.includes(key)) {
          _this2[key] = attribute[key];
        }
      });
    }
    /**
     * 以 JSON Object 的形式返回用户信息
     * @returns {Object} 用户信息
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this._attribute;
    }
    /**
     * 获取某一项用户信息
     * @param {string} key 用户信息 key
     * @returns {any} 用户信息
     */

  }, {
    key: "get",
    value: function get(key) {
      return this._attribute[key];
    }
    /**
     * 将微信账号绑定到当前用户，匿名用户无法调用
     * @param {BaaS.AuthData|null} [authData] 用户信息
     * @param {BaaS.LinkWechatOptions} [params] 用户信息参数
     * @returns {Promise<this>} UserRecord 实例
     */

  }, {
    key: "linkWechat",
    value: function linkWechat() {
      if (this._anonymous) {
        return Promise.reject(new HError(612));
      }

      if (!BaaS._polyfill.linkWechat) {
        return Promise.reject(new HError(605, 'linkWechat 方法未定义'));
      }

      return BaaS._polyfill.linkWechat.apply(null, arguments);
    }
    /**
     * 将支付宝账号绑定到当前用户，匿名用户无法调用
     * @param {BaaS.LinkAlipayParams} [options] 参数
     * @returns {Promise<this>} UserRecord 实例
     */

  }, {
    key: "linkAlipay",
    value: function linkAlipay() {
      if (this._anonymous) {
        return Promise.reject(new HError(612));
      }

      if (!BaaS._polyfill.linkAlipay) {
        return Promise.reject(new HError(605, 'linkAlipay 方法未定义'));
      }

      return BaaS._polyfill.linkAlipay.apply(null, arguments);
    }
    /**
     * 将 QQ 账号绑定到当前用户，匿名用户无法调用
     * @param {BaaS.AuthData|null} [authData] 用户信息
     * @param {BaaS.LinkOptions} [params] 用户信息参数
     * @returns {Promise<this>} UserRecord 实例
     */

  }, {
    key: "linkQQ",
    value: function linkQQ() {
      if (this._anonymous) {
        return Promise.reject(new HError(612));
      }

      if (!BaaS._polyfill.linkQQ) {
        return Promise.reject(new HError(605, 'linkQQ 方法未定义'));
      }

      return BaaS._polyfill.linkQQ.apply(null, arguments);
    }
    /**
     * 将百度账号绑定到当前用户，匿名用户无法调用
     * @param {BaaS.AuthData|null} [authData] 用户信息
     * @param {BaaS.LinkOptions} [params] 用户信息参数
     * @returns {Promise<this>} [UserRecord] 实例
     */

  }, {
    key: "linkBaidu",
    value: function linkBaidu() {
      if (this._anonymous) {
        return Promise.reject(new HError(612));
      }

      if (!BaaS._polyfill.linkBaidu) {
        return Promise.reject(new HError(605, 'linkBaidu 方法未定义'));
      }

      return BaaS._polyfill.linkBaidu.apply(null, arguments);
    }
    /**
     * 将字节跳动账号绑定到当前用户，匿名用户无法调用
     * @param {BaaS.LinkBytedanceParams} [options] 参数
     * @returns {Promise<this>} UserRecord 实例
     */

  }, {
    key: "linkTt",
    value: function linkTt() {
      if (this._anonymous) {
        return Promise.reject(new HError(612));
      }

      if (!BaaS._polyfill.linkTt) {
        return Promise.reject(new HError(605, 'linkTt 方法未定义'));
      }

      return BaaS._polyfill.linkTt.apply(null, arguments);
    }
    /**
     * 将京东账号绑定到当前用户，匿名用户无法调用
     * @param {BaaS.LinkOptions} [options] 参数
     * @returns {Promise<this>} UserRecord 实例
     */

  }, {
    key: "linkJd",
    value: function linkJd() {
      if (this._anonymous) {
        return Promise.reject(new HError(612));
      }

      if (!BaaS._polyfill.linkJd) {
        return Promise.reject(new HError(605, 'linkJd 方法未定义'));
      }

      return BaaS._polyfill.linkJd.apply(null, arguments);
    }
    /**
     * 将第三方账号绑定到当前用户，匿名用户无法调用
     * @since v2.1.0
     * @param {string} providor 第三方平台
     * @param {string} authPageUrl 授权页面 URL
     * @param {BaaS.LinkThirdPartyParams} [options] 其他选项
     * @returns {Promise<this>} UserRecord 实例
     */

  }, {
    key: "linkThirdParty",
    value: function linkThirdParty() {
      if (this._anonymous) {
        return Promise.reject(new HError(612));
      }

      if (!BaaS._polyfill.linkThirdParty) {
        return Promise.reject(new HError(605, 'linkThirdParty 方法未定义'));
      }

      return BaaS._polyfill.linkThirdParty.apply(null, arguments);
    }
    /**
     * 将第三方账号绑定到当前用户（使用 auth_data 绑定），匿名用户无法调用
     * @since v3.13.0
     * @param {BaaS.LinkAuthDataAuthData} authData 授权页面 URL
     * @param {BaaS.LinkAuthDataOptions} [options] 其他选项
     * @returns {Promise<this>} UserRecord 实例
     */

  }, {
    key: "linkThirdPartyWithAuthData",
    value: function linkThirdPartyWithAuthData() {
      if (this._anonymous) {
        return Promise.reject(new HError(612));
      }

      if (!BaaS._polyfill.linkThirdPartyWithAuthData) {
        return Promise.reject(new HError(605, 'linkThirdPartyWithAuthData 方法未定义'));
      }

      return BaaS._polyfill.linkThirdPartyWithAuthData.apply(null, arguments);
    }
    /**
     * 更新密码
     *
     * @param {BaaS.UpdatePasswordParams} options
     * @returns {Promise<this>} UserRecord 实例
     */

  }, {
    key: "updatePassword",
    value: function updatePassword(_ref) {
      var _this3 = this;

      var password = _ref.password,
          newPassword = _ref.newPassword;

      if (this._anonymous) {
        return Promise.reject(new HError(612));
      }

      return BaaS._baasRequest({
        url: API.ACCOUNT_INFO,
        method: 'PUT',
        data: {
          password: password,
          new_password: newPassword
        }
      }).then(function () {
        return _this3;
      });
    }
    /**
     * 更新邮箱
     * @param {string|null} email email 地址
     * @param {SetEmailOptions} [options] 可选参数
     * @returns {Promise<this>} UserRecord 实例
     */

  }, {
    key: "setEmail",
    value: function setEmail(email) {
      var _this4 = this;

      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$sendVerificatio = _ref2.sendVerificationEmail,
          sendVerificationEmail = _ref2$sendVerificatio === void 0 ? false : _ref2$sendVerificatio;

      if (this._anonymous) {
        return Promise.reject(new HError(612));
      }

      return BaaS._baasRequest({
        url: API.ACCOUNT_INFO,
        method: 'PUT',
        data: {
          email: email
        }
      }).then(function (res) {
        if (sendVerificationEmail) {
          _this4.requestEmailVerification(email);
        }

        _this4.initAttribute(res.data);

        return _this4;
      });
    }
    /**
     * 更新用户名
     * @param {string|null} username 用户名
     * @returns {Promise<this>} UserRecord 实例
     */

  }, {
    key: "setUsername",
    value: function setUsername(username) {
      var _this5 = this;

      if (this._anonymous) {
        return Promise.reject(new HError(612));
      }

      return BaaS._baasRequest({
        url: API.ACCOUNT_INFO,
        method: 'PUT',
        data: {
          username: username
        }
      }).then(function (res) {
        _this5.initAttribute(res.data);

        return _this5;
      });
    }
    /**
     * 发送验证邮件
     * @returns {Promise<this>} UserRecord 实例
     */

  }, {
    key: "requestEmailVerification",
    value: function requestEmailVerification() {
      var _this6 = this;

      if (this._anonymous) {
        return Promise.reject(new HError(612));
      }

      return BaaS._baasRequest({
        url: API.EMAIL_VERIFY,
        method: 'POST'
      }).then(function () {
        return _this6;
      });
    }
    /**
     * 初次设置账号信息
     * @param {BaaS.SetAccountParmas} accountInfo
     * @returns {Promise<this>} UserRecord 实例
     */

  }, {
    key: "setAccount",
    value: function setAccount() {
      var _this7 = this;

      var accountInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this._anonymous) {
        return Promise.reject(new HError(612));
      }

      if (accountInfo.password) {
        accountInfo.new_password = accountInfo.password;
        delete accountInfo.password;
      }

      return BaaS._baasRequest({
        url: API.ACCOUNT_INFO,
        method: 'PUT',
        data: accountInfo
      }).then(function (res) {
        _this7.initAttribute(res.data);

        return _this7;
      });
    }
    /**
     * 更改手机号
     * @param {string|null} phone 手机号码
     * @returns {Promise<this>} UserRecord 实例
     */

  }, {
    key: "setMobilePhone",
    value: function setMobilePhone(phone) {
      var _this8 = this;

      if (this._anonymous) {
        return Promise.reject(new HError(612));
      }

      return BaaS._baasRequest({
        url: API.ACCOUNT_INFO,
        method: 'PUT',
        data: {
          phone: phone
        }
      }).then(function (res) {
        _this8.initAttribute(res.data);

        return _this8;
      });
    }
    /**
     * 验证手机号
     * @param {string} code 短信验证码
     * @returns {Promise<this>} UserRecord 实例
     */

  }, {
    key: "verifyMobilePhone",
    value: function verifyMobilePhone(code) {
      var _this9 = this;

      if (this._anonymous) {
        return Promise.reject(new HError(612));
      }

      return BaaS._baasRequest({
        url: API.VERIFY_MOBILE,
        method: 'POST',
        data: {
          code: code
        }
      }).then(function () {
        return _this9;
      });
    }
  }]);

  return CurrentUser;
}(UserRecord);

module.exports = CurrentUser;

/***/ }),

/***/ "../core/File.js":
/*!***********************!*\
  !*** ../core/File.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

var BaseQuery = __webpack_require__(/*! ./BaseQuery */ "../core/BaseQuery.js");

var API = BaaS._config.API;
/**
 * 文件
 * @memberof BaaS
 * @extends BaaS.BaseQuery
 * @public
 */

var File =
/*#__PURE__*/
function (_BaseQuery) {
  _inherits(File, _BaseQuery);

  function File() {
    _classCallCheck(this, File);

    return _possibleConstructorReturn(this, _getPrototypeOf(File).call(this));
  }
  /**
   * 上传文件。
   * @method
   * @param {BaaS.FileParams} fileParams 文件参数
   * @param {BaaS.FileMeta} [metaData] 文件元信息
   * @return {Promise<BaaS.Response<any>>}
   */


  _createClass(File, [{
    key: "upload",
    value: function upload(fileParams, metaData) {
      return BaaS.uploadFile(fileParams, metaData, 'json');
    }
    /**
     * 删除文件。
     * @method
     * @param {string} id 文件 ID
     * @return {Promise<BaaS.Response<any>>}
     */

  }, {
    key: "delete",
    value: function _delete(id) {
      if (id instanceof Array) {
        return BaaS.deleteFiles({
          'id__in': id
        });
      } else {
        return BaaS.deleteFile({
          fileID: id
        });
      }
    }
    /**
     * 获取文件详情。
     * @method
     * @param {string} fileID 文件 ID
     * @return {Promise<BaaS.Response<any>>}
     */

  }, {
    key: "get",
    value: function get(fileID) {
      return BaaS.getFileDetail({
        fileID: fileID
      });
    }
    /**
     * 获取文件列表。
     * @method
     * @param {BaaS.FindOptions} [options] 参数
     * @return {Promise<BaaS.Response<any>>}
     */

  }, {
    key: "find",
    value: function find() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$withCount = _ref.withCount,
          withCount = _ref$withCount === void 0 ? false : _ref$withCount;

      var condition = this._handleAllQueryConditions();

      this._initQueryParams();

      return BaaS.getFileList(_extends({}, condition, {
        return_total_count: withCount ? 1 : 0
      }));
    }
    /**
     * 获取文件数量。
     * @method
     * @since v3.0.0
     * @return {Promise<number>}
     */

  }, {
    key: "count",
    value: function count() {
      return this.limit(1).find({
        withCount: true
      }).then(function (res) {
        var total_count = res.data.meta.total_count;
        return total_count;
      });
    }
    /**
     * 生成视频截图。
     * @method
     * @param {BaaS.VideoSnapshotParams} params 截图参数
     * @return {Promise<BaaS.FileOperationResult>}
     */

  }, {
    key: "genVideoSnapshot",
    value: function genVideoSnapshot(params) {
      return BaaS._baasRequest({
        url: API.VIDEO_SNAPSHOT,
        method: 'POST',
        data: params
      }).then(function (res) {
        return res.data;
      });
    }
    /**
     * M3U8 视频拼接。
     * @method
     * @param {BaaS.VideoConcatParams} params 拼接参数
     * @return {Promise<BaaS.FileOperationResult>}
     */

  }, {
    key: "videoConcat",
    value: function videoConcat(params) {
      return BaaS._baasRequest({
        url: API.M3U8_CONCAT,
        method: 'POST',
        data: params
      }).then(function (res) {
        return res.data;
      });
    }
    /**
     * M3U8 视频剪辑。
     * @method
     * @param {BaaS.VideoClipParams} params 剪辑参数
     * @return {Promise<BaaS.FileOperationResult>}
     */

  }, {
    key: "videoClip",
    value: function videoClip(params) {
      return BaaS._baasRequest({
        url: API.M3U8_CLIP,
        method: 'POST',
        data: params
      }).then(function (res) {
        return res.data;
      });
    }
    /**
     * M3U8 时长和分片信息。
     * @method
     * @param {BaaS.VideoMetaParams} params 分片信息参数
     * @return {Promise<BaaS.VideoMetaResult>}
     */

  }, {
    key: "videoMeta",
    value: function videoMeta(params) {
      return BaaS._baasRequest({
        url: API.M3U8_META,
        method: 'POST',
        data: params
      }).then(function (res) {
        return res.data;
      });
    }
    /**
     * 音视频的元信息。
     * @method
     * @param {BaaS.VideoAudioMetaParams} params 音视频的元信息参数
     * @return {Promise<BaaS.VideoAudioMetaResult>}
     */

  }, {
    key: "videoAudioMeta",
    value: function videoAudioMeta(params) {
      return BaaS._baasRequest({
        url: API.VIDEO_AUDIO_META,
        method: 'POST',
        data: params
      }).then(function (res) {
        return res.data;
      });
    }
  }]);

  return File;
}(BaseQuery);

module.exports = File;

/***/ }),

/***/ "../core/FileCategory.js":
/*!*******************************!*\
  !*** ../core/FileCategory.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

var BaseQuery = __webpack_require__(/*! ./BaseQuery */ "../core/BaseQuery.js");

var Query = __webpack_require__(/*! ./Query */ "../core/Query.js");
/**
 * 文件分类
 * @memberof BaaS
 * @extends BaaS.BaseQuery
 * @public
 */


var FileCategory =
/*#__PURE__*/
function (_BaseQuery) {
  _inherits(FileCategory, _BaseQuery);

  function FileCategory() {
    _classCallCheck(this, FileCategory);

    return _possibleConstructorReturn(this, _getPrototypeOf(FileCategory).call(this));
  }
  /**
   * 获取文件分类详情。
   * @method
   * @param {string} categoryID 文件分类 ID
   * @return {Promise<BaaS.Response<any>>}
   */


  _createClass(FileCategory, [{
    key: "get",
    value: function get(categoryID) {
      return BaaS.getFileCategoryDetail({
        categoryID: categoryID
      });
    }
    /**
     * 通过文件分类 ID 获取分类下的所有文件。
     * @method
     * @param {string} categoryID 文件分类 ID
     * @param {BaaS.FindOptions} [options] 参数
     * @return {Promise<BaaS.Response<any>>}
     */

  }, {
    key: "getFileList",
    value: function getFileList(categoryID) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$withCount = _ref.withCount,
          withCount = _ref$withCount === void 0 ? false : _ref$withCount;

      var query = new Query();
      query.in('category_id', [categoryID]);
      return BaaS.getFileList({
        where: JSON.stringify(query.queryObject),
        return_total_count: withCount ? 1 : 0
      });
    }
    /**
     * 获取文件分类列表。
     * @method
     * @param {BaaS.FindOptions} [options] 参数
     * @return {Promise<BaaS.Response<any>>}
     */

  }, {
    key: "find",
    value: function find() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$withCount = _ref2.withCount,
          withCount = _ref2$withCount === void 0 ? false : _ref2$withCount;

      var condition = this._handleAllQueryConditions();

      this._initQueryParams();

      return BaaS.getFileCategoryList(_extends({}, condition, {
        return_total_count: withCount ? 1 : 0
      }));
    }
    /**
     * 获取文件分类数量。
     * @method
     * @since v3.0.0
     * @return {Promise<number>}
     */

  }, {
    key: "count",
    value: function count() {
      return this.limit(1).find({
        withCount: true
      }).then(function (res) {
        var total_count = res.data.meta.total_count;
        return total_count;
      });
    }
  }]);

  return FileCategory;
}(BaseQuery);

module.exports = FileCategory;

/***/ }),

/***/ "../core/GeoPoint.js":
/*!***************************!*\
  !*** ../core/GeoPoint.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var utils = __webpack_require__(/*! ./utils */ "../core/utils/index.js");
/**
 * Geo 点
 * @memberof BaaS
 * @public
 */


var GeoPoint =
/*#__PURE__*/
function () {
  /**
   * @param {number} longitude 经度
   * @param {number} latitude 纬度
   */
  function GeoPoint(longitude, latitude) {
    _classCallCheck(this, GeoPoint);

    this.longitude = longitude;
    this.latitude = latitude;
    this.geoJSON = {
      'type': 'Point',
      'coordinates': [this.longitude, this.latitude]
    };
  }
  /**
   * 转换为 GeoJSON
   * @return {BaaS.GeoJson}
   */


  _createClass(GeoPoint, [{
    key: "toGeoJSON",
    value: function toGeoJSON() {
      return utils.cloneDeep(this.geoJSON);
    }
  }]);

  return GeoPoint;
}();

module.exports = GeoPoint;

/***/ }),

/***/ "../core/GeoPolygon.js":
/*!*****************************!*\
  !*** ../core/GeoPolygon.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GeoPoint = __webpack_require__(/*! ./GeoPoint */ "../core/GeoPoint.js");

var HError = __webpack_require__(/*! ./HError */ "../core/HError.js");

var utils = __webpack_require__(/*! ./utils */ "../core/utils/index.js");
/**
 * Geo 多边形
 * @memberof BaaS
 * @public
 */


var GeoPolygon =
/*#__PURE__*/
function () {
  /**
   * @param {number[][]} args 点坐标
   */
  function GeoPolygon(args) {
    _classCallCheck(this, GeoPolygon);

    if (args && args instanceof Array) {
      if (args.length < 4) {
        throw new HError(605);
      } else {
        this.points = args;
        this.geoJSON = {
          type: 'Polygon',
          coordinates: []
        };
      }
    } else {
      throw new HError(605);
    }
  }
  /**
   * 转换为 GeoJSON
   * @return {GeoJson}
   */


  _createClass(GeoPolygon, [{
    key: "toGeoJSON",
    value: function toGeoJSON() {
      var face = [];
      this.points.forEach(function (point) {
        if (point instanceof GeoPoint) {
          face.push([point.longitude, point.latitude]);
        } else if (point instanceof Array && point.length === 2) {
          face.push(point);
        } else {
          throw new HError(605);
        }
      });
      this.geoJSON.coordinates = [face];
      return utils.cloneDeep(this.geoJSON);
    }
  }]);

  return GeoPolygon;
}();

module.exports = GeoPolygon;

/***/ }),

/***/ "../core/HError.js":
/*!*************************!*\
  !*** ../core/HError.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @memberof BaaS
 * @package
 */
var HError =
/*#__PURE__*/
function () {
  /**
   * @param {number} code 错误码
   * @param {string} msg 错误信息
   */
  function HError(code, msg) {
    _classCallCheck(this, HError);

    var error = new Error();
    error.code = code;
    error.message = msg ? "".concat(code, ": ").concat(msg) : "".concat(code, ": ").concat(this.mapErrorMessage(code));
    return error;
  } // 前端错误信息定义


  _createClass(HError, [{
    key: "mapErrorMessage",
    value: function mapErrorMessage(code) {
      switch (code) {
        case 600:
          return 'network disconnected';

        case 601:
          return 'request timeout';

        case 602:
          return 'uninitialized';
        // 未调用 BaaS.init()

        case 603:
          return 'unauthorized';
        // 用户尚未授权

        case 604:
          return 'session missing';
        // 用户尚未登录

        case 605:
          return 'incorrect parameter type';

        case 607:
          return 'payment cancelled';

        case 608:
          return 'payment failed';
        // error message 会被重写为微信返回的错误信息

        case 609:
          return 'wxExtend function should be executed to allow plugin use wx.login, wx.getUserInfo, wx.requestPayment';

        case 610:
          return 'errorTracker uninitialized';

        case 611:
          return 'unsupported function';

        case 612:
          return 'anonymous user is not allowed';

        case 613:
          return 'third party auth denied';

        case 614:
          return 'third party auth failed';

        case 615:
          return 'gateway type "weixin_tenpay_js" works in WeChat builtin browser only';

        default:
          return 'unknown error';
      }
    }
  }]);

  return HError;
}();

module.exports = HError;

/***/ }),

/***/ "../core/Order.js":
/*!************************!*\
  !*** ../core/Order.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

var utils = __webpack_require__(/*! ./utils */ "../core/utils/index.js");

var BaseQuery = __webpack_require__(/*! ./BaseQuery */ "../core/BaseQuery.js");
/**
 * 支付订单
 * @memberof BaaS
 * @extends BaaS.BaseQuery
 * @public
 */


var Order =
/*#__PURE__*/
function (_BaseQuery) {
  _inherits(Order, _BaseQuery);

  function Order() {
    _classCallCheck(this, Order);

    return _possibleConstructorReturn(this, _getPrototypeOf(Order).apply(this, arguments));
  }

  _createClass(Order, [{
    key: "get",

    /**
     * 获取支付订单详情。
     * @method
     * @param {string} transactionID 支付流水 ID
     * @return {Promise<BaaS.Response<any>>}
     */
    value: function get(transactionID) {
      var API = BaaS._config.API;
      var url = utils.format(API.ORDER, {
        transactionID: transactionID
      });
      return BaaS._baasRequest({
        url: url
      });
    }
    /**
     * 获取支付订单列表。
     * @method
     * @param {BaaS.GetOrderListParams} [params] 筛选参数
     * @return {Promise<BaaS.Response<any>>}
     */

  }, {
    key: "getOrderList",
    value: function getOrderList() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var condition = _extends({}, this._handleAllQueryConditions(), params);

      this._initQueryParams();

      return BaaS.getOrderList(_extends(condition, params));
    }
  }]);

  return Order;
}(BaseQuery);

module.exports = Order;

/***/ }),

/***/ "../core/Query.js":
/*!************************!*\
  !*** ../core/Query.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GeoPoint = __webpack_require__(/*! ./GeoPoint */ "../core/GeoPoint.js");

var GeoPolygon = __webpack_require__(/*! ./GeoPolygon */ "../core/GeoPolygon.js");

var HError = __webpack_require__(/*! ./HError */ "../core/HError.js");

var utils = __webpack_require__(/*! ./utils */ "../core/utils/index.js");

var BaseRecord = __webpack_require__(/*! ./BaseRecord */ "../core/BaseRecord.js");

var serializeValue = BaseRecord._serializeValueFuncFactory(['BaseRecord']);
/**
 * 查询
 * @memberof BaaS
 * @public
 */


var Query =
/*#__PURE__*/
function () {
  function Query() {
    _classCallCheck(this, Query);

    this.queryObject = {};
  }
  /**
   * and 操作符。将多个 Query 对象使用 and 操作符进行合并
   *
   * @static
   * @function
   * @param {...Query[]} querys Query 对象
   * @returns {Query} - 新的 Query 对象
   */


  _createClass(Query, [{
    key: "compare",

    /**
     * 比较判断，将 Record[key] 与 value 使用 operator 进行判断，筛选出
     * 符合条件的 Record。
     *
     * @param {string} key - 用于查询判断的字段
     * @param {string} operator - 判断操作符
     * @param {string} value - 用于判断的值
     * @returns {this} Query 实例
     */
    value: function compare(key, operator, value) {
      var op = 'eq';

      switch (operator) {
        case '=':
          op = 'eq';
          break;

        case '!=':
          op = 'ne';
          break;

        case '<':
          op = 'lt';
          break;

        case '<=':
          op = 'lte';
          break;

        case '>':
          op = 'gt';
          break;

        case '>=':
          op = 'gte';
          break;

        default:
          throw new HError(605);
      }

      this._addQueryObject(key, _defineProperty({}, op, serializeValue(value)));

      return this;
    }
    /**
     * 包含判断，筛选出符合条件（Record[key] 包含了字符串 str）的 Record。
     *
     * @param {string} key - 用于查询判断的字段
     * @param {string} str - 用于判断的字符串
     * @returns {this} Query 实例
     */

  }, {
    key: "contains",
    value: function contains(key, str) {
      if (str && utils.isString(str)) {
        this._addQueryObject(key, {
          contains: str
        });

        return this;
      } else {
        throw new HError(605);
      }
    }
    /**
     * 正则判断，筛选出符合条件（正则表达式 regExp 能匹配 Record[key]）的 Record。
     *
     * @param {string} key - 用于查询判断的字段
     * @param {RegExp} regExp - 正则表达式
     * @returns {this} Query 实例
     */

  }, {
    key: "matches",
    value: function matches(key, regExp) {
      if (regExp && regExp instanceof RegExp) {
        var result = utils.parseRegExp(regExp);

        if (result.length > 1) {
          this._addQueryObject(key, {
            regex: result[0],
            options: result[1]
          });
        } else {
          this._addQueryObject(key, {
            regex: result[0]
          });
        }

        return this;
      } else {
        throw new HError(605);
      }
    }
    /**
     * 包含判断，筛选出符合条件（数组 arr 包含 Record[key]）的 Record。
     *
     * @param {string} key - 用于查询判断的字段
     * @param {Array<any>} arr - 用于判断的数组
     * @returns {this} Query 实例
     */

  }, {
    key: "in",
    value: function _in(key, arr) {
      if (arr && arr instanceof Array) {
        this._addQueryObject(key, {
          in: arr.map(function (v) {
            return serializeValue(v);
          })
        });

        return this;
      } else {
        throw new HError(605);
      }
    }
    /**
     * 不包含判断，筛选出符合条件（数组 arr 不包含 Record[key]）的 Record。
     *
     * @param {string} key - 用于查询判断的字段
     * @param {Array<any>} arr - 用于判断的数组
     * @returns {this} Query 实例
     */

  }, {
    key: "notIn",
    value: function notIn(key, arr) {
      if (arr && arr instanceof Array) {
        this._addQueryObject(key, {
          nin: arr.map(function (v) {
            return serializeValue(v);
          })
        });

        return this;
      } else {
        throw new HError(605);
      }
    }
    /**
     * 数组包含判断。
     * 判断逻辑：Record[key] 是数组类型，且包含 arr 数组中的元素
     *
     * @param {string} key - 用于查询判断的字段
     * @param {Array<any>} arr - 用于判断的数组
     * @returns {this} Query 实例
     */

  }, {
    key: "arrayContains",
    value: function arrayContains(key, arr) {
      if (arr && arr instanceof Array) {
        this._addQueryObject(key, {
          all: arr
        });

        return this;
      } else {
        throw new HError(605);
      }
    }
    /**
     * 字段为 Null 判断。
     * 判断逻辑：Record[key] 是 null
     *
     * @param {string} key - 用于查询判断的字段
     * @returns {this} Query 实例
     */

  }, {
    key: "isNull",
    value: function isNull(key) {
      var _this = this;

      if (key && key instanceof Array) {
        key.forEach(function (k) {
          _this._addQueryObject(k, {
            isnull: true
          });
        });
      } else {
        this._addQueryObject(key, {
          isnull: true
        });
      }

      return this;
    }
    /**
     * 字段不为 Null 判断。
     * 判断逻辑：Record[key] 不是 null
     *
     * @param {string} key - 用于查询判断的字段
     * @returns {this} Query 实例
     */

  }, {
    key: "isNotNull",
    value: function isNotNull(key) {
      var _this2 = this;

      if (key && key instanceof Array) {
        key.forEach(function (k) {
          _this2._addQueryObject(k, {
            isnull: false
          });
        });
      } else {
        this._addQueryObject(key, {
          isnull: false
        });
      }

      return this;
    }
    /**
     * 字段存在判断。
     * 判断逻辑：Record[key] 不是 undefined
     *
     * @param {string} key - 用于查询判断的字段
     * @returns {this} Query 实例
     */

  }, {
    key: "exists",
    value: function exists(key) {
      var _this3 = this;

      if (key && key instanceof Array) {
        key.forEach(function (k) {
          _this3._addQueryObject(k, {
            exists: true
          });
        });
      } else {
        this._addQueryObject(key, {
          exists: true
        });
      }

      return this;
    }
    /**
     * 字段不存在判断。
     * 判断逻辑：Record[key] 是 undefined
     *
     * @param {string} key - 用于查询判断的字段
     * @returns {this} Query 实例
     */

  }, {
    key: "notExists",
    value: function notExists(key) {
      var _this4 = this;

      if (key && key instanceof Array) {
        key.forEach(function (k) {
          _this4._addQueryObject(k, {
            exists: false
          });
        });
      } else {
        this._addQueryObject(key, {
          exists: false
        });
      }

      return this;
    }
    /**
     * 多边形包含判断，在指定多边形集合中找出包含某一点的多边形（geojson 类型）。
     * 判断逻辑：Record[key] 包含 point
     *
     * @param {string} key - 用于查询判断的字段
     * @param {GeoPoint} point - 点
     * @returns {this} Query 实例
     */

  }, {
    key: "include",
    value: function include(key, point) {
      if (point && point instanceof GeoPoint) {
        this._addQueryObject(key, {
          intersects: point.toGeoJSON()
        });

        return this;
      } else {
        throw new HError(605);
      }
    }
    /**
     * 多边形包含判断，在指定点集合中，查找包含于指定的多边形区域的点（geojson 类型）。
     * 判断逻辑：polygon 包含 Record[key]
     *
     * @param {string} key - 用于查询判断的字段
     * @param {GeoPolygon} polygon - 多边形
     * @returns {this} Query 实例
     */

  }, {
    key: "within",
    value: function within(key, polygon) {
      if (polygon && polygon instanceof GeoPolygon) {
        this._addQueryObject(key, {
          within: polygon.toGeoJSON()
        });

        return this;
      } else {
        throw new HError(605);
      }
    }
    /**
     * 圆包含判断，在指定点集合中，查找包含在指定圆心和指定半径所构成的圆形区域中的点（geojson 类型）。
     * 判断逻辑：以 point 为圆心、以 redius 为半径的圆包含 Record[key]
     *
     * @param {string} key - 用于查询判断的字段
     * @param {GeoPoint} point - 圆心
     * @param {number} radius - 半径
     * @returns {this} Query 实例
     */

  }, {
    key: "withinCircle",
    value: function withinCircle(key, point, radius) {
      if (point && point instanceof GeoPoint) {
        var data = {
          radius: radius,
          coordinates: [point.longitude, point.latitude]
        };

        this._addQueryObject(key, {
          center: data
        });

        return this;
      } else {
        throw new HError(605);
      }
    }
    /**
     * 圆环包含判断，在指定点集合中，查找包含在以某点为起点的最大和最小距离所构成的圆环区域中的点（geojson 类型）。
     * 判断逻辑：以 point 为圆心、以 minDistance 最小半径、以 maxDistance 为最大半径的圆环包含 Record[key]
     *
     * @param {string} key - 用于查询判断的字段
     * @param {GeoPoint} point - 圆心
     * @param {number} maxDistance - 最大半径
     * @param {number} [minDistance] - 最小半径
     * @returns {this} Query 实例
     */

  }, {
    key: "withinRegion",
    value: function withinRegion(key, point, maxDistance) {
      var minDistance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      if (point && point instanceof GeoPoint) {
        var data = {
          geometry: point.toGeoJSON(),
          min_distance: minDistance
        };

        if (maxDistance) {
          data.max_distance = maxDistance;
        }

        this._addQueryObject(key, {
          nearsphere: data
        });

        return this;
      } else {
        throw new HError(605);
      }
    }
    /**
     * Object 类型字段的属性存在判断。
     * 判断逻辑：Record[key] 为 Object 类型，且 Record[key][fieldName] 不为 undefined
     *
     * @param {string} key - 用于查询判断的字段
     * @param {string} fieldName - 字段名称
     * @returns {this} Query 实例
     */

  }, {
    key: "hasKey",
    value: function hasKey(key, fieldName) {
      if (typeof key !== 'string' || typeof fieldName !== 'string') {
        throw HError(605);
      }

      this._addQueryObject(key, {
        has_key: fieldName
      });

      return this;
    }
  }, {
    key: "_setQueryObject",
    value: function _setQueryObject(queryObject) {
      this.queryObject = queryObject;
    }
  }, {
    key: "_addQueryObject",
    value: function _addQueryObject(key, obj) {
      if (obj.constructor !== Object) {
        throw new HError(605);
      }

      var query = _defineProperty({}, key, {});

      Object.keys(obj).forEach(function (k) {
        query[key]["$".concat(k)] = obj[k];
      });

      if (!this.queryObject['$and']) {
        this.queryObject['$and'] = [];
      }

      this.queryObject['$and'].push(query);
    }
  }], [{
    key: "and",
    value: function and() {
      var newQuery = new Query();
      var andQuery = {
        $and: []
      };

      for (var _len = arguments.length, queryObjects = new Array(_len), _key = 0; _key < _len; _key++) {
        queryObjects[_key] = arguments[_key];
      }

      queryObjects.forEach(function (query) {
        andQuery['$and'].push(query.queryObject);
      });

      newQuery._setQueryObject(andQuery);

      return newQuery;
    }
    /**
     * or 操作符。将多个 Query 对象使用 or 操作符进行合并
     *
     * @static
     * @function
     * @param {...Query[]} querys Query 对象
     * @returns {Query} - 新的 Query 对象
     */

  }, {
    key: "or",
    value: function or() {
      var newQuery = new Query();
      var orQuery = {
        $or: []
      };

      for (var _len2 = arguments.length, queryObjects = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        queryObjects[_key2] = arguments[_key2];
      }

      queryObjects.forEach(function (query) {
        orQuery['$or'].push(query.queryObject);
      });

      newQuery._setQueryObject(orQuery);

      return newQuery;
    }
  }]);

  return Query;
}();

module.exports = Query;

/***/ }),

/***/ "../core/TableObject.js":
/*!******************************!*\
  !*** ../core/TableObject.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

var BaseQuery = __webpack_require__(/*! ./BaseQuery */ "../core/BaseQuery.js");

var HError = __webpack_require__(/*! ./HError */ "../core/HError.js");

var Query = __webpack_require__(/*! ./Query */ "../core/Query.js");

var TableRecord = __webpack_require__(/*! ./TableRecord */ "../core/TableRecord.js");

var utils = __webpack_require__(/*! ./utils */ "../core/utils/index.js");

var BaseRecord = __webpack_require__(/*! ./BaseRecord */ "../core/BaseRecord.js");

var wamp = __webpack_require__(/*! ./wamp */ "../core/wamp/index.js");
/**
 * 数据表
 * @memberof BaaS
 * @extends BaaS.BaseQuery
 * @public
 */


var TableObject =
/*#__PURE__*/
function (_BaseQuery) {
  _inherits(TableObject, _BaseQuery);

  /**
   * @param {string} tableName 数据表名称
   */
  function TableObject(tableID) {
    var _this;

    _classCallCheck(this, TableObject);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableObject).call(this));
    _this._tableID = tableID;
    return _this;
  }
  /**
   * 创建一条数据记录
   * @return {TableRecord}
   */


  _createClass(TableObject, [{
    key: "create",
    value: function create() {
      return new TableRecord(this._tableID);
    }
    /**
     * 批量创建数据记录
     * @param {object[]} args 数据记录列表
     * @param {BaaS.CreateManyParams} [options] 批量创建参数
     * @return {Promise<BaaS.Response<any>>}
     */

  }, {
    key: "createMany",
    value: function createMany(args) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$enableTrigger = _ref.enableTrigger,
          enableTrigger = _ref$enableTrigger === void 0 ? true : _ref$enableTrigger;

      var serializeValue = BaseRecord._serializeValueFuncFactory(['BaseRecord']);

      if (utils.isArray(args)) {
        var params = {
          tableID: this._tableID,
          data: args.map(function (record) {
            Object.keys(record).forEach(function (key) {
              record[key] = serializeValue(record[key]);
            });
            return record;
          }),
          enable_trigger: enableTrigger ? 1 : 0
        };
        return BaaS.createRecordList(params);
      } else {
        throw new HError(605);
      }
    }
    /**
     * 删除数据记录
     * @param {string} recordID 数据记录 ID
     * @return {Promise<any>}
     */

    /**
    * 批量删除数据记录
    * @param {Query} query 数据记录查询条件
    * @param {BaaS.BatchUpdateParams} [options] 批量操作参数
    * @return {Promise<any>}
    */

  }, {
    key: "delete",
    value: function _delete(args) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$enableTrigger = _ref2.enableTrigger,
          enableTrigger = _ref2$enableTrigger === void 0 ? true : _ref2$enableTrigger,
          _ref2$withCount = _ref2.withCount,
          withCount = _ref2$withCount === void 0 ? false : _ref2$withCount;

      if (utils.isString(args) || Number.isInteger(args)) {
        return BaaS.deleteRecord({
          tableID: this._tableID,
          recordID: args
        });
      } else if (args instanceof Query) {
        var params = {
          tableID: this._tableID,
          limit: utils.getLimitationWithEnableTigger(this._limit, enableTrigger),
          offset: this._offset,
          where: JSON.stringify(args.queryObject),
          enable_trigger: enableTrigger ? 1 : 0,
          return_total_count: withCount ? 1 : 0
        };

        this._initQueryParams();

        return BaaS.deleteRecordList(params);
      } else {
        throw new HError(605);
      }
    }
    /**
     * 获取一个数据记录，用于更新等操作（仅引用，非数据）
     * @param {string} recordID 数据记录 ID
     * @return {TableRecord}
     */

    /**
    * 获取多个数据记录，用于更新等操作（仅引用，非数据）
    * @param {Query} query 数据记录查询条件
    * @return {TableRecord}
    */

  }, {
    key: "getWithoutData",
    value: function getWithoutData(args) {
      if (utils.isString(args) || Number.isInteger(args)) {
        return new TableRecord(this._tableID, args);
      } else if (args instanceof Query) {
        var queryObject = {};
        queryObject.limit = this._limit;
        queryObject.offset = this._offset;
        queryObject.where = utils.cloneDeep(args.queryObject);

        this._initQueryParams();

        return new TableRecord(this._tableID, null, queryObject);
      } else {
        throw new HError(605);
      }
    }
    /**
     * 获取单条数据记录。
     * @method
     * @param {string} recordID 数据记录 ID
     * @return {Promise<BaaS.Response<any>>}
     */

  }, {
    key: "get",
    value: function get(recordID) {
      var params = {
        tableID: this._tableID,
        recordID: recordID
      };

      if (this._expand) {
        params.expand = this._expand;
      }

      if (this._keys) {
        params.keys = this._keys;
      }

      this._initQueryParams();

      return BaaS.getRecord(params);
    }
  }, {
    key: "_handleAllQueryConditions",
    value: function _handleAllQueryConditions() {
      var condition = _get(_getPrototypeOf(TableObject.prototype), "_handleAllQueryConditions", this).call(this);

      condition.tableID = this._tableID;
      return condition;
    }
    /**
     * 获取数据记录列表。
     * @method
     * @param {BaaS.FindOptions} [options] 参数
     * @return {Promise<BaaS.Response<any>>}
     */

  }, {
    key: "find",
    value: function find() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$withCount = _ref3.withCount,
          withCount = _ref3$withCount === void 0 ? false : _ref3$withCount;

      var condition = this._handleAllQueryConditions();

      this._initQueryParams();

      return BaaS.queryRecordList(_extends({}, condition, {
        return_total_count: withCount ? 1 : 0
      }));
    }
    /**
     * 获取数据记录数量。
     * @method
     * @return {Promise<number>}
     */

  }, {
    key: "count",
    value: function count() {
      return this.limit(1).find({
        withCount: true
      }).then(function (res) {
        var total_count = res.data.meta.total_count;
        return total_count;
      });
    }
    /**
     * 订阅数据变化事件
     */

  }, {
    key: "subscribe",
    value: function subscribe(event_type, _ref4) {
      var onerror = _ref4.onerror,
          oninit = _ref4.oninit,
          onevent = _ref4.onevent;
      return wamp.subscribe({
        schema_name: this._tableID,
        where: this._queryObject,
        event_type: event_type,
        onerror: onerror,
        oninit: oninit,
        onevent: onevent
      });
    }
  }]);

  return TableObject;
}(BaseQuery);

module.exports = TableObject;

/***/ }),

/***/ "../core/TableRecord.js":
/*!******************************!*\
  !*** ../core/TableRecord.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

var BaseRecord = __webpack_require__(/*! ./BaseRecord */ "../core/BaseRecord.js");

var utils = __webpack_require__(/*! ./utils */ "../core/utils/index.js");
/**
 * 数据记录。
 * @memberof BaaS
 * @extends BaaS.BaseRecord
 * @package
 */


var TableRecord =
/*#__PURE__*/
function (_BaseRecord) {
  _inherits(TableRecord, _BaseRecord);

  /**
   * @param {string} tableName 数据表名
   * @param {string} recordID 数据记录 ID
   * @param {object} [queryObject] 查询对象
   */
  function TableRecord(tableID, recordID) {
    var _this;

    var queryObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, TableRecord);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableRecord).call(this, recordID));
    _this._tableID = tableID;
    _this._queryObject = queryObject;
    return _this;
  }
  /**
   * 保存数据记录。
   * @return {Promise<BaaS.Response<any>>}
   */


  _createClass(TableRecord, [{
    key: "save",
    value: function save() {
      var record = utils.cloneDeep(this._record);

      this._recordValueInit();

      return BaaS.createRecord({
        tableID: this._tableID,
        data: record.$set
      });
    }
    /**
     * 更新数据记录。
     * 批量更新时，如果不需要触发触发器，可以设置 options.enableTrigger 为 false
     * @param {BaaS.BatchUpdateParams} [options] 批量更新参数
     * @return {Promise<BaaS.Response<any>>}
     */

  }, {
    key: "update",
    value: function update() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$enableTrigger = _ref.enableTrigger,
          enableTrigger = _ref$enableTrigger === void 0 ? true : _ref$enableTrigger,
          _ref$withCount = _ref.withCount,
          withCount = _ref$withCount === void 0 ? false : _ref$withCount;

      var record = utils.cloneDeep(this._record);

      this._recordValueInit();

      if (this._recordID) {
        return BaaS.updateRecord({
          tableID: this._tableID,
          recordID: this._recordID,
          data: record
        });
      } else {
        var params = {
          tableID: this._tableID,
          data: record,
          where: JSON.stringify(this._queryObject.where),
          limit: utils.getLimitationWithEnableTigger(this._queryObject.limit, enableTrigger),
          offset: this._queryObject.offset,
          enable_trigger: enableTrigger ? 1 : 0,
          return_total_count: withCount ? 1 : 0
        };
        this._queryObject = {};
        return BaaS.updateRecordList(params);
      }
    }
  }]);

  return TableRecord;
}(BaseRecord);

module.exports = TableRecord;

/***/ }),

/***/ "../core/User.js":
/*!***********************!*\
  !*** ../core/User.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

var BaseQuery = __webpack_require__(/*! ./BaseQuery */ "../core/BaseQuery.js");

var UserRecord = __webpack_require__(/*! ./UserRecord */ "../core/UserRecord.js");

var utils = __webpack_require__(/*! ./utils */ "../core/utils/index.js");

var HError = __webpack_require__(/*! ./HError */ "../core/HError.js");
/**
 * 用户
 * @memberof BaaS
 * @extends BaaS.BaseQuery
 * @public
 */


var User =
/*#__PURE__*/
function (_BaseQuery) {
  _inherits(User, _BaseQuery);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, _getPrototypeOf(User).call(this));
  }
  /**
   * 获取用户详情。
   * @method
   * @param {string} userID 用户 ID
   * @return {Promise<Response<any>>}
   */


  _createClass(User, [{
    key: "get",
    value: function get(userID) {
      var params = {
        userID: userID
      };

      if (this._expand) {
        params.expand = this._expand;
      }

      if (this._keys) {
        params.keys = this._keys;
      }

      this._initQueryParams();

      return BaaS.getUserDetail(params);
    }
    /**
     * 获取一个用户记录（仅引用，非数据）。
     * @param {string} userID 用户 ID
     * @return {BaaS.UserRecord}
     */

  }, {
    key: "getWithoutData",
    value: function getWithoutData(userID) {
      if (utils.isString(userID) || Number.isInteger(userID)) {
        return new UserRecord(userID);
      } else {
        throw new HError(605);
      }
    }
    /**
     * 获取当前用户记录（仅引用，非数据）。
     * @returns {BaaS.UserRecord}
     */

  }, {
    key: "getCurrentUserWithoutData",
    value: function getCurrentUserWithoutData() {
      return new UserRecord();
    }
    /**
     * 获取用户列表。
     * @method
     * @param {BaaS.FindOptions} [options] 参数
     * @return {Promise<Response<any>>}
     */

  }, {
    key: "find",
    value: function find() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$withCount = _ref.withCount,
          withCount = _ref$withCount === void 0 ? false : _ref$withCount;

      var condition = this._handleAllQueryConditions();

      this._initQueryParams();

      return BaaS.getUserList(_extends({}, condition, {
        return_total_count: withCount ? 1 : 0
      }));
    }
    /**
     * 获取用户数量。
     * @method
     * @since v3.0.0
     * @return {Promise<number>}
     */

  }, {
    key: "count",
    value: function count() {
      return this.limit(1).find({
        withCount: true
      }).then(function (res) {
        var total_count = res.data.meta.total_count;
        return total_count;
      });
    }
  }]);

  return User;
}(BaseQuery);

module.exports = User;

/***/ }),

/***/ "../core/UserRecord.js":
/*!*****************************!*\
  !*** ../core/UserRecord.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

var BaseRecord = __webpack_require__(/*! ./BaseRecord */ "../core/BaseRecord.js");

var utils = __webpack_require__(/*! ./utils */ "../core/utils/index.js");
/**
 * 当前用户
 * @memberof BaaS
 * @extends BaaS.BaseRecord
 * @package
 */


var UserRecord =
/*#__PURE__*/
function (_BaseRecord) {
  _inherits(UserRecord, _BaseRecord);

  /**
   * @param {string} userID 用户 ID
   */
  function UserRecord(userID) {
    _classCallCheck(this, UserRecord);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserRecord).call(this, userID));
  }
  /**
   * 更新用户数据。
   * @method
   * @return {Promise<Response<any>>}
   */


  _createClass(UserRecord, [{
    key: "update",
    value: function update() {
      var record = utils.cloneDeep(this._record);

      this._recordValueInit();

      return BaaS.updateUser({
        data: record.$set
      });
    }
  }]);

  return UserRecord;
}(BaseRecord);
/**
 * 创建一个 currentUser 对象
 * @private
 * @param userInfo
 */


UserRecord.initCurrentUser = function (userInfo) {
  var CurrentUser = __webpack_require__(/*! ./CurrentUser */ "../core/CurrentUser.js");

  return new CurrentUser(userInfo);
};

module.exports = UserRecord;

/***/ }),

/***/ "../core/auth.js":
/*!***********************!*\
  !*** ../core/auth.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

var constants = __webpack_require__(/*! ./constants */ "../core/constants.js");

var HError = __webpack_require__(/*! ./HError */ "../core/HError.js");

var storageAsync = __webpack_require__(/*! ./storageAsync */ "../core/storageAsync.js");

var utils = __webpack_require__(/*! ./utils */ "../core/utils/index.js");

var UserRecord = __webpack_require__(/*! ./UserRecord */ "../core/UserRecord.js");

var User = __webpack_require__(/*! ./User */ "../core/User.js");
/**
 * 用户认证
 * @namespace auth
 * @memberof BaaS
 */


var API = BaaS._config.API;

function getAuthUrl(data, isLoginFunc) {
  if (data.phone) {
    return isLoginFunc ? API.LOGIN_PHONE : API.REGISTER_PHONE;
  }

  if (data.email) {
    return isLoginFunc ? API.LOGIN_EMAIL : API.REGISTER_EMAIL;
  }

  return isLoginFunc ? API.LOGIN_USERNAME : API.REGISTER_USERNAME;
}

function getAuthRequestData(data) {
  if (data.phone) {
    return {
      phone: data.phone,
      password: data.password
    };
  }

  if (data.email) {
    return {
      email: data.email,
      password: data.password
    };
  }

  return {
    username: data.username || '',
    password: data.password
  };
}
/**
 * 登录
 * @since v2.0.0
 * @memberof BaaS.auth
 * @param {(BaaS.AuthWithUsernameOptions|BaaS.AuthWithEmailOptions|BaaS.AuthWithPhoneOptions)} options
 * @return {Promise<BaaS.CurrentUser>}
 */


var login = function login(params) {
  var url = getAuthUrl(params, true);
  var data = getAuthRequestData(params);
  return BaaS.request({
    url: url,
    method: 'POST',
    data: data
  }).then(utils.validateStatusCode).then(function (res) {
    BaaS._polyfill.handleLoginSuccess(res);

    return getCurrentUser();
  });
};
/**
 * 匿名登录
 * @since v2.0.0
 * @memberof BaaS.auth
 * @return {Promise<BaaS.CurrentUser>}
 */


var anonymousLogin = function anonymousLogin() {
  return BaaS.request({
    url: API.ANONYMOUS_LOGIN,
    method: 'POST'
  }).then(utils.validateStatusCode).then(function (res) {
    BaaS._polyfill.handleLoginSuccess(res, true);

    return getCurrentUser();
  });
};
/**
 * 静默登录
 * @since v2.0.0
 * @memberof BaaS.auth
 * @return {Promise<BaaS.CurrentUser>}
 */


var silentLogin = function silentLogin() {
  return Promise.reject(new HError(605, 'silentLogin 方法未定义'));
};
/**
 * 注册
 * @since v2.0.0
 * @memberof BaaS.auth
 * @param {(BaaS.AuthWithUsernameOptions|BaaS.AuthWithEmailOptions|BaaS.AuthWithPhoneOptions)} options
 * @return {Promise<BaaS.CurrentUser>}
 */


var register = function register(params) {
  var url = getAuthUrl(params);
  var data = getAuthRequestData(params);
  return BaaS.request({
    url: url,
    method: 'POST',
    data: data
  }).then(utils.validateStatusCode).then(function (res) {
    BaaS._polyfill.handleLoginSuccess(res);

    return getCurrentUser();
  });
};
/**
 * 退出登录状态
 * @since v2.0.0
 * @memberof BaaS.auth
 * @return {Promise<BaaS.Response<any>>}
 */


var logout = function logout() {
  return BaaS.request({
    url: API.LOGOUT,
    method: 'POST'
  }).then(utils.validateStatusCode).then(function (res) {
    return BaaS.clearSession().then(function () {
      return res;
    });
  });
};
/**
 * 忘记密码，发送重置密码邮件
 * @since v2.0.0
 * @memberof BaaS.auth
 * @param {BaaS.PasswordResetParam} param 账号信息
 * @return {Promise<BaaS.Response<any>>}
 */


var requestPasswordReset = function requestPasswordReset() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      email = _ref.email;

  return BaaS.request({
    url: API.PASSWORD_RESET,
    method: 'POST',
    data: {
      email: email
    }
  }).then(utils.validateStatusCode);
};
/**
 * 获取当前用户
 * @since v2.0.0
 * @memberof BaaS.auth
 * @return {Promise<BaaS.CurrentUser>}
 */


var getCurrentUser = function getCurrentUser() {
  return Promise.all([storageAsync.get(constants.STORAGE_KEY.UID), storageAsync.get(constants.STORAGE_KEY.EXPIRES_AT), utils.isSessionExpired()]).then(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 3),
        uid = _ref3[0],
        expiresAt = _ref3[1],
        expired = _ref3[2];

    if (!uid || !expiresAt || expired) return Promise.reject(new HError(604));
    return new User().get(uid).then(function (res) {
      var user = UserRecord.initCurrentUser(res.data);
      user.user_id = res.data.id;
      user.session_expires_at = expiresAt;
      return user;
    });
  });
};
/**
 * 使用手机号 + 验证码登录
 * @since v2.0.0
 * @memberof BaaS.auth
 * @param {string} mobilePhone 手机号码
 * @param {string} smsCode 验证码
 * @param {BaaS.LoginOptions} [options] 可选配置
 * @return {Promise<BaaS.CurrentUser>}
 */


var loginWithSmsVerificationCode = function loginWithSmsVerificationCode(mobilePhone, smsCode) {
  var _ref4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref4$createUser = _ref4.createUser,
      createUser = _ref4$createUser === void 0 ? true : _ref4$createUser;

  return BaaS.request({
    url: API.LOGIN_SMS,
    data: {
      phone: mobilePhone,
      code: smsCode,
      create_user: createUser
    },
    method: 'POST'
  }).then(utils.validateStatusCode).then(function (res) {
    BaaS._polyfill.handleLoginSuccess(res, false);

    return getCurrentUser();
  });
};

module.exports = {
  login: utils.rateLimit(login),
  logout: logout,
  silentLogin: silentLogin,
  loginWithSmsVerificationCode: utils.rateLimit(loginWithSmsVerificationCode),
  anonymousLogin: utils.rateLimit(anonymousLogin),
  requestPasswordReset: requestPasswordReset,
  register: utils.rateLimit(register),
  getCurrentUser: utils.rateLimit(getCurrentUser)
};

/***/ }),

/***/ "../core/baas.js":
/*!***********************!*\
  !*** ../core/baas.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * 知晓云 JS SDK 命名空间
 *
 * @namespace BaaS
 */
var BaaS = global.BaaS || {};
/**
 * @namespace BaaS._config
 */

BaaS._config = __webpack_require__(/*! ./config */ "../core/config.js");
BaaS._polyfill = __webpack_require__(/*! ./polyfill */ "../core/polyfill.js");
/**
 * 应用模块
 *
 * @param {BaaS.Module} fn
 * @memberof BaaS
 * @private
 */

BaaS.use = function (fn) {
  return fn(BaaS);
};

module.exports = BaaS;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../core/config.js":
/*!*************************!*\
  !*** ../core/config.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var API_HOST = 'https://api.myminapp.com';
var VERSION = 'v2.0.1-a';
var SDK_DOWNLOAD_PAGE = 'https://doc.minapp.com/js-sdk/download-sdk.html';
var API = {
  REGISTER_USERNAME: '/hserve/v2.1/register/username/',
  REGISTER_EMAIL: '/hserve/v2.1/register/email/',
  REGISTER_PHONE: '/hserve/v2.1/register/phone/',
  LOGIN_USERNAME: '/hserve/v2.1/login/username/',
  LOGIN_EMAIL: '/hserve/v2.1/login/email/',
  LOGIN_PHONE: '/hserve/v2.1/login/phone/',
  LOGIN_SMS: '/hserve/v2.1/login/sms/',
  EMAIL_VERIFY: '/hserve/v2.0/user/email-verify/',
  VERIFY_MOBILE: '/hserve/v2.1/sms-phone-verification/',
  ACCOUNT_INFO: '/hserve/v2.2/user/account/',
  PASSWORD_RESET: '/hserve/v2.0/user/password/reset/',
  ANONYMOUS_LOGIN: '/hserve/v2.0/login/anonymous/',
  LOGOUT: '/hserve/v2.0/session/destroy/',
  SERVER_TIME: '/hserve/v2.2/server/time/',
  NATIVE_OAUTH_AUTH: '/hserve/v2.3/idp/oauth/:provider/authenticate/',
  NATIVE_OAUTH_ASSOCIATION: '/hserve/v2.3/idp/oauth/:provider/user-association/',
  UPLOAD: '/hserve/v2.1/upload/',
  CLOUD_FUNCTION: '/hserve/v1/cloud-function/job/',
  USER_DETAIL: '/hserve/v2.0/user/info/:userID/',
  USER_LIST: '/hserve/v2.2/user/info/',
  UPDATE_USER: '/hserve/v2.4/user/info/',
  TABLE_LIST: '/hserve/v2.0/table/',
  TABLE_DETAIL: '/hserve/v2.0/table/:tableID/',
  RECORD_LIST: '/hserve/v2.4/table/:tableID/record/',
  QUERY_RECORD_LIST: '/hserve/v2.4/table/:tableID/record/',
  CREATE_RECORD_LIST: '/hserve/v2.4/table/:tableID/record/?enable_trigger=:enable_trigger',
  RECORD_DETAIL: '/hserve/v2.4/table/:tableID/record/:recordID/',
  CREATE_RECORD: '/hserve/v2.4/table/:tableID/record/',
  UPDATE_RECORD: '/hserve/v2.4/table/:tableID/record/:recordID/',
  UPDATE_RECORD_LIST: '/hserve/v2.4/table/:tableID/record/?limit=:limit&offset=:offset&where=:where&enable_trigger=:enable_trigger&return_total_count=:return_total_count',
  DELETE_RECORD: '/hserve/v2.4/table/:tableID/record/:recordID/',
  DELETE_RECORD_LIST: '/hserve/v2.4/table/:tableID/record/?limit=:limit&offset=:offset&where=:where&enable_trigger=:enable_trigger&return_total_count=:return_total_count',
  LAGECY_CONTENT_LIST: '/hserve/v1/content/detail/',
  CONTENT_LIST: '/hserve/v2.2/content/detail/',
  CONTENT_GROUP_LIST: '/hserve/v2.2/content/group/',
  CONTENT_DETAIL: '/hserve/v2.0/content/detail/:richTextID/',
  CONTENT_GROUP_DETAIL: '/hserve/v2.2/content/group/:contentGroupID/',
  CONTENT_CATEGORY_LIST: '/hserve/v2.2/content/category/',
  CONTENT_CATEGORY_DETAIL: '/hserve/v2.0/content/category/:categoryID/',
  FILE_DETAIL: '/hserve/v2.1/uploaded-file/:fileID/',
  FILE_LIST: '/hserve/v2.2/uploaded-file/',
  DELETE_FILE: '/hserve/v2.1/uploaded-file/:fileID/',
  DELETE_FILES: '/hserve/v2.1/uploaded-file/',
  FILE_CATEGORY_DETAIL: '/hserve/v1.3/file-category/:categoryID/',
  FILE_CATEGORY_LIST: '/hserve/v2.2/file-category/',
  CENSOR_IMAGE: '/hserve/v1.7/censor-image/',
  CENSOR_MSG: '/hserve/v1.7/censor-msg/',
  SEND_SMS_CODE: '/hserve/v2.2/sms-verification-code/',
  VERIFY_SMS_CODE: '/hserve/v1.8/sms-verification-code/verify/',
  PAY: '/hserve/v2.2/idp/pay/order/',
  ORDER: '/hserve/v2.0/idp/pay/order/:transactionID/',
  TEMPLATE_MESSAGE_EVENT_REPORT: '/hserve/v2.0/template-message/event-report/',
  WEB: {
    THIRD_PARTY_AUTH: '/hserve/v2.0/idp/:provider/redirect/',
    THIRD_PARTY_LOGIN: '/hserve/v2.0/idp/:provider/authenticate/',
    THIRD_PARTY_ASSOCIATE: '/hserve/v2.0/idp/:provider/user-association/'
  },
  WECHAT: {
    SILENT_LOGIN: '/hserve/v2.4/idp/wechat/silent-login/',
    AUTHENTICATE: '/hserve/v2.4/idp/wechat/authenticate/',
    USER_ASSOCIATE: '/hserve/v2.4/idp/wechat/user-associate/',
    TEMPLATE_MESSAGE: '/hserve/v2.0/template-message-ticket/',
    SUBSCRIBE_MESSAGE: '/hserve/v2.2/subscription-message/relationship-report/',
    DECRYPT: '/hserve/v1/wechat/decrypt/',
    WXACODE: '/hserve/v2.4/miniappcode/',
    CENSOR_IMAGE: '/hserve/v1.7/censor-image/',
    CENSOR_MSG: '/hserve/v1.7/censor-msg/',
    CENSOR_ASYNC: '/hserve/v2.2/async-censor/',
    JSSDK_CREDENTIALS: '/hserve/v2.4/idp/wechat/jssdk-credentials/'
  },
  QQ: {
    SILENT_LOGIN: '/hserve/v2.0/idp/qq/silent-login/',
    AUTHENTICATE: '/hserve/v2.0/idp/qq/authenticate/',
    USER_ASSOCIATE: '/hserve/v2.0/idp/qq/user-association/',
    TEMPLATE_MESSAGE: '/hserve/v2.0/template-message-ticket/',
    DECRYPT: '/hserve/v2.0/qq/decrypt/',
    CENSOR_IMAGE: '/hserve/v2.2/qq/censor-image/',
    CENSOR_MSG: '/hserve/v2.2/qq/censor-msg/'
  },
  BAIDU: {
    SILENT_LOGIN: '/hserve/v2.1/idp/baidu/silent-login/',
    AUTHENTICATE: '/hserve/v2.1/idp/baidu/authenticate/',
    USER_ASSOCIATE: '/hserve/v2.1/idp/baidu/user-association/',
    TEMPLATE_MESSAGE: '/hserve/v2.0/template-message-ticket/'
  },
  ALIPAY: {
    SILENT_LOGIN: '/hserve/v2.1/idp/alipay/silent-login/',
    AUTHENTICATE: '/hserve/v2.1/idp/alipay/authenticate/',
    USER_ASSOCIATE: '/hserve/v2.0/idp/alipay/user-associate/',
    TEMPLATE_MESSAGE: '/hserve/v2.0/template-message-ticket/',
    MINIAPP_QR_CODE: '/hserve/v2.0/idp/alipay/miniapp-qr-code/',
    CENSOR_MSG: '/hserve/v2.4/alipay/censor-msg/'
  },
  BYTEDANCE: {
    SILENT_LOGIN: '/hserve/v2.4/idp/bytedance/silent-login/',
    AUTHENTICATE: '/hserve/v2.4/idp/bytedance/authenticate/',
    USER_ASSOCIATE: '/hserve/v2.4/idp/bytedance/user-association/',
    TEMPLATE_MESSAGE: '/hserve/v2.0/template-message-ticket/',
    MINIAPP_QR_CODE: '/hserve/v2.4/idp/bytedance/miniapp-qr-code/'
  },
  JINGDONG: {
    SILENT_LOGIN: '/hserve/v2.4/idp/jd/silent-login/',
    AUTHENTICATE: '/hserve/v2.4/idp/jd/authenticate/',
    USER_ASSOCIATE: '/hserve/v2.4/idp/jd/user-association/'
  },
  VIDEO_SNAPSHOT: '/hserve/v1/media/video-snapshot/',
  M3U8_CONCAT: '/hserve/v1/media/m3u8-concat/',
  M3U8_CLIP: '/hserve/v1/media/m3u8-clip/',
  M3U8_META: '/hserve/v1/media/m3u8-meta/',
  VIDEO_AUDIO_META: '/hserve/v1/media/audio-video-meta/',
  GET_ASYNC_JOB_RESULT: '/hserve/v1/bulk-operation/:id/',
  LATEST_VERSION: '/hserve/v1/latest-sdk-version/'
};
var methodMapList = [{
  getUserInfo: {
    url: API.USER_DETAIL,
    defaultParams: {
      userID: ''
    }
  },
  getUserDetail: {
    url: API.USER_DETAIL
  },
  getUserList: {
    url: API.USER_LIST
  },
  updateUser: {
    url: API.UPDATE_USER,
    method: 'PUT'
  }
}, {
  getTableList: {
    url: API.TABLE_LIST
  },
  getTable: {
    url: API.TABLE_DETAIL
  },
  getRecordList: {
    url: API.RECORD_LIST
  },
  queryRecordList: {
    url: API.QUERY_RECORD_LIST
  },
  getRecord: {
    url: API.RECORD_DETAIL
  },
  createRecord: {
    url: API.CREATE_RECORD,
    method: 'POST'
  },
  createRecordList: {
    url: API.CREATE_RECORD_LIST,
    method: 'POST'
  },
  updateRecord: {
    url: API.UPDATE_RECORD,
    method: 'PUT'
  },
  updateRecordList: {
    url: API.UPDATE_RECORD_LIST,
    method: 'PUT'
  },
  deleteRecord: {
    url: API.DELETE_RECORD,
    method: 'DELETE'
  },
  deleteRecordList: {
    url: API.DELETE_RECORD_LIST,
    method: 'DELETE'
  }
}, {
  getContentList: {
    url: API.LAGECY_CONTENT_LIST
  },
  getContentListV2: {
    url: API.CONTENT_LIST
  },
  getContent: {
    url: API.CONTENT_DETAIL
  },
  getContentGroupList: {
    url: API.CONTENT_GROUP_LIST
  },
  getContentGroup: {
    url: API.CONTENT_GROUP_DETAIL
  },
  getContentCategoryList: {
    url: API.CONTENT_CATEGORY_LIST
  },
  getContentCategory: {
    url: API.CONTENT_CATEGORY_DETAIL
  }
}, {
  getFileDetail: {
    url: API.FILE_DETAIL
  },
  getFileList: {
    url: API.FILE_LIST
  },
  deleteFile: {
    url: API.DELETE_FILE,
    method: 'DELETE'
  },
  deleteFiles: {
    url: API.DELETE_FILES,
    method: 'DELETE'
  },
  getFileCategoryDetail: {
    url: API.FILE_CATEGORY_DETAIL
  },
  getFileCategoryList: {
    url: API.FILE_CATEGORY_LIST
  },
  sendSmsCode: {
    url: API.SEND_SMS_CODE,
    method: 'POST'
  },
  verifySmsCode: {
    url: API.VERIFY_SMS_CODE,
    method: 'POST'
  }
}, {
  getOrderList: {
    url: API.PAY
  }
}];
var RANDOM_OPTION = {
  max: 100
};
var requestParamsMap = {
  contentGroupID: 'content_group_id',
  categoryID: 'category_id',
  recordID: 'id',
  submissionType: 'submission_type',
  submissionValue: 'submission_value',
  categoryName: 'category_name',
  signatureID: 'signature_id'
};
module.exports = {
  API_HOST: API_HOST,
  API: API,
  AUTH_PREFIX: 'Hydrogen-r1',
  METHOD_MAP_LIST: methodMapList,
  DEBUG: false,
  RANDOM_OPTION: RANDOM_OPTION,
  REQUEST_PARAMS_MAP: requestParamsMap,
  SDK_DOWNLOAD_PAGE: SDK_DOWNLOAD_PAGE,

  /**
   * SDK 版本号
   *
   * @type string
   * @memberof BaaS._config
   */
  VERSION: VERSION,
  // package.json 中的 version 也需要同步修改。

  /**
   * websocket 相关配置
   */
  WS_HOST: 'ws://localhost:8001/',
  //TODO
  WS_PATH: 'ws/hydrogen/',
  WS_REALM: 'com.ifanrcloud',
  WS_BASE_TOPIC: 'com.ifanrcloud.schema_event'
};

/***/ }),

/***/ "../core/constants.js":
/*!****************************!*\
  !*** ../core/constants.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  QUERY_LIMITATION_DEFAULT: 20,
  // 存储信息
  STORAGE_KEY: {
    AUTH_TOKEN: 'auth_token',
    USERINFO: 'userinfo',
    UID: 'uid',
    OPENID: 'openid',
    UNIONID: 'unionid',
    IS_LOGINED_BAAS: 'is_logined_baas',
    IS_ANONYMOUS_USER: 'is_anonymous_user',
    EXPIRES_AT: 'session_expires_at',
    ALIPAY_USER_ID: 'alipay_user_id',
    LATEST_VERSION_CHECK_MILLISECONDS: 'latest_version_check_milliseconds',
    REPORT_TICKET_INVOKE_RECORD: 'report_ticket_invoke_record'
  },
  VERSION_MIN_CHECK_INTERVAL: '86400000',
  STATUS_CODE: {
    CREATED: 201,
    SUCCESS: 200,
    UPDATE: 200,
    PATCH: 200,
    DELETE: 204,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
  },
  UPLOAD: {
    UPLOAD_FILE_KEY: 'file',
    HEADER_AUTH: 'Authorization',
    HEADER_CLIENT: 'X-Hydrogen-Client-ID',
    HEADER_AUTH_VALUE: 'Hydrogen-r1 ',
    UA: 'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
  },
  USER_PROFILE_BUILD_IN_FIELDS: [// 原有内置字段
  'id', 'created_at', 'created_by', 'updated_at', 'country', 'nickname', 'province', 'city', 'language', 'openid', 'unionid', 'avatar', 'is_authorized', 'gender'],
  httpMethodCodeMap: {
    GET: 200,
    POST: 201,
    PUT: 200,
    PATCH: 200,
    DELETE: 204
  },
  LOG_LEVEL: {
    DEBUG: 'debug',
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error'
  },
  UPDATE_USERPROFILE_VALUE: {
    OVERWRITE: 'overwrite',
    SETNX: 'setnx',
    FALSE: 'false'
  },
  TICKET_REPORT_INVOKE_LIMIT: {
    MIN_INTERVAL_PRE_TIME: 1 * 1000,
    TIMES_LIMIT: {
      MAX_TIMES_PER_CYCLE: 20,
      CYCLE: 24 * 60 * 60 * 1000
    }
  },
  THIRD_PARTY_AUTH_MODE: {
    POPUP_IFRAME: 'popup-iframe',
    POPUP_WINDOW: 'popup-window',
    REDIRECT: 'redirect'
  },
  THIRD_PARTY_AUTH_STATUS: {
    SUCCESS: 'success',
    FAIL: 'fail'
  },
  THIRD_PARTY_AUTH_HANDLER: {
    LOGIN: 'login',
    ASSOCIATE: 'associate'
  },
  THIRD_PARTY_AUTH_PROVIDER: {
    WECHAT_MP: 'oauth-wechat-mp',
    WECHAT_WEB: 'oauth-wechat-web',
    WEIBO: 'oauth-weibo'
  },
  THIRD_PARTY_AUTH_URL_PARAM: {
    PROVIDER: 'provider',
    REFERER: 'referer',
    MODE: 'mode',
    DEBUG: 'debug',
    CREATE_USER: 'create_user',
    UPDATE_USER_PROFILE: 'update_userprofile',
    WECHAT_IFRAME_CONTENT_STYLE: 'wechat_iframe_content_style',
    HANDLER: 'handler',
    TOKEN: 'token',
    AUTH_RESULT: 'auth-result'
  },
  PLATFORM: {
    WECHAT: 'wechat_miniapp',
    ALIPAY: 'alipay_miniapp',
    QQ: 'qq_miniapp',
    BAIDU: 'baidu_miniapp',
    BYTEDANCE: 'bytedance_miniapp',
    JONGDONG: 'jd_miniapp'
  }
};

/***/ }),

/***/ "../core/getAsyncJobResult.js":
/*!************************************!*\
  !*** ../core/getAsyncJobResult.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

var utils = __webpack_require__(/*! ./utils */ "../core/utils/index.js");

var API = BaaS._config.API;
/**
 * 获取异步操作执行结果
 * @function
 * @name getAsyncJobResult
 * @memberof BaaS
 * @param {number} operationID 异步操作 ID
 * @return {Promise<BaaS.Response<any>>}
 */

module.exports = function getAsyncJobResult(id) {
  return BaaS._baasRequest({
    url: utils.format(API.GET_ASYNC_JOB_RESULT, {
      id: id
    })
  });
};

/***/ }),

/***/ "../core/getServerDate.js":
/*!********************************!*\
  !*** ../core/getServerDate.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

var API = BaaS._config.API;
/**
 * @typedef ServerDate
 * @memberof BaaS
 * @property {string} time 服务器时间 （ISO 8601）
 */

/**
 * 获取服务器时间
 * @function
 * @name getServerDate
 * @memberof BaaS
 * @return {Promise<BaaS.Response<BaaS.ServerDate>>}
 */

module.exports = function getServerDate() {
  return BaaS._baasRequest({
    url: API.SERVER_TIME
  });
};

/***/ }),

/***/ "../core/index.js":
/*!************************!*\
  !*** ../core/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constants = __webpack_require__(/*! ./constants */ "../core/constants.js");

var storage = __webpack_require__(/*! ./storage */ "../core/storage.js");

var storageAsync = __webpack_require__(/*! ./storageAsync */ "../core/storageAsync.js");

var HError = __webpack_require__(/*! ./HError */ "../core/HError.js");

var utils = __webpack_require__(/*! ./utils */ "../core/utils/index.js");

module.exports = function (BaaS) {
  /**
   * SDK 初始化
   *
   * @function init
   * @memberof BaaS
   * @param {string} clientID - 知晓云应用的 client id
   * @param {BaaS.InitOptions} [options] - 其他选项
   */
  BaaS.init = function (clientID) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$autoLogin = _ref.autoLogin,
        autoLogin = _ref$autoLogin === void 0 ? false : _ref$autoLogin,
        _ref$logLevel = _ref.logLevel,
        logLevel = _ref$logLevel === void 0 ? '' : _ref$logLevel,
        _ref$host = _ref.host,
        host = _ref$host === void 0 ? '' : _ref$host,
        ws_host = _ref.ws_host,
        env = _ref.env;

    if (!utils.isString(clientID)) {
      throw new HError(605);
    }

    if (logLevel) {
      utils.setLogLevel(logLevel);
    }

    if (ws_host) {
      BaaS._config.WS_HOST = ws_host;
    }

    BaaS._config.AUTO_LOGIN = autoLogin;
    BaaS._config.ENV = env;
    BaaS._config.CLIENT_ID = clientID;
    BaaS._config.API_HOST = host;
    BaaS._config.LOG_LEVEL = logLevel;

    BaaS._polyfill.checkLatestVersion();
  };
  /**
   * 获取 token
   *
   * @memberof BaaS
   * @return {string}
   */


  BaaS.getAuthToken = function () {
    return storageAsync.get(constants.STORAGE_KEY.AUTH_TOKEN);
  };
  /**
   * SDK 版本检查
   *
   * @memberof BaaS
   * @param {BaaS.CheckVersionOptions} options
   */


  BaaS.checkVersion = function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        platform = _ref2.platform,
        onSuccess = _ref2.onSuccess,
        onError = _ref2.onError;

    if (!onSuccess) {
      onSuccess = function onSuccess(res) {
        var statusCode = res.statusCode || res.status;

        if (parseInt(statusCode) !== constants.STATUS_CODE.SUCCESS) {
          onError && onError(res);
        } else {
          var result = utils.compareVersion(BaaS._config.VERSION, res.data[platform]);

          if (result === -1) {
            utils.log(constants.LOG_LEVEL.WARN, "\u3010\u77E5\u6653\u4E91 SDK \u66F4\u65B0\u63D0\u793A\u3011\u5F53\u524D SDK \u7248\u672C\u4E3A ".concat(BaaS._config.VERSION, " \u6700\u65B0\u7248\u672C\u4E3A ").concat(res.data[platform], "\uFF0C\u8BF7\u524D\u5F80 ").concat(BaaS._config.SDK_DOWNLOAD_PAGE, " \u4E0B\u8F7D\u3002"));
          }
        }
      };
    }

    var now = Date.now();
    return storageAsync.get(constants.STORAGE_KEY.LATEST_VERSION_CHECK_MILLISECONDS).then(function (lastCheckMilliseconds) {
      if (lastCheckMilliseconds && lastCheckMilliseconds - now <= constants.VERSION_MIN_CHECK_INTERVAL) {
        return;
      }

      storageAsync.set(constants.STORAGE_KEY.LATEST_VERSION_CHECK_MILLISECONDS, now);
      return BaaS.request({
        url: BaaS._config.API.LATEST_VERSION
      }).then(onSuccess, onError);
    });
  };
  /**
   * 清除会话（退出登录）
   *
   * @memberof BaaS
   */


  BaaS.clearSession = function () {
    return Promise.all([// 清除客户端认证 Token
    storageAsync.set(constants.STORAGE_KEY.AUTH_TOKEN, ''), // 清除 BaaS 登录状态
    storageAsync.set(constants.STORAGE_KEY.IS_LOGINED_BAAS, ''), storageAsync.set(constants.STORAGE_KEY.IS_ANONYMOUS_USER, ''), // 清除用户信息
    storageAsync.set(constants.STORAGE_KEY.USERINFO, ''), storageAsync.set(constants.STORAGE_KEY.UID, '')]);
  }; // 遍历 METHOD_MAP_LIST，对每个 methodMap 调用 doCreateRequestMethod(methodMap)


  BaaS._createRequestMethod = function () {
    var methodMapList = BaaS._config.METHOD_MAP_LIST;
    methodMapList.map(function (v) {
      utils.doCreateRequestMethod(v);
    });
  }; // 暴露指定 BaaS 方法


  BaaS.auth = __webpack_require__(/*! ./auth */ "../core/auth.js");
  BaaS.ContentGroup = __webpack_require__(/*! ./ContentGroup */ "../core/ContentGroup.js");
  BaaS.File = __webpack_require__(/*! ./File */ "../core/File.js");
  BaaS.FileCategory = __webpack_require__(/*! ./FileCategory */ "../core/FileCategory.js");
  BaaS.GeoPoint = __webpack_require__(/*! ./GeoPoint */ "../core/GeoPoint.js");
  BaaS.GeoPolygon = __webpack_require__(/*! ./GeoPolygon */ "../core/GeoPolygon.js");
  BaaS.invokeFunction = __webpack_require__(/*! ./invokeFunction */ "../core/invokeFunction.js");
  BaaS.invoke = __webpack_require__(/*! ./invokeFunction */ "../core/invokeFunction.js");
  BaaS.Query = __webpack_require__(/*! ./Query */ "../core/Query.js");
  BaaS.storage = storage;
  BaaS.storageAsync = storageAsync;
  BaaS.TableObject = __webpack_require__(/*! ./TableObject */ "../core/TableObject.js");
  BaaS.User = __webpack_require__(/*! ./User */ "../core/User.js");
  BaaS.Order = __webpack_require__(/*! ./Order */ "../core/Order.js");
  BaaS.getAsyncJobResult = __webpack_require__(/*! ./getAsyncJobResult */ "../core/getAsyncJobResult.js");
  BaaS.getServerDate = __webpack_require__(/*! ./getServerDate */ "../core/getServerDate.js"); // 初始化 BaaS 逻辑，添加更多的方法到 BaaS 对象
};

/***/ }),

/***/ "../core/invokeFunction.js":
/*!*********************************!*\
  !*** ../core/invokeFunction.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

var HError = __webpack_require__(/*! ./HError */ "../core/HError.js");

var API = BaaS._config.API;
/**
 * 调用云函数
 * @name invoke
 * @function
 * @memberof BaaS
 * @param {string} functionName 云函数名称
 * @param {object} [params] 参数
 * @param {boolean} [sync] 是否同步运行
 * @return {Promise<any>}
 */

var invokeFunction = function invokeFunction(functionName, params) {
  var sync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!functionName) {
    throw new HError(605);
  }

  var data = {
    function_name: functionName,
    sync: sync
  };

  if (params !== undefined) {
    data.data = params;
  }

  return BaaS._baasRequest({
    url: API.CLOUD_FUNCTION,
    method: 'POST',
    data: data
  }).then(function (res) {
    return res.data;
  });
};

module.exports = invokeFunction;

/***/ }),

/***/ "../core/polyfill.js":
/*!***************************!*\
  !*** ../core/polyfill.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 默认取 window.WebSocket
var _WebSocket = null;

if (typeof window !== 'undefined' && window.WebSocket) {
  _WebSocket = window.WebSocket;
}

module.exports = {
  getAPIHost: function getAPIHost() {
    var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

    return BaaS._config.API_HOST || "https://".concat(BaaS._config.CLIENT_ID, ".myminapp.com");
  },
  SDK_TYPE: 'file',
  CLIENT_PLATFORM: 'UNKNOWN',
  checkLatestVersion: function checkLatestVersion() {
    return null;
  },
  WebSocket: _WebSocket
};

/***/ }),

/***/ "../core/storage.js":
/*!**************************!*\
  !*** ../core/storage.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

var storageKeyPrefix = 'ifx_baas_';
/**
 * 本地存储
 * @namespace storage
 * @memberof BaaS
 */

module.exports = {
  /**
   * 存入数据
   * @memberof BaaS.storage
   * @param {string} key 键
   * @param {any} value 值
   */
  set: function set(key, value) {
    BaaS._polyfill.setStorageSync(storageKeyPrefix + key, value);
  },

  /**
   * 读取数据
   * @memberof BaaS.storage
   * @param {string} key 键
   * @return {any}
   */
  get: function get(key) {
    return BaaS._polyfill.getStorageSync(storageKeyPrefix + key);
  }
};

/***/ }),

/***/ "../core/storageAsync.js":
/*!*******************************!*\
  !*** ../core/storageAsync.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

var storageKeyPrefix = 'ifx_baas_';
/**
 * 本地存储
 * @namespace storageAsync
 * @memberof BaaS
 */

module.exports = {
  /**
   * 存入数据
   * @memberof BaaS.storageAsync
   * @param {string} key 键
   * @param {Promise<any>} value 值
   */
  set: function set(key, value) {
    return BaaS._polyfill.setStorageAsync(storageKeyPrefix + key, value);
  },

  /**
   * 读取数据
   * @memberof BaaS.storageAsync
   * @param {string} key 键
   * @return {Promise<any>}
   */
  get: function get(key) {
    return BaaS._polyfill.getStorageAsync(storageKeyPrefix + key);
  }
};

/***/ }),

/***/ "../core/tplMsgStatsReport.js":
/*!************************************!*\
  !*** ../core/tplMsgStatsReport.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

var constants = __webpack_require__(/*! ./constants */ "../core/constants.js");

var utils = __webpack_require__(/*! ./utils */ "../core/utils/index.js");

var tpl_msg_stats_report_queue = [];
var isReporting = false;

function pushStats(statsId) {
  utils.log(constants.LOG_LEVEL.DEBUG, "<receive-stats> ".concat(statsId));

  if (!tpl_msg_stats_report_queue.includes(statsId)) {
    tpl_msg_stats_report_queue.push(statsId);
    utils.log(constants.LOG_LEVEL.DEBUG, "<push-stats> ".concat(statsId, ", [").concat(tpl_msg_stats_report_queue, "]"));
  }
}

function reportStatsFromHeadOfQueue() {
  var statsIdToReport = tpl_msg_stats_report_queue[0];
  utils.log(constants.LOG_LEVEL.DEBUG, "<report-stats> [".concat(statsIdToReport, "]: begin"));
  var platform = constants.PLATFORM.WECHAT;

  switch (BaaS._polyfill.CLIENT_PLATFORM) {
    case 'ALIPAY':
      platform = constants.PLATFORM.ALIPAY;
      break;

    case 'QQ':
      platform = constants.PLATFORM.QQ;
      break;

    case 'BAIDU':
      platform = constants.PLATFORM.BAIDU;
      break;

    case 'BYTEDANCE':
      platform = constants.PLATFORM.BYTEDANCE;
      break;

    default:
      platform = constants.PLATFORM.WECHAT;
  }

  return BaaS._baasRequest({
    url: BaaS._config.API.TEMPLATE_MESSAGE_EVENT_REPORT,
    method: 'POST',
    data: {
      stats_id: statsIdToReport,
      platform: platform
    }
  }).then(function () {
    utils.log(constants.LOG_LEVEL.DEBUG, "<report-stats> [".concat(statsIdToReport, "]: finish"));
    tpl_msg_stats_report_queue.shift();
    if (!tpl_msg_stats_report_queue.length) return;
    return reportStatsFromHeadOfQueue();
  });
}

function reportStats() {
  // 如果已经在上报或队列中没有内容，则不执行上报
  if (isReporting || !tpl_msg_stats_report_queue.length) return Promise.resolve(); // 如果用户未登录，则不执行上报

  return Promise.all([BaaS.storageAsync.get(constants.STORAGE_KEY.AUTH_TOKEN), utils.isSessionExpired()]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        token = _ref2[0],
        expired = _ref2[1];

    if (!token || expired) return;
    isReporting = true;
    utils.log(constants.LOG_LEVEL.DEBUG, '<report-stats> begin');
    return reportStatsFromHeadOfQueue().then(function () {
      utils.log(constants.LOG_LEVEL.DEBUG, '<report-stats> finish');
      isReporting = false;
    }).catch(function (err) {
      utils.log(constants.LOG_LEVEL.DEBUG, '<report-stats> fail', err, tpl_msg_stats_report_queue);
      isReporting = false;
      throw err;
    });
  });
}

module.exports = {
  pushStats: pushStats,
  reportStats: reportStats,
  getQueue: function getQueue() {
    return tpl_msg_stats_report_queue.concat();
  }
};

/***/ }),

/***/ "../core/upload.js":
/*!*************************!*\
  !*** ../core/upload.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

var constants = __webpack_require__(/*! ./constants */ "../core/constants.js");

var utils = __webpack_require__(/*! ./utils */ "../core/utils/index.js"); // get the upload config for upyun from sso


var getUploadFileConfig = function getUploadFileConfig(fileName, metaData) {
  metaData.filename = fileName;
  return BaaS._baasRequest({
    url: BaaS._polyfill.getAPIHost().replace(/\/$/, '') + '/' + BaaS._config.API.UPLOAD.replace(/^\//, ''),
    method: 'POST',
    data: metaData
  });
};

var getUploadHeaders = function getUploadHeaders() {
  return BaaS.getAuthToken().then(function (authToken) {
    return {
      'Authorization': constants.UPLOAD.HEADER_AUTH_VALUE + authToken,
      'X-Hydrogen-Client-Version': BaaS._config.VERSION,
      'X-Hydrogen-Client-Platform': utils.getSysPlatform(),
      'X-Hydrogen-Client-ID': BaaS._config.CLIENT_ID,
      'User-Agent': constants.UPLOAD.UA
    };
  });
};

module.exports = {
  getUploadFileConfig: getUploadFileConfig,
  getUploadHeaders: getUploadHeaders
};

/***/ }),

/***/ "../core/utils/getBytedanceAppName.js":
/*!********************************************!*\
  !*** ../core/utils/getBytedanceAppName.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function getBytedanceAppName() {
  if (typeof tt === 'undefined') return '';
  var sysInfo = tt.getSystemInfoSync();
  return sysInfo.appName.toLowerCase();
};

/***/ }),

/***/ "../core/utils/getLimitationWithEnableTigger.js":
/*!******************************************************!*\
  !*** ../core/utils/getLimitationWithEnableTigger.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constants = __webpack_require__(/*! ../constants */ "../core/constants.js");
/*
 * @param {number} limit
 * @param {boolean} enableTrigger
 * @returns {number}
 */


module.exports = function getLimitationWithEnableTigger(limit, enableTrigger) {
  // 设置了 limit，直接返回
  if (limit !== null && typeof limit !== 'undefined') {
    return limit;
  } // 如果触发触发器，则默认添加限制


  if (enableTrigger) {
    return constants.QUERY_LIMITATION_DEFAULT;
  } // 不触发发触发器，则默认不限制


  return undefined;
};

/***/ }),

/***/ "../core/utils/getResendPayload.js":
/*!*****************************************!*\
  !*** ../core/utils/getResendPayload.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var constants = __webpack_require__(/*! ../constants */ "../core/constants.js");

var getCurrentUserInfoUrl = function getCurrentUserInfoUrl(BaaS, uid) {
  var getId = function getId() {
    if (uid) {
      return Promise.resolve(uid);
    }

    return BaaS.storageAsync.get(constants.STORAGE_KEY.UID);
  };

  return getId().then(function (id) {
    return BaaS._config.API.USER_DETAIL.replace(/:userID/, id);
  });
};

module.exports = function getResendPayload(BaaS, payload, uid) {
  return getCurrentUserInfoUrl(BaaS, uid).then(function (currentUserInfoUrl) {
    var getUrl; // 确认需要重新发起请求的 url 是否跟 uid 匹配（匹配的 uid 会在 url 中）

    if (payload.url === currentUserInfoUrl) {
      getUrl = getCurrentUserInfoUrl(BaaS);
    } else {
      getUrl = Promise.resolve(payload.url);
    }

    return getUrl.then(function (url) {
      return _extends({}, payload, {
        url: url
      });
    });
  });
};

/***/ }),

/***/ "../core/utils/index.js":
/*!******************************!*\
  !*** ../core/utils/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var storageAsync = __webpack_require__(/*! ../storageAsync */ "../core/storageAsync.js");

var constants = __webpack_require__(/*! ../constants */ "../core/constants.js");

var BaaS = __webpack_require__(/*! ../baas */ "../core/baas.js");

var HError = __webpack_require__(/*! ../HError */ "../core/HError.js");

var ticketReportThrottle = __webpack_require__(/*! ./ticketReportThrottle */ "../core/utils/ticketReportThrottle.js");

var log = __webpack_require__(/*! ./log */ "../core/utils/log.js"); // 增加 includes polyfill，避免低版本的系统报错
// copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#Polyfill


if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function value(searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      } // 1. Let O be ? ToObject(this value).


      var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

      var len = o.length >>> 0; // 3. If len is 0, return false.

      if (len === 0) {
        return false;
      } // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)


      var n = fromIndex | 0; // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.

      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
      } // 7. Repeat, while k < len


      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        } // c. Increase k by 1.


        k++;
      } // 8. Return false


      return false;
    }
  });
}
/**
 * 获取系统 Platform 信息
 * @private
 * @return {String}
 */


var getSysPlatform = function getSysPlatform() {
  var platform = 'UNKNOWN';

  try {
    var res = BaaS._polyfill.getSystemInfoSync();

    platform = res.platform;
  } catch (e) {// pass for now
  }

  return platform;
};
/**
 * 转换 API 参数
 * @private
 * @param  {String} url    API URL
 * @param  {Object} params API 参数
 * @return {String}        转换参数后的 API URL
 */


var format = function format(url, params) {
  params = params || {};

  var _loop = function _loop(key) {
    // 1. 先替换 queryString 中的参数
    var regForQueryString = new RegExp('(&?)' + key + '=:' + key, 'g');
    var value = encodeURIComponent(params[key]);

    if (value !== 'undefined') {
      url = url.replace(regForQueryString, function (match, p1) {
        return p1 + key + '=' + value;
      });
    } else {
      url = url.replace(regForQueryString, '');
    } // 2. 替换 pathname 中的参数


    var regForPathname = new RegExp(':' + key, 'g');
    url = url.replace(regForPathname, encodeURIComponent(params[key]));
  };

  for (var key in params) {
    _loop(key);
  }

  return url.replace(/([^:])\/\//g, function (m, m1) {
    return m1 + '/';
  });
};

var getFileNameFromPath = function getFileNameFromPath(path) {
  var index = path.lastIndexOf('/');
  return path.slice(index + 1);
};
/**
 * 对 RegExp 类型的变量解析出不含左右斜杠和 flag 的正则字符串和 flags
 * @private
 * @param  {RegExp} regExp
 * @return {Array} 包含正则字符串和 flags
 */


var parseRegExp = function parseRegExp(regExp) {
  var result = [];
  var regExpString = regExp.toString();
  var lastIndex = regExpString.lastIndexOf('/');
  result.push(regExpString.substring(1, lastIndex));

  if (lastIndex !== regExpString.length - 1) {
    result.push(regExpString.substring(lastIndex + 1));
  }

  return result;
};
/**
 * 将查询参数 (?categoryID=xxx) 替换为服务端可接受的格式 (?category_id=xxx) eg. categoryID => category_id
 * @private
 */


var replaceQueryParams = function replaceQueryParams() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var requestParamsMap = BaaS._config.REQUEST_PARAMS_MAP;

  var copiedParams = _extends({}, params);

  Object.keys(params).map(function (key) {
    Object.keys(requestParamsMap).map(function (mapKey) {
      if (key.startsWith(mapKey)) {
        var newKey = key.replace(mapKey, requestParamsMap[mapKey]);
        delete copiedParams[key];
        copiedParams[newKey] = params[key];
      }
    });
  });
  return copiedParams;
};

var extractErrorMsg = function extractErrorMsg(res) {
  var errorMsg = '';

  if (res.statusCode === 404) {
    errorMsg = 'not found';
  } else if (res.data.error_msg) {
    errorMsg = res.data.error_msg;
  } else if (res.data.message) {
    errorMsg = res.data.message;
  }

  return errorMsg;
};

var isString = function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]';
};

var isArray = function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
};

var isObject = function isObject(value) {
  var type = _typeof(value);

  return value != null && type == 'object';
};

var isFunction = function isFunction(value) {
  var type = _typeof(value);

  return value != null && type == 'function';
};

var extend = function extend() {
  return _extends.apply(void 0, arguments);
}; // 目前仅支持对象或数字的拷贝


var cloneDeep = function cloneDeep(source) {
  if (source === undefined || source === null) return Object.create(null);
  var target = isArray(source) ? [] : Object.create(Object.getPrototypeOf(source));

  for (var keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && _typeof(source[keys]) === 'object') {
        target[keys] = isArray(source[keys]) ? [] : {};
        target[keys] = cloneDeep(source[keys]);
      } else {
        target[keys] = source[keys];
      }
    }
  }

  return target;
};
/**
 * session 是否已经过期，若不存在 EXPIRES_AT 缓存，则当做已过期
 * @private
 * @return {boolean} expired
 */


function isSessionExpired() {
  return storageAsync.get(constants.STORAGE_KEY.EXPIRES_AT).then(function (expired_at) {
    return Date.now() / 1000 >= (expired_at || 0);
  });
}
/**
 * 把 URL 中的参数占位替换为真实数据，同时将这些数据从 params 中移除， params 的剩余参数传给 data eg. xxx/:tabelID/xxx => xxx/1001/xxx
 * @private
 * @param  {Object} params 参数对象, 包含传给 url 的参数，也包含传给 data 的参数
 */


var excludeParams = function excludeParams(URL, params) {
  URL.replace(/:(\w*)/g, function (match, m1) {
    if (params[m1] !== undefined) {
      delete params[m1];
    }
  });
  return params;
};
/**
 * 根据 methodMap 创建对应的 BaaS Method
 * @private
 * @param  {Object} methodMap 按照指定格式配置好的方法配置映射表
 */


var doCreateRequestMethod = function doCreateRequestMethod(methodMap) {
  for (var k in methodMap) {
    if (methodMap.hasOwnProperty(k)) {
      BaaS[k] = function (k) {
        var methodItem = methodMap[k];
        return function (objects) {
          var newObjects = cloneDeep(objects);
          var method = methodItem.method || 'GET';

          if (methodItem.defaultParams) {
            var defaultParamsCopy = cloneDeep(methodItem.defaultParams);
            newObjects = _extends(defaultParamsCopy, newObjects);
          } // 替换 url 中的变量为用户输入的数据，如 tableID, recordID


          var url = format(methodItem.url, newObjects);
          var data = {};

          if (newObjects.data) {
            // 存在 data 属性的请求参数，只有 data 部分作为请求数据发送到后端接口
            data = newObjects.data;
          } else {
            // 从用户输入的数据中，剔除 tableID, recordID 等用于 url 的数据
            data = excludeParams(methodItem.url, newObjects); // 将用户输入的数据中，部分变量名替换为后端可接受的名字，如 categoryID 替换为 category_id

            data = replaceQueryParams(data);
          }

          return BaaS._baasRequest({
            url: url,
            method: method,
            data: data
          });
        };
      }(k);
    }
  }
};
/**
 * 设置 BaaS.request 请求头
 * @private
 * @param  {Object} header 自定义请求头
 * @return {Object}        扩展后的请求
 */


var mergeRequestHeader = function mergeRequestHeader(header) {
  var extendHeader = {
    'X-Hydrogen-Client-ID': BaaS._config.CLIENT_ID,
    'X-Hydrogen-Client-Version': BaaS._config.VERSION,
    'X-Hydrogen-Client-Platform': BaaS._polyfill.CLIENT_PLATFORM,
    'X-Hydrogen-Client-SDK-Type': BaaS._polyfill.SDK_TYPE
  };

  if (BaaS._config.ENV) {
    header['X-Hydrogen-Env-ID'] = BaaS._config.ENV;
  }

  return BaaS.getAuthToken().then(function (authToken) {
    if (authToken) {
      extendHeader['Authorization'] = BaaS._config.AUTH_PREFIX + ' ' + authToken;
    }

    return _extends({}, header || {}, extendHeader);
  });
};
/**
 * 处理 request.then 回调中出现 40x, 50x 的情况
 * @private
 * @param res
 * @return {*}
 */


var validateStatusCode = function validateStatusCode(res) {
  var status = parseInt(res.status || res.statusCode);

  if (status >= 200 && status < 300) {
    return res;
  } else {
    throw new HError(status, extractErrorMsg(res));
  }
};
/**
 * 对于一个返回 promise 的函数，rateLimit 可以合并同一时间多次调用为单次调用
 * @private
 * @param fn
 * @return {function(): *}
 */


var rateLimit = function rateLimit(fn) {
  var promise = null;
  return function () {
    if (!promise) {
      promise = fn.apply(this, arguments).then(function (res) {
        promise = null;
        return res;
      }, function (err) {
        promise = null;
        throw err;
      });
    }

    return promise;
  };
};

var fnUnsupportedHandler = function fnUnsupportedHandler() {
  throw new HError(611);
};
/**
 * 对比版本号
 * @private
 * @param {string} versionStr1
 * @param {string} versionStr2
 * @return {number}
 * @description 若 versionStr1 大于 versionStr2，返回 1，小于 返回 -1，相等返回 0。
 * 注意该函数将会忽略 a(lpha)、b(eta) 等后缀,如 v2.0.0a 会被当做 2.0.0 处理
 */


var compareVersion = function compareVersion(versionStr1, versionStr2) {
  try {
    if (typeof versionStr1 !== 'string' || typeof versionStr2 !== 'string') return 0; // v1.1 ===> 1.1
    // ver2.2 ===> 2.2

    versionStr1 = versionStr1.replace(/^[^0-9]/, '');
    versionStr2 = versionStr2.replace(/^[^0-9]/, '');
    var versionArray1 = versionStr1.split('.');
    var versionArray2 = versionStr2.split('.');
    var len = Math.max(versionArray1.length, versionArray2.length);

    for (var i = 0; i < len; i++) {
      var num1 = versionArray1[i] ? parseInt(versionArray1[i]) : 0;
      var num2 = versionArray2[i] ? parseInt(versionArray2[i]) : 0;

      if (num1 > num2) {
        return 1;
      } else if (num1 < num2) {
        return -1;
      }
    }

    return 0;
  } catch (e) {
    return 0;
  }
};

var makeReportTicketParam = function makeReportTicketParam(formID) {
  if (!formID) {
    throw new HError(605);
  }

  var paramsObj = {};
  paramsObj['submission_type'] = 'form_id';
  paramsObj['submission_value'] = formID;
  return paramsObj;
};

var getUpdateUserProfileParam = function getUpdateUserProfileParam(value) {
  var result;
  Object.keys(constants.UPDATE_USERPROFILE_VALUE).forEach(function (key) {
    if (value === constants.UPDATE_USERPROFILE_VALUE[key]) {
      result = value;
    }
  });

  if (!result) {
    result = constants.UPDATE_USERPROFILE_VALUE.SETNX;
  }

  return result;
};

module.exports = {
  mergeRequestHeader: mergeRequestHeader,
  log: log.log,
  setLogLevel: log.setLogLevel,
  format: format,
  getSysPlatform: getSysPlatform,
  getFileNameFromPath: getFileNameFromPath,
  parseRegExp: parseRegExp,
  replaceQueryParams: replaceQueryParams,
  extractErrorMsg: extractErrorMsg,
  isArray: isArray,
  isString: isString,
  isObject: isObject,
  isFunction: isFunction,
  cloneDeep: cloneDeep,
  isSessionExpired: isSessionExpired,
  excludeParams: excludeParams,
  doCreateRequestMethod: doCreateRequestMethod,
  validateStatusCode: validateStatusCode,
  rateLimit: rateLimit,
  fnUnsupportedHandler: fnUnsupportedHandler,
  compareVersion: compareVersion,
  makeReportTicketParam: makeReportTicketParam,
  extend: extend,
  getUpdateUserProfileParam: getUpdateUserProfileParam,
  ticketReportThrottle: ticketReportThrottle,
  getLimitationWithEnableTigger: __webpack_require__(/*! ./getLimitationWithEnableTigger */ "../core/utils/getLimitationWithEnableTigger.js"),
  getResendPayload: __webpack_require__(/*! ./getResendPayload */ "../core/utils/getResendPayload.js"),
  withRetry: __webpack_require__(/*! ./withRetry */ "../core/utils/withRetry.js"),
  getBytedanceAppName: __webpack_require__(/*! ./getBytedanceAppName */ "../core/utils/getBytedanceAppName.js")
};

/***/ }),

/***/ "../core/utils/log.js":
/*!****************************!*\
  !*** ../core/utils/log.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constants = __webpack_require__(/*! ../constants */ "../core/constants.js");

var consoleLogLevel = __webpack_require__(/*! console-log-level */ "../node_modules/console-log-level/index.js");

var createLogger = function createLogger(level) {
  return consoleLogLevel({
    level: level
  });
};

var logger = createLogger(constants.LOG_LEVEL.ERROR);

var setLogLevel = function setLogLevel(level) {
  Object.keys(constants.LOG_LEVEL).forEach(function (key) {
    if (constants.LOG_LEVEL[key] === level) {
      logger = createLogger(level);
    }
  });
};
/**
 * 日志记录
 * @private
 * @param  {String} level 级别
 * @param  {String} msg 日志信息
 */


var log = function log(level, text) {
  logger[level] && logger[level](text);
};

module.exports = {
  log: log,
  setLogLevel: setLogLevel
};

/***/ }),

/***/ "../core/utils/ticketReportThrottle.js":
/*!*********************************************!*\
  !*** ../core/utils/ticketReportThrottle.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constants = __webpack_require__(/*! ../constants */ "../core/constants.js");

var storageAsync = __webpack_require__(/*! ../storageAsync */ "../core/storageAsync.js");

var log = __webpack_require__(/*! ./log */ "../core/utils/log.js").log;

var initReportTicketInvokeRecord = function initReportTicketInvokeRecord() {
  return {
    invokeTimes: 1,
    timestamp: Date.now()
  };
};

var isInvalidInvokeRecord = function isInvalidInvokeRecord(invokeRecord) {
  return isNaN(invokeRecord.invokeTimes) || isNaN(invokeRecord.timestamp);
};

var lastInvokeTime;

var ticketReportThrottle = function ticketReportThrottle(ticketReportFn) {
  return function (formID) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$enableThrottle = _ref.enableThrottle,
        enableThrottle = _ref$enableThrottle === void 0 ? false : _ref$enableThrottle;

    if (!enableThrottle) {
      return ticketReportFn(formID);
    }

    var LOG_LEVEL = constants.LOG_LEVEL,
        TICKET_REPORT_INVOKE_LIMIT = constants.TICKET_REPORT_INVOKE_LIMIT,
        STORAGE_KEY = constants.STORAGE_KEY;
    var now = Date.now();
    log(LOG_LEVEL.DEBUG, "<ticket-report> last: ".concat(lastInvokeTime, ", now: ").concat(now));
    if (lastInvokeTime && now - lastInvokeTime <= TICKET_REPORT_INVOKE_LIMIT.MIN_INTERVAL_PRE_TIME) return Promise.resolve(); // 上次调用时间与当前时刻对比，未超过 5s 则调用失败

    return storageAsync.get(STORAGE_KEY.REPORT_TICKET_INVOKE_RECORD).then(function (invokeRecord) {
      var isOverdue = invokeRecord && now - invokeRecord.timestamp > TICKET_REPORT_INVOKE_LIMIT.TIMES_LIMIT.CYCLE;
      log(LOG_LEVEL.DEBUG, "<ticket-report> record: ".concat(JSON.stringify(invokeRecord), ", now: ").concat(now));
      if (invokeRecord && invokeRecord.invokeTimes >= TICKET_REPORT_INVOKE_LIMIT.TIMES_LIMIT.MAX_TIMES_PER_CYCLE && !isOverdue) return Promise.resolve(); // 当调用次数超过 10 次，且第一次调用时间距离此刻未超过 24h，则调用失败
      // 更新 storage 中 REPORT_TICKET_INVOKE_RECORD 的数据

      if (!invokeRecord || isOverdue || isInvalidInvokeRecord(invokeRecord)) {
        invokeRecord = initReportTicketInvokeRecord();
      } else {
        invokeRecord.invokeTimes += 1;
      } // 调用 ticket report 方法


      if (ticketReportFn && typeof ticketReportFn === 'function') {
        lastInvokeTime = now;
        storageAsync.set(STORAGE_KEY.REPORT_TICKET_INVOKE_RECORD, invokeRecord);
        return ticketReportFn(formID).then(function (res) {
          log(LOG_LEVEL.DEBUG, "<ticket-report> invoke success ".concat(Date.now() - now, "ms"));
          return res;
        }).catch(function (err) {
          invokeRecord.invokeTimes -= 1;
          storageAsync.set(STORAGE_KEY.REPORT_TICKET_INVOKE_RECORD, invokeRecord);
          log(LOG_LEVEL.DEBUG, "<ticket-report> invoke fail ".concat(Date.now() - now, "ms err: ").concat(err));
          throw err;
        });
      } else {
        log(LOG_LEVEL.DEBUG, '<ticket-report> invoke fail');
        log(LOG_LEVEL.ERROR, new TypeError('"ticketReportFn" must be Function type'));
      }
    });
  };
};

module.exports = ticketReportThrottle;

/***/ }),

/***/ "../core/utils/withRetry.js":
/*!**********************************!*\
  !*** ../core/utils/withRetry.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constants = __webpack_require__(/*! ../constants */ "../core/constants.js");

var log = __webpack_require__(/*! ./log */ "../core/utils/log.js").log;

var shouldRetry = function shouldRetry(err, matchMessage) {
  if (!err) return false;
  if (!matchMessage) return true;

  if (Object.prototype.toString.call(matchMessage) === '[object RegExp]') {
    return matchMessage.test(err.message);
  }

  return err.message === matchMessage;
};
/*
 * 如果 fn 抛出错误，则继续重试调用。
 * 重试次数不超过 maxCount - 1 次。
 * 如果不指定 matchMessage，则抛出任何错误都重试。
 * 如果指定了 matchMessage，则只重试特定的错误。
 *
 * @params {function} fn 需要重试的方法
 * @params {object} options 其他选项
 * @params {object} options.context 执行上下文
 * @params {number} options.maxCount 最大执行次数
 * @params {string|RegExp} options.matchMessage 错误信息匹配规则
 * @return {*} 返回调用 fn 的返回值
 */


var withRetry = function withRetry(fn) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      _ref$maxCount = _ref.maxCount,
      maxCount = _ref$maxCount === void 0 ? 10 : _ref$maxCount,
      matchMessage = _ref.matchMessage;

  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var remaindCount = maxCount;

    var retry = function retry() {
      var handleError = function handleError(err) {
        if (shouldRetry(err, matchMessage) && remaindCount > 1) {
          log(constants.LOG_LEVEL.DEBUG, "<withRetry> \"".concat(fn.name, "\" called fail, remaindCount: ").concat(remaindCount, ", err: ").concat(err));
          remaindCount -= 1;
          return retry();
        } else {
          throw err;
        }
      };

      try {
        var result = fn.apply(context, args);

        if (Object.prototype.toString.call(result) === '[object Promise]') {
          return result.catch(handleError);
        } else {
          return result;
        }
      } catch (err) {
        return handleError(err);
      }
    };

    return retry();
  };
};

module.exports = withRetry;

/***/ }),

/***/ "../core/wamp/connection.js":
/*!**********************************!*\
  !*** ../core/wamp/connection.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(/*! ./session */ "../core/wamp/session.js"),
    Session = _require.Session;

var util = __webpack_require__(/*! ./util */ "../core/wamp/util.js");

var Connection =
/*#__PURE__*/
function () {
  function Connection(options) {
    _classCallCheck(this, Connection);

    util.assert(options.url !== undefined, 'options.url missing');
    util.assert(options.create_transport !== undefined, 'create_transport missing');
    util.assert(typeof options.create_transport === 'function', 'create_transport must be a function');
    util.assert(options.getAuthTokenQuerystring !== undefined, 'getAuthTokenQuerystring missing');
    util.assert(typeof options.getAuthTokenQuerystring === 'function', 'getAuthTokenQuerystring must be a function');
    this._options = options;
    this._create_transport = this._options.create_transport;
    this._getAuthTokenQuerystring = this._options.getAuthTokenQuerystring;

    this._shouldTryAgain = this._options.shouldTryAgain || function () {
      return false;
    }; // Deferred factory
    //


    this._defer = util.deferred_factory(); // WAMP session
    //

    this._session = null;
    this._session_close_reason = null;
    this._session_close_message = null; // automatic reconnection configuration
    //
    // enable automatic reconnect if host is unreachable

    this._retry_if_unreachable = util.opt(this._options.retry_if_unreachable, true); // maximum number of reconnection attempts

    this._max_retries = util.opt(this._options.max_retries, 15); // initial retry delay in seconds

    this._initial_retry_delay = util.opt(this._options.initial_retry_delay, 1.5); // maximum seconds between reconnection attempts

    this._max_retry_delay = this._options.max_retry_delay || 300; // the growth factor applied to the retry delay on each retry cycle

    this._retry_delay_growth = this._options.retry_delay_growth || 1.5; // the SD of a Gaussian to jitter the delay on each retry cycle
    // as a fraction of the mean

    this._retry_delay_jitter = this._options.retry_delay_jitter || 0.1; // reconnection tracking
    //
    // total number of successful connections

    this._connect_successes = 0; // controls if we should try to reconnect

    this._retry = false; // current number of reconnect cycles we went through

    this._retry_count = 0; // the current retry delay

    this._retry_delay = this._initial_retry_delay; // flag indicating if we are currently in a reconnect cycle

    this._is_retrying = false; // when retrying, this is the timer object returned from window.setTimeout()

    this._retry_timer = null;
  }

  _createClass(Connection, [{
    key: "_autoreconnect_reset_timer",
    value: function _autoreconnect_reset_timer() {
      clearTimeout(this._retry_timer);
      this._retry_timer = null;
    }
  }, {
    key: "_autoreconnect_reset",
    value: function _autoreconnect_reset() {
      this._autoreconnect_reset_timer();

      this._retry_count = 0;
      this._retry_delay = this._initial_retry_delay;
      this._is_retrying = false;
    }
  }, {
    key: "_autoreconnect_advance",
    value: function _autoreconnect_advance() {
      if (this._retry_delay_jitter) {
        this._retry_delay_jitter = util.rand_normal(this._retry_delay, this._retry_delay * this._retry_delay_jitter);
      }

      if (this._retry_delay > this._max_retry_delay) {
        this._retry_delay = this._max_retry_delay;
      }

      this._retry_count += 1;
      var res;

      if (this._retry && (this._max_retries === -1 || this._retry_count <= this._max_retries)) {
        res = {
          count: this._retry_count,
          delay: this._retry_delay,
          will_retry: true
        };
      } else {
        res = {
          count: null,
          delay: null,
          will_retry: false
        };
      } // retry delay growth for next retry cycle


      if (this._retry_delay_growth) {
        this._retry_delay = this._retry_delay * this._retry_delay_growth;
      }

      return res;
    }
  }, {
    key: "open",
    value: function open() {
      var _this = this;

      if (this._transport) {
        throw new Error('connection already open (or opening)');
      }

      this._autoreconnect_reset();

      this._retry = true;

      var original_retry = function original_retry(q) {
        // create a WAMP transport
        try {
          _this._transport = _this._create_transport({
            url: _this._options.url + '?' + q
          });
        } catch (e) {
          util.handle_error(_this._options.on_internal_error, e);
        }

        if (!_this._transport) {
          // failed to create a WAMP transport
          _this._retry = false;

          if (_this.onclose) {
            var details = {
              reason: null,
              message: null,
              retry_delay: null,
              retry_count: null,
              will_retry: false
            };

            _this.onclose('unsupported', details);
          }

          return;
        } // create a new WAMP session using the WebSocket connection as transport


        _this._session = new Session(_this._transport, _this._defer, _this._options.onchallenge, _this._options.on_user_error, _this._options.on_internal_error);
        _this._session_close_reason = null;
        _this._session_close_message = null;

        _this._transport.onopen = function () {
          // reset auto-reconnect timer and tracking
          if (!_this._options.state.retried) {
            _this._autoreconnect_reset();
          } // util successful connections


          _this._connect_successes += 1; // start WAMP session

          _this._session.join(_this._options.realm, _this._options.authmethods, _this._options.authid, _this._options.authextra);
        };

        _this._session.onjoin = function (details) {
          if (_this.onopen) {
            try {
              // forward transport info ..
              details.transport = _this._transport.info;

              _this.onopen(_this._session, details);
            } catch (e) {
              util.handle_error(_this._options.on_user_error, e, 'exception raised from app code while firing Connection.onopen()');
            }
          }
        }; //
        // ... WAMP session is now attached to realm.
        //


        _this._session.onleave = function (reason, details) {
          _this._session_close_reason = reason;
          _this._session_close_message = details.message || '';

          if (!_this._shouldTryAgain(reason)) {
            _this._retry = false;
          } else {
            _this._options.state.retried = true;
          }

          _this._transport.close();

          if (_this.onabort) {
            _this.onabort(reason, details);
          }
        };

        _this._transport.onclose = function (evt) {
          // console.log('websocket==>', evt)
          // remove any pending reconnect timer
          _this._autoreconnect_reset_timer();

          _this._transport = null;
          var reason = null;

          if (_this._connect_successes === 0) {
            reason = 'unreachable';

            if (!_this._retry_if_unreachable) {
              _this._retry = false;
            }
          } else if (!evt.wasClean) {
            reason = 'lost';
          } else {
            reason = 'closed';
          }

          var next_retry = _this._autoreconnect_advance();

          var details = {
            reason: _this._session_close_reason,
            message: _this._session_close_message,
            retry_delay: next_retry.delay,
            retry_count: next_retry.count,
            will_retry: next_retry.will_retry
          };
          util.warn('connection closed', reason, details); // fire app code handler
          //

          var stop_retrying;

          if (_this.onclose) {
            try {
              // Connection.onclose() allows to cancel any subsequent retry attempt
              stop_retrying = _this.onclose(reason, details);
            } catch (e) {
              util.handle_error(_this._options.on_user_error, e, 'exception raised from app code while firing Connection.onclose()');
            }
          } // reset session info
          //


          if (_this._session) {
            _this._session._id = null;
            _this._session = null;
            _this._session_close_reason = null;
            _this._session_close_message = null;
          } // automatic reconnection
          //


          if (_this._retry && !stop_retrying) {
            if (next_retry.will_retry) {
              _this._is_retrying = true;
              util.warn('auto-reconnecting in ' + next_retry.delay + 's ..');
              _this._retry_timer = setTimeout(function () {
                return retry();
              }, next_retry.delay * 1000);
            } else {
              util.warn('giving up trying to auto-reconnect!');
            }
          } else {
            util.warn('auto-reconnect disabled!', _this._retry, stop_retrying);
          }
        };
      };

      var retry = function retry() {
        _this._getAuthTokenQuerystring().then(function (q) {
          original_retry(q);
        }).catch(function (e) {
          util.handle_error(_this._options.on_internal_error, e);
        });
      };

      retry();
    }
  }, {
    key: "close",
    value: function close(reason, message) {
      if (!this._transport && !this._is_retrying) {
        throw new Error('connection already closed');
      }

      this._retry = false;

      if (this._session && this._session.isOpen) {
        this._session.leave(reason, message);
      } else if (this._transport) {
        this._transport.close();
      }
    }
  }, {
    key: "defer",
    get: function get() {
      return this._defer;
    }
  }, {
    key: "session",
    get: function get() {
      return this._session;
    }
  }, {
    key: "isOpen",
    get: function get() {
      if (this._session && this._session.isOpen) return true;
      return false;
    }
  }, {
    key: "isConnected",
    get: function get() {
      if (this._transport) return true;
      return false;
    }
  }, {
    key: "transport",
    get: function get() {
      if (this._transport) {
        return this._transport;
      }

      return {
        info: {
          type: 'none',
          url: null,
          protocal: null
        }
      };
    }
  }, {
    key: "isRetrying",
    get: function get() {
      return this._is_retrying;
    }
  }]);

  return Connection;
}();

module.exports = {
  Connection: Connection
};

/***/ }),

/***/ "../core/wamp/index.js":
/*!*****************************!*\
  !*** ../core/wamp/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! ../baas */ "../core/baas.js");

var HError = __webpack_require__(/*! ../HError */ "../core/HError.js");

var subscriber = __webpack_require__(/*! ./subscriber */ "../core/wamp/subscriber.js");

function resolveTopic(_ref) {
  var schema_name = _ref.schema_name,
      event_type = _ref.event_type;
  return "".concat(BaaS._config.WS_BASE_TOPIC, ".").concat(schema_name, ".on_").concat(event_type);
}

function resolveOptions(_ref2) {
  var where = _ref2.where;

  if (where) {
    return {
      where: where
    };
  }

  return {};
} // 自定义触发自动重连
// 如果是因为 token 过期，则主动调用一下获取当前用户的接口，刷新 token


function shouldTryAgain(reason) {
  if (reason === 'wamp.error.not_authorized') {
    return true;
  }

  return false;
}

function errorify(onerror) {
  var lookup = {
    'unreachable': 601,
    'wamp.error.not_authorized': 603
  };
  return function (err) {
    var message = err.message;
    var reason = err.reason;
    var details = err.details;

    if (details && details.reason) {
      reason = details.reason;
    }

    if (details && details.message) {
      message = details.message;
    }

    if (!message && reason) {
      message = reason;
    }

    var code = lookup[reason] || 0;
    var h = new HError(code, message);
    h.reason = reason;
    h.details = details;
    onerror(h);
  };
}

function getAuthTokenQuerystring() {
  var qs = [];
  qs.push("x-hydrogen-client-id=".concat(BaaS._config.CLIENT_ID));

  if (BaaS._config.ENV) {
    qs.push("x-hydrogen-env-id=".concat(BaaS._config.ENV));
  }

  return BaaS.getAuthToken().then(function (authToken) {
    if (authToken) {
      qs.push("authorization=".concat(encodeURIComponent(BaaS._config.AUTH_PREFIX + ' ' + authToken)));
    }

    return qs.join('&');
  });
}

var _subscribe = null;

var subscribe = function subscribe(_ref3) {
  var schema_name = _ref3.schema_name,
      where = _ref3.where,
      event_type = _ref3.event_type,
      onerror = _ref3.onerror,
      oninit = _ref3.oninit,
      onevent = _ref3.onevent;

  if (!_subscribe) {
    _subscribe = subscriber({
      WebSocket: BaaS._polyfill.WebSocket,
      url: BaaS._config.WS_HOST + BaaS._config.WS_PATH,
      realm: BaaS._config.WS_REALM,
      resolveOptions: resolveOptions,
      resolveTopic: resolveTopic,
      getAuthTokenQuerystring: getAuthTokenQuerystring,
      shouldTryAgain: shouldTryAgain
    });
  }

  onerror = onerror || function () {};

  oninit = oninit || function () {};

  onevent = onevent || function () {};

  return _subscribe({
    schema_name: schema_name,
    where: where,
    event_type: event_type,
    onerror: errorify(onerror),
    oninit: oninit,
    onevent: onevent
  });
};

module.exports = {
  subscribe: subscribe
};

/***/ }),

/***/ "../core/wamp/serializer.js":
/*!**********************************!*\
  !*** ../core/wamp/serializer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var util = __webpack_require__(/*! ./util */ "../core/wamp/util.js");

var JSONSerializer =
/*#__PURE__*/
function () {
  function JSONSerializer(replacer, reviver) {
    _classCallCheck(this, JSONSerializer);

    this.replacer = replacer;
    this.reviver = reviver;
    this.SERIALIZER_ID = 'json';
    this.BINARY = false;
  }

  _createClass(JSONSerializer, [{
    key: "serialize",
    value: function serialize(obj) {
      try {
        var payload = JSON.stringify(obj, this.replacer);
        return payload;
      } catch (e) {
        util.warn('JSON encoding error', e);
        throw e;
      }
    }
  }, {
    key: "unserialize",
    value: function unserialize(payload) {
      try {
        var obj = JSON.parse(payload, this.reviver);
        return obj;
      } catch (e) {
        util.warn('JSON decoding error', e);
        throw e;
      }
    }
  }]);

  return JSONSerializer;
}();

module.exports = {
  JSONSerializer: JSONSerializer
};

/***/ }),

/***/ "../core/wamp/session.js":
/*!*******************************!*\
  !*** ../core/wamp/session.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var util = __webpack_require__(/*! ./util */ "../core/wamp/util.js"); // WAMP "Advanced Profile" support in AutobahnJS per role
//


var WAMP_FEATURES = {
  caller: {
    features: {
      caller_identification: true,
      //call_timeout: true,
      call_canceling: true,
      progressive_call_results: true
    }
  },
  callee: {
    features: {
      caller_identification: true,
      //call_trustlevels: true,
      pattern_based_registration: true,
      shared_registration: true,
      //call_timeout: true,
      //call_canceling: true,
      progressive_call_results: true,
      registration_revocation: true
    }
  },
  publisher: {
    features: {
      publisher_identification: true,
      subscriber_blackwhite_listing: true,
      publisher_exclusion: true
    }
  },
  subscriber: {
    features: {
      publisher_identification: true,
      //publication_trustlevels: true,
      pattern_based_subscription: true,
      subscription_revocation: true //event_history: true,

    }
  }
};

var Invocation = function Invocation(procedure, progress, caller, caller_authid, caller_authrole) {
  var self = this;
  self.procedure = procedure;
  self.progress = progress;
  self.caller = caller;
  self.caller_authid = caller_authid;
  self.caller_authrole = caller_authrole;
};

var Event = function Event(publication, topic, publisher, publisher_authid, publisher_authrole, retained, forward_for) {
  var self = this;
  self.publication = publication;
  self.topic = topic;
  self.publisher = publisher;
  self.publisher_authid = publisher_authid;
  self.publisher_authrole = publisher_authrole;
  self.retained = retained;
  self.forward_for = forward_for;
};

var Result = function Result(args, kwargs) {
  var self = this;
  self.args = args || [];
  self.kwargs = kwargs || {};
};

var Error = function Error(error, args, kwargs) {
  var self = this;
  self.error = error;
  self.args = args || [];
  self.kwargs = kwargs || {};
};

var Subscription = function Subscription(topic, handler, options, session, id) {
  var self = this;
  self.topic = topic;
  self.handler = handler;
  self.options = options || {};
  self.session = session;
  self.id = id;
  self.active = true; // this will fire when the handler is unsubscribed

  self._on_unsubscribe = session._defer();

  if (self._on_unsubscribe.promise.then) {
    // whenjs has the actual user promise in an attribute
    self.on_unsubscribe = self._on_unsubscribe.promise;
  } else {
    self.on_unsubscribe = self._on_unsubscribe;
  }
};

Subscription.prototype.unsubscribe = function () {
  var self = this;
  return self.session.unsubscribe(self);
};

var Registration = function Registration(procedure, endpoint, options, session, id) {
  var self = this;
  self.procedure = procedure;
  self.endpoint = endpoint;
  self.options = options || {};
  self.session = session;
  self.id = id;
  self.active = true; // this will fire when the endpoint is unregistered

  self._on_unregister = session._defer();

  if (self._on_unregister.promise.then) {
    // whenjs has the actual user promise in an attribute
    self.on_unregister = self._on_unregister.promise;
  } else {
    self.on_unregister = self._on_unregister;
  }
};

Registration.prototype.unregister = function () {
  var self = this;
  return self.session.unregister(self);
};

var Publication = function Publication(id) {
  var self = this;
  self.id = id;
};

var MSG_TYPE = {
  HELLO: 1,
  WELCOME: 2,
  ABORT: 3,
  CHALLENGE: 4,
  AUTHENTICATE: 5,
  GOODBYE: 6,
  HEARTBEAT: 7,
  ERROR: 8,
  PUBLISH: 16,
  PUBLISHED: 17,
  SUBSCRIBE: 32,
  SUBSCRIBED: 33,
  UNSUBSCRIBE: 34,
  UNSUBSCRIBED: 35,
  EVENT: 36,
  CALL: 48,
  CANCEL: 49,
  RESULT: 50,
  REGISTER: 64,
  REGISTERED: 65,
  UNREGISTER: 66,
  UNREGISTERED: 67,
  INVOCATION: 68,
  INTERRUPT: 69,
  YIELD: 70
};

var Session = function Session(socket, defer, onchallenge, on_user_error, on_internal_error) {
  var self = this; // the transport connection (WebSocket object)

  self._socket = socket; // the Deferred factory to use

  self._defer = defer; // the WAMP authentication challenge handler

  self._onchallenge = onchallenge; // custom error handlers

  self._on_user_error = on_user_error;
  self._on_internal_error = on_internal_error; // the WAMP session ID

  self._id = null; // the WAMP realm joined

  self._realm = null; // the WAMP features in use

  self._features = null; // closing state

  self._goodbye_sent = false;
  self._transport_is_closing = false; // outstanding requests;

  self._publish_reqs = {};
  self._subscribe_reqs = {};
  self._unsubscribe_reqs = {};
  self._call_reqs = {};
  self._register_reqs = {};
  self._unregister_reqs = {}; // subscriptions in place;

  self._subscriptions = {}; // registrations in place;

  self._registrations = {}; // incoming invocations;

  self._invocations = {}; // prefix shortcuts for URIs

  self._prefixes = {}; // the defaults for 'disclose_me'

  self._caller_disclose_me = false;
  self._publisher_disclose_me = false;

  self._send_wamp = function (msg) {
    util.debug(msg); // forward WAMP message to be sent to WAMP transport

    self._socket.send(msg);
  };

  self._protocol_violation = function (reason) {
    self._socket.close(3002, 'protocol violation: ' + reason);

    util.handle_error(self._on_internal_error, Error('failing transport due to protocol violation: ' + reason));
  };

  self._MESSAGE_MAP = {};
  self._MESSAGE_MAP[MSG_TYPE.ERROR] = {};
  var next_req_id = 0;

  self._new_request_id = function () {
    if (next_req_id < 9007199254740992) {
      next_req_id += 1;
    } else {
      next_req_id = 1;
    }

    return next_req_id;
  };

  self._process_SUBSCRIBED = function (msg) {
    //
    // process SUBSCRIBED reply to SUBSCRIBE
    //
    var request = msg[1];
    var subscription = msg[2];

    if (request in self._subscribe_reqs) {
      var r = self._subscribe_reqs[request];
      var d = r[0];
      var topic = r[1];
      var handler = r[2];
      var options = r[3];

      if (!(subscription in self._subscriptions)) {
        self._subscriptions[subscription] = [];
      }

      var sub = new Subscription(topic, handler, options, self, subscription);

      self._subscriptions[subscription].push(sub);

      d.resolve(sub);
      delete self._subscribe_reqs[request];
    } else {
      self._protocol_violation('SUBSCRIBED received for non-pending request ID ' + request);
    }
  };

  self._MESSAGE_MAP[MSG_TYPE.SUBSCRIBED] = self._process_SUBSCRIBED;

  self._process_SUBSCRIBE_ERROR = function (msg) {
    //
    // process ERROR reply to SUBSCRIBE
    //
    var request = msg[2];

    if (request in self._subscribe_reqs) {
      var details = msg[3];
      var error = new Error(msg[4], msg[5], msg[6]);
      error.reason = msg[4];
      error.details = details;
      var r = self._subscribe_reqs[request];
      var d = r[0];
      d.reject(error);
      delete self._subscribe_reqs[request];
    } else {
      self._protocol_violation('SUBSCRIBE-ERROR received for non-pending request ID ' + request);
    }
  };

  self._MESSAGE_MAP[MSG_TYPE.ERROR][MSG_TYPE.SUBSCRIBE] = self._process_SUBSCRIBE_ERROR;

  self._process_UNSUBSCRIBED = function (msg) {
    //
    // process UNSUBSCRIBED reply to UNSUBSCRIBE
    //
    var request = msg[1];

    if (request in self._unsubscribe_reqs) {
      var r = self._unsubscribe_reqs[request];
      var d = r[0];
      var subscription_id = r[1];

      if (subscription_id in self._subscriptions) {
        var subs = self._subscriptions[subscription_id]; // the following should actually be NOP, since UNSUBSCRIBE was
        // only sent when subs got empty

        for (var i = 0; i < subs.length; ++i) {
          subs[i].active = false;

          subs[i]._on_unsubscribe.resolve();
        }

        delete self._subscriptions[subscription_id];
      }

      d.resolve(true);
      delete self._unsubscribe_reqs[request];
    } else {
      if (request === 0) {
        // router actively revoked our subscription
        //
        var details = msg[2];
        var _subscription_id = details.subscription;
        var reason = details.reason;

        if (_subscription_id in self._subscriptions) {
          var _subs = self._subscriptions[_subscription_id];

          for (var _i = 0; _i < _subs.length; ++_i) {
            _subs[_i].active = false;

            _subs[_i]._on_unsubscribe.resolve(reason);
          }

          delete self._subscriptions[_subscription_id];
        } else {
          self._protocol_violation('non-voluntary UNSUBSCRIBED received for non-existing subscription ID ' + _subscription_id);
        }
      } else {
        self._protocol_violation('UNSUBSCRIBED received for non-pending request ID ' + request);
      }
    }
  };

  self._MESSAGE_MAP[MSG_TYPE.UNSUBSCRIBED] = self._process_UNSUBSCRIBED;

  self._process_UNSUBSCRIBE_ERROR = function (msg) {
    //
    // process ERROR reply to UNSUBSCRIBE
    //
    var request = msg[2];

    if (request in self._unsubscribe_reqs) {
      var details = msg[3];
      var error = new Error(msg[4], msg[5], msg[6]);
      error.reason = msg[4];
      error.details = details;
      var r = self._unsubscribe_reqs[request];
      var d = r[0]; // let subscription = r[1]

      d.reject(error);
      delete self._unsubscribe_reqs[request];
    } else {
      self._protocol_violation('UNSUBSCRIBE-ERROR received for non-pending request ID ' + request);
    }
  };

  self._MESSAGE_MAP[MSG_TYPE.ERROR][MSG_TYPE.UNSUBSCRIBE] = self._process_UNSUBSCRIBE_ERROR;

  self._process_PUBLISHED = function (msg) {
    //
    // process PUBLISHED reply to PUBLISH
    //
    var request = msg[1];
    var publication = msg[2];

    if (request in self._publish_reqs) {
      var r = self._publish_reqs[request];
      var d = r[0]; // let options = r[1]

      var pub = new Publication(publication);
      d.resolve(pub);
      delete self._publish_reqs[request];
    } else {
      self._protocol_violation('PUBLISHED received for non-pending request ID ' + request);
    }
  };

  self._MESSAGE_MAP[MSG_TYPE.PUBLISHED] = self._process_PUBLISHED;

  self._process_PUBLISH_ERROR = function (msg) {
    //
    // process ERROR reply to PUBLISH
    //
    var request = msg[2];

    if (request in self._publish_reqs) {
      // let details = msg[3]
      var error = new Error(msg[4], msg[5], msg[6]);
      var r = self._publish_reqs[request];
      var d = r[0]; // let options = r[1]

      d.reject(error);
      delete self._publish_reqs[request];
    } else {
      self._protocol_violation('PUBLISH-ERROR received for non-pending request ID ' + request);
    }
  };

  self._MESSAGE_MAP[MSG_TYPE.ERROR][MSG_TYPE.PUBLISH] = self._process_PUBLISH_ERROR;

  self._process_EVENT = function (msg) {
    //
    // process EVENT message
    //
    // [EVENT, SUBSCRIBED.Subscription|id, PUBLISHED.Publication|id, Details|dict, PUBLISH.Arguments|list, PUBLISH.ArgumentsKw|dict]
    var subscription = msg[1];

    if (subscription in self._subscriptions) {
      var publication = msg[2];
      var details = msg[3];
      var args = msg[4] || [];
      var kwargs = msg[5] || {};
      var subs = self._subscriptions[subscription]; // we want to provide the subscription topic to the handler, and may need to get this
      // from one of the subscription handler objects attached to the subscription
      // since for non-pattern subscriptions this is not sent over the wire

      var ed = new Event(publication, details.topic || subs[0] && subs[0].topic, details.publisher, details.publisher_authid, details.publisher_authrole, details.retained || false, details.forward_for);

      for (var i = 0; i < subs.length; ++i) {
        var sub = subs[i];

        try {
          sub.handler(args, kwargs, ed, sub);
        } catch (e) {
          util.handle_error(self._on_user_error, e, 'Exception raised in event handler:');
        }
      }
    } else {
      self._protocol_violation('EVENT received for non-subscribed subscription ID ' + subscription);
    }
  };

  self._MESSAGE_MAP[MSG_TYPE.EVENT] = self._process_EVENT;

  self._process_REGISTERED = function (msg) {
    //
    // process REGISTERED reply to REGISTER
    //
    var request = msg[1];
    var registration = msg[2];

    if (request in self._register_reqs) {
      var r = self._register_reqs[request];
      var d = r[0];
      var procedure = r[1];
      var endpoint = r[2];
      var options = r[3];
      var reg = new Registration(procedure, endpoint, options, self, registration);
      self._registrations[registration] = reg;
      d.resolve(reg);
      delete self._register_reqs[request];
    } else {
      self._protocol_violation('REGISTERED received for non-pending request ID ' + request);
    }
  };

  self._MESSAGE_MAP[MSG_TYPE.REGISTERED] = self._process_REGISTERED;

  self._process_REGISTER_ERROR = function (msg) {
    //
    // process ERROR reply to REGISTER
    //
    var request = msg[2];

    if (request in self._register_reqs) {
      // let details = msg[3]
      var error = new Error(msg[4], msg[5], msg[6]);
      var r = self._register_reqs[request];
      var d = r[0];
      d.reject(error);
      delete self._register_reqs[request];
    } else {
      self._protocol_violation('REGISTER-ERROR received for non-pending request ID ' + request);
    }
  };

  self._MESSAGE_MAP[MSG_TYPE.ERROR][MSG_TYPE.REGISTER] = self._process_REGISTER_ERROR;

  self._process_UNREGISTERED = function (msg) {
    //
    // process UNREGISTERED reply to UNREGISTER
    //
    var request = msg[1];

    if (request in self._unregister_reqs) {
      var r = self._unregister_reqs[request];
      var d = r[0];
      var registration = r[1];

      if (registration.id in self._registrations) {
        delete self._registrations[registration.id];
      }

      registration.active = false;
      d.resolve();
      delete self._unregister_reqs[request];
    } else {
      if (request === 0) {
        // the router actively revoked our registration
        //
        var details = msg[2];
        var registration_id = details.registration;
        var reason = details.reason;

        if (registration_id in self._registrations) {
          var _registration = self._registrations[registration_id];
          _registration.active = false;

          _registration._on_unregister.resolve(reason);

          delete self._registrations[registration_id];
        } else {
          self._protocol_violation('non-voluntary UNREGISTERED received for non-existing registration ID ' + registration_id);
        }
      } else {
        self._protocol_violation('UNREGISTERED received for non-pending request ID ' + request);
      }
    }
  };

  self._MESSAGE_MAP[MSG_TYPE.UNREGISTERED] = self._process_UNREGISTERED;

  self._process_UNREGISTER_ERROR = function (msg) {
    //
    // process ERROR reply to UNREGISTER
    //
    var request = msg[2];

    if (request in self._unregister_reqs) {
      // let details = msg[3]
      var error = new Error(msg[4], msg[5], msg[6]);
      var r = self._unregister_reqs[request];
      var d = r[0]; // let registration = r[1]

      d.reject(error);
      delete self._unregister_reqs[request];
    } else {
      self._protocol_violation('UNREGISTER-ERROR received for non-pending request ID ' + request);
    }
  };

  self._MESSAGE_MAP[MSG_TYPE.ERROR][MSG_TYPE.UNREGISTER] = self._process_UNREGISTER_ERROR;

  self._process_RESULT = function (msg) {
    //
    // process RESULT reply to CALL
    //
    var request = msg[1];

    if (request in self._call_reqs) {
      var details = msg[2];
      var args = msg[3] || [];
      var kwargs = msg[4] || {}; // maybe wrap complex result:

      var result = null;

      if (args.length > 1 || Object.keys(kwargs).length > 0) {
        // wrap complex result is more than 1 positional result OR
        // non-empty keyword result
        result = new Result(args, kwargs);
      } else if (args.length > 0) {
        // single positional result
        result = args[0];
      }

      var r = self._call_reqs[request];
      var d = r[0];
      var options = r[1];

      if (details.progress) {
        if (options && options.receive_progress) {
          d.notify(result);
        }
      } else {
        d.resolve(result);
        delete self._call_reqs[request];
      }
    } else {
      self._protocol_violation('CALL-RESULT received for non-pending request ID ' + request);
    }
  };

  self._MESSAGE_MAP[MSG_TYPE.RESULT] = self._process_RESULT;

  self._process_CALL_ERROR = function (msg) {
    //
    // process ERROR reply to CALL
    //
    var request = msg[2];

    if (request in self._call_reqs) {
      // let details = msg[3]
      var error = new Error(msg[4], msg[5], msg[6]);
      var r = self._call_reqs[request];
      var d = r[0]; // let options = r[1]

      d.reject(error);
      delete self._call_reqs[request];
    } else {
      self._protocol_violation('CALL-ERROR received for non-pending request ID ' + request);
    }
  };

  self._MESSAGE_MAP[MSG_TYPE.ERROR][MSG_TYPE.CALL] = self._process_CALL_ERROR;

  self._process_INVOCATION = function (msg) {
    //
    // process INVOCATION message
    //
    // [INVOCATION, Request|id, REGISTERED.Registration|id, Details|dict, CALL.Arguments|list, CALL.ArgumentsKw|dict]
    //
    var request = msg[1];
    var registration = msg[2];
    var details = msg[3]; // receive_progress
    // timeout
    // caller

    if (registration in self._registrations) {
      var reg = self._registrations[registration];
      var args = msg[4] || [];
      var kwargs = msg[5] || {}; // create progress function for invocation
      //

      var progress = null;

      if (details.receive_progress) {
        progress = function progress(args, kwargs) {
          var progress_msg = [MSG_TYPE.YIELD, request, {
            progress: true
          }];
          args = args || [];
          kwargs = kwargs || {};
          var kwargs_len = Object.keys(kwargs).length;

          if (args.length || kwargs_len) {
            progress_msg.push(args);

            if (kwargs_len) {
              progress_msg.push(kwargs);
            }
          }

          self._send_wamp(progress_msg);
        };
      } // we want to provide the regitration procedure to the handler and may
      // need to get this from the registration object attached to the registration
      // since for non-pattern registrations this is not sent over the wire


      var cd = new Invocation(details.procedure || reg.procedure, progress, details.caller, details.caller_authid, details.caller_authrole); // We use the following whenjs call wrapper, which automatically
      // wraps a plain, non-promise value in a (immediately resolved) promise
      //
      // See: https://github.com/cujojs/when/blob/master/docs/api.md#fncall
      //

      util.promisify(reg.endpoint)(args, kwargs, cd).then(function (res) {
        // construct YIELD message
        // FIXME: Options
        //
        var reply = [MSG_TYPE.YIELD, request, {}];

        if (res instanceof Result) {
          var kwargs_len = Object.keys(res.kwargs).length;

          if (res.args.length || kwargs_len) {
            reply.push(res.args);

            if (kwargs_len) {
              reply.push(res.kwargs);
            }
          }
        } else {
          reply.push([res]);
        } // send WAMP message
        //


        self._send_wamp(reply);
      }, function (err) {
        // construct ERROR message
        // [ERROR, REQUEST.Type|int, REQUEST.Request|id, Details|dict, Error|uri, Arguments|list, ArgumentsKw|dict]
        var reply = [MSG_TYPE.ERROR, MSG_TYPE.INVOCATION, request, {}];

        if (err instanceof Error) {
          reply.push(err.error);
          var kwargs_len = Object.keys(err.kwargs).length;

          if (err.args.length || kwargs_len) {
            reply.push(err.args);

            if (kwargs_len) {
              reply.push(err.kwargs);
            }
          }
        } else {
          reply.push('wamp.error.runtime_error');
          reply.push([err]);
        } // send WAMP message
        //


        self._send_wamp(reply);

        util.handle_error(self._on_user_error, err, 'Exception raised in invocation handler:');
      });
    } else {
      self._protocol_violation('INVOCATION received for non-registered registration ID ' + request);
    }
  };

  self._MESSAGE_MAP[MSG_TYPE.INVOCATION] = self._process_INVOCATION; // callback fired by WAMP transport on receiving a WAMP message
  //

  self._socket.onmessage = function (msg) {
    var msg_type = msg[0]; // WAMP session not yet open
    //

    if (!self._id) {
      // the first message must be WELCOME, ABORT or CHALLENGE ..
      //
      if (msg_type === MSG_TYPE.WELCOME) {
        self._id = msg[1]; // determine actual set of advanced features that can be used
        //

        var rf = msg[2];
        self._features = {};

        if (rf.roles.broker) {
          // "Basic Profile" is mandatory
          self._features.subscriber = {};
          self._features.publisher = {}; // fill in features that both peers support

          if (rf.roles.broker.features) {
            for (var att in WAMP_FEATURES.publisher.features) {
              self._features.publisher[att] = WAMP_FEATURES.publisher.features[att] && rf.roles.broker.features[att];
            }

            for (var _att in WAMP_FEATURES.subscriber.features) {
              self._features.subscriber[_att] = WAMP_FEATURES.subscriber.features[_att] && rf.roles.broker.features[_att];
            }
          }
        }

        if (rf.roles.dealer) {
          // "Basic Profile" is mandatory
          self._features.caller = {};
          self._features.callee = {}; // fill in features that both peers support

          if (rf.roles.dealer.features) {
            for (var _att2 in WAMP_FEATURES.caller.features) {
              self._features.caller[_att2] = WAMP_FEATURES.caller.features[_att2] && rf.roles.dealer.features[_att2];
            }

            for (var _att3 in WAMP_FEATURES.callee.features) {
              self._features.callee[_att3] = WAMP_FEATURES.callee.features[_att3] && rf.roles.dealer.features[_att3];
            }
          }
        }

        if (self.onjoin) {
          self.onjoin(msg[2]);
        }
      } else if (msg_type === MSG_TYPE.ABORT) {
        var details = msg[1];
        var reason = msg[2];

        if (self.onleave) {
          self.onleave(reason, details);
        }
      } else if (msg_type === MSG_TYPE.CHALLENGE) {
        if (self._onchallenge) {
          var method = msg[1];
          var extra = msg[2];
          util.promisify(self._onchallenge)(self, method, extra).then(function (signature) {
            var msg;

            if (typeof signature === 'string') {
              msg = [MSG_TYPE.AUTHENTICATE, signature, {}];
            } else if (_typeof(signature) === 'object') {
              var signatureString = signature[0];
              var authExtra = signature[1];
              msg = [MSG_TYPE.AUTHENTICATE, signatureString, authExtra];
            }

            self._send_wamp(msg);
          }, function (err) {
            util.handle_error(self._on_user_error, err, 'onchallenge() raised: ');
            var msg = [MSG_TYPE.ABORT, {
              message: 'sorry, I cannot authenticate (onchallenge handler raised an exception)'
            }, 'wamp.error.cannot_authenticate'];

            self._send_wamp(msg);

            self._socket.close(3000);
          });
        } else {
          util.handle_error(self._on_internal_error, Error('received WAMP challenge, but no onchallenge() handler set'));
          var _msg = [MSG_TYPE.ABORT, {
            message: 'sorry, I cannot authenticate (no onchallenge handler set)'
          }, 'wamp.error.cannot_authenticate'];

          self._send_wamp(_msg);

          self._socket.close(3000);
        }
      } else {
        self._protocol_violation('unexpected message type ' + msg_type);
      } // WAMP session is open
      //

    } else {
      if (msg_type === MSG_TYPE.GOODBYE) {
        if (!self._goodbye_sent) {
          var reply = [MSG_TYPE.GOODBYE, {}, 'wamp.error.goodbye_and_out'];

          self._send_wamp(reply);
        }

        self._id = null;
        self._realm = null;
        self._features = null;
        var _details = msg[1];
        var _reason = msg[2];

        if (self.onleave) {
          self.onleave(_reason, _details);
        }
      } else {
        if (msg_type === MSG_TYPE.ERROR) {
          var request_type = msg[1];

          if (request_type in self._MESSAGE_MAP[MSG_TYPE.ERROR]) {
            self._MESSAGE_MAP[msg_type][request_type](msg);
          } else {
            self._protocol_violation('unexpected ERROR message with request_type ' + request_type);
          }
        } else {
          if (msg_type in self._MESSAGE_MAP) {
            self._MESSAGE_MAP[msg_type](msg);
          } else {
            self._protocol_violation('unexpected message type ' + msg_type);
          }
        }
      }
    }
  }; // session object constructed .. track creation time
  //


  if (util.canUse('performance') && 'now' in performance) {
    self._created = performance.now();
  } else {
    self._created = Date.now();
  }
};

Object.defineProperty(Session.prototype, 'defer', {
  get: function get() {
    return this._defer;
  }
});
Object.defineProperty(Session.prototype, 'id', {
  get: function get() {
    return this._id;
  }
});
Object.defineProperty(Session.prototype, 'realm', {
  get: function get() {
    return this._realm;
  }
});
Object.defineProperty(Session.prototype, 'isOpen', {
  get: function get() {
    return this.id !== null;
  }
});
Object.defineProperty(Session.prototype, 'features', {
  get: function get() {
    return this._features;
  }
});
Object.defineProperty(Session.prototype, 'caller_disclose_me', {
  get: function get() {
    return this._caller_disclose_me;
  },
  set: function set(newValue) {
    this._caller_disclose_me = newValue;
  }
});
Object.defineProperty(Session.prototype, 'publisher_disclose_me', {
  get: function get() {
    return this._publisher_disclose_me;
  },
  set: function set(newValue) {
    this._publisher_disclose_me = newValue;
  }
});
Object.defineProperty(Session.prototype, 'subscriptions', {
  get: function get() {
    var keys = Object.keys(this._subscriptions);
    var vals = [];

    for (var i = 0; i < keys.length; ++i) {
      vals.push(this._subscriptions[keys[i]]);
    }

    return vals;
  }
});
Object.defineProperty(Session.prototype, 'registrations', {
  get: function get() {
    var keys = Object.keys(this._registrations);
    var vals = [];

    for (var i = 0; i < keys.length; ++i) {
      vals.push(this._registrations[keys[i]]);
    }

    return vals;
  }
});

Session.prototype.log = function () {};

Session.prototype.join = function (realm, authmethods, authid, authextra) {
  util.assert(!realm || typeof realm === 'string', 'Session.join: <realm> must be a string');
  util.assert(!authmethods || Array.isArray(authmethods), 'Session.join: <authmethods> must be an array []');
  util.assert(!authid || typeof authid === 'string', 'Session.join: <authid> must be a string');
  var self = this;

  if (self.isOpen) {
    throw 'session already open';
  }

  self._goodbye_sent = false;
  self._realm = realm;
  var details = {};
  details.roles = WAMP_FEATURES;

  if (authmethods) {
    details.authmethods = authmethods;
  }

  if (authid) {
    details.authid = authid;
  }

  if (authextra) {
    details.authextra = authextra;
  }

  var msg = [MSG_TYPE.HELLO, realm, details];

  self._send_wamp(msg);
};

Session.prototype.leave = function (reason, message) {
  util.assert(!reason || typeof reason === 'string', 'Session.leave: <reason> must be a string');
  util.assert(!message || typeof message === 'string', 'Session.leave: <message> must be a string');
  var self = this;

  if (!self.isOpen) {
    throw 'session not open';
  }

  if (!reason) {
    reason = 'wamp.close.normal';
  }

  var details = {};

  if (message) {
    details.message = message;
  }

  var msg = [MSG_TYPE.GOODBYE, details, reason];

  self._send_wamp(msg);

  self._goodbye_sent = true;
};

Session.prototype.call = function (procedure, args, kwargs, options) {
  util.assert(typeof procedure === 'string', 'Session.call: <procedure> must be a string');
  util.assert(!args || Array.isArray(args), 'Session.call: <args> must be an array []');
  util.assert(!kwargs || util.is_object(kwargs), 'Session.call: <kwargs> must be an object {}');
  util.assert(!options || util.is_object(options), 'Session.call: <options> must be an object {}');
  var self = this;

  if (!self.isOpen) {
    throw 'session not open';
  }

  options = options || {}; // only set option if user hasn't set a value and global option is "on"

  if (options.disclose_me === undefined && self._caller_disclose_me) {
    options.disclose_me = true;
  } // create and remember new CALL request
  //


  var d = self._defer();

  var request = self._new_request_id();

  self._call_reqs[request] = [d, options]; // construct CALL message
  //

  var msg = [MSG_TYPE.CALL, request, options, self.resolve(procedure)];

  if (args) {
    msg.push(args);

    if (kwargs) {
      msg.push(kwargs);
    }
  } else if (kwargs) {
    msg.push([]);
    msg.push(kwargs);
  } // send WAMP message
  //


  self._send_wamp(msg);

  var userPromise;

  if (d.promise.then) {
    // whenjs has the actual user promise in an attribute
    userPromise = d.promise;
  } else {
    userPromise = d;
  }

  userPromise.cancel = function (cancelOptions) {
    // Cancel the call
    //
    var cancelMsg = [MSG_TYPE.CANCEL, request, cancelOptions || {}];

    self._send_wamp(cancelMsg);

    if (request in self._call_reqs && (!cancelOptions || !cancelOptions.mode || cancelOptions.mode !== 'kill')) {
      // When the mode is not 'kill' it will never receive a call result.
      // So when the request was still in the list, reject and remove it.
      var cancelledDefer = self._call_reqs[request][0];
      cancelledDefer.reject(new Error('Cancelled'));
      delete self._call_reqs[request];
    }
  };

  return userPromise;
};

Session.prototype.publish = function (topic, args, kwargs, options) {
  util.assert(typeof topic === 'string', 'Session.publish: <topic> must be a string');
  util.assert(!args || Array.isArray(args), 'Session.publish: <args> must be an array []');
  util.assert(!kwargs || util.is_object(kwargs), 'Session.publish: <kwargs> must be an object {}');
  util.assert(!options || util.is_object(options), 'Session.publish: <options> must be an object {}');
  var self = this;

  if (!self.isOpen) {
    throw 'session not open';
  }

  options = options || {}; // only set option if user hasn't set a value and global option is "on"

  if (options.disclose_me === undefined && self._publisher_disclose_me) {
    options.disclose_me = true;
  } // create and remember new PUBLISH request
  //


  var d = null;

  var request = self._new_request_id();

  if (options.acknowledge) {
    d = self._defer();
    self._publish_reqs[request] = [d, options];
  } // construct PUBLISH message
  //


  var msg = [MSG_TYPE.PUBLISH, request, options, self.resolve(topic)];

  if (args) {
    msg.push(args);

    if (kwargs) {
      msg.push(kwargs);
    }
  } else if (kwargs) {
    msg.push([]);
    msg.push(kwargs);
  } // send WAMP message
  //


  self._send_wamp(msg);

  if (d) {
    if (d.promise.then) {
      // whenjs has the actual user promise in an attribute
      return d.promise;
    } else {
      return d;
    }
  }
};

Session.prototype.subscribe = function (topic, handler, options) {
  util.assert(typeof topic === 'string', 'Session.subscribe: <topic> must be a string');
  util.assert(typeof handler === 'function', 'Session.subscribe: <handler> must be a function');
  util.assert(!options || util.is_object(options), 'Session.subscribe: <options> must be an object {}');
  var self = this;

  if (!self.isOpen) {
    throw 'session not open';
  } // create an remember new SUBSCRIBE request
  //


  var request = self._new_request_id();

  var d = self._defer();

  self._subscribe_reqs[request] = [d, topic, handler, options]; // construct SUBSCRIBE message
  //

  var msg = [MSG_TYPE.SUBSCRIBE, request];

  if (options) {
    msg.push(options);
  } else {
    msg.push({});
  }

  msg.push(self.resolve(topic)); // send WAMP message
  //

  self._send_wamp(msg);

  if (d.promise.then) {
    // whenjs has the actual user promise in an attribute
    return d.promise;
  } else {
    return d;
  }
};

Session.prototype.register = function (procedure, endpoint, options) {
  util.assert(typeof procedure === 'string', 'Session.register: <procedure> must be a string');
  util.assert(typeof endpoint === 'function', 'Session.register: <endpoint> must be a function');
  util.assert(!options || util.is_object(options), 'Session.register: <options> must be an object {}');
  var self = this;

  if (!self.isOpen) {
    throw 'session not open';
  } // create an remember new REGISTER request
  //


  var request = self._new_request_id();

  var d = self._defer();

  self._register_reqs[request] = [d, procedure, endpoint, options]; // construct REGISTER message
  //

  var msg = [MSG_TYPE.REGISTER, request];

  if (options) {
    msg.push(options);
  } else {
    msg.push({});
  }

  msg.push(self.resolve(procedure)); // send WAMP message
  //

  self._send_wamp(msg);

  if (d.promise.then) {
    // whenjs has the actual user promise in an attribute
    return d.promise;
  } else {
    return d;
  }
};

Session.prototype.unsubscribe = function (subscription) {
  util.assert(subscription instanceof Subscription, 'Session.unsubscribe: <subscription> must be an instance of class autobahn.Subscription');
  var self = this;
  var subs = self._subscriptions[subscription.id];
  var i = subs.indexOf(subscription);

  if (!self.isOpen) {
    if (i !== -1) {
      // remove handler subscription
      subs.splice(i, 1);
      subscription.active = false;
    }

    throw 'session not open';
  }

  if (!subscription.active || !(subscription.id in self._subscriptions)) {
    if (i !== -1) {
      // remove handler subscription
      subs.splice(i, 1);
      subscription.active = false;
    }

    throw 'subscription not active';
  }

  if (i === -1) {
    throw 'subscription not active';
  } // remove handler subscription


  subs.splice(i, 1);
  subscription.active = false;

  var d = self._defer();

  if (subs.length) {
    // there are still handlers on the subscription ..
    d.resolve(false);
  } else {
    // no handlers left ..
    // create and remember new UNSUBSCRIBE request
    //
    var request = self._new_request_id();

    self._unsubscribe_reqs[request] = [d, subscription.id]; // construct UNSUBSCRIBE message
    //

    var msg = [MSG_TYPE.UNSUBSCRIBE, request, subscription.id]; // send WAMP message
    //

    self._send_wamp(msg);
  }

  if (d.promise.then) {
    // whenjs has the actual user promise in an attribute
    return d.promise;
  } else {
    return d;
  }
};

Session.prototype.unregister = function (registration) {
  util.assert(registration instanceof Registration, 'Session.unregister: <registration> must be an instance of class autobahn.Registration');
  var self = this;

  if (!self.isOpen) {
    throw 'session not open';
  }

  if (!registration.active || !(registration.id in self._registrations)) {
    throw 'registration not active';
  } // create and remember new UNREGISTER request
  //


  var request = self._new_request_id();

  var d = self._defer();

  self._unregister_reqs[request] = [d, registration]; // construct UNREGISTER message
  //

  var msg = [MSG_TYPE.UNREGISTER, request, registration.id]; // send WAMP message
  //

  self._send_wamp(msg);

  if (d.promise.then) {
    // whenjs has the actual user promise in an attribute
    return d.promise;
  } else {
    return d;
  }
};

Session.prototype.prefix = function (prefix, uri) {
  util.assert(typeof prefix === 'string', 'Session.prefix: <prefix> must be a string');
  util.assert(!uri || typeof uri === 'string', 'Session.prefix: <uri> must be a string or falsy');
  var self = this;

  if (uri) {
    self._prefixes[prefix] = uri;
  } else {
    if (prefix in self._prefixes) {
      delete self._prefixes[prefix];
    }
  }
};

Session.prototype.resolve = function (curie) {
  util.assert(typeof curie === 'string', 'Session.resolve: <curie> must be a string');
  var self = this; // skip if not a CURIE

  var i = curie.indexOf(':');

  if (i >= 0) {
    var prefix = curie.substring(0, i);

    if (prefix in self._prefixes) {
      return self._prefixes[prefix] + '.' + curie.substring(i + 1);
    } else {
      return curie;
    }
  } else {
    return curie;
  }
};

module.exports = {
  Session: Session,
  Invocation: Invocation,
  Event: Event,
  Result: Result,
  Error: Error,
  Subscription: Subscription,
  Registration: Registration,
  Publication: Publication
};

/***/ }),

/***/ "../core/wamp/subscriber.js":
/*!**********************************!*\
  !*** ../core/wamp/subscriber.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = __webpack_require__(/*! ./connection */ "../core/wamp/connection.js"),
    Connection = _require.Connection;

var _require2 = __webpack_require__(/*! ./transporter */ "../core/wamp/transporter.js"),
    transporter = _require2.transporter;

var util = __webpack_require__(/*! ./util */ "../core/wamp/util.js");

var subscriber = function subscriber(_ref) {
  var WebSocket = _ref.WebSocket,
      getAuthTokenQuerystring = _ref.getAuthTokenQuerystring,
      realm = _ref.realm,
      resolveOptions = _ref.resolveOptions,
      resolveTopic = _ref.resolveTopic,
      url = _ref.url,
      shouldTryAgain = _ref.shouldTryAgain;
  var create_transport = transporter(WebSocket);
  var connection = null;
  var subscriptionMap = new Map();
  var state = {
    retried: false
  };

  var clearConnection = function clearConnection() {
    if (connection && connection.isOpen) {
      connection.close();
    }

    subscriptionMap.clear();
  };

  var tryCloseConnection = function tryCloseConnection(details) {
    if (subscriptionMap.size === 0) {
      clearConnection();
    } else if (details && details.will_retry === false) {
      clearConnection();
    }
  };

  var _subscribe = function _subscribe(key) {
    var found = subscriptionMap.get(key);

    if (!found) {
      return;
    }

    connection.session.subscribe(found.topic, function (_, kwargs) {
      return found.onevent(kwargs);
    }, found.options).then(function (subscription) {
      found.subscription = subscription;
      subscriptionMap.set(key, found);
      found.oninit();
    }).catch(function (e) {
      found.onerror(e);
      subscriptionMap.delete(key);
      tryCloseConnection();
    });
  };

  var recover = function recover() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = subscriptionMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 1),
            key = _step$value[0];

        _subscribe(key);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  var onopen = function onopen() {
    state.retried = false;
    recover();
  };

  var onclose = function onclose(reason, details) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = subscriptionMap.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var data = _step2.value;
        data.onerror({
          reason: reason,
          details: details
        });
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    tryCloseConnection(details);
  };

  var connect = util.asyncCache(function () {
    if (!connection) {
      connection = new Connection({
        url: url,
        realm: realm,
        create_transport: create_transport,
        getAuthTokenQuerystring: getAuthTokenQuerystring,
        shouldTryAgain: shouldTryAgain,
        state: state
      });
    }

    if (connection.isOpen) {
      return Promise.resolve();
    }

    return new Promise(function (resolve, reject) {
      connection.onopen = function () {
        state.retried = false;
        resolve();
        connection.onopen = onopen;
        connection.onclose = onclose;
      };

      connection.onclose = function (reason, details) {
        var err = new Error(reason);
        err.reason = reason;
        err.details = details;
        reject(err);
        connection.onopen = onopen;
        connection.onclose = onclose;
      };

      connection.open();
    });
  });

  var subscribe = function subscribe(_ref2) {
    var schema_name = _ref2.schema_name,
        where = _ref2.where,
        event_type = _ref2.event_type,
        onerror = _ref2.onerror,
        oninit = _ref2.oninit,
        onevent = _ref2.onevent;
    var topic = resolveTopic({
      schema_name: schema_name,
      event_type: event_type
    });
    var options = resolveOptions({
      where: where
    }) || {};
    var key = util.generateKey();
    subscriptionMap.set(key, {
      key: key,
      topic: topic,
      options: options,
      onerror: onerror,
      oninit: oninit,
      onevent: onevent
    });

    var unsubscribe = function unsubscribe() {
      var found = subscriptionMap.get(key);

      if (!found) {
        return Promise.resolve();
      }

      if (!found.subscription) {
        subscriptionMap.delete(key);
        tryCloseConnection();
        return Promise.resolve();
      }

      if (!connection) {
        return Promise.resolve();
      }

      return connection.session.unsubscribe(found.subscription).then(function () {
        subscriptionMap.delete(key);
        tryCloseConnection();
      });
    };

    connect().then(function () {
      _subscribe(key);
    }).catch(onerror);
    return {
      unsubscribe: unsubscribe
    };
  };

  return subscribe;
};

module.exports = subscriber;

/***/ }),

/***/ "../core/wamp/transporter.js":
/*!***********************************!*\
  !*** ../core/wamp/transporter.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ./util */ "../core/wamp/util.js");

var _require = __webpack_require__(/*! ./serializer */ "../core/wamp/serializer.js"),
    JSONSerializer = _require.JSONSerializer;

var protocol = 'wamp.2.json';
var serializer = new JSONSerializer();

var transporter = function transporter(WebSocket) {
  return function (_ref) {
    var url = _ref.url;
    var transport = {};
    transport.protocol = protocol;
    transport.serializer = serializer;

    transport.onmessage = function () {};

    transport.onopen = function () {};

    transport.onclose = function () {};

    transport.info = {
      type: 'websocket',
      url: url,
      protocol: null
    };
    var websocket = new WebSocket(url, [protocol]);
    websocket.binaryType = 'arraybuffer';

    websocket.onmessage = function (evt) {
      util.debug('WebSocket#onmessage', evt);
      var msg = transport.serializer.unserialize(evt.data);
      transport.onmessage(msg);
    };

    websocket.onopen = function () {
      util.debug('WebSocket#onopen');
      transport.info.protocol = websocket.protocol;
      transport.onopen();
    };

    websocket.onclose = function (evt) {
      util.debug('WebSocket#onclose', evt);
      var details = {
        code: evt.code,
        reason: evt.message,
        wasClean: evt.wasClean
      };
      transport.onclose(details);
    };

    transport.send = function (msg) {
      var payload = transport.serializer.serialize(msg);
      util.debug('WebSocket#send', payload);
      websocket.send(payload);
    };

    transport.close = function (code, reason) {
      util.debug('WebSocket#close', code, reason);
      websocket.close(code, reason);
    };

    return transport;
  };
};

module.exports = {
  transporter: transporter
};

/***/ }),

/***/ "../core/wamp/util.js":
/*!****************************!*\
  !*** ../core/wamp/util.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var GLOBAL_DEBUG = '__wamp_debug__';

var canUse = function canUse(prop) {
  if (typeof global !== 'undefined') {
    return prop in global;
  }

  if (typeof window !== 'undefined') {
    return prop in window;
  }

  return false;
};

function isDebug() {
  if (typeof global !== 'undefined' && GLOBAL_DEBUG in global) return true;
  if (typeof window !== 'undefined' && GLOBAL_DEBUG in window) return true;
  return false;
}

var setDebug = function setDebug() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (typeof global !== 'undefined') {
    global[GLOBAL_DEBUG] = value;
    return;
  }

  if (typeof window !== 'undefined') {
    window[GLOBAL_DEBUG] = value;
    return;
  }
};

var logger = function logger(level) {
  return function () {
    var _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (_console = console).log.apply(_console, ["[".concat(new Date().toISOString(), "] [").concat(level.toUpperCase(), "]")].concat(args)); // eslint-disable-line

  };
};

var warn = logger('warn');

var _debug = logger('debug');

var debug = function debug() {
  if (isDebug()) return _debug.apply(void 0, arguments);
};

var opt = function opt(val, defaultVal) {
  return typeof val !== 'undefined' ? val : defaultVal;
};

var rand_normal = function rand_normal(mean, sd) {
  var x1, x2, rad;

  do {
    x1 = 2 * Math.random() - 1;
    x2 = 2 * Math.random() - 1;
    rad = x1 * x1 + x2 * x2;
  } while (rad >= 1 || rad == 0);

  var c = Math.sqrt(-2 * Math.log(rad) / rad);
  return (mean || 0) + x1 * c * (sd || 1);
};

var handle_error = function handle_error(handler, error, error_message) {
  if (typeof handler === 'function') {
    handler(error, error_message);
  } else {
    console.error(error_message || 'unhandled exception raised: ', error); // eslint-disable-line
  }
};

var deferred_factory = function deferred_factory() {
  return function () {
    var deferred = {};
    deferred.promise = new Promise(function (resolve, reject) {
      deferred.resolve = resolve;
      deferred.reject = reject;
    });
    return deferred;
  };
};

var promisify = function promisify(fn) {
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return new Promise(function (resolve, reject) {
      fn.apply(void 0, args.concat([function (error, result) {
        if (error) {
          return reject(error);
        }

        return resolve(result);
      }]));
    });
  };
};

var assert = function assert(cond, text) {
  if (cond) {
    return;
  }

  if (isDebug()) {
    debugger; // eslint-disable-line
  }

  throw new Error(text || 'Assertion failed!');
};

var is_object = function is_object(variable) {
  return !Array.isArray(variable) && (variable instanceof Object || _typeof(variable) === 'object');
};

function asyncCache(fn) {
  var inProgress = false;
  var bufferList = [];
  return function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return new Promise(function (resolve, reject) {
      bufferList.push({
        resolve: resolve,
        reject: reject
      });

      if (!inProgress) {
        inProgress = true;
        fn.apply(void 0, args).then(function (result) {
          for (var _i = 0; _i < bufferList.length; _i++) {
            var success = bufferList[_i].resolve;
            success(result);
          }

          inProgress = false;
          bufferList = [];
        }).catch(function (e) {
          for (var _i2 = 0; _i2 < bufferList.length; _i2++) {
            var error = bufferList[_i2].reject;
            error(e);
          }

          inProgress = false;
          bufferList = [];
        });
      }
    });
  };
}

function generateKey() {
  return generateKey._key++;
}

generateKey._key = 1;
module.exports = {
  assert: assert,
  canUse: canUse,
  debug: debug,
  deferred_factory: deferred_factory,
  handle_error: handle_error,
  isDebug: isDebug,
  is_object: is_object,
  opt: opt,
  promisify: promisify,
  rand_normal: rand_normal,
  setDebug: setDebug,
  warn: warn,
  asyncCache: asyncCache,
  generateKey: generateKey
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/base64-js/index.js":
/*!******************************************!*\
  !*** ../node_modules/base64-js/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "../node_modules/buffer/index.js":
/*!***************************************!*\
  !*** ../node_modules/buffer/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "../node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "../node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "../node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/console-log-level/index.js":
/*!**************************************************!*\
  !*** ../node_modules/console-log-level/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(/*! util */ "../node_modules/util/util.js")

var levels = ['trace', 'debug', 'info', 'warn', 'error', 'fatal']
var noop = function () {}

module.exports = function (opts) {
  opts = opts || {}
  opts.level = opts.level || 'info'

  var logger = {}

  var shouldLog = function (level) {
    return levels.indexOf(level) >= levels.indexOf(opts.level)
  }

  levels.forEach(function (level) {
    logger[level] = shouldLog(level) ? log : noop

    function log () {
      var prefix = opts.prefix
      var normalizedLevel

      if (opts.stderr) {
        normalizedLevel = 'error'
      } else {
        switch (level) {
          case 'trace': normalizedLevel = 'info'; break
          case 'debug': normalizedLevel = 'info'; break
          case 'fatal': normalizedLevel = 'error'; break
          default: normalizedLevel = level
        }
      }

      if (prefix) {
        if (typeof prefix === 'function') prefix = prefix(level)
        arguments[0] = util.format(prefix, arguments[0])
      }

      console[normalizedLevel](util.format.apply(util, arguments))
    }
  })

  return logger
}


/***/ }),

/***/ "../node_modules/ieee754/index.js":
/*!****************************************!*\
  !*** ../node_modules/ieee754/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "../node_modules/isarray/index.js":
/*!****************************************!*\
  !*** ../node_modules/isarray/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "../node_modules/process/browser.js":
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../node_modules/util/node_modules/inherits/inherits_browser.js":
/*!**********************************************************************!*\
  !*** ../node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "../node_modules/util/support/isBufferBrowser.js":
/*!*******************************************************!*\
  !*** ../node_modules/util/support/isBufferBrowser.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "../node_modules/util/util.js":
/*!************************************!*\
  !*** ../node_modules/util/util.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "../node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "../node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/wechat/auth.js":
/*!****************************!*\
  !*** ./src/wechat/auth.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var constants = __webpack_require__(/*! core-module/constants */ "../core/constants.js");

var HError = __webpack_require__(/*! core-module/HError */ "../core/HError.js");

var storageAsync = __webpack_require__(/*! core-module/storageAsync */ "../core/storageAsync.js");

var utils = __webpack_require__(/*! core-module/utils */ "../core/utils/index.js");

var commonAuth = __webpack_require__(/*! core-module/auth */ "../core/auth.js");

module.exports = function (BaaS) {
  var polyfill = BaaS._polyfill;
  var API = BaaS._config.API;

  var getLoginCode = function getLoginCode() {
    return new Promise(function (resolve, reject) {
      polyfill.wxLogin({
        success: function success(res) {
          resolve(res.code);
        },
        fail: function fail() {
          BaaS.request.wxRequestFail(reject);
        }
      });
    });
  }; // 获取登录凭证 code, 进而换取用户登录态信息


  var auth = function auth() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$createUser = _ref.createUser,
        createUser = _ref$createUser === void 0 ? true : _ref$createUser,
        _ref$withUnionID = _ref.withUnionID,
        withUnionID = _ref$withUnionID === void 0 ? false : _ref$withUnionID;

    return new Promise(function (resolve, reject) {
      getLoginCode().then(function (code) {
        sessionInit({
          code: code,
          createUser: createUser,
          withUnionID: withUnionID
        }, resolve, reject);
      }, reject);
    });
  }; // code 换取 session_key，生成并获取 3rd_session 即 token


  var sessionInit = function sessionInit(_ref2, resolve, reject) {
    var code = _ref2.code,
        createUser = _ref2.createUser,
        withUnionID = _ref2.withUnionID;
    return BaaS.request({
      url: API.WECHAT.SILENT_LOGIN,
      method: 'POST',
      data: {
        create_user: createUser,
        code: code,
        login_with_unionid: withUnionID
      }
    }).then(utils.validateStatusCode).then(function (res) {
      BaaS._polyfill.handleLoginSuccess(res);

      resolve(res);
    }, reject);
  };
  /*
   * v2.0.8-a 中存在的 bug:
   * 如果调用 silentLogin（直接调用或在 autoLogin 为 ture 的情况下，401 错误后自动调用），
   * 并且同时调用 loginWithWechat，会发出两个 silent_login 的请求，可能会造成后端同时创建两个用户。
   * 因此，直接在 silentLogin 处做并发限制（loginWithWechat 会调用这个 silentLogin）。
   */

  /**
   * 静默登录
   * @function
   * @deprecated since v2.0.0
   * @memberof BaaS.auth
   */


  var silentLogin = utils.rateLimit(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Promise.all([storageAsync.get(constants.STORAGE_KEY.AUTH_TOKEN), utils.isSessionExpired()]).then(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          token = _ref4[0],
          expired = _ref4[1];

      if (token && !expired) return;
      return auth.apply(void 0, args);
    });
  }); // 提供给开发者在 button (open-type="getUserInfo") 的回调中调用，对加密数据进行解密，同时将 userinfo 存入 storage 中

  /**
   * 获取用户信息
   * @deprecated
   * @function
   * @memberof BaaS.auth
   * @param {BaaS.handleUserInfoOptions} options 参数
   * @return {Promise<any>}
   */

  var handleUserInfo = function handleUserInfo(res) {
    if (!res || !res.detail) {
      throw new HError(603);
    }

    var detail = res.detail;
    var createUser = !!res.createUser;
    var syncUserProfile = res.syncUserProfile;
    var withUnionID = res.withUnionID; // 用户拒绝授权，仅返回 uid, openid 和 unionid
    // 2019-1-21： 将其封装为 HError 对象，同时输出原有字段

    if (!detail.userInfo) {
      return Promise.all([storageAsync.get(constants.STORAGE_KEY.UID), storageAsync.get(constants.STORAGE_KEY.OPENID), storageAsync.get(constants.STORAGE_KEY.UNIONID)]).then(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 3),
            id = _ref6[0],
            openid = _ref6[1],
            unionid = _ref6[2];

        return Promise.reject(_extends(new HError(603), {
          id: id,
          openid: openid,
          unionid: unionid
        }));
      });
    }

    return getLoginCode().then(function (code) {
      return getUserInfo({
        lang: detail.userInfo.language
      }).then(function (detail) {
        var payload = {
          code: code,
          create_user: createUser,
          rawData: detail.rawData,
          signature: detail.signature,
          encryptedData: detail.encryptedData,
          login_with_unionid: withUnionID,
          iv: detail.iv,
          update_userprofile: utils.getUpdateUserProfileParam(syncUserProfile)
        };
        return getSensitiveData(payload);
      });
    }).then(function (res) {
      var userInfo = detail.userInfo;
      userInfo.id = res.data.user_id;
      userInfo.openid = res.data.openid;
      userInfo.unionid = res.data.unionid;

      BaaS._polyfill.handleLoginSuccess(res, false, userInfo);
    });
  }; // 上传 signature 和 encryptedData 等信息，用于校验数据的完整性及解密数据，获取 unionid 等敏感数据


  var getSensitiveData = function getSensitiveData(data) {
    return BaaS.request({
      url: API.WECHAT.AUTHENTICATE,
      method: 'POST',
      data: data
    }).then(utils.validateStatusCode);
  };

  var getUserInfo = function getUserInfo() {
    var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        lang = _ref7.lang;

    return new Promise(function (resolve, reject) {
      BaaS._polyfill.wxGetUserInfo({
        lang: lang,
        success: resolve,
        fail: reject
      });
    });
  };

  var linkWechat = function linkWechat(res) {
    var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref8$syncUserProfile = _ref8.syncUserProfile,
        syncUserProfile = _ref8$syncUserProfile === void 0 ? constants.UPDATE_USERPROFILE_VALUE.SETNX : _ref8$syncUserProfile,
        _ref8$withUnionID = _ref8.withUnionID,
        withUnionID = _ref8$withUnionID === void 0 ? false : _ref8$withUnionID;

    var refreshUserInfo = false;

    if (res && res.detail && res.detail.userInfo) {
      refreshUserInfo = true;
    }

    return getLoginCode().then(function (code) {
      // 如果用户传递了授权信息，则重新获取一次 userInfo, 避免因为重新获取 code 导致 session 失效而解密失败
      var getUserInfoPromise = refreshUserInfo ? getUserInfo({
        lang: res.detail.userInfo.language
      }) : Promise.resolve(null);
      return getUserInfoPromise.then(function (res) {
        var payload = res ? {
          rawData: res.rawData,
          signature: res.signature,
          encryptedData: res.encryptedData,
          iv: res.iv,
          update_userprofile: utils.getUpdateUserProfileParam(syncUserProfile),
          associate_with_unionid: withUnionID,
          code: code
        } : {
          code: code,
          associate_with_unionid: withUnionID
        };
        return BaaS._baasRequest({
          method: 'POST',
          url: API.WECHAT.USER_ASSOCIATE,
          data: payload
        });
      });
    });
  };
  /**
   * 微信登录
   * @function
   * @since v2.0.0
   * @memberof BaaS.auth
   * @param {BaaS.AuthData|null} [authData] 用户信息，值为 null 时是静默登录
   * @param {BaaS.WechatLoginOptions} [options] 其他选项
   * @return {Promise<BaaS.CurrentUser>}
   */


  var loginWithWechat = function loginWithWechat(authData) {
    var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref9$createUser = _ref9.createUser,
        createUser = _ref9$createUser === void 0 ? true : _ref9$createUser,
        _ref9$withUnionID = _ref9.withUnionID,
        withUnionID = _ref9$withUnionID === void 0 ? false : _ref9$withUnionID,
        _ref9$syncUserProfile = _ref9.syncUserProfile,
        syncUserProfile = _ref9$syncUserProfile === void 0 ? constants.UPDATE_USERPROFILE_VALUE.SETNX : _ref9$syncUserProfile;

    var loginPromise = null;

    if (authData && authData.detail) {
      // handleUserInfo 流程
      loginPromise = handleUserInfo(_extends(authData, {
        createUser: createUser,
        syncUserProfile: syncUserProfile,
        withUnionID: withUnionID
      }));
    } else {
      // 静默登录流程
      loginPromise = silentLogin({
        createUser: createUser,
        withUnionID: withUnionID
      });
    }

    return loginPromise.then(function () {
      return commonAuth.getCurrentUser();
    });
  };

  _extends(BaaS.auth, {
    silentLogin: silentLogin,
    loginWithWechat: utils.rateLimit(loginWithWechat),
    handleUserInfo: utils.rateLimit(handleUserInfo),
    linkWechat: utils.rateLimit(linkWechat)
  });
  /*
   * 兼容原有的 API
   */

  /**
   * 微信登录（仅支持静默登录）
   * @deprecated since v2.0.0
   * @function
   * @memberof BaaS
   * @param {boolean} forceLogin 是否是强制登录
   * @return {Promise<any>}
   */


  BaaS.login = function (args) {
    if (args === false) {
      return silentLogin().then(function () {
        return Promise.all([storageAsync.get(constants.STORAGE_KEY.UID), storageAsync.get(constants.STORAGE_KEY.OPENID), storageAsync.get(constants.STORAGE_KEY.UNIONID), storageAsync.get(constants.STORAGE_KEY.EXPIRES_AT)]).then(function (_ref10) {
          var _ref11 = _slicedToArray(_ref10, 4),
              id = _ref11[0],
              openid = _ref11[1],
              unionid = _ref11[2],
              expiredAt = _ref11[3];

          return _defineProperty({
            id: id,
            openid: openid,
            unionid: unionid
          }, constants.STORAGE_KEY.EXPIRES_AT, expiredAt);
        });
      });
    } else {
      return Promise.reject(new HError(605));
    }
  };
  /**
   * 获取用户信息
   * @deprecated since v2.0.0
   * @function
   * @memberof BaaS
   * @param {BaaS.handleUserInfoOptions} options 参数
   * @return {Promise<any>}
   */


  BaaS.handleUserInfo = function (res) {
    return BaaS.auth.handleUserInfo(res).then(function () {
      return commonAuth.getCurrentUser();
    }).then(function (user) {
      return user.toJSON();
    });
  };
  /**
   * 退出登录状态
   * @deprecated since v2.0.0
   * @function
   * @memberof BaaS
   * @return {Promise<any>}
   */


  BaaS.logout = BaaS.auth.logout;
};

/***/ }),

/***/ "./src/wechat/baasRequest.js":
/*!***********************************!*\
  !*** ./src/wechat/baasRequest.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(/*! core-module/utils */ "../core/utils/index.js");

var BaaS = __webpack_require__(/*! core-module/baas */ "../core/baas.js");

var constants = __webpack_require__(/*! core-module/constants */ "../core/constants.js");

var storage = __webpack_require__(/*! core-module/storage */ "../core/storage.js");
/*
 * 重发请求
 * 情景1：若是第一次出现 401 错误，此时的缓存一定是过期的。
 * 情景2：假设有 a,b 两个 401 错误的请求，a请求 300ms 后返回，走情景 1 的逻辑。b 在 pending 10 秒后返回，此时缓存实际上是没过期的，但是仍然会重新清空缓存，走情景 1 逻辑。
 * 情景3：假设有 a,b,c 3 个并发请求，a 先返回，走了情景 1 的逻辑，此时 bc 请求在 silentLogin 请求返回前返回了，这时候他们会等待 silentLogin , 即多个请求只会发送一次 silentLogin 请求
 *
 * @param {object} payload
 */


function tryResendRequest(payload) {
  var prevUid = storage.get(constants.STORAGE_KEY.UID);
  var preAction = Promise.resolve();

  if (storage.get(constants.STORAGE_KEY.AUTH_TOKEN)) {
    // 缓存被清空，silentLogin 一定会发起 session init 请求
    preAction = BaaS.clearSession();
  }

  return preAction.then(function () {
    return BaaS.auth.silentLogin().then(function () {
      return utils.getResendPayload(BaaS, payload, prevUid);
    }).then(function (resendPayload) {
      return BaaS.request(resendPayload).then(utils.validateStatusCode);
    });
  });
} // BaaS 网络请求，此方法能保证在已登录 BaaS 后再发起请求
// eslint-disable-next-line no-unused-vars


var baasRequest = function baasRequest(_ref) {
  var url = _ref.url,
      _ref$method = _ref.method,
      method = _ref$method === void 0 ? 'GET' : _ref$method,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      _ref$header = _ref.header,
      header = _ref$header === void 0 ? {} : _ref$header,
      _ref$dataType = _ref.dataType,
      dataType = _ref$dataType === void 0 ? 'json' : _ref$dataType;
  var beforeRequestPromise = BaaS._config.AUTO_LOGIN ? BaaS.auth.silentLogin() : Promise.resolve();
  return beforeRequestPromise.then(function () {
    return BaaS.request.call(null, {
      url: url,
      method: method,
      data: data,
      header: header,
      dataType: dataType
    });
  }).then(function (res) {
    if (res.statusCode === constants.STATUS_CODE.UNAUTHORIZED && BaaS._config.AUTO_LOGIN) {
      return tryResendRequest({
        header: header,
        method: method,
        url: url,
        data: data,
        dataType: dataType
      });
    } else {
      return utils.validateStatusCode(res);
    }
  });
};

module.exports = baasRequest;

/***/ }),

/***/ "./src/wechat/censor.js":
/*!******************************!*\
  !*** ./src/wechat/censor.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constants = __webpack_require__(/*! core-module/constants */ "../core/constants.js");

var HError = __webpack_require__(/*! core-module/HError */ "../core/HError.js");

var utils = __webpack_require__(/*! core-module/utils */ "../core/utils/index.js");

module.exports = function (BaaS) {
  /**
   * 检测违规图片
   * @function
   * @memberof BaaS
   * @param {string} filePath 带检测的图片路径
   * @return {Promise<any>}
   */
  var wxCensorImage = function wxCensorImage(filePath) {
    return BaaS.getAuthToken().then(function (authToken) {
      return new Promise(function (resolve, reject) {
        wx.uploadFile({
          url: BaaS._polyfill.getAPIHost() + BaaS._config.API.WECHAT.CENSOR_IMAGE,
          filePath: filePath,
          name: constants.UPLOAD.UPLOAD_FILE_KEY,
          header: {
            'Authorization': constants.UPLOAD.HEADER_AUTH_VALUE + authToken,
            'X-Hydrogen-Client-Version': BaaS._config.VERSION,
            'X-Hydrogen-Client-Platform': utils.getSysPlatform(),
            'X-Hydrogen-Client-ID': BaaS._config.CLIENT_ID,
            'User-Agent': constants.UPLOAD.UA
          },
          success: function success(res) {
            var statusCode = res.statusCode,
                data = res.data;

            if (parseInt(statusCode) !== constants.STATUS_CODE.SUCCESS) {
              return reject(res);
            }

            resolve(JSON.parse(data));
          },
          fail: function fail() {
            BaaS.request.wxRequestFail(reject);
          }
        });
      });
    });
  };
  /**
   * 检测违规文本
   * @function
   * @memberof BaaS
   * @param {string} text 带检测的文本内容
   * @return {Promise<any>}
   */


  var wxCensorText = function wxCensorText(text) {
    if (!text || typeof text !== 'string') {
      return Promise.reject(new HError(605));
    }

    return BaaS._baasRequest({
      url: BaaS._config.API.WECHAT.CENSOR_MSG,
      method: 'POST',
      data: {
        content: text
      }
    });
  };
  /**
   * 异步检测图片、音频
   * @function
   * @since v2.8.0
   * @memberof BaaS
   * @param {string} fileID 文件 ID
   * @return {Promise<BaaS.Response<BaaS.CensorAsyncResult>>}
   */


  var censorAsync = function censorAsync(fileId) {
    return BaaS._baasRequest({
      url: BaaS._config.API.WECHAT.CENSOR_ASYNC,
      method: 'POST',
      data: {
        file_id: fileId
      }
    });
  };
  /**
   * 获取异步检测结果
   * @function
   * @since v2.8.0
   * @memberof BaaS
   * @param {string|number} id 检测记录 ID
   * @return {Promise<BaaS.Response<BaaS.CensorAsyncResult>>}
   */


  var getCensorResult = function getCensorResult(id) {
    return BaaS._baasRequest({
      url: "".concat(BaaS._config.API.WECHAT.CENSOR_ASYNC).concat(id, "/")
    });
  };

  BaaS.wxCensorImage = wxCensorImage;
  BaaS.wxCensorText = wxCensorText;
  BaaS.censorAsync = censorAsync;
  BaaS.getCensorResult = getCensorResult;
};

/***/ }),

/***/ "./src/wechat/errorTracker.js":
/*!************************************!*\
  !*** ./src/wechat/errorTracker.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! core-module/baas */ "../core/baas.js");

var HError = __webpack_require__(/*! core-module/HError */ "../core/HError.js");

var config = BaaS._config;
var polyfill = BaaS._polyfill;

var bugOut = __webpack_require__(/*! ./vendor/bugOut.min */ "./src/wechat/vendor/bugOut.min.js");

var initialized = false;

function enable() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$usePlugins = _ref.usePlugins,
      usePlugins = _ref$usePlugins === void 0 ? false : _ref$usePlugins;

  if (!BaaS._config || !BaaS._config.CLIENT_ID) {
    throw new HError(602);
  } // 插件版强制设置为 true


  bugOut.usePlugins = polyfill.SDK_TYPE === 'plugin' ? true : usePlugins;
  initialized = true;
  return bugOut.init(true, {
    clientId: BaaS._config.CLIENT_ID
  }, config.VERSION);
}

function track() {
  if (!initialized) {
    throw new HError(610);
  }

  return bugOut.track.apply(bugOut, arguments);
}

function metaData() {
  if (!initialized) {
    throw new HError(610);
  }

  return bugOut.metaData.apply(bugOut, arguments);
}

module.exports = {
  enable: enable,
  track: track,
  metaData: metaData
};

/***/ }),

/***/ "./src/wechat/getWXACode.js":
/*!**********************************!*\
  !*** ./src/wechat/getWXACode.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var BaaS = __webpack_require__(/*! core-module/baas */ "../core/baas.js");

var HError = __webpack_require__(/*! core-module/HError */ "../core/HError.js");

var utils = __webpack_require__(/*! core-module/utils */ "../core/utils/index.js");

var API = BaaS._config.API;

var makeRealParams = function makeRealParams(type, params, cdn, categoryName) {
  var validateTypes = ['wxacode', 'wxacodeunlimit', 'wxaqrcode'];
  var realTypeNames = ['miniapp_permanent', 'miniapp_temporary', 'miniapp_qr'];
  var realParams = {};
  var typeIndex = validateTypes.indexOf(type);

  if (!utils.isString(type) || typeIndex === -1) {
    throw new HError(605, 'type 为字符串类型且只接受 "wxacode", "wxacodeunlimit", "wxaqrcode" 其中一种');
  }

  realParams.code_type = realTypeNames[typeIndex];

  if (!params || params.constructor !== Object) {
    throw new HError(605, 'params 为 Object 类型');
  }

  if (type === 'wxacode' || type === 'wxaqrcode') {
    if (!params.hasOwnProperty('path')) {
      throw new HError(605, '当 type 为 "wxacode" 或 "wxaqrcode" 时，params 中必须带有 "path" 属性');
    }

    realParams.path = params.path;
  }

  if (type === 'wxacodeunlimit') {
    if (!params.hasOwnProperty('scene')) {
      throw new HError(605, '当 type 为 "wxacodeunlimit" 时，params 中必须带有 "scene" 属性');
    }

    realParams.scene = params.scene;

    if (params.hasOwnProperty('page')) {
      realParams.path = params.page;
    }
  }

  realParams.options = {};

  if (params.hasOwnProperty('width')) {
    realParams.options.width = params.width;
  }

  if (params.hasOwnProperty('auto_color')) {
    realParams.options.auto_color = params.auto_color;
  }

  if (params.hasOwnProperty('line_color')) {
    realParams.options.line_color = params.line_color;
  }

  if (params.hasOwnProperty('is_hyaline')) {
    realParams.options.is_hyaline = params.is_hyaline;
  }

  if (cdn === true) {
    realParams.upload_to_cdn = true;

    if (categoryName) {
      realParams.category_name = categoryName;
    }
  }

  return realParams;
};
/**
 * 获取二维码
 * @function
 * @memberof BaaS
 * @param {string} type 类型
 * @param {object} params 参数
 * @param {boolean} [cdn] 是否上传二维码到文件存储并返回图片链接，默认为 false
 * @param {string} [categoryName] 指定上传文件分类名，cdn 为 true 时有效，不指定该参数或分类名不存在，则默认上传到根目录
 * @return {Promise<BaaS.Response<any>>}
 */


var getWXACode = function getWXACode(type, params, cdn, categoryName) {
  var realParams = makeRealParams(type, params, cdn, categoryName);
  return BaaS._baasRequest({
    url: API.WECHAT.WXACODE,
    method: 'POST',
    data: realParams
  }).then(function (res) {
    if (cdn) {
      return _extends({
        download_url: res.data.uploaded_file.path
      }, res.data);
    }

    return res.data;
  });
};

module.exports = getWXACode;

/***/ }),

/***/ "./src/wechat/index.js":
/*!*****************************!*\
  !*** ./src/wechat/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! core-module/baas */ "../core/baas.js");

var core = __webpack_require__(/*! core-module/index */ "../core/index.js");

var wechatAuth = __webpack_require__(/*! ./auth */ "./src/wechat/auth.js");

var polyfill = __webpack_require__(/*! ./polyfill */ "./src/wechat/polyfill.js");

var censor = __webpack_require__(/*! ./censor */ "./src/wechat/censor.js");

var reportTemplateMsgAnalytics = __webpack_require__(/*! ./reportTemplateMsgAnalytics */ "./src/wechat/reportTemplateMsgAnalytics.js");

var subscribeMessage = __webpack_require__(/*! ./subscribeMessage */ "./src/wechat/subscribeMessage.js");

BaaS._config.VERSION = "v3.13.0-beta.7";
BaaS.use(core);
BaaS.use(polyfill);
BaaS.use(wechatAuth);
BaaS.use(censor);
BaaS.use(reportTemplateMsgAnalytics);
BaaS.use(subscribeMessage);
BaaS.pay = __webpack_require__(/*! ./pay */ "./src/wechat/pay.js");
BaaS.order = __webpack_require__(/*! ./order */ "./src/wechat/order.js");
BaaS.request = __webpack_require__(/*! ./request */ "./src/wechat/request.js");
BaaS._baasRequest = __webpack_require__(/*! ./baasRequest */ "./src/wechat/baasRequest.js");
BaaS.uploadFile = __webpack_require__(/*! ./uploadFile */ "./src/wechat/uploadFile.js");
BaaS.getWXACode = __webpack_require__(/*! ./getWXACode */ "./src/wechat/getWXACode.js");
BaaS.wxDecryptData = __webpack_require__(/*! ./wxDecryptData */ "./src/wechat/wxDecryptData.js");
BaaS.wxReportTicket = __webpack_require__(/*! ./wxReportTicket */ "./src/wechat/wxReportTicket.js");
BaaS.ErrorTracker = __webpack_require__(/*! ./errorTracker */ "./src/wechat/errorTracker.js");

BaaS._createRequestMethod(); // 暴露 BaaS 到小程序环境


if (typeof wx !== 'undefined') {
  wx.BaaS = BaaS;
}

module.exports = BaaS;

/***/ }),

/***/ "./src/wechat/order.js":
/*!*****************************!*\
  !*** ./src/wechat/order.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! core-module/baas */ "../core/baas.js");
/**
 * 获取支付订单
 * @function
 * @deprecated
 * @memberof BaaS
 * @param {BaaS.OrderParams} params 参数
 * @return {Promise<any>}
 */


var order = function order(params) {
  var orderInst = new BaaS.Order();
  return orderInst.get(params.transactionID);
};

module.exports = order;

/***/ }),

/***/ "./src/wechat/pay.js":
/*!***************************!*\
  !*** ./src/wechat/pay.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! core-module/baas */ "../core/baas.js");

var HError = __webpack_require__(/*! core-module/HError */ "../core/HError.js");

var polyfill = BaaS._polyfill;
var API = BaaS._config.API;
var keysMap = {
  merchandiseSchemaID: 'merchandise_schema_id',
  // optional
  merchandiseRecordID: 'merchandise_record_id',
  // optional
  merchandiseSnapshot: 'merchandise_snapshot',
  // optional
  profitSharing: 'profit_sharing',
  // optional
  merchandiseDescription: 'merchandise_description',
  // required
  totalCost: 'total_cost' // required

  /**
   * 微信支付
   * @function
   * @memberof BaaS
   * @param {BaaS.PaymentParams} params 参数
   * @return {Promise<any>}
   */

};

var pay = function pay(params) {
  var paramsObj = {};

  for (var key in params) {
    paramsObj[keysMap[key]] = params[key];
  }

  paramsObj.gateway_type = 'weixin_tenpay';
  return BaaS._baasRequest({
    url: API.PAY,
    method: 'POST',
    data: paramsObj
  }).then(function (res) {
    var data = res.data || {};
    return new Promise(function (resolve, reject) {
      polyfill.wxPaymentRequest({
        appId: data.appId,
        timeStamp: data.timeStamp,
        nonceStr: data.nonceStr,
        package: data.package,
        signType: 'MD5',
        paySign: data.paySign,
        success: function success(res) {
          res.transaction_no = data.transaction_no;
          res.trade_no = data.trade_no;
          return resolve(res);
        },
        complete: function complete(res) {
          // 兼容：微信 6.5.2 及之前版本中，用户取消支付不会触发 fail 回调，只会触发 complete 回调，回调 errMsg 为 'requestPayment:cancel'
          if (res.errMsg == 'requestPayment:fail cancel') {
            reject(new HError(607));
          }
        },
        fail: function fail(err) {
          // 微信不使用状态码来区分支付取消和支付失败，这里返回自定义状态码和微信的错误信息，便于用户判断和排错
          if (err.errMsg == 'requestPayment:fail cancel') {
            reject(new HError(607));
          } else {
            reject(new HError(608, err.errMsg));
          }
        }
      });
    });
  });
};

module.exports = pay;

/***/ }),

/***/ "./src/wechat/polyfill.js":
/*!********************************!*\
  !*** ./src/wechat/polyfill.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var tplMsgStatsReport = __webpack_require__(/*! core-module/tplMsgStatsReport */ "../core/tplMsgStatsReport.js");

var constants = __webpack_require__(/*! core-module/constants */ "../core/constants.js");

var utils = __webpack_require__(/*! core-module/utils */ "../core/utils/index.js");

var WebSocket = __webpack_require__(/*! ./websocket */ "./src/wechat/websocket.js");

module.exports = function (BaaS) {
  _extends(BaaS._polyfill, {
    wxLogin: function wxLogin() {
      var _wx;

      return (_wx = wx).login.apply(_wx, arguments);
    },
    wxGetUserInfo: function wxGetUserInfo() {
      var _wx2;

      return (_wx2 = wx).getUserInfo.apply(_wx2, arguments);
    },
    wxPaymentRequest: function wxPaymentRequest() {
      var _wx3;

      return (_wx3 = wx).requestPayment.apply(_wx3, arguments);
    },
    CLIENT_PLATFORM: 'WECHAT',
    setStorageSync: function setStorageSync(k, v) {
      return utils.withRetry(wx.setStorageSync)(k, v);
    },
    getStorageSync: function getStorageSync(k) {
      return utils.withRetry(wx.getStorageSync)(k);
    },
    setStorageAsync: function setStorageAsync(k, v) {
      return new Promise(function (resolve, reject) {
        wx.setStorage({
          key: k,
          data: v,
          success: resolve,
          fail: reject
        });
      });
    },
    getStorageAsync: function getStorageAsync(k) {
      return new Promise(function (resolve) {
        wx.getStorage({
          key: k,
          success: function success(res) {
            return resolve(res.data);
          },
          fail: function fail() {
            return resolve(undefined);
          }
        });
      });
    },
    getSystemInfoSync: function getSystemInfoSync() {
      return wx.getSystemInfoSync();
    },
    linkWechat: function linkWechat() {
      var _BaaS$auth;

      return (_BaaS$auth = BaaS.auth).linkWechat.apply(_BaaS$auth, arguments);
    },
    checkLatestVersion: function checkLatestVersion() {
      var info = wx.getSystemInfoSync();

      if (info.platform === 'devtools') {
        BaaS.checkVersion({
          platform: constants.PLATFORM.WECHAT
        });
      }
    },
    handleLoginSuccess: function handleLoginSuccess(res, isAnonymous, userInfo) {
      // 登录成功的 hook （login、loginWithWechat、register）调用成功后触发
      BaaS.storage.set(constants.STORAGE_KEY.UID, res.data.user_id);
      BaaS.storage.set(constants.STORAGE_KEY.OPENID, res.data.openid || '');
      BaaS.storage.set(constants.STORAGE_KEY.UNIONID, res.data.unionid || '');
      BaaS.storage.set(constants.STORAGE_KEY.AUTH_TOKEN, res.data.token);

      if (res.data.openid) {
        BaaS.storage.set(constants.STORAGE_KEY.USERINFO, _extends({}, BaaS.storage.get(constants.STORAGE_KEY.USERINFO), userInfo || {
          id: res.data.user_id,
          openid: res.data.openid,
          unionid: res.data.unionid
        }));
      }

      BaaS.storage.set(constants.STORAGE_KEY.EXPIRES_AT, Math.floor(Date.now() / 1000) + res.data.expires_in - 30);

      if (isAnonymous) {
        BaaS.storage.set(constants.STORAGE_KEY.IS_ANONYMOUS_USER, 1);
      } else {
        BaaS.storage.set(constants.STORAGE_KEY.IS_ANONYMOUS_USER, 0);
        tplMsgStatsReport.reportStats();
      }
    },
    WebSocket: WebSocket
  });
};

/***/ }),

/***/ "./src/wechat/reportTemplateMsgAnalytics.js":
/*!**************************************************!*\
  !*** ./src/wechat/reportTemplateMsgAnalytics.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var tplMsgStatsReport = __webpack_require__(/*! core-module/tplMsgStatsReport */ "../core/tplMsgStatsReport.js");

var WECHAT_SCENE_FROM_TEMPLATE_MESSAGE_CARD = 1014;

module.exports = function (BaaS) {
  _extends(BaaS, {
    /**
     * 上报模板消息卡片点击事件
     * @function
     * @memberof BaaS
     * @param {any} options onShow 方法中的 options 参数
     */
    reportTemplateMsgAnalytics: function reportTemplateMsgAnalytics(options) {
      if (options.scene == WECHAT_SCENE_FROM_TEMPLATE_MESSAGE_CARD && options.query && options.query._H_utm_campaign) {
        tplMsgStatsReport.pushStats(options.query._H_utm_campaign);
      }

      tplMsgStatsReport.reportStats();
    }
  });
};

/***/ }),

/***/ "./src/wechat/request.js":
/*!*******************************!*\
  !*** ./src/wechat/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! core-module/baas */ "../core/baas.js");

var HError = __webpack_require__(/*! core-module/HError */ "../core/HError.js");

var utils = __webpack_require__(/*! core-module/utils */ "../core/utils/index.js");

var constants = __webpack_require__(/*! core-module/constants */ "../core/constants.js");

var wxRequestFail = function wxRequestFail(reject) {
  wx.getNetworkType({
    success: function success(res) {
      if (res.networkType === 'none') {
        reject(new HError(600)); // 断网
      } else {
        reject(new HError(601)); // 网络超时
      }
    }
  });
};
/**
 * 网络请求
 * @function
 * @memberof BaaS
 * @param {BaaS.RequestParams} params 参数
 * @return {Promise<BaaS.Response<any>>}
 */


var request = function request(_ref) {
  var url = _ref.url,
      _ref$method = _ref.method,
      method = _ref$method === void 0 ? 'GET' : _ref$method,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      _ref$header = _ref.header,
      header = _ref$header === void 0 ? {} : _ref$header,
      _ref$dataType = _ref.dataType,
      dataType = _ref$dataType === void 0 ? 'json' : _ref$dataType;
  return utils.mergeRequestHeader(header).then(function (headers) {
    return new Promise(function (resolve, reject) {
      if (!BaaS._config.CLIENT_ID) {
        return reject(new HError(602));
      }

      if (!/https?:\/\//.test(url)) {
        var API_HOST = BaaS._polyfill.getAPIHost();

        url = API_HOST.replace(/\/$/, '') + '/' + url.replace(/^\//, '');
      }

      wx.request({
        method: method,
        url: url,
        data: data,
        header: headers,
        dataType: dataType,
        success: resolve,
        fail: function fail() {
          wxRequestFail(reject);
        }
      });
      utils.log(constants.LOG_LEVEL.INFO, 'Request => ' + url);
    });
  });
};

module.exports = request;
module.exports.wxRequestFail = wxRequestFail;

/***/ }),

/***/ "./src/wechat/subscribeMessage.js":
/*!****************************************!*\
  !*** ./src/wechat/subscribeMessage.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! core-module/baas */ "../core/baas.js");

var API = BaaS._config.API;

module.exports = function (BaaS) {
  /**
   * 上报订阅消息订阅关系
   * @function
   * @memberof BaaS
   * @param {BaaS.SubscribeMessageOptions} options 参数
   * @return {Promise<BaaS.Response<any>>}
   */
  BaaS.subscribeMessage = function (subscription) {
    return BaaS._baasRequest({
      url: API.WECHAT.SUBSCRIBE_MESSAGE,
      method: 'POST',
      data: subscription
    });
  };
};

/***/ }),

/***/ "./src/wechat/uploadFile.js":
/*!**********************************!*\
  !*** ./src/wechat/uploadFile.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var BaaS = __webpack_require__(/*! core-module/baas */ "../core/baas.js");

var constants = __webpack_require__(/*! core-module/constants */ "../core/constants.js");

var HError = __webpack_require__(/*! core-module/HError */ "../core/HError.js");

var utils = __webpack_require__(/*! core-module/utils */ "../core/utils/index.js");

var _require = __webpack_require__(/*! core-module/upload */ "../core/upload.js"),
    getUploadFileConfig = _require.getUploadFileConfig,
    getUploadHeaders = _require.getUploadHeaders;

var wxUpload = function wxUpload(config, resolve, reject, type) {
  return getUploadHeaders().then(function (header) {
    return wx.uploadFile({
      url: config.uploadUrl,
      filePath: config.filePath,
      name: constants.UPLOAD.UPLOAD_FILE_KEY,
      formData: {
        authorization: config.authorization,
        policy: config.policy
      },
      header: header,
      success: function success(res) {
        var result = {};
        var data = JSON.parse(res.data);
        result.status = 'ok';
        result.path = config.destLink;
        result.file = {
          'id': config.id,
          'path': config.destLink,
          'name': config.fileName,
          'created_at': data.time,
          'mime_type': data.mimetype,
          'cdn_path': data.url,
          'size': data.file_size
        };
        delete res.data;

        if (type && type === 'json') {
          res.data = result;
        } else {
          res.data = JSON.stringify(result);
        }

        try {
          resolve(utils.validateStatusCode(res));
        } catch (err) {
          reject(err);
        }
      },
      fail: function fail() {
        BaaS.request.wxRequestFail(reject);
      }
    });
  });
};
/**
 * 上传文件。
 * @memberof BaaS
 * @param {FileParams} fileParams 文件参数
 * @param {FileMeta} metaData 文件元信息
 * @param {string} type 文件类型
 * @return {Promise<any>}
 */


var uploadFile = function uploadFile(fileParams, metaData, type) {
  if (!fileParams || _typeof(fileParams) !== 'object' || !fileParams.filePath) {
    throw new HError(605);
  }

  if (!metaData) {
    metaData = {};
  } else if (_typeof(metaData) !== 'object') {
    throw new HError(605);
  }

  var rs,
      rj,
      uploadCallback,
      isAborted,
      uploadTask = null;
  var p = new Promise(function (resolve, reject) {
    rs = resolve;
    rj = reject;
  });

  var onProgressUpdate = function onProgressUpdate(cb) {
    if (uploadTask) {
      uploadTask.onProgressUpdate(cb);
    } else {
      uploadCallback = cb;
    }

    return this;
  };

  var abort = function abort() {
    if (uploadTask) {
      uploadTask.abort();
    }

    isAborted = true;
    return this;
  };

  function mix(obj) {
    return _extends(obj, {
      catch: function _catch() {
        var _Promise$prototype$ca;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var newPromise = (_Promise$prototype$ca = Promise.prototype.catch).call.apply(_Promise$prototype$ca, [this].concat(args));

        mix(newPromise);
        return newPromise;
      },
      then: function then() {
        var _Promise$prototype$th;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var newPromise = (_Promise$prototype$th = Promise.prototype.then).call.apply(_Promise$prototype$th, [this].concat(args));

        mix(newPromise);
        return newPromise;
      },
      abort: abort,
      onProgressUpdate: onProgressUpdate
    });
  }

  mix(p);
  var fileName = utils.getFileNameFromPath(fileParams.filePath);
  getUploadFileConfig(fileName, utils.replaceQueryParams(metaData)).then(function (res) {
    if (isAborted) return rj(new Error('aborted'));
    var config = {
      id: res.data.id,
      fileName: fileName,
      policy: res.data.policy,
      authorization: res.data.authorization,
      uploadUrl: res.data.upload_url,
      filePath: fileParams.filePath,
      destLink: res.data.path
    };
    uploadTask = wxUpload(config, function (e) {
      if (isAborted) return rj(new Error('aborted'));
      rs(e);
    }, rj, type);

    if (uploadCallback) {
      uploadTask.onProgressUpdate(uploadCallback);
    }
  }, rj);
  return p;
};

module.exports = uploadFile;

/***/ }),

/***/ "./src/wechat/vendor/bugOut.min.js":
/*!*****************************************!*\
  !*** ./src/wechat/vendor/bugOut.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  var t = {
    url: {
      sdkDown: "https://dataapi.testin.cn/sdkDown",
      track: "https://dataapi.testin.cn/sendEvents"
    },
    sdkDown: {
      pid: "",
      pl: "miniPrograms",
      sv: "1.1.1",
      testin_id: "",
      testin_time: 0,
      testin_type: "track",
      testin_name: "testin_bug",
      testin_first: !0,
      di: {
        testin_schan: ["testin_schan_bugout"],
        testin_av: "",
        testin_wechat_ver: "",
        testin_tm: 0,
        testin_pa: "",
        testin_brand: "",
        testin_model: "",
        testin_os: "",
        testin_ov: "",
        testin_dh: 0,
        testin_dw: 0,
        testin_lan: "",
        testin_net: "",
        testin_bug_type: 1,
        testin_bug_lan: 4,
        testin_component_ver: "",
        testin_bug_bn: "",
        testin_bug_pr: "",
        testin_bug_ww: 0,
        testin_bug_wh: 0,
        testin_bug_sbh: "",
        testin_bug_fss: "",
        testin_bus: 2
      }
    },
    record: {
      testin_pid: "",
      testin_id: "",
      testin_pl: "miniPrograms",
      testin_time: 0,
      testin_type: "track",
      testin_name: "testin_bug",
      testin_sv: "1.1.1",
      attrs: {
        testin_av: "",
        testin_wechat_ver: "",
        testin_tm: 0,
        testin_pa: "",
        testin_brand: "",
        testin_model: "",
        testin_os: "",
        testin_ov: "",
        testin_dh: 0,
        testin_dw: 0,
        testin_lan: "",
        testin_url: "",
        testin_net: "",
        testin_bug_type: 1,
        testin_bug_lan: 4,
        testin_component_ver: "",
        testin_bug_bn: "",
        testin_bug_stack: "",
        testin_bug_sv: "1.1.1",
        testin_bug_pr: "0",
        testin_bug_ww: 0,
        testin_bug_wh: 0,
        testin_bug_sbh: "",
        testin_bug_fss: "",
        testin_bug_rea: "",
        testin_bug_slog: "",
        testin_bug_name: "",
        testin_bus: 2
      }
    },
    breadcrumb: [],
    sdkInitComplete: !1
  },
      e = {
    uuid: function uuid() {
      var t, e, n;
      !function () {
        if (!t) {
          var n = new Array(16);

          e = t = function t() {
            for (var t, e = 0; e < 16; e++) {
              0 == (3 & e) && (t = 4294967296 * Math.random()), n[e] = t >>> ((3 & e) << 3) & 255;
            }

            return n;
          };
        }
      }();

      for (var s = "function" == typeof Buffer ? Buffer : Array, r = [], i = {}, o = 0; o < 256; o++) {
        r[o] = (o + 256).toString(16).substr(1), i[r[o]] = o;
      }

      function a(t, e) {
        var n = e || 0,
            s = r;
        return s[t[n++]] + s[t[n++]] + s[t[n++]] + s[t[n++]] + "-" + s[t[n++]] + s[t[n++]] + "-" + s[t[n++]] + s[t[n++]] + "-" + s[t[n++]] + s[t[n++]] + "-" + s[t[n++]] + s[t[n++]] + s[t[n++]] + s[t[n++]] + s[t[n++]] + s[t[n++]];
      }

      function u(e, n, r) {
        var i = n && r || 0;
        "string" == typeof e && (n = "binary" === e ? new s(16) : null, e = null);
        var o = (e = e || {}).random || (e.rng || t)();
        if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, n) for (var u = 0; u < 16; u++) {
          n[i + u] = o[u];
        }
        return n || a(o);
      }

      var _ = u;
      return _.v4 = u, _.parse = function (t, e, n) {
        var s = e && n || 0,
            r = 0;

        for (e = e || [], t.toLowerCase().replace(/[0-9a-f]{2}/g, function (t) {
          r < 16 && (e[s + r++] = i[t]);
        }); r < 16;) {
          e[s + r++] = 0;
        }

        return e;
      }, _.unparse = a, _.BufferClass = s, _._rng = t, _._mathRNG = e, _._nodeRNG = void 0, _._whatwgRNG = n, _();
    },
    getCurrentPageUrl: function getCurrentPageUrl() {
      var t = getCurrentPages();
      if (t.length) return t[t.length - 1];
    },
    getAesKey: function getAesKey() {
      var t,
          e = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
          n = e.length,
          s = "";

      for (t = 0; t < 16; t++) {
        s += e.charAt(Math.floor(Math.random() * n));
      }

      return s;
    },
    reWriteApp: function reWriteApp(e) {
      var n = App,
          s = this;

      App = function App(r) {
        return ["onLaunch", "onShow", "onHide", "onError"].forEach(function (n) {
          var i = r[n];

          r[n] = function (r) {
            "onLaunch" === n && (t.sdkDown.di.testin_chan = t.record.attrs.testin_chan = r.scene);
            var o = {};
            "onError" === n ? (o.testin_bug_s_time = s.nowTime(), o.testin_bug_s_tit = "⬆⬆⬆⬆⬆BUG在此⬆⬆⬆⬆⬆", o.testin_bug_s_con = "App: " + n) : (o.testin_bug_s_time = s.nowTime(), o.testin_bug_s_tit = r && r.path || "", o.testin_bug_s_con = "App: " + n), s.pushToBreadcrumb(o), "onError" === n && e.track(r), i && i.call(this, r);
          };
        }), n(r);
      };
    },
    reWritePage: function reWritePage() {
      var t = this,
          e = Page;

      Page = function Page(n) {
        return Object.keys(n).forEach(function (e) {
          "function" == typeof n[e] && t.recordPageFn(n, e);
        }), n.onReady || t.recordPageFn(n, "onReady"), n.onLoad || t.recordPageFn(n, "onLoad"), e(n);
      };
    },
    reWriteWxRequest: function reWriteWxRequest() {
      var e = this,
          n = wx.request;

      try {
        Object.defineProperty(wx, "request", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function value() {
            var s = arguments[0] || {},
                r = e.nowTime();
            return s.url.indexOf(t.url.sdkDown) > -1 || s.url.indexOf(t.url.track) > -1 ? n.apply(wx, arguments) : (s.complete ? e.reWriteComplete(s, r) : s.complete = function (t) {
              e.pushToBreadcrumb({
                testin_bug_s_time: e.nowTime(),
                testin_bug_s_tit: s.url,
                testin_bug_s_con: s.method + ", status: " + t.statusCode
              });
            }, n.apply(wx, arguments));
          }
        });
      } catch (t) {
        console.log(t, "此内容为bugout所有~~");
      }
    },
    reWriteComplete: function reWriteComplete(t, e) {
      var n = this,
          s = t.complete;

      t.complete = function (e) {
        return n.pushToBreadcrumb({
          testin_bug_s_time: n.nowTime(),
          testin_bug_s_tit: t.url,
          testin_bug_s_con: t.method + ", status: " + e.statusCode
        }), s(e);
      };
    },
    reWriteConsole: function reWriteConsole() {
      var t = {
        log: "L",
        info: "I",
        error: "E",
        warn: "W",
        debug: "D"
      },
          e = this;
      this.consoleList = [], ["debug", "error", "info", "log", "warn"].forEach(function (n) {
        !function (s) {
          console[n] = function (r) {
            e.consoleList.push(e.nowTimeTrans() + " " + t[n] + "/console(0): " + r), e.consoleList.length > 100 && e.consoleList.shift(), s.apply(console, arguments);
          };
        }(console[n]);
      });
    },
    recordPageFn: function recordPageFn(t, e) {
      var n = t[e],
          s = this;

      t[e] = function () {
        "onLoad" !== e && "onShow" !== e || (s.activePage = s.getCurrentPageUrl());
        var t = {
          testin_bug_s_time: s.nowTime(),
          testin_bug_s_tit: s.activePage ? s.activePage.route : "-",
          testin_bug_s_con: "Page: " + e
        };
        return "onLoad" === e && (t.args = arguments), s.pushToBreadcrumb(t), n && n.apply(this, arguments);
      };
    },
    nowTime: function nowTime() {
      return new Date().getTime();
    },
    timeZone: function timeZone() {
      return new Date().getTimezoneOffset() / 60;
    },
    nowTimeTrans: function nowTimeTrans() {
      var t = new Date();
      return (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-" + ((t.getDate() < 10 ? "0" + t.getDate() : t.getDate()) + " ") + ((t.getHours() < 10 ? "0" + t.getHours() : t.getHours()) + ":") + ((t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()) + ":") + (t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds()) + ("." + (t.getTime() + "").slice(-3));
    },
    pushToBreadcrumb: function pushToBreadcrumb(e) {
      t.breadcrumb.push(e), t.breadcrumb.length > 100 && t.breadcrumb.shift();
    },
    getStorage: function getStorage() {
      var e = this;
      wx.getStorage({
        key: "testin_id",
        success: function success(e) {
          t.sdkDown.testin_first = !1, t.sdkDown.testin_id = t.record.testin_eid = t.record.testin_id = e.data;
        },
        fail: function fail() {
          var n = e.uuid();
          wx.setStorage({
            key: "testin_id",
            data: n
          }), t.sdkDown.testin_first = !0, t.sdkDown.testin_id = t.record.testin_eid = t.record.testin_id = n;
        }
      });
    }
  },
      n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  };
  return {
    init: function init(s, r, i) {
      var o = void 0,
          a = this;

      function u(n, r) {
        if (e.reWriteConsole(), n.usePlugins || (e.reWriteWxRequest(), e.reWritePage(), e.reWriteApp(a)), "boolean" == typeof s) {
          if (t.sdkDown.di.testin_zone = t.record.attrs.testin_zone = e.timeZone(), t.sdkDown.di.testin_av = t.record.attrs.testin_av = i, e.bugOutPower = s, wx.getAccountInfoSync) {
            var o = wx.getAccountInfoSync();
            t.sdkDown.di.testin_pa = t.record.attrs.testin_pa = o.miniProgram.appId;
          }

          t.sdkDown.pid = t.record.testin_pid = r, t.sdkDown.testin_time = e.nowTime(), e.getStorage(), wx.getSystemInfo({
            success: function success(e) {
              var n = e.system.split(" ");
              t.record.attrs.testin_wechat_ver = t.sdkDown.di.testin_wechat_ver = e.version, t.record.attrs.testin_brand = t.sdkDown.di.testin_brand = e.brand, t.record.attrs.testin_model = t.sdkDown.di.testin_model = e.model, t.record.attrs.testin_os = t.sdkDown.di.testin_os = n[0], t.record.attrs.testin_ov = t.sdkDown.di.testin_ov = n[1], t.record.attrs.testin_dh = t.sdkDown.di.testin_dh = e.screenHeight, t.record.attrs.testin_dw = t.sdkDown.di.testin_dw = e.screenWidth, t.record.attrs.testin_lan = t.sdkDown.di.testin_lan = e.language, t.record.attrs.testin_bug_bn = t.sdkDown.di.testin_bug_bn = e.platform, t.record.attrs.testin_component_ver = t.sdkDown.di.testin_component_ver = e.SDKVersion, t.record.attrs.testin_bug_pr = t.sdkDown.di.testin_bug_pr = e.pixelRatio.toFixed(1), t.record.attrs.testin_bug_ww = t.sdkDown.di.testin_bug_ww = e.windowWidth, t.record.attrs.testin_bug_wh = t.sdkDown.di.testin_bug_wh = e.windowHeight, t.record.attrs.testin_bug_sbh = t.sdkDown.di.testin_bug_sbh = e.statusBarHeight, t.record.attrs.testin_bug_fss = t.sdkDown.di.testin_bug_fss = e.fontSizeSetting, e.batteryLevel && (t.record.attrs.testin_bat_rem = t.sdkDown.di.testin_bat_rem = e.batteryLevel);
            },
            complete: function complete() {
              wx.getNetworkType({
                success: function success(e) {
                  t.record.attrs.testin_net = t.sdkDown.di.testin_net = e.networkType;
                },
                complete: function complete() {
                  wx.request({
                    url: t.url.sdkDown,
                    method: "POST",
                    data: t.sdkDown
                  });
                }
              });
            }
          });
        } else console.log("请按照集成文档正确集成SDK");
      }

      "object" === (void 0 === r ? "undefined" : n(r)) ? wx.request({
        url: "https://dataapi.testin.cn/api/getappkey/" + r.clientId,
        header: {
          "Content-Type": "text/html;charset=UTF-8"
        },
        success: function success(t) {
          o = t.data ? t.data : "noPid", u(a, o);
        }
      }) : "string" == typeof r && u(a, o = r);
    },
    track: function track(s) {
      if (e.bugOutPower) {
        "string" == typeof s && (t.record.attrs.testin_bug_rea = s.split("\n")[1], t.record.attrs.testin_bug_name = s.split("\n")[0], t.record.attrs.testin_bug_stack = s), "object" === (void 0 === s ? "undefined" : n(s)) && (t.record.attrs.testin_bug_rea = s.message, t.record.attrs.testin_bug_name = s.name, t.record.attrs.testin_bug_stack = s.stack), t.record.attrs.testin_bug_slog = e.consoleList.join("\n"), t.record.attrs.testin_url = e.getCurrentPageUrl() ? e.getCurrentPageUrl().route : "", t.record.testin_time = e.nowTime(), t.record.attrs.testin_bug_steps = JSON.stringify(t.breadcrumb);
        var r = [];
        r.push(t.record), wx.request({
          url: t.url.track,
          method: "POST",
          data: r
        });
      }
    },
    usePlugins: !1,
    metaData: function metaData(e) {
      return t.record.attrs.testin_bug_user = JSON.stringify(_extends({}, e));
    }
  };
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/buffer/index.js */ "../node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/wechat/websocket.js":
/*!*********************************!*\
  !*** ./src/wechat/websocket.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WebSocket =
/*#__PURE__*/
function () {
  function WebSocket(url, protocols) {
    var _this = this;

    _classCallCheck(this, WebSocket);

    wx.connectSocket({
      url: url,
      protocols: protocols
    });
    wx.onSocketOpen(function () {
      _this.onopen();
    });
    wx.onSocketMessage(function (res) {
      _this.onmessage({
        data: res.data
      });
    });
    wx.onSocketClose(function (res) {
      _this.onclose({
        code: res.code,
        reason: res.reason
      });
    });
  }

  _createClass(WebSocket, [{
    key: "send",
    value: function send(payload) {
      wx.sendSocketMessage({
        data: payload
      });
    }
  }, {
    key: "close",
    value: function close(code, reason) {
      wx.closeSocket({
        code: code,
        reason: reason
      });
    }
  }, {
    key: "onopen",
    value: function onopen() {}
  }, {
    key: "onclose",
    value: function onclose() {}
  }, {
    key: "onmessage",
    value: function onmessage() {}
  }]);

  return WebSocket;
}();

module.exports = WebSocket;

/***/ }),

/***/ "./src/wechat/wxDecryptData.js":
/*!*************************************!*\
  !*** ./src/wechat/wxDecryptData.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! core-module/baas */ "../core/baas.js");

var HError = __webpack_require__(/*! core-module/HError */ "../core/HError.js");

var API = BaaS._config.API;
/**
 * 微信加密数据解密
 * @function
 * @memberof BaaS
 * @param {string} encryptedData 加密的数据
 * @param {string} iv 加密算法的初始向量
 * @param {string} type 数据类型
 * @return {Promise<any>}
 */

var wxDecryptData = function wxDecryptData() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  if (!validateParams(params)) {
    throw new HError(605);
  }

  var paramsObj = {
    encryptedData: params[0],
    iv: params[1]
  };
  return BaaS._baasRequest({
    url: API.WECHAT.DECRYPT + params[2] + '/',
    method: 'POST',
    data: paramsObj
  }).then(function (res) {
    return res.data;
  }, function (err) {
    var code = err.code;
    if (code === 403) throw new HError(403, '微信解密插件未开启');
    throw err;
  });
};

var validateParams = function validateParams(params) {
  if (!(params instanceof Array) || params.length < 3) return false;
  var requiredDataKeys = ['we-run-data', 'open-gid', 'phone-number'];
  return requiredDataKeys.indexOf(params[2]) !== -1;
};

module.exports = wxDecryptData;

/***/ }),

/***/ "./src/wechat/wxReportTicket.js":
/*!**************************************!*\
  !*** ./src/wechat/wxReportTicket.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! core-module/baas */ "../core/baas.js");

var utils = __webpack_require__(/*! core-module/utils */ "../core/utils/index.js");

var API = BaaS._config.API;
/**
 * 上报模板消息所需 formID
 * @function
 * @memberof BaaS
 * @param {string} formID formID
 * @return {Promise<BaaS.Response<any>>}
 */

var wxReportTicket = function wxReportTicket(formID) {
  var paramsObj = utils.makeReportTicketParam(formID);
  return BaaS._baasRequest({
    url: API.WECHAT.TEMPLATE_MESSAGE,
    method: 'POST',
    data: paramsObj
  });
};

module.exports = utils.ticketReportThrottle(wxReportTicket);

/***/ })

/******/ });
});