(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-settings-item-details-settings-module"],{

/***/ "./src/app/pages/item-details-settings/item-details-settings.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/item-details-settings/item-details-settings.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>RTL TEST</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content settings-page>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item lines=\"none\">\r\n          <ion-lable text-size-xs>Testing our application with Rtl (enable)</ion-lable>\r\n          <ion-checkbox slot=\"end\" [(ngModel)]=\"isRTLEnabled\" (ionChange)=\"ionChangeRTL($event)\"></ion-checkbox>\r\n        </ion-item>\r\n        <ion-item lines=\"none\">\r\n            <h1 text-size-lg>After changing rtl, please restart app.</h1>\r\n        </ion-item>\r\n\r\n        <!--- Button color combination -->\r\n        <ion-col size=\"12\">\r\n          <ion-button ion-item margin-top expand=\"full\" shape=\"round\" button-round fill=\"outline\" (click)=\"changeTheme('blue')\">\r\n            <ion-label>\r\n              <h2>Blue</h2>\r\n              <span text-size-sm  class=\"ion-text-capitalize\">Trust, Dependable Strenght</span>\r\n            </ion-label>\r\n        </ion-button>\r\n          <ion-button ion-item margin-top expand=\"full\" shape=\"round\" button-round fill=\"outline\" (click)=\"changeTheme('blue-gradient-1')\">\r\n            <ion-label>\r\n              <h2>Blue gradient 1</h2>\r\n              <span text-size-sm  class=\"ion-text-capitalize\">Trust gradient 1, Dependable Strenght</span>\r\n            </ion-label>\r\n          </ion-button>\r\n          <ion-button ion-item margin-top expand=\"full\" shape=\"round\" button-round fill=\"outline\" (click)=\"changeTheme('blue-gradient-2')\">\r\n            <ion-label>\r\n              <h2>Blue gradient 2</h2>\r\n              <span text-size-sm  class=\"ion-text-capitalize\">Trust gradient 2, Dependable Strenght</span>\r\n            </ion-label>\r\n          </ion-button>\r\n          <ion-button ion-item margin-top expand=\"full\" shape=\"round\" button-round fill=\"outline\" (click)=\"changeTheme('blue-gradient-3')\">\r\n            <ion-label>\r\n              <h2>Blue gradient 3</h2>\r\n              <span text-size-sm  class=\"ion-text-capitalize\">Trust gradient 3, Dependable Strenght</span>\r\n            </ion-label>\r\n          </ion-button>\r\n          <ion-button ion-item margin-top expand=\"full\" shape=\"round\" button-round fill=\"outline\" (click)=\"changeTheme('dark-gray')\">\r\n            <ion-label>\r\n              <h2>DARK GRAY</h2>\r\n              <span text-size-sm  class=\"ion-text-capitalize\">Balance, Calm</span>\r\n            </ion-label>\r\n          </ion-button>\r\n          <ion-button ion-item margin-top expand=\"full\" shape=\"round\" button-round fill=\"outline\" (click)=\"changeTheme('green')\">\r\n            <ion-label>\r\n              <h2>GREEN</h2>\r\n              <span text-size-sm  class=\"ion-text-capitalize\">Peaceful, Growth Health</span>\r\n            </ion-label>\r\n          </ion-button>\r\n          <ion-button ion-item margin-top expand=\"full\" shape=\"round\" button-round fill=\"outline\" (click)=\"changeTheme('purple')\">\r\n            <ion-label>\r\n              <h2>PURPLE</h2>\r\n              <span text-size-sm  class=\"ion-text-capitalize\">Creative, Imaginitive Wise</span>\r\n            </ion-label>\r\n          </ion-button>\r\n          <ion-button ion-item margin-top expand=\"full\" shape=\"round\" button-round fill=\"outline\" (click)=\"changeTheme('red')\">\r\n            <ion-label>\r\n              <h2>RED</h2>\r\n              <span text-size-sm  class=\"ion-text-capitalize\">Ecxitement, Youtfull Bold</span>\r\n            </ion-label>\r\n          </ion-button>\r\n          <ion-button ion-item margin-top expand=\"full\" shape=\"round\" button-round fill=\"outline\" (click)=\"changeTheme('orange')\">\r\n            <ion-label>\r\n              <h2>ORANGE</h2>\r\n              <span text-size-sm  class=\"ion-text-capitalize\">Frendly, Cheerfull confidence</span>\r\n            </ion-label>\r\n          </ion-button>\r\n          <ion-button ion-item margin-top expand=\"full\" shape=\"round\" button-round fill=\"outline\" (click)=\"changeTheme('yellow')\">\r\n            <ion-label>\r\n              <h2>YELLOW</h2>\r\n              <span text-size-sm class=\"ion-text-capitalize\">Optimism, Clarity Warmth</span>\r\n            </ion-label>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/item-details-settings/item-details-settings.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/item-details-settings/item-details-settings.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ItemDetailsSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsSettingsPageModule", function() { return ItemDetailsSettingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _item_details_settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-details-settings.page */ "./src/app/pages/item-details-settings/item-details-settings.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ItemDetailsSettingsPageModule = /** @class */ (function () {
    function ItemDetailsSettingsPageModule() {
    }
    ItemDetailsSettingsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _item_details_settings_page__WEBPACK_IMPORTED_MODULE_5__["ItemDetailsSettingsPage"]
                    }
                ])
            ],
            declarations: [_item_details_settings_page__WEBPACK_IMPORTED_MODULE_5__["ItemDetailsSettingsPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ItemDetailsSettingsPageModule);
    return ItemDetailsSettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/item-details-settings/item-details-settings.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/item-details-settings/item-details-settings.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[settings-page] [button-round] {\n  height: auto;\n  --padding-top: 5px !important;\n  --padding-bottom: 7px !important; }\n  [settings-page] [button-round] h2 {\n    font-size: 12px;\n    font-weight: 800 !important; }\n  [settings-page] [button-round] span {\n    color: #b2b2b2;\n    letter-spacing: 0;\n    font-weight: 100; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaXRlbS1kZXRhaWxzLXNldHRpbmdzL2l0ZW0tZGV0YWlscy1zZXR0aW5ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1zZXR0aW5ncy9DOlxcVXNlcnNcXE93bmVyXFxVZGVteVxcQ1NGb3JtLVRoZW1lLVRlc3Qvc3JjXFxhcHBcXHBhZ2VzXFxpdGVtLWRldGFpbHMtc2V0dGluZ3NcXGl0ZW0tZGV0YWlscy1zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUNFSSxZQUFZO0VBQ1osNkJBQWM7RUFDZCxnQ0FBaUIsRUFBQTtFREFuQjtJQ0dJLGVBQWU7SUFDZiwyQkFBMkIsRUFBQTtFREQvQjtJQ0lFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pdGVtLWRldGFpbHMtc2V0dGluZ3MvaXRlbS1kZXRhaWxzLXNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltzZXR0aW5ncy1wYWdlXSBbYnV0dG9uLXJvdW5kXSB7XG4gIGhlaWdodDogYXV0bztcbiAgLS1wYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50OyB9XG4gIFtzZXR0aW5ncy1wYWdlXSBbYnV0dG9uLXJvdW5kXSBoMiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDsgfVxuICBbc2V0dGluZ3MtcGFnZV0gW2J1dHRvbi1yb3VuZF0gc3BhbiB7XG4gICAgY29sb3I6ICNiMmIyYjI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDsgfVxuIiwiW3NldHRpbmdzLXBhZ2VdIHtcclxuICBbYnV0dG9uLXJvdW5kXSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAtLXBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgIGNvbG9yOiAjYjJiMmIyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/item-details-settings/item-details-settings.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/item-details-settings/item-details-settings.page.ts ***!
  \***************************************************************************/
/*! exports provided: ItemDetailsSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsSettingsPage", function() { return ItemDetailsSettingsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemDetailsSettingsPage = /** @class */ (function () {
    function ItemDetailsSettingsPage() {
        this.isRTLEnabled = false;
        this.isRTLEnabled = localStorage.getItem('isEnabledRTL') == "true";
    }
    ItemDetailsSettingsPage.prototype.changeTheme = function (name) {
        if (name) {
            document.body.removeAttribute("class");
            document.body.classList.add(name);
        }
    };
    ItemDetailsSettingsPage.prototype.ionChangeRTL = function (e) {
        localStorage.setItem('isEnabledRTL', "" + this.isRTLEnabled);
        document.getElementsByTagName('ion-menu')[0]
            .setAttribute('side', this.isRTLEnabled ? 'end' : 'start');
        document.getElementsByTagName('html')[0]
            .setAttribute('dir', this.isRTLEnabled ? 'rtl' : 'ltr');
    };
    ItemDetailsSettingsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./item-details-settings.html */ "./src/app/pages/item-details-settings/item-details-settings.html"),
            styles: [__webpack_require__(/*! ./item-details-settings.page.scss */ "./src/app/pages/item-details-settings/item-details-settings.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemDetailsSettingsPage);
    return ItemDetailsSettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-item-details-settings-item-details-settings-module.js.map