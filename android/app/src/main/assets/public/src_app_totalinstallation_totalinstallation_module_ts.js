"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_totalinstallation_totalinstallation_module_ts"],{

/***/ 1705:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/totalinstallation/totalinstallation.page.html ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Select</title>\n</head>\n<ion-header class=\"header\">\n  <!-- <ion-navbar class=\"navbar\"> -->\n  <ion-title>\n    <ion-icon src=\"../assets/notification-bell.svg\" class=\"bell\">\n    </ion-icon>\n    <div class=\"ion-text-center\">\n      <img src=\"../assets/top-right-logo.svg\" class=\"logo\">\n    </div>\n  </ion-title>\n  <!-- </ion-navbar> -->\n</ion-header>\n\n<ion-content overflow-scroll=\"true\">\n  <div class=\"container\">\n    <!-- <br> -->\n    <h1 class=\"ion-text-center\">Task Listing &ensp;</h1>\n    \n<ion-card class=\"detail\" *ngFor=\"let result of  total_installation\">\n  <ion-card-title class=\"details\">Client : {{result?.Client}}</ion-card-title>\n  <ion-card-subtitle class=\"sub-details\">Location : {{result?.Location}}</ion-card-subtitle>\n  <ion-card-subtitle class=\"sub-details\">Installation Level : {{result?.Installation_Level}}</ion-card-subtitle>\n  <ion-card-subtitle class=\"sub-details\">Installation Status : {{result?.Installation_Status}}</ion-card-subtitle>\n  <ion-card-subtitle class=\"sub-details\">Date assigned : {{result?.Date_assigned}}</ion-card-subtitle>\n</ion-card>\n</div>\n<div class=\"ion-text-center\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"back()\">Back</button>\n</div>\n&nbsp;\n&nbsp;\n\n</ion-content>\n\n</ion-app>\n\n");

/***/ }),

/***/ 227:
/*!***********************************************************************!*\
  !*** ./src/app/totalinstallation/totalinstallation-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotalinstallationPageRoutingModule": () => (/* binding */ TotalinstallationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _totalinstallation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./totalinstallation.page */ 259);




const routes = [
    {
        path: '',
        component: _totalinstallation_page__WEBPACK_IMPORTED_MODULE_0__.TotalinstallationPage
    }
];
let TotalinstallationPageRoutingModule = class TotalinstallationPageRoutingModule {
};
TotalinstallationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TotalinstallationPageRoutingModule);



/***/ }),

/***/ 9074:
/*!***************************************************************!*\
  !*** ./src/app/totalinstallation/totalinstallation.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotalinstallationPageModule": () => (/* binding */ TotalinstallationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _totalinstallation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./totalinstallation-routing.module */ 227);
/* harmony import */ var _totalinstallation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./totalinstallation.page */ 259);







let TotalinstallationPageModule = class TotalinstallationPageModule {
};
TotalinstallationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _totalinstallation_routing_module__WEBPACK_IMPORTED_MODULE_0__.TotalinstallationPageRoutingModule
        ],
        declarations: [_totalinstallation_page__WEBPACK_IMPORTED_MODULE_1__.TotalinstallationPage]
    })
], TotalinstallationPageModule);



/***/ }),

/***/ 259:
/*!*************************************************************!*\
  !*** ./src/app/totalinstallation/totalinstallation.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotalinstallationPage": () => (/* binding */ TotalinstallationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_Aneeza_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_totalinstallation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./totalinstallation.page.html */ 1705);
/* harmony import */ var _totalinstallation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./totalinstallation.page.scss */ 4);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8058);



/* eslint-disable no-var */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */



let TotalinstallationPage = class TotalinstallationPage {
    constructor(router, activatedRoute, platform) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.total_installation = [
            {
                Client: 'Javed Akhtar',
                Location: 'New city',
                Installation_Level: 'Level 2',
                Installation_Status: 'Progressing',
                Date_assigned: '24 - 11 - 2022',
            },
            {
                Client: 'Gul Ahmad',
                Location: 'New city',
                Installation_Level: 'Level 2',
                Installation_Status: 'Progressing',
                Date_assigned: '24 - 11 - 2022',
            },
            {
                Client: 'Atif Shezad',
                Location: 'New city',
                Installation_Level: 'Level 2',
                Installation_Status: 'Progressing',
                Date_assigned: '24 - 11 - 2022',
            }
        ];
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
            this.router.navigateByUrl('../home/' + refresh);
        });
    }
    back() {
        this.router.navigateByUrl('home');
    }
};
TotalinstallationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
TotalinstallationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-totalinstallation',
        template: _C_Users_Aneeza_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_totalinstallation_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_totalinstallation_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TotalinstallationPage);



/***/ }),

/***/ 4:
/*!***************************************************************!*\
  !*** ./src/app/totalinstallation/totalinstallation.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900);\n.flex-container {\n  justify-content: center;\n  display: flex;\n  margin-top: 2em;\n}\n.header {\n  height: 40px;\n  background-color: #194E78;\n  position: initial;\n}\n.bell {\n  margin-left: 0.5em;\n  position: absolute;\n  top: 5px;\n  left: 0.5em;\n  width: 24px;\n  height: 30px;\n}\n.logo {\n  position: absolute;\n  top: -4px;\n  right: 0px;\n  width: 79px;\n  height: 99px;\n}\n.container {\n  margin-top: 1px;\n}\n.white {\n  width: 100%;\n  height: 2em;\n}\n.flex-container {\n  display: flex;\n}\n.flex-container2 {\n  width: 100%;\n}\n.flex-container3 {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\nh1 {\n  text-decoration: underline;\n  color: #194E78;\n  font-weight: bold;\n  margin-top: 1em;\n  font-size: 24;\n}\n.detail {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  top: 20px;\n  background: #FCFCFC;\n}\n.details {\n  margin: 10px;\n  color: #194E78;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: 700;\n}\n.sub-details {\n  margin: 5px 5px 5px 15px;\n  font-family: Roboto;\n  color: #6E6E6E;\n  font-size: 12px;\n}\n.btn-secondary {\n  width: 9em;\n  margin-top: 2em;\n  background-color: #6E6E6E;\n  border-radius: 0.5em;\n}\nion-tab-bar, ion-tab-button {\n  background-color: #194E78;\n}\n.footer {\n  position: sticky;\n}\nion-icon {\n  color: white;\n  font-size: 30px;\n}\n.fab-button {\n  --background:#194E78;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvdGFsaW5zdGFsbGF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBUixnSkFBQTtBQUVSO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUE7RUFDSSxZQUFBO0VBQ0YseUJBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHSjtBQURBO0VBQ0ksZUFBQTtBQUlKO0FBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUdKO0FBREE7RUFDQSxhQUFBO0FBSUE7QUFGQTtFQUNDLFdBQUE7QUFLRDtBQUhJO0VBQ0ksYUFBQTtFQUNILDhCQUFBO0VBQ0EsV0FBQTtBQU1MO0FBSks7RUFDRCwwQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBT0o7QUFMQTtFQUNLLDRFQUFBO0VBQ0EsU0FBQTtFQUNELG1CQUFBO0FBUUo7QUFOQTtFQUNJLFlBQUE7RUFDSixjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFTQTtBQVBBO0VBQ0ssd0JBQUE7RUFDTCxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBVUE7QUFQQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0YseUJBQUE7RUFDQSxvQkFBQTtBQVVGO0FBTkE7RUFDSSx5QkFBQTtBQVNKO0FBTEE7RUFDRSxnQkFBQTtBQVFGO0FBTkc7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQVNMO0FBUEU7RUFDRSxvQkFBQTtBQVVKIiwiZmlsZSI6InRvdGFsaW5zdGFsbGF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBpbXBvcnQgdXJsKGh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsMTAwLDEwMGl0YWxpYywzMDAsMzAwaXRh4oCM4oCLbGljLDQwMGl0YWxpYyw1MDAsNTAwaXRhbGljLDcwMCw3MDBpdGFsaWMsOTAwaXRhbGljLDkwMCk7XG4uZmxleC1jb250YWluZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk0RTc4O1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbn1cblxuLmJlbGwge1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDAuNWVtO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICByaWdodDogMHB4O1xuICB3aWR0aDogNzlweDtcbiAgaGVpZ2h0OiA5OXB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG4ud2hpdGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyZW07XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mbGV4LWNvbnRhaW5lcjIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZsZXgtY29udGFpbmVyMyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmgxIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjMTk0RTc4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBmb250LXNpemU6IDI0O1xufVxuXG4uZGV0YWlsIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkNGQ0ZDO1xufVxuXG4uZGV0YWlscyB7XG4gIG1hcmdpbjogMTBweDtcbiAgY29sb3I6ICMxOTRFNzg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN1Yi1kZXRhaWxzIHtcbiAgbWFyZ2luOiA1cHggNXB4IDVweCAxNXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBjb2xvcjogIzZFNkU2RTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIHdpZHRoOiA5ZW07XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZFNkU2RTtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG59XG5cbmlvbi10YWItYmFyLCBpb24tdGFiLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTRFNzg7XG59XG5cbi5mb290ZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDojMTk0RTc4O1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_totalinstallation_totalinstallation_module_ts.js.map