# Divine Tarot - AI-Powered Spiritual Guidance Platform

A production-ready Next.js 14 application for spiritual guidance services, featuring AI-powered tarot readings, live reader sessions, and a spiritual products store.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** ShadCN UI
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **Theme:** Dark/Light mode with mystical purple/gold theme

## Project Structure

```
divine-tarot/
├── app/
│   ├── (auth)/           # Authentication routes
│   ├── (dashboard)/      # User dashboard routes
│   ├── (public)/         # Public routes
│   ├── api/              # API routes
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/
│   ├── ui/               # ShadCN UI components
│   ├── navbar.tsx        # Navigation bar
│   ├── footer.tsx        # Footer
│   └── theme-provider.tsx # Theme provider
├── lib/
│   ├── supabase/         # Supabase clients
│   ├── config.ts         # App configuration
│   └── utils.ts          # Utility functions
├── hooks/                # Custom React hooks
├── types/                # TypeScript types
├── services/             # API services
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
├── components.json       # ShadCN UI configuration
├── middleware.ts          # Next.js middleware
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository:**
   ```bash
   cd divine-tarot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Features

### Core Features
- **User Authentication** - Email/phone signup with OTP verification
- **Reader Profiles** - Browse and filter spiritual readers
- **Live Sessions** - Real-time chat and call sessions
- **AI Guidance** - AI-powered spiritual guidance
- **Wallet System** - Recharge and manage wallet balance
- **Booking System** - Schedule sessions with readers
- **Reviews & Ratings** - Rate and review readers
- **Ecommerce Store** - Shop spiritual products
- **Blog** - Spiritual content and articles

### UI/UX
- **Dark/Light Theme** - Mystical purple and gold theme
- **Responsive Design** - Mobile-first approach
- **Modern Components** - ShadCN UI component library
- **Smooth Animations** - Tailwind CSS animations

### Technical
- **TypeScript** - Type-safe development
- **Supabase** - Backend as a Service
- **Server-Side Rendering** - Next.js App Router
- **API Routes** - RESTful API endpoints
- **Middleware** - Authentication and route protection

## Configuration

### Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings > API
3. Add them to your `.env.local` file

### Theme Customization

The theme is configured in `tailwind.config.js` with:
- Primary color: Purple (#6B46C1)
- Secondary color: Gold (#D69E2E)
- Dark mode support
- Custom animations

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support, email support@divinetarot.com or join our Discord community.
