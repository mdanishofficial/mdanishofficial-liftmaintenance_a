"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_completemalfunction_completemalfunction_module_ts"],{

/***/ 5811:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/completemalfunction/completemalfunction.page.html ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Select</title>\n</head>\n<ion-header class=\"header\">\n  <!-- <ion-navbar class=\"navbar\"> -->\n  <ion-title>\n    <ion-icon src=\"../../assets/notification-bell.svg\" (click)=\"notifications()\" class=\"bell\">\n    </ion-icon>\n    <div class=\"ion-text-right\">\n      <img src=\"../../assets/top-right-logo.svg\" class=\"logo\">\n    </div>\n  </ion-title>\n  <!-- </ion-navbar> -->\n</ion-header>\n<ion-content overflow-scroll=\"true\">\n  <div class=\"container\">\n    <h1 class=\"ion-text-center\">Malfunctions List</h1>\n    <div class=\"tabs\">\n      <ion-tab-bar  slot=\"top\">\n        <button type=\"button\" class=\"btn1\" (click)=\"new()\">New Malfunctions</button>\n        <div class=\"divider\"></div>\n        <button type=\"button\" class=\"btn2\" (click)=\"completed()\">Completed Malfunctions</button>\n      </ion-tab-bar>\n    </div>\n    <div class=\"flex-container\">\n      <ion-card class=\"card\" (click)=\"malfunctionsDetails()\">\n        <div class=\"square\">\n          <div>\n            <div class=\"complain\">\n              <h3 class=\"h3\">Client : Shadab Khan</h3>\n            </div>\n            <br>\n            <br>\n          </div>\n\n      \n          <ion-text class=\"date\">Assigned Time : Sunday, 23-03-2020<br></ion-text>\n          <ion-text class=\"date\">Status : New<br></ion-text>\n          <ion-text class=\"date\">Type : Unidentified<br></ion-text>\n          <ion-text class=\"date\">Level :</ion-text>\n          <ion-text class=\"redtext\"> Danger<br></ion-text>\n        </div>\n        <!-- </div> -->\n      </ion-card>\n      <ion-card class=\"card\">\n        <div class=\"square\">\n          <div>\n            <div class=\"complain\">\n              <h3 class=\"h3\">Client : Shadab Khan</h3>\n            </div>\n            <br>\n            <br>\n          </div>\n          <ion-text class=\"date\">Assigned Time : Sunday, 23-03-2020<br></ion-text>\n          <ion-text class=\"date\">Status : New<br></ion-text>\n          <ion-text class=\"date\">Type : Unidentified<br></ion-text>\n          <ion-text class=\"date\">Level :</ion-text>\n          <ion-text class=\"yellowtext\"> Danger<br></ion-text>\n        </div>\n        <!-- </div> -->\n      </ion-card>\n    </div>\n\n  </div>\n</ion-content>\n\n<!-- <footer> -->\n    <div class=\"white\"></div>\n    <ion-tab-bar class=\"foot\" slot=\"bottom\">\n        <ion-tab-button (click)=\"home()\">\n            <ion-icon src=\"assets/user.svg\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button>\n            <ion-icon src=\"assets/email.svg\" (click)=\"language()\"></ion-icon>\n        </ion-tab-button>\n        <ion-tab-button>\n            <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" class=\"fab-button\" (click)=\"home()\">\n                <ion-fab-button>\n                    <ion-icon src=\"assets/home.svg\" (click)=\"home()\"></ion-icon>\n                </ion-fab-button>\n            </ion-fab>\n        </ion-tab-button>\n\n        <ion-tab-button>\n            <ion-icon src=\"assets/setting.svg\" (click)=\"settings()\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button>\n            <ion-icon src=\"assets/question.svg\" (click)=\"inquiries()\"></ion-icon>\n        </ion-tab-button>\n    </ion-tab-bar>\n\n\n<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\"\n    style=\"background-color: #194E78; margin-bottom: 7px; border-radius: 30px;\" (click)=\"home()\">\n    <ion-fab-button class=\"fab-button\">\n        <ion-icon name=\"home\"></ion-icon>\n    </ion-fab-button>\n</ion-fab>\n\n<!-- <\"footer\"> -->\n");

/***/ }),

/***/ 3222:
/*!***************************************************************************!*\
  !*** ./src/app/completemalfunction/completemalfunction-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletemalfunctionPageRoutingModule": () => (/* binding */ CompletemalfunctionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _completemalfunction_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completemalfunction.page */ 6588);




const routes = [
    {
        path: '',
        component: _completemalfunction_page__WEBPACK_IMPORTED_MODULE_0__.CompletemalfunctionPage
    }
];
let CompletemalfunctionPageRoutingModule = class CompletemalfunctionPageRoutingModule {
};
CompletemalfunctionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CompletemalfunctionPageRoutingModule);



/***/ }),

/***/ 2714:
/*!*******************************************************************!*\
  !*** ./src/app/completemalfunction/completemalfunction.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletemalfunctionPageModule": () => (/* binding */ CompletemalfunctionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _completemalfunction_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completemalfunction-routing.module */ 3222);
/* harmony import */ var _completemalfunction_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completemalfunction.page */ 6588);







let CompletemalfunctionPageModule = class CompletemalfunctionPageModule {
};
CompletemalfunctionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _completemalfunction_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompletemalfunctionPageRoutingModule
        ],
        declarations: [_completemalfunction_page__WEBPACK_IMPORTED_MODULE_1__.CompletemalfunctionPage]
    })
], CompletemalfunctionPageModule);



/***/ }),

/***/ 6588:
/*!*****************************************************************!*\
  !*** ./src/app/completemalfunction/completemalfunction.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletemalfunctionPage": () => (/* binding */ CompletemalfunctionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_Aneeza_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_completemalfunction_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./completemalfunction.page.html */ 5811);
/* harmony import */ var _completemalfunction_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completemalfunction.page.scss */ 8850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8058);



/* eslint-disable eqeqeq */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/type-annotation-spacing */



let CompletemalfunctionPage = class CompletemalfunctionPage {
    constructor(router, activatedRoute, platform) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.platform = platform;
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
            this.router.navigateByUrl('../newmalfunction');
        });
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
    malfunctionsDetails() {
        this.router.navigateByUrl('malfunctiondetails');
    }
};
CompletemalfunctionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
CompletemalfunctionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-completemalfunction',
        template: _C_Users_Aneeza_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_completemalfunction_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_completemalfunction_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CompletemalfunctionPage);



/***/ }),

/***/ 8850:
/*!*******************************************************************!*\
  !*** ./src/app/completemalfunction/completemalfunction.page.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".header {\n  height: 40px;\n  background-color: #194E78;\n  position: initial;\n}\n\n.bell {\n  margin-left: 0.5em;\n  position: absolute;\n  top: 5px;\n  left: 0.5em;\n  width: 24px;\n  height: 30px;\n}\n\n.logo {\n  position: absolute;\n  top: -4px;\n  right: 0px;\n  width: 66px;\n  height: 86px;\n}\n\nh1 {\n  text-decoration: underline;\n  color: #194E78;\n  font-weight: bold;\n  margin-top: 1em;\n}\n\n.flex-container {\n  justify-content: center;\n}\n\n.btn2 {\n  width: 20em;\n  background-color: #194E78;\n  border: #194E78;\n  font-size: 13px;\n  height: 3em;\n  border-radius: 0.5em;\n  color: white;\n}\n\n.btn1 {\n  width: 15em;\n  background-color: #F5F5F5;\n  color: #6E6E6E;\n  border: #6E6E6E;\n  font-size: 12px;\n  height: 3em;\n  border-radius: 0.5em;\n}\n\n.divider {\n  width: 3em;\n  height: auto;\n  display: inline-block;\n}\n\n.square {\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\n.h3 {\n  font-family: \"Roboto\";\n  font-size: 18px;\n  margin-top: 0.5em;\n  margin-left: 0em;\n  margin-bottom: 0em;\n  color: #194E78;\n  text-align: left;\n}\n\n.date {\n  color: #6E6E6E;\n  font-family: \"Roboto\";\n  font-size: 12px;\n  margin-top: 0em;\n  margin-left: 0em;\n  text-align: left;\n}\n\n.complain {\n  float: left;\n}\n\n.card {\n  background: #FCFCFC;\n  padding: 1em;\n  padding-top: 0.5em;\n  margin-top: 1.5em;\n  border: 2px solid #4F8B31;\n}\n\n.redtext {\n  color: #7A0001;\n}\n\n.yellowtext {\n  color: #FABE11;\n}\n\n@media only screen and (min-height: 1000px) {\n  .date {\n    color: #6E6E6E;\n    font-family: \"Roboto\";\n    font-size: 25px;\n    margin-top: 0em;\n    margin-left: 0em;\n    text-align: left;\n  }\n\n  .h3 {\n    font-family: \"Roboto\";\n    font-size: 30px;\n    margin-top: 0.5em;\n    margin-left: 0em;\n    margin-bottom: 0em;\n    color: #194E78;\n    text-align: left;\n  }\n}\n\n.white {\n  width: 100%;\n  height: 1.1em;\n}\n\n.foot {\n  background-color: #194E78;\n}\n\nion-tab-button {\n  background-color: #194E78;\n}\n\n.footer {\n  position: sticky;\n}\n\nion-icon {\n  color: white;\n  font-size: 30px;\n}\n\n.fab-button {\n  --background:#194E78;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXRlbWFsZnVuY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNGLHlCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDRTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHSjs7QUFERTtFQUNJLDBCQUFBO0VBQTJCLGNBQUE7RUFBaUIsaUJBQUE7RUFBa0IsZUFBQTtBQU9wRTs7QUFMRTtFQUNJLHVCQUFBO0FBUU47O0FBTkU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFTSjs7QUFORTtFQUNDLFdBQUE7RUFDQyx5QkFBQTtFQUNBLGNBQUE7RUFDQyxlQUFBO0VBQ0QsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQVNKOztBQUpFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQU9KOztBQUxJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQVFSOztBQU5JO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBU047O0FBUEk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFVUjs7QUFSSTtFQUNJLFdBQUE7QUFXUjs7QUFURTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQVlOOztBQVZFO0VBQ1UsY0FBQTtBQWFaOztBQVhRO0VBQ1IsY0FBQTtBQWNBOztBQVpPO0VBQ0E7SUFDTyxjQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUFlWjs7RUFiUTtJQUNJLHFCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQWdCWjtBQUNGOztBQWJRO0VBQ04sV0FBQTtFQUNBLGFBQUE7QUFlRjs7QUFaQTtFQUNDLHlCQUFBO0FBZUQ7O0FBYkU7RUFDRSx5QkFBQTtBQWdCSjs7QUFiRTtFQUNBLGdCQUFBO0FBZ0JGOztBQWRHO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFpQkw7O0FBZkU7RUFDRSxvQkFBQTtBQWtCSiIsImZpbGUiOiJjb21wbGV0ZW1hbGZ1bmN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NEU3ODtcclxuICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICB9XHJcbiAgLmJlbGx7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICBsZWZ0OiAwLjVlbTtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5sb2dve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlIDtcclxuICAgIHRvcDogLTRweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB3aWR0aDogNjZweDtcclxuICAgIGhlaWdodDogODZweDtcclxuICB9XHJcbiAgaDF7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO2NvbG9yOiAjMTk0RTc4IDsgZm9udC13ZWlnaHQ6IGJvbGQ7bWFyZ2luLXRvcDogMWVtO1xyXG4gIH1cclxuICAuZmxleC1jb250YWluZXJ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuYnRuMntcclxuICAgIHdpZHRoOiAyMGVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NEU3ODtcclxuICAgIGJvcmRlcjogIzE5NEU3ODtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICBjb2xvcjp3aGl0ZSA7XHJcblxyXG4gIH1cclxuICAuYnRuMXtcclxuICAgd2lkdGg6IDE1ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgY29sb3I6ICM2RTZFNkU7XHJcbiAgICAgYm9yZGVyOiAjNkU2RTZFO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAgXHJcbiAgIFxyXG4gICBcclxuICB9XHJcbiAgLmRpdmlkZXJ7XHJcbiAgICB3aWR0aDozZW07XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAgIC5zcXVhcmV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgIH1cclxuICAgIC5oM3tcclxuICAgICAgZm9udC1mYW1pbHk6J1JvYm90byc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBlbTtcclxuICAgICAgY29sb3I6ICMxOTRFNzg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgIC5kYXRle1xyXG4gICAgICAgIGNvbG9yOiAjNkU2RTZFO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmNvbXBsYWlue1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gIC5jYXJke1xyXG4gICAgICBiYWNrZ3JvdW5kOiNGQ0ZDRkM7XHJcbiAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgcGFkZGluZy10b3A6IDAuNWVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzRGOEIzMTtcclxuICB9XHJcbiAgLnJlZHRleHR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjN0EwMDAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAueWVsbG93dGV4dHtcclxuY29sb3I6ICNGQUJFMTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMTAwMHB4KSB7XHJcbiAgICAgICAuZGF0ZXtcclxuICAgICAgICAgICAgICBjb2xvcjogIzZFNkU2RTtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTonUm9ib3RvJztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMGVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwZW07XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oM3tcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTonUm9ib3RvJztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwZW07XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMxOTRFNzg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLndoaXRle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMS4xZW07XHJcbn1cclxuXHJcbi5mb290e1xyXG4gYmFja2dyb3VuZC1jb2xvcjogIzE5NEU3ODsgXHJcbn1cclxuICBpb24tdGFiLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTRFNzg7XHJcblxyXG4gICB9XHJcbiAgLmZvb3RlcntcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG59XHJcbiAgIGlvbi1pY29ue1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgIH1cclxuICAuZmFiLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDojMTk0RTc4O1xyXG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_completemalfunction_completemalfunction_module_ts.js.map