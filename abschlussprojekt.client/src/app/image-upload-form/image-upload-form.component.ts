import {AfterViewInit, Component, OnInit, Output, signal, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, NgForm, Validators} from '@angular/forms';
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from "@angular/material/stepper";
import {MatButton} from "@angular/material/button";
import ImageMetaDataComponent from "./image-meta-data/image-meta-data.component";
import {ImageUploadComponent} from "./image-upload/image-upload.component";
import {AppModule} from "../app.module";
import {ReviewComponent} from "./review/review.component";

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
    ImageMetaDataComponent,
    ImageUploadComponent,
    ReviewComponent
  ],
  standalone: true
})
export class ImageUploadFormComponent implements AfterViewInit{

  @ViewChild('stepper')
  private matStepper!: MatStepper;
  @ViewChild('metaData')
  metaData: any;
  @ViewChild('imageUpload')
  imageUpload: any;
    combinedForm: FormGroup | undefined= undefined;

    constructor(private fb: FormBuilder) {

    }

  ngAfterViewInit(){
    this.matStepper.selectionChange.subscribe(selection =>{
      if(selection.selectedIndex == this.matStepper.steps.length-1) {
        this.combinedForm = this.fb.group({
          image: this.fb.group(this.imageUpload.form.value),
          metadata: this.fb.group(this.metaData.form.value),
        });
      }
    });
  }

  formSubmit(form: NgForm) {}


}
