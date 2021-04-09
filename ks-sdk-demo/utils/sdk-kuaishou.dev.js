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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/kuaishou/index.js");
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
    /**
     * Array 类型字段修改，移除数组末位元素。
     * @method
     * @param {string} key 字段名称
     * @return {this}
     */

  }, {
    key: "pop",
    value: function pop(key) {
      if (typeof key !== 'string' || key.length === 0) {
        throw new HError(605);
      }

      this._record.$set[key] = {
        $pop: 1
      };
      return this;
    }
    /**
     * Array 类型字段修改，移除数组首位元素。
     * @method
     * @param {string} key 字段名称
     * @return {this}
     */

  }, {
    key: "shift",
    value: function shift(key) {
      if (typeof key !== 'string' || key.length === 0) {
        throw new HError(605);
      }

      this._record.$set[key] = {
        $pop: -1
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
     * 将快手账号绑定到当前用户，匿名用户无法调用
     * @param {BaaS.LinkOptions} [options] 参数
     * @returns {Promise<this>} UserRecord 实例
     */

  }, {
    key: "linkKs",
    value: function linkKs() {
      if (this._anonymous) {
        return Promise.reject(new HError(612));
      }

      if (!BaaS._polyfill.linkKs) {
        return Promise.reject(new HError(605, 'linkKs 方法未定义'));
      }

      return BaaS._polyfill.linkKs.apply(null, arguments);
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
      if (utils.isString(args) && args.trim() !== '' || Number.isInteger(args)) {
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
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$expand = _ref.expand,
          expand = _ref$expand === void 0 ? '' : _ref$expand;

      var record = utils.cloneDeep(this._record);

      this._recordValueInit();

      return BaaS.createRecord({
        tableID: this._tableID,
        data: record.$set,
        expand: Array.isArray(expand) ? expand.join(',') : expand
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
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$enableTrigger = _ref2.enableTrigger,
          enableTrigger = _ref2$enableTrigger === void 0 ? true : _ref2$enableTrigger,
          _ref2$withCount = _ref2.withCount,
          withCount = _ref2$withCount === void 0 ? false : _ref2$withCount,
          _ref2$expand = _ref2.expand,
          expand = _ref2$expand === void 0 ? '' : _ref2$expand;

      var record = utils.cloneDeep(this._record);

      this._recordValueInit();

      if (this._recordID != null) {
        return BaaS.updateRecord({
          tableID: this._tableID,
          recordID: this._recordID,
          data: record,
          enable_trigger: enableTrigger ? 1 : 0,
          expand: Array.isArray(expand) ? expand.join(',') : expand
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

var _initCurrentUser = function _initCurrentUser(userInfo, session_expires_at) {
  var user = UserRecord.initCurrentUser(userInfo);
  user.user_id = userInfo.id;
  user.session_expires_at = session_expires_at;
  return user;
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
      return _initCurrentUser(res.data, expiresAt);
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
  _initCurrentUser: _initCurrentUser,
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
var WS_HOST = 'wss://api.ws.myminapp.com';
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
  USER_DETAIL: '/hserve/v2.5/user/info/:userID/',
  USER_LIST: '/hserve/v2.2/user/info/',
  UPDATE_USER: '/hserve/v2.5/user/info/',
  TABLE_LIST: '/hserve/v2.0/table/',
  TABLE_DETAIL: '/hserve/v2.0/table/:tableID/',
  RECORD_LIST: '/hserve/v2.4/table/:tableID/record/',
  QUERY_RECORD_LIST: '/hserve/v2.4/table/:tableID/record/',
  CREATE_RECORD_LIST: '/hserve/v2.4/table/:tableID/record/?enable_trigger=:enable_trigger',
  RECORD_DETAIL: '/hserve/v2.5/table/:tableID/record/:recordID/',
  CREATE_RECORD: '/hserve/v2.4/table/:tableID/record/?expand=:expand',
  UPDATE_RECORD: '/hserve/v2.5/table/:tableID/record/:recordID/?enable_trigger=:enable_trigger&expand=:expand',
  UPDATE_RECORD_LIST: '/hserve/v2.4/table/:tableID/record/?limit=:limit&offset=:offset&where=:where&enable_trigger=:enable_trigger&return_total_count=:return_total_count',
  DELETE_RECORD: '/hserve/v2.5/table/:tableID/record/:recordID/',
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
    THIRD_PARTY_ASSOCIATE: '/hserve/v2.0/idp/:provider/user-association/',
    THIRD_PARTY_AUTH: '/hserve/v2.0/idp/:provider/redirect/',
    THIRD_PARTY_LOGIN: '/hserve/v2.0/idp/:provider/authenticate/',
    THIRD_PARTY_SILENT_LOGIN: '/hserve/v2.5/idp/:provider/silent-login/'
  },
  WECHAT: {
    SILENT_LOGIN: '/hserve/v2.5/idp/wechat/silent-login/',
    AUTHENTICATE: '/hserve/v2.5/idp/wechat/authenticate/',
    USER_ASSOCIATE: '/hserve/v2.4/idp/wechat/user-associate/',
    TEMPLATE_MESSAGE: '/hserve/v2.0/template-message-ticket/',
    SUBSCRIBE_MESSAGE: '/hserve/v2.2/subscription-message/relationship-report/',
    DECRYPT: '/hserve/v1/wechat/decrypt/',
    WXACODE: '/hserve/v2.4/miniappcode/',
    CENSOR_IMAGE: '/hserve/v1.7/censor-image/',
    CENSOR_MSG: '/hserve/v1.7/censor-msg/',
    CENSOR_ASYNC: '/hserve/v2.2/async-censor/',
    JSSDK_CREDENTIALS: '/hserve/v2.4/idp/wechat/jssdk-credentials/',
    PHONE_LOGIN: '/hserve/v2.5/idp/wechat/phone-login/',
    UPDATE_PHONE: '/hserve/v2.5/idp/wechat/phone-verification/'
  },
  QQ: {
    SILENT_LOGIN: '/hserve/v2.5/idp/qq/silent-login/',
    AUTHENTICATE: '/hserve/v2.5/idp/qq/authenticate/',
    USER_ASSOCIATE: '/hserve/v2.0/idp/qq/user-association/',
    TEMPLATE_MESSAGE: '/hserve/v2.0/template-message-ticket/',
    SUBSCRIBE_MESSAGE: '/hserve/v2.2/subscription-message/relationship-report/',
    DECRYPT: '/hserve/v2.0/qq/decrypt/',
    CENSOR_IMAGE: '/hserve/v2.2/qq/censor-image/',
    CENSOR_MSG: '/hserve/v2.2/qq/censor-msg/'
  },
  BAIDU: {
    SILENT_LOGIN: '/hserve/v2.5/idp/baidu/silent-login/',
    AUTHENTICATE: '/hserve/v2.5/idp/baidu/authenticate/',
    USER_ASSOCIATE: '/hserve/v2.1/idp/baidu/user-association/',
    TEMPLATE_MESSAGE: '/hserve/v2.0/template-message-ticket/'
  },
  ALIPAY: {
    SILENT_LOGIN: '/hserve/v2.5/idp/alipay/silent-login/',
    AUTHENTICATE: '/hserve/v2.5/idp/alipay/authenticate/',
    USER_ASSOCIATE: '/hserve/v2.0/idp/alipay/user-associate/',
    TEMPLATE_MESSAGE: '/hserve/v2.0/template-message-ticket/',
    MINIAPP_QR_CODE: '/hserve/v2.0/idp/alipay/miniapp-qr-code/',
    CENSOR_MSG: '/hserve/v2.4/alipay/censor-msg/'
  },
  BYTEDANCE: {
    SILENT_LOGIN: '/hserve/v2.5/idp/bytedance/silent-login/',
    AUTHENTICATE: '/hserve/v2.5/idp/bytedance/authenticate/',
    USER_ASSOCIATE: '/hserve/v2.4/idp/bytedance/user-association/',
    TEMPLATE_MESSAGE: '/hserve/v2.0/template-message-ticket/',
    MINIAPP_QR_CODE: '/hserve/v2.4/idp/bytedance/miniapp-qr-code/'
  },
  JINGDONG: {
    SILENT_LOGIN: '/hserve/v2.5/idp/jd/silent-login/',
    AUTHENTICATE: '/hserve/v2.5/idp/jd/authenticate/',
    USER_ASSOCIATE: '/hserve/v2.4/idp/jd/user-association/'
  },
  KUAISHOU: {
    SILENT_LOGIN: '/hserve/v2.5/idp/kuaishou/silent-login/',
    AUTHENTICATE: '/hserve/v2.5/idp/kuaishou/authenticate/',
    USER_ASSOCIATE: '/hserve/v2.5/idp/kuaishou/user-association/'
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
  WS_HOST: WS_HOST,
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
    AUTH_RESULT: 'auth-result',
    SILENT_LOGIN: 'silent_login'
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
        _ref$ws_host = _ref.ws_host,
        ws_host = _ref$ws_host === void 0 ? '' : _ref$ws_host,
        env = _ref.env;

    if (!utils.isString(clientID)) {
      throw new HError(605);
    }

    if (logLevel) {
      utils.setLogLevel(logLevel);
    }

    BaaS._config.AUTO_LOGIN = autoLogin;
    BaaS._config.ENV = env;
    BaaS._config.CLIENT_ID = clientID;
    BaaS._config.API_HOST = host;
    BaaS._config.WS_HOST = ws_host;
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
  getWSHost: function getWSHost() {
    var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

    return BaaS._config.WS_HOST || "wss://".concat(BaaS._config.CLIENT_ID, ".ws.myminapp.com");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var getExpiredAt = function getExpiredAt(expiresIn) {
  return Math.floor(Date.now() / 1000) + expiresIn - 30;
};

var flatAuthResponse = function flatAuthResponse(res) {
  var userInfo = res.data.user_info;
  return _objectSpread({}, res, {
    data: _objectSpread({}, userInfo, res.data, {
      user_id: userInfo.id,
      expired_at: getExpiredAt(res.data.expires_in),
      alipay_user_id: userInfo._provider && userInfo._provider.alipay && userInfo._provider.alipay.user_id
    })
  });
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
  flatAuthResponse: flatAuthResponse,
  getExpiredAt: getExpiredAt,
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


function shouldTryAgain() {
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
    var host = BaaS._polyfill.getWSHost();

    var url = host.replace(/\/$/, '') + '/' + BaaS._config.WS_PATH;

    _subscribe = subscriber({
      WebSocket: BaaS._polyfill.WebSocket,
      url: url,
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

/***/ "./src/kuaishou/auth.js":
/*!******************************!*\
  !*** ./src/kuaishou/auth.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
  var API = BaaS._config.API;

  var getLoginCode = function getLoginCode() {
    return new Promise(function (resolve, reject) {
      ks.login({
        success: function success(res) {
          resolve(res.code);
        },
        fail: function fail() {
          BaaS.request.ksRequestFail(reject);
        }
      });
    });
  }; // 获取登录凭证 code, 进而换取用户登录态信息


  var auth = function auth() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$createUser = _ref.createUser,
        createUser = _ref$createUser === void 0 ? true : _ref$createUser;

    return new Promise(function (resolve, reject) {
      getLoginCode().then(function (code) {
        sessionInit({
          code: code,
          createUser: createUser
        }, resolve, reject);
      }, reject);
    });
  }; // code 换取 session_key，生成并获取 3rd_session 即 token


  var sessionInit = function sessionInit(_ref2, resolve, reject) {
    var code = _ref2.code,
        createUser = _ref2.createUser;
    return BaaS.request({
      url: API.KUAISHOU.SILENT_LOGIN,
      method: 'POST',
      data: {
        create_user: createUser,
        code: code
      }
    }).then(utils.validateStatusCode).then(utils.flatAuthResponse).then(function (res) {
      BaaS._polyfill.handleLoginSuccess(res);

      resolve(res);
    }, reject);
  };

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
  });

  var getSensitiveData = function getSensitiveData(data) {
    return BaaS.request({
      url: API.KUAISHOU.AUTHENTICATE,
      method: 'POST',
      data: data
    }).then(utils.validateStatusCode).then(utils.flatAuthResponse);
  };

  var getUserInfo = function getUserInfo() {
    return new Promise(function (resolve, reject) {
      ks.getUserInfo({
        withCredentials: true,
        success: resolve,
        fail: reject
      });
    });
  }; // 提供给开发者在 button (open-type="getUserInfo") 的回调中调用，对加密数据进行解密，同时将 userinfo 存入 storage 中


  var handleUserInfo = function handleUserInfo(res) {
    if (!res || !res.detail) {
      throw new HError(603);
    }

    var detail = res.detail;
    var createUser = !!res.createUser;
    var syncUserProfile = res.syncUserProfile; // 用户拒绝授权，仅返回 uid, openid

    if (!detail.userInfo) {
      return Promise.all([storageAsync.get(constants.STORAGE_KEY.UID), storageAsync.get(constants.STORAGE_KEY.OPENID)]).then(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            id = _ref6[0],
            openid = _ref6[1];

        return Promise.reject(_extends(new HError(603), {
          id: id,
          openid: openid
        }));
      });
    }

    return getLoginCode().then(function (code) {
      return getUserInfo().then(function (detail) {
        var payload = {
          code: code,
          create_user: createUser,
          rawData: detail.rawData,
          iv: detail.iv,
          encryptedData: detail.encryptedData,
          signature: detail.signature,
          update_userprofile: utils.getUpdateUserProfileParam(syncUserProfile)
        };
        return getSensitiveData(payload);
      });
    }).then(function (res) {
      var userInfo = detail.userInfo;
      userInfo.id = res.data.user_id;
      userInfo.openid = res.data.openid;

      BaaS._polyfill.handleLoginSuccess(res, false, userInfo);

      return res;
    });
  };

  var linkKs = function linkKs(res) {
    var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref7$syncUserProfile = _ref7.syncUserProfile,
        syncUserProfile = _ref7$syncUserProfile === void 0 ? constants.UPDATE_USERPROFILE_VALUE.SETNX : _ref7$syncUserProfile;

    var refreshUserInfo = false;

    if (res && res.detail && res.detail.userInfo) {
      refreshUserInfo = true;
    }

    return getLoginCode().then(function (code) {
      // 如果用户传递了授权信息，则重新获取一次 userInfo, 避免因为重新获取 code 导致 session 失效而解密失败
      var getUserInfoPromise = refreshUserInfo ? getUserInfo() : Promise.resolve(null);
      return getUserInfoPromise.then(function (res) {
        var payload = res ? {
          rawData: res.rawData,
          signature: res.signature,
          encryptedData: res.encryptedData,
          iv: res.iv,
          update_userprofile: utils.getUpdateUserProfileParam(syncUserProfile),
          code: code
        } : {
          code: code
        };
        return BaaS._baasRequest({
          method: 'POST',
          url: API.KUAISHOU.USER_ASSOCIATE,
          data: payload
        });
      });
    });
  };
  /**
   * 快手登录
   * @function
   * @since v3.16.0
   * @memberof BaaS.auth
   * @param {BaaS.AuthData|null} [authData] 用户信息，值为 null 时是静默登录
   * @param {BaaS.LoginOptions} [options] 其他选项
   * @return {Promise<BaaS.CurrentUser>}
   */


  var loginWithKs = function loginWithKs(authData) {
    var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref8$createUser = _ref8.createUser,
        createUser = _ref8$createUser === void 0 ? true : _ref8$createUser,
        _ref8$syncUserProfile = _ref8.syncUserProfile,
        syncUserProfile = _ref8$syncUserProfile === void 0 ? constants.UPDATE_USERPROFILE_VALUE.SETNX : _ref8$syncUserProfile;

    var loginPromise = null;

    if (authData && authData.detail) {
      // handleUserInfo 流程
      loginPromise = handleUserInfo(_extends(authData, {
        createUser: createUser,
        syncUserProfile: syncUserProfile
      }));
    } else {
      // 静默登录流程
      loginPromise = silentLogin({
        createUser: createUser
      });
    }

    return loginPromise.then(function (res) {
      if (!res) return commonAuth.getCurrentUser();
      return commonAuth._initCurrentUser(res.data.user_info, res.data.expired_at);
    });
  };

  _extends(BaaS.auth, {
    silentLogin: silentLogin,
    loginWithKs: utils.rateLimit(loginWithKs),
    linkKs: utils.rateLimit(linkKs)
  });
};

/***/ }),

/***/ "./src/kuaishou/baasRequest.js":
/*!*************************************!*\
  !*** ./src/kuaishou/baasRequest.js ***!
  \*************************************/
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
      return BaaS.request(resendPayload);
    }).then(utils.validateStatusCode);
  });
} // BaaS 网络请求，此方法能保证在已登录 BaaS 后再发起请求
// eslint-disable-next-line no-unused-vars


var baasRequest = function baasRequest(args) {
  var beforeRequestPromise = BaaS._config.AUTO_LOGIN ? BaaS.auth.silentLogin() : Promise.resolve();
  return beforeRequestPromise.then(function () {
    return BaaS.request(args);
  }).catch(function (res) {
    if (parseInt(res.code) === constants.STATUS_CODE.UNAUTHORIZED && BaaS._config.AUTO_LOGIN) {
      return tryResendRequest(args);
    } else {
      throw res;
    }
  });
};

module.exports = baasRequest;

/***/ }),

/***/ "./src/kuaishou/index.js":
/*!*******************************!*\
  !*** ./src/kuaishou/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! core-module/baas */ "../core/baas.js");

var core = __webpack_require__(/*! core-module/index */ "../core/index.js");

var polyfill = __webpack_require__(/*! ./polyfill */ "./src/kuaishou/polyfill.js");

var auth = __webpack_require__(/*! ./auth */ "./src/kuaishou/auth.js"); // const pay = require('./pay')
// const reportTicket = require('./reportTicket')
// const reportTemplateMsgAnalytics = require('./reportTemplateMsgAnalytics')


BaaS._config.VERSION = "v3.16.0";
BaaS.use(core);
BaaS.use(polyfill);
BaaS.use(auth); // BaaS.use(pay)
// BaaS.use(reportTicket)
// BaaS.use(reportTemplateMsgAnalytics)

BaaS.request = __webpack_require__(/*! ./request */ "./src/kuaishou/request.js");
BaaS._baasRequest = __webpack_require__(/*! ./baasRequest */ "./src/kuaishou/baasRequest.js");
BaaS.uploadFile = __webpack_require__(/*! ./uploadFile */ "./src/kuaishou/uploadFile.js");

BaaS._createRequestMethod(); // 暴露 BaaS 到小程序环境


if (typeof ks !== 'undefined') {
  ks.BaaS = BaaS;
}

module.exports = BaaS;

/***/ }),

/***/ "./src/kuaishou/polyfill.js":
/*!**********************************!*\
  !*** ./src/kuaishou/polyfill.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// const tplMsgStatsReport = require('core-module/tplMsgStatsReport')
var constants = __webpack_require__(/*! core-module/constants */ "../core/constants.js");

var utils = __webpack_require__(/*! core-module/utils */ "../core/utils/index.js");

var WebSocket = __webpack_require__(/*! ./websocket */ "./src/kuaishou/websocket.js");

module.exports = function (BaaS) {
  _extends(BaaS._polyfill, {
    CLIENT_PLATFORM: 'KUAISHOU',
    setStorageSync: function setStorageSync(k, v) {
      return ks.setStorageSync(k, v);
    },
    getStorageSync: function getStorageSync(k) {
      return ks.getStorageSync(k);
    },
    setStorageAsync: function setStorageAsync(k, v) {
      return new Promise(function (resolve, reject) {
        ks.setStorage({
          key: k,
          data: v,
          success: resolve,
          fail: reject
        });
      });
    },
    getStorageAsync: function getStorageAsync(k) {
      return new Promise(function (resolve) {
        ks.getStorage({
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
      return ks.getSystemInfoSync();
    },
    checkLatestVersion: function checkLatestVersion() {
      var info = ks.getSystemInfoSync();

      if (info.platform === 'devtools') {
        BaaS.checkVersion({
          platform: constants.PLATFORM.JONGDONG
        });
      }
    },
    linkKs: function linkKs() {
      var _BaaS$auth;

      return (_BaaS$auth = BaaS.auth).linkKs.apply(_BaaS$auth, arguments);
    },
    handleLoginSuccess: function handleLoginSuccess(res, isAnonymous, userInfo) {
      // 登录成功的 hook （login、loginWithKs、register）调用成功后触发
      BaaS.storage.set(constants.STORAGE_KEY.UID, res.data.user_id);
      BaaS.storage.set(constants.STORAGE_KEY.OPENID, res.data.openid || '');
      BaaS.storage.set(constants.STORAGE_KEY.AUTH_TOKEN, res.data.token);

      if (res.data.openid) {
        BaaS.storage.set(constants.STORAGE_KEY.USERINFO, _extends({}, BaaS.storage.get(constants.STORAGE_KEY.USERINFO), userInfo || {
          id: res.data.user_id,
          openid: res.data.openid
        }));
      }

      BaaS.storage.set(constants.STORAGE_KEY.EXPIRES_AT, utils.getExpiredAt(res.data.expires_in));

      if (isAnonymous) {
        BaaS.storage.set(constants.STORAGE_KEY.IS_ANONYMOUS_USER, 1);
      } else {
        BaaS.storage.set(constants.STORAGE_KEY.IS_ANONYMOUS_USER, 0); // tplMsgStatsReport.reportStats()
      }
    },
    WebSocket: WebSocket
  });
};

/***/ }),

/***/ "./src/kuaishou/request.js":
/*!*********************************!*\
  !*** ./src/kuaishou/request.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! core-module/baas */ "../core/baas.js");

var HError = __webpack_require__(/*! core-module/HError */ "../core/HError.js");

var utils = __webpack_require__(/*! core-module/utils */ "../core/utils/index.js");

var constants = __webpack_require__(/*! core-module/constants */ "../core/constants.js");

var ksRequestFail = function ksRequestFail(reject) {
  ks.getNetworkType({
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
      } // 兼容 PUT 与 DELETE 请求，快手暂时只支持 GET 与 POST 两种请求


      if (method.toUpperCase() === 'PUT' || method.toUpperCase() === 'DELETE') {
        headers['X-Hydrogen-Request-Method'] = method;
        method = 'POST';
      }

      ks.request({
        method: method,
        url: url,
        data: data,
        header: headers,
        dataType: dataType,
        success: resolve,
        fail: function fail(e) {
          if (e && e.statusCode) {
            var herror = new HError(e.statusCode, e.errMsg);
            reject(herror);
            return;
          }

          ksRequestFail(reject);
        }
      });
      utils.log(constants.LOG_LEVEL.INFO, 'Request => ' + url);
    });
  });
};

module.exports = request;
module.exports.ksRequestFail = ksRequestFail;

/***/ }),

/***/ "./src/kuaishou/uploadFile.js":
/*!************************************!*\
  !*** ./src/kuaishou/uploadFile.js ***!
  \************************************/
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

var ksUpload = function ksUpload(header, config, resolve, reject, type) {
  return ks.uploadFile({
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
      BaaS.request.jdRequestFail(reject);
    }
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
    uploadTask = getUploadHeaders().then(function (header) {
      var upload = ksUpload(header, config, function (e) {
        if (isAborted) return rj(new Error('aborted'));
        rs(e);
      }, rj, type);

      if (uploadCallback) {
        upload.onProgressUpdate(uploadCallback);
      }

      return upload;
    });
  }, rj);
  return p;
};

module.exports = uploadFile;

/***/ }),

/***/ "./src/kuaishou/websocket.js":
/*!***********************************!*\
  !*** ./src/kuaishou/websocket.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var socketTask;

var WebSocket =
/*#__PURE__*/
function () {
  function WebSocket(url, protocols) {
    var _this = this;

    _classCallCheck(this, WebSocket);

    socketTask = ks.connectSocket({
      url: url,
      protocols: protocols
    });
    socketTask.onOpen(function () {
      _this.onopen();
    });
    socketTask.onMessage(function (res) {
      _this.onmessage({
        data: res.data
      });
    });
    socketTask.onClose(function (res) {
      _this.onclose({
        code: res.code,
        reason: res.reason
      });
    });
  }

  _createClass(WebSocket, [{
    key: "send",
    value: function send(payload) {
      socketTask.send({
        data: payload
      });
    }
  }, {
    key: "close",
    value: function close(code, reason) {
      socketTask.close({
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2RrLWt1YWlzaG91LmRldi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0JhYVMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0JhYVMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQmFhUy8uLi9jb3JlL0Jhc2VRdWVyeS5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvQmFzZVJlY29yZC5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvQ29udGVudEdyb3VwLmpzIiwid2VicGFjazovL0JhYVMvLi4vY29yZS9DdXJyZW50VXNlci5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvRmlsZS5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvRmlsZUNhdGVnb3J5LmpzIiwid2VicGFjazovL0JhYVMvLi4vY29yZS9HZW9Qb2ludC5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvR2VvUG9seWdvbi5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvSEVycm9yLmpzIiwid2VicGFjazovL0JhYVMvLi4vY29yZS9PcmRlci5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvUXVlcnkuanMiLCJ3ZWJwYWNrOi8vQmFhUy8uLi9jb3JlL1RhYmxlT2JqZWN0LmpzIiwid2VicGFjazovL0JhYVMvLi4vY29yZS9UYWJsZVJlY29yZC5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvVXNlci5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvVXNlclJlY29yZC5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvYXV0aC5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvYmFhcy5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvY29uZmlnLmpzIiwid2VicGFjazovL0JhYVMvLi4vY29yZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vQmFhUy8uLi9jb3JlL2dldEFzeW5jSm9iUmVzdWx0LmpzIiwid2VicGFjazovL0JhYVMvLi4vY29yZS9nZXRTZXJ2ZXJEYXRlLmpzIiwid2VicGFjazovL0JhYVMvLi4vY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvaW52b2tlRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQmFhUy8uLi9jb3JlL3BvbHlmaWxsLmpzIiwid2VicGFjazovL0JhYVMvLi4vY29yZS9zdG9yYWdlLmpzIiwid2VicGFjazovL0JhYVMvLi4vY29yZS9zdG9yYWdlQXN5bmMuanMiLCJ3ZWJwYWNrOi8vQmFhUy8uLi9jb3JlL3VwbG9hZC5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvdXRpbHMvZ2V0Qnl0ZWRhbmNlQXBwTmFtZS5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvdXRpbHMvZ2V0TGltaXRhdGlvbldpdGhFbmFibGVUaWdnZXIuanMiLCJ3ZWJwYWNrOi8vQmFhUy8uLi9jb3JlL3V0aWxzL2dldFJlc2VuZFBheWxvYWQuanMiLCJ3ZWJwYWNrOi8vQmFhUy8uLi9jb3JlL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL0JhYVMvLi4vY29yZS91dGlscy9sb2cuanMiLCJ3ZWJwYWNrOi8vQmFhUy8uLi9jb3JlL3V0aWxzL3RpY2tldFJlcG9ydFRocm90dGxlLmpzIiwid2VicGFjazovL0JhYVMvLi4vY29yZS91dGlscy93aXRoUmV0cnkuanMiLCJ3ZWJwYWNrOi8vQmFhUy8uLi9jb3JlL3dhbXAvY29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvd2FtcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvd2FtcC9zZXJpYWxpemVyLmpzIiwid2VicGFjazovL0JhYVMvLi4vY29yZS93YW1wL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vQmFhUy8uLi9jb3JlL3dhbXAvc3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvd2FtcC90cmFuc3BvcnRlci5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL2NvcmUvd2FtcC91dGlsLmpzIiwid2VicGFjazovL0JhYVMvLi4vbm9kZV9tb2R1bGVzL2NvbnNvbGUtbG9nLWxldmVsL2luZGV4LmpzIiwid2VicGFjazovL0JhYVMvLi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9CYWFTLy4uL25vZGVfbW9kdWxlcy91dGlsL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovL0JhYVMvLi4vbm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vQmFhUy8uLi9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIiwid2VicGFjazovL0JhYVMvLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vQmFhUy8uL3NyYy9rdWFpc2hvdS9hdXRoLmpzIiwid2VicGFjazovL0JhYVMvLi9zcmMva3VhaXNob3UvYmFhc1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vQmFhUy8uL3NyYy9rdWFpc2hvdS9pbmRleC5qcyIsIndlYnBhY2s6Ly9CYWFTLy4vc3JjL2t1YWlzaG91L3BvbHlmaWxsLmpzIiwid2VicGFjazovL0JhYVMvLi9zcmMva3VhaXNob3UvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9CYWFTLy4vc3JjL2t1YWlzaG91L3VwbG9hZEZpbGUuanMiLCJ3ZWJwYWNrOi8vQmFhUy8uL3NyYy9rdWFpc2hvdS93ZWJzb2NrZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQmFhU1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJCYWFTXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9rdWFpc2hvdS9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIEhFcnJvciA9IHJlcXVpcmUoJy4vSEVycm9yJyk7XG5cbnZhciBRdWVyeSA9IHJlcXVpcmUoJy4vUXVlcnknKTtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbi8qKlxuICogQG1lbWJlcm9mIEJhYVNcbiAqIEBwYWNrYWdlXG4gKi9cblxuXG52YXIgQmFzZVF1ZXJ5ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQmFzZVF1ZXJ5KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCYXNlUXVlcnkpO1xuXG4gICAgdGhpcy5faW5pdFF1ZXJ5UGFyYW1zKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQmFzZVF1ZXJ5LCBbe1xuICAgIGtleTogXCJfaW5pdFF1ZXJ5UGFyYW1zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9pbml0UXVlcnlQYXJhbXMoKSB7XG4gICAgICB0aGlzLl9xdWVyeU9iamVjdCA9IHt9O1xuICAgICAgdGhpcy5fbGltaXQgPSBudWxsO1xuICAgICAgdGhpcy5fb2Zmc2V0ID0gMDtcbiAgICAgIHRoaXMuX29yZGVyQnkgPSBudWxsO1xuICAgICAgdGhpcy5fa2V5cyA9IG51bGw7XG4gICAgICB0aGlzLl9leHBhbmQgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDorr7nva7mn6Xor6LmnaHku7ZcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0JhYVMuUXVlcnl9IFF1ZXJ5IOWvueixoVxuICAgICAqIEByZXR1cm4ge3RoaXN9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRRdWVyeVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRRdWVyeShxdWVyeU9iamVjdCkge1xuICAgICAgaWYgKHF1ZXJ5T2JqZWN0IGluc3RhbmNlb2YgUXVlcnkpIHtcbiAgICAgICAgdGhpcy5fcXVlcnlPYmplY3QgPSB1dGlscy5jbG9uZURlZXAocXVlcnlPYmplY3QucXVlcnlPYmplY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEhFcnJvcig2MDUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICog6YCJ5oup5Y+q6L+U5Zue5oyH5a6a5a2X5q61XG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXXxzdHJpbmd9IGtleSDlrZfmrrXlkI3np7BcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2VsZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdChhcmdzKSB7XG4gICAgICBpZiAoYXJncyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHRoaXMuX2tleXMgPSBhcmdzLmpvaW4oJywnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2tleXMgPSBhcmdzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICog5oyH5a6a6ZyA6KaB5bGV5byA55qEIHBvaW50ZXIg57G75Z6L5a2X5q61XG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXXxzdHJpbmd9IGtleSDlrZfmrrXlkI3np7BcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXhwYW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4cGFuZChhcmdzKSB7XG4gICAgICBpZiAoYXJncyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHRoaXMuX2V4cGFuZCA9IGFyZ3Muam9pbignLCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZXhwYW5kID0gYXJncztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaMh+WumuacgOWkmui/lOWbnuaVsOmHj1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCDmlbDph49cbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGltaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGltaXQodmFsdWUpIHtcbiAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEhFcnJvcig2MDUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9saW1pdCA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruWIl+ihqOWBj+enu+mHj1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCDlgY/np7vph49cbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib2Zmc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9mZnNldCh2YWx1ZSkge1xuICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSkge1xuICAgICAgICB0aHJvdyBuZXcgSEVycm9yKDYwNSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29mZnNldCA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruaOkuW6j+S+neaNrlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nW118c3RyaW5nfSBrZXkg5a2X5q615ZCN56ewXG4gICAgICogQHJldHVybiB7dGhpc31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9yZGVyQnlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3JkZXJCeShhcmdzKSB7XG4gICAgICBpZiAoYXJncyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHRoaXMuX29yZGVyQnkgPSBhcmdzLmpvaW4oJywnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX29yZGVyQnkgPSBhcmdzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2hhbmRsZUFsbFF1ZXJ5Q29uZGl0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlQWxsUXVlcnlDb25kaXRpb25zKCkge1xuICAgICAgdmFyIGNvbmRpdGlvbnMgPSB7fTtcbiAgICAgIGNvbmRpdGlvbnMubGltaXQgPSB0aGlzLl9saW1pdCA9PT0gbnVsbCA/IGNvbnN0YW50cy5RVUVSWV9MSU1JVEFUSU9OX0RFRkFVTFQgOiB0aGlzLl9saW1pdDtcbiAgICAgIGNvbmRpdGlvbnMub2Zmc2V0ID0gdGhpcy5fb2Zmc2V0O1xuXG4gICAgICBpZiAodGhpcy5fb3JkZXJCeSkge1xuICAgICAgICBjb25kaXRpb25zLm9yZGVyX2J5ID0gdGhpcy5fb3JkZXJCeTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2tleXMpIHtcbiAgICAgICAgY29uZGl0aW9ucy5rZXlzID0gdGhpcy5fa2V5cztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2V4cGFuZCkge1xuICAgICAgICBjb25kaXRpb25zLmV4cGFuZCA9IHRoaXMuX2V4cGFuZDtcbiAgICAgIH1cblxuICAgICAgY29uZGl0aW9ucy53aGVyZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuX3F1ZXJ5T2JqZWN0KTtcbiAgICAgIHJldHVybiBjb25kaXRpb25zO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCYXNlUXVlcnk7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZVF1ZXJ5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIEhFcnJvciA9IHJlcXVpcmUoJy4vSEVycm9yJyk7XG5cbmZ1bmN0aW9uIF9zZXJpYWxpemVWYWx1ZUZ1bmNGYWN0b3J5KCkge1xuICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbJ0Jhc2VSZWNvcmQnXTtcblxuICB2YXIgR2VvUG9pbnQgPSByZXF1aXJlKCcuL0dlb1BvaW50Jyk7XG5cbiAgdmFyIEdlb1BvbHlnb24gPSByZXF1aXJlKCcuL0dlb1BvbHlnb24nKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKGNvbmZpZy5pbmNsdWRlcygnR2VvJykgJiYgKHZhbHVlIGluc3RhbmNlb2YgR2VvUG9pbnQgfHwgdmFsdWUgaW5zdGFuY2VvZiBHZW9Qb2x5Z29uKSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvR2VvSlNPTigpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuaW5jbHVkZXMoJ0Jhc2VSZWNvcmQnKSAmJiB2YWx1ZSBpbnN0YW5jZW9mIEJhc2VSZWNvcmQpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5fcmVjb3JkSUQgPT0gbnVsbCA/ICcnIDogdmFsdWUuX3JlY29yZElELnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH07XG59XG4vKipcbiAqIEBtZW1iZXJvZiBCYWFTXG4gKiBAcGFja2FnZVxuICovXG5cblxudmFyIEJhc2VSZWNvcmQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBCYXNlUmVjb3JkKHJlY29yZElEKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJhc2VSZWNvcmQpO1xuXG4gICAgdGhpcy5fcmVjb3JkSUQgPSByZWNvcmRJRDtcblxuICAgIHRoaXMuX3JlY29yZFZhbHVlSW5pdCgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEJhc2VSZWNvcmQsIFt7XG4gICAga2V5OiBcIl9yZWNvcmRWYWx1ZUluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3JlY29yZFZhbHVlSW5pdCgpIHtcbiAgICAgIHRoaXMuX3JlY29yZCA9IHtcbiAgICAgICAgJHNldDoge30sXG4gICAgICAgICR1bnNldDoge31cbiAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOe7meWtl+autei1i+WAvFxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IOWtl+auteWQjeensFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSDlgLxcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgKiDmibnph4/nu5nlrZfmrrXotYvlgLxcbiAgICAqIEBtZXRob2RcbiAgICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gcGFydGljaWFsUmVjb3JkIOeUseWtl+auteWQjeensOS4juWAvOe7hOaIkOeahOmUruWAvOWvueWvueixoVxuICAgICogQHJldHVybiB7dGhpc31cbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBzZXJpYWxpemVWYWx1ZSA9IF9zZXJpYWxpemVWYWx1ZUZ1bmNGYWN0b3J5KFsnQmFzZVJlY29yZCcsICdHZW8nXSk7XG5cbiAgICAgIHZhciBzZXJpYWxpemVBcnJheVZhbHVlID0gX3NlcmlhbGl6ZVZhbHVlRnVuY0ZhY3RvcnkoWydHZW8nXSk7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKF90eXBlb2YoYXJnc1swXSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdmFyIG9iamVjdEFyZyA9IGFyZ3NbMF07XG4gICAgICAgICAgdmFyIHJlY29yZFRvU2V0ID0ge307XG4gICAgICAgICAgT2JqZWN0LmtleXMoYXJnc1swXSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuX3JlY29yZC4kdW5zZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgSEVycm9yKDYwNSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IG9iamVjdEFyZ1trZXldO1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgcmVjb3JkVG9TZXRba2V5XSA9IHZhbHVlLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVBcnJheVZhbHVlKGl0ZW0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlY29yZFRvU2V0W2tleV0gPSBzZXJpYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5fcmVjb3JkLiRzZXQgPSByZWNvcmRUb1NldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgSEVycm9yKDYwNSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29yZC4kdW5zZXQuaGFzT3duUHJvcGVydHkoYXJnc1swXSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgSEVycm9yKDYwNSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdmFsdWUgPSBhcmdzWzFdO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIHRoaXMuX3JlY29yZC4kc2V0W2FyZ3NbMF1dID0gdmFsdWUubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplQXJyYXlWYWx1ZShpdGVtKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yZWNvcmQuJHNldFthcmdzWzBdXSA9IHNlcmlhbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEhFcnJvcig2MDUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICog56e76Zmk5a2X5q61XG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkg5a2X5q615ZCN56ewXG4gICAgICogQHJldHVybiB7dGhpc31cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICog5om56YeP56e76Zmk5a2X5q61XG4gICAgKiBAbWV0aG9kXG4gICAgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IHBhcnRpY2lhbFJlY29yZCDnlLHlrZfmrrXlkI3np7DkuI7lgLznu4TmiJDnmoTplK7lgLzlr7nlr7nosaHvvIxcbiAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5o6l5Y+j5Lya5b+955WlIE9iamVjdCDph4zmiYDmnInnmoQgdmFsdWXvvIzlj4LnhafmiYDmnInnmoQga2V5IOadpeaJp+ihjOenu+mZpOaTjeS9nOOAglxuICAgICogQHJldHVybiB7dGhpc31cbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5zZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5zZXQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90eXBlb2YoYXJnc1swXSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhciByZWNvcmRUb1Vuc2V0ID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGFyZ3NbMF0pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIGlmIChfdGhpczIuX3JlY29yZC4kc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBIRXJyb3IoNjA1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZWNvcmRUb1Vuc2V0W2tleV0gPSAnJztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3JlY29yZC4kdW5zZXQgPSByZWNvcmRUb1Vuc2V0O1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29yZC4kc2V0Lmhhc093blByb3BlcnR5KGFyZ3NbMF0pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEhFcnJvcig2MDUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcmVjb3JkLiR1bnNldFthcmdzWzBdXSA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEhFcnJvcig2MDUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICog6Ieq5aKe77yI5Y6f5a2Q5pON5L2c77yJ44CCXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkg5a2X5q615ZCN56ewXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIOWAvFxuICAgICAqIEByZXR1cm4ge3RoaXN9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbmNyZW1lbnRCeVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbmNyZW1lbnRCeShrZXksIHZhbHVlKSB7XG4gICAgICB0aGlzLl9yZWNvcmQuJHNldFtrZXldID0ge1xuICAgICAgICAkaW5jcl9ieTogdmFsdWVcbiAgICAgIH07XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICog5pWw57uE5re75Yqg5YWD57Sg44CCXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkg5a2X5q615ZCN56ewXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIOWAvFxuICAgICAqIEByZXR1cm4ge3RoaXN9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kKGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciBzZXJpYWxpemVBcnJheVZhbHVlID0gX3NlcmlhbGl6ZVZhbHVlRnVuY0ZhY3RvcnkoWydHZW8nXSk7XG5cbiAgICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgIHZhbHVlID0gW3ZhbHVlXTtcbiAgICAgIH1cblxuICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZUFycmF5VmFsdWUoaXRlbSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3JlY29yZC4kc2V0W2tleV0gPSB7XG4gICAgICAgICRhcHBlbmQ6IHZhbHVlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaVsOe7hOa3u+WKoOWFg+e0oO+8iOWOn+WtkOaTjeS9nO+8ieOAglxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IOWtl+auteWQjeensFxuICAgICAqIEBwYXJhbSB7c3RyaW5nW118c3RyaW5nfSB2YWx1ZSDlgLxcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidUFwcGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1QXBwZW5kKGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciBzZXJpYWxpemVBcnJheVZhbHVlID0gX3NlcmlhbGl6ZVZhbHVlRnVuY0ZhY3RvcnkoWydHZW8nXSk7XG5cbiAgICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgIHZhbHVlID0gW3ZhbHVlXTtcbiAgICAgIH1cblxuICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZUFycmF5VmFsdWUoaXRlbSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3JlY29yZC4kc2V0W2tleV0gPSB7XG4gICAgICAgICRhcHBlbmRfdW5pcXVlOiB2YWx1ZVxuICAgICAgfTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmlbDnu4Tnp7vpmaTlhYPntKDjgIJcbiAgICAgKiBAbWV0aG9kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSDlrZfmrrXlkI3np7BcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUg5YC8XG4gICAgICogQHJldHVybiB7dGhpc31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoa2V5LCB2YWx1ZSkge1xuICAgICAgdmFyIHNlcmlhbGl6ZUFycmF5VmFsdWUgPSBfc2VyaWFsaXplVmFsdWVGdW5jRmFjdG9yeShbJ0dlbyddKTtcblxuICAgICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgdmFsdWUgPSBbdmFsdWVdO1xuICAgICAgfVxuXG4gICAgICB2YWx1ZSA9IHZhbHVlLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gc2VyaWFsaXplQXJyYXlWYWx1ZShpdGVtKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fcmVjb3JkLiRzZXRba2V5XSA9IHtcbiAgICAgICAgJHJlbW92ZTogdmFsdWVcbiAgICAgIH07XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogT2JqZWN0IOexu+Wei+Wtl+auteS/ruaUueOAglxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IOWtl+auteWQjeensFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSDlgLxcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicGF0Y2hPYmplY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGF0Y2hPYmplY3Qoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgIHRocm93IG5ldyBIRXJyb3IoNjA1KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVjb3JkLiRzZXRba2V5XSA9IHtcbiAgICAgICAgJHVwZGF0ZTogdmFsdWVcbiAgICAgIH07XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXJyYXkg57G75Z6L5a2X5q615L+u5pS577yM56e76Zmk5pWw57uE5pyr5L2N5YWD57Sg44CCXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkg5a2X5q615ZCN56ewXG4gICAgICogQHJldHVybiB7dGhpc31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInBvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3Aoa2V5KSB7XG4gICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycgfHwga2V5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgSEVycm9yKDYwNSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlY29yZC4kc2V0W2tleV0gPSB7XG4gICAgICAgICRwb3A6IDFcbiAgICAgIH07XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXJyYXkg57G75Z6L5a2X5q615L+u5pS577yM56e76Zmk5pWw57uE6aaW5L2N5YWD57Sg44CCXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkg5a2X5q615ZCN56ewXG4gICAgICogQHJldHVybiB7dGhpc31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNoaWZ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNoaWZ0KGtleSkge1xuICAgICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnIHx8IGtleS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEhFcnJvcig2MDUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZWNvcmQuJHNldFtrZXldID0ge1xuICAgICAgICAkcG9wOiAtMVxuICAgICAgfTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCYXNlUmVjb3JkO1xufSgpO1xuXG5CYXNlUmVjb3JkLl9zZXJpYWxpemVWYWx1ZUZ1bmNGYWN0b3J5ID0gX3NlcmlhbGl6ZVZhbHVlRnVuY0ZhY3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VSZWNvcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBCYWFTID0gcmVxdWlyZSgnLi9iYWFzJyk7XG5cbnZhciBCYXNlUXVlcnkgPSByZXF1aXJlKCcuL0Jhc2VRdWVyeScpO1xuXG52YXIgUXVlcnkgPSByZXF1aXJlKCcuL1F1ZXJ5Jyk7XG4vKipcbiAqIOWGheWuueW6k1xuICogQG1lbWJlcm9mIEJhYVNcbiAqIEBleHRlbmRzIEJhYVMuQmFzZVF1ZXJ5XG4gKiBAcHVibGljXG4gKi9cblxuXG52YXIgQ29udGVudEdyb3VwID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfQmFzZVF1ZXJ5KSB7XG4gIF9pbmhlcml0cyhDb250ZW50R3JvdXAsIF9CYXNlUXVlcnkpO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudEdyb3VwSUQg5YaF5a655bqTIElEXG4gICAqL1xuICBmdW5jdGlvbiBDb250ZW50R3JvdXAoY29udGVudEdyb3VwSUQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udGVudEdyb3VwKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKENvbnRlbnRHcm91cCkuY2FsbCh0aGlzKSk7XG4gICAgX3RoaXMuX2NvbnRlbnRHcm91cElEID0gY29udGVudEdyb3VwSUQ7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKlxuICAgKiDojrflj5blhoXlrrnlupPor6bmg4XjgIJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkIOWGheWuueW6kyBJRFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEJhYVMuUmVzcG9uc2U8YW55Pj59XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKENvbnRlbnRHcm91cCwgW3tcbiAgICBrZXk6IFwiZ2V0Q29udGVudFwiLFxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5YaF5a6544CCXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByaWNoVGV4dElEIOWGheWuuSBJRFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QmFhUy5SZXNwb25zZTxhbnk+Pn1cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udGVudChyaWNoVGV4dElEKSB7XG4gICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICByaWNoVGV4dElEOiByaWNoVGV4dElEXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5fZXhwYW5kKSB7XG4gICAgICAgIHBhcmFtcy5leHBhbmQgPSB0aGlzLl9leHBhbmQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9rZXlzKSB7XG4gICAgICAgIHBhcmFtcy5rZXlzID0gdGhpcy5fa2V5cztcbiAgICAgIH1cblxuICAgICAgdGhpcy5faW5pdFF1ZXJ5UGFyYW1zKCk7XG5cbiAgICAgIHJldHVybiBCYWFTLmdldENvbnRlbnQocGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5p+l5om+5YaF5a6544CCXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7QmFhUy5GaW5kT3B0aW9uc30gW29wdGlvbnNdIOWPguaVsFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QmFhUy5SZXNwb25zZTxhbnk+Pn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImZpbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZCgpIHtcbiAgICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgICBfcmVmJHdpdGhDb3VudCA9IF9yZWYud2l0aENvdW50LFxuICAgICAgICAgIHdpdGhDb3VudCA9IF9yZWYkd2l0aENvdW50ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkd2l0aENvdW50O1xuXG4gICAgICB2YXIgY29uZGl0aW9uID0gdGhpcy5faGFuZGxlQWxsUXVlcnlDb25kaXRpb25zKCk7XG5cbiAgICAgIGNvbmRpdGlvbi5jb250ZW50R3JvdXBJRCA9IHRoaXMuX2NvbnRlbnRHcm91cElEO1xuXG4gICAgICB0aGlzLl9pbml0UXVlcnlQYXJhbXMoKTtcblxuICAgICAgcmV0dXJuIEJhYVMuZ2V0Q29udGVudExpc3RWMihfZXh0ZW5kcyh7fSwgY29uZGl0aW9uLCB7XG4gICAgICAgIHJldHVybl90b3RhbF9jb3VudDogd2l0aENvdW50ID8gMSA6IDBcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5YaF5a655pWw6YeP44CCXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBzaW5jZSB2My4wLjBcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcj59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb3VudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxpbWl0KDEpLmZpbmQoe1xuICAgICAgICB3aXRoQ291bnQ6IHRydWVcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB2YXIgdG90YWxfY291bnQgPSByZXMuZGF0YS5tZXRhLnRvdGFsX2NvdW50O1xuICAgICAgICByZXR1cm4gdG90YWxfY291bnQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5YaF5a655YiG57G75YiX6KGo44CCXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7QmFhUy5GaW5kT3B0aW9uc30gW29wdGlvbnNdIOWPguaVsFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QmFhUy5SZXNwb25zZTxhbnk+Pn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldENhdGVnb3J5TGlzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDYXRlZ29yeUxpc3QoKSB7XG4gICAgICB2YXIgX3JlZjIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICAgIF9yZWYyJHdpdGhDb3VudCA9IF9yZWYyLndpdGhDb3VudCxcbiAgICAgICAgICB3aXRoQ291bnQgPSBfcmVmMiR3aXRoQ291bnQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkd2l0aENvdW50O1xuXG4gICAgICByZXR1cm4gQmFhUy5nZXRDb250ZW50Q2F0ZWdvcnlMaXN0KHtcbiAgICAgICAgY29udGVudEdyb3VwSUQ6IHRoaXMuX2NvbnRlbnRHcm91cElELFxuICAgICAgICBsaW1pdDogMTAwLFxuICAgICAgICByZXR1cm5fdG90YWxfY291bnQ6IHdpdGhDb3VudCA/IDEgOiAwXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5YaF5a655YiG57G76K+m5oOF44CCXG4gICAgICogQG1ldGhvZFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QmFhUy5SZXNwb25zZTxhbnk+Pn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldENhdGVnb3J5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENhdGVnb3J5KGNhdGVnb3J5SUQpIHtcbiAgICAgIHZhciBxdWVyeSA9IG5ldyBRdWVyeSgpO1xuICAgICAgcXVlcnkuY29tcGFyZSgnZ3JvdXBfaWQnLCAnPScsIHRoaXMuX2NvbnRlbnRHcm91cElEKTtcbiAgICAgIHJldHVybiBCYWFTLmdldENvbnRlbnRDYXRlZ29yeSh7XG4gICAgICAgIGNhdGVnb3J5SUQ6IGNhdGVnb3J5SUQsXG4gICAgICAgIHdoZXJlOiBKU09OLnN0cmluZ2lmeShxdWVyeS5xdWVyeU9iamVjdClcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoaWQpIHtcbiAgICAgIHJldHVybiBCYWFTLmdldENvbnRlbnRHcm91cCh7XG4gICAgICAgIGNvbnRlbnRHcm91cElEOiBpZFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluWGheWuueW6k+WIl+ihqOOAglxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10g5YaF5a655bqTIElEXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxCYWFTLlJlc3BvbnNlPGFueT4+fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZmluZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kKCkge1xuICAgICAgdmFyIF9yZWYzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgICBfcmVmMyRvZmZzZXQgPSBfcmVmMy5vZmZzZXQsXG4gICAgICAgICAgb2Zmc2V0ID0gX3JlZjMkb2Zmc2V0ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkb2Zmc2V0LFxuICAgICAgICAgIF9yZWYzJGxpbWl0ID0gX3JlZjMubGltaXQsXG4gICAgICAgICAgbGltaXQgPSBfcmVmMyRsaW1pdCA9PT0gdm9pZCAwID8gMjAgOiBfcmVmMyRsaW1pdCxcbiAgICAgICAgICBfcmVmMyR3aXRoQ291bnQgPSBfcmVmMy53aXRoQ291bnQsXG4gICAgICAgICAgd2l0aENvdW50ID0gX3JlZjMkd2l0aENvdW50ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYzJHdpdGhDb3VudDtcblxuICAgICAgcmV0dXJuIEJhYVMuZ2V0Q29udGVudEdyb3VwTGlzdCh7XG4gICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICBsaW1pdDogbGltaXQsXG4gICAgICAgIHJldHVybl90b3RhbF9jb3VudDogd2l0aENvdW50ID8gMSA6IDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb250ZW50R3JvdXA7XG59KEJhc2VRdWVyeSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGVudEdyb3VwOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgVXNlclJlY29yZCA9IHJlcXVpcmUoJy4vVXNlclJlY29yZCcpO1xuXG52YXIgQmFhUyA9IHJlcXVpcmUoJy4vYmFhcycpO1xuXG52YXIgSEVycm9yID0gcmVxdWlyZSgnLi9IRXJyb3InKTtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxudmFyIFVTRVJfUFJPRklMRV9CVUlMRF9JTl9GSUVMRFMgPSBjb25zdGFudHMuVVNFUl9QUk9GSUxFX0JVSUxEX0lOX0ZJRUxEUztcbnZhciBBUEkgPSBCYWFTLl9jb25maWcuQVBJO1xuLyoqXG4gKiBAbWVtYmVyb2YgQmFhU1xuICogQGV4dGVuZHMgQmFhUy5Vc2VyUmVjb3JkXG4gKiBAcGFja2FnZVxuICovXG5cbnZhciBDdXJyZW50VXNlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1VzZXJSZWNvcmQpIHtcbiAgX2luaGVyaXRzKEN1cnJlbnRVc2VyLCBfVXNlclJlY29yZCk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGUg55So5oi35L+h5oGvXG4gICAqL1xuICBmdW5jdGlvbiBDdXJyZW50VXNlcihhdHRyaWJ1dGUpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ3VycmVudFVzZXIpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQ3VycmVudFVzZXIpLmNhbGwodGhpcykpO1xuXG4gICAgaWYgKCF1dGlscy5pc09iamVjdChhdHRyaWJ1dGUpKSB7XG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIG5ldyBIRXJyb3IoNjA1KSk7XG4gICAgfVxuXG4gICAgX3RoaXMuaW5pdEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEN1cnJlbnRVc2VyLCBbe1xuICAgIGtleTogXCJpbml0QXR0cmlidXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRBdHRyaWJ1dGUoYXR0cmlidXRlKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5fYXR0cmlidXRlID0gX2V4dGVuZHMoe30sIGF0dHJpYnV0ZSk7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAvLyDku6XkuIvliJLnur/lvIDlpLTmiJbogIXmmK/ljp/mnInlhoXnva7lrZfmrrXlsIbnm7TmjqXmt7vliqDlnKjor6Xlr7nosaHkuIpcbiAgICAgICAgaWYgKGtleVswXSA9PT0gJ18nIHx8IFVTRVJfUFJPRklMRV9CVUlMRF9JTl9GSUVMRFMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIF90aGlzMltrZXldID0gYXR0cmlidXRlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDku6UgSlNPTiBPYmplY3Qg55qE5b2i5byP6L+U5Zue55So5oi35L+h5oGvXG4gICAgICogQHJldHVybnMge09iamVjdH0g55So5oi35L+h5oGvXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0b0pTT05cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9KU09OKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2F0dHJpYnV0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5p+Q5LiA6aG555So5oi35L+h5oGvXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSDnlKjmiLfkv6Hmga8ga2V5XG4gICAgICogQHJldHVybnMge2FueX0g55So5oi35L+h5oGvXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2F0dHJpYnV0ZVtrZXldO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlsIblvq7kv6HotKblj7fnu5HlrprliLDlvZPliY3nlKjmiLfvvIzljL/lkI3nlKjmiLfml6Dms5XosIPnlKhcbiAgICAgKiBAcGFyYW0ge0JhYVMuQXV0aERhdGF8bnVsbH0gW2F1dGhEYXRhXSDnlKjmiLfkv6Hmga9cbiAgICAgKiBAcGFyYW0ge0JhYVMuTGlua1dlY2hhdE9wdGlvbnN9IFtwYXJhbXNdIOeUqOaIt+S/oeaBr+WPguaVsFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHRoaXM+fSBVc2VyUmVjb3JkIOWunuS+i1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlua1dlY2hhdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaW5rV2VjaGF0KCkge1xuICAgICAgaWYgKHRoaXMuX2Fub255bW91cykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEhFcnJvcig2MTIpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFCYWFTLl9wb2x5ZmlsbC5saW5rV2VjaGF0KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgSEVycm9yKDYwNSwgJ2xpbmtXZWNoYXQg5pa55rOV5pyq5a6a5LmJJykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQmFhUy5fcG9seWZpbGwubGlua1dlY2hhdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlsIbmlK/ku5jlrp3otKblj7fnu5HlrprliLDlvZPliY3nlKjmiLfvvIzljL/lkI3nlKjmiLfml6Dms5XosIPnlKhcbiAgICAgKiBAcGFyYW0ge0JhYVMuTGlua0FsaXBheVBhcmFtc30gW29wdGlvbnNdIOWPguaVsFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHRoaXM+fSBVc2VyUmVjb3JkIOWunuS+i1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlua0FsaXBheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaW5rQWxpcGF5KCkge1xuICAgICAgaWYgKHRoaXMuX2Fub255bW91cykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEhFcnJvcig2MTIpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFCYWFTLl9wb2x5ZmlsbC5saW5rQWxpcGF5KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgSEVycm9yKDYwNSwgJ2xpbmtBbGlwYXkg5pa55rOV5pyq5a6a5LmJJykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQmFhUy5fcG9seWZpbGwubGlua0FsaXBheS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlsIYgUVEg6LSm5Y+357uR5a6a5Yiw5b2T5YmN55So5oi377yM5Yy/5ZCN55So5oi35peg5rOV6LCD55SoXG4gICAgICogQHBhcmFtIHtCYWFTLkF1dGhEYXRhfG51bGx9IFthdXRoRGF0YV0g55So5oi35L+h5oGvXG4gICAgICogQHBhcmFtIHtCYWFTLkxpbmtPcHRpb25zfSBbcGFyYW1zXSDnlKjmiLfkv6Hmga/lj4LmlbBcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx0aGlzPn0gVXNlclJlY29yZCDlrp7kvotcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxpbmtRUVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaW5rUVEoKSB7XG4gICAgICBpZiAodGhpcy5fYW5vbnltb3VzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgSEVycm9yKDYxMikpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIUJhYVMuX3BvbHlmaWxsLmxpbmtRUSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEhFcnJvcig2MDUsICdsaW5rUVEg5pa55rOV5pyq5a6a5LmJJykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQmFhUy5fcG9seWZpbGwubGlua1FRLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWwhueZvuW6pui0puWPt+e7keWumuWIsOW9k+WJjeeUqOaIt++8jOWMv+WQjeeUqOaIt+aXoOazleiwg+eUqFxuICAgICAqIEBwYXJhbSB7QmFhUy5BdXRoRGF0YXxudWxsfSBbYXV0aERhdGFdIOeUqOaIt+S/oeaBr1xuICAgICAqIEBwYXJhbSB7QmFhUy5MaW5rT3B0aW9uc30gW3BhcmFtc10g55So5oi35L+h5oGv5Y+C5pWwXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dGhpcz59IFtVc2VyUmVjb3JkXSDlrp7kvotcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxpbmtCYWlkdVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaW5rQmFpZHUoKSB7XG4gICAgICBpZiAodGhpcy5fYW5vbnltb3VzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgSEVycm9yKDYxMikpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIUJhYVMuX3BvbHlmaWxsLmxpbmtCYWlkdSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEhFcnJvcig2MDUsICdsaW5rQmFpZHUg5pa55rOV5pyq5a6a5LmJJykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQmFhUy5fcG9seWZpbGwubGlua0JhaWR1LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWwhuWtl+iKgui3s+WKqOi0puWPt+e7keWumuWIsOW9k+WJjeeUqOaIt++8jOWMv+WQjeeUqOaIt+aXoOazleiwg+eUqFxuICAgICAqIEBwYXJhbSB7QmFhUy5MaW5rQnl0ZWRhbmNlUGFyYW1zfSBbb3B0aW9uc10g5Y+C5pWwXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dGhpcz59IFVzZXJSZWNvcmQg5a6e5L6LXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsaW5rVHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlua1R0KCkge1xuICAgICAgaWYgKHRoaXMuX2Fub255bW91cykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEhFcnJvcig2MTIpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFCYWFTLl9wb2x5ZmlsbC5saW5rVHQpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBIRXJyb3IoNjA1LCAnbGlua1R0IOaWueazleacquWumuS5iScpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIEJhYVMuX3BvbHlmaWxsLmxpbmtUdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlsIbkuqzkuJzotKblj7fnu5HlrprliLDlvZPliY3nlKjmiLfvvIzljL/lkI3nlKjmiLfml6Dms5XosIPnlKhcbiAgICAgKiBAcGFyYW0ge0JhYVMuTGlua09wdGlvbnN9IFtvcHRpb25zXSDlj4LmlbBcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx0aGlzPn0gVXNlclJlY29yZCDlrp7kvotcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxpbmtKZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaW5rSmQoKSB7XG4gICAgICBpZiAodGhpcy5fYW5vbnltb3VzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgSEVycm9yKDYxMikpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIUJhYVMuX3BvbHlmaWxsLmxpbmtKZCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEhFcnJvcig2MDUsICdsaW5rSmQg5pa55rOV5pyq5a6a5LmJJykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQmFhUy5fcG9seWZpbGwubGlua0pkLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWwhuW/q+aJi+i0puWPt+e7keWumuWIsOW9k+WJjeeUqOaIt++8jOWMv+WQjeeUqOaIt+aXoOazleiwg+eUqFxuICAgICAqIEBwYXJhbSB7QmFhUy5MaW5rT3B0aW9uc30gW29wdGlvbnNdIOWPguaVsFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHRoaXM+fSBVc2VyUmVjb3JkIOWunuS+i1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlua0tzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpbmtLcygpIHtcbiAgICAgIGlmICh0aGlzLl9hbm9ueW1vdXMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBIRXJyb3IoNjEyKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghQmFhUy5fcG9seWZpbGwubGlua0tzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgSEVycm9yKDYwNSwgJ2xpbmtLcyDmlrnms5XmnKrlrprkuYknKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBCYWFTLl9wb2x5ZmlsbC5saW5rS3MuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5bCG56ys5LiJ5pa56LSm5Y+357uR5a6a5Yiw5b2T5YmN55So5oi377yM5Yy/5ZCN55So5oi35peg5rOV6LCD55SoXG4gICAgICogQHNpbmNlIHYyLjEuMFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm92aWRvciDnrKzkuInmlrnlubPlj7BcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXV0aFBhZ2VVcmwg5o6I5p2D6aG16Z2iIFVSTFxuICAgICAqIEBwYXJhbSB7QmFhUy5MaW5rVGhpcmRQYXJ0eVBhcmFtc30gW29wdGlvbnNdIOWFtuS7lumAiemhuVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHRoaXM+fSBVc2VyUmVjb3JkIOWunuS+i1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlua1RoaXJkUGFydHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlua1RoaXJkUGFydHkoKSB7XG4gICAgICBpZiAodGhpcy5fYW5vbnltb3VzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgSEVycm9yKDYxMikpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIUJhYVMuX3BvbHlmaWxsLmxpbmtUaGlyZFBhcnR5KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgSEVycm9yKDYwNSwgJ2xpbmtUaGlyZFBhcnR5IOaWueazleacquWumuS5iScpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIEJhYVMuX3BvbHlmaWxsLmxpbmtUaGlyZFBhcnR5LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWwhuesrOS4ieaWuei0puWPt+e7keWumuWIsOW9k+WJjeeUqOaIt++8iOS9v+eUqCBhdXRoX2RhdGEg57uR5a6a77yJ77yM5Yy/5ZCN55So5oi35peg5rOV6LCD55SoXG4gICAgICogQHNpbmNlIHYzLjEzLjBcbiAgICAgKiBAcGFyYW0ge0JhYVMuTGlua0F1dGhEYXRhQXV0aERhdGF9IGF1dGhEYXRhIOaOiOadg+mhtemdoiBVUkxcbiAgICAgKiBAcGFyYW0ge0JhYVMuTGlua0F1dGhEYXRhT3B0aW9uc30gW29wdGlvbnNdIOWFtuS7lumAiemhuVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHRoaXM+fSBVc2VyUmVjb3JkIOWunuS+i1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlua1RoaXJkUGFydHlXaXRoQXV0aERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlua1RoaXJkUGFydHlXaXRoQXV0aERhdGEoKSB7XG4gICAgICBpZiAodGhpcy5fYW5vbnltb3VzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgSEVycm9yKDYxMikpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIUJhYVMuX3BvbHlmaWxsLmxpbmtUaGlyZFBhcnR5V2l0aEF1dGhEYXRhKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgSEVycm9yKDYwNSwgJ2xpbmtUaGlyZFBhcnR5V2l0aEF1dGhEYXRhIOaWueazleacquWumuS5iScpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIEJhYVMuX3BvbHlmaWxsLmxpbmtUaGlyZFBhcnR5V2l0aEF1dGhEYXRhLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOabtOaWsOWvhueggVxuICAgICAqXG4gICAgICogQHBhcmFtIHtCYWFTLlVwZGF0ZVBhc3N3b3JkUGFyYW1zfSBvcHRpb25zXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dGhpcz59IFVzZXJSZWNvcmQg5a6e5L6LXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVQYXNzd29yZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVQYXNzd29yZChfcmVmKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHBhc3N3b3JkID0gX3JlZi5wYXNzd29yZCxcbiAgICAgICAgICBuZXdQYXNzd29yZCA9IF9yZWYubmV3UGFzc3dvcmQ7XG5cbiAgICAgIGlmICh0aGlzLl9hbm9ueW1vdXMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBIRXJyb3IoNjEyKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBCYWFTLl9iYWFzUmVxdWVzdCh7XG4gICAgICAgIHVybDogQVBJLkFDQ09VTlRfSU5GTyxcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgICBuZXdfcGFzc3dvcmQ6IG5ld1Bhc3N3b3JkXG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMzO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOabtOaWsOmCrueusVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IGVtYWlsIGVtYWlsIOWcsOWdgFxuICAgICAqIEBwYXJhbSB7U2V0RW1haWxPcHRpb25zfSBbb3B0aW9uc10g5Y+v6YCJ5Y+C5pWwXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dGhpcz59IFVzZXJSZWNvcmQg5a6e5L6LXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRFbWFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRFbWFpbChlbWFpbCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBfcmVmMiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge30sXG4gICAgICAgICAgX3JlZjIkc2VuZFZlcmlmaWNhdGlvID0gX3JlZjIuc2VuZFZlcmlmaWNhdGlvbkVtYWlsLFxuICAgICAgICAgIHNlbmRWZXJpZmljYXRpb25FbWFpbCA9IF9yZWYyJHNlbmRWZXJpZmljYXRpbyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiRzZW5kVmVyaWZpY2F0aW87XG5cbiAgICAgIGlmICh0aGlzLl9hbm9ueW1vdXMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBIRXJyb3IoNjEyKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBCYWFTLl9iYWFzUmVxdWVzdCh7XG4gICAgICAgIHVybDogQVBJLkFDQ09VTlRfSU5GTyxcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGVtYWlsOiBlbWFpbFxuICAgICAgICB9XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgaWYgKHNlbmRWZXJpZmljYXRpb25FbWFpbCkge1xuICAgICAgICAgIF90aGlzNC5yZXF1ZXN0RW1haWxWZXJpZmljYXRpb24oZW1haWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXM0LmluaXRBdHRyaWJ1dGUocmVzLmRhdGEpO1xuXG4gICAgICAgIHJldHVybiBfdGhpczQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5pu05paw55So5oi35ZCNXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gdXNlcm5hbWUg55So5oi35ZCNXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dGhpcz59IFVzZXJSZWNvcmQg5a6e5L6LXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRVc2VybmFtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRVc2VybmFtZSh1c2VybmFtZSkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9hbm9ueW1vdXMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBIRXJyb3IoNjEyKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBCYWFTLl9iYWFzUmVxdWVzdCh7XG4gICAgICAgIHVybDogQVBJLkFDQ09VTlRfSU5GTyxcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZVxuICAgICAgICB9XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgX3RoaXM1LmluaXRBdHRyaWJ1dGUocmVzLmRhdGEpO1xuXG4gICAgICAgIHJldHVybiBfdGhpczU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Y+R6YCB6aqM6K+B6YKu5Lu2XG4gICAgICogQHJldHVybnMge1Byb21pc2U8dGhpcz59IFVzZXJSZWNvcmQg5a6e5L6LXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXF1ZXN0RW1haWxWZXJpZmljYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdEVtYWlsVmVyaWZpY2F0aW9uKCkge1xuICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9hbm9ueW1vdXMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBIRXJyb3IoNjEyKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBCYWFTLl9iYWFzUmVxdWVzdCh7XG4gICAgICAgIHVybDogQVBJLkVNQUlMX1ZFUklGWSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXM2O1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWIneasoeiuvue9rui0puWPt+S/oeaBr1xuICAgICAqIEBwYXJhbSB7QmFhUy5TZXRBY2NvdW50UGFybWFzfSBhY2NvdW50SW5mb1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHRoaXM+fSBVc2VyUmVjb3JkIOWunuS+i1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0QWNjb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRBY2NvdW50KCkge1xuICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICAgIHZhciBhY2NvdW50SW5mbyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgIGlmICh0aGlzLl9hbm9ueW1vdXMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBIRXJyb3IoNjEyKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY2NvdW50SW5mby5wYXNzd29yZCkge1xuICAgICAgICBhY2NvdW50SW5mby5uZXdfcGFzc3dvcmQgPSBhY2NvdW50SW5mby5wYXNzd29yZDtcbiAgICAgICAgZGVsZXRlIGFjY291bnRJbmZvLnBhc3N3b3JkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQmFhUy5fYmFhc1JlcXVlc3Qoe1xuICAgICAgICB1cmw6IEFQSS5BQ0NPVU5UX0lORk8sXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGRhdGE6IGFjY291bnRJbmZvXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgX3RoaXM3LmluaXRBdHRyaWJ1dGUocmVzLmRhdGEpO1xuXG4gICAgICAgIHJldHVybiBfdGhpczc7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5pu05pS55omL5py65Y+3XG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gcGhvbmUg5omL5py65Y+356CBXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dGhpcz59IFVzZXJSZWNvcmQg5a6e5L6LXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRNb2JpbGVQaG9uZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRNb2JpbGVQaG9uZShwaG9uZSkge1xuICAgICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9hbm9ueW1vdXMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBIRXJyb3IoNjEyKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBCYWFTLl9iYWFzUmVxdWVzdCh7XG4gICAgICAgIHVybDogQVBJLkFDQ09VTlRfSU5GTyxcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHBob25lOiBwaG9uZVxuICAgICAgICB9XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgX3RoaXM4LmluaXRBdHRyaWJ1dGUocmVzLmRhdGEpO1xuXG4gICAgICAgIHJldHVybiBfdGhpczg7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6aqM6K+B5omL5py65Y+3XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGUg55+t5L+h6aqM6K+B56CBXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dGhpcz59IFVzZXJSZWNvcmQg5a6e5L6LXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ2ZXJpZnlNb2JpbGVQaG9uZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2ZXJpZnlNb2JpbGVQaG9uZShjb2RlKSB7XG4gICAgICB2YXIgX3RoaXM5ID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2Fub255bW91cykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEhFcnJvcig2MTIpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIEJhYVMuX2JhYXNSZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBBUEkuVkVSSUZZX01PQklMRSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjb2RlOiBjb2RlXG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXM5O1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEN1cnJlbnRVc2VyO1xufShVc2VyUmVjb3JkKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDdXJyZW50VXNlcjsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIEJhYVMgPSByZXF1aXJlKCcuL2JhYXMnKTtcblxudmFyIEJhc2VRdWVyeSA9IHJlcXVpcmUoJy4vQmFzZVF1ZXJ5Jyk7XG5cbnZhciBBUEkgPSBCYWFTLl9jb25maWcuQVBJO1xuLyoqXG4gKiDmlofku7ZcbiAqIEBtZW1iZXJvZiBCYWFTXG4gKiBAZXh0ZW5kcyBCYWFTLkJhc2VRdWVyeVxuICogQHB1YmxpY1xuICovXG5cbnZhciBGaWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfQmFzZVF1ZXJ5KSB7XG4gIF9pbmhlcml0cyhGaWxlLCBfQmFzZVF1ZXJ5KTtcblxuICBmdW5jdGlvbiBGaWxlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaWxlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoRmlsZSkuY2FsbCh0aGlzKSk7XG4gIH1cbiAgLyoqXG4gICAqIOS4iuS8oOaWh+S7tuOAglxuICAgKiBAbWV0aG9kXG4gICAqIEBwYXJhbSB7QmFhUy5GaWxlUGFyYW1zfSBmaWxlUGFyYW1zIOaWh+S7tuWPguaVsFxuICAgKiBAcGFyYW0ge0JhYVMuRmlsZU1ldGF9IFttZXRhRGF0YV0g5paH5Lu25YWD5L+h5oGvXG4gICAqIEByZXR1cm4ge1Byb21pc2U8QmFhUy5SZXNwb25zZTxhbnk+Pn1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoRmlsZSwgW3tcbiAgICBrZXk6IFwidXBsb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwbG9hZChmaWxlUGFyYW1zLCBtZXRhRGF0YSkge1xuICAgICAgcmV0dXJuIEJhYVMudXBsb2FkRmlsZShmaWxlUGFyYW1zLCBtZXRhRGF0YSwgJ2pzb24nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Yig6Zmk5paH5Lu244CCXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCDmlofku7YgSURcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPEJhYVMuUmVzcG9uc2U8YW55Pj59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZWxldGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2RlbGV0ZShpZCkge1xuICAgICAgaWYgKGlkIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIEJhYVMuZGVsZXRlRmlsZXMoe1xuICAgICAgICAgICdpZF9faW4nOiBpZFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBCYWFTLmRlbGV0ZUZpbGUoe1xuICAgICAgICAgIGZpbGVJRDogaWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluaWh+S7tuivpuaDheOAglxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZUlEIOaWh+S7tiBJRFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QmFhUy5SZXNwb25zZTxhbnk+Pn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoZmlsZUlEKSB7XG4gICAgICByZXR1cm4gQmFhUy5nZXRGaWxlRGV0YWlsKHtcbiAgICAgICAgZmlsZUlEOiBmaWxlSURcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmlofku7bliJfooajjgIJcbiAgICAgKiBAbWV0aG9kXG4gICAgICogQHBhcmFtIHtCYWFTLkZpbmRPcHRpb25zfSBbb3B0aW9uc10g5Y+C5pWwXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxCYWFTLlJlc3BvbnNlPGFueT4+fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZmluZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kKCkge1xuICAgICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICAgIF9yZWYkd2l0aENvdW50ID0gX3JlZi53aXRoQ291bnQsXG4gICAgICAgICAgd2l0aENvdW50ID0gX3JlZiR3aXRoQ291bnQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiR3aXRoQ291bnQ7XG5cbiAgICAgIHZhciBjb25kaXRpb24gPSB0aGlzLl9oYW5kbGVBbGxRdWVyeUNvbmRpdGlvbnMoKTtcblxuICAgICAgdGhpcy5faW5pdFF1ZXJ5UGFyYW1zKCk7XG5cbiAgICAgIHJldHVybiBCYWFTLmdldEZpbGVMaXN0KF9leHRlbmRzKHt9LCBjb25kaXRpb24sIHtcbiAgICAgICAgcmV0dXJuX3RvdGFsX2NvdW50OiB3aXRoQ291bnQgPyAxIDogMFxuICAgICAgfSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmlofku7bmlbDph4/jgIJcbiAgICAgKiBAbWV0aG9kXG4gICAgICogQHNpbmNlIHYzLjAuMFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8bnVtYmVyPn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvdW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMubGltaXQoMSkuZmluZCh7XG4gICAgICAgIHdpdGhDb3VudDogdHJ1ZVxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHZhciB0b3RhbF9jb3VudCA9IHJlcy5kYXRhLm1ldGEudG90YWxfY291bnQ7XG4gICAgICAgIHJldHVybiB0b3RhbF9jb3VudDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDnlJ/miJDop4bpopHmiKrlm77jgIJcbiAgICAgKiBAbWV0aG9kXG4gICAgICogQHBhcmFtIHtCYWFTLlZpZGVvU25hcHNob3RQYXJhbXN9IHBhcmFtcyDmiKrlm77lj4LmlbBcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPEJhYVMuRmlsZU9wZXJhdGlvblJlc3VsdD59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZW5WaWRlb1NuYXBzaG90XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlblZpZGVvU25hcHNob3QocGFyYW1zKSB7XG4gICAgICByZXR1cm4gQmFhUy5fYmFhc1JlcXVlc3Qoe1xuICAgICAgICB1cmw6IEFQSS5WSURFT19TTkFQU0hPVCxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHBhcmFtc1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHJldHVybiByZXMuZGF0YTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNM1U4IOinhumikeaLvOaOpeOAglxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAcGFyYW0ge0JhYVMuVmlkZW9Db25jYXRQYXJhbXN9IHBhcmFtcyDmi7zmjqXlj4LmlbBcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPEJhYVMuRmlsZU9wZXJhdGlvblJlc3VsdD59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ2aWRlb0NvbmNhdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2aWRlb0NvbmNhdChwYXJhbXMpIHtcbiAgICAgIHJldHVybiBCYWFTLl9iYWFzUmVxdWVzdCh7XG4gICAgICAgIHVybDogQVBJLk0zVThfQ09OQ0FULFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YTogcGFyYW1zXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE0zVTgg6KeG6aKR5Ymq6L6R44CCXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7QmFhUy5WaWRlb0NsaXBQYXJhbXN9IHBhcmFtcyDliarovpHlj4LmlbBcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPEJhYVMuRmlsZU9wZXJhdGlvblJlc3VsdD59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ2aWRlb0NsaXBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmlkZW9DbGlwKHBhcmFtcykge1xuICAgICAgcmV0dXJuIEJhYVMuX2JhYXNSZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBBUEkuTTNVOF9DTElQLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YTogcGFyYW1zXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE0zVTgg5pe26ZW/5ZKM5YiG54mH5L+h5oGv44CCXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7QmFhUy5WaWRlb01ldGFQYXJhbXN9IHBhcmFtcyDliIbniYfkv6Hmga/lj4LmlbBcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPEJhYVMuVmlkZW9NZXRhUmVzdWx0Pn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInZpZGVvTWV0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2aWRlb01ldGEocGFyYW1zKSB7XG4gICAgICByZXR1cm4gQmFhUy5fYmFhc1JlcXVlc3Qoe1xuICAgICAgICB1cmw6IEFQSS5NM1U4X01FVEEsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiBwYXJhbXNcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6Z+z6KeG6aKR55qE5YWD5L+h5oGv44CCXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7QmFhUy5WaWRlb0F1ZGlvTWV0YVBhcmFtc30gcGFyYW1zIOmfs+inhumikeeahOWFg+S/oeaBr+WPguaVsFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QmFhUy5WaWRlb0F1ZGlvTWV0YVJlc3VsdD59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ2aWRlb0F1ZGlvTWV0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2aWRlb0F1ZGlvTWV0YShwYXJhbXMpIHtcbiAgICAgIHJldHVybiBCYWFTLl9iYWFzUmVxdWVzdCh7XG4gICAgICAgIHVybDogQVBJLlZJREVPX0FVRElPX01FVEEsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiBwYXJhbXNcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRmlsZTtcbn0oQmFzZVF1ZXJ5KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaWxlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgQmFhUyA9IHJlcXVpcmUoJy4vYmFhcycpO1xuXG52YXIgQmFzZVF1ZXJ5ID0gcmVxdWlyZSgnLi9CYXNlUXVlcnknKTtcblxudmFyIFF1ZXJ5ID0gcmVxdWlyZSgnLi9RdWVyeScpO1xuLyoqXG4gKiDmlofku7bliIbnsbtcbiAqIEBtZW1iZXJvZiBCYWFTXG4gKiBAZXh0ZW5kcyBCYWFTLkJhc2VRdWVyeVxuICogQHB1YmxpY1xuICovXG5cblxudmFyIEZpbGVDYXRlZ29yeSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Jhc2VRdWVyeSkge1xuICBfaW5oZXJpdHMoRmlsZUNhdGVnb3J5LCBfQmFzZVF1ZXJ5KTtcblxuICBmdW5jdGlvbiBGaWxlQ2F0ZWdvcnkoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpbGVDYXRlZ29yeSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEZpbGVDYXRlZ29yeSkuY2FsbCh0aGlzKSk7XG4gIH1cbiAgLyoqXG4gICAqIOiOt+WPluaWh+S7tuWIhuexu+ivpuaDheOAglxuICAgKiBAbWV0aG9kXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYXRlZ29yeUlEIOaWh+S7tuWIhuexuyBJRFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEJhYVMuUmVzcG9uc2U8YW55Pj59XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEZpbGVDYXRlZ29yeSwgW3tcbiAgICBrZXk6IFwiZ2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldChjYXRlZ29yeUlEKSB7XG4gICAgICByZXR1cm4gQmFhUy5nZXRGaWxlQ2F0ZWdvcnlEZXRhaWwoe1xuICAgICAgICBjYXRlZ29yeUlEOiBjYXRlZ29yeUlEXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6YCa6L+H5paH5Lu25YiG57G7IElEIOiOt+WPluWIhuexu+S4i+eahOaJgOacieaWh+S7tuOAglxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2F0ZWdvcnlJRCDmlofku7bliIbnsbsgSURcbiAgICAgKiBAcGFyYW0ge0JhYVMuRmluZE9wdGlvbnN9IFtvcHRpb25zXSDlj4LmlbBcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPEJhYVMuUmVzcG9uc2U8YW55Pj59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRGaWxlTGlzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGaWxlTGlzdChjYXRlZ29yeUlEKSB7XG4gICAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge30sXG4gICAgICAgICAgX3JlZiR3aXRoQ291bnQgPSBfcmVmLndpdGhDb3VudCxcbiAgICAgICAgICB3aXRoQ291bnQgPSBfcmVmJHdpdGhDb3VudCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHdpdGhDb3VudDtcblxuICAgICAgdmFyIHF1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XG4gICAgICBxdWVyeS5pbignY2F0ZWdvcnlfaWQnLCBbY2F0ZWdvcnlJRF0pO1xuICAgICAgcmV0dXJuIEJhYVMuZ2V0RmlsZUxpc3Qoe1xuICAgICAgICB3aGVyZTogSlNPTi5zdHJpbmdpZnkocXVlcnkucXVlcnlPYmplY3QpLFxuICAgICAgICByZXR1cm5fdG90YWxfY291bnQ6IHdpdGhDb3VudCA/IDEgOiAwXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5paH5Lu25YiG57G75YiX6KGo44CCXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7QmFhUy5GaW5kT3B0aW9uc30gW29wdGlvbnNdIOWPguaVsFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QmFhUy5SZXNwb25zZTxhbnk+Pn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImZpbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZCgpIHtcbiAgICAgIHZhciBfcmVmMiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgICAgX3JlZjIkd2l0aENvdW50ID0gX3JlZjIud2l0aENvdW50LFxuICAgICAgICAgIHdpdGhDb3VudCA9IF9yZWYyJHdpdGhDb3VudCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiR3aXRoQ291bnQ7XG5cbiAgICAgIHZhciBjb25kaXRpb24gPSB0aGlzLl9oYW5kbGVBbGxRdWVyeUNvbmRpdGlvbnMoKTtcblxuICAgICAgdGhpcy5faW5pdFF1ZXJ5UGFyYW1zKCk7XG5cbiAgICAgIHJldHVybiBCYWFTLmdldEZpbGVDYXRlZ29yeUxpc3QoX2V4dGVuZHMoe30sIGNvbmRpdGlvbiwge1xuICAgICAgICByZXR1cm5fdG90YWxfY291bnQ6IHdpdGhDb3VudCA/IDEgOiAwXG4gICAgICB9KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluaWh+S7tuWIhuexu+aVsOmHj+OAglxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAc2luY2UgdjMuMC4wXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxudW1iZXI+fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY291bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5saW1pdCgxKS5maW5kKHtcbiAgICAgICAgd2l0aENvdW50OiB0cnVlXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdmFyIHRvdGFsX2NvdW50ID0gcmVzLmRhdGEubWV0YS50b3RhbF9jb3VudDtcbiAgICAgICAgcmV0dXJuIHRvdGFsX2NvdW50O1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZpbGVDYXRlZ29yeTtcbn0oQmFzZVF1ZXJ5KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaWxlQ2F0ZWdvcnk7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG4vKipcbiAqIEdlbyDngrlcbiAqIEBtZW1iZXJvZiBCYWFTXG4gKiBAcHVibGljXG4gKi9cblxuXG52YXIgR2VvUG9pbnQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxvbmdpdHVkZSDnu4/luqZcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxhdGl0dWRlIOe6rOW6plxuICAgKi9cbiAgZnVuY3Rpb24gR2VvUG9pbnQobG9uZ2l0dWRlLCBsYXRpdHVkZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHZW9Qb2ludCk7XG5cbiAgICB0aGlzLmxvbmdpdHVkZSA9IGxvbmdpdHVkZTtcbiAgICB0aGlzLmxhdGl0dWRlID0gbGF0aXR1ZGU7XG4gICAgdGhpcy5nZW9KU09OID0ge1xuICAgICAgJ3R5cGUnOiAnUG9pbnQnLFxuICAgICAgJ2Nvb3JkaW5hdGVzJzogW3RoaXMubG9uZ2l0dWRlLCB0aGlzLmxhdGl0dWRlXVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIOi9rOaNouS4uiBHZW9KU09OXG4gICAqIEByZXR1cm4ge0JhYVMuR2VvSnNvbn1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoR2VvUG9pbnQsIFt7XG4gICAga2V5OiBcInRvR2VvSlNPTlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0dlb0pTT04oKSB7XG4gICAgICByZXR1cm4gdXRpbHMuY2xvbmVEZWVwKHRoaXMuZ2VvSlNPTik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdlb1BvaW50O1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdlb1BvaW50OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIEdlb1BvaW50ID0gcmVxdWlyZSgnLi9HZW9Qb2ludCcpO1xuXG52YXIgSEVycm9yID0gcmVxdWlyZSgnLi9IRXJyb3InKTtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuLyoqXG4gKiBHZW8g5aSa6L655b2iXG4gKiBAbWVtYmVyb2YgQmFhU1xuICogQHB1YmxpY1xuICovXG5cblxudmFyIEdlb1BvbHlnb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJbXVtdfSBhcmdzIOeCueWdkOagh1xuICAgKi9cbiAgZnVuY3Rpb24gR2VvUG9seWdvbihhcmdzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdlb1BvbHlnb24pO1xuXG4gICAgaWYgKGFyZ3MgJiYgYXJncyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBpZiAoYXJncy5sZW5ndGggPCA0KSB7XG4gICAgICAgIHRocm93IG5ldyBIRXJyb3IoNjA1KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9pbnRzID0gYXJncztcbiAgICAgICAgdGhpcy5nZW9KU09OID0ge1xuICAgICAgICAgIHR5cGU6ICdQb2x5Z29uJyxcbiAgICAgICAgICBjb29yZGluYXRlczogW11cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEhFcnJvcig2MDUpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICog6L2s5o2i5Li6IEdlb0pTT05cbiAgICogQHJldHVybiB7R2VvSnNvbn1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoR2VvUG9seWdvbiwgW3tcbiAgICBrZXk6IFwidG9HZW9KU09OXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvR2VvSlNPTigpIHtcbiAgICAgIHZhciBmYWNlID0gW107XG4gICAgICB0aGlzLnBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICBpZiAocG9pbnQgaW5zdGFuY2VvZiBHZW9Qb2ludCkge1xuICAgICAgICAgIGZhY2UucHVzaChbcG9pbnQubG9uZ2l0dWRlLCBwb2ludC5sYXRpdHVkZV0pO1xuICAgICAgICB9IGVsc2UgaWYgKHBvaW50IGluc3RhbmNlb2YgQXJyYXkgJiYgcG9pbnQubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgZmFjZS5wdXNoKHBvaW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgSEVycm9yKDYwNSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5nZW9KU09OLmNvb3JkaW5hdGVzID0gW2ZhY2VdO1xuICAgICAgcmV0dXJuIHV0aWxzLmNsb25lRGVlcCh0aGlzLmdlb0pTT04pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHZW9Qb2x5Z29uO1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdlb1BvbHlnb247IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vKipcbiAqIEBtZW1iZXJvZiBCYWFTXG4gKiBAcGFja2FnZVxuICovXG52YXIgSEVycm9yID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb2RlIOmUmeivr+eggVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbXNnIOmUmeivr+S/oeaBr1xuICAgKi9cbiAgZnVuY3Rpb24gSEVycm9yKGNvZGUsIG1zZykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIRXJyb3IpO1xuXG4gICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gICAgZXJyb3IubWVzc2FnZSA9IG1zZyA/IFwiXCIuY29uY2F0KGNvZGUsIFwiOiBcIikuY29uY2F0KG1zZykgOiBcIlwiLmNvbmNhdChjb2RlLCBcIjogXCIpLmNvbmNhdCh0aGlzLm1hcEVycm9yTWVzc2FnZShjb2RlKSk7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9IC8vIOWJjeerr+mUmeivr+S/oeaBr+WumuS5iVxuXG5cbiAgX2NyZWF0ZUNsYXNzKEhFcnJvciwgW3tcbiAgICBrZXk6IFwibWFwRXJyb3JNZXNzYWdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hcEVycm9yTWVzc2FnZShjb2RlKSB7XG4gICAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgICAgY2FzZSA2MDA6XG4gICAgICAgICAgcmV0dXJuICduZXR3b3JrIGRpc2Nvbm5lY3RlZCc7XG5cbiAgICAgICAgY2FzZSA2MDE6XG4gICAgICAgICAgcmV0dXJuICdyZXF1ZXN0IHRpbWVvdXQnO1xuXG4gICAgICAgIGNhc2UgNjAyOlxuICAgICAgICAgIHJldHVybiAndW5pbml0aWFsaXplZCc7XG4gICAgICAgIC8vIOacquiwg+eUqCBCYWFTLmluaXQoKVxuXG4gICAgICAgIGNhc2UgNjAzOlxuICAgICAgICAgIHJldHVybiAndW5hdXRob3JpemVkJztcbiAgICAgICAgLy8g55So5oi35bCa5pyq5o6I5p2DXG5cbiAgICAgICAgY2FzZSA2MDQ6XG4gICAgICAgICAgcmV0dXJuICdzZXNzaW9uIG1pc3NpbmcnO1xuICAgICAgICAvLyDnlKjmiLflsJrmnKrnmbvlvZVcblxuICAgICAgICBjYXNlIDYwNTpcbiAgICAgICAgICByZXR1cm4gJ2luY29ycmVjdCBwYXJhbWV0ZXIgdHlwZSc7XG5cbiAgICAgICAgY2FzZSA2MDc6XG4gICAgICAgICAgcmV0dXJuICdwYXltZW50IGNhbmNlbGxlZCc7XG5cbiAgICAgICAgY2FzZSA2MDg6XG4gICAgICAgICAgcmV0dXJuICdwYXltZW50IGZhaWxlZCc7XG4gICAgICAgIC8vIGVycm9yIG1lc3NhZ2Ug5Lya6KKr6YeN5YaZ5Li65b6u5L+h6L+U5Zue55qE6ZSZ6K+v5L+h5oGvXG5cbiAgICAgICAgY2FzZSA2MDk6XG4gICAgICAgICAgcmV0dXJuICd3eEV4dGVuZCBmdW5jdGlvbiBzaG91bGQgYmUgZXhlY3V0ZWQgdG8gYWxsb3cgcGx1Z2luIHVzZSB3eC5sb2dpbiwgd3guZ2V0VXNlckluZm8sIHd4LnJlcXVlc3RQYXltZW50JztcblxuICAgICAgICBjYXNlIDYxMDpcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yVHJhY2tlciB1bmluaXRpYWxpemVkJztcblxuICAgICAgICBjYXNlIDYxMTpcbiAgICAgICAgICByZXR1cm4gJ3Vuc3VwcG9ydGVkIGZ1bmN0aW9uJztcblxuICAgICAgICBjYXNlIDYxMjpcbiAgICAgICAgICByZXR1cm4gJ2Fub255bW91cyB1c2VyIGlzIG5vdCBhbGxvd2VkJztcblxuICAgICAgICBjYXNlIDYxMzpcbiAgICAgICAgICByZXR1cm4gJ3RoaXJkIHBhcnR5IGF1dGggZGVuaWVkJztcblxuICAgICAgICBjYXNlIDYxNDpcbiAgICAgICAgICByZXR1cm4gJ3RoaXJkIHBhcnR5IGF1dGggZmFpbGVkJztcblxuICAgICAgICBjYXNlIDYxNTpcbiAgICAgICAgICByZXR1cm4gJ2dhdGV3YXkgdHlwZSBcIndlaXhpbl90ZW5wYXlfanNcIiB3b3JrcyBpbiBXZUNoYXQgYnVpbHRpbiBicm93c2VyIG9ubHknO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICd1bmtub3duIGVycm9yJztcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSEVycm9yO1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhFcnJvcjsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIEJhYVMgPSByZXF1aXJlKCcuL2JhYXMnKTtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgQmFzZVF1ZXJ5ID0gcmVxdWlyZSgnLi9CYXNlUXVlcnknKTtcbi8qKlxuICog5pSv5LuY6K6i5Y2VXG4gKiBAbWVtYmVyb2YgQmFhU1xuICogQGV4dGVuZHMgQmFhUy5CYXNlUXVlcnlcbiAqIEBwdWJsaWNcbiAqL1xuXG5cbnZhciBPcmRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Jhc2VRdWVyeSkge1xuICBfaW5oZXJpdHMoT3JkZXIsIF9CYXNlUXVlcnkpO1xuXG4gIGZ1bmN0aW9uIE9yZGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPcmRlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE9yZGVyKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhPcmRlciwgW3tcbiAgICBrZXk6IFwiZ2V0XCIsXG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmlK/ku5jorqLljZXor6bmg4XjgIJcbiAgICAgKiBAbWV0aG9kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRyYW5zYWN0aW9uSUQg5pSv5LuY5rWB5rC0IElEXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxCYWFTLlJlc3BvbnNlPGFueT4+fVxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQodHJhbnNhY3Rpb25JRCkge1xuICAgICAgdmFyIEFQSSA9IEJhYVMuX2NvbmZpZy5BUEk7XG4gICAgICB2YXIgdXJsID0gdXRpbHMuZm9ybWF0KEFQSS5PUkRFUiwge1xuICAgICAgICB0cmFuc2FjdGlvbklEOiB0cmFuc2FjdGlvbklEXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBCYWFTLl9iYWFzUmVxdWVzdCh7XG4gICAgICAgIHVybDogdXJsXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5pSv5LuY6K6i5Y2V5YiX6KGo44CCXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7QmFhUy5HZXRPcmRlckxpc3RQYXJhbXN9IFtwYXJhbXNdIOetm+mAieWPguaVsFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QmFhUy5SZXNwb25zZTxhbnk+Pn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldE9yZGVyTGlzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRPcmRlckxpc3QoKSB7XG4gICAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgdmFyIGNvbmRpdGlvbiA9IF9leHRlbmRzKHt9LCB0aGlzLl9oYW5kbGVBbGxRdWVyeUNvbmRpdGlvbnMoKSwgcGFyYW1zKTtcblxuICAgICAgdGhpcy5faW5pdFF1ZXJ5UGFyYW1zKCk7XG5cbiAgICAgIHJldHVybiBCYWFTLmdldE9yZGVyTGlzdChfZXh0ZW5kcyhjb25kaXRpb24sIHBhcmFtcykpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBPcmRlcjtcbn0oQmFzZVF1ZXJ5KTtcblxubW9kdWxlLmV4cG9ydHMgPSBPcmRlcjsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBHZW9Qb2ludCA9IHJlcXVpcmUoJy4vR2VvUG9pbnQnKTtcblxudmFyIEdlb1BvbHlnb24gPSByZXF1aXJlKCcuL0dlb1BvbHlnb24nKTtcblxudmFyIEhFcnJvciA9IHJlcXVpcmUoJy4vSEVycm9yJyk7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIEJhc2VSZWNvcmQgPSByZXF1aXJlKCcuL0Jhc2VSZWNvcmQnKTtcblxudmFyIHNlcmlhbGl6ZVZhbHVlID0gQmFzZVJlY29yZC5fc2VyaWFsaXplVmFsdWVGdW5jRmFjdG9yeShbJ0Jhc2VSZWNvcmQnXSk7XG4vKipcbiAqIOafpeivolxuICogQG1lbWJlcm9mIEJhYVNcbiAqIEBwdWJsaWNcbiAqL1xuXG5cbnZhciBRdWVyeSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFF1ZXJ5KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBRdWVyeSk7XG5cbiAgICB0aGlzLnF1ZXJ5T2JqZWN0ID0ge307XG4gIH1cbiAgLyoqXG4gICAqIGFuZCDmk43kvZznrKbjgILlsIblpJrkuKogUXVlcnkg5a+56LGh5L2/55SoIGFuZCDmk43kvZznrKbov5vooYzlkIjlubZcbiAgICpcbiAgICogQHN0YXRpY1xuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHsuLi5RdWVyeVtdfSBxdWVyeXMgUXVlcnkg5a+56LGhXG4gICAqIEByZXR1cm5zIHtRdWVyeX0gLSDmlrDnmoQgUXVlcnkg5a+56LGhXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFF1ZXJ5LCBbe1xuICAgIGtleTogXCJjb21wYXJlXCIsXG5cbiAgICAvKipcbiAgICAgKiDmr5TovoPliKTmlq3vvIzlsIYgUmVjb3JkW2tleV0g5LiOIHZhbHVlIOS9v+eUqCBvcGVyYXRvciDov5vooYzliKTmlq3vvIznrZvpgInlh7pcbiAgICAgKiDnrKblkIjmnaHku7bnmoQgUmVjb3Jk44CCXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0g55So5LqO5p+l6K+i5Yik5pat55qE5a2X5q61XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wZXJhdG9yIC0g5Yik5pat5pON5L2c56ymXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0g55So5LqO5Yik5pat55qE5YC8XG4gICAgICogQHJldHVybnMge3RoaXN9IFF1ZXJ5IOWunuS+i1xuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wYXJlKGtleSwgb3BlcmF0b3IsIHZhbHVlKSB7XG4gICAgICB2YXIgb3AgPSAnZXEnO1xuXG4gICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJz0nOlxuICAgICAgICAgIG9wID0gJ2VxJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICchPSc6XG4gICAgICAgICAgb3AgPSAnbmUnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgIG9wID0gJ2x0JztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICc8PSc6XG4gICAgICAgICAgb3AgPSAnbHRlJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICBvcCA9ICdndCc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgIG9wID0gJ2d0ZSc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgSEVycm9yKDYwNSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FkZFF1ZXJ5T2JqZWN0KGtleSwgX2RlZmluZVByb3BlcnR5KHt9LCBvcCwgc2VyaWFsaXplVmFsdWUodmFsdWUpKSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDljIXlkKvliKTmlq3vvIznrZvpgInlh7rnrKblkIjmnaHku7bvvIhSZWNvcmRba2V5XSDljIXlkKvkuoblrZfnrKbkuLIgc3Ry77yJ55qEIFJlY29yZOOAglxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIOeUqOS6juafpeivouWIpOaWreeahOWtl+autVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSDnlKjkuo7liKTmlq3nmoTlrZfnrKbkuLJcbiAgICAgKiBAcmV0dXJucyB7dGhpc30gUXVlcnkg5a6e5L6LXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb250YWluc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb250YWlucyhrZXksIHN0cikge1xuICAgICAgaWYgKHN0ciAmJiB1dGlscy5pc1N0cmluZyhzdHIpKSB7XG4gICAgICAgIHRoaXMuX2FkZFF1ZXJ5T2JqZWN0KGtleSwge1xuICAgICAgICAgIGNvbnRhaW5zOiBzdHJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgSEVycm9yKDYwNSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOato+WImeWIpOaWre+8jOetm+mAieWHuuespuWQiOadoeS7tu+8iOato+WImeihqOi+vuW8jyByZWdFeHAg6IO95Yy56YWNIFJlY29yZFtrZXld77yJ55qEIFJlY29yZOOAglxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIOeUqOS6juafpeivouWIpOaWreeahOWtl+autVxuICAgICAqIEBwYXJhbSB7UmVnRXhwfSByZWdFeHAgLSDmraPliJnooajovr7lvI9cbiAgICAgKiBAcmV0dXJucyB7dGhpc30gUXVlcnkg5a6e5L6LXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtYXRjaGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hdGNoZXMoa2V5LCByZWdFeHApIHtcbiAgICAgIGlmIChyZWdFeHAgJiYgcmVnRXhwIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB1dGlscy5wYXJzZVJlZ0V4cChyZWdFeHApO1xuXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRoaXMuX2FkZFF1ZXJ5T2JqZWN0KGtleSwge1xuICAgICAgICAgICAgcmVnZXg6IHJlc3VsdFswXSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHJlc3VsdFsxXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2FkZFF1ZXJ5T2JqZWN0KGtleSwge1xuICAgICAgICAgICAgcmVnZXg6IHJlc3VsdFswXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgSEVycm9yKDYwNSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWMheWQq+WIpOaWre+8jOetm+mAieWHuuespuWQiOadoeS7tu+8iOaVsOe7hCBhcnIg5YyF5ZCrIFJlY29yZFtrZXld77yJ55qEIFJlY29yZOOAglxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIOeUqOS6juafpeivouWIpOaWreeahOWtl+autVxuICAgICAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyIC0g55So5LqO5Yik5pat55qE5pWw57uEXG4gICAgICogQHJldHVybnMge3RoaXN9IFF1ZXJ5IOWunuS+i1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2luKGtleSwgYXJyKSB7XG4gICAgICBpZiAoYXJyICYmIGFyciBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHRoaXMuX2FkZFF1ZXJ5T2JqZWN0KGtleSwge1xuICAgICAgICAgIGluOiBhcnIubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplVmFsdWUodik7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgSEVycm9yKDYwNSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOS4jeWMheWQq+WIpOaWre+8jOetm+mAieWHuuespuWQiOadoeS7tu+8iOaVsOe7hCBhcnIg5LiN5YyF5ZCrIFJlY29yZFtrZXld77yJ55qEIFJlY29yZOOAglxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIOeUqOS6juafpeivouWIpOaWreeahOWtl+autVxuICAgICAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyIC0g55So5LqO5Yik5pat55qE5pWw57uEXG4gICAgICogQHJldHVybnMge3RoaXN9IFF1ZXJ5IOWunuS+i1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibm90SW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbm90SW4oa2V5LCBhcnIpIHtcbiAgICAgIGlmIChhcnIgJiYgYXJyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdGhpcy5fYWRkUXVlcnlPYmplY3Qoa2V5LCB7XG4gICAgICAgICAgbmluOiBhcnIubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplVmFsdWUodik7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgSEVycm9yKDYwNSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaVsOe7hOWMheWQq+WIpOaWreOAglxuICAgICAqIOWIpOaWremAu+i+ke+8mlJlY29yZFtrZXldIOaYr+aVsOe7hOexu+Wei++8jOS4lOWMheWQqyBhcnIg5pWw57uE5Lit55qE5YWD57SgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0g55So5LqO5p+l6K+i5Yik5pat55qE5a2X5q61XG4gICAgICogQHBhcmFtIHtBcnJheTxhbnk+fSBhcnIgLSDnlKjkuo7liKTmlq3nmoTmlbDnu4RcbiAgICAgKiBAcmV0dXJucyB7dGhpc30gUXVlcnkg5a6e5L6LXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhcnJheUNvbnRhaW5zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFycmF5Q29udGFpbnMoa2V5LCBhcnIpIHtcbiAgICAgIGlmIChhcnIgJiYgYXJyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdGhpcy5fYWRkUXVlcnlPYmplY3Qoa2V5LCB7XG4gICAgICAgICAgYWxsOiBhcnJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgSEVycm9yKDYwNSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWtl+auteS4uiBOdWxsIOWIpOaWreOAglxuICAgICAqIOWIpOaWremAu+i+ke+8mlJlY29yZFtrZXldIOaYryBudWxsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0g55So5LqO5p+l6K+i5Yik5pat55qE5a2X5q61XG4gICAgICogQHJldHVybnMge3RoaXN9IFF1ZXJ5IOWunuS+i1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNOdWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTnVsbChrZXkpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmIChrZXkgJiYga2V5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAga2V5LmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICBfdGhpcy5fYWRkUXVlcnlPYmplY3Qoaywge1xuICAgICAgICAgICAgaXNudWxsOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYWRkUXVlcnlPYmplY3Qoa2V5LCB7XG4gICAgICAgICAgaXNudWxsOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICog5a2X5q615LiN5Li6IE51bGwg5Yik5pat44CCXG4gICAgICog5Yik5pat6YC76L6R77yaUmVjb3JkW2tleV0g5LiN5pivIG51bGxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSDnlKjkuo7mn6Xor6LliKTmlq3nmoTlrZfmrrVcbiAgICAgKiBAcmV0dXJucyB7dGhpc30gUXVlcnkg5a6e5L6LXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc05vdE51bGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNOb3ROdWxsKGtleSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmIChrZXkgJiYga2V5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAga2V5LmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICBfdGhpczIuX2FkZFF1ZXJ5T2JqZWN0KGssIHtcbiAgICAgICAgICAgIGlzbnVsbDogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hZGRRdWVyeU9iamVjdChrZXksIHtcbiAgICAgICAgICBpc251bGw6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICog5a2X5q615a2Y5Zyo5Yik5pat44CCXG4gICAgICog5Yik5pat6YC76L6R77yaUmVjb3JkW2tleV0g5LiN5pivIHVuZGVmaW5lZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIOeUqOS6juafpeivouWIpOaWreeahOWtl+autVxuICAgICAqIEByZXR1cm5zIHt0aGlzfSBRdWVyeSDlrp7kvotcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4aXN0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleGlzdHMoa2V5KSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKGtleSAmJiBrZXkgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBrZXkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICAgIF90aGlzMy5fYWRkUXVlcnlPYmplY3Qoaywge1xuICAgICAgICAgICAgZXhpc3RzOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYWRkUXVlcnlPYmplY3Qoa2V5LCB7XG4gICAgICAgICAgZXhpc3RzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICog5a2X5q615LiN5a2Y5Zyo5Yik5pat44CCXG4gICAgICog5Yik5pat6YC76L6R77yaUmVjb3JkW2tleV0g5pivIHVuZGVmaW5lZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIOeUqOS6juafpeivouWIpOaWreeahOWtl+autVxuICAgICAqIEByZXR1cm5zIHt0aGlzfSBRdWVyeSDlrp7kvotcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5vdEV4aXN0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBub3RFeGlzdHMoa2V5KSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgaWYgKGtleSAmJiBrZXkgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBrZXkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICAgIF90aGlzNC5fYWRkUXVlcnlPYmplY3Qoaywge1xuICAgICAgICAgICAgZXhpc3RzOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2FkZFF1ZXJ5T2JqZWN0KGtleSwge1xuICAgICAgICAgIGV4aXN0czogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlpJrovrnlvaLljIXlkKvliKTmlq3vvIzlnKjmjIflrprlpJrovrnlvaLpm4blkIjkuK3mib7lh7rljIXlkKvmn5DkuIDngrnnmoTlpJrovrnlvaLvvIhnZW9qc29uIOexu+Wei++8ieOAglxuICAgICAqIOWIpOaWremAu+i+ke+8mlJlY29yZFtrZXldIOWMheWQqyBwb2ludFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIOeUqOS6juafpeivouWIpOaWreeahOWtl+autVxuICAgICAqIEBwYXJhbSB7R2VvUG9pbnR9IHBvaW50IC0g54K5XG4gICAgICogQHJldHVybnMge3RoaXN9IFF1ZXJ5IOWunuS+i1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW5jbHVkZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbmNsdWRlKGtleSwgcG9pbnQpIHtcbiAgICAgIGlmIChwb2ludCAmJiBwb2ludCBpbnN0YW5jZW9mIEdlb1BvaW50KSB7XG4gICAgICAgIHRoaXMuX2FkZFF1ZXJ5T2JqZWN0KGtleSwge1xuICAgICAgICAgIGludGVyc2VjdHM6IHBvaW50LnRvR2VvSlNPTigpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEhFcnJvcig2MDUpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDlpJrovrnlvaLljIXlkKvliKTmlq3vvIzlnKjmjIflrprngrnpm4blkIjkuK3vvIzmn6Xmib7ljIXlkKvkuo7mjIflrprnmoTlpJrovrnlvaLljLrln5/nmoTngrnvvIhnZW9qc29uIOexu+Wei++8ieOAglxuICAgICAqIOWIpOaWremAu+i+ke+8mnBvbHlnb24g5YyF5ZCrIFJlY29yZFtrZXldXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0g55So5LqO5p+l6K+i5Yik5pat55qE5a2X5q61XG4gICAgICogQHBhcmFtIHtHZW9Qb2x5Z29ufSBwb2x5Z29uIC0g5aSa6L655b2iXG4gICAgICogQHJldHVybnMge3RoaXN9IFF1ZXJ5IOWunuS+i1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid2l0aGluXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdpdGhpbihrZXksIHBvbHlnb24pIHtcbiAgICAgIGlmIChwb2x5Z29uICYmIHBvbHlnb24gaW5zdGFuY2VvZiBHZW9Qb2x5Z29uKSB7XG4gICAgICAgIHRoaXMuX2FkZFF1ZXJ5T2JqZWN0KGtleSwge1xuICAgICAgICAgIHdpdGhpbjogcG9seWdvbi50b0dlb0pTT04oKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBIRXJyb3IoNjA1KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5ZyG5YyF5ZCr5Yik5pat77yM5Zyo5oyH5a6a54K56ZuG5ZCI5Lit77yM5p+l5om+5YyF5ZCr5Zyo5oyH5a6a5ZyG5b+D5ZKM5oyH5a6a5Y2K5b6E5omA5p6E5oiQ55qE5ZyG5b2i5Yy65Z+f5Lit55qE54K577yIZ2VvanNvbiDnsbvlnovvvInjgIJcbiAgICAgKiDliKTmlq3pgLvovpHvvJrku6UgcG9pbnQg5Li65ZyG5b+D44CB5LulIHJlZGl1cyDkuLrljYrlvoTnmoTlnIbljIXlkKsgUmVjb3JkW2tleV1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSDnlKjkuo7mn6Xor6LliKTmlq3nmoTlrZfmrrVcbiAgICAgKiBAcGFyYW0ge0dlb1BvaW50fSBwb2ludCAtIOWchuW/g1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgLSDljYrlvoRcbiAgICAgKiBAcmV0dXJucyB7dGhpc30gUXVlcnkg5a6e5L6LXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ3aXRoaW5DaXJjbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2l0aGluQ2lyY2xlKGtleSwgcG9pbnQsIHJhZGl1cykge1xuICAgICAgaWYgKHBvaW50ICYmIHBvaW50IGluc3RhbmNlb2YgR2VvUG9pbnQpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgcmFkaXVzOiByYWRpdXMsXG4gICAgICAgICAgY29vcmRpbmF0ZXM6IFtwb2ludC5sb25naXR1ZGUsIHBvaW50LmxhdGl0dWRlXVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2FkZFF1ZXJ5T2JqZWN0KGtleSwge1xuICAgICAgICAgIGNlbnRlcjogZGF0YVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBIRXJyb3IoNjA1KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5ZyG546v5YyF5ZCr5Yik5pat77yM5Zyo5oyH5a6a54K56ZuG5ZCI5Lit77yM5p+l5om+5YyF5ZCr5Zyo5Lul5p+Q54K55Li66LW354K555qE5pyA5aSn5ZKM5pyA5bCP6Led56a75omA5p6E5oiQ55qE5ZyG546v5Yy65Z+f5Lit55qE54K577yIZ2VvanNvbiDnsbvlnovvvInjgIJcbiAgICAgKiDliKTmlq3pgLvovpHvvJrku6UgcG9pbnQg5Li65ZyG5b+D44CB5LulIG1pbkRpc3RhbmNlIOacgOWwj+WNiuW+hOOAgeS7pSBtYXhEaXN0YW5jZSDkuLrmnIDlpKfljYrlvoTnmoTlnIbnjq/ljIXlkKsgUmVjb3JkW2tleV1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSDnlKjkuo7mn6Xor6LliKTmlq3nmoTlrZfmrrVcbiAgICAgKiBAcGFyYW0ge0dlb1BvaW50fSBwb2ludCAtIOWchuW/g1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhEaXN0YW5jZSAtIOacgOWkp+WNiuW+hFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWluRGlzdGFuY2VdIC0g5pyA5bCP5Y2K5b6EXG4gICAgICogQHJldHVybnMge3RoaXN9IFF1ZXJ5IOWunuS+i1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid2l0aGluUmVnaW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdpdGhpblJlZ2lvbihrZXksIHBvaW50LCBtYXhEaXN0YW5jZSkge1xuICAgICAgdmFyIG1pbkRpc3RhbmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuXG4gICAgICBpZiAocG9pbnQgJiYgcG9pbnQgaW5zdGFuY2VvZiBHZW9Qb2ludCkge1xuICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICBnZW9tZXRyeTogcG9pbnQudG9HZW9KU09OKCksXG4gICAgICAgICAgbWluX2Rpc3RhbmNlOiBtaW5EaXN0YW5jZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtYXhEaXN0YW5jZSkge1xuICAgICAgICAgIGRhdGEubWF4X2Rpc3RhbmNlID0gbWF4RGlzdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hZGRRdWVyeU9iamVjdChrZXksIHtcbiAgICAgICAgICBuZWFyc3BoZXJlOiBkYXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEhFcnJvcig2MDUpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBPYmplY3Qg57G75Z6L5a2X5q6155qE5bGe5oCn5a2Y5Zyo5Yik5pat44CCXG4gICAgICog5Yik5pat6YC76L6R77yaUmVjb3JkW2tleV0g5Li6IE9iamVjdCDnsbvlnovvvIzkuJQgUmVjb3JkW2tleV1bZmllbGROYW1lXSDkuI3kuLogdW5kZWZpbmVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0g55So5LqO5p+l6K+i5Yik5pat55qE5a2X5q61XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZSAtIOWtl+auteWQjeensFxuICAgICAqIEByZXR1cm5zIHt0aGlzfSBRdWVyeSDlrp7kvotcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImhhc0tleVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNLZXkoa2V5LCBmaWVsZE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZmllbGROYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBIRXJyb3IoNjA1KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYWRkUXVlcnlPYmplY3Qoa2V5LCB7XG4gICAgICAgIGhhc19rZXk6IGZpZWxkTmFtZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfc2V0UXVlcnlPYmplY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFF1ZXJ5T2JqZWN0KHF1ZXJ5T2JqZWN0KSB7XG4gICAgICB0aGlzLnF1ZXJ5T2JqZWN0ID0gcXVlcnlPYmplY3Q7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hZGRRdWVyeU9iamVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRkUXVlcnlPYmplY3Qoa2V5LCBvYmopIHtcbiAgICAgIGlmIChvYmouY29uc3RydWN0b3IgIT09IE9iamVjdCkge1xuICAgICAgICB0aHJvdyBuZXcgSEVycm9yKDYwNSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBxdWVyeSA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwga2V5LCB7fSk7XG5cbiAgICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICBxdWVyeVtrZXldW1wiJFwiLmNvbmNhdChrKV0gPSBvYmpba107XG4gICAgICB9KTtcblxuICAgICAgaWYgKCF0aGlzLnF1ZXJ5T2JqZWN0WyckYW5kJ10pIHtcbiAgICAgICAgdGhpcy5xdWVyeU9iamVjdFsnJGFuZCddID0gW107XG4gICAgICB9XG5cbiAgICAgIHRoaXMucXVlcnlPYmplY3RbJyRhbmQnXS5wdXNoKHF1ZXJ5KTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJhbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYW5kKCkge1xuICAgICAgdmFyIG5ld1F1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XG4gICAgICB2YXIgYW5kUXVlcnkgPSB7XG4gICAgICAgICRhbmQ6IFtdXG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcXVlcnlPYmplY3RzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBxdWVyeU9iamVjdHNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHF1ZXJ5T2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICBhbmRRdWVyeVsnJGFuZCddLnB1c2gocXVlcnkucXVlcnlPYmplY3QpO1xuICAgICAgfSk7XG5cbiAgICAgIG5ld1F1ZXJ5Ll9zZXRRdWVyeU9iamVjdChhbmRRdWVyeSk7XG5cbiAgICAgIHJldHVybiBuZXdRdWVyeTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogb3Ig5pON5L2c56ym44CC5bCG5aSa5LiqIFF1ZXJ5IOWvueixoeS9v+eUqCBvciDmk43kvZznrKbov5vooYzlkIjlubZcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0gey4uLlF1ZXJ5W119IHF1ZXJ5cyBRdWVyeSDlr7nosaFcbiAgICAgKiBAcmV0dXJucyB7UXVlcnl9IC0g5paw55qEIFF1ZXJ5IOWvueixoVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3IoKSB7XG4gICAgICB2YXIgbmV3UXVlcnkgPSBuZXcgUXVlcnkoKTtcbiAgICAgIHZhciBvclF1ZXJ5ID0ge1xuICAgICAgICAkb3I6IFtdXG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHF1ZXJ5T2JqZWN0cyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBxdWVyeU9iamVjdHNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcXVlcnlPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIG9yUXVlcnlbJyRvciddLnB1c2gocXVlcnkucXVlcnlPYmplY3QpO1xuICAgICAgfSk7XG5cbiAgICAgIG5ld1F1ZXJ5Ll9zZXRRdWVyeU9iamVjdChvclF1ZXJ5KTtcblxuICAgICAgcmV0dXJuIG5ld1F1ZXJ5O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBRdWVyeTtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7IF9nZXQgPSBSZWZsZWN0LmdldDsgfSBlbHNlIHsgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTsgaWYgKCFiYXNlKSByZXR1cm47IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7IGlmIChkZXNjLmdldCkgeyByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7IH0gcmV0dXJuIGRlc2MudmFsdWU7IH07IH0gcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTsgfVxuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7IHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7IG9iamVjdCA9IF9nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhazsgfSByZXR1cm4gb2JqZWN0OyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIEJhYVMgPSByZXF1aXJlKCcuL2JhYXMnKTtcblxudmFyIEJhc2VRdWVyeSA9IHJlcXVpcmUoJy4vQmFzZVF1ZXJ5Jyk7XG5cbnZhciBIRXJyb3IgPSByZXF1aXJlKCcuL0hFcnJvcicpO1xuXG52YXIgUXVlcnkgPSByZXF1aXJlKCcuL1F1ZXJ5Jyk7XG5cbnZhciBUYWJsZVJlY29yZCA9IHJlcXVpcmUoJy4vVGFibGVSZWNvcmQnKTtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgQmFzZVJlY29yZCA9IHJlcXVpcmUoJy4vQmFzZVJlY29yZCcpO1xuXG52YXIgd2FtcCA9IHJlcXVpcmUoJy4vd2FtcCcpO1xuLyoqXG4gKiDmlbDmja7ooahcbiAqIEBtZW1iZXJvZiBCYWFTXG4gKiBAZXh0ZW5kcyBCYWFTLkJhc2VRdWVyeVxuICogQHB1YmxpY1xuICovXG5cblxudmFyIFRhYmxlT2JqZWN0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfQmFzZVF1ZXJ5KSB7XG4gIF9pbmhlcml0cyhUYWJsZU9iamVjdCwgX0Jhc2VRdWVyeSk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWJsZU5hbWUg5pWw5o2u6KGo5ZCN56ewXG4gICAqL1xuICBmdW5jdGlvbiBUYWJsZU9iamVjdCh0YWJsZUlEKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRhYmxlT2JqZWN0KTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFRhYmxlT2JqZWN0KS5jYWxsKHRoaXMpKTtcbiAgICBfdGhpcy5fdGFibGVJRCA9IHRhYmxlSUQ7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKlxuICAgKiDliJvlu7rkuIDmnaHmlbDmja7orrDlvZVcbiAgICogQHJldHVybiB7VGFibGVSZWNvcmR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFRhYmxlT2JqZWN0LCBbe1xuICAgIGtleTogXCJjcmVhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgcmV0dXJuIG5ldyBUYWJsZVJlY29yZCh0aGlzLl90YWJsZUlEKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5om56YeP5Yib5bu65pWw5o2u6K6w5b2VXG4gICAgICogQHBhcmFtIHtvYmplY3RbXX0gYXJncyDmlbDmja7orrDlvZXliJfooahcbiAgICAgKiBAcGFyYW0ge0JhYVMuQ3JlYXRlTWFueVBhcmFtc30gW29wdGlvbnNdIOaJuemHj+WIm+W7uuWPguaVsFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QmFhUy5SZXNwb25zZTxhbnk+Pn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZU1hbnlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlTWFueShhcmdzKSB7XG4gICAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge30sXG4gICAgICAgICAgX3JlZiRlbmFibGVUcmlnZ2VyID0gX3JlZi5lbmFibGVUcmlnZ2VyLFxuICAgICAgICAgIGVuYWJsZVRyaWdnZXIgPSBfcmVmJGVuYWJsZVRyaWdnZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGVuYWJsZVRyaWdnZXI7XG5cbiAgICAgIHZhciBzZXJpYWxpemVWYWx1ZSA9IEJhc2VSZWNvcmQuX3NlcmlhbGl6ZVZhbHVlRnVuY0ZhY3RvcnkoWydCYXNlUmVjb3JkJ10pO1xuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheShhcmdzKSkge1xuICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgIHRhYmxlSUQ6IHRoaXMuX3RhYmxlSUQsXG4gICAgICAgICAgZGF0YTogYXJncy5tYXAoZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocmVjb3JkKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgcmVjb3JkW2tleV0gPSBzZXJpYWxpemVWYWx1ZShyZWNvcmRba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZW5hYmxlX3RyaWdnZXI6IGVuYWJsZVRyaWdnZXIgPyAxIDogMFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gQmFhUy5jcmVhdGVSZWNvcmRMaXN0KHBhcmFtcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgSEVycm9yKDYwNSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWIoOmZpOaVsOaNruiusOW9lVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWNvcmRJRCDmlbDmja7orrDlvZUgSURcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAgICovXG5cbiAgICAvKipcbiAgICAqIOaJuemHj+WIoOmZpOaVsOaNruiusOW9lVxuICAgICogQHBhcmFtIHtRdWVyeX0gcXVlcnkg5pWw5o2u6K6w5b2V5p+l6K+i5p2h5Lu2XG4gICAgKiBAcGFyYW0ge0JhYVMuQmF0Y2hVcGRhdGVQYXJhbXN9IFtvcHRpb25zXSDmibnph4/mk43kvZzlj4LmlbBcbiAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVsZXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9kZWxldGUoYXJncykge1xuICAgICAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fSxcbiAgICAgICAgICBfcmVmMiRlbmFibGVUcmlnZ2VyID0gX3JlZjIuZW5hYmxlVHJpZ2dlcixcbiAgICAgICAgICBlbmFibGVUcmlnZ2VyID0gX3JlZjIkZW5hYmxlVHJpZ2dlciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYyJGVuYWJsZVRyaWdnZXIsXG4gICAgICAgICAgX3JlZjIkd2l0aENvdW50ID0gX3JlZjIud2l0aENvdW50LFxuICAgICAgICAgIHdpdGhDb3VudCA9IF9yZWYyJHdpdGhDb3VudCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiR3aXRoQ291bnQ7XG5cbiAgICAgIGlmICh1dGlscy5pc1N0cmluZyhhcmdzKSB8fCBOdW1iZXIuaXNJbnRlZ2VyKGFyZ3MpKSB7XG4gICAgICAgIHJldHVybiBCYWFTLmRlbGV0ZVJlY29yZCh7XG4gICAgICAgICAgdGFibGVJRDogdGhpcy5fdGFibGVJRCxcbiAgICAgICAgICByZWNvcmRJRDogYXJnc1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoYXJncyBpbnN0YW5jZW9mIFF1ZXJ5KSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgdGFibGVJRDogdGhpcy5fdGFibGVJRCxcbiAgICAgICAgICBsaW1pdDogdXRpbHMuZ2V0TGltaXRhdGlvbldpdGhFbmFibGVUaWdnZXIodGhpcy5fbGltaXQsIGVuYWJsZVRyaWdnZXIpLFxuICAgICAgICAgIG9mZnNldDogdGhpcy5fb2Zmc2V0LFxuICAgICAgICAgIHdoZXJlOiBKU09OLnN0cmluZ2lmeShhcmdzLnF1ZXJ5T2JqZWN0KSxcbiAgICAgICAgICBlbmFibGVfdHJpZ2dlcjogZW5hYmxlVHJpZ2dlciA/IDEgOiAwLFxuICAgICAgICAgIHJldHVybl90b3RhbF9jb3VudDogd2l0aENvdW50ID8gMSA6IDBcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9pbml0UXVlcnlQYXJhbXMoKTtcblxuICAgICAgICByZXR1cm4gQmFhUy5kZWxldGVSZWNvcmRMaXN0KHBhcmFtcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgSEVycm9yKDYwNSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluS4gOS4quaVsOaNruiusOW9le+8jOeUqOS6juabtOaWsOetieaTjeS9nO+8iOS7heW8leeUqO+8jOmdnuaVsOaNru+8iVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWNvcmRJRCDmlbDmja7orrDlvZUgSURcbiAgICAgKiBAcmV0dXJuIHtUYWJsZVJlY29yZH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICog6I635Y+W5aSa5Liq5pWw5o2u6K6w5b2V77yM55So5LqO5pu05paw562J5pON5L2c77yI5LuF5byV55So77yM6Z2e5pWw5o2u77yJXG4gICAgKiBAcGFyYW0ge1F1ZXJ5fSBxdWVyeSDmlbDmja7orrDlvZXmn6Xor6LmnaHku7ZcbiAgICAqIEByZXR1cm4ge1RhYmxlUmVjb3JkfVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRXaXRob3V0RGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRXaXRob3V0RGF0YShhcmdzKSB7XG4gICAgICBpZiAodXRpbHMuaXNTdHJpbmcoYXJncykgJiYgYXJncy50cmltKCkgIT09ICcnIHx8IE51bWJlci5pc0ludGVnZXIoYXJncykpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUYWJsZVJlY29yZCh0aGlzLl90YWJsZUlELCBhcmdzKTtcbiAgICAgIH0gZWxzZSBpZiAoYXJncyBpbnN0YW5jZW9mIFF1ZXJ5KSB7XG4gICAgICAgIHZhciBxdWVyeU9iamVjdCA9IHt9O1xuICAgICAgICBxdWVyeU9iamVjdC5saW1pdCA9IHRoaXMuX2xpbWl0O1xuICAgICAgICBxdWVyeU9iamVjdC5vZmZzZXQgPSB0aGlzLl9vZmZzZXQ7XG4gICAgICAgIHF1ZXJ5T2JqZWN0LndoZXJlID0gdXRpbHMuY2xvbmVEZWVwKGFyZ3MucXVlcnlPYmplY3QpO1xuXG4gICAgICAgIHRoaXMuX2luaXRRdWVyeVBhcmFtcygpO1xuXG4gICAgICAgIHJldHVybiBuZXcgVGFibGVSZWNvcmQodGhpcy5fdGFibGVJRCwgbnVsbCwgcXVlcnlPYmplY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEhFcnJvcig2MDUpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bljZXmnaHmlbDmja7orrDlvZXjgIJcbiAgICAgKiBAbWV0aG9kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlY29yZElEIOaVsOaNruiusOW9lSBJRFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QmFhUy5SZXNwb25zZTxhbnk+Pn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQocmVjb3JkSUQpIHtcbiAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgIHRhYmxlSUQ6IHRoaXMuX3RhYmxlSUQsXG4gICAgICAgIHJlY29yZElEOiByZWNvcmRJRFxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuX2V4cGFuZCkge1xuICAgICAgICBwYXJhbXMuZXhwYW5kID0gdGhpcy5fZXhwYW5kO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fa2V5cykge1xuICAgICAgICBwYXJhbXMua2V5cyA9IHRoaXMuX2tleXM7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2luaXRRdWVyeVBhcmFtcygpO1xuXG4gICAgICByZXR1cm4gQmFhUy5nZXRSZWNvcmQocGFyYW1zKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2hhbmRsZUFsbFF1ZXJ5Q29uZGl0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlQWxsUXVlcnlDb25kaXRpb25zKCkge1xuICAgICAgdmFyIGNvbmRpdGlvbiA9IF9nZXQoX2dldFByb3RvdHlwZU9mKFRhYmxlT2JqZWN0LnByb3RvdHlwZSksIFwiX2hhbmRsZUFsbFF1ZXJ5Q29uZGl0aW9uc1wiLCB0aGlzKS5jYWxsKHRoaXMpO1xuXG4gICAgICBjb25kaXRpb24udGFibGVJRCA9IHRoaXMuX3RhYmxlSUQ7XG4gICAgICByZXR1cm4gY29uZGl0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmlbDmja7orrDlvZXliJfooajjgIJcbiAgICAgKiBAbWV0aG9kXG4gICAgICogQHBhcmFtIHtCYWFTLkZpbmRPcHRpb25zfSBbb3B0aW9uc10g5Y+C5pWwXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxCYWFTLlJlc3BvbnNlPGFueT4+fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZmluZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kKCkge1xuICAgICAgdmFyIF9yZWYzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgICBfcmVmMyR3aXRoQ291bnQgPSBfcmVmMy53aXRoQ291bnQsXG4gICAgICAgICAgd2l0aENvdW50ID0gX3JlZjMkd2l0aENvdW50ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYzJHdpdGhDb3VudDtcblxuICAgICAgdmFyIGNvbmRpdGlvbiA9IHRoaXMuX2hhbmRsZUFsbFF1ZXJ5Q29uZGl0aW9ucygpO1xuXG4gICAgICB0aGlzLl9pbml0UXVlcnlQYXJhbXMoKTtcblxuICAgICAgcmV0dXJuIEJhYVMucXVlcnlSZWNvcmRMaXN0KF9leHRlbmRzKHt9LCBjb25kaXRpb24sIHtcbiAgICAgICAgcmV0dXJuX3RvdGFsX2NvdW50OiB3aXRoQ291bnQgPyAxIDogMFxuICAgICAgfSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmlbDmja7orrDlvZXmlbDph4/jgIJcbiAgICAgKiBAbWV0aG9kXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxudW1iZXI+fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY291bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5saW1pdCgxKS5maW5kKHtcbiAgICAgICAgd2l0aENvdW50OiB0cnVlXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdmFyIHRvdGFsX2NvdW50ID0gcmVzLmRhdGEubWV0YS50b3RhbF9jb3VudDtcbiAgICAgICAgcmV0dXJuIHRvdGFsX2NvdW50O1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuoumYheaVsOaNruWPmOWMluS6i+S7tlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZShldmVudF90eXBlLCBfcmVmNCkge1xuICAgICAgdmFyIG9uZXJyb3IgPSBfcmVmNC5vbmVycm9yLFxuICAgICAgICAgIG9uaW5pdCA9IF9yZWY0Lm9uaW5pdCxcbiAgICAgICAgICBvbmV2ZW50ID0gX3JlZjQub25ldmVudDtcbiAgICAgIHJldHVybiB3YW1wLnN1YnNjcmliZSh7XG4gICAgICAgIHNjaGVtYV9uYW1lOiB0aGlzLl90YWJsZUlELFxuICAgICAgICB3aGVyZTogdGhpcy5fcXVlcnlPYmplY3QsXG4gICAgICAgIGV2ZW50X3R5cGU6IGV2ZW50X3R5cGUsXG4gICAgICAgIG9uZXJyb3I6IG9uZXJyb3IsXG4gICAgICAgIG9uaW5pdDogb25pbml0LFxuICAgICAgICBvbmV2ZW50OiBvbmV2ZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVGFibGVPYmplY3Q7XG59KEJhc2VRdWVyeSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGFibGVPYmplY3Q7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBCYWFTID0gcmVxdWlyZSgnLi9iYWFzJyk7XG5cbnZhciBCYXNlUmVjb3JkID0gcmVxdWlyZSgnLi9CYXNlUmVjb3JkJyk7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbi8qKlxuICog5pWw5o2u6K6w5b2V44CCXG4gKiBAbWVtYmVyb2YgQmFhU1xuICogQGV4dGVuZHMgQmFhUy5CYXNlUmVjb3JkXG4gKiBAcGFja2FnZVxuICovXG5cblxudmFyIFRhYmxlUmVjb3JkID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfQmFzZVJlY29yZCkge1xuICBfaW5oZXJpdHMoVGFibGVSZWNvcmQsIF9CYXNlUmVjb3JkKTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhYmxlTmFtZSDmlbDmja7ooajlkI1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlY29yZElEIOaVsOaNruiusOW9lSBJRFxuICAgKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5T2JqZWN0XSDmn6Xor6Llr7nosaFcbiAgICovXG4gIGZ1bmN0aW9uIFRhYmxlUmVjb3JkKHRhYmxlSUQsIHJlY29yZElEKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgdmFyIHF1ZXJ5T2JqZWN0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUYWJsZVJlY29yZCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihUYWJsZVJlY29yZCkuY2FsbCh0aGlzLCByZWNvcmRJRCkpO1xuICAgIF90aGlzLl90YWJsZUlEID0gdGFibGVJRDtcbiAgICBfdGhpcy5fcXVlcnlPYmplY3QgPSBxdWVyeU9iamVjdDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXG4gICAqIOS/neWtmOaVsOaNruiusOW9leOAglxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEJhYVMuUmVzcG9uc2U8YW55Pj59XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFRhYmxlUmVjb3JkLCBbe1xuICAgIGtleTogXCJzYXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNhdmUoKSB7XG4gICAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgICAgX3JlZiRleHBhbmQgPSBfcmVmLmV4cGFuZCxcbiAgICAgICAgICBleHBhbmQgPSBfcmVmJGV4cGFuZCA9PT0gdm9pZCAwID8gJycgOiBfcmVmJGV4cGFuZDtcblxuICAgICAgdmFyIHJlY29yZCA9IHV0aWxzLmNsb25lRGVlcCh0aGlzLl9yZWNvcmQpO1xuXG4gICAgICB0aGlzLl9yZWNvcmRWYWx1ZUluaXQoKTtcblxuICAgICAgcmV0dXJuIEJhYVMuY3JlYXRlUmVjb3JkKHtcbiAgICAgICAgdGFibGVJRDogdGhpcy5fdGFibGVJRCxcbiAgICAgICAgZGF0YTogcmVjb3JkLiRzZXQsXG4gICAgICAgIGV4cGFuZDogQXJyYXkuaXNBcnJheShleHBhbmQpID8gZXhwYW5kLmpvaW4oJywnKSA6IGV4cGFuZFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOabtOaWsOaVsOaNruiusOW9leOAglxuICAgICAqIOaJuemHj+abtOaWsOaXtu+8jOWmguaenOS4jemcgOimgeinpuWPkeinpuWPkeWZqO+8jOWPr+S7peiuvue9riBvcHRpb25zLmVuYWJsZVRyaWdnZXIg5Li6IGZhbHNlXG4gICAgICogQHBhcmFtIHtCYWFTLkJhdGNoVXBkYXRlUGFyYW1zfSBbb3B0aW9uc10g5om56YeP5pu05paw5Y+C5pWwXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxCYWFTLlJlc3BvbnNlPGFueT4+fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHZhciBfcmVmMiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgICAgX3JlZjIkZW5hYmxlVHJpZ2dlciA9IF9yZWYyLmVuYWJsZVRyaWdnZXIsXG4gICAgICAgICAgZW5hYmxlVHJpZ2dlciA9IF9yZWYyJGVuYWJsZVRyaWdnZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmMiRlbmFibGVUcmlnZ2VyLFxuICAgICAgICAgIF9yZWYyJHdpdGhDb3VudCA9IF9yZWYyLndpdGhDb3VudCxcbiAgICAgICAgICB3aXRoQ291bnQgPSBfcmVmMiR3aXRoQ291bnQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkd2l0aENvdW50LFxuICAgICAgICAgIF9yZWYyJGV4cGFuZCA9IF9yZWYyLmV4cGFuZCxcbiAgICAgICAgICBleHBhbmQgPSBfcmVmMiRleHBhbmQgPT09IHZvaWQgMCA/ICcnIDogX3JlZjIkZXhwYW5kO1xuXG4gICAgICB2YXIgcmVjb3JkID0gdXRpbHMuY2xvbmVEZWVwKHRoaXMuX3JlY29yZCk7XG5cbiAgICAgIHRoaXMuX3JlY29yZFZhbHVlSW5pdCgpO1xuXG4gICAgICBpZiAodGhpcy5fcmVjb3JkSUQgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gQmFhUy51cGRhdGVSZWNvcmQoe1xuICAgICAgICAgIHRhYmxlSUQ6IHRoaXMuX3RhYmxlSUQsXG4gICAgICAgICAgcmVjb3JkSUQ6IHRoaXMuX3JlY29yZElELFxuICAgICAgICAgIGRhdGE6IHJlY29yZCxcbiAgICAgICAgICBlbmFibGVfdHJpZ2dlcjogZW5hYmxlVHJpZ2dlciA/IDEgOiAwLFxuICAgICAgICAgIGV4cGFuZDogQXJyYXkuaXNBcnJheShleHBhbmQpID8gZXhwYW5kLmpvaW4oJywnKSA6IGV4cGFuZFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgdGFibGVJRDogdGhpcy5fdGFibGVJRCxcbiAgICAgICAgICBkYXRhOiByZWNvcmQsXG4gICAgICAgICAgd2hlcmU6IEpTT04uc3RyaW5naWZ5KHRoaXMuX3F1ZXJ5T2JqZWN0LndoZXJlKSxcbiAgICAgICAgICBsaW1pdDogdXRpbHMuZ2V0TGltaXRhdGlvbldpdGhFbmFibGVUaWdnZXIodGhpcy5fcXVlcnlPYmplY3QubGltaXQsIGVuYWJsZVRyaWdnZXIpLFxuICAgICAgICAgIG9mZnNldDogdGhpcy5fcXVlcnlPYmplY3Qub2Zmc2V0LFxuICAgICAgICAgIGVuYWJsZV90cmlnZ2VyOiBlbmFibGVUcmlnZ2VyID8gMSA6IDAsXG4gICAgICAgICAgcmV0dXJuX3RvdGFsX2NvdW50OiB3aXRoQ291bnQgPyAxIDogMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9xdWVyeU9iamVjdCA9IHt9O1xuICAgICAgICByZXR1cm4gQmFhUy51cGRhdGVSZWNvcmRMaXN0KHBhcmFtcyk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRhYmxlUmVjb3JkO1xufShCYXNlUmVjb3JkKTtcblxubW9kdWxlLmV4cG9ydHMgPSBUYWJsZVJlY29yZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIEJhYVMgPSByZXF1aXJlKCcuL2JhYXMnKTtcblxudmFyIEJhc2VRdWVyeSA9IHJlcXVpcmUoJy4vQmFzZVF1ZXJ5Jyk7XG5cbnZhciBVc2VyUmVjb3JkID0gcmVxdWlyZSgnLi9Vc2VyUmVjb3JkJyk7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIEhFcnJvciA9IHJlcXVpcmUoJy4vSEVycm9yJyk7XG4vKipcbiAqIOeUqOaIt1xuICogQG1lbWJlcm9mIEJhYVNcbiAqIEBleHRlbmRzIEJhYVMuQmFzZVF1ZXJ5XG4gKiBAcHVibGljXG4gKi9cblxuXG52YXIgVXNlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Jhc2VRdWVyeSkge1xuICBfaW5oZXJpdHMoVXNlciwgX0Jhc2VRdWVyeSk7XG5cbiAgZnVuY3Rpb24gVXNlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXNlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFVzZXIpLmNhbGwodGhpcykpO1xuICB9XG4gIC8qKlxuICAgKiDojrflj5bnlKjmiLfor6bmg4XjgIJcbiAgICogQG1ldGhvZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklEIOeUqOaItyBJRFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPGFueT4+fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhVc2VyLCBbe1xuICAgIGtleTogXCJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KHVzZXJJRCkge1xuICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgdXNlcklEOiB1c2VySURcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLl9leHBhbmQpIHtcbiAgICAgICAgcGFyYW1zLmV4cGFuZCA9IHRoaXMuX2V4cGFuZDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2tleXMpIHtcbiAgICAgICAgcGFyYW1zLmtleXMgPSB0aGlzLl9rZXlzO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pbml0UXVlcnlQYXJhbXMoKTtcblxuICAgICAgcmV0dXJuIEJhYVMuZ2V0VXNlckRldGFpbChwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bkuIDkuKrnlKjmiLforrDlvZXvvIjku4XlvJXnlKjvvIzpnZ7mlbDmja7vvInjgIJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklEIOeUqOaItyBJRFxuICAgICAqIEByZXR1cm4ge0JhYVMuVXNlclJlY29yZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFdpdGhvdXREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFdpdGhvdXREYXRhKHVzZXJJRCkge1xuICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHVzZXJJRCkgfHwgTnVtYmVyLmlzSW50ZWdlcih1c2VySUQpKSB7XG4gICAgICAgIHJldHVybiBuZXcgVXNlclJlY29yZCh1c2VySUQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEhFcnJvcig2MDUpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5blvZPliY3nlKjmiLforrDlvZXvvIjku4XlvJXnlKjvvIzpnZ7mlbDmja7vvInjgIJcbiAgICAgKiBAcmV0dXJucyB7QmFhUy5Vc2VyUmVjb3JkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Q3VycmVudFVzZXJXaXRob3V0RGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcldpdGhvdXREYXRhKCkge1xuICAgICAgcmV0dXJuIG5ldyBVc2VyUmVjb3JkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPlueUqOaIt+WIl+ihqOOAglxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAcGFyYW0ge0JhYVMuRmluZE9wdGlvbnN9IFtvcHRpb25zXSDlj4LmlbBcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPGFueT4+fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZmluZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kKCkge1xuICAgICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICAgIF9yZWYkd2l0aENvdW50ID0gX3JlZi53aXRoQ291bnQsXG4gICAgICAgICAgd2l0aENvdW50ID0gX3JlZiR3aXRoQ291bnQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiR3aXRoQ291bnQ7XG5cbiAgICAgIHZhciBjb25kaXRpb24gPSB0aGlzLl9oYW5kbGVBbGxRdWVyeUNvbmRpdGlvbnMoKTtcblxuICAgICAgdGhpcy5faW5pdFF1ZXJ5UGFyYW1zKCk7XG5cbiAgICAgIHJldHVybiBCYWFTLmdldFVzZXJMaXN0KF9leHRlbmRzKHt9LCBjb25kaXRpb24sIHtcbiAgICAgICAgcmV0dXJuX3RvdGFsX2NvdW50OiB3aXRoQ291bnQgPyAxIDogMFxuICAgICAgfSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bnlKjmiLfmlbDph4/jgIJcbiAgICAgKiBAbWV0aG9kXG4gICAgICogQHNpbmNlIHYzLjAuMFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8bnVtYmVyPn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvdW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMubGltaXQoMSkuZmluZCh7XG4gICAgICAgIHdpdGhDb3VudDogdHJ1ZVxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHZhciB0b3RhbF9jb3VudCA9IHJlcy5kYXRhLm1ldGEudG90YWxfY291bnQ7XG4gICAgICAgIHJldHVybiB0b3RhbF9jb3VudDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBVc2VyO1xufShCYXNlUXVlcnkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXI7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBCYWFTID0gcmVxdWlyZSgnLi9iYWFzJyk7XG5cbnZhciBCYXNlUmVjb3JkID0gcmVxdWlyZSgnLi9CYXNlUmVjb3JkJyk7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbi8qKlxuICog5b2T5YmN55So5oi3XG4gKiBAbWVtYmVyb2YgQmFhU1xuICogQGV4dGVuZHMgQmFhUy5CYXNlUmVjb3JkXG4gKiBAcGFja2FnZVxuICovXG5cblxudmFyIFVzZXJSZWNvcmQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9CYXNlUmVjb3JkKSB7XG4gIF9pbmhlcml0cyhVc2VyUmVjb3JkLCBfQmFzZVJlY29yZCk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySUQg55So5oi3IElEXG4gICAqL1xuICBmdW5jdGlvbiBVc2VyUmVjb3JkKHVzZXJJRCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVc2VyUmVjb3JkKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoVXNlclJlY29yZCkuY2FsbCh0aGlzLCB1c2VySUQpKTtcbiAgfVxuICAvKipcbiAgICog5pu05paw55So5oi35pWw5o2u44CCXG4gICAqIEBtZXRob2RcbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZTxhbnk+Pn1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoVXNlclJlY29yZCwgW3tcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHZhciByZWNvcmQgPSB1dGlscy5jbG9uZURlZXAodGhpcy5fcmVjb3JkKTtcblxuICAgICAgdGhpcy5fcmVjb3JkVmFsdWVJbml0KCk7XG5cbiAgICAgIHJldHVybiBCYWFTLnVwZGF0ZVVzZXIoe1xuICAgICAgICBkYXRhOiByZWNvcmQuJHNldFxuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFVzZXJSZWNvcmQ7XG59KEJhc2VSZWNvcmQpO1xuLyoqXG4gKiDliJvlu7rkuIDkuKogY3VycmVudFVzZXIg5a+56LGhXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHVzZXJJbmZvXG4gKi9cblxuXG5Vc2VyUmVjb3JkLmluaXRDdXJyZW50VXNlciA9IGZ1bmN0aW9uICh1c2VySW5mbykge1xuICB2YXIgQ3VycmVudFVzZXIgPSByZXF1aXJlKCcuL0N1cnJlbnRVc2VyJyk7XG5cbiAgcmV0dXJuIG5ldyBDdXJyZW50VXNlcih1c2VySW5mbyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJSZWNvcmQ7IiwiZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbnZhciBCYWFTID0gcmVxdWlyZSgnLi9iYWFzJyk7XG5cbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG52YXIgSEVycm9yID0gcmVxdWlyZSgnLi9IRXJyb3InKTtcblxudmFyIHN0b3JhZ2VBc3luYyA9IHJlcXVpcmUoJy4vc3RvcmFnZUFzeW5jJyk7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIFVzZXJSZWNvcmQgPSByZXF1aXJlKCcuL1VzZXJSZWNvcmQnKTtcblxudmFyIFVzZXIgPSByZXF1aXJlKCcuL1VzZXInKTtcbi8qKlxuICog55So5oi36K6k6K+BXG4gKiBAbmFtZXNwYWNlIGF1dGhcbiAqIEBtZW1iZXJvZiBCYWFTXG4gKi9cblxuXG52YXIgQVBJID0gQmFhUy5fY29uZmlnLkFQSTtcblxuZnVuY3Rpb24gZ2V0QXV0aFVybChkYXRhLCBpc0xvZ2luRnVuYykge1xuICBpZiAoZGF0YS5waG9uZSkge1xuICAgIHJldHVybiBpc0xvZ2luRnVuYyA/IEFQSS5MT0dJTl9QSE9ORSA6IEFQSS5SRUdJU1RFUl9QSE9ORTtcbiAgfVxuXG4gIGlmIChkYXRhLmVtYWlsKSB7XG4gICAgcmV0dXJuIGlzTG9naW5GdW5jID8gQVBJLkxPR0lOX0VNQUlMIDogQVBJLlJFR0lTVEVSX0VNQUlMO1xuICB9XG5cbiAgcmV0dXJuIGlzTG9naW5GdW5jID8gQVBJLkxPR0lOX1VTRVJOQU1FIDogQVBJLlJFR0lTVEVSX1VTRVJOQU1FO1xufVxuXG5mdW5jdGlvbiBnZXRBdXRoUmVxdWVzdERhdGEoZGF0YSkge1xuICBpZiAoZGF0YS5waG9uZSkge1xuICAgIHJldHVybiB7XG4gICAgICBwaG9uZTogZGF0YS5waG9uZSxcbiAgICAgIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkXG4gICAgfTtcbiAgfVxuXG4gIGlmIChkYXRhLmVtYWlsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmRcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSB8fCAnJyxcbiAgICBwYXNzd29yZDogZGF0YS5wYXNzd29yZFxuICB9O1xufVxuLyoqXG4gKiDnmbvlvZVcbiAqIEBzaW5jZSB2Mi4wLjBcbiAqIEBtZW1iZXJvZiBCYWFTLmF1dGhcbiAqIEBwYXJhbSB7KEJhYVMuQXV0aFdpdGhVc2VybmFtZU9wdGlvbnN8QmFhUy5BdXRoV2l0aEVtYWlsT3B0aW9uc3xCYWFTLkF1dGhXaXRoUGhvbmVPcHRpb25zKX0gb3B0aW9uc1xuICogQHJldHVybiB7UHJvbWlzZTxCYWFTLkN1cnJlbnRVc2VyPn1cbiAqL1xuXG5cbnZhciBsb2dpbiA9IGZ1bmN0aW9uIGxvZ2luKHBhcmFtcykge1xuICB2YXIgdXJsID0gZ2V0QXV0aFVybChwYXJhbXMsIHRydWUpO1xuICB2YXIgZGF0YSA9IGdldEF1dGhSZXF1ZXN0RGF0YShwYXJhbXMpO1xuICByZXR1cm4gQmFhUy5yZXF1ZXN0KHtcbiAgICB1cmw6IHVybCxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiBkYXRhXG4gIH0pLnRoZW4odXRpbHMudmFsaWRhdGVTdGF0dXNDb2RlKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICBCYWFTLl9wb2x5ZmlsbC5oYW5kbGVMb2dpblN1Y2Nlc3MocmVzKTtcblxuICAgIHJldHVybiBnZXRDdXJyZW50VXNlcigpO1xuICB9KTtcbn07XG4vKipcbiAqIOWMv+WQjeeZu+W9lVxuICogQHNpbmNlIHYyLjAuMFxuICogQG1lbWJlcm9mIEJhYVMuYXV0aFxuICogQHJldHVybiB7UHJvbWlzZTxCYWFTLkN1cnJlbnRVc2VyPn1cbiAqL1xuXG5cbnZhciBhbm9ueW1vdXNMb2dpbiA9IGZ1bmN0aW9uIGFub255bW91c0xvZ2luKCkge1xuICByZXR1cm4gQmFhUy5yZXF1ZXN0KHtcbiAgICB1cmw6IEFQSS5BTk9OWU1PVVNfTE9HSU4sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSkudGhlbih1dGlscy52YWxpZGF0ZVN0YXR1c0NvZGUpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgIEJhYVMuX3BvbHlmaWxsLmhhbmRsZUxvZ2luU3VjY2VzcyhyZXMsIHRydWUpO1xuXG4gICAgcmV0dXJuIGdldEN1cnJlbnRVc2VyKCk7XG4gIH0pO1xufTtcbi8qKlxuICog6Z2Z6buY55m75b2VXG4gKiBAc2luY2UgdjIuMC4wXG4gKiBAbWVtYmVyb2YgQmFhUy5hdXRoXG4gKiBAcmV0dXJuIHtQcm9taXNlPEJhYVMuQ3VycmVudFVzZXI+fVxuICovXG5cblxudmFyIHNpbGVudExvZ2luID0gZnVuY3Rpb24gc2lsZW50TG9naW4oKSB7XG4gIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgSEVycm9yKDYwNSwgJ3NpbGVudExvZ2luIOaWueazleacquWumuS5iScpKTtcbn07XG4vKipcbiAqIOazqOWGjFxuICogQHNpbmNlIHYyLjAuMFxuICogQG1lbWJlcm9mIEJhYVMuYXV0aFxuICogQHBhcmFtIHsoQmFhUy5BdXRoV2l0aFVzZXJuYW1lT3B0aW9uc3xCYWFTLkF1dGhXaXRoRW1haWxPcHRpb25zfEJhYVMuQXV0aFdpdGhQaG9uZU9wdGlvbnMpfSBvcHRpb25zXG4gKiBAcmV0dXJuIHtQcm9taXNlPEJhYVMuQ3VycmVudFVzZXI+fVxuICovXG5cblxudmFyIHJlZ2lzdGVyID0gZnVuY3Rpb24gcmVnaXN0ZXIocGFyYW1zKSB7XG4gIHZhciB1cmwgPSBnZXRBdXRoVXJsKHBhcmFtcyk7XG4gIHZhciBkYXRhID0gZ2V0QXV0aFJlcXVlc3REYXRhKHBhcmFtcyk7XG4gIHJldHVybiBCYWFTLnJlcXVlc3Qoe1xuICAgIHVybDogdXJsLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IGRhdGFcbiAgfSkudGhlbih1dGlscy52YWxpZGF0ZVN0YXR1c0NvZGUpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgIEJhYVMuX3BvbHlmaWxsLmhhbmRsZUxvZ2luU3VjY2VzcyhyZXMpO1xuXG4gICAgcmV0dXJuIGdldEN1cnJlbnRVc2VyKCk7XG4gIH0pO1xufTtcbi8qKlxuICog6YCA5Ye655m75b2V54q25oCBXG4gKiBAc2luY2UgdjIuMC4wXG4gKiBAbWVtYmVyb2YgQmFhUy5hdXRoXG4gKiBAcmV0dXJuIHtQcm9taXNlPEJhYVMuUmVzcG9uc2U8YW55Pj59XG4gKi9cblxuXG52YXIgbG9nb3V0ID0gZnVuY3Rpb24gbG9nb3V0KCkge1xuICByZXR1cm4gQmFhUy5yZXF1ZXN0KHtcbiAgICB1cmw6IEFQSS5MT0dPVVQsXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSkudGhlbih1dGlscy52YWxpZGF0ZVN0YXR1c0NvZGUpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgIHJldHVybiBCYWFTLmNsZWFyU2Vzc2lvbigpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfSk7XG59O1xuLyoqXG4gKiDlv5jorrDlr4bnoIHvvIzlj5HpgIHph43nva7lr4bnoIHpgq7ku7ZcbiAqIEBzaW5jZSB2Mi4wLjBcbiAqIEBtZW1iZXJvZiBCYWFTLmF1dGhcbiAqIEBwYXJhbSB7QmFhUy5QYXNzd29yZFJlc2V0UGFyYW19IHBhcmFtIOi0puWPt+S/oeaBr1xuICogQHJldHVybiB7UHJvbWlzZTxCYWFTLlJlc3BvbnNlPGFueT4+fVxuICovXG5cblxudmFyIHJlcXVlc3RQYXNzd29yZFJlc2V0ID0gZnVuY3Rpb24gcmVxdWVzdFBhc3N3b3JkUmVzZXQoKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgIGVtYWlsID0gX3JlZi5lbWFpbDtcblxuICByZXR1cm4gQmFhUy5yZXF1ZXN0KHtcbiAgICB1cmw6IEFQSS5QQVNTV09SRF9SRVNFVCxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICBlbWFpbDogZW1haWxcbiAgICB9XG4gIH0pLnRoZW4odXRpbHMudmFsaWRhdGVTdGF0dXNDb2RlKTtcbn07XG5cbnZhciBfaW5pdEN1cnJlbnRVc2VyID0gZnVuY3Rpb24gX2luaXRDdXJyZW50VXNlcih1c2VySW5mbywgc2Vzc2lvbl9leHBpcmVzX2F0KSB7XG4gIHZhciB1c2VyID0gVXNlclJlY29yZC5pbml0Q3VycmVudFVzZXIodXNlckluZm8pO1xuICB1c2VyLnVzZXJfaWQgPSB1c2VySW5mby5pZDtcbiAgdXNlci5zZXNzaW9uX2V4cGlyZXNfYXQgPSBzZXNzaW9uX2V4cGlyZXNfYXQ7XG4gIHJldHVybiB1c2VyO1xufTtcbi8qKlxuICog6I635Y+W5b2T5YmN55So5oi3XG4gKiBAc2luY2UgdjIuMC4wXG4gKiBAbWVtYmVyb2YgQmFhUy5hdXRoXG4gKiBAcmV0dXJuIHtQcm9taXNlPEJhYVMuQ3VycmVudFVzZXI+fVxuICovXG5cblxudmFyIGdldEN1cnJlbnRVc2VyID0gZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChbc3RvcmFnZUFzeW5jLmdldChjb25zdGFudHMuU1RPUkFHRV9LRVkuVUlEKSwgc3RvcmFnZUFzeW5jLmdldChjb25zdGFudHMuU1RPUkFHRV9LRVkuRVhQSVJFU19BVCksIHV0aWxzLmlzU2Vzc2lvbkV4cGlyZWQoKV0pLnRoZW4oZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIF9yZWYzID0gX3NsaWNlZFRvQXJyYXkoX3JlZjIsIDMpLFxuICAgICAgICB1aWQgPSBfcmVmM1swXSxcbiAgICAgICAgZXhwaXJlc0F0ID0gX3JlZjNbMV0sXG4gICAgICAgIGV4cGlyZWQgPSBfcmVmM1syXTtcblxuICAgIGlmICghdWlkIHx8ICFleHBpcmVzQXQgfHwgZXhwaXJlZCkgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBIRXJyb3IoNjA0KSk7XG4gICAgcmV0dXJuIG5ldyBVc2VyKCkuZ2V0KHVpZCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICByZXR1cm4gX2luaXRDdXJyZW50VXNlcihyZXMuZGF0YSwgZXhwaXJlc0F0KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuLyoqXG4gKiDkvb/nlKjmiYvmnLrlj7cgKyDpqozor4HnoIHnmbvlvZVcbiAqIEBzaW5jZSB2Mi4wLjBcbiAqIEBtZW1iZXJvZiBCYWFTLmF1dGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2JpbGVQaG9uZSDmiYvmnLrlj7fnoIFcbiAqIEBwYXJhbSB7c3RyaW5nfSBzbXNDb2RlIOmqjOivgeeggVxuICogQHBhcmFtIHtCYWFTLkxvZ2luT3B0aW9uc30gW29wdGlvbnNdIOWPr+mAiemFjee9rlxuICogQHJldHVybiB7UHJvbWlzZTxCYWFTLkN1cnJlbnRVc2VyPn1cbiAqL1xuXG5cbnZhciBsb2dpbldpdGhTbXNWZXJpZmljYXRpb25Db2RlID0gZnVuY3Rpb24gbG9naW5XaXRoU21zVmVyaWZpY2F0aW9uQ29kZShtb2JpbGVQaG9uZSwgc21zQ29kZSkge1xuICB2YXIgX3JlZjQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9LFxuICAgICAgX3JlZjQkY3JlYXRlVXNlciA9IF9yZWY0LmNyZWF0ZVVzZXIsXG4gICAgICBjcmVhdGVVc2VyID0gX3JlZjQkY3JlYXRlVXNlciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWY0JGNyZWF0ZVVzZXI7XG5cbiAgcmV0dXJuIEJhYVMucmVxdWVzdCh7XG4gICAgdXJsOiBBUEkuTE9HSU5fU01TLFxuICAgIGRhdGE6IHtcbiAgICAgIHBob25lOiBtb2JpbGVQaG9uZSxcbiAgICAgIGNvZGU6IHNtc0NvZGUsXG4gICAgICBjcmVhdGVfdXNlcjogY3JlYXRlVXNlclxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSkudGhlbih1dGlscy52YWxpZGF0ZVN0YXR1c0NvZGUpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgIEJhYVMuX3BvbHlmaWxsLmhhbmRsZUxvZ2luU3VjY2VzcyhyZXMsIGZhbHNlKTtcblxuICAgIHJldHVybiBnZXRDdXJyZW50VXNlcigpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBsb2dpbjogdXRpbHMucmF0ZUxpbWl0KGxvZ2luKSxcbiAgbG9nb3V0OiBsb2dvdXQsXG4gIHNpbGVudExvZ2luOiBzaWxlbnRMb2dpbixcbiAgbG9naW5XaXRoU21zVmVyaWZpY2F0aW9uQ29kZTogdXRpbHMucmF0ZUxpbWl0KGxvZ2luV2l0aFNtc1ZlcmlmaWNhdGlvbkNvZGUpLFxuICBhbm9ueW1vdXNMb2dpbjogdXRpbHMucmF0ZUxpbWl0KGFub255bW91c0xvZ2luKSxcbiAgcmVxdWVzdFBhc3N3b3JkUmVzZXQ6IHJlcXVlc3RQYXNzd29yZFJlc2V0LFxuICByZWdpc3RlcjogdXRpbHMucmF0ZUxpbWl0KHJlZ2lzdGVyKSxcbiAgX2luaXRDdXJyZW50VXNlcjogX2luaXRDdXJyZW50VXNlcixcbiAgZ2V0Q3VycmVudFVzZXI6IHV0aWxzLnJhdGVMaW1pdChnZXRDdXJyZW50VXNlcilcbn07IiwiLyoqXG4gKiDnn6XmmZPkupEgSlMgU0RLIOWRveWQjeepuumXtFxuICpcbiAqIEBuYW1lc3BhY2UgQmFhU1xuICovXG52YXIgQmFhUyA9IGdsb2JhbC5CYWFTIHx8IHt9O1xuLyoqXG4gKiBAbmFtZXNwYWNlIEJhYVMuX2NvbmZpZ1xuICovXG5cbkJhYVMuX2NvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnJyk7XG5CYWFTLl9wb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbi8qKlxuICog5bqU55So5qih5Z2XXG4gKlxuICogQHBhcmFtIHtCYWFTLk1vZHVsZX0gZm5cbiAqIEBtZW1iZXJvZiBCYWFTXG4gKiBAcHJpdmF0ZVxuICovXG5cbkJhYVMudXNlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmbihCYWFTKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQmFhUzsiLCJ2YXIgQVBJX0hPU1QgPSAnaHR0cHM6Ly9hcGkubXltaW5hcHAuY29tJztcbnZhciBXU19IT1NUID0gJ3dzczovL2FwaS53cy5teW1pbmFwcC5jb20nO1xudmFyIFZFUlNJT04gPSAndjIuMC4xLWEnO1xudmFyIFNES19ET1dOTE9BRF9QQUdFID0gJ2h0dHBzOi8vZG9jLm1pbmFwcC5jb20vanMtc2RrL2Rvd25sb2FkLXNkay5odG1sJztcbnZhciBBUEkgPSB7XG4gIFJFR0lTVEVSX1VTRVJOQU1FOiAnL2hzZXJ2ZS92Mi4xL3JlZ2lzdGVyL3VzZXJuYW1lLycsXG4gIFJFR0lTVEVSX0VNQUlMOiAnL2hzZXJ2ZS92Mi4xL3JlZ2lzdGVyL2VtYWlsLycsXG4gIFJFR0lTVEVSX1BIT05FOiAnL2hzZXJ2ZS92Mi4xL3JlZ2lzdGVyL3Bob25lLycsXG4gIExPR0lOX1VTRVJOQU1FOiAnL2hzZXJ2ZS92Mi4xL2xvZ2luL3VzZXJuYW1lLycsXG4gIExPR0lOX0VNQUlMOiAnL2hzZXJ2ZS92Mi4xL2xvZ2luL2VtYWlsLycsXG4gIExPR0lOX1BIT05FOiAnL2hzZXJ2ZS92Mi4xL2xvZ2luL3Bob25lLycsXG4gIExPR0lOX1NNUzogJy9oc2VydmUvdjIuMS9sb2dpbi9zbXMvJyxcbiAgRU1BSUxfVkVSSUZZOiAnL2hzZXJ2ZS92Mi4wL3VzZXIvZW1haWwtdmVyaWZ5LycsXG4gIFZFUklGWV9NT0JJTEU6ICcvaHNlcnZlL3YyLjEvc21zLXBob25lLXZlcmlmaWNhdGlvbi8nLFxuICBBQ0NPVU5UX0lORk86ICcvaHNlcnZlL3YyLjIvdXNlci9hY2NvdW50LycsXG4gIFBBU1NXT1JEX1JFU0VUOiAnL2hzZXJ2ZS92Mi4wL3VzZXIvcGFzc3dvcmQvcmVzZXQvJyxcbiAgQU5PTllNT1VTX0xPR0lOOiAnL2hzZXJ2ZS92Mi4wL2xvZ2luL2Fub255bW91cy8nLFxuICBMT0dPVVQ6ICcvaHNlcnZlL3YyLjAvc2Vzc2lvbi9kZXN0cm95LycsXG4gIFNFUlZFUl9USU1FOiAnL2hzZXJ2ZS92Mi4yL3NlcnZlci90aW1lLycsXG4gIE5BVElWRV9PQVVUSF9BVVRIOiAnL2hzZXJ2ZS92Mi4zL2lkcC9vYXV0aC86cHJvdmlkZXIvYXV0aGVudGljYXRlLycsXG4gIE5BVElWRV9PQVVUSF9BU1NPQ0lBVElPTjogJy9oc2VydmUvdjIuMy9pZHAvb2F1dGgvOnByb3ZpZGVyL3VzZXItYXNzb2NpYXRpb24vJyxcbiAgVVBMT0FEOiAnL2hzZXJ2ZS92Mi4xL3VwbG9hZC8nLFxuICBDTE9VRF9GVU5DVElPTjogJy9oc2VydmUvdjEvY2xvdWQtZnVuY3Rpb24vam9iLycsXG4gIFVTRVJfREVUQUlMOiAnL2hzZXJ2ZS92Mi41L3VzZXIvaW5mby86dXNlcklELycsXG4gIFVTRVJfTElTVDogJy9oc2VydmUvdjIuMi91c2VyL2luZm8vJyxcbiAgVVBEQVRFX1VTRVI6ICcvaHNlcnZlL3YyLjUvdXNlci9pbmZvLycsXG4gIFRBQkxFX0xJU1Q6ICcvaHNlcnZlL3YyLjAvdGFibGUvJyxcbiAgVEFCTEVfREVUQUlMOiAnL2hzZXJ2ZS92Mi4wL3RhYmxlLzp0YWJsZUlELycsXG4gIFJFQ09SRF9MSVNUOiAnL2hzZXJ2ZS92Mi40L3RhYmxlLzp0YWJsZUlEL3JlY29yZC8nLFxuICBRVUVSWV9SRUNPUkRfTElTVDogJy9oc2VydmUvdjIuNC90YWJsZS86dGFibGVJRC9yZWNvcmQvJyxcbiAgQ1JFQVRFX1JFQ09SRF9MSVNUOiAnL2hzZXJ2ZS92Mi40L3RhYmxlLzp0YWJsZUlEL3JlY29yZC8/ZW5hYmxlX3RyaWdnZXI9OmVuYWJsZV90cmlnZ2VyJyxcbiAgUkVDT1JEX0RFVEFJTDogJy9oc2VydmUvdjIuNS90YWJsZS86dGFibGVJRC9yZWNvcmQvOnJlY29yZElELycsXG4gIENSRUFURV9SRUNPUkQ6ICcvaHNlcnZlL3YyLjQvdGFibGUvOnRhYmxlSUQvcmVjb3JkLz9leHBhbmQ9OmV4cGFuZCcsXG4gIFVQREFURV9SRUNPUkQ6ICcvaHNlcnZlL3YyLjUvdGFibGUvOnRhYmxlSUQvcmVjb3JkLzpyZWNvcmRJRC8/ZW5hYmxlX3RyaWdnZXI9OmVuYWJsZV90cmlnZ2VyJmV4cGFuZD06ZXhwYW5kJyxcbiAgVVBEQVRFX1JFQ09SRF9MSVNUOiAnL2hzZXJ2ZS92Mi40L3RhYmxlLzp0YWJsZUlEL3JlY29yZC8/bGltaXQ9OmxpbWl0Jm9mZnNldD06b2Zmc2V0JndoZXJlPTp3aGVyZSZlbmFibGVfdHJpZ2dlcj06ZW5hYmxlX3RyaWdnZXImcmV0dXJuX3RvdGFsX2NvdW50PTpyZXR1cm5fdG90YWxfY291bnQnLFxuICBERUxFVEVfUkVDT1JEOiAnL2hzZXJ2ZS92Mi41L3RhYmxlLzp0YWJsZUlEL3JlY29yZC86cmVjb3JkSUQvJyxcbiAgREVMRVRFX1JFQ09SRF9MSVNUOiAnL2hzZXJ2ZS92Mi40L3RhYmxlLzp0YWJsZUlEL3JlY29yZC8/bGltaXQ9OmxpbWl0Jm9mZnNldD06b2Zmc2V0JndoZXJlPTp3aGVyZSZlbmFibGVfdHJpZ2dlcj06ZW5hYmxlX3RyaWdnZXImcmV0dXJuX3RvdGFsX2NvdW50PTpyZXR1cm5fdG90YWxfY291bnQnLFxuICBMQUdFQ1lfQ09OVEVOVF9MSVNUOiAnL2hzZXJ2ZS92MS9jb250ZW50L2RldGFpbC8nLFxuICBDT05URU5UX0xJU1Q6ICcvaHNlcnZlL3YyLjIvY29udGVudC9kZXRhaWwvJyxcbiAgQ09OVEVOVF9HUk9VUF9MSVNUOiAnL2hzZXJ2ZS92Mi4yL2NvbnRlbnQvZ3JvdXAvJyxcbiAgQ09OVEVOVF9ERVRBSUw6ICcvaHNlcnZlL3YyLjAvY29udGVudC9kZXRhaWwvOnJpY2hUZXh0SUQvJyxcbiAgQ09OVEVOVF9HUk9VUF9ERVRBSUw6ICcvaHNlcnZlL3YyLjIvY29udGVudC9ncm91cC86Y29udGVudEdyb3VwSUQvJyxcbiAgQ09OVEVOVF9DQVRFR09SWV9MSVNUOiAnL2hzZXJ2ZS92Mi4yL2NvbnRlbnQvY2F0ZWdvcnkvJyxcbiAgQ09OVEVOVF9DQVRFR09SWV9ERVRBSUw6ICcvaHNlcnZlL3YyLjAvY29udGVudC9jYXRlZ29yeS86Y2F0ZWdvcnlJRC8nLFxuICBGSUxFX0RFVEFJTDogJy9oc2VydmUvdjIuMS91cGxvYWRlZC1maWxlLzpmaWxlSUQvJyxcbiAgRklMRV9MSVNUOiAnL2hzZXJ2ZS92Mi4yL3VwbG9hZGVkLWZpbGUvJyxcbiAgREVMRVRFX0ZJTEU6ICcvaHNlcnZlL3YyLjEvdXBsb2FkZWQtZmlsZS86ZmlsZUlELycsXG4gIERFTEVURV9GSUxFUzogJy9oc2VydmUvdjIuMS91cGxvYWRlZC1maWxlLycsXG4gIEZJTEVfQ0FURUdPUllfREVUQUlMOiAnL2hzZXJ2ZS92MS4zL2ZpbGUtY2F0ZWdvcnkvOmNhdGVnb3J5SUQvJyxcbiAgRklMRV9DQVRFR09SWV9MSVNUOiAnL2hzZXJ2ZS92Mi4yL2ZpbGUtY2F0ZWdvcnkvJyxcbiAgQ0VOU09SX0lNQUdFOiAnL2hzZXJ2ZS92MS43L2NlbnNvci1pbWFnZS8nLFxuICBDRU5TT1JfTVNHOiAnL2hzZXJ2ZS92MS43L2NlbnNvci1tc2cvJyxcbiAgU0VORF9TTVNfQ09ERTogJy9oc2VydmUvdjIuMi9zbXMtdmVyaWZpY2F0aW9uLWNvZGUvJyxcbiAgVkVSSUZZX1NNU19DT0RFOiAnL2hzZXJ2ZS92MS44L3Ntcy12ZXJpZmljYXRpb24tY29kZS92ZXJpZnkvJyxcbiAgUEFZOiAnL2hzZXJ2ZS92Mi4yL2lkcC9wYXkvb3JkZXIvJyxcbiAgT1JERVI6ICcvaHNlcnZlL3YyLjAvaWRwL3BheS9vcmRlci86dHJhbnNhY3Rpb25JRC8nLFxuICBURU1QTEFURV9NRVNTQUdFX0VWRU5UX1JFUE9SVDogJy9oc2VydmUvdjIuMC90ZW1wbGF0ZS1tZXNzYWdlL2V2ZW50LXJlcG9ydC8nLFxuICBXRUI6IHtcbiAgICBUSElSRF9QQVJUWV9BU1NPQ0lBVEU6ICcvaHNlcnZlL3YyLjAvaWRwLzpwcm92aWRlci91c2VyLWFzc29jaWF0aW9uLycsXG4gICAgVEhJUkRfUEFSVFlfQVVUSDogJy9oc2VydmUvdjIuMC9pZHAvOnByb3ZpZGVyL3JlZGlyZWN0LycsXG4gICAgVEhJUkRfUEFSVFlfTE9HSU46ICcvaHNlcnZlL3YyLjAvaWRwLzpwcm92aWRlci9hdXRoZW50aWNhdGUvJyxcbiAgICBUSElSRF9QQVJUWV9TSUxFTlRfTE9HSU46ICcvaHNlcnZlL3YyLjUvaWRwLzpwcm92aWRlci9zaWxlbnQtbG9naW4vJ1xuICB9LFxuICBXRUNIQVQ6IHtcbiAgICBTSUxFTlRfTE9HSU46ICcvaHNlcnZlL3YyLjUvaWRwL3dlY2hhdC9zaWxlbnQtbG9naW4vJyxcbiAgICBBVVRIRU5USUNBVEU6ICcvaHNlcnZlL3YyLjUvaWRwL3dlY2hhdC9hdXRoZW50aWNhdGUvJyxcbiAgICBVU0VSX0FTU09DSUFURTogJy9oc2VydmUvdjIuNC9pZHAvd2VjaGF0L3VzZXItYXNzb2NpYXRlLycsXG4gICAgVEVNUExBVEVfTUVTU0FHRTogJy9oc2VydmUvdjIuMC90ZW1wbGF0ZS1tZXNzYWdlLXRpY2tldC8nLFxuICAgIFNVQlNDUklCRV9NRVNTQUdFOiAnL2hzZXJ2ZS92Mi4yL3N1YnNjcmlwdGlvbi1tZXNzYWdlL3JlbGF0aW9uc2hpcC1yZXBvcnQvJyxcbiAgICBERUNSWVBUOiAnL2hzZXJ2ZS92MS93ZWNoYXQvZGVjcnlwdC8nLFxuICAgIFdYQUNPREU6ICcvaHNlcnZlL3YyLjQvbWluaWFwcGNvZGUvJyxcbiAgICBDRU5TT1JfSU1BR0U6ICcvaHNlcnZlL3YxLjcvY2Vuc29yLWltYWdlLycsXG4gICAgQ0VOU09SX01TRzogJy9oc2VydmUvdjEuNy9jZW5zb3ItbXNnLycsXG4gICAgQ0VOU09SX0FTWU5DOiAnL2hzZXJ2ZS92Mi4yL2FzeW5jLWNlbnNvci8nLFxuICAgIEpTU0RLX0NSRURFTlRJQUxTOiAnL2hzZXJ2ZS92Mi40L2lkcC93ZWNoYXQvanNzZGstY3JlZGVudGlhbHMvJyxcbiAgICBQSE9ORV9MT0dJTjogJy9oc2VydmUvdjIuNS9pZHAvd2VjaGF0L3Bob25lLWxvZ2luLycsXG4gICAgVVBEQVRFX1BIT05FOiAnL2hzZXJ2ZS92Mi41L2lkcC93ZWNoYXQvcGhvbmUtdmVyaWZpY2F0aW9uLydcbiAgfSxcbiAgUVE6IHtcbiAgICBTSUxFTlRfTE9HSU46ICcvaHNlcnZlL3YyLjUvaWRwL3FxL3NpbGVudC1sb2dpbi8nLFxuICAgIEFVVEhFTlRJQ0FURTogJy9oc2VydmUvdjIuNS9pZHAvcXEvYXV0aGVudGljYXRlLycsXG4gICAgVVNFUl9BU1NPQ0lBVEU6ICcvaHNlcnZlL3YyLjAvaWRwL3FxL3VzZXItYXNzb2NpYXRpb24vJyxcbiAgICBURU1QTEFURV9NRVNTQUdFOiAnL2hzZXJ2ZS92Mi4wL3RlbXBsYXRlLW1lc3NhZ2UtdGlja2V0LycsXG4gICAgU1VCU0NSSUJFX01FU1NBR0U6ICcvaHNlcnZlL3YyLjIvc3Vic2NyaXB0aW9uLW1lc3NhZ2UvcmVsYXRpb25zaGlwLXJlcG9ydC8nLFxuICAgIERFQ1JZUFQ6ICcvaHNlcnZlL3YyLjAvcXEvZGVjcnlwdC8nLFxuICAgIENFTlNPUl9JTUFHRTogJy9oc2VydmUvdjIuMi9xcS9jZW5zb3ItaW1hZ2UvJyxcbiAgICBDRU5TT1JfTVNHOiAnL2hzZXJ2ZS92Mi4yL3FxL2NlbnNvci1tc2cvJ1xuICB9LFxuICBCQUlEVToge1xuICAgIFNJTEVOVF9MT0dJTjogJy9oc2VydmUvdjIuNS9pZHAvYmFpZHUvc2lsZW50LWxvZ2luLycsXG4gICAgQVVUSEVOVElDQVRFOiAnL2hzZXJ2ZS92Mi41L2lkcC9iYWlkdS9hdXRoZW50aWNhdGUvJyxcbiAgICBVU0VSX0FTU09DSUFURTogJy9oc2VydmUvdjIuMS9pZHAvYmFpZHUvdXNlci1hc3NvY2lhdGlvbi8nLFxuICAgIFRFTVBMQVRFX01FU1NBR0U6ICcvaHNlcnZlL3YyLjAvdGVtcGxhdGUtbWVzc2FnZS10aWNrZXQvJ1xuICB9LFxuICBBTElQQVk6IHtcbiAgICBTSUxFTlRfTE9HSU46ICcvaHNlcnZlL3YyLjUvaWRwL2FsaXBheS9zaWxlbnQtbG9naW4vJyxcbiAgICBBVVRIRU5USUNBVEU6ICcvaHNlcnZlL3YyLjUvaWRwL2FsaXBheS9hdXRoZW50aWNhdGUvJyxcbiAgICBVU0VSX0FTU09DSUFURTogJy9oc2VydmUvdjIuMC9pZHAvYWxpcGF5L3VzZXItYXNzb2NpYXRlLycsXG4gICAgVEVNUExBVEVfTUVTU0FHRTogJy9oc2VydmUvdjIuMC90ZW1wbGF0ZS1tZXNzYWdlLXRpY2tldC8nLFxuICAgIE1JTklBUFBfUVJfQ09ERTogJy9oc2VydmUvdjIuMC9pZHAvYWxpcGF5L21pbmlhcHAtcXItY29kZS8nLFxuICAgIENFTlNPUl9NU0c6ICcvaHNlcnZlL3YyLjQvYWxpcGF5L2NlbnNvci1tc2cvJ1xuICB9LFxuICBCWVRFREFOQ0U6IHtcbiAgICBTSUxFTlRfTE9HSU46ICcvaHNlcnZlL3YyLjUvaWRwL2J5dGVkYW5jZS9zaWxlbnQtbG9naW4vJyxcbiAgICBBVVRIRU5USUNBVEU6ICcvaHNlcnZlL3YyLjUvaWRwL2J5dGVkYW5jZS9hdXRoZW50aWNhdGUvJyxcbiAgICBVU0VSX0FTU09DSUFURTogJy9oc2VydmUvdjIuNC9pZHAvYnl0ZWRhbmNlL3VzZXItYXNzb2NpYXRpb24vJyxcbiAgICBURU1QTEFURV9NRVNTQUdFOiAnL2hzZXJ2ZS92Mi4wL3RlbXBsYXRlLW1lc3NhZ2UtdGlja2V0LycsXG4gICAgTUlOSUFQUF9RUl9DT0RFOiAnL2hzZXJ2ZS92Mi40L2lkcC9ieXRlZGFuY2UvbWluaWFwcC1xci1jb2RlLydcbiAgfSxcbiAgSklOR0RPTkc6IHtcbiAgICBTSUxFTlRfTE9HSU46ICcvaHNlcnZlL3YyLjUvaWRwL2pkL3NpbGVudC1sb2dpbi8nLFxuICAgIEFVVEhFTlRJQ0FURTogJy9oc2VydmUvdjIuNS9pZHAvamQvYXV0aGVudGljYXRlLycsXG4gICAgVVNFUl9BU1NPQ0lBVEU6ICcvaHNlcnZlL3YyLjQvaWRwL2pkL3VzZXItYXNzb2NpYXRpb24vJ1xuICB9LFxuICBLVUFJU0hPVToge1xuICAgIFNJTEVOVF9MT0dJTjogJy9oc2VydmUvdjIuNS9pZHAva3VhaXNob3Uvc2lsZW50LWxvZ2luLycsXG4gICAgQVVUSEVOVElDQVRFOiAnL2hzZXJ2ZS92Mi41L2lkcC9rdWFpc2hvdS9hdXRoZW50aWNhdGUvJyxcbiAgICBVU0VSX0FTU09DSUFURTogJy9oc2VydmUvdjIuNS9pZHAva3VhaXNob3UvdXNlci1hc3NvY2lhdGlvbi8nXG4gIH0sXG4gIFZJREVPX1NOQVBTSE9UOiAnL2hzZXJ2ZS92MS9tZWRpYS92aWRlby1zbmFwc2hvdC8nLFxuICBNM1U4X0NPTkNBVDogJy9oc2VydmUvdjEvbWVkaWEvbTN1OC1jb25jYXQvJyxcbiAgTTNVOF9DTElQOiAnL2hzZXJ2ZS92MS9tZWRpYS9tM3U4LWNsaXAvJyxcbiAgTTNVOF9NRVRBOiAnL2hzZXJ2ZS92MS9tZWRpYS9tM3U4LW1ldGEvJyxcbiAgVklERU9fQVVESU9fTUVUQTogJy9oc2VydmUvdjEvbWVkaWEvYXVkaW8tdmlkZW8tbWV0YS8nLFxuICBHRVRfQVNZTkNfSk9CX1JFU1VMVDogJy9oc2VydmUvdjEvYnVsay1vcGVyYXRpb24vOmlkLycsXG4gIExBVEVTVF9WRVJTSU9OOiAnL2hzZXJ2ZS92MS9sYXRlc3Qtc2RrLXZlcnNpb24vJ1xufTtcbnZhciBtZXRob2RNYXBMaXN0ID0gW3tcbiAgZ2V0VXNlckluZm86IHtcbiAgICB1cmw6IEFQSS5VU0VSX0RFVEFJTCxcbiAgICBkZWZhdWx0UGFyYW1zOiB7XG4gICAgICB1c2VySUQ6ICcnXG4gICAgfVxuICB9LFxuICBnZXRVc2VyRGV0YWlsOiB7XG4gICAgdXJsOiBBUEkuVVNFUl9ERVRBSUxcbiAgfSxcbiAgZ2V0VXNlckxpc3Q6IHtcbiAgICB1cmw6IEFQSS5VU0VSX0xJU1RcbiAgfSxcbiAgdXBkYXRlVXNlcjoge1xuICAgIHVybDogQVBJLlVQREFURV9VU0VSLFxuICAgIG1ldGhvZDogJ1BVVCdcbiAgfVxufSwge1xuICBnZXRUYWJsZUxpc3Q6IHtcbiAgICB1cmw6IEFQSS5UQUJMRV9MSVNUXG4gIH0sXG4gIGdldFRhYmxlOiB7XG4gICAgdXJsOiBBUEkuVEFCTEVfREVUQUlMXG4gIH0sXG4gIGdldFJlY29yZExpc3Q6IHtcbiAgICB1cmw6IEFQSS5SRUNPUkRfTElTVFxuICB9LFxuICBxdWVyeVJlY29yZExpc3Q6IHtcbiAgICB1cmw6IEFQSS5RVUVSWV9SRUNPUkRfTElTVFxuICB9LFxuICBnZXRSZWNvcmQ6IHtcbiAgICB1cmw6IEFQSS5SRUNPUkRfREVUQUlMXG4gIH0sXG4gIGNyZWF0ZVJlY29yZDoge1xuICAgIHVybDogQVBJLkNSRUFURV9SRUNPUkQsXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSxcbiAgY3JlYXRlUmVjb3JkTGlzdDoge1xuICAgIHVybDogQVBJLkNSRUFURV9SRUNPUkRfTElTVCxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9LFxuICB1cGRhdGVSZWNvcmQ6IHtcbiAgICB1cmw6IEFQSS5VUERBVEVfUkVDT1JELFxuICAgIG1ldGhvZDogJ1BVVCdcbiAgfSxcbiAgdXBkYXRlUmVjb3JkTGlzdDoge1xuICAgIHVybDogQVBJLlVQREFURV9SRUNPUkRfTElTVCxcbiAgICBtZXRob2Q6ICdQVVQnXG4gIH0sXG4gIGRlbGV0ZVJlY29yZDoge1xuICAgIHVybDogQVBJLkRFTEVURV9SRUNPUkQsXG4gICAgbWV0aG9kOiAnREVMRVRFJ1xuICB9LFxuICBkZWxldGVSZWNvcmRMaXN0OiB7XG4gICAgdXJsOiBBUEkuREVMRVRFX1JFQ09SRF9MSVNULFxuICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgfVxufSwge1xuICBnZXRDb250ZW50TGlzdDoge1xuICAgIHVybDogQVBJLkxBR0VDWV9DT05URU5UX0xJU1RcbiAgfSxcbiAgZ2V0Q29udGVudExpc3RWMjoge1xuICAgIHVybDogQVBJLkNPTlRFTlRfTElTVFxuICB9LFxuICBnZXRDb250ZW50OiB7XG4gICAgdXJsOiBBUEkuQ09OVEVOVF9ERVRBSUxcbiAgfSxcbiAgZ2V0Q29udGVudEdyb3VwTGlzdDoge1xuICAgIHVybDogQVBJLkNPTlRFTlRfR1JPVVBfTElTVFxuICB9LFxuICBnZXRDb250ZW50R3JvdXA6IHtcbiAgICB1cmw6IEFQSS5DT05URU5UX0dST1VQX0RFVEFJTFxuICB9LFxuICBnZXRDb250ZW50Q2F0ZWdvcnlMaXN0OiB7XG4gICAgdXJsOiBBUEkuQ09OVEVOVF9DQVRFR09SWV9MSVNUXG4gIH0sXG4gIGdldENvbnRlbnRDYXRlZ29yeToge1xuICAgIHVybDogQVBJLkNPTlRFTlRfQ0FURUdPUllfREVUQUlMXG4gIH1cbn0sIHtcbiAgZ2V0RmlsZURldGFpbDoge1xuICAgIHVybDogQVBJLkZJTEVfREVUQUlMXG4gIH0sXG4gIGdldEZpbGVMaXN0OiB7XG4gICAgdXJsOiBBUEkuRklMRV9MSVNUXG4gIH0sXG4gIGRlbGV0ZUZpbGU6IHtcbiAgICB1cmw6IEFQSS5ERUxFVEVfRklMRSxcbiAgICBtZXRob2Q6ICdERUxFVEUnXG4gIH0sXG4gIGRlbGV0ZUZpbGVzOiB7XG4gICAgdXJsOiBBUEkuREVMRVRFX0ZJTEVTLFxuICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgfSxcbiAgZ2V0RmlsZUNhdGVnb3J5RGV0YWlsOiB7XG4gICAgdXJsOiBBUEkuRklMRV9DQVRFR09SWV9ERVRBSUxcbiAgfSxcbiAgZ2V0RmlsZUNhdGVnb3J5TGlzdDoge1xuICAgIHVybDogQVBJLkZJTEVfQ0FURUdPUllfTElTVFxuICB9LFxuICBzZW5kU21zQ29kZToge1xuICAgIHVybDogQVBJLlNFTkRfU01TX0NPREUsXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSxcbiAgdmVyaWZ5U21zQ29kZToge1xuICAgIHVybDogQVBJLlZFUklGWV9TTVNfQ09ERSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9XG59LCB7XG4gIGdldE9yZGVyTGlzdDoge1xuICAgIHVybDogQVBJLlBBWVxuICB9XG59XTtcbnZhciBSQU5ET01fT1BUSU9OID0ge1xuICBtYXg6IDEwMFxufTtcbnZhciByZXF1ZXN0UGFyYW1zTWFwID0ge1xuICBjb250ZW50R3JvdXBJRDogJ2NvbnRlbnRfZ3JvdXBfaWQnLFxuICBjYXRlZ29yeUlEOiAnY2F0ZWdvcnlfaWQnLFxuICByZWNvcmRJRDogJ2lkJyxcbiAgc3VibWlzc2lvblR5cGU6ICdzdWJtaXNzaW9uX3R5cGUnLFxuICBzdWJtaXNzaW9uVmFsdWU6ICdzdWJtaXNzaW9uX3ZhbHVlJyxcbiAgY2F0ZWdvcnlOYW1lOiAnY2F0ZWdvcnlfbmFtZScsXG4gIHNpZ25hdHVyZUlEOiAnc2lnbmF0dXJlX2lkJ1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBBUElfSE9TVDogQVBJX0hPU1QsXG4gIEFQSTogQVBJLFxuICBBVVRIX1BSRUZJWDogJ0h5ZHJvZ2VuLXIxJyxcbiAgTUVUSE9EX01BUF9MSVNUOiBtZXRob2RNYXBMaXN0LFxuICBERUJVRzogZmFsc2UsXG4gIFJBTkRPTV9PUFRJT046IFJBTkRPTV9PUFRJT04sXG4gIFJFUVVFU1RfUEFSQU1TX01BUDogcmVxdWVzdFBhcmFtc01hcCxcbiAgU0RLX0RPV05MT0FEX1BBR0U6IFNES19ET1dOTE9BRF9QQUdFLFxuXG4gIC8qKlxuICAgKiBTREsg54mI5pys5Y+3XG4gICAqXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAbWVtYmVyb2YgQmFhUy5fY29uZmlnXG4gICAqL1xuICBWRVJTSU9OOiBWRVJTSU9OLFxuICAvLyBwYWNrYWdlLmpzb24g5Lit55qEIHZlcnNpb24g5Lmf6ZyA6KaB5ZCM5q2l5L+u5pS544CCXG4gIFdTX0hPU1Q6IFdTX0hPU1QsXG4gIFdTX1BBVEg6ICd3cy9oeWRyb2dlbi8nLFxuICBXU19SRUFMTTogJ2NvbS5pZmFucmNsb3VkJyxcbiAgV1NfQkFTRV9UT1BJQzogJ2NvbS5pZmFucmNsb3VkLnNjaGVtYV9ldmVudCdcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFFVRVJZX0xJTUlUQVRJT05fREVGQVVMVDogMjAsXG4gIC8vIOWtmOWCqOS/oeaBr1xuICBTVE9SQUdFX0tFWToge1xuICAgIEFVVEhfVE9LRU46ICdhdXRoX3Rva2VuJyxcbiAgICBVU0VSSU5GTzogJ3VzZXJpbmZvJyxcbiAgICBVSUQ6ICd1aWQnLFxuICAgIE9QRU5JRDogJ29wZW5pZCcsXG4gICAgVU5JT05JRDogJ3VuaW9uaWQnLFxuICAgIElTX0xPR0lORURfQkFBUzogJ2lzX2xvZ2luZWRfYmFhcycsXG4gICAgSVNfQU5PTllNT1VTX1VTRVI6ICdpc19hbm9ueW1vdXNfdXNlcicsXG4gICAgRVhQSVJFU19BVDogJ3Nlc3Npb25fZXhwaXJlc19hdCcsXG4gICAgQUxJUEFZX1VTRVJfSUQ6ICdhbGlwYXlfdXNlcl9pZCcsXG4gICAgTEFURVNUX1ZFUlNJT05fQ0hFQ0tfTUlMTElTRUNPTkRTOiAnbGF0ZXN0X3ZlcnNpb25fY2hlY2tfbWlsbGlzZWNvbmRzJyxcbiAgICBSRVBPUlRfVElDS0VUX0lOVk9LRV9SRUNPUkQ6ICdyZXBvcnRfdGlja2V0X2ludm9rZV9yZWNvcmQnXG4gIH0sXG4gIFZFUlNJT05fTUlOX0NIRUNLX0lOVEVSVkFMOiAnODY0MDAwMDAnLFxuICBTVEFUVVNfQ09ERToge1xuICAgIENSRUFURUQ6IDIwMSxcbiAgICBTVUNDRVNTOiAyMDAsXG4gICAgVVBEQVRFOiAyMDAsXG4gICAgUEFUQ0g6IDIwMCxcbiAgICBERUxFVEU6IDIwNCxcbiAgICBVTkFVVEhPUklaRUQ6IDQwMSxcbiAgICBOT1RfRk9VTkQ6IDQwNCxcbiAgICBTRVJWRVJfRVJST1I6IDUwMFxuICB9LFxuICBVUExPQUQ6IHtcbiAgICBVUExPQURfRklMRV9LRVk6ICdmaWxlJyxcbiAgICBIRUFERVJfQVVUSDogJ0F1dGhvcml6YXRpb24nLFxuICAgIEhFQURFUl9DTElFTlQ6ICdYLUh5ZHJvZ2VuLUNsaWVudC1JRCcsXG4gICAgSEVBREVSX0FVVEhfVkFMVUU6ICdIeWRyb2dlbi1yMSAnLFxuICAgIFVBOiAnTW96aWxsYS81LjAgKExpbnV4OyBVOyBBbmRyb2lkIDQuMC4zOyBrby1rcjsgTEctTDE2MEwgQnVpbGQvSU1MNzRLKSBBcHBsZVdlYmtpdC81MzQuMzAgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzQuMCBNb2JpbGUgU2FmYXJpLzUzNC4zMCdcbiAgfSxcbiAgVVNFUl9QUk9GSUxFX0JVSUxEX0lOX0ZJRUxEUzogWy8vIOWOn+acieWGhee9ruWtl+autVxuICAnaWQnLCAnY3JlYXRlZF9hdCcsICdjcmVhdGVkX2J5JywgJ3VwZGF0ZWRfYXQnLCAnY291bnRyeScsICduaWNrbmFtZScsICdwcm92aW5jZScsICdjaXR5JywgJ2xhbmd1YWdlJywgJ29wZW5pZCcsICd1bmlvbmlkJywgJ2F2YXRhcicsICdpc19hdXRob3JpemVkJywgJ2dlbmRlciddLFxuICBodHRwTWV0aG9kQ29kZU1hcDoge1xuICAgIEdFVDogMjAwLFxuICAgIFBPU1Q6IDIwMSxcbiAgICBQVVQ6IDIwMCxcbiAgICBQQVRDSDogMjAwLFxuICAgIERFTEVURTogMjA0XG4gIH0sXG4gIExPR19MRVZFTDoge1xuICAgIERFQlVHOiAnZGVidWcnLFxuICAgIElORk86ICdpbmZvJyxcbiAgICBXQVJOOiAnd2FybicsXG4gICAgRVJST1I6ICdlcnJvcidcbiAgfSxcbiAgVVBEQVRFX1VTRVJQUk9GSUxFX1ZBTFVFOiB7XG4gICAgT1ZFUldSSVRFOiAnb3ZlcndyaXRlJyxcbiAgICBTRVROWDogJ3NldG54JyxcbiAgICBGQUxTRTogJ2ZhbHNlJ1xuICB9LFxuICBUSUNLRVRfUkVQT1JUX0lOVk9LRV9MSU1JVDoge1xuICAgIE1JTl9JTlRFUlZBTF9QUkVfVElNRTogMSAqIDEwMDAsXG4gICAgVElNRVNfTElNSVQ6IHtcbiAgICAgIE1BWF9USU1FU19QRVJfQ1lDTEU6IDIwLFxuICAgICAgQ1lDTEU6IDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICB9XG4gIH0sXG4gIFRISVJEX1BBUlRZX0FVVEhfTU9ERToge1xuICAgIFBPUFVQX0lGUkFNRTogJ3BvcHVwLWlmcmFtZScsXG4gICAgUE9QVVBfV0lORE9XOiAncG9wdXAtd2luZG93JyxcbiAgICBSRURJUkVDVDogJ3JlZGlyZWN0J1xuICB9LFxuICBUSElSRF9QQVJUWV9BVVRIX1NUQVRVUzoge1xuICAgIFNVQ0NFU1M6ICdzdWNjZXNzJyxcbiAgICBGQUlMOiAnZmFpbCdcbiAgfSxcbiAgVEhJUkRfUEFSVFlfQVVUSF9IQU5ETEVSOiB7XG4gICAgTE9HSU46ICdsb2dpbicsXG4gICAgQVNTT0NJQVRFOiAnYXNzb2NpYXRlJ1xuICB9LFxuICBUSElSRF9QQVJUWV9BVVRIX1BST1ZJREVSOiB7XG4gICAgV0VDSEFUX01QOiAnb2F1dGgtd2VjaGF0LW1wJyxcbiAgICBXRUNIQVRfV0VCOiAnb2F1dGgtd2VjaGF0LXdlYicsXG4gICAgV0VJQk86ICdvYXV0aC13ZWlibydcbiAgfSxcbiAgVEhJUkRfUEFSVFlfQVVUSF9VUkxfUEFSQU06IHtcbiAgICBQUk9WSURFUjogJ3Byb3ZpZGVyJyxcbiAgICBSRUZFUkVSOiAncmVmZXJlcicsXG4gICAgTU9ERTogJ21vZGUnLFxuICAgIERFQlVHOiAnZGVidWcnLFxuICAgIENSRUFURV9VU0VSOiAnY3JlYXRlX3VzZXInLFxuICAgIFVQREFURV9VU0VSX1BST0ZJTEU6ICd1cGRhdGVfdXNlcnByb2ZpbGUnLFxuICAgIFdFQ0hBVF9JRlJBTUVfQ09OVEVOVF9TVFlMRTogJ3dlY2hhdF9pZnJhbWVfY29udGVudF9zdHlsZScsXG4gICAgSEFORExFUjogJ2hhbmRsZXInLFxuICAgIFRPS0VOOiAndG9rZW4nLFxuICAgIEFVVEhfUkVTVUxUOiAnYXV0aC1yZXN1bHQnLFxuICAgIFNJTEVOVF9MT0dJTjogJ3NpbGVudF9sb2dpbidcbiAgfSxcbiAgUExBVEZPUk06IHtcbiAgICBXRUNIQVQ6ICd3ZWNoYXRfbWluaWFwcCcsXG4gICAgQUxJUEFZOiAnYWxpcGF5X21pbmlhcHAnLFxuICAgIFFROiAncXFfbWluaWFwcCcsXG4gICAgQkFJRFU6ICdiYWlkdV9taW5pYXBwJyxcbiAgICBCWVRFREFOQ0U6ICdieXRlZGFuY2VfbWluaWFwcCcsXG4gICAgSk9OR0RPTkc6ICdqZF9taW5pYXBwJ1xuICB9XG59OyIsInZhciBCYWFTID0gcmVxdWlyZSgnLi9iYWFzJyk7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIEFQSSA9IEJhYVMuX2NvbmZpZy5BUEk7XG4vKipcbiAqIOiOt+WPluW8guatpeaTjeS9nOaJp+ihjOe7k+aenFxuICogQGZ1bmN0aW9uXG4gKiBAbmFtZSBnZXRBc3luY0pvYlJlc3VsdFxuICogQG1lbWJlcm9mIEJhYVNcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcGVyYXRpb25JRCDlvILmraXmk43kvZwgSURcbiAqIEByZXR1cm4ge1Byb21pc2U8QmFhUy5SZXNwb25zZTxhbnk+Pn1cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldEFzeW5jSm9iUmVzdWx0KGlkKSB7XG4gIHJldHVybiBCYWFTLl9iYWFzUmVxdWVzdCh7XG4gICAgdXJsOiB1dGlscy5mb3JtYXQoQVBJLkdFVF9BU1lOQ19KT0JfUkVTVUxULCB7XG4gICAgICBpZDogaWRcbiAgICB9KVxuICB9KTtcbn07IiwidmFyIEJhYVMgPSByZXF1aXJlKCcuL2JhYXMnKTtcblxudmFyIEFQSSA9IEJhYVMuX2NvbmZpZy5BUEk7XG4vKipcbiAqIEB0eXBlZGVmIFNlcnZlckRhdGVcbiAqIEBtZW1iZXJvZiBCYWFTXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdGltZSDmnI3liqHlmajml7bpl7Qg77yISVNPIDg2MDHvvIlcbiAqL1xuXG4vKipcbiAqIOiOt+WPluacjeWKoeWZqOaXtumXtFxuICogQGZ1bmN0aW9uXG4gKiBAbmFtZSBnZXRTZXJ2ZXJEYXRlXG4gKiBAbWVtYmVyb2YgQmFhU1xuICogQHJldHVybiB7UHJvbWlzZTxCYWFTLlJlc3BvbnNlPEJhYVMuU2VydmVyRGF0ZT4+fVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0U2VydmVyRGF0ZSgpIHtcbiAgcmV0dXJuIEJhYVMuX2JhYXNSZXF1ZXN0KHtcbiAgICB1cmw6IEFQSS5TRVJWRVJfVElNRVxuICB9KTtcbn07IiwidmFyIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbnZhciBzdG9yYWdlID0gcmVxdWlyZSgnLi9zdG9yYWdlJyk7XG5cbnZhciBzdG9yYWdlQXN5bmMgPSByZXF1aXJlKCcuL3N0b3JhZ2VBc3luYycpO1xuXG52YXIgSEVycm9yID0gcmVxdWlyZSgnLi9IRXJyb3InKTtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYWFTKSB7XG4gIC8qKlxuICAgKiBTREsg5Yid5aeL5YyWXG4gICAqXG4gICAqIEBmdW5jdGlvbiBpbml0XG4gICAqIEBtZW1iZXJvZiBCYWFTXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRJRCAtIOefpeaZk+S6keW6lOeUqOeahCBjbGllbnQgaWRcbiAgICogQHBhcmFtIHtCYWFTLkluaXRPcHRpb25zfSBbb3B0aW9uc10gLSDlhbbku5bpgInpoblcbiAgICovXG4gIEJhYVMuaW5pdCA9IGZ1bmN0aW9uIChjbGllbnRJRCkge1xuICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fSxcbiAgICAgICAgX3JlZiRhdXRvTG9naW4gPSBfcmVmLmF1dG9Mb2dpbixcbiAgICAgICAgYXV0b0xvZ2luID0gX3JlZiRhdXRvTG9naW4gPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhdXRvTG9naW4sXG4gICAgICAgIF9yZWYkbG9nTGV2ZWwgPSBfcmVmLmxvZ0xldmVsLFxuICAgICAgICBsb2dMZXZlbCA9IF9yZWYkbG9nTGV2ZWwgPT09IHZvaWQgMCA/ICcnIDogX3JlZiRsb2dMZXZlbCxcbiAgICAgICAgX3JlZiRob3N0ID0gX3JlZi5ob3N0LFxuICAgICAgICBob3N0ID0gX3JlZiRob3N0ID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkaG9zdCxcbiAgICAgICAgX3JlZiR3c19ob3N0ID0gX3JlZi53c19ob3N0LFxuICAgICAgICB3c19ob3N0ID0gX3JlZiR3c19ob3N0ID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkd3NfaG9zdCxcbiAgICAgICAgZW52ID0gX3JlZi5lbnY7XG5cbiAgICBpZiAoIXV0aWxzLmlzU3RyaW5nKGNsaWVudElEKSkge1xuICAgICAgdGhyb3cgbmV3IEhFcnJvcig2MDUpO1xuICAgIH1cblxuICAgIGlmIChsb2dMZXZlbCkge1xuICAgICAgdXRpbHMuc2V0TG9nTGV2ZWwobG9nTGV2ZWwpO1xuICAgIH1cblxuICAgIEJhYVMuX2NvbmZpZy5BVVRPX0xPR0lOID0gYXV0b0xvZ2luO1xuICAgIEJhYVMuX2NvbmZpZy5FTlYgPSBlbnY7XG4gICAgQmFhUy5fY29uZmlnLkNMSUVOVF9JRCA9IGNsaWVudElEO1xuICAgIEJhYVMuX2NvbmZpZy5BUElfSE9TVCA9IGhvc3Q7XG4gICAgQmFhUy5fY29uZmlnLldTX0hPU1QgPSB3c19ob3N0O1xuICAgIEJhYVMuX2NvbmZpZy5MT0dfTEVWRUwgPSBsb2dMZXZlbDtcblxuICAgIEJhYVMuX3BvbHlmaWxsLmNoZWNrTGF0ZXN0VmVyc2lvbigpO1xuICB9O1xuICAvKipcbiAgICog6I635Y+WIHRva2VuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCYWFTXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG5cblxuICBCYWFTLmdldEF1dGhUb2tlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc3RvcmFnZUFzeW5jLmdldChjb25zdGFudHMuU1RPUkFHRV9LRVkuQVVUSF9UT0tFTik7XG4gIH07XG4gIC8qKlxuICAgKiBTREsg54mI5pys5qOA5p+lXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCYWFTXG4gICAqIEBwYXJhbSB7QmFhUy5DaGVja1ZlcnNpb25PcHRpb25zfSBvcHRpb25zXG4gICAqL1xuXG5cbiAgQmFhUy5jaGVja1ZlcnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgcGxhdGZvcm0gPSBfcmVmMi5wbGF0Zm9ybSxcbiAgICAgICAgb25TdWNjZXNzID0gX3JlZjIub25TdWNjZXNzLFxuICAgICAgICBvbkVycm9yID0gX3JlZjIub25FcnJvcjtcblxuICAgIGlmICghb25TdWNjZXNzKSB7XG4gICAgICBvblN1Y2Nlc3MgPSBmdW5jdGlvbiBvblN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHZhciBzdGF0dXNDb2RlID0gcmVzLnN0YXR1c0NvZGUgfHwgcmVzLnN0YXR1cztcblxuICAgICAgICBpZiAocGFyc2VJbnQoc3RhdHVzQ29kZSkgIT09IGNvbnN0YW50cy5TVEFUVVNfQ09ERS5TVUNDRVNTKSB7XG4gICAgICAgICAgb25FcnJvciAmJiBvbkVycm9yKHJlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IHV0aWxzLmNvbXBhcmVWZXJzaW9uKEJhYVMuX2NvbmZpZy5WRVJTSU9OLCByZXMuZGF0YVtwbGF0Zm9ybV0pO1xuXG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHV0aWxzLmxvZyhjb25zdGFudHMuTE9HX0xFVkVMLldBUk4sIFwiXFx1MzAxMFxcdTc3RTVcXHU2NjUzXFx1NEU5MSBTREsgXFx1NjZGNFxcdTY1QjBcXHU2M0QwXFx1NzkzQVxcdTMwMTFcXHU1RjUzXFx1NTI0RCBTREsgXFx1NzI0OFxcdTY3MkNcXHU0RTNBIFwiLmNvbmNhdChCYWFTLl9jb25maWcuVkVSU0lPTiwgXCIgXFx1NjcwMFxcdTY1QjBcXHU3MjQ4XFx1NjcyQ1xcdTRFM0EgXCIpLmNvbmNhdChyZXMuZGF0YVtwbGF0Zm9ybV0sIFwiXFx1RkYwQ1xcdThCRjdcXHU1MjREXFx1NUY4MCBcIikuY29uY2F0KEJhYVMuX2NvbmZpZy5TREtfRE9XTkxPQURfUEFHRSwgXCIgXFx1NEUwQlxcdThGN0RcXHUzMDAyXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHN0b3JhZ2VBc3luYy5nZXQoY29uc3RhbnRzLlNUT1JBR0VfS0VZLkxBVEVTVF9WRVJTSU9OX0NIRUNLX01JTExJU0VDT05EUykudGhlbihmdW5jdGlvbiAobGFzdENoZWNrTWlsbGlzZWNvbmRzKSB7XG4gICAgICBpZiAobGFzdENoZWNrTWlsbGlzZWNvbmRzICYmIGxhc3RDaGVja01pbGxpc2Vjb25kcyAtIG5vdyA8PSBjb25zdGFudHMuVkVSU0lPTl9NSU5fQ0hFQ0tfSU5URVJWQUwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzdG9yYWdlQXN5bmMuc2V0KGNvbnN0YW50cy5TVE9SQUdFX0tFWS5MQVRFU1RfVkVSU0lPTl9DSEVDS19NSUxMSVNFQ09ORFMsIG5vdyk7XG4gICAgICByZXR1cm4gQmFhUy5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBCYWFTLl9jb25maWcuQVBJLkxBVEVTVF9WRVJTSU9OXG4gICAgICB9KS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gICAgfSk7XG4gIH07XG4gIC8qKlxuICAgKiDmuIXpmaTkvJror53vvIjpgIDlh7rnmbvlvZXvvIlcbiAgICpcbiAgICogQG1lbWJlcm9mIEJhYVNcbiAgICovXG5cblxuICBCYWFTLmNsZWFyU2Vzc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoWy8vIOa4hemZpOWuouaIt+err+iupOivgSBUb2tlblxuICAgIHN0b3JhZ2VBc3luYy5zZXQoY29uc3RhbnRzLlNUT1JBR0VfS0VZLkFVVEhfVE9LRU4sICcnKSwgLy8g5riF6ZmkIEJhYVMg55m75b2V54q25oCBXG4gICAgc3RvcmFnZUFzeW5jLnNldChjb25zdGFudHMuU1RPUkFHRV9LRVkuSVNfTE9HSU5FRF9CQUFTLCAnJyksIHN0b3JhZ2VBc3luYy5zZXQoY29uc3RhbnRzLlNUT1JBR0VfS0VZLklTX0FOT05ZTU9VU19VU0VSLCAnJyksIC8vIOa4hemZpOeUqOaIt+S/oeaBr1xuICAgIHN0b3JhZ2VBc3luYy5zZXQoY29uc3RhbnRzLlNUT1JBR0VfS0VZLlVTRVJJTkZPLCAnJyksIHN0b3JhZ2VBc3luYy5zZXQoY29uc3RhbnRzLlNUT1JBR0VfS0VZLlVJRCwgJycpXSk7XG4gIH07IC8vIOmBjeWOhiBNRVRIT0RfTUFQX0xJU1TvvIzlr7nmr4/kuKogbWV0aG9kTWFwIOiwg+eUqCBkb0NyZWF0ZVJlcXVlc3RNZXRob2QobWV0aG9kTWFwKVxuXG5cbiAgQmFhUy5fY3JlYXRlUmVxdWVzdE1ldGhvZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWV0aG9kTWFwTGlzdCA9IEJhYVMuX2NvbmZpZy5NRVRIT0RfTUFQX0xJU1Q7XG4gICAgbWV0aG9kTWFwTGlzdC5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgIHV0aWxzLmRvQ3JlYXRlUmVxdWVzdE1ldGhvZCh2KTtcbiAgICB9KTtcbiAgfTsgLy8g5pq06Zyy5oyH5a6aIEJhYVMg5pa55rOVXG5cblxuICBCYWFTLmF1dGggPSByZXF1aXJlKCcuL2F1dGgnKTtcbiAgQmFhUy5Db250ZW50R3JvdXAgPSByZXF1aXJlKCcuL0NvbnRlbnRHcm91cCcpO1xuICBCYWFTLkZpbGUgPSByZXF1aXJlKCcuL0ZpbGUnKTtcbiAgQmFhUy5GaWxlQ2F0ZWdvcnkgPSByZXF1aXJlKCcuL0ZpbGVDYXRlZ29yeScpO1xuICBCYWFTLkdlb1BvaW50ID0gcmVxdWlyZSgnLi9HZW9Qb2ludCcpO1xuICBCYWFTLkdlb1BvbHlnb24gPSByZXF1aXJlKCcuL0dlb1BvbHlnb24nKTtcbiAgQmFhUy5pbnZva2VGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaW52b2tlRnVuY3Rpb24nKTtcbiAgQmFhUy5pbnZva2UgPSByZXF1aXJlKCcuL2ludm9rZUZ1bmN0aW9uJyk7XG4gIEJhYVMuUXVlcnkgPSByZXF1aXJlKCcuL1F1ZXJ5Jyk7XG4gIEJhYVMuc3RvcmFnZSA9IHN0b3JhZ2U7XG4gIEJhYVMuc3RvcmFnZUFzeW5jID0gc3RvcmFnZUFzeW5jO1xuICBCYWFTLlRhYmxlT2JqZWN0ID0gcmVxdWlyZSgnLi9UYWJsZU9iamVjdCcpO1xuICBCYWFTLlVzZXIgPSByZXF1aXJlKCcuL1VzZXInKTtcbiAgQmFhUy5PcmRlciA9IHJlcXVpcmUoJy4vT3JkZXInKTtcbiAgQmFhUy5nZXRBc3luY0pvYlJlc3VsdCA9IHJlcXVpcmUoJy4vZ2V0QXN5bmNKb2JSZXN1bHQnKTtcbiAgQmFhUy5nZXRTZXJ2ZXJEYXRlID0gcmVxdWlyZSgnLi9nZXRTZXJ2ZXJEYXRlJyk7IC8vIOWIneWni+WMliBCYWFTIOmAu+i+ke+8jOa3u+WKoOabtOWkmueahOaWueazleWIsCBCYWFTIOWvueixoVxufTsiLCJ2YXIgQmFhUyA9IHJlcXVpcmUoJy4vYmFhcycpO1xuXG52YXIgSEVycm9yID0gcmVxdWlyZSgnLi9IRXJyb3InKTtcblxudmFyIEFQSSA9IEJhYVMuX2NvbmZpZy5BUEk7XG4vKipcbiAqIOiwg+eUqOS6keWHveaVsFxuICogQG5hbWUgaW52b2tlXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBCYWFTXG4gKiBAcGFyYW0ge3N0cmluZ30gZnVuY3Rpb25OYW1lIOS6keWHveaVsOWQjeensFxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIOWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBbc3luY10g5piv5ZCm5ZCM5q2l6L+Q6KGMXG4gKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gKi9cblxudmFyIGludm9rZUZ1bmN0aW9uID0gZnVuY3Rpb24gaW52b2tlRnVuY3Rpb24oZnVuY3Rpb25OYW1lLCBwYXJhbXMpIHtcbiAgdmFyIHN5bmMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHRydWU7XG5cbiAgaWYgKCFmdW5jdGlvbk5hbWUpIHtcbiAgICB0aHJvdyBuZXcgSEVycm9yKDYwNSk7XG4gIH1cblxuICB2YXIgZGF0YSA9IHtcbiAgICBmdW5jdGlvbl9uYW1lOiBmdW5jdGlvbk5hbWUsXG4gICAgc3luYzogc3luY1xuICB9O1xuXG4gIGlmIChwYXJhbXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGRhdGEuZGF0YSA9IHBhcmFtcztcbiAgfVxuXG4gIHJldHVybiBCYWFTLl9iYWFzUmVxdWVzdCh7XG4gICAgdXJsOiBBUEkuQ0xPVURfRlVOQ1RJT04sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YTogZGF0YVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmRhdGE7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZva2VGdW5jdGlvbjsiLCIvLyDpu5jorqTlj5Ygd2luZG93LldlYlNvY2tldFxudmFyIF9XZWJTb2NrZXQgPSBudWxsO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LldlYlNvY2tldCkge1xuICBfV2ViU29ja2V0ID0gd2luZG93LldlYlNvY2tldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldEFQSUhvc3Q6IGZ1bmN0aW9uIGdldEFQSUhvc3QoKSB7XG4gICAgdmFyIEJhYVMgPSByZXF1aXJlKCcuL2JhYXMnKTtcblxuICAgIHJldHVybiBCYWFTLl9jb25maWcuQVBJX0hPU1QgfHwgXCJodHRwczovL1wiLmNvbmNhdChCYWFTLl9jb25maWcuQ0xJRU5UX0lELCBcIi5teW1pbmFwcC5jb21cIik7XG4gIH0sXG4gIGdldFdTSG9zdDogZnVuY3Rpb24gZ2V0V1NIb3N0KCkge1xuICAgIHZhciBCYWFTID0gcmVxdWlyZSgnLi9iYWFzJyk7XG5cbiAgICByZXR1cm4gQmFhUy5fY29uZmlnLldTX0hPU1QgfHwgXCJ3c3M6Ly9cIi5jb25jYXQoQmFhUy5fY29uZmlnLkNMSUVOVF9JRCwgXCIud3MubXltaW5hcHAuY29tXCIpO1xuICB9LFxuICBTREtfVFlQRTogJ2ZpbGUnLFxuICBDTElFTlRfUExBVEZPUk06ICdVTktOT1dOJyxcbiAgY2hlY2tMYXRlc3RWZXJzaW9uOiBmdW5jdGlvbiBjaGVja0xhdGVzdFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIFdlYlNvY2tldDogX1dlYlNvY2tldFxufTsiLCJ2YXIgQmFhUyA9IHJlcXVpcmUoJy4vYmFhcycpO1xuXG52YXIgc3RvcmFnZUtleVByZWZpeCA9ICdpZnhfYmFhc18nO1xuLyoqXG4gKiDmnKzlnLDlrZjlgqhcbiAqIEBuYW1lc3BhY2Ugc3RvcmFnZVxuICogQG1lbWJlcm9mIEJhYVNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLyoqXG4gICAqIOWtmOWFpeaVsOaNrlxuICAgKiBAbWVtYmVyb2YgQmFhUy5zdG9yYWdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkg6ZSuXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZSDlgLxcbiAgICovXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICBCYWFTLl9wb2x5ZmlsbC5zZXRTdG9yYWdlU3luYyhzdG9yYWdlS2V5UHJlZml4ICsga2V5LCB2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOivu+WPluaVsOaNrlxuICAgKiBAbWVtYmVyb2YgQmFhUy5zdG9yYWdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkg6ZSuXG4gICAqIEByZXR1cm4ge2FueX1cbiAgICovXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHJldHVybiBCYWFTLl9wb2x5ZmlsbC5nZXRTdG9yYWdlU3luYyhzdG9yYWdlS2V5UHJlZml4ICsga2V5KTtcbiAgfVxufTsiLCJ2YXIgQmFhUyA9IHJlcXVpcmUoJy4vYmFhcycpO1xuXG52YXIgc3RvcmFnZUtleVByZWZpeCA9ICdpZnhfYmFhc18nO1xuLyoqXG4gKiDmnKzlnLDlrZjlgqhcbiAqIEBuYW1lc3BhY2Ugc3RvcmFnZUFzeW5jXG4gKiBAbWVtYmVyb2YgQmFhU1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvKipcbiAgICog5a2Y5YWl5pWw5o2uXG4gICAqIEBtZW1iZXJvZiBCYWFTLnN0b3JhZ2VBc3luY1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IOmUrlxuICAgKiBAcGFyYW0ge1Byb21pc2U8YW55Pn0gdmFsdWUg5YC8XG4gICAqL1xuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIEJhYVMuX3BvbHlmaWxsLnNldFN0b3JhZ2VBc3luYyhzdG9yYWdlS2V5UHJlZml4ICsga2V5LCB2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOivu+WPluaVsOaNrlxuICAgKiBAbWVtYmVyb2YgQmFhUy5zdG9yYWdlQXN5bmNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSDplK5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIEJhYVMuX3BvbHlmaWxsLmdldFN0b3JhZ2VBc3luYyhzdG9yYWdlS2V5UHJlZml4ICsga2V5KTtcbiAgfVxufTsiLCJ2YXIgQmFhUyA9IHJlcXVpcmUoJy4vYmFhcycpO1xuXG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpOyAvLyBnZXQgdGhlIHVwbG9hZCBjb25maWcgZm9yIHVweXVuIGZyb20gc3NvXG5cblxudmFyIGdldFVwbG9hZEZpbGVDb25maWcgPSBmdW5jdGlvbiBnZXRVcGxvYWRGaWxlQ29uZmlnKGZpbGVOYW1lLCBtZXRhRGF0YSkge1xuICBtZXRhRGF0YS5maWxlbmFtZSA9IGZpbGVOYW1lO1xuICByZXR1cm4gQmFhUy5fYmFhc1JlcXVlc3Qoe1xuICAgIHVybDogQmFhUy5fcG9seWZpbGwuZ2V0QVBJSG9zdCgpLnJlcGxhY2UoL1xcLyQvLCAnJykgKyAnLycgKyBCYWFTLl9jb25maWcuQVBJLlVQTE9BRC5yZXBsYWNlKC9eXFwvLywgJycpLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IG1ldGFEYXRhXG4gIH0pO1xufTtcblxudmFyIGdldFVwbG9hZEhlYWRlcnMgPSBmdW5jdGlvbiBnZXRVcGxvYWRIZWFkZXJzKCkge1xuICByZXR1cm4gQmFhUy5nZXRBdXRoVG9rZW4oKS50aGVuKGZ1bmN0aW9uIChhdXRoVG9rZW4pIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ0F1dGhvcml6YXRpb24nOiBjb25zdGFudHMuVVBMT0FELkhFQURFUl9BVVRIX1ZBTFVFICsgYXV0aFRva2VuLFxuICAgICAgJ1gtSHlkcm9nZW4tQ2xpZW50LVZlcnNpb24nOiBCYWFTLl9jb25maWcuVkVSU0lPTixcbiAgICAgICdYLUh5ZHJvZ2VuLUNsaWVudC1QbGF0Zm9ybSc6IHV0aWxzLmdldFN5c1BsYXRmb3JtKCksXG4gICAgICAnWC1IeWRyb2dlbi1DbGllbnQtSUQnOiBCYWFTLl9jb25maWcuQ0xJRU5UX0lELFxuICAgICAgJ1VzZXItQWdlbnQnOiBjb25zdGFudHMuVVBMT0FELlVBXG4gICAgfTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0VXBsb2FkRmlsZUNvbmZpZzogZ2V0VXBsb2FkRmlsZUNvbmZpZyxcbiAgZ2V0VXBsb2FkSGVhZGVyczogZ2V0VXBsb2FkSGVhZGVyc1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldEJ5dGVkYW5jZUFwcE5hbWUoKSB7XG4gIGlmICh0eXBlb2YgdHQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gJyc7XG4gIHZhciBzeXNJbmZvID0gdHQuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgcmV0dXJuIHN5c0luZm8uYXBwTmFtZS50b0xvd2VyQ2FzZSgpO1xufTsiLCJ2YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG4vKlxuICogQHBhcmFtIHtudW1iZXJ9IGxpbWl0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZVRyaWdnZXJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldExpbWl0YXRpb25XaXRoRW5hYmxlVGlnZ2VyKGxpbWl0LCBlbmFibGVUcmlnZ2VyKSB7XG4gIC8vIOiuvue9ruS6hiBsaW1pdO+8jOebtOaOpei/lOWbnlxuICBpZiAobGltaXQgIT09IG51bGwgJiYgdHlwZW9mIGxpbWl0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBsaW1pdDtcbiAgfSAvLyDlpoLmnpzop6blj5Hop6blj5HlmajvvIzliJnpu5jorqTmt7vliqDpmZDliLZcblxuXG4gIGlmIChlbmFibGVUcmlnZ2VyKSB7XG4gICAgcmV0dXJuIGNvbnN0YW50cy5RVUVSWV9MSU1JVEFUSU9OX0RFRkFVTFQ7XG4gIH0gLy8g5LiN6Kem5Y+R5Y+R6Kem5Y+R5Zmo77yM5YiZ6buY6K6k5LiN6ZmQ5Yi2XG5cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufTsiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbnZhciBnZXRDdXJyZW50VXNlckluZm9VcmwgPSBmdW5jdGlvbiBnZXRDdXJyZW50VXNlckluZm9VcmwoQmFhUywgdWlkKSB7XG4gIHZhciBnZXRJZCA9IGZ1bmN0aW9uIGdldElkKCkge1xuICAgIGlmICh1aWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodWlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gQmFhUy5zdG9yYWdlQXN5bmMuZ2V0KGNvbnN0YW50cy5TVE9SQUdFX0tFWS5VSUQpO1xuICB9O1xuXG4gIHJldHVybiBnZXRJZCgpLnRoZW4oZnVuY3Rpb24gKGlkKSB7XG4gICAgcmV0dXJuIEJhYVMuX2NvbmZpZy5BUEkuVVNFUl9ERVRBSUwucmVwbGFjZSgvOnVzZXJJRC8sIGlkKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFJlc2VuZFBheWxvYWQoQmFhUywgcGF5bG9hZCwgdWlkKSB7XG4gIHJldHVybiBnZXRDdXJyZW50VXNlckluZm9VcmwoQmFhUywgdWlkKS50aGVuKGZ1bmN0aW9uIChjdXJyZW50VXNlckluZm9VcmwpIHtcbiAgICB2YXIgZ2V0VXJsOyAvLyDnoa7orqTpnIDopoHph43mlrDlj5Hotbfor7fmsYLnmoQgdXJsIOaYr+WQpui3nyB1aWQg5Yy56YWN77yI5Yy56YWN55qEIHVpZCDkvJrlnKggdXJsIOS4re+8iVxuXG4gICAgaWYgKHBheWxvYWQudXJsID09PSBjdXJyZW50VXNlckluZm9VcmwpIHtcbiAgICAgIGdldFVybCA9IGdldEN1cnJlbnRVc2VySW5mb1VybChCYWFTKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0VXJsID0gUHJvbWlzZS5yZXNvbHZlKHBheWxvYWQudXJsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0VXJsLnRoZW4oZnVuY3Rpb24gKHVybCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBwYXlsb2FkLCB7XG4gICAgICAgIHVybDogdXJsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59OyIsImZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIHN0b3JhZ2VBc3luYyA9IHJlcXVpcmUoJy4uL3N0b3JhZ2VBc3luYycpO1xuXG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbnZhciBCYWFTID0gcmVxdWlyZSgnLi4vYmFhcycpO1xuXG52YXIgSEVycm9yID0gcmVxdWlyZSgnLi4vSEVycm9yJyk7XG5cbnZhciB0aWNrZXRSZXBvcnRUaHJvdHRsZSA9IHJlcXVpcmUoJy4vdGlja2V0UmVwb3J0VGhyb3R0bGUnKTtcblxudmFyIGxvZyA9IHJlcXVpcmUoJy4vbG9nJyk7IC8vIOWinuWKoCBpbmNsdWRlcyBwb2x5ZmlsbO+8jOmBv+WFjeS9jueJiOacrOeahOezu+e7n+aKpemUmVxuLy8gY29waWVkIGZyb20gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvaW5jbHVkZXMjUG9seWZpbGxcblxuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5pbmNsdWRlcykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCAnaW5jbHVkZXMnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHNlYXJjaEVsZW1lbnQsIGZyb21JbmRleCkge1xuICAgICAgaWYgKHRoaXMgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInRoaXNcIiBpcyBudWxsIG9yIG5vdCBkZWZpbmVkJyk7XG4gICAgICB9IC8vIDEuIExldCBPIGJlID8gVG9PYmplY3QodGhpcyB2YWx1ZSkuXG5cblxuICAgICAgdmFyIG8gPSBPYmplY3QodGhpcyk7IC8vIDIuIExldCBsZW4gYmUgPyBUb0xlbmd0aCg/IEdldChPLCBcImxlbmd0aFwiKSkuXG5cbiAgICAgIHZhciBsZW4gPSBvLmxlbmd0aCA+Pj4gMDsgLy8gMy4gSWYgbGVuIGlzIDAsIHJldHVybiBmYWxzZS5cblxuICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IC8vIDQuIExldCBuIGJlID8gVG9JbnRlZ2VyKGZyb21JbmRleCkuXG4gICAgICAvLyAgICAoSWYgZnJvbUluZGV4IGlzIHVuZGVmaW5lZCwgdGhpcyBzdGVwIHByb2R1Y2VzIHRoZSB2YWx1ZSAwLilcblxuXG4gICAgICB2YXIgbiA9IGZyb21JbmRleCB8IDA7IC8vIDUuIElmIG4g4omlIDAsIHRoZW5cbiAgICAgIC8vICBhLiBMZXQgayBiZSBuLlxuICAgICAgLy8gNi4gRWxzZSBuIDwgMCxcbiAgICAgIC8vICBhLiBMZXQgayBiZSBsZW4gKyBuLlxuICAgICAgLy8gIGIuIElmIGsgPCAwLCBsZXQgayBiZSAwLlxuXG4gICAgICB2YXIgayA9IE1hdGgubWF4KG4gPj0gMCA/IG4gOiBsZW4gLSBNYXRoLmFicyhuKSwgMCk7XG5cbiAgICAgIGZ1bmN0aW9uIHNhbWVWYWx1ZVplcm8oeCwgeSkge1xuICAgICAgICByZXR1cm4geCA9PT0geSB8fCB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT09ICdudW1iZXInICYmIGlzTmFOKHgpICYmIGlzTmFOKHkpO1xuICAgICAgfSAvLyA3LiBSZXBlYXQsIHdoaWxlIGsgPCBsZW5cblxuXG4gICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICAvLyBhLiBMZXQgZWxlbWVudEsgYmUgdGhlIHJlc3VsdCBvZiA/IEdldChPLCAhIFRvU3RyaW5nKGspKS5cbiAgICAgICAgLy8gYi4gSWYgU2FtZVZhbHVlWmVybyhzZWFyY2hFbGVtZW50LCBlbGVtZW50SykgaXMgdHJ1ZSwgcmV0dXJuIHRydWUuXG4gICAgICAgIGlmIChzYW1lVmFsdWVaZXJvKG9ba10sIHNlYXJjaEVsZW1lbnQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gLy8gYy4gSW5jcmVhc2UgayBieSAxLlxuXG5cbiAgICAgICAgaysrO1xuICAgICAgfSAvLyA4LiBSZXR1cm4gZmFsc2VcblxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICog6I635Y+W57O757ufIFBsYXRmb3JtIOS/oeaBr1xuICogQHByaXZhdGVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5cbnZhciBnZXRTeXNQbGF0Zm9ybSA9IGZ1bmN0aW9uIGdldFN5c1BsYXRmb3JtKCkge1xuICB2YXIgcGxhdGZvcm0gPSAnVU5LTk9XTic7XG5cbiAgdHJ5IHtcbiAgICB2YXIgcmVzID0gQmFhUy5fcG9seWZpbGwuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcblxuICAgIHBsYXRmb3JtID0gcmVzLnBsYXRmb3JtO1xuICB9IGNhdGNoIChlKSB7Ly8gcGFzcyBmb3Igbm93XG4gIH1cblxuICByZXR1cm4gcGxhdGZvcm07XG59O1xuLyoqXG4gKiDovazmjaIgQVBJIOWPguaVsFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge1N0cmluZ30gdXJsICAgIEFQSSBVUkxcbiAqIEBwYXJhbSAge09iamVjdH0gcGFyYW1zIEFQSSDlj4LmlbBcbiAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgIOi9rOaNouWPguaVsOWQjueahCBBUEkgVVJMXG4gKi9cblxuXG52YXIgZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KHVybCwgcGFyYW1zKSB7XG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChrZXkpIHtcbiAgICAvLyAxLiDlhYjmm7/mjaIgcXVlcnlTdHJpbmcg5Lit55qE5Y+C5pWwXG4gICAgdmFyIHJlZ0ZvclF1ZXJ5U3RyaW5nID0gbmV3IFJlZ0V4cCgnKCY/KScgKyBrZXkgKyAnPTonICsga2V5LCAnZycpO1xuICAgIHZhciB2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSk7XG5cbiAgICBpZiAodmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB1cmwgPSB1cmwucmVwbGFjZShyZWdGb3JRdWVyeVN0cmluZywgZnVuY3Rpb24gKG1hdGNoLCBwMSkge1xuICAgICAgICByZXR1cm4gcDEgKyBrZXkgKyAnPScgKyB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSB1cmwucmVwbGFjZShyZWdGb3JRdWVyeVN0cmluZywgJycpO1xuICAgIH0gLy8gMi4g5pu/5o2iIHBhdGhuYW1lIOS4reeahOWPguaVsFxuXG5cbiAgICB2YXIgcmVnRm9yUGF0aG5hbWUgPSBuZXcgUmVnRXhwKCc6JyArIGtleSwgJ2cnKTtcbiAgICB1cmwgPSB1cmwucmVwbGFjZShyZWdGb3JQYXRobmFtZSwgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSk7XG4gIH07XG5cbiAgZm9yICh2YXIga2V5IGluIHBhcmFtcykge1xuICAgIF9sb29wKGtleSk7XG4gIH1cblxuICByZXR1cm4gdXJsLnJlcGxhY2UoLyhbXjpdKVxcL1xcLy9nLCBmdW5jdGlvbiAobSwgbTEpIHtcbiAgICByZXR1cm4gbTEgKyAnLyc7XG4gIH0pO1xufTtcblxudmFyIGdldEZpbGVOYW1lRnJvbVBhdGggPSBmdW5jdGlvbiBnZXRGaWxlTmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgdmFyIGluZGV4ID0gcGF0aC5sYXN0SW5kZXhPZignLycpO1xuICByZXR1cm4gcGF0aC5zbGljZShpbmRleCArIDEpO1xufTtcbi8qKlxuICog5a+5IFJlZ0V4cCDnsbvlnovnmoTlj5jph4/op6PmnpDlh7rkuI3lkKvlt6blj7PmlpzmnaDlkowgZmxhZyDnmoTmraPliJnlrZfnrKbkuLLlkowgZmxhZ3NcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gIHtSZWdFeHB9IHJlZ0V4cFxuICogQHJldHVybiB7QXJyYXl9IOWMheWQq+ato+WImeWtl+espuS4suWSjCBmbGFnc1xuICovXG5cblxudmFyIHBhcnNlUmVnRXhwID0gZnVuY3Rpb24gcGFyc2VSZWdFeHAocmVnRXhwKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIHJlZ0V4cFN0cmluZyA9IHJlZ0V4cC50b1N0cmluZygpO1xuICB2YXIgbGFzdEluZGV4ID0gcmVnRXhwU3RyaW5nLmxhc3RJbmRleE9mKCcvJyk7XG4gIHJlc3VsdC5wdXNoKHJlZ0V4cFN0cmluZy5zdWJzdHJpbmcoMSwgbGFzdEluZGV4KSk7XG5cbiAgaWYgKGxhc3RJbmRleCAhPT0gcmVnRXhwU3RyaW5nLmxlbmd0aCAtIDEpIHtcbiAgICByZXN1bHQucHVzaChyZWdFeHBTdHJpbmcuc3Vic3RyaW5nKGxhc3RJbmRleCArIDEpKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuLyoqXG4gKiDlsIbmn6Xor6Llj4LmlbAgKD9jYXRlZ29yeUlEPXh4eCkg5pu/5o2i5Li65pyN5Yqh56uv5Y+v5o6l5Y+X55qE5qC85byPICg/Y2F0ZWdvcnlfaWQ9eHh4KSBlZy4gY2F0ZWdvcnlJRCA9PiBjYXRlZ29yeV9pZFxuICogQHByaXZhdGVcbiAqL1xuXG5cbnZhciByZXBsYWNlUXVlcnlQYXJhbXMgPSBmdW5jdGlvbiByZXBsYWNlUXVlcnlQYXJhbXMoKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgcmVxdWVzdFBhcmFtc01hcCA9IEJhYVMuX2NvbmZpZy5SRVFVRVNUX1BBUkFNU19NQVA7XG5cbiAgdmFyIGNvcGllZFBhcmFtcyA9IF9leHRlbmRzKHt9LCBwYXJhbXMpO1xuXG4gIE9iamVjdC5rZXlzKHBhcmFtcykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBPYmplY3Qua2V5cyhyZXF1ZXN0UGFyYW1zTWFwKS5tYXAoZnVuY3Rpb24gKG1hcEtleSkge1xuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKG1hcEtleSkpIHtcbiAgICAgICAgdmFyIG5ld0tleSA9IGtleS5yZXBsYWNlKG1hcEtleSwgcmVxdWVzdFBhcmFtc01hcFttYXBLZXldKTtcbiAgICAgICAgZGVsZXRlIGNvcGllZFBhcmFtc1trZXldO1xuICAgICAgICBjb3BpZWRQYXJhbXNbbmV3S2V5XSA9IHBhcmFtc1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGNvcGllZFBhcmFtcztcbn07XG5cbnZhciBleHRyYWN0RXJyb3JNc2cgPSBmdW5jdGlvbiBleHRyYWN0RXJyb3JNc2cocmVzKSB7XG4gIHZhciBlcnJvck1zZyA9ICcnO1xuXG4gIGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gNDA0KSB7XG4gICAgZXJyb3JNc2cgPSAnbm90IGZvdW5kJztcbiAgfSBlbHNlIGlmIChyZXMuZGF0YS5lcnJvcl9tc2cpIHtcbiAgICBlcnJvck1zZyA9IHJlcy5kYXRhLmVycm9yX21zZztcbiAgfSBlbHNlIGlmIChyZXMuZGF0YS5tZXNzYWdlKSB7XG4gICAgZXJyb3JNc2cgPSByZXMuZGF0YS5tZXNzYWdlO1xuICB9XG5cbiAgcmV0dXJuIGVycm9yTXNnO1xufTtcblxudmFyIGlzU3RyaW5nID0gZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufTtcblxudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGlzT2JqZWN0ID0gZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSBfdHlwZW9mKHZhbHVlKTtcblxuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlID09ICdvYmplY3QnO1xufTtcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gX3R5cGVvZih2YWx1ZSk7XG5cbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZSA9PSAnZnVuY3Rpb24nO1xufTtcblxudmFyIGV4dGVuZCA9IGZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbn07IC8vIOebruWJjeS7heaUr+aMgeWvueixoeaIluaVsOWtl+eahOaLt+i0nVxuXG5cbnZhciBjbG9uZURlZXAgPSBmdW5jdGlvbiBjbG9uZURlZXAoc291cmNlKSB7XG4gIGlmIChzb3VyY2UgPT09IHVuZGVmaW5lZCB8fCBzb3VyY2UgPT09IG51bGwpIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgdGFyZ2V0ID0gaXNBcnJheShzb3VyY2UpID8gW10gOiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihzb3VyY2UpKTtcblxuICBmb3IgKHZhciBrZXlzIGluIHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5cykpIHtcbiAgICAgIGlmIChzb3VyY2Vba2V5c10gJiYgX3R5cGVvZihzb3VyY2Vba2V5c10pID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0YXJnZXRba2V5c10gPSBpc0FycmF5KHNvdXJjZVtrZXlzXSkgPyBbXSA6IHt9O1xuICAgICAgICB0YXJnZXRba2V5c10gPSBjbG9uZURlZXAoc291cmNlW2tleXNdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFtrZXlzXSA9IHNvdXJjZVtrZXlzXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcbi8qKlxuICogc2Vzc2lvbiDmmK/lkKblt7Lnu4/ov4fmnJ/vvIzoi6XkuI3lrZjlnKggRVhQSVJFU19BVCDnvJPlrZjvvIzliJnlvZPlgZrlt7Lov4fmnJ9cbiAqIEBwcml2YXRlXG4gKiBAcmV0dXJuIHtib29sZWFufSBleHBpcmVkXG4gKi9cblxuXG5mdW5jdGlvbiBpc1Nlc3Npb25FeHBpcmVkKCkge1xuICByZXR1cm4gc3RvcmFnZUFzeW5jLmdldChjb25zdGFudHMuU1RPUkFHRV9LRVkuRVhQSVJFU19BVCkudGhlbihmdW5jdGlvbiAoZXhwaXJlZF9hdCkge1xuICAgIHJldHVybiBEYXRlLm5vdygpIC8gMTAwMCA+PSAoZXhwaXJlZF9hdCB8fCAwKTtcbiAgfSk7XG59XG4vKipcbiAqIOaKiiBVUkwg5Lit55qE5Y+C5pWw5Y2g5L2N5pu/5o2i5Li655yf5a6e5pWw5o2u77yM5ZCM5pe25bCG6L+Z5Lqb5pWw5o2u5LuOIHBhcmFtcyDkuK3np7vpmaTvvIwgcGFyYW1zIOeahOWJqeS9meWPguaVsOS8oOe7mSBkYXRhIGVnLiB4eHgvOnRhYmVsSUQveHh4ID0+IHh4eC8xMDAxL3h4eFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge09iamVjdH0gcGFyYW1zIOWPguaVsOWvueixoSwg5YyF5ZCr5Lyg57uZIHVybCDnmoTlj4LmlbDvvIzkuZ/ljIXlkKvkvKDnu5kgZGF0YSDnmoTlj4LmlbBcbiAqL1xuXG5cbnZhciBleGNsdWRlUGFyYW1zID0gZnVuY3Rpb24gZXhjbHVkZVBhcmFtcyhVUkwsIHBhcmFtcykge1xuICBVUkwucmVwbGFjZSgvOihcXHcqKS9nLCBmdW5jdGlvbiAobWF0Y2gsIG0xKSB7XG4gICAgaWYgKHBhcmFtc1ttMV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVsZXRlIHBhcmFtc1ttMV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHBhcmFtcztcbn07XG4vKipcbiAqIOagueaNriBtZXRob2RNYXAg5Yib5bu65a+55bqU55qEIEJhYVMgTWV0aG9kXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7T2JqZWN0fSBtZXRob2RNYXAg5oyJ54Wn5oyH5a6a5qC85byP6YWN572u5aW955qE5pa55rOV6YWN572u5pig5bCE6KGoXG4gKi9cblxuXG52YXIgZG9DcmVhdGVSZXF1ZXN0TWV0aG9kID0gZnVuY3Rpb24gZG9DcmVhdGVSZXF1ZXN0TWV0aG9kKG1ldGhvZE1hcCkge1xuICBmb3IgKHZhciBrIGluIG1ldGhvZE1hcCkge1xuICAgIGlmIChtZXRob2RNYXAuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIEJhYVNba10gPSBmdW5jdGlvbiAoaykge1xuICAgICAgICB2YXIgbWV0aG9kSXRlbSA9IG1ldGhvZE1hcFtrXTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmplY3RzKSB7XG4gICAgICAgICAgdmFyIG5ld09iamVjdHMgPSBjbG9uZURlZXAob2JqZWN0cyk7XG4gICAgICAgICAgdmFyIG1ldGhvZCA9IG1ldGhvZEl0ZW0ubWV0aG9kIHx8ICdHRVQnO1xuXG4gICAgICAgICAgaWYgKG1ldGhvZEl0ZW0uZGVmYXVsdFBhcmFtcykge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRQYXJhbXNDb3B5ID0gY2xvbmVEZWVwKG1ldGhvZEl0ZW0uZGVmYXVsdFBhcmFtcyk7XG4gICAgICAgICAgICBuZXdPYmplY3RzID0gX2V4dGVuZHMoZGVmYXVsdFBhcmFtc0NvcHksIG5ld09iamVjdHMpO1xuICAgICAgICAgIH0gLy8g5pu/5o2iIHVybCDkuK3nmoTlj5jph4/kuLrnlKjmiLfovpPlhaXnmoTmlbDmja7vvIzlpoIgdGFibGVJRCwgcmVjb3JkSURcblxuXG4gICAgICAgICAgdmFyIHVybCA9IGZvcm1hdChtZXRob2RJdGVtLnVybCwgbmV3T2JqZWN0cyk7XG4gICAgICAgICAgdmFyIGRhdGEgPSB7fTtcblxuICAgICAgICAgIGlmIChuZXdPYmplY3RzLmRhdGEpIHtcbiAgICAgICAgICAgIC8vIOWtmOWcqCBkYXRhIOWxnuaAp+eahOivt+axguWPguaVsO+8jOWPquaciSBkYXRhIOmDqOWIhuS9nOS4uuivt+axguaVsOaNruWPkemAgeWIsOWQjuerr+aOpeWPo1xuICAgICAgICAgICAgZGF0YSA9IG5ld09iamVjdHMuZGF0YTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5LuO55So5oi36L6T5YWl55qE5pWw5o2u5Lit77yM5YmU6ZmkIHRhYmxlSUQsIHJlY29yZElEIOetieeUqOS6jiB1cmwg55qE5pWw5o2uXG4gICAgICAgICAgICBkYXRhID0gZXhjbHVkZVBhcmFtcyhtZXRob2RJdGVtLnVybCwgbmV3T2JqZWN0cyk7IC8vIOWwhueUqOaIt+i+k+WFpeeahOaVsOaNruS4re+8jOmDqOWIhuWPmOmHj+WQjeabv+aNouS4uuWQjuerr+WPr+aOpeWPl+eahOWQjeWtl++8jOWmgiBjYXRlZ29yeUlEIOabv+aNouS4uiBjYXRlZ29yeV9pZFxuXG4gICAgICAgICAgICBkYXRhID0gcmVwbGFjZVF1ZXJ5UGFyYW1zKGRhdGEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBCYWFTLl9iYWFzUmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfShrKTtcbiAgICB9XG4gIH1cbn07XG4vKipcbiAqIOiuvue9riBCYWFTLnJlcXVlc3Qg6K+35rGC5aS0XG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7T2JqZWN0fSBoZWFkZXIg6Ieq5a6a5LmJ6K+35rGC5aS0XG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICDmianlsZXlkI7nmoTor7fmsYJcbiAqL1xuXG5cbnZhciBtZXJnZVJlcXVlc3RIZWFkZXIgPSBmdW5jdGlvbiBtZXJnZVJlcXVlc3RIZWFkZXIoaGVhZGVyKSB7XG4gIHZhciBleHRlbmRIZWFkZXIgPSB7XG4gICAgJ1gtSHlkcm9nZW4tQ2xpZW50LUlEJzogQmFhUy5fY29uZmlnLkNMSUVOVF9JRCxcbiAgICAnWC1IeWRyb2dlbi1DbGllbnQtVmVyc2lvbic6IEJhYVMuX2NvbmZpZy5WRVJTSU9OLFxuICAgICdYLUh5ZHJvZ2VuLUNsaWVudC1QbGF0Zm9ybSc6IEJhYVMuX3BvbHlmaWxsLkNMSUVOVF9QTEFURk9STSxcbiAgICAnWC1IeWRyb2dlbi1DbGllbnQtU0RLLVR5cGUnOiBCYWFTLl9wb2x5ZmlsbC5TREtfVFlQRVxuICB9O1xuXG4gIGlmIChCYWFTLl9jb25maWcuRU5WKSB7XG4gICAgaGVhZGVyWydYLUh5ZHJvZ2VuLUVudi1JRCddID0gQmFhUy5fY29uZmlnLkVOVjtcbiAgfVxuXG4gIHJldHVybiBCYWFTLmdldEF1dGhUb2tlbigpLnRoZW4oZnVuY3Rpb24gKGF1dGhUb2tlbikge1xuICAgIGlmIChhdXRoVG9rZW4pIHtcbiAgICAgIGV4dGVuZEhlYWRlclsnQXV0aG9yaXphdGlvbiddID0gQmFhUy5fY29uZmlnLkFVVEhfUFJFRklYICsgJyAnICsgYXV0aFRva2VuO1xuICAgIH1cblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgaGVhZGVyIHx8IHt9LCBleHRlbmRIZWFkZXIpO1xuICB9KTtcbn07XG4vKipcbiAqIOWkhOeQhiByZXF1ZXN0LnRoZW4g5Zue6LCD5Lit5Ye6546wIDQweCwgNTB4IOeahOaDheWGtVxuICogQHByaXZhdGVcbiAqIEBwYXJhbSByZXNcbiAqIEByZXR1cm4geyp9XG4gKi9cblxuXG52YXIgdmFsaWRhdGVTdGF0dXNDb2RlID0gZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXNDb2RlKHJlcykge1xuICB2YXIgc3RhdHVzID0gcGFyc2VJbnQocmVzLnN0YXR1cyB8fCByZXMuc3RhdHVzQ29kZSk7XG5cbiAgaWYgKHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwKSB7XG4gICAgcmV0dXJuIHJlcztcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgSEVycm9yKHN0YXR1cywgZXh0cmFjdEVycm9yTXNnKHJlcykpO1xuICB9XG59O1xuLyoqXG4gKiDlr7nkuo7kuIDkuKrov5Tlm54gcHJvbWlzZSDnmoTlh73mlbDvvIxyYXRlTGltaXQg5Y+v5Lul5ZCI5bm25ZCM5LiA5pe26Ze05aSa5qyh6LCD55So5Li65Y2V5qyh6LCD55SoXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIGZuXG4gKiBAcmV0dXJuIHtmdW5jdGlvbigpOiAqfVxuICovXG5cblxudmFyIHJhdGVMaW1pdCA9IGZ1bmN0aW9uIHJhdGVMaW1pdChmbikge1xuICB2YXIgcHJvbWlzZSA9IG51bGw7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICBwcm9taXNlID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcbn07XG5cbnZhciBmblVuc3VwcG9ydGVkSGFuZGxlciA9IGZ1bmN0aW9uIGZuVW5zdXBwb3J0ZWRIYW5kbGVyKCkge1xuICB0aHJvdyBuZXcgSEVycm9yKDYxMSk7XG59O1xuLyoqXG4gKiDlr7nmr5TniYjmnKzlj7dcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvblN0cjFcbiAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJzaW9uU3RyMlxuICogQHJldHVybiB7bnVtYmVyfVxuICogQGRlc2NyaXB0aW9uIOiLpSB2ZXJzaW9uU3RyMSDlpKfkuo4gdmVyc2lvblN0cjLvvIzov5Tlm54gMe+8jOWwj+S6jiDov5Tlm54gLTHvvIznm7jnrYnov5Tlm54gMOOAglxuICog5rOo5oSP6K+l5Ye95pWw5bCG5Lya5b+955WlIGEobHBoYSnjgIFiKGV0YSkg562J5ZCO57yALOWmgiB2Mi4wLjBhIOS8muiiq+W9k+WBmiAyLjAuMCDlpITnkIZcbiAqL1xuXG5cbnZhciBjb21wYXJlVmVyc2lvbiA9IGZ1bmN0aW9uIGNvbXBhcmVWZXJzaW9uKHZlcnNpb25TdHIxLCB2ZXJzaW9uU3RyMikge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgdmVyc2lvblN0cjEgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2ZXJzaW9uU3RyMiAhPT0gJ3N0cmluZycpIHJldHVybiAwOyAvLyB2MS4xID09PT4gMS4xXG4gICAgLy8gdmVyMi4yID09PT4gMi4yXG5cbiAgICB2ZXJzaW9uU3RyMSA9IHZlcnNpb25TdHIxLnJlcGxhY2UoL15bXjAtOV0vLCAnJyk7XG4gICAgdmVyc2lvblN0cjIgPSB2ZXJzaW9uU3RyMi5yZXBsYWNlKC9eW14wLTldLywgJycpO1xuICAgIHZhciB2ZXJzaW9uQXJyYXkxID0gdmVyc2lvblN0cjEuc3BsaXQoJy4nKTtcbiAgICB2YXIgdmVyc2lvbkFycmF5MiA9IHZlcnNpb25TdHIyLnNwbGl0KCcuJyk7XG4gICAgdmFyIGxlbiA9IE1hdGgubWF4KHZlcnNpb25BcnJheTEubGVuZ3RoLCB2ZXJzaW9uQXJyYXkyLmxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgbnVtMSA9IHZlcnNpb25BcnJheTFbaV0gPyBwYXJzZUludCh2ZXJzaW9uQXJyYXkxW2ldKSA6IDA7XG4gICAgICB2YXIgbnVtMiA9IHZlcnNpb25BcnJheTJbaV0gPyBwYXJzZUludCh2ZXJzaW9uQXJyYXkyW2ldKSA6IDA7XG5cbiAgICAgIGlmIChudW0xID4gbnVtMikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSBpZiAobnVtMSA8IG51bTIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG5cbnZhciBtYWtlUmVwb3J0VGlja2V0UGFyYW0gPSBmdW5jdGlvbiBtYWtlUmVwb3J0VGlja2V0UGFyYW0oZm9ybUlEKSB7XG4gIGlmICghZm9ybUlEKSB7XG4gICAgdGhyb3cgbmV3IEhFcnJvcig2MDUpO1xuICB9XG5cbiAgdmFyIHBhcmFtc09iaiA9IHt9O1xuICBwYXJhbXNPYmpbJ3N1Ym1pc3Npb25fdHlwZSddID0gJ2Zvcm1faWQnO1xuICBwYXJhbXNPYmpbJ3N1Ym1pc3Npb25fdmFsdWUnXSA9IGZvcm1JRDtcbiAgcmV0dXJuIHBhcmFtc09iajtcbn07XG5cbnZhciBnZXRVcGRhdGVVc2VyUHJvZmlsZVBhcmFtID0gZnVuY3Rpb24gZ2V0VXBkYXRlVXNlclByb2ZpbGVQYXJhbSh2YWx1ZSkge1xuICB2YXIgcmVzdWx0O1xuICBPYmplY3Qua2V5cyhjb25zdGFudHMuVVBEQVRFX1VTRVJQUk9GSUxFX1ZBTFVFKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAodmFsdWUgPT09IGNvbnN0YW50cy5VUERBVEVfVVNFUlBST0ZJTEVfVkFMVUVba2V5XSkge1xuICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoIXJlc3VsdCkge1xuICAgIHJlc3VsdCA9IGNvbnN0YW50cy5VUERBVEVfVVNFUlBST0ZJTEVfVkFMVUUuU0VUTlg7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIGdldEV4cGlyZWRBdCA9IGZ1bmN0aW9uIGdldEV4cGlyZWRBdChleHBpcmVzSW4pIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApICsgZXhwaXJlc0luIC0gMzA7XG59O1xuXG52YXIgZmxhdEF1dGhSZXNwb25zZSA9IGZ1bmN0aW9uIGZsYXRBdXRoUmVzcG9uc2UocmVzKSB7XG4gIHZhciB1c2VySW5mbyA9IHJlcy5kYXRhLnVzZXJfaW5mbztcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIHJlcywge1xuICAgIGRhdGE6IF9vYmplY3RTcHJlYWQoe30sIHVzZXJJbmZvLCByZXMuZGF0YSwge1xuICAgICAgdXNlcl9pZDogdXNlckluZm8uaWQsXG4gICAgICBleHBpcmVkX2F0OiBnZXRFeHBpcmVkQXQocmVzLmRhdGEuZXhwaXJlc19pbiksXG4gICAgICBhbGlwYXlfdXNlcl9pZDogdXNlckluZm8uX3Byb3ZpZGVyICYmIHVzZXJJbmZvLl9wcm92aWRlci5hbGlwYXkgJiYgdXNlckluZm8uX3Byb3ZpZGVyLmFsaXBheS51c2VyX2lkXG4gICAgfSlcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWVyZ2VSZXF1ZXN0SGVhZGVyOiBtZXJnZVJlcXVlc3RIZWFkZXIsXG4gIGxvZzogbG9nLmxvZyxcbiAgc2V0TG9nTGV2ZWw6IGxvZy5zZXRMb2dMZXZlbCxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGdldFN5c1BsYXRmb3JtOiBnZXRTeXNQbGF0Zm9ybSxcbiAgZ2V0RmlsZU5hbWVGcm9tUGF0aDogZ2V0RmlsZU5hbWVGcm9tUGF0aCxcbiAgcGFyc2VSZWdFeHA6IHBhcnNlUmVnRXhwLFxuICByZXBsYWNlUXVlcnlQYXJhbXM6IHJlcGxhY2VRdWVyeVBhcmFtcyxcbiAgZXh0cmFjdEVycm9yTXNnOiBleHRyYWN0RXJyb3JNc2csXG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBjbG9uZURlZXA6IGNsb25lRGVlcCxcbiAgaXNTZXNzaW9uRXhwaXJlZDogaXNTZXNzaW9uRXhwaXJlZCxcbiAgZXhjbHVkZVBhcmFtczogZXhjbHVkZVBhcmFtcyxcbiAgZG9DcmVhdGVSZXF1ZXN0TWV0aG9kOiBkb0NyZWF0ZVJlcXVlc3RNZXRob2QsXG4gIHZhbGlkYXRlU3RhdHVzQ29kZTogdmFsaWRhdGVTdGF0dXNDb2RlLFxuICByYXRlTGltaXQ6IHJhdGVMaW1pdCxcbiAgZm5VbnN1cHBvcnRlZEhhbmRsZXI6IGZuVW5zdXBwb3J0ZWRIYW5kbGVyLFxuICBjb21wYXJlVmVyc2lvbjogY29tcGFyZVZlcnNpb24sXG4gIG1ha2VSZXBvcnRUaWNrZXRQYXJhbTogbWFrZVJlcG9ydFRpY2tldFBhcmFtLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgZ2V0VXBkYXRlVXNlclByb2ZpbGVQYXJhbTogZ2V0VXBkYXRlVXNlclByb2ZpbGVQYXJhbSxcbiAgdGlja2V0UmVwb3J0VGhyb3R0bGU6IHRpY2tldFJlcG9ydFRocm90dGxlLFxuICBmbGF0QXV0aFJlc3BvbnNlOiBmbGF0QXV0aFJlc3BvbnNlLFxuICBnZXRFeHBpcmVkQXQ6IGdldEV4cGlyZWRBdCxcbiAgZ2V0TGltaXRhdGlvbldpdGhFbmFibGVUaWdnZXI6IHJlcXVpcmUoJy4vZ2V0TGltaXRhdGlvbldpdGhFbmFibGVUaWdnZXInKSxcbiAgZ2V0UmVzZW5kUGF5bG9hZDogcmVxdWlyZSgnLi9nZXRSZXNlbmRQYXlsb2FkJyksXG4gIHdpdGhSZXRyeTogcmVxdWlyZSgnLi93aXRoUmV0cnknKSxcbiAgZ2V0Qnl0ZWRhbmNlQXBwTmFtZTogcmVxdWlyZSgnLi9nZXRCeXRlZGFuY2VBcHBOYW1lJylcbn07IiwidmFyIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG52YXIgY29uc29sZUxvZ0xldmVsID0gcmVxdWlyZSgnY29uc29sZS1sb2ctbGV2ZWwnKTtcblxudmFyIGNyZWF0ZUxvZ2dlciA9IGZ1bmN0aW9uIGNyZWF0ZUxvZ2dlcihsZXZlbCkge1xuICByZXR1cm4gY29uc29sZUxvZ0xldmVsKHtcbiAgICBsZXZlbDogbGV2ZWxcbiAgfSk7XG59O1xuXG52YXIgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKGNvbnN0YW50cy5MT0dfTEVWRUwuRVJST1IpO1xuXG52YXIgc2V0TG9nTGV2ZWwgPSBmdW5jdGlvbiBzZXRMb2dMZXZlbChsZXZlbCkge1xuICBPYmplY3Qua2V5cyhjb25zdGFudHMuTE9HX0xFVkVMKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoY29uc3RhbnRzLkxPR19MRVZFTFtrZXldID09PSBsZXZlbCkge1xuICAgICAgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKGxldmVsKTtcbiAgICB9XG4gIH0pO1xufTtcbi8qKlxuICog5pel5b+X6K6w5b2VXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7U3RyaW5nfSBsZXZlbCDnuqfliKtcbiAqIEBwYXJhbSAge1N0cmluZ30gbXNnIOaXpeW/l+S/oeaBr1xuICovXG5cblxudmFyIGxvZyA9IGZ1bmN0aW9uIGxvZyhsZXZlbCwgdGV4dCkge1xuICBsb2dnZXJbbGV2ZWxdICYmIGxvZ2dlcltsZXZlbF0odGV4dCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbG9nOiBsb2csXG4gIHNldExvZ0xldmVsOiBzZXRMb2dMZXZlbFxufTsiLCJ2YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbnZhciBzdG9yYWdlQXN5bmMgPSByZXF1aXJlKCcuLi9zdG9yYWdlQXN5bmMnKTtcblxudmFyIGxvZyA9IHJlcXVpcmUoJy4vbG9nJykubG9nO1xuXG52YXIgaW5pdFJlcG9ydFRpY2tldEludm9rZVJlY29yZCA9IGZ1bmN0aW9uIGluaXRSZXBvcnRUaWNrZXRJbnZva2VSZWNvcmQoKSB7XG4gIHJldHVybiB7XG4gICAgaW52b2tlVGltZXM6IDEsXG4gICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gIH07XG59O1xuXG52YXIgaXNJbnZhbGlkSW52b2tlUmVjb3JkID0gZnVuY3Rpb24gaXNJbnZhbGlkSW52b2tlUmVjb3JkKGludm9rZVJlY29yZCkge1xuICByZXR1cm4gaXNOYU4oaW52b2tlUmVjb3JkLmludm9rZVRpbWVzKSB8fCBpc05hTihpbnZva2VSZWNvcmQudGltZXN0YW1wKTtcbn07XG5cbnZhciBsYXN0SW52b2tlVGltZTtcblxudmFyIHRpY2tldFJlcG9ydFRocm90dGxlID0gZnVuY3Rpb24gdGlja2V0UmVwb3J0VGhyb3R0bGUodGlja2V0UmVwb3J0Rm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChmb3JtSUQpIHtcbiAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge30sXG4gICAgICAgIF9yZWYkZW5hYmxlVGhyb3R0bGUgPSBfcmVmLmVuYWJsZVRocm90dGxlLFxuICAgICAgICBlbmFibGVUaHJvdHRsZSA9IF9yZWYkZW5hYmxlVGhyb3R0bGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRlbmFibGVUaHJvdHRsZTtcblxuICAgIGlmICghZW5hYmxlVGhyb3R0bGUpIHtcbiAgICAgIHJldHVybiB0aWNrZXRSZXBvcnRGbihmb3JtSUQpO1xuICAgIH1cblxuICAgIHZhciBMT0dfTEVWRUwgPSBjb25zdGFudHMuTE9HX0xFVkVMLFxuICAgICAgICBUSUNLRVRfUkVQT1JUX0lOVk9LRV9MSU1JVCA9IGNvbnN0YW50cy5USUNLRVRfUkVQT1JUX0lOVk9LRV9MSU1JVCxcbiAgICAgICAgU1RPUkFHRV9LRVkgPSBjb25zdGFudHMuU1RPUkFHRV9LRVk7XG4gICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgbG9nKExPR19MRVZFTC5ERUJVRywgXCI8dGlja2V0LXJlcG9ydD4gbGFzdDogXCIuY29uY2F0KGxhc3RJbnZva2VUaW1lLCBcIiwgbm93OiBcIikuY29uY2F0KG5vdykpO1xuICAgIGlmIChsYXN0SW52b2tlVGltZSAmJiBub3cgLSBsYXN0SW52b2tlVGltZSA8PSBUSUNLRVRfUkVQT1JUX0lOVk9LRV9MSU1JVC5NSU5fSU5URVJWQUxfUFJFX1RJTUUpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgLy8g5LiK5qyh6LCD55So5pe26Ze05LiO5b2T5YmN5pe25Yi75a+55q+U77yM5pyq6LaF6L+HIDVzIOWImeiwg+eUqOWksei0pVxuXG4gICAgcmV0dXJuIHN0b3JhZ2VBc3luYy5nZXQoU1RPUkFHRV9LRVkuUkVQT1JUX1RJQ0tFVF9JTlZPS0VfUkVDT1JEKS50aGVuKGZ1bmN0aW9uIChpbnZva2VSZWNvcmQpIHtcbiAgICAgIHZhciBpc092ZXJkdWUgPSBpbnZva2VSZWNvcmQgJiYgbm93IC0gaW52b2tlUmVjb3JkLnRpbWVzdGFtcCA+IFRJQ0tFVF9SRVBPUlRfSU5WT0tFX0xJTUlULlRJTUVTX0xJTUlULkNZQ0xFO1xuICAgICAgbG9nKExPR19MRVZFTC5ERUJVRywgXCI8dGlja2V0LXJlcG9ydD4gcmVjb3JkOiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoaW52b2tlUmVjb3JkKSwgXCIsIG5vdzogXCIpLmNvbmNhdChub3cpKTtcbiAgICAgIGlmIChpbnZva2VSZWNvcmQgJiYgaW52b2tlUmVjb3JkLmludm9rZVRpbWVzID49IFRJQ0tFVF9SRVBPUlRfSU5WT0tFX0xJTUlULlRJTUVTX0xJTUlULk1BWF9USU1FU19QRVJfQ1lDTEUgJiYgIWlzT3ZlcmR1ZSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpOyAvLyDlvZPosIPnlKjmrKHmlbDotoXov4cgMTAg5qyh77yM5LiU56ys5LiA5qyh6LCD55So5pe26Ze06Led56a75q2k5Yi75pyq6LaF6L+HIDI0aO+8jOWImeiwg+eUqOWksei0pVxuICAgICAgLy8g5pu05pawIHN0b3JhZ2Ug5LitIFJFUE9SVF9USUNLRVRfSU5WT0tFX1JFQ09SRCDnmoTmlbDmja5cblxuICAgICAgaWYgKCFpbnZva2VSZWNvcmQgfHwgaXNPdmVyZHVlIHx8IGlzSW52YWxpZEludm9rZVJlY29yZChpbnZva2VSZWNvcmQpKSB7XG4gICAgICAgIGludm9rZVJlY29yZCA9IGluaXRSZXBvcnRUaWNrZXRJbnZva2VSZWNvcmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludm9rZVJlY29yZC5pbnZva2VUaW1lcyArPSAxO1xuICAgICAgfSAvLyDosIPnlKggdGlja2V0IHJlcG9ydCDmlrnms5VcblxuXG4gICAgICBpZiAodGlja2V0UmVwb3J0Rm4gJiYgdHlwZW9mIHRpY2tldFJlcG9ydEZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxhc3RJbnZva2VUaW1lID0gbm93O1xuICAgICAgICBzdG9yYWdlQXN5bmMuc2V0KFNUT1JBR0VfS0VZLlJFUE9SVF9USUNLRVRfSU5WT0tFX1JFQ09SRCwgaW52b2tlUmVjb3JkKTtcbiAgICAgICAgcmV0dXJuIHRpY2tldFJlcG9ydEZuKGZvcm1JRCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgbG9nKExPR19MRVZFTC5ERUJVRywgXCI8dGlja2V0LXJlcG9ydD4gaW52b2tlIHN1Y2Nlc3MgXCIuY29uY2F0KERhdGUubm93KCkgLSBub3csIFwibXNcIikpO1xuICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBpbnZva2VSZWNvcmQuaW52b2tlVGltZXMgLT0gMTtcbiAgICAgICAgICBzdG9yYWdlQXN5bmMuc2V0KFNUT1JBR0VfS0VZLlJFUE9SVF9USUNLRVRfSU5WT0tFX1JFQ09SRCwgaW52b2tlUmVjb3JkKTtcbiAgICAgICAgICBsb2coTE9HX0xFVkVMLkRFQlVHLCBcIjx0aWNrZXQtcmVwb3J0PiBpbnZva2UgZmFpbCBcIi5jb25jYXQoRGF0ZS5ub3coKSAtIG5vdywgXCJtcyBlcnI6IFwiKS5jb25jYXQoZXJyKSk7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZyhMT0dfTEVWRUwuREVCVUcsICc8dGlja2V0LXJlcG9ydD4gaW52b2tlIGZhaWwnKTtcbiAgICAgICAgbG9nKExPR19MRVZFTC5FUlJPUiwgbmV3IFR5cGVFcnJvcignXCJ0aWNrZXRSZXBvcnRGblwiIG11c3QgYmUgRnVuY3Rpb24gdHlwZScpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdGlja2V0UmVwb3J0VGhyb3R0bGU7IiwidmFyIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG52YXIgbG9nID0gcmVxdWlyZSgnLi9sb2cnKS5sb2c7XG5cbnZhciBzaG91bGRSZXRyeSA9IGZ1bmN0aW9uIHNob3VsZFJldHJ5KGVyciwgbWF0Y2hNZXNzYWdlKSB7XG4gIGlmICghZXJyKSByZXR1cm4gZmFsc2U7XG4gIGlmICghbWF0Y2hNZXNzYWdlKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1hdGNoTWVzc2FnZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgcmV0dXJuIG1hdGNoTWVzc2FnZS50ZXN0KGVyci5tZXNzYWdlKTtcbiAgfVxuXG4gIHJldHVybiBlcnIubWVzc2FnZSA9PT0gbWF0Y2hNZXNzYWdlO1xufTtcbi8qXG4gKiDlpoLmnpwgZm4g5oqb5Ye66ZSZ6K+v77yM5YiZ57un57ut6YeN6K+V6LCD55So44CCXG4gKiDph43or5XmrKHmlbDkuI3otoXov4cgbWF4Q291bnQgLSAxIOasoeOAglxuICog5aaC5p6c5LiN5oyH5a6aIG1hdGNoTWVzc2FnZe+8jOWImeaKm+WHuuS7u+S9lemUmeivr+mDvemHjeivleOAglxuICog5aaC5p6c5oyH5a6a5LqGIG1hdGNoTWVzc2FnZe+8jOWImeWPqumHjeivleeJueWumueahOmUmeivr+OAglxuICpcbiAqIEBwYXJhbXMge2Z1bmN0aW9ufSBmbiDpnIDopoHph43or5XnmoTmlrnms5VcbiAqIEBwYXJhbXMge29iamVjdH0gb3B0aW9ucyDlhbbku5bpgInpoblcbiAqIEBwYXJhbXMge29iamVjdH0gb3B0aW9ucy5jb250ZXh0IOaJp+ihjOS4iuS4i+aWh1xuICogQHBhcmFtcyB7bnVtYmVyfSBvcHRpb25zLm1heENvdW50IOacgOWkp+aJp+ihjOasoeaVsFxuICogQHBhcmFtcyB7c3RyaW5nfFJlZ0V4cH0gb3B0aW9ucy5tYXRjaE1lc3NhZ2Ug6ZSZ6K+v5L+h5oGv5Yy56YWN6KeE5YiZXG4gKiBAcmV0dXJuIHsqfSDov5Tlm57osIPnlKggZm4g55qE6L+U5Zue5YC8XG4gKi9cblxuXG52YXIgd2l0aFJldHJ5ID0gZnVuY3Rpb24gd2l0aFJldHJ5KGZuKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fSxcbiAgICAgIF9yZWYkY29udGV4dCA9IF9yZWYuY29udGV4dCxcbiAgICAgIGNvbnRleHQgPSBfcmVmJGNvbnRleHQgPT09IHZvaWQgMCA/IHt9IDogX3JlZiRjb250ZXh0LFxuICAgICAgX3JlZiRtYXhDb3VudCA9IF9yZWYubWF4Q291bnQsXG4gICAgICBtYXhDb3VudCA9IF9yZWYkbWF4Q291bnQgPT09IHZvaWQgMCA/IDEwIDogX3JlZiRtYXhDb3VudCxcbiAgICAgIG1hdGNoTWVzc2FnZSA9IF9yZWYubWF0Y2hNZXNzYWdlO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciByZW1haW5kQ291bnQgPSBtYXhDb3VudDtcblxuICAgIHZhciByZXRyeSA9IGZ1bmN0aW9uIHJldHJ5KCkge1xuICAgICAgdmFyIGhhbmRsZUVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyKSB7XG4gICAgICAgIGlmIChzaG91bGRSZXRyeShlcnIsIG1hdGNoTWVzc2FnZSkgJiYgcmVtYWluZENvdW50ID4gMSkge1xuICAgICAgICAgIGxvZyhjb25zdGFudHMuTE9HX0xFVkVMLkRFQlVHLCBcIjx3aXRoUmV0cnk+IFxcXCJcIi5jb25jYXQoZm4ubmFtZSwgXCJcXFwiIGNhbGxlZCBmYWlsLCByZW1haW5kQ291bnQ6IFwiKS5jb25jYXQocmVtYWluZENvdW50LCBcIiwgZXJyOiBcIikuY29uY2F0KGVycikpO1xuICAgICAgICAgIHJlbWFpbmRDb3VudCAtPSAxO1xuICAgICAgICAgIHJldHVybiByZXRyeSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocmVzdWx0KSA9PT0gJ1tvYmplY3QgUHJvbWlzZV0nKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gcmV0cnkoKTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gd2l0aFJldHJ5OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi9zZXNzaW9uJyksXG4gICAgU2Vzc2lvbiA9IF9yZXF1aXJlLlNlc3Npb247XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBDb25uZWN0aW9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29ubmVjdGlvbihvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbm5lY3Rpb24pO1xuXG4gICAgdXRpbC5hc3NlcnQob3B0aW9ucy51cmwgIT09IHVuZGVmaW5lZCwgJ29wdGlvbnMudXJsIG1pc3NpbmcnKTtcbiAgICB1dGlsLmFzc2VydChvcHRpb25zLmNyZWF0ZV90cmFuc3BvcnQgIT09IHVuZGVmaW5lZCwgJ2NyZWF0ZV90cmFuc3BvcnQgbWlzc2luZycpO1xuICAgIHV0aWwuYXNzZXJ0KHR5cGVvZiBvcHRpb25zLmNyZWF0ZV90cmFuc3BvcnQgPT09ICdmdW5jdGlvbicsICdjcmVhdGVfdHJhbnNwb3J0IG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIHV0aWwuYXNzZXJ0KG9wdGlvbnMuZ2V0QXV0aFRva2VuUXVlcnlzdHJpbmcgIT09IHVuZGVmaW5lZCwgJ2dldEF1dGhUb2tlblF1ZXJ5c3RyaW5nIG1pc3NpbmcnKTtcbiAgICB1dGlsLmFzc2VydCh0eXBlb2Ygb3B0aW9ucy5nZXRBdXRoVG9rZW5RdWVyeXN0cmluZyA9PT0gJ2Z1bmN0aW9uJywgJ2dldEF1dGhUb2tlblF1ZXJ5c3RyaW5nIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuX2NyZWF0ZV90cmFuc3BvcnQgPSB0aGlzLl9vcHRpb25zLmNyZWF0ZV90cmFuc3BvcnQ7XG4gICAgdGhpcy5fZ2V0QXV0aFRva2VuUXVlcnlzdHJpbmcgPSB0aGlzLl9vcHRpb25zLmdldEF1dGhUb2tlblF1ZXJ5c3RyaW5nO1xuXG4gICAgdGhpcy5fc2hvdWxkVHJ5QWdhaW4gPSB0aGlzLl9vcHRpb25zLnNob3VsZFRyeUFnYWluIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9OyAvLyBEZWZlcnJlZCBmYWN0b3J5XG4gICAgLy9cblxuXG4gICAgdGhpcy5fZGVmZXIgPSB1dGlsLmRlZmVycmVkX2ZhY3RvcnkoKTsgLy8gV0FNUCBzZXNzaW9uXG4gICAgLy9cblxuICAgIHRoaXMuX3Nlc3Npb24gPSBudWxsO1xuICAgIHRoaXMuX3Nlc3Npb25fY2xvc2VfcmVhc29uID0gbnVsbDtcbiAgICB0aGlzLl9zZXNzaW9uX2Nsb3NlX21lc3NhZ2UgPSBudWxsOyAvLyBhdXRvbWF0aWMgcmVjb25uZWN0aW9uIGNvbmZpZ3VyYXRpb25cbiAgICAvL1xuICAgIC8vIGVuYWJsZSBhdXRvbWF0aWMgcmVjb25uZWN0IGlmIGhvc3QgaXMgdW5yZWFjaGFibGVcblxuICAgIHRoaXMuX3JldHJ5X2lmX3VucmVhY2hhYmxlID0gdXRpbC5vcHQodGhpcy5fb3B0aW9ucy5yZXRyeV9pZl91bnJlYWNoYWJsZSwgdHJ1ZSk7IC8vIG1heGltdW0gbnVtYmVyIG9mIHJlY29ubmVjdGlvbiBhdHRlbXB0c1xuXG4gICAgdGhpcy5fbWF4X3JldHJpZXMgPSB1dGlsLm9wdCh0aGlzLl9vcHRpb25zLm1heF9yZXRyaWVzLCAxNSk7IC8vIGluaXRpYWwgcmV0cnkgZGVsYXkgaW4gc2Vjb25kc1xuXG4gICAgdGhpcy5faW5pdGlhbF9yZXRyeV9kZWxheSA9IHV0aWwub3B0KHRoaXMuX29wdGlvbnMuaW5pdGlhbF9yZXRyeV9kZWxheSwgMS41KTsgLy8gbWF4aW11bSBzZWNvbmRzIGJldHdlZW4gcmVjb25uZWN0aW9uIGF0dGVtcHRzXG5cbiAgICB0aGlzLl9tYXhfcmV0cnlfZGVsYXkgPSB0aGlzLl9vcHRpb25zLm1heF9yZXRyeV9kZWxheSB8fCAzMDA7IC8vIHRoZSBncm93dGggZmFjdG9yIGFwcGxpZWQgdG8gdGhlIHJldHJ5IGRlbGF5IG9uIGVhY2ggcmV0cnkgY3ljbGVcblxuICAgIHRoaXMuX3JldHJ5X2RlbGF5X2dyb3d0aCA9IHRoaXMuX29wdGlvbnMucmV0cnlfZGVsYXlfZ3Jvd3RoIHx8IDEuNTsgLy8gdGhlIFNEIG9mIGEgR2F1c3NpYW4gdG8gaml0dGVyIHRoZSBkZWxheSBvbiBlYWNoIHJldHJ5IGN5Y2xlXG4gICAgLy8gYXMgYSBmcmFjdGlvbiBvZiB0aGUgbWVhblxuXG4gICAgdGhpcy5fcmV0cnlfZGVsYXlfaml0dGVyID0gdGhpcy5fb3B0aW9ucy5yZXRyeV9kZWxheV9qaXR0ZXIgfHwgMC4xOyAvLyByZWNvbm5lY3Rpb24gdHJhY2tpbmdcbiAgICAvL1xuICAgIC8vIHRvdGFsIG51bWJlciBvZiBzdWNjZXNzZnVsIGNvbm5lY3Rpb25zXG5cbiAgICB0aGlzLl9jb25uZWN0X3N1Y2Nlc3NlcyA9IDA7IC8vIGNvbnRyb2xzIGlmIHdlIHNob3VsZCB0cnkgdG8gcmVjb25uZWN0XG5cbiAgICB0aGlzLl9yZXRyeSA9IGZhbHNlOyAvLyBjdXJyZW50IG51bWJlciBvZiByZWNvbm5lY3QgY3ljbGVzIHdlIHdlbnQgdGhyb3VnaFxuXG4gICAgdGhpcy5fcmV0cnlfY291bnQgPSAwOyAvLyB0aGUgY3VycmVudCByZXRyeSBkZWxheVxuXG4gICAgdGhpcy5fcmV0cnlfZGVsYXkgPSB0aGlzLl9pbml0aWFsX3JldHJ5X2RlbGF5OyAvLyBmbGFnIGluZGljYXRpbmcgaWYgd2UgYXJlIGN1cnJlbnRseSBpbiBhIHJlY29ubmVjdCBjeWNsZVxuXG4gICAgdGhpcy5faXNfcmV0cnlpbmcgPSBmYWxzZTsgLy8gd2hlbiByZXRyeWluZywgdGhpcyBpcyB0aGUgdGltZXIgb2JqZWN0IHJldHVybmVkIGZyb20gd2luZG93LnNldFRpbWVvdXQoKVxuXG4gICAgdGhpcy5fcmV0cnlfdGltZXIgPSBudWxsO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvbm5lY3Rpb24sIFt7XG4gICAga2V5OiBcIl9hdXRvcmVjb25uZWN0X3Jlc2V0X3RpbWVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hdXRvcmVjb25uZWN0X3Jlc2V0X3RpbWVyKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3JldHJ5X3RpbWVyKTtcbiAgICAgIHRoaXMuX3JldHJ5X3RpbWVyID0gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2F1dG9yZWNvbm5lY3RfcmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2F1dG9yZWNvbm5lY3RfcmVzZXQoKSB7XG4gICAgICB0aGlzLl9hdXRvcmVjb25uZWN0X3Jlc2V0X3RpbWVyKCk7XG5cbiAgICAgIHRoaXMuX3JldHJ5X2NvdW50ID0gMDtcbiAgICAgIHRoaXMuX3JldHJ5X2RlbGF5ID0gdGhpcy5faW5pdGlhbF9yZXRyeV9kZWxheTtcbiAgICAgIHRoaXMuX2lzX3JldHJ5aW5nID0gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hdXRvcmVjb25uZWN0X2FkdmFuY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2F1dG9yZWNvbm5lY3RfYWR2YW5jZSgpIHtcbiAgICAgIGlmICh0aGlzLl9yZXRyeV9kZWxheV9qaXR0ZXIpIHtcbiAgICAgICAgdGhpcy5fcmV0cnlfZGVsYXlfaml0dGVyID0gdXRpbC5yYW5kX25vcm1hbCh0aGlzLl9yZXRyeV9kZWxheSwgdGhpcy5fcmV0cnlfZGVsYXkgKiB0aGlzLl9yZXRyeV9kZWxheV9qaXR0ZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcmV0cnlfZGVsYXkgPiB0aGlzLl9tYXhfcmV0cnlfZGVsYXkpIHtcbiAgICAgICAgdGhpcy5fcmV0cnlfZGVsYXkgPSB0aGlzLl9tYXhfcmV0cnlfZGVsYXk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JldHJ5X2NvdW50ICs9IDE7XG4gICAgICB2YXIgcmVzO1xuXG4gICAgICBpZiAodGhpcy5fcmV0cnkgJiYgKHRoaXMuX21heF9yZXRyaWVzID09PSAtMSB8fCB0aGlzLl9yZXRyeV9jb3VudCA8PSB0aGlzLl9tYXhfcmV0cmllcykpIHtcbiAgICAgICAgcmVzID0ge1xuICAgICAgICAgIGNvdW50OiB0aGlzLl9yZXRyeV9jb3VudCxcbiAgICAgICAgICBkZWxheTogdGhpcy5fcmV0cnlfZGVsYXksXG4gICAgICAgICAgd2lsbF9yZXRyeTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzID0ge1xuICAgICAgICAgIGNvdW50OiBudWxsLFxuICAgICAgICAgIGRlbGF5OiBudWxsLFxuICAgICAgICAgIHdpbGxfcmV0cnk6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9IC8vIHJldHJ5IGRlbGF5IGdyb3d0aCBmb3IgbmV4dCByZXRyeSBjeWNsZVxuXG5cbiAgICAgIGlmICh0aGlzLl9yZXRyeV9kZWxheV9ncm93dGgpIHtcbiAgICAgICAgdGhpcy5fcmV0cnlfZGVsYXkgPSB0aGlzLl9yZXRyeV9kZWxheSAqIHRoaXMuX3JldHJ5X2RlbGF5X2dyb3d0aDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib3BlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX3RyYW5zcG9ydCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nvbm5lY3Rpb24gYWxyZWFkeSBvcGVuIChvciBvcGVuaW5nKScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hdXRvcmVjb25uZWN0X3Jlc2V0KCk7XG5cbiAgICAgIHRoaXMuX3JldHJ5ID0gdHJ1ZTtcblxuICAgICAgdmFyIG9yaWdpbmFsX3JldHJ5ID0gZnVuY3Rpb24gb3JpZ2luYWxfcmV0cnkocSkge1xuICAgICAgICAvLyBjcmVhdGUgYSBXQU1QIHRyYW5zcG9ydFxuICAgICAgICB0cnkge1xuICAgICAgICAgIF90aGlzLl90cmFuc3BvcnQgPSBfdGhpcy5fY3JlYXRlX3RyYW5zcG9ydCh7XG4gICAgICAgICAgICB1cmw6IF90aGlzLl9vcHRpb25zLnVybCArICc/JyArIHFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHV0aWwuaGFuZGxlX2Vycm9yKF90aGlzLl9vcHRpb25zLm9uX2ludGVybmFsX2Vycm9yLCBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghX3RoaXMuX3RyYW5zcG9ydCkge1xuICAgICAgICAgIC8vIGZhaWxlZCB0byBjcmVhdGUgYSBXQU1QIHRyYW5zcG9ydFxuICAgICAgICAgIF90aGlzLl9yZXRyeSA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKF90aGlzLm9uY2xvc2UpIHtcbiAgICAgICAgICAgIHZhciBkZXRhaWxzID0ge1xuICAgICAgICAgICAgICByZWFzb246IG51bGwsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICAgIHJldHJ5X2RlbGF5OiBudWxsLFxuICAgICAgICAgICAgICByZXRyeV9jb3VudDogbnVsbCxcbiAgICAgICAgICAgICAgd2lsbF9yZXRyeTogZmFsc2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIF90aGlzLm9uY2xvc2UoJ3Vuc3VwcG9ydGVkJywgZGV0YWlscyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIGNyZWF0ZSBhIG5ldyBXQU1QIHNlc3Npb24gdXNpbmcgdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uIGFzIHRyYW5zcG9ydFxuXG5cbiAgICAgICAgX3RoaXMuX3Nlc3Npb24gPSBuZXcgU2Vzc2lvbihfdGhpcy5fdHJhbnNwb3J0LCBfdGhpcy5fZGVmZXIsIF90aGlzLl9vcHRpb25zLm9uY2hhbGxlbmdlLCBfdGhpcy5fb3B0aW9ucy5vbl91c2VyX2Vycm9yLCBfdGhpcy5fb3B0aW9ucy5vbl9pbnRlcm5hbF9lcnJvcik7XG4gICAgICAgIF90aGlzLl9zZXNzaW9uX2Nsb3NlX3JlYXNvbiA9IG51bGw7XG4gICAgICAgIF90aGlzLl9zZXNzaW9uX2Nsb3NlX21lc3NhZ2UgPSBudWxsO1xuXG4gICAgICAgIF90aGlzLl90cmFuc3BvcnQub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIHJlc2V0IGF1dG8tcmVjb25uZWN0IHRpbWVyIGFuZCB0cmFja2luZ1xuICAgICAgICAgIGlmICghX3RoaXMuX29wdGlvbnMuc3RhdGUucmV0cmllZCkge1xuICAgICAgICAgICAgX3RoaXMuX2F1dG9yZWNvbm5lY3RfcmVzZXQoKTtcbiAgICAgICAgICB9IC8vIHV0aWwgc3VjY2Vzc2Z1bCBjb25uZWN0aW9uc1xuXG5cbiAgICAgICAgICBfdGhpcy5fY29ubmVjdF9zdWNjZXNzZXMgKz0gMTsgLy8gc3RhcnQgV0FNUCBzZXNzaW9uXG5cbiAgICAgICAgICBfdGhpcy5fc2Vzc2lvbi5qb2luKF90aGlzLl9vcHRpb25zLnJlYWxtLCBfdGhpcy5fb3B0aW9ucy5hdXRobWV0aG9kcywgX3RoaXMuX29wdGlvbnMuYXV0aGlkLCBfdGhpcy5fb3B0aW9ucy5hdXRoZXh0cmEpO1xuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzLl9zZXNzaW9uLm9uam9pbiA9IGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gICAgICAgICAgaWYgKF90aGlzLm9ub3Blbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8gZm9yd2FyZCB0cmFuc3BvcnQgaW5mbyAuLlxuICAgICAgICAgICAgICBkZXRhaWxzLnRyYW5zcG9ydCA9IF90aGlzLl90cmFuc3BvcnQuaW5mbztcblxuICAgICAgICAgICAgICBfdGhpcy5vbm9wZW4oX3RoaXMuX3Nlc3Npb24sIGRldGFpbHMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICB1dGlsLmhhbmRsZV9lcnJvcihfdGhpcy5fb3B0aW9ucy5vbl91c2VyX2Vycm9yLCBlLCAnZXhjZXB0aW9uIHJhaXNlZCBmcm9tIGFwcCBjb2RlIHdoaWxlIGZpcmluZyBDb25uZWN0aW9uLm9ub3BlbigpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9OyAvL1xuICAgICAgICAvLyAuLi4gV0FNUCBzZXNzaW9uIGlzIG5vdyBhdHRhY2hlZCB0byByZWFsbS5cbiAgICAgICAgLy9cblxuXG4gICAgICAgIF90aGlzLl9zZXNzaW9uLm9ubGVhdmUgPSBmdW5jdGlvbiAocmVhc29uLCBkZXRhaWxzKSB7XG4gICAgICAgICAgX3RoaXMuX3Nlc3Npb25fY2xvc2VfcmVhc29uID0gcmVhc29uO1xuICAgICAgICAgIF90aGlzLl9zZXNzaW9uX2Nsb3NlX21lc3NhZ2UgPSBkZXRhaWxzLm1lc3NhZ2UgfHwgJyc7XG5cbiAgICAgICAgICBpZiAoIV90aGlzLl9zaG91bGRUcnlBZ2FpbihyZWFzb24pKSB7XG4gICAgICAgICAgICBfdGhpcy5fcmV0cnkgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuX29wdGlvbnMuc3RhdGUucmV0cmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMuX3RyYW5zcG9ydC5jbG9zZSgpO1xuXG4gICAgICAgICAgaWYgKF90aGlzLm9uYWJvcnQpIHtcbiAgICAgICAgICAgIF90aGlzLm9uYWJvcnQocmVhc29uLCBkZXRhaWxzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMuX3RyYW5zcG9ydC5vbmNsb3NlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQ9PT4nLCBldnQpXG4gICAgICAgICAgLy8gcmVtb3ZlIGFueSBwZW5kaW5nIHJlY29ubmVjdCB0aW1lclxuICAgICAgICAgIF90aGlzLl9hdXRvcmVjb25uZWN0X3Jlc2V0X3RpbWVyKCk7XG5cbiAgICAgICAgICBfdGhpcy5fdHJhbnNwb3J0ID0gbnVsbDtcbiAgICAgICAgICB2YXIgcmVhc29uID0gbnVsbDtcblxuICAgICAgICAgIGlmIChfdGhpcy5fY29ubmVjdF9zdWNjZXNzZXMgPT09IDApIHtcbiAgICAgICAgICAgIHJlYXNvbiA9ICd1bnJlYWNoYWJsZSc7XG5cbiAgICAgICAgICAgIGlmICghX3RoaXMuX3JldHJ5X2lmX3VucmVhY2hhYmxlKSB7XG4gICAgICAgICAgICAgIF90aGlzLl9yZXRyeSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoIWV2dC53YXNDbGVhbikge1xuICAgICAgICAgICAgcmVhc29uID0gJ2xvc3QnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWFzb24gPSAnY2xvc2VkJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbmV4dF9yZXRyeSA9IF90aGlzLl9hdXRvcmVjb25uZWN0X2FkdmFuY2UoKTtcblxuICAgICAgICAgIHZhciBkZXRhaWxzID0ge1xuICAgICAgICAgICAgcmVhc29uOiBfdGhpcy5fc2Vzc2lvbl9jbG9zZV9yZWFzb24sXG4gICAgICAgICAgICBtZXNzYWdlOiBfdGhpcy5fc2Vzc2lvbl9jbG9zZV9tZXNzYWdlLFxuICAgICAgICAgICAgcmV0cnlfZGVsYXk6IG5leHRfcmV0cnkuZGVsYXksXG4gICAgICAgICAgICByZXRyeV9jb3VudDogbmV4dF9yZXRyeS5jb3VudCxcbiAgICAgICAgICAgIHdpbGxfcmV0cnk6IG5leHRfcmV0cnkud2lsbF9yZXRyeVxuICAgICAgICAgIH07XG4gICAgICAgICAgdXRpbC53YXJuKCdjb25uZWN0aW9uIGNsb3NlZCcsIHJlYXNvbiwgZGV0YWlscyk7IC8vIGZpcmUgYXBwIGNvZGUgaGFuZGxlclxuICAgICAgICAgIC8vXG5cbiAgICAgICAgICB2YXIgc3RvcF9yZXRyeWluZztcblxuICAgICAgICAgIGlmIChfdGhpcy5vbmNsb3NlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAvLyBDb25uZWN0aW9uLm9uY2xvc2UoKSBhbGxvd3MgdG8gY2FuY2VsIGFueSBzdWJzZXF1ZW50IHJldHJ5IGF0dGVtcHRcbiAgICAgICAgICAgICAgc3RvcF9yZXRyeWluZyA9IF90aGlzLm9uY2xvc2UocmVhc29uLCBkZXRhaWxzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgdXRpbC5oYW5kbGVfZXJyb3IoX3RoaXMuX29wdGlvbnMub25fdXNlcl9lcnJvciwgZSwgJ2V4Y2VwdGlvbiByYWlzZWQgZnJvbSBhcHAgY29kZSB3aGlsZSBmaXJpbmcgQ29ubmVjdGlvbi5vbmNsb3NlKCknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIHJlc2V0IHNlc3Npb24gaW5mb1xuICAgICAgICAgIC8vXG5cblxuICAgICAgICAgIGlmIChfdGhpcy5fc2Vzc2lvbikge1xuICAgICAgICAgICAgX3RoaXMuX3Nlc3Npb24uX2lkID0gbnVsbDtcbiAgICAgICAgICAgIF90aGlzLl9zZXNzaW9uID0gbnVsbDtcbiAgICAgICAgICAgIF90aGlzLl9zZXNzaW9uX2Nsb3NlX3JlYXNvbiA9IG51bGw7XG4gICAgICAgICAgICBfdGhpcy5fc2Vzc2lvbl9jbG9zZV9tZXNzYWdlID0gbnVsbDtcbiAgICAgICAgICB9IC8vIGF1dG9tYXRpYyByZWNvbm5lY3Rpb25cbiAgICAgICAgICAvL1xuXG5cbiAgICAgICAgICBpZiAoX3RoaXMuX3JldHJ5ICYmICFzdG9wX3JldHJ5aW5nKSB7XG4gICAgICAgICAgICBpZiAobmV4dF9yZXRyeS53aWxsX3JldHJ5KSB7XG4gICAgICAgICAgICAgIF90aGlzLl9pc19yZXRyeWluZyA9IHRydWU7XG4gICAgICAgICAgICAgIHV0aWwud2FybignYXV0by1yZWNvbm5lY3RpbmcgaW4gJyArIG5leHRfcmV0cnkuZGVsYXkgKyAncyAuLicpO1xuICAgICAgICAgICAgICBfdGhpcy5fcmV0cnlfdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0cnkoKTtcbiAgICAgICAgICAgICAgfSwgbmV4dF9yZXRyeS5kZWxheSAqIDEwMDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXRpbC53YXJuKCdnaXZpbmcgdXAgdHJ5aW5nIHRvIGF1dG8tcmVjb25uZWN0IScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1dGlsLndhcm4oJ2F1dG8tcmVjb25uZWN0IGRpc2FibGVkIScsIF90aGlzLl9yZXRyeSwgc3RvcF9yZXRyeWluZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgdmFyIHJldHJ5ID0gZnVuY3Rpb24gcmV0cnkoKSB7XG4gICAgICAgIF90aGlzLl9nZXRBdXRoVG9rZW5RdWVyeXN0cmluZygpLnRoZW4oZnVuY3Rpb24gKHEpIHtcbiAgICAgICAgICBvcmlnaW5hbF9yZXRyeShxKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB1dGlsLmhhbmRsZV9lcnJvcihfdGhpcy5fb3B0aW9ucy5vbl9pbnRlcm5hbF9lcnJvciwgZSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmV0cnkoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xvc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UocmVhc29uLCBtZXNzYWdlKSB7XG4gICAgICBpZiAoIXRoaXMuX3RyYW5zcG9ydCAmJiAhdGhpcy5faXNfcmV0cnlpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb25uZWN0aW9uIGFscmVhZHkgY2xvc2VkJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JldHJ5ID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLl9zZXNzaW9uICYmIHRoaXMuX3Nlc3Npb24uaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuX3Nlc3Npb24ubGVhdmUocmVhc29uLCBtZXNzYWdlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fdHJhbnNwb3J0KSB7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydC5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZWZlclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlZmVyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXNzaW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNPcGVuXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5fc2Vzc2lvbiAmJiB0aGlzLl9zZXNzaW9uLmlzT3BlbikgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ29ubmVjdGVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5fdHJhbnNwb3J0KSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidHJhbnNwb3J0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5fdHJhbnNwb3J0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc3BvcnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZm86IHtcbiAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICAgIHByb3RvY2FsOiBudWxsXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzUmV0cnlpbmdcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc19yZXRyeWluZztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29ubmVjdGlvbjtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENvbm5lY3Rpb246IENvbm5lY3Rpb25cbn07IiwidmFyIEJhYVMgPSByZXF1aXJlKCcuLi9iYWFzJyk7XG5cbnZhciBIRXJyb3IgPSByZXF1aXJlKCcuLi9IRXJyb3InKTtcblxudmFyIHN1YnNjcmliZXIgPSByZXF1aXJlKCcuL3N1YnNjcmliZXInKTtcblxuZnVuY3Rpb24gcmVzb2x2ZVRvcGljKF9yZWYpIHtcbiAgdmFyIHNjaGVtYV9uYW1lID0gX3JlZi5zY2hlbWFfbmFtZSxcbiAgICAgIGV2ZW50X3R5cGUgPSBfcmVmLmV2ZW50X3R5cGU7XG4gIHJldHVybiBcIlwiLmNvbmNhdChCYWFTLl9jb25maWcuV1NfQkFTRV9UT1BJQywgXCIuXCIpLmNvbmNhdChzY2hlbWFfbmFtZSwgXCIub25fXCIpLmNvbmNhdChldmVudF90eXBlKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU9wdGlvbnMoX3JlZjIpIHtcbiAgdmFyIHdoZXJlID0gX3JlZjIud2hlcmU7XG5cbiAgaWYgKHdoZXJlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdoZXJlOiB3aGVyZVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge307XG59IC8vIOiHquWumuS5ieinpuWPkeiHquWKqOmHjei/nlxuXG5cbmZ1bmN0aW9uIHNob3VsZFRyeUFnYWluKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGVycm9yaWZ5KG9uZXJyb3IpIHtcbiAgdmFyIGxvb2t1cCA9IHtcbiAgICAndW5yZWFjaGFibGUnOiA2MDEsXG4gICAgJ3dhbXAuZXJyb3Iubm90X2F1dGhvcml6ZWQnOiA2MDNcbiAgfTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlcnIpIHtcbiAgICB2YXIgbWVzc2FnZSA9IGVyci5tZXNzYWdlO1xuICAgIHZhciByZWFzb24gPSBlcnIucmVhc29uO1xuICAgIHZhciBkZXRhaWxzID0gZXJyLmRldGFpbHM7XG5cbiAgICBpZiAoZGV0YWlscyAmJiBkZXRhaWxzLnJlYXNvbikge1xuICAgICAgcmVhc29uID0gZGV0YWlscy5yZWFzb247XG4gICAgfVxuXG4gICAgaWYgKGRldGFpbHMgJiYgZGV0YWlscy5tZXNzYWdlKSB7XG4gICAgICBtZXNzYWdlID0gZGV0YWlscy5tZXNzYWdlO1xuICAgIH1cblxuICAgIGlmICghbWVzc2FnZSAmJiByZWFzb24pIHtcbiAgICAgIG1lc3NhZ2UgPSByZWFzb247XG4gICAgfVxuXG4gICAgdmFyIGNvZGUgPSBsb29rdXBbcmVhc29uXSB8fCAwO1xuICAgIHZhciBoID0gbmV3IEhFcnJvcihjb2RlLCBtZXNzYWdlKTtcbiAgICBoLnJlYXNvbiA9IHJlYXNvbjtcbiAgICBoLmRldGFpbHMgPSBkZXRhaWxzO1xuICAgIG9uZXJyb3IoaCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEF1dGhUb2tlblF1ZXJ5c3RyaW5nKCkge1xuICB2YXIgcXMgPSBbXTtcbiAgcXMucHVzaChcIngtaHlkcm9nZW4tY2xpZW50LWlkPVwiLmNvbmNhdChCYWFTLl9jb25maWcuQ0xJRU5UX0lEKSk7XG5cbiAgaWYgKEJhYVMuX2NvbmZpZy5FTlYpIHtcbiAgICBxcy5wdXNoKFwieC1oeWRyb2dlbi1lbnYtaWQ9XCIuY29uY2F0KEJhYVMuX2NvbmZpZy5FTlYpKTtcbiAgfVxuXG4gIHJldHVybiBCYWFTLmdldEF1dGhUb2tlbigpLnRoZW4oZnVuY3Rpb24gKGF1dGhUb2tlbikge1xuICAgIGlmIChhdXRoVG9rZW4pIHtcbiAgICAgIHFzLnB1c2goXCJhdXRob3JpemF0aW9uPVwiLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoQmFhUy5fY29uZmlnLkFVVEhfUFJFRklYICsgJyAnICsgYXV0aFRva2VuKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBxcy5qb2luKCcmJyk7XG4gIH0pO1xufVxuXG52YXIgX3N1YnNjcmliZSA9IG51bGw7XG5cbnZhciBzdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUoX3JlZjMpIHtcbiAgdmFyIHNjaGVtYV9uYW1lID0gX3JlZjMuc2NoZW1hX25hbWUsXG4gICAgICB3aGVyZSA9IF9yZWYzLndoZXJlLFxuICAgICAgZXZlbnRfdHlwZSA9IF9yZWYzLmV2ZW50X3R5cGUsXG4gICAgICBvbmVycm9yID0gX3JlZjMub25lcnJvcixcbiAgICAgIG9uaW5pdCA9IF9yZWYzLm9uaW5pdCxcbiAgICAgIG9uZXZlbnQgPSBfcmVmMy5vbmV2ZW50O1xuXG4gIGlmICghX3N1YnNjcmliZSkge1xuICAgIHZhciBob3N0ID0gQmFhUy5fcG9seWZpbGwuZ2V0V1NIb3N0KCk7XG5cbiAgICB2YXIgdXJsID0gaG9zdC5yZXBsYWNlKC9cXC8kLywgJycpICsgJy8nICsgQmFhUy5fY29uZmlnLldTX1BBVEg7XG5cbiAgICBfc3Vic2NyaWJlID0gc3Vic2NyaWJlcih7XG4gICAgICBXZWJTb2NrZXQ6IEJhYVMuX3BvbHlmaWxsLldlYlNvY2tldCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgcmVhbG06IEJhYVMuX2NvbmZpZy5XU19SRUFMTSxcbiAgICAgIHJlc29sdmVPcHRpb25zOiByZXNvbHZlT3B0aW9ucyxcbiAgICAgIHJlc29sdmVUb3BpYzogcmVzb2x2ZVRvcGljLFxuICAgICAgZ2V0QXV0aFRva2VuUXVlcnlzdHJpbmc6IGdldEF1dGhUb2tlblF1ZXJ5c3RyaW5nLFxuICAgICAgc2hvdWxkVHJ5QWdhaW46IHNob3VsZFRyeUFnYWluXG4gICAgfSk7XG4gIH1cblxuICBvbmVycm9yID0gb25lcnJvciB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICBvbmluaXQgPSBvbmluaXQgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgb25ldmVudCA9IG9uZXZlbnQgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgcmV0dXJuIF9zdWJzY3JpYmUoe1xuICAgIHNjaGVtYV9uYW1lOiBzY2hlbWFfbmFtZSxcbiAgICB3aGVyZTogd2hlcmUsXG4gICAgZXZlbnRfdHlwZTogZXZlbnRfdHlwZSxcbiAgICBvbmVycm9yOiBlcnJvcmlmeShvbmVycm9yKSxcbiAgICBvbmluaXQ6IG9uaW5pdCxcbiAgICBvbmV2ZW50OiBvbmV2ZW50XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN1YnNjcmliZTogc3Vic2NyaWJlXG59OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIEpTT05TZXJpYWxpemVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSlNPTlNlcmlhbGl6ZXIocmVwbGFjZXIsIHJldml2ZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSlNPTlNlcmlhbGl6ZXIpO1xuXG4gICAgdGhpcy5yZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIHRoaXMucmV2aXZlciA9IHJldml2ZXI7XG4gICAgdGhpcy5TRVJJQUxJWkVSX0lEID0gJ2pzb24nO1xuICAgIHRoaXMuQklOQVJZID0gZmFsc2U7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSlNPTlNlcmlhbGl6ZXIsIFt7XG4gICAga2V5OiBcInNlcmlhbGl6ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXJpYWxpemUob2JqKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcGF5bG9hZCA9IEpTT04uc3RyaW5naWZ5KG9iaiwgdGhpcy5yZXBsYWNlcik7XG4gICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB1dGlsLndhcm4oJ0pTT04gZW5jb2RpbmcgZXJyb3InLCBlKTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5zZXJpYWxpemVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5zZXJpYWxpemUocGF5bG9hZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG9iaiA9IEpTT04ucGFyc2UocGF5bG9hZCwgdGhpcy5yZXZpdmVyKTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdXRpbC53YXJuKCdKU09OIGRlY29kaW5nIGVycm9yJywgZSk7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEpTT05TZXJpYWxpemVyO1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSlNPTlNlcmlhbGl6ZXI6IEpTT05TZXJpYWxpemVyXG59OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7IC8vIFdBTVAgXCJBZHZhbmNlZCBQcm9maWxlXCIgc3VwcG9ydCBpbiBBdXRvYmFobkpTIHBlciByb2xlXG4vL1xuXG5cbnZhciBXQU1QX0ZFQVRVUkVTID0ge1xuICBjYWxsZXI6IHtcbiAgICBmZWF0dXJlczoge1xuICAgICAgY2FsbGVyX2lkZW50aWZpY2F0aW9uOiB0cnVlLFxuICAgICAgLy9jYWxsX3RpbWVvdXQ6IHRydWUsXG4gICAgICBjYWxsX2NhbmNlbGluZzogdHJ1ZSxcbiAgICAgIHByb2dyZXNzaXZlX2NhbGxfcmVzdWx0czogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgY2FsbGVlOiB7XG4gICAgZmVhdHVyZXM6IHtcbiAgICAgIGNhbGxlcl9pZGVudGlmaWNhdGlvbjogdHJ1ZSxcbiAgICAgIC8vY2FsbF90cnVzdGxldmVsczogdHJ1ZSxcbiAgICAgIHBhdHRlcm5fYmFzZWRfcmVnaXN0cmF0aW9uOiB0cnVlLFxuICAgICAgc2hhcmVkX3JlZ2lzdHJhdGlvbjogdHJ1ZSxcbiAgICAgIC8vY2FsbF90aW1lb3V0OiB0cnVlLFxuICAgICAgLy9jYWxsX2NhbmNlbGluZzogdHJ1ZSxcbiAgICAgIHByb2dyZXNzaXZlX2NhbGxfcmVzdWx0czogdHJ1ZSxcbiAgICAgIHJlZ2lzdHJhdGlvbl9yZXZvY2F0aW9uOiB0cnVlXG4gICAgfVxuICB9LFxuICBwdWJsaXNoZXI6IHtcbiAgICBmZWF0dXJlczoge1xuICAgICAgcHVibGlzaGVyX2lkZW50aWZpY2F0aW9uOiB0cnVlLFxuICAgICAgc3Vic2NyaWJlcl9ibGFja3doaXRlX2xpc3Rpbmc6IHRydWUsXG4gICAgICBwdWJsaXNoZXJfZXhjbHVzaW9uOiB0cnVlXG4gICAgfVxuICB9LFxuICBzdWJzY3JpYmVyOiB7XG4gICAgZmVhdHVyZXM6IHtcbiAgICAgIHB1Ymxpc2hlcl9pZGVudGlmaWNhdGlvbjogdHJ1ZSxcbiAgICAgIC8vcHVibGljYXRpb25fdHJ1c3RsZXZlbHM6IHRydWUsXG4gICAgICBwYXR0ZXJuX2Jhc2VkX3N1YnNjcmlwdGlvbjogdHJ1ZSxcbiAgICAgIHN1YnNjcmlwdGlvbl9yZXZvY2F0aW9uOiB0cnVlIC8vZXZlbnRfaGlzdG9yeTogdHJ1ZSxcblxuICAgIH1cbiAgfVxufTtcblxudmFyIEludm9jYXRpb24gPSBmdW5jdGlvbiBJbnZvY2F0aW9uKHByb2NlZHVyZSwgcHJvZ3Jlc3MsIGNhbGxlciwgY2FsbGVyX2F1dGhpZCwgY2FsbGVyX2F1dGhyb2xlKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5wcm9jZWR1cmUgPSBwcm9jZWR1cmU7XG4gIHNlbGYucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgc2VsZi5jYWxsZXIgPSBjYWxsZXI7XG4gIHNlbGYuY2FsbGVyX2F1dGhpZCA9IGNhbGxlcl9hdXRoaWQ7XG4gIHNlbGYuY2FsbGVyX2F1dGhyb2xlID0gY2FsbGVyX2F1dGhyb2xlO1xufTtcblxudmFyIEV2ZW50ID0gZnVuY3Rpb24gRXZlbnQocHVibGljYXRpb24sIHRvcGljLCBwdWJsaXNoZXIsIHB1Ymxpc2hlcl9hdXRoaWQsIHB1Ymxpc2hlcl9hdXRocm9sZSwgcmV0YWluZWQsIGZvcndhcmRfZm9yKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5wdWJsaWNhdGlvbiA9IHB1YmxpY2F0aW9uO1xuICBzZWxmLnRvcGljID0gdG9waWM7XG4gIHNlbGYucHVibGlzaGVyID0gcHVibGlzaGVyO1xuICBzZWxmLnB1Ymxpc2hlcl9hdXRoaWQgPSBwdWJsaXNoZXJfYXV0aGlkO1xuICBzZWxmLnB1Ymxpc2hlcl9hdXRocm9sZSA9IHB1Ymxpc2hlcl9hdXRocm9sZTtcbiAgc2VsZi5yZXRhaW5lZCA9IHJldGFpbmVkO1xuICBzZWxmLmZvcndhcmRfZm9yID0gZm9yd2FyZF9mb3I7XG59O1xuXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gUmVzdWx0KGFyZ3MsIGt3YXJncykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYuYXJncyA9IGFyZ3MgfHwgW107XG4gIHNlbGYua3dhcmdzID0ga3dhcmdzIHx8IHt9O1xufTtcblxudmFyIEVycm9yID0gZnVuY3Rpb24gRXJyb3IoZXJyb3IsIGFyZ3MsIGt3YXJncykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYuZXJyb3IgPSBlcnJvcjtcbiAgc2VsZi5hcmdzID0gYXJncyB8fCBbXTtcbiAgc2VsZi5rd2FyZ3MgPSBrd2FyZ3MgfHwge307XG59O1xuXG52YXIgU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gU3Vic2NyaXB0aW9uKHRvcGljLCBoYW5kbGVyLCBvcHRpb25zLCBzZXNzaW9uLCBpZCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYudG9waWMgPSB0b3BpYztcbiAgc2VsZi5oYW5kbGVyID0gaGFuZGxlcjtcbiAgc2VsZi5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgc2VsZi5zZXNzaW9uID0gc2Vzc2lvbjtcbiAgc2VsZi5pZCA9IGlkO1xuICBzZWxmLmFjdGl2ZSA9IHRydWU7IC8vIHRoaXMgd2lsbCBmaXJlIHdoZW4gdGhlIGhhbmRsZXIgaXMgdW5zdWJzY3JpYmVkXG5cbiAgc2VsZi5fb25fdW5zdWJzY3JpYmUgPSBzZXNzaW9uLl9kZWZlcigpO1xuXG4gIGlmIChzZWxmLl9vbl91bnN1YnNjcmliZS5wcm9taXNlLnRoZW4pIHtcbiAgICAvLyB3aGVuanMgaGFzIHRoZSBhY3R1YWwgdXNlciBwcm9taXNlIGluIGFuIGF0dHJpYnV0ZVxuICAgIHNlbGYub25fdW5zdWJzY3JpYmUgPSBzZWxmLl9vbl91bnN1YnNjcmliZS5wcm9taXNlO1xuICB9IGVsc2Uge1xuICAgIHNlbGYub25fdW5zdWJzY3JpYmUgPSBzZWxmLl9vbl91bnN1YnNjcmliZTtcbiAgfVxufTtcblxuU3Vic2NyaXB0aW9uLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICByZXR1cm4gc2VsZi5zZXNzaW9uLnVuc3Vic2NyaWJlKHNlbGYpO1xufTtcblxudmFyIFJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uIFJlZ2lzdHJhdGlvbihwcm9jZWR1cmUsIGVuZHBvaW50LCBvcHRpb25zLCBzZXNzaW9uLCBpZCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYucHJvY2VkdXJlID0gcHJvY2VkdXJlO1xuICBzZWxmLmVuZHBvaW50ID0gZW5kcG9pbnQ7XG4gIHNlbGYub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHNlbGYuc2Vzc2lvbiA9IHNlc3Npb247XG4gIHNlbGYuaWQgPSBpZDtcbiAgc2VsZi5hY3RpdmUgPSB0cnVlOyAvLyB0aGlzIHdpbGwgZmlyZSB3aGVuIHRoZSBlbmRwb2ludCBpcyB1bnJlZ2lzdGVyZWRcblxuICBzZWxmLl9vbl91bnJlZ2lzdGVyID0gc2Vzc2lvbi5fZGVmZXIoKTtcblxuICBpZiAoc2VsZi5fb25fdW5yZWdpc3Rlci5wcm9taXNlLnRoZW4pIHtcbiAgICAvLyB3aGVuanMgaGFzIHRoZSBhY3R1YWwgdXNlciBwcm9taXNlIGluIGFuIGF0dHJpYnV0ZVxuICAgIHNlbGYub25fdW5yZWdpc3RlciA9IHNlbGYuX29uX3VucmVnaXN0ZXIucHJvbWlzZTtcbiAgfSBlbHNlIHtcbiAgICBzZWxmLm9uX3VucmVnaXN0ZXIgPSBzZWxmLl9vbl91bnJlZ2lzdGVyO1xuICB9XG59O1xuXG5SZWdpc3RyYXRpb24ucHJvdG90eXBlLnVucmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgcmV0dXJuIHNlbGYuc2Vzc2lvbi51bnJlZ2lzdGVyKHNlbGYpO1xufTtcblxudmFyIFB1YmxpY2F0aW9uID0gZnVuY3Rpb24gUHVibGljYXRpb24oaWQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLmlkID0gaWQ7XG59O1xuXG52YXIgTVNHX1RZUEUgPSB7XG4gIEhFTExPOiAxLFxuICBXRUxDT01FOiAyLFxuICBBQk9SVDogMyxcbiAgQ0hBTExFTkdFOiA0LFxuICBBVVRIRU5USUNBVEU6IDUsXG4gIEdPT0RCWUU6IDYsXG4gIEhFQVJUQkVBVDogNyxcbiAgRVJST1I6IDgsXG4gIFBVQkxJU0g6IDE2LFxuICBQVUJMSVNIRUQ6IDE3LFxuICBTVUJTQ1JJQkU6IDMyLFxuICBTVUJTQ1JJQkVEOiAzMyxcbiAgVU5TVUJTQ1JJQkU6IDM0LFxuICBVTlNVQlNDUklCRUQ6IDM1LFxuICBFVkVOVDogMzYsXG4gIENBTEw6IDQ4LFxuICBDQU5DRUw6IDQ5LFxuICBSRVNVTFQ6IDUwLFxuICBSRUdJU1RFUjogNjQsXG4gIFJFR0lTVEVSRUQ6IDY1LFxuICBVTlJFR0lTVEVSOiA2NixcbiAgVU5SRUdJU1RFUkVEOiA2NyxcbiAgSU5WT0NBVElPTjogNjgsXG4gIElOVEVSUlVQVDogNjksXG4gIFlJRUxEOiA3MFxufTtcblxudmFyIFNlc3Npb24gPSBmdW5jdGlvbiBTZXNzaW9uKHNvY2tldCwgZGVmZXIsIG9uY2hhbGxlbmdlLCBvbl91c2VyX2Vycm9yLCBvbl9pbnRlcm5hbF9lcnJvcikge1xuICB2YXIgc2VsZiA9IHRoaXM7IC8vIHRoZSB0cmFuc3BvcnQgY29ubmVjdGlvbiAoV2ViU29ja2V0IG9iamVjdClcblxuICBzZWxmLl9zb2NrZXQgPSBzb2NrZXQ7IC8vIHRoZSBEZWZlcnJlZCBmYWN0b3J5IHRvIHVzZVxuXG4gIHNlbGYuX2RlZmVyID0gZGVmZXI7IC8vIHRoZSBXQU1QIGF1dGhlbnRpY2F0aW9uIGNoYWxsZW5nZSBoYW5kbGVyXG5cbiAgc2VsZi5fb25jaGFsbGVuZ2UgPSBvbmNoYWxsZW5nZTsgLy8gY3VzdG9tIGVycm9yIGhhbmRsZXJzXG5cbiAgc2VsZi5fb25fdXNlcl9lcnJvciA9IG9uX3VzZXJfZXJyb3I7XG4gIHNlbGYuX29uX2ludGVybmFsX2Vycm9yID0gb25faW50ZXJuYWxfZXJyb3I7IC8vIHRoZSBXQU1QIHNlc3Npb24gSURcblxuICBzZWxmLl9pZCA9IG51bGw7IC8vIHRoZSBXQU1QIHJlYWxtIGpvaW5lZFxuXG4gIHNlbGYuX3JlYWxtID0gbnVsbDsgLy8gdGhlIFdBTVAgZmVhdHVyZXMgaW4gdXNlXG5cbiAgc2VsZi5fZmVhdHVyZXMgPSBudWxsOyAvLyBjbG9zaW5nIHN0YXRlXG5cbiAgc2VsZi5fZ29vZGJ5ZV9zZW50ID0gZmFsc2U7XG4gIHNlbGYuX3RyYW5zcG9ydF9pc19jbG9zaW5nID0gZmFsc2U7IC8vIG91dHN0YW5kaW5nIHJlcXVlc3RzO1xuXG4gIHNlbGYuX3B1Ymxpc2hfcmVxcyA9IHt9O1xuICBzZWxmLl9zdWJzY3JpYmVfcmVxcyA9IHt9O1xuICBzZWxmLl91bnN1YnNjcmliZV9yZXFzID0ge307XG4gIHNlbGYuX2NhbGxfcmVxcyA9IHt9O1xuICBzZWxmLl9yZWdpc3Rlcl9yZXFzID0ge307XG4gIHNlbGYuX3VucmVnaXN0ZXJfcmVxcyA9IHt9OyAvLyBzdWJzY3JpcHRpb25zIGluIHBsYWNlO1xuXG4gIHNlbGYuX3N1YnNjcmlwdGlvbnMgPSB7fTsgLy8gcmVnaXN0cmF0aW9ucyBpbiBwbGFjZTtcblxuICBzZWxmLl9yZWdpc3RyYXRpb25zID0ge307IC8vIGluY29taW5nIGludm9jYXRpb25zO1xuXG4gIHNlbGYuX2ludm9jYXRpb25zID0ge307IC8vIHByZWZpeCBzaG9ydGN1dHMgZm9yIFVSSXNcblxuICBzZWxmLl9wcmVmaXhlcyA9IHt9OyAvLyB0aGUgZGVmYXVsdHMgZm9yICdkaXNjbG9zZV9tZSdcblxuICBzZWxmLl9jYWxsZXJfZGlzY2xvc2VfbWUgPSBmYWxzZTtcbiAgc2VsZi5fcHVibGlzaGVyX2Rpc2Nsb3NlX21lID0gZmFsc2U7XG5cbiAgc2VsZi5fc2VuZF93YW1wID0gZnVuY3Rpb24gKG1zZykge1xuICAgIHV0aWwuZGVidWcobXNnKTsgLy8gZm9yd2FyZCBXQU1QIG1lc3NhZ2UgdG8gYmUgc2VudCB0byBXQU1QIHRyYW5zcG9ydFxuXG4gICAgc2VsZi5fc29ja2V0LnNlbmQobXNnKTtcbiAgfTtcblxuICBzZWxmLl9wcm90b2NvbF92aW9sYXRpb24gPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgc2VsZi5fc29ja2V0LmNsb3NlKDMwMDIsICdwcm90b2NvbCB2aW9sYXRpb246ICcgKyByZWFzb24pO1xuXG4gICAgdXRpbC5oYW5kbGVfZXJyb3Ioc2VsZi5fb25faW50ZXJuYWxfZXJyb3IsIEVycm9yKCdmYWlsaW5nIHRyYW5zcG9ydCBkdWUgdG8gcHJvdG9jb2wgdmlvbGF0aW9uOiAnICsgcmVhc29uKSk7XG4gIH07XG5cbiAgc2VsZi5fTUVTU0FHRV9NQVAgPSB7fTtcbiAgc2VsZi5fTUVTU0FHRV9NQVBbTVNHX1RZUEUuRVJST1JdID0ge307XG4gIHZhciBuZXh0X3JlcV9pZCA9IDA7XG5cbiAgc2VsZi5fbmV3X3JlcXVlc3RfaWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5leHRfcmVxX2lkIDwgOTAwNzE5OTI1NDc0MDk5Mikge1xuICAgICAgbmV4dF9yZXFfaWQgKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dF9yZXFfaWQgPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0X3JlcV9pZDtcbiAgfTtcblxuICBzZWxmLl9wcm9jZXNzX1NVQlNDUklCRUQgPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgLy9cbiAgICAvLyBwcm9jZXNzIFNVQlNDUklCRUQgcmVwbHkgdG8gU1VCU0NSSUJFXG4gICAgLy9cbiAgICB2YXIgcmVxdWVzdCA9IG1zZ1sxXTtcbiAgICB2YXIgc3Vic2NyaXB0aW9uID0gbXNnWzJdO1xuXG4gICAgaWYgKHJlcXVlc3QgaW4gc2VsZi5fc3Vic2NyaWJlX3JlcXMpIHtcbiAgICAgIHZhciByID0gc2VsZi5fc3Vic2NyaWJlX3JlcXNbcmVxdWVzdF07XG4gICAgICB2YXIgZCA9IHJbMF07XG4gICAgICB2YXIgdG9waWMgPSByWzFdO1xuICAgICAgdmFyIGhhbmRsZXIgPSByWzJdO1xuICAgICAgdmFyIG9wdGlvbnMgPSByWzNdO1xuXG4gICAgICBpZiAoIShzdWJzY3JpcHRpb24gaW4gc2VsZi5fc3Vic2NyaXB0aW9ucykpIHtcbiAgICAgICAgc2VsZi5fc3Vic2NyaXB0aW9uc1tzdWJzY3JpcHRpb25dID0gW107XG4gICAgICB9XG5cbiAgICAgIHZhciBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uKHRvcGljLCBoYW5kbGVyLCBvcHRpb25zLCBzZWxmLCBzdWJzY3JpcHRpb24pO1xuXG4gICAgICBzZWxmLl9zdWJzY3JpcHRpb25zW3N1YnNjcmlwdGlvbl0ucHVzaChzdWIpO1xuXG4gICAgICBkLnJlc29sdmUoc3ViKTtcbiAgICAgIGRlbGV0ZSBzZWxmLl9zdWJzY3JpYmVfcmVxc1tyZXF1ZXN0XTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5fcHJvdG9jb2xfdmlvbGF0aW9uKCdTVUJTQ1JJQkVEIHJlY2VpdmVkIGZvciBub24tcGVuZGluZyByZXF1ZXN0IElEICcgKyByZXF1ZXN0KTtcbiAgICB9XG4gIH07XG5cbiAgc2VsZi5fTUVTU0FHRV9NQVBbTVNHX1RZUEUuU1VCU0NSSUJFRF0gPSBzZWxmLl9wcm9jZXNzX1NVQlNDUklCRUQ7XG5cbiAgc2VsZi5fcHJvY2Vzc19TVUJTQ1JJQkVfRVJST1IgPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgLy9cbiAgICAvLyBwcm9jZXNzIEVSUk9SIHJlcGx5IHRvIFNVQlNDUklCRVxuICAgIC8vXG4gICAgdmFyIHJlcXVlc3QgPSBtc2dbMl07XG5cbiAgICBpZiAocmVxdWVzdCBpbiBzZWxmLl9zdWJzY3JpYmVfcmVxcykge1xuICAgICAgdmFyIGRldGFpbHMgPSBtc2dbM107XG4gICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobXNnWzRdLCBtc2dbNV0sIG1zZ1s2XSk7XG4gICAgICBlcnJvci5yZWFzb24gPSBtc2dbNF07XG4gICAgICBlcnJvci5kZXRhaWxzID0gZGV0YWlscztcbiAgICAgIHZhciByID0gc2VsZi5fc3Vic2NyaWJlX3JlcXNbcmVxdWVzdF07XG4gICAgICB2YXIgZCA9IHJbMF07XG4gICAgICBkLnJlamVjdChlcnJvcik7XG4gICAgICBkZWxldGUgc2VsZi5fc3Vic2NyaWJlX3JlcXNbcmVxdWVzdF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuX3Byb3RvY29sX3Zpb2xhdGlvbignU1VCU0NSSUJFLUVSUk9SIHJlY2VpdmVkIGZvciBub24tcGVuZGluZyByZXF1ZXN0IElEICcgKyByZXF1ZXN0KTtcbiAgICB9XG4gIH07XG5cbiAgc2VsZi5fTUVTU0FHRV9NQVBbTVNHX1RZUEUuRVJST1JdW01TR19UWVBFLlNVQlNDUklCRV0gPSBzZWxmLl9wcm9jZXNzX1NVQlNDUklCRV9FUlJPUjtcblxuICBzZWxmLl9wcm9jZXNzX1VOU1VCU0NSSUJFRCA9IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAvL1xuICAgIC8vIHByb2Nlc3MgVU5TVUJTQ1JJQkVEIHJlcGx5IHRvIFVOU1VCU0NSSUJFXG4gICAgLy9cbiAgICB2YXIgcmVxdWVzdCA9IG1zZ1sxXTtcblxuICAgIGlmIChyZXF1ZXN0IGluIHNlbGYuX3Vuc3Vic2NyaWJlX3JlcXMpIHtcbiAgICAgIHZhciByID0gc2VsZi5fdW5zdWJzY3JpYmVfcmVxc1tyZXF1ZXN0XTtcbiAgICAgIHZhciBkID0gclswXTtcbiAgICAgIHZhciBzdWJzY3JpcHRpb25faWQgPSByWzFdO1xuXG4gICAgICBpZiAoc3Vic2NyaXB0aW9uX2lkIGluIHNlbGYuX3N1YnNjcmlwdGlvbnMpIHtcbiAgICAgICAgdmFyIHN1YnMgPSBzZWxmLl9zdWJzY3JpcHRpb25zW3N1YnNjcmlwdGlvbl9pZF07IC8vIHRoZSBmb2xsb3dpbmcgc2hvdWxkIGFjdHVhbGx5IGJlIE5PUCwgc2luY2UgVU5TVUJTQ1JJQkUgd2FzXG4gICAgICAgIC8vIG9ubHkgc2VudCB3aGVuIHN1YnMgZ290IGVtcHR5XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgc3Vic1tpXS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgIHN1YnNbaV0uX29uX3Vuc3Vic2NyaWJlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzZWxmLl9zdWJzY3JpcHRpb25zW3N1YnNjcmlwdGlvbl9pZF07XG4gICAgICB9XG5cbiAgICAgIGQucmVzb2x2ZSh0cnVlKTtcbiAgICAgIGRlbGV0ZSBzZWxmLl91bnN1YnNjcmliZV9yZXFzW3JlcXVlc3RdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVxdWVzdCA9PT0gMCkge1xuICAgICAgICAvLyByb3V0ZXIgYWN0aXZlbHkgcmV2b2tlZCBvdXIgc3Vic2NyaXB0aW9uXG4gICAgICAgIC8vXG4gICAgICAgIHZhciBkZXRhaWxzID0gbXNnWzJdO1xuICAgICAgICB2YXIgX3N1YnNjcmlwdGlvbl9pZCA9IGRldGFpbHMuc3Vic2NyaXB0aW9uO1xuICAgICAgICB2YXIgcmVhc29uID0gZGV0YWlscy5yZWFzb247XG5cbiAgICAgICAgaWYgKF9zdWJzY3JpcHRpb25faWQgaW4gc2VsZi5fc3Vic2NyaXB0aW9ucykge1xuICAgICAgICAgIHZhciBfc3VicyA9IHNlbGYuX3N1YnNjcmlwdGlvbnNbX3N1YnNjcmlwdGlvbl9pZF07XG5cbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX3N1YnMubGVuZ3RoOyArK19pKSB7XG4gICAgICAgICAgICBfc3Vic1tfaV0uYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIF9zdWJzW19pXS5fb25fdW5zdWJzY3JpYmUucmVzb2x2ZShyZWFzb24pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRlbGV0ZSBzZWxmLl9zdWJzY3JpcHRpb25zW19zdWJzY3JpcHRpb25faWRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuX3Byb3RvY29sX3Zpb2xhdGlvbignbm9uLXZvbHVudGFyeSBVTlNVQlNDUklCRUQgcmVjZWl2ZWQgZm9yIG5vbi1leGlzdGluZyBzdWJzY3JpcHRpb24gSUQgJyArIF9zdWJzY3JpcHRpb25faWQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLl9wcm90b2NvbF92aW9sYXRpb24oJ1VOU1VCU0NSSUJFRCByZWNlaXZlZCBmb3Igbm9uLXBlbmRpbmcgcmVxdWVzdCBJRCAnICsgcmVxdWVzdCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHNlbGYuX01FU1NBR0VfTUFQW01TR19UWVBFLlVOU1VCU0NSSUJFRF0gPSBzZWxmLl9wcm9jZXNzX1VOU1VCU0NSSUJFRDtcblxuICBzZWxmLl9wcm9jZXNzX1VOU1VCU0NSSUJFX0VSUk9SID0gZnVuY3Rpb24gKG1zZykge1xuICAgIC8vXG4gICAgLy8gcHJvY2VzcyBFUlJPUiByZXBseSB0byBVTlNVQlNDUklCRVxuICAgIC8vXG4gICAgdmFyIHJlcXVlc3QgPSBtc2dbMl07XG5cbiAgICBpZiAocmVxdWVzdCBpbiBzZWxmLl91bnN1YnNjcmliZV9yZXFzKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IG1zZ1szXTtcbiAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihtc2dbNF0sIG1zZ1s1XSwgbXNnWzZdKTtcbiAgICAgIGVycm9yLnJlYXNvbiA9IG1zZ1s0XTtcbiAgICAgIGVycm9yLmRldGFpbHMgPSBkZXRhaWxzO1xuICAgICAgdmFyIHIgPSBzZWxmLl91bnN1YnNjcmliZV9yZXFzW3JlcXVlc3RdO1xuICAgICAgdmFyIGQgPSByWzBdOyAvLyBsZXQgc3Vic2NyaXB0aW9uID0gclsxXVxuXG4gICAgICBkLnJlamVjdChlcnJvcik7XG4gICAgICBkZWxldGUgc2VsZi5fdW5zdWJzY3JpYmVfcmVxc1tyZXF1ZXN0XTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5fcHJvdG9jb2xfdmlvbGF0aW9uKCdVTlNVQlNDUklCRS1FUlJPUiByZWNlaXZlZCBmb3Igbm9uLXBlbmRpbmcgcmVxdWVzdCBJRCAnICsgcmVxdWVzdCk7XG4gICAgfVxuICB9O1xuXG4gIHNlbGYuX01FU1NBR0VfTUFQW01TR19UWVBFLkVSUk9SXVtNU0dfVFlQRS5VTlNVQlNDUklCRV0gPSBzZWxmLl9wcm9jZXNzX1VOU1VCU0NSSUJFX0VSUk9SO1xuXG4gIHNlbGYuX3Byb2Nlc3NfUFVCTElTSEVEID0gZnVuY3Rpb24gKG1zZykge1xuICAgIC8vXG4gICAgLy8gcHJvY2VzcyBQVUJMSVNIRUQgcmVwbHkgdG8gUFVCTElTSFxuICAgIC8vXG4gICAgdmFyIHJlcXVlc3QgPSBtc2dbMV07XG4gICAgdmFyIHB1YmxpY2F0aW9uID0gbXNnWzJdO1xuXG4gICAgaWYgKHJlcXVlc3QgaW4gc2VsZi5fcHVibGlzaF9yZXFzKSB7XG4gICAgICB2YXIgciA9IHNlbGYuX3B1Ymxpc2hfcmVxc1tyZXF1ZXN0XTtcbiAgICAgIHZhciBkID0gclswXTsgLy8gbGV0IG9wdGlvbnMgPSByWzFdXG5cbiAgICAgIHZhciBwdWIgPSBuZXcgUHVibGljYXRpb24ocHVibGljYXRpb24pO1xuICAgICAgZC5yZXNvbHZlKHB1Yik7XG4gICAgICBkZWxldGUgc2VsZi5fcHVibGlzaF9yZXFzW3JlcXVlc3RdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLl9wcm90b2NvbF92aW9sYXRpb24oJ1BVQkxJU0hFRCByZWNlaXZlZCBmb3Igbm9uLXBlbmRpbmcgcmVxdWVzdCBJRCAnICsgcmVxdWVzdCk7XG4gICAgfVxuICB9O1xuXG4gIHNlbGYuX01FU1NBR0VfTUFQW01TR19UWVBFLlBVQkxJU0hFRF0gPSBzZWxmLl9wcm9jZXNzX1BVQkxJU0hFRDtcblxuICBzZWxmLl9wcm9jZXNzX1BVQkxJU0hfRVJST1IgPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgLy9cbiAgICAvLyBwcm9jZXNzIEVSUk9SIHJlcGx5IHRvIFBVQkxJU0hcbiAgICAvL1xuICAgIHZhciByZXF1ZXN0ID0gbXNnWzJdO1xuXG4gICAgaWYgKHJlcXVlc3QgaW4gc2VsZi5fcHVibGlzaF9yZXFzKSB7XG4gICAgICAvLyBsZXQgZGV0YWlscyA9IG1zZ1szXVxuICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1zZ1s0XSwgbXNnWzVdLCBtc2dbNl0pO1xuICAgICAgdmFyIHIgPSBzZWxmLl9wdWJsaXNoX3JlcXNbcmVxdWVzdF07XG4gICAgICB2YXIgZCA9IHJbMF07IC8vIGxldCBvcHRpb25zID0gclsxXVxuXG4gICAgICBkLnJlamVjdChlcnJvcik7XG4gICAgICBkZWxldGUgc2VsZi5fcHVibGlzaF9yZXFzW3JlcXVlc3RdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLl9wcm90b2NvbF92aW9sYXRpb24oJ1BVQkxJU0gtRVJST1IgcmVjZWl2ZWQgZm9yIG5vbi1wZW5kaW5nIHJlcXVlc3QgSUQgJyArIHJlcXVlc3QpO1xuICAgIH1cbiAgfTtcblxuICBzZWxmLl9NRVNTQUdFX01BUFtNU0dfVFlQRS5FUlJPUl1bTVNHX1RZUEUuUFVCTElTSF0gPSBzZWxmLl9wcm9jZXNzX1BVQkxJU0hfRVJST1I7XG5cbiAgc2VsZi5fcHJvY2Vzc19FVkVOVCA9IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAvL1xuICAgIC8vIHByb2Nlc3MgRVZFTlQgbWVzc2FnZVxuICAgIC8vXG4gICAgLy8gW0VWRU5ULCBTVUJTQ1JJQkVELlN1YnNjcmlwdGlvbnxpZCwgUFVCTElTSEVELlB1YmxpY2F0aW9ufGlkLCBEZXRhaWxzfGRpY3QsIFBVQkxJU0guQXJndW1lbnRzfGxpc3QsIFBVQkxJU0guQXJndW1lbnRzS3d8ZGljdF1cbiAgICB2YXIgc3Vic2NyaXB0aW9uID0gbXNnWzFdO1xuXG4gICAgaWYgKHN1YnNjcmlwdGlvbiBpbiBzZWxmLl9zdWJzY3JpcHRpb25zKSB7XG4gICAgICB2YXIgcHVibGljYXRpb24gPSBtc2dbMl07XG4gICAgICB2YXIgZGV0YWlscyA9IG1zZ1szXTtcbiAgICAgIHZhciBhcmdzID0gbXNnWzRdIHx8IFtdO1xuICAgICAgdmFyIGt3YXJncyA9IG1zZ1s1XSB8fCB7fTtcbiAgICAgIHZhciBzdWJzID0gc2VsZi5fc3Vic2NyaXB0aW9uc1tzdWJzY3JpcHRpb25dOyAvLyB3ZSB3YW50IHRvIHByb3ZpZGUgdGhlIHN1YnNjcmlwdGlvbiB0b3BpYyB0byB0aGUgaGFuZGxlciwgYW5kIG1heSBuZWVkIHRvIGdldCB0aGlzXG4gICAgICAvLyBmcm9tIG9uZSBvZiB0aGUgc3Vic2NyaXB0aW9uIGhhbmRsZXIgb2JqZWN0cyBhdHRhY2hlZCB0byB0aGUgc3Vic2NyaXB0aW9uXG4gICAgICAvLyBzaW5jZSBmb3Igbm9uLXBhdHRlcm4gc3Vic2NyaXB0aW9ucyB0aGlzIGlzIG5vdCBzZW50IG92ZXIgdGhlIHdpcmVcblxuICAgICAgdmFyIGVkID0gbmV3IEV2ZW50KHB1YmxpY2F0aW9uLCBkZXRhaWxzLnRvcGljIHx8IHN1YnNbMF0gJiYgc3Vic1swXS50b3BpYywgZGV0YWlscy5wdWJsaXNoZXIsIGRldGFpbHMucHVibGlzaGVyX2F1dGhpZCwgZGV0YWlscy5wdWJsaXNoZXJfYXV0aHJvbGUsIGRldGFpbHMucmV0YWluZWQgfHwgZmFsc2UsIGRldGFpbHMuZm9yd2FyZF9mb3IpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHN1YiA9IHN1YnNbaV07XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzdWIuaGFuZGxlcihhcmdzLCBrd2FyZ3MsIGVkLCBzdWIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdXRpbC5oYW5kbGVfZXJyb3Ioc2VsZi5fb25fdXNlcl9lcnJvciwgZSwgJ0V4Y2VwdGlvbiByYWlzZWQgaW4gZXZlbnQgaGFuZGxlcjonKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLl9wcm90b2NvbF92aW9sYXRpb24oJ0VWRU5UIHJlY2VpdmVkIGZvciBub24tc3Vic2NyaWJlZCBzdWJzY3JpcHRpb24gSUQgJyArIHN1YnNjcmlwdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIHNlbGYuX01FU1NBR0VfTUFQW01TR19UWVBFLkVWRU5UXSA9IHNlbGYuX3Byb2Nlc3NfRVZFTlQ7XG5cbiAgc2VsZi5fcHJvY2Vzc19SRUdJU1RFUkVEID0gZnVuY3Rpb24gKG1zZykge1xuICAgIC8vXG4gICAgLy8gcHJvY2VzcyBSRUdJU1RFUkVEIHJlcGx5IHRvIFJFR0lTVEVSXG4gICAgLy9cbiAgICB2YXIgcmVxdWVzdCA9IG1zZ1sxXTtcbiAgICB2YXIgcmVnaXN0cmF0aW9uID0gbXNnWzJdO1xuXG4gICAgaWYgKHJlcXVlc3QgaW4gc2VsZi5fcmVnaXN0ZXJfcmVxcykge1xuICAgICAgdmFyIHIgPSBzZWxmLl9yZWdpc3Rlcl9yZXFzW3JlcXVlc3RdO1xuICAgICAgdmFyIGQgPSByWzBdO1xuICAgICAgdmFyIHByb2NlZHVyZSA9IHJbMV07XG4gICAgICB2YXIgZW5kcG9pbnQgPSByWzJdO1xuICAgICAgdmFyIG9wdGlvbnMgPSByWzNdO1xuICAgICAgdmFyIHJlZyA9IG5ldyBSZWdpc3RyYXRpb24ocHJvY2VkdXJlLCBlbmRwb2ludCwgb3B0aW9ucywgc2VsZiwgcmVnaXN0cmF0aW9uKTtcbiAgICAgIHNlbGYuX3JlZ2lzdHJhdGlvbnNbcmVnaXN0cmF0aW9uXSA9IHJlZztcbiAgICAgIGQucmVzb2x2ZShyZWcpO1xuICAgICAgZGVsZXRlIHNlbGYuX3JlZ2lzdGVyX3JlcXNbcmVxdWVzdF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuX3Byb3RvY29sX3Zpb2xhdGlvbignUkVHSVNURVJFRCByZWNlaXZlZCBmb3Igbm9uLXBlbmRpbmcgcmVxdWVzdCBJRCAnICsgcmVxdWVzdCk7XG4gICAgfVxuICB9O1xuXG4gIHNlbGYuX01FU1NBR0VfTUFQW01TR19UWVBFLlJFR0lTVEVSRURdID0gc2VsZi5fcHJvY2Vzc19SRUdJU1RFUkVEO1xuXG4gIHNlbGYuX3Byb2Nlc3NfUkVHSVNURVJfRVJST1IgPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgLy9cbiAgICAvLyBwcm9jZXNzIEVSUk9SIHJlcGx5IHRvIFJFR0lTVEVSXG4gICAgLy9cbiAgICB2YXIgcmVxdWVzdCA9IG1zZ1syXTtcblxuICAgIGlmIChyZXF1ZXN0IGluIHNlbGYuX3JlZ2lzdGVyX3JlcXMpIHtcbiAgICAgIC8vIGxldCBkZXRhaWxzID0gbXNnWzNdXG4gICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobXNnWzRdLCBtc2dbNV0sIG1zZ1s2XSk7XG4gICAgICB2YXIgciA9IHNlbGYuX3JlZ2lzdGVyX3JlcXNbcmVxdWVzdF07XG4gICAgICB2YXIgZCA9IHJbMF07XG4gICAgICBkLnJlamVjdChlcnJvcik7XG4gICAgICBkZWxldGUgc2VsZi5fcmVnaXN0ZXJfcmVxc1tyZXF1ZXN0XTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5fcHJvdG9jb2xfdmlvbGF0aW9uKCdSRUdJU1RFUi1FUlJPUiByZWNlaXZlZCBmb3Igbm9uLXBlbmRpbmcgcmVxdWVzdCBJRCAnICsgcmVxdWVzdCk7XG4gICAgfVxuICB9O1xuXG4gIHNlbGYuX01FU1NBR0VfTUFQW01TR19UWVBFLkVSUk9SXVtNU0dfVFlQRS5SRUdJU1RFUl0gPSBzZWxmLl9wcm9jZXNzX1JFR0lTVEVSX0VSUk9SO1xuXG4gIHNlbGYuX3Byb2Nlc3NfVU5SRUdJU1RFUkVEID0gZnVuY3Rpb24gKG1zZykge1xuICAgIC8vXG4gICAgLy8gcHJvY2VzcyBVTlJFR0lTVEVSRUQgcmVwbHkgdG8gVU5SRUdJU1RFUlxuICAgIC8vXG4gICAgdmFyIHJlcXVlc3QgPSBtc2dbMV07XG5cbiAgICBpZiAocmVxdWVzdCBpbiBzZWxmLl91bnJlZ2lzdGVyX3JlcXMpIHtcbiAgICAgIHZhciByID0gc2VsZi5fdW5yZWdpc3Rlcl9yZXFzW3JlcXVlc3RdO1xuICAgICAgdmFyIGQgPSByWzBdO1xuICAgICAgdmFyIHJlZ2lzdHJhdGlvbiA9IHJbMV07XG5cbiAgICAgIGlmIChyZWdpc3RyYXRpb24uaWQgaW4gc2VsZi5fcmVnaXN0cmF0aW9ucykge1xuICAgICAgICBkZWxldGUgc2VsZi5fcmVnaXN0cmF0aW9uc1tyZWdpc3RyYXRpb24uaWRdO1xuICAgICAgfVxuXG4gICAgICByZWdpc3RyYXRpb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICBkLnJlc29sdmUoKTtcbiAgICAgIGRlbGV0ZSBzZWxmLl91bnJlZ2lzdGVyX3JlcXNbcmVxdWVzdF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZXF1ZXN0ID09PSAwKSB7XG4gICAgICAgIC8vIHRoZSByb3V0ZXIgYWN0aXZlbHkgcmV2b2tlZCBvdXIgcmVnaXN0cmF0aW9uXG4gICAgICAgIC8vXG4gICAgICAgIHZhciBkZXRhaWxzID0gbXNnWzJdO1xuICAgICAgICB2YXIgcmVnaXN0cmF0aW9uX2lkID0gZGV0YWlscy5yZWdpc3RyYXRpb247XG4gICAgICAgIHZhciByZWFzb24gPSBkZXRhaWxzLnJlYXNvbjtcblxuICAgICAgICBpZiAocmVnaXN0cmF0aW9uX2lkIGluIHNlbGYuX3JlZ2lzdHJhdGlvbnMpIHtcbiAgICAgICAgICB2YXIgX3JlZ2lzdHJhdGlvbiA9IHNlbGYuX3JlZ2lzdHJhdGlvbnNbcmVnaXN0cmF0aW9uX2lkXTtcbiAgICAgICAgICBfcmVnaXN0cmF0aW9uLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgX3JlZ2lzdHJhdGlvbi5fb25fdW5yZWdpc3Rlci5yZXNvbHZlKHJlYXNvbik7XG5cbiAgICAgICAgICBkZWxldGUgc2VsZi5fcmVnaXN0cmF0aW9uc1tyZWdpc3RyYXRpb25faWRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuX3Byb3RvY29sX3Zpb2xhdGlvbignbm9uLXZvbHVudGFyeSBVTlJFR0lTVEVSRUQgcmVjZWl2ZWQgZm9yIG5vbi1leGlzdGluZyByZWdpc3RyYXRpb24gSUQgJyArIHJlZ2lzdHJhdGlvbl9pZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuX3Byb3RvY29sX3Zpb2xhdGlvbignVU5SRUdJU1RFUkVEIHJlY2VpdmVkIGZvciBub24tcGVuZGluZyByZXF1ZXN0IElEICcgKyByZXF1ZXN0KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc2VsZi5fTUVTU0FHRV9NQVBbTVNHX1RZUEUuVU5SRUdJU1RFUkVEXSA9IHNlbGYuX3Byb2Nlc3NfVU5SRUdJU1RFUkVEO1xuXG4gIHNlbGYuX3Byb2Nlc3NfVU5SRUdJU1RFUl9FUlJPUiA9IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAvL1xuICAgIC8vIHByb2Nlc3MgRVJST1IgcmVwbHkgdG8gVU5SRUdJU1RFUlxuICAgIC8vXG4gICAgdmFyIHJlcXVlc3QgPSBtc2dbMl07XG5cbiAgICBpZiAocmVxdWVzdCBpbiBzZWxmLl91bnJlZ2lzdGVyX3JlcXMpIHtcbiAgICAgIC8vIGxldCBkZXRhaWxzID0gbXNnWzNdXG4gICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobXNnWzRdLCBtc2dbNV0sIG1zZ1s2XSk7XG4gICAgICB2YXIgciA9IHNlbGYuX3VucmVnaXN0ZXJfcmVxc1tyZXF1ZXN0XTtcbiAgICAgIHZhciBkID0gclswXTsgLy8gbGV0IHJlZ2lzdHJhdGlvbiA9IHJbMV1cblxuICAgICAgZC5yZWplY3QoZXJyb3IpO1xuICAgICAgZGVsZXRlIHNlbGYuX3VucmVnaXN0ZXJfcmVxc1tyZXF1ZXN0XTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5fcHJvdG9jb2xfdmlvbGF0aW9uKCdVTlJFR0lTVEVSLUVSUk9SIHJlY2VpdmVkIGZvciBub24tcGVuZGluZyByZXF1ZXN0IElEICcgKyByZXF1ZXN0KTtcbiAgICB9XG4gIH07XG5cbiAgc2VsZi5fTUVTU0FHRV9NQVBbTVNHX1RZUEUuRVJST1JdW01TR19UWVBFLlVOUkVHSVNURVJdID0gc2VsZi5fcHJvY2Vzc19VTlJFR0lTVEVSX0VSUk9SO1xuXG4gIHNlbGYuX3Byb2Nlc3NfUkVTVUxUID0gZnVuY3Rpb24gKG1zZykge1xuICAgIC8vXG4gICAgLy8gcHJvY2VzcyBSRVNVTFQgcmVwbHkgdG8gQ0FMTFxuICAgIC8vXG4gICAgdmFyIHJlcXVlc3QgPSBtc2dbMV07XG5cbiAgICBpZiAocmVxdWVzdCBpbiBzZWxmLl9jYWxsX3JlcXMpIHtcbiAgICAgIHZhciBkZXRhaWxzID0gbXNnWzJdO1xuICAgICAgdmFyIGFyZ3MgPSBtc2dbM10gfHwgW107XG4gICAgICB2YXIga3dhcmdzID0gbXNnWzRdIHx8IHt9OyAvLyBtYXliZSB3cmFwIGNvbXBsZXggcmVzdWx0OlxuXG4gICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSB8fCBPYmplY3Qua2V5cyhrd2FyZ3MpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gd3JhcCBjb21wbGV4IHJlc3VsdCBpcyBtb3JlIHRoYW4gMSBwb3NpdGlvbmFsIHJlc3VsdCBPUlxuICAgICAgICAvLyBub24tZW1wdHkga2V5d29yZCByZXN1bHRcbiAgICAgICAgcmVzdWx0ID0gbmV3IFJlc3VsdChhcmdzLCBrd2FyZ3MpO1xuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gc2luZ2xlIHBvc2l0aW9uYWwgcmVzdWx0XG4gICAgICAgIHJlc3VsdCA9IGFyZ3NbMF07XG4gICAgICB9XG5cbiAgICAgIHZhciByID0gc2VsZi5fY2FsbF9yZXFzW3JlcXVlc3RdO1xuICAgICAgdmFyIGQgPSByWzBdO1xuICAgICAgdmFyIG9wdGlvbnMgPSByWzFdO1xuXG4gICAgICBpZiAoZGV0YWlscy5wcm9ncmVzcykge1xuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnJlY2VpdmVfcHJvZ3Jlc3MpIHtcbiAgICAgICAgICBkLm5vdGlmeShyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgZGVsZXRlIHNlbGYuX2NhbGxfcmVxc1tyZXF1ZXN0XTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5fcHJvdG9jb2xfdmlvbGF0aW9uKCdDQUxMLVJFU1VMVCByZWNlaXZlZCBmb3Igbm9uLXBlbmRpbmcgcmVxdWVzdCBJRCAnICsgcmVxdWVzdCk7XG4gICAgfVxuICB9O1xuXG4gIHNlbGYuX01FU1NBR0VfTUFQW01TR19UWVBFLlJFU1VMVF0gPSBzZWxmLl9wcm9jZXNzX1JFU1VMVDtcblxuICBzZWxmLl9wcm9jZXNzX0NBTExfRVJST1IgPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgLy9cbiAgICAvLyBwcm9jZXNzIEVSUk9SIHJlcGx5IHRvIENBTExcbiAgICAvL1xuICAgIHZhciByZXF1ZXN0ID0gbXNnWzJdO1xuXG4gICAgaWYgKHJlcXVlc3QgaW4gc2VsZi5fY2FsbF9yZXFzKSB7XG4gICAgICAvLyBsZXQgZGV0YWlscyA9IG1zZ1szXVxuICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1zZ1s0XSwgbXNnWzVdLCBtc2dbNl0pO1xuICAgICAgdmFyIHIgPSBzZWxmLl9jYWxsX3JlcXNbcmVxdWVzdF07XG4gICAgICB2YXIgZCA9IHJbMF07IC8vIGxldCBvcHRpb25zID0gclsxXVxuXG4gICAgICBkLnJlamVjdChlcnJvcik7XG4gICAgICBkZWxldGUgc2VsZi5fY2FsbF9yZXFzW3JlcXVlc3RdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLl9wcm90b2NvbF92aW9sYXRpb24oJ0NBTEwtRVJST1IgcmVjZWl2ZWQgZm9yIG5vbi1wZW5kaW5nIHJlcXVlc3QgSUQgJyArIHJlcXVlc3QpO1xuICAgIH1cbiAgfTtcblxuICBzZWxmLl9NRVNTQUdFX01BUFtNU0dfVFlQRS5FUlJPUl1bTVNHX1RZUEUuQ0FMTF0gPSBzZWxmLl9wcm9jZXNzX0NBTExfRVJST1I7XG5cbiAgc2VsZi5fcHJvY2Vzc19JTlZPQ0FUSU9OID0gZnVuY3Rpb24gKG1zZykge1xuICAgIC8vXG4gICAgLy8gcHJvY2VzcyBJTlZPQ0FUSU9OIG1lc3NhZ2VcbiAgICAvL1xuICAgIC8vIFtJTlZPQ0FUSU9OLCBSZXF1ZXN0fGlkLCBSRUdJU1RFUkVELlJlZ2lzdHJhdGlvbnxpZCwgRGV0YWlsc3xkaWN0LCBDQUxMLkFyZ3VtZW50c3xsaXN0LCBDQUxMLkFyZ3VtZW50c0t3fGRpY3RdXG4gICAgLy9cbiAgICB2YXIgcmVxdWVzdCA9IG1zZ1sxXTtcbiAgICB2YXIgcmVnaXN0cmF0aW9uID0gbXNnWzJdO1xuICAgIHZhciBkZXRhaWxzID0gbXNnWzNdOyAvLyByZWNlaXZlX3Byb2dyZXNzXG4gICAgLy8gdGltZW91dFxuICAgIC8vIGNhbGxlclxuXG4gICAgaWYgKHJlZ2lzdHJhdGlvbiBpbiBzZWxmLl9yZWdpc3RyYXRpb25zKSB7XG4gICAgICB2YXIgcmVnID0gc2VsZi5fcmVnaXN0cmF0aW9uc1tyZWdpc3RyYXRpb25dO1xuICAgICAgdmFyIGFyZ3MgPSBtc2dbNF0gfHwgW107XG4gICAgICB2YXIga3dhcmdzID0gbXNnWzVdIHx8IHt9OyAvLyBjcmVhdGUgcHJvZ3Jlc3MgZnVuY3Rpb24gZm9yIGludm9jYXRpb25cbiAgICAgIC8vXG5cbiAgICAgIHZhciBwcm9ncmVzcyA9IG51bGw7XG5cbiAgICAgIGlmIChkZXRhaWxzLnJlY2VpdmVfcHJvZ3Jlc3MpIHtcbiAgICAgICAgcHJvZ3Jlc3MgPSBmdW5jdGlvbiBwcm9ncmVzcyhhcmdzLCBrd2FyZ3MpIHtcbiAgICAgICAgICB2YXIgcHJvZ3Jlc3NfbXNnID0gW01TR19UWVBFLllJRUxELCByZXF1ZXN0LCB7XG4gICAgICAgICAgICBwcm9ncmVzczogdHJ1ZVxuICAgICAgICAgIH1dO1xuICAgICAgICAgIGFyZ3MgPSBhcmdzIHx8IFtdO1xuICAgICAgICAgIGt3YXJncyA9IGt3YXJncyB8fCB7fTtcbiAgICAgICAgICB2YXIga3dhcmdzX2xlbiA9IE9iamVjdC5rZXlzKGt3YXJncykubGVuZ3RoO1xuXG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIHx8IGt3YXJnc19sZW4pIHtcbiAgICAgICAgICAgIHByb2dyZXNzX21zZy5wdXNoKGFyZ3MpO1xuXG4gICAgICAgICAgICBpZiAoa3dhcmdzX2xlbikge1xuICAgICAgICAgICAgICBwcm9ncmVzc19tc2cucHVzaChrd2FyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX3NlbmRfd2FtcChwcm9ncmVzc19tc2cpO1xuICAgICAgICB9O1xuICAgICAgfSAvLyB3ZSB3YW50IHRvIHByb3ZpZGUgdGhlIHJlZ2l0cmF0aW9uIHByb2NlZHVyZSB0byB0aGUgaGFuZGxlciBhbmQgbWF5XG4gICAgICAvLyBuZWVkIHRvIGdldCB0aGlzIGZyb20gdGhlIHJlZ2lzdHJhdGlvbiBvYmplY3QgYXR0YWNoZWQgdG8gdGhlIHJlZ2lzdHJhdGlvblxuICAgICAgLy8gc2luY2UgZm9yIG5vbi1wYXR0ZXJuIHJlZ2lzdHJhdGlvbnMgdGhpcyBpcyBub3Qgc2VudCBvdmVyIHRoZSB3aXJlXG5cblxuICAgICAgdmFyIGNkID0gbmV3IEludm9jYXRpb24oZGV0YWlscy5wcm9jZWR1cmUgfHwgcmVnLnByb2NlZHVyZSwgcHJvZ3Jlc3MsIGRldGFpbHMuY2FsbGVyLCBkZXRhaWxzLmNhbGxlcl9hdXRoaWQsIGRldGFpbHMuY2FsbGVyX2F1dGhyb2xlKTsgLy8gV2UgdXNlIHRoZSBmb2xsb3dpbmcgd2hlbmpzIGNhbGwgd3JhcHBlciwgd2hpY2ggYXV0b21hdGljYWxseVxuICAgICAgLy8gd3JhcHMgYSBwbGFpbiwgbm9uLXByb21pc2UgdmFsdWUgaW4gYSAoaW1tZWRpYXRlbHkgcmVzb2x2ZWQpIHByb21pc2VcbiAgICAgIC8vXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9jdWpvanMvd2hlbi9ibG9iL21hc3Rlci9kb2NzL2FwaS5tZCNmbmNhbGxcbiAgICAgIC8vXG5cbiAgICAgIHV0aWwucHJvbWlzaWZ5KHJlZy5lbmRwb2ludCkoYXJncywga3dhcmdzLCBjZCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIC8vIGNvbnN0cnVjdCBZSUVMRCBtZXNzYWdlXG4gICAgICAgIC8vIEZJWE1FOiBPcHRpb25zXG4gICAgICAgIC8vXG4gICAgICAgIHZhciByZXBseSA9IFtNU0dfVFlQRS5ZSUVMRCwgcmVxdWVzdCwge31dO1xuXG4gICAgICAgIGlmIChyZXMgaW5zdGFuY2VvZiBSZXN1bHQpIHtcbiAgICAgICAgICB2YXIga3dhcmdzX2xlbiA9IE9iamVjdC5rZXlzKHJlcy5rd2FyZ3MpLmxlbmd0aDtcblxuICAgICAgICAgIGlmIChyZXMuYXJncy5sZW5ndGggfHwga3dhcmdzX2xlbikge1xuICAgICAgICAgICAgcmVwbHkucHVzaChyZXMuYXJncyk7XG5cbiAgICAgICAgICAgIGlmIChrd2FyZ3NfbGVuKSB7XG4gICAgICAgICAgICAgIHJlcGx5LnB1c2gocmVzLmt3YXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcGx5LnB1c2goW3Jlc10pO1xuICAgICAgICB9IC8vIHNlbmQgV0FNUCBtZXNzYWdlXG4gICAgICAgIC8vXG5cblxuICAgICAgICBzZWxmLl9zZW5kX3dhbXAocmVwbHkpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAvLyBjb25zdHJ1Y3QgRVJST1IgbWVzc2FnZVxuICAgICAgICAvLyBbRVJST1IsIFJFUVVFU1QuVHlwZXxpbnQsIFJFUVVFU1QuUmVxdWVzdHxpZCwgRGV0YWlsc3xkaWN0LCBFcnJvcnx1cmksIEFyZ3VtZW50c3xsaXN0LCBBcmd1bWVudHNLd3xkaWN0XVxuICAgICAgICB2YXIgcmVwbHkgPSBbTVNHX1RZUEUuRVJST1IsIE1TR19UWVBFLklOVk9DQVRJT04sIHJlcXVlc3QsIHt9XTtcblxuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXBseS5wdXNoKGVyci5lcnJvcik7XG4gICAgICAgICAgdmFyIGt3YXJnc19sZW4gPSBPYmplY3Qua2V5cyhlcnIua3dhcmdzKS5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAoZXJyLmFyZ3MubGVuZ3RoIHx8IGt3YXJnc19sZW4pIHtcbiAgICAgICAgICAgIHJlcGx5LnB1c2goZXJyLmFyZ3MpO1xuXG4gICAgICAgICAgICBpZiAoa3dhcmdzX2xlbikge1xuICAgICAgICAgICAgICByZXBseS5wdXNoKGVyci5rd2FyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXBseS5wdXNoKCd3YW1wLmVycm9yLnJ1bnRpbWVfZXJyb3InKTtcbiAgICAgICAgICByZXBseS5wdXNoKFtlcnJdKTtcbiAgICAgICAgfSAvLyBzZW5kIFdBTVAgbWVzc2FnZVxuICAgICAgICAvL1xuXG5cbiAgICAgICAgc2VsZi5fc2VuZF93YW1wKHJlcGx5KTtcblxuICAgICAgICB1dGlsLmhhbmRsZV9lcnJvcihzZWxmLl9vbl91c2VyX2Vycm9yLCBlcnIsICdFeGNlcHRpb24gcmFpc2VkIGluIGludm9jYXRpb24gaGFuZGxlcjonKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLl9wcm90b2NvbF92aW9sYXRpb24oJ0lOVk9DQVRJT04gcmVjZWl2ZWQgZm9yIG5vbi1yZWdpc3RlcmVkIHJlZ2lzdHJhdGlvbiBJRCAnICsgcmVxdWVzdCk7XG4gICAgfVxuICB9O1xuXG4gIHNlbGYuX01FU1NBR0VfTUFQW01TR19UWVBFLklOVk9DQVRJT05dID0gc2VsZi5fcHJvY2Vzc19JTlZPQ0FUSU9OOyAvLyBjYWxsYmFjayBmaXJlZCBieSBXQU1QIHRyYW5zcG9ydCBvbiByZWNlaXZpbmcgYSBXQU1QIG1lc3NhZ2VcbiAgLy9cblxuICBzZWxmLl9zb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKG1zZykge1xuICAgIHZhciBtc2dfdHlwZSA9IG1zZ1swXTsgLy8gV0FNUCBzZXNzaW9uIG5vdCB5ZXQgb3BlblxuICAgIC8vXG5cbiAgICBpZiAoIXNlbGYuX2lkKSB7XG4gICAgICAvLyB0aGUgZmlyc3QgbWVzc2FnZSBtdXN0IGJlIFdFTENPTUUsIEFCT1JUIG9yIENIQUxMRU5HRSAuLlxuICAgICAgLy9cbiAgICAgIGlmIChtc2dfdHlwZSA9PT0gTVNHX1RZUEUuV0VMQ09NRSkge1xuICAgICAgICBzZWxmLl9pZCA9IG1zZ1sxXTsgLy8gZGV0ZXJtaW5lIGFjdHVhbCBzZXQgb2YgYWR2YW5jZWQgZmVhdHVyZXMgdGhhdCBjYW4gYmUgdXNlZFxuICAgICAgICAvL1xuXG4gICAgICAgIHZhciByZiA9IG1zZ1syXTtcbiAgICAgICAgc2VsZi5fZmVhdHVyZXMgPSB7fTtcblxuICAgICAgICBpZiAocmYucm9sZXMuYnJva2VyKSB7XG4gICAgICAgICAgLy8gXCJCYXNpYyBQcm9maWxlXCIgaXMgbWFuZGF0b3J5XG4gICAgICAgICAgc2VsZi5fZmVhdHVyZXMuc3Vic2NyaWJlciA9IHt9O1xuICAgICAgICAgIHNlbGYuX2ZlYXR1cmVzLnB1Ymxpc2hlciA9IHt9OyAvLyBmaWxsIGluIGZlYXR1cmVzIHRoYXQgYm90aCBwZWVycyBzdXBwb3J0XG5cbiAgICAgICAgICBpZiAocmYucm9sZXMuYnJva2VyLmZlYXR1cmVzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBhdHQgaW4gV0FNUF9GRUFUVVJFUy5wdWJsaXNoZXIuZmVhdHVyZXMpIHtcbiAgICAgICAgICAgICAgc2VsZi5fZmVhdHVyZXMucHVibGlzaGVyW2F0dF0gPSBXQU1QX0ZFQVRVUkVTLnB1Ymxpc2hlci5mZWF0dXJlc1thdHRdICYmIHJmLnJvbGVzLmJyb2tlci5mZWF0dXJlc1thdHRdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBfYXR0IGluIFdBTVBfRkVBVFVSRVMuc3Vic2NyaWJlci5mZWF0dXJlcykge1xuICAgICAgICAgICAgICBzZWxmLl9mZWF0dXJlcy5zdWJzY3JpYmVyW19hdHRdID0gV0FNUF9GRUFUVVJFUy5zdWJzY3JpYmVyLmZlYXR1cmVzW19hdHRdICYmIHJmLnJvbGVzLmJyb2tlci5mZWF0dXJlc1tfYXR0XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmYucm9sZXMuZGVhbGVyKSB7XG4gICAgICAgICAgLy8gXCJCYXNpYyBQcm9maWxlXCIgaXMgbWFuZGF0b3J5XG4gICAgICAgICAgc2VsZi5fZmVhdHVyZXMuY2FsbGVyID0ge307XG4gICAgICAgICAgc2VsZi5fZmVhdHVyZXMuY2FsbGVlID0ge307IC8vIGZpbGwgaW4gZmVhdHVyZXMgdGhhdCBib3RoIHBlZXJzIHN1cHBvcnRcblxuICAgICAgICAgIGlmIChyZi5yb2xlcy5kZWFsZXIuZmVhdHVyZXMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9hdHQyIGluIFdBTVBfRkVBVFVSRVMuY2FsbGVyLmZlYXR1cmVzKSB7XG4gICAgICAgICAgICAgIHNlbGYuX2ZlYXR1cmVzLmNhbGxlcltfYXR0Ml0gPSBXQU1QX0ZFQVRVUkVTLmNhbGxlci5mZWF0dXJlc1tfYXR0Ml0gJiYgcmYucm9sZXMuZGVhbGVyLmZlYXR1cmVzW19hdHQyXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgX2F0dDMgaW4gV0FNUF9GRUFUVVJFUy5jYWxsZWUuZmVhdHVyZXMpIHtcbiAgICAgICAgICAgICAgc2VsZi5fZmVhdHVyZXMuY2FsbGVlW19hdHQzXSA9IFdBTVBfRkVBVFVSRVMuY2FsbGVlLmZlYXR1cmVzW19hdHQzXSAmJiByZi5yb2xlcy5kZWFsZXIuZmVhdHVyZXNbX2F0dDNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLm9uam9pbikge1xuICAgICAgICAgIHNlbGYub25qb2luKG1zZ1syXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobXNnX3R5cGUgPT09IE1TR19UWVBFLkFCT1JUKSB7XG4gICAgICAgIHZhciBkZXRhaWxzID0gbXNnWzFdO1xuICAgICAgICB2YXIgcmVhc29uID0gbXNnWzJdO1xuXG4gICAgICAgIGlmIChzZWxmLm9ubGVhdmUpIHtcbiAgICAgICAgICBzZWxmLm9ubGVhdmUocmVhc29uLCBkZXRhaWxzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtc2dfdHlwZSA9PT0gTVNHX1RZUEUuQ0hBTExFTkdFKSB7XG4gICAgICAgIGlmIChzZWxmLl9vbmNoYWxsZW5nZSkge1xuICAgICAgICAgIHZhciBtZXRob2QgPSBtc2dbMV07XG4gICAgICAgICAgdmFyIGV4dHJhID0gbXNnWzJdO1xuICAgICAgICAgIHV0aWwucHJvbWlzaWZ5KHNlbGYuX29uY2hhbGxlbmdlKShzZWxmLCBtZXRob2QsIGV4dHJhKS50aGVuKGZ1bmN0aW9uIChzaWduYXR1cmUpIHtcbiAgICAgICAgICAgIHZhciBtc2c7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2lnbmF0dXJlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBtc2cgPSBbTVNHX1RZUEUuQVVUSEVOVElDQVRFLCBzaWduYXR1cmUsIHt9XTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX3R5cGVvZihzaWduYXR1cmUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICB2YXIgc2lnbmF0dXJlU3RyaW5nID0gc2lnbmF0dXJlWzBdO1xuICAgICAgICAgICAgICB2YXIgYXV0aEV4dHJhID0gc2lnbmF0dXJlWzFdO1xuICAgICAgICAgICAgICBtc2cgPSBbTVNHX1RZUEUuQVVUSEVOVElDQVRFLCBzaWduYXR1cmVTdHJpbmcsIGF1dGhFeHRyYV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuX3NlbmRfd2FtcChtc2cpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHV0aWwuaGFuZGxlX2Vycm9yKHNlbGYuX29uX3VzZXJfZXJyb3IsIGVyciwgJ29uY2hhbGxlbmdlKCkgcmFpc2VkOiAnKTtcbiAgICAgICAgICAgIHZhciBtc2cgPSBbTVNHX1RZUEUuQUJPUlQsIHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ3NvcnJ5LCBJIGNhbm5vdCBhdXRoZW50aWNhdGUgKG9uY2hhbGxlbmdlIGhhbmRsZXIgcmFpc2VkIGFuIGV4Y2VwdGlvbiknXG4gICAgICAgICAgICB9LCAnd2FtcC5lcnJvci5jYW5ub3RfYXV0aGVudGljYXRlJ107XG5cbiAgICAgICAgICAgIHNlbGYuX3NlbmRfd2FtcChtc2cpO1xuXG4gICAgICAgICAgICBzZWxmLl9zb2NrZXQuY2xvc2UoMzAwMCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXRpbC5oYW5kbGVfZXJyb3Ioc2VsZi5fb25faW50ZXJuYWxfZXJyb3IsIEVycm9yKCdyZWNlaXZlZCBXQU1QIGNoYWxsZW5nZSwgYnV0IG5vIG9uY2hhbGxlbmdlKCkgaGFuZGxlciBzZXQnKSk7XG4gICAgICAgICAgdmFyIF9tc2cgPSBbTVNHX1RZUEUuQUJPUlQsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdzb3JyeSwgSSBjYW5ub3QgYXV0aGVudGljYXRlIChubyBvbmNoYWxsZW5nZSBoYW5kbGVyIHNldCknXG4gICAgICAgICAgfSwgJ3dhbXAuZXJyb3IuY2Fubm90X2F1dGhlbnRpY2F0ZSddO1xuXG4gICAgICAgICAgc2VsZi5fc2VuZF93YW1wKF9tc2cpO1xuXG4gICAgICAgICAgc2VsZi5fc29ja2V0LmNsb3NlKDMwMDApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLl9wcm90b2NvbF92aW9sYXRpb24oJ3VuZXhwZWN0ZWQgbWVzc2FnZSB0eXBlICcgKyBtc2dfdHlwZSk7XG4gICAgICB9IC8vIFdBTVAgc2Vzc2lvbiBpcyBvcGVuXG4gICAgICAvL1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtc2dfdHlwZSA9PT0gTVNHX1RZUEUuR09PREJZRSkge1xuICAgICAgICBpZiAoIXNlbGYuX2dvb2RieWVfc2VudCkge1xuICAgICAgICAgIHZhciByZXBseSA9IFtNU0dfVFlQRS5HT09EQllFLCB7fSwgJ3dhbXAuZXJyb3IuZ29vZGJ5ZV9hbmRfb3V0J107XG5cbiAgICAgICAgICBzZWxmLl9zZW5kX3dhbXAocmVwbHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5faWQgPSBudWxsO1xuICAgICAgICBzZWxmLl9yZWFsbSA9IG51bGw7XG4gICAgICAgIHNlbGYuX2ZlYXR1cmVzID0gbnVsbDtcbiAgICAgICAgdmFyIF9kZXRhaWxzID0gbXNnWzFdO1xuICAgICAgICB2YXIgX3JlYXNvbiA9IG1zZ1syXTtcblxuICAgICAgICBpZiAoc2VsZi5vbmxlYXZlKSB7XG4gICAgICAgICAgc2VsZi5vbmxlYXZlKF9yZWFzb24sIF9kZXRhaWxzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG1zZ190eXBlID09PSBNU0dfVFlQRS5FUlJPUikge1xuICAgICAgICAgIHZhciByZXF1ZXN0X3R5cGUgPSBtc2dbMV07XG5cbiAgICAgICAgICBpZiAocmVxdWVzdF90eXBlIGluIHNlbGYuX01FU1NBR0VfTUFQW01TR19UWVBFLkVSUk9SXSkge1xuICAgICAgICAgICAgc2VsZi5fTUVTU0FHRV9NQVBbbXNnX3R5cGVdW3JlcXVlc3RfdHlwZV0obXNnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5fcHJvdG9jb2xfdmlvbGF0aW9uKCd1bmV4cGVjdGVkIEVSUk9SIG1lc3NhZ2Ugd2l0aCByZXF1ZXN0X3R5cGUgJyArIHJlcXVlc3RfdHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChtc2dfdHlwZSBpbiBzZWxmLl9NRVNTQUdFX01BUCkge1xuICAgICAgICAgICAgc2VsZi5fTUVTU0FHRV9NQVBbbXNnX3R5cGVdKG1zZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuX3Byb3RvY29sX3Zpb2xhdGlvbigndW5leHBlY3RlZCBtZXNzYWdlIHR5cGUgJyArIG1zZ190eXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07IC8vIHNlc3Npb24gb2JqZWN0IGNvbnN0cnVjdGVkIC4uIHRyYWNrIGNyZWF0aW9uIHRpbWVcbiAgLy9cblxuXG4gIGlmICh1dGlsLmNhblVzZSgncGVyZm9ybWFuY2UnKSAmJiAnbm93JyBpbiBwZXJmb3JtYW5jZSkge1xuICAgIHNlbGYuX2NyZWF0ZWQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBzZWxmLl9jcmVhdGVkID0gRGF0ZS5ub3coKTtcbiAgfVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlc3Npb24ucHJvdG90eXBlLCAnZGVmZXInLCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2Vzc2lvbi5wcm90b3R5cGUsICdpZCcsIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZXNzaW9uLnByb3RvdHlwZSwgJ3JlYWxtJywge1xuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVhbG07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlc3Npb24ucHJvdG90eXBlLCAnaXNPcGVuJywge1xuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZCAhPT0gbnVsbDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2Vzc2lvbi5wcm90b3R5cGUsICdmZWF0dXJlcycsIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZlYXR1cmVzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZXNzaW9uLnByb3RvdHlwZSwgJ2NhbGxlcl9kaXNjbG9zZV9tZScsIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGxlcl9kaXNjbG9zZV9tZTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQobmV3VmFsdWUpIHtcbiAgICB0aGlzLl9jYWxsZXJfZGlzY2xvc2VfbWUgPSBuZXdWYWx1ZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2Vzc2lvbi5wcm90b3R5cGUsICdwdWJsaXNoZXJfZGlzY2xvc2VfbWUnLCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLl9wdWJsaXNoZXJfZGlzY2xvc2VfbWU7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gc2V0KG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5fcHVibGlzaGVyX2Rpc2Nsb3NlX21lID0gbmV3VmFsdWU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlc3Npb24ucHJvdG90eXBlLCAnc3Vic2NyaXB0aW9ucycsIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9zdWJzY3JpcHRpb25zKTtcbiAgICB2YXIgdmFscyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YWxzLnB1c2godGhpcy5fc3Vic2NyaXB0aW9uc1trZXlzW2ldXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlc3Npb24ucHJvdG90eXBlLCAncmVnaXN0cmF0aW9ucycsIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9yZWdpc3RyYXRpb25zKTtcbiAgICB2YXIgdmFscyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YWxzLnB1c2godGhpcy5fcmVnaXN0cmF0aW9uc1trZXlzW2ldXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHM7XG4gIH1cbn0pO1xuXG5TZXNzaW9uLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAoKSB7fTtcblxuU2Vzc2lvbi5wcm90b3R5cGUuam9pbiA9IGZ1bmN0aW9uIChyZWFsbSwgYXV0aG1ldGhvZHMsIGF1dGhpZCwgYXV0aGV4dHJhKSB7XG4gIHV0aWwuYXNzZXJ0KCFyZWFsbSB8fCB0eXBlb2YgcmVhbG0gPT09ICdzdHJpbmcnLCAnU2Vzc2lvbi5qb2luOiA8cmVhbG0+IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgdXRpbC5hc3NlcnQoIWF1dGhtZXRob2RzIHx8IEFycmF5LmlzQXJyYXkoYXV0aG1ldGhvZHMpLCAnU2Vzc2lvbi5qb2luOiA8YXV0aG1ldGhvZHM+IG11c3QgYmUgYW4gYXJyYXkgW10nKTtcbiAgdXRpbC5hc3NlcnQoIWF1dGhpZCB8fCB0eXBlb2YgYXV0aGlkID09PSAnc3RyaW5nJywgJ1Nlc3Npb24uam9pbjogPGF1dGhpZD4gbXVzdCBiZSBhIHN0cmluZycpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHNlbGYuaXNPcGVuKSB7XG4gICAgdGhyb3cgJ3Nlc3Npb24gYWxyZWFkeSBvcGVuJztcbiAgfVxuXG4gIHNlbGYuX2dvb2RieWVfc2VudCA9IGZhbHNlO1xuICBzZWxmLl9yZWFsbSA9IHJlYWxtO1xuICB2YXIgZGV0YWlscyA9IHt9O1xuICBkZXRhaWxzLnJvbGVzID0gV0FNUF9GRUFUVVJFUztcblxuICBpZiAoYXV0aG1ldGhvZHMpIHtcbiAgICBkZXRhaWxzLmF1dGhtZXRob2RzID0gYXV0aG1ldGhvZHM7XG4gIH1cblxuICBpZiAoYXV0aGlkKSB7XG4gICAgZGV0YWlscy5hdXRoaWQgPSBhdXRoaWQ7XG4gIH1cblxuICBpZiAoYXV0aGV4dHJhKSB7XG4gICAgZGV0YWlscy5hdXRoZXh0cmEgPSBhdXRoZXh0cmE7XG4gIH1cblxuICB2YXIgbXNnID0gW01TR19UWVBFLkhFTExPLCByZWFsbSwgZGV0YWlsc107XG5cbiAgc2VsZi5fc2VuZF93YW1wKG1zZyk7XG59O1xuXG5TZXNzaW9uLnByb3RvdHlwZS5sZWF2ZSA9IGZ1bmN0aW9uIChyZWFzb24sIG1lc3NhZ2UpIHtcbiAgdXRpbC5hc3NlcnQoIXJlYXNvbiB8fCB0eXBlb2YgcmVhc29uID09PSAnc3RyaW5nJywgJ1Nlc3Npb24ubGVhdmU6IDxyZWFzb24+IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgdXRpbC5hc3NlcnQoIW1lc3NhZ2UgfHwgdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnLCAnU2Vzc2lvbi5sZWF2ZTogPG1lc3NhZ2U+IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmICghc2VsZi5pc09wZW4pIHtcbiAgICB0aHJvdyAnc2Vzc2lvbiBub3Qgb3Blbic7XG4gIH1cblxuICBpZiAoIXJlYXNvbikge1xuICAgIHJlYXNvbiA9ICd3YW1wLmNsb3NlLm5vcm1hbCc7XG4gIH1cblxuICB2YXIgZGV0YWlscyA9IHt9O1xuXG4gIGlmIChtZXNzYWdlKSB7XG4gICAgZGV0YWlscy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxuXG4gIHZhciBtc2cgPSBbTVNHX1RZUEUuR09PREJZRSwgZGV0YWlscywgcmVhc29uXTtcblxuICBzZWxmLl9zZW5kX3dhbXAobXNnKTtcblxuICBzZWxmLl9nb29kYnllX3NlbnQgPSB0cnVlO1xufTtcblxuU2Vzc2lvbi5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChwcm9jZWR1cmUsIGFyZ3MsIGt3YXJncywgb3B0aW9ucykge1xuICB1dGlsLmFzc2VydCh0eXBlb2YgcHJvY2VkdXJlID09PSAnc3RyaW5nJywgJ1Nlc3Npb24uY2FsbDogPHByb2NlZHVyZT4gbXVzdCBiZSBhIHN0cmluZycpO1xuICB1dGlsLmFzc2VydCghYXJncyB8fCBBcnJheS5pc0FycmF5KGFyZ3MpLCAnU2Vzc2lvbi5jYWxsOiA8YXJncz4gbXVzdCBiZSBhbiBhcnJheSBbXScpO1xuICB1dGlsLmFzc2VydCgha3dhcmdzIHx8IHV0aWwuaXNfb2JqZWN0KGt3YXJncyksICdTZXNzaW9uLmNhbGw6IDxrd2FyZ3M+IG11c3QgYmUgYW4gb2JqZWN0IHt9Jyk7XG4gIHV0aWwuYXNzZXJ0KCFvcHRpb25zIHx8IHV0aWwuaXNfb2JqZWN0KG9wdGlvbnMpLCAnU2Vzc2lvbi5jYWxsOiA8b3B0aW9ucz4gbXVzdCBiZSBhbiBvYmplY3Qge30nKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmICghc2VsZi5pc09wZW4pIHtcbiAgICB0aHJvdyAnc2Vzc2lvbiBub3Qgb3Blbic7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gb25seSBzZXQgb3B0aW9uIGlmIHVzZXIgaGFzbid0IHNldCBhIHZhbHVlIGFuZCBnbG9iYWwgb3B0aW9uIGlzIFwib25cIlxuXG4gIGlmIChvcHRpb25zLmRpc2Nsb3NlX21lID09PSB1bmRlZmluZWQgJiYgc2VsZi5fY2FsbGVyX2Rpc2Nsb3NlX21lKSB7XG4gICAgb3B0aW9ucy5kaXNjbG9zZV9tZSA9IHRydWU7XG4gIH0gLy8gY3JlYXRlIGFuZCByZW1lbWJlciBuZXcgQ0FMTCByZXF1ZXN0XG4gIC8vXG5cblxuICB2YXIgZCA9IHNlbGYuX2RlZmVyKCk7XG5cbiAgdmFyIHJlcXVlc3QgPSBzZWxmLl9uZXdfcmVxdWVzdF9pZCgpO1xuXG4gIHNlbGYuX2NhbGxfcmVxc1tyZXF1ZXN0XSA9IFtkLCBvcHRpb25zXTsgLy8gY29uc3RydWN0IENBTEwgbWVzc2FnZVxuICAvL1xuXG4gIHZhciBtc2cgPSBbTVNHX1RZUEUuQ0FMTCwgcmVxdWVzdCwgb3B0aW9ucywgc2VsZi5yZXNvbHZlKHByb2NlZHVyZSldO1xuXG4gIGlmIChhcmdzKSB7XG4gICAgbXNnLnB1c2goYXJncyk7XG5cbiAgICBpZiAoa3dhcmdzKSB7XG4gICAgICBtc2cucHVzaChrd2FyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChrd2FyZ3MpIHtcbiAgICBtc2cucHVzaChbXSk7XG4gICAgbXNnLnB1c2goa3dhcmdzKTtcbiAgfSAvLyBzZW5kIFdBTVAgbWVzc2FnZVxuICAvL1xuXG5cbiAgc2VsZi5fc2VuZF93YW1wKG1zZyk7XG5cbiAgdmFyIHVzZXJQcm9taXNlO1xuXG4gIGlmIChkLnByb21pc2UudGhlbikge1xuICAgIC8vIHdoZW5qcyBoYXMgdGhlIGFjdHVhbCB1c2VyIHByb21pc2UgaW4gYW4gYXR0cmlidXRlXG4gICAgdXNlclByb21pc2UgPSBkLnByb21pc2U7XG4gIH0gZWxzZSB7XG4gICAgdXNlclByb21pc2UgPSBkO1xuICB9XG5cbiAgdXNlclByb21pc2UuY2FuY2VsID0gZnVuY3Rpb24gKGNhbmNlbE9wdGlvbnMpIHtcbiAgICAvLyBDYW5jZWwgdGhlIGNhbGxcbiAgICAvL1xuICAgIHZhciBjYW5jZWxNc2cgPSBbTVNHX1RZUEUuQ0FOQ0VMLCByZXF1ZXN0LCBjYW5jZWxPcHRpb25zIHx8IHt9XTtcblxuICAgIHNlbGYuX3NlbmRfd2FtcChjYW5jZWxNc2cpO1xuXG4gICAgaWYgKHJlcXVlc3QgaW4gc2VsZi5fY2FsbF9yZXFzICYmICghY2FuY2VsT3B0aW9ucyB8fCAhY2FuY2VsT3B0aW9ucy5tb2RlIHx8IGNhbmNlbE9wdGlvbnMubW9kZSAhPT0gJ2tpbGwnKSkge1xuICAgICAgLy8gV2hlbiB0aGUgbW9kZSBpcyBub3QgJ2tpbGwnIGl0IHdpbGwgbmV2ZXIgcmVjZWl2ZSBhIGNhbGwgcmVzdWx0LlxuICAgICAgLy8gU28gd2hlbiB0aGUgcmVxdWVzdCB3YXMgc3RpbGwgaW4gdGhlIGxpc3QsIHJlamVjdCBhbmQgcmVtb3ZlIGl0LlxuICAgICAgdmFyIGNhbmNlbGxlZERlZmVyID0gc2VsZi5fY2FsbF9yZXFzW3JlcXVlc3RdWzBdO1xuICAgICAgY2FuY2VsbGVkRGVmZXIucmVqZWN0KG5ldyBFcnJvcignQ2FuY2VsbGVkJykpO1xuICAgICAgZGVsZXRlIHNlbGYuX2NhbGxfcmVxc1tyZXF1ZXN0XTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVzZXJQcm9taXNlO1xufTtcblxuU2Vzc2lvbi5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uICh0b3BpYywgYXJncywga3dhcmdzLCBvcHRpb25zKSB7XG4gIHV0aWwuYXNzZXJ0KHR5cGVvZiB0b3BpYyA9PT0gJ3N0cmluZycsICdTZXNzaW9uLnB1Ymxpc2g6IDx0b3BpYz4gbXVzdCBiZSBhIHN0cmluZycpO1xuICB1dGlsLmFzc2VydCghYXJncyB8fCBBcnJheS5pc0FycmF5KGFyZ3MpLCAnU2Vzc2lvbi5wdWJsaXNoOiA8YXJncz4gbXVzdCBiZSBhbiBhcnJheSBbXScpO1xuICB1dGlsLmFzc2VydCgha3dhcmdzIHx8IHV0aWwuaXNfb2JqZWN0KGt3YXJncyksICdTZXNzaW9uLnB1Ymxpc2g6IDxrd2FyZ3M+IG11c3QgYmUgYW4gb2JqZWN0IHt9Jyk7XG4gIHV0aWwuYXNzZXJ0KCFvcHRpb25zIHx8IHV0aWwuaXNfb2JqZWN0KG9wdGlvbnMpLCAnU2Vzc2lvbi5wdWJsaXNoOiA8b3B0aW9ucz4gbXVzdCBiZSBhbiBvYmplY3Qge30nKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmICghc2VsZi5pc09wZW4pIHtcbiAgICB0aHJvdyAnc2Vzc2lvbiBub3Qgb3Blbic7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gb25seSBzZXQgb3B0aW9uIGlmIHVzZXIgaGFzbid0IHNldCBhIHZhbHVlIGFuZCBnbG9iYWwgb3B0aW9uIGlzIFwib25cIlxuXG4gIGlmIChvcHRpb25zLmRpc2Nsb3NlX21lID09PSB1bmRlZmluZWQgJiYgc2VsZi5fcHVibGlzaGVyX2Rpc2Nsb3NlX21lKSB7XG4gICAgb3B0aW9ucy5kaXNjbG9zZV9tZSA9IHRydWU7XG4gIH0gLy8gY3JlYXRlIGFuZCByZW1lbWJlciBuZXcgUFVCTElTSCByZXF1ZXN0XG4gIC8vXG5cblxuICB2YXIgZCA9IG51bGw7XG5cbiAgdmFyIHJlcXVlc3QgPSBzZWxmLl9uZXdfcmVxdWVzdF9pZCgpO1xuXG4gIGlmIChvcHRpb25zLmFja25vd2xlZGdlKSB7XG4gICAgZCA9IHNlbGYuX2RlZmVyKCk7XG4gICAgc2VsZi5fcHVibGlzaF9yZXFzW3JlcXVlc3RdID0gW2QsIG9wdGlvbnNdO1xuICB9IC8vIGNvbnN0cnVjdCBQVUJMSVNIIG1lc3NhZ2VcbiAgLy9cblxuXG4gIHZhciBtc2cgPSBbTVNHX1RZUEUuUFVCTElTSCwgcmVxdWVzdCwgb3B0aW9ucywgc2VsZi5yZXNvbHZlKHRvcGljKV07XG5cbiAgaWYgKGFyZ3MpIHtcbiAgICBtc2cucHVzaChhcmdzKTtcblxuICAgIGlmIChrd2FyZ3MpIHtcbiAgICAgIG1zZy5wdXNoKGt3YXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGt3YXJncykge1xuICAgIG1zZy5wdXNoKFtdKTtcbiAgICBtc2cucHVzaChrd2FyZ3MpO1xuICB9IC8vIHNlbmQgV0FNUCBtZXNzYWdlXG4gIC8vXG5cblxuICBzZWxmLl9zZW5kX3dhbXAobXNnKTtcblxuICBpZiAoZCkge1xuICAgIGlmIChkLnByb21pc2UudGhlbikge1xuICAgICAgLy8gd2hlbmpzIGhhcyB0aGUgYWN0dWFsIHVzZXIgcHJvbWlzZSBpbiBhbiBhdHRyaWJ1dGVcbiAgICAgIHJldHVybiBkLnByb21pc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgfVxufTtcblxuU2Vzc2lvbi5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKHRvcGljLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gIHV0aWwuYXNzZXJ0KHR5cGVvZiB0b3BpYyA9PT0gJ3N0cmluZycsICdTZXNzaW9uLnN1YnNjcmliZTogPHRvcGljPiBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gIHV0aWwuYXNzZXJ0KHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nLCAnU2Vzc2lvbi5zdWJzY3JpYmU6IDxoYW5kbGVyPiBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgdXRpbC5hc3NlcnQoIW9wdGlvbnMgfHwgdXRpbC5pc19vYmplY3Qob3B0aW9ucyksICdTZXNzaW9uLnN1YnNjcmliZTogPG9wdGlvbnM+IG11c3QgYmUgYW4gb2JqZWN0IHt9Jyk7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAoIXNlbGYuaXNPcGVuKSB7XG4gICAgdGhyb3cgJ3Nlc3Npb24gbm90IG9wZW4nO1xuICB9IC8vIGNyZWF0ZSBhbiByZW1lbWJlciBuZXcgU1VCU0NSSUJFIHJlcXVlc3RcbiAgLy9cblxuXG4gIHZhciByZXF1ZXN0ID0gc2VsZi5fbmV3X3JlcXVlc3RfaWQoKTtcblxuICB2YXIgZCA9IHNlbGYuX2RlZmVyKCk7XG5cbiAgc2VsZi5fc3Vic2NyaWJlX3JlcXNbcmVxdWVzdF0gPSBbZCwgdG9waWMsIGhhbmRsZXIsIG9wdGlvbnNdOyAvLyBjb25zdHJ1Y3QgU1VCU0NSSUJFIG1lc3NhZ2VcbiAgLy9cblxuICB2YXIgbXNnID0gW01TR19UWVBFLlNVQlNDUklCRSwgcmVxdWVzdF07XG5cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBtc2cucHVzaChvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBtc2cucHVzaCh7fSk7XG4gIH1cblxuICBtc2cucHVzaChzZWxmLnJlc29sdmUodG9waWMpKTsgLy8gc2VuZCBXQU1QIG1lc3NhZ2VcbiAgLy9cblxuICBzZWxmLl9zZW5kX3dhbXAobXNnKTtcblxuICBpZiAoZC5wcm9taXNlLnRoZW4pIHtcbiAgICAvLyB3aGVuanMgaGFzIHRoZSBhY3R1YWwgdXNlciBwcm9taXNlIGluIGFuIGF0dHJpYnV0ZVxuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGQ7XG4gIH1cbn07XG5cblNlc3Npb24ucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHByb2NlZHVyZSwgZW5kcG9pbnQsIG9wdGlvbnMpIHtcbiAgdXRpbC5hc3NlcnQodHlwZW9mIHByb2NlZHVyZSA9PT0gJ3N0cmluZycsICdTZXNzaW9uLnJlZ2lzdGVyOiA8cHJvY2VkdXJlPiBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gIHV0aWwuYXNzZXJ0KHR5cGVvZiBlbmRwb2ludCA9PT0gJ2Z1bmN0aW9uJywgJ1Nlc3Npb24ucmVnaXN0ZXI6IDxlbmRwb2ludD4gbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIHV0aWwuYXNzZXJ0KCFvcHRpb25zIHx8IHV0aWwuaXNfb2JqZWN0KG9wdGlvbnMpLCAnU2Vzc2lvbi5yZWdpc3RlcjogPG9wdGlvbnM+IG11c3QgYmUgYW4gb2JqZWN0IHt9Jyk7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAoIXNlbGYuaXNPcGVuKSB7XG4gICAgdGhyb3cgJ3Nlc3Npb24gbm90IG9wZW4nO1xuICB9IC8vIGNyZWF0ZSBhbiByZW1lbWJlciBuZXcgUkVHSVNURVIgcmVxdWVzdFxuICAvL1xuXG5cbiAgdmFyIHJlcXVlc3QgPSBzZWxmLl9uZXdfcmVxdWVzdF9pZCgpO1xuXG4gIHZhciBkID0gc2VsZi5fZGVmZXIoKTtcblxuICBzZWxmLl9yZWdpc3Rlcl9yZXFzW3JlcXVlc3RdID0gW2QsIHByb2NlZHVyZSwgZW5kcG9pbnQsIG9wdGlvbnNdOyAvLyBjb25zdHJ1Y3QgUkVHSVNURVIgbWVzc2FnZVxuICAvL1xuXG4gIHZhciBtc2cgPSBbTVNHX1RZUEUuUkVHSVNURVIsIHJlcXVlc3RdO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgbXNnLnB1c2gob3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgbXNnLnB1c2goe30pO1xuICB9XG5cbiAgbXNnLnB1c2goc2VsZi5yZXNvbHZlKHByb2NlZHVyZSkpOyAvLyBzZW5kIFdBTVAgbWVzc2FnZVxuICAvL1xuXG4gIHNlbGYuX3NlbmRfd2FtcChtc2cpO1xuXG4gIGlmIChkLnByb21pc2UudGhlbikge1xuICAgIC8vIHdoZW5qcyBoYXMgdGhlIGFjdHVhbCB1c2VyIHByb21pc2UgaW4gYW4gYXR0cmlidXRlXG4gICAgcmV0dXJuIGQucHJvbWlzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZDtcbiAgfVxufTtcblxuU2Vzc2lvbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gIHV0aWwuYXNzZXJ0KHN1YnNjcmlwdGlvbiBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbiwgJ1Nlc3Npb24udW5zdWJzY3JpYmU6IDxzdWJzY3JpcHRpb24+IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgY2xhc3MgYXV0b2JhaG4uU3Vic2NyaXB0aW9uJyk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHN1YnMgPSBzZWxmLl9zdWJzY3JpcHRpb25zW3N1YnNjcmlwdGlvbi5pZF07XG4gIHZhciBpID0gc3Vicy5pbmRleE9mKHN1YnNjcmlwdGlvbik7XG5cbiAgaWYgKCFzZWxmLmlzT3Blbikge1xuICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgLy8gcmVtb3ZlIGhhbmRsZXIgc3Vic2NyaXB0aW9uXG4gICAgICBzdWJzLnNwbGljZShpLCAxKTtcbiAgICAgIHN1YnNjcmlwdGlvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aHJvdyAnc2Vzc2lvbiBub3Qgb3Blbic7XG4gIH1cblxuICBpZiAoIXN1YnNjcmlwdGlvbi5hY3RpdmUgfHwgIShzdWJzY3JpcHRpb24uaWQgaW4gc2VsZi5fc3Vic2NyaXB0aW9ucykpIHtcbiAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgIC8vIHJlbW92ZSBoYW5kbGVyIHN1YnNjcmlwdGlvblxuICAgICAgc3Vicy5zcGxpY2UoaSwgMSk7XG4gICAgICBzdWJzY3JpcHRpb24uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhyb3cgJ3N1YnNjcmlwdGlvbiBub3QgYWN0aXZlJztcbiAgfVxuXG4gIGlmIChpID09PSAtMSkge1xuICAgIHRocm93ICdzdWJzY3JpcHRpb24gbm90IGFjdGl2ZSc7XG4gIH0gLy8gcmVtb3ZlIGhhbmRsZXIgc3Vic2NyaXB0aW9uXG5cblxuICBzdWJzLnNwbGljZShpLCAxKTtcbiAgc3Vic2NyaXB0aW9uLmFjdGl2ZSA9IGZhbHNlO1xuXG4gIHZhciBkID0gc2VsZi5fZGVmZXIoKTtcblxuICBpZiAoc3Vicy5sZW5ndGgpIHtcbiAgICAvLyB0aGVyZSBhcmUgc3RpbGwgaGFuZGxlcnMgb24gdGhlIHN1YnNjcmlwdGlvbiAuLlxuICAgIGQucmVzb2x2ZShmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gbm8gaGFuZGxlcnMgbGVmdCAuLlxuICAgIC8vIGNyZWF0ZSBhbmQgcmVtZW1iZXIgbmV3IFVOU1VCU0NSSUJFIHJlcXVlc3RcbiAgICAvL1xuICAgIHZhciByZXF1ZXN0ID0gc2VsZi5fbmV3X3JlcXVlc3RfaWQoKTtcblxuICAgIHNlbGYuX3Vuc3Vic2NyaWJlX3JlcXNbcmVxdWVzdF0gPSBbZCwgc3Vic2NyaXB0aW9uLmlkXTsgLy8gY29uc3RydWN0IFVOU1VCU0NSSUJFIG1lc3NhZ2VcbiAgICAvL1xuXG4gICAgdmFyIG1zZyA9IFtNU0dfVFlQRS5VTlNVQlNDUklCRSwgcmVxdWVzdCwgc3Vic2NyaXB0aW9uLmlkXTsgLy8gc2VuZCBXQU1QIG1lc3NhZ2VcbiAgICAvL1xuXG4gICAgc2VsZi5fc2VuZF93YW1wKG1zZyk7XG4gIH1cblxuICBpZiAoZC5wcm9taXNlLnRoZW4pIHtcbiAgICAvLyB3aGVuanMgaGFzIHRoZSBhY3R1YWwgdXNlciBwcm9taXNlIGluIGFuIGF0dHJpYnV0ZVxuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGQ7XG4gIH1cbn07XG5cblNlc3Npb24ucHJvdG90eXBlLnVucmVnaXN0ZXIgPSBmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XG4gIHV0aWwuYXNzZXJ0KHJlZ2lzdHJhdGlvbiBpbnN0YW5jZW9mIFJlZ2lzdHJhdGlvbiwgJ1Nlc3Npb24udW5yZWdpc3RlcjogPHJlZ2lzdHJhdGlvbj4gbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBjbGFzcyBhdXRvYmFobi5SZWdpc3RyYXRpb24nKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmICghc2VsZi5pc09wZW4pIHtcbiAgICB0aHJvdyAnc2Vzc2lvbiBub3Qgb3Blbic7XG4gIH1cblxuICBpZiAoIXJlZ2lzdHJhdGlvbi5hY3RpdmUgfHwgIShyZWdpc3RyYXRpb24uaWQgaW4gc2VsZi5fcmVnaXN0cmF0aW9ucykpIHtcbiAgICB0aHJvdyAncmVnaXN0cmF0aW9uIG5vdCBhY3RpdmUnO1xuICB9IC8vIGNyZWF0ZSBhbmQgcmVtZW1iZXIgbmV3IFVOUkVHSVNURVIgcmVxdWVzdFxuICAvL1xuXG5cbiAgdmFyIHJlcXVlc3QgPSBzZWxmLl9uZXdfcmVxdWVzdF9pZCgpO1xuXG4gIHZhciBkID0gc2VsZi5fZGVmZXIoKTtcblxuICBzZWxmLl91bnJlZ2lzdGVyX3JlcXNbcmVxdWVzdF0gPSBbZCwgcmVnaXN0cmF0aW9uXTsgLy8gY29uc3RydWN0IFVOUkVHSVNURVIgbWVzc2FnZVxuICAvL1xuXG4gIHZhciBtc2cgPSBbTVNHX1RZUEUuVU5SRUdJU1RFUiwgcmVxdWVzdCwgcmVnaXN0cmF0aW9uLmlkXTsgLy8gc2VuZCBXQU1QIG1lc3NhZ2VcbiAgLy9cblxuICBzZWxmLl9zZW5kX3dhbXAobXNnKTtcblxuICBpZiAoZC5wcm9taXNlLnRoZW4pIHtcbiAgICAvLyB3aGVuanMgaGFzIHRoZSBhY3R1YWwgdXNlciBwcm9taXNlIGluIGFuIGF0dHJpYnV0ZVxuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGQ7XG4gIH1cbn07XG5cblNlc3Npb24ucHJvdG90eXBlLnByZWZpeCA9IGZ1bmN0aW9uIChwcmVmaXgsIHVyaSkge1xuICB1dGlsLmFzc2VydCh0eXBlb2YgcHJlZml4ID09PSAnc3RyaW5nJywgJ1Nlc3Npb24ucHJlZml4OiA8cHJlZml4PiBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gIHV0aWwuYXNzZXJ0KCF1cmkgfHwgdHlwZW9mIHVyaSA9PT0gJ3N0cmluZycsICdTZXNzaW9uLnByZWZpeDogPHVyaT4gbXVzdCBiZSBhIHN0cmluZyBvciBmYWxzeScpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHVyaSkge1xuICAgIHNlbGYuX3ByZWZpeGVzW3ByZWZpeF0gPSB1cmk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHByZWZpeCBpbiBzZWxmLl9wcmVmaXhlcykge1xuICAgICAgZGVsZXRlIHNlbGYuX3ByZWZpeGVzW3ByZWZpeF07XG4gICAgfVxuICB9XG59O1xuXG5TZXNzaW9uLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24gKGN1cmllKSB7XG4gIHV0aWwuYXNzZXJ0KHR5cGVvZiBjdXJpZSA9PT0gJ3N0cmluZycsICdTZXNzaW9uLnJlc29sdmU6IDxjdXJpZT4gbXVzdCBiZSBhIHN0cmluZycpO1xuICB2YXIgc2VsZiA9IHRoaXM7IC8vIHNraXAgaWYgbm90IGEgQ1VSSUVcblxuICB2YXIgaSA9IGN1cmllLmluZGV4T2YoJzonKTtcblxuICBpZiAoaSA+PSAwKSB7XG4gICAgdmFyIHByZWZpeCA9IGN1cmllLnN1YnN0cmluZygwLCBpKTtcblxuICAgIGlmIChwcmVmaXggaW4gc2VsZi5fcHJlZml4ZXMpIHtcbiAgICAgIHJldHVybiBzZWxmLl9wcmVmaXhlc1twcmVmaXhdICsgJy4nICsgY3VyaWUuc3Vic3RyaW5nKGkgKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN1cmllO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY3VyaWU7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBTZXNzaW9uOiBTZXNzaW9uLFxuICBJbnZvY2F0aW9uOiBJbnZvY2F0aW9uLFxuICBFdmVudDogRXZlbnQsXG4gIFJlc3VsdDogUmVzdWx0LFxuICBFcnJvcjogRXJyb3IsXG4gIFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uLFxuICBSZWdpc3RyYXRpb246IFJlZ2lzdHJhdGlvbixcbiAgUHVibGljYXRpb246IFB1YmxpY2F0aW9uXG59OyIsImZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL2Nvbm5lY3Rpb24nKSxcbiAgICBDb25uZWN0aW9uID0gX3JlcXVpcmUuQ29ubmVjdGlvbjtcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJy4vdHJhbnNwb3J0ZXInKSxcbiAgICB0cmFuc3BvcnRlciA9IF9yZXF1aXJlMi50cmFuc3BvcnRlcjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIHN1YnNjcmliZXIgPSBmdW5jdGlvbiBzdWJzY3JpYmVyKF9yZWYpIHtcbiAgdmFyIFdlYlNvY2tldCA9IF9yZWYuV2ViU29ja2V0LFxuICAgICAgZ2V0QXV0aFRva2VuUXVlcnlzdHJpbmcgPSBfcmVmLmdldEF1dGhUb2tlblF1ZXJ5c3RyaW5nLFxuICAgICAgcmVhbG0gPSBfcmVmLnJlYWxtLFxuICAgICAgcmVzb2x2ZU9wdGlvbnMgPSBfcmVmLnJlc29sdmVPcHRpb25zLFxuICAgICAgcmVzb2x2ZVRvcGljID0gX3JlZi5yZXNvbHZlVG9waWMsXG4gICAgICB1cmwgPSBfcmVmLnVybCxcbiAgICAgIHNob3VsZFRyeUFnYWluID0gX3JlZi5zaG91bGRUcnlBZ2FpbjtcbiAgdmFyIGNyZWF0ZV90cmFuc3BvcnQgPSB0cmFuc3BvcnRlcihXZWJTb2NrZXQpO1xuICB2YXIgY29ubmVjdGlvbiA9IG51bGw7XG4gIHZhciBzdWJzY3JpcHRpb25NYXAgPSBuZXcgTWFwKCk7XG4gIHZhciBzdGF0ZSA9IHtcbiAgICByZXRyaWVkOiBmYWxzZVxuICB9O1xuXG4gIHZhciBjbGVhckNvbm5lY3Rpb24gPSBmdW5jdGlvbiBjbGVhckNvbm5lY3Rpb24oKSB7XG4gICAgaWYgKGNvbm5lY3Rpb24gJiYgY29ubmVjdGlvbi5pc09wZW4pIHtcbiAgICAgIGNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgICB9XG5cbiAgICBzdWJzY3JpcHRpb25NYXAuY2xlYXIoKTtcbiAgfTtcblxuICB2YXIgdHJ5Q2xvc2VDb25uZWN0aW9uID0gZnVuY3Rpb24gdHJ5Q2xvc2VDb25uZWN0aW9uKGRldGFpbHMpIHtcbiAgICBpZiAoc3Vic2NyaXB0aW9uTWFwLnNpemUgPT09IDApIHtcbiAgICAgIGNsZWFyQ29ubmVjdGlvbigpO1xuICAgIH0gZWxzZSBpZiAoZGV0YWlscyAmJiBkZXRhaWxzLndpbGxfcmV0cnkgPT09IGZhbHNlKSB7XG4gICAgICBjbGVhckNvbm5lY3Rpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIF9zdWJzY3JpYmUgPSBmdW5jdGlvbiBfc3Vic2NyaWJlKGtleSkge1xuICAgIHZhciBmb3VuZCA9IHN1YnNjcmlwdGlvbk1hcC5nZXQoa2V5KTtcblxuICAgIGlmICghZm91bmQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25uZWN0aW9uLnNlc3Npb24uc3Vic2NyaWJlKGZvdW5kLnRvcGljLCBmdW5jdGlvbiAoXywga3dhcmdzKSB7XG4gICAgICByZXR1cm4gZm91bmQub25ldmVudChrd2FyZ3MpO1xuICAgIH0sIGZvdW5kLm9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgZm91bmQuc3Vic2NyaXB0aW9uID0gc3Vic2NyaXB0aW9uO1xuICAgICAgc3Vic2NyaXB0aW9uTWFwLnNldChrZXksIGZvdW5kKTtcbiAgICAgIGZvdW5kLm9uaW5pdCgpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBmb3VuZC5vbmVycm9yKGUpO1xuICAgICAgc3Vic2NyaXB0aW9uTWFwLmRlbGV0ZShrZXkpO1xuICAgICAgdHJ5Q2xvc2VDb25uZWN0aW9uKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHJlY292ZXIgPSBmdW5jdGlvbiByZWNvdmVyKCkge1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gc3Vic2NyaXB0aW9uTWFwW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICB2YXIgX3N0ZXAkdmFsdWUgPSBfc2xpY2VkVG9BcnJheShfc3RlcC52YWx1ZSwgMSksXG4gICAgICAgICAgICBrZXkgPSBfc3RlcCR2YWx1ZVswXTtcblxuICAgICAgICBfc3Vic2NyaWJlKGtleSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIG9ub3BlbiA9IGZ1bmN0aW9uIG9ub3BlbigpIHtcbiAgICBzdGF0ZS5yZXRyaWVkID0gZmFsc2U7XG4gICAgcmVjb3ZlcigpO1xuICB9O1xuXG4gIHZhciBvbmNsb3NlID0gZnVuY3Rpb24gb25jbG9zZShyZWFzb24sIGRldGFpbHMpIHtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBzdWJzY3JpcHRpb25NYXAudmFsdWVzKClbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBfc3RlcDIudmFsdWU7XG4gICAgICAgIGRhdGEub25lcnJvcih7XG4gICAgICAgICAgcmVhc29uOiByZWFzb24sXG4gICAgICAgICAgZGV0YWlsczogZGV0YWlsc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgIF9pdGVyYXRvcjIucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnlDbG9zZUNvbm5lY3Rpb24oZGV0YWlscyk7XG4gIH07XG5cbiAgdmFyIGNvbm5lY3QgPSB1dGlsLmFzeW5jQ2FjaGUoZnVuY3Rpb24gKCkge1xuICAgIGlmICghY29ubmVjdGlvbikge1xuICAgICAgY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHJlYWxtOiByZWFsbSxcbiAgICAgICAgY3JlYXRlX3RyYW5zcG9ydDogY3JlYXRlX3RyYW5zcG9ydCxcbiAgICAgICAgZ2V0QXV0aFRva2VuUXVlcnlzdHJpbmc6IGdldEF1dGhUb2tlblF1ZXJ5c3RyaW5nLFxuICAgICAgICBzaG91bGRUcnlBZ2Fpbjogc2hvdWxkVHJ5QWdhaW4sXG4gICAgICAgIHN0YXRlOiBzdGF0ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbm5lY3Rpb24uaXNPcGVuKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGNvbm5lY3Rpb24ub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdGF0ZS5yZXRyaWVkID0gZmFsc2U7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgY29ubmVjdGlvbi5vbm9wZW4gPSBvbm9wZW47XG4gICAgICAgIGNvbm5lY3Rpb24ub25jbG9zZSA9IG9uY2xvc2U7XG4gICAgICB9O1xuXG4gICAgICBjb25uZWN0aW9uLm9uY2xvc2UgPSBmdW5jdGlvbiAocmVhc29uLCBkZXRhaWxzKSB7XG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IocmVhc29uKTtcbiAgICAgICAgZXJyLnJlYXNvbiA9IHJlYXNvbjtcbiAgICAgICAgZXJyLmRldGFpbHMgPSBkZXRhaWxzO1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgY29ubmVjdGlvbi5vbm9wZW4gPSBvbm9wZW47XG4gICAgICAgIGNvbm5lY3Rpb24ub25jbG9zZSA9IG9uY2xvc2U7XG4gICAgICB9O1xuXG4gICAgICBjb25uZWN0aW9uLm9wZW4oKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgdmFyIHN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShfcmVmMikge1xuICAgIHZhciBzY2hlbWFfbmFtZSA9IF9yZWYyLnNjaGVtYV9uYW1lLFxuICAgICAgICB3aGVyZSA9IF9yZWYyLndoZXJlLFxuICAgICAgICBldmVudF90eXBlID0gX3JlZjIuZXZlbnRfdHlwZSxcbiAgICAgICAgb25lcnJvciA9IF9yZWYyLm9uZXJyb3IsXG4gICAgICAgIG9uaW5pdCA9IF9yZWYyLm9uaW5pdCxcbiAgICAgICAgb25ldmVudCA9IF9yZWYyLm9uZXZlbnQ7XG4gICAgdmFyIHRvcGljID0gcmVzb2x2ZVRvcGljKHtcbiAgICAgIHNjaGVtYV9uYW1lOiBzY2hlbWFfbmFtZSxcbiAgICAgIGV2ZW50X3R5cGU6IGV2ZW50X3R5cGVcbiAgICB9KTtcbiAgICB2YXIgb3B0aW9ucyA9IHJlc29sdmVPcHRpb25zKHtcbiAgICAgIHdoZXJlOiB3aGVyZVxuICAgIH0pIHx8IHt9O1xuICAgIHZhciBrZXkgPSB1dGlsLmdlbmVyYXRlS2V5KCk7XG4gICAgc3Vic2NyaXB0aW9uTWFwLnNldChrZXksIHtcbiAgICAgIGtleToga2V5LFxuICAgICAgdG9waWM6IHRvcGljLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIG9uZXJyb3I6IG9uZXJyb3IsXG4gICAgICBvbmluaXQ6IG9uaW5pdCxcbiAgICAgIG9uZXZlbnQ6IG9uZXZlbnRcbiAgICB9KTtcblxuICAgIHZhciB1bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgdmFyIGZvdW5kID0gc3Vic2NyaXB0aW9uTWFwLmdldChrZXkpO1xuXG4gICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3VuZC5zdWJzY3JpcHRpb24pIHtcbiAgICAgICAgc3Vic2NyaXB0aW9uTWFwLmRlbGV0ZShrZXkpO1xuICAgICAgICB0cnlDbG9zZUNvbm5lY3Rpb24oKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbm5lY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29ubmVjdGlvbi5zZXNzaW9uLnVuc3Vic2NyaWJlKGZvdW5kLnN1YnNjcmlwdGlvbikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN1YnNjcmlwdGlvbk1hcC5kZWxldGUoa2V5KTtcbiAgICAgICAgdHJ5Q2xvc2VDb25uZWN0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29ubmVjdCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgX3N1YnNjcmliZShrZXkpO1xuICAgIH0pLmNhdGNoKG9uZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmVcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBzdWJzY3JpYmU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN1YnNjcmliZXI7IiwidmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi9zZXJpYWxpemVyJyksXG4gICAgSlNPTlNlcmlhbGl6ZXIgPSBfcmVxdWlyZS5KU09OU2VyaWFsaXplcjtcblxudmFyIHByb3RvY29sID0gJ3dhbXAuMi5qc29uJztcbnZhciBzZXJpYWxpemVyID0gbmV3IEpTT05TZXJpYWxpemVyKCk7XG5cbnZhciB0cmFuc3BvcnRlciA9IGZ1bmN0aW9uIHRyYW5zcG9ydGVyKFdlYlNvY2tldCkge1xuICByZXR1cm4gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgdXJsID0gX3JlZi51cmw7XG4gICAgdmFyIHRyYW5zcG9ydCA9IHt9O1xuICAgIHRyYW5zcG9ydC5wcm90b2NvbCA9IHByb3RvY29sO1xuICAgIHRyYW5zcG9ydC5zZXJpYWxpemVyID0gc2VyaWFsaXplcjtcblxuICAgIHRyYW5zcG9ydC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgIHRyYW5zcG9ydC5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgIHRyYW5zcG9ydC5vbmNsb3NlID0gZnVuY3Rpb24gKCkge307XG5cbiAgICB0cmFuc3BvcnQuaW5mbyA9IHtcbiAgICAgIHR5cGU6ICd3ZWJzb2NrZXQnLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBwcm90b2NvbDogbnVsbFxuICAgIH07XG4gICAgdmFyIHdlYnNvY2tldCA9IG5ldyBXZWJTb2NrZXQodXJsLCBbcHJvdG9jb2xdKTtcbiAgICB3ZWJzb2NrZXQuYmluYXJ5VHlwZSA9ICdhcnJheWJ1ZmZlcic7XG5cbiAgICB3ZWJzb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdXRpbC5kZWJ1ZygnV2ViU29ja2V0I29ubWVzc2FnZScsIGV2dCk7XG4gICAgICB2YXIgbXNnID0gdHJhbnNwb3J0LnNlcmlhbGl6ZXIudW5zZXJpYWxpemUoZXZ0LmRhdGEpO1xuICAgICAgdHJhbnNwb3J0Lm9ubWVzc2FnZShtc2cpO1xuICAgIH07XG5cbiAgICB3ZWJzb2NrZXQub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgdXRpbC5kZWJ1ZygnV2ViU29ja2V0I29ub3BlbicpO1xuICAgICAgdHJhbnNwb3J0LmluZm8ucHJvdG9jb2wgPSB3ZWJzb2NrZXQucHJvdG9jb2w7XG4gICAgICB0cmFuc3BvcnQub25vcGVuKCk7XG4gICAgfTtcblxuICAgIHdlYnNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdXRpbC5kZWJ1ZygnV2ViU29ja2V0I29uY2xvc2UnLCBldnQpO1xuICAgICAgdmFyIGRldGFpbHMgPSB7XG4gICAgICAgIGNvZGU6IGV2dC5jb2RlLFxuICAgICAgICByZWFzb246IGV2dC5tZXNzYWdlLFxuICAgICAgICB3YXNDbGVhbjogZXZ0Lndhc0NsZWFuXG4gICAgICB9O1xuICAgICAgdHJhbnNwb3J0Lm9uY2xvc2UoZGV0YWlscyk7XG4gICAgfTtcblxuICAgIHRyYW5zcG9ydC5zZW5kID0gZnVuY3Rpb24gKG1zZykge1xuICAgICAgdmFyIHBheWxvYWQgPSB0cmFuc3BvcnQuc2VyaWFsaXplci5zZXJpYWxpemUobXNnKTtcbiAgICAgIHV0aWwuZGVidWcoJ1dlYlNvY2tldCNzZW5kJywgcGF5bG9hZCk7XG4gICAgICB3ZWJzb2NrZXQuc2VuZChwYXlsb2FkKTtcbiAgICB9O1xuXG4gICAgdHJhbnNwb3J0LmNsb3NlID0gZnVuY3Rpb24gKGNvZGUsIHJlYXNvbikge1xuICAgICAgdXRpbC5kZWJ1ZygnV2ViU29ja2V0I2Nsb3NlJywgY29kZSwgcmVhc29uKTtcbiAgICAgIHdlYnNvY2tldC5jbG9zZShjb2RlLCByZWFzb24pO1xuICAgIH07XG5cbiAgICByZXR1cm4gdHJhbnNwb3J0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRyYW5zcG9ydGVyOiB0cmFuc3BvcnRlclxufTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgR0xPQkFMX0RFQlVHID0gJ19fd2FtcF9kZWJ1Z19fJztcblxudmFyIGNhblVzZSA9IGZ1bmN0aW9uIGNhblVzZShwcm9wKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBwcm9wIGluIGdsb2JhbDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBwcm9wIGluIHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmZ1bmN0aW9uIGlzRGVidWcoKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBHTE9CQUxfREVCVUcgaW4gZ2xvYmFsKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIEdMT0JBTF9ERUJVRyBpbiB3aW5kb3cpIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBzZXREZWJ1ZyA9IGZ1bmN0aW9uIHNldERlYnVnKCkge1xuICB2YXIgdmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsW0dMT0JBTF9ERUJVR10gPSB2YWx1ZTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3dbR0xPQkFMX0RFQlVHXSA9IHZhbHVlO1xuICAgIHJldHVybjtcbiAgfVxufTtcblxudmFyIGxvZ2dlciA9IGZ1bmN0aW9uIGxvZ2dlcihsZXZlbCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfY29uc29sZTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICAoX2NvbnNvbGUgPSBjb25zb2xlKS5sb2cuYXBwbHkoX2NvbnNvbGUsIFtcIltcIi5jb25jYXQobmV3IERhdGUoKS50b0lTT1N0cmluZygpLCBcIl0gW1wiKS5jb25jYXQobGV2ZWwudG9VcHBlckNhc2UoKSwgXCJdXCIpXS5jb25jYXQoYXJncykpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgfTtcbn07XG5cbnZhciB3YXJuID0gbG9nZ2VyKCd3YXJuJyk7XG5cbnZhciBfZGVidWcgPSBsb2dnZXIoJ2RlYnVnJyk7XG5cbnZhciBkZWJ1ZyA9IGZ1bmN0aW9uIGRlYnVnKCkge1xuICBpZiAoaXNEZWJ1ZygpKSByZXR1cm4gX2RlYnVnLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbn07XG5cbnZhciBvcHQgPSBmdW5jdGlvbiBvcHQodmFsLCBkZWZhdWx0VmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJyA/IHZhbCA6IGRlZmF1bHRWYWw7XG59O1xuXG52YXIgcmFuZF9ub3JtYWwgPSBmdW5jdGlvbiByYW5kX25vcm1hbChtZWFuLCBzZCkge1xuICB2YXIgeDEsIHgyLCByYWQ7XG5cbiAgZG8ge1xuICAgIHgxID0gMiAqIE1hdGgucmFuZG9tKCkgLSAxO1xuICAgIHgyID0gMiAqIE1hdGgucmFuZG9tKCkgLSAxO1xuICAgIHJhZCA9IHgxICogeDEgKyB4MiAqIHgyO1xuICB9IHdoaWxlIChyYWQgPj0gMSB8fCByYWQgPT0gMCk7XG5cbiAgdmFyIGMgPSBNYXRoLnNxcnQoLTIgKiBNYXRoLmxvZyhyYWQpIC8gcmFkKTtcbiAgcmV0dXJuIChtZWFuIHx8IDApICsgeDEgKiBjICogKHNkIHx8IDEpO1xufTtcblxudmFyIGhhbmRsZV9lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZV9lcnJvcihoYW5kbGVyLCBlcnJvciwgZXJyb3JfbWVzc2FnZSkge1xuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBoYW5kbGVyKGVycm9yLCBlcnJvcl9tZXNzYWdlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yX21lc3NhZ2UgfHwgJ3VuaGFuZGxlZCBleGNlcHRpb24gcmFpc2VkOiAnLCBlcnJvcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgfVxufTtcblxudmFyIGRlZmVycmVkX2ZhY3RvcnkgPSBmdW5jdGlvbiBkZWZlcnJlZF9mYWN0b3J5KCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkZWZlcnJlZCA9IHt9O1xuICAgIGRlZmVycmVkLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIGRlZmVycmVkLnJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQ7XG4gIH07XG59O1xuXG52YXIgcHJvbWlzaWZ5ID0gZnVuY3Rpb24gcHJvbWlzaWZ5KGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZuLmFwcGx5KHZvaWQgMCwgYXJncy5jb25jYXQoW2Z1bmN0aW9uIChlcnJvciwgcmVzdWx0KSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH1dKSk7XG4gICAgfSk7XG4gIH07XG59O1xuXG52YXIgYXNzZXJ0ID0gZnVuY3Rpb24gYXNzZXJ0KGNvbmQsIHRleHQpIHtcbiAgaWYgKGNvbmQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaXNEZWJ1ZygpKSB7XG4gICAgZGVidWdnZXI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcih0ZXh0IHx8ICdBc3NlcnRpb24gZmFpbGVkIScpO1xufTtcblxudmFyIGlzX29iamVjdCA9IGZ1bmN0aW9uIGlzX29iamVjdCh2YXJpYWJsZSkge1xuICByZXR1cm4gIUFycmF5LmlzQXJyYXkodmFyaWFibGUpICYmICh2YXJpYWJsZSBpbnN0YW5jZW9mIE9iamVjdCB8fCBfdHlwZW9mKHZhcmlhYmxlKSA9PT0gJ29iamVjdCcpO1xufTtcblxuZnVuY3Rpb24gYXN5bmNDYWNoZShmbikge1xuICB2YXIgaW5Qcm9ncmVzcyA9IGZhbHNlO1xuICB2YXIgYnVmZmVyTGlzdCA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBidWZmZXJMaXN0LnB1c2goe1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICByZWplY3Q6IHJlamVjdFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghaW5Qcm9ncmVzcykge1xuICAgICAgICBpblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgZm4uYXBwbHkodm9pZCAwLCBhcmdzKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYnVmZmVyTGlzdC5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBzdWNjZXNzID0gYnVmZmVyTGlzdFtfaV0ucmVzb2x2ZTtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgYnVmZmVyTGlzdCA9IFtdO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IGJ1ZmZlckxpc3QubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgICAgdmFyIGVycm9yID0gYnVmZmVyTGlzdFtfaTJdLnJlamVjdDtcbiAgICAgICAgICAgIGVycm9yKGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICBidWZmZXJMaXN0ID0gW107XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUtleSgpIHtcbiAgcmV0dXJuIGdlbmVyYXRlS2V5Ll9rZXkrKztcbn1cblxuZ2VuZXJhdGVLZXkuX2tleSA9IDE7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXNzZXJ0OiBhc3NlcnQsXG4gIGNhblVzZTogY2FuVXNlLFxuICBkZWJ1ZzogZGVidWcsXG4gIGRlZmVycmVkX2ZhY3Rvcnk6IGRlZmVycmVkX2ZhY3RvcnksXG4gIGhhbmRsZV9lcnJvcjogaGFuZGxlX2Vycm9yLFxuICBpc0RlYnVnOiBpc0RlYnVnLFxuICBpc19vYmplY3Q6IGlzX29iamVjdCxcbiAgb3B0OiBvcHQsXG4gIHByb21pc2lmeTogcHJvbWlzaWZ5LFxuICByYW5kX25vcm1hbDogcmFuZF9ub3JtYWwsXG4gIHNldERlYnVnOiBzZXREZWJ1ZyxcbiAgd2Fybjogd2FybixcbiAgYXN5bmNDYWNoZTogYXN5bmNDYWNoZSxcbiAgZ2VuZXJhdGVLZXk6IGdlbmVyYXRlS2V5XG59OyIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKVxuXG52YXIgbGV2ZWxzID0gWyd0cmFjZScsICdkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InLCAnZmF0YWwnXVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9XG4gIG9wdHMubGV2ZWwgPSBvcHRzLmxldmVsIHx8ICdpbmZvJ1xuXG4gIHZhciBsb2dnZXIgPSB7fVxuXG4gIHZhciBzaG91bGRMb2cgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICByZXR1cm4gbGV2ZWxzLmluZGV4T2YobGV2ZWwpID49IGxldmVscy5pbmRleE9mKG9wdHMubGV2ZWwpXG4gIH1cblxuICBsZXZlbHMuZm9yRWFjaChmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICBsb2dnZXJbbGV2ZWxdID0gc2hvdWxkTG9nKGxldmVsKSA/IGxvZyA6IG5vb3BcblxuICAgIGZ1bmN0aW9uIGxvZyAoKSB7XG4gICAgICB2YXIgcHJlZml4ID0gb3B0cy5wcmVmaXhcbiAgICAgIHZhciBub3JtYWxpemVkTGV2ZWxcblxuICAgICAgaWYgKG9wdHMuc3RkZXJyKSB7XG4gICAgICAgIG5vcm1hbGl6ZWRMZXZlbCA9ICdlcnJvcidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAobGV2ZWwpIHtcbiAgICAgICAgICBjYXNlICd0cmFjZSc6IG5vcm1hbGl6ZWRMZXZlbCA9ICdpbmZvJzsgYnJlYWtcbiAgICAgICAgICBjYXNlICdkZWJ1Zyc6IG5vcm1hbGl6ZWRMZXZlbCA9ICdpbmZvJzsgYnJlYWtcbiAgICAgICAgICBjYXNlICdmYXRhbCc6IG5vcm1hbGl6ZWRMZXZlbCA9ICdlcnJvcic7IGJyZWFrXG4gICAgICAgICAgZGVmYXVsdDogbm9ybWFsaXplZExldmVsID0gbGV2ZWxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJlZml4ID09PSAnZnVuY3Rpb24nKSBwcmVmaXggPSBwcmVmaXgobGV2ZWwpXG4gICAgICAgIGFyZ3VtZW50c1swXSA9IHV0aWwuZm9ybWF0KHByZWZpeCwgYXJndW1lbnRzWzBdKVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlW25vcm1hbGl6ZWRMZXZlbF0odXRpbC5mb3JtYXQuYXBwbHkodXRpbCwgYXJndW1lbnRzKSlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGxvZ2dlclxufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIHx8XG4gIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIHZhciBkZXNjcmlwdG9ycyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGVzY3JpcHRvcnNba2V5c1tpXV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdG9ycztcbiAgfTtcblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG52YXIga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2woJ3V0aWwucHJvbWlzaWZ5LmN1c3RvbScpIDogdW5kZWZpbmVkO1xuXG5leHBvcnRzLnByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCAmJiBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdKSB7XG4gICAgdmFyIGZuID0gb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXTtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJ1dGlsLnByb21pc2lmeS5jdXN0b21cIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgZnVuY3Rpb24gZm4oKSB7XG4gICAgdmFyIHByb21pc2VSZXNvbHZlLCBwcm9taXNlUmVqZWN0O1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgcHJvbWlzZVJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgICBhcmdzLnB1c2goZnVuY3Rpb24gKGVyciwgdmFsdWUpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZVJlc29sdmUodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGZuLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoXG4gICAgZm4sXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbClcbiAgKTtcbn1cblxuZXhwb3J0cy5wcm9taXNpZnkuY3VzdG9tID0ga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5T25SZWplY3RlZChyZWFzb24sIGNiKSB7XG4gIC8vIGAhcmVhc29uYCBndWFyZCBpbnNwaXJlZCBieSBibHVlYmlyZCAoUmVmOiBodHRwczovL2dvby5nbC90NUlTNk0pLlxuICAvLyBCZWNhdXNlIGBudWxsYCBpcyBhIHNwZWNpYWwgZXJyb3IgdmFsdWUgaW4gY2FsbGJhY2tzIHdoaWNoIG1lYW5zIFwibm8gZXJyb3JcbiAgLy8gb2NjdXJyZWRcIiwgd2UgZXJyb3Itd3JhcCBzbyB0aGUgY2FsbGJhY2sgY29uc3VtZXIgY2FuIGRpc3Rpbmd1aXNoIGJldHdlZW5cbiAgLy8gXCJ0aGUgcHJvbWlzZSByZWplY3RlZCB3aXRoIG51bGxcIiBvciBcInRoZSBwcm9taXNlIGZ1bGZpbGxlZCB3aXRoIHVuZGVmaW5lZFwiLlxuICBpZiAoIXJlYXNvbikge1xuICAgIHZhciBuZXdSZWFzb24gPSBuZXcgRXJyb3IoJ1Byb21pc2Ugd2FzIHJlamVjdGVkIHdpdGggYSBmYWxzeSB2YWx1ZScpO1xuICAgIG5ld1JlYXNvbi5yZWFzb24gPSByZWFzb247XG4gICAgcmVhc29uID0gbmV3UmVhc29uO1xuICB9XG4gIHJldHVybiBjYihyZWFzb24pO1xufVxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgfVxuXG4gIC8vIFdlIERPIE5PVCByZXR1cm4gdGhlIHByb21pc2UgYXMgaXQgZ2l2ZXMgdGhlIHVzZXIgYSBmYWxzZSBzZW5zZSB0aGF0XG4gIC8vIHRoZSBwcm9taXNlIGlzIGFjdHVhbGx5IHNvbWVob3cgcmVsYXRlZCB0byB0aGUgY2FsbGJhY2sncyBleGVjdXRpb25cbiAgLy8gYW5kIHRoYXQgdGhlIGNhbGxiYWNrIHRocm93aW5nIHdpbGwgcmVqZWN0IHRoZSBwcm9taXNlLlxuICBmdW5jdGlvbiBjYWxsYmFja2lmaWVkKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHZhciBtYXliZUNiID0gYXJncy5wb3AoKTtcbiAgICBpZiAodHlwZW9mIG1heWJlQ2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsYXN0IGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbWF5YmVDYi5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgLy8gSW4gdHJ1ZSBub2RlIHN0eWxlIHdlIHByb2Nlc3MgdGhlIGNhbGxiYWNrIG9uIGBuZXh0VGlja2Agd2l0aCBhbGwgdGhlXG4gICAgLy8gaW1wbGljYXRpb25zIChzdGFjaywgYHVuY2F1Z2h0RXhjZXB0aW9uYCwgYGFzeW5jX2hvb2tzYClcbiAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmV0KSB7IHByb2Nlc3MubmV4dFRpY2soY2IsIG51bGwsIHJldCkgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlaikgeyBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNraWZ5T25SZWplY3RlZCwgcmVqLCBjYikgfSk7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2FsbGJhY2tpZmllZCwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNhbGxiYWNraWZpZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpKTtcbiAgcmV0dXJuIGNhbGxiYWNraWZpZWQ7XG59XG5leHBvcnRzLmNhbGxiYWNraWZ5ID0gY2FsbGJhY2tpZnk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxudmFyIGNvbnN0YW50cyA9IHJlcXVpcmUoJ2NvcmUtbW9kdWxlL2NvbnN0YW50cycpO1xuXG52YXIgSEVycm9yID0gcmVxdWlyZSgnY29yZS1tb2R1bGUvSEVycm9yJyk7XG5cbnZhciBzdG9yYWdlQXN5bmMgPSByZXF1aXJlKCdjb3JlLW1vZHVsZS9zdG9yYWdlQXN5bmMnKTtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnY29yZS1tb2R1bGUvdXRpbHMnKTtcblxudmFyIGNvbW1vbkF1dGggPSByZXF1aXJlKCdjb3JlLW1vZHVsZS9hdXRoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhYVMpIHtcbiAgdmFyIEFQSSA9IEJhYVMuX2NvbmZpZy5BUEk7XG5cbiAgdmFyIGdldExvZ2luQ29kZSA9IGZ1bmN0aW9uIGdldExvZ2luQ29kZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAga3MubG9naW4oe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIHJlc29sdmUocmVzLmNvZGUpO1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKCkge1xuICAgICAgICAgIEJhYVMucmVxdWVzdC5rc1JlcXVlc3RGYWlsKHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9OyAvLyDojrflj5bnmbvlvZXlh63or4EgY29kZSwg6L+b6ICM5o2i5Y+W55So5oi355m75b2V5oCB5L+h5oGvXG5cblxuICB2YXIgYXV0aCA9IGZ1bmN0aW9uIGF1dGgoKSB7XG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICBfcmVmJGNyZWF0ZVVzZXIgPSBfcmVmLmNyZWF0ZVVzZXIsXG4gICAgICAgIGNyZWF0ZVVzZXIgPSBfcmVmJGNyZWF0ZVVzZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGNyZWF0ZVVzZXI7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZ2V0TG9naW5Db2RlKCkudGhlbihmdW5jdGlvbiAoY29kZSkge1xuICAgICAgICBzZXNzaW9uSW5pdCh7XG4gICAgICAgICAgY29kZTogY29kZSxcbiAgICAgICAgICBjcmVhdGVVc2VyOiBjcmVhdGVVc2VyXG4gICAgICAgIH0sIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xuICB9OyAvLyBjb2RlIOaNouWPliBzZXNzaW9uX2tlee+8jOeUn+aIkOW5tuiOt+WPliAzcmRfc2Vzc2lvbiDljbMgdG9rZW5cblxuXG4gIHZhciBzZXNzaW9uSW5pdCA9IGZ1bmN0aW9uIHNlc3Npb25Jbml0KF9yZWYyLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgY29kZSA9IF9yZWYyLmNvZGUsXG4gICAgICAgIGNyZWF0ZVVzZXIgPSBfcmVmMi5jcmVhdGVVc2VyO1xuICAgIHJldHVybiBCYWFTLnJlcXVlc3Qoe1xuICAgICAgdXJsOiBBUEkuS1VBSVNIT1UuU0lMRU5UX0xPR0lOLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNyZWF0ZV91c2VyOiBjcmVhdGVVc2VyLFxuICAgICAgICBjb2RlOiBjb2RlXG4gICAgICB9XG4gICAgfSkudGhlbih1dGlscy52YWxpZGF0ZVN0YXR1c0NvZGUpLnRoZW4odXRpbHMuZmxhdEF1dGhSZXNwb25zZSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICBCYWFTLl9wb2x5ZmlsbC5oYW5kbGVMb2dpblN1Y2Nlc3MocmVzKTtcblxuICAgICAgcmVzb2x2ZShyZXMpO1xuICAgIH0sIHJlamVjdCk7XG4gIH07XG5cbiAgdmFyIHNpbGVudExvZ2luID0gdXRpbHMucmF0ZUxpbWl0KGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtzdG9yYWdlQXN5bmMuZ2V0KGNvbnN0YW50cy5TVE9SQUdFX0tFWS5BVVRIX1RPS0VOKSwgdXRpbHMuaXNTZXNzaW9uRXhwaXJlZCgpXSkudGhlbihmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgIHZhciBfcmVmNCA9IF9zbGljZWRUb0FycmF5KF9yZWYzLCAyKSxcbiAgICAgICAgICB0b2tlbiA9IF9yZWY0WzBdLFxuICAgICAgICAgIGV4cGlyZWQgPSBfcmVmNFsxXTtcblxuICAgICAgaWYgKHRva2VuICYmICFleHBpcmVkKSByZXR1cm47XG4gICAgICByZXR1cm4gYXV0aC5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgIH0pO1xuICB9KTtcblxuICB2YXIgZ2V0U2Vuc2l0aXZlRGF0YSA9IGZ1bmN0aW9uIGdldFNlbnNpdGl2ZURhdGEoZGF0YSkge1xuICAgIHJldHVybiBCYWFTLnJlcXVlc3Qoe1xuICAgICAgdXJsOiBBUEkuS1VBSVNIT1UuQVVUSEVOVElDQVRFLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkudGhlbih1dGlscy52YWxpZGF0ZVN0YXR1c0NvZGUpLnRoZW4odXRpbHMuZmxhdEF1dGhSZXNwb25zZSk7XG4gIH07XG5cbiAgdmFyIGdldFVzZXJJbmZvID0gZnVuY3Rpb24gZ2V0VXNlckluZm8oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGtzLmdldFVzZXJJbmZvKHtcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgICBmYWlsOiByZWplY3RcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9OyAvLyDmj5Dkvpvnu5nlvIDlj5HogIXlnKggYnV0dG9uIChvcGVuLXR5cGU9XCJnZXRVc2VySW5mb1wiKSDnmoTlm57osIPkuK3osIPnlKjvvIzlr7nliqDlr4bmlbDmja7ov5vooYzop6Plr4bvvIzlkIzml7blsIYgdXNlcmluZm8g5a2Y5YWlIHN0b3JhZ2Ug5LitXG5cblxuICB2YXIgaGFuZGxlVXNlckluZm8gPSBmdW5jdGlvbiBoYW5kbGVVc2VySW5mbyhyZXMpIHtcbiAgICBpZiAoIXJlcyB8fCAhcmVzLmRldGFpbCkge1xuICAgICAgdGhyb3cgbmV3IEhFcnJvcig2MDMpO1xuICAgIH1cblxuICAgIHZhciBkZXRhaWwgPSByZXMuZGV0YWlsO1xuICAgIHZhciBjcmVhdGVVc2VyID0gISFyZXMuY3JlYXRlVXNlcjtcbiAgICB2YXIgc3luY1VzZXJQcm9maWxlID0gcmVzLnN5bmNVc2VyUHJvZmlsZTsgLy8g55So5oi35ouS57ud5o6I5p2D77yM5LuF6L+U5ZueIHVpZCwgb3BlbmlkXG5cbiAgICBpZiAoIWRldGFpbC51c2VySW5mbykge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtzdG9yYWdlQXN5bmMuZ2V0KGNvbnN0YW50cy5TVE9SQUdFX0tFWS5VSUQpLCBzdG9yYWdlQXN5bmMuZ2V0KGNvbnN0YW50cy5TVE9SQUdFX0tFWS5PUEVOSUQpXSkudGhlbihmdW5jdGlvbiAoX3JlZjUpIHtcbiAgICAgICAgdmFyIF9yZWY2ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjUsIDIpLFxuICAgICAgICAgICAgaWQgPSBfcmVmNlswXSxcbiAgICAgICAgICAgIG9wZW5pZCA9IF9yZWY2WzFdO1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChfZXh0ZW5kcyhuZXcgSEVycm9yKDYwMyksIHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgb3BlbmlkOiBvcGVuaWRcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldExvZ2luQ29kZSgpLnRoZW4oZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgIHJldHVybiBnZXRVc2VySW5mbygpLnRoZW4oZnVuY3Rpb24gKGRldGFpbCkge1xuICAgICAgICB2YXIgcGF5bG9hZCA9IHtcbiAgICAgICAgICBjb2RlOiBjb2RlLFxuICAgICAgICAgIGNyZWF0ZV91c2VyOiBjcmVhdGVVc2VyLFxuICAgICAgICAgIHJhd0RhdGE6IGRldGFpbC5yYXdEYXRhLFxuICAgICAgICAgIGl2OiBkZXRhaWwuaXYsXG4gICAgICAgICAgZW5jcnlwdGVkRGF0YTogZGV0YWlsLmVuY3J5cHRlZERhdGEsXG4gICAgICAgICAgc2lnbmF0dXJlOiBkZXRhaWwuc2lnbmF0dXJlLFxuICAgICAgICAgIHVwZGF0ZV91c2VycHJvZmlsZTogdXRpbHMuZ2V0VXBkYXRlVXNlclByb2ZpbGVQYXJhbShzeW5jVXNlclByb2ZpbGUpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBnZXRTZW5zaXRpdmVEYXRhKHBheWxvYWQpO1xuICAgICAgfSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICB2YXIgdXNlckluZm8gPSBkZXRhaWwudXNlckluZm87XG4gICAgICB1c2VySW5mby5pZCA9IHJlcy5kYXRhLnVzZXJfaWQ7XG4gICAgICB1c2VySW5mby5vcGVuaWQgPSByZXMuZGF0YS5vcGVuaWQ7XG5cbiAgICAgIEJhYVMuX3BvbHlmaWxsLmhhbmRsZUxvZ2luU3VjY2VzcyhyZXMsIGZhbHNlLCB1c2VySW5mbyk7XG5cbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGxpbmtLcyA9IGZ1bmN0aW9uIGxpbmtLcyhyZXMpIHtcbiAgICB2YXIgX3JlZjcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgICBfcmVmNyRzeW5jVXNlclByb2ZpbGUgPSBfcmVmNy5zeW5jVXNlclByb2ZpbGUsXG4gICAgICAgIHN5bmNVc2VyUHJvZmlsZSA9IF9yZWY3JHN5bmNVc2VyUHJvZmlsZSA9PT0gdm9pZCAwID8gY29uc3RhbnRzLlVQREFURV9VU0VSUFJPRklMRV9WQUxVRS5TRVROWCA6IF9yZWY3JHN5bmNVc2VyUHJvZmlsZTtcblxuICAgIHZhciByZWZyZXNoVXNlckluZm8gPSBmYWxzZTtcblxuICAgIGlmIChyZXMgJiYgcmVzLmRldGFpbCAmJiByZXMuZGV0YWlsLnVzZXJJbmZvKSB7XG4gICAgICByZWZyZXNoVXNlckluZm8gPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRMb2dpbkNvZGUoKS50aGVuKGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgICAvLyDlpoLmnpznlKjmiLfkvKDpgJLkuobmjojmnYPkv6Hmga/vvIzliJnph43mlrDojrflj5bkuIDmrKEgdXNlckluZm8sIOmBv+WFjeWboOS4uumHjeaWsOiOt+WPliBjb2RlIOWvvOiHtCBzZXNzaW9uIOWkseaViOiAjOino+WvhuWksei0pVxuICAgICAgdmFyIGdldFVzZXJJbmZvUHJvbWlzZSA9IHJlZnJlc2hVc2VySW5mbyA/IGdldFVzZXJJbmZvKCkgOiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgICByZXR1cm4gZ2V0VXNlckluZm9Qcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB2YXIgcGF5bG9hZCA9IHJlcyA/IHtcbiAgICAgICAgICByYXdEYXRhOiByZXMucmF3RGF0YSxcbiAgICAgICAgICBzaWduYXR1cmU6IHJlcy5zaWduYXR1cmUsXG4gICAgICAgICAgZW5jcnlwdGVkRGF0YTogcmVzLmVuY3J5cHRlZERhdGEsXG4gICAgICAgICAgaXY6IHJlcy5pdixcbiAgICAgICAgICB1cGRhdGVfdXNlcnByb2ZpbGU6IHV0aWxzLmdldFVwZGF0ZVVzZXJQcm9maWxlUGFyYW0oc3luY1VzZXJQcm9maWxlKSxcbiAgICAgICAgICBjb2RlOiBjb2RlXG4gICAgICAgIH0gOiB7XG4gICAgICAgICAgY29kZTogY29kZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gQmFhUy5fYmFhc1JlcXVlc3Qoe1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIHVybDogQVBJLktVQUlTSE9VLlVTRVJfQVNTT0NJQVRFLFxuICAgICAgICAgIGRhdGE6IHBheWxvYWRcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgLyoqXG4gICAqIOW/q+aJi+eZu+W9lVxuICAgKiBAZnVuY3Rpb25cbiAgICogQHNpbmNlIHYzLjE2LjBcbiAgICogQG1lbWJlcm9mIEJhYVMuYXV0aFxuICAgKiBAcGFyYW0ge0JhYVMuQXV0aERhdGF8bnVsbH0gW2F1dGhEYXRhXSDnlKjmiLfkv6Hmga/vvIzlgLzkuLogbnVsbCDml7bmmK/pnZnpu5jnmbvlvZVcbiAgICogQHBhcmFtIHtCYWFTLkxvZ2luT3B0aW9uc30gW29wdGlvbnNdIOWFtuS7lumAiemhuVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEJhYVMuQ3VycmVudFVzZXI+fVxuICAgKi9cblxuXG4gIHZhciBsb2dpbldpdGhLcyA9IGZ1bmN0aW9uIGxvZ2luV2l0aEtzKGF1dGhEYXRhKSB7XG4gICAgdmFyIF9yZWY4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fSxcbiAgICAgICAgX3JlZjgkY3JlYXRlVXNlciA9IF9yZWY4LmNyZWF0ZVVzZXIsXG4gICAgICAgIGNyZWF0ZVVzZXIgPSBfcmVmOCRjcmVhdGVVc2VyID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjgkY3JlYXRlVXNlcixcbiAgICAgICAgX3JlZjgkc3luY1VzZXJQcm9maWxlID0gX3JlZjguc3luY1VzZXJQcm9maWxlLFxuICAgICAgICBzeW5jVXNlclByb2ZpbGUgPSBfcmVmOCRzeW5jVXNlclByb2ZpbGUgPT09IHZvaWQgMCA/IGNvbnN0YW50cy5VUERBVEVfVVNFUlBST0ZJTEVfVkFMVUUuU0VUTlggOiBfcmVmOCRzeW5jVXNlclByb2ZpbGU7XG5cbiAgICB2YXIgbG9naW5Qcm9taXNlID0gbnVsbDtcblxuICAgIGlmIChhdXRoRGF0YSAmJiBhdXRoRGF0YS5kZXRhaWwpIHtcbiAgICAgIC8vIGhhbmRsZVVzZXJJbmZvIOa1geeoi1xuICAgICAgbG9naW5Qcm9taXNlID0gaGFuZGxlVXNlckluZm8oX2V4dGVuZHMoYXV0aERhdGEsIHtcbiAgICAgICAgY3JlYXRlVXNlcjogY3JlYXRlVXNlcixcbiAgICAgICAgc3luY1VzZXJQcm9maWxlOiBzeW5jVXNlclByb2ZpbGVcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g6Z2Z6buY55m75b2V5rWB56iLXG4gICAgICBsb2dpblByb21pc2UgPSBzaWxlbnRMb2dpbih7XG4gICAgICAgIGNyZWF0ZVVzZXI6IGNyZWF0ZVVzZXJcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsb2dpblByb21pc2UudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICBpZiAoIXJlcykgcmV0dXJuIGNvbW1vbkF1dGguZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgIHJldHVybiBjb21tb25BdXRoLl9pbml0Q3VycmVudFVzZXIocmVzLmRhdGEudXNlcl9pbmZvLCByZXMuZGF0YS5leHBpcmVkX2F0KTtcbiAgICB9KTtcbiAgfTtcblxuICBfZXh0ZW5kcyhCYWFTLmF1dGgsIHtcbiAgICBzaWxlbnRMb2dpbjogc2lsZW50TG9naW4sXG4gICAgbG9naW5XaXRoS3M6IHV0aWxzLnJhdGVMaW1pdChsb2dpbldpdGhLcyksXG4gICAgbGlua0tzOiB1dGlscy5yYXRlTGltaXQobGlua0tzKVxuICB9KTtcbn07IiwidmFyIHV0aWxzID0gcmVxdWlyZSgnY29yZS1tb2R1bGUvdXRpbHMnKTtcblxudmFyIEJhYVMgPSByZXF1aXJlKCdjb3JlLW1vZHVsZS9iYWFzJyk7XG5cbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCdjb3JlLW1vZHVsZS9jb25zdGFudHMnKTtcblxudmFyIHN0b3JhZ2UgPSByZXF1aXJlKCdjb3JlLW1vZHVsZS9zdG9yYWdlJyk7XG4vKlxuICog6YeN5Y+R6K+35rGCXG4gKiDmg4Xmma8x77ya6Iul5piv56ys5LiA5qyh5Ye6546wIDQwMSDplJnor6/vvIzmraTml7bnmoTnvJPlrZjkuIDlrprmmK/ov4fmnJ/nmoTjgIJcbiAqIOaDheaZrzLvvJrlgYforr7mnIkgYSxiIOS4pOS4qiA0MDEg6ZSZ6K+v55qE6K+35rGC77yMYeivt+axgiAzMDBtcyDlkI7ov5Tlm57vvIzotbDmg4Xmma8gMSDnmoTpgLvovpHjgIJiIOWcqCBwZW5kaW5nIDEwIOenkuWQjui/lOWbnu+8jOatpOaXtue8k+WtmOWunumZheS4iuaYr+ayoei/h+acn+eahO+8jOS9huaYr+S7jeeEtuS8mumHjeaWsOa4heepuue8k+WtmO+8jOi1sOaDheaZryAxIOmAu+i+keOAglxuICog5oOF5pmvM++8muWBh+iuvuaciSBhLGIsYyAzIOS4quW5tuWPkeivt+axgu+8jGEg5YWI6L+U5Zue77yM6LWw5LqG5oOF5pmvIDEg55qE6YC76L6R77yM5q2k5pe2IGJjIOivt+axguWcqCBzaWxlbnRMb2dpbiDor7fmsYLov5Tlm57liY3ov5Tlm57kuobvvIzov5nml7blgJnku5bku6zkvJrnrYnlvoUgc2lsZW50TG9naW4gLCDljbPlpJrkuKror7fmsYLlj6rkvJrlj5HpgIHkuIDmrKEgc2lsZW50TG9naW4g6K+35rGCXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHBheWxvYWRcbiAqL1xuXG5cbmZ1bmN0aW9uIHRyeVJlc2VuZFJlcXVlc3QocGF5bG9hZCkge1xuICB2YXIgcHJldlVpZCA9IHN0b3JhZ2UuZ2V0KGNvbnN0YW50cy5TVE9SQUdFX0tFWS5VSUQpO1xuICB2YXIgcHJlQWN0aW9uID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgaWYgKHN0b3JhZ2UuZ2V0KGNvbnN0YW50cy5TVE9SQUdFX0tFWS5BVVRIX1RPS0VOKSkge1xuICAgIC8vIOe8k+WtmOiiq+a4heepuu+8jHNpbGVudExvZ2luIOS4gOWumuS8muWPkei1tyBzZXNzaW9uIGluaXQg6K+35rGCXG4gICAgcHJlQWN0aW9uID0gQmFhUy5jbGVhclNlc3Npb24oKTtcbiAgfVxuXG4gIHJldHVybiBwcmVBY3Rpb24udGhlbihmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEJhYVMuYXV0aC5zaWxlbnRMb2dpbigpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHV0aWxzLmdldFJlc2VuZFBheWxvYWQoQmFhUywgcGF5bG9hZCwgcHJldlVpZCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzZW5kUGF5bG9hZCkge1xuICAgICAgcmV0dXJuIEJhYVMucmVxdWVzdChyZXNlbmRQYXlsb2FkKTtcbiAgICB9KS50aGVuKHV0aWxzLnZhbGlkYXRlU3RhdHVzQ29kZSk7XG4gIH0pO1xufSAvLyBCYWFTIOe9kee7nOivt+axgu+8jOatpOaWueazleiDveS/neivgeWcqOW3sueZu+W9lSBCYWFTIOWQjuWGjeWPkei1t+ivt+axglxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cblxudmFyIGJhYXNSZXF1ZXN0ID0gZnVuY3Rpb24gYmFhc1JlcXVlc3QoYXJncykge1xuICB2YXIgYmVmb3JlUmVxdWVzdFByb21pc2UgPSBCYWFTLl9jb25maWcuQVVUT19MT0dJTiA/IEJhYVMuYXV0aC5zaWxlbnRMb2dpbigpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gIHJldHVybiBiZWZvcmVSZXF1ZXN0UHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gQmFhUy5yZXF1ZXN0KGFyZ3MpO1xuICB9KS5jYXRjaChmdW5jdGlvbiAocmVzKSB7XG4gICAgaWYgKHBhcnNlSW50KHJlcy5jb2RlKSA9PT0gY29uc3RhbnRzLlNUQVRVU19DT0RFLlVOQVVUSE9SSVpFRCAmJiBCYWFTLl9jb25maWcuQVVUT19MT0dJTikge1xuICAgICAgcmV0dXJuIHRyeVJlc2VuZFJlcXVlc3QoYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IHJlcztcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYWFzUmVxdWVzdDsiLCJ2YXIgQmFhUyA9IHJlcXVpcmUoJ2NvcmUtbW9kdWxlL2JhYXMnKTtcblxudmFyIGNvcmUgPSByZXF1aXJlKCdjb3JlLW1vZHVsZS9pbmRleCcpO1xuXG52YXIgcG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG5cbnZhciBhdXRoID0gcmVxdWlyZSgnLi9hdXRoJyk7IC8vIGNvbnN0IHBheSA9IHJlcXVpcmUoJy4vcGF5Jylcbi8vIGNvbnN0IHJlcG9ydFRpY2tldCA9IHJlcXVpcmUoJy4vcmVwb3J0VGlja2V0Jylcbi8vIGNvbnN0IHJlcG9ydFRlbXBsYXRlTXNnQW5hbHl0aWNzID0gcmVxdWlyZSgnLi9yZXBvcnRUZW1wbGF0ZU1zZ0FuYWx5dGljcycpXG5cblxuQmFhUy5fY29uZmlnLlZFUlNJT04gPSBfX1ZFUlNJT05fQkFJRFVfXztcbkJhYVMudXNlKGNvcmUpO1xuQmFhUy51c2UocG9seWZpbGwpO1xuQmFhUy51c2UoYXV0aCk7IC8vIEJhYVMudXNlKHBheSlcbi8vIEJhYVMudXNlKHJlcG9ydFRpY2tldClcbi8vIEJhYVMudXNlKHJlcG9ydFRlbXBsYXRlTXNnQW5hbHl0aWNzKVxuXG5CYWFTLnJlcXVlc3QgPSByZXF1aXJlKCcuL3JlcXVlc3QnKTtcbkJhYVMuX2JhYXNSZXF1ZXN0ID0gcmVxdWlyZSgnLi9iYWFzUmVxdWVzdCcpO1xuQmFhUy51cGxvYWRGaWxlID0gcmVxdWlyZSgnLi91cGxvYWRGaWxlJyk7XG5cbkJhYVMuX2NyZWF0ZVJlcXVlc3RNZXRob2QoKTsgLy8g5pq06ZyyIEJhYVMg5Yiw5bCP56iL5bqP546v5aKDXG5cblxuaWYgKHR5cGVvZiBrcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAga3MuQmFhUyA9IEJhYVM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFhUzsiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG4vLyBjb25zdCB0cGxNc2dTdGF0c1JlcG9ydCA9IHJlcXVpcmUoJ2NvcmUtbW9kdWxlL3RwbE1zZ1N0YXRzUmVwb3J0JylcbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCdjb3JlLW1vZHVsZS9jb25zdGFudHMnKTtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnY29yZS1tb2R1bGUvdXRpbHMnKTtcblxudmFyIFdlYlNvY2tldCA9IHJlcXVpcmUoJy4vd2Vic29ja2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhYVMpIHtcbiAgX2V4dGVuZHMoQmFhUy5fcG9seWZpbGwsIHtcbiAgICBDTElFTlRfUExBVEZPUk06ICdLVUFJU0hPVScsXG4gICAgc2V0U3RvcmFnZVN5bmM6IGZ1bmN0aW9uIHNldFN0b3JhZ2VTeW5jKGssIHYpIHtcbiAgICAgIHJldHVybiBrcy5zZXRTdG9yYWdlU3luYyhrLCB2KTtcbiAgICB9LFxuICAgIGdldFN0b3JhZ2VTeW5jOiBmdW5jdGlvbiBnZXRTdG9yYWdlU3luYyhrKSB7XG4gICAgICByZXR1cm4ga3MuZ2V0U3RvcmFnZVN5bmMoayk7XG4gICAgfSxcbiAgICBzZXRTdG9yYWdlQXN5bmM6IGZ1bmN0aW9uIHNldFN0b3JhZ2VBc3luYyhrLCB2KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBrcy5zZXRTdG9yYWdlKHtcbiAgICAgICAgICBrZXk6IGssXG4gICAgICAgICAgZGF0YTogdixcbiAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgICAgIGZhaWw6IHJlamVjdFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0U3RvcmFnZUFzeW5jOiBmdW5jdGlvbiBnZXRTdG9yYWdlQXN5bmMoaykge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIGtzLmdldFN0b3JhZ2Uoe1xuICAgICAgICAgIGtleTogayxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzLmRhdGEpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbCgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0U3lzdGVtSW5mb1N5bmM6IGZ1bmN0aW9uIGdldFN5c3RlbUluZm9TeW5jKCkge1xuICAgICAgcmV0dXJuIGtzLmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgfSxcbiAgICBjaGVja0xhdGVzdFZlcnNpb246IGZ1bmN0aW9uIGNoZWNrTGF0ZXN0VmVyc2lvbigpIHtcbiAgICAgIHZhciBpbmZvID0ga3MuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcblxuICAgICAgaWYgKGluZm8ucGxhdGZvcm0gPT09ICdkZXZ0b29scycpIHtcbiAgICAgICAgQmFhUy5jaGVja1ZlcnNpb24oe1xuICAgICAgICAgIHBsYXRmb3JtOiBjb25zdGFudHMuUExBVEZPUk0uSk9OR0RPTkdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBsaW5rS3M6IGZ1bmN0aW9uIGxpbmtLcygpIHtcbiAgICAgIHZhciBfQmFhUyRhdXRoO1xuXG4gICAgICByZXR1cm4gKF9CYWFTJGF1dGggPSBCYWFTLmF1dGgpLmxpbmtLcy5hcHBseShfQmFhUyRhdXRoLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgaGFuZGxlTG9naW5TdWNjZXNzOiBmdW5jdGlvbiBoYW5kbGVMb2dpblN1Y2Nlc3MocmVzLCBpc0Fub255bW91cywgdXNlckluZm8pIHtcbiAgICAgIC8vIOeZu+W9leaIkOWKn+eahCBob29rIO+8iGxvZ2lu44CBbG9naW5XaXRoS3PjgIFyZWdpc3Rlcu+8ieiwg+eUqOaIkOWKn+WQjuinpuWPkVxuICAgICAgQmFhUy5zdG9yYWdlLnNldChjb25zdGFudHMuU1RPUkFHRV9LRVkuVUlELCByZXMuZGF0YS51c2VyX2lkKTtcbiAgICAgIEJhYVMuc3RvcmFnZS5zZXQoY29uc3RhbnRzLlNUT1JBR0VfS0VZLk9QRU5JRCwgcmVzLmRhdGEub3BlbmlkIHx8ICcnKTtcbiAgICAgIEJhYVMuc3RvcmFnZS5zZXQoY29uc3RhbnRzLlNUT1JBR0VfS0VZLkFVVEhfVE9LRU4sIHJlcy5kYXRhLnRva2VuKTtcblxuICAgICAgaWYgKHJlcy5kYXRhLm9wZW5pZCkge1xuICAgICAgICBCYWFTLnN0b3JhZ2Uuc2V0KGNvbnN0YW50cy5TVE9SQUdFX0tFWS5VU0VSSU5GTywgX2V4dGVuZHMoe30sIEJhYVMuc3RvcmFnZS5nZXQoY29uc3RhbnRzLlNUT1JBR0VfS0VZLlVTRVJJTkZPKSwgdXNlckluZm8gfHwge1xuICAgICAgICAgIGlkOiByZXMuZGF0YS51c2VyX2lkLFxuICAgICAgICAgIG9wZW5pZDogcmVzLmRhdGEub3BlbmlkXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgQmFhUy5zdG9yYWdlLnNldChjb25zdGFudHMuU1RPUkFHRV9LRVkuRVhQSVJFU19BVCwgdXRpbHMuZ2V0RXhwaXJlZEF0KHJlcy5kYXRhLmV4cGlyZXNfaW4pKTtcblxuICAgICAgaWYgKGlzQW5vbnltb3VzKSB7XG4gICAgICAgIEJhYVMuc3RvcmFnZS5zZXQoY29uc3RhbnRzLlNUT1JBR0VfS0VZLklTX0FOT05ZTU9VU19VU0VSLCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEJhYVMuc3RvcmFnZS5zZXQoY29uc3RhbnRzLlNUT1JBR0VfS0VZLklTX0FOT05ZTU9VU19VU0VSLCAwKTsgLy8gdHBsTXNnU3RhdHNSZXBvcnQucmVwb3J0U3RhdHMoKVxuICAgICAgfVxuICAgIH0sXG4gICAgV2ViU29ja2V0OiBXZWJTb2NrZXRcbiAgfSk7XG59OyIsInZhciBCYWFTID0gcmVxdWlyZSgnY29yZS1tb2R1bGUvYmFhcycpO1xuXG52YXIgSEVycm9yID0gcmVxdWlyZSgnY29yZS1tb2R1bGUvSEVycm9yJyk7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJ2NvcmUtbW9kdWxlL3V0aWxzJyk7XG5cbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCdjb3JlLW1vZHVsZS9jb25zdGFudHMnKTtcblxudmFyIGtzUmVxdWVzdEZhaWwgPSBmdW5jdGlvbiBrc1JlcXVlc3RGYWlsKHJlamVjdCkge1xuICBrcy5nZXROZXR3b3JrVHlwZSh7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgIGlmIChyZXMubmV0d29ya1R5cGUgPT09ICdub25lJykge1xuICAgICAgICByZWplY3QobmV3IEhFcnJvcig2MDApKTsgLy8g5pat572RXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QobmV3IEhFcnJvcig2MDEpKTsgLy8g572R57uc6LaF5pe2XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG4vKipcbiAqIOe9kee7nOivt+axglxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgQmFhU1xuICogQHBhcmFtIHtCYWFTLlJlcXVlc3RQYXJhbXN9IHBhcmFtcyDlj4LmlbBcbiAqIEByZXR1cm4ge1Byb21pc2U8QmFhUy5SZXNwb25zZTxhbnk+Pn1cbiAqL1xuXG5cbnZhciByZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChfcmVmKSB7XG4gIHZhciB1cmwgPSBfcmVmLnVybCxcbiAgICAgIF9yZWYkbWV0aG9kID0gX3JlZi5tZXRob2QsXG4gICAgICBtZXRob2QgPSBfcmVmJG1ldGhvZCA9PT0gdm9pZCAwID8gJ0dFVCcgOiBfcmVmJG1ldGhvZCxcbiAgICAgIF9yZWYkZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgIGRhdGEgPSBfcmVmJGRhdGEgPT09IHZvaWQgMCA/IHt9IDogX3JlZiRkYXRhLFxuICAgICAgX3JlZiRoZWFkZXIgPSBfcmVmLmhlYWRlcixcbiAgICAgIGhlYWRlciA9IF9yZWYkaGVhZGVyID09PSB2b2lkIDAgPyB7fSA6IF9yZWYkaGVhZGVyLFxuICAgICAgX3JlZiRkYXRhVHlwZSA9IF9yZWYuZGF0YVR5cGUsXG4gICAgICBkYXRhVHlwZSA9IF9yZWYkZGF0YVR5cGUgPT09IHZvaWQgMCA/ICdqc29uJyA6IF9yZWYkZGF0YVR5cGU7XG4gIHJldHVybiB1dGlscy5tZXJnZVJlcXVlc3RIZWFkZXIoaGVhZGVyKS50aGVuKGZ1bmN0aW9uIChoZWFkZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmICghQmFhUy5fY29uZmlnLkNMSUVOVF9JRCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBIRXJyb3IoNjAyKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghL2h0dHBzPzpcXC9cXC8vLnRlc3QodXJsKSkge1xuICAgICAgICB2YXIgQVBJX0hPU1QgPSBCYWFTLl9wb2x5ZmlsbC5nZXRBUElIb3N0KCk7XG5cbiAgICAgICAgdXJsID0gQVBJX0hPU1QucmVwbGFjZSgvXFwvJC8sICcnKSArICcvJyArIHVybC5yZXBsYWNlKC9eXFwvLywgJycpO1xuICAgICAgfSAvLyDlhbzlrrkgUFVUIOS4jiBERUxFVEUg6K+35rGC77yM5b+r5omL5pqC5pe25Y+q5pSv5oyBIEdFVCDkuI4gUE9TVCDkuKTnp43or7fmsYJcblxuXG4gICAgICBpZiAobWV0aG9kLnRvVXBwZXJDYXNlKCkgPT09ICdQVVQnIHx8IG1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSAnREVMRVRFJykge1xuICAgICAgICBoZWFkZXJzWydYLUh5ZHJvZ2VuLVJlcXVlc3QtTWV0aG9kJ10gPSBtZXRob2Q7XG4gICAgICAgIG1ldGhvZCA9ICdQT1NUJztcbiAgICAgIH1cblxuICAgICAga3MucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgaGVhZGVyOiBoZWFkZXJzLFxuICAgICAgICBkYXRhVHlwZTogZGF0YVR5cGUsXG4gICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZSkge1xuICAgICAgICAgIGlmIChlICYmIGUuc3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgdmFyIGhlcnJvciA9IG5ldyBIRXJyb3IoZS5zdGF0dXNDb2RlLCBlLmVyck1zZyk7XG4gICAgICAgICAgICByZWplY3QoaGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBrc1JlcXVlc3RGYWlsKHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdXRpbHMubG9nKGNvbnN0YW50cy5MT0dfTEVWRUwuSU5GTywgJ1JlcXVlc3QgPT4gJyArIHVybCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1ZXN0O1xubW9kdWxlLmV4cG9ydHMua3NSZXF1ZXN0RmFpbCA9IGtzUmVxdWVzdEZhaWw7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIEJhYVMgPSByZXF1aXJlKCdjb3JlLW1vZHVsZS9iYWFzJyk7XG5cbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCdjb3JlLW1vZHVsZS9jb25zdGFudHMnKTtcblxudmFyIEhFcnJvciA9IHJlcXVpcmUoJ2NvcmUtbW9kdWxlL0hFcnJvcicpO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCdjb3JlLW1vZHVsZS91dGlscycpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdjb3JlLW1vZHVsZS91cGxvYWQnKSxcbiAgICBnZXRVcGxvYWRGaWxlQ29uZmlnID0gX3JlcXVpcmUuZ2V0VXBsb2FkRmlsZUNvbmZpZyxcbiAgICBnZXRVcGxvYWRIZWFkZXJzID0gX3JlcXVpcmUuZ2V0VXBsb2FkSGVhZGVycztcblxudmFyIGtzVXBsb2FkID0gZnVuY3Rpb24ga3NVcGxvYWQoaGVhZGVyLCBjb25maWcsIHJlc29sdmUsIHJlamVjdCwgdHlwZSkge1xuICByZXR1cm4ga3MudXBsb2FkRmlsZSh7XG4gICAgdXJsOiBjb25maWcudXBsb2FkVXJsLFxuICAgIGZpbGVQYXRoOiBjb25maWcuZmlsZVBhdGgsXG4gICAgbmFtZTogY29uc3RhbnRzLlVQTE9BRC5VUExPQURfRklMRV9LRVksXG4gICAgZm9ybURhdGE6IHtcbiAgICAgIGF1dGhvcml6YXRpb246IGNvbmZpZy5hdXRob3JpemF0aW9uLFxuICAgICAgcG9saWN5OiBjb25maWcucG9saWN5XG4gICAgfSxcbiAgICBoZWFkZXI6IGhlYWRlcixcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlcykge1xuICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcbiAgICAgIHJlc3VsdC5zdGF0dXMgPSAnb2snO1xuICAgICAgcmVzdWx0LnBhdGggPSBjb25maWcuZGVzdExpbms7XG4gICAgICByZXN1bHQuZmlsZSA9IHtcbiAgICAgICAgJ2lkJzogY29uZmlnLmlkLFxuICAgICAgICAncGF0aCc6IGNvbmZpZy5kZXN0TGluayxcbiAgICAgICAgJ25hbWUnOiBjb25maWcuZmlsZU5hbWUsXG4gICAgICAgICdjcmVhdGVkX2F0JzogZGF0YS50aW1lLFxuICAgICAgICAnbWltZV90eXBlJzogZGF0YS5taW1ldHlwZSxcbiAgICAgICAgJ2Nkbl9wYXRoJzogZGF0YS51cmwsXG4gICAgICAgICdzaXplJzogZGF0YS5maWxlX3NpemVcbiAgICAgIH07XG4gICAgICBkZWxldGUgcmVzLmRhdGE7XG5cbiAgICAgIGlmICh0eXBlICYmIHR5cGUgPT09ICdqc29uJykge1xuICAgICAgICByZXMuZGF0YSA9IHJlc3VsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5kYXRhID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzb2x2ZSh1dGlscy52YWxpZGF0ZVN0YXR1c0NvZGUocmVzKSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgfSxcbiAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKCkge1xuICAgICAgQmFhUy5yZXF1ZXN0LmpkUmVxdWVzdEZhaWwocmVqZWN0KTtcbiAgICB9XG4gIH0pO1xufTtcbi8qKlxuICog5LiK5Lyg5paH5Lu244CCXG4gKiBAbWVtYmVyb2YgQmFhU1xuICogQHBhcmFtIHtGaWxlUGFyYW1zfSBmaWxlUGFyYW1zIOaWh+S7tuWPguaVsFxuICogQHBhcmFtIHtGaWxlTWV0YX0gbWV0YURhdGEg5paH5Lu25YWD5L+h5oGvXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSDmlofku7bnsbvlnotcbiAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAqL1xuXG5cbnZhciB1cGxvYWRGaWxlID0gZnVuY3Rpb24gdXBsb2FkRmlsZShmaWxlUGFyYW1zLCBtZXRhRGF0YSwgdHlwZSkge1xuICBpZiAoIWZpbGVQYXJhbXMgfHwgX3R5cGVvZihmaWxlUGFyYW1zKSAhPT0gJ29iamVjdCcgfHwgIWZpbGVQYXJhbXMuZmlsZVBhdGgpIHtcbiAgICB0aHJvdyBuZXcgSEVycm9yKDYwNSk7XG4gIH1cblxuICBpZiAoIW1ldGFEYXRhKSB7XG4gICAgbWV0YURhdGEgPSB7fTtcbiAgfSBlbHNlIGlmIChfdHlwZW9mKG1ldGFEYXRhKSAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgSEVycm9yKDYwNSk7XG4gIH1cblxuICB2YXIgcnMsXG4gICAgICByaixcbiAgICAgIHVwbG9hZENhbGxiYWNrLFxuICAgICAgaXNBYm9ydGVkLFxuICAgICAgdXBsb2FkVGFzayA9IG51bGw7XG4gIHZhciBwID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHJzID0gcmVzb2x2ZTtcbiAgICByaiA9IHJlamVjdDtcbiAgfSk7XG5cbiAgdmFyIG9uUHJvZ3Jlc3NVcGRhdGUgPSBmdW5jdGlvbiBvblByb2dyZXNzVXBkYXRlKGNiKSB7XG4gICAgaWYgKHVwbG9hZFRhc2spIHtcbiAgICAgIHVwbG9hZFRhc2sub25Qcm9ncmVzc1VwZGF0ZShjYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwbG9hZENhbGxiYWNrID0gY2I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGFib3J0ID0gZnVuY3Rpb24gYWJvcnQoKSB7XG4gICAgaWYgKHVwbG9hZFRhc2spIHtcbiAgICAgIHVwbG9hZFRhc2suYWJvcnQoKTtcbiAgICB9XG5cbiAgICBpc0Fib3J0ZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1peChvYmopIHtcbiAgICByZXR1cm4gX2V4dGVuZHMob2JqLCB7XG4gICAgICBjYXRjaDogZnVuY3Rpb24gX2NhdGNoKCkge1xuICAgICAgICB2YXIgX1Byb21pc2UkcHJvdG90eXBlJGNhO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV3UHJvbWlzZSA9IChfUHJvbWlzZSRwcm90b3R5cGUkY2EgPSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaCkuY2FsbC5hcHBseShfUHJvbWlzZSRwcm90b3R5cGUkY2EsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgICAgIG1peChuZXdQcm9taXNlKTtcbiAgICAgICAgcmV0dXJuIG5ld1Byb21pc2U7XG4gICAgICB9LFxuICAgICAgdGhlbjogZnVuY3Rpb24gdGhlbigpIHtcbiAgICAgICAgdmFyIF9Qcm9taXNlJHByb3RvdHlwZSR0aDtcblxuICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV3UHJvbWlzZSA9IChfUHJvbWlzZSRwcm90b3R5cGUkdGggPSBQcm9taXNlLnByb3RvdHlwZS50aGVuKS5jYWxsLmFwcGx5KF9Qcm9taXNlJHByb3RvdHlwZSR0aCwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICAgICAgbWl4KG5ld1Byb21pc2UpO1xuICAgICAgICByZXR1cm4gbmV3UHJvbWlzZTtcbiAgICAgIH0sXG4gICAgICBhYm9ydDogYWJvcnQsXG4gICAgICBvblByb2dyZXNzVXBkYXRlOiBvblByb2dyZXNzVXBkYXRlXG4gICAgfSk7XG4gIH1cblxuICBtaXgocCk7XG4gIHZhciBmaWxlTmFtZSA9IHV0aWxzLmdldEZpbGVOYW1lRnJvbVBhdGgoZmlsZVBhcmFtcy5maWxlUGF0aCk7XG4gIGdldFVwbG9hZEZpbGVDb25maWcoZmlsZU5hbWUsIHV0aWxzLnJlcGxhY2VRdWVyeVBhcmFtcyhtZXRhRGF0YSkpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgIGlmIChpc0Fib3J0ZWQpIHJldHVybiByaihuZXcgRXJyb3IoJ2Fib3J0ZWQnKSk7XG4gICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgIGlkOiByZXMuZGF0YS5pZCxcbiAgICAgIGZpbGVOYW1lOiBmaWxlTmFtZSxcbiAgICAgIHBvbGljeTogcmVzLmRhdGEucG9saWN5LFxuICAgICAgYXV0aG9yaXphdGlvbjogcmVzLmRhdGEuYXV0aG9yaXphdGlvbixcbiAgICAgIHVwbG9hZFVybDogcmVzLmRhdGEudXBsb2FkX3VybCxcbiAgICAgIGZpbGVQYXRoOiBmaWxlUGFyYW1zLmZpbGVQYXRoLFxuICAgICAgZGVzdExpbms6IHJlcy5kYXRhLnBhdGhcbiAgICB9O1xuICAgIHVwbG9hZFRhc2sgPSBnZXRVcGxvYWRIZWFkZXJzKCkudGhlbihmdW5jdGlvbiAoaGVhZGVyKSB7XG4gICAgICB2YXIgdXBsb2FkID0ga3NVcGxvYWQoaGVhZGVyLCBjb25maWcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChpc0Fib3J0ZWQpIHJldHVybiByaihuZXcgRXJyb3IoJ2Fib3J0ZWQnKSk7XG4gICAgICAgIHJzKGUpO1xuICAgICAgfSwgcmosIHR5cGUpO1xuXG4gICAgICBpZiAodXBsb2FkQ2FsbGJhY2spIHtcbiAgICAgICAgdXBsb2FkLm9uUHJvZ3Jlc3NVcGRhdGUodXBsb2FkQ2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdXBsb2FkO1xuICAgIH0pO1xuICB9LCByaik7XG4gIHJldHVybiBwO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB1cGxvYWRGaWxlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIHNvY2tldFRhc2s7XG5cbnZhciBXZWJTb2NrZXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBXZWJTb2NrZXQodXJsLCBwcm90b2NvbHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdlYlNvY2tldCk7XG5cbiAgICBzb2NrZXRUYXNrID0ga3MuY29ubmVjdFNvY2tldCh7XG4gICAgICB1cmw6IHVybCxcbiAgICAgIHByb3RvY29sczogcHJvdG9jb2xzXG4gICAgfSk7XG4gICAgc29ja2V0VGFzay5vbk9wZW4oZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMub25vcGVuKCk7XG4gICAgfSk7XG4gICAgc29ja2V0VGFzay5vbk1lc3NhZ2UoZnVuY3Rpb24gKHJlcykge1xuICAgICAgX3RoaXMub25tZXNzYWdlKHtcbiAgICAgICAgZGF0YTogcmVzLmRhdGFcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNvY2tldFRhc2sub25DbG9zZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICBfdGhpcy5vbmNsb3NlKHtcbiAgICAgICAgY29kZTogcmVzLmNvZGUsXG4gICAgICAgIHJlYXNvbjogcmVzLnJlYXNvblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoV2ViU29ja2V0LCBbe1xuICAgIGtleTogXCJzZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmQocGF5bG9hZCkge1xuICAgICAgc29ja2V0VGFzay5zZW5kKHtcbiAgICAgICAgZGF0YTogcGF5bG9hZFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlKGNvZGUsIHJlYXNvbikge1xuICAgICAgc29ja2V0VGFzay5jbG9zZSh7XG4gICAgICAgIGNvZGU6IGNvZGUsXG4gICAgICAgIHJlYXNvbjogcmVhc29uXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25vcGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9ub3BlbigpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwib25jbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbmNsb3NlKCkge31cbiAgfSwge1xuICAgIGtleTogXCJvbm1lc3NhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25tZXNzYWdlKCkge31cbiAgfV0pO1xuXG4gIHJldHVybiBXZWJTb2NrZXQ7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViU29ja2V0OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMzS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3RVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM5ZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzlnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3RSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMvSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDblBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3hlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbldBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN3lDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2xPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3pLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=