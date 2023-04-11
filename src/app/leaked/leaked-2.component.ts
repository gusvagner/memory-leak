import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, Subscription, interval, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-leaked-2',
  imports: [CommonModule],
  template: `
    <p class="clock"> Clock 2: {{ counter }} </p>
  `,
  standalone: true,
})
export class Leaked2Component implements OnInit, OnDestroy {
  obs$ = interval(1000);
  clock$1: Subscription = new Subscription;
  clock$2: Subscription = new Subscription;
  destroy$ = new Subject();

  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.clock$1 = this.obs$
      .pipe(tap(console.log), takeUntil(this.destroy$))
      .subscribe((num) => (this.counter = num));
  }

  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }

}
