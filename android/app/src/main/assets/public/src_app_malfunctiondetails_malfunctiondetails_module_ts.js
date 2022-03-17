"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_malfunctiondetails_malfunctiondetails_module_ts"],{

/***/ 4625:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/malfunctiondetails/malfunctiondetails.page.html ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Select</title>\n</head>\n<ion-header class=\"header\">\n  <!-- <ion-navbar class=\"navbar\"> -->\n  <ion-title>\n    <ion-icon src=\"../../assets/notification-bell.svg\" (click)=\"notifications()\" class=\"bell\">\n    </ion-icon>\n    <div class=\"ion-text-right\">\n      <img src=\"../../assets/top-right-logo.svg\" class=\"logo\">\n    </div>\n  </ion-title>\n  <!-- </ion-navbar> -->\n</ion-header>\n<ion-content overflow-scroll=\"true\">\n  <div class=\"container\">\n    <h1 class=\"ion-text-center\">Malfunction Details</h1>\n    <ion-text class=\"date\">Sunday, 23-03-2020<br></ion-text>\n    <h6 class=\"client\">Client : Ahmad Gul</h6>\n    <hr class=\"hr\">\n    <h6 class=\"client\">Lifts Number : 6</h6>\n    <hr class=\"hr\">\n    <h6 class=\"client\">City : Dubai</h6>\n    <hr class=\"hr\">\n    <h6 class=\"client\">Address : World Trade Center Building</h6>\n    <hr class=\"hr\">\n    <h6 class=\"client\">Location</h6>\n    <ion-icon src=\"../../assets/eye_icon.svg\" class=\"eye\" (click)=\"map()\" ></ion-icon>\n    <ion-text class=\"date\">Latitude: 33° 43' 17.33\" N Longitude: 33° 43' 17.33\" N <br></ion-text>\n    <hr class=\"hr\">\n    <h6 class=\"client\">Number of lift stops : 06</h6>\n    <hr class=\"hr\">\n    <h6 class=\"client\">Malfunction type</h6>\n    <!-- <ion-card class=\"select-card\"> -->\n    <select class=\"form-select form-select-sm\" aria-label=\".form-select-sm example\">\n      <!-- <option disabled selected hidden style=\"color:   #DCDCDC;\">Select City</option> -->\n      <option value=\"electrical\" class=\"options\">Electrical</option>\n      <option value=\"mechanical\" class=\"options\">Mechanical</option>\n      <option value=\"other\" class=\"options\">Other Type</option>\n      <option value=\"someother\" class=\"options\">Some Other Type</option>\n    </select>\n    <!-- </ion-card> -->\n    <h6 class=\"client\">Complain Notes</h6>\n    <ion-text class=\"date\">Orci varius natoque penatibus et magnis dis parturient<br></ion-text>\n    <hr class=\"hr\">\n    <h6 class=\"client\">Malfunction Level</h6>\n    <!-- <ion-card class=\"select-card\"> -->\n    <div class=\"notIE\">\n      <!-- <![endif]-->\n      <span class=\"fancyArrow\"></span>\n      <select class=\"form-select form-select-sm\" aria-label=\".form-select-sm example\">\n        <option class=\"apple\">Apples</option>\n        <option class=\"apple\">Pineapples</option>\n        <option class=\"Chocklate\" selected>Danger</option>\n        <option class=\"Pancakes\">Pancakes</option>\n      </select>\n      <!--[if !IE]> -->\n    </div>\n    <!-- </ion-card> -->\n    <h6 class=\"client\">Malfunction Notes</h6>\n    <ion-card class=\"card-detailed\">\n      <!-- <ion-textarea placeholder=\"Please input detail!\" class=\"textarea\"></ion-textarea> -->\n      <textarea class=\"native-textarea sc-ion-textarea-ios\" id=\"textarea\"></textarea>\n    </ion-card>\n    <h6 class=\"client\">Malfunction Status</h6>\n    <!-- <ion-card class=\"select-card\"> -->\n    <select class=\"form-select form-select-sm\" aria-label=\".form-select-sm example\">\n      <!-- <option disabled selected hidden style=\"color:   #DCDCDC;\">Select City</option> -->\n      <option value=\"electrical\" class=\"options\">Electrical</option>\n      <option value=\"mechanical\" class=\"options\">Mechanical</option>\n      <option value=\"other\" class=\"options\">Other Type</option>\n      <option value=\"someother\" class=\"options\">Some Other Type</option>\n    </select>\n    <h6 class=\"client\">Malfunction Level</h6>\n    <!-- </ion-card> -->\n    <div class=\"square\">\n      <ion-text class=\"price\">1750 Riyals<br></ion-text>\n      <div class=\"ion-text-center\">\n        <div class=\"flex-container\">\n          <button type=\"button\" class=\"btn btn-outline-primary btn-sm\">Resend</button>\n          <div class=\"divider\"></div>\n          <button type=\"button\" class=\"btn btn-outline-primary btn-sm\" (click)=\"malfunctionupdate()\" >Update</button>\n        </div>\n      </div>\n      <br>\n    </div>\n    <div class=\"ion-text-center\">\n      <div class=\"flex-container\">\n        <button type=\"button\" class=\"btn btn-primary\" id=\"language\" (click)=\"malfunctionupdate()\">Update</button>\n        <div class=\"divider\"></div>\n        <button type=\"button\" class=\"btn btn-secondary\" id=\"language\" (click)=\"back()\">Back</button>\n      </div>\n    </div>\n  </div>\n  <br>\n<br>\n</ion-content>");

/***/ }),

/***/ 3533:
/*!*************************************************************************!*\
  !*** ./src/app/malfunctiondetails/malfunctiondetails-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MalfunctiondetailsPageRoutingModule": () => (/* binding */ MalfunctiondetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _malfunctiondetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./malfunctiondetails.page */ 2346);




const routes = [
    {
        path: '',
        component: _malfunctiondetails_page__WEBPACK_IMPORTED_MODULE_0__.MalfunctiondetailsPage
    }
];
let MalfunctiondetailsPageRoutingModule = class MalfunctiondetailsPageRoutingModule {
};
MalfunctiondetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MalfunctiondetailsPageRoutingModule);



/***/ }),

/***/ 1054:
/*!*****************************************************************!*\
  !*** ./src/app/malfunctiondetails/malfunctiondetails.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MalfunctiondetailsPageModule": () => (/* binding */ MalfunctiondetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _malfunctiondetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./malfunctiondetails-routing.module */ 3533);
/* harmony import */ var _malfunctiondetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./malfunctiondetails.page */ 2346);







let MalfunctiondetailsPageModule = class MalfunctiondetailsPageModule {
};
MalfunctiondetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _malfunctiondetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.MalfunctiondetailsPageRoutingModule
        ],
        declarations: [_malfunctiondetails_page__WEBPACK_IMPORTED_MODULE_1__.MalfunctiondetailsPage]
    })
], MalfunctiondetailsPageModule);



/***/ }),

/***/ 2346:
/*!***************************************************************!*\
  !*** ./src/app/malfunctiondetails/malfunctiondetails.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MalfunctiondetailsPage": () => (/* binding */ MalfunctiondetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_Aneeza_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_malfunctiondetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./malfunctiondetails.page.html */ 4625);
/* harmony import */ var _malfunctiondetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./malfunctiondetails.page.scss */ 2682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _map_map_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map/map.page */ 2638);



/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/type-annotation-spacing */




let MalfunctiondetailsPage = class MalfunctiondetailsPage {
    constructor(router, modalController, activatedRoute, platform) {
        this.router = router;
        this.modalController = modalController;
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
            this.router.navigateByUrl('../completemalfunction');
        });
    }
    malfunctionupdate() {
        this.router.navigateByUrl('update-malfunction');
    }
    back() {
        this.router.navigateByUrl('completemalfunction');
    }
    map() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('map popup');
            const modal = yield this.modalController.create({
                component: _map_map_page__WEBPACK_IMPORTED_MODULE_2__.MapPage,
                cssClass: 'map'
            });
            return yield modal.present();
        });
    }
};
MalfunctiondetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform }
];
MalfunctiondetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-malfunctiondetails',
        template: _C_Users_Aneeza_mobile_installation_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_malfunctiondetails_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_malfunctiondetails_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MalfunctiondetailsPage);



/***/ }),

/***/ 2682:
/*!*****************************************************************!*\
  !*** ./src/app/malfunctiondetails/malfunctiondetails.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900);\n.header {\n  height: 40px;\n  background-color: #194E78;\n  position: initial;\n}\n.bell {\n  margin-left: 0.5em;\n  position: absolute;\n  top: 5px;\n  left: 0.5em;\n  width: 24px;\n  height: 30px;\n}\n.logo {\n  position: absolute;\n  top: -4px;\n  right: 0px;\n  width: 66px;\n  height: 86px;\n}\n.container {\n  margin-left: 0.5em;\n  margin-left: 0.5em;\n}\nh1 {\n  text-decoration: underline;\n  color: #194E78;\n  font-weight: bold;\n  margin-top: 1em;\n}\n.buttondiv {\n  float: right;\n  margin-right: 2em;\n}\n.editbutton {\n  width: 65px;\n  height: 25px;\n  --background: #194E78;\n}\n.date {\n  font-size: 12px;\n  color: #6E6E6E;\n  margin-left: -0.5em;\n}\n.price {\n  font-size: 12px;\n  color: #6E6E6E;\n  margin-left: 0.5em;\n}\n.client {\n  font-size: 20px;\n  font-family: \"Roboto\";\n  color: #194E78;\n  margin-top: 0.5em;\n  margin-left: -0.4em;\n}\n.hr {\n  width: 94%;\n}\n.flex-container {\n  margin-top: 1em;\n}\n.eye {\n  float: right;\n  height: 19px;\n  width: 33px;\n  margin-right: 0.5em;\n}\n.card-detailed {\n  margin-left: -0.5em;\n  margin-right: 0.5em;\n  height: 3em;\n}\n.select-card {\n  margin-left: 0em;\n}\n#textarea {\n  height: 100%;\n  width: 100%;\n  border: 0px;\n  padding-top: 1em;\n  padding-left: 1em;\n}\n.options {\n  color: #194E78;\n  font-size: 12px;\n}\n.rightcolbrown {\n  border-radius: 100px;\n  height: 21px;\n  width: 21px;\n  background-color: #7A0001;\n  display: inline-block;\n}\n.notIE {\n  position: relative;\n}\n.notIE .fancyArrow {\n  content: \"\";\n  width: 13px;\n  height: 13px;\n  border-radius: 100%;\n  position: absolute;\n  box-sizing: content-box;\n  left: 90px;\n  top: 15px;\n  background: #d0393e;\n  z-index: 2;\n}\n.form-select-sm {\n  color: #6E6E6E;\n  height: 3em;\n  width: -webkit-fill-available;\n  margin-left: -0.5em;\n  margin-right: 0.5em;\n}\nselect {\n  width: 13em;\n  background: #F5F5F5;\n  overflow: hidden;\n}\n.square {\n  margin-left: -0.5em;\n  margin-right: 1em;\n  border: 1px solid #EBEBEB;\n}\n.btn-outline-primary {\n  border-radius: 10em;\n  color: #194E78;\n  border-color: #194E78;\n  width: 6em;\n}\n.btn-primary {\n  background-color: #194E78;\n  width: 7em;\n  border-color: #194E78;\n  border-radius: 0.3em;\n}\n.btn-secondary {\n  background-color: #6E6E6E;\n  width: 7em;\n  border-radius: 0.3em;\n}\n.divider {\n  width: 1em;\n  height: auto;\n  display: inline-block;\n}\n::ng-deep .map {\n  height: 20em !important;\n  top: 150px;\n  width: 20em;\n  margin-left: 40px;\n  margin-right: 40px;\n  border-radius: 5px;\n  bottom: 50px;\n  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);\n  --backdrop-opacity: var(--ion-backdrop-opacity, 0.32);\n  size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbGZ1bmN0aW9uZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQVIsZ0pBQUE7QUFFUjtFQUNJLFlBQUE7RUFDRix5QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDRTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUY7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdKO0FBREU7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBSU47QUFGRTtFQUNJLDBCQUFBO0VBQTJCLGNBQUE7RUFBaUIsaUJBQUE7RUFBa0IsZUFBQTtBQVFwRTtBQU5FO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBU0o7QUFQRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFVSjtBQVJFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVdKO0FBVEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBWUo7QUFWQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBYUo7QUFYQTtFQUNJLFVBQUE7QUFjSjtBQVpBO0VBQ0ksZUFBQTtBQWVKO0FBYkE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQWdCQTtBQWRBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFpQko7QUFmRTtFQUNGLGdCQUFBO0FBa0JBO0FBZkM7RUFDRyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBa0JKO0FBZks7RUFDRyxjQUFBO0VBQ0EsZUFBQTtBQWtCUjtBQWhCTztFQUNDLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBbUJSO0FBaEJJO0VBQ0ksa0JBQUE7QUFtQlI7QUFqQk07RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQW9CVjtBQWpCTztFQUNDLGNBQUE7RUFDQyxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBb0JUO0FBakJNO0VBQ0csV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFvQlQ7QUFsQk07RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFxQlI7QUFuQkk7RUFDSixtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFzQkE7QUFwQkE7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNFLG9CQUFBO0FBdUJOO0FBcEJBO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUF1Qko7QUFyQkE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBd0JKO0FBckJBO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0UsV0FBQTtFQUNGLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDRCw0Q0FBQTtFQUNBLHFEQUFBO0VBQ0EsVUFBQTtBQXdCRiIsImZpbGUiOiJtYWxmdW5jdGlvbmRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCwxMDAsMTAwaXRhbGljLDMwMCwzMDBpdGHigIzigItsaWMsNDAwaXRhbGljLDUwMCw1MDBpdGFsaWMsNzAwLDcwMGl0YWxpYyw5MDBpdGFsaWMsOTAwKTtcbi5oZWFkZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTRFNzg7XG4gIHBvc2l0aW9uOiBpbml0aWFsO1xufVxuXG4uYmVsbCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogMC41ZW07XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHdpZHRoOiA2NnB4O1xuICBoZWlnaHQ6IDg2cHg7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cblxuaDEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICMxOTRFNzg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5idXR0b25kaXYge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG4uZWRpdGJ1dHRvbiB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIC0tYmFja2dyb3VuZDogIzE5NEU3ODtcbn1cblxuLmRhdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNkU2RTZFO1xuICBtYXJnaW4tbGVmdDogLTAuNWVtO1xufVxuXG4ucHJpY2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNkU2RTZFO1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG59XG5cbi5jbGllbnQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBjb2xvcjogIzE5NEU3ODtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG4gIG1hcmdpbi1sZWZ0OiAtMC40ZW07XG59XG5cbi5ociB7XG4gIHdpZHRoOiA5NCU7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLmV5ZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAxOXB4O1xuICB3aWR0aDogMzNweDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cblxuLmNhcmQtZGV0YWlsZWQge1xuICBtYXJnaW4tbGVmdDogLTAuNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICBoZWlnaHQ6IDNlbTtcbn1cblxuLnNlbGVjdC1jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDBlbTtcbn1cblxuI3RleHRhcmVhIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIHBhZGRpbmctbGVmdDogMWVtO1xufVxuXG4ub3B0aW9ucyB7XG4gIGNvbG9yOiAjMTk0RTc4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5yaWdodGNvbGJyb3duIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGhlaWdodDogMjFweDtcbiAgd2lkdGg6IDIxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3QTAwMDE7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm5vdElFIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubm90SUUgLmZhbmN5QXJyb3cge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBsZWZ0OiA5MHB4O1xuICB0b3A6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNkMDM5M2U7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5mb3JtLXNlbGVjdC1zbSB7XG4gIGNvbG9yOiAjNkU2RTZFO1xuICBoZWlnaHQ6IDNlbTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIG1hcmdpbi1sZWZ0OiAtMC41ZW07XG4gIG1hcmdpbi1yaWdodDogMC41ZW07XG59XG5cbnNlbGVjdCB7XG4gIHdpZHRoOiAxM2VtO1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3F1YXJlIHtcbiAgbWFyZ2luLWxlZnQ6IC0wLjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUI7XG59XG5cbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcbiAgYm9yZGVyLXJhZGl1czogMTBlbTtcbiAgY29sb3I6ICMxOTRFNzg7XG4gIGJvcmRlci1jb2xvcjogIzE5NEU3ODtcbiAgd2lkdGg6IDZlbTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NEU3ODtcbiAgd2lkdGg6IDdlbTtcbiAgYm9yZGVyLWNvbG9yOiAjMTk0RTc4O1xuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkU2RTZFO1xuICB3aWR0aDogN2VtO1xuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbn1cblxuLmRpdmlkZXIge1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuOjpuZy1kZWVwIC5tYXAge1xuICBoZWlnaHQ6IDIwZW0gIWltcG9ydGFudDtcbiAgdG9wOiAxNTBweDtcbiAgd2lkdGg6IDIwZW07XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm90dG9tOiA1MHB4O1xuICAtLWJveC1zaGFkb3c6IDAgMjhweCA0OHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLS1iYWNrZHJvcC1vcGFjaXR5OiB2YXIoLS1pb24tYmFja2Ryb3Atb3BhY2l0eSwgMC4zMik7XG4gIHNpemU6IDIwcHg7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_malfunctiondetails_malfunctiondetails_module_ts.js.map