import { Injectable } from '@angular/core';
import { BehaviourSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TravelPlanService {
  private destinationsSubjects = new BehaviourSubject<String[]>([]);
  destinations$ = this.destinationsSubjects.asObservable();

  constructor() {}
  addDestination(destination: string): void {
    const destinations = this.destinationsSubject.value;

    destination.push(destination);
    this.destinationsSubjects.next(destinations);
  }
  removeDestination(destination: string): void {
    const destinations = this.destinationsSubjects.value.filter(
      (d) => d !== destination
    );
    this.destinationsSubjects.next(destinations);
  }
}
