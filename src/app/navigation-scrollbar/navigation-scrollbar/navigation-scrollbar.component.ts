import {AfterContentInit, Component, ContentChildren, OnInit, QueryList, ViewChildren} from '@angular/core';
import {SectionDirective} from '../section/section.directive';
import {AbstractSectionComponent} from '../domains/abstract-section';
import {NavigationScrollbarService} from '../services/navigation-scrollbar.service';

@Component({
  selector: 'zt-navigation-scrollbar',
  templateUrl: './navigation-scrollbar.component.html',
  styleUrls: ['./navigation-scrollbar.component.sass'],
})
export class NavigationScrollbarComponent implements OnInit, AfterContentInit {
  @ContentChildren(SectionDirective) sections: QueryList<SectionDirective>;
  constructor(private navigationScrollbarService: NavigationScrollbarService
  ) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // this.sections.forEach((section: SectionDirective) => {
    //   section.component.getData();
    // });

    this.navigationScrollbarService.registerSection(this.sections);
  }

  viewData() {
    this.navigationScrollbarService.viewData();
  }

  nextStep() {
    this.navigationScrollbarService.next();
  }

}
