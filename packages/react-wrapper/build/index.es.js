import React__default, { useRef, useEffect, createElement } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var WebComponentWrapper = function (props) {
    var events = props.events, component = props.component, styles = props.styles, children = props.children, forwardedProps = __rest(props, ["events", "component", "styles", "children"]);
    var eventNames = events ? Object.keys(events) : null;
    var Component = component;
    var ref = useRef(null);
    useEffect(function () {
        if (ref.current) {
            if (styles) {
                ref.current.styles = styles;
            }
            if (eventNames) {
                eventNames.map(function (eventName) { return ref.current.addEventListener(events[eventName], props[eventName]); });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
    return (React__default.createElement(Component, __assign({ ref: ref }, forwardedProps), children));
};

var Card = function (props) { return createElement(WebComponentWrapper, __assign({ component: "t-card" }, props)); };
var Button = function (props) { return createElement(WebComponentWrapper, __assign({ component: "t-button" }, props)); };
var Input = function (props) { return createElement(WebComponentWrapper, __assign({ events: { onChanged: 'changed' }, component: "t-input" }, props)); };
var InputGroup = function (props) { return createElement(WebComponentWrapper, __assign({ component: "t-input-group" }, props)); };
var InputLabel = function (props) { return createElement(WebComponentWrapper, __assign({ component: "t-input-label" }, props)); };
var InputError = function (props) { return createElement(WebComponentWrapper, __assign({ component: "t-input-error" }, props)); };

export { Button, Card, Input, InputError, InputGroup, InputLabel };
//# sourceMappingURL=index.es.js.map