# Divine Tarot - AI-Powered Spiritual Guidance Platform

A production-ready Next.js 14 application for an AI-powered Tarot platform with live readings, spiritual store, and personalized guidance.

## 🚀 Features

- **AI Tarot Guide**: Get instant spiritual guidance powered by AI
- **Live Readings**: Connect with certified tarot readers for personalized sessions
- **Spiritual Store**: Browse tarot decks, crystals, and spiritual items
- **User Dashboard**: Manage bookings, wallet, sessions, and preferences
- **Dark/Light Theme**: Mystical theme with beautiful UI
- **Responsive Design**: Works seamlessly on all devices
- **Authentication**: Secure user authentication with Supabase
- **Payment Integration**: Razorpay and PayPal support

## 📁 Project Structure

```
divine-tarot/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── register/
│   │   └── verify-otp/
│   ├── (dashboard)/
│   │   ├── overview/
│   │   ├── profile/
│   │   ├── wallet/
│   │   ├── sessions/
│   │   ├── bookings/
│   │   ├── favorites/
│   │   ├── orders/
│   │   └── settings/
│   ├── (public)/
│   │   ├── about/
│   │   ├── ai-guide/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── store/
│   │   └── tarot/
│   ├── api/
│   │   └── v1/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── avatar.tsx
│   │   ├── button.tsx
│   │   └── dropdown-menu.tsx
│   ├── footer.tsx
│   ├── navbar.tsx
│   └── theme-provider.tsx
├── hooks/
│   └── useAuth.ts
├── lib/
│   ├── config.ts
│   ├── utils.ts
│   └── supabase/
│       ├── client.ts
│       ├── middleware.ts
│       └── server.ts
├── services/
├── types/
│   └── index.ts
├── .env.example
├── middleware.ts
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Payments**: Razorpay, PayPal
- **AI**: OpenAI API
- **Theme**: next-themes

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/divine-tarot.git
cd divine-tarot
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment Variables

Copy the example environment file and fill in your credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your credentials:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Divine Tarot

# AI Configuration (OpenAI)
OPENAI_API_KEY=your_openai_api_key

# Payment Gateways
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret

# Email (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password

# Redis (Optional - for caching)
REDIS_URL=your_redis_url

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=your_posthog_host
```

### 4. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your project URL and anon key
3. Go to Authentication > Providers to enable Email auth
4. (Optional) Set up Google and GitHub OAuth providers

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 Theme Configuration

The app supports dark and light themes with a mystical color palette:

- **Primary**: Purple (#6b21a8)
- **Secondary**: Deep purple (#1e1b4b)
- **Accent**: Gold (#d4af37)
- **Background**: Dark/Light modes

Theme can be toggled in the navbar.

## 🔐 Authentication

The app uses Supabase for authentication with the following features:

- Email/Password authentication
- Google OAuth
- GitHub OAuth
- OTP verification
- Password reset
- Session management

## 💳 Payment Integration

### Razorpay

1. Create a Razorpay account at [razorpay.com](https://razorpay.com)
2. Get your Key ID and Key Secret from the dashboard
3. Add them to `.env.local`

### PayPal

1. Create a PayPal Developer account at [developer.paypal.com](https://developer.paypal.com)
2. Create a new app to get Client ID and Secret
3. Add them to `.env.local`

## 🤖 AI Integration

The app uses OpenAI for the AI Tarot Guide feature:

1. Get your API key from [platform.openai.com](https://platform.openai.com)
2. Add it to `.env.local` as `OPENAI_API_KEY`

## 📱 Responsive Design

The app is fully responsive with:

- Mobile-first approach
- Responsive navigation with hamburger menu
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

## 🎯 Key Pages

### Public Pages
- **Home** (`/`) - Landing page with features overview
- **Tarot** (`/tarot`) - Browse tarot reading services
- **AI Guide** (`/ai-guide`) - AI-powered tarot guidance
- **Store** (`/store`) - Spiritual products shop
- **Blog** (`/blog`) - Articles and guides
- **About** (`/about`) - About the platform
- **Contact** (`/contact`) - Contact form

### Auth Pages
- **Login** (`/login`) - User login
- **Register** (`/register`) - User registration
- **Verify OTP** (`/verify-otp`) - Email verification

### Dashboard Pages
- **Overview** (`/overview`) - Dashboard home with stats
- **Profile** (`/profile`) - User profile management
- **Wallet** (`/wallet`) - Funds and transactions
- **Sessions** (`/sessions`) - Live reading sessions
- **Bookings** (`/bookings`) - Reading bookings
- **Favorites** (`/favorites`) - Favorite readers
- **Orders** (`/orders`) - Product orders
- **Settings** (`/settings`) - Account settings

## 🔧 Configuration

### Tailwind CSS

Custom configuration in `tailwind.config.js`:

- Custom colors (mystical, tarot)
- Custom animations (float, pulse-glow)
- Custom fonts (Playfair Display, Inter)
- Dark mode support

### Next.js

Configuration in `next.config.js`:

- Image optimization
- React strict mode
- Custom headers

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | No |
| `NEXT_PUBLIC_APP_URL` | Application URL | Yes |
| `NEXT_PUBLIC_APP_NAME` | Application name | Yes |
| `OPENAI_API_KEY` | OpenAI API key | No |
| `RAZORPAY_KEY_ID` | Razorpay key ID | No |
| `RAZORPAY_KEY_SECRET` | Razorpay key secret | No |
| `PAYPAL_CLIENT_ID` | PayPal client ID | No |
| `PAYPAL_CLIENT_SECRET` | PayPal client secret | No |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For support, email support@divinetarot.com or join our Discord community.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Supabase](https://supabase.com/)
- [OpenAI](https://openai.com/)

---

Made with ❤️ by the Sitelytc Digital Media Pvt. Ltd.
