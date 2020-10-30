import { Directive, ElementRef, HostListener, NgModule } from '@angular/core';

class IonSelectSearchDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        //The element to which this directive is applied to is accessed by the constructor's ElementRef injectable
        // console.log('Inside IonSelectSearchDirective constructor',elementRef);
    }
    onSelectClick() {
        // console.log('On Select Click');
        setTimeout(() => { this.initDirective(); }, 100);
    }
    initDirective() {
        this.selectWrapper = document.getElementsByClassName('alert-wrapper')[0];
        let selectBody = document.getElementsByClassName('alert-radio-group')[0];
        let inputElement = this.createInputElement();
        this.selectWrapper.insertBefore(inputElement, selectBody);
        // console.log('Select Wrapper--',this.selectWrapper,'---Select Options---',this.selectOptions);
    }
    getSelectOptions() {
        this.selectOptions = document.getElementsByClassName('select-interface-option');
    }
    createInputElement() {
        let input = document.createElement('Input');
        // input.focus(); //Set the focus to the Input Element
        input.setAttribute('placeholder', 'Type to search');
        input.id = "i_s_searchInput";
        input.style.padding = "0.5em 1em";
        input.style.border = "unset";
        input.onkeyup = this.onSearchChanged;
        return input;
    }
    onSearchChanged() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('i_s_searchInput');
        filter = input.value.toUpperCase();
        this.selectOptions = document.getElementsByClassName('select-interface-option');
        // console.log('Inside onSearchChanged',this.selectOptions);
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < this.selectOptions.length; i++) {
            txtValue = this.selectOptions.item(i).querySelector('.alert-button-inner').querySelector('.alert-radio-label').innerHTML;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                this.selectOptions.item(i).style.display = "";
            }
            else {
                this.selectOptions.item(i).style.display = "none";
            }
        }
    }
}
IonSelectSearchDirective.decorators = [
    { type: Directive, args: [{
                selector: '[idlDefault]'
            },] }
];
IonSelectSearchDirective.ctorParameters = () => [
    { type: ElementRef }
];
IonSelectSearchDirective.propDecorators = {
    onSelectClick: [{ type: HostListener, args: ['click',] }]
};

class IonSelectSearchLibModule {
}
IonSelectSearchLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IonSelectSearchDirective],
                imports: [],
                exports: [IonSelectSearchDirective]
            },] }
];

/*
 * Public API Surface of ion-select-search-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IonSelectSearchLibModule, IonSelectSearchDirective as ɵa };
//# sourceMappingURL=ion-select-search-lib.js.map
