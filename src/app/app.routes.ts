import { Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movieDetails/movie.component';
import { GenresComponent } from './components/genres/genres.component';
import { UpcomingComponent } from './pages/upcomingMovies/upcoming.component';
import { SeriesComponent } from './pages/series/series.component';
import { SerieComponent } from './pages/serieDetails/serie.component';
import { ActorComponent } from './pages/actorDetails/actor.component';

export const appRoutes: Routes = [
    {path: '', component: MoviesComponent},
    {path: 'movie/:id', component: MovieComponent},
    {path: 'tv/:id', component: SerieComponent},
    {path: 'actor/:id', component: ActorComponent},
    {path: 'genres/:id/:name', component: GenresComponent},
    {path: 'upcoming', component: UpcomingComponent},
    {path: 'popular/series', component: SeriesComponent},
];
