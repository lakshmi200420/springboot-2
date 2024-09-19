import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public registerUser(userData: any) {
    return this.http.post(`${this.API}/users`, userData);
  }

  public getUsers() {
    return this.http.get(`${this.API}/users`);
  }

  public deleteUser(userId: any) {
    return this.http.delete(`${this.API}/users/${userId}`);
  }

  public updateUser(user: any) {
    return this.http.put(`${this.API}/users/${user.id}`, user);
  }
}
