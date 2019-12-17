(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-google-card-item-details-google-card-module"],{

/***/ "./src/app/pages/item-details-google-card/item-details-google-card.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/item-details-google-card/item-details-google-card.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ItemDetailsGoogleCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsGoogleCardPageModule", function() { return ItemDetailsGoogleCardPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_google_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-details-google-card.page */ "./src/app/pages/item-details-google-card/item-details-google-card.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ItemDetailsGoogleCardPageModule = /** @class */ (function () {
    function ItemDetailsGoogleCardPageModule() {
    }
    ItemDetailsGoogleCardPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _item_details_google_card_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsGoogleCardPage"]
                    }
                ])
            ],
            declarations: [_item_details_google_card_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsGoogleCardPage"]],
            exports: [_item_details_google_card_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsGoogleCardPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ItemDetailsGoogleCardPageModule);
    return ItemDetailsGoogleCardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/item-details-google-card/item-details-google-card.page.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/item-details-google-card/item-details-google-card.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <!-- Header -->\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title text-capitalize>{{data.toolbarTitle}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <!-- Content -->\r\n  <ion-content>\r\n\r\n    <!-- PAGE 1 -->\r\n    <cs-google-card-list-layout-1\r\n      *ngIf=\"isType(0)\"\r\n      [data]=\"data\"\r\n      (onFab)=\"onFab($event)\"\r\n      (onShare)=\"onShare($event)\"\r\n      (onLike)=\"onLike($event)\"\r\n      (onFavorite)=\"onFavorite($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-google-card-list-layout-1>\r\n\r\n    <!-- PAGE 2 -->\r\n    <cs-google-card-list-layout-2\r\n      *ngIf=\"isType(1)\"\r\n      [data]=\"data\"\r\n      (onFab)=\"onFab($event)\"\r\n      (onShare)=\"onShare($event)\"\r\n      (onLike)=\"onLike($event)\"\r\n      (onExplore)=\"onExplore($event)\"\r\n      (onFavorite)=\"onFavorite($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-google-card-list-layout-2>\r\n\r\n    <!-- PAGE 3 -->\r\n    <cs-google-card-list-layout-3\r\n      *ngIf=\"isType(2)\"\r\n      [data]=\"data\"\r\n      (onFab)=\"onFab($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-google-card-list-layout-3>\r\n\r\n    <!-- PAGE 4 -->\r\n    <cs-google-card-list-layout-4\r\n    *ngIf=\"isType(3)\"\r\n    [data]=\"data\"\r\n    (onItemClick)=\"onItemClick($event)\">>\r\n    </cs-google-card-list-layout-4>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n"

/***/ }),

/***/ "./src/app/pages/item-details-google-card/item-details-google-card.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/item-details-google-card/item-details-google-card.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*  #Style Expandable - List big image\r\n===========================================*/\nli {\n  list-style-type: none; }\n[item-accordion] {\n  height: 0;\n  display: block !important;\n  transition: all 300ms;\n  overflow: hidden; }\n[item-accordion].active {\n    height: 450px !important; }\n[default-item-active] {\n  margin: 8px 0 !important;\n  width: calc(100% - 24px) !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaXRlbS1kZXRhaWxzLWdvb2dsZS1jYXJkL0M6XFxVc2Vyc1xcT3duZXJcXFVkZW15XFxDU0Zvcm0tVGhlbWUtVGVzdC9zcmNcXGFwcFxccGFnZXNcXGl0ZW0tZGV0YWlscy1nb29nbGUtY2FyZFxcaXRlbS1kZXRhaWxzLWdvb2dsZS1jYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaXRlbS1kZXRhaWxzLWdvb2dsZS1jYXJkL2l0ZW0tZGV0YWlscy1nb29nbGUtY2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7NENDQzRDO0FEQ3hDO0VBQ0UscUJBQXFCLEVBQUE7QUNFM0I7RURFTSxTQUFTO0VBQ1QseUJBQXlCO0VBRXpCLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQTtBQ0FwQjtJREdNLHdCQUF3QixFQUFBO0FDQWhDO0VES00sd0JBQXdCO0VBQ3hCLG1DQUFtQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaXRlbS1kZXRhaWxzLWdvb2dsZS1jYXJkL2l0ZW0tZGV0YWlscy1nb29nbGUtY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAgI1N0eWxlIEV4cGFuZGFibGUgLSBMaXN0IGJpZyBpbWFnZVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIGxpIHtcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgfVxyXG4gICAgLy8gTGlzdCBiaWcgaW1hZ2UgQm9keVxyXG4gICAgW2l0ZW0tYWNjb3JkaW9uXSB7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBcclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGhlaWdodDogNDUwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgW2RlZmF1bHQtaXRlbS1hY3RpdmVdIHtcclxuICAgICAgbWFyZ2luOiA4cHggMCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjRweCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAiLCIvKiAgI1N0eWxlIEV4cGFuZGFibGUgLSBMaXN0IGJpZyBpbWFnZVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbmxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XG5cbltpdGVtLWFjY29yZGlvbl0ge1xuICBoZWlnaHQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgW2l0ZW0tYWNjb3JkaW9uXS5hY3RpdmUge1xuICAgIGhlaWdodDogNDUwcHggIWltcG9ydGFudDsgfVxuXG5bZGVmYXVsdC1pdGVtLWFjdGl2ZV0ge1xuICBtYXJnaW46IDhweCAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNHB4KSAhaW1wb3J0YW50OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/item-details-google-card/item-details-google-card.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/item-details-google-card/item-details-google-card.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ItemDetailsGoogleCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsGoogleCardPage", function() { return ItemDetailsGoogleCardPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_list_view_google_card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/list-view-google-card-service */ "./src/app/services/list-view-google-card-service.ts");
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





var ItemDetailsGoogleCardPage = /** @class */ (function () {
    function ItemDetailsGoogleCardPage(navCtrl, service, toastCtrl, route) {
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
    ItemDetailsGoogleCardPage.prototype.isType = function (item) {
        return item === parseInt(this.type, 10);
    };
    // events
    ItemDetailsGoogleCardPage.prototype.onItemClick = function (params) {
        this.toastCtrl.presentToast('onItemClick');
    };
    ItemDetailsGoogleCardPage.prototype.onFab = function (params) {
        this.toastCtrl.presentToast('onFab');
    };
    ItemDetailsGoogleCardPage.prototype.onShare = function (params) {
        this.toastCtrl.presentToast(' onShare');
    };
    ItemDetailsGoogleCardPage.prototype.onExplore = function (params) {
        this.toastCtrl.presentToast('onExplore');
    };
    ItemDetailsGoogleCardPage.prototype.onFavorite = function (params) {
        this.toastCtrl.presentToast('onFavorite');
    };
    ItemDetailsGoogleCardPage.prototype.onLike = function (params) {
        this.toastCtrl.presentToast('onLike');
    };
    ItemDetailsGoogleCardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./item-details-google-card.page.html */ "./src/app/pages/item-details-google-card/item-details-google-card.page.html"),
            providers: [_services_list_view_google_card_service__WEBPACK_IMPORTED_MODULE_3__["ListViewGoogleCardsService"]],
            styles: [__webpack_require__(/*! ./item-details-google-card.page.scss */ "./src/app/pages/item-details-google-card/item-details-google-card.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_list_view_google_card_service__WEBPACK_IMPORTED_MODULE_3__["ListViewGoogleCardsService"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ItemDetailsGoogleCardPage);
    return ItemDetailsGoogleCardPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-item-details-google-card-item-details-google-card-module.js.map