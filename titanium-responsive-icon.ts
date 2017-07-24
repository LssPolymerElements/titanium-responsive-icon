@customElement('titanium-responsive-icon')
class TitaniumResponsiveIcon extends Polymer.Element {

    @property()
    icon: string;

    @property()
    focused: boolean = false;

    @property()
    invalid: boolean = false;

    @property()
    attrForFocused: string = 'focused';

    @property()
    attrForInvalid: string = 'invalid';

    ready() {
        super.ready();

        if (!this.parentElement)
            return;

        this.parentElement.addEventListener(`${this.attrForInvalid}-changed`, (e: any) => {
            console.log('invalid-changed');
            if (e.detail)
                this.invalid = e.detail.value;
        });

        this.parentElement.addEventListener(`${this.attrForFocused}-changed`, (e: any) => {
            console.log('focused-changed');
            if (e.detail)
                this.focused = e.detail.value;
        });


    }
}