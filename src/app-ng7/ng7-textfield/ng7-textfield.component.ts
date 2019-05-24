import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'ng7-textfield',
  templateUrl: './ng7-textfield.component.html',
  styleUrls: ['./ng7-textfield.component.css']
})
export class Ng7TextfieldComponent implements OnInit, AfterViewInit {
  @ViewChild('textfield') textfield: ElementRef;
  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    // empty
  }

  ngAfterViewInit(): void {
    this.textfield.nativeElement.addEventListener('input', () => {
      this.change.emit(this.textfield.nativeElement.value);
    });
  }
}
