# Angular Universal Dropdown

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Usage

Add the package as a dependency to your project using:
> npm install ngx-universal-dropdown

Add module to you app.module imports:

>import { NgxUniversalDropdownModule } from 'ngx-universal-dropdown';
>...
>
>@NgModule({
>    imports: [ NgxUniversalDropdownModule ],
>    ...
>})

Add dropdown component to your template:

><ngx-universal-dropdown
    (onMultiSelectEvent)="onMultiSelectEvent($event)"
    (onSingleSelectEvent)="onSingleSelectEvent($event)"
    [disabled]="false"
    [multiSelect]="true"
    [onHover]="true"
    icon="../assets/icon.svg"
    [options]="['First', 'Second', 'Third', 'Fourth']"
    [values]="[1, 2, 3, 4]"
    >
    Dropdown
  </ngx-universal-dropdown>