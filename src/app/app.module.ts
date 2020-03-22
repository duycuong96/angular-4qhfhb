import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { HeroesComponent } from './heroes/heroes.component';

const appRoutes: Routes = [
  {
    
  }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CrisisCenterComponent, HeroesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
