import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

// Get config information
import { config } from '../app.config';

@Injectable()
export class TaskService {
    constructor(private http: Http) { }
    private apiUrl = config.avantlinkApiUrl;
    private appId = config.avantlinkApi;

    getTasks(): Observable<any[]> {
        let headers = new Headers();
        headers.append('Application-ID', this.appId);
        return this.http.get(this.apiUrl, { headers: headers })
            .map(this.extractData)
            .catch(this.handleError)
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }

    addTask(name: string): Observable<any> {
        let body = JSON.stringify({ name });
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Application-ID', this.appId);
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.post(this.apiUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    removeTask(task: any): Observable<any> {
        let headers = new Headers();
        headers.append('Application-ID', this.appId);
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.delete(this.apiUrl + '?id=' + task.task_id, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateTask(task: any): Observable<any> {
        let headers = new Headers();
        headers.append('Application-ID', this.appId);
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({
            headers: headers
        });
        let body = JSON.stringify({
            name: task.task_name
        });
        return this.http.put(this.apiUrl + '?id=' + task.task_id, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}
