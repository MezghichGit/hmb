import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
  standalone: false
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number, currency: 'DZD' | 'EUR' | 'USD'): string {
    if (!value && value !== 0) {
      return '';
    }

    let currencySymbol = '';
    let formattedValue = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: currency
    }).format(value);

    switch (currency) {
      case 'DZD':
        currencySymbol = 'DA'; // Algérie Dinar
        formattedValue = `${value.toFixed(2)} ${currencySymbol}`;
        break;
      case 'EUR':
        currencySymbol = '€';
        break;
      case 'USD':
        currencySymbol = '$';
        break;
      default:
        currencySymbol = '';
    }

    return formattedValue;
  }

}
