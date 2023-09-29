import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';





@NgModule({
  declarations: [
      AboutPageComponent,
      ContactPagesComponent,
      HomePageComponent,
      LoadingSpinnerComponent,
      SearchBoxComponent,
      SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AboutPageComponent,
    ContactPagesComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,

  ]
})
export class SharedModule { }
