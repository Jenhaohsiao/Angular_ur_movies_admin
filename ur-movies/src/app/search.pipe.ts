import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'advertisingFilter'
})
export class SearchPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (!args) {
            return value;
        }
        return value.filter((val) => {
            let rVal = (val.title.toLocaleLowerCase().includes(args)) || (val.description.toLocaleLowerCase().includes(args));
            return rVal;
        })

    }

}