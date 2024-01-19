import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './characters-list/characters-list/characters-list.component';
import { AboutComponent } from './about/about/about.component';
import { CharacterComponent } from './characters-list/character/character.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharactersListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'characters/:characterId', component: CharacterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
