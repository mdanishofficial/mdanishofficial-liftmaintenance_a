"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_newmalfunction_newmalfunction_module_ts"],{

/***/ 8425:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/newmalfunction/newmalfunction.page.html ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Select</title>\n</head>\n<ion-header class=\"header\">\n  <!-- <ion-navbar class=\"navbar\"> -->\n  <ion-title>\n    <ion-icon src=\"../../assets/notification-bell.svg\" class=\"bell\" (click)=\"notifications()\">\n    </ion-icon>\n    <div class=\"ion-text-right\">\n      <img src=\"../../assets/top-right-logo.svg\" class=\"logo\">\n    </div>\n  </ion-title>\n  <!-- </ion-navbar> -->\n</ion-header>\n<ion-content overflow-scroll=\"true\">\n  <div class=\"container\">\n    <h1 class=\"ion-text-center\">Malfunctions</h1>\n    <div class=\"tabs\">\n      <ion-tab-bar slot=\"top\">\n        <button type=\"button\" class=\"btn1\" (click)=\"new()\">New Malfunctions</button>\n        <div class=\"divider\"></div>\n        <button type=\"button\" class=\"btn2\" (click)=\"completed()\">Completed Malfunctions</button>\n      </ion-tab-bar>\n    </div>\n    <div class=\"flex-container\">\n     \n      \n\n      <ion-card class=\"card\" *ngFor= \"let result of new_mulfunction\"   [ngClass]='result?.level === \"Normal\" ? \"card1\":  \"card3\"   '>\n  \n       \n        <div class=\"square\">\n          <div>\n            <div class=\"complain\">\n              <h3 class=\"h3\">Client : {{result?.client_name}} </h3>\n            </div>\n            <br>\n            <br>\n          </div>\n          <ion-text class=\"date\">Assigned Time : {{result?.assigned_time}}<br></ion-text>\n          <ion-text class=\"date\">Status :{{result?.status}}<br></ion-text>\n          <ion-text class=\"date\">Type : {{result?.type}}<br></ion-text>\n\n          <ion-text class=\"date\"  >Level : {{result?.level}} </ion-text>\n        </div>\n        <!-- </div> -->\n        \n      </ion-card>\n\n    </div>\n    </div>\n\n  \n</ion-content>\n<!-- <footer> -->\n<div class=\"white\"></div>\n<ion-tab-bar class=\"foot\" slot=\"bottom\">\n  <ion-tab-button (click)=\"profile()\">\n    <ion-icon src=\"assets/user.svg\"></ion-icon>\n  </ion-tab-button>\n\n  <ion-tab-button>\n    <ion-icon src=\"assets/email.svg\" (click)=\"language()\"></ion-icon>\n  </ion-tab-button>\n  <ion-tab-button>\n    <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" class=\"fab-button\" (click)=\"home()\">\n      <ion-fab-button>\n        <ion-icon src=\"assets/home.svg\" (click)=\"home()\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </ion-tab-button>\n\n  <ion-tab-button>\n    <ion-icon src=\"assets/setting.svg\" (click)=\"settings()\"></ion-icon>\n  </ion-tab-button>\n\n  <ion-tab-button>\n    <ion-icon src=\"assets/question.svg\" (click)=\"faq()\"></ion-icon>\n  </ion-tab-button>\n</ion-tab-bar>\n\n\n<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\"\n  style=\"background-color: #194E78; margin-bottom: 7px; border-radius: 30px;\" (click)=\"home()\">\n  <ion-fab-button class=\"fab-button\">\n    <ion-icon name=\"home\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<!-- <\"footer\"> -->");

/***/ }),

/***/ 1940:
/*!*****************************************************************!*\
  !*** ./src/app/newmalfunction/newmalfunction-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewmalfunctionPageRoutingModule": () => (/* binding */ NewmalfunctionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _newmalfunction_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newmalfunction.page */ 4723);




const routes = [
    {
        path: '',
        component: _newmalfunction_page__WEBPACK_IMPORTED_MODULE_0__.NewmalfunctionPage
    }
];
let NewmalfunctionPageRoutingModule = class NewmalfunctionPageRoutingModule {
};
NewmalfunctionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewmalfunctionPageRoutingModule);



/***/ }),

/***/ 3766:
/*!*********************************************************!*\
  !*** ./src/app/newmalfunction/newmalfunction.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewmalfunctionPageModule": () => (/* binding */ NewmalfunctionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _newmalfunction_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newmalfunction-routing.module */ 1940);
/* harmony import */ var _newmalfunction_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newmalfunction.page */ 4723);







let NewmalfunctionPageModule = class NewmalfunctionPageModule {
};
NewmalfunctionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _newmalfunction_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewmalfunctionPageRoutingModule
        ],
        declarations: [_newmalfunction_page__WEBPACK_IMPORTED_MODULE_1__.NewmalfunctionPage]
    })
], NewmalfunctionPageModule);



/***/ }),

/***/ 4723:
/*!*******************************************************!*\
  !*** ./src/app/newmalfunction/newmalfunction.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewmalfunctionPage": () => (/* binding */ NewmalfunctionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_ASUS_Moile_Installation_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_newmalfunction_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./newmalfunction.page.html */ 8425);
/* harmony import */ var _newmalfunction_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newmalfunction.page.scss */ 4938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8058);



/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/dot-notation */



let NewmalfunctionPage = class NewmalfunctionPage {
    constructor(router, activatedRoute, platform) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.new_mulfunction = [
            {
                client_name: 'Akbar Khan',
                assigned_time: 'Sunday, 23-03-2020',
                status: 'New',
                type: 'Unidentified',
                level: 'Danger',
            },
            {
                client_name: 'Mustafa Khan',
                assigned_time: 'Sunday, 23-03-2020',
                status: 'New',
                type: 'Unidentified',
                level: 'Normal',
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
    profile() {
        this.router.navigateByUrl('profile');
    }
    settings() {
        this.router.navigateByUrl('settings');
    }
    language() {
        this.router.navigateByUrl('languages');
    }
    faq() {
        this.router.navigateByUrl('faq');
    }
    notifications() {
        this.router.navigateByUrl('notifications');
    }
    home() {
        this.router.navigateByUrl('home');
    }
    new() {
        this.router.navigateByUrl('newmalfunction');
    }
    completed() {
        this.router.navigateByUrl('completemalfunction');
    }
};
NewmalfunctionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
NewmalfunctionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-newmalfunction',
        template: _C_Users_ASUS_Moile_Installation_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_newmalfunction_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_newmalfunction_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewmalfunctionPage);



/***/ }),

/***/ 4938:
/*!*********************************************************!*\
  !*** ./src/app/newmalfunction/newmalfunction.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".header {\n  height: 40px;\n  background-color: #194E78;\n  position: initial;\n}\n\n.bell {\n  margin-left: 0.5em;\n  position: absolute;\n  top: 8px;\n  left: 0.2em;\n  width: 21px;\n  height: 23px;\n}\n\n.logo {\n  position: absolute;\n  top: -4px;\n  right: 0px;\n  width: 66px;\n  height: 86px;\n}\n\nh1 {\n  text-decoration: underline;\n  color: #194E78;\n  font-weight: bold;\n  margin-top: 1em;\n}\n\n.flex-container {\n  justify-content: center;\n}\n\n.btn1 {\n  width: 12em;\n  background-color: #194E78;\n  border: #194E78;\n  font-size: 11px;\n  height: 3em;\n  border-radius: 0.5em;\n  color: white;\n}\n\n.btn2 {\n  width: 14em;\n  background-color: #F5F5F5;\n  color: #6E6E6E;\n  border: #6E6E6E;\n  font-size: 11px;\n  height: 3em;\n  border-radius: 0.5em;\n}\n\n.divider {\n  width: 0.7em;\n  height: auto;\n  display: inline-block;\n}\n\n.square {\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\n.h3 {\n  font-family: \"Roboto\";\n  font-size: 18px;\n  margin-top: 0.5em;\n  margin-left: 0em;\n  margin-bottom: 0em;\n  color: #194E78;\n  text-align: left;\n}\n\n.date {\n  color: #6E6E6E;\n  font-family: \"Roboto\";\n  font-size: 12px;\n  margin-top: 0em;\n  margin-left: 0em;\n  text-align: left;\n}\n\n.complain {\n  float: left;\n}\n\n.card-div {\n  border-width: 2em;\n}\n\n.card1 {\n  border: 2px solid #FABE11;\n}\n\n.card3 {\n  border: 2px solid #7A0001;\n}\n\n.card {\n  background: #FCFCFC;\n  padding: 1em;\n  padding-top: 0.5em;\n  margin-top: 1.5em;\n}\n\n@media only screen and (min-height: 1000px) {\n  .date {\n    color: #6E6E6E;\n    font-family: \"Roboto\";\n    font-size: 25px;\n    margin-top: 0em;\n    margin-left: 0em;\n    text-align: left;\n  }\n\n  .h3 {\n    font-family: \"Roboto\";\n    font-size: 30px;\n    margin-top: 0.5em;\n    margin-left: 0em;\n    margin-bottom: 0em;\n    color: #194E78;\n    text-align: left;\n  }\n}\n\n.white {\n  width: 100%;\n  height: 1.1em;\n}\n\n.foot {\n  background-color: #194E78;\n}\n\nion-tab-button {\n  background-color: #194E78;\n}\n\n.footer {\n  position: sticky;\n}\n\nion-icon {\n  color: white;\n  font-size: 30px;\n}\n\n.fab-button {\n  --background:#194E78;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld21hbGZ1bmN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDRix5QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREU7RUFDSSwwQkFBQTtFQUEyQixjQUFBO0VBQWlCLGlCQUFBO0VBQWtCLGVBQUE7QUFPcEU7O0FBTEU7RUFDSSx1QkFBQTtBQVFOOztBQU5FO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBU0o7O0FBTkU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0MsZUFBQTtFQUNELGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFTSjs7QUFKRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFPSjs7QUFMSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFRUjs7QUFOSTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVNOOztBQVBJO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBVVI7O0FBUkk7RUFDSSxXQUFBO0FBV1I7O0FBUkk7RUFDRSxpQkFBQTtBQVdOOztBQVRNO0VBRUUseUJBQUE7QUFXUjs7QUFUTTtFQUVFLHlCQUFBO0FBV1I7O0FBUkU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBV0o7O0FBRE87RUFDQTtJQUNPLGNBQUE7SUFDQSxxQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQUlaOztFQUZRO0lBQ0kscUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VBS1o7QUFDRjs7QUFGRTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBSUY7O0FBREE7RUFDQyx5QkFBQTtBQUlEOztBQUZFO0VBQ0UseUJBQUE7QUFLSjs7QUFGRTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEc7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQU1MOztBQUpFO0VBQ0Usb0JBQUE7QUFPSiIsImZpbGUiOiJuZXdtYWxmdW5jdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTRFNzg7XHJcbiAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgfVxyXG4gIC5iZWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgbGVmdDogMC4yZW07XHJcbiAgICB3aWR0aDogMjFweDtcclxuICAgIGhlaWdodDogMjNweDtcclxuICB9XHJcbiAgLmxvZ297XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgO1xyXG4gICAgdG9wOiAtNHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgaGVpZ2h0OiA4NnB4O1xyXG4gIH1cclxuICBoMXtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7Y29sb3I6ICMxOTRFNzggOyBmb250LXdlaWdodDogYm9sZDttYXJnaW4tdG9wOiAxZW07XHJcbiAgfVxyXG4gIC5mbGV4LWNvbnRhaW5lcntcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5idG4xe1xyXG4gICAgd2lkdGg6IDEyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk0RTc4O1xyXG4gICAgYm9yZGVyOiAjMTk0RTc4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAgIGNvbG9yOndoaXRlIDtcclxuXHJcbiAgfVxyXG4gIC5idG4ye1xyXG4gICAgd2lkdGg6IDE0ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgY29sb3I6ICM2RTZFNkU7XHJcbiAgICAgYm9yZGVyOiAjNkU2RTZFO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAgXHJcbiAgIFxyXG4gICBcclxuICB9XHJcbiAgLmRpdmlkZXJ7XHJcbiAgICB3aWR0aDowLjdlbTtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gICAgLnNxdWFyZXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgfVxyXG4gICAgLmgze1xyXG4gICAgICBmb250LWZhbWlseTonUm9ib3RvJztcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMGVtO1xyXG4gICAgICBjb2xvcjogIzE5NEU3ODtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgLmRhdGV7XHJcbiAgICAgICAgY29sb3I6ICM2RTZFNkU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6J1JvYm90byc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMGVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuY29tcGxhaW57XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICAuY2FyZC1kaXZ7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMmVtO1xyXG4gICAgfVxyXG4gICAgICAuY2FyZDF7XHJcbiAgICAgICAgLy9Ob3JtYWxcclxuICAgICAgICBib3JkZXI6MnB4IHNvbGlkICNGQUJFMTE7XHJcbiAgICB9XHJcbiAgICAgIC5jYXJkM3tcclxuICAgICAgIC8vZGFuZ2VyXHJcbiAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAjN0EwMDAxO1xyXG4gICAgfVxyXG4gICBcclxuICAuY2FyZHtcclxuICAgIGJhY2tncm91bmQ6I0ZDRkNGQztcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcclxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gICAgXHJcbiAgXHJcblxyXG4gICAgXHJcbn1cclxuXHJcbiAgXHJcblxyXG4gICAgICAgXHJcbiAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAxMDAwcHgpIHtcclxuICAgICAgIC5kYXRle1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNkU2RTZFO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwZW07XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmgze1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMGVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogIzE5NEU3ODtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgLndoaXRle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMS4xZW07XHJcbn1cclxuXHJcbi5mb290e1xyXG4gYmFja2dyb3VuZC1jb2xvcjogIzE5NEU3ODsgXHJcbn1cclxuICBpb24tdGFiLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTRFNzg7XHJcblxyXG4gICB9XHJcbiAgLmZvb3RlcntcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG59XHJcbiAgIGlvbi1pY29ue1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgIH1cclxuICAuZmFiLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDojMTk0RTc4O1xyXG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_newmalfunction_newmalfunction_module_ts.js.map