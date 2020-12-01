import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';

@Component({
  selector: 'app-pipe-primjer',
  templateUrl: './pipe-primjer.component.html',
  styleUrls: ['./pipe-primjer.component.css']
})
export class PipePrimjerComponent implements OnInit {
  filterPo = '';

  korisnici=[
    {
      tip:'admin',
      ime: 'Petar Petrovic',
      status:'aktivan',
      datumLogovanja: new Date("2020-10-3")
    },
    {
      tip:'standardUser',
      ime: 'Nikola Nikolic',
      status:'aktivan',
      datumLogovanja: new Date("2020-11-5")
    },
    {
      tip:'standardUser',
      ime: 'Marko Markovic',
      status:'neaktivan',
      datumLogovanja: new Date("2020-12-1")
    },
    {
      tip:'standardUser',
      ime: 'Jovan Jovanovic',
      status:'aktivan',
      datumLogovanja: new Date("2020-11-28")
    }
  ];

  asyncExample = new Promise(
    (resolve, rejects) =>{
      setTimeout(()=> {
        resolve('aktivan')
      }, 2000);
  });

  dodajNovi(){
    this.korisnici.push({
      tip:'admin',
      ime: 'Novi Korisnik',
      status:'aktivan',
      datumLogovanja: new Date("2020-12-1")
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
