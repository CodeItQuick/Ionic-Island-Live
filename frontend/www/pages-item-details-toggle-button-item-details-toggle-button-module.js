(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-toggle-button-item-details-toggle-button-module"],{

/***/ "./src/app/pages/item-details-toggle-button/item-details-toggle-button.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/item-details-toggle-button/item-details-toggle-button.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ItemDetailsToggleButtonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsToggleButtonPageModule", function() { return ItemDetailsToggleButtonPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_toggle_button_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-details-toggle-button.page */ "./src/app/pages/item-details-toggle-button/item-details-toggle-button.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ItemDetailsToggleButtonPageModule = /** @class */ (function () {
    function ItemDetailsToggleButtonPageModule() {
    }
    ItemDetailsToggleButtonPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _item_details_toggle_button_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsToggleButtonPage"]
                    }
                ])
            ],
            declarations: [_item_details_toggle_button_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsToggleButtonPage"]],
            exports: [_item_details_toggle_button_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsToggleButtonPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ItemDetailsToggleButtonPageModule);
    return ItemDetailsToggleButtonPageModule;
}());



/***/ }),

/***/ "./src/app/pages/item-details-toggle-button/item-details-toggle-button.page.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/item-details-toggle-button/item-details-toggle-button.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <!--Header -->\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title text-capitalize>{{data.toolbarTitle}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <!-- Content -->\r\n  <ion-content>\r\n\r\n    <!-- PAGE 1 -->\r\n    <cs-toggle-button-layout-1\r\n    *ngIf=\"isType(0)\"\r\n    [data]=\"data\"\r\n    (onItemClick)=\"onItemClick($event)\">\r\n    </cs-toggle-button-layout-1>\r\n\r\n    <!-- PAGE 2 -->\r\n    <cs-toggle-button-layout-2\r\n    *ngIf=\"isType(1)\"\r\n    [data]=\"data\"\r\n    (onItemClick)=\"onItemClick($event)\">\r\n    </cs-toggle-button-layout-2>\r\n\r\n    <!-- PAGE 3 -->\r\n    <cs-toggle-button-layout-3\r\n    *ngIf=\"isType(2)\"\r\n    [data]=\"data\"\r\n    (onItemClick)=\"onItemClick($event)\">\r\n    </cs-toggle-button-layout-3>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n"

/***/ }),

/***/ "./src/app/pages/item-details-toggle-button/item-details-toggle-button.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/item-details-toggle-button/item-details-toggle-button.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy10b2dnbGUtYnV0dG9uL2l0ZW0tZGV0YWlscy10b2dnbGUtYnV0dG9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/item-details-toggle-button/item-details-toggle-button.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/item-details-toggle-button/item-details-toggle-button.page.ts ***!
  \*************************************************************************************/
/*! exports provided: ItemDetailsToggleButtonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsToggleButtonPage", function() { return ItemDetailsToggleButtonPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toggle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/toggle-service */ "./src/app/services/toggle-service.ts");
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





var ItemDetailsToggleButtonPage = /** @class */ (function () {
    function ItemDetailsToggleButtonPage(navCtrl, service, toastCtrl, route) {
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
    ItemDetailsToggleButtonPage.prototype.isType = function (item) {
        return item === parseInt(this.type, 10);
    };
    // events
    ItemDetailsToggleButtonPage.prototype.onItemClick = function (params) {
        this.toastCtrl.presentToast('onItemClick:' + JSON.stringify(params));
    };
    ItemDetailsToggleButtonPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./item-details-toggle-button.page.html */ "./src/app/pages/item-details-toggle-button/item-details-toggle-button.page.html"),
            providers: [_services_toggle_service__WEBPACK_IMPORTED_MODULE_3__["ToggleService"]],
            styles: [__webpack_require__(/*! ./item-details-toggle-button.page.scss */ "./src/app/pages/item-details-toggle-button/item-details-toggle-button.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_toggle_service__WEBPACK_IMPORTED_MODULE_3__["ToggleService"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ItemDetailsToggleButtonPage);
    return ItemDetailsToggleButtonPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-item-details-toggle-button-item-details-toggle-button-module.js.map