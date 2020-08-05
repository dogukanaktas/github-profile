import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ProfileComponent } from './profile/profile.component';
import { JsonPipe } from '@angular/common';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: any;
  profile: any;
  display: any;
  closeDiv: boolean = true;

  constructor(private userData: HttpService) {}

  ngOnInit() {
    this.display = Object.values(localStorage).map((val: any) =>
      JSON.parse(val)
    );
  }

  public findProfile() {
    this.userData.updateProfile(this.profile);
    this.userData.getUser().subscribe((result) => {
      this.user = result;
    });
  }

  public addLocal() {
    this.user.storageKey = Math.floor(Math.random() * 10000).toString();
    localStorage.setItem(this.user.storageKey, JSON.stringify(this.user));
    this.display = Object.values(localStorage).map((val: any) =>
      JSON.parse(val)
    );
  }

  public removeLocal(id: any, key: string) {
    for (let i = 0; i < this.display.length; i++) {
      if (this.display[i].id === id) {
        this.display.splice(i, 1);
        localStorage.removeItem(key);
      }
    }
  }

  public detectChange(ev: any) {
    ev.length > 0 ? (this.closeDiv = false) : (this.closeDiv = true);
  }
}
