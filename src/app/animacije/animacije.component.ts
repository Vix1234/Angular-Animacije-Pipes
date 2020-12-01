import { Component, OnInit } from '@angular/core';
import{
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';



@Component({
  selector: 'app-animacije',
  templateUrl: './animacije.component.html',
  styleUrls: ['./animacije.component.css'],
  animations:[
    trigger('animirajDiv',[
      state('normal', style(
        {
          'background-color':'blue',
          transform: 'translateX(0)'
        }
      )),
      state('promjenjeno', style({
        'background-color':'red',
          transform: 'translateX(100px)'
      })),
      transition('normal => promjenjeno', animate(300)),
      transition('promjenjeno => normal', animate(500)),
    ]),
    trigger('animirajSkupljanje',[
      state('normal', style(
        {
          'background-color':'blue',
          transform: 'translateX(0) scale(1)'
        }
      )),
      state('skupljeno', style(
        {
          'background-color':'green',
          transform: 'translateX(0) scale(0.5)'
        }
      )),
      state('promjenjeno', style({
        'background-color':'red',
          transform: 'translateX(100px) scale(1)'
      })),
      transition('normal <=> promjenjeno', animate(300)),
      transition('skupljeno <=> *', [
        style({
          'background-color':'yellow'
        }),
        animate(1000, style({
          'border-radius':'50px'
        })),
        animate(500)
      ]),
    ]),
    trigger('lista',[
      state('ubaci', style({
        opacity:1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            opacity:0,
            transform: 'translateX(-100px)',
            offset:0
          }), 
          style({
            opacity:0.5,
            transform: 'translateX(-40px)',
            offset:0.3
          }), 
          style({
            opacity:0.8,
            transform: 'translateX(-20px)',
            offset: 0.8
          }), 
          style({
            opacity:1,
            transform: 'translateX(0px)',
            offset: 1
          }), 
        ]))   
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            color:'blue'
          })),
          animate(900, style({
            opacity:0,
          transform: 'translateX(100px)'
          }))
        ])
      ]),
    ])
  ] 
})
export class AnimacijeComponent implements OnInit {
  stanje= 'normal';
  animacijaSazvjezdicom='normal';

  constructor() { }

  ngOnInit(): void {
  } 

  animiraj(){
    this.stanje == 'normal' ? this.stanje = 'promjenjeno' : this.stanje = 'normal';
    this.animacijaSazvjezdicom == 'normal' ? this.animacijaSazvjezdicom = 'promjenjeno' : this.animacijaSazvjezdicom = 'normal';
  }

  skupi(){
    this.animacijaSazvjezdicom = 'skupljeno';
  }

  stavke = ['Mobilni', 'Bicikl', 'Automobil']
  
  dodaj(input: string){
    this.stavke.push(input);
  }

  obrisi(stavka: string){
    this.stavke.splice(this.stavke.indexOf(stavka),1)
  }
  
  animacijaPocela(event){
    console.log(event);
  }

  animacijaZavrsila(event){
    console.log(event);
  }
}
