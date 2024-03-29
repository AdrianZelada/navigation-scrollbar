import {Component, forwardRef, OnInit} from '@angular/core';
import {AbstractSectionComponent} from '../navigation-scrollbar/domains/abstract-section';

@Component({
  selector: 'app-navigation-test',
  templateUrl: './navigation-test.component.html',
  styleUrls: ['./navigation-test.component.sass'],
  providers: [{provide: AbstractSectionComponent, useExisting: forwardRef(() => NavigationTestComponent)}]
})
export class NavigationTestComponent extends AbstractSectionComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  back(): void {
  }

  getData(): void {
    console.log('NavigationTestComponent');
  }

  activated(): void {
    console.log('NavigationTestComponent activated');
  }

  inactivated(): void {
    console.log('NavigationTestComponent inactivated inactivated');
  }

  validate() {
    return false;
  }
  // next(data?: any): void {
  // }

}
