import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './notfound/nofound.component';
import { RoutingModule } from './routing.module';
import { DataMigrationComponent } from './datamigration/datamigration.component';
import { DataTransformationComponent } from './datatransformation/datatransformation.component';
import { ITComponent } from './it/it.component';
import { WebDevelopmentComponent } from './webdevelopment/webdevelopment.component';
import { BusinessRuleComponent } from './businessrule/businessrule.component';
import { EnterpriseComponent } from './interprise/enterprise.component';
import { DocumentComponent } from './documentconversion/document.component';
import { MicroServicesComponent } from './microservices/microservices.component';
import { DataMiningComponent } from './datamining/datamining.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RecentworksComponent } from './recentworks/recentworks.component';
import { SliderComponent } from './sliders/sliders.component';
import { AllServicesComponent } from './allservices/allservices.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    PageNotFoundComponent,
    DataMiningComponent,
    DataMigrationComponent,
    DataTransformationComponent,
    ITComponent,
    WebDevelopmentComponent,
    BusinessRuleComponent,
    EnterpriseComponent,
    DocumentComponent,
    MicroServicesComponent,
    BlogsComponent,
    PortfolioComponent,
    RecentworksComponent,
    SliderComponent,
    AllServicesComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
