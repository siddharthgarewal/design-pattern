var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Concrete Product: Email Notification
var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.send = function (message) {
        console.log("Sending Email: ".concat(message));
    };
    return EmailNotification;
}());
// Concrete Product: SMS Notification
var SMSNotification = /** @class */ (function () {
    function SMSNotification() {
    }
    SMSNotification.prototype.send = function (message) {
        console.log("Sending SMS: ".concat(message));
    };
    return SMSNotification;
}());
// Creator Abstract Class
var NotificationCreator = /** @class */ (function () {
    function NotificationCreator() {
    }
    NotificationCreator.prototype.notify = function (message) {
        var notification = this.createNotification();
        notification.send(message);
    };
    return NotificationCreator;
}());
// Concrete Creator: Email Notification
var EmailNotificationCreator = /** @class */ (function (_super) {
    __extends(EmailNotificationCreator, _super);
    function EmailNotificationCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailNotificationCreator.prototype.createNotification = function () {
        return new EmailNotification();
    };
    return EmailNotificationCreator;
}(NotificationCreator));
// Concrete Creator: SMS Notification
var SMSNotificationCreator = /** @class */ (function (_super) {
    __extends(SMSNotificationCreator, _super);
    function SMSNotificationCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSNotificationCreator.prototype.createNotification = function () {
        return new SMSNotification();
    };
    return SMSNotificationCreator;
}(NotificationCreator));
// Client Code
function clientCode(creator, message) {
    creator.notify(message);
}
var emailCreator = new EmailNotificationCreator();
var smsCreator = new SMSNotificationCreator();
clientCode(emailCreator, "Hello via Email!");
clientCode(smsCreator, "Hello via SMS!");
