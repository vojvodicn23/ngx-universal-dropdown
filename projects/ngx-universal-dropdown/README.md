# Angular Universal Dropdown

## Usage

Add the package as a dependency to your project using:

npm install ngx-universal-dropdown

Add module to you app.module imports:

```typescript
import { NgxUniversalDropdownModule } from 'ngx-universal-dropdown';
...
@NgModule({
    imports: [ NgxUniversalDropdownModule ],
    ...
})
```

Add dropdown component to your template:

```typescript
<ngx-universal-dropdown
    (onMultiSelectEvent)="onMultiSelectEvent($event)" // active when multiSelect is true
    (onSingleSelectEvent)="onSingleSelectEvent($event)" // active when multiSelect is false
    [disabled]="false" // disable dropdown
    [multiSelect]="true" // when true dropdown is multi-select, otherwise is single-select (default value: false)
    [onHover]="true" // when true dropdown is opening on hover, otherwise on click (default value: false)
    icon="../assets/icon.svg" // add icon to the left side of the button - optional
    [options]="['First', 'Second', 'Third', 'Fourth']"
    [values]="[1, 2, 3, 4]"
    >
    Dropdown
</ngx-universal-dropdown>
  ```