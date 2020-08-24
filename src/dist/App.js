"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@ionic/react");
var BmiControls_1 = require("./components/BmiControls");
var BmiResult_1 = require("./components/BmiResult");
var InputControl_1 = require("./components/InputControl");
/* Core CSS required for Ionic components to work properly */
require("@ionic/react/css/core.css");
/* Basic CSS for apps built with Ionic */
require("@ionic/react/css/normalize.css");
require("@ionic/react/css/structure.css");
require("@ionic/react/css/typography.css");
/* Optional CSS utils that can be commented out */
require("@ionic/react/css/padding.css");
require("@ionic/react/css/float-elements.css");
require("@ionic/react/css/text-alignment.css");
require("@ionic/react/css/text-transformation.css");
require("@ionic/react/css/flex-utils.css");
require("@ionic/react/css/display.css");
/* Theme variables */
require("./theme/variables.css");
var App = function () {
    var weightInputRef = react_1.useRef(null);
    var heightInputRef = react_1.useRef(null);
    var _a = react_1.useState(), calculatedBmi = _a[0], setCalculateDBmi = _a[1];
    var _b = react_1.useState(), error = _b[0], setError = _b[1];
    var _c = react_1.useState('mkg'), calcUnits = _c[0], setCalcUnits = _c[1];
    var calculateBMI = function () {
        var enteredWeight = weightInputRef.current.value;
        var enteredHeight = heightInputRef.current.value;
        if (!enteredHeight ||
            !enteredWeight ||
            +enteredWeight <= 0 ||
            +enteredHeight <= 0) {
            setError("Please enter a valid (non-negative) input number");
            return;
        }
        var weightConversionFactor = calcUnits === 'ftlbs' ? 2.2 : 1;
        var heightConversionFactor = calcUnits === 'ftlbs' ? 3.28 : 1;
        var weight = +enteredWeight / weightConversionFactor;
        var height = +enteredHeight / heightConversionFactor;
        var bmi = weight / (height * height);
        setCalculateDBmi(bmi);
    };
    var resetInputs = function () {
        weightInputRef.current.value = "";
        heightInputRef.current.value = "";
    };
    var clearError = function () {
        setError('');
    };
    var selectCalcUnitHandler = function (selectedValue) {
        setCalcUnits(selectedValue);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_2.IonAlert, { isOpen: !!error, message: error, buttons: [{ text: "Okay", handler: clearError }] }),
        react_1["default"].createElement(react_2.IonApp, null,
            react_1["default"].createElement(react_2.IonHeader, null,
                react_1["default"].createElement(react_2.IonToolbar, { color: "primary" },
                    react_1["default"].createElement(react_2.IonTitle, null, "BMI Calculator"))),
            react_1["default"].createElement(react_2.IonContent, { className: "ion-padding" },
                react_1["default"].createElement(react_2.IonGrid, null,
                    react_1["default"].createElement(react_2.IonRow, null,
                        react_1["default"].createElement(react_2.IonCol, null,
                            react_1["default"].createElement(InputControl_1["default"], { selectedValue: calcUnits, onSelectValue: selectCalcUnitHandler }))),
                    react_1["default"].createElement(react_2.IonRow, null,
                        react_1["default"].createElement(react_2.IonCol, null,
                            react_1["default"].createElement(react_2.IonItem, null,
                                react_1["default"].createElement(react_2.IonLabel, { position: "floating" },
                                    "Your Height (",
                                    calcUnits === 'mkg' ? 'meters' : 'feet',
                                    ")"),
                                react_1["default"].createElement(react_2.IonInput, { type: "number", ref: heightInputRef })))),
                    react_1["default"].createElement(react_2.IonRow, null,
                        react_1["default"].createElement(react_2.IonCol, null,
                            react_1["default"].createElement(react_2.IonItem, null,
                                react_1["default"].createElement(react_2.IonLabel, { position: "floating" },
                                    "Your Weight (",
                                    calcUnits === 'mkg' ? 'kg' : 'lbs',
                                    ")"),
                                react_1["default"].createElement(react_2.IonInput, { type: "number", ref: weightInputRef })))),
                    react_1["default"].createElement(BmiControls_1["default"], { onCalculate: calculateBMI, onReset: resetInputs }),
                    calculatedBmi && react_1["default"].createElement(BmiResult_1["default"], { result: calculatedBmi }))))));
};
exports["default"] = App;
