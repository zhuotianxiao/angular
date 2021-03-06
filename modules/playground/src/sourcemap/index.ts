/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component} from '@angular/core';
import {BaseException} from '@angular/core/src/facade/exceptions';
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'error-app',
  template: `
           <button class="errorButton" (click)="createError()">create error</button>`
})
export class ErrorComponent {
  createError(): void { throw new BaseException('Sourcemap test'); }
}

export function main() {
  bootstrap(ErrorComponent);
}
