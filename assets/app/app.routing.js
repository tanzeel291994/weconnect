import { MAIN_ROUTES } from './header/main.routes';
import { RouterModule } from "@angular/router";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { HeaderComponent } from "./header/header.component";
var APP_ROUTES = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: HeaderComponent, children: MAIN_ROUTES },
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
