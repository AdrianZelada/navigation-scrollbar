import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationScrollbarComponent } from './navigation-scrollbar/navigation-scrollbar.component';
import { SectionDirective } from './section/section.directive';
import { SectionTitleComponent } from './section-title/section-title.component';

@NgModule({
  declarations: [NavigationScrollbarComponent, SectionDirective, SectionTitleComponent],
  exports: [NavigationScrollbarComponent, SectionDirective],
  entryComponents: [SectionTitleComponent],
  imports: [
    CommonModule
  ]
})
export class NavigationScrollbarModule { }
