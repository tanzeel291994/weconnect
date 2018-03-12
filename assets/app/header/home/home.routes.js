import { PostListComponent } from './../../post/post-list.component';
import { PostAddComponent } from './../../post/post-add.component';
export var HOME_ROUTES = [
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: 'posts', component: PostListComponent },
    { path: 'addPost', component: PostAddComponent }
];
