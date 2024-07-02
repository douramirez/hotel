import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Contact', this.contact);
    // Aquí puedes añadir lógica para enviar el mensaje de contacto a un servidor
  }

}
