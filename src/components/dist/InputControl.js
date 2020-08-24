"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@ionic/react");
var InputControl = function (props) {
    var inputChangeHandler = function (event) {
        props.onSelectValue(event.detail.value);
    };
    return (react_1["default"].createElement(react_2.IonSegment, { value: props.selectedValue, onIonChange: inputChangeHandler },
        react_1["default"].createElement(react_2.IonSegmentButton, { value: "mkg" },
            react_1["default"].createElement(react_2.IonLabel, null, "m/kg")),
        react_1["default"].createElement(react_2.IonSegmentButton, { value: "ftlbs" },
            react_1["default"].createElement(react_2.IonLabel, null, "ft/lbs"))));
};
exports["default"] = InputControl;
