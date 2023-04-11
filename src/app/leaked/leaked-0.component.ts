import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, interval, tap } from 'rxjs';

@Component({
  selector: 'app-leaked-0',
  imports: [CommonModule],
  template: `
    <p class="clock red"> Clock 0: {{ counter }} </p>
  `,
  standalone: true,
})
export class Leaked0Component implements OnInit {
  obs$ = interval(1000);
  clock$: Subscription = new Subscription;
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.clock$ = this.obs$
      .pipe(tap(console.log))
      .subscribe((num) => (this.counter = num));
  }
}
