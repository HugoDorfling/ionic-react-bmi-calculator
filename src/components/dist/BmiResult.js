"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@ionic/react");
var BmiResult = function (props) {
    return (react_1["default"].createElement(react_2.IonRow, null,
        react_1["default"].createElement(react_2.IonCol, null,
            react_1["default"].createElement(react_2.IonCard, null,
                react_1["default"].createElement(react_2.IonCardContent, { className: "ion-text-center" },
                    react_1["default"].createElement("h2", null, "Your Body-Mass-Index"),
                    react_1["default"].createElement("h3", null, props.result.toFixed(2)))))));
};
exports["default"] = BmiResult;
