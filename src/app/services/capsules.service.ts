import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const CAPSULES_API='https://api.spacexdata.com/v3/capsules'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CapsulesService {

  constructor(private http: HttpClient) { }

  public getCapsules():Observable<any> {
    return this.http.get<any>(CAPSULES_API, httpOptions);
  }

  public getOneCapsule(capsule_serial:number):Observable<any> {
    return this.http.get<any>(CAPSULES_API+'/'+capsule_serial, httpOptions);
  }

  public getPastCapsules():Observable<any>{
    return this.http.get<any>(CAPSULES_API+'/past');
  }

  public getUpcomingCapsules():Observable<any>{
    return this.http.get<any>(CAPSULES_API+'/upcoming');
  }
}
