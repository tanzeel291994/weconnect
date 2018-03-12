/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "./post-add.component";
import * as i3 from "ng2-toastr/src/toast-manager";
import * as i4 from "./post.service";
var styles_PostAddComponent = ["select.form-control[_ngcontent-%COMP%]{height:34px !important; }"];
var RenderType_PostAddComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_PostAddComponent, data: {} });
export { RenderType_PostAddComponent as RenderType_PostAddComponent };
export function View_PostAddComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 66, "div", [["class", "post-add-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(2, 0, null, null, 63, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i0.ɵnov(_v, 4).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i0.ɵnov(_v, 4).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit(i0.ɵnov(_v, 4)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i0.ɵdid(3, 16384, null, 0, i1.ɵbf, [], null, null), i0.ɵdid(4, 4210688, [["f", 4]], 0, i1.NgForm, [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), i0.ɵprd(2048, null, i1.ControlContainer, null, [i1.NgForm]), i0.ɵdid(6, 16384, null, 0, i1.NgControlStatusGroup, [i1.ControlContainer], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(8, 0, null, null, 27, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(10, 0, null, null, 1, "label", [["for", "purpose"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Purpose"])), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(13, 0, null, null, 21, "select", [["class", "form-control post-add__select"], ["id", "purpose"], ["name", "type"], ["ngModel", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (i0.ɵnov(_v, 14).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 14).onTouched() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i0.ɵdid(14, 16384, null, 0, i1.SelectControlValueAccessor, [i0.Renderer2, i0.ElementRef], null, null), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.SelectControlValueAccessor]), i0.ɵdid(16, 671744, null, 0, i1.NgModel, [[2, i1.ControlContainer], [8, null], [8, null], [2, i1.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, null), i0.ɵprd(2048, null, i1.NgControl, null, [i1.NgModel]), i0.ɵdid(18, 16384, null, 0, i1.NgControlStatus, [i1.NgControl], null, null), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(20, 0, null, null, 3, "option", [], null, null, null, null, null)), i0.ɵdid(21, 147456, null, 0, i1.NgSelectOption, [i0.ElementRef, i0.Renderer2, [2, i1.SelectControlValueAccessor]], { ngValue: [0, "ngValue"] }, null), i0.ɵdid(22, 147456, null, 0, i1.ɵq, [i0.ElementRef, i0.Renderer2, [8, null]], { ngValue: [0, "ngValue"] }, null), (_l()(), i0.ɵted(-1, null, ["General"])), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(25, 0, null, null, 3, "option", [], null, null, null, null, null)), i0.ɵdid(26, 147456, null, 0, i1.NgSelectOption, [i0.ElementRef, i0.Renderer2, [2, i1.SelectControlValueAccessor]], { ngValue: [0, "ngValue"] }, null), i0.ɵdid(27, 147456, null, 0, i1.ɵq, [i0.ElementRef, i0.Renderer2, [8, null]], { ngValue: [0, "ngValue"] }, null), (_l()(), i0.ɵted(-1, null, ["Looking for Partners"])), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(30, 0, null, null, 3, "option", [], null, null, null, null, null)), i0.ɵdid(31, 147456, null, 0, i1.NgSelectOption, [i0.ElementRef, i0.Renderer2, [2, i1.SelectControlValueAccessor]], { ngValue: [0, "ngValue"] }, null), i0.ɵdid(32, 147456, null, 0, i1.ɵq, [i0.ElementRef, i0.Renderer2, [8, null]], { ngValue: [0, "ngValue"] }, null), (_l()(), i0.ɵted(-1, null, ["Looking to Hire"])), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(37, 0, null, null, 11, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(39, 0, null, null, 1, "label", [["for", "title"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Title:"])), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(42, 0, null, null, 5, "input", [["class", "form-control"], ["id", "title"], ["name", "title"], ["ngModel", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 43)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 43).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 43)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 43)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(43, 16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.DefaultValueAccessor]), i0.ɵdid(45, 671744, null, 0, i1.NgModel, [[2, i1.ControlContainer], [8, null], [8, null], [2, i1.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, null), i0.ɵprd(2048, null, i1.NgControl, null, [i1.NgModel]), i0.ɵdid(47, 16384, null, 0, i1.NgControlStatus, [i1.NgControl], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(50, 0, null, null, 11, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(52, 0, null, null, 1, "label", [["for", "text"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["About"])), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(55, 0, null, null, 5, "textarea", [["class", "form-control"], ["id", "text"], ["name", "text"], ["ngModel", ""], ["rows", "4"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 56)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 56).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 56)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 56)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(56, 16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.DefaultValueAccessor]), i0.ɵdid(58, 671744, null, 0, i1.NgModel, [[2, i1.ControlContainer], [8, null], [8, null], [2, i1.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, null), i0.ɵprd(2048, null, i1.NgControl, null, [i1.NgModel]), i0.ɵdid(60, 16384, null, 0, i1.NgControlStatus, [i1.NgControl], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(63, 0, null, null, 1, "button", [["class", "btn btn--green post-add__btn"], ["type", "submit"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Post"])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var currVal_14 = "type"; var currVal_15 = ""; _ck(_v, 16, 0, currVal_14, currVal_15); var currVal_16 = 1; _ck(_v, 21, 0, currVal_16); var currVal_17 = 1; _ck(_v, 22, 0, currVal_17); var currVal_18 = 2; _ck(_v, 26, 0, currVal_18); var currVal_19 = 2; _ck(_v, 27, 0, currVal_19); var currVal_20 = 3; _ck(_v, 31, 0, currVal_20); var currVal_21 = 3; _ck(_v, 32, 0, currVal_21); var currVal_29 = "title"; var currVal_30 = ""; _ck(_v, 45, 0, currVal_29, currVal_30); var currVal_38 = "text"; var currVal_39 = ""; _ck(_v, 58, 0, currVal_38, currVal_39); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 6).ngClassUntouched; var currVal_1 = i0.ɵnov(_v, 6).ngClassTouched; var currVal_2 = i0.ɵnov(_v, 6).ngClassPristine; var currVal_3 = i0.ɵnov(_v, 6).ngClassDirty; var currVal_4 = i0.ɵnov(_v, 6).ngClassValid; var currVal_5 = i0.ɵnov(_v, 6).ngClassInvalid; var currVal_6 = i0.ɵnov(_v, 6).ngClassPending; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = i0.ɵnov(_v, 18).ngClassUntouched; var currVal_8 = i0.ɵnov(_v, 18).ngClassTouched; var currVal_9 = i0.ɵnov(_v, 18).ngClassPristine; var currVal_10 = i0.ɵnov(_v, 18).ngClassDirty; var currVal_11 = i0.ɵnov(_v, 18).ngClassValid; var currVal_12 = i0.ɵnov(_v, 18).ngClassInvalid; var currVal_13 = i0.ɵnov(_v, 18).ngClassPending; _ck(_v, 13, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_22 = i0.ɵnov(_v, 47).ngClassUntouched; var currVal_23 = i0.ɵnov(_v, 47).ngClassTouched; var currVal_24 = i0.ɵnov(_v, 47).ngClassPristine; var currVal_25 = i0.ɵnov(_v, 47).ngClassDirty; var currVal_26 = i0.ɵnov(_v, 47).ngClassValid; var currVal_27 = i0.ɵnov(_v, 47).ngClassInvalid; var currVal_28 = i0.ɵnov(_v, 47).ngClassPending; _ck(_v, 42, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28); var currVal_31 = i0.ɵnov(_v, 60).ngClassUntouched; var currVal_32 = i0.ɵnov(_v, 60).ngClassTouched; var currVal_33 = i0.ɵnov(_v, 60).ngClassPristine; var currVal_34 = i0.ɵnov(_v, 60).ngClassDirty; var currVal_35 = i0.ɵnov(_v, 60).ngClassValid; var currVal_36 = i0.ɵnov(_v, 60).ngClassInvalid; var currVal_37 = i0.ɵnov(_v, 60).ngClassPending; _ck(_v, 55, 0, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37); }); }
export function View_PostAddComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 1, "app-post-add", [], null, null, null, View_PostAddComponent_0, RenderType_PostAddComponent)), i0.ɵdid(1, 49152, null, 0, i2.PostAddComponent, [i3.ToastsManager, i0.ViewContainerRef, i4.PostService], null, null)], null, null); }
var PostAddComponentNgFactory = i0.ɵccf("app-post-add", i2.PostAddComponent, View_PostAddComponent_Host_0, {}, {}, []);
export { PostAddComponentNgFactory as PostAddComponentNgFactory };
