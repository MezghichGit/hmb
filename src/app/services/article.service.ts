import { Injectable } from '@angular/core';
import { Article } from '../Models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(environment.baseUrl+"articles/");
  }

  saveArticle(article: Article, idProvider: number): Observable<Article> {
    return this.http.post<Article>(environment.baseUrl+"articles/" + idProvider, article);
  }
}
