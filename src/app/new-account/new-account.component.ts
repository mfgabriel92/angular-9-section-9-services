import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output()
  newAccount = new EventEmitter<{ name: string; status: string }>();

  @ViewChild('accountNameRef', { static: true })
  name: ElementRef;

  @ViewChild('accountStatusRef', { static: true })
  status: ElementRef;

  constructor(private loggigng: LoggingService) {}

  onCreateAccount() {
    this.newAccount.emit({
      name: this.name.nativeElement.value,
      status: this.status.nativeElement.value
    });
    this.loggigng.logStatusChange(this.status.nativeElement.value);
  }
}
