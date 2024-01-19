import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterComponent } from './character/character.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CharactersListComponent, CharacterComponent],
  imports: [CommonModule, RouterModule],
  exports: [CharactersListComponent],
})
export class CharactersListModule {}
