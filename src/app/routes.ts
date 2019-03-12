
import {AuthGuard} from './_guards/auth.guard';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {Place} from './place.model';
import {MainComponent} from './main/main.component';
import { UserComponent } from './user/user.component';
import { UserPageResolver } from './_resolvers/user_page.resolver';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';



export const appRoutes: Routes = [
    { path: '', component: MainComponent},
    {
      path: '', 
      // runGuardsAndResolvers: 'always',
      // canActivate: [AuthGuard],
      children: [
        { path: 'about', component: AboutComponent},
        { path: 'register', component: RegisterComponent},
        { path: 'contact', component: ContactComponent},
        { path: 'search', component: SearchComponent},
        { path: 'user', component: UserComponent, 
        resolve: {user: UserPageResolver}},
      ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];