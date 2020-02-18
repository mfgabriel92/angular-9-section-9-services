export class LoggingService {
  logStatusChange(status: string) {
    console.log(`A server status's changed to ${status}`);
  }
}
