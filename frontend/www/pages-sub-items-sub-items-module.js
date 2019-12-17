(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sub-items-sub-items-module"],{

/***/ "./src/app/pages/sub-items/sub-items.html":
/*!************************************************!*\
  !*** ./src/app/pages/sub-items/sub-items.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Back button with custom text and icon -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- Content -->\r\n<ion-content>\r\n  <ion-grid no-padding>\r\n    <ion-row no-padding>\r\n      <ion-col size=\"12\" no-padding>\r\n        <ion-list *ngIf=\"pages.length\" lines=\"none\">\r\n          <ion-item lines=\"none\"  *ngFor=\"let item of pages\" (click)=\"openPage(item)\">\r\n            <ion-label>\r\n              <div text-size-xs>{{item.title}}</div>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/sub-items/sub-items.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/sub-items/sub-items.module.ts ***!
  \*****************************************************/
/*! exports provided: SubItemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubItemsPageModule", function() { return SubItemsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sub_items_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sub-items.page */ "./src/app/pages/sub-items/sub-items.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SubItemsPageModule = /** @class */ (function () {
    function SubItemsPageModule() {
    }
    SubItemsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _sub_items_page__WEBPACK_IMPORTED_MODULE_5__["SubItemsPage"]
                    }
                ])
            ],
            declarations: [_sub_items_page__WEBPACK_IMPORTED_MODULE_5__["SubItemsPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SubItemsPageModule);
    return SubItemsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sub-items/sub-items.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/sub-items/sub-items.page.ts ***!
  \***************************************************/
/*! exports provided: SubItemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubItemsPage", function() { return SubItemsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_list_view_expandable_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/list-view-expandable-service */ "./src/app/services/list-view-expandable-service.ts");
/* harmony import */ var _services_list_view_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/list-view-drag-and-drop-service */ "./src/app/services/list-view-drag-and-drop-service.ts");
/* harmony import */ var _services_list_view_swipe_to_dismiss_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/list-view-swipe-to-dismiss-service */ "./src/app/services/list-view-swipe-to-dismiss-service.ts");
/* harmony import */ var _services_list_view_google_card_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/list-view-google-card-service */ "./src/app/services/list-view-google-card-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SubItemsPage = /** @class */ (function () {
    // services: array
    function SubItemsPage(navCtrl, listViewExpandableService, listViewDragAndDropService, listViewSwipeToDismissService, listViewGoogleCardsService, route, router) {
        this.navCtrl = navCtrl;
        this.listViewExpandableService = listViewExpandableService;
        this.listViewDragAndDropService = listViewDragAndDropService;
        this.listViewSwipeToDismissService = listViewSwipeToDismissService;
        this.listViewGoogleCardsService = listViewGoogleCardsService;
        this.route = route;
        this.router = router;
        this.pages = {};
        this.listServices = {};
        this.listServices = {
            'expandable': this.listViewExpandableService,
            'dragAndDrop': this.listViewDragAndDropService,
            'swipeToDismiss': this.listViewSwipeToDismissService,
            'googleCards': this.listViewGoogleCardsService
        };
        this.componentName = this.route.snapshot.paramMap.get('type');
        this.service = this.listServices[this.componentName];
        if (this.service) {
            this.pages = this.service.getAllThemes();
            this.title = this.service.getTitle();
        }
    }
    SubItemsPage.prototype.openPage = function (page) {
        this.navCtrl.navigateForward([page.url], {});
    };
    SubItemsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./sub-items.html */ "./src/app/pages/sub-items/sub-items.html"),
            providers: [
                _services_list_view_expandable_service__WEBPACK_IMPORTED_MODULE_3__["ListViewExpandableService"],
                _services_list_view_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_4__["ListViewDragAndDropService"],
                _services_list_view_swipe_to_dismiss_service__WEBPACK_IMPORTED_MODULE_5__["ListViewSwipeToDismissService"],
                _services_list_view_google_card_service__WEBPACK_IMPORTED_MODULE_6__["ListViewGoogleCardsService"]
            ]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_list_view_expandable_service__WEBPACK_IMPORTED_MODULE_3__["ListViewExpandableService"],
            _services_list_view_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_4__["ListViewDragAndDropService"],
            _services_list_view_swipe_to_dismiss_service__WEBPACK_IMPORTED_MODULE_5__["ListViewSwipeToDismissService"],
            _services_list_view_google_card_service__WEBPACK_IMPORTED_MODULE_6__["ListViewGoogleCardsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SubItemsPage);
    return SubItemsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sub-items-sub-items-module.js.map