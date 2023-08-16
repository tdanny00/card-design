import { Component, OnInit } from '@angular/core';
import { MainCardConfig } from './config/main-card-config';
import { MainCard } from './classes/main-card';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
})
export class MainCardComponent implements OnInit {
  cardConfig: MainCard[] = MainCardConfig;

  constructor() {}

  ngOnInit(): void {}
}
