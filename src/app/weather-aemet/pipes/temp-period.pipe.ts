import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'temperaturaPipe'
})
export class TemperaturaPipe implements PipeTransform {
  transform(temperatura: any): { label: string, value: any }[] {
    return [
      { label: temperatura.dato.periodo, value: temperatura.dato.value }
    ];
  }
}
