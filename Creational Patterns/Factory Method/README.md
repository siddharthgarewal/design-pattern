# Factory Method

The Factory Method Design Pattern defines an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created.

## Explanation:

1. Product Interface (Notification): Defines the common interface for all products.
2. Concrete Products (EmailNotification, SMSNotification): Implement the product interface.
3. Creator Abstract Class (NotificationCreator): Declares the factory method (createNotification) that returns objects of the product interface.
4. Concrete Creators (EmailNotificationCreator, SMSNotificationCreator): Override the factory method to specify the concrete product being instantiated.
5. This approach allows you to decouple object creation from its usage, adhering to the Open/Closed Principle.
