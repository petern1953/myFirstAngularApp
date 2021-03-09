import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero: Hero = new Hero();
  hero: Hero = new Hero();
  superPowers: Array<string> = [
    'magnetic',
    'really smart',
    'rich',
    'hard',
    'tidy',
    'bombastic',
    'asking',
    'killing',
    'surfing',
    'biking',
    'smart',
    'dumb',
    'deaf',
    'hiking',
  ];

  constructor(private ar: ActivatedRoute, private hService: HeroService) {
    this.ar.params.subscribe((params) => {
      this.hService.getOne(params.id).forEach((hero) => {
        this.hero = hero;
      });
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.hService.update(this.hero).forEach((value) => {
      console.log('Updated hero: ', value);
    });
  }
}
