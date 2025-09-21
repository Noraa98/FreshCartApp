import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [DatePipe],
  templateUrl: './clock.html',
  styleUrl: './clock.css'
})
export class Clock implements OnInit, OnDestroy {
  currentTime: Date = new Date();
  private timerId: any;

  ngOnInit(): void {
    this.timerId = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerId);
    console.log('Clock stopped');
  }
}
