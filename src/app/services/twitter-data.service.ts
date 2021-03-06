import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class DataService {
    private twitterEndPoint = 'http://localhost:3000/twitter'
    constructor(private http: Http) {  }



    queryTwitter(query) {
        return this.http.get(`${this.twitterEndPoint}?twitterQuery=${query}`)
            .map(res => {
                const item = res.json()
                return item
            })
            .catch(this.handleError);
    }


    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }



}


