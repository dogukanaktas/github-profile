import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  username: any;
  userID: any;
  private clientId = 'e3085edd590f2bb81a47';
  private clientSecret = 'e397d84029d49539bde28b3f3fa9f2398ff5c913';
  constructor(private router: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.username =  this.router.snapshot.params.user;
    this.getUser().subscribe((result) => {
      this.username = result;
    });
  }

  getUser(): Observable<any> {
    const url = `https://api.github.com/users/${this.username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`;
    return this.http.get(url);
  }
}
