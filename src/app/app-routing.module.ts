import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {Place} from './place.model';
import {MainComponent} from './main/main.component';
import {ListComponent} from './list/list.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'list', component: ListComponent}
  // { path: 'books', component: BooksComponent,
  //   children: [
  //     { path: '', redirectTo: 'books', pathMatch: 'full' },
  //     { path: 'beni', component: BeniComponent },
  //     { path: 'daniel', component: DanielComponent },
  //     { path: 'different', component: DifferentComponent },
  //     { path: 'kristina', component: KristinaComponent },
  //     { path: 'love-story', component: LoveStoryComponent },
  //     { path: 'lyuba', component: LyubaComponent },
  //     { path: 'sasha', component: SashaComponent },
  //     { path: 'vika', component: VikaComponent }
  //   ]
  // }
  // {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'}},
  // /*always in the end=>*/
  // {path: '**', redirectTo: '/not-found'}
  // { path: 'books/:name',
  //   component: BooksComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
