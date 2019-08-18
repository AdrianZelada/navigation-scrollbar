import {Component, Inject, OnInit} from '@angular/core';
import {NavigationScrollbarService} from '../navigation-scrollbar/services/navigation-scrollbar.service';
import {NavigationTwoService} from './navigation-two.service';

@Component({
  selector: 'app-content-two-test',
  templateUrl: './content-two-test.component.html',
  styleUrls: ['./content-two-test.component.sass'],
  providers: [
    {
      provide: NavigationScrollbarService,
      useClass: NavigationTwoService,
    }
  ]
})
export class ContentTwoTestComponent implements OnInit {

  // constructor(private navigationTwoService: NavigationTwoService) { }
  constructor(@Inject(NavigationScrollbarService) public service) { }

  ngOnInit() {
  }

  viewSections() {
    console.log(this.service.view());
  }

}
