import { Component } from '@angular/core';
import {FormBuilder, FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-image-upload-form',
  templateUrl: './image-upload-form.component.html',
  styleUrl: './image-upload-form.component.css',
  standalone: true
})
export class ImageUploadFormComponent {
    constructor(private formBuilder: FormBuilder) {
    }

    formSubmit(form: NgForm) {}


}
