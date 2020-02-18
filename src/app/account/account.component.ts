import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  @Input()
  account: { name: string; status: string };

  @Input()
  id: number;

  @Output()
  statusChanged = new EventEmitter<{ id: number; status: string }>();

  onStatusChange(status: string) {
    this.statusChanged.emit({ id: this.id, status });
    console.log(`A server's status changed to ${status}`);
  }
}
