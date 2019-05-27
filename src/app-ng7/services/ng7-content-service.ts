import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Ng7ContentService {

  constructor(private http: HttpClient) {
  }

  public getGoogle(): void {
    this.http.get('http://jsonplaceholder.typicode.com/todos/1').subscribe((res: HttpResponse<any>) => {
      console.log('GET todos: ');
      console.log(JSON.stringify(res));
    });
  }
}
