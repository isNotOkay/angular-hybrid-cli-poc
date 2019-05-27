import {Component, OnInit} from '@angular/core';
import {Ng7ContentService} from './services/ng7-content-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private contentService: Ng7ContentService) {
    // empty
  }

  ngOnInit() {
    // empty
  }

  onChange(change: string) {
    if (typeof change === 'string') {
      console.log(change);
    }
  }

  fireHttpRequest() {
    this.contentService.getGoogle();
  }
}
