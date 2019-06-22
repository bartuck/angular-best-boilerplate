import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  private baseUrl = environment.baseApiUrl;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiUrl = `${this.baseUrl}/${req.url}`;
    const parsedApiUrl = apiUrl.replace('///', '/').replace('//', '/');

    req = req.clone({
      url: parsedApiUrl
    });

    return next.handle(req);
  }
}
