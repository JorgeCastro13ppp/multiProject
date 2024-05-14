import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humedadActual'
})
export class HumedadActualPipe implements PipeTransform {
  transform(humedadDatos: any[], horaActual: number): any {
    for (let i = 0; i < humedadDatos.length; i++) {
      const temperatura = humedadDatos[i];
      if (horaActual >= temperatura.hora && horaActual < temperatura.hora + 6) {
        return temperatura.value;
      }
    }
    return null;
  }
}
