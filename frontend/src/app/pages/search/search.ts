import {Component, inject} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {toSignal} from '@angular/core/rxjs-interop';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs';
import {map} from 'rxjs/operators';
import {CourseService} from '../../course/course-service';
import {MatCard, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [
    MatIcon,
    ReactiveFormsModule,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    RouterLink,
  ],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  private readonly courseService = inject(CourseService);

  readonly searchControl = new FormControl('')
  readonly rawSearchTerm = toSignal(
    this.searchControl.valueChanges.pipe(
      map(v => (v ?? '').trim()),
      debounceTime(400),
      distinctUntilChanged(),
      tap(v => console.log('search term changed to', v)),
    ),
    {initialValue: this.searchControl.value ?? ''}
  );
  readonly courses = this.courseService.searchCourses(this.rawSearchTerm)
}
