import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-leaked-3',
  imports: [CommonModule],
  template: `
    <p class="clock"> Clock 3: {{ clock$ | async }} </p>
  `,
  standalone: true,
})
export class Leaked3Component implements OnInit {
  obs$ = interval(1000);
  clock$ = new Observable<number>();

  constructor() { }

  ngOnInit(): void {
    this.clock$ = this.obs$.pipe(tap(console.log));
  }

}
