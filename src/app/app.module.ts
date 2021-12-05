import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtworksComponent } from './artworks/artworks.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {routerModule} from './about/routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentsModule } from './shared-components/shared-components.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ArtistComponent,
    ArtworksComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routerModule,
    BrowserAnimationsModule,
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
