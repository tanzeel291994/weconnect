import { MyProfileComponent } from './myprofile.component';
import { MyPostListComponent } from './mypost-list.component';
export var ME_ROUTES = [
    { path: '', redirectTo: 'myprofile', pathMatch: 'full' },
    { path: 'myprofile', component: MyProfileComponent },
    { path: 'post', component: MyPostListComponent }
];
