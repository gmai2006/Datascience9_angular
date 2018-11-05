import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './notfound/nofound.component';
import { ModuleWithProviders } from '@angular/core';
import { DataMigrationComponent } from './datamigration/datamigration.component';
import { DataTransformationComponent } from './datatransformation/datatransformation.component';
import { ITComponent } from './it/it.component';
import { EnterpriseComponent } from './interprise/enterprise.component';
import { WebDevelopmentComponent } from './webdevelopment/webdevelopment.component';
import { BusinessRuleComponent } from './businessrule/businessrule.component';
import { DocumentComponent } from './documentconversion/document.component';
import { MicroServicesComponent } from './microservices/microservices.component';
import { DataMiningComponent } from './datamining/datamining.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const appRoutes: Routes = [
    { path: 'home', component: IndexComponent },
    { path: 'about',      component: AboutComponent },
    { path: 'datamining',      component: DataMiningComponent },
    { path: 'datamigration',      component: DataMigrationComponent },
    { path: 'datatransformation',      component: DataTransformationComponent },
    { path: 'it',      component: ITComponent },
    { path: 'enterprise',      component: EnterpriseComponent },
    { path: 'webdevelopment',      component: WebDevelopmentComponent },
    { path: 'businessrule',      component: BusinessRuleComponent },
    { path: 'document',      component: DocumentComponent },
    { path: 'microservices',      component: MicroServicesComponent },
    { path: 'blogs',      component: BlogsComponent },
    { path: 'portfolio',      component: PortfolioComponent },
    { 
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);