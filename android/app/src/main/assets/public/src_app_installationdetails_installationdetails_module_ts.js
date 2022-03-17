"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_installationdetails_installationdetails_module_ts"],{

/***/ 7334:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/installationdetails/installationdetails.page.html ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Select</title>\n</head>\n<ion-header class=\"header\">\n  <!-- <ion-navbar class=\"navbar\"> -->\n  <ion-title>\n    <ion-icon src=\"../assets/notification-bell.svg\" class=\"bell\">\n    </ion-icon>\n    <div class=\"ion-text-center\">\n      <img src=\"../assets/top-right-logo.svg\" class=\"logo\">\n    </div>\n  </ion-title>\n  <!-- </ion-navbar> -->\n</ion-header>\n<ion-content overflow-scroll=\"true\">\n  <div class=\"container\">\n    <!-- <br> -->\n    <h1 class=\"ion-text-center\">Task Listing &ensp;</h1>\n\n  <ion-card class=\"detail\" *ngFor=\"let result of  installation_details\">\n    <ion-card-title class=\"details\">Client : {{result?.Client}}</ion-card-title>\n    <ion-card-subtitle class=\"sub-details\">Location: {{result?.Location}}</ion-card-subtitle>\n    <ion-card-subtitle class=\"sub-details\">Installation Level : {{result?.Installation_Level}}</ion-card-subtitle>\n    <ion-card-subtitle class=\"sub-details\">Installation Status : {{result?.Installation_Status}}</ion-card-subtitle>\n    <ion-card-subtitle class=\"sub-details\">Date assigned : {{result?.Date_assigned}}</ion-card-subtitle>\n  </ion-card>\n\n    \n\n    \n  </div>\n  <div class=\"ion-text-center\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"back()\">Back</button>\n  </div>\n  &nbsp;\n  &nbsp;\n\n\n</ion-content>");

/***/ }),

/***/ 8252:
/*!***************************************************************************!*\
  !*** ./src/app/installationdetails/installationdetails-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstallationdetailsPageRoutingModule": () => (/* binding */ InstallationdetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _installationdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./installationdetails.page */ 3264);




const routes = [
    {
        path: '',
        component: _installationdetails_page__WEBPACK_IMPORTED_MODULE_0__.InstallationdetailsPage
    }
];
let InstallationdetailsPageRoutingModule = class InstallationdetailsPageRoutingModule {
};
InstallationdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InstallationdetailsPageRoutingModule);



/***/ }),

/***/ 5344:
/*!*******************************************************************!*\
  !*** ./src/app/installationdetails/installationdetails.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstallationdetailsPageModule": () => (/* binding */ InstallationdetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _installationdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./installationdetails-routing.module */ 8252);
/* harmony import */ var _installationdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./installationdetails.page */ 3264);







let InstallationdetailsPageModule = class InstallationdetailsPageModule {
};
InstallationdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _installationdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.InstallationdetailsPageRoutingModule
        ],
        declarations: [_installationdetails_page__WEBPACK_IMPORTED_MODULE_1__.InstallationdetailsPage]
    })
], InstallationdetailsPageModule);



/***/ }),

/***/ 3264:
/*!*****************************************************************!*\
  !*** ./src/app/installationdetails/installationdetails.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstallationdetailsPage": () => (/* binding */ InstallationdetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_Aneeza_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_installationdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./installationdetails.page.html */ 7334);
/* harmony import */ var _installationdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./installationdetails.page.scss */ 7637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8058);



/* eslint-disable no-var */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */



let InstallationdetailsPage = class InstallationdetailsPage {
    constructor(router, activatedRoute, platform) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.installation_details = [
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
            this.router.navigateByUrl('../home');
        });
    }
    back() {
        this.router.navigateByUrl('home');
    }
};
InstallationdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
InstallationdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-installationdetails',
        template: _C_Users_Aneeza_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_installationdetails_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_installationdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InstallationdetailsPage);



/***/ }),

/***/ 7637:
/*!*******************************************************************!*\
  !*** ./src/app/installationdetails/installationdetails.page.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900);\n.flex-container {\n  justify-content: center;\n  display: flex;\n  margin-top: 2em;\n}\n.header {\n  height: 40px;\n  background-color: #194E78;\n  position: initial;\n}\n.bell {\n  margin-left: 0.5em;\n  position: absolute;\n  top: 5px;\n  left: 0.5em;\n  width: 24px;\n  height: 30px;\n}\n.logo {\n  position: absolute;\n  top: -4px;\n  right: 0px;\n  width: 79px;\n  height: 99px;\n}\n.container {\n  margin-top: 1px;\n}\n.white {\n  width: 100%;\n  height: 2em;\n}\n.flex-container {\n  display: flex;\n}\n.flex-container2 {\n  width: 100%;\n}\n.flex-container3 {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\nh1 {\n  text-decoration: underline;\n  color: #194E78;\n  font-weight: bold;\n  margin-top: 1em;\n  font-size: 24;\n}\n.detail {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  top: 20px;\n  background: #FCFCFC;\n}\n.details {\n  margin: 10px;\n  color: #194E78;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: 700;\n}\n.sub-details {\n  margin: 5px 5px 5px 15px;\n  font-family: Roboto;\n  color: #6E6E6E;\n  font-size: 12px;\n}\n.btn-secondary {\n  width: 9em;\n  margin-top: 2em;\n  background-color: #6E6E6E;\n  border-radius: 0.5em;\n}\nion-tab-bar, ion-tab-button {\n  background-color: #194E78;\n}\n.footer {\n  position: sticky;\n}\nion-icon {\n  color: white;\n  font-size: 30px;\n}\n.fab-button {\n  --background:#194E78;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbGxhdGlvbmRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFSLGdKQUFBO0FBRVI7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFQTtFQUNJLFlBQUE7RUFDRix5QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDRTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUY7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdKO0FBREE7RUFDSSxlQUFBO0FBSUo7QUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBR0o7QUFEQTtFQUNBLGFBQUE7QUFJQTtBQUZBO0VBQ0MsV0FBQTtBQUtEO0FBSEk7RUFDSSxhQUFBO0VBQ0gsOEJBQUE7RUFDQSxXQUFBO0FBTUw7QUFKSztFQUNELDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFPSjtBQUxBO0VBQ0ssNEVBQUE7RUFDQSxTQUFBO0VBQ0csbUJBQUE7QUFRUjtBQU5BO0VBQ0ksWUFBQTtFQUNKLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVNBO0FBUEE7RUFDSyx3QkFBQTtFQUNMLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFVQTtBQVBBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDRix5QkFBQTtFQUNBLG9CQUFBO0FBVUY7QUFOQTtFQUNJLHlCQUFBO0FBU0o7QUFMQTtFQUNFLGdCQUFBO0FBUUY7QUFORztFQUNFLFlBQUE7RUFDQSxlQUFBO0FBU0w7QUFQRTtFQUNFLG9CQUFBO0FBVUoiLCJmaWxlIjoiaW5zdGFsbGF0aW9uZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AaW1wb3J0IHVybChodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDEwMCwxMDBpdGFsaWMsMzAwLDMwMGl0YeKAjOKAi2xpYyw0MDBpdGFsaWMsNTAwLDUwMGl0YWxpYyw3MDAsNzAwaXRhbGljLDkwMGl0YWxpYyw5MDApO1xuLmZsZXgtY29udGFpbmVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuLmhlYWRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NEU3ODtcbiAgcG9zaXRpb246IGluaXRpYWw7XG59XG5cbi5iZWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiAwLjVlbTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbiAgcmlnaHQ6IDBweDtcbiAgd2lkdGg6IDc5cHg7XG4gIGhlaWdodDogOTlweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cblxuLndoaXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMmVtO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmxleC1jb250YWluZXIyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mbGV4LWNvbnRhaW5lcjMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5oMSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzE5NEU3ODtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgZm9udC1zaXplOiAyNDtcbn1cblxuLmRldGFpbCB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIHRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogI0ZDRkNGQztcbn1cblxuLmRldGFpbHMge1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiAjMTk0RTc4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdWItZGV0YWlscyB7XG4gIG1hcmdpbjogNXB4IDVweCA1cHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgY29sb3I6ICM2RTZFNkU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICB3aWR0aDogOWVtO1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2RTZFNkU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xufVxuXG5pb24tdGFiLWJhciwgaW9uLXRhYi1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk0RTc4O1xufVxuXG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IzE5NEU3ODtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_installationdetails_installationdetails_module_ts.js.map