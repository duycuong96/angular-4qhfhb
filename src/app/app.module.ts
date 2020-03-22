import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisListComponent
  },
  {
    path: 'hero/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroListComponent, 
    data: { title: 'Heroes List' }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  declarations: [ AppComponent, HelloComponent, CrisisCenterComponent, HeroesComponent, HeroListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
