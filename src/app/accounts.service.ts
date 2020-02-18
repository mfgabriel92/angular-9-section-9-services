import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({ providedIn: 'root' })
export class AccountsService {
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

  constructor(private logging: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.logging.logStatusChange(status);
  }

  updateAccount(id: number, status: string) {
    this.accounts[id].status = status;
    this.logging.logStatusChange(status);
  }
}
