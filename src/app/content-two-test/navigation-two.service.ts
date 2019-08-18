import { Injectable } from '@angular/core';
import {AbstractNavigationService } from '../navigation-scrollbar/domains/abstract-navigation-service';

@Injectable({
  providedIn: 'root'
})
export class NavigationTwoService extends AbstractNavigationService {
  // sections: Array<any> = [];
  constructor() {
    super();
  }

  // registerSection(sections: any) {
  //   this.sections = sections;
  //   console.log('navigation two', this.sections);
  // }

  viewData() {
    console.log('NavigationTwoService Two', this.sections);
    console.log(this);
  }

  view() {
    console.log('NavigationTwoService View', this.sections);
    return this.sections;
  }
}
