import { Profile } from './profile.model';
import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
var ProfileService = /** @class */ (function () {
    // private posts: Post[] = [];
    // messageIsEdit = new EventEmitter<Post>();
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.upadateProfile = function (profile) {
        var body = JSON.stringify(profile);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put('http://localhost:3000/user/update', body, { headers: headers }) //check this
            .map(function (response) {
            var result = response.json();
            return result;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    ProfileService.prototype.createProfile = function (profile) {
        var body = JSON.stringify(profile);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        //  const id = userId;
        return this.http.post('http://localhost:3000/user/createProfile', body, { headers: headers }) //check this
            .map(function (response) {
            var result = response.json();
            return result;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    ProfileService.prototype.getProfile = function () {
        return this.http.get('http://localhost:3000/user/my-profile')
            .map(function (response) {
            var followers = response.json().obj.followers;
            var profile = response.json().obj.profile;
            var userId = response.json().obj._id;
            var transformedProfile;
            //for (let post of posts) {
            // console.log(this.checkUserLikedPost(post.likes,user));
            transformedProfile = new Profile(profile.firstName, profile.lastName, profile.language, profile.yob, profile.status, profile.occupation, profile.qualification, profile.field, profile.intrests, profile.location, profile.intrestInfo, userId, followers);
            console.log(transformedProfile);
            return transformedProfile;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    ProfileService.prototype.searchProfile = function (term) {
        return this.http.get('http://localhost:3000/user/search-user/' + term)
            .map(function (response) {
            console.log(response);
            var profiles = response.json().obj;
            var userId = response.json().userId;
            var transformedProfile = [];
            for (var _i = 0, profiles_1 = profiles; _i < profiles_1.length; _i++) {
                var p = profiles_1[_i];
                // console.log(this.checkUserLikedPost(post.likes,user));
                var followers = p.followers;
                var profile = p.profile;
                transformedProfile.push(new Profile(profile.firstName, profile.lastName, profile.language, profile.yob, profile.status, profile.occupation, profile.qualification, profile.field, profile.intrests, profile.location, profile.intrestInfo, p._id, followers));
            }
            // console.log(transformedProfile);
            return new SearchResults(transformedProfile, userId);
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    ProfileService.prototype.showIntrestedProfiles = function (post) {
        return this.http.post('http://localhost:3000/post/interstedProfiles/', { postId: post.postId })
            .map(function (response) {
            console.log(response);
            var profiles = response.json().obj.users;
            var userId = response.json().obj.user;
            var transformedProfile = [];
            for (var _i = 0, profiles_2 = profiles; _i < profiles_2.length; _i++) {
                var p = profiles_2[_i];
                // console.log(this.checkUserLikedPost(post.likes,user));//  obj: {users:users ,user:req.user._id}
                var followers = p.followers;
                var profile = p.profile;
                transformedProfile.push(new Profile(profile.firstName, profile.lastName, profile.language, profile.yob, profile.status, profile.occupation, profile.qualification, profile.field, profile.intrests, profile.location, profile.intrestInfo, p._id, followers));
            }
            // console.log(transformedProfile);
            return new SearchResults(transformedProfile, userId);
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    ProfileService.prototype.whoToFollow = function () {
        return this.http.get('http://localhost:3000/user/whoToFollow/')
            .map(function (response) {
            console.log(response);
            var profiles = response.json().obj;
            var userId = response.json().userId;
            var transformedProfile = [];
            for (var _i = 0, profiles_3 = profiles; _i < profiles_3.length; _i++) {
                var p = profiles_3[_i];
                // console.log(this.checkUserLikedPost(post.likes,user));//  obj: {users:users ,user:req.user._id}
                var followers = p.followers;
                var profile = p.profile;
                transformedProfile.push(new Profile(profile.firstName, profile.lastName, profile.language, profile.yob, profile.status, profile.occupation, profile.qualification, profile.field, profile.intrests, profile.location, profile.intrestInfo, p._id, followers));
            }
            // console.log(transformedProfile);
            return new SearchResults(transformedProfile, userId);
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    ProfileService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ProfileService.ctorParameters = function () { return [
        { type: Http, },
    ]; };
    return ProfileService;
}());
export { ProfileService };
var SearchResults = /** @class */ (function () {
    // public profiles:Profile[];
    // public userId:string;
    function SearchResults(profiles, userId) {
        this.profiles = profiles;
        this.userId = userId;
    }
    return SearchResults;
}());
export { SearchResults };
