import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationScrollbarComponent } from './navigation-scrollbar/navigation-scrollbar.component';
import { SectionDirective } from './section/section.directive';

@NgModule({
  declarations: [NavigationScrollbarComponent, SectionDirective],
  exports: [NavigationScrollbarComponent, SectionDirective],
  // entryComponents: [SectionDirective],
  imports: [
    CommonModule
  ]
})
export class NavigationScrollbarModule { }
