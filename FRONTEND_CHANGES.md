# 🔄 Frontend Changes Required

## Authentication System Update

**Changed from:** Phone number + OTP login  
**Changed to:** Username/Password login + Phone verification (optional)

---

## New API Endpoints

### 1. Register User
```
POST /api/v1/auth/register
```

**Request:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",  // optional
  "password": "password123",
  "phoneNumber": "+1234567890"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully. Please verify your phone number.",
  "user": {
    "id": "uuid",
    "username": "johndoe",
    "email": "john@example.com",
    "phoneNumber": "+1234567890",
    "phoneVerified": false,
    "role": "CUSTOMER"
  }
}
```

**Note:** OTP is automatically sent to phone number after registration.

---

### 2. Login
```
POST /api/v1/auth/login
```

**Request:**
```json
{
  "username": "johndoe",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "username": "johndoe",
    "email": "john@example.com",
    "phoneNumber": "+1234567890",
    "phoneVerified": true,
    "role": "CUSTOMER"
  }
}
```

---

### 3. Verify Phone (Renamed from verify-otp)
```
POST /api/v1/auth/verify-phone
```

**Request:**
```json
{
  "phoneNumber": "+1234567890",
  "otp": "123456"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Phone number verified successfully",
  "user": {
    "id": "uuid",
    "username": "johndoe",
    "email": "john@example.com",
    "phoneNumber": "+1234567890",
    "phoneVerified": true,
    "role": "CUSTOMER"
  }
}
```

---

### 4. Send OTP (Updated)
```
POST /api/v1/auth/send-otp
```

**Request:**
```json
{
  "phoneNumber": "+1234567890"
}
```

**Note:** Phone number must belong to an existing user account.

---

## Removed Endpoints

- ❌ `POST /api/v1/auth/verify-otp` (replaced by `/verify-phone`)

---

## User Object Changes

**Before:**
```json
{
  "id": "uuid",
  "phoneNumber": "+1234567890",
  "role": "CUSTOMER"
}
```

**After:**
```json
{
  "id": "uuid",
  "username": "johndoe",
  "email": "john@example.com",
  "phoneNumber": "+1234567890",
  "phoneVerified": false,
  "role": "CUSTOMER"
}
```

---

## JWT Token Changes

**Before:** Token contained `phoneNumber`  
**After:** Token contains `username`

---

## New User Flow

1. **Registration Page**
   - Username (required, 3-30 chars, alphanumeric + underscore)
   - Email (optional)
   - Password (required, min 6 chars)
   - Phone Number (required, E.164 format)
   - After submit → OTP automatically sent

2. **Phone Verification Page** (Optional but recommended)
   - Enter OTP received via SMS
   - Updates `phoneVerified` to `true`

3. **Login Page**
   - Username
   - Password
   - Returns JWT token

---

## Validation Rules

- **Username:** 3-30 characters, letters/numbers/underscores only
- **Password:** Minimum 6 characters
- **Email:** Standard email format (optional)
- **Phone:** E.164 format (e.g., `+1234567890`)

---

## Breaking Changes

⚠️ **Must Update:**
- Login form: Change from phone/OTP to username/password
- Registration: Add username, password, email fields
- User state: Update to include `username`, `email`, `phoneVerified`
- JWT handling: Token now has `username` instead of `phoneNumber`

---

## Example Frontend Code

```javascript
// Register
const register = async (userData) => {
  const res = await fetch('http://localhost:3000/api/v1/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: userData.username,
      email: userData.email,
      password: userData.password,
      phoneNumber: userData.phoneNumber
    })
  });
  return res.json();
};

// Login
const login = async (username, password) => {
  const res = await fetch('http://localhost:3000/api/v1/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  localStorage.setItem('token', data.token);
  return data;
};

// Verify Phone
const verifyPhone = async (phoneNumber, otp) => {
  const res = await fetch('http://localhost:3000/api/v1/auth/verify-phone', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phoneNumber, otp })
  });
  return res.json();
};
```

---

**Base URL:** `http://localhost:3000/api/v1`  
**All endpoints require:** `Content-Type: application/json` header

