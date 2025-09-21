import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
  standalone: true
})
export class CreditCardPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value.match(/.{1,4}/g)?.join(' - ') ?? value;
  }

}
