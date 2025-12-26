# 12306 Backend API Documentation

This document outlines the API endpoints available in the backend system. All responses return a JSON object containing a `code` (0 for success, non-zero for error), a `msg` description, and optional `data`.

Base URL: `http://localhost:3000`

---

## **1. Authentication**

### **1.1 Send Verification Code**
Sends a 6-digit verification code to the specified mobile number.

- **URL**: `/api/auth/send-code`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "mobile": "13800138000" // Required
  }
  ```
- **Response**:
  ```json
  {
    "code": 0,
    "msg": "Verification code sent",
    "debugCode": "123456" // Included for testing purposes
  }
  ```

### **1.2 Register**
Registers a new user with a verification code.

- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "userName": "testuser",     // Required
    "password": "password123",  // Required
    "mobileNo": "13800138000",  // Required
    "code": "123456",           // Required (from send-code)
    "email": "test@example.com",// Optional
    "name": "Real Name",        // Optional
    "idNo": "110...",           // Optional
    ...otherInfo
  }
  ```
- **Response**:
  ```json
  {
    "code": 0,
    "msg": "Registration successful"
  }
  ```

### **1.3 Login**
Authenticates a user and returns a token. Supports login via username, mobile number, or email.

- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "username": "testuser", // Required (Can be username, mobile number, or email)
    "password": "password"  // Required
  }
  ```
- **Response**:
  ```json
  {
    "code": 0,
    "msg": "Success",
    "data": {
      "token": "mock-token-...",
      "user": {
        "username": "testuser",
        "role": "user",
        "mobileNo": "138...",
        ...otherUserInfo
      }
    }
  }
  ```

### **1.4 Logout**
Logs out the current user.

- **URL**: `/api/auth/logout`
- **Method**: `POST`
- **Response**:
  ```json
  {
    "code": 0,
    "msg": "Success"
  }
  ```

---

## **2. User Profile**

### **2.1 Get Profile**
Retrieves the profile information for a user.

- **URL**: `/api/user/profile`
- **Method**: `GET`
- **Query Parameters**:
  - `username`: The username to fetch profile for (Optional, falls back to default profile if missing/not found)
- **Response**:
  ```json
  {
    "code": 0,
    "data": {
      "basic": {
        "username": "testuser",
        "name": "Real Name",
        "idNo": "110...",
        "idMasked": "110****1234",
        "verifyStatusLabel": "核验通过",
        ...
      },
      "contact": {
        "mobile": "138...",
        "mobileMasked": "138****8000",
        "email": "...",
        ...
      },
      "extra": { ... },
      "student": { ... }
    }
  }
  ```

### **2.2 Update Profile**
Updates user profile information.

- **URL**: `/api/user/profile`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
    "basic": { ... },
    "contact": { ... },
    "extra": { ... }
  }
  ```
- **Response**:
  ```json
  {
    "code": 0,
    "msg": "Updated successfully",
    "data": { ...newProfileData }
  }
  ```

---

## **3. Passengers**

### **3.1 Get Passengers**
Retrieves a list of passengers associated with the user.

- **URL**: `/api/user/passengers`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "code": 0,
    "data": [
      {
        "passenger_name": "Name",
        "passenger_id_no": "ID...",
        "mobile_no": "138...",
        "allEncStr": "enc-...", // Unique ID
        ...
      },
      ...
    ]
  }
  ```

### **3.2 Add Passenger**
Adds a new passenger.

- **URL**: `/api/user/passengers`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "passenger_name": "Name",
    "passenger_id_no": "ID...",
    "mobile_no": "138...",
    ...
  }
  ```
- **Response**:
  ```json
  {
    "code": 0,
    "msg": "Added successfully",
    "data": { ...newPassenger }
  }
  ```

### **3.3 Update Passenger**
Updates an existing passenger.

- **URL**: `/api/user/passengers/:id`
- **Method**: `PUT`
- **URL Parameters**:
  - `id`: The `allEncStr` of the passenger to update.
- **Request Body**:
  ```json
  {
    "passenger_name": "New Name",
    ...
  }
  ```
- **Response**:
  ```json
  {
    "code": 0,
    "msg": "Updated successfully",
    "data": { ...updatedPassenger }
  }
  ```

### **3.4 Delete Passenger**
Deletes a passenger.

- **URL**: `/api/user/passengers/:id`
- **Method**: `DELETE`
- **URL Parameters**:
  - `id`: The `allEncStr` of the passenger to delete.
- **Response**:
  ```json
  {
    "code": 0,
    "msg": "Deleted successfully"
  }
  ```

---

## **4. Train & Orders**

### **4.1 Query Trains**
Searches for available trains.

- **URL**: `/api/trains/query`
- **Method**: `GET`
- **Query Parameters**:
  - `from`: Departure station name (e.g., "Beijing")
  - `to`: Arrival station name (e.g., "Shanghai")
  - `date`: Departure date (YYYY-MM-DD)
- **Response**:
  ```json
  {
    "code": 0,
    "data": [
      {
        "code": "G1",
        "from": "Beijing",
        "to": "Shanghai",
        "depart": "10:00",
        "date": "2023-10-01",
        "price": 553,
        ...
      },
      ...
    ]
  }
  ```

### **4.2 Get Orders**
Retrieves user's order history.

- **URL**: `/api/user/orders`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "code": 0,
    "data": {
      "unfinished": [],
      "nottrip": [ ... ], // Paid orders waiting for travel
      "history": [ ... ]  // Completed/Cancelled orders
    }
  }
  ```

### **4.3 Submit Order**
Creates a new ticket order.

- **URL**: `/api/order/submit`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "train": {
      "code": "G1",
      "from": "Beijing",
      "to": "Shanghai",
      "depart": "10:00",
      ...
    },
    "passengers": [
      {
        "passenger_name": "Name",
        "ticketType": "成人", // or "儿童"
        "seatType": "二等座",
        ...
      }
    ],
    "price": 100 // Optional hint
  }
  ```
- **Response**:
  ```json
  {
    "code": 0,
    "msg": "Order submitted",
    "data": {
      "orderId": "E17...",
      "payMoney": 100
    }
  }
  ```

### **4.4 Cancel Order**
Cancels an existing order.

- **URL**: `/api/order/cancel`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "sequence_no": "E17..." // Order ID
  }
  ```
- **Response**:
  ```json
  {
    "code": 0,
    "msg": "Order cancelled successfully"
  }
  ```
