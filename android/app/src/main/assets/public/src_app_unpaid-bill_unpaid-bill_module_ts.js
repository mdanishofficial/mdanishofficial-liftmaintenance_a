"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_unpaid-bill_unpaid-bill_module_ts"],{

/***/ 7574:
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/unpaid-bill/unpaid-bill.page.html ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"nav-wrapper\" style=\"background: white;height: 1em;\"></div>\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Select</title>\n</head>\n<ion-header class=\"header\">\n  <!-- <ion-navbar class=\"navbar\"> -->\n  <ion-title>\n    <ion-icon src=\"../../assets/notification-bell.svg\" (click)=\"notifications()\" class=\"bell\">\n    </ion-icon>\n    <div class=\"ion-text-right\">\n      <img src=\"../../assets/top-right-logo.svg\" class=\"logo\">\n    </div>\n  </ion-title>\n  <!-- </ion-navbar> -->\n</ion-header>\n<ion-content overflow-scroll=\"true\">\n  <div class=\"container\">\n    <h1 class=\"ion-text-center\">Bill List</h1>\n    <div class=\"tabs\">\n      <ion-tab-bar slot=\"top\" class=\"ionb\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"unpaid()\">Unpaid</button>\n        <div class=\"divider\"></div>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"paid()\">Paid</button>\n      </ion-tab-bar>\n    </div>\n    <ion-card class=\"card\" *ngFor=\"let result of bill_data let i=index\" (click)=\"billdetails(i)\">\n      <div class=\"flex-container\">\n        <div class=\"flex-container2\">\n          <div>\n            <div>\n              <h6 class=\"billid\">Bill # {{result?.bill_id}}</h6>\n            </div>\n            <div>\n              <h6 class=\"billamount\">{{result?.bill_amount}}</h6>\n            </div>\n          </div>\n          <div class=\"flex-container3\">\n            <div class=\"parts\">\n              <ion-text>Type : {{result?.bill_type}}</ion-text>\n            </div>\n            <div class=\"ion-text-center\">\n              <ion-text class=\"status\">Status: <ion-text class=\"emergency\">{{result?.bill_status}}</ion-text>\n              </ion-text>\n            </div>\n            <div class=\"ion-text-right\">\n              <ion-text>Date: {{result?.bill_date}}</ion-text>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ion-card>\n    <!-- <ion-card class=\"card\">\n      <div class=\"flex-container\">\n       <div class=\"flex-container2\">\n         <div>\n           <div>\n            <h6 class=\"billid\">Bill # TH21145</h6>\n           </div>\n           <div>\n            <h6 class=\"billamount\">650 Riyals</h6>\n          </div>\n         </div>\n         <div class=\"flex-container3\">\n            <div class=\"parts\">\n              <ion-text>Type : Renew</ion-text>\n            </div>\n            <div class=\"ion-text-center\">\n              <ion-text class=\"status\">Status: <ion-text class=\"emergency\"> Status : {{result?.bill_status}}</ion-text></ion-text>\n            </div>\n            <div class=\"ion-text-right\">\n              <ion-text> Sunday 22-02-2020</ion-text>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ion-card>\n    <ion-card class=\"card\">\n      <div class=\"flex-container\">\n       <div class=\"flex-container2\">\n         <div>\n           <div>\n            <h6 class=\"billid\">Bill # TH35622</h6>\n           </div>\n           <div>\n            <h6 class=\"billamount\">1200 Riyals</h6>\n          </div>\n         </div>\n         <div class=\"flex-container3\">\n            <div class=\"parts\">\n              <ion-text>Type : Installation</ion-text>\n            </div>\n            <div class=\"ion-text-center\">\n              <ion-text class=\"status\">Status: <ion-text class=\"emergency\">This Month</ion-text></ion-text>\n            </div>\n            <div class=\"ion-text-right\">\n              <ion-text> Sunday 22-02-2020</ion-text>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ion-card> -->\n  </div>\n</ion-content>\n<!-- <footer> -->\n<div class=\"white\"></div>\n<ion-tab-bar class=\"foot\" slot=\"bottom\">\n  <ion-tab-button (click)=\"home()\">\n    <ion-icon src=\"assets/user.svg\"></ion-icon>\n  </ion-tab-button>\n\n  <ion-tab-button>\n    <ion-icon src=\"assets/email.svg\" (click)=\"language()\"></ion-icon>\n  </ion-tab-button>\n  <ion-tab-button>\n    <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" class=\"fab-button\" (click)=\"home()\">\n      <ion-fab-button>\n        <ion-icon src=\"assets/home.svg\" (click)=\"home()\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </ion-tab-button>\n\n  <ion-tab-button>\n    <ion-icon src=\"assets/setting.svg\" (click)=\"settings()\"></ion-icon>\n  </ion-tab-button>\n\n  <ion-tab-button>\n    <ion-icon src=\"assets/question.svg\" (click)=\"inquiries()\"></ion-icon>\n  </ion-tab-button>\n</ion-tab-bar>\n\n\n<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\"\n  style=\"background-color: #194E78; margin-bottom: 7px; border-radius: 30px;\" (click)=\"home()\">\n  <ion-fab-button class=\"fab-button\">\n    <ion-icon name=\"home\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<!-- <\"footer\"> -->");

/***/ }),

/***/ 8383:
/*!***********************************************************!*\
  !*** ./src/app/unpaid-bill/unpaid-bill-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnpaidBillPageRoutingModule": () => (/* binding */ UnpaidBillPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _unpaid_bill_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unpaid-bill.page */ 4411);




const routes = [
    {
        path: '',
        component: _unpaid_bill_page__WEBPACK_IMPORTED_MODULE_0__.UnpaidBillPage
    }
];
let UnpaidBillPageRoutingModule = class UnpaidBillPageRoutingModule {
};
UnpaidBillPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UnpaidBillPageRoutingModule);



/***/ }),

/***/ 9698:
/*!***************************************************!*\
  !*** ./src/app/unpaid-bill/unpaid-bill.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnpaidBillPageModule": () => (/* binding */ UnpaidBillPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _unpaid_bill_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unpaid-bill-routing.module */ 8383);
/* harmony import */ var _unpaid_bill_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unpaid-bill.page */ 4411);







let UnpaidBillPageModule = class UnpaidBillPageModule {
};
UnpaidBillPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _unpaid_bill_routing_module__WEBPACK_IMPORTED_MODULE_0__.UnpaidBillPageRoutingModule
        ],
        declarations: [_unpaid_bill_page__WEBPACK_IMPORTED_MODULE_1__.UnpaidBillPage]
    })
], UnpaidBillPageModule);



/***/ }),

/***/ 4411:
/*!*************************************************!*\
  !*** ./src/app/unpaid-bill/unpaid-bill.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnpaidBillPage": () => (/* binding */ UnpaidBillPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_Aneeza_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_unpaid_bill_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./unpaid-bill.page.html */ 7574);
/* harmony import */ var _unpaid_bill_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unpaid-bill.page.scss */ 7258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8058);



/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */



let UnpaidBillPage = class UnpaidBillPage {
    constructor(platform, router, activatedRoute) {
        this.platform = platform;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.bill_data = [
            {
                bill_id: 'TD24153',
                bill_amount: '350 Riyals',
                bill_type: 'Parts',
                bill_status: 'unpaid',
                bill_date: 'Sunday,23-03-2020'
            },
            {
                bill_id: 'TD24152',
                bill_amount: '350 Riyals',
                bill_type: 'Parts',
                bill_status: 'unpaid',
                bill_date: 'Sunday,23-03-2020'
            },
            {
                bill_id: 'TD24151',
                bill_amount: '350 Riyals',
                bill_type: 'Parts',
                bill_status: 'unpaid',
                bill_date: 'Sunday,23-03-2020'
            },
        ];
        this.call_api();
    }
    ngOnInit() {
        console.log('Inside Ng On INit');
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.refresh = params['refresh'];
            console.log(this.refresh);
            if (this.refresh == 'true') {
                console.log('Refresh is True');
                this.call_api();
            }
        });
    }
    call_api() {
        var refresh = true;
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.router.navigateByUrl('home');
        });
    }
    unpaid() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigateByUrl('unpaid-bill');
        });
    }
    paid() {
        this.router.navigateByUrl('paid-bills');
    }
    billdetails(id) {
        console.log(id);
        this.router.navigateByUrl('/billdetails/' + id);
    }
    home() {
        this.router.navigateByUrl('home');
    }
};
UnpaidBillPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
UnpaidBillPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-unpaid-bill',
        template: _C_Users_Aneeza_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_unpaid_bill_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_unpaid_bill_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UnpaidBillPage);



/***/ }),

/***/ 7258:
/*!***************************************************!*\
  !*** ./src/app/unpaid-bill/unpaid-bill.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900);\n.header {\n  height: 40px;\n  background-color: #194E78;\n  position: initial;\n}\n.bell {\n  margin-left: 0.5em;\n  position: absolute;\n  top: 5px;\n  left: 0.5em;\n  width: 24px;\n  height: 30px;\n}\n.logo {\n  position: absolute;\n  top: -4px;\n  right: 0px;\n  width: 66px;\n  height: 86px;\n}\n.white {\n  width: 100%;\n  height: 2em;\n}\nh1 {\n  text-decoration: underline;\n  color: #194E78;\n  font-weight: bold;\n  margin-top: 0em;\n}\n.flex-container {\n  justify-content: center;\n}\n.btn-primary {\n  width: 8em;\n  background-color: #194E78;\n  border: #194E78;\n  outline: none;\n}\n.btn-secondary {\n  width: 8em;\n  background-color: #F5F5F5;\n  color: #6E6E6E;\n  border: #6E6E6E;\n  outline: none;\n}\n.ionb {\n  background: white;\n  border: none;\n}\n.divider {\n  width: 3em;\n  height: auto;\n  display: inline-block;\n}\n.container {\n  margin-top: 1px;\n}\n.flex-container {\n  display: flex;\n}\n.flex-container2 {\n  width: 100%;\n}\n.flex-container3 {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.card {\n  --background:#FCFCFC;\n  padding: 1em;\n}\n.billid {\n  font-size: 20px;\n  font-family: \"Roboto\";\n  color: #194E78;\n  margin-top: 0.1em;\n  margin-left: 0.4em;\n  float: left;\n}\n.billamount {\n  font-size: 20px;\n  font-family: \"Roboto\";\n  color: #7A0001;\n  margin-top: 0.1em;\n  margin-right: 0.7em;\n  float: right;\n}\n.parts {\n  font-size: 10pt;\n  margin-top: 0px;\n  font-family: \"Roboto\";\n  color: #6E6E6E;\n  margin-left: 0.7em;\n}\n.status {\n  font-size: 10pt;\n  margin-top: 0px;\n  font-family: \"Roboto\";\n  color: #6E6E6E;\n  margin-left: 0.7em;\n}\n.emergency {\n  font-size: 10pt;\n  margin-top: 0px;\n  font-family: \"Roboto\";\n  color: #7A0001;\n  margin-left: 0.1em;\n  display: inline-block;\n}\n.textright {\n  float: right;\n}\n.textleft {\n  float: left;\n}\n.ion-text-right {\n  margin-right: 0.2em;\n}\n.white {\n  width: 100%;\n  height: 1.1em;\n}\n.foot {\n  background-color: #194E78;\n}\nion-tab-button {\n  background-color: #194E78;\n}\n.footer {\n  position: sticky;\n}\nion-icon {\n  color: white;\n  font-size: 30px;\n}\n.fab-button {\n  --background:#194E78;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVucGFpZC1iaWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBUixnSkFBQTtBQUVSO0VBQ0ksWUFBQTtFQUNKLHlCQUFBO0VBQ0EsaUJBQUE7QUFDQTtBQUNBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFQTtBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR0o7QUFEQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBSUo7QUFGQTtFQUNJLDBCQUFBO0VBQTJCLGNBQUE7RUFBZ0IsaUJBQUE7RUFBa0IsZUFBQTtBQVFqRTtBQU5BO0VBQ0ksdUJBQUE7QUFTSjtBQVBBO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFVSjtBQVJFO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBV0o7QUFURTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQVlGO0FBVkU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBYUo7QUFURztFQUNDLGVBQUE7QUFZSjtBQVZBO0VBQ0EsYUFBQTtBQWFBO0FBWEE7RUFDQyxXQUFBO0FBY0Q7QUFaSTtFQUNJLGFBQUE7RUFDSCw4QkFBQTtFQUNBLFdBQUE7QUFlTDtBQVpBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FBZUo7QUFiQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNJLGtCQUFBO0VBQ0osV0FBQTtBQWdCSjtBQWRDO0VBQ0csZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBaUJKO0FBZkE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBa0JKO0FBaEJBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQW1CSjtBQWpCRztFQUNDLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDSCxxQkFBQTtBQW9CRDtBQWxCQTtFQUNJLFlBQUE7QUFxQko7QUFuQkE7RUFDSSxXQUFBO0FBc0JKO0FBcEJBO0VBQ0ksbUJBQUE7QUF1Qko7QUFwQkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQXVCRjtBQXBCQTtFQUNDLHlCQUFBO0FBdUJEO0FBckJFO0VBQ0UseUJBQUE7QUF3Qko7QUFyQkU7RUFDQSxnQkFBQTtBQXdCRjtBQXRCRztFQUNFLFlBQUE7RUFDQSxlQUFBO0FBeUJMO0FBdkJFO0VBQ0Usb0JBQUE7QUEwQkoiLCJmaWxlIjoidW5wYWlkLWJpbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCwxMDAsMTAwaXRhbGljLDMwMCwzMDBpdGHigIzigItsaWMsNDAwaXRhbGljLDUwMCw1MDBpdGFsaWMsNzAwLDcwMGl0YWxpYyw5MDBpdGFsaWMsOTAwKTtcbi5oZWFkZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTRFNzg7XG4gIHBvc2l0aW9uOiBpbml0aWFsO1xufVxuXG4uYmVsbCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogMC41ZW07XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHdpZHRoOiA2NnB4O1xuICBoZWlnaHQ6IDg2cHg7XG59XG5cbi53aGl0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJlbTtcbn1cblxuaDEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICMxOTRFNzg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAwZW07XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICB3aWR0aDogOGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk0RTc4O1xuICBib3JkZXI6ICMxOTRFNzg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgd2lkdGg6IDhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgY29sb3I6ICM2RTZFNkU7XG4gIGJvcmRlcjogIzZFNkU2RTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmlvbmIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZGl2aWRlciB7XG4gIHdpZHRoOiAzZW07XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmxleC1jb250YWluZXIyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mbGV4LWNvbnRhaW5lcjMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZCB7XG4gIC0tYmFja2dyb3VuZDojRkNGQ0ZDO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5iaWxsaWQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBjb2xvcjogIzE5NEU3ODtcbiAgbWFyZ2luLXRvcDogMC4xZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjRlbTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5iaWxsYW1vdW50IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgY29sb3I6ICM3QTAwMDE7XG4gIG1hcmdpbi10b3A6IDAuMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuN2VtO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5wYXJ0cyB7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgY29sb3I6ICM2RTZFNkU7XG4gIG1hcmdpbi1sZWZ0OiAwLjdlbTtcbn1cblxuLnN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgY29sb3I6ICM2RTZFNkU7XG4gIG1hcmdpbi1sZWZ0OiAwLjdlbTtcbn1cblxuLmVtZXJnZW5jeSB7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgY29sb3I6ICM3QTAwMDE7XG4gIG1hcmdpbi1sZWZ0OiAwLjFlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udGV4dHJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udGV4dGxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmlvbi10ZXh0LXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjJlbTtcbn1cblxuLndoaXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMS4xZW07XG59XG5cbi5mb290IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NEU3ODtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk0RTc4O1xufVxuXG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IzE5NEU3ODtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_unpaid-bill_unpaid-bill_module_ts.js.map