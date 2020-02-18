import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input()
  account: { name: string; status: string };

  @Input()
  id: number;

  @Output()
  statusChanged = new EventEmitter<{ id: number; status: string }>();

  constructor(private loggigng: LoggingService) {}

  onStatusChange(status: string) {
    this.statusChanged.emit({ id: this.id, status });
    this.loggigng.logStatusChange(status);
  }
}
