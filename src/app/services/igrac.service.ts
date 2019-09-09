import { Injectable } from '@angular/core';
import {Igrac} from '../models/igrac';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IgracService {
  private readonly API_URL = 'http://localhost:8083/igrac/';
  private readonly TIM_URL = 'http://localhost:8083/igracTim/';
  dataChange: BehaviorSubject<Igrac[]> = new BehaviorSubject<Igrac[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getIgracTim(idTima: number): Observable<Igrac[]> {
    this.httpClient.get<Igrac[]>(this.TIM_URL + idTima).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
    return this.dataChange.asObservable();
  }

  public addIgrac(igrac: Igrac): void {
    this.httpClient.post(this.API_URL, igrac).subscribe();
  }

  public updateIgrac(igrac: Igrac): void {
    this.httpClient.put(this.API_URL, igrac).subscribe();
  }

  public deleteIgrac(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
