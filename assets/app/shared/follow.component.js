import { Component } from '@angular/core';
import { ProfileService } from '../header/profile.service';
import { NgbdModalContent } from '../modal/model.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
var FollowComponent = /** @class */ (function () {
    function FollowComponent(profileService, modalService) {
        this.profileService = profileService;
        this.modalService = modalService;
    }
    FollowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.whoToFollow()
            .subscribe(function (searchResults) {
            console.log(searchResults);
            _this.profiles = searchResults.profiles;
            _this.userId = searchResults.userId;
        });
    };
    FollowComponent.prototype.open = function (profile) {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.profile = profile;
        modalRef.componentInstance.userId = this.userId;
    };
    FollowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-follow',
                    templateUrl: './follow.component.html',
                    styles: [" .heading-tertiary{\n        margin-top:0;\n        padding-top:1.5rem;\n    }"]
                },] },
    ];
    /** @nocollapse */
    FollowComponent.ctorParameters = function () { return [
        { type: ProfileService, },
        { type: NgbModal, },
    ]; };
    return FollowComponent;
}());
export { FollowComponent };
