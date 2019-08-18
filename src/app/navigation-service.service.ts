import { Injectable } from '@angular/core';
import {AbstractNavigationService} from './navigation-scrollbar/domains/abstract-navigation-service';
import {SectionDirective} from './navigation-scrollbar/section/section.directive';

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService extends AbstractNavigationService {

  constructor() {
    super();
  }

  registerSection(sections: any) {
    super.registerSection(sections);
    // this.sections = sections;
    // console.log('this.sections');
    // console.log('this.sections');
    // console.log(this.sections);
    this.sections.forEach((section: SectionDirective) => {
      console.log(section);
      section.setTitle('hola');
    });

    this.sections.first.setTitle('primero');
  }

  viewData() {
    console.log('NavigationScroll App', this.sections);
  }
}
