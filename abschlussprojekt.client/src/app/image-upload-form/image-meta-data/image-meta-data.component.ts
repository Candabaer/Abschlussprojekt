import { Component } from "@angular/core";
import {
  MatDatepickerModule,
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatError, MatFormField, MatHint, MatInput, MatInputModule, MatLabel} from "@angular/material/input";
import {
  AbstractControl,
  FormArray,
  ReactiveFormsModule,
  UntypedFormBuilder,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {MatCheckbox, MatCheckboxModule} from '@angular/material/checkbox';
import {UsagePurpose} from "../../Dto/ImageDto";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatIconModule} from '@angular/material/icon';

export function validateOneSelected(control: AbstractControl): ValidationErrors | null {
  const formArray = control as FormArray;

  const selectedCount = formArray.controls
    .map(c => c.value)
    .filter(value => !!value).length;

  let form = formArray.controls[0];
  console.log(form.value);

  // console.log('Number of controls:', formArray.controls.length);
  // console.log('Selected count:', selectedCount);

  return selectedCount > 0 ? null : { invalidSize: true };
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
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerModule,
    MatCheckbox,
    MatDatepickerInput,
    MatInput,
    MatGridList,
    MatIconModule,
    MatGridTile,
  ],
  styleUrl: './image-meta-data.component.css'
})
class ImageMetaDataComponent {
  protected readonly Object = Object;
  UsagePurpose = UsagePurpose;

  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    price: ['', Validators.required],
    validity: [new Date(), Validators.required],
    usagePurpose: this.fb.array(Object.values(UsagePurpose).map(() => this.fb.control(false)),
      validateOneSelected
    ),
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

  protected readonly Date = Date;
}

export default ImageMetaDataComponent
