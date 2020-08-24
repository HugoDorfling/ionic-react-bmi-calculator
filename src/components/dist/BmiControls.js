"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@ionic/react");
var icons_1 = require("ionicons/icons");
var BmiControls = function (props) {
    return (react_1["default"].createElement(react_2.IonRow, null,
        react_1["default"].createElement(react_2.IonCol, { className: "ion-text-left" },
            react_1["default"].createElement(react_2.IonButton, { onClick: props.onCalculate },
                react_1["default"].createElement(react_2.IonIcon, { slot: "start", icon: icons_1.calculatorOutline }),
                "Calculate")),
        react_1["default"].createElement(react_2.IonCol, { className: "ion-text-right" },
            react_1["default"].createElement(react_2.IonButton, { onClick: props.onReset },
                react_1["default"].createElement(react_2.IonIcon, { slot: "start", icon: icons_1.refreshOutline }),
                "Reset"))));
};
exports["default"] = BmiControls;
