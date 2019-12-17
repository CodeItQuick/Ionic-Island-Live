(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _intro_page_intro_page_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../intro-page/intro-page.page */ "./src/app/pages/intro-page/intro-page.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { IntroPageModule } from './../intro-page/intro-page.module';


var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                // IntroPageModule,
                _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"], _intro_page_intro_page_page__WEBPACK_IMPORTED_MODULE_7__["IntroPage"]],
            entryComponents: [_intro_page_intro_page_page__WEBPACK_IMPORTED_MODULE_7__["IntroPage"]],
            exports: [_intro_page_intro_page_page__WEBPACK_IMPORTED_MODULE_7__["IntroPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <!-- Header -->\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>{{item.toolbarTitle}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <!-- Content -->\r\n  <ion-content transparent>\r\n    <ion-grid background-size [ngStyle]=\"{'background-image': 'url(' + item.background + ')'}\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" align-items-center align-self-end>\r\n          <div ionic-description text-center>\r\n            <h2 text-size-xs>\r\n              {{item.title}}<br />\r\n              {{item.subtitle}}\r\n            </h2>\r\n            <h3 text-size-sm text-uppercase>{{item.subtitle2}}</h3>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" align-self-end>\r\n          <ion-item lines=\"none\" [href]=\"item.link\">\r\n            <ion-label>\r\n              <p text-wrap text-size-xs>{{item.description}}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n</ion-app>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid,\nion-row {\n  height: 100%; }\n\nion-item {\n  --background: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXE93bmVyXFxVZGVteVxcQ1NGb3JtLVRoZW1lLVRlc3Qvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5QkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkLFxyXG5pb24tcm93IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _services_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/home-service */ "./src/app/services/home-service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _intro_page_intro_page_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../intro-page/intro-page.page */ "./src/app/pages/intro-page/intro-page.page.ts");
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





var HomePage = /** @class */ (function () {
    function HomePage(homeService, modalController) {
        this.homeService = homeService;
        this.modalController = modalController;
        this.item = {};
        this.item = this.homeService.getData();
        var showWizard = localStorage.getItem("SHOW_START_WIZARD");
        if (_services_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].SHOW_START_WIZARD && !showWizard) {
            this.openModal();
        }
    }
    HomePage.prototype.openModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({ component: _intro_page_intro_page_page__WEBPACK_IMPORTED_MODULE_4__["IntroPage"] })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            providers: [_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]],
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/pages/intro-page/intro-page.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/intro-page/intro-page.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Intro Page -->\r\n<ion-app>\r\n  <ion-content>\r\n    <cs-wizard-layout-1 [data]=\"data\" (onFinish)=\"closeModal($event)\"></cs-wizard-layout-1>\r\n  </ion-content>\r\n</ion-app>\r\n"

/***/ }),

/***/ "./src/app/pages/intro-page/intro-page.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/intro-page/intro-page.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludHJvLXBhZ2UvaW50cm8tcGFnZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/intro-page/intro-page.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/intro-page/intro-page.page.ts ***!
  \*****************************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_intro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/intro-service */ "./src/app/services/intro-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroPage = /** @class */ (function () {
    function IntroPage(modalController, navCtrl, service) {
        var _this = this;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.service = service;
        this.data = {};
        this.service.load().subscribe(function (d) {
            _this.data = d;
        });
    }
    IntroPage.prototype.closeModal = function () {
        localStorage.setItem("SHOW_START_WIZARD", 'true');
        this.modalController.dismiss();
    };
    IntroPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./intro-page.page.html */ "./src/app/pages/intro-page/intro-page.page.html"),
            providers: [_services_intro_service__WEBPACK_IMPORTED_MODULE_2__["IntroService"]],
            styles: [__webpack_require__(/*! ./intro-page.page.scss */ "./src/app/pages/intro-page/intro-page.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_intro_service__WEBPACK_IMPORTED_MODULE_2__["IntroService"]])
    ], IntroPage);
    return IntroPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map