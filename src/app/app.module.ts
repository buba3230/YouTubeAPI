import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaModule } from 'src/SPA/spa.module';
import { ControlsComponent } from './routes/youTube/controls/controls.component';
import { ListComponent } from './routes/youTube/list/list.component';
import { PlayerComponent } from './routes/youTube/player/player.component';
import { PlayerBodyComponent } from './routes/youTube/player-body/player-body.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/app.routes';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, PlayerComponent, PlayerBodyComponent, ListComponent, ControlsComponent

  ],
  imports: [
    HttpClientModule,BrowserModule,SpaModule,
    AppRoutingModule,
    
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
