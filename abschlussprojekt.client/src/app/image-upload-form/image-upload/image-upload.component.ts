import {Component, Input} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatMiniFabButton} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-image-upload',
  standalone: true,
  templateUrl: './image-upload.component.html',
  imports: [
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatCheckboxModule,
    MatMiniFabButton,
    MatIconModule
  ],
  styleUrl: './image-upload.component.css'
})
export class ImageUploadComponent {
  @Input()
  requiredFileType: string | undefined;
  fileName: string | undefined;
  form = this.fb.group({

  })

  constructor(private fb: FormBuilder) {}

  onFileSelected($event: Event) {
    const input = $event.target as HTMLInputElement;
    const file: File | undefined = input?.files?.[0];
    this.fileName = file?.name;
    const formData = new FormData();
    if(file){
      formData.append("image", file);
    }
  }
}
