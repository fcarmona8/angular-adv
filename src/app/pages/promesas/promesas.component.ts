import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit{


  ngOnInit(): void {

    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    });
    /* const promesa = new Promise(( resolve ) => {

      resolve('Hola mundo');

    });

    promesa.then(( mensaje ) => {
      console.log(mensaje)
    })
    .catch((error) => console.log('Error', error)) */

    
  }

  getUsuarios() {

    const promesa = new Promise( resolve => {

      fetch('https://reqres.in/api/users')
      .then( resp => resp.json())
      .then(body => console.log(body.data) )

    })
      
    return promesa
  }

}
