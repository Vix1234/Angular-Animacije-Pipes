import { Component, Input, OnInit } from '@angular/core';
import { User } from '../User';
import{trigger, state, style, transition, animate} from '@angular/animations';


@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css'],
  animations:[
    trigger('uvecajSliku',[
      state('normal', style(
      {
        transform: 'scale(0)'
      }
      )),
      state('promjenjeno', style({
        'border-color':'red',
         transform: 'scale(1.5)'
      })),
      transition('normal <=> promjenjeno', animate(300))
    ]

    )
  ]
})
export class KorisnikComponent implements OnInit {
  @Input() korisnik: User;

  stanje='normal';

  constructor() { }

  toggleStanje(){
    this.stanje === 'normal' ? this.stanje = 'promjenjeno' : this.stanje = 'normal';
  }

  ngOnInit(): void {
  }

}
