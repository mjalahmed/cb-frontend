# 🍫 Chocobar Frontend

A beautiful, modern Next.js frontend for the Chocobar ordering system with full Arabic and English support.

## Features

- ✅ **Internationalization**: Full support for Arabic (RTL) and English (LTR)
- ✅ **Mobile-First Design**: Fully responsive and optimized for mobile devices
- ✅ **Menu Browsing**: Browse products by category without login
- ✅ **Shopping Cart**: Local storage-based cart management
- ✅ **OTP Authentication**: Phone number-based login with OTP verification
- ✅ **Order Management**: Create orders with delivery/pickup options
- ✅ **Payment Integration**: Stripe payment gateway integration
- ✅ **Order Tracking**: Real-time order status updates
- ✅ **Beautiful UI**: Modern, clean design with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Internationalization**: next-intl
- **Payment**: Stripe
- **HTTP Client**: Axios
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Backend API running (see API_DOCUMENTATION.md)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3001](http://localhost:3001) in your browser.

## Project Structure

```
cb-frontend/
├── app/
│   └── [lang]/              # Language-based routing
│       ├── menu/            # Menu page
│       ├── cart/             # Shopping cart
│       ├── checkout/         # Checkout & payment
│       ├── orders/          # Order tracking
│       └── layout.tsx       # Root layout
├── components/               # Reusable components
│   ├── Navbar.tsx
│   └── OTPLoginModal.tsx
├── i18n/                     # Internationalization
│   ├── messages/
│   │   ├── en.json
│   │   └── ar.json
│   ├── routing.ts
│   └── request.ts
├── lib/                      # Utilities
│   ├── api.ts               # Axios instance
│   └── api-client.ts        # API functions
├── store/                   # Zustand stores
│   ├── auth-store.ts
│   └── cart-store.ts
└── types/                   # TypeScript types
    └── index.ts
```

## Routes

- `/[lang]/menu` - Browse menu items
- `/[lang]/cart` - Shopping cart
- `/[lang]/checkout` - Checkout and payment
- `/[lang]/orders` - View order history

Where `[lang]` is either `en` or `ar`.

## Features in Detail

### Internationalization

The app supports both English and Arabic with automatic RTL layout for Arabic. Language can be switched from the navigation bar.

### Shopping Cart

- Items are stored in browser local storage
- Cart persists across page refreshes
- Add/remove/update quantities
- Real-time total calculation

### Authentication

- OTP-based login using phone number
- JWT token stored in localStorage
- Automatic token injection in API requests
- Protected routes for authenticated users

### Order Flow

1. Browse menu and add items to cart
2. View cart and proceed to checkout
3. Select order type (Delivery/Pickup)
4. Schedule date and time
5. Choose payment method (Cash/Card)
6. Login if not authenticated
7. Complete payment (if card)
8. Track order status

### Payment

- Stripe integration for card payments
- Cash on delivery/pickup option
- Payment intent creation
- Secure payment processing

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `http://localhost:3000/api/v1` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | Required for card payments |

## Building for Production

```bash
npm run build
npm start
```

## Notes

- The backend API should be running and accessible at the configured URL
- Stripe keys are required for card payment functionality
- OTP functionality requires Twilio configuration on the backend
- All API endpoints follow the structure defined in API_DOCUMENTATION.md

## License

MIT

