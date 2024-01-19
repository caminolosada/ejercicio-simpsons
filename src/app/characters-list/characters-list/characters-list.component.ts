import { Component, OnInit } from '@angular/core';
import { CharacterStructure } from 'src/app/core/characters.model';
import { CharactersService } from 'src/app/core/characters.service';

@Component({
  selector: 'simp-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent implements OnInit {
  public characters: CharacterStructure[] = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService.characters$.subscribe((characters) => {
      this.characters = characters;
    });
    this.charactersService.loadCharacters();
  }
}
