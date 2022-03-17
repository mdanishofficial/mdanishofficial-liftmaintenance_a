"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_update-malfunction_update-malfunction_module_ts"],{

/***/ 8793:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/update-malfunction/update-malfunction.page.html ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Select</title>\n</head>\n<ion-header class=\"header\">\n  <!-- <ion-navbar class=\"navbar\"> -->\n  <ion-title>\n    <ion-icon src=\"../../assets/notification-bell.svg\" (click)=\"notifications()\" class=\"bell\">\n    </ion-icon>\n    <div class=\"ion-text-right\">\n      <img src=\"../../assets/top-right-logo.svg\" class=\"logo\">\n    </div>\n  </ion-title>\n  <!-- </ion-navbar> -->\n</ion-header>\n<ion-content overflow-scroll=\"true\">\n  <div class=\"container\">\n    <h1 class=\"ion-text-center\">Malfunction Details</h1>\n    <ion-text class=\"date\">Sunday, 23-03-2020<br></ion-text>\n    <h6 class=\"client\">Client : Ahmad Gul</h6>\n    <hr class=\"hr\">\n    <h6 class=\"client\">Lifts Number : 6</h6>\n    <hr class=\"hr\">\n    <h6 class=\"client\">City : Dubai</h6>\n    <hr class=\"hr\">\n    <h6 class=\"client\">Address : World Trade Center Building</h6>\n    <hr class=\"hr\">\n    <h6 class=\"client\">Location</h6>\n    <ion-icon src=\"../../assets/eye_icon.svg\" class=\"eye\" (click)=\"map()\"></ion-icon>\n    <ion-text class=\"date\">Latitude: 33° 43' 17.33\" N Longitude: 33° 43' 17.33\" N <br></ion-text>\n    <hr class=\"hr\">\n    <h6 class=\"client\">Number of lift stops : 06</h6>\n    <hr class=\"hr\">\n    <h6 class=\"client\">Malfunction type</h6>\n    <!-- <ion-card class=\"select-card\"> -->\n    <select class=\"form-select form-select-sm\" aria-label=\".form-select-sm example\">\n      <!-- <option disabled selected hidden style=\"color:   #DCDCDC;\">Select City</option> -->\n      <option value=\"electrical\" class=\"options\">Electrical</option>\n      <option value=\"mechanical\" class=\"options\">Mechanical</option>\n      <option value=\"other\" class=\"options\">Other Type</option>\n      <option value=\"someother\" class=\"options\">Some Other Type</option>\n    </select>\n    <!-- </ion-card> -->\n    <h6 class=\"client\">Complain Notes</h6>\n    <ion-text class=\"date\">Orci varius natoque penatibus et magnis dis parturient<br></ion-text>\n    <hr class=\"hr\">\n    <h6 class=\"client\">Malfunction Level</h6>\n    <!-- <ion-card class=\"select-card\"> -->\n    <div class=\"notIE\">\n      <!-- <![endif]-->\n      <span class=\"fancyArrow\"></span>\n      <select class=\"form-select form-select-sm\" aria-label=\".form-select-sm example\">\n        <option class=\"apple\">Apples</option>\n        <option class=\"apple\">Pineapples</option>\n        <option class=\"Chocklate\" selected>Danger</option>\n        <option class=\"Pancakes\">Pancakes</option>\n      </select>\n      <!--[if !IE]> -->\n    </div>\n    <!-- </ion-card> -->\n    <h6 class=\"client\">Malfunction Notes</h6>\n    <ion-card class=\"card-detailed\">\n      <!-- <ion-textarea placeholder=\"Please input detail!\" class=\"textarea\"></ion-textarea> -->\n      <textarea class=\"native-textarea sc-ion-textarea-ios\" id=\"textarea\"></textarea>\n    </ion-card>\n    <h6 class=\"client\">Malfunction Status</h6>\n    <!-- <ion-card class=\"select-card\"> -->\n    <select class=\"form-select form-select-sm\" aria-label=\".form-select-sm example\">\n      <!-- <option disabled selected hidden style=\"color:   #DCDCDC;\">Select City</option> -->\n      <option value=\"electrical\" class=\"options\">Electrical</option>\n      <option value=\"mechanical\" class=\"options\">Mechanical</option>\n      <option value=\"other\" class=\"options\">Other Type</option>\n      <option value=\"someother\" class=\"options\">Some Other Type</option>\n    </select>\n    <h6 class=\"client\">Malfunction Level</h6>\n    <!-- </ion-card> -->\n    <div class=\"square\">\n      <ion-text class=\"price\">1750 Riyals<br></ion-text>\n      <br>\n    </div>\n    <div class=\"ion-text-center\">\n      <button type=\"button\" class=\"btn btn-secondary\" id=\"language\" (click)=\"back()\">Back</button>\n    </div>\n  </div>\n  &nbsp;\n  &nbsp;\n</ion-content>");

/***/ }),

/***/ 7877:
/*!*************************************************************************!*\
  !*** ./src/app/update-malfunction/update-malfunction-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateMalfunctionPageRoutingModule": () => (/* binding */ UpdateMalfunctionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _update_malfunction_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-malfunction.page */ 5597);




const routes = [
    {
        path: '',
        component: _update_malfunction_page__WEBPACK_IMPORTED_MODULE_0__.UpdateMalfunctionPage
    }
];
let UpdateMalfunctionPageRoutingModule = class UpdateMalfunctionPageRoutingModule {
};
UpdateMalfunctionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateMalfunctionPageRoutingModule);



/***/ }),

/***/ 9961:
/*!*****************************************************************!*\
  !*** ./src/app/update-malfunction/update-malfunction.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateMalfunctionPageModule": () => (/* binding */ UpdateMalfunctionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _update_malfunction_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-malfunction-routing.module */ 7877);
/* harmony import */ var _update_malfunction_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-malfunction.page */ 5597);







let UpdateMalfunctionPageModule = class UpdateMalfunctionPageModule {
};
UpdateMalfunctionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _update_malfunction_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateMalfunctionPageRoutingModule
        ],
        declarations: [_update_malfunction_page__WEBPACK_IMPORTED_MODULE_1__.UpdateMalfunctionPage]
    })
], UpdateMalfunctionPageModule);



/***/ }),

/***/ 5597:
/*!***************************************************************!*\
  !*** ./src/app/update-malfunction/update-malfunction.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateMalfunctionPage": () => (/* binding */ UpdateMalfunctionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_Aneeza_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_update_malfunction_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./update-malfunction.page.html */ 8793);
/* harmony import */ var _update_malfunction_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-malfunction.page.scss */ 8677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8058);



/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/type-annotation-spacing */



let UpdateMalfunctionPage = class UpdateMalfunctionPage {
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
            this.router.navigateByUrl('../malfunctiondetails');
        });
    }
    back() {
        this.router.navigateByUrl('malfunctiondetails');
    }
    map() {
        this.router.navigateByUrl('map');
    }
};
UpdateMalfunctionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
UpdateMalfunctionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-update-malfunction',
        template: _C_Users_Aneeza_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_update_malfunction_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_update_malfunction_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdateMalfunctionPage);



/***/ }),

/***/ 8677:
/*!*****************************************************************!*\
  !*** ./src/app/update-malfunction/update-malfunction.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900);\n.header {\n  height: 40px;\n  background-color: #194E78;\n  position: initial;\n}\n.bell {\n  margin-left: 0.5em;\n  position: absolute;\n  top: 5px;\n  left: 0.5em;\n  width: 24px;\n  height: 30px;\n}\n.logo {\n  position: absolute;\n  top: -4px;\n  right: 0px;\n  width: 66px;\n  height: 86px;\n}\n.container {\n  margin-left: 0.5em;\n  margin-left: 0.5em;\n}\nh1 {\n  text-decoration: underline;\n  color: #194E78;\n  font-weight: bold;\n  margin-top: 1em;\n}\n.buttondiv {\n  float: right;\n  margin-right: 2em;\n}\n.editbutton {\n  width: 65px;\n  height: 25px;\n  --background: #194E78;\n}\n.date {\n  font-size: 12px;\n  color: #6E6E6E;\n  margin-left: -0.5em;\n}\n.price {\n  font-size: 12px;\n  color: #6E6E6E;\n  margin-left: 0.5em;\n}\n.client {\n  font-size: 20px;\n  font-family: \"Roboto\";\n  color: #194E78;\n  margin-top: 0.5em;\n  margin-left: -0.4em;\n}\n.hr {\n  width: 94%;\n}\n.flex-container {\n  margin-top: 1em;\n}\n.eye {\n  float: right;\n  height: 19px;\n  width: 33px;\n  margin-right: 0.5em;\n}\n.card-detailed {\n  margin-left: -0.5em;\n  margin-right: 0.5em;\n  height: 3em;\n}\n.select-card {\n  margin-left: 0em;\n}\n#textarea {\n  height: 100%;\n  width: 100%;\n  border: 0px;\n  padding-top: 1em;\n  padding-left: 1em;\n  background: #F5F5F5;\n}\n.options {\n  color: #194E78;\n  font-size: 12px;\n}\n.rightcolbrown {\n  border-radius: 100px;\n  height: 21px;\n  width: 21px;\n  background-color: #7A0001;\n  display: inline-block;\n}\n.notIE {\n  position: relative;\n}\n.notIE .fancyArrow {\n  content: \"\";\n  width: 13px;\n  height: 13px;\n  border-radius: 100%;\n  position: absolute;\n  box-sizing: content-box;\n  left: 90px;\n  top: 15px;\n  background: #d0393e;\n  z-index: 2;\n}\n.form-select-sm {\n  color: #6E6E6E;\n  height: 3em;\n  width: -webkit-fill-available;\n  margin-left: -0.5em;\n  margin-right: 0.5em;\n  background: #F5F5F5;\n}\n.square {\n  margin-left: -0.5em;\n  margin-right: 1em;\n  border: 1px solid #EBEBEB;\n}\n.btn-secondary {\n  background-color: #6E6E6E;\n  width: 8em;\n  margin-top: 1em;\n  border-radius: 0.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1tYWxmdW5jdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQVIsZ0pBQUE7QUFDUjtFQUNJLFlBQUE7RUFDRix5QkFBQTtFQUNBLGlCQUFBO0FBRUY7QUFBRTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR0Y7QUFERTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUlKO0FBRkU7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBS047QUFIRTtFQUNJLDBCQUFBO0VBQTJCLGNBQUE7RUFBaUIsaUJBQUE7RUFBa0IsZUFBQTtBQVNwRTtBQVBFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBVUo7QUFSRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFXSjtBQVRFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVlKO0FBVkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBYUo7QUFYQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBY0o7QUFaQTtFQUNJLFVBQUE7QUFlSjtBQWJBO0VBQ0ksZUFBQTtBQWdCSjtBQWRBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFpQkE7QUFmQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBa0JKO0FBaEJFO0VBQ0YsZ0JBQUE7QUFtQkE7QUFoQkM7RUFDRyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFtQko7QUFoQks7RUFDRyxjQUFBO0VBQ0EsZUFBQTtBQW1CUjtBQWpCTztFQUNDLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBb0JSO0FBakJJO0VBQ0ksa0JBQUE7QUFvQlI7QUFsQk07RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQXFCVjtBQWxCTztFQUNDLGNBQUE7RUFDQyxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFxQlQ7QUFuQk07RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFzQlI7QUFwQkU7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUF1QkoiLCJmaWxlIjoidXBkYXRlLW1hbGZ1bmN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBpbXBvcnQgdXJsKGh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsMTAwLDEwMGl0YWxpYywzMDAsMzAwaXRh4oCM4oCLbGljLDQwMGl0YWxpYyw1MDAsNTAwaXRhbGljLDcwMCw3MDBpdGFsaWMsOTAwaXRhbGljLDkwMCk7XG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk0RTc4O1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbn1cblxuLmJlbGwge1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDAuNWVtO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICByaWdodDogMHB4O1xuICB3aWR0aDogNjZweDtcbiAgaGVpZ2h0OiA4NnB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG59XG5cbmgxIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjMTk0RTc4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4uYnV0dG9uZGl2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbn1cblxuLmVkaXRidXR0b24ge1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICAtLWJhY2tncm91bmQ6ICMxOTRFNzg7XG59XG5cbi5kYXRlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzZFNkU2RTtcbiAgbWFyZ2luLWxlZnQ6IC0wLjVlbTtcbn1cblxuLnByaWNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzZFNkU2RTtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xufVxuXG4uY2xpZW50IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgY29sb3I6ICMxOTRFNzg7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xuICBtYXJnaW4tbGVmdDogLTAuNGVtO1xufVxuXG4uaHIge1xuICB3aWR0aDogOTQlO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5leWUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogMTlweDtcbiAgd2lkdGg6IDMzcHg7XG4gIG1hcmdpbi1yaWdodDogMC41ZW07XG59XG5cbi5jYXJkLWRldGFpbGVkIHtcbiAgbWFyZ2luLWxlZnQ6IC0wLjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgaGVpZ2h0OiAzZW07XG59XG5cbi5zZWxlY3QtY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAwZW07XG59XG5cbiN0ZXh0YXJlYSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMHB4O1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbn1cblxuLm9wdGlvbnMge1xuICBjb2xvcjogIzE5NEU3ODtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucmlnaHRjb2xicm93biB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIHdpZHRoOiAyMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0EwMDAxO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5ub3RJRSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5vdElFIC5mYW5jeUFycm93IHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgbGVmdDogOTBweDtcbiAgdG9wOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZDAzOTNlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uZm9ybS1zZWxlY3Qtc20ge1xuICBjb2xvcjogIzZFNkU2RTtcbiAgaGVpZ2h0OiAzZW07XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBtYXJnaW4tbGVmdDogLTAuNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xufVxuXG4uc3F1YXJlIHtcbiAgbWFyZ2luLWxlZnQ6IC0wLjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUI7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZFNkU2RTtcbiAgd2lkdGg6IDhlbTtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBib3JkZXItcmFkaXVzOiAwLjdlbTtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_update-malfunction_update-malfunction_module_ts.js.map