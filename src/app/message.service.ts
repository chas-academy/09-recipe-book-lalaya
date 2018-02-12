import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  // Add message to the cache
  add(message: string) {
    this.messages.push(message);
  }

  // Clear the cache
  clear() {
    this.messages = [];
  }
}
