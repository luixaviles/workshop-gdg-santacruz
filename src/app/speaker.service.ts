import { Injectable } from '@angular/core';
import { Speaker } from './app.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  constructor(private http: HttpClient) { }

  getSpeakers() {
    return this.http.get(
      'http://localhost:4200/api/speaker');
  }
}
