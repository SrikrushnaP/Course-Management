import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-edit-course',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})
export class EditCourseComponent implements OnInit {
  id!: any;
  updateForm!: FormGroup;
  course: any;

  constructor(
    private courseService: CourseService,
    private actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.updateForm = this.formBuilder.group({
      courseTitle: ['', Validators.required],
      platform: ['', Validators.required],
      courseDescription: ['', Validators.required],
      courseLink: ['', Validators.required],
      isCompleted: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.actRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.courseService.getCourseById(this.id).subscribe((res) => {
        this.course = res;
        this.updateForm.get('courseTitle')?.setValue(this.course.courseTitle);
        this.updateForm.get('platform')?.setValue(this.course.platform);
        this.updateForm.get('courseDescription')?.setValue(this.course.courseDescription);
        this.updateForm.get('courseLink')?.setValue(this.course.courseLink);
        this.updateForm.get('isCompleted')?.setValue(`${this.course.isCompleted}`);
      });
    });
  }

  updateCourse() {
    const { value } = this.updateForm;
    this.courseService.updateCourse(this.id, value).subscribe((res) => {
      this.router.navigate(['/list-course']);
      alert(`The course details has been successfully updated.`)
      // Note: For new way of calling (next, error, complete), refer to course.component.ts : `this.courseService.addCourse(value).subscribe({...`
    });
  }

}
