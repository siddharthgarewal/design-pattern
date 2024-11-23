// Product Interface
interface Notifications {
  send(message: string): void;
}

// Concrete Product: Email Notification
class EmailNotification implements Notifications {
  send(message: string): void {
    console.log(`Sending Email: ${message}`);
  }
}

// Concrete Product: SMS Notification
class SMSNotification implements Notifications {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

// Creator Abstract Class
abstract class NotificationCreator {
  abstract createNotification(): Notifications;

  notify(message: string): void {
    const notification = this.createNotification();
    notification.send(message);
  }
}

// Concrete Creator: Email Notification
class EmailNotificationCreator extends NotificationCreator {
  createNotification(): Notifications {
    return new EmailNotification();
  }
}

// Concrete Creator: SMS Notification
class SMSNotificationCreator extends NotificationCreator {
  createNotification(): Notifications {
    return new SMSNotification();
  }
}

// Client Code
function clientCode(creator: NotificationCreator, message: string) {
  creator.notify(message);
}

const emailCreator = new EmailNotificationCreator();
const smsCreator = new SMSNotificationCreator();

clientCode(emailCreator, "Hello via Email!");
clientCode(smsCreator, "Hello via SMS!");
