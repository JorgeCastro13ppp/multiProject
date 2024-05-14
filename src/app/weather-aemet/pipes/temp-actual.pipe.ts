import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperaturaActual'
})
export class TemperaturaActualPipe implements PipeTransform {
  transform(temperaturaDatos: any[], horaActual: number): any {
    for (let i = 0; i < temperaturaDatos.length; i++) {
      const temperatura = temperaturaDatos[i];
      if (horaActual >= temperatura.hora && horaActual < temperatura.hora + 6) {
        return temperatura.value;
      }
    }
    return null;
  }
}
