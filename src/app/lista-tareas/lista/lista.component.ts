import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  estado: string;
}

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  contador:number = 10
  constructor() { }

  ngOnInit() {
  }

  lista: Tarea[] = [
    {
      id: 1,
      titulo: 'Tarea 1',
      descripcion: 'Descripcion de la tarea 1',
      estado: 'pendiente'
    },
    {
      id: 2,
      titulo: 'Tarea 2',
      descripcion: 'Descripcion de la tarea 2',
      estado: 'pendiente'
    },
    {
      id: 3,
      titulo: 'Tarea 3',
      descripcion: 'Descripcion de la tarea 3',
      estado: 'pendiente'
    },
    {
      id: 4,
      titulo: 'Tarea 4',
      descripcion: 'Descripcion de la tarea 4',
      estado: 'pendiente'
    },
    {
      id: 5,
      titulo: 'Tarea 5',
      descripcion: 'Descripcion de la tarea 5',
      estado: 'pendiente'
    },
    {
      id: 6,
      titulo: 'Tarea 6',
      descripcion: 'Descripcion de la tarea 6',
      estado: 'pendiente'
    },
    {
      id: 7,
      titulo: 'Tarea 7',
      descripcion: 'Descripcion de la tarea 7',
      estado: 'pendiente'
    },
    {
      id: 8,
      titulo: 'Tarea 8',
      descripcion: 'Descripcion de la tarea 8',
      estado: 'pendiente'
    },
    {
      id: 9,
      titulo: 'Tarea 9',
      descripcion: 'Descripcion de la tarea 9',
      estado: 'pendiente'
    },
    {
      id: 10,
      titulo: 'Tarea 10',
      descripcion: 'Descripcion de la tarea 10',
      estado: 'pendiente'
    }
  ]

  listaCompletas: Tarea[] = []

  setCompleted(event: any) {
    const id: number = event.target.id
    const tareaCompleted = this.lista.find(tarea => tarea.id == id)

    if (tareaCompleted) {
      tareaCompleted.estado = 'completed'
      this.lista = this.lista.filter(tarea => tarea.id != id)
      this.listaCompletas.push(tareaCompleted)
    }

  }

  generarIdUnico(){
    this.contador++
    return this.contador
  }

 //   CASO USO COMO FORMULARIO

  // enviar(form: NgForm, event:any){

  //     if(form.valid){
  //       const tarea: Tarea = {
  //         id: this.generarIdUnico(),
  //         titulo: form.value.nombre,
  //         descripcion: form.value.descripcion,
  //         estado: 'pendiente'
  //       }
  //       this.lista.push(tarea)
  //       form.reset()
  //     }else{
  //       alert('Formulario no valido');
  //     }
  // }

  // limpiar(form: NgForm){
  //   form.reset()
  // }


   //   CASO USO COMO PROPERTY BINDING CON NGMODEL

  enviar(){
    console.log(this.tarea);
    this.tarea.id = this.generarIdUnico()
    this.lista.push({...this.tarea})
    this.limpiar()
  }

  limpiar(){
    this.tarea.titulo =''
    this.tarea.descripcion = ''
  }

  eliminarTarea(event:any){
    const id = event.target.id
    console.log(id);
    this.lista = this.lista.filter(tarea=>tarea.id!=id)

  }

  tarea: Tarea ={
    id: this.generarIdUnico(),
          titulo: '',
          descripcion: '',
          estado: 'pendiente'
  }

}
