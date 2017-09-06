import { Component } from '@angular/core';
import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
    selector: 'dynamic-form',
    template: `<div>
        <form>
            <div *ngFor="let element of form" class="row" [ngSwitch]="element.type">
                <div *ngSwitchCase="'text'">
                    <fg-input [elementProperties]="element" ></fg-input>
                </div>
                <div *ngSwitchCase="'email'">
                    <i>email</i>
                </div>
            </div>
        </form>
    </div>`,
})
export class FormComponent  {

    form:object[];

    constructor(){

        this.form = [
            {
                field: 'id',
                type: 'hidden',
            },
            {
                field: 'email',
                type: 'email',
                title: 'Email',
                helpText: 'We will send confirmation email in order to finish registration',
                required: true
            },
            {
                field: 'name',
                type: 'text',
                title: 'User Name',
                disabled: false,
                required: true,
                maxlength: 15
            },
            {
                field: 'password',
                type: 'password',
                title: 'Password',
                helpText: 'Password should be strong',
                required: true,
                minlength: 6
            },
            {
                field: 'howUserFindUs',
                type: 'select',
                title: 'How did you find us?',
                helpText: 'You can keep this field empty',
                select: {
                    emptyText: '-- How did you hear of us? --',
                    options: [
                        { text: 'Facebook', value: 1 },
                        { text: 'LinkedIn', value: 2 },
                        { text: 'Google', value: 3 },
                        { text: 'Friends', value: 4 },
                    ]
                }
            },
            {
                field: 'agreement',
                type: 'checkbox',
                title: 'I accept license agreement',
                helpTextHtml: 'Read <a href="#license  ">license</a> before accept',
                requiredTrue: true,
                validationMessage: {
                    required: 'Please, read and accept agreement'
                },
            }
        ];

    }
}
