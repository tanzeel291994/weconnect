import { ModalService } from './modal.service';
import { Component, Input, ViewContainerRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr';
var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(toastr, viewContainerRef, activeModal, modalService) {
        this.toastr = toastr;
        this.activeModal = activeModal;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.toastr.setRootViewContainerRef(viewContainerRef);
    }
    NgbdModalContent.prototype.ngOnInit = function () {
        this.vprofile = this.profile;
        this.vuserId = this.userId;
        this.checkIfFollows(this.vprofile, this.userId);
    };
    NgbdModalContent.prototype.follow = function (profile) {
        var _this = this;
        this.modalService.followProfile(profile)
            .subscribe(function (data) { _this.toastr.success('Followed', 'Success!'), _this.isFollowed = true; }, function (error) { return _this.toastr.error('Try again', 'Oops!'); });
    };
    NgbdModalContent.prototype.checkIfFollows = function (profile, userId) {
        // console.log("--------");
        //console.log(profile);
        //console.log(userId);
        if (profile.followers == null) {
            this.isFollowed = false;
        }
        else if (profile.followers.indexOf(userId) > -1)
            this.isFollowed = true;
        else
            this.isFollowed = false;
    };
    NgbdModalContent.prototype.unfollow = function (profile) {
        var _this = this;
        this.modalService.unfollowProfile(profile)
            .subscribe(function (data) { _this.toastr.success('Un Followed', 'Success!'), _this.isFollowed = false; }, function (error) { return _this.toastr.error('Try again', 'Oops!'); });
    };
    NgbdModalContent.decorators = [
        { type: Component, args: [{
                    selector: 'ngbd-modal-content',
                    templateUrl: './modal-basic.html',
                    styleUrls: ['./modal.css']
                },] },
    ];
    /** @nocollapse */
    NgbdModalContent.ctorParameters = function () { return [
        { type: ToastsManager, },
        { type: ViewContainerRef, },
        { type: NgbActiveModal, },
        { type: ModalService, },
    ]; };
    NgbdModalContent.propDecorators = {
        "profile": [{ type: Input },],
        "userId": [{ type: Input },],
    };
    return NgbdModalContent;
}());
export { NgbdModalContent };
