import { Gif } from './../../interfaces/gifs.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gif-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required');
  }

  //gif(gif: string):void{  }

}
