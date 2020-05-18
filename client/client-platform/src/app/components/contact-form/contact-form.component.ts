import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectionService } from '../../services/connection.service';
import { ClientDataSource } from '../clients/clients.component';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;
  router: Router;

  @HostListener('input') oninput() {

  if (this.contactForm.valid) {
    this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private connectionService: ConnectionService) { 
    this.contactForm = fb.group({
      'first_name':['', Validators.required],
      'last_name':['', Validators.required],
      'phone':['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value)
    this.connectionService.addClient(this.contactForm.value).subscribe(()=> {
      alert('A text message has been sent');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    })
  }

}
