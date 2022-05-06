import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const LAUNCHES_API='https://api.spacexdata.com/v3/launches'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  constructor(private http: HttpClient) { }

  public getLaunches():Observable<any> {
    return this.http.get<any>(LAUNCHES_API, httpOptions);
  }

  public getOneLaunch(flight_number:number):Observable<any>{
    return this.http.get<any>(LAUNCHES_API+'/'+flight_number);
  }

  public getPastLaunches():Observable<any>{
    return this.http.get<any>(LAUNCHES_API+'/past');
  }

  public getUpcomingLaunches():Observable<any>{
    return this.http.get<any>(LAUNCHES_API+'/upcoming');
  }

  public getLatestLaunch():Observable<any>{
    return this.http.get<any>(LAUNCHES_API+'/latest');
  }

  public getNextLaunch():Observable<any>{
    return this.http.get<any>(LAUNCHES_API+'/next');
  }

}
