# Ion Select Search
Adds input search functionality to <ion-select> component
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) 

## Installation

Run `npm i ion-select-search --save` to install this library. 

## Features

 1. Adds an input element in ion-select for easy searching among the list hundreds of records
 2. Just add a directive `idlDefault` to existing <ion-select> to enable searching

## Usage

After installing this package with `npm i ion-select-search --save`, import the IonSelectSearchLibModule in your main module(app.module.ts) or your lazy-loaded module.
Eg: inside home.module.ts:

`    import { IonSelectSearchLibModule } from 'ion-select-search';

    @NgModule({
      ...
      imports: [
       IonSelectSearchLibModule //Import the main module
      ],
     ...
    })
    export class HomeModule { }`

## Enable searching in <ion-select>

Use the directive `idlDefault` inside an <ion-select>

Note:`To avoid loading all the emojies again and again, don't use *ngIf to show/hide the emoji picker. Instead, set the height of cantainer to 0px for hiding the component.`

Example: 
Inside your .html file
```html<ion-select idlDefault [(ngModel)]="myCategory">
    <ion-select-option value="1">Fruits</ion-select-option>
    <ion-select-option value="2">Vegies</ion-select-option>
    <ion-select-option value="3">Drinks</ion-select-option>
    <ion-select-option value="4">Cakes</ion-select-option>
    <ion-select-option value="5">Pulses</ion-select-option>
    <ion-select-option value="6">Dairy</ion-select-option>
</ion-select>
```

## Further help

For any questions, please raise an issue in the github repository https://github.com/Pankaj-Sati/IonSelectSearch.git   