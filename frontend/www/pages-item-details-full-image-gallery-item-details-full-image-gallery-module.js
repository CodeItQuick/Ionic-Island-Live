(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-full-image-gallery-item-details-full-image-gallery-module"],{

/***/ "./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ItemDetailsFullImageGalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsFullImageGalleryPageModule", function() { return ItemDetailsFullImageGalleryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_full_image_gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-details-full-image-gallery.page */ "./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ItemDetailsFullImageGalleryPageModule = /** @class */ (function () {
    function ItemDetailsFullImageGalleryPageModule() {
    }
    ItemDetailsFullImageGalleryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _item_details_full_image_gallery_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsFullImageGalleryPage"]
                    }
                ])
            ],
            declarations: [_item_details_full_image_gallery_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsFullImageGalleryPage"]],
            exports: [_item_details_full_image_gallery_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsFullImageGalleryPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ItemDetailsFullImageGalleryPageModule);
    return ItemDetailsFullImageGalleryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.page.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Full Image Gallery page</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n  <!--Content -->\r\n  <ion-content>\r\n\r\n    <!-- Page 1-->\r\n    <cs-full-image-gallery-layout-1 [data]=\"data\">\r\n    </cs-full-image-gallery-layout-1>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n"

/***/ }),

/***/ "./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.page.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1mdWxsLWltYWdlLWdhbGxlcnkvaXRlbS1kZXRhaWxzLWZ1bGwtaW1hZ2UtZ2FsbGVyeS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: ItemDetailsFullImageGalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsFullImageGalleryPage", function() { return ItemDetailsFullImageGalleryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemDetailsFullImageGalleryPage = /** @class */ (function () {
    function ItemDetailsFullImageGalleryPage(navCtrl, route) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.data = {};
        var self = this;
        this.data = this.route.snapshot.paramMap.get('data');
        this.route.queryParams.subscribe(function (params) {
            self.data = JSON.parse(params['data']);
        });
    }
    ItemDetailsFullImageGalleryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./item-details-full-image-gallery.page.html */ "./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.page.html"),
            styles: [__webpack_require__(/*! ./item-details-full-image-gallery.page.scss */ "./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ItemDetailsFullImageGalleryPage);
    return ItemDetailsFullImageGalleryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-item-details-full-image-gallery-item-details-full-image-gallery-module.js.map