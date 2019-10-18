import { Injectable } from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SeriesService {
  apikey: string;

  constructor(private _jsonp: Jsonp) {
    this.apikey = 'b4e196b860dfcb118b5825488aeae920';
  }
  getGenres() {
    var search = new URLSearchParams();
    search.set('language', 'fr');
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/genre/tv/list?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }
  getSeriesByGenre(id: any) {
  
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    search.set('language', 'fr');
    return this._jsonp.get('https://api.themoviedb.org/3/genre/'+ id +'/tv?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }


  getPopularSeries() {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    search.set('language', 'fr');
    return this._jsonp.get('https://api.themoviedb.org/3/tv/popular?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getTopRatedSeries() {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    search.set('language', 'fr');
    return this._jsonp.get('https://api.themoviedb.org/3/tv/top_rated?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getSerieDetails(id:string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    search.set('language', 'fr');
    return this._jsonp.get('https://api.themoviedb.org/3/tv/'+ id +'?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getSerieVideos(id:string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    search.set('language', 'fr');
    return this._jsonp.get('https://api.themoviedb.org/3/tv/'+ id +'/videos?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }
  searchSeries(searchStr: string) {
    var search = new URLSearchParams();
    search.set('sort_by','popularity.desc');
    search.set('language', 'fr');
    search.set('query', searchStr);
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/search/tv?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

}
