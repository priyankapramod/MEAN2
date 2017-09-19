import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'titleize'
})
@Injectable()
export class TitleizePipe implements PipeTransform {
  public static skipWords: Array<string> = ['the', 'in', 'on', 'a', 'of'];

  transform(value: string, args?: boolean | string[]): string {
    if (typeof value !== 'string') {
      return value;
    }

    const skipWords: Array<string> = Array.isArray(args) ? args : TitleizePipe.skipWords;
    const processSkipwords: boolean = args !== false;


    return value.replace(/\w[^-\s]*/g, (word, index) => {
      if (processSkipwords && index && skipWords.includes(word)) {
        console.log(index);
        return word.toLowerCase();
      }

      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    });
  }
}
