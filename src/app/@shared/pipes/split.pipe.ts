import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name        : 'splitPipe',
  standalone  : true
})
export class SplitPipe implements PipeTransform {

  public transform(value: any, ...args: any[]) {

    return  value && value.length === 2
            ? value.join('-')
            : value
  }
}
