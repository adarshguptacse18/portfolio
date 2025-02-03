# Grokking SOLID Principle

https://www.designgurus.io/course-play/grokking-solid-design-principles/doc/introduction-to-the-single-responsibility-principle

**SOLID design principles are a set of guidelines that help developers create better-structured, more manageable code.**

![image.png](https://img.notionusercontent.com/s3/prod-files-secure%2F0f8b245e-9ac0-4156-9883-ab8ebb901c37%2F0ec1d190-1ce7-4d2f-bd96-1883d48124f8%2Fimage.png%3FspaceId%3D0f8b245e-9ac0-4156-9883-ab8ebb901c37/size/?exp=1738702612&sig=LbH3wB6B89-gm4c_G94EL4iSMhQSS8194lwqFWAFClcg)

# Single Responsibility Principle

Summary

| **Concept** | **Definition** | **Bad Example** | **Good Example** |
| --- | --- | --- | --- |
| **Single Responsibility Principle (SRP)** | A class/method should have **one responsibility**. | `User` class manages data **and** saves to a file. | Split into `User` (data) and `UserFileManager` (file I/O). |
| **Cohesion** | How **focused** a class’s responsibilities are. | `Utilities` class reverses strings **and** calculates math. | Separate `StringUtils` and `MathUtils` classes. |
| **Coupling** | Degree of **dependencies** between classes. | `PaymentProcessor` directly uses `MySQLDatabase`. | `PaymentProcessor` depends on a `Database` interface. |
| **Separation of Concerns** | Divide a system into **distinct functional layers**. | Monolithic `ECommerceApp` mixes UI, logic, and data. | Split into `UserInterface`, `PricingService`, and `ProductRepository`. |

### SRP

A method, class, interface should only have one and one responsibility. If the class has multiple reasons to change it’s violating SRP. 

**Analogy**:

- **Army Knife** (violates SRP): Combines scissors, screwdrivers, etc. into one tool.
- **Simple Knife** (follows SRP): Designed solely for cutting.

Problem with the definition:

- If a class has multiple reasons to change it’s violating SRP. I don’t know understand the meaning of this statement. At what granularity you can define a reason.
- https://www.reddit.com/r/learnprogramming/comments/15opwvp/does_single_responsibility_principle_mean_that/

### Cohesion

Cohesion refers to how **closely related and focused the responsibilities of a class, module, or method** are.

Low  Cohension violates SRP

Example:

- Low Cohesion: A "UserManager" class handling both user management and file operations

```
public class UserManager {
    public void addUser(String user) {
        // Logic to add a user
    }

    public void deleteUser(String user) {
        // Logic to delete a user
    }

    public void writeToFile(String data) {
        // Logic to write data to a file
    }

    public String readFromFile(String fileName) {
        // Logic to read data from a file
        return fileName;
    }
}
```

- High Cohesion: Separate classes for user management and file management

```
public class UserManager {
    public void addUser(String user) {
        // Logic to add a user
    }

    public void deleteUser(String user) {
        // Logic to delete a user
    }
}

public class FileManager {
    public void writeToFile(String data) {
        // Logic to write data to a file
    }

    public String readFromFile(String fileName) {
        // Logic to read data from a file
        return fileName;
    }
}
```

### Coupling

How closely different classes are connected to each other.

- **High coupling** → Classes are **tightly dependent** on each other, making changes difficult.
- **Low coupling** → Classes are **independent**, making the code modular and maintainable.

I did not like the example given in the course. A different example

- High Coupling
    
    ```
    public class PaymentProcessor {
        // Directly depends on a concrete database implementation
        private MySQLDatabase database = new MySQLDatabase();
    
        public void processPayment(double amount) {
            database.savePayment(amount);
        }
    }
    
    // MySQLDatabase.java
    public class MySQLDatabase {
        public void savePayment(double amount) {
            // MySQL-specific implementation
        }
    }
    ```
    
- Low Coupling
    
    ```
    // Interface
    public interface Database {
        void savePayment(double amount);
    }
    
    // MySQL implementation
    public class MySQLDatabase implements Database {
        @Override
        public void savePayment(double amount) {
            // MySQL-specific code
        }
    }
    
    // Payment processor (works with ANY Database implementation)
    public class PaymentProcessor {
        private Database database;
    
        // Dependency injected via constructor
        public PaymentProcessor(Database database) {
            this.database = database;
        }
    
        public void processPayment(double amount) {
            database.savePayment(amount);
        }
    }
    ```
    

### Separation of concerns

**Separation of Concerns (SoC)** is a design principle for separating a computer program into distinct sections, such that each section addresses a separate concern.

# Open Closed Principle

> Software entities (such as classes, modules, and functions) should be open for extension, but closed for modification.
> 

### 1. Closed for Modification

- Existing code(once it’s written and tested) shouldn't be changed when adding new functionality
- Modifying existing code can introduce **new bugs** and impact stability.

### 2. Open for Extension

- New functionality can be added without changing existing code
- Achieved through inheritance, interfaces, and polymorphism
- Allows system to grow without breaking existing features

Better example than course:

```java
// BAD EXAMPLE - Violates Open/Closed Principle
public class PaymentProcessor {
    public void processPayment(String paymentType, double amount) {
        if (paymentType.equals("CREDIT_CARD")) {
            // Process credit card payment
            System.out.println("Processing credit card payment of $" + amount);
            // Credit card specific logic
        } 
        else if (paymentType.equals("PAYPAL")) {
            // Process PayPal payment
            System.out.println("Processing PayPal payment of $" + amount);
            // PayPal specific logic
        }
       
        // Problem: Adding new payment method requires modifying this class
    }
}

// Usage of bad example
PaymentProcessor processor = new PaymentProcessor();
processor.processPayment("CREDIT_CARD", 100.00);
processor.processPayment("PAYPAL", 50.00);
```

```java
// GOOD EXAMPLE - Follows Open/Closed Principle
// Step 1: Create a payment method interface
public interface PaymentMethod {
    void processPayment(double amount);
}

// Step 2: Implement different payment methods
public class CreditCardPayment implements PaymentMethod {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing credit card payment of $" + amount);
        // Credit card specific logic
    }
}

public class PayPalPayment implements PaymentMethod {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing PayPal payment of $" + amount);
        // PayPal specific logic
    }
}

// Step 3: Create a payment processor that uses payment methods
public class PaymentProcessor {
    private PaymentMethod paymentMethod;

    public PaymentProcessor(PaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public void processPayment(double amount) {
        paymentMethod.processPayment(amount);
    }
}

// Step 4: Usage of good example
public class Main {
    public static void main(String[] args) {
        // Process credit card payment
        PaymentProcessor creditCardProcessor = new PaymentProcessor(new CreditCardPayment());
        creditCardProcessor.processPayment(100.00);

        // Process PayPal payment
        PaymentProcessor paypalProcessor = new PaymentProcessor(new PayPalPayment());
        paypalProcessor.processPayment(50.00);
    }
}
```

# Liskov Substitution Principle

*"Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program."*

```java
public class Bird {
    public void fly() {
        System.out.println("Bird is flying");
    }
}

public class Penguin extends Bird {
    @Override
    public void fly() {
        throw new UnsupportedOperationException("Penguins cannot fly!");
    }
}

Bird bird = new Penguin();
bird.fly(); // This will throw error
```

### Solution using Composition over inheritence

```java
public class Penguin extends Bird {
    @Override
    public void fly() {
        throw new UnsupportedOperationException("Penguins cannot fly!");
    }
}
public class Bird {
    public void eat() {
        System.out.println("Bird is eating");
    }
}

public class Sparrow extends Bird implements Flyable {
    @Override
    public void fly() {
        System.out.println("Sparrow is flying");
    }
}

public class Penguin extends Bird {
    public void swim() {
        System.out.println("Penguin is swimming");
    }
}

Sparrow mySparrow = new Sparrow();
mySparrow.fly();  // Works fine

Penguin myPenguin = new Penguin();
// myPenguin.fly();  // This method doesn't even exist now, avoiding the LSP violation

```

# Interface Segregation Principle

> "Clients should not be forced to depend on interfaces they do not use."
> 

Though for me it feels like this is similar to Liskov Substitution principle. 

[https://mayallo.com/solid-interface-segregation-principle/#:~:text=As a result%2C in my,applying the Liskov Substitution Principle](https://mayallo.com/solid-interface-segregation-principle/#:~:text=As%20a%20result%2C%20in%20my,applying%20the%20Liskov%20Substitution%20Principle).

# Dependency Inversion Principle

> "High-level modules should not depend on low-level modules. Both should depend on abstractions."
> 

```java
        Before DIP:                           After DIP:
       +------------------+                  +---------------------+
       | NotificationService  |              | NotificationService |
       |   (High-Level)       |              | (High-Level)        |
       +---------+---------+              +----------+----------+
                 |                                  |
                 V                                  V
       +------------------+                  +---------------------+
       |   EmailService   |                  | NotificationSender  |
       | (Low-level Impl) |                  | (Abstraction)       |
       +------------------+                  +----------+----------+
                                                          /   \
                                                         /     \
                                       +----------------+      +----------------+
                                       | EmailService   |      | SMSService     |
                                       | (Impl 1)       |      | (Impl 2)     |
                                       +----------------+      +----------------+
```

4 Real world principles

- Dependency Injection And plugin architecture
    
    ```java
    interface DB {
         void save(Data data);
    }
    
    class MySql implements DB {
        @override
        void save(Data data) {
        // Some implementation
        }
    }
    
    class Service {
         DB db;
         Service(DB db) {
             this.db = db;
         }
         
         void addUser(Data userData) {
              this.db.save(userData);
         }
    }
    ```
    
- Service Locator Pattern
    
    ```java
    import java.util.*;
    
    // Abstraction for the Service Locator
    interface Locator {
        PaymentService getPaymentServigice(String serviceName);
    }
    
    // Concrete implementation of the Service Locator
    class ServiceLocator implements Locator {
        private static Map<String, PaymentService> services = new HashMap<>();
    
        public static void registerService(String serviceName, PaymentService service) {
            services.put(serviceName, service);
        }
    
        @Override
        public PaymentService getPaymentService(String serviceName) {
            return services.get(serviceName);
        }
    }
    
    // Abstraction for Payment Service
    interface PaymentService {
        void processPayment(double amount);
    }
    
    // Implementation for PayPal
    class PayPalService implements PaymentService {
        @Override
        public void processPayment(double amount) {
            System.out.println("Processing payment via PayPal: $" + amount);
        }
    }
    
    // High-level class that depends on abstractions
    class Solution {
        private Locator locator;
    
        public Solution(Locator locator) {
            this.locator = locator;
        }
    
        public void processPayment(String serviceName, double amount) {
            PaymentService paymentService = locator.getPaymentService(serviceName);
            paymentService.processPayment(amount);
        }
    
        public static void main(String[] args) {
            // Registering PayPalService
            ServiceLocator.registerService("PayPal", new PayPalService());
    
            // Creating Service Locator instance
            Locator locator = new ServiceLocator();
    
            // Creating Solution instance with injected locator
            Solution solution = new Solution(locator);
    
            // Using the Solution class to process payments
            solution.processPayment("PayPal", 100.0);
        }
    }
    
    ```
    
- Inversion of Control
    
    ```java
    @Service
    public class OrderService {
        private final PaymentService paymentService;
    
        @Autowired
        public OrderService(PaymentService paymentService) {
            this.paymentService = paymentService;
        }
    
        public void placeOrder(double amount) {
            paymentService.processPayment(amount);
        }
    }
    ```