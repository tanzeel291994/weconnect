import { ModalService } from './../../modal/modal.service';
import { ProfileService } from './../profile.service';
import { ToastsManager } from 'ng2-toastr';
import { Component, ViewContainerRef } from '@angular/core';
var FindComponent = /** @class */ (function () {
    function FindComponent(toastr, viewContainerRef, profileService, modalService) {
        this.toastr = toastr;
        this.profileService = profileService;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.toastr.setRootViewContainerRef(viewContainerRef);
    }
    // searchResults:SearchResults;
    // searchResults:SearchResults;
    FindComponent.prototype.onSubmit = 
    // searchResults:SearchResults;
    function (form) {
        var _this = this;
        var term = form.value.term;
        this.profileService.searchProfile(term)
            .subscribe(function (searchResults) {
            // this.searchResults=searchResults
            // this.searchResults=searchResults
            _this.profiles = searchResults.profiles;
            _this.userId = searchResults.userId;
            // console.log(searchResults);
        });
        //  form.resetForm();
    };
    FindComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-find',
                    templateUrl: './find.component.html',
                    styles: [".modal.fade .modal-dialog{\n        transform: translate(0,50%) !important;\n      }"]
                },] },
    ];
    /** @nocollapse */
    FindComponent.ctorParameters = function () { return [
        { type: ToastsManager, },
        { type: ViewContainerRef, },
        { type: ProfileService, },
        { type: ModalService, },
    ]; };
    return FindComponent;
}());
export { FindComponent };
