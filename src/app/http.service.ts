import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private username: any;
  private clientId = 'e3085edd590f2bb81a47';
  private clientSecret = 'e397d84029d49539bde28b3f3fa9f2398ff5c913';

  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    const url = `https://api.github.com/users/${this.username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`;
    return this.http.get(url);
  }

  updateProfile(profile: any) {
    this.username = profile;
  }
}
