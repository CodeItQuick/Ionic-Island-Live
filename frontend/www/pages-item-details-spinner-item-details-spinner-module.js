(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-spinner-item-details-spinner-module"],{

/***/ "./src/app/pages/item-details-spinner/item-details-spinner.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/item-details-spinner/item-details-spinner.module.ts ***!
  \***************************************************************************/
/*! exports provided: ItemDetailsSpinnerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsSpinnerPageModule", function() { return ItemDetailsSpinnerPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_spinner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-details-spinner.page */ "./src/app/pages/item-details-spinner/item-details-spinner.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ItemDetailsSpinnerPageModule = /** @class */ (function () {
    function ItemDetailsSpinnerPageModule() {
    }
    ItemDetailsSpinnerPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _item_details_spinner_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsSpinnerPage"]
                    }
                ])
            ],
            declarations: [_item_details_spinner_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsSpinnerPage"]],
            exports: [_item_details_spinner_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsSpinnerPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ItemDetailsSpinnerPageModule);
    return ItemDetailsSpinnerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/item-details-spinner/item-details-spinner.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/item-details-spinner/item-details-spinner.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <!-- Header -->\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Spinner page</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <!-- Content -->\r\n  <ion-content>\r\n    <ion-slides pager=\"true\">\r\n      <ion-slide *ngFor=\"let item of data;let i = index\">\r\n        <ion-card no-box-shadow>\r\n            <!-- Default Spinner -->\r\n            <ion-spinner *ngIf=\"isType(0)\" [name]=\"item.icon\"></ion-spinner>\r\n            <!-- Creativ Studio Spinner (Custom components) -->\r\n            <cs-spinner svg-size *ngIf=\"isType(1)\" [name]=\"item.icon\"></cs-spinner>\r\n        </ion-card>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </ion-content>\r\n</ion-app>\r\n"

/***/ }),

/***/ "./src/app/pages/item-details-spinner/item-details-spinner.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/item-details-spinner/item-details-spinner.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaXRlbS1kZXRhaWxzLXNwaW5uZXIvQzpcXFVzZXJzXFxPd25lclxcVWRlbXlcXENTRm9ybS1UaGVtZS1UZXN0L3NyY1xcYXBwXFxwYWdlc1xcaXRlbS1kZXRhaWxzLXNwaW5uZXJcXGl0ZW0tZGV0YWlscy1zcGlubmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1zcGlubmVyL2l0ZW0tZGV0YWlscy1zcGlubmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/item-details-spinner/item-details-spinner.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/item-details-spinner/item-details-spinner.page.ts ***!
  \*************************************************************************/
/*! exports provided: ItemDetailsSpinnerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsSpinnerPage", function() { return ItemDetailsSpinnerPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/spinner-service */ "./src/app/services/spinner-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemDetailsSpinnerPage = /** @class */ (function () {
    function ItemDetailsSpinnerPage(navCtrl, service, route) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.route = route;
        this.data = {};
        this.slideOpts = { 'effect': 'flip' };
        this.type = this.route.snapshot.paramMap.get('type');
        this.service.load(service.getAllThemes()[this.type]).subscribe(function (d) {
            _this.data = d;
        });
    }
    ItemDetailsSpinnerPage.prototype.isType = function (item) {
        return item === parseInt(this.type, 10);
    };
    ItemDetailsSpinnerPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./item-details-spinner.page.html */ "./src/app/pages/item-details-spinner/item-details-spinner.page.html"),
            providers: [_services_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"]],
            styles: [__webpack_require__(/*! ./item-details-spinner.page.scss */ "./src/app/pages/item-details-spinner/item-details-spinner.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _services_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ItemDetailsSpinnerPage);
    return ItemDetailsSpinnerPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-item-details-spinner-item-details-spinner-module.js.map