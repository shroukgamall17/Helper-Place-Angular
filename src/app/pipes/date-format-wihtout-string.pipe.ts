import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatWihtoutString',
  standalone: true,
})
export class DateFormatWihtoutStringPipe implements PipeTransform {
  transform(value: string): string {
    const [month, day, year] = value.split('/');
    const date = new Date(+year, +month - 1, +day);

    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };

    return `${date.toLocaleDateString('en-GB', options)}`;
  }
}
