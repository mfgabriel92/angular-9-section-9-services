import { Component, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';

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

  constructor(private accountsService: AccountsService) {}

  onStatusChange(status: string) {
    this.accountsService.updateAccount(this.id, status);
  }
}
