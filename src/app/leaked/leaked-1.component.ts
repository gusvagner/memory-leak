import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, interval, tap } from 'rxjs';

@Component({
  selector: 'app-leaked-1',
  imports: [CommonModule],
  template: `
    <p class="clock"> Clock 1: {{ counter }} </p>
  `,
  standalone: true,
})
export class Leaked1Component implements OnInit, OnDestroy {
  obs$ = interval(1000);
  clock$1: Subscription = new Subscription;
  clock$2: Subscription = new Subscription;
  subscriptions = new Subscription();

  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.clock$1 = this.obs$
      .pipe(tap(console.log))
      .subscribe((num) => (this.counter = num));

    this.clock$2 = this.obs$
      .pipe(tap(console.log))
      .subscribe((num) => (this.counter = num));

    this.subscriptions.add(this.clock$1);
    this.subscriptions.add(this.clock$2);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
