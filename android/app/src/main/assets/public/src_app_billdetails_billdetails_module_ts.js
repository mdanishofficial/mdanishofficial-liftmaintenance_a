"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_billdetails_billdetails_module_ts"],{

/***/ 5782:
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/billdetails/billdetails.page.html ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"nav-wrapper\" style=\"background: white;height: 1em;\"></div>\n<head>\n \n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Select</title>\n</head>\n<ion-header class=\"header\">\n  <!-- <ion-navbar class=\"navbar\"> -->\n  <ion-title>\n    <ion-icon src=\"../../assets/notification-bell.svg\" class=\"bell\" (click)=\"notifications()\">\n    </ion-icon>\n    <div class=\"ion-text-right\">\n      <img src=\"../../assets/top-right-logo.svg\" class=\"logo\">\n    </div>\n  </ion-title>\n  <!-- </ion-navbar> -->\n</ion-header>\n\n\n<ion-content overflow-scroll=\"true\">\n  <div class=\"container\">\n    <div *ngIf=\"bill_data \">\n      <h1 class=\"ion-text-center\">Bill #{{bill_data[id]?.bill_id}}</h1>\n      <ion-text class=\"date\">Date: {{bill_data[id]?.bill_date}}</ion-text>\n      <br>\n      <br>\n      <h2 class=\"h2\">Bill Details </h2>\n      <br>\n      <!-- </div> -->\n      <ion-text class=\"text\">{{bill_data[id]?.bill_detail}}</ion-text> <br>\n      <br>\n      <div>\n        <div class=\"leftcol\">\n          <h2 class=\"h2\">Amount </h2>\n        </div>\n        <div class=\"rightcol\">\n          <ion-text class=\"textright1\">{{bill_data[id]?.bill_amount}}</ion-text>\n        </div>\n      </div>\n      <hr class=\"hr\">\n      <div>\n        <div class=\"leftcol\">\n          <h2 class=\"h2\">Payment Status</h2>\n        </div>\n        <div class=\"rightcol\">\n          <ion-text class=\"textright2\">{{bill_data[id]?.bill_status}}</ion-text>\n        </div>\n      </div>\n      <hr class=\"hr\">\n      <div class=\"leftcol\">\n        <h2 class=\"h2\">Receipt Status</h2>\n      </div>\n      <div class=\"rightcol\">\n        <ion-text class=\"textright3\">{{bill_data[id]?.bill_receipt_status}}</ion-text>\n      </div>\n\n      <br>\n      <br>\n      <br>\n      <!-- <div class=\"ion-text-center\">\n    <div class=\"flex-container\">\n   <button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"language\"(click)=\"presentModalUpdatePayment()\">Update Payment</button>\n   <div class=\"divider\"></div>\n   <ion-back-button type=\"button\" defaultHref=\"/tabs/paidbills\" icon=\"none\" class=\"btn btn-secondary btn-lg\">Back</ion-back-button>\n </div>\n</div> -->\n      <div class=\"ion-text-center\">\n        <ion-tab-bar class=\"menu-bar\">\n          <button type=\"button\" class=\"btn btn-primary \" id=\"language\"\n            (click)=\"presentModalUpdatePayment()\">Update Payment</button>\n          <div class=\"divider\"></div>\n          <button type=\"button\" class=\"btn btn-secondary \" (click)=\"back()\">Back</button>\n        </ion-tab-bar>\n      </div>\n    </div>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ 665:
/*!***********************************************************!*\
  !*** ./src/app/billdetails/billdetails-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BilldetailsPageRoutingModule": () => (/* binding */ BilldetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _billdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billdetails.page */ 2672);




const routes = [
    {
        path: '',
        component: _billdetails_page__WEBPACK_IMPORTED_MODULE_0__.BilldetailsPage
    }
];
let BilldetailsPageRoutingModule = class BilldetailsPageRoutingModule {
};
BilldetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BilldetailsPageRoutingModule);



/***/ }),

/***/ 9666:
/*!***************************************************!*\
  !*** ./src/app/billdetails/billdetails.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BilldetailsPageModule": () => (/* binding */ BilldetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _billdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billdetails-routing.module */ 665);
/* harmony import */ var _billdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./billdetails.page */ 2672);







let BilldetailsPageModule = class BilldetailsPageModule {
};
BilldetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _billdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.BilldetailsPageRoutingModule
        ],
        declarations: [_billdetails_page__WEBPACK_IMPORTED_MODULE_1__.BilldetailsPage]
    })
], BilldetailsPageModule);



/***/ }),

/***/ 2672:
/*!*************************************************!*\
  !*** ./src/app/billdetails/billdetails.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BilldetailsPage": () => (/* binding */ BilldetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_ASUS_Moile_Installation_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_billdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./billdetails.page.html */ 5782);
/* harmony import */ var _billdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./billdetails.page.scss */ 5388);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _payment_modal_payment_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../payment-modal/payment-modal.page */ 6291);



/* eslint-disable eqeqeq */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */




let BilldetailsPage = class BilldetailsPage {
    constructor(activatedRoute, router, modalController, platform) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalController = modalController;
        this.platform = platform;
        this.bill_data = [
            {
                bill_id: 'TD24153',
                bill_amount: '150 Riyals',
                bill_type: 'Parts',
                bill_status: 'unpaid',
                bill_date: 'Sunday,23-03-2020',
                bill_receipt_status: 'Waiting',
                bill_detail: 'Now make KE e-bill payments on KE website via your Bank Account, Debit or Credit Card',
            },
            {
                bill_id: 'TD24151',
                bill_amount: '250 Riyals',
                bill_type: 'Parts',
                bill_status: 'unpaid',
                bill_date: 'Sunday,23-03-2020',
                bill_receipt_status: 'Waiting',
                bill_detail: 'Now make KE e-bill payments on KE website via your Bank Account, Debit or Credit Card',
            },
            {
                bill_id: 'TD24153',
                bill_amount: '350 Riyals',
                bill_type: 'Parts',
                bill_receipt_status: 'Waiting',
                bill_status: 'unpaid',
                bill_date: 'Sunday,23-03-2020',
                bill_detail: 'Now make KE e-bill payments on KE website via your Bank Account, Debit or Credit Card',
            },
        ];
    }
    ngOnInit() {
        console.log('Inside Ng On INit');
        this.refsub = this.activatedRoute.params.subscribe(params => {
            this.refresh = params['refresh'];
            console.log(this.refresh);
            if (this.refresh == 'true') {
                console.log('Refresh is True');
                this.call_api();
            }
        });
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
            console.log(this.id);
        });
    }
    call_api() {
        var refresh = true;
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.router.navigateByUrl('paid-bills' + refresh);
        });
    }
    back() {
        const refresh = true;
        this.router.navigateByUrl('unpaid-bill/' + refresh);
    }
    notifications() {
        this.router.navigateByUrl('notifications');
    }
    presentModalUpdatePayment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('presentModalUpdatePayment popup');
            const modal = yield this.modalController.create({
                component: _payment_modal_payment_modal_page__WEBPACK_IMPORTED_MODULE_2__.PaymentModalPage,
                cssClass: 'payment-modal'
            });
            return yield modal.present();
        });
    }
};
BilldetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform }
];
BilldetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-billdetails',
        template: _C_Users_ASUS_Moile_Installation_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_billdetails_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_billdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BilldetailsPage);



/***/ }),

/***/ 5388:
/*!***************************************************!*\
  !*** ./src/app/billdetails/billdetails.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ".flex-container {\n  justify-content: center;\n  display: flex;\n  margin-top: 2em;\n}\n\n.header {\n  height: 40px;\n  background-color: #194E78;\n  position: initial;\n}\n\n.bell {\n  margin-left: 0.5em;\n  position: absolute;\n  top: 8px;\n  left: 0.2em;\n  width: 21px;\n  height: 23px;\n}\n\n.bell {\n  margin-left: 0.5em;\n  position: absolute;\n  top: 8px;\n  left: 0.2em;\n  width: 21px;\n  height: 23px;\n}\n\n.logo {\n  position: absolute;\n  top: -4px;\n  right: 0px;\n  width: 79px;\n  height: 99px;\n}\n\n.container {\n  margin-top: 1px;\n}\n\n.white {\n  width: 100%;\n  height: 2em;\n}\n\n.firstcol {\n  float: left;\n}\n\n.h2 {\n  margin-left: 0.7em;\n  color: #194E78;\n  font-weight: bold;\n  float: left;\n  margin-top: 0em;\n  font-size: 18px;\n  white-space: pre-line;\n  margin-bottom: 0em;\n}\n\n.date {\n  font-size: 12px;\n  color: #6E6E6E;\n  margin-left: 1em;\n}\n\n.text {\n  font-size: 12px;\n  color: #6E6E6E;\n  margin-left: 1em;\n  margin-top: 0em;\n}\n\nh1 {\n  text-decoration: underline;\n  color: #194E78;\n  font-weight: bold;\n}\n\n.secondcol {\n  float: right;\n}\n\n.textright1 {\n  color: #7A0001;\n  float: right;\n  margin-right: 1em;\n  font-size: 18px;\n}\n\n.textright2 {\n  color: #7A0001;\n  float: right;\n  margin-right: 1em;\n  font-size: 18px;\n}\n\n.textright3 {\n  color: #FABE11;\n  float: right;\n  margin-right: 1em;\n  font-size: 18px;\n}\n\nhr {\n  height: 1px !important;\n  width: 92% !important;\n  background: #6E6E6E !important;\n  display: block !important;\n  font-size: 2em !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n  margin-left: 12px;\n}\n\n.menu-bar {\n  background-color: white;\n  border-color: white;\n}\n\n.btn-primary {\n  background-color: #194E78;\n  border-color: #194E78;\n  width: 11em;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.btn-secondary {\n  background-color: #6E6E6E;\n  width: 10em;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.divider {\n  width: 2em;\n  height: auto;\n  display: inline-block;\n}\n\n::ng-deep .payment-modal {\n  top: 5em;\n  height: 385px !important;\n  width: 318px;\n  margin: 1em;\n  --border-radius:37px;\n}\n\n@media only screen and (max-width: 321px) {\n  .btn-primary {\n    background-color: #194E78;\n    border-color: #194E78;\n    width: 8em;\n    font-size: 10px;\n    font-weight: 700;\n    border-radius: 10px;\n  }\n\n  .btn-secondary {\n    background-color: #6E6E6E;\n    width: 9em;\n    height: 4em;\n    font-size: 10px;\n    font-weight: 900;\n    border-radius: 10px;\n  }\n}\n\n::ng-deep .payment-modal {\n  margin: 40px;\n  height: 60% !important;\n  padding: 10% 3%;\n  display: flex;\n  align-items: center;\n}\n\n@media only screen and (max-width: 600px) {\n  ::ng-deep .payment-modal {\n    padding: 10% 3%;\n  }\n}\n\nion-modal::part(content) {\n  background-color: red !important;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGxkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDRix5QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0U7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFJSjs7QUFGQTtFQUNBLFdBQUE7QUFLQTs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUFnQixpQkFBQTtFQUFtQixXQUFBO0VBQ25DLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQVFKOztBQU5BO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVNKOztBQVBBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFVSjs7QUFSQTtFQUNJLDBCQUFBO0VBQTJCLGNBQUE7RUFBZ0IsaUJBQUE7QUFhL0M7O0FBWEE7RUFDRyxZQUFBO0FBY0g7O0FBWEE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQWNKOztBQVpBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFlSjs7QUFiQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBZ0JKOztBQWRBO0VBR0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQWVKOztBQVpFO0VBQ00sdUJBQUE7RUFDQSxtQkFBQTtBQWVSOztBQVhFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFjSjs7QUFaQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWVKOztBQWJBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQWdCSjs7QUFYQTtFQUNJLFFBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFjSjs7QUFYQTtFQUNHO0lBQ0MseUJBQUE7SUFDQSxxQkFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQWNGOztFQVpGO0lBQ0kseUJBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBZUY7QUFDRjs7QUFaQTtFQUVJLFlBQUE7RUFDRCxzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFhSDs7QUFORTtFQUVFO0lBQ0UsZUFBQTtFQVFKO0FBQ0Y7O0FBSEU7RUFDRSxnQ0FBQTtFQUNTLFlBQUE7QUFLYiIsImZpbGUiOiJiaWxsZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jb250YWluZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NEU3ODtcclxuICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICB9XHJcbiAgLmJlbGwge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA4cHg7XHJcbiAgbGVmdDogMC4yZW07XHJcbiAgd2lkdGg6IDIxcHg7XHJcbiAgaGVpZ2h0OiAyM3B4O1xyXG59XHJcblxyXG4uYmVsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIGxlZnQ6IDAuMmVtO1xyXG4gICAgd2lkdGg6IDIxcHg7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbn1cclxuXHJcbiAgLmxvZ297XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgO1xyXG4gICAgdG9wOiAtNHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHdpZHRoOiA3OXB4O1xyXG4gICAgaGVpZ2h0OiA5OXB4O1xyXG4gIH1cclxuLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgfVxyXG4ud2hpdGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMmVtO1xyXG59XHJcbi5maXJzdGNvbHtcclxuZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmgye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuN2VtO1xyXG4gICAgY29sb3I6IzE5NEU3OCA7IGZvbnQtd2VpZ2h0OiBib2xkOyBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDBlbTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBlbTtcclxufVxyXG4uZGF0ZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNkU2RTZFO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufVxyXG4udGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNkU2RTZFO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIG1hcmdpbi10b3A6IDBlbVxyXG59XHJcbmgxe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7Y29sb3I6IzE5NEU3OCA7IGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zZWNvbmRjb2x7XHJcbiAgIGZsb2F0OiByaWdodDsgXHJcbiAgfVxyXG5cclxuLnRleHRyaWdodDF7XHJcbiAgICBjb2xvcjojN0EwMDAxO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnRleHRyaWdodDJ7XHJcbiAgICBjb2xvcjojN0EwMDAxO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnRleHRyaWdodDN7XHJcbiAgICBjb2xvcjojRkFCRTExO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuaHIge1xyXG4gICAgXHJcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCByZWQgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogOTIlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNkU2RTZFICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICB9XHJcbiAgLm1lbnUtYmFye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gIC5idG4tcHJpbWFyeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzE5NEU3ODtcclxuICAgIGJvcmRlci1jb2xvcjojMTk0RTc4O1xyXG4gICAgd2lkdGg6MTFlbTtcclxuICAgIGZvbnQtc2l6ZTogMTZweCA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5idG4tc2Vjb25kYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNkU2RTZFO1xyXG4gICAgd2lkdGg6MTBlbTtcclxuICAgIGZvbnQtc2l6ZTogMTZweCA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5kaXZpZGVye1xyXG4gICAgd2lkdGg6MmVtO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuXHJcblxyXG46Om5nLWRlZXAgLnBheW1lbnQtbW9kYWx7XHJcbiAgICB0b3A6IDVlbTtcclxuICAgIGhlaWdodDogMzg1cHghaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDMxOHB4O1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6MzdweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjFweCkge1xyXG4gICAuYnRuLXByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxOTRFNzg7XHJcbiAgICBib3JkZXItY29sb3I6IzE5NEU3ODtcclxuICAgIHdpZHRoOjhlbTtcclxuICAgIGZvbnQtc2l6ZTogMTBweCA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uYnRuLXNlY29uZGFyeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzZFNkU2RTtcclxuICAgIHdpZHRoOjllbTtcclxuICAgIGhlaWdodDogNGVtO1xyXG4gICAgZm9udC1zaXplOiAxMHB4IDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucGF5bWVudC1tb2RhbCB7XHJcbiAgICAvLyB0b3A6IDE1MHB4O1xyXG4gICAgbWFyZ2luOjQwcHg7IFxyXG4gICBoZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xyXG4gICBwYWRkaW5nOiAxMCUgMyU7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIFxyXG4gICAgICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIFxyXG4gICAgOjpuZy1kZWVwIC5wYXltZW50LW1vZGFsIHtcclxuICAgICAgcGFkZGluZzogMTAlIDMlO1xyXG4gICBcclxuICAgIH0gXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGlvbi1tb2RhbDo6cGFydChjb250ZW50KXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgfVxyXG4gICJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_billdetails_billdetails_module_ts.js.map