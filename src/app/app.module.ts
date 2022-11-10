import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { WavesComponent } from './components/waves/waves.component';
import { SubBannerComponent } from './components/sub-banner/sub-banner.component';
import { CoffeeToastComponent } from './components/coffee-toast/coffee-toast.component';
import { ProjectCardsComponent } from './components/project-cards/project-cards.component';
import { LightboxModule } from 'ngx-lightbox';
import { AboutComponent } from './pages/about/about.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { Inf132Component } from './components/inf132/inf132.component';
import { DesignConceptsComponent } from './pages/design-concepts/design-concepts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    WavesComponent,
    SubBannerComponent,
    CoffeeToastComponent,
    ProjectCardsComponent,
    AboutComponent,
    ProjectPageComponent,
    Inf132Component,
    DesignConceptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
