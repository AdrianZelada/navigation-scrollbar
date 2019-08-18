import { Injectable } from '@angular/core';
import {AbstractNavigationService } from '../domains/abstract-navigation-service';

@Injectable({
  providedIn: 'root'
})
export class NavigationScrollbarService extends AbstractNavigationService {

  // sections: Array<any> = [];
  constructor() {
    super();
  }

  // registerSection(sections: any) {
  //   this.sections = sections;
  //   console.log(this.sections);
  // }

  viewData() {
    console.log('NavigationScrollbarService Primary', this.sections);
  }
}
