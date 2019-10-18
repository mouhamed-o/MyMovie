import { Injectable } from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  searchActors(searchStr: string) {
    var search = new URLSearchParams();
    search.set('sort_by','popularity.desc');
    search.set('query', searchStr);
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/search/person?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  apikey: string;

  constructor(private _jsonp: Jsonp) {
    this.apikey = 'b4e196b860dfcb118b5825488aeae920';

  }
  getPopular() {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    search.set('language', 'fr');
    return this._jsonp.get('https://api.themoviedb.org/3/person/popular?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }
  getInTheaters() {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    search.set('language', 'fr');
    return this._jsonp.get('https://api.themoviedb.org/3/person/latest?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }
  getPersonDetail(id:string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    search.set('language', 'fr');
    return this._jsonp.get('https://api.themoviedb.org/3/person/'+ id +'?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getPersonCast(id:string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    search.set('language', 'fr');
    return this._jsonp.get('https://api.themoviedb.org/3/person/'+ id +'/movie_credits?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }
}
