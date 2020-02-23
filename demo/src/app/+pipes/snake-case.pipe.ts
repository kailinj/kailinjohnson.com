import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snakeCase'
})
export class SnakeCasePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if (value && value.length > 0) {
      const separators = new RegExp(/[\s_\+\/\.]/g);
      const lowerUpperCase = new RegExp(/([a-z])(A-Z)/g);
      value = value.replace(separators, '-')
        .replace(lowerUpperCase, `$1-$2`)
        .toLowerCase();
      return value;
    } else {
      return null;
    }
  }

}
