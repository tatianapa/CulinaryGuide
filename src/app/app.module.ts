import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MenuComponent} from './menu/menu.component';
import {UserComponent} from './user/user.component';


import 'hammerjs';

import { TagListComponent } from './tag-list/tag-list.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { TagSearchService } from './tagSearch.service';
import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './_services/user.service';
import { UserPageResolver } from './_resolvers/user_page.resolver';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { PlacesService } from './_services/places.service';

export function tokenGetter(){
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    TagListComponent,
    PlaceListComponent,
    UserComponent, 
    SearchComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    NgbDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
          config: {
              tokenGetter: tokenGetter,
              whitelistedDomains: ['localhost:5000'],
              blacklistedRoutes: ['localhost:5000/api/auth']
          }
      }),
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [
    TagSearchService,
    AuthService,
    AlertifyService,
    UserService,
    AuthGuard,
    UserPageResolver,
    PlacesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
