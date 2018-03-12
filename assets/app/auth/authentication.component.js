import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(authService) {
        this.authService = authService;
    }
    AuthenticationComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AuthenticationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-authentication',
                    templateUrl: './authentication.component.html',
                    styles: [".display-none{\n        display:none;\n    }\n  .form__anchor{\n      padding:2rem;\n  }\n  .form__anchor:hover{\n   color:#eee;\n}\n    "]
                },] },
    ];
    /** @nocollapse */
    AuthenticationComponent.ctorParameters = function () { return [
        { type: AuthService, },
    ]; };
    return AuthenticationComponent;
}());
export { AuthenticationComponent };
