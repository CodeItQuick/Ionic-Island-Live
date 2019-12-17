(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-forgot-password-item-details-forgot-password-module"],{

/***/ "./src/app/pages/item-details-forgot-password/item-details-forgot-password.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/item-details-forgot-password/item-details-forgot-password.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ItemDetailsForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsForgotPasswordPageModule", function() { return ItemDetailsForgotPasswordPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-details-forgot-password.page */ "./src/app/pages/item-details-forgot-password/item-details-forgot-password.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ItemDetailsForgotPasswordPageModule = /** @class */ (function () {
    function ItemDetailsForgotPasswordPageModule() {
    }
    ItemDetailsForgotPasswordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _item_details_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsForgotPasswordPage"]
                    }
                ])
            ],
            declarations: [_item_details_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsForgotPasswordPage"]],
            exports: [_item_details_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsForgotPasswordPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ItemDetailsForgotPasswordPageModule);
    return ItemDetailsForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/item-details-forgot-password/item-details-forgot-password.page.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/item-details-forgot-password/item-details-forgot-password.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n\r\n    <!-- PAGE 1 -->\r\n    <cs-forgot-password-layout-1\r\n      *ngIf=\"isType(0)\"\r\n      [data]=\"data\"\r\n      (onSend)=\"onSend($event)\">\r\n    </cs-forgot-password-layout-1>\r\n\r\n    <!-- PAGE 2 -->\r\n    <cs-forgot-password-layout-2\r\n        *ngIf=\"isType(1)\"\r\n        [data]=\"data\"\r\n        (onSend)=\"onSend($event)\">\r\n    </cs-forgot-password-layout-2>\r\n\r\n</ion-app>\r\n"

/***/ }),

/***/ "./src/app/pages/item-details-forgot-password/item-details-forgot-password.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/item-details-forgot-password/item-details-forgot-password.page.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1mb3Jnb3QtcGFzc3dvcmQvaXRlbS1kZXRhaWxzLWZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/item-details-forgot-password/item-details-forgot-password.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/item-details-forgot-password/item-details-forgot-password.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: ItemDetailsForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsForgotPasswordPage", function() { return ItemDetailsForgotPasswordPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_forget_password_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/forget-password-services */ "./src/app/services/forget-password-services.ts");
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





var ItemDetailsForgotPasswordPage = /** @class */ (function () {
    function ItemDetailsForgotPasswordPage(navCtrl, service, toastCtrl, route) {
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
    ItemDetailsForgotPasswordPage.prototype.isType = function (item) {
        return item === parseInt(this.type, 10);
    };
    // events
    ItemDetailsForgotPasswordPage.prototype.onSend = function (params) {
        this.toastCtrl.presentToast('onSend:' + JSON.stringify(params));
    };
    ItemDetailsForgotPasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./item-details-forgot-password.page.html */ "./src/app/pages/item-details-forgot-password/item-details-forgot-password.page.html"),
            providers: [_services_forget_password_services__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordService"]],
            styles: [__webpack_require__(/*! ./item-details-forgot-password.page.scss */ "./src/app/pages/item-details-forgot-password/item-details-forgot-password.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_forget_password_services__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordService"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ItemDetailsForgotPasswordPage);
    return ItemDetailsForgotPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-item-details-forgot-password-item-details-forgot-password-module.js.map