(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ion-select-search-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ion-select-search-lib'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var IonSelectSearchDirective = /** @class */ (function () {
        function IonSelectSearchDirective(elementRef) {
            this.elementRef = elementRef;
            //The element to which this directive is applied to is accessed by the constructor's ElementRef injectable
            // console.log('Inside IonSelectSearchDirective constructor',elementRef);
        }
        IonSelectSearchDirective.prototype.onSelectClick = function () {
            var _this = this;
            // console.log('On Select Click');
            setTimeout(function () { _this.initDirective(); }, 100);
        };
        IonSelectSearchDirective.prototype.initDirective = function () {
            this.selectWrapper = document.getElementsByClassName('alert-wrapper')[0];
            var selectBody = document.getElementsByClassName('alert-radio-group')[0];
            var inputElement = this.createInputElement();
            this.selectWrapper.insertBefore(inputElement, selectBody);
            // console.log('Select Wrapper--',this.selectWrapper,'---Select Options---',this.selectOptions);
        };
        IonSelectSearchDirective.prototype.getSelectOptions = function () {
            this.selectOptions = document.getElementsByClassName('select-interface-option');
        };
        IonSelectSearchDirective.prototype.createInputElement = function () {
            var input = document.createElement('Input');
            // input.focus(); //Set the focus to the Input Element
            input.setAttribute('placeholder', 'Type to search');
            input.id = "i_s_searchInput";
            input.style.padding = "0.5em 1em";
            input.style.border = "unset";
            input.onkeyup = this.onSearchChanged;
            return input;
        };
        IonSelectSearchDirective.prototype.onSearchChanged = function () {
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
        };
        return IonSelectSearchDirective;
    }());
    IonSelectSearchDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[idlDefault]'
                },] }
    ];
    IonSelectSearchDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    IonSelectSearchDirective.propDecorators = {
        onSelectClick: [{ type: core.HostListener, args: ['click',] }]
    };

    var IonSelectSearchLibModule = /** @class */ (function () {
        function IonSelectSearchLibModule() {
        }
        return IonSelectSearchLibModule;
    }());
    IonSelectSearchLibModule.decorators = [
        { type: core.NgModule, args: [{
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

    exports.IonSelectSearchLibModule = IonSelectSearchLibModule;
    exports.ɵa = IonSelectSearchDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ion-select-search-lib.umd.js.map
