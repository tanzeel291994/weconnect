import { Values } from './../values';
import { ToastsManager } from 'ng2-toastr';
import { ProfileService } from './../profile.service';
import { Component, ViewContainerRef } from '@angular/core';
import { Profile } from '../profile.model';
var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(toastr, viewContainerRef, profileService) {
        this.toastr = toastr;
        this.profileService = profileService;
        this.Intrests = [
            "Cooking",
            "Teaching",
            "Accounting",
            "Handicrafts",
            "Tailoring",
            "Other"
        ];
        this.Status = [
            "Single",
            "Married"
        ];
        this.Languages = [
            "Marathi",
            "Kannad"
        ];
        this.Qualifications = [
            "Masters",
            "Bacholers",
            "Matriculate",
            "Doctorate"
        ];
        this.Locations = [
            "Mumbai",
            "Pune",
            "Nashik",
            "Jalgaon",
            "Thane"
        ];
        this.Occupations = [
            "House Wife",
            "Marketing",
            "Sales",
            "Accountant",
            "Engineer",
            "Doctor"
        ];
        this.viewContainerRef = viewContainerRef;
        this.toastr.setRootViewContainerRef(viewContainerRef);
        this.values = new Values();
    }
    MyProfileComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var profile = new Profile(form.value.firstName, form.value.lastName, form.value.language, form.value.yob, form.value.status, form.value.occupation, form.value.qualification, form.value.field, [form.value.interests1, form.value.interests2], form.value.location, form.value.intrestInfo);
        this.profileService.upadateProfile(profile)
            .subscribe(function (data) { return _this.toastr.success('profile updated', 'Success!'); }, function (error) { return _this.toastr.error('Try again', 'Oops!'); });
        //  form.resetForm();
    };
    MyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfile()
            .subscribe(function (profile) {
            _this.profile = profile; //, console.log(this.profile);
        });
    };
    MyProfileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-profile',
                    templateUrl: './myprofile.component.html',
                    styles: ["select.form-control{height:34px !important; }"]
                },] },
    ];
    /** @nocollapse */
    MyProfileComponent.ctorParameters = function () { return [
        { type: ToastsManager, },
        { type: ViewContainerRef, },
        { type: ProfileService, },
    ]; };
    return MyProfileComponent;
}());
export { MyProfileComponent };
