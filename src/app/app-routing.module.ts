import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavContainerComponent } from './sidenav-container/sidenav-container.component';
import { HomeComponent } from './sidenav-container/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavContainerComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'library', loadChildren: () => import('./library/library.module').then(m => m.LibraryModule)},
      {path: 'wl', loadChildren: () => import('./watch-later/watch-later.module').then(m => m.WatchLaterModule)},
      {path: 'movie/:movieId', loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule)},
      {path: 'help', loadChildren: () => import('./help/help.module').then(m => m.HelpModule)},
      {path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)}
    ]
  },
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
  {path: 'settings2', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)},
  {path: 'watch/:movieId', loadChildren: () => import('./watch/watch.module').then(m => m.WatchModule)},
  {path: 'party', loadChildren: () => import('./party/party.module').then(m => m.PartyModule)},
  {path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    urlUpdateStrategy: 'eager',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
