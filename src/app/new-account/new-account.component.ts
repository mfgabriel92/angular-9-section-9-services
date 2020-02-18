import { Component, ViewChild, ElementRef } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent {
  @ViewChild('accountNameRef', { static: true })
  name: ElementRef;

  @ViewChild('accountStatusRef', { static: true })
  status: ElementRef;

  constructor(private accountsService: AccountsService) {}

  onCreateAccount() {
    const name = this.name.nativeElement.value;
    const status = this.status.nativeElement.value;

    this.accountsService.addAccount(name, status);
  }
}
