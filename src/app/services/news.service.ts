import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url = 'http://localhost:3000/api/news/';

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteNews(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveNews(news: News): Observable<any> {
    return this.http.post(this.url, news);
  }

  getOneNews(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
