var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let TitaniumResponsiveIcon = class TitaniumResponsiveIcon extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.focused = false;
        this.invalid = false;
        this.attrForFocused = 'focused';
        this.attrForInvalid = 'invalid';
    }
    ready() {
        super.ready();
        if (!this.parentElement)
            return;
        this.parentElement.addEventListener(`${this.attrForInvalid}-changed`, (e) => {
            if (e.detail)
                this.invalid = e.detail.value;
        });
        this.parentElement.addEventListener(`${this.attrForFocused}-changed`, (e) => {
            if (e.detail)
                this.focused = e.detail.value;
        });
    }
};
__decorate([
    property(),
    __metadata("design:type", String)
], TitaniumResponsiveIcon.prototype, "icon", void 0);
__decorate([
    property(),
    __metadata("design:type", Boolean)
], TitaniumResponsiveIcon.prototype, "focused", void 0);
__decorate([
    property(),
    __metadata("design:type", Boolean)
], TitaniumResponsiveIcon.prototype, "invalid", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], TitaniumResponsiveIcon.prototype, "attrForFocused", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], TitaniumResponsiveIcon.prototype, "attrForInvalid", void 0);
TitaniumResponsiveIcon = __decorate([
    customElement('titanium-responsive-icon')
], TitaniumResponsiveIcon);
