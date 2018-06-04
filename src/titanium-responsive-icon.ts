@Polymer.decorators.customElement('titanium-responsive-icon')
class TitaniumResponsiveIcon extends Polymer.Element {

    @Polymer.decorators.property()
    icon: string;

    @Polymer.decorators.property()
    focused: boolean = false;

    @Polymer.decorators.property()
    invalid: boolean = false;

    @Polymer.decorators.property()
    attrForFocused: string = 'focused';

    @Polymer.decorators.property()
    attrForInvalid: string = 'invalid';

    ready() {
        super.ready();

        if (!this.parentElement)
            return;

        this.parentElement.addEventListener(`${this.attrForInvalid}-changed`, (e: any) => {
            if (e.detail)
                this.invalid = e.detail.value;
        });

        this.parentElement.addEventListener(`${this.attrForFocused}-changed`, (e: any) => {
            if (e.detail)
                this.focused = e.detail.value;
        });


    }
}