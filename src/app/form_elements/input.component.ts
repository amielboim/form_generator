import { Component, Input } from '@angular/core';

import { FormElement } from './base.element'

import { FormComponent } from '../form.comopnent';

@Component({
  selector: 'fg-input',
  template:`<input type="text" value="{{elementProperties.title}}" [disabled]="isDisabled(elementProperties.disabled)">`
})
export class inputComponent extends FormElement {

  @Input()  elementProperties:string;

}
