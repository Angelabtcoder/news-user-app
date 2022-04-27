import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class ArchivedNewsService {
  url = 'http://localhost:3000/api/archived/';


  constructor(private http: HttpClient) { }

  getArchived(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteArchived(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveArchived(news: News): Observable<any> {
    return this.http.post(this.url, news);
  }

  /*getOneNews(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }*/
}
