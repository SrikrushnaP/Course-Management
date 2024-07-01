import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit{
  faTrash = faTrash;
  faPenToSquare = faPenToSquare;

  courses: any;

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit() {
    this.fetchCourses();
  }

  fetchCourses() {
    this.courseService.getCourses().subscribe({
      next: (data: any) => {
        // console.log(data);
        this.courses = data;
      },
      error: (err) => console.log(err)
    });
  }

  editCourse(id: any) {
    this.router.navigate([`/edit-course/${id}`]);
  }

}
