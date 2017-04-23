webpackJsonp([1,4],{

/***/ 100:
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

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".static-fab-right {\n  position: fixed;\n  right: 20px;\n  bottom: 10px; }\n\n.static-fab-left {\n  position: fixed;\n  left: 20px;\n  bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".form {\n  width: 500px; }\n\n.full-width {\n  width: 100%; }\n\n.radio-button-group {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.radio-button {\n  margin: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<button md-fab (click)=\"downloadJourney()\" class=\"static-fab-left\">Save</button>\r\n<button md-fab (click)=\"openDialog()\" class=\"static-fab-right\">Add</button>"

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" #journeyDialog=\"ngForm\">\n  <md-input-container class=\"full-width\">\n    <label for=\"journey-id\">Target\n    <input id=\"journey-id\" mdInput disabled [value]=\"data.id\">\n    </label>\n  </md-input-container>\n  <p>\n    <md-input-container class=\"full-width\">\n      <input mdInput placeholder=\"Title\" [(ngModel)]=\"data.title\" name=\"data.title\">\n    </md-input-container>\n  </p>\n\n  <p>\n    <md-input-container class=\"full-width\">\n      <textarea mdInput placeholder=\"Content\" required [(ngModel)]=\"data.content\" name=\"data.content\"></textarea>\n    </md-input-container>\n  </p>\n\n  <p>\n    <md-input-container class=\"full-width\">\n      <label for=\"journey-target\">Target\n      <input id=\"journey-target\" mdInput [value]=\"data.target\" name=\"data.target\" disabled>\n      </label>\n    </md-input-container>\n  </p>\n\n  <p>\n    <label for=\"\">Placement</label>\n    <md-radio-group class=\"radio-button-group\" [(ngModel)]=\"data.placement\" name=\"data.placement\">\n      <md-radio-button class=\"radio-button\" *ngFor=\"let placement of placements\" [value]=\"placement\">\n        {{placement}}\n      </md-radio-button>\n    </md-radio-group>\n  </p>\n</form>\n\n<p>\n  <button md-raised-button (click)=\"dialogRef.close('cancel')\">Cancel</button>\n  <button md-raised-button (click)=\"dialogRef.close(data)\">Save</button>\n</p>"

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87);


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
        template: __webpack_require__(166),
        styles: [__webpack_require__(160)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Optional */])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === "function" && _a || Object, Object])
], DialogComponent);

var _a;
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonService = (function () {
    function CommonService() {
    }
    CommonService.prototype.parseURI = function (url) {
        var _url = new URL(url);
        var unique = "";
        if (_url === undefined) {
            console.error("url is on wrong format", url);
            return "ERROR";
        }
        if (_url.hostname) {
            unique = _url.hostname.replace(/\./g, "_").replace(/\//g, "_");
        }
        if (_url.pathname) {
            var pathName = _url.pathname.replace(/\./g, "_").replace(/\//g, "_");
            unique = unique + "_" + pathName;
        }
        return unique;
    };
    return CommonService;
}());
CommonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CommonService);

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 86;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(100);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialog_dialog_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__journey_step__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_pouch_bd_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_download_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_common_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_pouchdb__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_pouchdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_pouchdb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var AppComponent = (function () {
    function AppComponent(document, _dialog, _pouchDbService, _downloadService, _commonService) {
        this.document = document;
        this._dialog = _dialog;
        this._pouchDbService = _pouchDbService;
        this._downloadService = _downloadService;
        this._commonService = _commonService;
    }
    AppComponent.prototype.ngOnInit = function () {
        window["PouchDB"] = __WEBPACK_IMPORTED_MODULE_7_pouchdb__;
        this.listenToMessage();
    };
    AppComponent.prototype.openDialog = function () {
        var _this = this;
        var selection = window.getSelection();
        this.journeyStep = new __WEBPACK_IMPORTED_MODULE_2__journey_step__["a" /* JourneyStep */]();
        this.journeyStep.title = selection.toString();
        var range = selection.getRangeAt(0);
        this.journeyStep.target = this.generateSelector(range.commonAncestorContainer.parentElement);
        this.config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialogConfig */]();
        this.config.data = this.journeyStep;
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_1__dialog_dialog_component__["a" /* DialogComponent */], this.config);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== null && result !== "cancel") {
                var save = _this._pouchDbService.put(_this.journeyStep.id, _this.journeyStep);
                save.then(function (result) {
                    console.info("saved to the indexdb");
                });
                save.catch(function (error) {
                    console.error(error);
                });
            }
            else {
                console.info("step not added");
            }
        });
    };
    AppComponent.prototype.downloadJourney = function () {
        var _this = this;
        var name = this._commonService.parseURI(window.location.href);
        var journey = this._pouchDbService.get(this._commonService.parseURI(window.location.href));
        journey.then(function (result) {
            _this._downloadService.downloadJSON(JSON.stringify(result), name + ".json");
        });
    };
    // @HostListener('document:mouseover', ['$event'])
    // highlightElementsOnMouseOver($event: MouseEvent) {
    //   let selection = window.getSelection();
    //   if(selection===null || selection.toString()==='')
    //   {
    //     $event.srcElement.classList.add('mark--for-journey');
    //   }
    //   return false;
    // }
    // @HostListener('document:mouseout', ['$event'])
    // highlightElementsOnMouseOut($event: MouseEvent) {
    //   let selection = window.getSelection();
    //   if(selection===null || selection.toString()==='')
    //   {
    //     $event.srcElement.classList.remove('mark--for-journey');
    //   }
    //   return false;
    // }
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
        });
    };
    AppComponent.prototype.generateSelector = function (el) {
        var selector = "";
        var tree = __WEBPACK_IMPORTED_MODULE_9_jquery__(el).parentsUntil(document);
        // generate full selector by traversing DOM from bottom-up
        console.clear();
        for (var i = -1; i < tree.length; i++) {
            var e = i < 0 ? el : tree[i];
            var eCSS = this.querifyElement(e);
            console.log("selectors from selected element", eCSS);
            var query = eCSS.query + (selector.length ? ' > ' : '') + selector;
            var matches = __WEBPACK_IMPORTED_MODULE_9_jquery__(query);
            console.log("QUERY: " + query);
            if (matches.length === 1 && matches[0] === el) {
                console.log('   single match (result)');
                return query;
            }
            else if (matches.length > 1 && i + 1 < tree.length) {
                console.log('   many matches');
                var parentQuery = this.generateSelector(tree[i + 1]);
                var parentMatches = __WEBPACK_IMPORTED_MODULE_9_jquery__(parentQuery).children(eCSS.tag);
                var nthQuery = eCSS.tag + ':nth-of-type(' + (parentMatches.index(el) + 1) + ')' + (selector.length ? ' > ' : '') + selector;
                var parentNthQuery = parentQuery + ' > ' + nthQuery;
                var nthMatches = __WEBPACK_IMPORTED_MODULE_9_jquery__(parentNthQuery);
                console.log("PARENT_QUERY: " + parentQuery);
                console.log("__ELEMENT__");
                console.log(e);
                console.log("__PARENT__");
                console.log(__WEBPACK_IMPORTED_MODULE_9_jquery__(parentQuery)[0]);
                console.log("__PARENT_MATCHES__");
                console.log(parentMatches);
                console.log("PARENT_NTH_QUERY: " + parentNthQuery);
                if (nthMatches.length === 1 && nthMatches[0] === el) {
                    console.log('   single match with nth-of-type (result)');
                    return parentNthQuery;
                }
                else {
                    // console.log('   many matches with nth-of-type (continue)');
                    // selector = nthQuery;
                    return 'ERROR';
                }
            }
            else {
                if (matches.length === 1)
                    console.log("Matched incorrect element. (matches.length = " + matches.length + ")");
                else if (matches.length > 1)
                    console.log("Multiple matches, but traversed entire tree (algorithm not being specific enough).");
                else
                    console.log("Could not find match for tag/id/class selector. (matches.length = " + matches.length + ")");
                return 'ERROR';
            }
        }
        return selector;
    };
    // returns object with element information in query format
    AppComponent.prototype.querifyElement = function (e) {
        if (!e)
            return null;
        var tag = e.tagName.toLowerCase();
        var ids = e.id ? '#' + e.id.trim().split(' ').join('#') : "";
        var classes = e.className ? '.' + this.constructClassQuery(e.className) : "";
        var query = tag + ids + classes;
        return {
            element: e,
            tag: tag,
            ids: ids,
            classes: classes,
            query: query
        };
    };
    AppComponent.prototype.constructClassQuery = function (classCollection) {
        var classes = classCollection.trim().split(" ").filter(function (item) {
            if (item.trim() !== '')
                return item.trim();
        });
        return classes.join(".");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'onBoard-root',
        template: __webpack_require__(165),
        styles: [__webpack_require__(159)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdDialog */], __WEBPACK_IMPORTED_MODULE_4__services_pouch_bd_service__["a" /* PouchBDService */], __WEBPACK_IMPORTED_MODULE_5__services_download_service__["a" /* DownloadService */]]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_pouch_bd_service__["a" /* PouchBDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_pouch_bd_service__["a" /* PouchBDService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_download_service__["a" /* DownloadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_download_service__["a" /* DownloadService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_common_service__["a" /* CommonService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialog_dialog_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_services_common_service__ = __webpack_require__(61);
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
        var rootDiv = document.createElement("onBoard-root");
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
        providers: [__WEBPACK_IMPORTED_MODULE_8_app_services_common_service__["a" /* CommonService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [])
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneyStep; });
var JourneyStep = (function () {
    function JourneyStep() {
        this.title = "";
        this.content = "";
        this.target = "";
        this.placement = "";
        this.id = this.parseURI(window.location.href);
    }
    JourneyStep.prototype.parseURI = function (url) {
        var _url = new URL(url);
        var unique = "";
        if (_url === undefined) {
            console.error("url is on wrong format", url);
            return "ERROR";
        }
        if (_url.hostname) {
            unique = _url.hostname.replace(/\./g, "_").replace(/\//g, "_");
        }
        if (_url.pathname) {
            var pathName = _url.pathname.replace(/\./g, "_").replace(/\//g, "_");
            unique = unique + "_" + pathName;
        }
        return unique;
    };
    return JourneyStep;
}());

//# sourceMappingURL=journey-step.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Journey; });
var Journey = (function () {
    function Journey() {
        this.id = this.parseURI(window.location.href);
        this._id = this.id;
        this.steps = new Array();
    }
    Journey.prototype.parseURI = function (url) {
        var _url = new URL(url);
        var unique = "";
        if (_url === undefined) {
            console.error("url is on wrong format", url);
            return "ERROR";
        }
        if (_url.hostname) {
            unique = _url.hostname.replace(/\./g, "_").replace(/\//g, "_");
        }
        if (_url.pathname) {
            var pathName = _url.pathname.replace(/\./g, "_").replace(/\//g, "_");
            unique = unique + "_" + pathName;
        }
        return unique;
    };
    return Journey;
}());

//# sourceMappingURL=journey.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DownloadService = (function () {
    function DownloadService(_renderer) {
        this._renderer = _renderer;
    }
    DownloadService.prototype.downloadJSON = function (data, fileName) {
        var _data = "";
        if (!data) {
            console.error('Console.save: No data');
            return;
        }
        if (!fileName)
            fileName = 'journey.json';
        if (typeof data === "object") {
            _data = JSON.stringify(data, undefined, 4);
        }
        var blob = new Blob([data], { type: 'text/json' }), e = document.createEvent('MouseEvents'), a = document.createElement('a');
        a.download = fileName;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
        console.log("downlod initilized", _data);
        return true;
    };
    return DownloadService;
}());
DownloadService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Renderer2 */]) === "function" && _a || Object])
], DownloadService);

var _a;
//# sourceMappingURL=download.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__journey__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pouchdb__ = __webpack_require__(74);
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
        this.listner = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PouchBDService);

//# sourceMappingURL=pouch-bd.service.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.bundle.js.map