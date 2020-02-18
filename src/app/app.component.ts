import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    }
  ];

  onAccountAdded(account: { name: string; status: string }) {
    this.accounts.push(account);
  }

  onStatusChanged(update: { id: number; status: string }) {
    this.accounts[update.id].status = update.status;
  }
}
