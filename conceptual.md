### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?  
  A standardized structure for URL routes.  
  This nomenclature includes the usage of HTTP verbs with a route.  
  The combination of verbs and URL paths yields different meanings according to RESTful standards.  

- What is a resource?  
  An object used to represent the type and associated data. It contains a methods to manipulate data. HTTP verbs used with each restful route will emulate the aforementioned methods to allow for serverside data alteration.

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?  
  We can render DOM elements with JavaScript instead of dedicated routes.

- What does idempotent mean? Which HTTP verbs are idempotent?  
  An idempotent operation can be done multiple times, yielding the same result every time as if only one operation had been done.

- What is the difference between PUT and PATCH?  
  PUT is used to update an entire resource, and PATCH updates only part of a resource.

- What is one way encryption?  
  One way encryption will hash data into a unique string that cannot be decrypted.

- What is the purpose of a `salt` when hashing a password?  
  The salt allows for similar hashed passwords to be very different from one another, even when the passwords are very similar.

- What is the purpose of the Bcrypt module?
  Bcrypt provides hashing methods to hash passwords and to check hashed passwords.

- What is the difference between authorization and authentication?  
  Authentication is the process by which login credentials are validated for a user to log in, whereas authorization describes the permissions for a user to perform specific tasks on various parts of an application.