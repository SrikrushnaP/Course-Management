import { RouterModule, Routes } from '@angular/router';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: 'create-course',
    component: CreateCourseComponent,
  },
  {
    path: 'edit-course/:id',
    component: EditCourseComponent,
  },
  {
    path: 'list-course',
    component: CourseListComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
