var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var JumbotronComponent = (function () {
    function JumbotronComponent() {
        this.jbtHeading = 'Hello world!';
        this.jbtText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        this.jbtBtnText = "Read more";
        this.jbtBtnURL = '/about';
    }
    JumbotronComponent.prototype.ngOnInit = function () {
    };
    JumbotronComponent = __decorate([
        Component({
            selector: 'app-jumbotron',
            templateUrl: './jumbotron.component.html',
            styleUrls: ['./jumbotron.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], JumbotronComponent);
    return JumbotronComponent;
}());
//# sourceMappingURL=/Users/chethanshetty/Repos/AngularJS/a2website/src/app/components/jumbotron/jumbotron.component.js.map