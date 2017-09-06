import { Component } from '@angular/core';

import { FormComponent } from './form.comopnent';

@Component({
  selector: 'my-app',
  template: `
      <h2>Form generator</h2>
      <dynamic-form></dynamic-form>
  `,
})
export class AppComponent  { name = 'Angular'; }
