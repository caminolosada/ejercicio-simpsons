import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@NgModule({
  declarations: [CharacterDetailComponent],
  imports: [CommonModule],
  exports: [CharacterDetailComponent],
})
export class CharacterDetailModule {}
