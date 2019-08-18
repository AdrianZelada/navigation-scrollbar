import {ComponentFactoryResolver, Directive, Input, OnInit, Renderer2, ViewContainerRef} from '@angular/core';
import {AbstractSectionComponent} from '../domains/abstract-section';

@Directive({
  selector: '[zt-navigation-section]'
})
export class SectionDirective implements OnInit {

  public component: AbstractSectionComponent;
  @Input() title: string = 'Titulo';
  public id = Symbol();
  private titleEl: HTMLElement = document.createElement('p');
  constructor(
    private cpt: AbstractSectionComponent,
    private viewContainer: ViewContainerRef,
    private cfResolver: ComponentFactoryResolver,
    private renderer: Renderer2
  ) {
    this.component = this.cpt;
  }

  ngOnInit() {
    const firstNode = this.viewContainer.element.nativeElement.childNodes[0];
    this.titleEl.innerHTML = this.title;
    this.viewContainer.element.nativeElement.style.height = '100px';
    this.viewContainer.element.nativeElement.style.width = '100%';
    this.viewContainer.element.nativeElement.style.display = 'block';
    this.renderer.insertBefore(this.viewContainer.element.nativeElement, this.titleEl, firstNode);
  }

  public setTitle(title: string) {
    this.titleEl.innerHTML = title;
  }

  public actived() {
    this.viewContainer.element.nativeElement.style.background = 'red';
  }

  public inactived() {
    this.viewContainer.element.nativeElement.style.background = 'white';
  }

}
