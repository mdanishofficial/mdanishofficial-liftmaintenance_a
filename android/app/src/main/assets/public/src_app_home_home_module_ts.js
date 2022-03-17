"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 429:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"nav-wrapper\" style=\"background: white;height: 5em;\"></div>\r\n<ion-app> \r\n   \r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Select</title>\r\n</head>\r\n<ion-header class=\"header\">\r\n    <!-- <ion-navbar class=\"navbar\"> -->\r\n    <ion-title>\r\n        <ion-icon src=\"../assets/notification-bell.svg\" class=\"bell\">\r\n        </ion-icon>\r\n        <div class=\"ion-text-center\">\r\n            <img src=\"../assets/top-right-logo.svg\" class=\"logo\">\r\n        </div>\r\n    </ion-title>\r\n    <!-- </ion-navbar> -->\r\n</ion-header>\r\n\r\n<div class=\"white\"></div>\r\n\r\n   <ion-content overflow-scroll=\"true\">\r\n    <div class=\"flex-container\">\r\n        <div class=\"card\" (click)=\"totalinstallation()\">\r\n            <div class=\"ion-text-center\">\r\n                <h2 class=\"text\"> 157</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"ion-text-center\">\r\n                    <h6 class=\"card-title\">Total Installation</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        &nbsp;\r\n        &nbsp;\r\n        <div class=\"card\" (click)=\"todayinstallation()\">\r\n            <div class=\"ion-text-center\">\r\n                <h2 class=\"text\"> 139</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"ion-text-center\">\r\n                    <h6 class=\"card-title\">Today Installation</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    <div class=\"flex-container\">\r\n        <div class=\"card\" (click)=\"installationDetail()\">\r\n            <div class=\"ion-text-center\">\r\n                <img class=\"card-img-top\" src=\"../../assets/report.svg\" alt=\"Card image cap\">\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"ion-text-center\">\r\n                    <h6 class=\"card-title\">Installation Details</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        &nbsp;\r\n        &nbsp;\r\n        <div class=\"card\" (click)=\"assignedInstallation()\">\r\n            <div class=\"ion-text-center\">\r\n                <img class=\"card-img-top\" src=\"../../assets/assignment.svg\" alt=\"Card image cap\">\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"ion-text-center\">\r\n                    <h6 class=\"card-title\">Assigned Installation</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"flex-container\">\r\n        <div class=\"card\" (click)=\"malfunctions()\">\r\n            <div class=\"ion-text-center\">\r\n                <img class=\"card-img-top\" src=\"../../assets/hazard-sign.svg\" alt=\"Card image cap\">\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"ion-text-center\">\r\n                    <h6 class=\"card-title1\">Malfunctions</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        &nbsp;\r\n        &nbsp;\r\n        <div class=\"card\" (click)=\"bills()\">\r\n            <div class=\"ion-text-center\">\r\n                <img class=\"card-img-top\" src=\"../../assets/bill.svg\" alt=\"Card image cap\">\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"ion-text-center\">\r\n                    <h6 class=\"card-title1\">Bills</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n<h1 class=\"tittle\">Today's Installation</h1>\r\n\r\n\r\n<ion-card class=\"detail\" *ngFor=\"let result of  installation_data\">\r\n    <ion-card-title class=\"details\">Installation # {{result?.Installation_id}} </ion-card-title>\r\n    <ion-card-subtitle class=\"sub-details\">Client Name : {{result?.Client_Name}}</ion-card-subtitle>\r\n    <ion-card-subtitle class=\"sub-details\">Location : {{result?.Client_Location}}</ion-card-subtitle>\r\n</ion-card>\r\n\r\n\r\n</ion-content>\r\n\r\n<!-- <footer> -->\r\n    <div class=\"white1\"></div>\r\n    <ion-tab-bar slot=\"bottom\">\r\n        <ion-tab-button (click)=\"home()\">\r\n            <ion-icon src=\"assets/user.svg\"></ion-icon>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button>\r\n            <ion-icon src=\"assets/email.svg\" (click)=\"language()\"></ion-icon>\r\n        </ion-tab-button>\r\n        <ion-tab-button>\r\n            <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" class=\"fab-button\" (click)=\"home()\">\r\n                <ion-fab-button>\r\n                    <ion-icon src=\"assets/home.svg\" (click)=\"home()\"></ion-icon>\r\n                </ion-fab-button>\r\n            </ion-fab>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button>\r\n            <ion-icon src=\"assets/setting.svg\" (click)=\"settings()\"></ion-icon>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button>\r\n            <ion-icon src=\"assets/question.svg\" (click)=\"inquiries()\"></ion-icon>\r\n        </ion-tab-button>\r\n    </ion-tab-bar>\r\n\r\n\r\n<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\"\r\n    style=\"background-color: #194E78; margin-bottom: 7px; border-radius: 30px;\" (click)=\"home()\">\r\n    <ion-fab-button class=\"fab-button\">\r\n        <ion-icon name=\"home\"></ion-icon>\r\n    </ion-fab-button>\r\n</ion-fab>\r\n\r\n<!-- <\"footer\"> -->\r\n\r\n</ion-app>");

/***/ }),

/***/ 3245:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 8763);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 8890:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 8763);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 3245);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 8763:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_Aneeza_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 429);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);



/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */


let HomePage = class HomePage {
    constructor(router) {
        this.router = router;
        this.installation_data = [
            { Installation_id: '1',
                Client_Name: 'Naeem Arshad',
                Client_Location: 'Abu Dhabi',
            },
            {
                Installation_id: '2',
                Client_Name: 'Naeem Arshad',
                Client_Location: 'Abu Dhabi',
            },
            {
                Installation_id: '3',
                Client_Name: 'Naeem Arshad',
                Client_Location: 'Abu Dhabi',
            }
        ];
    }
    home() {
        this.router.navigateByUrl('home');
    }
    totalinstallation() {
        console.log('inside Installation');
        this.router.navigateByUrl('totalinstallation');
    }
    todayinstallation() {
        console.log('inside Installation');
        this.router.navigateByUrl('todayinstallation');
    }
    installationDetail() {
        console.log('inside Installation');
        this.router.navigateByUrl('installationdetails');
    }
    assignedInstallation() {
        console.log('inside Installation');
        this.router.navigateByUrl('assignedinstallation');
    }
    malfunctions() {
        console.log('inside Installation');
        this.router.navigateByUrl('newmalfunction');
    }
    bills() {
        console.log('inside Installation');
        const refresh = true;
        this.router.navigateByUrl('unpaid-bill/' + refresh);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _C_Users_Aneeza_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 968:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900);\n.flex-container {\n  justify-content: center;\n  display: flex;\n  margin-top: 1em;\n}\n.header {\n  height: 40px;\n  background-color: #194E78;\n  position: initial;\n}\n.bell {\n  margin-left: 0.5em;\n  position: absolute;\n  top: 5px;\n  left: 0.5em;\n  width: 24px;\n  height: 30px;\n}\n.logo {\n  position: relative;\n  top: -5px;\n  right: 0px;\n  width: 68px;\n  height: 86px;\n  justify-content: center;\n}\n.ion-text-title {\n  margin-top: 1.5em;\n  text-align: center !important;\n}\n.ion-text-top {\n  margin-top: 3.5em;\n  text-align: center !important;\n}\n.ion-text-center {\n  margin-top: 1.5em;\n}\n.text {\n  font-weight: bold;\n  font-family: Roboto;\n  margin-bottom: 0.1em;\n  color: #194E78;\n  font-size: 38px;\n}\n.white {\n  width: 100%;\n  height: 1.5em;\n  border-top-style: none;\n}\n.white1 {\n  width: 100%;\n  height: 0.8em;\n  border-top-style: none;\n}\n.ion-text-center {\n  margin-top: 0.1em;\n}\n.card {\n  width: 170px;\n  height: 98px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.card-img-top {\n  width: 43px;\n  height: 43px;\n  margin-top: 0.2em;\n  font-weight: bold;\n}\n.card-title {\n  margin-top: -1.1em;\n  color: #194E78;\n  font-weight: 800;\n  font-size: 15px;\n  font-family: Roboto;\n}\n.card-title1 {\n  margin-top: -0.5em;\n  color: #194E78;\n  font-weight: 800;\n  font-size: 15px;\n  font-family: Roboto;\n}\n.tittle {\n  color: #194E78;\n  font-family: Roboto;\n  text-align: center;\n  margin-top: 30px;\n  font-size: 30px;\n  font-weight: 800;\n}\n.detail {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  margin: 1.5em;\n  background: #FCFCFC;\n}\n.details {\n  margin: 10px;\n  color: #194E78;\n  font-family: Roboto;\n  font-size: 25px;\n  font-weight: 700;\n}\n.sub-details {\n  margin: 5px 5px 5px 15px;\n  font-family: Roboto;\n}\nion-tab-bar, ion-tab-button {\n  background-color: #194E78;\n}\n.footer {\n  position: sticky;\n}\nion-icon {\n  color: white;\n  font-size: 30px;\n}\n.fab-button {\n  --background:#194E78;\n}\n@media only screen and (max-width: 600px) {\n  .card {\n    width: 140px;\n    height: 98px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFSLGdKQUFBO0FBR1I7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQUo7QUFFQTtFQUNFLFlBQUE7RUFDRix5QkFBQTtFQUNDLGlCQUFBO0FBQ0Q7QUFDQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUE7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7QUFDRjtBQUNBO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtBQUVGO0FBQUE7RUFDRSxpQkFBQTtBQUdGO0FBQUM7RUFDRCxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUdBO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRUo7QUFBQTtFQUNFLFdBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFHSjtBQUFBO0VBQ0ksaUJBQUE7QUFHSjtBQURBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSw0RUFBQTtBQUlKO0FBRkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFLSjtBQUhBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFNSjtBQUZBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFLSjtBQUNBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQ0E7RUFDSyw0RUFBQTtFQUVDLGFBQUE7RUFDQSxtQkFBQTtBQUNOO0FBRUE7RUFDSSxZQUFBO0VBQ0osY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0E7QUFDQTtFQUNLLHdCQUFBO0VBQ0wsbUJBQUE7QUFFQTtBQUdBO0VBQ0kseUJBQUE7QUFBSjtBQUlBO0VBQ0UsZ0JBQUE7QUFERjtBQUdHO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFBTDtBQUVFO0VBQ0Usb0JBQUE7QUFDSjtBQUNBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLDRFQUFBO0VBRUY7QUFDRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBpbXBvcnQgdXJsKGh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsMTAwLDEwMGl0YWxpYywzMDAsMzAwaXRh4oCM4oCLbGljLDQwMGl0YWxpYyw1MDAsNTAwaXRhbGljLDcwMCw3MDBpdGFsaWMsOTAwaXRhbGljLDkwMCk7XG4uZmxleC1jb250YWluZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk0RTc4O1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbn1cblxuLmJlbGwge1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDAuNWVtO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNXB4O1xuICByaWdodDogMHB4O1xuICB3aWR0aDogNjhweDtcbiAgaGVpZ2h0OiA4NnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmlvbi10ZXh0LXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMS41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtdG9wIHtcbiAgbWFyZ2luLXRvcDogMy41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtY2VudGVyIHtcbiAgbWFyZ2luLXRvcDogMS41ZW07XG59XG5cbi50ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIG1hcmdpbi1ib3R0b206IDAuMWVtO1xuICBjb2xvcjogIzE5NEU3ODtcbiAgZm9udC1zaXplOiAzOHB4O1xufVxuXG4ud2hpdGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcbn1cblxuLndoaXRlMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDAuOGVtO1xuICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xufVxuXG4uaW9uLXRleHQtY2VudGVyIHtcbiAgbWFyZ2luLXRvcDogMC4xZW07XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDk4cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5jYXJkLWltZy10b3Age1xuICB3aWR0aDogNDNweDtcbiAgaGVpZ2h0OiA0M3B4O1xuICBtYXJnaW4tdG9wOiAwLjJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogLTEuMWVtO1xuICBjb2xvcjogIzE5NEU3ODtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuXG4uY2FyZC10aXRsZTEge1xuICBtYXJnaW4tdG9wOiAtMC41ZW07XG4gIGNvbG9yOiAjMTk0RTc4O1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi50aXR0bGUge1xuICBjb2xvcjogIzE5NEU3ODtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5kZXRhaWwge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBtYXJnaW46IDEuNWVtO1xuICBiYWNrZ3JvdW5kOiAjRkNGQ0ZDO1xufVxuXG4uZGV0YWlscyB7XG4gIG1hcmdpbjogMTBweDtcbiAgY29sb3I6ICMxOTRFNzg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN1Yi1kZXRhaWxzIHtcbiAgbWFyZ2luOiA1cHggNXB4IDVweCAxNXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuXG5pb24tdGFiLWJhciwgaW9uLXRhYi1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk0RTc4O1xufVxuXG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IzE5NEU3ODtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY2FyZCB7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogOThweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICB9XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map