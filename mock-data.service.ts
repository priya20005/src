import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements InMemoryDbService{

  constructor() {
    const destinations=[
      {id:1,name:'Beach Destination',category:'beach',description:'A beautiful beach destination',rating:4},
      {id:2, name:'Mountain Destination', category: 'mountain',description:'Scenic mountain views',rating:5},
      {id:3,name:'country Destination',category:'village',description:'Full greenery and beautiful locations',rating:4.5}
    ];
    const travelPlans=[
      {id:1,name:'summer vacation',startDate:'2024-07-01',endDate:'2024-07-15',destination:[1,2]},
      {id:2,name:'winter vacation',startDate:'2024-11-10',endDaate:'2024-11-15',description:[2,3]}
    ];
    retrun {destinations,travelPlans};
   }

}
