(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-tab-item-details-tab-module"],{

/***/ "./src/app/pages/item-details-tab/item-details-tab.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/item-details-tab/item-details-tab.module.ts ***!
  \*******************************************************************/
/*! exports provided: ItemDetailsTabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsTabPageModule", function() { return ItemDetailsTabPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_tab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-details-tab.page */ "./src/app/pages/item-details-tab/item-details-tab.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ItemDetailsTabPageModule = /** @class */ (function () {
    function ItemDetailsTabPageModule() {
    }
    ItemDetailsTabPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _item_details_tab_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsTabPage"]
                    }
                ])
            ],
            declarations: [_item_details_tab_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsTabPage"]],
            exports: [_item_details_tab_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsTabPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ItemDetailsTabPageModule);
    return ItemDetailsTabPageModule;
}());



/***/ }),

/***/ "./src/app/pages/item-details-tab/item-details-tab.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/item-details-tab/item-details-tab.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Tabs component 1 -->\r\n<cs-tab-layout-1 *ngIf=\"isType(0)\" [data]=\"data\">\r\n</cs-tab-layout-1>\r\n<!-- Tabs component 2 -->\r\n<cs-tab-layout-2 *ngIf=\"isType(1)\" [data]=\"data\">\r\n</cs-tab-layout-2>\r\n<!-- Tabs component 3 -->\r\n<cs-tab-layout-3 *ngIf=\"isType(2)\" [data]=\"data\">\r\n</cs-tab-layout-3>\r\n"

/***/ }),

/***/ "./src/app/pages/item-details-tab/item-details-tab.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/item-details-tab/item-details-tab.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy10YWIvaXRlbS1kZXRhaWxzLXRhYi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/item-details-tab/item-details-tab.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/item-details-tab/item-details-tab.page.ts ***!
  \*****************************************************************/
/*! exports provided: ItemDetailsTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsTabPage", function() { return ItemDetailsTabPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tabs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/tabs-service */ "./src/app/services/tabs-service.ts");
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





var ItemDetailsTabPage = /** @class */ (function () {
    function ItemDetailsTabPage(navCtrl, service, toastCtrl, route) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.data = {};
        // this.type = this.route.snapshot.paramMap.get('type');
        // this.service.load(service.getAllThemes()[this.type]).subscribe(d => {
        //     this.data = d;
        // });
    }
    ItemDetailsTabPage.prototype.isType = function (item) {
        return item === parseInt(this.type, 10);
    };
    ItemDetailsTabPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./item-details-tab.page.html */ "./src/app/pages/item-details-tab/item-details-tab.page.html"),
            providers: [_services_tabs_service__WEBPACK_IMPORTED_MODULE_3__["TabsService"]],
            styles: [__webpack_require__(/*! ./item-details-tab.page.scss */ "./src/app/pages/item-details-tab/item-details-tab.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_tabs_service__WEBPACK_IMPORTED_MODULE_3__["TabsService"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ItemDetailsTabPage);
    return ItemDetailsTabPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-item-details-tab-item-details-tab-module.js.map