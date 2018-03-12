/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./profile.component";
import * as i2 from "@ng-bootstrap/ng-bootstrap/modal/modal";
var styles_ProfileComponent = [".modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]{\n      transform: translate(0,50%) !important;\n    }"];
var RenderType_ProfileComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_ProfileComponent, data: {} });
export { RenderType_ProfileComponent as RenderType_ProfileComponent };
export function View_ProfileComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 15, "div", [["class", "profile-card"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(2, 0, null, null, 0, "img", [["alt", ""], ["class", "profile-card__img"], ["src", "/img/user-1.jpg"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(4, 0, null, null, 1, "h4", [["class", "profile-card__name"]], null, null, null, null, null)), (_l()(), i0.ɵted(5, null, ["", " ", ""])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(7, 0, null, null, 1, "h5", [["class", "profile-card__details"]], null, null, null, null, null)), (_l()(), i0.ɵted(8, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(10, 0, null, null, 1, "h5", [["class", "profile-card__details"]], null, null, null, null, null)), (_l()(), i0.ɵted(11, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(13, 0, null, null, 1, "button", [["class", "btn btn--green u-margin-top-small"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.open() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["Profile \u2192"])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.profile.firstName; var currVal_1 = _co.profile.lastName; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_2 = _co.profile.occupation; _ck(_v, 8, 0, currVal_2); var currVal_3 = _co.profile.intrests[0]; _ck(_v, 11, 0, currVal_3); }); }
export function View_ProfileComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-profile", [], null, null, null, View_ProfileComponent_0, RenderType_ProfileComponent)), i0.ɵdid(1, 114688, null, 0, i1.ProfileComponent, [i2.NgbModal], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProfileComponentNgFactory = i0.ɵccf("app-profile", i1.ProfileComponent, View_ProfileComponent_Host_0, { profile: "profile", userId: "userId" }, {}, []);
export { ProfileComponentNgFactory as ProfileComponentNgFactory };
