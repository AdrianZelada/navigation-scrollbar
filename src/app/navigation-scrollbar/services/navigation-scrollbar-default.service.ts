import { Injectable } from '@angular/core';
import {AbstractNavigationService } from '../domains/abstract-navigation-service';

@Injectable()
export class NavigationScrollbarDefaultService extends AbstractNavigationService {
  constructor() {
    super();
  }
}
