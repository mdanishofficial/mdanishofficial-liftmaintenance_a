"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_payment-modal_payment-modal_module_ts"],{

/***/ 4520:
/*!***************************************************************!*\
  !*** ./src/app/payment-modal/payment-modal-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentModalPageRoutingModule": () => (/* binding */ PaymentModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _payment_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-modal.page */ 6291);




const routes = [
    {
        path: '',
        component: _payment_modal_page__WEBPACK_IMPORTED_MODULE_0__.PaymentModalPage
    }
];
let PaymentModalPageRoutingModule = class PaymentModalPageRoutingModule {
};
PaymentModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentModalPageRoutingModule);



/***/ }),

/***/ 7234:
/*!*******************************************************!*\
  !*** ./src/app/payment-modal/payment-modal.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentModalPageModule": () => (/* binding */ PaymentModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _payment_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-modal-routing.module */ 4520);
/* harmony import */ var _payment_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-modal.page */ 6291);







let PaymentModalPageModule = class PaymentModalPageModule {
};
PaymentModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payment_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentModalPageRoutingModule
        ],
        declarations: [_payment_modal_page__WEBPACK_IMPORTED_MODULE_1__.PaymentModalPage]
    })
], PaymentModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_payment-modal_payment-modal_module_ts.js.map