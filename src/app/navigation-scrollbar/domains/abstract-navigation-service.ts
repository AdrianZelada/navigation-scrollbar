import {QueryList} from '@angular/core';
import {SectionDirective} from '../section/section.directive';
import {SectionDirectiveInterface} from './abstract-section';

export class AbstractNavigationService {
  public sections: QueryList<SectionDirectiveInterface>;
  public currentSection: SectionDirectiveInterface;
  public prevSection: SectionDirectiveInterface;
  public index: number = -1;
  constructor() {}
  registerSection(data: QueryList<SectionDirectiveInterface>) {
    this.index = 0;
    this.sections = data;
    this.selectStep(this.index);
  }

  next() {
    if (this.currentSection) {
      if (this.currentSection.validate()) {
        if (this.index  < this.sections.length) {
          this.index++;
          this.selectStep(this.index);
        }
      }
    }
  }

  selectStep(index: number) {
    if (index >= 0 && this.index < this.sections.length) {
      this.prevSection = this.step(this.index - 1);
      this.currentSection = this.step(this.index);
      this.currentSection.activated();
      if (this.prevSection) {
        this.prevSection.inactivated();
      }
    }
  }

  step(index) {
    return this.sections.toArray()[index];
  }

  getSections(): QueryList<SectionDirectiveInterface> {
    console.log('hola')
    return this.sections;
  }

  // abstract viewData(): void;
}

