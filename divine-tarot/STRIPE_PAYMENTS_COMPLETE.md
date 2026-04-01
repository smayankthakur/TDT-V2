# Divine Tarot - Stripe Payments Complete! 💳✨

## ✅ Stripe Payment Integration

A complete Stripe payment system with subscription management, webhooks, and API protection for free/paid users.

## 🎯 Features Implemented

### ✅ Subscription Plans
- [x] **Free Plan** - 3 readings/month
- [x] **Pro Plan** - $9.99/month, unlimited readings
- [x] **Premium Plan** - $19.99/month, unlimited + extras

### ✅ Payment Features
- [x] Stripe checkout integration
- [x] Subscription management
- [x] Webhook handling
- [x] Payment recording
- [x] Customer portal

### ✅ API Protection
- [x] Free user limit enforcement
- [x] Subscription status checking
- [x] Reading count tracking
- [x] Upgrade prompts

### ✅ UI Features
- [x] Upgrade page with pricing
- [x] Current plan display
- [x] Usage statistics
- [x] FAQ section
- [x] Responsive design

## 📁 Files Created/Modified

### Stripe Configuration ([`lib/payments/stripe.ts`](lib/payments/stripe.ts))
- Stripe client initialization
- Plan definitions (Free, Pro, Premium)
- Plan lookup functions
- Price ID configuration

### Webhook Handler ([`app/api/v1/webhooks/stripe/route.ts`](app/api/v1/webhooks/stripe/route.ts))
- Stripe webhook verification
- Event handling:
  - `checkout.session.completed`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`
  - `invoice.payment_succeeded`
  - `invoice.payment_failed`
- Database updates

### Subscription API ([`app/api/v1/subscriptions/route.ts`](app/api/v1/subscriptions/route.ts))
- GET: Fetch subscription details
- POST: Create checkout session
- User authentication
- Plan validation

### Enhanced Tarot API ([`app/api/v1/tarot/draw/route.ts`](app/api/v1/tarot/draw/route.ts))
- Subscription checking
- Reading limit enforcement
- Usage tracking
- Error handling for limits

### Upgrade Page ([`app/(public)/upgrade/page.tsx`](app/(public)/upgrade/page.tsx))
- Pricing cards
- Current plan display
- Usage statistics
- Checkout flow
- FAQ section

### Updated Config ([`lib/config.ts`](lib/config.ts))
- Stripe configuration
- Environment variables

## 💳 Subscription Plans

### Free Plan
- **Price**: $0/month
- **Readings**: 3 per month
- **Features**:
  - Basic tarot spreads
  - Standard interpretations
  - Email support

### Pro Plan
- **Price**: $9.99/month
- **Readings**: Unlimited
- **Features**:
  - All tarot spreads
  - AI-powered interpretations
  - Priority support
  - Reading history
  - Personalized insights

### Premium Plan
- **Price**: $19.99/month
- **Readings**: Unlimited
- **Features**:
  - Everything in Pro
  - Live reader sessions
  - Exclusive spreads
  - Advanced analytics
  - Custom card decks
  - Dedicated support

## 🔧 Technical Implementation

### Stripe Integration
```typescript
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
})
```

### Checkout Session Creation
```typescript
const session = await stripe.checkout.sessions.create({
  customer: customerId,
  payment_method_types: ['card'],
  line_items: [
    {
      price: plan.priceId,
      quantity: 1,
    },
  ],
  mode: 'subscription',
  success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
  cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/upgrade?canceled=true`,
  metadata: {
    userId: user.id,
    planId: planId,
  },
})
```

### Webhook Event Handling
```typescript
switch (event.type) {
  case 'checkout.session.completed':
    // Handle successful checkout
    break
  case 'customer.subscription.updated':
    // Handle subscription update
    break
  case 'customer.subscription.deleted':
    // Handle subscription cancellation
    break
  case 'invoice.payment_succeeded':
    // Handle successful payment
    break
  case 'invoice.payment_failed':
    // Handle failed payment
    break
}
```

### API Protection
```typescript
// Check user subscription and reading limits
const { data: subscription } = await supabase
  .from('user_subscriptions')
  .select('plan_id, status')
  .eq('user_id', user.id)
  .single()

const currentPlan = subscription?.plan_id || 'free'

// Get user's reading count for current month
const { count: readingsThisMonth } = await supabase
  .from('readings')
  .select('*', { count: 'exact', head: true })
  .eq('user_id', user.id)
  .gte('created_at', startOfMonth.toISOString())

// Check if user has reached free limit
if (currentPlan === 'free' && (readingsThisMonth || 0) >= 3) {
  return NextResponse.json(
    { 
      error: 'Reading limit reached',
      message: 'You have reached your free reading limit. Upgrade to Pro for unlimited readings.',
      currentPlan,
      readingsThisMonth: readingsThisMonth || 0,
      limit: 3,
    },
    { status: 403 }
  )
}
```

## 📝 API Usage

### Get Subscription Details
```bash
GET /api/v1/subscriptions
```

### Response
```json
{
  "success": true,
  "data": {
    "subscription": {
      "plan_id": "free",
      "status": "active"
    },
    "currentPlan": {
      "id": "free",
      "name": "Free",
      "price": 0,
      "readingsPerMonth": 3
    },
    "readingsThisMonth": 2,
    "hasReachedLimit": false,
    "availablePlans": [...]
  }
}
```

### Create Checkout Session
```bash
POST /api/v1/subscriptions

{
  "planId": "pro"
}
```

### Response
```json
{
  "success": true,
  "data": {
    "sessionId": "cs_xxx",
    "url": "https://checkout.stripe.com/..."
  }
}
```

### Draw Cards (with limit check)
```bash
POST /api/v1/tarot/draw

{
  "question": "What should I focus on?",
  "spreadId": "three-card"
}
```

### Error Response (limit reached)
```json
{
  "error": "Reading limit reached",
  "message": "You have reached your free reading limit. Upgrade to Pro for unlimited readings.",
  "currentPlan": "free",
  "readingsThisMonth": 3,
  "limit": 3
}
```

## 🎨 UI Features

### Upgrade Page
- **Pricing Cards**: Visual comparison of plans
- **Current Plan**: Highlighted current subscription
- **Usage Stats**: Readings used this month
- **Popular Badge**: Pro plan highlighted
- **Checkout Button**: Direct to Stripe checkout
- **FAQ Section**: Common questions answered

### Responsive Design
- **Desktop**: 3-column pricing grid
- **Tablet**: 2-column pricing grid
- **Mobile**: Single column pricing

## 🔐 Security

### Webhook Security
- Stripe signature verification
- Event type validation
- Error handling

### API Security
- User authentication required
- Subscription status checking
- Reading limit enforcement
- Input validation

### Payment Security
- Stripe handles all payment data
- PCI compliance via Stripe
- Secure checkout sessions

## 📊 Database Schema

### user_subscriptions Table
```sql
CREATE TABLE user_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_customer_id VARCHAR(255),
  stripe_subscription_id VARCHAR(255),
  plan_id VARCHAR(50) DEFAULT 'free',
  status VARCHAR(50) DEFAULT 'active',
  current_period_start TIMESTAMP WITH TIME ZONE,
  current_period_end TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### payments Table
```sql
CREATE TABLE payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_invoice_id VARCHAR(255),
  amount INTEGER NOT NULL,
  currency VARCHAR(10) DEFAULT 'usd',
  status VARCHAR(50) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🚀 Setup Instructions

### 1. Create Stripe Account
- Go to [stripe.com](https://stripe.com)
- Create account
- Get API keys

### 2. Create Products in Stripe
- Go to Products in Stripe dashboard
- Create Pro product ($9.99/month)
- Create Premium product ($19.99/month)
- Copy price IDs

### 3. Set Environment Variables
```env
STRIPE_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
STRIPE_PRO_PRICE_ID=price_xxx
STRIPE_PREMIUM_PRICE_ID=price_xxx
```

### 4. Set Up Webhook
- Go to Stripe dashboard > Webhooks
- Add endpoint: `https://yourdomain.com/api/v1/webhooks/stripe`
- Select events:
  - `checkout.session.completed`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`
  - `invoice.payment_succeeded`
  - `invoice.payment_failed`
- Copy webhook secret

### 5. Run Database Migration
```sql
-- Execute database schema in Supabase SQL editor
```

## 🎯 User Flow

### Free User Flow
1. User signs up (free plan)
2. User draws 3 cards (1st reading)
3. User draws 3 cards (2nd reading)
4. User draws 3 cards (3rd reading)
5. User tries to draw again → **Limit reached**
6. User sees upgrade prompt
7. User clicks "Upgrade to Pro"
8. User redirected to Stripe checkout
9. User completes payment
10. User has unlimited access

### Paid User Flow
1. User signs up (free plan)
2. User upgrades to Pro
3. User has unlimited readings
4. User can cancel anytime
5. User continues until period ends

## 📚 Documentation

- [`lib/payments/stripe.ts`](lib/payments/stripe.ts) - Stripe configuration
- [`app/api/v1/webhooks/stripe/route.ts`](app/api/v1/webhooks/stripe/route.ts) - Webhook handler
- [`app/api/v1/subscriptions/route.ts`](app/api/v1/subscriptions/route.ts) - Subscription API
- [`app/api/v1/tarot/draw/route.ts`](app/api/v1/tarot/draw/route.ts) - Protected tarot API
- [`app/(public)/upgrade/page.tsx`](app/(public)/upgrade/page.tsx) - Upgrade page

## 🚀 Next Steps

To activate Stripe payments:

1. **Create Stripe account** and get API keys
2. **Create products** in Stripe dashboard
3. **Set environment variables** in `.env.local`
4. **Set up webhook** in Stripe dashboard
5. **Run database migration** for subscriptions table
6. **Test the flow**:
   - Sign up as free user
   - Draw 3 readings
   - Try to draw 4th (should be blocked)
   - Upgrade to Pro
   - Verify unlimited access

---

**Your Stripe Payment system is complete and ready to use! 💳✨**
