import { ProfileService } from './../header/profile.service';
import { Profile } from './../header/profile.model';
import { ToastsManager } from 'ng2-toastr';
import { Component, ViewContainerRef } from '@angular/core';
import { Values } from '../header/values';
import { ActivatedRoute, Router } from '@angular/router';
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(toastr, viewContainerRef, profileService, route, router) {
        this.toastr = toastr;
        this.profileService = profileService;
        this.route = route;
        this.router = router;
        this.viewContainerRef = viewContainerRef;
        this.toastr.setRootViewContainerRef(viewContainerRef);
        this.values = new Values();
        this.userId = route.snapshot.params['id'];
    }
    RegistrationComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.value.firstName == "" ||
            form.value.lastName == "" ||
            form.value.language == "" ||
            form.value.yob == "" ||
            form.value.status == "" ||
            form.value.interests1 == "" || form.value.interests2 == "" || form.value.location == "" ||
            form.value.occupation == "" ||
            form.value.qualification == "" ||
            form.value.field == "") {
            this.toastr.error('Please fill the complete form ,later you could update it', 'Oops!');
            return;
        }
        var profile = new Profile(form.value.firstName, form.value.lastName, form.value.language, form.value.year, form.value.status, form.value.occupation, form.value.qualification, form.value.field, [form.value.interests1, form.value.interests2], form.value.location, form.value.intrestInfo, this.userId);
        this.profileService.createProfile(profile)
            .subscribe(function (data) { return _this.router.navigateByUrl('/auth/signin'); }, function (error) { return _this.toastr.error('Try again', 'Oops!'); });
        //  form.resetForm();
    };
    RegistrationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-profile',
                    templateUrl: './registration.component.html',
                    styles: ["select.form-control{height:34px !important; }\n    .register-heading{\n        padding:2rem;\n        color:#eee;\n    }\n    label{\n        color:#eee !important;\n    }\n    "]
                },] },
    ];
    /** @nocollapse */
    RegistrationComponent.ctorParameters = function () { return [
        { type: ToastsManager, },
        { type: ViewContainerRef, },
        { type: ProfileService, },
        { type: ActivatedRoute, },
        { type: Router, },
    ]; };
    return RegistrationComponent;
}());
export { RegistrationComponent };
