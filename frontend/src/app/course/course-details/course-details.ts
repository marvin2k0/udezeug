import {Component, input} from '@angular/core';
import {Course} from '../course-model';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-course-details',
  imports: [
    MatIcon
  ],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails {
  readonly course = input.required<Course>()
}
