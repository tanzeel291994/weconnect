import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProfileService } from './profile.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(profileService, router) {
        this.profileService = profileService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfile()
            .subscribe(function (data) { _this.profile = data, console.log(data); }, function (error) { return _this.router.navigateByUrl('/auth/signin'); });
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-header',
                    templateUrl: './header.component.html'
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return [
        { type: ProfileService, },
        { type: Router, },
    ]; };
    return HeaderComponent;
}());
export { HeaderComponent };
