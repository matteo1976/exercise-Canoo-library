import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serch'
})
export class SerchPipe implements PipeTransform {

  transform(value: any[], term: string): any[] {
    return value.filter((x: any) => x.title.toLowerCase().startsWith(term.toLowerCase())
    || x.autor.toLowerCase().startsWith(term.toLowerCase()) );
  }

}
