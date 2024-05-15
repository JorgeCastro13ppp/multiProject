import { Pipe, PipeTransform } from "@angular/core";
import { Viento } from "../interfaces/interface.data";

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
