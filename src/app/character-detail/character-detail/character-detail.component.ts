import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterStructure } from 'src/app/core/characters.model';
import { CharactersService } from 'src/app/core/characters.service';

@Component({
  selector: 'simp-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService
  ) {}

  public character: CharacterStructure | null = null;

  ngOnInit(): void {
    const { characterId } = this.route.snapshot.params as {
      characterId: string;
    };

    this.charactersService.character$.subscribe((character) => {
      this.character = character;
    });

    this.charactersService.loadCharacter(+characterId);
  }
}
