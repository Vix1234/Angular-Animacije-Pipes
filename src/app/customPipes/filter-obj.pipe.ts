import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterObj',
  pure: false
})
export class FilterObjPipe implements PipeTransform {

  transform(items: any[],filter: Object): unknown {
    if(items.length === 0 || filter === ''){
      return items;
    }
    

    return items;
  }

}
