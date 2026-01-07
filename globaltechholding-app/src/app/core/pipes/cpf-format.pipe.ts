import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfFormat',
  standalone: true
})
export class CpfFormatPipe implements PipeTransform {

  transform(value: string | number): string {
    if (!value) return '';
    
    const digits = String(value).replace(/\D/g, '');

    if (digits.length !== 11) return value.toString();

    return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
}
