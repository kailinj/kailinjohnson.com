import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {

  transform(value: any, dir: string, type: string = `svg`): string {
    return `assets/${dir}/${value}.${type}`;
  }

}
