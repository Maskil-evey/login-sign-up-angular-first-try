import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.css']
})
export class SuccessfulComponent implements OnInit {
  timeLeft = 100;
  @ViewChild('loader',{read:ElementRef, static:true})loader!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader.nativeElement.style.display = 'none';
    }, 5000);
  }
}
