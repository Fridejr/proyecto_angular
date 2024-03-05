import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  
  public nombre:string = 'Juan';
  public nombre2:string = 'Guarnizo';
  public guapo:boolean = false; 

  public users: {id: number, name: string}[] = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Jason'}, {id: 3, name: 'Walter'}, {id: 4, name: 'Hank'}];
  
  
}