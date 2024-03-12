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
import { ClothesComponent } from './pages/clothes/clothes.component';

export const routes: Routes = [

{path: '', component:HomeComponent, title:'home'},
{path: 'clima', component:ClimaComponent, title:'clima'},
{path: 'home', component:HomeComponent, title:'home'},
{path: 'users', component:UsersComponent, title:'users'},
{path: 'calculadora', component:CalculadoraComponent, title:'calculadora'},
{path: 'adivinarnumero', component:AdivinaElNumeroComponent, title:'adivinarnumero'},
{path: 'tictactoe', component:JuegoCeldasComponent, title:'tictactoe'},
{path: 'pokemon', component:PokemonComponent, title:'pokemon'},
{path: 'rick&morty', component:RickmortyComponent, title:'rick&morty'},
{path: 'clothes', component:ClothesComponent, title:'clothes'},



{path: '**',redirectTo: '',pathMatch:'full' },

];

