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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Select</title>\n</head>\n<ion-header class=\"header\">\n  <!-- <ion-navbar class=\"navbar\"> -->\n  <ion-title>\n    <ion-icon src=\"../../assets/notification-bell.svg\" (click)=\"notifications()\" class=\"bell\">\n    </ion-icon>\n    <div class=\"ion-text-right\">\n      <img src=\"../../assets/top-right-logo.svg\" class=\"logo\">\n    </div>\n  </ion-title>\n  <!-- </ion-navbar> -->\n</ion-header>\n<ion-content overflow-scroll=\"true\">\n  <div class=\"container\">\n    <h1 class=\"ion-text-center\">Malfunctions List</h1>\n    <div class=\"tabs\">\n      <ion-tab-bar  slot=\"top\">\n        <button type=\"button\" class=\"btn1\" (click)=\"new()\">New Malfunctions</button>\n        <div class=\"divider\"></div>\n        <button type=\"button\" class=\"btn2\" (click)=\"completed()\">Completed Malfunctions</button>\n      </ion-tab-bar>\n    </div>\n    \n    <div class=\"flex-container\">\n      <ion-card class=\"card\" *ngFor=\" let result of malfunction_data let i=index\" (click)=\"malfunctionsDetails(i)\">\n        <div class=\"square\">\n          \n            <div class=\"complain\">\n              <h3 class=\"h3\">Client : {{result?.client_name}}</h3>\n            </div>\n            <br>\n            <br>\n  \n          <ion-text class=\"date\">Assigned Time : {{result?.assigned_time}}<br></ion-text>\n          <ion-text class=\"date\">Status : {{result?.status}}<br></ion-text>\n          <ion-text class=\"date\">Type : {{result?.type}}<br></ion-text>\n          <ion-text class=\"date\"> Level : </ion-text>\n          <ion-text class=\"yellowtext\"> {{result?.level}}<br></ion-text>\n        </div>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n\n<!-- <footer> -->\n    <div class=\"white\"></div>\n    <ion-tab-bar class=\"foot\" slot=\"bottom\">\n        <ion-tab-button (click)=\"profile()\">\n            <ion-icon src=\"assets/user.svg\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button>\n            <ion-icon src=\"assets/email.svg\" (click)=\"language()\"></ion-icon>\n        </ion-tab-button>\n        <ion-tab-button>\n            <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" class=\"fab-button\" (click)=\"home()\">\n                <ion-fab-button>\n                    <ion-icon src=\"assets/home.svg\" (click)=\"home()\"></ion-icon>\n                </ion-fab-button>\n            </ion-fab>\n        </ion-tab-button>\n\n        <ion-tab-button>\n            <ion-icon src=\"assets/setting.svg\" (click)=\"settings()\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button>\n            <ion-icon src=\"assets/question.svg\" (click)=\"faq()\"></ion-icon>\n        </ion-tab-button>\n    </ion-tab-bar>\n\n\n<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\"\n    style=\"background-color: #194E78; margin-bottom: 7px; border-radius: 30px;\" (click)=\"home()\">\n    <ion-fab-button class=\"fab-button\">\n        <ion-icon name=\"home\"></ion-icon>\n    </ion-fab-button>\n</ion-fab>\n\n<!-- <\"footer\"> -->\n");

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
/* harmony import */ var _C_Users_ASUS_Moile_Installation_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_completemalfunction_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./completemalfunction.page.html */ 5811);
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
        this.malfunction_data = [
            {
                client_name: 'Shadab Khan',
                assigned_time: 'Sunday, 23-03-2020',
                status: 'New',
                type: 'Unidentified',
                level: 'Danger',
            },
            {
                client_name: 'Akbar Khan',
                assigned_time: 'Sunday, 23-03-2020',
                status: 'New',
                type: 'Unidentified',
                level: 'Danger',
            },
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
    malfunctionsDetails(id) {
        this.router.navigateByUrl('malfunctiondetails/' + id);
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
};
CompletemalfunctionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
CompletemalfunctionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-completemalfunction',
        template: _C_Users_ASUS_Moile_Installation_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_completemalfunction_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_completemalfunction_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CompletemalfunctionPage);



/***/ }),

/***/ 8850:
/*!*******************************************************************!*\
  !*** ./src/app/completemalfunction/completemalfunction.page.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".header {\n  height: 40px;\n  background-color: #194E78;\n  position: initial;\n}\n\n.bell {\n  margin-left: 0.5em;\n  position: absolute;\n  top: 8px;\n  left: 0.2em;\n  width: 21px;\n  height: 23px;\n}\n\n.logo {\n  position: absolute;\n  top: -4px;\n  right: 0px;\n  width: 66px;\n  height: 86px;\n}\n\nh1 {\n  text-decoration: underline;\n  color: #194E78;\n  font-weight: bold;\n  margin-top: 1em;\n}\n\n.flex-container {\n  justify-content: center;\n}\n\n.btn2 {\n  width: 14em;\n  background-color: #194E78;\n  border: #194E78;\n  font-size: 11px;\n  height: 3em;\n  border-radius: 0.5em;\n  color: white;\n}\n\n.btn1 {\n  width: 12em;\n  background-color: #F5F5F5;\n  color: #6E6E6E;\n  border: #6E6E6E;\n  font-size: 11px;\n  height: 3em;\n  border-radius: 0.5em;\n}\n\n.divider {\n  width: 0.7em;\n  height: auto;\n  display: inline-block;\n}\n\n.square {\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\n.h3 {\n  font-family: \"Roboto\";\n  font-size: 18px;\n  margin-top: 0.5em;\n  margin-left: 0em;\n  margin-bottom: 0em;\n  color: #194E78;\n  text-align: left;\n}\n\n.date {\n  color: #6E6E6E;\n  font-family: \"Roboto\";\n  font-size: 12px;\n  margin-top: 0em;\n  margin-left: 0em;\n  text-align: left;\n}\n\n.complain {\n  float: left;\n}\n\n.card {\n  background: #FCFCFC;\n  padding: 1em;\n  padding-top: 0.5em;\n  margin-top: 1.5em;\n  border: 2px solid #4F8B31;\n}\n\n@media only screen and (min-height: 1000px) {\n  .date {\n    color: #6E6E6E;\n    font-family: \"Roboto\";\n    font-size: 25px;\n    margin-top: 0em;\n    margin-left: 0em;\n    text-align: left;\n  }\n\n  .h3 {\n    font-family: \"Roboto\";\n    font-size: 30px;\n    margin-top: 0.5em;\n    margin-left: 0em;\n    margin-bottom: 0em;\n    color: #194E78;\n    text-align: left;\n  }\n}\n\n.white {\n  width: 100%;\n  height: 1.1em;\n}\n\n.foot {\n  background-color: #194E78;\n}\n\nion-tab-button {\n  background-color: #194E78;\n}\n\n.footer {\n  position: sticky;\n}\n\nion-icon {\n  color: white;\n  font-size: 30px;\n}\n\n.fab-button {\n  --background:#194E78;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXRlbWFsZnVuY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNGLHlCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHSjs7QUFERTtFQUNJLDBCQUFBO0VBQTJCLGNBQUE7RUFBaUIsaUJBQUE7RUFBa0IsZUFBQTtBQU9wRTs7QUFMRTtFQUNJLHVCQUFBO0FBUU47O0FBTkU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFTSjs7QUFORTtFQUNDLFdBQUE7RUFDQyx5QkFBQTtFQUNBLGNBQUE7RUFDQyxlQUFBO0VBQ0QsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQVNKOztBQUpFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQU9KOztBQUxJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQVFSOztBQU5JO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBU047O0FBUEk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFVUjs7QUFSSTtFQUNJLFdBQUE7QUFXUjs7QUFURTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQVlOOztBQVRPO0VBQ0E7SUFDTyxjQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUFZWjs7RUFWUTtJQUNJLHFCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQWFaO0FBQ0Y7O0FBVlE7RUFDTixXQUFBO0VBQ0EsYUFBQTtBQVlGOztBQVRBO0VBQ0MseUJBQUE7QUFZRDs7QUFWRTtFQUNFLHlCQUFBO0FBYUo7O0FBVkU7RUFDQSxnQkFBQTtBQWFGOztBQVhHO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFjTDs7QUFaRTtFQUNFLG9CQUFBO0FBZUoiLCJmaWxlIjoiY29tcGxldGVtYWxmdW5jdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTRFNzg7XHJcbiAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgfVxyXG4gIC5iZWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgbGVmdDogMC4yZW07XHJcbiAgICB3aWR0aDogMjFweDtcclxuICAgIGhlaWdodDogMjNweDtcclxuICB9XHJcbiAgLmxvZ297XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgO1xyXG4gICAgdG9wOiAtNHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgaGVpZ2h0OiA4NnB4O1xyXG4gIH1cclxuICBoMXtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7Y29sb3I6ICMxOTRFNzggOyBmb250LXdlaWdodDogYm9sZDttYXJnaW4tdG9wOiAxZW07XHJcbiAgfVxyXG4gIC5mbGV4LWNvbnRhaW5lcntcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5idG4ye1xyXG4gICAgd2lkdGg6IDE0ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk0RTc4O1xyXG4gICAgYm9yZGVyOiAjMTk0RTc4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAgIGNvbG9yOndoaXRlIDtcclxuXHJcbiAgfVxyXG4gIC5idG4xe1xyXG4gICB3aWR0aDogMTJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgICBjb2xvcjogIzZFNkU2RTtcclxuICAgICBib3JkZXI6ICM2RTZFNkU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG4gICBcclxuICAgXHJcbiAgIFxyXG4gIH1cclxuICAuZGl2aWRlcntcclxuICAgIHdpZHRoOiAwLjdlbTtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gICAgLnNxdWFyZXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgfVxyXG4gICAgLmgze1xyXG4gICAgICBmb250LWZhbWlseTonUm9ib3RvJztcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMGVtO1xyXG4gICAgICBjb2xvcjogIzE5NEU3ODtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgLmRhdGV7XHJcbiAgICAgICAgY29sb3I6ICM2RTZFNkU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6J1JvYm90byc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMGVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuY29tcGxhaW57XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgLmNhcmR7XHJcbiAgICAgIGJhY2tncm91bmQ6I0ZDRkNGQztcclxuICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjNEY4QjMxO1xyXG4gIH1cclxuICBcclxuICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDEwMDBweCkge1xyXG4gICAgICAgLmRhdGV7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM2RTZFNkU7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6J1JvYm90byc7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMGVtO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaDN7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6J1JvYm90byc7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwZW07XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMGVtO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMTk0RTc4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53aGl0ZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEuMWVtO1xyXG59XHJcblxyXG4uZm9vdHtcclxuIGJhY2tncm91bmQtY29sb3I6ICMxOTRFNzg7IFxyXG59XHJcbiAgaW9uLXRhYi1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk0RTc4O1xyXG5cclxuICAgfVxyXG4gIC5mb290ZXJ7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxufVxyXG4gICBpb24taWNvbntcclxuICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICB9XHJcbiAgLmZhYi1idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6IzE5NEU3ODtcclxuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_completemalfunction_completemalfunction_module_ts.js.map