import {QueryList} from '@angular/core';
import {SectionDirective} from '../section/section.directive';

export class AbstractNavigationService {
  public sections: QueryList<SectionDirective>;
  public currentSection: SectionDirective;
  public prevSection: SectionDirective;
  public index: number = -1;
  constructor() {}
  registerSection(data: QueryList<SectionDirective>) {
    this.sections = data;
    this.next();
  }

  next() {
    this.prevSection = this.currentSection;
    this.index++;
    this.currentSection = this.sections.toArray()[this.index];
    this.currentSection.actived();
    if (this.prevSection) {
      this.prevSection.inactived();
    }
  }

  getSections(): QueryList<SectionDirective> {
    console.log('hola')
    return this.sections;
  }

  // abstract viewData(): void;
}

