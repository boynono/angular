import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from '../base/config';
import { Category } from '../model/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(Config.Url + '/api/category', {
      headers: new HttpHeaders({ 'x-access-token': Config.Token })
    });
  }
  getById(id: String) {
    return this.http.get(Config.Url + '/api/category/' + id, {
      headers: new HttpHeaders({ 'x-access-token': Config.Token })
    });
  }

  create(category: Category) {
    return this.http.post(Config.Url + '/api/category', category, {
      headers: new HttpHeaders({ 'x-access-token': Config.Token })
    });
  }

  update(category: Category) {
    return this.http.put(Config.Url + '/api/category/'+ category._id, category, {
      headers: new HttpHeaders({ 'x-access-token': Config.Token })
    });
  }

  delete(id: String) {
    return this.http.delete(Config.Url + '/api/category/' + id, {
      headers: new HttpHeaders({ 'x-access-token': Config.Token })
    });
  }
}
