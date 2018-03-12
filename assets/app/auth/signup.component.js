import { Component, ViewContainerRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { User } from "./user.model";
import { Router } from "@angular/router";
import { ToastsManager } from "ng2-toastr";
var SignupComponent = /** @class */ (function () {
    function SignupComponent(toastr, viewContainerRef, authService, router) {
        this.toastr = toastr;
        this.authService = authService;
        this.router = router;
        this.viewContainerRef = viewContainerRef;
        this.toastr.setRootViewContainerRef(viewContainerRef);
    }
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new User(this.myForm.value.email, this.myForm.value.password);
        this.authService.signup(user)
            .subscribe(function (data) { return _this.router.navigate(['auth/profile', data.obj._id]); }, function (error) { return _this.toastr.error('It seems you are alreayd registered', 'Oops!'); });
        this.myForm.reset();
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            //firstName: new FormControl(null, Validators.required),
            //lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    };
    SignupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-signup',
                    templateUrl: './signup.component.html'
                },] },
    ];
    /** @nocollapse */
    SignupComponent.ctorParameters = function () { return [
        { type: ToastsManager, },
        { type: ViewContainerRef, },
        { type: AuthService, },
        { type: Router, },
    ]; };
    return SignupComponent;
}());
export { SignupComponent };
