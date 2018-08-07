webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var beerData = [{ beerName: 'IPA', breweryName: 'Good People', beerType: 'IPA', ABV: 7.1, IBU: 75.5, seasonal: 'No' }, { beerName: 'Pale', breweryName: 'Good People', beerType: 'Pale', ABV: 5.8, IBU: 37.5, seasonal: 'No' }, { beerName: 'Brown', breweryName: 'Good People', beerType: 'Brown', ABV: 5.4, IBU: 31, seasonal: 'No' }, { beerName: 'Snakehandler', breweryName: 'Good People', beerType: 'Double IPA', ABV: 10, IBU: 100, seasonal: 'No' }, { beerName: 'Coffe Oatmeal Stout', breweryName: 'Good People', beerType: 'IPA', ABV: 7.1, IBU: 75.5, seasonal: 'No' }, { beerName: 'Bearded Lady', breweryName: 'Good People', beerType: 'Wheat', ABV: 4.2, IBU: 13.3, seasonal: 'No' }, { beerName: 'Urban Farmer', breweryName: 'Good People', beerType: 'Belgian', ABV: 5.6, IBU: 15, seasonal: 'No' }, { beerName: 'Muchacho', breweryName: 'Good People', beerType: 'Lager', ABV: 4.8, IBU: 18, seasonal: 'No' }, { beerName: 'JUCO', breweryName: 'Good People', beerType: 'Session IPA', ABV: 4.2, IBU: 45, seasonal: 'No' }, { beerName: 'Hitchhiker', breweryName: 'Good People', beerType: 'IPA', ABV: 7.8, IBU: 100, seasonal: 'No' }, { beerName: 'Mumbai Rye', breweryName: 'Good People', beerType: 'IPA', ABV: 7.4, IBU: 71.9, seasonal: 'No' }, { beerName: 'Denim Downhiller', breweryName: 'Good People', beerType: 'Brown', ABV: 5.3, IBU: 25 }, { beerName: 'IPA', breweryName: 'TrimTab', beerType: 'IPA', ABV: 6.5, IBU: 61, seasonal: 'No' }, { beerName: 'Pillar to Post Rye Brown', breweryName: 'TrimTab', beerType: 'Brown', ABV: 5.5, IBU: 41, seasonal: 'No' }, { beerName: 'Rescue Ship Pale Ale', breweryName: 'TrimTab', beerType: 'Pale', ABV: 5.5, IBU: 18, seasonal: 'yes' }, { beerName: 'Imperial City Olde Ale', breweryName: 'TrimTab', beerType: 'English Ale', ABV: 7.3, IBU: 55.5, seasonal: 'Yes' }, { beerName: 'Bankston 88', breweryName: 'TrimTab', beerType: 'Belgian', ABV: 4.5, IBU: 31, seasonal: 'Yes' }, { beerName: 'Raspberry Berliner Weisse', breweryName: 'TrimTab', beerType: 'Sour', ABV: 5.2, IBU: 7, seasonal: 'No' }, { beerName: 'Craft Lager', breweryName: 'Ghost Train', beerType: 'Lager', ABV: 4.5, IBU: 19, seasonal: 'No' }, { beerName: 'Go-Devil Golden Ale', breweryName: 'Ghost Train', beerType: 'Blonde', ABV: 4.9, IBU: 26, seasonal: 'No' }, { beerName: 'Terminal Station Brown Ale', breweryName: 'Ghost Train', beerType: 'Brown', ABV: 4.5, IBU: 22, seasonal: 'No' }, { beerName: 'Switchmans Stash IPL', breweryName: 'Ghost Train', beerType: 'IPL', ABV: 6.9, IBU: 72, seasonal: 'No' }, { beerName: 'Kaleidoscope Kettle Sour', breweryName: 'Ghost Train', beerType: 'Sour', ABV: 7.1, IBU: 75.5, seasonal: 'No' }, { beerName: 'Spring Street Saison', breweryName: 'Avondale', beerType: 'Belgian', ABV: 7.2, IBU: 18, seasonal: 'No' }, { beerName: 'Miss Fancys Tripel', breweryName: 'Avondale', beerType: 'Belgian', ABV: 9.2, IBU: 20, seasonal: 'No' }, { beerName: 'Battlefield IPA', breweryName: 'Avondale', beerType: 'IPA', ABV: 6.8, IBU: 62, seasonal: 'No' }, { beerName: 'Vanillaphant Porter', breweryName: 'Avondale', beerType: 'Porter', ABV: 6.2, IBU: 25, seasonal: 'No' }, { beerName: 'Mill City White', breweryName: 'Avondale', beerType: 'Belgian', ABV: 5, IBU: 16, seasonal: 'No' }, { beerName: 'Train Hopper', breweryName: 'Avondale', beerType: 'Pale', ABV: 5.5, IBU: 50, seasonal: 'No' }, { beerName: 'Streetcar', breweryName: 'Avondale', beerType: 'Kolsch', ABV: 4.3, IBU: 22, seasonal: 'No' }, { beerName: 'No Joka Mocha', breweryName: 'Avondale', beerType: 'Stout', ABV: 7.2, IBU: 21, seasonal: 'No' }, { beerName: 'IPA', breweryName: 'Avondale', beerType: 'IPA', ABV: 7.1, IBU: 75.5, seasonal: 'No' }, { beerName: 'American Blonde Ale', breweryName: 'Cahaba', beerType: 'Blonde', ABV: 5.5, IBU: 20, seasonal: 'No' }, { beerName: 'Liquidambar', breweryName: 'Cahaba', beerType: 'Amber', ABV: 5.25, IBU: 51, seasonal: 'No' }, { beerName: 'Oka Uba IPA', breweryName: 'Cahaba', beerType: 'IPA', ABV: 7.5, IBU: 57, seasonal: 'No' }, { beerName: 'Ryezome', breweryName: 'Cahaba', beerType: 'Stout', ABV: 5.8, IBU: 60, seasonal: 'No' }, { beerName: 'White IPA', breweryName: 'Cahaba', beerType: 'IPA', ABV: 6.5, IBU: 51, seasonal: 'No' }, { beerName: 'Fraxinus Maximus', breweryName: 'Cahaba', beerType: 'Double IPA', ABV: 8.5, IBU: 120, seasonal: 'No' }, { beerName: 'Kiwi Kolsch', breweryName: 'Cahaba', beerType: 'Kolsch', ABV: 5.3, IBU: 35, seasonal: 'No' }, { beerName: 'Oktoberfest', breweryName: 'Cahaba', beerType: 'Marzen', ABV: 6.9, IBU: 32, seasonal: 'No' }, { beerName: 'Irish Stout', breweryName: 'Cahaba', beerType: 'Stout', ABV: 4, IBU: 35, seasonal: 'No' }, { beerName: 'IPA', breweryName: 'Cahaba', beerType: 'IPA', ABV: 7.1, IBU: 75.5, seasonal: 'No' }];

exports.default = beerData;
//https://thereportoftheweek-api.herokuapp.com/reports

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Results = __webpack_require__(99);

var _Results2 = _interopRequireDefault(_Results);

var _beerData = __webpack_require__(100);

var _beerData2 = _interopRequireDefault(_beerData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      beerData: _beerData2.default,
      min_abv: 0,
      max_abv: 15,
      min_ibu: 0,
      max_ibu: 120,
      filteredData: _beerData2.default,
      breweryName: 'All',
      beerType: 'Any',
      populateFormsData: '',
      sortBy: 'ABV-desc',
      search: ''

    };
    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);

    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      var beerData = this.state.beerData.sort(function (a, b) {
        return a.ABV - b.ABV;
      });

      this.setState({
        beerData: beerData
      });
    }
  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var returnedData = this.state.beerData.filter(function (item) {
        return item.ABV >= _this3.state.min_abv && item.ABV <= _this3.state.max_abv && item.IBU >= _this3.state.min_ibu && item.IBU <= _this3.state.max_ibu;
      });

      if (this.state.breweryName != 'All') {
        returnedData = returnedData.filter(function (item) {
          return item.breweryName == _this3.state.breweryName;
        });
      }

      if (this.state.beerType != 'Any') {
        returnedData = returnedData.filter(function (item) {
          return item.beerType == _this3.state.beerType;
        });
      }

      if (this.state.sortBy == 'ABV-desc') {
        returnedData = returnedData.sort(function (a, b) {
          return a.ABV - b.ABV;
        });
      }

      if (this.state.sortBy == 'ABV-asc') {
        returnedData = returnedData.sort(function (a, b) {
          return b.ABV - a.ABV;
        });
      }

      if (this.state.search != '') {
        returnedData = returnedData.filter(function (item) {
          var beerName = item.beerName.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = beerName.match(searchText);

          var breweryName = item.breweryName.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var m = breweryName.match(searchText);

          if (n != null || m != null) {
            return true;
          }
          console.log("searched");
        });
      }

      this.setState({
        filteredData: returnedData
      });
      console.log("data filtered");
    }
  }, {
    key: 'populateForms',
    value: function populateForms() {
      var _this4 = this;

      //beerType
      var beerTypes = this.state.beerData.map(function (item) {
        return item.beerType;
      });

      beerTypes = new Set(beerTypes);
      beerTypes = [].concat(_toConsumableArray(beerTypes));
      beerTypes = beerTypes.sort();

      //breweryName
      var breweryNames = this.state.beerData.map(function (item) {
        return item.breweryName;
      });

      breweryNames = new Set(breweryNames);
      breweryNames = [].concat(_toConsumableArray(breweryNames));
      breweryNames = breweryNames.sort();

      this.setState({
        populateFormsData: {
          beerTypes: beerTypes,
          breweryNames: breweryNames
        }
      }, function () {
        console.log(_this4.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateForms }),
          _react2.default.createElement(_Results2.default, { beerData: this.state.filteredData, change: this.change, globalState: this.state, changeView: this.changeView })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {};
    _this.beerTypes = _this.beerTypes.bind(_this);
    _this.breweryNames = _this.breweryNames.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: 'beerTypes',
    value: function beerTypes() {
      if (this.props.globalState.populateFormsData.beerTypes != undefined) {
        var beerTypes = this.props.globalState.populateFormsData.beerTypes;

        return beerTypes.map(function (item) {

          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'breweryNames',
    value: function breweryNames() {
      if (this.props.globalState.populateFormsData.breweryNames != undefined) {
        var breweryNames = this.props.globalState.populateFormsData.breweryNames;

        return breweryNames.map(function (item) {

          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'filter' },
        _react2.default.createElement(
          'h4',
          null,
          'Filter'
        ),
        _react2.default.createElement(
          'span',
          { className: 'title' },
          'Brewery'
        ),
        _react2.default.createElement(
          'select',
          { name: 'breweryName', className: 'filters brewery', onChange: this.props.change },
          _react2.default.createElement(
            'option',
            { value: 'All' },
            'All'
          ),
          this.breweryNames()
        ),
        _react2.default.createElement(
          'span',
          { className: 'title' },
          'Beer Type'
        ),
        _react2.default.createElement(
          'select',
          { name: 'beerType', className: 'filters beerType', onChange: this.props.change },
          _react2.default.createElement(
            'option',
            { value: 'Any' },
            'Any'
          ),
          this.beerTypes()
        ),
        _react2.default.createElement(
          'div',
          { className: 'filters ABV' },
          _react2.default.createElement(
            'span',
            { className: 'title' },
            'ABV'
          ),
          _react2.default.createElement('input', { type: 'number', name: 'min_abv', className: 'minABV', onChange: this.props.change, value: this.props.globalState.min_abv }),
          _react2.default.createElement('input', { type: 'number', name: 'max_abv', className: 'maxABV', onChange: this.props.change, value: this.props.globalState.max_abv })
        ),
        _react2.default.createElement(
          'div',
          { className: 'filters IBU', onChange: this.props.change },
          _react2.default.createElement(
            'span',
            { className: 'title' },
            'IBU'
          ),
          _react2.default.createElement('input', { type: 'number', name: 'min_ibu', className: 'minIBU', onChange: this.props.change, value: this.props.globalState.min_ibu }),
          _react2.default.createElement('input', { type: 'number', name: 'max_ibu', className: 'maxIBU', onChange: this.props.change, value: this.props.globalState.max_ibu })
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          'Birmingham Brews Alot'
        ),
        _react2.default.createElement('nav', null)
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Results = function (_Component) {
  _inherits(Results, _Component);

  function Results() {
    _classCallCheck(this, Results);

    var _this = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this));

    _this.state = {};
    _this.loopBeers = _this.loopBeers.bind(_this);
    return _this;
  }

  _createClass(Results, [{
    key: 'loopBeers',
    value: function loopBeers() {
      var beerData = this.props.beerData;


      if (beerData == undefined || beerData.length == 0) {
        return "Sorry your filter did not match any results";
      }

      return beerData.map(function (beer, index) {
        return _react2.default.createElement(
          'div',
          { className: 'col-md-3', key: index },
          _react2.default.createElement(
            'div',
            { className: 'beer' },
            _react2.default.createElement(
              'div',
              { className: 'beerImg' },
              _react2.default.createElement('img', { src: "../img/" + beer.breweryName + ".png" })
            ),
            _react2.default.createElement(
              'div',
              { className: 'bottom-info' },
              _react2.default.createElement(
                'span',
                { className: 'beerName' },
                beer.beerName
              ),
              _react2.default.createElement(
                'div',
                { className: 'names' },
                _react2.default.createElement(
                  'span',
                  { className: 'breweryName' },
                  beer.breweryName
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'beerType' },
                  beer.beerType
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'stats' },
                _react2.default.createElement(
                  'span',
                  { className: 'ABVValue' },
                  'ABV: ',
                  beer.ABV,
                  '%'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'IBUValue' },
                  'IBU: ',
                  beer.IBU
                )
              )
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'results' },
        _react2.default.createElement(
          'section',
          { className: 'searchBar' },
          _react2.default.createElement('input', { type: 'text', name: 'search', placeholder: 'Search for a beer', onChange: this.props.change })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortBar' },
          _react2.default.createElement(
            'div',
            { className: 'sortOptions' },
            _react2.default.createElement(
              'div',
              { className: 'options' },
              _react2.default.createElement(
                'select',
                { name: 'sortBy', className: 'sortBy', onChange: this.props.change },
                _react2.default.createElement(
                  'option',
                  { value: 'ABV-desc' },
                  'Low ABV'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'ABV-asc' },
                  'High ABV'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'beerResults' },
          this.loopBeers()
        )
      );
    }
  }]);

  return Results;
}(_react.Component);

exports.default = Results;

/***/ })

},[102]);