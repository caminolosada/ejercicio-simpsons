import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { CharacterStructure } from './characters.model';
import charactersApi from '../data/characters';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  public characters$ = new BehaviorSubject<CharacterStructure[]>([]);
  public character$ = new BehaviorSubject<CharacterStructure | null>(null);

  public loadCharacters(): void {
    this.characters$.next(charactersApi);
  }

  public loadCharacter(characterId: number): void {
    const character =
      charactersApi.find((character) => character.id === +characterId) ?? null;
    this.character$.next(character);
  }
}
