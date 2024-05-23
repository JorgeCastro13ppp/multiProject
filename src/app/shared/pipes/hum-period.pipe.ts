import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'humedadPipe'
})
export class HumedadPipe implements PipeTransform {
  transform(day: any): { label: string, value: any }[] {
    return [
      { label: 'Humedad', value: day.humedadRelativa }
    ];
  }
}
