import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { GenresComponent } from './components/genres/genres.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';
import { PopularSeriesComponent } from './pages/popular-series/popular-series.component';
import { SerieComponent } from './pages/serie/serie.component';
import { ActorComponent } from './components/actor/actor.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryComponent } from './components/category/category.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    MovieCardComponent,
    GenresComponent,
    UpcomingComponent,
    PopularSeriesComponent,
    SerieComponent,
    ActorComponent,
    SearchComponent,
    NavbarComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
