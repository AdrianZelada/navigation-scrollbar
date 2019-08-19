import {Component, forwardRef, OnInit} from '@angular/core';
import {AbstractSectionComponent} from '../navigation-scrollbar/domains/abstract-section';

@Component({
  selector: 'app-block-one',
  templateUrl: './block-one.component.html',
  styleUrls: ['./block-one.component.sass'],
  providers: [{provide: AbstractSectionComponent, useExisting: forwardRef(() => BlockOneComponent)}]
})
export class BlockOneComponent extends AbstractSectionComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  back(): void {
  }

  getData(): void {
    console.log('BlockOneComponent');
  }

  activated(): void {
    console.log('BlockOneComponent activated');
  }

  inactivated(): void {
    console.log('BlockOneComponent inactivated inactivated');
  }
  //
  // next(data?: any): void {
  // }

}
