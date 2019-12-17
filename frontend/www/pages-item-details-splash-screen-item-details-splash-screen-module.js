(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-splash-screen-item-details-splash-screen-module"],{

/***/ "./src/app/pages/item-details-splash-screen/item-details-splash-screen.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/item-details-splash-screen/item-details-splash-screen.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ItemDetailsSplashScreenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsSplashScreenPageModule", function() { return ItemDetailsSplashScreenPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_splash_screen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-details-splash-screen.page */ "./src/app/pages/item-details-splash-screen/item-details-splash-screen.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ItemDetailsSplashScreenPageModule = /** @class */ (function () {
    function ItemDetailsSplashScreenPageModule() {
    }
    ItemDetailsSplashScreenPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _item_details_splash_screen_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsSplashScreenPage"]
                    }
                ])
            ],
            declarations: [_item_details_splash_screen_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsSplashScreenPage"]],
            exports: [_item_details_splash_screen_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsSplashScreenPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ItemDetailsSplashScreenPageModule);
    return ItemDetailsSplashScreenPageModule;
}());



/***/ }),

/***/ "./src/app/pages/item-details-splash-screen/item-details-splash-screen.page.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/item-details-splash-screen/item-details-splash-screen.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <!-- Content-->\r\n  <ion-content>\r\n\r\n    <!-- Page 1 -->\r\n    <cs-splash-screen-layout-1\r\n      *ngIf=\"isType(0)\"\r\n      [data]=\"data\"\r\n      (onRedirect)=\"onRedirect($event)\">\r\n    </cs-splash-screen-layout-1>\r\n\r\n    <!-- Page 2 -->\r\n    <cs-splash-screen-layout-2\r\n      *ngIf=\"isType(1)\"\r\n      [data]=\"data\"\r\n      (onRedirect)=\"onRedirect($event)\">\r\n    </cs-splash-screen-layout-2>\r\n\r\n    <!-- Page 3 -->\r\n    <cs-splash-screen-layout-3\r\n      *ngIf=\"isType(2)\"\r\n      [data]=\"data\"\r\n      (onRedirect)=\"onRedirect($event)\">\r\n    </cs-splash-screen-layout-3>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n"

/***/ }),

/***/ "./src/app/pages/item-details-splash-screen/item-details-splash-screen.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/item-details-splash-screen/item-details-splash-screen.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1zcGxhc2gtc2NyZWVuL2l0ZW0tZGV0YWlscy1zcGxhc2gtc2NyZWVuLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/item-details-splash-screen/item-details-splash-screen.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/item-details-splash-screen/item-details-splash-screen.page.ts ***!
  \*************************************************************************************/
/*! exports provided: ItemDetailsSplashScreenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsSplashScreenPage", function() { return ItemDetailsSplashScreenPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/splash-screen-service */ "./src/app/services/splash-screen-service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast-service */ "./src/app/services/toast-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemDetailsSplashScreenPage = /** @class */ (function () {
    function ItemDetailsSplashScreenPage(navCtrl, service, toastCtrl, route) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.data = {};
        this.type = this.route.snapshot.paramMap.get('type');
        this.service.load(service.getAllThemes()[this.type]).subscribe(function (d) {
            _this.data = d;
        });
    }
    ItemDetailsSplashScreenPage.prototype.isType = function (item) {
        return item === parseInt(this.type, 10);
    };
    // events
    ItemDetailsSplashScreenPage.prototype.onRedirect = function () {
        this.navCtrl.back();
    };
    ItemDetailsSplashScreenPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./item-details-splash-screen.page.html */ "./src/app/pages/item-details-splash-screen/item-details-splash-screen.page.html"),
            providers: [_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_3__["SplashScreenService"]],
            styles: [__webpack_require__(/*! ./item-details-splash-screen.page.scss */ "./src/app/pages/item-details-splash-screen/item-details-splash-screen.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_3__["SplashScreenService"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ItemDetailsSplashScreenPage);
    return ItemDetailsSplashScreenPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-item-details-splash-screen-item-details-splash-screen-module.js.map