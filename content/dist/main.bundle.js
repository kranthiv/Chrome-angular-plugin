webpackJsonp([1,4],{

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".static-fab {\n  position: fixed;\n  right: 20px;\n  bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".example-form {\n  width: 500px; }\n\n.example-full-width {\n  width: 100%; }\n\n.radio-button-group {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.radio-button {\n  margin: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<button md-fab (click)=\"openDialog()\" class=\"static-fab\">Add</button>"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<form  class=\"example-form\"  #journeyDialog=\"ngForm\">\n  <md-input-container class=\"example-full-width\">\n    <input mdInput disabled [value]=\"data.id\">\n  </md-input-container>\n  <p>\n    <md-input-container class=\"example-full-width\">\n      <input mdInput placeholder=\"Title\" [(ngModel)]= \"data.title\" name=\"data.title\">\n    </md-input-container>\n  </p>\n\n  <p>\n    <md-input-container class=\"example-full-width\">\n      <textarea mdInput placeholder=\"Content\" [(ngModel)]=\"data.content\" name=\"data.content\"></textarea>\n    </md-input-container>\n  </p>\n\n  <p>\n    <md-input-container class=\"example-full-width\">\n      <input mdInput placeholder=\"Target\" [(ngModel)]=\"data.target\" name=\"data.target\">\n    </md-input-container>\n  </p>\n \n  <p>\n    <label for=\"\">Placement</label>\n    <md-radio-group class=\"radio-button-group\" [(ngModel)]=\"data.placement\" name=\"data.placement\">\n      <md-radio-button class=\"radio-button\" *ngFor=\"let placement of placements\" [value]=\"placement\">\n        {{placement}}\n      </md-radio-button>\n    </md-radio-group>\n  </p>\n</form>\n<p> <button md-raised-button (click)=\"dialogRef.close(data)\">Save</button> </p>"

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogComponent = (function () {
    function DialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogComponent.prototype.ngOnInit = function () {
        this.placements = new Array();
        this.placements.push("right");
        this.placements.push("left");
        this.placements.push("top");
        this.placements.push("bottom");
    };
    return DialogComponent;
}());
DialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-dialog',
        template: __webpack_require__(163),
        styles: [__webpack_require__(158)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Optional */])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === "function" && _a || Object, Object])
], DialogComponent);

var _a;
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 85;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(98);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialog_dialog_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__journey_step__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_pouch_bd_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_pouchdb__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_pouchdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_pouchdb__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(_dialog, _pouchDbService) {
        this._dialog = _dialog;
        this._pouchDbService = _pouchDbService;
    }
    AppComponent.prototype.ngOnInit = function () {
        window["PouchDB"] = __WEBPACK_IMPORTED_MODULE_5_pouchdb__;
        this.listenToMessage();
    };
    AppComponent.prototype.openDialog = function () {
        var _this = this;
        var selection = window.getSelection();
        this.journeyStep = new __WEBPACK_IMPORTED_MODULE_2__journey_step__["a" /* JourneyStep */]();
        this.journeyStep.title = selection.toString();
        console.log(selection.toString());
        var range = selection.getRangeAt(0);
        console.log(range.commonAncestorContainer.parentNode);
        this.config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialogConfig */]();
        this.config.data = this.journeyStep;
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_1__dialog_dialog_component__["a" /* DialogComponent */], this.config);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== null) {
                var save = _this._pouchDbService.put(_this.journeyStep.id, _this.journeyStep);
                save.then(function (result) {
                    console.info("saved to the indexdb");
                });
                save.catch(function (error) {
                    console.error(error);
                });
            }
        });
    };
    AppComponent.prototype.listenToMessage = function () {
        var self = this;
        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            var selection = window.getSelection();
            self.journeyStep.title = selection.toString();
            console.log(selection.toString());
            var range = selection.getRangeAt(0);
            console.log(range.commonAncestorContainer.parentNode);
            self.config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialogConfig */]();
            self.config.data = self.journeyStep;
            // let allWithinRangeParent = range.commonAncestorContainer;
            // console.log(allWithinRangeParent.parentElement);
            // let allSelected = [];
            // for (let i = 0, el; el = allWithinRangeParent[i]; i++) {
            //   // The second parameter says to include the element 
            //   // even if it's not fully selected
            //   if (selection.containsNode(el, true)) {
            //     allSelected.push(el);
            //   }
            // }
            // console.log('All selected =', allSelected);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(162),
        styles: [__webpack_require__(157)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdDialog */], __WEBPACK_IMPORTED_MODULE_4__services_pouch_bd_service__["a" /* PouchBDService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_pouch_bd_service__["a" /* PouchBDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_pouch_bd_service__["a" /* PouchBDService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialog_dialog_component__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
        var rootDiv = document.createElement("app-root");
        rootDiv.textContent = "......Loading!!!!";
        document.body.appendChild(rootDiv);
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dialog_dialog_component__["a" /* DialogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot()
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_7__dialog_dialog_component__["a" /* DialogComponent */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [])
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneyStep; });
var JourneyStep = (function () {
    function JourneyStep() {
        this.id = window.location.href;
        this.title = "";
        this.content = "";
        this.target = "";
        this.placement = "";
    }
    return JourneyStep;
}());

//# sourceMappingURL=journey-step.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Journey; });
var Journey = (function () {
    function Journey() {
        this.id = window.location.href;
        this._id = window.location.href;
        this.steps = new Array();
    }
    return Journey;
}());

//# sourceMappingURL=journey.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__journey__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pouchdb__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pouchdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pouchdb__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PouchBDService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PouchBDService = (function () {
    function PouchBDService() {
        this.listner = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]();
        if (!this.isInstantiated) {
            this.database = new __WEBPACK_IMPORTED_MODULE_2_pouchdb__("onboard");
            console.log(this.database);
            this.isInstantiated = true;
        }
    }
    PouchBDService.prototype.fetch = function () {
        return this.database.allDocs({ include_docs: true });
    };
    PouchBDService.prototype.get = function (id) {
        return this.database.get(id);
    };
    PouchBDService.prototype.put = function (id, document) {
        var _this = this;
        return this.get(id).then(function (result) {
            console.log(result);
            _this.journey = new __WEBPACK_IMPORTED_MODULE_1__journey__["a" /* Journey */]();
            _this.journey._rev = result._rev;
            _this.journey._id = result._id;
            (_a = _this.journey.steps).push.apply(_a, result.steps.concat([document]));
            return _this.database.put(_this.journey);
            var _a;
        }, function (error) {
            if (error.status === 404) {
                _this.journey = new __WEBPACK_IMPORTED_MODULE_1__journey__["a" /* Journey */]();
                _this.journey.steps.push(document);
                return _this.database.put(_this.journey);
            }
            else {
                return new Promise(function (resolve, reject) { return reject(error); });
            }
        });
    };
    return PouchBDService;
}());
PouchBDService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PouchBDService);

//# sourceMappingURL=pouch-bd.service.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.bundle.js.map