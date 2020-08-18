import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { SpaBodyComponent } from './spa-body/spa-body.component';
import { SpaHeaderComponent } from './spa-header/spa-header.component';
import { SpaContentComponent } from './spa-content/spa-content.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [SpaBodyComponent, SpaHeaderComponent, SpaContentComponent],
    exports: [SpaBodyComponent],
    providers: []
})
export class SpaModule{}