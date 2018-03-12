import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
var ModalService = /** @class */ (function () {
    //post: Post;
    function ModalService(http) {
        this.http = http;
    }
    ModalService.prototype.followProfile = function (profile) {
        //const body = JSON.stringify(profile);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/user/follow/', { userId: profile.userId })
            .map(function (response) {
            var result = response.json();
            console.log(result);
            return result;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    ModalService.prototype.unfollowProfile = function (profile) {
        // const body = JSON.stringify(profile);
        //  const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user/unfollow/', { userId: profile.userId })
            .map(function (response) {
            var result = response.json();
            return result;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    ModalService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ModalService.ctorParameters = function () { return [
        { type: Http, },
    ]; };
    return ModalService;
}());
export { ModalService };
