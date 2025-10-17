import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-review',
  standalone: true,
  templateUrl: './review.component.html',
  imports: [
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardContent,
    MatCardTitle
  ],
  styleUrl: './review.component.css'
})
export class ReviewComponent implements AfterViewInit {
  upload: boolean = false;
  @Input()
  public combinedForm!: FormGroup;

  constructor() {
  }

  ngAfterViewInit(): void {

  }
}
