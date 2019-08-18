import {Component, Inject} from '@angular/core';
import {NavigationScrollbarService} from './navigation-scrollbar/services/navigation-scrollbar.service';
import {NavigationServiceService} from './navigation-service.service';
import {AbstractNavigationService} from './navigation-scrollbar/domains/abstract-navigation-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [
    {
      provide: NavigationScrollbarService,
      useClass: NavigationServiceService,
    }
  ]
})
export class AppComponent {
  // title = 'navigation-scrollbar';
  // sections: Array<any>;

  constructor(@Inject(NavigationScrollbarService) public service) {
  }

  viewData(): void {
    console.log('AppComponent viewData' , this.service.sections);
  }

  getList() {
    const list = this.service.sections;
    console.log(list);
  }
}
