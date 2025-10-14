import { Component } from "@angular/core";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatError, MatFormField, MatHint, MatInput, MatInputModule, MatLabel} from "@angular/material/input";
import {MatOptgroup, MatOption, MatSelect, MatSelectModule} from "@angular/material/select";
import {
  AbstractControl,
  FormArray,
  ReactiveFormsModule,
  UntypedFormBuilder,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {MatCheckbox, MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioButton, MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import {UsagePurpose} from "../../Dto/ImageDto";

export function validateOneSelected(control: AbstractControl): ValidationErrors | null {
  const formArray = control as FormArray;
  console.log(formArray.length);
  let x = formArray.length > 0
  console.log("Ist: " + x );

  return formArray && formArray.length > 0 ? { invalidSize: true } : null;
}

@Component({
  selector: 'app-image-meta-data',
  standalone: true,
  templateUrl: './image-meta-data.component.html',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatHint,
    MatError,
    MatRadioGroup,
    MatRadioButton,
    MatSelect,
    MatOption,
    MatOptgroup,
    MatDatepickerToggle,
    MatDatepicker,
    MatCheckbox,
    MatDatepickerInput,
    MatInput
  ],
  styleUrl: './image-meta-data.component.css'
})
class ImageMetaDataComponent {

  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    price: ['', Validators.required],
    releasedAt: [new Date(), Validators.required],
    usagePurpose: this.fb.array([], validateOneSelected),
    courseType: ['premium', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: ['', [Validators.required, Validators.minLength(3)]]
  });


  constructor(private fb: UntypedFormBuilder) {
    console.log(UsagePurpose.PrintMagazine);
  }
  get usagePurpose(){
    return this.form.controls["usagePurpose"] as FormArray;
  }

  get imageTitle() {
    return this.form.controls['title'];
  }

  protected readonly UsagePurpose = UsagePurpose;
  protected readonly Object = Object;

  onChangeDetected() {
    this.usagePurpose.markAsDirty();
    this.usagePurpose.updateValueAndValidity();
  }
}

export default ImageMetaDataComponent
