import { Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { GenresComponent } from './components/genres/genres.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';
import { PopularSeriesComponent } from './pages/popular-series/popular-series.component';
import { SerieComponent } from './pages/serie/serie.component';
import { ActorComponent } from './components/actor/actor.component';

export const appRoutes: Routes = [
    {path: '', component: MoviesComponent},
    {path: 'movie/:id', component: MovieComponent},
    {path: 'tv/:id', component: SerieComponent},
    {path: 'actor/:id', component: ActorComponent},
    {path: 'genres/:id/:name', component: GenresComponent},
    {path: 'upcoming', component: UpcomingComponent},
    {path: 'popular/series', component: PopularSeriesComponent},
];
