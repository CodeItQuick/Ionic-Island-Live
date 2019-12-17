(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-login-item-details-login-module"],{

/***/ "./src/app/pages/item-details-login/item-details-login.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/item-details-login/item-details-login.module.ts ***!
  \***********************************************************************/
/*! exports provided: ItemDetailsLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsLoginPageModule", function() { return ItemDetailsLoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-details-login.page */ "./src/app/pages/item-details-login/item-details-login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ItemDetailsLoginPageModule = /** @class */ (function () {
    function ItemDetailsLoginPageModule() {
    }
    ItemDetailsLoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _item_details_login_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsLoginPage"]
                    }
                ])
            ],
            declarations: [_item_details_login_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsLoginPage"]],
            exports: [_item_details_login_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsLoginPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ItemDetailsLoginPageModule);
    return ItemDetailsLoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/item-details-login/item-details-login.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/item-details-login/item-details-login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <!-- PAGE 1-->\r\n  <cs-login-layout-1\r\n    *ngIf=\"isType(0)\"\r\n    [data]=\"data\"\r\n    (onLogin)=\"onLogin($event)\"\r\n    (onRegister)=\"onRegister($event)\"\r\n    (onSkip)=\"onSkip($event)\"\r\n    (onFacebook)=\"onFacebook($event)\"\r\n    (onTwitter)=\"onTwitter($event)\"\r\n    (onGoogle)=\"onGoogle($event)\"\r\n    (onPinterest)=\"onPinterest($event)\">\r\n  </cs-login-layout-1>\r\n\r\n  <!-- PAGE 2-->\r\n  <cs-login-layout-2\r\n    *ngIf=\"isType(1)\"\r\n    [data]=\"data\"\r\n    (onLogin)=\"onLogin($event)\"\r\n    (onRegister)=\"onRegister($event)\"\r\n    (onSkip)=\"onSkip($event)\"\r\n    (onFacebook)=\"onFacebook($event)\"\r\n    (onTwitter)=\"onTwitter($event)\"\r\n    (onGoogle)=\"onGoogle($event)\"\r\n    (onPinterest)=\"onPinterest($event)\">\r\n  </cs-login-layout-2>\r\n\r\n</ion-app>\r\n"

/***/ }),

/***/ "./src/app/pages/item-details-login/item-details-login.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/item-details-login/item-details-login.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1sb2dpbi9pdGVtLWRldGFpbHMtbG9naW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/item-details-login/item-details-login.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/item-details-login/item-details-login.page.ts ***!
  \*********************************************************************/
/*! exports provided: ItemDetailsLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsLoginPage", function() { return ItemDetailsLoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login-service */ "./src/app/services/login-service.ts");
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





var ItemDetailsLoginPage = /** @class */ (function () {
    function ItemDetailsLoginPage(navCtrl, service, toastCtrl, route) {
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
    ItemDetailsLoginPage.prototype.isType = function (item) {
        return item === parseInt(this.type, 10);
    };
    // events
    ItemDetailsLoginPage.prototype.onLogin = function (params) {
        this.toastCtrl.presentToast('onLogin:' + JSON.stringify(params));
    };
    ItemDetailsLoginPage.prototype.onRegister = function (params) {
        this.toastCtrl.presentToast('onRegister:' + JSON.stringify(params));
    };
    ItemDetailsLoginPage.prototype.onSkip = function () {
        this.toastCtrl.presentToast('onSkip');
    };
    ItemDetailsLoginPage.prototype.onFacebook = function (params) {
        this.toastCtrl.presentToast('onFacebook:' + JSON.stringify(params));
    };
    ItemDetailsLoginPage.prototype.onTwitter = function (params) {
        this.toastCtrl.presentToast('onTwitter:' + JSON.stringify(params));
    };
    ItemDetailsLoginPage.prototype.onGoogle = function (params) {
        this.toastCtrl.presentToast('onGoogle:' + JSON.stringify(params));
    };
    ItemDetailsLoginPage.prototype.onPinterest = function (params) {
        this.toastCtrl.presentToast('onPinterest:' + JSON.stringify(params));
    };
    ItemDetailsLoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./item-details-login.page.html */ "./src/app/pages/item-details-login/item-details-login.page.html"),
            providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]],
            styles: [__webpack_require__(/*! ./item-details-login.page.scss */ "./src/app/pages/item-details-login/item-details-login.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ItemDetailsLoginPage);
    return ItemDetailsLoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-item-details-login-item-details-login-module.js.map