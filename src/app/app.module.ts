import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CharactersListModule } from './characters-list/characters-list.module';
import { AboutModule } from './about/about.module';
import { CharacterDetailModule } from './character-detail/character-detail.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CharactersListModule,
    AboutModule,
    CharacterDetailModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
