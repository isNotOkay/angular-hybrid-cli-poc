import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'ng7-textfield',
  templateUrl: './ng7-textfield.component.html',
  styleUrls: ['./ng7-textfield.component.css']
})
export class Ng7TextfieldComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() placeholder: string;
  @Output() change: EventEmitter<any> = new EventEmitter();
  @ViewChild('textfield') textfield: ElementRef;

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

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
