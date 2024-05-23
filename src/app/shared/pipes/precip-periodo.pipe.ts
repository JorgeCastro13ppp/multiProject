import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'precipitacionPipe'
})
export class PrecipitacionPipe implements PipeTransform {
  transform(precipitacion: any): { label: string, value: any }[] {
    return [
      { label: precipitacion.periodo, value: precipitacion.value },
    ];
  }
}


