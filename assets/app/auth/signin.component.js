import { Component, ViewContainerRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "./user.model";
import { AuthService } from "./auth.service";
import { ToastsManager } from "ng2-toastr";
var SigninComponent = /** @class */ (function () {
    function SigninComponent(toastr, viewContainerRef, authService, router) {
        this.toastr = toastr;
        this.authService = authService;
        this.router = router;
        this.viewContainerRef = viewContainerRef;
        this.toastr.setRootViewContainerRef(viewContainerRef);
    }
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new User(this.myForm.value.email, this.myForm.value.password);
        this.authService.signin(user)
            .subscribe(function (data) {
            //localStorage.setItem('token', data.token);
            //localStorage.setItem('userId', data.userId);
            //localStorage.setItem('token', data.token);
            //localStorage.setItem('userId', data.userId);
            _this.router.navigateByUrl('/main');
        }, function (error) { return _this.toastr.error('In valid login password pair', 'Oops!'); });
        this.myForm.reset();
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    };
    SigninComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-signin',
                    templateUrl: './signin.component.html'
                },] },
    ];
    /** @nocollapse */
    SigninComponent.ctorParameters = function () { return [
        { type: ToastsManager, },
        { type: ViewContainerRef, },
        { type: AuthService, },
        { type: Router, },
    ]; };
    return SigninComponent;
}());
export { SigninComponent };
