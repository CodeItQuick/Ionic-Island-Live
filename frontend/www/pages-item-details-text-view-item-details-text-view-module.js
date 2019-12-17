(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-text-view-item-details-text-view-module"],{

/***/ "./src/app/pages/item-details-text-view/item-details-text-view.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/item-details-text-view/item-details-text-view.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ItemDetailsPageTextViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPageTextViewModule", function() { return ItemDetailsPageTextViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _item_details_text_view_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-details-text-view.page */ "./src/app/pages/item-details-text-view/item-details-text-view.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ItemDetailsPageTextViewModule = /** @class */ (function () {
    function ItemDetailsPageTextViewModule() {
    }
    ItemDetailsPageTextViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _item_details_text_view_page__WEBPACK_IMPORTED_MODULE_5__["ItemDetailsPageTextView"]
                    }
                ])
            ],
            declarations: [_item_details_text_view_page__WEBPACK_IMPORTED_MODULE_5__["ItemDetailsPageTextView"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ItemDetailsPageTextViewModule);
    return ItemDetailsPageTextViewModule;
}());



/***/ }),

/***/ "./src/app/pages/item-details-text-view/item-details-text-view.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/item-details-text-view/item-details-text-view.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <!--- Header -->\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>All</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <!--- Content text exapmles  --->\r\n  <ion-content padding>\r\n    <ion-grid>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n        <div title-components text-uppercase padding-bottom text-size-lg>Typography examples:</div>\r\n        <h1 text-size-xl>This is example of h1 title.</h1>\r\n        <h2 text-size-lg>And this is example of h2 title/subtitle.</h2>\r\n        <h3 text-size-md>Example of h3 subtitle is also here.</h3>\r\n        <h4 text-size-xs>And h4 subtitle example is here.</h4>\r\n        <h5 text-size-sm>h5 subtitle is like this!</h5>\r\n        <h6 text-size-sm>And h6 at the end usualy same as h6.</h6>\r\n        <p text-size-p>This is example of paragraph text.\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit,\r\n          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n          Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n          laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n\r\n        <!--- SPAN EXAMPLES  --->\r\n        <div title-components text-uppercase padding-vertical text-size-lg margin-bottom>SPAN EXAMPLES:</div>\r\n        <span block text-size-sm margin-top>Span small</span>\r\n        <span span-small>Small span: $555, 31.12.2016., 4.84 (35 reviews)</span>\r\n\r\n        <span block text-size-sm margin-top>Span medium</span>\r\n        <span span-medium>Medium span: $555, 31.12.2016.</span>\r\n\r\n        <span block text-size-sm margin-top>Span large</span>\r\n        <span span-large>Large span: $555, 31.12.2016.</span>\r\n\r\n        <!--- BUTTON EXAMPLE  --->\r\n        <div title-components text-uppercase padding-vertical text-size-lg margin-bottom>Button examples:</div>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-md=\"6\">\r\n            <ion-button default-button>\r\n              Default button\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-md=\"6\">\r\n            <ion-button button-icon fill=\"clear\">\r\n              <ion-icon icon-small slot=\"start\" name=\"star\"></ion-icon>\r\n              Button with icon\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-md=\"6\">\r\n            <ion-button button-round shape=\"round\" fill=\"outline\">\r\n              Outline button\r\n            </ion-button>\r\n            <div clearfix></div>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-md=\"6\">\r\n            <ion-button button-clear fill=\"clear\">\r\n                Clear button\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <!--- ICON EXAMPLES  --->\r\n        <div title-components text-uppercase padding-vertical text-size-lg margin-bottom>ICON EXAMPLES:</div>\r\n        <span block padding-vertical text-size-sm>Small</span>\r\n        <i icon-small class=\"icon icon-thumb-up\"></i>\r\n        <i icon-small class=\"icon icon-heart\"></i>\r\n        <i icon-small class=\"icon icon-share-variant\"></i>\r\n        <div clerfix></div>\r\n        <span block padding-vertical text-size-sm>Medium</span>\r\n        <i icon-medium class=\"icon icon-thumb-up\"></i>\r\n        <i icon-medium class=\"icon icon-heart\"></i>\r\n        <i icon-medium class=\"icon icon-share-variant\"></i>\r\n        <div clerfix></div>\r\n        <span block padding-vertical text-size-sm>Large</span>\r\n        <i icon-large class=\"icon icon-thumb-up\"></i>\r\n        <i icon-large class=\"icon icon-heart\"></i>\r\n        <i icon-large class=\"icon icon-share-variant\"></i>\r\n        </ion-list>\r\n\r\n      </ion-col>\r\n    </ion-grid>\r\n  </ion-content>\r\n  </ion-app>\r\n"

/***/ }),

/***/ "./src/app/pages/item-details-text-view/item-details-text-view.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/item-details-text-view/item-details-text-view.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[title-components] {\n  border-bottom: 1px solid var(--cs-background-accent, #0090d0); }\n\n[icon-large] {\n  color: var(--cs-icon-color-primary, #00c0e8); }\n\nspan[block] {\n  width: 100%;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaXRlbS1kZXRhaWxzLXRleHQtdmlldy9pdGVtLWRldGFpbHMtdGV4dC12aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaXRlbS1kZXRhaWxzLXRleHQtdmlldy9DOlxcVXNlcnNcXE93bmVyXFxVZGVteVxcQ1NGb3JtLVRoZW1lLVRlc3Qvc3JjXFxhcHBcXHBhZ2VzXFxpdGVtLWRldGFpbHMtdGV4dC12aWV3XFxpdGVtLWRldGFpbHMtdGV4dC12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQ0NFLDZEQUE2RCxFQUFBOztBREUvRDtFQ0VFLDRDQUE0QyxFQUFBOztBQUc5QztFQUNFLFdBQVc7RUFDWCxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pdGVtLWRldGFpbHMtdGV4dC12aWV3L2l0ZW0tZGV0YWlscy10ZXh0LXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW3RpdGxlLWNvbXBvbmVudHNdIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNzLWJhY2tncm91bmQtYWNjZW50LCAjMDA5MGQwKTsgfVxuXG5baWNvbi1sYXJnZV0ge1xuICBjb2xvcjogdmFyKC0tY3MtaWNvbi1jb2xvci1wcmltYXJ5LCAjMDBjMGU4KTsgfVxuXG5zcGFuW2Jsb2NrXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jazsgfVxuIiwiW3RpdGxlLWNvbXBvbmVudHNdIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY3MtYmFja2dyb3VuZC1hY2NlbnQsICMwMDkwZDApO1xyXG59XHJcblxyXG5baWNvbi1sYXJnZV0ge1xyXG4gIGNvbG9yOiB2YXIoLS1jcy1pY29uLWNvbG9yLXByaW1hcnksICMwMGMwZTgpO1xyXG59XHJcblxyXG5zcGFuW2Jsb2NrXXtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/item-details-text-view/item-details-text-view.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/item-details-text-view/item-details-text-view.page.ts ***!
  \*****************************************************************************/
/*! exports provided: ItemDetailsPageTextView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPageTextView", function() { return ItemDetailsPageTextView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_text_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/text-view-service */ "./src/app/services/text-view-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemDetailsPageTextView = /** @class */ (function () {
    function ItemDetailsPageTextView(navCtrl, textViewService) {
        this.navCtrl = navCtrl;
        this.textViewService = textViewService;
        this.params = {};
        // If we navigated to this page, we will have an item available as a nav param
        this.params = this.textViewService.prepareParams(navCtrl);
    }
    ItemDetailsPageTextView = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./item-details-text-view.page.html */ "./src/app/pages/item-details-text-view/item-details-text-view.page.html"),
            providers: [_services_text_view_service__WEBPACK_IMPORTED_MODULE_2__["TextViewService"]],
            styles: [__webpack_require__(/*! ./item-details-text-view.page.scss */ "./src/app/pages/item-details-text-view/item-details-text-view.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _services_text_view_service__WEBPACK_IMPORTED_MODULE_2__["TextViewService"]])
    ], ItemDetailsPageTextView);
    return ItemDetailsPageTextView;
}());



/***/ })

}]);
//# sourceMappingURL=pages-item-details-text-view-item-details-text-view-module.js.map