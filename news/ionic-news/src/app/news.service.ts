import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  public article;

  getNews(filter?: string, country?: string) {
    if (isNullOrUndefined(filter)) {
      filter = 'top-headlines?';
    }
    if (country) {
      filter += 'country=' + country;
    }

    return this.http.get(API_URL + filter + '&apiKey=' + API_KEY).toPromise();
  }
}
