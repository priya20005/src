import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory',
  standalone: true,
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(destinations: any[], category: string): any[] {
    if (!destinations || !category) {
      return destinations;
    }
    return DestinationService.filter(
      (destination) => destination.category === category
    );
  }
}
