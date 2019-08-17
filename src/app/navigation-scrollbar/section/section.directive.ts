import {Directive, OnInit} from '@angular/core';
import {AbstractSectionComponent} from '../domains/abstract-section';

@Directive({
  selector: '[zt-navigation-section]'
})
export class SectionDirective implements OnInit{

  public component: AbstractSectionComponent;
  constructor(private cpt: AbstractSectionComponent) {
    // return cpt;
    this.component = this.cpt;
  }

  ngOnInit() {
    console.log(this.cpt);
  }

}
