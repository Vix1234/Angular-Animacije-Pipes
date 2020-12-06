import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-vjezbanje',
  templateUrl: './vjezbanje.component.html',
  styleUrls: ['./vjezbanje.component.css']
})
export class VjezbanjeComponent implements OnInit {
  filterPo='';
  
  useri=[
    new User(1, 'Miki Maus', 'miki.maus@gmail.com','admin', '../assets/images/mikiMaus.jpg'),
    new User(2, 'Paja Patak', 'paja.patak@gmail.com','standard user', '../assets/images/pajaPatak.png'),
    new User(3, 'Dusko Dugousko', 'dusko.dugousko@gmail.com','standard user', '../assets/images/duskoDugousko.jpg'),
    new User(4, 'Dzeri', 'jerry@gmail.com','admin', '../assets/images/dzeri.jpg'),
    new User(5, 'Tom', 'tom@gmail.com','standard user', '../assets/images/tom.png'),
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
