// MODULES
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// ROUTES
import { PAGES_ROUTES } from './pages.routes';

// COMPONENTS
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';





@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ]
})
export class PageModule {}
