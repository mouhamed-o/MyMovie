import { Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movieDetails/movie.component';
import { GenresComponent } from './components/genres/genres.component';
import { UpcomingComponent } from './pages/upcomingMovies/upcoming.component';
import { SeriesComponent } from './pages/series/series.component';
import { SerieComponent } from './pages/serieDetails/serie.component';
import { ActorComponent } from './pages/actorDetails/actor.component';
import { ActorsComponent } from './pages/actors/actors.component';
//import { SignInComponent } from './components/user/sign-in/sign-in.component';
//import { UserFormComponent } from './components/user/user-form/user-form.component';

export const appRoutes: Routes = [
    {path: '', component: MoviesComponent},
    {path: 'movie/:id', component: MovieComponent},
    {path: 'tv/:id', component: SerieComponent},
    {path: 'actor/:id', component: ActorComponent},
    {path: 'genres/:genreType/:id/:name', component: GenresComponent},
    {path: 'upcoming', component: UpcomingComponent},
    {path: 'popular/series', component: SeriesComponent},
    {path: 'popular/actors', component: ActorsComponent},
   // {path: 'conexion', component: UserFormComponent},
];
