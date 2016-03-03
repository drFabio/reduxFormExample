/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _redux = __webpack_require__(3);
	
	var _reduxThunk = __webpack_require__(4);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reactRedux = __webpack_require__(5);
	
	var _reducer = __webpack_require__(6);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _Home = __webpack_require__(9);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default)(_redux.createStore);
	var store = createStoreWithMiddleware(_reducer2.default);
	var main = _react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_Home2.default, null)
	);
	
	_reactDom2.default.render(main, document.getElementById('app'));
	__webpack_require__(23);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Redux;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;
	
	  return function (next) {
	    return function (action) {
	      return typeof action === 'function' ? action(dispatch, getState) : next(action);
	    };
	  };
	}
	
	module.exports = thunkMiddleware;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = ReactRedux;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.main = exports.INITIAL_STATE = undefined;
	
	var _immutable = __webpack_require__(7);
	
	var _actionTypes = __webpack_require__(8);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var INITIAL_STATE = exports.INITIAL_STATE = (0, _immutable.Map)();
	
	var main = exports.main = function main() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
	    var action = arguments[1];
	
	    console.log(action);
	    switch (action.type) {
	        case types.VALUE_CHANGED:
	            return state.withMutations(function (map) {
	                map.setIn(['values', action.id], action.value).deleteIn(['errors', action.id]);
	            });
	        case types.SENDING_LOGIN:
	            return state.withMutations(function (map) {
	                map.set('processing', true).delete('errors').delete('hasErrors').delete('loginInfo').delete('loginFailed');
	            });
	        case types.SUCCESSFULLY_LOGGED_IN:
	            return state.withMutations(function (map) {
	                map.delete('processing').set('loginInfo', action.message).set('loginFailed', false);
	            });
	        case types.INVALID_FIELDS:
	            return state.withMutations(function (map) {
	                map.set('errors', (0, _immutable.fromJS)(action.errors)).set('hasErrors', true);
	            });
	        case types.LOGIN_FAILED:
	            return state.withMutations(function (map) {
	                map.delete('processing').set('loginInfo', action.message).set('loginFailed', true);
	            });
	    }
	    return state;
	};
	exports.default = main;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = Immutable;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var VALUE_CHANGED = exports.VALUE_CHANGED = 'VALUE_CHANGED';
	var SENDING_LOGIN = exports.SENDING_LOGIN = 'SENDING_LOGIN';
	var SUCCESSFULLY_LOGGED_IN = exports.SUCCESSFULLY_LOGGED_IN = 'SUCCESSFULLY_LOGGED_IN';
	var INVALID_FIELDS = exports.INVALID_FIELDS = 'INVALID_FIELDS';
	var LOGIN_FAILED = exports.LOGIN_FAILED = 'LOGIN_FAILED';

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _components = __webpack_require__(10);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(5);
	
	var _actions = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = _react2.default.createClass({
	    displayName: 'App',
	
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        //Do not update on email and password value changes
	        return nextProps.buttonDisabled !== this.props.buttonDisabled || nextProps.loginInfo !== this.props.loginInfo;
	    },
	    render: function render() {
	        var infoMessage = null;
	        if (this.props.loginInfo) {
	            var messageLevel = this.props.loginFailed ? 'error' : 'success';
	            infoMessage = _react2.default.createElement(
	                _components.FlashMessage,
	                { messageLevel: messageLevel },
	                this.props.loginInfo
	            );
	        }
	        return _react2.default.createElement(
	            _components.Page,
	            { title: 'Login' },
	            _react2.default.createElement(
	                _components.Panel,
	                { title: 'Credentials' },
	                infoMessage,
	                _react2.default.createElement(
	                    _components.FormField,
	                    { name: 'email', type: 'text', id: 'email', placeholder: 'Your email' },
	                    'Email'
	                ),
	                _react2.default.createElement(
	                    _components.FormField,
	                    { name: 'password', type: 'password', id: 'password', placeholder: 'Your password' },
	                    'Password'
	                ),
	                _react2.default.createElement(
	                    _components.Button,
	                    { onClick: this.clicked, disabled: this.props.buttonDisabled },
	                    'Send'
	                )
	            )
	        );
	    },
	    clicked: function clicked(e) {
	        e.preventDefault();
	        this.props.onSend(this.props.emailValue, this.props.passwordValue);
	    }
	});
	
	var mapStateToProps = function mapStateToProps(state) {
	    var stateProps = {
	        emailValue: state.getIn(['values', 'email']),
	        passwordValue: state.getIn(['values', 'password']),
	        buttonDisabled: state.get('processing', false),
	        loginInfo: state.get('loginInfo', false),
	        loginFailed: state.get('loginFailed', false)
	    };
	    return stateProps;
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        onSend: function onSend(email, password) {
	
	            var errorState = (0, _actions.validate)(email, password);
	            if (errorState) {
	                dispatch(errorState);
	                return;
	            }
	            dispatch((0, _actions.login)(email, password));
	        }
	    };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Page = __webpack_require__(11);
	
	Object.defineProperty(exports, 'Page', {
	  enumerable: true,
	  get: function get() {
	    return _Page.Page;
	  }
	});
	
	var _Panel = __webpack_require__(13);
	
	Object.defineProperty(exports, 'Panel', {
	  enumerable: true,
	  get: function get() {
	    return _Panel.Panel;
	  }
	});
	
	var _FormField = __webpack_require__(15);
	
	Object.defineProperty(exports, 'FormField', {
	  enumerable: true,
	  get: function get() {
	    return _FormField.FormField;
	  }
	});
	
	var _Button = __webpack_require__(19);
	
	Object.defineProperty(exports, 'Button', {
	  enumerable: true,
	  get: function get() {
	    return _Button.Button;
	  }
	});
	
	var _FlashMessage = __webpack_require__(16);
	
	Object.defineProperty(exports, 'FlashMessage', {
	  enumerable: true,
	  get: function get() {
	    return _FlashMessage.FlashMessage;
	  }
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Page = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Page = exports.Page = _react2.default.createClass({
	    displayName: "Page",
	    render: function render() {
	        return _react2.default.createElement(
	            "div",
	            { className: "page" },
	            _react2.default.createElement(
	                "h1",
	                { className: "page__title" },
	                this.props.title
	            ),
	            this.props.children
	        );
	    }
	});
	__webpack_require__(12);

/***/ },
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Panel = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Panel = exports.Panel = _react2.default.createClass({
	    displayName: "Panel",
	    render: function render() {
	        var title = null;
	        if (this.props.title) {
	            title = _react2.default.createElement(
	                "h3",
	                { className: "panel__title" },
	                this.props.title
	            );
	        }
	        return _react2.default.createElement(
	            "div",
	            { className: "panel" },
	            title,
	            _react2.default.createElement(
	                "div",
	                { className: "panel__contents" },
	                this.props.children
	            )
	        );
	    }
	});
	__webpack_require__(14);

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FormField = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(5);
	
	var _FlashMessage = __webpack_require__(16);
	
	var _actionTypes = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var FormFieldDisplay = _react2.default.createClass({
	    displayName: 'FormFieldDisplay',
	    render: function render() {
	        var _props = this.props;
	        var id = _props.id;
	        var errors = _props.errors;
	        var hasErrors = _props.hasErrors;
	        var type = _props.type;
	        var label = _props.children;
	
	        var otherProps = _objectWithoutProperties(_props, ['id', 'errors', 'hasErrors', 'type', 'children']);
	
	        var className = 'formField';
	        var messages = null;
	        if (hasErrors) {
	            className += ' formField--error';
	            messages = _react2.default.createElement(
	                _FlashMessage.FlashMessage,
	                { messageLevel: 'error' },
	                errors
	            );
	        }
	        return _react2.default.createElement(
	            'div',
	            { className: className },
	            messages,
	            _react2.default.createElement(
	                'label',
	                { htmlFor: id, className: 'formField__label' },
	                _react2.default.createElement(
	                    'span',
	                    { className: 'formField__label__text' },
	                    label
	                )
	            ),
	            _react2.default.createElement('input', _extends({ className: 'formField__input', type: type, id: id, onChange: this.handleChange }, otherProps))
	        );
	    },
	    handleChange: function handleChange(e) {
	        this.props.onValueChange(e.target.value);
	    }
	});
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    var errors = state.getIn(['errors', ownProps.id], false);
	
	    return {
	        errors: errors,
	        hasErrors: !!errors
	    };
	};
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	    return {
	        onValueChange: function onValueChange(value) {
	            dispatch({ type: _actionTypes.VALUE_CHANGED, 'value': value, 'id': ownProps.id });
	        }
	    };
	};
	var FormField = exports.FormField = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FormFieldDisplay);
	__webpack_require__(18);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FlashMessage = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FlashMessage = exports.FlashMessage = _react2.default.createClass({
	    displayName: 'FlashMessage',
	
	    getInitialState: function getInitialState() {
	        return { show: true };
	    },
	    render: function render() {
	        var content = null;
	        if (this.state.show) {
	            var className = 'flashMessage';
	            if (this.props.messageLevel) {
	                className += ' flashMessage--' + this.props.messageLevel;
	            }
	            content = _react2.default.createElement(
	                'div',
	                { className: className },
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    this.props.children,
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'flashMessage__close', onClick: this.hide },
	                        'x'
	                    )
	                )
	            );
	        }
	        return content;
	    },
	    hide: function hide() {
	        this.setState({ show: false });
	    }
	});
	__webpack_require__(17);

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Button = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Button = exports.Button = _react2.default.createClass({
	    displayName: 'Button',
	    render: function render() {
	        var _props = this.props;
	        var label = _props.children;
	
	        var other = _objectWithoutProperties(_props, ['children']);
	
	        return _react2.default.createElement(
	            'button',
	            _extends({ className: 'button' }, other),
	            label
	        );
	    }
	});
	__webpack_require__(20);

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.login = exports.validate = undefined;
	
	var _actionTypes = __webpack_require__(8);
	
	var _messages = __webpack_require__(22);
	
	var msg = _interopRequireWildcard(_messages);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var emailRegex = /\S+@\S+\.\S+/;
	var validate = exports.validate = function validate(email, password) {
	    var errors = { 'email': false, 'password': false };
	    if (!email) {
	        errors.email = msg.EMAIL_REQUIRED;
	    } else if (!emailRegex.test(email)) {
	        errors.email = msg.EMAIL_NOT_AN_EMAIL;
	    }
	    if (!password) {
	        errors.password = msg.PASSWORD_REQUIRED;
	    } else if (password.length < 8) {
	        errors.password = msg.PASSWORD_LENGTH;
	    }
	    if (!errors.password.length && !errors.email.length) {
	        return false;
	    }
	    return { type: _actionTypes.INVALID_FIELDS, errors: errors };
	};
	
	var login = exports.login = function login(email, password) {
	    return function (dispatch) {
	        dispatch({ type: _actionTypes.SENDING_LOGIN });
	        //Mocking a HTTP request
	        setTimeout(function () {
	            if (password === 'password') {
	                console.log('HERE');
	                var _message = msg.UNABLE_TO_LOGIN;
	                dispatch({ type: _actionTypes.LOGIN_FAILED, message: _message });
	                return;
	            }
	            var message = msg.SUCESSFULLY_LOGIN;
	            console.log('THERE');
	            dispatch({ type: _actionTypes.SUCCESSFULLY_LOGGED_IN, message: message });
	        }, 800);
	    };
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EMAIL_REQUIRED = exports.EMAIL_REQUIRED = 'Email is a required field';
	var EMAIL_NOT_AN_EMAIL = exports.EMAIL_NOT_AN_EMAIL = 'Email should resemble an Email';
	var PASSWORD_REQUIRED = exports.PASSWORD_REQUIRED = 'Password is a required field';
	var PASSWORD_LENGTH = exports.PASSWORD_LENGTH = 'Password must have at least 8 chars';
	var UNABLE_TO_LOGIN = exports.UNABLE_TO_LOGIN = 'We were unable to log you in , are you using the right email and password ?';
	var SUCESSFULLY_LOGIN = exports.SUCESSFULLY_LOGIN = 'You successfully loged in!';

/***/ },
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map