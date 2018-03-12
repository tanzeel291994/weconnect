import { NgbdModalContent } from './../../modal/model.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Profile } from './../profile.model';
import { Component, Input } from "@angular/core";
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(modalService) {
        this.modalService = modalService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.fullProfile = this.profile;
        this.user = this.userId;
    };
    ProfileComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.profile = this.fullProfile;
        modalRef.componentInstance.userId = this.user;
    };
    ProfileComponent.prototype.getDismissReason = function (reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ProfileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-profile',
                    templateUrl: './profile.component.html',
                    styles: [".modal.fade .modal-dialog{\n      transform: translate(0,50%) !important;\n    }"]
                },] },
    ];
    /** @nocollapse */
    ProfileComponent.ctorParameters = function () { return [
        { type: NgbModal, },
    ]; };
    ProfileComponent.propDecorators = {
        "profile": [{ type: Input },],
        "userId": [{ type: Input },],
    };
    return ProfileComponent;
}());
export { ProfileComponent };
