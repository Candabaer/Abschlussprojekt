import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImageUploadFormComponent} from "./image-upload-form/image-upload-form.component";

const routes: Routes = [
  { path: 'upload', component: ImageUploadFormComponent }, // URL: /upload
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
