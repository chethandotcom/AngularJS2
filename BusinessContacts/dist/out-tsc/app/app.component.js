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
import { FirebaseService } from "./services/firebase.service";
export var AppComponent = (function () {
    function AppComponent(_firebaseService) {
        this._firebaseService = _firebaseService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._firebaseService.getBusinesses().subscribe(function (businesses) {
            _this.businesses = businesses;
        });
        this._firebaseService.getCategories().subscribe(function (categories) {
            _this.categories = categories;
        });
    };
    AppComponent.prototype.changeState = function (state, key) {
        if (key === void 0) { key = null; }
        if (key) {
            this.activeKey = key;
        }
        this.appState = state;
    };
    AppComponent.prototype.filterCategory = function (category) {
        var _this = this;
        if (category != 0) {
            this._firebaseService.getBusinesses(category).subscribe(function (businesses) {
                _this.businesses = businesses;
            });
        }
        else {
            this._firebaseService.getBusinesses().subscribe(function (businesses) {
                _this.businesses = businesses;
            });
        }
    };
    AppComponent.prototype.addBusiness = function (company, category, years_in_business, description, phone, email, street_address, city, state, zipcode) {
        var created_at = new Date().toString();
        var newBusiness = {
            category: category,
            city: city,
            company: company,
            description: description,
            email: email,
            phone: phone,
            state: state,
            street_address: street_address,
            years_in_business: years_in_business,
            zipcode: zipcode
        };
        console.log(newBusiness);
        this._firebaseService.addBusiness(newBusiness);
        this.changeState('default');
    };
    AppComponent.prototype.showEdit = function (business) {
        this.changeState('edit', business.$key);
        this.activeCompany = business.company;
        this.activeCategory = business.category;
        this.activeYearsInBusiness = business.years_in_business;
        this.activeDescription = business.description;
        this.activePhone = business.phone;
        this.activeEmail = business.email;
        this.activeStreetAddress = business.street_address;
        this.activeCity = business.city;
        this.activeState = business.state;
        this.activeZipcode = business.zipcode;
    };
    AppComponent.prototype.updateBusiness = function () {
        var updBusiness = {
            category: this.activeCategory,
            city: this.activeCity,
            company: this.activeCompany,
            description: this.activeDescription,
            email: this.activeEmail,
            phone: this.activePhone,
            state: this.activeState,
            street_address: this.activeStreetAddress,
            years_in_business: this.activeYearsInBusiness,
            zipcode: this.activeZipcode
        };
        this._firebaseService.updateBusiness(this.activeKey, updBusiness);
        this.changeState('default');
    };
    AppComponent.prototype.deleteBusiness = function (key) {
        this._firebaseService.deleteBusiness(key);
        this.changeState('default');
    };
    AppComponent = __decorate([
        Component({
            selector: 'bc-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [FirebaseService]
        }), 
        __metadata('design:paramtypes', [FirebaseService])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/chethanshetty/Repos/AngularJS/buisinesscontact/src/app/app.component.js.map