// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

// Application
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { NavbarSidebarComponent } from './navbar-sidebar/navbar-sidebar.component';

// ngx-translate
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(httpClient : HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarMenuComponent,
    NavbarSidebarComponent,
    LoginComponent
  ],
  imports: [
    // Angular
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,

    // PrimeNG
    ButtonModule,
    SidebarModule,

    // ngx-translate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
