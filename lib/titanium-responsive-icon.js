"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    Polymer.decorators.property()
], TitaniumResponsiveIcon.prototype, "icon", void 0);
__decorate([
    Polymer.decorators.property()
], TitaniumResponsiveIcon.prototype, "focused", void 0);
__decorate([
    Polymer.decorators.property()
], TitaniumResponsiveIcon.prototype, "invalid", void 0);
__decorate([
    Polymer.decorators.property()
], TitaniumResponsiveIcon.prototype, "attrForFocused", void 0);
__decorate([
    Polymer.decorators.property()
], TitaniumResponsiveIcon.prototype, "attrForInvalid", void 0);
TitaniumResponsiveIcon = __decorate([
    Polymer.decorators.customElement('titanium-responsive-icon')
], TitaniumResponsiveIcon);
//# sourceMappingURL=titanium-responsive-icon.js.map