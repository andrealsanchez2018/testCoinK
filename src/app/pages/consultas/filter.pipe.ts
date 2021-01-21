import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultPost = [];
    /* (opcion.DataBeanProperties.IDEstimulo.toString()).indexOf(args.toString()) > -1 */
    try {
      for (const opcion of value){
      if (opcion.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
          (opcion.celular.toString()).indexOf(args.toString()) > -1 ||
          (opcion.email.toString()).indexOf(args.toString()) > -1 ||
          (opcion.fechaCompra.toString()).indexOf(args.toString()) > -1 ||
          (opcion.edad.toString()).indexOf(args.toString()) > -1) {
            resultPost.push(opcion);
          }
          }
         } catch (error) {
         }
        return resultPost;
      }

    
  }
