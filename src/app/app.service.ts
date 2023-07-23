import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  sendOrder(data: any) {
    return this.http.post(
      'https://angular-burgers.onrender.com/burgers-order',
      data
    );
  }

  getData() {
    return this.http.get('https://angular-burgers.onrender.com/burgers');
  }
}
