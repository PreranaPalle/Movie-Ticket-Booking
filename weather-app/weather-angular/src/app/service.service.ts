import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private sharedData: Subject<any> = new Subject<any>();
  sharedData$: Observable<any> = this.sharedData.asObservable();

  constructor() { }

  setData(updatedData: string) {
    this.sharedData.next(updatedData);
  }
}
