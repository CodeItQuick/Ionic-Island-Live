(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-items-items-module"],{

/***/ "./src/app/pages/items/items.html":
/*!****************************************!*\
  !*** ./src/app/pages/items/items.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- Content -->\r\n<ion-content>\r\n  <ion-grid no-padding>\r\n    <ion-row no-padding>\r\n      <ion-col size=\"12\" no-padding>\r\n        <ion-list *ngIf=\"pages.length\">\r\n          <ion-item lines=\"none\" *ngFor=\"let item of pages\" (click)=\"openPage(item)\">\r\n            <ion-label>\r\n              <div text-size-xs>{{item.title}}</div>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/items/items.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/items/items.module.ts ***!
  \*********************************************/
/*! exports provided: ItemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function() { return ItemsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items.page */ "./src/app/pages/items/items.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ItemsPageModule = /** @class */ (function () {
    function ItemsPageModule() {
    }
    ItemsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _items_page__WEBPACK_IMPORTED_MODULE_5__["ItemsPage"]
                    }
                ])
            ],
            declarations: [_items_page__WEBPACK_IMPORTED_MODULE_5__["ItemsPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ItemsPageModule);
    return ItemsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/items/items.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/items/items.page.ts ***!
  \*******************************************/
/*! exports provided: ItemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPage", function() { return ItemsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_HttpService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/HttpService */ "./src/app/services/HttpService.ts");
/* harmony import */ var _services_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/validation */ "./src/app/services/validation.ts");
/* harmony import */ var _services_mail_chimp_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/mail-chimp-service */ "./src/app/services/mail-chimp-service.ts");
/* harmony import */ var _services_check_box_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/check-box-service */ "./src/app/services/check-box-service.ts");
/* harmony import */ var _services_text_view_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/text-view-service */ "./src/app/services/text-view-service.ts");
/* harmony import */ var _services_spinner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/spinner-service */ "./src/app/services/spinner-service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/splash-screen-service */ "./src/app/services/splash-screen-service.ts");
/* harmony import */ var _services_search_bar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/search-bar-service */ "./src/app/services/search-bar-service.ts");
/* harmony import */ var _services_wizard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/wizard-service */ "./src/app/services/wizard-service.ts");
/* harmony import */ var _services_tabs_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/tabs-service */ "./src/app/services/tabs-service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/login-service */ "./src/app/services/login-service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/register-service */ "./src/app/services/register-service.ts");
/* harmony import */ var _services_list_view_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/list-view-service */ "./src/app/services/list-view-service.ts");
/* harmony import */ var _services_parallax_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/parallax-service */ "./src/app/services/parallax-service.ts");
/* harmony import */ var _services_image_gallery_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/image-gallery-service */ "./src/app/services/image-gallery-service.ts");
/* harmony import */ var _services_maps_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/maps-service */ "./src/app/services/maps-service.ts");
/* harmony import */ var _services_qrcode_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/qrcode-service */ "./src/app/services/qrcode-service.ts");
/* harmony import */ var _services_radio_button_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/radio-button-service */ "./src/app/services/radio-button-service.ts");
/* harmony import */ var _services_range_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../services/range-service */ "./src/app/services/range-service.ts");
/* harmony import */ var _services_toggle_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../services/toggle-service */ "./src/app/services/toggle-service.ts");
/* harmony import */ var _services_select_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../services/select-service */ "./src/app/services/select-service.ts");
/* harmony import */ var _services_action_sheet_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../services/action-sheet-service */ "./src/app/services/action-sheet-service.ts");
/* harmony import */ var _services_time_line_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../services/time-line-service */ "./src/app/services/time-line-service.ts");
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../services/form-service */ "./src/app/services/form-service.ts");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../services/comment-service */ "./src/app/services/comment-service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../services/profile-service */ "./src/app/services/profile-service.ts");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../services/payment-service */ "./src/app/services/payment-service.ts");
/* harmony import */ var _services_segment_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../services/segment-service */ "./src/app/services/segment-service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../services/alert-service */ "./src/app/services/alert-service.ts");
/* harmony import */ var _services_new_password_services__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./../../services/new-password-services */ "./src/app/services/new-password-services.ts");
/* harmony import */ var _services_forget_password_services__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./../../services/forget-password-services */ "./src/app/services/forget-password-services.ts");
/* harmony import */ var _services_app_settings__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./../../services/app-settings */ "./src/app/services/app-settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




































var ItemsPage = /** @class */ (function () {
    // services: array
    function ItemsPage(navCtrl, textViewService, spinnerService, imageGalleryService, searchBarService, checkBoxService, parallaxService, wizardService, tabsService, listViewService, loginService, registerService, splashScreenService, httpService, validationService, mailChimpService, mapsService, qRCodeService, radioButtonService, rangeService, toggleService, selectService, actionSheetService, timeLineService, formService, commentService, alertCtrl, profileService, segmentService, paymentService, alertService, newPasswordService, forgetPasswordService, route) {
        this.navCtrl = navCtrl;
        this.textViewService = textViewService;
        this.spinnerService = spinnerService;
        this.imageGalleryService = imageGalleryService;
        this.searchBarService = searchBarService;
        this.checkBoxService = checkBoxService;
        this.parallaxService = parallaxService;
        this.wizardService = wizardService;
        this.tabsService = tabsService;
        this.listViewService = listViewService;
        this.loginService = loginService;
        this.registerService = registerService;
        this.splashScreenService = splashScreenService;
        this.httpService = httpService;
        this.validationService = validationService;
        this.mailChimpService = mailChimpService;
        this.mapsService = mapsService;
        this.qRCodeService = qRCodeService;
        this.radioButtonService = radioButtonService;
        this.rangeService = rangeService;
        this.toggleService = toggleService;
        this.selectService = selectService;
        this.actionSheetService = actionSheetService;
        this.timeLineService = timeLineService;
        this.formService = formService;
        this.commentService = commentService;
        this.alertCtrl = alertCtrl;
        this.profileService = profileService;
        this.segmentService = segmentService;
        this.paymentService = paymentService;
        this.alertService = alertService;
        this.newPasswordService = newPasswordService;
        this.forgetPasswordService = forgetPasswordService;
        this.route = route;
        this.pages = {};
        this.listServices = {};
        this.listServices = {
            'checkBoxes': this.checkBoxService,
            'login': this.loginService,
            'register': this.registerService,
            'imageGallery': this.imageGalleryService,
            'textViews': this.textViewService,
            'spinner': this.spinnerService,
            'parallax': this.parallaxService,
            'wizard': this.wizardService,
            'searchBars': this.searchBarService,
            'tabs': this.tabsService,
            'listViews': this.listViewService,
            'splashScreens': this.splashScreenService,
            'maps': this.mapsService,
            'timeline': this.timeLineService,
            'qrcode': this.qRCodeService,
            'radioButton': this.radioButtonService,
            'range': this.rangeService,
            'toggle': this.toggleService,
            'select': this.selectService,
            'form': this.formService,
            'comment': this.commentService,
            'profile': this.profileService,
            'actionSheet': this.actionSheetService,
            'segment': this.segmentService,
            'payment': this.paymentService,
            'alert': this.alertService,
            'newPassword': this.newPasswordService,
            'forgetPassword': this.forgetPasswordService
        };
        this.componentName = this.route.snapshot.paramMap.get('type');
        this.service = this.listServices[this.componentName];
        if (this.service) {
            this.pages = this.service.getAllThemes();
            this.title = this.service.getTitle();
        }
    }
    ItemsPage.prototype.openPage = function (page) {
        if (_services_app_settings__WEBPACK_IMPORTED_MODULE_34__["AppSettings"].SUBSCRIBE) {
            if (!this.mailChimpService.isShowMailChimpForm()) {
                this.showPrompt();
                this.mailChimpService.setMailChimpForm(true);
            }
            else {
                this.navCtrl.navigateForward([page.url], {});
            }
        }
        else {
            this.navCtrl.navigateForward([page.url], {});
        }
    };
    ItemsPage.prototype.showPrompt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alertDialog;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'STAY TUNED FOR NEW THEMES AND FREEBIES',
                            message: 'SUBSCRIBE TO <br> OUR NEWSLETTER',
                            cssClass: 'basic-dialog',
                            inputs: [
                                {
                                    name: 'email',
                                    placeholder: 'Your e-mail'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: 'Send',
                                    handler: function (data) {
                                        if (data) {
                                            if (_this.validationService.isMail(data.email)) {
                                                _this.httpService.sendData(data.email).subscribe(function (_) {
                                                    console.log('sucess');
                                                    _this.mailChimpService.hideMailChimp();
                                                }, function (err) {
                                                    console.log('err');
                                                    _this.mailChimpService.hideMailChimp();
                                                }, null);
                                            }
                                            else {
                                                return false;
                                            }
                                        }
                                        else {
                                            return false;
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alertDialog = _a.sent();
                        alertDialog.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ItemsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./items.html */ "./src/app/pages/items/items.html"),
            providers: [
                _services_mail_chimp_service__WEBPACK_IMPORTED_MODULE_5__["MailChimpService"], _services_text_view_service__WEBPACK_IMPORTED_MODULE_7__["TextViewService"], _services_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"],
                _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["SplashScreenService"], _services_login_service__WEBPACK_IMPORTED_MODULE_13__["LoginService"], _services_register_service__WEBPACK_IMPORTED_MODULE_14__["RegisterService"],
                _services_search_bar_service__WEBPACK_IMPORTED_MODULE_10__["SearchBarService"], _services_check_box_service__WEBPACK_IMPORTED_MODULE_6__["CheckBoxService"], _services_wizard_service__WEBPACK_IMPORTED_MODULE_11__["WizardService"], _services_tabs_service__WEBPACK_IMPORTED_MODULE_12__["TabsService"], _services_parallax_service__WEBPACK_IMPORTED_MODULE_16__["ParallaxService"],
                _services_list_view_service__WEBPACK_IMPORTED_MODULE_15__["ListViewService"], _services_image_gallery_service__WEBPACK_IMPORTED_MODULE_17__["ImageGalleryService"], _services_new_password_services__WEBPACK_IMPORTED_MODULE_32__["NewPasswordService"], _services_forget_password_services__WEBPACK_IMPORTED_MODULE_33__["ForgetPasswordService"],
                _services_HttpService__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _services_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationService"], _services_maps_service__WEBPACK_IMPORTED_MODULE_18__["MapsService"], _services_qrcode_service__WEBPACK_IMPORTED_MODULE_19__["QRCodeService"], _services_radio_button_service__WEBPACK_IMPORTED_MODULE_20__["RadioButtonService"], _services_range_service__WEBPACK_IMPORTED_MODULE_21__["RangeService"],
                _services_toggle_service__WEBPACK_IMPORTED_MODULE_22__["ToggleService"], _services_select_service__WEBPACK_IMPORTED_MODULE_23__["SelectService"], _services_action_sheet_service__WEBPACK_IMPORTED_MODULE_24__["ActionSheetService"], _services_time_line_service__WEBPACK_IMPORTED_MODULE_25__["TimeLineService"], _services_form_service__WEBPACK_IMPORTED_MODULE_26__["FormService"], _services_comment_service__WEBPACK_IMPORTED_MODULE_27__["CommentService"],
                _services_profile_service__WEBPACK_IMPORTED_MODULE_28__["ProfileService"], _services_segment_service__WEBPACK_IMPORTED_MODULE_30__["SegmentService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_31__["AlertService"], _services_payment_service__WEBPACK_IMPORTED_MODULE_29__["PaymentService"]
            ]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_text_view_service__WEBPACK_IMPORTED_MODULE_7__["TextViewService"],
            _services_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"],
            _services_image_gallery_service__WEBPACK_IMPORTED_MODULE_17__["ImageGalleryService"],
            _services_search_bar_service__WEBPACK_IMPORTED_MODULE_10__["SearchBarService"],
            _services_check_box_service__WEBPACK_IMPORTED_MODULE_6__["CheckBoxService"],
            _services_parallax_service__WEBPACK_IMPORTED_MODULE_16__["ParallaxService"],
            _services_wizard_service__WEBPACK_IMPORTED_MODULE_11__["WizardService"],
            _services_tabs_service__WEBPACK_IMPORTED_MODULE_12__["TabsService"],
            _services_list_view_service__WEBPACK_IMPORTED_MODULE_15__["ListViewService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_13__["LoginService"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_14__["RegisterService"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["SplashScreenService"],
            _services_HttpService__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _services_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationService"],
            _services_mail_chimp_service__WEBPACK_IMPORTED_MODULE_5__["MailChimpService"],
            _services_maps_service__WEBPACK_IMPORTED_MODULE_18__["MapsService"],
            _services_qrcode_service__WEBPACK_IMPORTED_MODULE_19__["QRCodeService"],
            _services_radio_button_service__WEBPACK_IMPORTED_MODULE_20__["RadioButtonService"],
            _services_range_service__WEBPACK_IMPORTED_MODULE_21__["RangeService"],
            _services_toggle_service__WEBPACK_IMPORTED_MODULE_22__["ToggleService"],
            _services_select_service__WEBPACK_IMPORTED_MODULE_23__["SelectService"],
            _services_action_sheet_service__WEBPACK_IMPORTED_MODULE_24__["ActionSheetService"],
            _services_time_line_service__WEBPACK_IMPORTED_MODULE_25__["TimeLineService"],
            _services_form_service__WEBPACK_IMPORTED_MODULE_26__["FormService"],
            _services_comment_service__WEBPACK_IMPORTED_MODULE_27__["CommentService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _services_profile_service__WEBPACK_IMPORTED_MODULE_28__["ProfileService"],
            _services_segment_service__WEBPACK_IMPORTED_MODULE_30__["SegmentService"],
            _services_payment_service__WEBPACK_IMPORTED_MODULE_29__["PaymentService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_31__["AlertService"],
            _services_new_password_services__WEBPACK_IMPORTED_MODULE_32__["NewPasswordService"],
            _services_forget_password_services__WEBPACK_IMPORTED_MODULE_33__["ForgetPasswordService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ItemsPage);
    return ItemsPage;
}());



/***/ }),

/***/ "./src/app/services/HttpService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/HttpService.ts ***!
  \*****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.sendData = function (email) {
        var url = 'https://facebook.us14.list-manage.com/subscribe/post-json?u=2c0f7baa8dc004a62ff3922e3&id=456928d791&EMAIL='
            + encodeURI(email) + '&b_2c0f7baa8dc004a62ff3922e3_456928d791';
        return this.http.get(url);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/list-view-service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/list-view-service.ts ***!
  \***********************************************/
/*! exports provided: ListViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewService", function() { return ListViewService; });
var ListViewService = /** @class */ (function () {
    function ListViewService() {
        this.getId = function () { return 'listViews'; };
        this.getTitle = function () { return 'List views'; };
        // Submenu for list
        this.getAllThemes = function () {
            return [
                { 'url': 'subitems/expandable', 'title': 'Expandable', 'theme': 'expandable' },
                { 'url': 'subitems/dragAndDrop', 'title': 'Drag&Drop', 'theme': 'dragAndDrop' },
                { 'url': 'subitems/swipeToDismiss', 'title': 'Swipe-to-dismiss', 'theme': 'swipeToDismiss' },
                { 'url': 'subitems/googleCards', 'title': 'Google Cards', 'theme': 'googleCards' },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return [];
        };
    }
    ListViewService.prototype.load = function (url) {
        return null;
    };
    return ListViewService;
}());



/***/ }),

/***/ "./src/app/services/mail-chimp-service.ts":
/*!************************************************!*\
  !*** ./src/app/services/mail-chimp-service.ts ***!
  \************************************************/
/*! exports provided: MailChimpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailChimpService", function() { return MailChimpService; });
var MailChimpService = /** @class */ (function () {
    function MailChimpService() {
    }
    MailChimpService.prototype.isShowMailChimpForm = function () {
        var mailChimp = localStorage.getItem('mailChimp') === 'true';
        var mailChimpLocal = localStorage.getItem('mailChimpLocal') === 'true';
        if (mailChimp) {
            return true;
        }
        else {
            return mailChimpLocal;
        }
    };
    MailChimpService.prototype.setMailChimpForm = function (isVisible) {
        localStorage.setItem('mailChimpLocal', isVisible + '');
    };
    MailChimpService.prototype.hideMailChimp = function () {
        localStorage.setItem('mailChimp', 'true');
    };
    return MailChimpService;
}());



/***/ }),

/***/ "./src/app/services/validation.ts":
/*!****************************************!*\
  !*** ./src/app/services/validation.ts ***!
  \****************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/**
 * Created by DRAGAN on 3/22/2017.
 */
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.isMail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidationService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-items-items-module.js.map