import { ME_ROUTES } from './me/me.routing';
import { HOME_ROUTES } from './home/home.routes';
import { FindComponent } from './find/find.component';
import { MeComponent } from './me/me.component';
import { HomeComponent } from "./home/home.component";
//import { FindComponent } from "./signin.component";
//import { MeComponent } from "./logout.component";
export var MAIN_ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, children: HOME_ROUTES },
    { path: 'find', component: FindComponent },
    { path: 'me', component: MeComponent, children: ME_ROUTES }
];
