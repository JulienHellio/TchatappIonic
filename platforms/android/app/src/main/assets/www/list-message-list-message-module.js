(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-message-list-message-module"],{

/***/ "./src/app/list-message/list-message.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/list-message/list-message.module.ts ***!
  \*****************************************************/
/*! exports provided: ListMessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMessagePageModule", function() { return ListMessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-message.page */ "./src/app/list-message/list-message.page.ts");







var routes = [
    {
        path: '',
        component: _list_message_page__WEBPACK_IMPORTED_MODULE_6__["ListMessagePage"]
    }
];
var ListMessagePageModule = /** @class */ (function () {
    function ListMessagePageModule() {
    }
    ListMessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_message_page__WEBPACK_IMPORTED_MODULE_6__["ListMessagePage"]]
        })
    ], ListMessagePageModule);
    return ListMessagePageModule;
}());



/***/ }),

/***/ "./src/app/list-message/list-message.page.html":
/*!*****************************************************!*\
  !*** ./src/app/list-message/list-message.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar>\n      <ion-title>\n          <ion-row><ion-icon name=\"laptop\" class=\"ion-margin-end\"></ion-icon>TChat</ion-row>\n      </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-list-header>\n          Messages  \n        </ion-list-header> \n        <ion-item *ngFor=\"let msg of messages\">\n          <ion-grid>\n          <ion-row>\n            <h4>{{msg.message}}</h4>\n          </ion-row>\n          <ion-row>\n            <p class=\"ion-margin-end\"><ion-icon name=\"contact\" class=\"ion-padding-top\"></ion-icon> {{msg.username}}</p>\n            <p class=\"ion-padding-top\"><i>{{msg.date | date: 'HH:mm dd/MM/yyyy'}}</i></p>\n          </ion-row>\n        </ion-grid>\n        </ion-item>\n      </ion-list>  \n\n</ion-content>\n<ion-footer>\n    <ion-col class=\"ion-margin-bottom\">\n      <ion-input [(ngModel)]=\"message\" clearInput placeholder=\"Your message\" value=\"\"></ion-input>\n      <ion-button expand=\"full\" (click)=\"send();\" >Send</ion-button>\n    </ion-col> \n    <ion-toolbar>\n        \n        <ion-tabs>\n            <ion-tab-bar slot=\"bottom\">\n              <ion-tab-button tab=\"schedule\">\n                  <ion-icon name=\"chatbubbles\"></ion-icon>\n                <ion-label>Messages</ion-label>\n                <ion-badge></ion-badge>\n              </ion-tab-button>\n          \n              <ion-tab-button tab=\"users\" [routerLink]=\"['/user']\">\n                <ion-icon name=\"contacts\"></ion-icon>\n                <ion-label>Users</ion-label>\n              </ion-tab-button>\n          \n            </ion-tab-bar>\n          </ion-tabs>\n      </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/list-message/list-message.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/list-message/list-message.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtbWVzc2FnZS9saXN0LW1lc3NhZ2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/list-message/list-message.page.ts":
/*!***************************************************!*\
  !*** ./src/app/list-message/list-message.page.ts ***!
  \***************************************************/
/*! exports provided: ListMessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMessagePage", function() { return ListMessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages.service */ "./src/app/list-message/messages.service.ts");



var ListMessagePage = /** @class */ (function () {
    function ListMessagePage(messagesService) {
        this.messagesService = messagesService;
        this.messages = [];
    }
    ListMessagePage.prototype.ngOnInit = function () {
        this.load();
    };
    ListMessagePage.prototype.load = function () {
        var _this = this;
        this.messagesService.getMessages()
            .subscribe(function (res) {
            console.log('Messages récupés!');
            _this.messages = res.json();
        }, function (err) {
            console.log('Erreur affichage', err);
        });
    };
    ListMessagePage.prototype.send = function () {
        var _this = this;
        console.log("Register clicked for " + this.message);
        this.messagesService.sendMsg(this.message)
            .subscribe(function (res) {
            console.log('Message envoyé!');
            _this.load();
        }, function (err) {
            console.log('Send Error', err);
        });
    };
    ListMessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-message',
            template: __webpack_require__(/*! ./list-message.page.html */ "./src/app/list-message/list-message.page.html"),
            styles: [__webpack_require__(/*! ./list-message.page.scss */ "./src/app/list-message/list-message.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]])
    ], ListMessagePage);
    return ListMessagePage;
}());



/***/ }),

/***/ "./src/app/list-message/messages.service.ts":
/*!**************************************************!*\
  !*** ./src/app/list-message/messages.service.ts ***!
  \**************************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_Http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/Http */ "./node_modules/@angular/Http/fesm5/http.js");



var MessagesService = /** @class */ (function () {
    function MessagesService(http) {
        this.http = http;
    }
    MessagesService.prototype.getMessages = function () {
        var headers = new _angular_Http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        headers.append('token', sessionStorage.getItem('token'));
        return this.http.get('http://cesi.cleverapps.io/messages', { headers: headers });
    };
    MessagesService.prototype.sendMsg = function (msg) {
        var params = 'message=' + msg;
        console.log(params);
        var headers = new _angular_Http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        headers.append('token', sessionStorage.getItem('token'));
        return this.http.post('http://cesi.cleverapps.io/messages', params, { headers: headers });
    };
    MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_Http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], MessagesService);
    return MessagesService;
}());



/***/ })

}]);
//# sourceMappingURL=list-message-list-message-module.js.map