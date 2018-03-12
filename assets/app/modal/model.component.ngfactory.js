/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "./modal.css.shim.ngstyle";
import * as i1 from "@angular/core";
import * as i2 from "@angular/common";
import * as i3 from "./model.component";
import * as i4 from "ng2-toastr/src/toast-manager";
import * as i5 from "@ng-bootstrap/ng-bootstrap/modal/modal-ref";
import * as i6 from "./modal.service";
var styles_NgbdModalContent = [i0.styles];
var RenderType_NgbdModalContent = i1.ɵcrt({ encapsulation: 0, styles: styles_NgbdModalContent, data: {} });
export { RenderType_NgbdModalContent as RenderType_NgbdModalContent };
function View_NgbdModalContent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "button", [["class", "btn btn--green post-add__btn modal-btn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.follow(_co.profile) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["Follow"]))], null, null); }
function View_NgbdModalContent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "button", [["class", "btn btn--green post-add__btn modal-btn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.unfollow(_co.profile) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["Followed"]))], null, null); }
function View_NgbdModalContent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 7, "div", [["class", "form-group u-flex-25"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                          "])), (_l()(), i1.ɵeld(2, 0, null, null, 1, "label", [["for", "intrestInfo"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Interests"])), (_l()(), i1.ɵted(-1, null, ["\n                          "])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [["class", "profile__label"]], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), (_l()(), i1.ɵted(-1, null, ["\n                  "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.profile.interstInfo; _ck(_v, 6, 0, currVal_0); }); }
export function View_NgbdModalContent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 10, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h4", [["class", "modal-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Hi there!"])), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵeld(5, 0, null, null, 4, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.activeModal.dismiss("Cross click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["\n    "])), (_l()(), i1.ɵeld(7, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00D7"])), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵeld(12, 0, null, null, 126, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n    "])), (_l()(), i1.ɵeld(14, 0, null, null, 123, "div", [["class", "profile-box"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵeld(16, 0, null, null, 15, "div", [["class", "flex-between"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵeld(18, 0, null, null, 3, "div", [["class", "profile__photo"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n            "])), (_l()(), i1.ɵeld(20, 0, null, null, 0, "img", [["alt", ""], ["class", "profile__photo--user"], ["src", "/img/user-2.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n          "])), (_l()(), i1.ɵted(-1, null, ["\n        "])), (_l()(), i1.ɵeld(23, 0, null, null, 7, "div", [["class", "profile-header"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \n            "])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NgbdModalContent_1)), i1.ɵdid(26, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵted(-1, null, ["\n            "])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NgbdModalContent_2)), i1.ɵdid(29, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵted(-1, null, ["\n    "])), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵeld(33, 0, null, null, 10, "div", [["class", "profile-flex"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵeld(35, 0, null, null, 7, "div", [["class", "form-group profile-flex-2 u-margin-right-small"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                      "])), (_l()(), i1.ɵeld(37, 0, null, null, 1, "label", [["for", "firstName"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Name"])), (_l()(), i1.ɵted(-1, null, ["\n                      "])), (_l()(), i1.ɵeld(40, 0, null, null, 1, "div", [["class", "profile__label"]], null, null, null, null, null)), (_l()(), i1.ɵted(41, null, ["", " ", ""])), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵeld(45, 0, null, null, 16, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵeld(47, 0, null, null, 13, "div", [["class", "profile-flex"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵeld(49, 0, null, null, 7, "div", [["class", "form-group u-margin-right-small"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                      "])), (_l()(), i1.ɵeld(51, 0, null, null, 1, "label", [["for", "interests1"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Intersts"])), (_l()(), i1.ɵted(-1, null, ["\n                      "])), (_l()(), i1.ɵeld(54, 0, null, null, 1, "div", [["class", "profile__label"]], null, null, null, null, null)), (_l()(), i1.ɵted(55, null, ["", ", ", ""])), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NgbdModalContent_3)), i1.ɵdid(59, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵeld(63, 0, null, null, 40, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵeld(65, 0, null, null, 37, "div", [["class", "profile-flex"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵeld(67, 0, null, null, 7, "div", [["class", "form-group u-margin-right-small"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                      "])), (_l()(), i1.ɵeld(69, 0, null, null, 1, "label", [["for", "status"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Status"])), (_l()(), i1.ɵted(-1, null, ["\n                      "])), (_l()(), i1.ɵeld(72, 0, null, null, 1, "div", [["class", "profile__label"]], null, null, null, null, null)), (_l()(), i1.ɵted(73, null, ["", ""])), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵeld(76, 0, null, null, 7, "div", [["class", "form-group  u-margin-right-small"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                    "])), (_l()(), i1.ɵeld(78, 0, null, null, 1, "label", [["for", "year"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Year of birth"])), (_l()(), i1.ɵted(-1, null, ["\n                    "])), (_l()(), i1.ɵeld(81, 0, null, null, 1, "div", [["class", "profile__label"]], null, null, null, null, null)), (_l()(), i1.ɵted(82, null, ["", ""])), (_l()(), i1.ɵted(-1, null, ["\n                "])), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵeld(85, 0, null, null, 7, "div", [["class", "form-group  u-margin-right-small"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                          "])), (_l()(), i1.ɵeld(87, 0, null, null, 1, "label", [["for", "language"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mother Tounge"])), (_l()(), i1.ɵted(-1, null, ["\n                          "])), (_l()(), i1.ɵeld(90, 0, null, null, 1, "div", [["class", "profile__label"]], null, null, null, null, null)), (_l()(), i1.ɵted(91, null, ["", ""])), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵeld(94, 0, null, null, 7, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                          "])), (_l()(), i1.ɵeld(96, 0, null, null, 1, "label", [["for", "location"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Location"])), (_l()(), i1.ɵted(-1, null, ["\n                          "])), (_l()(), i1.ɵeld(99, 0, null, null, 1, "div", [["class", "profile__label"]], null, null, null, null, null)), (_l()(), i1.ɵted(100, null, ["", ""])), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵeld(105, 0, null, null, 31, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵeld(107, 0, null, null, 28, "div", [["class", "profile-flex"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵeld(109, 0, null, null, 7, "div", [["class", "form-group u-margin-right-small"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                      "])), (_l()(), i1.ɵeld(111, 0, null, null, 1, "label", [["for", "qualification"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Qualification"])), (_l()(), i1.ɵted(-1, null, ["\n                      "])), (_l()(), i1.ɵeld(114, 0, null, null, 1, "div", [["class", "profile__label"]], null, null, null, null, null)), (_l()(), i1.ɵted(115, null, ["", ""])), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵeld(118, 0, null, null, 7, "div", [["class", "form-group u-margin-right-small"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                      "])), (_l()(), i1.ɵeld(120, 0, null, null, 1, "label", [["for", "field"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Field"])), (_l()(), i1.ɵted(-1, null, ["\n                      "])), (_l()(), i1.ɵeld(123, 0, null, null, 1, "div", [["class", "profile__label"]], null, null, null, null, null)), (_l()(), i1.ɵted(124, null, ["", ""])), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵeld(127, 0, null, null, 7, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵeld(129, 0, null, null, 1, "label", [["for", "occupation"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Occupation"])), (_l()(), i1.ɵted(-1, null, ["\n                  "])), (_l()(), i1.ɵeld(132, 0, null, null, 1, "div", [["class", "profile__label"]], null, null, null, null, null)), (_l()(), i1.ɵted(133, null, ["", ""])), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵted(-1, null, ["\n              "])), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵted(-1, null, ["\n    \n"])), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵeld(140, 0, null, null, 4, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵeld(142, 0, null, null, 1, "button", [["class", "btn btn-outline-dark"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.activeModal.close("Close click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["Close"])), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵted(-1, null, ["\n\n\n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isFollowed; _ck(_v, 26, 0, currVal_0); var currVal_1 = _co.isFollowed; _ck(_v, 29, 0, currVal_1); var currVal_6 = _co.profile.interstInfo; _ck(_v, 59, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.profile.firstName; var currVal_3 = _co.profile.lastName; _ck(_v, 41, 0, currVal_2, currVal_3); var currVal_4 = _co.profile.intrests[0]; var currVal_5 = _co.profile.intrests[1]; _ck(_v, 55, 0, currVal_4, currVal_5); var currVal_7 = _co.profile.status; _ck(_v, 73, 0, currVal_7); var currVal_8 = _co.profile.yob; _ck(_v, 82, 0, currVal_8); var currVal_9 = _co.profile.language; _ck(_v, 91, 0, currVal_9); var currVal_10 = _co.profile.location; _ck(_v, 100, 0, currVal_10); var currVal_11 = _co.profile.qualification; _ck(_v, 115, 0, currVal_11); var currVal_12 = _co.profile.field; _ck(_v, 124, 0, currVal_12); var currVal_13 = _co.profile.occupation; _ck(_v, 133, 0, currVal_13); }); }
export function View_NgbdModalContent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 16777216, null, null, 1, "ngbd-modal-content", [], null, null, null, View_NgbdModalContent_0, RenderType_NgbdModalContent)), i1.ɵdid(1, 114688, null, 0, i3.NgbdModalContent, [i4.ToastsManager, i1.ViewContainerRef, i5.NgbActiveModal, i6.ModalService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NgbdModalContentNgFactory = i1.ɵccf("ngbd-modal-content", i3.NgbdModalContent, View_NgbdModalContent_Host_0, { profile: "profile", userId: "userId" }, {}, []);
export { NgbdModalContentNgFactory as NgbdModalContentNgFactory };
