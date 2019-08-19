import {
  AfterContentInit,
  Component,
  ContentChildren,
  Host,
  OnInit,
  Optional,
  QueryList,
  SkipSelf
} from '@angular/core';
import {SectionDirective} from '../section/section.directive';
import {NavigationScrollbarService} from '../services/navigation-scrollbar.service';
import {NavigationScrollbarDefaultService} from '../services/navigation-scrollbar-default.service';
import {AbstractNavigationService} from '../domains/abstract-navigation-service';
import {SectionDirectiveInterface} from '../domains/abstract-section';

@Component({
  selector: 'zt-navigation-scrollbar',
  templateUrl: './navigation-scrollbar.component.html',
  styleUrls: ['./navigation-scrollbar.component.sass'],
  providers: [NavigationScrollbarDefaultService]
})
export class NavigationScrollbarComponent implements OnInit, AfterContentInit {
  @ContentChildren(SectionDirective) sections: QueryList<SectionDirectiveInterface>;
  navigationScrollbarService: AbstractNavigationService;
  constructor(
    @Host() @SkipSelf() @Optional() public serviceHost: NavigationScrollbarService,
    public serviceDefault: NavigationScrollbarDefaultService
  ) {
    this.navigationScrollbarService = serviceHost || serviceDefault;
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.navigationScrollbarService.registerSection(this.sections);
  }

  nextStep() {
    this.navigationScrollbarService.next();
  }

}
