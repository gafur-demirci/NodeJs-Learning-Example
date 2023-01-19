"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class Post {
    someFunction() { console.log('someFunc is run'); }
}
__decorate([
    processOne(),
    processTwo(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Post.prototype, "someFunction", null);
// decorator func lar sınıftan nesne üretmeden de çalışır.
function processOne() {
    console.log('processOne has run');
    return function (target, propertyKey, descriptor) {
        console.log('processOne has been called');
    };
}
function processTwo() {
    console.log('processTwo has run');
    return function (target, propertyKey, descriptor) {
        console.log('processTwo has been called');
    };
}
var post = new Post();
post.someFunction();
//import { SimpleGit, CleanOptions, simpleGit } from "simple-git";
//const git : SimpleGit = simpleGit().clean(CleanOptions.FORCE);
console.log("hello");
