import {AfterContentInit, Component, ContentChildren, OnInit, QueryList, ViewChildren} from '@angular/core';
import {SectionDirective} from '../section/section.directive';
import {AbstractSectionComponent} from '../domains/abstract-section';

@Component({
  selector: 'zt-navigation-scrollbar',
  templateUrl: './navigation-scrollbar.component.html',
  styleUrls: ['./navigation-scrollbar.component.sass']
})
export class NavigationScrollbarComponent implements OnInit, AfterContentInit {
  @ContentChildren(SectionDirective) sections: QueryList<SectionDirective>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('this.sections');
    console.log(this.sections);
    this.sections.forEach((section: SectionDirective) => {
      section.component.getData();
    })
  }

}
