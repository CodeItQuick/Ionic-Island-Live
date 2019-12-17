(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-image-gallery-item-details-image-gallery-module"],{

/***/ "./src/app/pages/item-details-image-gallery/item-details-image-gallery.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/item-details-image-gallery/item-details-image-gallery.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ItemDetailsImageGalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsImageGalleryPageModule", function() { return ItemDetailsImageGalleryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_image_gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-details-image-gallery.page */ "./src/app/pages/item-details-image-gallery/item-details-image-gallery.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ItemDetailsImageGalleryPageModule = /** @class */ (function () {
    function ItemDetailsImageGalleryPageModule() {
    }
    ItemDetailsImageGalleryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _item_details_image_gallery_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsImageGalleryPage"]
                    }
                ])
            ],
            declarations: [_item_details_image_gallery_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsImageGalleryPage"]],
            exports: [_item_details_image_gallery_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsImageGalleryPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ItemDetailsImageGalleryPageModule);
    return ItemDetailsImageGalleryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/item-details-image-gallery/item-details-image-gallery.page.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/item-details-image-gallery/item-details-image-gallery.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        {{toolbarTitle}}\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <!-- Content -->\r\n  <ion-content>\r\n\r\n    <!-- PAGE 1 -->\r\n    <cs-image-gallery-layout-1\r\n      *ngIf=\"isType(0)\"\r\n      [data]=\"data\"\r\n      (onFavorite)=\"onFavorite($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-image-gallery-layout-1>\r\n\r\n    <!-- PAGE 2 -->\r\n    <cs-image-gallery-layout-2\r\n      *ngIf=\"isType(1)\"\r\n      [data]=\"data\"\r\n      (onFavorite)=\"onFavorite($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-image-gallery-layout-2>\r\n\r\n    <!-- PAGE 3 -->\r\n    <cs-image-gallery-layout-3\r\n      *ngIf=\"isType(2)\"\r\n      [data]=\"data\"\r\n      (onFavorite)=\"onFavorite($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-image-gallery-layout-3>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n"

/***/ }),

/***/ "./src/app/pages/item-details-image-gallery/item-details-image-gallery.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/item-details-image-gallery/item-details-image-gallery.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1pbWFnZS1nYWxsZXJ5L2l0ZW0tZGV0YWlscy1pbWFnZS1nYWxsZXJ5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/item-details-image-gallery/item-details-image-gallery.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/item-details-image-gallery/item-details-image-gallery.page.ts ***!
  \*************************************************************************************/
/*! exports provided: ItemDetailsImageGalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsImageGalleryPage", function() { return ItemDetailsImageGalleryPage; });
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




var ItemDetailsImageGalleryPage = /** @class */ (function () {
    function ItemDetailsImageGalleryPage(navCtrl, service, route) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.route = route;
        this.data = {};
        this.type = this.route.snapshot.paramMap.get('type');
        this.service.load(service.getAllThemes()[this.type]).subscribe(function (d) {
            _this.data = d;
            _this.toolbarTitle = d.toolbarTitle;
        });
    }
    ItemDetailsImageGalleryPage.prototype.isType = function (item) {
        return item === parseInt(this.type, 10);
    };
    // events
    ItemDetailsImageGalleryPage.prototype.onItemClick = function (params) {
        var index = params.index;
        params = params.item;
        var dataItem = {};
        if (this.isType(1)) {
            if (!params.hasOwnProperty('items')) {
                dataItem = { 'items': this.data['items'], 'index': index };
            }
        }
        else {
            dataItem = params;
            if (!params.hasOwnProperty('items')) {
                dataItem = { 'items': params };
            }
        }
        var navigationExtras = {
            queryParams: { data: JSON.stringify(dataItem) }
        };
        if (this.isType(1)) {
            this.navCtrl.navigateForward(['full-image-gallery'], navigationExtras);
        }
        else {
            this.navCtrl.navigateForward(['image-gallery-subgallery'], navigationExtras);
        }
    };
    ItemDetailsImageGalleryPage.prototype.onFavorite = function (params) {
        params.favorite = !params.favorite;
    };
    ItemDetailsImageGalleryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./item-details-image-gallery.page.html */ "./src/app/pages/item-details-image-gallery/item-details-image-gallery.page.html"),
            providers: [_services_image_gallery_service__WEBPACK_IMPORTED_MODULE_3__["ImageGalleryService"]],
            styles: [__webpack_require__(/*! ./item-details-image-gallery.page.scss */ "./src/app/pages/item-details-image-gallery/item-details-image-gallery.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_image_gallery_service__WEBPACK_IMPORTED_MODULE_3__["ImageGalleryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ItemDetailsImageGalleryPage);
    return ItemDetailsImageGalleryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-item-details-image-gallery-item-details-image-gallery-module.js.map