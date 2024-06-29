import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken = localStorage.getItem('token');

  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  });

  // Pass the cloned request with the updated header to the next handler
  return next(authReq);
};
