import { Component, OnInit } from '@angular/core';
import{
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';


@Component({
  selector: 'app-vjezba-animacija',
  templateUrl: './vjezba-animacija.component.html',
  styleUrls: ['./vjezba-animacija.component.css'],
  animations:[
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ]),
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(-100%)',
      })),
      state('enlarge',   style({  
        transform: 'scale(1.5)',
      })),
      state('spin',   style({
        transform: 'rotateY(180deg) rotatex(45deg)',
      })),
      transition('* => *', animate('500ms ease')),
    ])
  ]
})
export class VjezbaAnimacijaComponent implements OnInit {
  show='move';

  constructor() { }

  ngOnInit(): void {
  }
  
  toggleAnimation(){
    //this.show ==='show' ? this.show = 'hide' : this.show = 'show';

    switch(this.show) { 
      case 'move': { 
         this.show='spin';
         break; 
      } 
      case 'enlarge': { 
         this.show='spin';
         break; 
      } 
      default: { 
         '*' 
         break; 
      } 
   }  
  }



}
