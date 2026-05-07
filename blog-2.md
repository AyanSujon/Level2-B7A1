<!-- Blog-2 -->

````md
# Using Pick and Omit in TypeScript to Avoid Code Duplication (DRY Principle)

## Introduction

When working with large TypeScript interfaces, it is common to reuse parts of a "master" interface in different contexts. Instead of redefining similar types again and again, TypeScript provides utility types like **`Pick`** and **`Omit`**. These help create smaller, specialized "slices" of a larger interface while keeping your code clean, maintainable, and DRY (Don't Repeat Yourself).

---

## Understanding the Master Interface

Let’s start with a base interface that represents a user in a system:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  createdAt: Date;
}
````

This interface contains both public and sensitive/internal fields.

---

## Using `Pick` to Create Specific Views

The `Pick` utility type allows you to select only the required properties from an existing interface.

### Example: Public User Profile

We don’t want to expose sensitive fields like `password`.

```ts
type PublicUser = Pick<User, "id" | "name" | "email">;

const userProfile: PublicUser = {
  id: 1,
  name: "Ayan",
  email: "ayan@example.com",
};
```

### Why this is useful

* No need to redefine `id`, `name`, `email`
* If `User` changes, `PublicUser` stays in sync automatically
* Prevents duplication of type definitions

---

## Using `Omit` to Remove Sensitive Fields

The `Omit` utility type does the opposite of `Pick`: it removes specific properties.

### Example: Safe API Response Type

We want everything except sensitive fields like `password`.

```ts
type SafeUser = Omit<User, "password">;

const apiResponse: SafeUser = {
  id: 2,
  name: "John",
  email: "john@example.com",
  role: "user",
  createdAt: new Date(),
};
```

### Why this is useful

* Quickly remove sensitive or unnecessary fields
* Keeps type definitions clean
* Reduces duplication across APIs and services

---

## Combining Pick and Omit

You can even combine both utilities for more advanced slicing.

### Example: Admin Dashboard View

```ts
type AdminUserView = Pick<User, "id" | "name" | "email" | "role">;
```

Or alternatively:

```ts
type AdminUserView = Omit<User, "password" | "createdAt">;
```

Both approaches achieve the same result in different ways.

---

## How This Keeps Code DRY

Without `Pick` and `Omit`, you might end up doing this:

```ts
interface PublicUser {
  id: number;
  name: string;
  email: string;
}

interface SafeUser {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: Date;
}
```

### Problems with this approach:

* Repeated property definitions
* Harder to maintain
* Risk of inconsistencies when `User` changes

### With `Pick` and `Omit`:

* Single source of truth (`User`)
* Reusable type transformations
* Easier refactoring
* Reduced duplication

---

## Conclusion

`Pick` and `Omit` are powerful TypeScript utility types that help you create specialized versions of a master interface without rewriting properties. By using them, you ensure your code follows the **DRY principle**, making it more scalable, maintainable, and less error-prone.

In real-world applications, especially in APIs and frontend-backend communication, these utilities are essential for clean and safe type design.

```
```
