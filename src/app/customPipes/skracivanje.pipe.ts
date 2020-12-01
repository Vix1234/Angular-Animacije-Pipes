import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skracivanje'
})
export class SkracivanjePipe implements PipeTransform {

  transform(value: any, ogranicenje: number){
    if(value.length > ogranicenje){
      return value.substr(0,ogranicenje) + '...';
    }

    return value;
  }

}
