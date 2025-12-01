# Quick Start Guide

## 1. Install Dependencies

```bash
npm install
```

## 2. Configure Environment

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
```

**Note:** Replace the Stripe key with your actual publishable key from Stripe dashboard.

## 3. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3001` (or the next available port).

## 4. Access the App

- English: `http://localhost:3001/en/menu`
- Arabic: `http://localhost:3001/ar/menu`

## Features to Test

1. **Menu Browsing**: Browse products and filter by category
2. **Cart**: Add items to cart, update quantities
3. **Checkout**: 
   - Select order type (Delivery/Pickup)
   - Schedule date and time
   - Choose payment method
4. **Authentication**: Login with phone number and OTP
5. **Payment**: Test Stripe payment (requires valid Stripe keys)
6. **Orders**: View order history and track status

## Backend Requirements

Make sure your backend API is running and accessible at the configured `NEXT_PUBLIC_API_URL`.

The backend should implement all endpoints as documented in `API_DOCUMENTATION.md`.

## Troubleshooting

### Port Already in Use
If port 3001 is in use, Next.js will automatically use the next available port.

### API Connection Issues
- Verify the backend is running
- Check `NEXT_PUBLIC_API_URL` in `.env.local`
- Check browser console for CORS errors

### Stripe Payment Issues
- Verify `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set correctly
- Use test keys from Stripe dashboard
- Check Stripe logs for payment intent creation

### OTP Not Working
- Verify Twilio is configured on the backend
- Check backend logs for OTP sending errors
- Phone number should be in E.164 format (e.g., +1234567890)

