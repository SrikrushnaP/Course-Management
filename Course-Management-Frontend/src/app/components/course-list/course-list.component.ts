import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  faTrash = faTrash;
  faPenToSquare = faPenToSquare;
}
