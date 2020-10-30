import { Directive, ElementRef, HostListener } from '@angular/core';
export class IonSelectSearchDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1hbGVydC1zZWFyY2guZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IkQ6L0FkUHJvamVjdHMvSW9uU2VsZWN0U2VhcmNoL3Byb2plY3RzL2lvbi1zZWxlY3Qtc2VhcmNoLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvZGVmYXVsdC1hbGVydC1zZWFyY2guZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtwRSxNQUFNLE9BQU8sd0JBQXdCO0lBS25DLFlBQW9CLFVBQXFCO1FBQXJCLGVBQVUsR0FBVixVQUFVLENBQVc7UUFFdkMsMEdBQTBHO1FBQzFHLHlFQUF5RTtJQUMzRSxDQUFDO0lBRXNCLGFBQWE7UUFFbEMsa0NBQWtDO1FBQ2xDLFVBQVUsQ0FBQyxHQUFFLEVBQUUsR0FBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQSxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUE7SUFFOUMsQ0FBQztJQUVELGFBQWE7UUFFWCxJQUFJLENBQUMsYUFBYSxHQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLFVBQVUsR0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0RSxJQUFJLFlBQVksR0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUMsVUFBVSxDQUFDLENBQUM7UUFFekQsZ0dBQWdHO0lBQ2xHLENBQUM7SUFFRCxnQkFBZ0I7UUFFZCxJQUFJLENBQUMsYUFBYSxHQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxrQkFBa0I7UUFFaEIsSUFBSSxLQUFLLEdBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxzREFBc0Q7UUFDdEQsS0FBSyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRCxLQUFLLENBQUMsRUFBRSxHQUFDLGlCQUFpQixDQUFDO1FBQzNCLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFDLFdBQVcsQ0FBQztRQUNoQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxPQUFPLENBQUM7UUFDM0IsS0FBSyxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ25DLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGVBQWU7UUFFYixJQUFJLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQztRQUMxQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDOUUsNERBQTREO1FBQzVELCtFQUErRTtRQUMvRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUM5QztZQUNFLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDekgsSUFBSSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUMvQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzthQUMvQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzthQUNuRDtTQUNGO0lBQUEsQ0FBQzs7O1lBaEVMLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7O1lBSm1CLFVBQVU7Ozs0QkFnQjNCLFlBQVksU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2lkbERlZmF1bHRdJ1xufSlcbmV4cG9ydCBjbGFzcyBJb25TZWxlY3RTZWFyY2hEaXJlY3RpdmUge1xuXG4gIHNlbGVjdFdyYXBwZXI6IGFueTtcbiAgc2VsZWN0T3B0aW9uczogYW55O1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOkVsZW1lbnRSZWYpIFxuICB7XG4gICAgLy9UaGUgZWxlbWVudCB0byB3aGljaCB0aGlzIGRpcmVjdGl2ZSBpcyBhcHBsaWVkIHRvIGlzIGFjY2Vzc2VkIGJ5IHRoZSBjb25zdHJ1Y3RvcidzIEVsZW1lbnRSZWYgaW5qZWN0YWJsZVxuICAgIC8vIGNvbnNvbGUubG9nKCdJbnNpZGUgSW9uU2VsZWN0U2VhcmNoRGlyZWN0aXZlIGNvbnN0cnVjdG9yJyxlbGVtZW50UmVmKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25TZWxlY3RDbGljaygpXG4gIHtcbiAgICAvLyBjb25zb2xlLmxvZygnT24gU2VsZWN0IENsaWNrJyk7XG4gICAgc2V0VGltZW91dCgoKT0+eyB0aGlzLmluaXREaXJlY3RpdmUoKTt9LDEwMClcbiAgIFxuICB9XG5cbiAgaW5pdERpcmVjdGl2ZSgpXG4gIHtcbiAgICB0aGlzLnNlbGVjdFdyYXBwZXI9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWxlcnQtd3JhcHBlcicpWzBdO1xuICAgIGxldCBzZWxlY3RCb2R5PWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FsZXJ0LXJhZGlvLWdyb3VwJylbMF1cbiAgICBsZXQgaW5wdXRFbGVtZW50PXRoaXMuY3JlYXRlSW5wdXRFbGVtZW50KCk7XG4gICAgdGhpcy5zZWxlY3RXcmFwcGVyLmluc2VydEJlZm9yZShpbnB1dEVsZW1lbnQsc2VsZWN0Qm9keSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnU2VsZWN0IFdyYXBwZXItLScsdGhpcy5zZWxlY3RXcmFwcGVyLCctLS1TZWxlY3QgT3B0aW9ucy0tLScsdGhpcy5zZWxlY3RPcHRpb25zKTtcbiAgfVxuXG4gIGdldFNlbGVjdE9wdGlvbnMoKVxuICB7XG4gICAgdGhpcy5zZWxlY3RPcHRpb25zPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbGVjdC1pbnRlcmZhY2Utb3B0aW9uJyk7IFxuICB9XG5cbiAgY3JlYXRlSW5wdXRFbGVtZW50KClcbiAge1xuICAgIGxldCBpbnB1dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJbnB1dCcpO1xuICAgIC8vIGlucHV0LmZvY3VzKCk7IC8vU2V0IHRoZSBmb2N1cyB0byB0aGUgSW5wdXQgRWxlbWVudFxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdUeXBlIHRvIHNlYXJjaCcpOyBcbiAgICBpbnB1dC5pZD1cImlfc19zZWFyY2hJbnB1dFwiO1xuICAgIGlucHV0LnN0eWxlLnBhZGRpbmc9XCIwLjVlbSAxZW1cIjtcbiAgICBpbnB1dC5zdHlsZS5ib3JkZXI9XCJ1bnNldFwiO1xuICAgIGlucHV0Lm9ua2V5dXA9dGhpcy5vblNlYXJjaENoYW5nZWQ7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgb25TZWFyY2hDaGFuZ2VkKClcbiAgeyAgXG4gICAgdmFyIGlucHV0LCBmaWx0ZXIsIHVsLCBsaSwgYSwgaSwgdHh0VmFsdWU7XG4gICAgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaV9zX3NlYXJjaElucHV0Jyk7XG4gICAgZmlsdGVyID0gaW5wdXQudmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICB0aGlzLnNlbGVjdE9wdGlvbnM9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0LWludGVyZmFjZS1vcHRpb24nKTsgXG4gICAgLy8gY29uc29sZS5sb2coJ0luc2lkZSBvblNlYXJjaENoYW5nZWQnLHRoaXMuc2VsZWN0T3B0aW9ucyk7XG4gICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBsaXN0IGl0ZW1zLCBhbmQgaGlkZSB0aG9zZSB3aG8gZG9uJ3QgbWF0Y2ggdGhlIHNlYXJjaCBxdWVyeVxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnNlbGVjdE9wdGlvbnMubGVuZ3RoOyBpKyspIFxuICAgIHtcbiAgICAgIHR4dFZhbHVlID0gdGhpcy5zZWxlY3RPcHRpb25zLml0ZW0oaSkucXVlcnlTZWxlY3RvcignLmFsZXJ0LWJ1dHRvbi1pbm5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC1yYWRpby1sYWJlbCcpLmlubmVySFRNTDtcbiAgICAgIGlmICh0eHRWYWx1ZS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZmlsdGVyKSA+IC0xKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0T3B0aW9ucy5pdGVtKGkpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RPcHRpb25zLml0ZW0oaSkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH19XG5cbn1cbiJdfQ==