import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

// Get config information
import { Config } from '../app.config';

@Injectable()
export class TaskService {
    constructor(private http: Http, private config: Config) { }
    private apiUrl = this.config.getAvantLinkUrl();
    private appId = this.config.getAvantlinkApi();

    getTasks(): Observable<any[]> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Application-ID', this.appId);
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.get(this.apiUrl, options)
            .map(this.extractData)
            .catch(this.handleError)
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        let parsedError = JSON.parse(error._body);
        let errMsg = '';
        for (let i = 0; i < parsedError.errors.length; i++) {
            errMsg += (parsedError.errors[i].exception) ? parsedError.errors[i].exception :
                parsedError.status ? `${parsedError.status} - ${parsedError.statusText}` : 'Server error';
        }
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
