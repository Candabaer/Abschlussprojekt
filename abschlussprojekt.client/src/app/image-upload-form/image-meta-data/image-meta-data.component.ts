import { Component } from "@angular/core";
import {AbstractControl, FormArray, ReactiveFormsModule, UntypedFormBuilder, ValidationErrors, Validators } from "@angular/forms";
import { UsagePurpose } from "../../Dto/ImageDto";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCheckboxModule} from "@angular/material/checkbox";

export function validateOneSelected(control: AbstractControl): ValidationErrors | null {
  const formArray = control as FormArray;

  const selectedCount = formArray.controls
    .map(c => c.value)
    .filter(value => !!value).length;

  return selectedCount > 0 ? null : { invalidSize: true };
}

@Component({
  selector: 'app-image-meta-data',
  standalone: true,
  templateUrl: './image-meta-data.component.html',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatCheckboxModule
  ],
  styleUrl: './image-meta-data.component.css'
})
class ImageMetaDataComponent {
  protected readonly Object = Object;
  UsagePurpose = UsagePurpose;


  public form = this.fb.group({
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
    project: ['', Validators.required],
    tags: ['', ]
  });

  constructor(private fb: UntypedFormBuilder) {
  }
  ngOnInit() {
    this.form.statusChanges.subscribe(status => {console.log(status)});
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
