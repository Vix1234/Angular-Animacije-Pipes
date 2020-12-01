import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, zaFiltriranje: string, filtriranjePo: string  ) {
    if(value.length === 0 || zaFiltriranje === ''){
      return value;
    }

    const filtriraniKorisnici=[];
    for(let korisnik of value){
      if(korisnik[filtriranjePo] === zaFiltriranje){
        filtriraniKorisnici.push(korisnik);
      }
    }

    return filtriraniKorisnici;
  }
}
