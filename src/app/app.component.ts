import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>How To Prevent Memory Leak - Examples</h1>
    <app-leaked-0 *ngIf="toggle"></app-leaked-0>
    <app-leaked-1 *ngIf="toggle"></app-leaked-1>
    <app-leaked-2 *ngIf="toggle"></app-leaked-2>
    <app-leaked-3 *ngIf="toggle"></app-leaked-3>
    <button (click)="toggle = !toggle">Toggle</button>
    <aside>
      <ul>
        <li><b>Clock 0:</b> It's having memory leak.</li>
        <li><b>Clock 1:</b> It's using Subscription to unsubscribe all observables in the component in ngOnDestroy method provided by OnDestroy        interface, if we had only one observable, we can just unsubscribe it with unsubscribe() method.</li>
        <li><b>Clock 2:</b> It's using a Subject and takeUntil() method, when the Subject complete on ngOnDestroy(), it won't make more calls.</li>
        <li><b>Clock 3:</b> It's using async pipe operator and direct in the observable with the type number, async pipe operator
        allows you to subscribe and unsubscribe observables.</li>
      </ul>
    </aside>

  `,
  styles: [`
    h1 {
      text-align: center;
    }
    aside ul {
      list-style: none;
      padding: 0;
      margin: 0;
      margin-top: 10px;
    }
    aside li {
      margin-bottom: 10px;
    }
  `],
})
export class AppComponent {
  title = 'memory-leak';
  toggle = true;

}
