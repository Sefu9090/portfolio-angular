import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { Inf132Component } from './components/inf132/inf132.component';
import { AboutComponent } from './pages/about/about.component';
import { DesignConceptsComponent } from './pages/design-concepts/design-concepts.component';

const routes: Routes = [
    { path: '', title:"Saul Fernandez Portfolio", component: HomeComponent },
    { path: 'Projects', title:"Saul Fernandez Projects", component: ProjectsComponent},
    { path: 'About', title:"About Saul Fernandez", component: AboutComponent},
    { path: 'Design', title:"Saul Fernandez Design & Concepts", component: DesignConceptsComponent},
    { path: "Projects/:id", title:"", component: ProjectPageComponent},
    { path: "projects/132project", title:"Saul Fernandez MobilityMaps", component: Inf132Component},
    { path: '**', redirectTo: '', title:"Redirecting", component: HomeComponent }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
