import { RouterOutlet, Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { Title } from '@angular/platform-browser';
import { AdivinaElNumeroComponent } from './pages/adivinar-numero/adivinar-numero.component';
import { JuegoCeldasComponent } from './pages/tic-tac-toe/tic-tac-toe.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { RickmortyComponent } from './pages/rickmorty/rickmorty.component';

export const routes: Routes = [

{path: '', component:HomeComponent, title:'home'},
{path: 'clima', component:ClimaComponent, title:'clima'},
{path: 'home', component:HomeComponent},
{path: 'users', component:UsersComponent},
{path: 'calculadora', component:CalculadoraComponent},
{path: 'adivinarnumero', component:AdivinaElNumeroComponent},
{path: 'tictactoe', component:JuegoCeldasComponent},
{path: 'pokemon', component:PokemonComponent},
{path: 'rick&morty', component:RickmortyComponent},


{path: '**',redirectTo: '',pathMatch:'full' },

];
