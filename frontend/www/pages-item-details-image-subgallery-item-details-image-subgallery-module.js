(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-image-subgallery-item-details-image-subgallery-module"],{

/***/ "./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ItemDetailsImageSubGalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsImageSubGalleryPageModule", function() { return ItemDetailsImageSubGalleryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_image_subgallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-details-image-subgallery.page */ "./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ItemDetailsImageSubGalleryPageModule = /** @class */ (function () {
    function ItemDetailsImageSubGalleryPageModule() {
    }
    ItemDetailsImageSubGalleryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _item_details_image_subgallery_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsImageSubGalleryPage"]
                    }
                ])
            ],
            declarations: [_item_details_image_subgallery_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsImageSubGalleryPage"]],
            exports: [_item_details_image_subgallery_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsImageSubGalleryPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ItemDetailsImageSubGalleryPageModule);
    return ItemDetailsImageSubGalleryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.page.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <!-- Header-->\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        SubImage Gallery page\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <!-- Content -->\r\n  <ion-content>\r\n\r\n    <cs-image-gallery-layout-2\r\n      [data]=\"data\"\r\n      (onFavorite)=\"onFavorite($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-image-gallery-layout-2>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n"

/***/ }),

/***/ "./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.page.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1pbWFnZS1zdWJnYWxsZXJ5L2l0ZW0tZGV0YWlscy1pbWFnZS1zdWJnYWxsZXJ5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: ItemDetailsImageSubGalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsImageSubGalleryPage", function() { return ItemDetailsImageSubGalleryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_image_gallery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/image-gallery-service */ "./src/app/services/image-gallery-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemDetailsImageSubGalleryPage = /** @class */ (function () {
    function ItemDetailsImageSubGalleryPage(navCtrl, route) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.data = {};
        var self = this;
        this.data = this.route.snapshot.paramMap.get('data');
        this.route.queryParams.subscribe(function (params) {
            self.data = JSON.parse(params['data']);
        });
    }
    // events
    ItemDetailsImageSubGalleryPage.prototype.onItemClick = function (params) {
        var dataItem = { 'items': this.data['items'], index: params.index };
        var navigationExtras = {
            queryParams: { data: JSON.stringify(dataItem) }
        };
        this.navCtrl.navigateForward(['full-image-gallery'], navigationExtras);
    };
    ItemDetailsImageSubGalleryPage.prototype.onFavorite = function (params) {
    };
    ItemDetailsImageSubGalleryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./item-details-image-subgallery.page.html */ "./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.page.html"),
            providers: [_services_image_gallery_service__WEBPACK_IMPORTED_MODULE_3__["ImageGalleryService"]],
            styles: [__webpack_require__(/*! ./item-details-image-subgallery.page.scss */ "./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ItemDetailsImageSubGalleryPage);
    return ItemDetailsImageSubGalleryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-item-details-image-subgallery-item-details-image-subgallery-module.js.map