import { Component } from '@angular/core';
import { SpeakerService } from './speaker.service';

export interface Speaker {
  id: number;
  fullname: string;
  description: string;
  email: string;
}
@Component({
  selector: 'gdg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gdg-santacruz';
  speakers: Speaker[];
  constructor(private service: SpeakerService){
    this.service.getSpeakers()
    .subscribe(
      result => this.speakers = (result as Speaker[]));
  }
}
