import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constrcutor() {
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
}
