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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/jingdong/index.js");
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
  UPDATE_USER: '/hserve/v2.0/user/info/',
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
    CENSOR_ASYNC: '/hserve/v2.2/async-censor/'
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
    MINIAPP_QR_CODE: '/hserve/v2.0/idp/alipay/miniapp-qr-code/'
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
  VERSION: VERSION // package.json 中的 version 也需要同步修改。

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

module.exports = {
  getAPIHost: function getAPIHost() {
    var BaaS = __webpack_require__(/*! ./baas */ "../core/baas.js");

    return BaaS._config.API_HOST || "https://".concat(BaaS._config.CLIENT_ID, ".myminapp.com");
  },
  SDK_TYPE: 'file',
  CLIENT_PLATFORM: 'UNKNOWN',
  checkLatestVersion: function checkLatestVersion() {
    return null;
  }
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

/***/ "./src/jingdong/auth.js":
/*!******************************!*\
  !*** ./src/jingdong/auth.js ***!
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
      jd.login({
        success: function success(res) {
          resolve(res.code);
        },
        fail: function fail() {
          BaaS.request.jdRequestFail(reject);
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
      url: API.JINGDONG.SILENT_LOGIN,
      method: 'POST',
      data: {
        create_user: createUser,
        code: code
      }
    }).then(utils.validateStatusCode).then(function (res) {
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
      url: API.JINGDONG.AUTHENTICATE,
      method: 'POST',
      data: data
    }).then(utils.validateStatusCode);
  };

  var getUserInfo = function getUserInfo() {
    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        lang = _ref5.lang;

    return new Promise(function (resolve, reject) {
      jd.getUserInfo({
        lang: lang,
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
      return Promise.all([storageAsync.get(constants.STORAGE_KEY.UID), storageAsync.get(constants.STORAGE_KEY.OPENID)]).then(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
            id = _ref7[0],
            openid = _ref7[1];

        return Promise.reject(_extends(new HError(603), {
          id: id,
          openid: openid
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
          data: detail.data,
          iv: detail.iv,
          userInfo: detail.userInfo,
          update_userprofile: utils.getUpdateUserProfileParam(syncUserProfile)
        };
        return getSensitiveData(payload);
      });
    }).then(function (res) {
      var userInfo = detail.userInfo;
      userInfo.id = res.data.user_id;
      userInfo.openid = res.data.openid;

      BaaS._polyfill.handleLoginSuccess(res, false, userInfo);
    });
  };

  var linkJd = function linkJd(res) {
    var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref8$syncUserProfile = _ref8.syncUserProfile,
        syncUserProfile = _ref8$syncUserProfile === void 0 ? constants.UPDATE_USERPROFILE_VALUE.SETNX : _ref8$syncUserProfile;

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
          code: code
        } : {
          code: code
        };
        return BaaS._baasRequest({
          method: 'POST',
          url: API.JINGDONG.USER_ASSOCIATE,
          data: payload
        });
      });
    });
  };
  /**
   * 京东登录
   * @function
   * @since v2.5.0
   * @memberof BaaS.auth
   * @param {BaaS.AuthData|null} [authData] 用户信息，值为 null 时是静默登录
   * @param {BaaS.LoginOptions} [options] 其他选项
   * @return {Promise<BaaS.CurrentUser>}
   */


  var loginWithJd = function loginWithJd(authData) {
    var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref9$createUser = _ref9.createUser,
        createUser = _ref9$createUser === void 0 ? true : _ref9$createUser,
        _ref9$syncUserProfile = _ref9.syncUserProfile,
        syncUserProfile = _ref9$syncUserProfile === void 0 ? constants.UPDATE_USERPROFILE_VALUE.SETNX : _ref9$syncUserProfile;

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

    return loginPromise.then(function () {
      return commonAuth.getCurrentUser();
    });
  };

  _extends(BaaS.auth, {
    silentLogin: silentLogin,
    loginWithJd: utils.rateLimit(loginWithJd),
    linkJd: utils.rateLimit(linkJd)
  });
};

/***/ }),

/***/ "./src/jingdong/baasRequest.js":
/*!*************************************!*\
  !*** ./src/jingdong/baasRequest.js ***!
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


var baasRequest = function baasRequest(_ref) {
  var _arguments = arguments;
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
    return BaaS.request.apply(null, _arguments);
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

/***/ "./src/jingdong/index.js":
/*!*******************************!*\
  !*** ./src/jingdong/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! core-module/baas */ "../core/baas.js");

var core = __webpack_require__(/*! core-module/index */ "../core/index.js");

var polyfill = __webpack_require__(/*! ./polyfill */ "./src/jingdong/polyfill.js");

var auth = __webpack_require__(/*! ./auth */ "./src/jingdong/auth.js");

BaaS._config.VERSION = "v3.13.0-beta.2";
BaaS.use(core);
BaaS.use(polyfill);
BaaS.use(auth);
BaaS.request = __webpack_require__(/*! ./request */ "./src/jingdong/request.js");
BaaS._baasRequest = __webpack_require__(/*! ./baasRequest */ "./src/jingdong/baasRequest.js");
BaaS.uploadFile = __webpack_require__(/*! ./uploadFile */ "./src/jingdong/uploadFile.js");

BaaS._createRequestMethod();

if (typeof jd !== 'undefined') {
  jd.BaaS = BaaS;
}

module.exports = BaaS;

/***/ }),

/***/ "./src/jingdong/polyfill.js":
/*!**********************************!*\
  !*** ./src/jingdong/polyfill.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// const tplMsgStatsReport = require('core-module/tplMsgStatsReport')
var constants = __webpack_require__(/*! core-module/constants */ "../core/constants.js");

module.exports = function (BaaS) {
  _extends(BaaS._polyfill, {
    CLIENT_PLATFORM: 'JINGDONG',
    setStorageSync: function setStorageSync(k, v) {
      return jd.setStorageSync(k, v);
    },
    getStorageSync: function getStorageSync(k) {
      return jd.getStorageSync(k);
    },
    setStorageAsync: function setStorageAsync(k, v) {
      return new Promise(function (resolve, reject) {
        jd.setStorage({
          key: k,
          data: v,
          success: resolve,
          fail: reject
        });
      });
    },
    getStorageAsync: function getStorageAsync(k) {
      return new Promise(function (resolve) {
        jd.getStorage({
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
      return jd.getSystemInfoSync();
    },
    checkLatestVersion: function checkLatestVersion() {
      var info = jd.getSystemInfoSync();

      if (info.platform === 'devtools') {
        BaaS.checkVersion({
          platform: constants.PLATFORM.JONGDONG
        });
      }
    },
    linkJd: function linkJd() {
      var _BaaS$auth;

      return (_BaaS$auth = BaaS.auth).linkJd.apply(_BaaS$auth, arguments);
    },
    handleLoginSuccess: function handleLoginSuccess(res, isAnonymous, userInfo) {
      // 登录成功的 hook （login、loginWithJingdong、register）调用成功后触发
      BaaS.storage.set(constants.STORAGE_KEY.UID, res.data.user_id);
      BaaS.storage.set(constants.STORAGE_KEY.OPENID, res.data.openid || '');
      BaaS.storage.set(constants.STORAGE_KEY.AUTH_TOKEN, res.data.token);

      if (res.data.openid) {
        BaaS.storage.set(constants.STORAGE_KEY.USERINFO, _extends({}, BaaS.storage.get(constants.STORAGE_KEY.USERINFO), userInfo || {
          id: res.data.user_id,
          openid: res.data.openid
        }));
      }

      BaaS.storage.set(constants.STORAGE_KEY.EXPIRES_AT, Math.floor(Date.now() / 1000) + res.data.expires_in - 30);

      if (isAnonymous) {
        BaaS.storage.set(constants.STORAGE_KEY.IS_ANONYMOUS_USER, 1);
      } else {
        BaaS.storage.set(constants.STORAGE_KEY.IS_ANONYMOUS_USER, 0); // tplMsgStatsReport.reportStats()
      }
    }
  });
};

/***/ }),

/***/ "./src/jingdong/request.js":
/*!*********************************!*\
  !*** ./src/jingdong/request.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BaaS = __webpack_require__(/*! core-module/baas */ "../core/baas.js");

var HError = __webpack_require__(/*! core-module/HError */ "../core/HError.js");

var utils = __webpack_require__(/*! core-module/utils */ "../core/utils/index.js");

var constants = __webpack_require__(/*! core-module/constants */ "../core/constants.js");

var jdRequestFail = function jdRequestFail(reject) {
  jd.getNetworkType({
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

      jd.request({
        method: method,
        url: url,
        data: data,
        header: headers,
        dataType: dataType,
        success: resolve,
        fail: function fail() {
          jdRequestFail(reject);
        }
      });
      utils.log(constants.LOG_LEVEL.INFO, 'Request => ' + url);
    });
  });
};

module.exports = request;
module.exports.jdRequestFail = jdRequestFail;

/***/ }),

/***/ "./src/jingdong/uploadFile.js":
/*!************************************!*\
  !*** ./src/jingdong/uploadFile.js ***!
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

var jdUpload = function jdUpload(config, resolve, reject, type) {
  return getUploadHeaders().then(function (header) {
    return jd.uploadFile({
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
    uploadTask = jdUpload(config, function (e) {
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

/***/ })

/******/ });
});