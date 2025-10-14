import { Component } from '@angular/core';
import {FormBuilder, FormsModule, NgForm} from '@angular/forms';
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from "@angular/material/stepper";
import {MatButton} from "@angular/material/button";
import ImageMetaDataComponent from "./image-meta-data/image-meta-data.component";

@Component({
  selector: 'app-image-upload-form',
  templateUrl: './image-upload-form.component.html',
  styleUrl: './image-upload-form.component.css',
  imports: [
    MatStepper,
    MatStep,
    MatStepperNext,
    MatButton,
    MatStepLabel,
    MatStepperPrevious,
    ImageMetaDataComponent
  ],
  standalone: true
})
export class ImageUploadFormComponent {
    constructor(private formBuilder: FormBuilder) {
    }

    formSubmit(form: NgForm) {}


}
