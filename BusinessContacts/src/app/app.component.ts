import {Component, OnInit} from '@angular/core';
import { FirebaseService } from "./services/firebase.service";
import {Business} from "./models/business";
import {Category} from "./models/category";


@Component({
  selector: 'bc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ FirebaseService ]
})
export class AppComponent implements OnInit  {
  businesses: Business[];
  categories: Category[];
  appState: string;
  activeKey: string;

  activeCompany: string;
  activeCategory: string;
  activeYearsInBusiness: string;
  activeDescription: string;
  activePhone: string;
  activeEmail: string;
  activeStreetAddress: string;
  activeCity: string;
  activeState: string;
  activeZipcode: string;

  constructor(private _firebaseService: FirebaseService) {}

  ngOnInit() {
    this._firebaseService.getBusinesses().subscribe(businesses => {
      this.businesses = businesses;
    });

    this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  changeState(state, key:any = null) {
    if(key) {
      this.activeKey = key;
    }
    this.appState = state;
  }

  filterCategory(category) {
    if (category != 0) {
      this._firebaseService.getBusinesses(category).subscribe(businesses => {
        this.businesses = businesses;
      });
    }
    else {
      this._firebaseService.getBusinesses().subscribe(businesses => {
        this.businesses = businesses;
      });
    }
  }

  addBusiness(company: string, category: string, years_in_business: string,
              description: string, phone: string, email: string, street_address: string,
              city: string, state: string, zipcode: string)
  {
    var created_at = new Date().toString();
    var newBusiness = {
      category : category,
      city : city,
      company : company,
      description : description,
      email : email,
      phone : phone,
      state : state,
      street_address : street_address,
      years_in_business : years_in_business,
      zipcode : zipcode
    };

    console.log(newBusiness);

    this._firebaseService.addBusiness(newBusiness);
    this.changeState('default');
  }

  showEdit(business) {
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
  }

  updateBusiness() {
    var updBusiness = {
      category : this.activeCategory,
      city : this.activeCity,
      company : this.activeCompany,
      description : this.activeDescription,
      email : this.activeEmail,
      phone : this.activePhone,
      state : this.activeState,
      street_address : this.activeStreetAddress,
      years_in_business : this.activeYearsInBusiness,
      zipcode : this.activeZipcode
    };

    this._firebaseService.updateBusiness(this.activeKey, updBusiness);
    this.changeState('default');
  }

  deleteBusiness(key) {
    this._firebaseService.deleteBusiness(key);
    this.changeState('default');
  }
}
