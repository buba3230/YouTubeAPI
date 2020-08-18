import { Routes } from '@angular/router';
import { PlayerBodyComponent } from './youTube/player-body/player-body.component';
import { ControlsComponent } from './youTube/controls/controls.component';
export const appRoutes : Routes = [
    {path: '', component : PlayerBodyComponent},
    {path:'youtube', component: PlayerBodyComponent},
    {path:'**', component: PlayerBodyComponent}
];
