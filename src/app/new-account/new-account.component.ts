import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent {
  @Output()
  newAccount = new EventEmitter<{ name: string; status: string }>();

  @ViewChild('accountNameRef', { static: true })
  name: ElementRef;

  @ViewChild('accountStatusRef', { static: true })
  status: ElementRef;

  onCreateAccount() {
    this.newAccount.emit({
      name: this.name.nativeElement.value,
      status: this.status.nativeElement.value
    });

    console.log(
      `A server status's changed to ${this.status.nativeElement.value}`
    );
  }
}