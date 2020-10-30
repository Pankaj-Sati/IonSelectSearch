import { ElementRef } from '@angular/core';
export declare class IonSelectSearchDirective {
    private elementRef;
    selectWrapper: any;
    selectOptions: any;
    constructor(elementRef: ElementRef);
    onSelectClick(): void;
    initDirective(): void;
    getSelectOptions(): void;
    createInputElement(): HTMLElement;
    onSearchChanged(): void;
}
