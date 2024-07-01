import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { CourseService } from '../../services/course.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})
export class CreateCourseComponent implements OnInit {
  createForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private courseService: CourseService, private toastr: ToastrService) {
    this.createForm = this.formBuilder.group({
      courseTitle: ['', Validators.required],
      platform: ['', Validators.required],
      courseDescription: ['', Validators.required],
      courseLink: ['', Validators.required],
      isCompleted: ['', Validators.required],

    });
  }

  addCourse(){
    const { value } = this.createForm;

    this.courseService.addCourse(value).subscribe({
      next: (res: any) => {
        //response
        this.router.navigate(['/list-course']);
        this.toastr.success(`The course details has been successfully saved to the database.`, 'New course added')
      },
      error: (error:any) => {
        // handle error
        console.log(error);
      },
      complete: () => {
        console.log('Request complete');
      },
    })
  }

  ngOnInit() {}
}
