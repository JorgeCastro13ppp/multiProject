import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'vientoPipe'
})
export class VientoPipe implements PipeTransform {
  transform(viento: any): { label: string, value: any }[] {
    return [
      { label: 'Viento', value: viento.value }
    ];
  }
}
